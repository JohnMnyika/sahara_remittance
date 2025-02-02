import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3>Sahara Remittance</h3>
                        <p>Fast, secure, and reliable money transfer services.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Our Services</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialLinks}>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} Sahara Remittance. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}