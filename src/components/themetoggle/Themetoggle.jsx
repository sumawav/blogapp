import styles from './themetoggle.module.css';
import Image from 'next/image';

const Themetoggle = () => {
    return (
        <div className={styles.container}>
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div className={styles.ball}></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    );
};

export default Themetoggle;
