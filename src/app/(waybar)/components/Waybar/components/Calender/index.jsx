import React from "react";
import styles from "./styles.module.scss";
import { LuClock9 } from "react-icons/lu";
import { IoCalendar } from "react-icons/io5";

export default function Calendar() {
  return (
    <div>
      <div className={styles.calender}>
        <LuClock9 /> <time dateTime="T12:33"> 12:33 PM</time> <IoCalendar />{" "}
        <time dateTime="2024-02-14"> Wed, Feb14</time>
      </div>
    </div>
  );
}
