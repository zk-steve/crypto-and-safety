import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonReorderGroup,
  IonTitle,
  IonToolbar, ItemReorderEventDetail
} from '@ionic/react';
import './Elliptic.css';
import {useEffect, useMemo, useState} from "react";
import Some from '../../components/elliptic/Some';
import Point from "../../components/elliptic/Point";
import EncryptElgamal from "../../components/elliptic/EncryptElgamal";
const Elliptic: React.FC = () => {
  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
      event.detail.complete();
  }
  const [prime, setPrime] = useState<number[]>([]);
  useEffect(() => {
      // setPrime(PrimeFactorsTo(99999999));
  }, []);
  const [components, setComponents] = useState<any[]>([]);
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot="start">
                      <IonMenuButton/>
                  </IonButtons>
                  <IonTitle>Elliptic Curve</IonTitle>
                  <IonButton onClick={() => {
                        setComponents([...components, (<Some></Some>)])
                    }} slot="end" size="default">Tính thặng dư</IonButton>
                  <IonButton onClick={() => {
                      setComponents([])
                  }} slot="end" size="default">Xoá</IonButton>
              </IonToolbar>
          </IonHeader>

          <IonContent fullscreen>
              {/*<IonHeader collapse="condense">*/}
              {/*    <IonToolbar>*/}
              {/*        <IonTitle size="large">{name}</IonTitle>*/}
              {/*    </IonToolbar>*/}
              {/*</IonHeader>*/}
              <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
                  {/*{components}*/}
                    <Point></Point>
                    <EncryptElgamal></EncryptElgamal>

              </IonReorderGroup>
              {/*<ExploreContainer name={name} />*/}
          </IonContent>
      </IonPage>
  );
};

export default Elliptic;
 