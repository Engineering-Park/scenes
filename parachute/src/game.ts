import { addSound } from "@engineeringpark/components";
import {
  addAttribution,
  createGltfShape,
  createPlane
} from "@engineeringpark/entities";
import { FlightSystem } from "@engineeringpark/systems";

const scene = new Entity("scene_parachute");
engine.addEntity(scene);

const floor = createPlane({
  texture: "runway_type2_11.png",
  name: "floor",
  position: new Vector3(8, 0, 8),
  scale: new Vector3(16, 16, 16)
});
floor.setParent(scene);

const parachute = createGltfShape({
  model: "parachute.glb",
  name: "Parachute",
  position: new Vector3(8, 1, 8),
  scale: new Vector3(0.25, 0.25, 0.25)
});
parachute.setParent(scene);

addAttribution({
  entity: parachute,
  text: "CC-BY: Poly by Google",
  position: new Vector3(0, 0, -2),
  rotation: Quaternion.Euler(0, -90, 0)
});

addSound({ entity: parachute, sound: "parachute.mp3" });

engine.addSystem(new FlightSystem(parachute, -0.5, 3));
