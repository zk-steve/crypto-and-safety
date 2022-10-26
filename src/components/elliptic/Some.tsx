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

export const CalAddElliptic = (_xp: string, _yp: string, _xq: string, _yq: string, _p: string) => {
    const xp = BigInt(_xp);
    const yp = BigInt(_yp);
    const xq = BigInt(_xq);
    const yq = BigInt(_yq);
    const p = BigInt(_p);
    const invr = CalInverse((xq - xp + p).toString(), _p).inverse;
    let lambda = ((yq - yp) * BigInt(invr)) % BigInt(_p);
    if (lambda < 0) lambda += BigInt(_p);
    const lam2 = CalModularExponentiation(lambda.toString(), "2", _p).result;
    let xr = (BigInt(lam2) - xp - xq) % BigInt(_p);
    if (xr < 0) xr += BigInt(_p);
    let yr = (BigInt(lambda) * (xp - xr) - yp) % BigInt(_p);
    if (yr < 0) yr += BigInt(_p);
    return {x: xr, y: yr, lambda}
}

export const CalDoubleElliptic = (_xp: string, _yp: string, _a: string, _p: string) => {
    const xp = BigInt(_xp);
    const yp = BigInt(_yp);
    const a = BigInt(_a);
    const xp2 = CalModularExponentiation(xp.toString(), "2", _p).result;
    const invr = CalInverse((BigInt(2) * yp).toString(), _p).inverse;
    let lambda = ((BigInt(3) * BigInt(xp2) + a) * BigInt(invr)) % BigInt(_p);
    if (lambda < 0) lambda += BigInt(_p);
    const lam2 = CalModularExponentiation(lambda.toString(), "2", _p).result;
    let xr = (BigInt(lam2) - BigInt(2) * xp) % BigInt(_p);
    if (xr < 0) xr += BigInt(_p);
    let yr = (BigInt(lambda) * (xp - xr) - yp) % BigInt(_p);
    if (yr < 0) yr += BigInt(_p);
    return {x: xr, y: yr, lambda}
}
export const CalMultiply = (_d: string, _xp: string, _yp: string, _a: string, _p: string) => {
    const xp = BigInt(_xp);
    const yp = BigInt(_yp);
    const d = BigInt(_d);
    const recur: any = ({x, y}: { x: bigint, y: bigint }, n: bigint) => {
        if (n === BigInt(0)) {
            return {x: BigInt(0), y: BigInt(0)}
        }
        if (n === BigInt(1)) {
            return {x, y}
        }
        if (n % BigInt(2) === BigInt(1)) {
            const p2: any = recur({x, y}, (n - BigInt(1)));
            return CalAddElliptic(x.toString(), y.toString(), p2.x.toString(), p2.y.toString(), _p)
        }
        return recur(CalDoubleElliptic(x.toString(), y.toString(), _a, _p), n / BigInt(2))
    }
    return recur({x: xp, y: yp}, d)
}

const Some: React.FC = () => {
    const [p, setP] = useState<string>("");
    const [q, setQ] = useState<string>("");
    const [result, setResult] = useState({pi: "", e: "", d: "", n: ""});
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {
    }

    useEffect(() => {
        let a = "-1";
        let b = "188";
        let p = "751";
        const sqG = CalSquareGroup(p);
        const chosePoint = {x: "0", y: "376"};
        // const chosePoint = sqG[0];
        let cur = CalDoubleElliptic(chosePoint.x.toString(), chosePoint.y.toString(), a, p);
        const vv = [chosePoint, cur];
        while (true) {
            // console.log(cur)
            cur = CalAddElliptic(chosePoint.x.toString(), chosePoint.y.toString(), cur.x.toString(), cur.y.toString(), p)
            vv.push(cur);
            if (cur.x.toString() === chosePoint.x.toString()) break;
        }
        console.log(vv)
        console.log(sqG)
        const priv = 85;
        const pb = CalMultiply(priv.toString(), chosePoint.x.toString(), chosePoint.y.toString(), a, p);
        const ranA = 113;
        const pc1 = CalMultiply(ranA.toString(), chosePoint.x.toString(), chosePoint.y.toString(), a, p);
        const pc2KPb = CalMultiply(ranA.toString(), pb.x.toString(), pb.y.toString(), a, p);
        const pm = {x: "443", y: "253"};
        const pc2 = CalAddElliptic(pm.x.toString(), pm.y.toString(), pc2KPb.x.toString(), pc2KPb.y.toString(), p)
        console.log([pb]);
        console.log([pc1, pc2]);
        const dPc1KPb = CalMultiply(priv.toString(), pc1.x.toString(), pc1.y.toString(), a, p);
        const dPM = CalAddElliptic(pc2.x.toString(), pc2.y.toString(), dPc1KPb.x.toString(), (-dPc1KPb.y).toString(), p)
        console.log([dPM]);
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

