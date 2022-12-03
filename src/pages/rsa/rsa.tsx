import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonReorder,
    IonReorderGroup,
    IonTextarea,
    IonTitle,
    IonToolbar, ItemReorderEventDetail
} from '@ionic/react';
import './rsa.css';
import { useEffect, useMemo, useState } from "react";
import RSACom, { CalDRSA } from '../../components/rsa/rsa';
import { DecodeMessage, DecryptRSA, EncodeMessage, EncryptRSA } from '../../components/rsa/EncryptRSA';
import { RandomPrime } from '../../lib/random-prime';
import { CalModularExponentiation } from '../../components/modular-exponentiation/ModularExponentiation';

const RSA: React.FC = () => {
    const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
        event.detail.complete();
    }
    const [input, setInput] = useState<any>({});
    const [result, setResult] = useState<any>({ e: "65537" });
    const [components, setComponents] = useState<any[]>([]);
    const generatePublicKey = () => {
        const p = RandomPrime(input.p, 10).toString();
        const q = RandomPrime(input.q, 10).toString();
        setResult({ ...result, p, q });
    }
    const step2 = () => {
        const m_number = EncodeMessage(input.m);
        const signature = CalModularExponentiation(m_number, result.d, result.n).result;
        setResult({ ...result, m_number, signature });
    }
    const step3 = () => {
        const verify = CalModularExponentiation(result.signature, result.e, result.n).result;
        const isTrue = verify == result.m_number
        setResult({ ...result, verify, isTrue });
    }
    useEffect(() => {
        if (!result.p) return;
        const d = CalDRSA(result.p, result.q, result.e)
        setResult({ ...result, d: d.d, pi: d.pi, n: d.n })
    }, [result.p]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>RSA</IonTitle>

                    <IonButton onClick={() => {
                        setComponents([...components, (<RSACom></RSACom>)])
                    }} slot="end" size="default">Tính d</IonButton>
                    <IonButton onClick={() => {
                        setComponents([...components, (<EncryptRSA></EncryptRSA>)])
                    }} slot="end" size="default">Mã hoá</IonButton>
                    <IonButton onClick={() => {
                        setComponents([...components, (<DecryptRSA></DecryptRSA>)])
                    }} slot="end" size="default">Giải mã</IonButton>
                    <IonButton onClick={() => {
                        setComponents([])
                    }} slot="end" size="default">Xoá</IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
                    <IonItem>
                        <h2>B1: Sinh khoá</h2>
                        <IonLabel position="stacked">Số bit của P</IonLabel>
                        <IonInput type="number" onIonChange={e => setInput({ ...input, p: parseInt(e.detail.value!, 10) })} value={input.p}
                            clearInput inputmode={"numeric"}> </IonInput>
                        <IonLabel position="stacked">Số bit của Q</IonLabel>
                        <IonInput type="number" onIonChange={e => setInput({ ...input, q: parseInt(e.detail.value!, 10) })} value={input.q}
                            clearInput inputmode={"numeric"}> </IonInput>
                        <IonButton onClick={generatePublicKey} slot="end" size="default">Xử lý</IonButton>
                        <h3 style={{ display: result.p ? '' : 'none' }}>P</h3>
                        <IonTextarea style={{ display: result.p ? '' : 'none' }} color="success" value={result.p} readonly autoGrow></IonTextarea>
                        <h3 style={{ display: result.q ? '' : 'none' }}>Q</h3>
                        <IonTextarea style={{ display: result.q ? '' : 'none' }} color="success" value={result.q} readonly autoGrow></IonTextarea>
                        <h3 style={{ display: result.pi ? '' : 'none' }}>Ф(n)=(p-1)(q-1)</h3>
                        <IonTextarea style={{ display: result.pi ? '' : 'none' }} color="success" value={result.pi} readonly autoGrow></IonTextarea>
                        <h3 style={{ display: result.p ? '' : 'none' }}>E</h3>
                        <IonTextarea style={{ display: result.p ? '' : 'none' }} color="success" value={result.e} readonly autoGrow></IonTextarea>
                        <h3 style={{ display: result.d ? '' : 'none' }}>D</h3>
                        <IonTextarea style={{ display: result.d ? '' : 'none' }} color="success" value={result.d} readonly autoGrow></IonTextarea>
                        <h3 style={{ display: result.n ? '' : 'none' }}>N = P * Q</h3>
                        <IonTextarea style={{ display: result.n ? '' : 'none' }} color="success" value={result.n} readonly autoGrow></IonTextarea>
                    </IonItem>
                    {result.p ? (<IonItem>
                        <h2>B2: Ký</h2>
                        <IonLabel position="stacked">Thông điệp (Message)</IonLabel>
                        <IonInput onIonChange={e => setInput({ ...input, m: e.detail.value! })} value={input.m}
                            clearInput> </IonInput>
                        <IonButton onClick={step2} slot="end" size="default">Xử lý</IonButton>
                        <h3 style={{ display: result.m_number ? '' : 'none' }}>Thông điệp dạng số</h3>
                        <IonTextarea style={{ display: result.m_number ? '' : 'none' }}  color="success" value={result.m_number} readonly autoGrow></IonTextarea>
                        <h3 style={{ display: result.signature ? '' : 'none' }}>Chữ ký Y = M<sup>D</sup> mod N</h3>
                        <IonTextarea style={{ display: result.signature ? '' : 'none' }}  color="success" value={result.signature} readonly autoGrow></IonTextarea>
                    </IonItem>) : (<></>)}
                    {result.signature ? (<IonItem>
                        <h2>B3: Xác thực</h2>
                        <IonLabel position="stacked"></IonLabel>
                        <IonInput> </IonInput>
                        <IonButton onClick={step3} slot="end" size="default">Xử lý</IonButton>
                        <h3 style={{ display: result.verify ? '' : 'none' }}>Mã xác thực: X = Y<sup>E</sup> mod N</h3>
                        <IonTextarea style={{ display: result.verify ? '' : 'none' }} color="success" value={result.verify} readonly autoGrow></IonTextarea>
                        <h3 style={{ display: result.verify ? '' : 'none' }}>Kiểm tra xem X = Y ?</h3>
                        <IonTextarea style={{ display: result.verify ? '' : 'none' }} color="success" value={result.isTrue} readonly autoGrow></IonTextarea>
                    </IonItem>) : (<></>)}
                </IonReorderGroup>
                {/*<ExploreContainer name={name} />*/}
            </IonContent>
        </IonPage>
    );
};

export default RSA;
