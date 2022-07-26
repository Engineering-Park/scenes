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
const attribution = createGltfShape({
  model: "Sign_Square.glb",
  name: "iss-attribution",
  position: new Vector3(15.5, 1, 8 - 16 * 6),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(2, 1, 1)
});
attribution.setParent(scene);
const attributionArrow = createGltfShape({
  model: "Sign_Arrow.glb",
  name: "attribution-arrow",
  position: new Vector3(-0.2, 2.5, 0),
  rotation: Quaternion.Euler(0, 0, -90),
  scale: new Vector3(2, 0.5, 1)
});
attributionArrow.setParent(attribution);
const attributionText = new Entity("attribution-text");
const attributionTextTransform = new Transform({
  position: new Vector3(0, 0.5, 0),
  scale: new Vector3(0.14, 0.25, 0.25)
});
attributionText.addComponentOrReplace(attributionTextTransform);
const attributionTextShape = new TextShape(
  "International Space Station\nby calebcram\nCC-BY"
);
attributionText.addComponent(attributionTextShape);
attributionText.setParent(attribution);

// Hyperlinks
const onPointerDown = new OnPointerDown(() => {
  openExternalURL("https://engineeringpark.org");
});
const createHyperlink = (name: string, position: Vector3) => {
  const link = createGltfShape({
    model: "hiper.glb",
    name,
    position,
    rotation: Quaternion.Euler(0, 90, 0)
  });
  link.addComponent(onPointerDown);
  link.setParent(scene);
};
createHyperlink("hyperlink-north-east", new Vector3(15.5, 1, 12));
createHyperlink("hyperlink-north-west", new Vector3(0.5, 1, 12));
createHyperlink("hyperlink-south-east", new Vector3(15.5, 1, 4 - 16 * 11));
createHyperlink("hyperlink-south-west", new Vector3(0.5, 1, 4 - 16 * 11));

// Road signs
const createRoadSign = (
  name: string,
  position: Vector3,
  orientation = 0,
  textOrientation = 0
) => {
  const sign = createGltfShape({
    model: "Sign_Arrow.glb",
    name,
    position,
    rotation: Quaternion.Euler(0, 90 + orientation, 0),
    scale: new Vector3(2, 1, 1)
  });
  sign.setParent(scene);

  const text = new Entity(name);
  const textTransform = new Transform({
    position: new Vector3(0.25, 0.39, 0),
    rotation: Quaternion.Euler(0, textOrientation, 0),
    scale: new Vector3(0.15, 0.25, 0.25)
  });
  text.addComponentOrReplace(textTransform);
  const textShape = new TextShape("Wright Way");
  text.addComponent(textShape);
  text.setParent(sign);
};
createRoadSign("road-sign-north-east", new Vector3(15.5, 1.5, 11.5), 180, 180);
createRoadSign("road-sign-north-west", new Vector3(0.5, 1.5, 11.5), 180);
createRoadSign(
  "road-sign-south-east",
  new Vector3(15.5, 1.5, 4.5 - 16 * 11),
  0
);
createRoadSign(
  "road-sign-south-west",
  new Vector3(0.5, 1.5, 4.5 - 16 * 11),
  0,
  180
);
