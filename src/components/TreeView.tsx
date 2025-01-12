import { Tree } from '../model/tree-types';
import { IonCard, IonImg, IonLabel } from '@ionic/react';
import './TreeView.css';
import { useHistory } from 'react-router-dom';

const TreeView = ({ tree }: { tree: Tree }) => {
  const history = useHistory();

  return (
    <>
      <IonCard onClick={() => history.push(`/planted-trees/${tree.id}`)}>
        <IonImg src="src/resources/tree.png"></IonImg>
        <IonLabel className="subtitle">{tree.name}</IonLabel>
        <IonLabel className="paragraph">{tree.datePlanted}</IonLabel>
        <IonLabel className="paragraph">{tree.treeType}</IonLabel>
      </IonCard>
    </>
  );
};

export default TreeView;
