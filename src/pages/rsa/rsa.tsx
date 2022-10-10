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
import {useParams} from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './rsa.css';
import PrimeNumber from "../../components/prime-number/PrimeNumber";
import {useEffect, useMemo, useState} from "react";
import Inverse from "../../components/inverse/Inverse";
import EuclideanExtended from "../../components/euclidean-extended/EuclideanExtended";
import {PrimeFactorsTo} from "../../components/CalPrimeTable";
import ModularExponentiation from "../../components/modular-exponentiation/ModularExponentiation";
import PrimitiveCyclic from "../../components/primitive-cyclic/PrimitiveCyclic";
import RSACom from '../../components/rsa/rsa';
import EncryptRSA from '../../components/rsa/EncryptRSA';
import DecryptRSA from '../../components/rsa/DecryptRSA';


const RSA: React.FC = () => {
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
                  <IonTitle>RSA</IonTitle>
                  <IonButton onClick={() => {
                        setComponents([...components, (<RSACom></RSACom>)])
                    }} slot="end" size="default">Tính d</IonButton>
                     <IonButton onClick={() => {
                        setComponents([...components, (<EncryptRSA></EncryptRSA>)])
                    }} slot="end" size="default">Mã hoá</IonButton>
                     <IonButton onClick={() => {
                        setComponents([...components, (<DecryptRSA></DecryptRSA>)])
                    }} slot="end" size="default">Giải mã</IonButton>
              </IonToolbar>
          </IonHeader>

          <IonContent fullscreen>
              {/*<IonHeader collapse="condense">*/}
              {/*    <IonToolbar>*/}
              {/*        <IonTitle size="large">{name}</IonTitle>*/}
              {/*    </IonToolbar>*/}
              {/*</IonHeader>*/}
              <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
                  {components}
              </IonReorderGroup>
              {/*<ExploreContainer name={name} />*/}
          </IonContent>
      </IonPage>
  );
};

export default RSA;
 