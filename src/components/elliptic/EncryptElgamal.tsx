import {
    IonButton, IonCol,
    IonGrid,
    IonIcon, IonInput, IonItem, IonLabel,
    IonReorder, IonRow, IonTextarea, IonTitle
} from '@ionic/react';
import './Elliptic.css';
import {useEffect, useState} from "react";
import {pizza} from "ionicons/icons";
import {CalModularExponentiation} from "../modular-exponentiation/ModularExponentiation";
import {CalInverse} from "../inverse/Inverse";

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

const EncryptElgamal: React.FC = (props: { p?: string, setParams?: (input: any) => any }) => {
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [p, setP] = useState<string>("");
    const [x, setX] = useState<string>("");
    const [y, setY] = useState<string>("");
    const [pX, setPX] = useState<string>("");
    const [pY, setPY] = useState<string>("");
    const [ranA, setRanA] = useState<string>("");
    const [priv, setPriv] = useState<string>("");
    const [result, setResult] = useState<any>({pb: {}, pc1: {}, pc2: {}, dPc1KPb: {}, dPM: {}});
    const [show, setShow] = useState<boolean>(false);
    useEffect(() => {
        if (props.p) setP(props.p)
    }, [props.p])
    const getNumber = () => {
        const pb = CalMultiply(priv, x, y, a, p);
        const pc1 = CalMultiply(ranA, x, y, a, p);
        const pc2KPb = CalMultiply(ranA, pb.x.toString(), pb.y.toString(), a, p);
        const pc2 = CalAddElliptic(pX, pY, pc2KPb.x.toString(), pc2KPb.y.toString(), p);
        const dPc1KPb = CalMultiply(priv.toString(), pc1.x.toString(), pc1.y.toString(), a, p);
        const dPM = CalAddElliptic(pc2.x.toString(), pc2.y.toString(), dPc1KPb.x.toString(), (-dPc1KPb.y).toString(), p)

        setResult({pb, pc1, pc2, dPc1KPb, dPM})
    }

    useEffect(() => {
        // let a = "-1";
        // let b = "188";
        // let p = "751";
        // const chosePoint = {x: "0", y: "376"};
        // // const chosePoint = sqG[0];
        // let cur = CalDoubleElliptic(chosePoint.x.toString(), chosePoint.y.toString(), a, p);
        // const vv = [chosePoint, cur];
        // while (true) {
        //     // console.log(cur)
        //     cur = CalAddElliptic(chosePoint.x.toString(), chosePoint.y.toString(), cur.x.toString(), cur.y.toString(), p)
        //     vv.push(cur);
        //     if (cur.x.toString() === chosePoint.x.toString()) break;
        // }
        // console.log(vv)

        // console.log([pb]);
        // console.log([pc1, pc2]);
        //
        // const dPc1KPb = CalMultiply(priv.toString(), pc1.x.toString(), pc1.y.toString(), a, p);
        // const dPM = CalAddElliptic(pc2.x.toString(), pc2.y.toString(), dPc1KPb.x.toString(), (-dPc1KPb.y).toString(), p)
        // console.log([dPM]);
    }, [])
    return (
        <IonItem>
            <IonTitle>Mã hoá và giải mã (Alice cần gửi tin nhắn cho Bob)</IonTitle>
            <IonTitle>Đường cong Elliptic y<sup>2</sup> = x<sup>3</sup> + ax + b (mod p)</IonTitle>
            <IonLabel position="stacked">a</IonLabel>
            <IonInput onIonChange={e => setA(e.detail.value!)} value={a}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">b</IonLabel>
            <IonInput onIonChange={e => setB(e.detail.value!)} value={b}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">p</IonLabel>
            <IonInput onIonChange={e => setP(e.detail.value!)} value={p}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonTitle>Khoá riêng của Bob</IonTitle>
            <IonLabel position="stacked">s</IonLabel>
            <IonInput onIonChange={e => setPriv(e.detail.value!)} value={priv}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonTitle>Toạ độ của điểm P trên đường cong Elliptic </IonTitle>
            <IonLabel position="stacked">x</IonLabel>
            <IonInput onIonChange={e => setX(e.detail.value!)} value={x}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">y</IonLabel>
            <IonInput onIonChange={e => setY(e.detail.value!)} value={y}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonTitle>Số nguyên ngẫu nhiên k của Alice</IonTitle>
            <IonLabel position="stacked">k</IonLabel>
            <IonInput onIonChange={e => setRanA(e.detail.value!)} value={ranA}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonTitle>Toạ độ của bản tin cần mã hoá</IonTitle>
            <IonLabel position="stacked">x</IonLabel>
            <IonInput onIonChange={e => setPX(e.detail.value!)} value={pX}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">y</IonLabel>
            <IonInput onIonChange={e => setPY(e.detail.value!)} value={pY}
                      clearInput inputmode={"numeric"}> </IonInput>
            <div slot="end">
                <IonButton onClick={getNumber} size="default">Xử lý</IonButton>
                <br/>
                <IonButton onClick={() => {
                    setShow(!show)
                }} size="default">{show ? 'Ẩn KQ' : 'Hiện KQ'}</IonButton>
            </div>
            <IonTitle style={{display: show ? '' : 'none'}}>Kết quả:</IonTitle>
            <IonGrid style={{display: show ? '' : 'none'}}>
                <IonRow>
                    <IonCol size="12">
                        <IonLabel position="stacked">Publickey của Bob</IonLabel>
                        <IonTextarea color="success" value={`${result.pb.x}, ${result.pb.y}`} readonly
                                     autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol size="12">
                        <IonLabel position="stacked">Bản mã</IonLabel>
                        <IonTextarea color="success"
                                     value={`[(${result.pc1.x}, ${result.pc1.y}), (${result.pc2.x}, ${result.pc2.y})]`}
                                     readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol size="12">
                        <IonLabel position="stacked">Bản rõ được giải từ bản mã</IonLabel>
                        <IonTextarea color="success" value={`(${result.dPM.x}, ${result.dPM.y})`} readonly
                                     autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonReorder slot="end">
                <IonIcon icon={pizza}/>
            </IonReorder>
        </IonItem>
    );
};

export default EncryptElgamal;

