import {
    IonButton, IonButtons, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonIcon, IonInput, IonItem, IonItemDivider, IonLabel,
    IonList,
    IonMenuButton,
    IonPage, IonReorder, IonReorderGroup, IonRow, IonText, IonTextarea,
    IonTitle,
    IonToolbar, ItemReorderEventDetail
} from '@ionic/react';
import './Inverse.css';
import {useState} from "react";
import {RandomPrime} from "../../lib/random-prime";
import {pizza} from "ionicons/icons";

export const CalInverse = (a: string, n: string) => {
    let result = {
        d : "",
        x : "",
        y : "",
        inverse : "",
        xEx : [""],
        yEx : [""],        
        x1Ex : [""],
        y1Ex : [""],
        x2Ex : [""],
        y2Ex : [""],
        qEx : [""],
        rEx : [""],
        aEx : [""],
        nEx : [""],
    }
    let _a = BigInt(a);
    let _b = BigInt(n);
    if (_b === BigInt(0)) {
        let d = _a;
        let x = BigInt(1);
        let y = BigInt(0);
        result.d = (d.toString());
        result.x = (x.toString());
        result.y = (y.toString());
        result.xEx = ([x.toString()]);
        result.yEx = ([y.toString()]);
    } else {
        let x2 = BigInt(1);
        let x1 = BigInt(0);
        let y2 = BigInt(0);
        let y1 = BigInt(1);
        const _x1Ex = [x1.toString()];
        const _x2Ex = [x2.toString()];
        const _y1Ex = [y1.toString()];
        const _y2Ex = [y2.toString()];
        const _aEx = [_a.toString()];
        const _bEx = [_b.toString()];
        const _qEx = ["-"];
        const _rEx = ["-"];
        const _xEx = ["-"];
        const _yEx = ["-"];
        while (_b > 0) {
            let q = _a / _b;
            let r = _a % _b;
            let x = x2 - q * x1;
            let y = y2 - q * y1;
            _a = _b;
            _b = r;
            x2 = x1;
            x1 = x;
            y2 = y1;
            y1 = y;
            _qEx.push(q.toString());
            _rEx.push(r.toString());
            _xEx.push(x.toString());
            _yEx.push(y.toString());
            _x1Ex.push(x1.toString());
            _x2Ex.push(x2.toString());
            _y1Ex.push(y1.toString());
            _y2Ex.push(y2.toString());
            _aEx.push(_a.toString());
            _bEx.push(_b.toString());
        }
        result.d = (_a.toString());
        result.x = (x2.toString());
        result.y = (y2.toString());
        result.inverse = ((x2 < 0 ? x2 + BigInt(n) : x2).toString());
        result.xEx = (_xEx);
        result.yEx = (_yEx);
        result.x1Ex = (_x1Ex);
        result.x2Ex = (_x2Ex);
        result.y1Ex = (_y1Ex);
        result.y2Ex = (_y2Ex);
        result.qEx = (_qEx);
        result.rEx = (_rEx);
        result.aEx = (_aEx);
        result.nEx = (_bEx);
    }
    return result;
} 


