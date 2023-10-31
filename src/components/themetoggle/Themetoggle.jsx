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
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === 'dark'
                    ? { background: 'white' }
                    : { background: '#0f172a' }
            }
        >
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div
                className={styles.ball}
                style={
                    theme === 'dark'
                        ? { left: 1, background: '#0f172a' }
                        : { right: 1, background: 'white' }
                }
            ></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    );
};

export default Themetoggle;
