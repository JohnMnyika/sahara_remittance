import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Services.module.scss';

export default function Services() {
    return (
        <div className={styles.services}>
            <Head>
                <title>Our Services - Sahara Remittance</title>
                <meta name="description" content="Explore the range of financial services offered by Sahara Remittance, including international money transfers and currency exchange." />
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Our Services</h1>
                <div className={styles.grid}>
                    <motion.div whileHover={{ scale: 1.05 }} className={styles.card}>
                        <img src="/icons/international-transfers.svg" alt="International Transfers" />
                        <h3>International Transfers</h3>
                        <p>Send money to over 100 countries with competitive rates and low fees. Fast, secure, and reliable transfers to your loved ones.</p>
                        <button className={styles.button}>Learn More</button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className={styles.card}>
                        <img src="/icons/currency-exchange.svg" alt="Currency Exchange" />
                        <h3>Currency Exchange</h3>
                        <p>Get the best exchange rates for your international transactions. We support over 50 currencies with real-time rates.</p>
                        <button className={styles.button}>Learn More</button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className={styles.card}>
                        <img src="/icons/mobile-wallet.svg" alt="Mobile Wallet Transfers" />
                        <h3>Mobile Wallet Transfers</h3>
                        <p>Send money directly to mobile wallets in select countries. Instant transfers to popular mobile money services.</p>
                        <button className={styles.button}>Learn More</button>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}