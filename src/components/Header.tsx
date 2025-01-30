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
                        <motion.a whileHover={{ scale: 1.1 }}>Home</motion.a>
                    </Link>
                    <Link href="/about">
                        <motion.a whileHover={{ scale: 1.1 }}>About Us</motion.a>
                    </Link>
                    <Link href="/services">
                        <motion.a whileHover={{ scale: 1.1 }}>Our Services</motion.a>
                    </Link>
                    <Link href="/contact">
                        <motion.a whileHover={{ scale: 1.1 }}>Contact Us</motion.a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}