import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea
} from '@ionic/react';
import './rsa.css';
import {useState} from "react";
import {pizza} from "ionicons/icons";
import {CalModularExponentiation} from "../modular-exponentiation/ModularExponentiation";

export const EncodeMessage = (m: string): string => {
    let result = BigInt(0);
    for (let i = 0; i < m.length; i++) {
        result += BigInt(m.charCodeAt(i) - 'a'.charCodeAt(0)) * (BigInt(26) ** BigInt(m.length - i - 1));
    }
    return result.toString();
}

export const DecodeMessage = (m: string): string => {
    let result = "";
    let _m = BigInt(m);
    while (_m > 0) {
        result = String.fromCharCode(Number(_m % BigInt(26)) + 'a'.charCodeAt(0)) + result;
        _m = _m / BigInt(26);
    }
    return result;
}

export const EncryptRSA: React.FC = () => {
    const [m, setM] = useState<string>("thepublickeyconsistsoftwonumberswhereonenumberismultiplicationoftwolargeprimenumbersandprivatekeyisalsoderivedfromthesametwoprimenumberssoifsomebodycanfactorizethelargenumbertheprivatekeyiscompromisedthereforeencryptionstrengthtotallyliesonthekeysizeandifwedoubleortriplethekeysizethestrengthofencryptionincreasesexponentiallyrsakeyscanbetypicallyorbitslongbutexpertsbelievethat");
    const [e, setE] = useState<string>("");
    const [n, setN] = useState<string>("");
    const [result, setResult] = useState({m: "", y: ""});
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {
        const _m = EncodeMessage(m);
        const y = CalModularExponentiation(_m, e, n).result;
        setResult({m : _m, y})
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
            <IonInput onIonChange={e => setN(e.detail.value!)} value={n}
                      clearInput inputmode={"numeric"}> </IonInput>
            <div slot="end">
                <IonButton onClick={getNumber} size="default">Xử lý</IonButton>
                <br/>
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
                        <IonLabel position="stacked">Bản mã m<sup>e</sup> mod(n)</IonLabel>
                        <IonTextarea color="success" value={result.y} readonly autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza}/>
            </IonReorder>
        </IonItem>
    );
};
export const DecryptRSA: React.FC = () => {
    const [y, setY] = useState<string>("");
    const [d, setD] = useState<string>("");
    const [n, setN] = useState<string>("");
    const [result, setResult] = useState({m: "", x: ""});
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {
        const x = CalModularExponentiation(y, d, n).result;
        const _m = DecodeMessage(x);

        setResult({m : _m, x})
    }
    return (
        <IonItem>
            <IonLabel position="stacked">Bản mã</IonLabel>
            <IonInput onIonChange={e => setY(e.detail.value!)} value={y}
                      clearInput> </IonInput>
            <IonLabel position="stacked">d</IonLabel>
            <IonInput onIonChange={e => setD(e.detail.value!)} value={d}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">n</IonLabel>
            <IonInput onIonChange={e => setN(e.detail.value!)} value={n}
                      clearInput inputmode={"numeric"}> </IonInput>
            <div slot="end">
                <IonButton onClick={getNumber} size="default">Xử lý</IonButton>
                <br/>
                <IonButton onClick={() => {
                    setShow(!show)
                }} size="default">{show ? 'Ẩn KQ' : 'Hiện KQ'}</IonButton>
            </div>
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <IonLabel position="stacked">Bản rõ dạng số y<sup>d</sup>mod n</IonLabel>
                        <IonTextarea color="success" value={result.x} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol size="12">
                        <IonLabel position="stacked">Bản rõ</IonLabel>
                        <IonTextarea color="success" value={result.m} readonly autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza}/>
            </IonReorder>
        </IonItem>
    );
};


