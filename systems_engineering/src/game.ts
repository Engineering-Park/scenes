import { addVideo } from "@engineeringpark/components";
import { createGltfShape, createPlane } from "@engineeringpark/entities";
import createSign from "./createSign";

const scene = new Entity("scene_systems_engineering");
engine.addEntity(scene);

const floor = createPlane({
  texture: "runway_type2_11.png",
  name: "floor",
  position: new Vector3(8, 0, 8),
  scale: new Vector3(16, 16, 16)
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
