import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";
import Script1 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item";
import Script2 from "../28352c3a-cc20-4ab4-b4b8-a4562a6b0d4d/src/item";
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item";
import Script4 from "../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 16),
  rotation: new Quaternion(0, 1, 0, 1),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

const plainText = new Entity("plainText");
engine.addEntity(plainText);
plainText.setParent(_scene);
const transform2 = new Transform({
  position: new Vector3(88, 7, 7.999996185302734),
  rotation: new Quaternion(
    -1.1307966078810162e-15,
    -0.7071068286895752,
    8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(6.328164100646973, 6.375, 13.020085334777832)
});
plainText.addComponentOrReplace(transform2);

const tileBorder = new Entity("tileBorder");
engine.addEntity(tileBorder);
tileBorder.setParent(_scene);
const transform3 = new Transform({
  position: new Vector3(8, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
});
tileBorder.addComponentOrReplace(transform3);
const gltfShape = new GLTFShape(
  "16351f2c-d9ca-4522-8db2-3f55b1474596/Tile_Border.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
tileBorder.addComponentOrReplace(gltfShape);

const tileBorder2 = new Entity("tileBorder2");
engine.addEntity(tileBorder2);
tileBorder2.setParent(_scene);
tileBorder2.addComponentOrReplace(gltfShape);
const transform4 = new Transform({
  position: new Vector3(16, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
});
tileBorder2.addComponentOrReplace(transform4);

const tileBorder3 = new Entity("tileBorder3");
engine.addEntity(tileBorder3);
tileBorder3.setParent(_scene);
tileBorder3.addComponentOrReplace(gltfShape);
const transform5 = new Transform({
  position: new Vector3(24, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
});
tileBorder3.addComponentOrReplace(transform5);

const tileBorder4 = new Entity("tileBorder4");
engine.addEntity(tileBorder4);
tileBorder4.setParent(_scene);
tileBorder4.addComponentOrReplace(gltfShape);
const transform6 = new Transform({
  position: new Vector3(32, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
});
tileBorder4.addComponentOrReplace(transform6);

const tileBorder5 = new Entity("tileBorder5");
engine.addEntity(tileBorder5);
tileBorder5.setParent(_scene);
tileBorder5.addComponentOrReplace(gltfShape);
const transform7 = new Transform({
  position: new Vector3(40, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
});
tileBorder5.addComponentOrReplace(transform7);

const tileBorder6 = new Entity("tileBorder6");
engine.addEntity(tileBorder6);
tileBorder6.setParent(_scene);
tileBorder6.addComponentOrReplace(gltfShape);
const transform8 = new Transform({
  position: new Vector3(56, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
});
tileBorder6.addComponentOrReplace(transform8);

const tileBorder7 = new Entity("tileBorder7");
engine.addEntity(tileBorder7);
tileBorder7.setParent(_scene);
tileBorder7.addComponentOrReplace(gltfShape);
const transform9 = new Transform({
  position: new Vector3(48, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
});
tileBorder7.addComponentOrReplace(transform9);

const tileBorder8 = new Entity("tileBorder8");
engine.addEntity(tileBorder8);
tileBorder8.setParent(_scene);
tileBorder8.addComponentOrReplace(gltfShape);
const transform10 = new Transform({
  position: new Vector3(64, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
tileBorder8.addComponentOrReplace(transform10);

const tileBorder9 = new Entity("tileBorder9");
engine.addEntity(tileBorder9);
tileBorder9.setParent(_scene);
tileBorder9.addComponentOrReplace(gltfShape);
const transform11 = new Transform({
  position: new Vector3(8, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
});
tileBorder9.addComponentOrReplace(transform11);

const tileBorder10 = new Entity("tileBorder10");
engine.addEntity(tileBorder10);
tileBorder10.setParent(_scene);
tileBorder10.addComponentOrReplace(gltfShape);
const transform12 = new Transform({
  position: new Vector3(16, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
});
tileBorder10.addComponentOrReplace(transform12);

const tileBorder11 = new Entity("tileBorder11");
engine.addEntity(tileBorder11);
tileBorder11.setParent(_scene);
tileBorder11.addComponentOrReplace(gltfShape);
const transform13 = new Transform({
  position: new Vector3(24, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
});
tileBorder11.addComponentOrReplace(transform13);

const tileBorder12 = new Entity("tileBorder12");
engine.addEntity(tileBorder12);
tileBorder12.setParent(_scene);
tileBorder12.addComponentOrReplace(gltfShape);
const transform14 = new Transform({
  position: new Vector3(32, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
});
tileBorder12.addComponentOrReplace(transform14);

const tileBorder13 = new Entity("tileBorder13");
engine.addEntity(tileBorder13);
tileBorder13.setParent(_scene);
tileBorder13.addComponentOrReplace(gltfShape);
const transform15 = new Transform({
  position: new Vector3(40, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
tileBorder13.addComponentOrReplace(transform15);

const tileBorder14 = new Entity("tileBorder14");
engine.addEntity(tileBorder14);
tileBorder14.setParent(_scene);
tileBorder14.addComponentOrReplace(gltfShape);
const transform16 = new Transform({
  position: new Vector3(48, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
});
tileBorder14.addComponentOrReplace(transform16);

const tileBorder15 = new Entity("tileBorder15");
engine.addEntity(tileBorder15);
tileBorder15.setParent(_scene);
tileBorder15.addComponentOrReplace(gltfShape);
const transform17 = new Transform({
  position: new Vector3(56, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
});
tileBorder15.addComponentOrReplace(transform17);

const tileBorder16 = new Entity("tileBorder16");
engine.addEntity(tileBorder16);
tileBorder16.setParent(_scene);
tileBorder16.addComponentOrReplace(gltfShape);
const transform18 = new Transform({
  position: new Vector3(64, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
});
tileBorder16.addComponentOrReplace(transform18);

const signpostTree = new Entity("signpostTree");
engine.addEntity(signpostTree);
signpostTree.setParent(_scene);
const transform19 = new Transform({
  position: new Vector3(94.5, 1.5, 0.4999952018260956),
  rotation: new Quaternion(
    -1.4210854715202004e-14,
    -1.4901164746561335e-8,
    5.221649799829961e-15,
    1
  ),
  scale: new Vector3(1.5000017881393433, 1, 1.0000011920928955)
});
signpostTree.addComponentOrReplace(transform19);

const externalLink = new Entity("externalLink");
engine.addEntity(externalLink);
externalLink.setParent(_scene);
const transform20 = new Transform({
  position: new Vector3(95, 1, 0.4999953508377075),
  rotation: new Quaternion(
    8.25451733604387e-15,
    -1,
    1.1920928244535389e-7,
    -4.470348358154297e-8
  ),
  scale: new Vector3(1, 1, 1)
});
externalLink.addComponentOrReplace(transform20);

const internationalSpaceStation = new Entity("internationalSpaceStation");
engine.addEntity(internationalSpaceStation);
internationalSpaceStation.setParent(_scene);
const transform21 = new Transform({
  position: new Vector3(6, 50, 7.999999523162842),
  rotation: new Quaternion(
    0.08751436322927475,
    -0.08751436322927475,
    0.10663657635450363,
    0.986565351486206
  ),
  scale: new Vector3(
    0.24999986588954926,
    0.24999995529651642,
    0.2499999850988388
  )
});
internationalSpaceStation.addComponentOrReplace(transform21);
const gltfShape2 = new GLTFShape(
  "996aef42-59db-4940-859b-37a755948602/international-space-station.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
internationalSpaceStation.addComponentOrReplace(gltfShape2);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape3 = new GLTFShape(
  "6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
entity.addComponentOrReplace(gltfShape3);
const transform22 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity.addComponentOrReplace(transform22);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape3);
const transform23 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity2.addComponentOrReplace(transform23);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape3);
const transform24 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity3.addComponentOrReplace(transform24);

const entity4 = new Entity("entity4");
engine.addEntity(entity4);
entity4.setParent(_scene);
entity4.addComponentOrReplace(gltfShape3);
const transform25 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity4.addComponentOrReplace(transform25);

const entity5 = new Entity("entity5");
engine.addEntity(entity5);
entity5.setParent(_scene);
entity5.addComponentOrReplace(gltfShape3);
const transform26 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity5.addComponentOrReplace(transform26);

const entity6 = new Entity("entity6");
engine.addEntity(entity6);
entity6.setParent(_scene);
entity6.addComponentOrReplace(gltfShape3);
const transform27 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity6.addComponentOrReplace(transform27);

const tileBorder17 = new Entity("tileBorder17");
engine.addEntity(tileBorder17);
tileBorder17.setParent(_scene);
tileBorder17.addComponentOrReplace(gltfShape);
const transform28 = new Transform({
  position: new Vector3(72, 0, 14.870370864868164),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
});
tileBorder17.addComponentOrReplace(transform28);

const tileBorder18 = new Entity("tileBorder18");
engine.addEntity(tileBorder18);
tileBorder18.setParent(_scene);
tileBorder18.addComponentOrReplace(gltfShape);
const transform29 = new Transform({
  position: new Vector3(80, 0, 14.870369911193848),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
});
tileBorder18.addComponentOrReplace(transform29);

const tileBorder19 = new Entity("tileBorder19");
engine.addEntity(tileBorder19);
tileBorder19.setParent(_scene);
tileBorder19.addComponentOrReplace(gltfShape);
const transform30 = new Transform({
  position: new Vector3(88, 0, 14.870369911193848),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
});
tileBorder19.addComponentOrReplace(transform30);

const tileBorder20 = new Entity("tileBorder20");
engine.addEntity(tileBorder20);
tileBorder20.setParent(_scene);
tileBorder20.addComponentOrReplace(gltfShape);
const transform31 = new Transform({
  position: new Vector3(96, 0, 14.870369911193848),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
});
tileBorder20.addComponentOrReplace(transform31);

const tileBorder21 = new Entity("tileBorder21");
engine.addEntity(tileBorder21);
tileBorder21.setParent(_scene);
tileBorder21.addComponentOrReplace(gltfShape);
const transform32 = new Transform({
  position: new Vector3(72, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
});
tileBorder21.addComponentOrReplace(transform32);

const tileBorder22 = new Entity("tileBorder22");
engine.addEntity(tileBorder22);
tileBorder22.setParent(_scene);
tileBorder22.addComponentOrReplace(gltfShape);
const transform33 = new Transform({
  position: new Vector3(80, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
});
tileBorder22.addComponentOrReplace(transform33);

const tileBorder23 = new Entity("tileBorder23");
engine.addEntity(tileBorder23);
tileBorder23.setParent(_scene);
tileBorder23.addComponentOrReplace(gltfShape);
const transform34 = new Transform({
  position: new Vector3(88, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
});
tileBorder23.addComponentOrReplace(transform34);

const tileBorder24 = new Entity("tileBorder24");
engine.addEntity(tileBorder24);
tileBorder24.setParent(_scene);
tileBorder24.addComponentOrReplace(gltfShape);
const transform35 = new Transform({
  position: new Vector3(96, 0, 0),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
});
tileBorder24.addComponentOrReplace(transform35);

const signpostTree2 = new Entity("signpostTree2");
engine.addEntity(signpostTree2);
signpostTree2.setParent(_scene);
const transform36 = new Transform({
  position: new Vector3(8, 1, 1.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
signpostTree2.addComponentOrReplace(transform36);

const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const script1 = new Script1();
const script2 = new Script2();
const script3 = new Script3();
const script4 = new Script4();
script1.init();
script2.init();
script3.init();
script4.init();
script1.spawn(
  plainText,
  { text: "Engineering Park", font: "SF", color: "#FFFFFF" },
  createChannel(channelId, plainText, channelBus)
);
script2.spawn(
  signpostTree,
  { text: "Wright Way", fontSize: 30 },
  createChannel(channelId, signpostTree, channelBus)
);
script3.spawn(
  externalLink,
  { url: "engineeringpark.org", name: "visit the website" },
  createChannel(channelId, externalLink, channelBus)
);
script4.spawn(
  signpostTree2,
  {
    text: "International Space Station\n(look up)\nby calebcram\nCC-BY",
    fontSize: 30
  },
  createChannel(channelId, signpostTree2, channelBus)
);
