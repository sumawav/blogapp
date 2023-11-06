import React from 'react';
import styles from './featured.module.css';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>YO WHADDUP</b> Give me money
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <image src="/p1.jpeg" alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                    </h1>
                    <p className={styles.postDesc}>
                        Facilisi etiam dignissim diam quis enim lobortis
                        scelerisque fermentum dui. Ullamcorper morbi tincidunt
                        ornare massa eget egestas purus viverra. Tristique nulla
                        aliquet enim tortor. Varius vel pharetra vel turpis
                        nunc. Adipiscing commodo elit at imperdiet. Tellus orci
                        ac auctor augue mauris augue. In aliquam sem fringilla
                        ut morbi tincidunt augue interdum velit. Sed egestas
                        egestas fringilla phasellus faucibus scelerisque.
                        Molestie at elementum eu facilisis sed odio morbi quis
                        commodo. Tortor condimentum lacinia quis vel eros donec
                        ac. Scelerisque viverra mauris in aliquam.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
