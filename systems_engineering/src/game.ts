import { addVideo } from "@engineeringpark/components";
import { createGltfShape } from "@engineeringpark/entities";
import createSign from "./createSign";

const scene = new Entity("scene_systems_engineering");
engine.addEntity(scene);

const floor = createGltfShape({
  model: "FloorBasePebbles_01/FloorBasePebbles_01.glb",
  name: "floor",
  position: new Vector3(8, 0, 8)
});
floor.setParent(scene);

createSign({
  position: new Vector2(8, 8)
}).setParent(scene);

addVideo({
  parent: scene,
  video: "Why.mp4",
  position: new Vector3(8, 3, 8),
  scale: new Vector3(3, (3 * 360) / 640, 1)
});
