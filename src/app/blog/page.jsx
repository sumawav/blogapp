import React from 'react';
import styles from './blogPage.module.css';
import Cardlist from '@/components/cardlist/Cardlist';
import Menu from '@/components/menu/Menu';

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>style blog</h1>
            <div className={styles.content}>
                <Cardlist />
                <Menu />
            </div>
        </div>
    );
};

export default BlogPage;
