import { Tree, TreeType } from '../model/tree-types';

export const mockTreesData: Tree[] = [
  {
    name: 'Bob',
    datePlanted: '2024-12-23',
    id: '1',
    treeType: TreeType.OAK,
    location: { lat: 45.6427, lng: 25.5887 },
  },
  {
    name: 'Narcissus',
    datePlanted: '2023-12-12',
    id: '2',
    treeType: TreeType.CHERRY_TREE,
  },
  { name: 'Bob', datePlanted: '2025-01-06', id: '3', treeType: TreeType.OAK },
  {
    name: 'Narcissus',
    datePlanted: '2023-07-08',
    id: '4',
    treeType: TreeType.CHERRY_TREE,
  },
  { name: 'Bob', datePlanted: '2024-10-24', id: '5', treeType: TreeType.OAK },
  {
    name: 'Narcissus',
    datePlanted: '2026-03-07',
    id: '6',
    treeType: TreeType.CHERRY_TREE,
  },
];
