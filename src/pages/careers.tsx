import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Careers.module.scss';

export default function Careers() {
    return (
        <div className={styles.careers}>
            <Head>
                <title>Careers - Sahara Remittance</title>
                <meta name="description" content="Join the Sahara Remittance team and be part of a fast-growing company in the financial services industry." />
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Careers at Sahara Remittance</h1>
                <p>Join our team and help us revolutionize the way people send money globally. We offer a dynamic work environment, competitive benefits, and opportunities for growth.</p>

                <div className={styles.jobOpenings}>
                    <h2>Current Job Openings</h2>
                    <div className={styles.jobList}>
                        <div className={styles.jobCard}>
                            <h3>Software Engineer</h3>
                            <p>Location: Remote</p>
                            <p>Type: Full-time</p>
                            <button className={styles.button}>Apply Now</button>
                        </div>
                        <div className={styles.jobCard}>
                            <h3>Customer Support Specialist</h3>
                            <p>Location: Nairobi</p>
                            <p>Type: Full-time</p>
                            <button className={styles.button}>Apply Now</button>
                        </div>
                        <div className={styles.jobCard}>
                            <h3>Marketing Manager</h3>
                            <p>Location: Nairobi</p>
                            <p>Type: Full-time</p>
                            <button className={styles.button}>Apply Now</button>
                        </div>
                    </div>
                </div>

                <div className={styles.contactForm}>
                    <h2>Submit Your Resume</h2>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="resume">Upload Resume</label>
                            <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
                        </div>
                        <button type="submit" className={styles.button}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}