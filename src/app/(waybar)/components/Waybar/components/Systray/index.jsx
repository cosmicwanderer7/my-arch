import React from "react";
import styles from "./styles.module.scss";
import { MdSignalWifi2Bar } from "react-icons/md";
import { SiBluetooth } from "react-icons/si";

export default function Systray() {
  return (
    <div className={styles.systray}>
      <MdSignalWifi2Bar />
      <SiBluetooth />
    </div>
  );
}
