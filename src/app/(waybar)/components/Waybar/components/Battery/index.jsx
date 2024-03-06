import React from "react";
import styles from "./styles.module.scss";
import { MdBatteryCharging90 } from "react-icons/md";

export default function Battery() {
  return (
    <div className={styles.battery}>
      <MdBatteryCharging90 /> 90%
    </div>
  );
}
