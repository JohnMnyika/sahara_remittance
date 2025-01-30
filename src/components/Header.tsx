import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="Sahara Remittance Logo" />
                    <span>Sahara Remittance</span>
                </div>
                <nav className={styles.nav}>
                    <Link href="/">
                        <motion.div whileHover={{ scale: 1.1 }}>Home</motion.div>
                    </Link>
                    <Link href="/about">
                        <motion.div whileHover={{ scale: 1.1 }}>About Us</motion.div>
                    </Link>
                    <Link href="/services">
                        <motion.div whileHover={{ scale: 1.1 }}>Our Services</motion.div>
                    </Link>
                    <Link href="/contact">
                        <motion.div whileHover={{ scale: 1.1 }}>Contact Us</motion.div>
                    </Link>
                </nav>
            </div>
        </header>
    );
}