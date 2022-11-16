import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea, IonTitle
} from '@ionic/react';
import './Elliptic.css';
import { useEffect, useState } from "react";
import { pizza } from "ionicons/icons";
import Point, { CalPoints } from './Point';
import { CalSquareGroup } from './Some';
export const CalB = (a: string, minB: string, p: string) => {
    const sqr = CalSquareGroup(p.toString());
    for (let i = BigInt(minB); i <= BigInt(p); i++) {
        const x = CalPoints(sqr, a, i.toString(), p.toString());
        if (IsPrime(x.length + 1)) return { i: i.toString(), total: x.length + 1, a, p };
    }
}
export const IsPrime = (t: number) => {
    for (let i = 2; i < t; i++) {
        if (t % i === 0) return false;
    }
    return true;
}

const FindB: React.FC = (props: { setParams?: (input: any) => any }) => {
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [p, setP] = useState<string>("");
    const [result, setResult] = useState<any>({ r: "a" });
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {
        const result = CalB(a, b, p);
        setResult({ r: JSON.stringify(result) });
    }
    useEffect(() => {
        if (props?.setParams) props.setParams({ a, b, p, square: result.square });
    }, [a, b, p]);
    return (
        <IonItem>
            <h3>Tìm b</h3>
            <IonLabel position="stacked">a</IonLabel>
            <IonInput onIonChange={e => setA(e.detail.value!)} value={a}
                clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">b</IonLabel>
            <IonInput onIonChange={e => setB(e.detail.value!)} value={b}
                clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">p</IonLabel>
            <IonInput onIonChange={e => setP(e.detail.value!)} value={p}
                clearInput inputmode={"numeric"}> </IonInput>
            <div slot="end">
                <IonButton onClick={getNumber} size="default">Xử lý</IonButton>
                <br />
                <IonButton onClick={() => {
                    setShow(!show)
                }} size="default">{show ? 'Ẩn KQ' : 'Hiện KQ'}</IonButton>
            </div>
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <IonLabel position="stacked">KQ</IonLabel>
                        <IonTextarea color="success" value={result.r} readonly autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza} />
            </IonReorder>
        </IonItem>
    );
};

export default FindB;

