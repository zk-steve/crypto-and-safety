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
import {useEffect, useMemo, useState} from "react";
import Inverse from "../components/inverse/Inverse";
import EuclideanExtended from "../components/euclidean-extended/EuclideanExtended";
import {PrimeFactorsTo} from "../components/CalPrimeTable";
import ModularExponentiation from "../components/modular-exponentiation/ModularExponentiation";
import PrimitiveCyclic from "../components/primitive-cyclic/PrimitiveCyclic";


const Page: React.FC = () => {
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
                    <IonTitle>Trang chủ</IonTitle>
                    <IonButton onClick={() => {
                        setComponents([...components, (<PrimeNumber></PrimeNumber>)])
                    }} slot="end" size="default">Số nguyên tố</IonButton>
                    <IonButton onClick={() => {
                        setComponents([...components, (<Inverse></Inverse>)])
                    }} slot="end" size="default">Nghịch đảo</IonButton>
                    <IonButton onClick={() => {
                        setComponents([...components, (
                            <ModularExponentiation></ModularExponentiation>)])
                    }} slot="end" size="default">Luỹ thừa</IonButton>
                    <IonButton onClick={() => {
                        setComponents([...components, (
                            <PrimitiveCyclic primeData={prime}></PrimitiveCyclic>)])
                    }} slot="end" size="default">Nguyên thuỷ</IonButton>
                    <IonButton onClick={() => {
                        setComponents([])
                    }} slot="end" size="default">Xoá</IonButton>
                    {/*<IonButton onClick={() => {*/}
                    {/*    setComponents([...components, (<EuclideanExtended></EuclideanExtended>)])*/}
                    {/*}} slot="end" size="default">Euclidean mở rộng</IonButton>*/}
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

export default Page;
