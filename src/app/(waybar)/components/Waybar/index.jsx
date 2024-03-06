import React from "react";
import Archlogo from "./components/Archlogo";
import Workspace from "./components/Workspace";
import styles from "./styles.module.scss";
import Calendar from "./components/Calender";
import Windows from "./components/Windows";
import Updates from "./components/Updates";
import Battery from "./components/Battery";
import Syscontrols from "./components/Syscontrols";
import Systray from "./components/Systray";
import Powerbutton from "./components/Powerbutton";

export default function Waybar() {
  return (
    <div className={styles.waybar}>
      <div className={styles.gaps}>
        <Archlogo />
        <Workspace />
        <Calendar />
      </div>
      <div>
        <Windows />
      </div>
      <div className={styles.gaps}>
        <Updates />
        <Battery />
        <Syscontrols />
        <Systray />
        <Powerbutton />
      </div>
    </div>
  );
}
