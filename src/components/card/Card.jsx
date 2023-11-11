import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>11.11.2023 - </span>
                        <span className={styles.category}>CULTURE</span>
                    </div>
                    <Link href="/">
                        <h1>
                            Integer quis pretium mi. Ut in est nec augue iaculis
                            ornare eu ac nunc.
                        </h1>
                    </Link>
                    <p className={styles.desc}>
                        Suspendisse vitae eros dui. Donec rhoncus vehicula
                        porttitor. Nam scelerisque enim sollicitudin purus
                        porttitor ullamcorper. Sed sit amet dui dolor. Morbi vel
                        pretium nibh, sit amet sollicitudin felis. Nulla
                        imperdiet rhoncus justo nec auctor. Ut at ante est.
                        Curabitur malesuada mauris placerat dignissim tempor.
                        Nullam feugiat ante et orci hendrerit, a feugiat diam
                        facilisis. Nullam hendrerit felis ut risus dignissim
                        tempor.
                    </p>
                    <Link href="/" className={styles.link}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
