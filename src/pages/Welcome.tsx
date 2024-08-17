import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import React from "react";
import './welcome.css';

const Welcome: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonImg src="/src/assets/images/ublogo.jpeg" className="header-logo" />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>UNIVERSITY OF BUEA</IonTitle>
        </IonToolbar>
      </IonHeader>
      
        <IonContent className="ion-content">
        <div className="welcome-message">
          <p>Welcome to the University of Buea!</p>
          <p>Explore, Learn, and Grow with us.</p>
          
        </div>
        <div className="image-container">
        <img src="/src/assets/images/ub.jpeg" alt="Image 1" />
          <img src="/src/assets/images/fhs.jpeg" alt="Image 2" />
          <img src="/src/assets/images/education.jpeg" alt="Image 3" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
