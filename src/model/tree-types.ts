import { Location } from './map-types';

export type Tree = {
  id?: string;
  name: string;
  datePlanted: string;
  treeType: TreeType;
  location?: Location;
};

export enum TreeType {
  OAK = 'Oak',
  WILLOW = 'Willow',
  OLIVE = 'Olive',
  MAPLE = 'Maple',
  ELM = 'Elm',
  PINE_TREE = 'Pine Tree',
  POPLAR = 'Poplar',
  PALM = 'Palm',
  SPRUCE = 'Spruce',
  CEDAR = 'Cedar',
  LINDEN = 'Linden',
  WALNUT_TREE = 'Walnut Tree',
  CHERRY_TREE = 'Cherry Tree',
  MAGNOLIA_TREE = 'Magnolia Tree',
  MANGO_TREE = 'Mango Tree',
  CHESTNUT_TREE = 'Chestnut Tree',
}
