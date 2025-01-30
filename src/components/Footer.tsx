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
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Our Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
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