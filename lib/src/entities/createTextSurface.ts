import setUVs from "src/utils/setUVs";

export interface TextSurface {
  id: string | number;
  x: number;
  y: number;
  z: number;
  orientation?: number;
  height: number;
  width: number;
  title: string;
  caption?: string;
  textOffset?: number;
  color?: Color3;
}

export default function createTextSurface({
  id,
  x,
  y,
  z,
  orientation = 0,
  height,
  width,
  title,
  caption,
  textOffset,
  color
}: TextSurface): Entity {
  const plane = new Entity(`text_surface_${id}`);
  const entityTransform = new Transform({
    position: new Vector3(8 - x + 0.001, y, 8 + z + 0.001),
    rotation: Quaternion.Euler(0, orientation, 0),
    scale: new Vector3(width, height, 1)
  });
  plane.addComponentOrReplace(entityTransform);

  textOffset = textOffset !== undefined ? textOffset : 0;

  if (title) {
    const titleEntity = new Entity();
    const titleTextTransform = new Transform({
      position: new Vector3(0, height / 2 + textOffset, 0)
    });
    titleEntity.addComponentOrReplace(titleTextTransform);
    const titleText = new TextShape(title);
    titleText.fontSize = 1;
    if (color) titleText.color = color;
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
