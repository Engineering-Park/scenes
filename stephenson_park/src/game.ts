import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";
import Script1 from "../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item";
import Script2 from "../431f971e-4eee-4691-aa03-d541f0ac3c76/src/item";
import Script3 from "../4c9fa249-97ec-4f32-8fb8-b96f69ba8892/src/item";
import Script4 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

const largePond = new Entity("largePond");
engine.addEntity(largePond);
largePond.setParent(_scene);
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
largePond.addComponentOrReplace(transform2);
const gltfShape = new GLTFShape(
  "622c9a64-8acc-4c24-bcf3-d9cd740a9c20/Pond_02/Pond_02.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
largePond.addComponentOrReplace(gltfShape);

const javaFern = new Entity("javaFern");
engine.addEntity(javaFern);
javaFern.setParent(_scene);
const transform3 = new Transform({
  position: new Vector3(7, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
javaFern.addComponentOrReplace(transform3);
const gltfShape2 = new GLTFShape(
  "734c6696-dc46-4f79-a817-41319bcc7395/Grass_01/Grass_01.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
javaFern.addComponentOrReplace(gltfShape2);

const greenSycamoreTree = new Entity("greenSycamoreTree");
engine.addEntity(greenSycamoreTree);
greenSycamoreTree.setParent(_scene);
const transform4 = new Transform({
  position: new Vector3(8, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenSycamoreTree.addComponentOrReplace(transform4);
const gltfShape3 = new GLTFShape(
  "fd4168d3-1040-458d-b90e-fe5f441d593b/TreeSycamore_03/TreeSycamore_03.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
greenSycamoreTree.addComponentOrReplace(gltfShape3);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape4 = new GLTFShape(
  "5a51cce6-b537-4f8a-af12-e17d2ab46ba6/Grass.glb"
);
gltfShape4.withCollisions = true;
gltfShape4.isPointerBlocker = true;
gltfShape4.visible = true;
entity.addComponentOrReplace(gltfShape4);
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity.addComponentOrReplace(transform5);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape4);
const transform6 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity2.addComponentOrReplace(transform6);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape4);
const transform7 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity3.addComponentOrReplace(transform7);

const entity4 = new Entity("entity4");
engine.addEntity(entity4);
entity4.setParent(_scene);
entity4.addComponentOrReplace(gltfShape4);
const transform8 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity4.addComponentOrReplace(transform8);

const locomotive = new Entity("locomotive");
engine.addEntity(locomotive);
locomotive.setParent(_scene);
const transform9 = new Transform({
  position: new Vector3(34, 0.27150827646255493, 8.434026718139648),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
locomotive.addComponentOrReplace(transform9);
const gltfShape5 = new GLTFShape(
  "61081528-8ae8-4d02-b421-ce62d2b43d0d/locomotive.glb"
);
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
locomotive.addComponentOrReplace(gltfShape5);

const trainTrackM = new Entity("trainTrackM");
engine.addEntity(trainTrackM);
trainTrackM.setParent(_scene);
const transform10 = new Transform({
  position: new Vector3(34.974159240722656, 0, 9.5),
  rotation: new Quaternion(
    -1.9546255110617586e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.3708364963531494, 1, 1.000002145767212)
});
trainTrackM.addComponentOrReplace(transform10);
const gltfShape6 = new GLTFShape(
  "083c103f-8b52-493a-b1f0-a2ec0544948a/Train Track 10 M.glb"
);
gltfShape6.withCollisions = true;
gltfShape6.isPointerBlocker = true;
gltfShape6.visible = true;
trainTrackM.addComponentOrReplace(gltfShape6);

const trainTrackM2 = new Entity("trainTrackM2");
engine.addEntity(trainTrackM2);
trainTrackM2.setParent(_scene);
trainTrackM2.addComponentOrReplace(gltfShape6);
const transform11 = new Transform({
  position: new Vector3(44.97416305541992, 0, 9.5),
  rotation: new Quaternion(
    -1.9546255110617586e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.3708363771438599, 1, 1.0000026226043701)
});
trainTrackM2.addComponentOrReplace(transform11);

const greenRoundedPineTree = new Entity("greenRoundedPineTree");
engine.addEntity(greenRoundedPineTree);
greenRoundedPineTree.setParent(_scene);
const transform12 = new Transform({
  position: new Vector3(2, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree.addComponentOrReplace(transform12);
const gltfShape7 = new GLTFShape(
  "2465d748-93bf-41ac-b161-24c0d8aed625/TreePine_01/TreePine_01.glb"
);
gltfShape7.withCollisions = true;
gltfShape7.isPointerBlocker = true;
gltfShape7.visible = true;
greenRoundedPineTree.addComponentOrReplace(gltfShape7);

const greenRoundedPineTree2 = new Entity("greenRoundedPineTree2");
engine.addEntity(greenRoundedPineTree2);
greenRoundedPineTree2.setParent(_scene);
greenRoundedPineTree2.addComponentOrReplace(gltfShape7);
const transform13 = new Transform({
  position: new Vector3(2.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree2.addComponentOrReplace(transform13);

const greenRoundedPineTree3 = new Entity("greenRoundedPineTree3");
engine.addEntity(greenRoundedPineTree3);
greenRoundedPineTree3.setParent(_scene);
greenRoundedPineTree3.addComponentOrReplace(gltfShape7);
const transform14 = new Transform({
  position: new Vector3(2, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree3.addComponentOrReplace(transform14);

const greenRoundedPineTree4 = new Entity("greenRoundedPineTree4");
engine.addEntity(greenRoundedPineTree4);
greenRoundedPineTree4.setParent(_scene);
greenRoundedPineTree4.addComponentOrReplace(gltfShape7);
const transform15 = new Transform({
  position: new Vector3(2.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree4.addComponentOrReplace(transform15);

const greenRoundedPineTree5 = new Entity("greenRoundedPineTree5");
engine.addEntity(greenRoundedPineTree5);
greenRoundedPineTree5.setParent(_scene);
greenRoundedPineTree5.addComponentOrReplace(gltfShape7);
const transform16 = new Transform({
  position: new Vector3(2, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree5.addComponentOrReplace(transform16);

const greenSycamoreTree2 = new Entity("greenSycamoreTree2");
engine.addEntity(greenSycamoreTree2);
greenSycamoreTree2.setParent(_scene);
const transform17 = new Transform({
  position: new Vector3(7.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenSycamoreTree2.addComponentOrReplace(transform17);
greenSycamoreTree2.addComponentOrReplace(gltfShape3);

const electricBluePalm = new Entity("electricBluePalm");
engine.addEntity(electricBluePalm);
electricBluePalm.setParent(_scene);
const transform18 = new Transform({
  position: new Vector3(7, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
electricBluePalm.addComponentOrReplace(transform18);
const gltfShape8 = new GLTFShape(
  "9e3ce4b4-837b-46b7-a8cb-ddd2641d06bb/PlantSF_08/PlantSF_08.glb"
);
gltfShape8.withCollisions = true;
gltfShape8.isPointerBlocker = true;
gltfShape8.visible = true;
electricBluePalm.addComponentOrReplace(gltfShape8);

const logRound = new Entity("logRound");
engine.addEntity(logRound);
logRound.setParent(_scene);
const transform19 = new Transform({
  position: new Vector3(1.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
logRound.addComponentOrReplace(transform19);
const gltfShape9 = new GLTFShape(
  "451e0090-76a4-41e9-924b-cf30c148f3fc/Log_04/Log_04.glb"
);
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
logRound.addComponentOrReplace(gltfShape9);

const mossRose = new Entity("mossRose");
engine.addEntity(mossRose);
mossRose.setParent(_scene);
const transform20 = new Transform({
  position: new Vector3(1.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
mossRose.addComponentOrReplace(transform20);
const gltfShape10 = new GLTFShape(
  "d62f9915-4940-4fb0-83f5-7b92dbd93fa7/Plant_06/Plant_06.glb"
);
gltfShape10.withCollisions = true;
gltfShape10.isPointerBlocker = true;
gltfShape10.visible = true;
mossRose.addComponentOrReplace(gltfShape10);

const maidenhairFern = new Entity("maidenhairFern");
engine.addEntity(maidenhairFern);
maidenhairFern.setParent(_scene);
const transform21 = new Transform({
  position: new Vector3(8, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
maidenhairFern.addComponentOrReplace(transform21);
const gltfShape11 = new GLTFShape(
  "d4d4f87a-1ee5-46ad-b998-13ce007e6ecf/Plant_07/Plant_07.glb"
);
gltfShape11.withCollisions = true;
gltfShape11.isPointerBlocker = true;
gltfShape11.visible = true;
maidenhairFern.addComponentOrReplace(gltfShape11);

const ostrichFerns = new Entity("ostrichFerns");
engine.addEntity(ostrichFerns);
ostrichFerns.setParent(_scene);
const transform22 = new Transform({
  position: new Vector3(9, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
ostrichFerns.addComponentOrReplace(transform22);
const gltfShape12 = new GLTFShape(
  "af9213a3-3310-4564-9633-dd56815c85fa/Grass_02/Grass_02.glb"
);
gltfShape12.withCollisions = true;
gltfShape12.isPointerBlocker = true;
gltfShape12.visible = true;
ostrichFerns.addComponentOrReplace(gltfShape12);

const treeStump = new Entity("treeStump");
engine.addEntity(treeStump);
treeStump.setParent(_scene);
const transform23 = new Transform({
  position: new Vector3(1.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
treeStump.addComponentOrReplace(transform23);
const gltfShape13 = new GLTFShape(
  "d3cf58bc-16df-4c4c-9c3a-74f659164363/TreeStump_01/TreeStump_01.glb"
);
gltfShape13.withCollisions = true;
gltfShape13.isPointerBlocker = true;
gltfShape13.visible = true;
treeStump.addComponentOrReplace(gltfShape13);

const sunflower = new Entity("sunflower");
engine.addEntity(sunflower);
sunflower.setParent(_scene);
const transform24 = new Transform({
  position: new Vector3(1.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
sunflower.addComponentOrReplace(transform24);
const gltfShape14 = new GLTFShape(
  "c5124c22-c518-45a6-8b9a-2f749e8de161/Flower_04/Flower_04.glb"
);
gltfShape14.withCollisions = true;
gltfShape14.isPointerBlocker = true;
gltfShape14.visible = true;
sunflower.addComponentOrReplace(gltfShape14);

const signpostTree = new Entity("signpostTree");
engine.addEntity(signpostTree);
signpostTree.setParent(_scene);
const transform25 = new Transform({
  position: new Vector3(25.5, 1, 8.5),
  rotation: new Quaternion(6.18995838337329e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
});
signpostTree.addComponentOrReplace(transform25);

const qrDonationsBlackbo = new Entity("qrDonationsBlackbo");
engine.addEntity(qrDonationsBlackbo);
qrDonationsBlackbo.setParent(_scene);
const transform26 = new Transform({
  position: new Vector3(
    56.00979232788086,
    0.0799742043018341,
    8.497049331665039
  ),
  rotation: new Quaternion(
    -9.142327296411939e-16,
    -0.22641222178936005,
    2.6990440105123525e-8,
    0.9740315675735474
  ),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
});
qrDonationsBlackbo.addComponentOrReplace(transform26);

const hexagonalFloorPanel = new Entity("hexagonalFloorPanel");
engine.addEntity(hexagonalFloorPanel);
hexagonalFloorPanel.setParent(_scene);
const transform27 = new Transform({
  position: new Vector3(56, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
hexagonalFloorPanel.addComponentOrReplace(transform27);
const gltfShape15 = new GLTFShape(
  "0e8a19d7-392f-434a-bf32-e8dc932cba81/FloorHexa_01/FloorHexa_01.glb"
);
gltfShape15.withCollisions = true;
gltfShape15.isPointerBlocker = true;
gltfShape15.visible = true;
hexagonalFloorPanel.addComponentOrReplace(gltfShape15);

const spark = new Entity("spark");
engine.addEntity(spark);
spark.setParent(_scene);
const transform28 = new Transform({
  position: new Vector3(56, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
spark.addComponentOrReplace(transform28);

const externalLink = new Entity("externalLink");
engine.addEntity(externalLink);
externalLink.setParent(_scene);
const transform29 = new Transform({
  position: new Vector3(56, 2, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
externalLink.addComponentOrReplace(transform29);

const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const script1 = new Script1();
const script2 = new Script2();
const script3 = new Script3();
const script4 = new Script4();
script1.spawn(
  signpostTree,
  { text: "Locomotive \nby yanix\nCC-BY", fontSize: 30 },
  createChannel(channelId, signpostTree, channelBus)
);
script2.spawn(
  qrDonationsBlackbo,
  {
    publicKey: "0xC196ad79254dbb9b966706b60a9D3D514137f5E1",
    text: 'Make a donation\nand help us become\nthe "go to" place\nfor engineers to meet,\nexplore,\nshare knowledge and ideas\nand build communities.',
    fontSize: 7
  },
  createChannel(channelId, qrDonationsBlackbo, channelBus)
);
script3.spawn(
  spark,
  { active: true },
  createChannel(channelId, spark, channelBus)
);
script4.spawn(
  externalLink,
  { url: "engineeringpark.org", name: "visit the website" },
  createChannel(channelId, externalLink, channelBus)
);
