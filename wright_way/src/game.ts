import setUVs from "./setUVs";

const parcels: string[] = [
  "68,49",
  "68,48",
  "68,47",
  "68,46",
  "68,45",
  "68,44",
  "68,43",
  "68,42",
  "68,41",
  "68,40",
  "68,39",
  "68,38"
];

const scene = new Entity("scene_wright_way");
engine.addEntity(scene);

const createRoadTransform = (index: number) =>
  new Transform({
    position: new Vector3(8, 0, 8 - 16 * index),
    rotation: Quaternion.Euler(90, 90, 0),
    scale: new Vector3(16, 16, 16)
  });

const roadTexture1 = new Texture(
  `images/stone_wall_seamless_texture_4671.jpg`,
  { wrap: 2 }
);
const roadMaterial1 = new Material();
roadMaterial1.albedoTexture = roadTexture1;

const roadTexture2 = new Texture(
  `images/stone_wall_seamless_texture_6631.jpg`,
  { wrap: 2 }
);
const roadMaterial2 = new Material();
roadMaterial2.albedoTexture = roadTexture2;

parcels.forEach((parcel, index) => {
  const tile = new Entity(`road_tile_${parcel}`);
  tile.addComponentOrReplace(createRoadTransform(index));
  const planeShape = new PlaneShape();
  planeShape.uvs = setUVs(2, 2);
  tile.addComponent(planeShape);

  if (index < 6) {
    tile.addComponent(roadMaterial1);
  } else {
    tile.addComponent(roadMaterial2);
  }
  tile.setParent(scene);
});
