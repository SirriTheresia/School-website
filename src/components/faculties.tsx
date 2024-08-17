import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonText, IonPage, IonTitle } from '@ionic/react';
import './faculty.css'; 

const faculties = [
  { name: 'Faculty of Arts FA', img: '/src/assets/images/facultyOfArt.jpeg' },
  { name: 'Faculty of Science FS', img: '/src/assets/images/sf.jpeg' },
  { name: 'Faculty of Education FED', img: '/src/assets/images/law.jpeg' },
  { name: 'Faculty of Health Science FHS', img: '/src/assets/images/fhs.jpeg' },
  { name: 'Faculty of Engineering & Technology FET', img: '/src/assets/images/fet.jpeg' },
  { name: 'Faculty of Law & Political Science FLPS', img: '/src/assets/images/law.jpeg' },
];

const Faculty: React.FC = () => {
  return (
    <IonPage>
      <IonTitle>
        Faculties in UB
      </IonTitle>
<IonCardContent>
    <IonGrid>
      <IonRow>
        {faculties.map((faculty, index) => (
          <IonCol size="12" size-md="6" key={index}>
            <IonCard>
              <IonImg src={faculty.img} alt={faculty.name} />
              <IonCardContent>
                <IonText>{faculty.name}</IonText>
               
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
    </IonCardContent>
    </IonPage>
  );
};

export default Faculty;
