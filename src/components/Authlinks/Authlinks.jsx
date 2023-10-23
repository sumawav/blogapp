import Link from 'next/link';
import styles from './authlinks.module.css';

const Authlinks = () => {
    const status = 'notauthenticated'; //TEMP
    return (
        <>
            {status === 'notauthenticated' ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                    <Link href="/write">Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
        </>
    );
};

export default Authlinks;
