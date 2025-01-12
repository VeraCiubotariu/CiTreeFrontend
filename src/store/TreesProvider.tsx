import { Tree } from '../model/tree-types';
import React, { createContext, useContext, useReducer } from 'react';
import { AuthContext } from './AuthProvider';
import { getTrees, saveTree, updateTree } from '../api/tree-service';

type getAllFn = () => Promise<void>;
type saveFn = (tree: Tree) => Promise<void>;

type TreesState = {
  trees: Tree[];
  isFetching: boolean;
};

enum TreesActionType {
  START_GET_ALL = 'START_GET_ALL',
  GET_ALL = 'GET_ALL',
  SAVE = 'SAVE',
  MODIFY = 'MODIFY',
}

type TreesAction =
  | { type: TreesActionType.START_GET_ALL }
  | { type: TreesActionType.GET_ALL; payload: { trees: Tree[] } }
  | { type: TreesActionType.SAVE; payload: { tree: Tree } }
  | { type: TreesActionType.MODIFY; payload: { tree: Tree } };

export const treesReducer = (state: TreesState, action: TreesAction) => {
  switch (action.type) {
    case TreesActionType.GET_ALL:
      return {
        ...state,
        trees: action.payload.trees,
        isFetching: false,
      };
    case TreesActionType.START_GET_ALL:
      return {
        ...state,
        isFetching: true,
      };
    case TreesActionType.SAVE:
      return {
        ...state,
        trees: [...state.trees, action.payload.tree],
      };
    case TreesActionType.MODIFY:
      const newTrees = state.trees.filter(
        (tree) => tree.id !== action.payload.tree.id
      );
      return {
        ...state,
        trees: [...newTrees, action.payload.tree],
      };
  }
};

const initialValue: TreesState = {
  trees: [],
  isFetching: false,
};

export const TreesContext = createContext<{
  treesState: TreesState;
  getAll: getAllFn;
  save: saveFn;
  modify: saveFn;
}>({
  treesState: initialValue,
  getAll: async () => {},
  save: async () => {},
  modify: async () => {},
});

export const TreesProvider = ({ children }: { children: React.ReactNode }) => {
  const [treesState, dispatch] = useReducer(treesReducer, initialValue);
  const { authState } = useContext(AuthContext);
  const userId = authState.user?.username;

  const getAll = async () => {
    dispatch({ type: TreesActionType.START_GET_ALL });
    const trees = await getTrees(userId!);
    dispatch({ type: TreesActionType.GET_ALL, payload: { trees } });
  };

  const save = async (tree: Tree) => {
    const newTree = await saveTree(userId!, tree);
    dispatch({ type: TreesActionType.SAVE, payload: { tree: newTree } });
  };

  const modify = async (tree: Tree) => {
    const newTree = await updateTree(userId!, tree);
    dispatch({ type: TreesActionType.MODIFY, payload: { tree: newTree } });
  };

  return (
    <TreesContext.Provider value={{ treesState, getAll, save, modify }}>
      {children}
    </TreesContext.Provider>
  );
};
