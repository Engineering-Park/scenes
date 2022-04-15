import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";
import Script1 from "../6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item";
import Script2 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(16, 0, 0),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

const groundStoneBlocks = new Entity("groundStoneBlocks");
engine.addEntity(groundStoneBlocks);
groundStoneBlocks.setParent(_scene);
const transform2 = new Transform({
  position: new Vector3(1.6044859886169434, 0, 0.5833934545516968),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
groundStoneBlocks.addComponentOrReplace(transform2);
const gltfShape = new GLTFShape(
  "c706b0be-6d60-405a-a794-28b89f852500/Stone_Blocks_01/Stone_Blocks_01.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
groundStoneBlocks.addComponentOrReplace(gltfShape);

const groundStoneBlocks2 = new Entity("groundStoneBlocks2");
engine.addEntity(groundStoneBlocks2);
groundStoneBlocks2.setParent(_scene);
groundStoneBlocks2.addComponentOrReplace(gltfShape);
const transform3 = new Transform({
  position: new Vector3(4.495148181915283, 0, 0.5833934545516968),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
groundStoneBlocks2.addComponentOrReplace(transform3);

const groundStoneBlocks3 = new Entity("groundStoneBlocks3");
engine.addEntity(groundStoneBlocks3);
groundStoneBlocks3.setParent(_scene);
groundStoneBlocks3.addComponentOrReplace(gltfShape);
const transform4 = new Transform({
  position: new Vector3(7.254284381866455, 0, 0.5833932161331177),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
groundStoneBlocks3.addComponentOrReplace(transform4);

const groundStoneBlocks4 = new Entity("groundStoneBlocks4");
engine.addEntity(groundStoneBlocks4);
groundStoneBlocks4.setParent(_scene);
groundStoneBlocks4.addComponentOrReplace(gltfShape);
const transform5 = new Transform({
  position: new Vector3(10.094042778015137, 0, 0.583392858505249),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
groundStoneBlocks4.addComponentOrReplace(transform5);

const groundStoneBlocks5 = new Entity("groundStoneBlocks5");
engine.addEntity(groundStoneBlocks5);
groundStoneBlocks5.setParent(_scene);
groundStoneBlocks5.addComponentOrReplace(gltfShape);
const transform6 = new Transform({
  position: new Vector3(13.065600395202637, 0, 0.5833924412727356),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
groundStoneBlocks5.addComponentOrReplace(transform6);

const groundStoneBlocks6 = new Entity("groundStoneBlocks6");
engine.addEntity(groundStoneBlocks6);
groundStoneBlocks6.setParent(_scene);
groundStoneBlocks6.addComponentOrReplace(gltfShape);
const transform7 = new Transform({
  position: new Vector3(15.37332534790039, 0, 1.598728895187378),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
});
groundStoneBlocks6.addComponentOrReplace(transform7);

const groundStoneBlocks7 = new Entity("groundStoneBlocks7");
engine.addEntity(groundStoneBlocks7);
groundStoneBlocks7.setParent(_scene);
groundStoneBlocks7.addComponentOrReplace(gltfShape);
const transform8 = new Transform({
  position: new Vector3(15.37332534790039, 0, 4.610332489013672),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
});
groundStoneBlocks7.addComponentOrReplace(transform8);

const groundStoneBlocks8 = new Entity("groundStoneBlocks8");
engine.addEntity(groundStoneBlocks8);
groundStoneBlocks8.setParent(_scene);
groundStoneBlocks8.addComponentOrReplace(gltfShape);
const transform9 = new Transform({
  position: new Vector3(15.37332534790039, 0, 7.546056270599365),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
});
groundStoneBlocks8.addComponentOrReplace(transform9);

const groundStoneBlocks9 = new Entity("groundStoneBlocks9");
engine.addEntity(groundStoneBlocks9);
groundStoneBlocks9.setParent(_scene);
groundStoneBlocks9.addComponentOrReplace(gltfShape);
const transform10 = new Transform({
  position: new Vector3(15.37332534790039, 0, 10.42306900024414),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
});
groundStoneBlocks9.addComponentOrReplace(transform10);

const groundStoneBlocks10 = new Entity("groundStoneBlocks10");
engine.addEntity(groundStoneBlocks10);
groundStoneBlocks10.setParent(_scene);
groundStoneBlocks10.addComponentOrReplace(gltfShape);
const transform11 = new Transform({
  position: new Vector3(15.37332534790039, 0, 13.282610893249512),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks10.addComponentOrReplace(transform11);

const groundStoneBlocks11 = new Entity("groundStoneBlocks11");
engine.addEntity(groundStoneBlocks11);
groundStoneBlocks11.setParent(_scene);
groundStoneBlocks11.addComponentOrReplace(gltfShape);
const transform12 = new Transform({
  position: new Vector3(14.374711990356445, 0, 15.36699390411377),
  rotation: new Quaternion(
    -3.4061716849695866e-15,
    -1,
    1.1920927533992653e-7,
    0
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks11.addComponentOrReplace(transform12);

const groundStoneBlocks12 = new Entity("groundStoneBlocks12");
engine.addEntity(groundStoneBlocks12);
groundStoneBlocks12.setParent(_scene);
groundStoneBlocks12.addComponentOrReplace(gltfShape);
const transform13 = new Transform({
  position: new Vector3(11.476774215698242, 0, 15.36699390411377),
  rotation: new Quaternion(
    -3.4061716849695866e-15,
    -1,
    1.1920927533992653e-7,
    0
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks12.addComponentOrReplace(transform13);

const groundStoneBlocks13 = new Entity("groundStoneBlocks13");
engine.addEntity(groundStoneBlocks13);
groundStoneBlocks13.setParent(_scene);
groundStoneBlocks13.addComponentOrReplace(gltfShape);
const transform14 = new Transform({
  position: new Vector3(8.562268257141113, 0, 15.36699390411377),
  rotation: new Quaternion(
    -3.4061716849695866e-15,
    -1,
    1.1920927533992653e-7,
    0
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks13.addComponentOrReplace(transform14);

const groundStoneBlocks14 = new Entity("groundStoneBlocks14");
engine.addEntity(groundStoneBlocks14);
groundStoneBlocks14.setParent(_scene);
groundStoneBlocks14.addComponentOrReplace(gltfShape);
const transform15 = new Transform({
  position: new Vector3(5.642890453338623, 0, 15.36699390411377),
  rotation: new Quaternion(
    -3.4061716849695866e-15,
    -1,
    1.1920927533992653e-7,
    0
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks14.addComponentOrReplace(transform15);

const groundStoneBlocks15 = new Entity("groundStoneBlocks15");
engine.addEntity(groundStoneBlocks15);
groundStoneBlocks15.setParent(_scene);
groundStoneBlocks15.addComponentOrReplace(gltfShape);
const transform16 = new Transform({
  position: new Vector3(2.7491037845611572, 0, 15.36699390411377),
  rotation: new Quaternion(
    -3.4061716849695866e-15,
    -1,
    1.1920927533992653e-7,
    0
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks15.addComponentOrReplace(transform16);

const groundStoneBlocks16 = new Entity("groundStoneBlocks16");
engine.addEntity(groundStoneBlocks16);
groundStoneBlocks16.setParent(_scene);
groundStoneBlocks16.addComponentOrReplace(gltfShape);
const transform17 = new Transform({
  position: new Vector3(0.6205066442489624, 0, 14.380702018737793),
  rotation: new Quaternion(
    -2.408526962331052e-15,
    -0.7071067690849304,
    8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks16.addComponentOrReplace(transform17);

const groundStoneBlocks17 = new Entity("groundStoneBlocks17");
engine.addEntity(groundStoneBlocks17);
groundStoneBlocks17.setParent(_scene);
groundStoneBlocks17.addComponentOrReplace(gltfShape);
const transform18 = new Transform({
  position: new Vector3(0.6205066442489624, 0, 11.517038345336914),
  rotation: new Quaternion(
    -2.408526962331052e-15,
    -0.7071067690849304,
    8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks17.addComponentOrReplace(transform18);

const groundStoneBlocks18 = new Entity("groundStoneBlocks18");
engine.addEntity(groundStoneBlocks18);
groundStoneBlocks18.setParent(_scene);
groundStoneBlocks18.addComponentOrReplace(gltfShape);
const transform19 = new Transform({
  position: new Vector3(0.6205066442489624, 0, 8.640876770019531),
  rotation: new Quaternion(
    -2.408526962331052e-15,
    -0.7071067690849304,
    8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks18.addComponentOrReplace(transform19);

const groundStoneBlocks19 = new Entity("groundStoneBlocks19");
engine.addEntity(groundStoneBlocks19);
groundStoneBlocks19.setParent(_scene);
groundStoneBlocks19.addComponentOrReplace(gltfShape);
const transform20 = new Transform({
  position: new Vector3(0.6205066442489624, 0, 5.657814025878906),
  rotation: new Quaternion(
    -2.408526962331052e-15,
    -0.7071067690849304,
    8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks19.addComponentOrReplace(transform20);

const groundStoneBlocks20 = new Entity("groundStoneBlocks20");
engine.addEntity(groundStoneBlocks20);
groundStoneBlocks20.setParent(_scene);
groundStoneBlocks20.addComponentOrReplace(gltfShape);
const transform21 = new Transform({
  position: new Vector3(0.6205066442489624, 0, 2.7443976402282715),
  rotation: new Quaternion(
    -2.408526962331052e-15,
    -0.7071067690849304,
    8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
groundStoneBlocks20.addComponentOrReplace(transform21);

const imageScreen = new Entity("imageScreen");
engine.addEntity(imageScreen);
imageScreen.setParent(_scene);
const transform22 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(
    -5.837277581059123e-15,
    -1,
    1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(1, 1, 1)
});
imageScreen.addComponentOrReplace(transform22);

const plainText = new Entity("plainText");
engine.addEntity(plainText);
plainText.setParent(_scene);
const transform23 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(
    -5.837277581059123e-15,
    -1,
    1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(5.238201141357422, 7.984772682189941, 1)
});
plainText.addComponentOrReplace(transform23);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape2 = new GLTFShape(
  "dee32299-2f09-4d42-b682-3dfd1d4e1e4d/Stones1.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
entity.addComponentOrReplace(gltfShape2);
const transform24 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity.addComponentOrReplace(transform24);

const fireworksBox = new Entity("fireworksBox");
engine.addEntity(fireworksBox);
fireworksBox.setParent(_scene);
const transform25 = new Transform({
  position: new Vector3(14, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
fireworksBox.addComponentOrReplace(transform25);
const gltfShape3 = new GLTFShape(
  "8838315c-b7e6-4066-9388-b6aa08f29df8/ChineseFireworks_01/ChineseFireworks_01.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
fireworksBox.addComponentOrReplace(gltfShape3);

const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const script1 = new Script1();
const script2 = new Script2();
script1.spawn(
  imageScreen,
  {
    image:
      "https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  },
  createChannel(channelId, imageScreen, channelBus)
);
script2.spawn(
  plainText,
  { text: "Reserved", font: "SF", color: "#008000" },
  createChannel(channelId, plainText, channelBus)
);
