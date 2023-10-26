"use client"; // prettier-ignore

import styles from './themetoggle.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const Themetoggle = () => {
    const { toggle, theme } = useContext(ThemeContext);

    console.log('SUMA');
    console.log(theme);

    return (
        <div className={styles.container} onClick={toggle}>
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div className={styles.ball}></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    );
};

export default Themetoggle;
