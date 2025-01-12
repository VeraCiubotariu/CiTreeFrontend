import { api, ENDPOINTS } from './api';
import { Tree } from '../model/tree-types';

export const getTrees = async (userId: string) => {
  try {
    const endpoint = ENDPOINTS.GET_TREES.replace(':user_id', userId);
    const response = await api.get(endpoint);
    return response.data.trees as Tree[];
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch trees');
  }
};

export const saveTree = async (userId: string, treeData: Tree) => {
  try {
    const endpoint = ENDPOINTS.SAVE_TREE.replace(':user_id', userId);
    const response = await api.post(endpoint, treeData);
    return response.data.tree as Tree;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to save tree');
  }
};

export const updateTree = async (userId: string, treeData: Tree) => {
  try {
    const endpoint = ENDPOINTS.UPDATE_TREE.replace(':user_id', userId).replace(
      ':tree_id',
      treeData.id!
    );
    const response = await api.put(endpoint, treeData);
    return response.data.tree as Tree;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update tree');
  }
};
