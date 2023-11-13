import React from 'react';
import styles from './menu.module.css';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"what's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false} />
            <h2 className={styles.subtitle}>{'discover by topic'}</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            <h2 className={styles.subtitle}>{'chosen by the editor'}</h2>
            <h1 className={styles.title}>Editor's picks</h1>
            <MenuPosts withImage={true} />
        </div>
    );
};

export default Menu;
