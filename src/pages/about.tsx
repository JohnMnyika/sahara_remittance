import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.scss';

export default function About() {
    return (
        <div className={styles.about}>
            <Head>
                <title>About Us - Sahara Remittance</title>
                <meta name="description" content="Learn more about Sahara Remittance and our mission to provide fast and secure money transfers." />
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>About Us</h1>
                <p>Sahara Remittance is dedicated to providing fast, secure, and affordable money transfer services to individuals and businesses worldwide. Our mission is to make global money transfers seamless and accessible for everyone.</p>
                <p>With years of experience in the financial industry, we ensure that your money reaches its destination safely and on time. Trust Sahara Remittance for all your international money transfer needs.</p>
            </div>
            <Footer />
        </div>
    );
}