import {
    IonButton,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonTextarea
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


    return (
        <IonItem>
            <IonLabel position="stacked">Số nguyên tố: Số chữ số</IonLabel>
            <IonInput type="number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))} value={number}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonButton onClick={getNumber} slot="end" size="default">Xử lý</IonButton>
            <IonTextarea color="success" value={result} readonly autoGrow>
            </IonTextarea>
            <IonReorder slot="end">
                <IonIcon icon={pizza}/>
            </IonReorder>
        </IonItem>
    );
};

export default PrimeNumber;
