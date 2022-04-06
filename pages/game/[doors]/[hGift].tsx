import styles from "../../../styles/Game.module.css";
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/createdoors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
    const router = useRouter();

    const [doors, setDoors] = useState([]);
    const [valid, setValid] = useState(false);

    useEffect(() => {
        const doors = +router.query.doors;
        const hGift = +router.query.hGift;
        const valid = doors >= 3 && doors <= 15;
        const hgiftValid = hGift >= 1 && hGift <= doors;

        setValid(valid && hgiftValid);
    }, [doors]);

    useEffect(() => {
        const doors = +router.query.doors;
        const hGift = +router.query.hGift;
        setDoors(createDoors(doors, hGift));
    }, [router?.query]);

    function renderDoors() {
        return doors.map((door) => {
            return (
                <Door
                    key={door.number}
                    value={door}
                    onChange={(newDoor) =>
                        setDoors(updateDoors(doors, newDoor))
                    }
                />
            );
        });
    }
    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {valid ? renderDoors() : <h1>Valores inválidos</h1>}
            </div>
            <div className={styles.buttons}>
                <Link href={"/"}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    );
}
