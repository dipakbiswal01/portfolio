import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/p1.jpeg";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image fill src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>16.11.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          fugiat! Alias necessitatibus ipsam quos neque omnis soluta? Obcaecati
          sit consequuntur illo itaque error sequi ea quae dolorum quasi quas.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
