import * as utils from "@dcl/ecs-scene-utils";

export interface VideoScreen {
  id: string | number;
  position: Vector3;
  orientation?: number;
  height: number;
  width: number;
  media: string;
  title?: string;
  titleOffset?: number;
  loop?: boolean;
  playButton?: Vector3;
  playButtonSize?: number;
}

export default function createVideoScreen({
  id,
  position,
  orientation = 0,
  height,
  width,
  media,
  title,
  titleOffset = 0,
  loop = false,
  playButton,
  playButtonSize
}: VideoScreen): Entity {
  const screen = new Entity(`video_surface_${id}`);
  const entityTransform = new Transform({
    position: position,
    rotation: Quaternion.Euler(0, 180 + orientation, 0),
    scale: new Vector3(width, height, 1)
  });
  screen.addComponentOrReplace(entityTransform);

  const planeShape = new PlaneShape();
  screen.addComponent(planeShape);

  const material = new BasicMaterial();
  const videoClip = new VideoClip(media);
  const videoTexture = new VideoTexture(videoClip);
  videoTexture.loop = true;
  material.texture = videoTexture;
  screen.addComponent(material);

  if (title) {
    const titleEntity = new Entity();
    const titleTextTransform = new Transform({
      position: new Vector3(0, height / 2 + titleOffset, 0),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(1 / width, 1 / height, 1)
    });
    titleEntity.addComponentOrReplace(titleTextTransform);
    const titleText = new TextShape(title);
    titleText.fontSize = 1;
    titleEntity.addComponent(titleText);
    titleEntity.setParent(screen);
  }

  const handlePointerDown = new OnPointerDown(() => {
    videoTexture.playing = !videoTexture.playing;
  });

  if (!playButton || !playButtonSize) {
    // const testBox = new Entity();
    // const planeTransform = new Transform({
    //   position: new Vector3(0, 0, 2),
    //   scale: new Vector3(4, 1, 4)
    // });
    // testBox.addComponentOrReplace(planeTransform);
    // const boxShape = new BoxShape();
    // boxShape.withCollisions = false;
    // testBox.addComponent(boxShape);
    // testBox.setParent(screen);

    screen.addComponent(
      new utils.TriggerComponent(
        new utils.TriggerBoxShape(
          orientation === 180 ? new Vector3(4, 2, 4) : new Vector3(4, 2, 4),
          orientation === 180 ? new Vector3(0, 0, 2) : new Vector3(-2, 0, 0)
        ),
        {
          onCameraEnter: () => videoTexture.play(),
          onCameraExit: () => videoTexture.pause()
        }
      )
    );

    screen.addComponent(handlePointerDown);
    return screen;
  }

  const button = new Entity(`play_button_${id}`);
  const buttonTransform = new Transform({
    position: playButton,
    scale: new Vector3(playButtonSize / width, playButtonSize / height, 1)
  });
  button.addComponentOrReplace(buttonTransform);

  const buttonShape = new PlaneShape();
  button.addComponent(buttonShape);

  const transparentMaterial = new Material();
  transparentMaterial.albedoColor = new Color4(1, 1, 1, 0);
  button.addComponent(transparentMaterial);

  button.addComponent(handlePointerDown);
  button.setParent(screen);

  return screen;
}
