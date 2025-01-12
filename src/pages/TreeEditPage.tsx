import { Tree, TreeType } from '../model/tree-types';
import GenericPage from './GenericPage';
import {
  IonButton,
  IonContent,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { useHistory, useParams } from 'react-router-dom';
import { PageFooter } from '../components/PageFooter';
import MapPicker from '../components/MapPicker';
import { useContext, useEffect, useRef, useState } from 'react';
import { Location } from '../model/map-types';
import './TreeEditPage.css';
import { TreesContext } from '../store/TreesProvider';
import { defaultCenter } from '../utils/location-data';

const TreeEditPage = () => {
  const params: { id?: string } = useParams();
  const { treesState } = useContext(TreesContext);
  const data = treesState.trees;
  const selectedTree = useRef<Tree | undefined>(undefined);
  const [location, setLocation] = useState<Location>(defaultCenter);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState<TreeType>(TreeType.OAK);
  const history = useHistory();
  const { save, modify } = useContext(TreesContext);

  useEffect(() => {
    if (params.id) {
      selectedTree.current = data.find((tree: Tree) => tree.id == params.id);
      console.log('Editing tree with id ' + selectedTree.current?.id);
      selectedTree.current?.location &&
        setLocation(selectedTree.current.location);
      selectedTree.current?.name && setName(selectedTree.current.name);
      selectedTree.current?.datePlanted &&
        setDate(selectedTree.current.datePlanted);
      selectedTree.current?.treeType && setType(selectedTree.current.treeType);
    }
  }, [params.id]);

  const handleSave = () => {
    if (params.id) {
      modify({
        id: params.id,
        name,
        datePlanted: date,
        treeType: type,
        location,
      });
    } else {
      save({
        name,
        datePlanted: date,
        treeType: type,
        location,
      });
    }
    history.push('/planted-trees');
  };

  const onLocationChange = (location: Location) => {
    console.log('Location changed to: ' + location.lat + ', ' + location.lng);
    setLocation(location);
  };

  return (
    <>
      <GenericPage hasFooter={true}>
        <IonContent className="ion-padding">
          <div className="title-content-page">
            <IonLabel className="title">
              {params.id
                ? 'You made an impact with this one'
                : "Let's meet the little one"}
            </IonLabel>
            <div className="double-container" style={{ gap: '200px' }}>
              <div
                style={{
                  paddingTop: '8px',
                  justifySelf: 'flex-start',
                  alignSelf: 'flex-start',
                }}
              >
                <IonLabel className="subtitle">Name</IonLabel>
                <IonInput
                  className="tree-input"
                  fill="outline"
                  type="text"
                  value={name}
                  onIonChange={(e) => setName(e.detail.value as string)}
                ></IonInput>
                <IonLabel className="subtitle">Date</IonLabel>
                <IonInput
                  className="tree-input"
                  fill="outline"
                  type="date"
                  value={date}
                  onIonChange={(e) => setDate(e.detail.value as string)}
                ></IonInput>
                <IonLabel className="subtitle">Type</IonLabel>
                <IonSelect
                  className="tree-input"
                  fill="outline"
                  value={type}
                  onIonChange={(e) => setType(e.detail.value)}
                >
                  {Object.values(TreeType).map((currentType) => (
                    <IonSelectOption value={currentType}>
                      {currentType}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </div>
              <div>
                <IonLabel className="subtitle">Location</IonLabel>
                <MapPicker
                  location={location}
                  onLocationChange={onLocationChange}
                />
              </div>
            </div>
          </div>
        </IonContent>
        <PageFooter>
          <IonButton className="dark-button" onClick={handleSave}>
            Save
          </IonButton>
          <IonButton
            className="light-button"
            onClick={() => {
              history.push('/planted-trees');
            }}
          >
            Go Back
          </IonButton>
        </PageFooter>
      </GenericPage>
    </>
  );
};

export default TreeEditPage;
