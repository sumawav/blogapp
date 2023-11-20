import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Comments() {
    const status = 'authenticated';
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                    />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.Image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Souma</span>
                            <span className={styles.date}>01.22.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Suspendisse vitae eros dui. Donec rhoncus vehicula
                        porttitor. Nam scelerisque enim sollicitudin purus
                        porttitor ullamcorper. Sed sit amet dui dolor.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Comments;
