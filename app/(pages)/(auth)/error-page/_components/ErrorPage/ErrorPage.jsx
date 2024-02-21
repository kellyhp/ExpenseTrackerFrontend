"use client";
import styles from "../../../../_components/Form/Form.module.scss";
import Link from "next/link";
import {
  getAuth,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { db } from "../../../../../../firebase";
import { updateDoc, doc } from "firebase/firestore";

export default function ErrorPage() {
  return <div className={styles.form}>This is the error page</div>;
}
