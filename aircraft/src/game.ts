import addSound from "./components/addSound";
import addAttribution from "./entities/addAttribution";
import createGltfShape from "./entities/createGltfShape";
import FlightSystem from "./systems/FlightSystem";

const scene = new Entity("scene_aircraft");
scene.addComponentOrReplace(
  new Transform({
    position: new Vector3(8, 0, 8),
    rotation: Quaternion.Euler(0, 0, 0)
  })
);
engine.addEntity(scene);

createGltfShape({
  model: "FloorBaseGrass_01/FloorBaseGrass_01.glb",
  name: "FloorBase",
  position: new Vector3(0, 0, 0)
}).setParent(scene);

const aircraft = createGltfShape({
  model: "airplane.glb",
  name: "Airplane",
  position: new Vector3(0, 1, 0),
  scale: new Vector3(0.25, 0.25, 0.25)
});
aircraft.setParent(scene);

addAttribution({
  entity: aircraft,
  text: "CC Attribution: MaX3Dd",
  position: new Vector3(0, 0, -2),
  rotation: Quaternion.Euler(0, -90, 0)
});

addSound({ entity: aircraft, sound: "aircraft.mp3" });

engine.addSystem(new FlightSystem(aircraft, 0.5, 3));
