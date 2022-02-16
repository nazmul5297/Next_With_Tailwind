import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { FirstComponent } from "./components/firstcomponent";

import { Registration } from "./components/registration";

export default function Home() {
  return <Registration />;
}
