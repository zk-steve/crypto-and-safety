import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea
} from '@ionic/react';
import './rsa.css';
import { useState } from "react";
import { pizza } from "ionicons/icons";
import { CalPrimitives } from '../primitive-cyclic/PrimitiveCyclic';
import { CalInverse } from '../inverse/Inverse';

export const CalEncryptRSA = (_p: string, _q: string, _e?: string) => {
    const p = BigInt(_p);
    const q = BigInt(_q);
    const pi = (p - BigInt(1)) * (q - BigInt(1));
    _e = _e ?? CalPrimitives(pi.toString(), (pi / BigInt(2)).toString(), (pi / BigInt(2) + BigInt(20000)).toString()).result[0]
    const d = CalInverse(_e, pi.toString()).inverse;
    return { pi: pi.toString(), e: _e, d: d }
}

export const EncodeMessage = (m : string) : string =>  {
    let result = BigInt(0);
    for(let i = 0; i < m.length; i++){
        result += BigInt(m.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * BigInt(26) ^ BigInt(m.length-i);
    }
    return result.toString();
}

export const DecodeMessage = (m : string) : string =>  {
    let result = "";
    let _m  = BigInt(m);
    let 
     
    String.fromCharCode((_m % BigInt(26)). + 'a'.charCodeAt(0) - 1 );
    result =
    for(let i = 0; i < m.length; i++){
        result += BigInt(m.charCodeAt(i) - 'a'.charCodeAt(0)) * BigInt(26) ^ BigInt(m.length-i);
    }
    return result.toString();
}

const EncryptRSA: React.FC = () => {
    const [m, setM] = useState<string>("");
    const [e, setE] = useState<string>("");
    const [n, setN] = useState<string>("");
    const [result, setResult] = useState({ m: "", y: ""});
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {


        setResult(CalEncryptRSA(p, q))
    }
    return (
        <IonItem>
            <IonLabel position="stacked">Bản rõ</IonLabel>
            <IonInput onIonChange={e => setM(e.detail.value!)} value={m}
                clearInput> </IonInput>
            <IonLabel position="stacked">e</IonLabel>
            <IonInput onIonChange={e => setE(e.detail.value!)} value={e}
                clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">n</IonLabel>
            <IonInput onIonChange={e => setE(e.detail.value!)} value={n}
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
                        <IonLabel position="stacked">Bản rõ dạng số</IonLabel>
                        <IonTextarea color="success" value={result.m} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol size="12">
                        <IonLabel position="stacked">Bản mã</IonLabel>
                        <IonTextarea color="success" value={result.y} readonly autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza} />
            </IonReorder>
        </IonItem>
    );
};

export default EncryptRSA;

