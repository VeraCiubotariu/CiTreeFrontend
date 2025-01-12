import TreeView from './TreeView';
import { useContext, useEffect, useState } from 'react';
import { TreesContext } from '../store/TreesProvider';
import { IonLoading } from '@ionic/react';

const TreeList = () => {
  const { treesState, getAll } = useContext(TreesContext);
  const data = treesState.trees;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAll();
  }, []);

  useEffect(() => {
    if (!treesState.isFetching) {
      setLoading(false);
    }
  }, [treesState.isFetching]);

  return (
    <>
      <IonLoading
        isOpen={loading}
        message={'Loading image...'}
        spinner="bubbles"
      />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {!treesState.isFetching &&
          data.map((tree) => <TreeView key={tree.id} tree={tree}></TreeView>)}
      </div>
    </>
  );
};

export default TreeList;
