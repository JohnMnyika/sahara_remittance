import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Careers.module.scss';
import { useState } from 'react';

interface Job {
    title: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
}

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null as File | null,
    });

    const handleJobSelection = (job: Job) => {
        setSelectedJob(job);
        setShowModal(true); // Show modal when a job is selected
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, files } = e.target;
        if (id === 'resume' && files) {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedJob) {
            alert('Please select a job to apply for.');
            return;
        }
        // Handle form submission logic here (e.g., API call)
        console.log('Selected Job:', selectedJob.title);
        console.log('Form Data:', formData);
        alert('Application submitted successfully!');
    };

    const jobs: Job[] = [
        {
            title: 'Senior Business Analyst - Operations',
            location: 'Remote',
            type: 'Full-time',
            description: 'Lead systems projects, develop business intelligence reports, and translate business requirements into technical designs.',
            responsibilities: [
                'Leading systems projects to support product or regulatory needs.',
                'Developing business intelligence reports and user testing efforts.',
                'Translating high-level complex business requirements into technical design.',
                'Recommending key metrics for tracking performance.',
            ],
            requirements: [
                'Bachelor’s degree preferred.',
                'At least 1 year of experience in people management.',
                'Minimum 5 years of experience in digital products or financial services.',
                'Strong interpersonal and analytical skills.',
            ],
        },
        {
            title: 'Business Developer',
            location: 'Nairobi',
            type: 'Full-time',
            description: 'Drive business growth and expand market presence for our remittance services.',
            responsibilities: [
                'Conduct market research and develop strategies.',
                'Identify and acquire new clients.',
                'Negotiate partnerships with financial institutions.',
                'Develop and implement sales plans.',
            ],
            requirements: [
                'Bachelor’s degree in Business, Marketing, or related field.',
                '3+ years of experience in business development.',
                'Strong understanding of remittance market dynamics.',
                'Excellent communication and negotiation skills.',
            ],
        },
        {
            title: 'Compliance Officer - Money Remittance',
            location: 'Nairobi',
            type: 'Full-time',
            description: 'Develop, implement, and oversee the company’s compliance program.',
            responsibilities: [
                'Stay abreast of relevant laws and regulations.',
                'Develop and enhance AML and KYC programs.',
                'Conduct regular risk assessments.',
                'Provide training to employees on compliance policies.',
            ],
            requirements: [
                'Bachelor’s degree in Business, Finance, or Law.',
                '3+ years of experience in compliance or internal audit.',
                'In-depth knowledge of AML laws and regulations.',
                'Strong analytical and problem-solving skills.',
            ],
        },
        {
            title: 'Director - Money Remittance',
            location: 'Nairobi',
            type: 'Full-time',
            description: 'Lead and oversee all aspects of our money remittance business.',
            responsibilities: [
                'Develop and communicate the company’s vision and strategy.',
                'Oversee financial planning and operational excellence.',
                'Identify market trends and opportunities.',
                'Ensure regulatory compliance and foster customer relations.',
            ],
            requirements: [
                'Proven experience as a Director or senior management role.',
                'At least 8 years of experience in the remittance industry.',
                'In-depth knowledge of international money transfer regulations.',
                'Strong financial acumen and leadership skills.',
            ],
        },
    ];

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
                        {jobs.map((job, index) => (
                            <div key={index} className={styles.jobCard}>
                                <h3>{job.title}</h3>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p><strong>Type:</strong> {job.type}</p>
                                <button
                                    className={styles.button}
                                    onClick={() => handleJobSelection(job)}
                                >
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Job Description */}
            {showModal && selectedJob && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>{selectedJob.title}</h2>
                        <p><strong>Location:</strong> {selectedJob.location}</p>
                        <p><strong>Type:</strong> {selectedJob.type}</p>
                        <p>{selectedJob.description}</p>

                        <h3>Responsibilities</h3>
                        <ul>
                            {selectedJob.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>

                        <h3>Requirements</h3>
                        <ul>
                            {selectedJob.requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>

                        <div className={styles.contactForm}>
                            <h2>Submit Your Application</h2>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleInputChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="resume">Upload Resume</label>
                                    <input type="file" id="resume" accept=".pdf,.doc,.docx" onChange={handleInputChange} required />
                                </div>
                                <button type="submit" className={styles.button}>Submit Application</button>
                            </form>
                        </div>

                        <button className={styles.closeButton} onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}