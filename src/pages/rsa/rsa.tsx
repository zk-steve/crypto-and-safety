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
    IonReorderGroup, IonSpinner,
    IonTextarea,
    IonTitle,
    IonToolbar, ItemReorderEventDetail
} from '@ionic/react';
import './rsa.css';
import {useEffect, useMemo, useRef, useState} from "react";
import RSACom, {CalDRSA} from '../../components/rsa/rsa';
import {DecryptRSA, EncodeMessage, EncryptRSA} from '../../components/rsa/EncryptRSA';
import {RandomPrime} from '../../lib/random-prime';
import {CalModularExponentiation} from '../../components/modular-exponentiation/ModularExponentiation';
import {RandomBigIntBits} from "../../lib/random-bigint";
import {sha512} from "crypto-hash";

const RSA: React.FC = () => {
    const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
        event.detail.complete();
    }
    const [input, setInput] = useState<any>({});
    const inputFile = useRef(null);
    const [isLoading, setLoading] = useState<any>({});
    const [result, setResult] = useState<any>({e: "65537"});
    const [components, setComponents] = useState<any[]>([]);
    const generatePublicKey = () => {
        setLoading({...isLoading, s1: true})
    }
    useEffect(() => {
        if (!isLoading.s1) return;
        setTimeout(() => {
            while (true) {
                const p = RandomPrime(input.p, 10).toString();
                const q = RandomPrime(input.q, 10).toString();
                const d = CalDRSA(p, q, result.e)
                const testMessage = RandomBigIntBits(input.p);
                const signature = CalModularExponentiation(testMessage.toString(), d.d, d.n).result;
                const verify = CalModularExponentiation(signature, result.e, d.n).result;
                if (!verify) {
                    continue;
                }
                setResult({...result, p, q});
                setLoading({...isLoading, s1: false})
                break;
            }
        }, 10)
    }, [isLoading.s1])
    useEffect(() => {
        if (!result.p) return;
        const d = CalDRSA(result.p, result.q, result.e)
        setResult({...result, d: d.d, pi: d.pi, n: d.n})
    }, [result.p]);

    const step2 = () => {
        const m_number = BigInt('0x' + result.hashFile).toString();
        const signature = CalModularExponentiation(m_number, result.d, result.n).result;
        setResult({...result, m_number, signature});
    }
    const step3 = () => {
        const verify = BigInt(CalModularExponentiation(result.signature, result.e, result.n).result).toString(16);
        const isTrue = verify === result.hashFile
        setResult({...result, verify, isTrue});
    }
    const handleFileInput = (e: any) => {
        setLoading({...isLoading, loadFile: true});
        const fr = new FileReader();
        fr.onload = async () => {
            if (!fr.result) return;
            const hashFile = await sha512(fr.result);
            setResult({...result, hashFile});
            setLoading({...isLoading, loadFile: false});
        }
        fr.readAsText(e.target.files[0]);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
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
                    {result.signature ? (<IonItem>
                        <h2>B3: Xác thực</h2>
                        <IonLabel position="stacked"></IonLabel>
                        <IonButton onClick={step3} slot="end" size="default">Xử lý</IonButton>
                        <h3 style={{display: result.verify ? '' : 'none'}}>Mã xác thực (hash): X = Y<sup>E</sup> mod N</h3>
                        <IonTextarea style={{display: result.verify ? '' : 'none'}} color="success"
                                     value={result.verify} readonly autoGrow></IonTextarea>
                        <h3 style={{display: result.verify ? '' : 'none'}}>Kiểm tra xem X = Y ?</h3>
                        <IonTextarea style={{display: result.verify ? '' : 'none'}} color="success"
                                     value={result.isTrue} readonly autoGrow></IonTextarea>
                    </IonItem>) : (<></>)}
                    {result.p ? (<IonItem>
                        <h2>B2: Chọn File cần ký</h2>
                        <IonLabel position="stacked"> </IonLabel>
                        <IonButton onClick={() => {
                            (inputFile as any)?.current?.click()
                        }} size="default">Chọn File</IonButton>
                        <input ref={inputFile} type="file" style={{display: "none"}} className="form-control"
                               id="file-input" onChange={handleFileInput}/>
                        <h3 style={{display: result.hashFile ? '' : 'none'}}>Mã băm của File</h3>
                        <IonTextarea style={{display: result.hashFile ? '' : 'none'}} color="success"
                                     value={result.hashFile} readonly autoGrow></IonTextarea>
                        <IonButton onClick={step2}  style={{display: result.hashFile ? '' : 'none'}}
                                   size="default">{isLoading.loadFile ? "Đang đọc file" : "Xử lý"}</IonButton>
                        <h3 style={{display: result.signature ? '' : 'none'}}>Chữ ký Y = M<sup>D</sup> mod N</h3>
                        <IonTextarea style={{display: result.signature ? '' : 'none'}} color="success"
                                     value={result.signature} readonly autoGrow></IonTextarea>
                                           </IonItem>) : (<></>)}
                    <IonItem>
                        <h2>B1: Sinh khoá</h2>
                        <IonLabel position="stacked">Số bit của P</IonLabel>
                        <IonInput type="number"
                                  onIonChange={e => setInput({...input, p: parseInt(e.detail.value!, 10)})}
                                  value={input.p}
                                  clearInput inputmode={"numeric"}> </IonInput>
                        <IonLabel position="stacked">Số bit của Q</IonLabel>
                        <IonInput type="number"
                                  onIonChange={e => setInput({...input, q: parseInt(e.detail.value!, 10)})}
                                  value={input.q}
                                  clearInput inputmode={"numeric"}> </IonInput>
                        <IonButton onClick={generatePublicKey} slot="end" size="default">
                            <IonSpinner name="crescent" style={{display: isLoading.s1 ? '' : 'none'}}></IonSpinner>
                            Xử lý
                        </IonButton>
                        <h3 style={{display: result.p ? '' : 'none'}}>P</h3>
                        <IonTextarea style={{display: result.p ? '' : 'none'}} color="success" value={result.p} readonly
                                     autoGrow></IonTextarea>
                        <h3 style={{display: result.q ? '' : 'none'}}>Q</h3>
                        <IonTextarea style={{display: result.q ? '' : 'none'}} color="success" value={result.q} readonly
                                     autoGrow></IonTextarea>
                        <h3 style={{display: result.pi ? '' : 'none'}}>Ф(n)=(p-1)(q-1)</h3>
                        <IonTextarea style={{display: result.pi ? '' : 'none'}} color="success" value={result.pi}
                                     readonly autoGrow></IonTextarea>
                        <h3 style={{display: result.p ? '' : 'none'}}>E</h3>
                        <IonTextarea style={{display: result.p ? '' : 'none'}} color="success" value={result.e} readonly
                                     autoGrow></IonTextarea>
                        <h3 style={{display: result.d ? '' : 'none'}}>D</h3>
                        <IonTextarea style={{display: result.d ? '' : 'none'}} color="success" value={result.d} readonly
                                     autoGrow></IonTextarea>
                        <h3 style={{display: result.n ? '' : 'none'}}>N = P * Q</h3>
                        <IonTextarea style={{display: result.n ? '' : 'none'}} color="success" value={result.n} readonly
                                     autoGrow></IonTextarea>
                    </IonItem>

                </IonReorderGroup>
                {/*<ExploreContainer name={name} />*/}
            </IonContent>
        </IonPage>
    );
};

export default RSA;
