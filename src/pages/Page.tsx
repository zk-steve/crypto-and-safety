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
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import PrimeNumber from "../components/prime-number/PrimeNumber";
import {useState} from "react";

const Page: React.FC = () => {
    const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
        event.detail.complete();
    }

    const [components, setComponents] = useState<any[]>([]);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Trang chủ</IonTitle>
                    <IonButton onClick={() => {
                        setComponents([...components, (<PrimeNumber></PrimeNumber>)])
                    }} slot="end" size="default">Số nguyên tố</IonButton>
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
                    {/*{components.map((e) => {*/}
                    {/*    if (e.type == 'prime') return (<PrimeNumber></PrimeNumber>);*/}
                    {/*})}*/}
                    {/*<PrimeNumber></PrimeNumber>*/}
                    {/*<PrimeNumber></PrimeNumber>*/}
                </IonReorderGroup>
                {/*<ExploreContainer name={name} />*/}
            </IonContent>
        </IonPage>
    );
};

export default Page;
