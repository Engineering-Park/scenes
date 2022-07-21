import createGltfShape from "./createGltfShape";

type Parcel = {
  coordinates: string;
  material: BasicMaterial;
  orientation?: number;
};

const threshold06Texture = new Texture(`images/runway_type2_01.png`);
const threshold06Material = new BasicMaterial();
threshold06Material.texture = threshold06Texture;

const threshold24Texture = new Texture(`images/runway_type2_04.png`);
const threshold24Material = new BasicMaterial();
threshold24Material.texture = threshold24Texture;

const touchdownTexture1 = new Texture(`images/runway_type2_07.png`);
const touchDownMaterial1 = new BasicMaterial();
touchDownMaterial1.texture = touchdownTexture1;

const touchdownTexture2 = new Texture(`images/runway_type2_08.png`);
const touchDownMaterial2 = new BasicMaterial();
touchDownMaterial2.texture = touchdownTexture2;

const touchdownTexture3 = new Texture(`images/runway_type2_09.png`);
const touchDownMaterial3 = new BasicMaterial();
touchDownMaterial3.texture = touchdownTexture3;

const runwayTexture = new Texture(`images/runway_type2_10.png`);
const runwayMaterial = new BasicMaterial();
runwayMaterial.texture = runwayTexture;

const parcels: Parcel[] = [
  { coordinates: "68,49", material: threshold24Material, orientation: 180 },
  { coordinates: "68,48", material: touchDownMaterial1, orientation: 180 },
  { coordinates: "68,47", material: touchDownMaterial2, orientation: 180 },
  { coordinates: "68,46", material: touchDownMaterial3, orientation: 180 },
  { coordinates: "68,45", material: runwayMaterial },
  { coordinates: "68,44", material: runwayMaterial },
  { coordinates: "68,43", material: runwayMaterial },
  { coordinates: "68,42", material: runwayMaterial },
  { coordinates: "68,41", material: touchDownMaterial3 },
  { coordinates: "68,40", material: touchDownMaterial2 },
  { coordinates: "68,39", material: touchDownMaterial1 },
  { coordinates: "68,38", material: threshold06Material }
];

const scene = new Entity("scene_wright_way");
engine.addEntity(scene);

const createRoadTransform = (index: number, orientation = 0) =>
  new Transform({
    position: new Vector3(8, 0, 8 - 16 * index),
    rotation: Quaternion.Euler(90, orientation + 90, 0),
    scale: new Vector3(16, 16, 16)
  });

parcels.forEach(({ coordinates, material, orientation }, index) => {
  const tile = new Entity(`road_tile_${coordinates}`);
  tile.addComponentOrReplace(createRoadTransform(index, orientation));
  const planeShape = new PlaneShape();
  tile.addComponent(planeShape);
  tile.addComponent(material);
  tile.setParent(scene);
});

// District name
const textEntity = new Entity("district-name");
const textTransform = new Transform({
  position: new Vector3(8, 8, 8),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(15, 15, 1)
});
textEntity.addComponentOrReplace(textTransform);
const textShape = new TextShape("Engineering Park");
textShape.fontSize = 1;
textShape.color = Color3.White();
textEntity.addComponent(textShape);
textEntity.setParent(scene);

// International space station
const iss = createGltfShape({
  model: "international-space-station.glb",
  name: "International Space Station",
  position: new Vector3(8, 50, 8 - 16 * 6),
  rotation: Quaternion.Euler(-15, 30, -20),
  scale: new Vector3(0.25, 0.25, 0.25)
});
iss.setParent(scene);
