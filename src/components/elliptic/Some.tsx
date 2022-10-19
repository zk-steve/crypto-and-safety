import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea
} from '@ionic/react';
import './Elliptic.css';
import { useState } from "react";
import { pizza } from "ionicons/icons";
import { CalPrimitives } from '../primitive-cyclic/PrimitiveCyclic';
import { CalInverse } from '../inverse/Inverse';

export const CalDRSA = (_p: string, _q: string, _e?: string) => {
    const p = BigInt(_p);
    const q = BigInt(_q);
    const pi = (p - BigInt(1)) * (q - BigInt(1));
    _e = _e ?? CalPrimitives(pi.toString(), (pi / BigInt(2)).toString(), (pi / BigInt(2) + BigInt(20000)).toString()).result[0]
    const d = CalInverse(_e, pi.toString()).inverse;
    return { pi: pi.toString(), e: _e, d: d, n: (p * q).toString() }
}
const Some: React.FC = () => {
    const [p, setP] = useState<string>("");
    const [q, setQ] = useState<string>("");
    const [result, setResult] = useState({ pi: "", e: "", d: "", n: "" });
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {
        setResult(CalDRSA(p, q))
    }
    return (
        <IonItem>
            <IonLabel position="stacked">P</IonLabel>
            <IonInput onIonChange={e => setP(e.detail.value!)} value={p}
                clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">Q</IonLabel>
            <IonInput onIonChange={e => setQ(e.detail.value!)} value={q}
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
                        <IonLabel position="stacked">Ф(n)=(p-1)(q-1)</IonLabel>
                        <IonTextarea color="success" value={result.pi} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol size="12">
                        <IonLabel position="stacked">n</IonLabel>
                        <IonTextarea color="success" value={result.n} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol size="12">
                        <IonLabel position="stacked">e</IonLabel>
                        <IonTextarea color="success" value={result.e} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol size="12">
                        <IonLabel position="stacked">d</IonLabel>
                        <IonTextarea color="success" value={result.d} readonly autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza} />
            </IonReorder>
        </IonItem>
    );
};

export default Some;

