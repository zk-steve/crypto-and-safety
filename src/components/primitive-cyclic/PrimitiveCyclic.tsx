import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea
} from '@ionic/react';
import './PrimitiveCyclic.css';
import {useState} from "react";
import {pizza} from "ionicons/icons";
import {CalEuclideanExtended} from "../euclidean-extended/EuclideanExtended";
import { CalModularExponentiation } from '../modular-exponentiation/ModularExponentiation';

export const CalPrimitives = (p: string, start: string, end: string): { result: string[] } => {
    const result : string[]= [];
    for (let i = BigInt(start); i <= BigInt(p); i++){
        const {d} = CalEuclideanExtended(i.toString(), p);
        if (d === '1') {
            let t = {} as any;
            for (let j = BigInt(1); j <= BigInt(p); j++){
                t[CalModularExponentiation(i.toString(),j.toString(), p).result] = true;
            }
            console.log(t);
            if (BigInt(Object.keys(t).length) == BigInt(p)-BigInt(1)){ 
                result.push(i.toString());
                return {result};
            }
        };
    }
    return {result};
}

const PrimitiveCyclic: React.FC<{ primeData: number[] }> = ({primeData}) => {
    const [p, setP] = useState<string>("17");
    const [start, setStart] = useState<string>("2");
    const [end, setEnd] = useState<string>("17");
    const [show, setShow] = useState<boolean>(false);
    const [result, setResult] = useState<string[]>([]);
    const [aiEx, setAiEx] = useState<string[]>([]);
    const [xEx, setXEx] = useState<string[]>([]);
    const [powerEx, setPowerEx] = useState<string[]>([]);

    const getNumber = () => {
        const {result} = CalPrimitives(p, start, end);
        setResult(result);
    }


    return (
        <IonItem>
            <IonLabel position="stacked">P</IonLabel>
            <IonInput onIonChange={e => setP(e.detail.value!)} value={p}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">Bắt đầu</IonLabel>
            <IonInput onIonChange={e => setStart(e.detail.value!)} value={start}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">Kết thúc</IonLabel>
            <IonInput onIonChange={e => setEnd(e.detail.value!)} value={end}
                      clearInput inputmode={"numeric"}> </IonInput>
            <div slot="end">
                <IonButton onClick={getNumber} size="default">Xử lý</IonButton>
                <br/>
                <IonButton onClick={() => {
                    setShow(!show)
                }} size="default">{show ? 'Ẩn KQ' : 'Hiện KQ'}</IonButton>
            </div>
            {/*<IonGrid>*/}
            {/*    <IonRow>*/}
            {/*        <IonCol size="12">*/}
            {/*            <IonLabel position="stacked">B<sup>N</sup> mod M</IonLabel>*/}
            {/*            <IonTextarea color="success" value={result} readonly autoGrow></IonTextarea>*/}
            {/*        </IonCol>*/}
            {/*    </IonRow>*/}
            {/*</IonGrid>*/}
            <IonGrid fixed className={"my-grid"} style={{display: show ? '' : 'none'}}>
                {/*<IonRow align-items-end>*/}
                {/*    <IonCol className={"my-col"} size="5">a</IonCol>*/}
                {/*    <IonCol className={"my-col"} size="5">ai</IonCol>*/}
                {/*    <IonCol className={"my-col"} size="5">x</IonCol>*/}
                {/*    <IonCol className={"my-col"} size="5">power</IonCol>*/}
                {/*</IonRow>*/}
                <IonRow align-items-end>
                    {result.map((x, i) => {
                        return (
                            <IonCol className={"my-col"} size="2">
                                <div>{x}</div>
                            </IonCol>
                        )
                    })}
                </IonRow>
            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza}/>
            </IonReorder>
        </IonItem>
    );
};

export default PrimitiveCyclic;