const Inverse: React.FC = () => {
    const [a, setA] = useState<string>("635");
    const [n, setN] = useState<string>("737");
    const [show, setShow] = useState<boolean>(false);
    const [resultD, setResultD] = useState("0");
    const [resultX, setResultX] = useState("0");
    const [resultY, setResultY] = useState("0");
    const [resultInverse, setResultInverse] = useState("0");
    const [aEx, setAEx] = useState<string[]>([]);
    const [nEx, setNEx] = useState<string[]>([]);
    const [x1Ex, setX1Ex] = useState<string[]>([]);
    const [x2Ex, setX2Ex] = useState<string[]>([]);
    const [y1Ex, setY1Ex] = useState<string[]>([]);
    const [y2Ex, setY2Ex] = useState<string[]>([]);
    const [qEx, setQEx] = useState<string[]>([]);
    const [rEx, setREx] = useState<string[]>([]);
    const [xEx, setXEx] = useState<string[]>([]);
    const [yEx, setYEx] = useState<string[]>([]);

    const getNumber = () => {
        const result =CalInverse(a,n);
        setResultD(result.d);
        setResultX(result.x);
        setResultY(result.y);
        setResultInverse(result.inverse);
        setXEx(result.xEx);
        setYEx(result.yEx);
        setX1Ex(result.x1Ex);
        setX2Ex(result.x2Ex);
        setY1Ex(result.y1Ex);
        setY2Ex(result.y2Ex);
        setQEx(result.qEx);
        setREx(result.rEx);
        setAEx(result.aEx);
        setNEx(result.nEx);
    }
    return (
        <IonItem>
            <IonLabel position="stacked">A</IonLabel>
            <IonInput onIonChange={e => setA(e.detail.value!)} value={a}
                      clearInput inputmode={"numeric"}> </IonInput>
            <IonLabel position="stacked">N</IonLabel>
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
                <IonRow align-items-start>
                    <IonCol>
                        <IonLabel position="stacked">d</IonLabel>
                        <IonTextarea color="success" value={resultD} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol>
                        <IonLabel position="stacked">x</IonLabel>
                        <IonTextarea color="success" value={resultX} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol>
                        <IonLabel position="stacked">y</IonLabel>
                        <IonTextarea color="success" value={resultY} readonly autoGrow></IonTextarea>
                    </IonCol>
                    <IonCol>
                        <IonLabel position="stacked">A<sup>-1</sup> mod N</IonLabel>
                        <IonTextarea color="success" value={resultInverse} readonly autoGrow></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid fixed className={"my-grid"} style={{display: show ? '' : 'none'}}>
                <IonRow align-items-end>
                    <IonCol className={"my-col"} size="2">a</IonCol>
                    <IonCol className={"my-col"} size="2">b</IonCol>
                    <IonCol className={"my-col"} size="2">q</IonCol>
                    <IonCol className={"my-col"} size="2">r</IonCol>
                    <IonCol className={"my-col"} size="2">x</IonCol>
                    <IonCol className={"my-col"} size="2">y</IonCol>
                    <IonCol className={"my-col"} size="2">x1</IonCol>
                    <IonCol className={"my-col"} size="2">x2</IonCol>
                    <IonCol className={"my-col"} size="2">y1</IonCol>
                    <IonCol className={"my-col"} size="2">y2</IonCol>
                </IonRow>

                {aEx.map((a, i) => {
                    return (
                        <IonRow align-items-end>
                            <IonCol className={"my-col"} size="2">
                                <div>{a}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="2">
                                <div>{nEx[i]}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="2">
                                <div>{qEx[i]}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="2">
                                <div>{rEx[i]}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="2">
                                <div>{xEx[i]}</div>
                            </IonCol>
                            <IonCol className={"my-col"} size="2">
                                <div>{yEx[i]}</div>
                            </IonCol>
                            {/*<IonCol  className={"my-col"} size="2" >{nEx[i]}</IonCol>*/}
                            {/*<IonCol  className={"my-col"} size="2" >{qEx[i]}</IonCol>*/}
                            {/*<IonCol  className={"my-col"} size="2" >{rEx[i]}</IonCol>*/}
                            {/*<IonCol  className={"my-col"} size="2" >{xEx[i]}</IonCol>*/}
                            {/*<IonCol  className={"my-col"} size="2" >{yEx[i]}</IonCol>*/}
                            <IonCol className={"my-col"} size="2">{x1Ex[i]}</IonCol>
                            <IonCol className={"my-col"} size="2">{x2Ex[i]}</IonCol>
                            <IonCol className={"my-col"} size="2">{y1Ex[i]}</IonCol>
                            <IonCol className={"my-col"} size="2">{y2Ex[i]}</IonCol>
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

export default Inverse;
