import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Donec rhoncus vehicula porttitor
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/p1.jpeg"
                                alt=""
                                fill
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Souma</span>
                            <span className={styles.date}>01.04.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.png" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Proin pharetra enim et turpis vehicula interdum.
                            Maecenas aliquet tempus sem, egestas ultricies odio
                            ornare ut. Ut lacinia dui vel ante gravida porta. In
                            vitae nisi efficitur purus varius sodales ac id
                            elit. Vivamus tortor velit, aliquet id enim at,
                            sollicitudin porttitor lorem. Donec convallis non
                            nisi at placerat.
                        </p>
                        <h2>Nam molestie mi eget erat hendrerit vulputate</h2>
                        <p>
                            Proin pharetra enim et turpis vehicula interdum.
                            Maecenas aliquet tempus sem, egestas ultricies odio
                            ornare ut. Ut lacinia dui vel ante gravida porta. In
                            vitae nisi efficitur purus varius sodales ac id
                            elit. Vivamus tortor velit, aliquet id enim at,
                            sollicitudin porttitor lorem. Donec convallis non
                            nisi at placerat.
                        </p>
                        <p>
                            Proin pharetra enim et turpis vehicula interdum.
                            Maecenas aliquet tempus sem, egestas ultricies odio
                            ornare ut. Ut lacinia dui vel ante gravida porta. In
                            vitae nisi efficitur purus varius sodales ac id
                            elit. Vivamus tortor velit, aliquet id enim at,
                            sollicitudin porttitor lorem. Donec convallis non
                            nisi at placerat.
                        </p>
                        <p>
                            Proin pharetra enim et turpis vehicula interdum.
                            Maecenas aliquet tempus sem, egestas ultricies odio
                            ornare ut. Ut lacinia dui vel ante gravida porta. In
                            vitae nisi efficitur purus varius sodales ac id
                            elit. Vivamus tortor velit, aliquet id enim at,
                            sollicitudin porttitor lorem. Donec convallis non
                            nisi at placerat.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
