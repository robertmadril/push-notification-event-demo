import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { browserHistory } from '../utils/history';

const Home: React.FC = () => {
  const routePush = () => {
    browserHistory.push('/profile')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={routePush}>Go to Profile</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
