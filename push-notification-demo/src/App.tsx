import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { PushNotifications } from '@capacitor/push-notifications';
import { Preferences } from '@capacitor/preferences';
import { browserHistory } from './utils/history';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

PushNotifications.addListener('pushNotificationActionPerformed', async (event) => {
  console.log('action performed');
  alert('Push action performed: ' + JSON.stringify(event));
    browserHistory.push('/profile');
});

PushNotifications.addListener('registrationError', (error) => {
    console.log('registration error: ' + JSON.stringify(error));
});

PushNotifications.addListener('registration', async (token) => {
  try {
    console.log('token value: ' + token.value);
    await Preferences.set({ key: 'pushNotificationToken', value: token.value }).then(() => { });
  }
  catch (e) {
    console.log('exception', e);
  }
});

PushNotifications.requestPermissions().then(() => {
  try {
    console.log('register');
     PushNotifications.register();
    }
    catch (e) {
      console.log('exception', e);
    }
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter history={browserHistory}>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
