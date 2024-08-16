import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import './welcome.css';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tailwind CSS Academy</IonTitle>
        </IonToolbar>
      </IonHeader>
      
        <IonContent className="ion-content">
        <div className="welcome-message">
          <p>Welcome to the University of Buea!</p>
          <p>Explore, Learn, and Grow with us.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
