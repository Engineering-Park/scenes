export interface Args {
  texture: string; // the relative path to the texture
  name?: string; // an optional name for the entity
  position?: Vector3; // the position relative to the parent
  rotation?: Quaternion; // the rotation relative to the parent
  scale?: Vector3; // the scale relative to the parent
}

export default function createPlane({
  texture,
  name,
  position = new Vector3(0, 0, 0),
  rotation = new Quaternion(1, 0, 0, 1),
  scale = new Vector3(1, 1, 1)
}: Args): Entity {
  const plane = new Entity(name);

  const entityTransform = new Transform({ position, rotation, scale });
  plane.addComponentOrReplace(entityTransform);

  const planeShape = new PlaneShape();
  plane.addComponent(planeShape);

  const material = new BasicMaterial();
  const materialTexture = new Texture(`images/${texture}`);
  material.texture = materialTexture;
  plane.addComponent(material);
  planeShape.uvs = setUVs(1, 1);

  return plane;
}

function setUVs(rows: number, cols: number) {
  return [
    // North side of unrortated plane
    0, //lower-left corner
    0,

    cols, //lower-right corner
    0,

    cols, //upper-right corner
    rows,

    0, //upper left-corner
    rows,

    // South side of unrortated plane
    cols, // lower-right corner
    0,

    0, // lower-left corner
    0,

    0, // upper-left corner
    rows,

    cols, // upper-right corner
    rows
  ];
}
