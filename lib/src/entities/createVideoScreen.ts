import * as utils from "@dcl/ecs-scene-utils";

export interface VideoScreen {
  id: string | number;
  x: number;
  y: number;
  z: number;
  orientation?: number;
  height: number;
  width: number;
  media: string;
  loop?: boolean;
}

export default function createVideoScreen({
  id,
  x,
  y,
  z,
  orientation = 0,
  height,
  width,
  media,
  loop = false
}: VideoScreen): Entity {
  const screen = new Entity(`video_surface_${id}`);
  const entityTransform = new Transform({
    position: new Vector3(8 - x, y, 8 + z + 0.001),
    rotation: Quaternion.Euler(0, 180 - orientation, 0),
    scale: new Vector3(width, height, 1)
  });
  screen.addComponentOrReplace(entityTransform);

  const planeShape = new PlaneShape();
  screen.addComponent(planeShape);

  const material = new BasicMaterial();
  const videoClip = new VideoClip(media);
  const videoTexture = new VideoTexture(videoClip);
  videoTexture.loop = loop;
  material.texture = videoTexture;
  screen.addComponent(material);
  screen.addComponent(
    new OnPointerDown(() => {
      videoTexture.playing = !videoTexture.playing;
    })
  );
  if (loop) videoTexture.play();

  return screen;
}
