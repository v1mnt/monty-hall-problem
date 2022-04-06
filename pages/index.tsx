import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import NumberInput from "../components/NumberInput";
import styles from "../styles/Form.module.css";

export default function Form() {
    const [amountD, setAmountD] = useState(3);
    const [hGift, sethGift] = useState(1);

    return (
        <div className={styles.form}>
            <div>
                <Card bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Card>
                <Card>
                    <NumberInput
                        text={"Qtde Portas?"}
                        value={amountD}
                        onChange={(e) => setAmountD(e)}
                    />
                </Card>
            </div>
            <div>
                <Card>
                    <NumberInput
                        text={"Porta com Presente?"}
                        value={hGift}
                        onChange={(e) => sethGift(e)}
                    />
                </Card>
                <Card bgcolor="#28a085">
                    <Link href={`/game/${amountD}/${hGift}`}>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Card>
            </div>
        </div>
    );
}
