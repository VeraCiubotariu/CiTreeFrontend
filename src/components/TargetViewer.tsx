import { useEffect, useState } from 'react';
import { IonLabel, IonLoading } from '@ionic/react';
import { getMockedTarget } from '../api/target-service';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const TargetViewer = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true); // Show loading spinner
      try {
        const blob = await getMockedTarget();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (err: any) {
        setError(err.message || 'Error fetching image');
      } finally {
        setLoading(false); // Hide loading spinner
      }
    };

    fetchImage();
  }, []);

  if (error) return <IonLabel className="paragraph">Error: {error}</IonLabel>;

  return (
    <>
      <IonLoading
        isOpen={loading}
        message={'Loading image...'}
        spinner="bubbles"
      />

      {imageUrl && (
        <TransformWrapper>
          <TransformComponent>
            <img src={imageUrl} alt="Target" />
          </TransformComponent>
        </TransformWrapper>
      )}
    </>
  );
};

export default TargetViewer;
