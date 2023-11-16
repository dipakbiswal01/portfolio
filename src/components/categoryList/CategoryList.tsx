import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import style from "../../../public/style.png";
import fashion from "../../../public/fashion.png";
import food from "../../../public/food.png";
import travel from "../../../public/travel.png";
import culture from "../../../public/culture.png";

import coding from "../../../public/coding.png";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            width={32}
            height={32}
            src={style}
            alt="style"
            className={styles.image}
          />
          style
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.fashion}`}>
          <Image
            width={32}
            height={32}
            src={fashion}
            alt="fashion"
            className={styles.image}
          />
          fashion
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.food}`}>
          <Image
            width={32}
            height={32}
            src={food}
            alt="food"
            className={styles.image}
          />
          food
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.travel}`}>
          <Image
            width={32}
            height={32}
            src={travel}
            alt="travel"
            className={styles.image}
          />
          travel
        </Link>

        <Link href="/blog" className={`${styles.category} ${styles.culture}`}>
          <Image
            width={32}
            height={32}
            src={culture}
            alt="culture"
            className={styles.image}
          />
          culture
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.coding}`}>
          <Image
            width={32}
            height={32}
            src={coding}
            alt="coding"
            className={styles.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
