import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from '../styles/ForexExchange.module.scss';

const ForexExchange = () => {
    const [forexRates, setForexRates] = useState<{ currencyPair: string; buyRate: number; sellRate: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchForexData = async () => {
            try {
                const apiKey = '89b85d20ed5cbc6e40f9668e'; // Replace with your API key
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
                const rates = response.data.conversion_rates;

                // Define the currency pairs you want to display
                const currencies = ['EUR', 'GBP', 'JPY', 'CAD', 'AUD'];
                const updatedRates = currencies.map((currency) => ({
                    currencyPair: `USD/${currency}`,
                    buyRate: rates[currency],
                    sellRate: rates[currency] * 0.99, // Adjust sell rate for demonstration
                }));

                setForexRates(updatedRates);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching forex data:', err); // Log the error
                setError('Failed to fetch forex data. Please try again later.');
                setLoading(false);
            }
        };

        fetchForexData(); // Fetch data immediately
        const interval = setInterval(fetchForexData, 60000); // Refresh every 60 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.forexExchange}
        >
            <h2>Forex Exchange Rates</h2>
            {loading ? (
                <p>Loading forex rates...</p>
            ) : error ? (
                <p className={styles.error}>{error}</p>
            ) : (
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
                            <div className={styles.column}>{rate.buyRate.toFixed(4)}</div>
                            <div className={styles.column}>{rate.sellRate.toFixed(4)}</div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default ForexExchange;