import React, { useMemo } from "react";
import { useCountdown } from "../hooks/useCountdown";

import styles from "../styles/mint.module.scss";

interface Props {
  to: Date;
}

const MintCountdown = ({ to }: Props): JSX.Element => {
  const countdown = useCountdown(to);

  const days = useMemo(() => countdown?.days || 0, [countdown]);
  const hours = useMemo(() => countdown?.hours || 0, [countdown]);
  const mins = useMemo(() => countdown?.mins || 0, [countdown]);
  const seconds = useMemo(() => countdown?.seconds || 0, [countdown]);

  return (
    <div className={styles["mint__countdown"]}>
      <div className={styles["col__countdown"]}>
        <p className={styles["value"]}>{days}</p>
        <p className={styles["value__description"]}>Days</p>
      </div>
      <div className={styles["col__countdown"]}>
        <p className={styles["value"]}>{hours}</p>
        <p className={styles["value__description"]}>Hours</p>
      </div>
      <div className={styles["col__countdown"]}>
        <p className={styles["value"]}>{mins}</p>
        <p className={styles["value__description"]}>Minutes</p>
      </div>
      <div className={styles["col__countdown"]}>
        <p className={styles["value"]}>{seconds}</p>
        <p className={styles["value__description"]}>Seconds</p>
      </div>
    </div>
  );
};

export default MintCountdown;
