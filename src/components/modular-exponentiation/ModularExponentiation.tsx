import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea
} from '@ionic/react';
import './ModularExponentiation.css';
import {useState} from "react";
import {pizza} from "ionicons/icons";

const CalModularExponentiation = (b: string, n: string, m: string): { result: string, aEx: string[], aiEx: string[], xEx: string[], powerEx: string[] } => {
    let power = BigInt(b) % BigInt(m);
    const aEx = [];
    const aiEx = [];
    let _n = BigInt(n);
    let x = BigInt(1);
    const xEx: string[] = [];
    const powerEx = [power.toString()];
    while (_n > 0) {
        aEx.push(_n.toString());
        aiEx.push((_n % BigInt(2)).toString());
        _n = _n / BigInt(2);
    }
    aiEx.forEach((_ai, i) => {
        xEx.push(x.toString());
        if (_ai === '1') {
            x = (x * power) % BigInt(m);
        }
        power = (power * power) % BigInt(m);
        powerEx.push(power.toString())
    })
    xEx.push(x.toString());
    return {result: x.toString(), aEx: aEx, aiEx: aiEx, xEx, powerEx}
}

const ModularExponentiation: React.FC = () => {
    const [b, setB] = useState<string>("5");
    const [n, setN] = useState<string>("20");
    const [m, setM] = useState<string>("43");
    const [show, setShow] = useState<boolean>(false);
    const [result, setResult] = useState("0");
    const [aEx, setAEx] = useState<string[]>([]);
    const [aiEx, setAiEx] = useState<string[]>([]);
    const [xEx, setXEx] = useState<string[]>([]);
    const [powerEx, setPowerEx] = useState<string[]>([]);

    const getNumber = () => {
        const {result, aiEx, aEx, xEx, powerEx} = CalModularExponentiation(b, n, m);
        setResult(result);
        setAEx(aEx);
        setAiEx(aiEx);
        setXEx(xEx);
        setPowerEx(powerEx);
    }


    return (
        <IonItem>
            <IonLabel position="stacked">Cơ số</IonLabel>
            <IonInput onIonChange={e => setB(e.detail.value!)} value={b}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">Số mũ</IonLabel>
            <IonInput onIonChange={e => setN(e.detail.value!)} value={n}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">Modulus</IonLabel>
            <IonInput onIonChange={e => setM(e.detail.value!)} value={m}
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
                        <IonLabel position="stacked">B<sup>N</sup> mod M</IonLabel>
                        <IonTextarea color="success" value={result} readonly autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid fixed className={"my-grid"} style={{display: show ? '' : 'none'}}>
                <IonRow align-items-end>
                    <IonCol className={"my-col"} size="5">a</IonCol>
                    <IonCol className={"my-col"} size="5">ai</IonCol>
                    <IonCol className={"my-col"} size="5">x</IonCol>
                    <IonCol className={"my-col"} size="5">power</IonCol>
                </IonRow>

                {xEx.map((x, i) => {
                    return (
                        <IonRow align-items-end>
                            <IonCol className={"my-col"} size="5">
                                <div>{aEx[i]}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="5">
                                <div>{aiEx[i]}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="5">
                                <div>{x}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="5">
                                <div>{powerEx[i]}</div>
                            </IonCol>
                        </IonRow>
                    )
                })}

            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza}/>
            </IonReorder>
        </IonItem>
    );
};

export default ModularExponentiation;
