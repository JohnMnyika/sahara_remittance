import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ForexExchange.module.scss';

const ForexExchange = () => {
    // Static forex data (replace with API call for real-time data)
    const forexRates = [
        { currencyPair: 'USD/EUR', buyRate: 0.85, sellRate: 0.84 },
        { currencyPair: 'USD/GBP', buyRate: 0.73, sellRate: 0.72 },
        { currencyPair: 'USD/JPY', buyRate: 110.5, sellRate: 110.0 },
        { currencyPair: 'USD/CAD', buyRate: 1.25, sellRate: 1.24 },
        { currencyPair: 'USD/AUD', buyRate: 1.35, sellRate: 1.34 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.forexExchange}
        >
            <h2>Forex Exchange Rates</h2>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <div className={styles.column}>Currency Pair</div>
                    <div className={styles.column}>Buy Rate</div>
                    <div className={styles.column}>Sell Rate</div>
                </div>
                {forexRates.map((rate, index) => (
                    <motion.div
                        key={index}
                        className={styles.tableRow}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className={styles.column}>{rate.currencyPair}</div>
                        <div className={styles.column}>{rate.buyRate.toFixed(2)}</div>
                        <div className={styles.column}>{rate.sellRate.toFixed(2)}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ForexExchange;