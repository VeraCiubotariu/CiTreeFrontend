import TreeView from './TreeView';
import { useContext, useEffect, useState } from 'react';
import { TreesContext } from '../store/TreesProvider';
import { IonLabel, IonLoading } from '@ionic/react';

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
        {!treesState.isFetching && treesState.trees.length > 0 ? (
          data.map((tree) => <TreeView key={tree.id} tree={tree}></TreeView>)
        ) : (
          <IonLabel className="paragraph">
            You can start adding your planted trees on the "+" button below...
          </IonLabel>
        )}
      </div>
    </>
  );
};

export default TreeList;
