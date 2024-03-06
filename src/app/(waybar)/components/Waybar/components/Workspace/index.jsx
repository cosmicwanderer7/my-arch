import React from "react";
import styles from "./styles.module.scss";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { PiNumberCircleOneFill } from "react-icons/pi";

export default function Workspace() {
  return (
    <div className={styles.workspace + " " + styles.single}>
      <PiNumberCircleOneFill />
      <TbCircleNumber2 />
      <TbCircleNumber3 />
    </div>
  );
}
