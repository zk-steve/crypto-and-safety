import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea, IonTitle
} from '@ionic/react';
import './Elliptic.css';
import {useEffect, useState} from "react";
import {pizza, square} from "ionicons/icons";
import {CalModularExponentiation} from "../modular-exponentiation/ModularExponentiation";
import {CalInverse} from "../inverse/Inverse";

export const CalSquareGroup = (_p: string) => {
    const p = BigInt(_p);
    let a: any = {};
    let count = 0;
    for (let i = BigInt(1); i < p; i++) {
        const r = (CalModularExponentiation(i.toString(), "2", _p).result);
        if (!a[r] && count < 1000) {
            count ++;
            a[r] = [];
        }
        if (a[r]){
            a[r].push(i);
        }
    }
    return a
}

export const CalPoints = (q: any, _a: string, _b: string, _p: string) => {
    const a = BigInt(_a);
    const b = BigInt(_b);
    const p = BigInt(_p);
    const re = [];
    for (let i = BigInt(0); i < p; i++) {
        if (re.length > 100) break;
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

const Point: React.FC = (props: { setParams?: (input: any) => any }) => {
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [p, setP] = useState<string>("");
    const [result, setResult] = useState<any>({square: {}, points: []});
    const [show, setShow] = useState<boolean>(false);

    const getNumber = () => {
        const sqr = CalSquareGroup(p);
        const points = CalPoints(sqr, a, b, p);
        setResult({square: sqr, points});
    }
    useEffect(() => {
        if (props?.setParams) props.setParams({a, b, p, square: result.square});
    }, [a, b, p]);
    return (
        <IonItem>
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
                <br/>
                <IonButton onClick={() => {
                    setShow(!show)
                }} size="default">{show ? 'Ẩn KQ' : 'Hiện KQ'}</IonButton>
            </div>
            <IonTitle>Thặng dư bậc hai</IonTitle>
            <IonGrid fixed className={"my-grid"} style={{display: show ? '' : 'none'}}>
                {/*<IonRow align-items-end>*/}
                {/*    <IonCol className={"my-col"} size="5">a</IonCol>*/}
                {/*    <IonCol className={"my-col"} size="5">ai</IonCol>*/}
                {/*    <IonCol className={"my-col"} size="5">x</IonCol>*/}
                {/*    <IonCol className={"my-col"} size="5">power</IonCol>*/}
                {/*</IonRow>*/}
                <IonRow align-items-end>
                    {Object.keys(result.square).map((x, i) => {
                        if (i > 1000) return ;
                        return (
                            <IonCol className={"my-col"} size="2">
                                <div>{x}</div>
                            </IonCol>
                        )
                    })}
                </IonRow>
            </IonGrid>
            <IonTitle>Danh sách điểm vô cực</IonTitle>
            <IonGrid fixed className={"my-grid"} style={{display: show ? '' : 'none'}}>
                <IonRow align-items-end>
                    {result.points.map((x: any, i: number) => {
                        if (i > 1000) return ;
                        return (
                            <>
                                <IonCol className={"my-col"} size="2">
                                    <div>{x.x.toString()}, {x.y.toString()}</div>
                                </IonCol>
                            </>
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

export default Point;

