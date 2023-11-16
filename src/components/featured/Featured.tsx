import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, I am Dipak here !</b> Disover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill  className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            beatae quasi animi ut quas. Sed dolore debitis amet placeat magnam
            maxime eligendi sequi hic mollitia! Doloribus ab facilis unde
            dolorum.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
