import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { browserHistory } from '../utils/history';

const Profile: React.FC = () => {
    const routeHome = () => {
        browserHistory.push('/home');
    }
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={routeHome}>Go Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;