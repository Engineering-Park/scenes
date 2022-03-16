import { createGltfShape } from "@engineeringpark/entities";

const scene = new Entity("scene_bicycle");
engine.addEntity(scene);

const floor = createGltfShape({
  model: "FloorBasePebbles_01/FloorBasePebbles_01.glb",
  name: "floor",
  position: new Vector3(8, 0, 8)
});
floor.setParent(scene);

const bench = createGltfShape({
  model: "Bench_01/Bench_01.glb",
  name: "bench",
  position: new Vector3(8, 0, 8)
});
bench.setParent(scene);

const bicycle = createGltfShape({
  model: "Bicycle_02/Bicycle_02.glb",
  name: "bicycle",
  position: new Vector3(8, 0, 7.5),
  rotation: new Quaternion(0.1, 0, 0, 1)
});
bicycle.setParent(scene);
