import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import fb from "../../../public/facebook.png";
import insta from "../../../public/instagram.png";
import tiktok from "../../../public/tiktok.png";
import youtube from "../../../public/youtube.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={logo} alt=" iam" width={50} height={50} />
          <h1 className={styles.logoText}>Dipak Biswal</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia
          minus sint dolorem quibusdam nam suscipit, saepe reiciendis provident
          placeat temporibus voluptate numquam quos corporis. Magnam?
        </p>
        <div className={styles.icons}>
          <Image src={fb} alt=" fb" width={18} height={18} />
          <Image src={insta} alt=" insta" width={18} height={18} />
          <Image src={tiktok} alt=" tiktok" width={18} height={18} />
          <Image src={youtube} alt=" youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="./">Homepage</Link>
          <Link href="./">Blog</Link>
          <Link href="./">About</Link>
          <Link href="./">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="./">Style</Link>
          <Link href="./">Fashion</Link>
          <Link href="./">Coding</Link>
          <Link href="./">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="./">Facebook</Link>
          <Link href="./">Instagram</Link>
          <Link href="./">Tiktok</Link>
          <Link href="./">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
