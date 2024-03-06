import React from "react";
import styles from "./styles.module.scss";
import { MdPowerSettingsNew } from "react-icons/md";

export default function Powerbutton() {
  return (
    <div className={styles.powerbutton}>
      <MdPowerSettingsNew />
    </div>
  );
}
