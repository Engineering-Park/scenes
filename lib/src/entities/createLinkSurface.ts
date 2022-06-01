export interface LinkSurface {
  id: string | number;
  x: number;
  y: number;
  z: number;
  orientation?: number;
  height: number;
  width: number;
  url: string;
}

export default function createLinkSurface({
  id,
  x,
  y,
  z,
  orientation = 0,
  height,
  width,
  url
}: LinkSurface): Entity {
  const plane = new Entity(`clickable_link_${id}`);
  const entityTransform = new Transform({
    position: new Vector3(8 - x, y, 8 + z + 0.005),
    rotation: Quaternion.Euler(0, orientation, 0),
    scale: new Vector3(width, height, 1)
  });
  plane.addComponentOrReplace(entityTransform);

  const planeShape = new PlaneShape();
  plane.addComponent(planeShape);

  plane.addComponent(
    new OnPointerDown(() => {
      openExternalURL(url);
    })
  );

  return plane;
}
