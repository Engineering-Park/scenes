import setUVs from "src/utils/setUVs";

export interface MediaSurface {
  id: string | number;
  x: number;
  y: number;
  z: number;
  orientation?: number;
  height: number;
  width: number;
  mode: "image" | "video";
  media: string;
  title?: string;
  caption?: string;
  textOffset?: number;
  externalLink?: string;
}

export default function createMediaSurface({
  id,
  x,
  y,
  z,
  orientation = 0,
  height,
  width,
  mode,
  media,
  title,
  caption,
  textOffset,
  externalLink
}: MediaSurface): Entity {
  const plane = new Entity(`media_surface_${id}`);
  const entityTransform = new Transform({
    position: new Vector3(8 - x, y, 8 + z + 0.001),
    rotation: Quaternion.Euler(0, orientation, 0),
    scale: new Vector3(width, height, 1)
  });
  plane.addComponentOrReplace(entityTransform);

  const planeShape = new PlaneShape();
  plane.addComponent(planeShape);

  const material = new BasicMaterial();
  switch (mode) {
    case "image":
      planeShape.uvs = setUVs(1, 1);
      const imageTexture = new Texture(media);
      material.texture = imageTexture;
      break;
    case "video":
      const videoClip = new VideoClip(media);
      const videoTexture = new VideoTexture(videoClip);
      videoTexture.loop = true;
      videoTexture.play();
      material.texture = videoTexture;
      break;
  }
  plane.addComponent(material);

  if (externalLink) {
    plane.addComponent(
      new OnPointerDown(() => {
        openExternalURL(externalLink);
      })
    );
  }

  textOffset = textOffset !== undefined ? textOffset : 0;

  if (title) {
    const titleEntity = new Entity();
    const titleTextTransform = new Transform({
      position: new Vector3(0, height / 2 + textOffset, 0)
    });
    titleEntity.addComponentOrReplace(titleTextTransform);
    const titleText = new TextShape(title);
    titleText.fontSize = 1;
    titleEntity.addComponent(titleText);
    titleEntity.setParent(plane);
  }

  if (caption) {
    const captionEntitiy = new Entity();
    const captionTextTransform = new Transform({
      position: new Vector3(0, -height / 2 - textOffset, 0),
      scale: new Vector3(0.5, 0.5, 1)
    });
    captionEntitiy.addComponentOrReplace(captionTextTransform);
    const captionText = new TextShape(caption);
    captionText.fontSize = 1;
    captionEntitiy.addComponent(captionText);
    captionEntitiy.setParent(plane);
  }

  return plane;
}
