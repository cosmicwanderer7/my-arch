"use client"; // This is a client component 🏽
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FaSun } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";

export default function Syscontrols() {
  const [sunValue, setSunValue] = useState(100);
  const [speakerValue, setSpeakerValue] = useState(100);
  const [microphoneValue, setMicrophoneValue] = useState(100);

  const handleWheel = (event, icon) => {
    event.preventDefault();

    let newValue = 0;

    // Determine which icon is being hovered and update the corresponding state
    switch (icon) {
      case "sun":
        newValue = Math.min(
          100,
          Math.max(0, Math.round(sunValue - event.deltaY / 10)),
        );
        setSunValue(newValue);
        break;
      case "speaker":
        newValue = Math.min(
          100,
          Math.max(0, Math.round(speakerValue - event.deltaY / 10)),
        );
        setSpeakerValue(newValue);
        break;
      case "microphone":
        newValue = Math.min(
          100,
          Math.max(0, Math.round(microphoneValue - event.deltaY / 10)),
        );
        setMicrophoneValue(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.syscontrols}>
      <div
        className={styles.iconWrapper}
        onWheel={(e) => handleWheel(e, "sun")}
      >
        <FaSun /> {sunValue}%
      </div>
      <div
        className={styles.iconWrapper}
        onWheel={(e) => handleWheel(e, "speaker")}
      >
        <HiSpeakerWave /> {speakerValue}%
      </div>
      <div
        className={styles.iconWrapper}
        onWheel={(e) => handleWheel(e, "microphone")}
      >
        <FaMicrophone /> {microphoneValue}%
      </div>
    </div>
  );
}
