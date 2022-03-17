import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";
import Script1 from "../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(16, 0, 0),
  rotation: new Quaternion(0, -1, 0, 1),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape = new GLTFShape(
  "5a51cce6-b537-4f8a-af12-e17d2ab46ba6/Grass.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity.addComponentOrReplace(transform2);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape);
const transform3 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity2.addComponentOrReplace(transform3);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape);
const transform4 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity3.addComponentOrReplace(transform4);

const spaceShuttle = new Entity("spaceShuttle");
engine.addEntity(spaceShuttle);
spaceShuttle.setParent(_scene);
const transform5 = new Transform({
  position: new Vector3(6, 9, 24),
  rotation: new Quaternion(
    -4.589728069310942e-15,
    1,
    -1.1920926112907182e-7,
    9.685754776000977e-8
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
});
spaceShuttle.addComponentOrReplace(transform5);
const gltfShape2 = new GLTFShape(
  "7a9a1abd-8fc3-4084-8aef-ee15673c75f0/scene.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
spaceShuttle.addComponentOrReplace(gltfShape2);

const greenRoundedPineTree = new Entity("greenRoundedPineTree");
engine.addEntity(greenRoundedPineTree);
greenRoundedPineTree.setParent(_scene);
const transform6 = new Transform({
  position: new Vector3(2.2199668884277344, 0, 46.312747955322266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree.addComponentOrReplace(transform6);
const gltfShape3 = new GLTFShape(
  "2465d748-93bf-41ac-b161-24c0d8aed625/TreePine_01/TreePine_01.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
greenRoundedPineTree.addComponentOrReplace(gltfShape3);

const smallStarMosaicTile = new Entity("smallStarMosaicTile");
engine.addEntity(smallStarMosaicTile);
smallStarMosaicTile.setParent(_scene);
const transform7 = new Transform({
  position: new Vector3(15, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7, 1, 7.5)
});
smallStarMosaicTile.addComponentOrReplace(transform7);
const gltfShape4 = new GLTFShape(
  "be3eadca-dccd-41cd-8cf2-11c496ff504e/Floor_Tiles_2M_01/Floor_Tiles_2M_01.glb"
);
gltfShape4.withCollisions = true;
gltfShape4.isPointerBlocker = true;
gltfShape4.visible = true;
smallStarMosaicTile.addComponentOrReplace(gltfShape4);

const signpostTree = new Entity("signpostTree");
engine.addEntity(signpostTree);
signpostTree.setParent(_scene);
const transform8 = new Transform({
  position: new Vector3(2.5, 0.5, 17),
  rotation: new Quaternion(
    -5.837277581059123e-15,
    1,
    -1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(1, 1, 1)
});
signpostTree.addComponentOrReplace(transform8);

const pond = new Entity("pond");
engine.addEntity(pond);
pond.setParent(_scene);
const transform9 = new Transform({
  position: new Vector3(10.035041809082031, 0, 9.718615531921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
pond.addComponentOrReplace(transform9);
const gltfShape5 = new GLTFShape(
  "2950ca19-cb51-422b-b80e-fc0765d6cf4b/Pond_01/Pond_01.glb"
);
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
pond.addComponentOrReplace(gltfShape5);

const largePond = new Entity("largePond");
engine.addEntity(largePond);
largePond.setParent(_scene);
const transform10 = new Transform({
  position: new Vector3(6.964959144592285, 0, 6.281384468078613),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
largePond.addComponentOrReplace(transform10);
const gltfShape6 = new GLTFShape(
  "622c9a64-8acc-4c24-bcf3-d9cd740a9c20/Pond_02/Pond_02.glb"
);
gltfShape6.withCollisions = true;
gltfShape6.isPointerBlocker = true;
gltfShape6.visible = true;
largePond.addComponentOrReplace(gltfShape6);

const greenRoundedPineTree2 = new Entity("greenRoundedPineTree2");
engine.addEntity(greenRoundedPineTree2);
greenRoundedPineTree2.setParent(_scene);
greenRoundedPineTree2.addComponentOrReplace(gltfShape3);
const transform11 = new Transform({
  position: new Vector3(5.219966888427734, 0, 45.812747955322266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree2.addComponentOrReplace(transform11);

const greenRoundedPineTree3 = new Entity("greenRoundedPineTree3");
engine.addEntity(greenRoundedPineTree3);
greenRoundedPineTree3.setParent(_scene);
greenRoundedPineTree3.addComponentOrReplace(gltfShape3);
const transform12 = new Transform({
  position: new Vector3(8.219966888427734, 0, 46.312747955322266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree3.addComponentOrReplace(transform12);

const greenRoundedPineTree4 = new Entity("greenRoundedPineTree4");
engine.addEntity(greenRoundedPineTree4);
greenRoundedPineTree4.setParent(_scene);
greenRoundedPineTree4.addComponentOrReplace(gltfShape3);
const transform13 = new Transform({
  position: new Vector3(11.219966888427734, 0, 45.812747955322266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree4.addComponentOrReplace(transform13);

const greenRoundedPineTree5 = new Entity("greenRoundedPineTree5");
engine.addEntity(greenRoundedPineTree5);
greenRoundedPineTree5.setParent(_scene);
greenRoundedPineTree5.addComponentOrReplace(gltfShape3);
const transform14 = new Transform({
  position: new Vector3(14.219966888427734, 0, 46.312747955322266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
greenRoundedPineTree5.addComponentOrReplace(transform14);

const grassSprout = new Entity("grassSprout");
engine.addEntity(grassSprout);
grassSprout.setParent(_scene);
const transform15 = new Transform({
  position: new Vector3(6.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
grassSprout.addComponentOrReplace(transform15);
const gltfShape7 = new GLTFShape(
  "43ab9bc6-bc2a-4ee1-815a-e12f60a709ae/Grass_03/Grass_03.glb"
);
gltfShape7.withCollisions = true;
gltfShape7.isPointerBlocker = true;
gltfShape7.visible = true;
grassSprout.addComponentOrReplace(gltfShape7);

const grassSprout2 = new Entity("grassSprout2");
engine.addEntity(grassSprout2);
grassSprout2.setParent(_scene);
grassSprout2.addComponentOrReplace(gltfShape7);
const transform16 = new Transform({
  position: new Vector3(3.5, 0, 45.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
grassSprout2.addComponentOrReplace(transform16);

const grassSprout3 = new Entity("grassSprout3");
engine.addEntity(grassSprout3);
grassSprout3.setParent(_scene);
grassSprout3.addComponentOrReplace(gltfShape7);
const transform17 = new Transform({
  position: new Vector3(10, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
grassSprout3.addComponentOrReplace(transform17);

const grassSprout4 = new Entity("grassSprout4");
engine.addEntity(grassSprout4);
grassSprout4.setParent(_scene);
grassSprout4.addComponentOrReplace(gltfShape7);
const transform18 = new Transform({
  position: new Vector3(9.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
grassSprout4.addComponentOrReplace(transform18);

const grassSprout5 = new Entity("grassSprout5");
engine.addEntity(grassSprout5);
grassSprout5.setParent(_scene);
grassSprout5.addComponentOrReplace(gltfShape7);
const transform19 = new Transform({
  position: new Vector3(15.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
grassSprout5.addComponentOrReplace(transform19);

const grassSprout6 = new Entity("grassSprout6");
engine.addEntity(grassSprout6);
grassSprout6.setParent(_scene);
grassSprout6.addComponentOrReplace(gltfShape7);
const transform20 = new Transform({
  position: new Vector3(12.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
grassSprout6.addComponentOrReplace(transform20);

const balsamFlower = new Entity("balsamFlower");
engine.addEntity(balsamFlower);
balsamFlower.setParent(_scene);
const transform21 = new Transform({
  position: new Vector3(13, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
balsamFlower.addComponentOrReplace(transform21);
const gltfShape8 = new GLTFShape(
  "71806ca6-1a2b-4d8b-b919-ae96241f8c08/Plant_02/Plant_02.glb"
);
gltfShape8.withCollisions = true;
gltfShape8.isPointerBlocker = true;
gltfShape8.visible = true;
balsamFlower.addComponentOrReplace(gltfShape8);

const balsamFlower2 = new Entity("balsamFlower2");
engine.addEntity(balsamFlower2);
balsamFlower2.setParent(_scene);
balsamFlower2.addComponentOrReplace(gltfShape8);
const transform22 = new Transform({
  position: new Vector3(4, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
balsamFlower2.addComponentOrReplace(transform22);

const flowerSprouts = new Entity("flowerSprouts");
engine.addEntity(flowerSprouts);
flowerSprouts.setParent(_scene);
const transform23 = new Transform({
  position: new Vector3(6.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
flowerSprouts.addComponentOrReplace(transform23);
const gltfShape9 = new GLTFShape(
  "bf0962d5-8904-4f4a-b2b6-9f4607ba1e0d/Plant_03/Plant_03.glb"
);
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
flowerSprouts.addComponentOrReplace(gltfShape9);

const gypsyMushroom = new Entity("gypsyMushroom");
engine.addEntity(gypsyMushroom);
gypsyMushroom.setParent(_scene);
const transform24 = new Transform({
  position: new Vector3(9, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
gypsyMushroom.addComponentOrReplace(transform24);
const gltfShape10 = new GLTFShape(
  "cf22fe9b-69b1-40d8-92d7-7a8caa71ade8/Mushroom_02/Mushroom_02.glb"
);
gltfShape10.withCollisions = true;
gltfShape10.isPointerBlocker = true;
gltfShape10.visible = true;
gypsyMushroom.addComponentOrReplace(gltfShape10);

const smallFlatRock = new Entity("smallFlatRock");
engine.addEntity(smallFlatRock);
smallFlatRock.setParent(_scene);
const transform25 = new Transform({
  position: new Vector3(15, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
smallFlatRock.addComponentOrReplace(transform25);
const gltfShape11 = new GLTFShape(
  "1f8058de-0a22-47c9-8732-a1f2d9721838/RockSmall_01/RockSmall_01.glb"
);
gltfShape11.withCollisions = true;
gltfShape11.isPointerBlocker = true;
gltfShape11.visible = true;
smallFlatRock.addComponentOrReplace(gltfShape11);

const smallMossyRock = new Entity("smallMossyRock");
engine.addEntity(smallMossyRock);
smallMossyRock.setParent(_scene);
const transform26 = new Transform({
  position: new Vector3(10, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
smallMossyRock.addComponentOrReplace(transform26);
const gltfShape12 = new GLTFShape(
  "2d1138f8-be37-4634-8ca0-0d63d11313bb/RockSmallMoss_01/RockSmallMoss_01.glb"
);
gltfShape12.withCollisions = true;
gltfShape12.isPointerBlocker = true;
gltfShape12.visible = true;
smallMossyRock.addComponentOrReplace(gltfShape12);

const rose = new Entity("rose");
engine.addEntity(rose);
rose.setParent(_scene);
const transform27 = new Transform({
  position: new Vector3(9.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
rose.addComponentOrReplace(transform27);
const gltfShape13 = new GLTFShape(
  "18bbb621-1c3e-4ee1-ba0a-a7c77dd01cbb/Flower_03/Flower_03.glb"
);
gltfShape13.withCollisions = true;
gltfShape13.isPointerBlocker = true;
gltfShape13.visible = true;
rose.addComponentOrReplace(gltfShape13);

const sunflower = new Entity("sunflower");
engine.addEntity(sunflower);
sunflower.setParent(_scene);
const transform28 = new Transform({
  position: new Vector3(1, 0, 47),
  rotation: new Quaternion(4.57389363539497e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
});
sunflower.addComponentOrReplace(transform28);
const gltfShape14 = new GLTFShape(
  "c5124c22-c518-45a6-8b9a-2f749e8de161/Flower_04/Flower_04.glb"
);
gltfShape14.withCollisions = true;
gltfShape14.isPointerBlocker = true;
gltfShape14.visible = true;
sunflower.addComponentOrReplace(gltfShape14);

const mediumForestLog = new Entity("mediumForestLog");
engine.addEntity(mediumForestLog);
mediumForestLog.setParent(_scene);
const transform29 = new Transform({
  position: new Vector3(7, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
mediumForestLog.addComponentOrReplace(transform29);
const gltfShape15 = new GLTFShape(
  "00f75e38-8746-492a-8e1a-f2433c3c99ba/Log_02/Log_02.glb"
);
gltfShape15.withCollisions = true;
gltfShape15.isPointerBlocker = true;
gltfShape15.visible = true;
mediumForestLog.addComponentOrReplace(gltfShape15);

const ostrichFerns = new Entity("ostrichFerns");
engine.addEntity(ostrichFerns);
ostrichFerns.setParent(_scene);
const transform30 = new Transform({
  position: new Vector3(8.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
ostrichFerns.addComponentOrReplace(transform30);
const gltfShape16 = new GLTFShape(
  "af9213a3-3310-4564-9633-dd56815c85fa/Grass_02/Grass_02.glb"
);
gltfShape16.withCollisions = true;
gltfShape16.isPointerBlocker = true;
gltfShape16.visible = true;
ostrichFerns.addComponentOrReplace(gltfShape16);

const birdSNestFern = new Entity("birdSNestFern");
engine.addEntity(birdSNestFern);
birdSNestFern.setParent(_scene);
const transform31 = new Transform({
  position: new Vector3(9.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
birdSNestFern.addComponentOrReplace(transform31);
const gltfShape17 = new GLTFShape(
  "f17f4ed8-f0a2-48f0-a461-95d426b58d54/Plant_01/Plant_01.glb"
);
gltfShape17.withCollisions = true;
gltfShape17.isPointerBlocker = true;
gltfShape17.visible = true;
birdSNestFern.addComponentOrReplace(gltfShape17);

const mediumMossyRock = new Entity("mediumMossyRock");
engine.addEntity(mediumMossyRock);
mediumMossyRock.setParent(_scene);
const transform32 = new Transform({
  position: new Vector3(7.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
mediumMossyRock.addComponentOrReplace(transform32);
const gltfShape18 = new GLTFShape(
  "21cee882-17e9-40c6-b919-ce3b497ada04/RockMediumMoss_01/RockMediumMoss_01.glb"
);
gltfShape18.withCollisions = true;
gltfShape18.isPointerBlocker = true;
gltfShape18.visible = true;
mediumMossyRock.addComponentOrReplace(gltfShape18);

const sweetPea = new Entity("sweetPea");
engine.addEntity(sweetPea);
sweetPea.setParent(_scene);
const transform33 = new Transform({
  position: new Vector3(5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
sweetPea.addComponentOrReplace(transform33);
const gltfShape19 = new GLTFShape(
  "8b69ff81-da01-4334-bfc1-281a42c810e3/Plant_04/Plant_04.glb"
);
gltfShape19.withCollisions = true;
gltfShape19.isPointerBlocker = true;
gltfShape19.visible = true;
sweetPea.addComponentOrReplace(gltfShape19);

const bloomingGreenAcaciaTree = new Entity("bloomingGreenAcaciaTree");
engine.addEntity(bloomingGreenAcaciaTree);
bloomingGreenAcaciaTree.setParent(_scene);
const transform34 = new Transform({
  position: new Vector3(9, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
bloomingGreenAcaciaTree.addComponentOrReplace(transform34);
const gltfShape20 = new GLTFShape(
  "2dd72eee-1285-43e0-9787-8a60bf4cd46a/Tree_Forest_Green_02/Tree_Forest_Green_02.glb"
);
gltfShape20.withCollisions = true;
gltfShape20.isPointerBlocker = true;
gltfShape20.visible = true;
bloomingGreenAcaciaTree.addComponentOrReplace(gltfShape20);

const classicBench = new Entity("classicBench");
engine.addEntity(classicBench);
classicBench.setParent(_scene);
const transform35 = new Transform({
  position: new Vector3(11.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
classicBench.addComponentOrReplace(transform35);
const gltfShape21 = new GLTFShape(
  "2cd78a5d-d01d-4d31-8940-c7fb8948e14e/Bench_01/Bench_01.glb"
);
gltfShape21.withCollisions = true;
gltfShape21.isPointerBlocker = true;
gltfShape21.visible = true;
classicBench.addComponentOrReplace(gltfShape21);

const bigStonePath5 = new Entity("bigStonePath5");
engine.addEntity(bigStonePath5);
bigStonePath5.setParent(_scene);
const gltfShape22 = new GLTFShape(
  "363b9672-871b-4682-b15f-4f20f783789d/StonePath_02/StonePath_02.glb"
);
gltfShape22.withCollisions = true;
gltfShape22.isPointerBlocker = true;
gltfShape22.visible = true;
bigStonePath5.addComponentOrReplace(gltfShape22);
const transform36 = new Transform({
  position: new Vector3(3, 0, 38.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
});
bigStonePath5.addComponentOrReplace(transform36);

const bigStoneTile = new Entity("bigStoneTile");
engine.addEntity(bigStoneTile);
bigStoneTile.setParent(_scene);
const transform37 = new Transform({
  position: new Vector3(2, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
bigStoneTile.addComponentOrReplace(transform37);
const gltfShape23 = new GLTFShape(
  "08e139ae-3a20-4ceb-a551-99fdbd56216d/StoneRandomBig_01/StoneRandomBig_01.glb"
);
gltfShape23.withCollisions = true;
gltfShape23.isPointerBlocker = true;
gltfShape23.visible = true;
bigStoneTile.addComponentOrReplace(gltfShape23);

const stonePath = new Entity("stonePath");
engine.addEntity(stonePath);
stonePath.setParent(_scene);
const transform38 = new Transform({
  position: new Vector3(4, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
});
stonePath.addComponentOrReplace(transform38);
const gltfShape24 = new GLTFShape(
  "1aa57826-1afe-466c-ab11-afd5f0df702c/StonePath_01/StonePath_01.glb"
);
gltfShape24.withCollisions = true;
gltfShape24.isPointerBlocker = true;
gltfShape24.visible = true;
stonePath.addComponentOrReplace(gltfShape24);

const stonePath2 = new Entity("stonePath2");
engine.addEntity(stonePath2);
stonePath2.setParent(_scene);
stonePath2.addComponentOrReplace(gltfShape24);
const transform39 = new Transform({
  position: new Vector3(5, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
});
stonePath2.addComponentOrReplace(transform39);

const stonePath3 = new Entity("stonePath3");
engine.addEntity(stonePath3);
stonePath3.setParent(_scene);
stonePath3.addComponentOrReplace(gltfShape24);
const transform40 = new Transform({
  position: new Vector3(6, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
});
stonePath3.addComponentOrReplace(transform40);

const stonePath4 = new Entity("stonePath4");
engine.addEntity(stonePath4);
stonePath4.setParent(_scene);
stonePath4.addComponentOrReplace(gltfShape24);
const transform41 = new Transform({
  position: new Vector3(7, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
});
stonePath4.addComponentOrReplace(transform41);

const stonePath5 = new Entity("stonePath5");
engine.addEntity(stonePath5);
stonePath5.setParent(_scene);
stonePath5.addComponentOrReplace(gltfShape24);
const transform42 = new Transform({
  position: new Vector3(8, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
});
stonePath5.addComponentOrReplace(transform42);

const stonePath6 = new Entity("stonePath6");
engine.addEntity(stonePath6);
stonePath6.setParent(_scene);
stonePath6.addComponentOrReplace(gltfShape24);
const transform43 = new Transform({
  position: new Vector3(9, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
});
stonePath6.addComponentOrReplace(transform43);

const stonePath7 = new Entity("stonePath7");
engine.addEntity(stonePath7);
stonePath7.setParent(_scene);
stonePath7.addComponentOrReplace(gltfShape24);
const transform44 = new Transform({
  position: new Vector3(10, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
stonePath7.addComponentOrReplace(transform44);

const stonePath8 = new Entity("stonePath8");
engine.addEntity(stonePath8);
stonePath8.setParent(_scene);
stonePath8.addComponentOrReplace(gltfShape24);
const transform45 = new Transform({
  position: new Vector3(11, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
});
stonePath8.addComponentOrReplace(transform45);

const stonePath9 = new Entity("stonePath9");
engine.addEntity(stonePath9);
stonePath9.setParent(_scene);
stonePath9.addComponentOrReplace(gltfShape24);
const transform46 = new Transform({
  position: new Vector3(12, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
});
stonePath9.addComponentOrReplace(transform46);

const stonePath10 = new Entity("stonePath10");
engine.addEntity(stonePath10);
stonePath10.setParent(_scene);
stonePath10.addComponentOrReplace(gltfShape24);
const transform47 = new Transform({
  position: new Vector3(13, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
});
stonePath10.addComponentOrReplace(transform47);

const stonePath11 = new Entity("stonePath11");
engine.addEntity(stonePath11);
stonePath11.setParent(_scene);
stonePath11.addComponentOrReplace(gltfShape24);
const transform48 = new Transform({
  position: new Vector3(14, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
});
stonePath11.addComponentOrReplace(transform48);

const stonePath12 = new Entity("stonePath12");
engine.addEntity(stonePath12);
stonePath12.setParent(_scene);
stonePath12.addComponentOrReplace(gltfShape24);
const transform49 = new Transform({
  position: new Vector3(15, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
});
stonePath12.addComponentOrReplace(transform49);

const stonePath13 = new Entity("stonePath13");
engine.addEntity(stonePath13);
stonePath13.setParent(_scene);
stonePath13.addComponentOrReplace(gltfShape24);
const transform50 = new Transform({
  position: new Vector3(16, 0, 38.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
});
stonePath13.addComponentOrReplace(transform50);

const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const script1 = new Script1();
script1.init(options);
script1.spawn(
  signpostTree,
  { text: "SPACE SHUTTLE \nby DURVESH123\nCC-BY", fontSize: 25 },
  createChannel(channelId, signpostTree, channelBus)
);
