import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <Head>
                <title>Contact Us - Sahara Remittance</title>
                <meta name="description" content="Get in touch with Sahara Remittance for any inquiries or support." />
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Contact Us</h1>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}