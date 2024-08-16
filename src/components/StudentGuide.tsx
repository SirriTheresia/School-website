import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import './StudentGuide.css'; 
const StudentGuide: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Student Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="student-guide-content">
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <h2>Academic Resources</h2>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonLabel>Library Services</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Online Course Materials</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Academic Advising</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <h2>Student Services</h2>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonLabel>Health and Counseling</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Career Services</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Student Financial Services</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <h2>Campus Facilities</h2>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonLabel>Dining Services</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Sports and Recreation</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Student Housing</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <h2>Contact Information</h2>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonLabel>Student Affairs Office: studentaffairs@university.edu</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Campus Security: +237 987 654 321</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>General Inquiries: info@university.edu</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default StudentGuide;
