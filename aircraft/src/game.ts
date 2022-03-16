import { addSound } from "@engineeringpark/components";
import {
  addAttribution,
  createGltfShape,
  createPlane
} from "@engineeringpark/entities";
import { FlightSystem } from "@engineeringpark/systems";

const scene = new Entity("scene_aircraft");
engine.addEntity(scene);

const floor = createPlane({
  texture: "runway_type2_11.png",
  name: "floor",
  position: new Vector3(8, 0, 8),
  scale: new Vector3(16, 16, 16)
});
floor.setParent(scene);

const aircraft = createGltfShape({
  model: "airplane.glb",
  name: "airplane",
  position: new Vector3(8, 3.5, 8),
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
