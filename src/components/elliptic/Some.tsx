import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea
} from '@ionic/react';
import './Elliptic.css';
import {useEffect, useState} from "react";
import {pizza} from "ionicons/icons";
import {CalModularExponentiation} from "../modular-exponentiation/ModularExponentiation";
import {CalInverse} from "../inverse/Inverse";

export const CalSquareGroup = (_p: string) => {
    const p = BigInt(_p);
    let a: any = {};
    for (let i = BigInt(1); i < p; i++) {
        const r = (CalModularExponentiation(i.toString(), "2", _p).result);
        a[r] = [...(a[r] ?? []), i];
    }
    return a
}

export const CalPoints = (q: any, _a: string, _b: string, _p: string) => {
    const a = BigInt(_a);
    const b = BigInt(_b);
    const p = BigInt(_p);
    const re = [];
    for (let i = BigInt(0); i < p; i++) {
        const x3 = (CalModularExponentiation(i.toString(), "3", _p).result);
        const r = (BigInt(x3) + i * a + b) % p;
        if (q[r.toString()]) re.push({x: i, y: q[r.toString()][0]}, {x: i, y: q[r.toString()][1]});
    }
    return re
}


export const CalAddElliptic = (_xp: string, _yp: string, _xq: string, _yq: string, _p: string) => {
    const xp = BigInt(_xp);
    const yp = BigInt(_yp);
    const xq = BigInt(_xq);
    const yq = BigInt(_yq);
    const invr = CalInverse((xq - xp).toString(), _p).inverse;
    let lambda = ((yq - yp) * BigInt(invr)) % BigInt(_p);
    if (lambda < 0) lambda += BigInt(_p);
    const lam2 = CalModularExponentiation(lambda.toString(), "2", _p).result;
    let xr = (BigInt(lam2) - xp - xq) % BigInt(_p);
    if (xr < 0) xr += BigInt(_p);
    let yr = (BigInt(lambda) * (xp - xr) - yp) % BigInt(_p);
    if (yr < 0) yr += BigInt(_p);
    return {x:xr, y:yr, lambda}
}

const Some: React.FC = () => {
    const [p, setP] = useState<string>("");
    const [q, setQ] = useState<string>("");
    const [result, setResult] = useState({pi: "", e: "", d: "", n: ""});
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {
    }

    useEffect(() => {
        // let a = "5";
        // let b = "4";
        // let p = "127";
        let a = "-1";
        let b = "188";
        let p = "751";
        const sqG = CalSquareGroup(p);
        const r = CalPoints(sqG, a, b, p);
        const chosePoint = r[0];
        const vv = [chosePoint];
        let cur = chosePoint;
        let i = 0;
        while (true){
            cur = CalAddElliptic(cur.x.toString(), cur.y.toString(), chosePoint.x.toString(), chosePoint.y.toString(), p)
            i++;
            if (i > 20) break;
            // if (!sqG[cur.x.toString()]) break;
            vv.push(cur);
        }
        // const rr = r.map((v => {
        //     return {...v, "2p": CalAddElliptic(v.x.toString(), v.y.toString(), v.x.toString(), v.y.toString(), p)}
        // }))
        console.log(vv);

        // const sqG = CalSquareGroup("23");
        // const r = CalPoints(sqG, "1", "1", "23");
        // console.log(r);
        // const t = CalAddElliptic("3", "10", "9", "7", "23");
        // console.log(t);
    }, [])
    return (
        <IonItem>
            <IonLabel position="stacked">PPP</IonLabel>
            <IonInput onIonChange={e => setP(e.detail.value!)} value={p}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">Q</IonLabel>
            <IonInput onIonChange={e => setQ(e.detail.value!)} value={q}
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
                <IonIcon icon={pizza}/>
            </IonReorder>
        </IonItem>
    );
};

export default Some;

