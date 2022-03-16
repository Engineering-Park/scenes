import { addSound } from "@engineeringpark/components";
import {
  addAttribution,
  createGltfShape,
  createPlane
} from "@engineeringpark/entities";

const scene = new Entity("scene_railway");
engine.addEntity(scene);

const floor = createPlane({
  texture: "runway_type2_11.png",
  name: "floor",
  position: new Vector3(8, 0, 8),
  scale: new Vector3(16, 16, 16)
});
floor.setParent(scene);

const train = createGltfShape({
  model: "train.glb",
  name: "train",
  position: new Vector3(8, 0.1, 8),
  scale: new Vector3(0.25, 0.25, 0.25)
});
train.setParent(scene);

addSound({ entity: train, sound: "train.mp3" });

addAttribution({
  entity: train,
  text: "CC Attribution: Spark",
  position: new Vector3(0, 2, 0),
  rotation: Quaternion.Euler(0, -90, 0)
});
