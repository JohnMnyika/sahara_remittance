import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ForexExchange.module.scss';

const ForexExchange = () => {
    const [exchangeRates, setExchangeRates] = useState([
        { pair: 'EUR/USD', rate: 1.1002, change: 0 },
        { pair: 'GBP/USD', rate: 1.2505, change: 0 },
        { pair: 'USD/JPY', rate: 134.56, change: 0 },
        { pair: 'AUD/USD', rate: 0.6703, change: 0 },
    ]);

    const [currentDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        // Simulate live exchange rate updates
        const interval = setInterval(() => {
            setExchangeRates((prevRates) =>
                prevRates.map((rate) => {
                    const newRate = parseFloat((rate.rate + (Math.random() - 0.5) * 0.01).toFixed(4));
                    const change = ((newRate - rate.rate) / rate.rate) * 100;
                    return {
                        ...rate,
                        rate: newRate,
                        change: parseFloat(change.toFixed(2)), // Round to 2 decimal places
                    };
                })
            );
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.forexExchange}>
            <div className={styles.container}>
                <h2>Forex Exchange Rates</h2>
                <p className={styles.date}>As of {currentDate}</p>
                <div className={styles.ratesGrid}>
                    {exchangeRates.map((rate, index) => (
                        <motion.div
                            key={rate.pair}
                            className={styles.rateCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={styles.pair}>{rate.pair}</div>
                            <motion.div
                                className={styles.rate}
                                key={rate.pair}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {rate.rate}
                            </motion.div>
                            <motion.div
                                className={`${styles.change} ${
                                    rate.change >= 0 ? styles.up : styles.down
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                role="status"
                                aria-live="polite"
                            >
                                {rate.change >= 0 ? '▲' : '▼'} {Math.abs(rate.change).toFixed(2)}%
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForexExchange;