import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon, IonInput, IonItem, IonItemDivider, IonLabel,
    IonList,
    IonMenuButton,
    IonPage, IonReorder, IonReorderGroup, IonText,
    IonTitle,
    IonToolbar, ItemReorderEventDetail
} from '@ionic/react';
import './PrimeNumber.css';
import {useState} from "react";
import {RandomPrime} from "../../lib/random-prime";
import {pizza} from "ionicons/icons";

const PrimeNumber: React.FC = () => {
    const [number, setNumber] = useState<number>(1);
    const [result, setResult] = useState("0");
    const getNumber = () => {
        setResult(RandomPrime(Math.ceil(number * 10 / 3), 10).toString());
    }

    function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
    }

    return (
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
            <IonItem>
                <IonLabel position="stacked">Số chữ số</IonLabel>
                <IonInput type="number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))} value={number}
                          clearInput inputmode={"numeric"}> </IonInput>
                <IonButton onClick={getNumber}>Xử lý</IonButton>
                <IonText color="success">
                    <h3>{result}</h3>
                </IonText>
                <IonReorder slot="end">
                    <IonIcon icon={pizza}/>
                </IonReorder>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Số chữ số</IonLabel>
                <IonInput type="number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))} value={number}
                          clearInput inputmode={"numeric"}> </IonInput>
                <IonButton onClick={getNumber}>Xử lý</IonButton>
                <IonText color="success">
                    <h3>{result}</h3>
                </IonText>
                <IonReorder slot="end">
                    <IonIcon icon={pizza}/>
                </IonReorder>
            </IonItem>
        </IonReorderGroup>
    );
};

export default PrimeNumber;
