import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import image from "../../../public/p1.jpeg";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPosts />

      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      
      <MenuCategories />
      <h2 className={styles.subTitle}>Choosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>

      <MenuPosts image={image} />
    </div>
  );
};

export default Menu;
