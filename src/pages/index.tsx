// pages/index.tsx
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ForexExchange from '../components/ForexExchange';
import styles from '../styles/Home.module.scss';

export default function Home() {
    // Animation variants for the feature cards
    const featureVariants = {
        rest: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
        hover: {
            y: -10, // Slight upward movement on hover
            scale: 1.05, // Slight scale-up on hover
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.3,
            },
        },
    };

    return (
        <div className={styles.home}>
            <Head>
                <title>Sahara Remittance - Fast & Secure Money Transfers</title>
                <meta name="description" content="Send money globally with Sahara Remittance. Fast, secure, and reliable money transfer services." />
            </Head>
            <Header />
            <div className={styles.hero}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.heroContent}
                >
                    <h1>Fast & Secure Money Transfers</h1>
                    <p>Send money to your loved ones across the globe with Sahara Remittance. Reliable, affordable, and easy to use.</p>
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.button}
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Features Section */}
            <div className={styles.features}>
                <h2>Why Choose Sahara Remittance?</h2>
                <div className={styles.featureGrid}>
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={featureVariants}
                        className={styles.featureCard}
                    >
                        <Image src="/icons/fast.svg" alt="Fast Transfers" width={60} height={60} />
                        <h3>Fast Transfers</h3>
                        <p>Send money in minutes with our lightning-fast service.</p>
                    </motion.div>
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={featureVariants}
                        className={styles.featureCard}
                    >
                        <Image src="/icons/low-fees.svg" alt="Low Fees" width={60} height={60} />
                        <h3>Low Fees</h3>
                        <p>Enjoy competitive rates and low transaction fees.</p>
                    </motion.div>
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={featureVariants}
                        className={styles.featureCard}
                    >
                        <Image src="/icons/secure.svg" alt="Secure & Reliable" width={60} height={60} />
                        <h3>Secure & Reliable</h3>
                        <p>Your money is safe with our advanced security measures.</p>
                    </motion.div>
                </div>
            </div>

            {/* Forex Exchange Section */}
            <ForexExchange />

            {/* Testimonials Section */}
            <div className={styles.testimonials}>
                <h2>What Our Customers Say</h2>
                <div className={styles.testimonialGrid}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={styles.testimonialCard}
                    >
                        <p>&quot;Sahara Remittance made sending money abroad so easy and affordable. Highly recommended!&quot;</p>
                        <span>- John Doe</span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={styles.testimonialCard}
                    >
                        <p>&quot;The best remittance service I&apos;ve ever used. Fast, secure, and reliable.&quot;</p>
                        <span>- Jane Smith</span>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}