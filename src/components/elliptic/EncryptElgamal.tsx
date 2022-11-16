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
import {CalPoints, CalSquareGroup} from "./Point";

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


const SigAndEncryptElgammal = () => {
    let pA = BigInt(467);
        let alpha = BigInt(2);
        let secretA = BigInt(127);
        let beta = CalModularExponentiation(alpha.toString(),secretA.toString(),pA.toString()).result;
        let k = 213;
        let x = BigInt(100);
        let pA_1 = pA-BigInt(1);
        let kInverse = CalInverse(k.toString(), pA_1.toString()).inverse;
        let gammal = CalModularExponentiation(alpha.toString(),k.toString(),pA.toString()).result;
        let sigma =  ((x - secretA *  BigInt(gammal)) * BigInt(kInverse)) % pA_1;
        if (sigma < BigInt(0)) sigma += pA_1;
        const signature = {gammal, sigma}
        console.log({beta, kInverse, signature})
        const beta_gammal  = CalModularExponentiation(beta.toString(),gammal.toString(),pA.toString()).result;
        const gammal_sigma  = CalModularExponentiation(gammal.toString(),sigma.toString(),pA.toString()).result;
        let left = (BigInt(beta_gammal) * BigInt(gammal_sigma)) % pA;
        if (left < BigInt(0)) left += pA;
        let right =  CalModularExponentiation(alpha.toString(),x.toString(),pA.toString()).result;
        console.log({left,right});
        const y1 = CalModularExponentiation(alpha.toString(),k.toString(),pA.toString()).result;
        const _y2 = CalModularExponentiation(beta.toString(),k.toString(),pA.toString()).result;
        const y2 = (x* BigInt(_y2)) % pA;
        const encrypt = {y1, y2};
        console.log({encrypt});
        const y1_a = CalModularExponentiation(y1.toString(),secretA.toString(),pA.toString()).result;
        const i_y1_a = CalInverse(y1_a.toString(), pA.toString()).inverse;
        let decrypt = (BigInt(i_y1_a) * y2) % pA;
        if (decrypt < BigInt(0)) decrypt += pA;
        console.log({decrypt});
}

const SigAndEncryptECDSA = () => {

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
        // let xp = "18"
        // let yp = "199"
        // let d = "7";
        // let a = "2";
        // let b = "2";
        // let p = "8291"
        let xp = "5"
        let yp = "1"
        let d = "7";
        let a = "2";
        let b = "2";
        let p = "17"
        let B = CalMultiply(d,xp,yp,a,p);
        let hX = "26";
        let key = "10";
        let R = CalMultiply(key,xp,yp,a,p);
        let r = R.x;
        let i_Key = CalInverse(key,p);
        let s = ((BigInt(hX) + BigInt(r) * BigInt(d)) * BigInt(i_Key.inverse)) % BigInt(p);
        console.log({s});
        
                // SigAndEncryptECDSA();
    }, [])
    return (
        <IonItem>
            <h3>Mã hoá và giải mã (Alice cần gửi tin nhắn cho Bob)</h3>
            <h3>Đường cong Elliptic y<sup>2</sup> = x<sup>3</sup> + ax + b (mod p)</h3>
            <IonLabel position="stacked">a</IonLabel>
            <IonInput onIonChange={e => setA(e.detail.value!)} value={a}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">b</IonLabel>
            <IonInput onIonChange={e => setB(e.detail.value!)} value={b}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">p</IonLabel>
            <IonInput onIonChange={e => setP(e.detail.value!)} value={p}
                      clearInput inputmode={"numeric"}> </IonInput>
            <h3>Khoá riêng của Bob</h3>
            <IonLabel position="stacked">s</IonLabel>
            <IonInput onIonChange={e => setPriv(e.detail.value!)} value={priv}
                      clearInput inputmode={"numeric"}> </IonInput>
            <h3>Toạ độ của điểm P trên đường cong Elliptic </h3>
            <IonLabel position="stacked">x</IonLabel>
            <IonInput onIonChange={e => setX(e.detail.value!)} value={x}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">y</IonLabel>
            <IonInput onIonChange={e => setY(e.detail.value!)} value={y}
                      clearInput inputmode={"numeric"}> </IonInput>
            <h3>Số nguyên ngẫu nhiên k của Alice</h3>
            <IonLabel position="stacked">k</IonLabel>
            <IonInput onIonChange={e => setRanA(e.detail.value!)} value={ranA}
                      clearInput inputmode={"numeric"}> </IonInput>
            <h3>Toạ độ của bản tin cần mã hoá</h3>
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
            <h3 style={{display: show ? '' : 'none'}}>Kết quả:</h3>
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

