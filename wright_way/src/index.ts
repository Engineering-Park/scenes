import {
  ColliderLayer,
  engine,
  GltfContainer,
  InputAction,
  Material,
  MeshRenderer,
  pointerEventsSystem,
  TextShape,
  Transform,
  TransformTypeWithOptionals
} from "@dcl/sdk/ecs";
import { Color4, Quaternion, Vector3 } from "@dcl/sdk/math";
import { openExternalUrl } from "~system/RestrictedActions";

type Parcel = {
  coordinates: string;
  texture: string;
  orientation?: number;
};

export function main() {
  const threshold06Texture = "images/runway_type2_01.png";
  const threshold24Texture = "images/runway_type2_04.png";
  const touchdownTexture1 = "images/runway_type2_07.png";
  const touchdownTexture2 = "images/runway_type2_08.png";
  const touchdownTexture3 = "images/runway_type2_09.png";
  const runwayTexture = "images/runway_type2_10.png";

  const parcels: Parcel[] = [
    { coordinates: "68,49", texture: threshold24Texture, orientation: 180 },
    { coordinates: "68,48", texture: touchdownTexture1, orientation: 180 },
    { coordinates: "68,47", texture: touchdownTexture2, orientation: 180 },
    { coordinates: "68,46", texture: touchdownTexture3, orientation: 180 },
    { coordinates: "68,45", texture: runwayTexture },
    { coordinates: "68,44", texture: runwayTexture },
    { coordinates: "68,43", texture: runwayTexture },
    { coordinates: "68,42", texture: runwayTexture },
    { coordinates: "68,41", texture: touchdownTexture3 },
    { coordinates: "68,40", texture: touchdownTexture2 },
    { coordinates: "68,39", texture: touchdownTexture1 },
    { coordinates: "68,38", texture: threshold06Texture }
  ];

  const scene = engine.addEntity();

  const createRoadTransform = (index: number, orientation = 0): TransformTypeWithOptionals => ({
    position: { x: 8, y: 0, z: 8 - 16 * index },
    rotation: Quaternion.fromEulerDegrees(90, orientation + 90, 0),
    scale: { x: 16, y: 16, z: 16 }
  });

  parcels.forEach(({ texture, orientation }, index) => {
    const tile = engine.addEntity();
    Transform.create(tile, {
      ...createRoadTransform(index, orientation),
      parent: scene
    });
    MeshRenderer.setPlane(tile);
    Material.setBasicMaterial(tile, {
      texture: Material.Texture.Common({
        src: texture
      })
    });
  });

  // District name
  const textEntity = engine.addEntity();
  Transform.create(textEntity, {
    position: { x: 8, y: 8, z: 8 },
    rotation: Quaternion.fromEulerDegrees(0, 180, 0),
    scale: { x: 15, y: 15, z: 1 }
  });
  TextShape.create(textEntity, {
    text: "Engineering Park",
    fontSize: 1,
    textColor: Color4.White()
  });

  // International space station
  const iss = engine.addEntity();
  Transform.create(iss, {
    position: { x: 8, y: 50, z: 8 - 16 * 6 },
    rotation: Quaternion.fromEulerDegrees(-15, 30, -20),
    scale: { x: 0.25, y: 0.25, z: 0.25 },
    parent: scene
  });
  GltfContainer.create(iss, {
    src: "models/international-space-station.glb"
  });

  // Attribution
  const attribution = engine.addEntity();
  Transform.create(attribution, {
    position: { x: 15.5, y: 1, z: 8 - 16 * 6 },
    rotation: Quaternion.fromEulerDegrees(0, 90, 0),
    scale: { x: 2, y: 1, z: 1 },
    parent: scene
  });
  GltfContainer.create(attribution, {
    src: "models/Sign_Square.glb"
  });
  const attributionArrow = engine.addEntity();
  Transform.create(attributionArrow, {
    position: { x: -0.2, y: 2.5, z: 0 },
    rotation: Quaternion.fromEulerDegrees(0, 0, -90),
    scale: { x: 2, y: 0.5, z: 1 },
    parent: attribution
  });
  GltfContainer.create(attributionArrow, {
    src: "models/Sign_Arrow.glb"
  });
  const attributionText = engine.addEntity();
  Transform.create(attributionText, {
    position: { x: 0, y: 0.5, z: 0 },
    scale: { x: 0.14, y: 0.25, z: 0.25 },
    parent: attribution
  });
  TextShape.create(attributionText, {
    text: "International Space Station\nby calebcram\nCC-BY"
  });

  const createHyperlink = (name: string, position: Vector3) => {
    const link = engine.addEntity();
    Transform.create(link, {
      position,
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    });
    GltfContainer.create(link, {
      src: "models/hiper.glb",
      invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
      visibleMeshesCollisionMask: ColliderLayer.CL_POINTER
    });
    pointerEventsSystem.onPointerDown(
      {
        entity: link,
        opts: { button: InputAction.IA_POINTER, hoverText: "open collective" }
      },
      function () {
        openExternalUrl({ url: "https://opencollective.com/engineeringpark" });
      }
    );
  };
  createHyperlink("hyperlink-north-east", { x: 15.5, y: 1, z: 12 });
  createHyperlink("hyperlink-north-west", { x: 0.5, y: 1, z: 12 });
  createHyperlink("hyperlink-south-east", { x: 15.5, y: 1, z: 4 - 16 * 11 });
  createHyperlink("hyperlink-south-west", { x: 0.5, y: 1, z: 4 - 16 * 11 });

  // Road signs
  const createRoadSign = (name: string, position: Vector3, orientation = 0, textOrientation = 0) => {
    const sign = engine.addEntity();
    Transform.create(sign, {
      position,
      rotation: Quaternion.fromEulerDegrees(0, 90 + orientation, 0),
      scale: { x: 2, y: 1, z: 1 },
      parent: scene
    });
    GltfContainer.create(sign, {
      src: "models/Sign_Arrow.glb"
    });

    const text = engine.addEntity();
    Transform.create(text, {
      position: { x: 0.25, y: 0.39, z: 0 },
      rotation: Quaternion.fromEulerDegrees(0, textOrientation, 0),
      scale: { x: 0.15, y: 0.25, z: 0.25 },
      parent: sign
    });
    TextShape.create(text, {
      text: "Wright Way"
    });
  };
  createRoadSign("road-sign-north-east", { x: 15.5, y: 1.5, z: 11.5 }, 180, 180);
  createRoadSign("road-sign-north-west", { x: 0.5, y: 1.5, z: 11.5 }, 180);
  createRoadSign("road-sign-south-east", { x: 15.5, y: 1.5, z: 4.5 - 16 * 11 }, 0);
  createRoadSign("road-sign-south-west", { x: 0.5, y: 1.5, z: 4.5 - 16 * 11 }, 0, 180);
}
