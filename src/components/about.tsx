import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonList,
  } from '@ionic/react';
  
  const AboutUs: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>About Us</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent className="ion-padding">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>About University of Buea</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                The University of Buea, located in the heart of Buea, Cameroon, is a premier institution of higher learning that offers a wide range of academic programs. Founded in 1993, the university is dedicated to excellence in education, research, and community service.
              </p>
              <p>
                Our mission is to provide high-quality education that prepares students for global leadership and service. We are committed to fostering an environment that encourages intellectual curiosity, critical thinking, and a passion for lifelong learning.
              </p>
            </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Our Vision</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                The University of Buea strives to be a world-class university recognized for its contribution to society through excellence in teaching, research, and community engagement.
              </p>
            </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Our Core Values</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>
                    <h2>Excellence</h2>
                    <p>We are committed to achieving the highest standards in all we do.</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Integrity</h2>
                    <p>We adhere to the highest ethical principles and professional standards.</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Innovation</h2>
                    <p>We encourage creativity and embrace change to meet the challenges of a dynamic world.</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Diversity</h2>
                    <p>We value and respect the diverse backgrounds, experiences, and perspectives of our community.</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Community Engagement</h2>
                    <p>We are committed to serving our local, national, and global communities.</p>
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Contact Information</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Email: info@universityofbuea.cm</p>
              <p>Phone: +237 123 456 789</p>
              <p>Address: University of Buea, P.O. Box 63, Buea, Cameroon</p>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default AboutUs;
  