import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.scss';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const router = useRouter();

    // Close the navigation menu when a route change occurs
    useEffect(() => {
        const handleRouteChange = () => {
            setIsNavOpen(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);

        // Cleanup the event listener
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Sahara Remittance Logo" width={40} height={40} />
                    <span>Sahara Remittance</span>
                </div>
                <button className={styles.hamburger} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
                    <Link href="/">
                        <motion.div whileHover={{ scale: 1.1 }}>Home</motion.div>
                    </Link>
                    <Link href="/about">
                        <motion.div whileHover={{ scale: 1.1 }}>About Us</motion.div>
                    </Link>
                    <Link href="/services">
                        <motion.div whileHover={{ scale: 1.1 }}>Our Services</motion.div>
                    </Link>
                    <Link href="/careers">
                        <motion.div whileHover={{ scale: 1.1 }}>Careers</motion.div>
                    </Link>
                    <Link href="/contact">
                        <motion.div whileHover={{ scale: 1.1 }}>Contact Us</motion.div>
                    </Link>
                </nav>
            </div>
        </header>
    );
}