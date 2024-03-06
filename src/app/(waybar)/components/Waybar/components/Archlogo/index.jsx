import React from "react";
import styles from "./styles.module.scss";
import { GrArchlinux } from "react-icons/gr";

export default function Archlogo() {
  return (
    <div className={styles.archlogo}>
      <GrArchlinux />
    </div>
  );
}
