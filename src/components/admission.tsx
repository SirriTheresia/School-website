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
  IonButton,
} from '@ionic/react';
import './Administration.css'; 
const Administration: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Administration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="admin-content">
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <h2>Manage Departments</h2>
                </IonCardHeader>
                <IonCardContent>
                  <p>View and manage all university departments.</p>
                  <IonButton expand="full" routerLink="/manage-departments">Go to Departments</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <h2>View Reports</h2>
                </IonCardHeader>
                <IonCardContent>
                  <p>Access various reports and analytics.</p>
                  <IonButton expand="full" routerLink="/view-reports">Go to Reports</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <h2>Manage Users</h2>
                </IonCardHeader>
                <IonCardContent>
                  <p>Manage university staff and student accounts.</p>
                  <IonButton expand="full" routerLink="/manage-users">Go to User Management</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <h2>System Settings</h2>
                </IonCardHeader>
                <IonCardContent>
                  <p>Configure system settings and preferences.</p>
                  <IonButton expand="full" routerLink="/system-settings">Go to Settings</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Administration;
