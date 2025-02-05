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
        expectedSalary: '',
        cv: null as File | null, // Field for CV
        certificates: null as File | null, // Field for certificates
    });

    const handleJobSelection = (job: Job) => {
        setSelectedJob(job);
        setShowModal(true); // Show modal when a job is selected
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, files } = e.target;
        if (id === 'cv' && files) {
            setFormData({ ...formData, cv: files[0] });
        } else if (id === 'certificates' && files) {
            setFormData({ ...formData, certificates: files[0] });
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
        {
            title: 'Accountant',
            location: 'Nairobi',
            type: 'Full-time',
            description: 'Manage financial records, prepare reports, and ensure compliance with accounting standards.',
            responsibilities: [
                'Prepare and maintain financial statements and reports.',
                'Manage accounts payable and receivable.',
                'Conduct monthly, quarterly, and annual financial reconciliations.',
                'Ensure compliance with tax regulations and filing requirements.',
            ],
            requirements: [
                'Bachelor’s degree in Accounting, Finance, or related field.',
                'CPA or ACCA certification preferred.',
                '3+ years of experience in accounting or finance.',
                'Proficiency in accounting software (e.g., QuickBooks, SAP).',
                'Strong attention to detail and organizational skills.',
            ],
        },
        {
            title: 'Software Developer',
            location: 'Remote',
            type: 'Full-time',
            description: 'Design, develop, and maintain software solutions to support our remittance platform.',
            responsibilities: [
                'Develop and maintain web and mobile applications.',
                'Collaborate with cross-functional teams to define software requirements.',
                'Write clean, scalable, and well-documented code.',
                'Troubleshoot and debug software issues.',
            ],
            requirements: [
                'Bachelor’s degree in Computer Science, Software Engineering, or related field.',
                '3+ years of experience in software development.',
                'Proficiency in programming languages such as JavaScript, Python, or Java.',
                'Experience with frameworks like React, Node.js, or Django.',
                'Strong problem-solving and communication skills.',
            ],
        },
        {
            title: 'Treasury Officer',
            location: '[Your Location]',
            type: 'Full-time',
            description: 'Manage liquidity, foreign exchange transactions, and financial risk to ensure smooth remittance operations.',
            responsibilities: [
                'Monitor and manage daily cash positions across multiple currencies and bank accounts.',
                'Forecast cash flows to ensure sufficient liquidity for remittance payouts.',
                'Optimize working capital by managing inflows and outflows efficiently.',
                'Coordinate with financial institutions to maintain adequate credit lines.',
                'Monitor forex market trends and execute currency trades to manage exchange rate risks.',
                'Work with banks and forex dealers to secure competitive exchange rates.',
                'Implement hedging strategies (e.g., forward contracts, swaps) to mitigate currency risks.',
                'Ensure compliance with Central Bank regulations on forex transactions.',
                'Oversee domestic and international payments to partners, agents, and vendors.',
                'Ensure timely and cost-effective fund transfers across different payment channels.',
                'Reconcile treasury transactions with bank statements and accounting records.',
                'Resolve payment discrepancies with banks and financial service providers.',
                'Ensure compliance with anti-money laundering (AML) and Know Your Customer (KYC) requirements.',
                'Prepare and submit regulatory reports to the Central Bank, Financial Intelligence Unit (FIU), and other authorities.',
                'Work with auditors and compliance teams for internal and external audits.',
                'Maintain strong relationships with banks, financial institutions, and payment partners.',
                'Negotiate bank fees, interest rates, and forex margins to optimize costs.',
                'Identify and implement new financial solutions to improve efficiency.',
                'Utilize treasury management systems (TMS) and financial platforms for automation.',
                'Improve processes for faster, more secure, and cost-effective transactions.',
                'Analyze financial data to support strategic decision-making.',
            ],
            requirements: [
                'Bachelor’s degree in Finance, Accounting, Economics, or a related field.',
                'Professional qualifications preferred: Certified Treasury Professional (CTP), Chartered Financial Analyst (CFA – Level 1 or higher), ACCA / CPA, or ACI Dealing Certificate.',
                'Strong understanding of forex trading, liquidity management, and financial risk.',
                'Experience with treasury management systems (TMS), SWIFT, RTGS, and payment platforms.',
                'Knowledge of Central Bank regulations on remittances, forex, and capital controls.',
                'Proficiency in Excel, financial modeling, and data analysis tools (Power BI, SQL, etc.).',
                'Excellent analytical and problem-solving skills.',
                'Strong negotiation and communication abilities.',
                'High attention to detail and risk awareness.',
                'Ability to work in a high-pressure, fast-paced environment.',
            ],
        },
        {
            title: 'Network Engineer',
            location: '[Your Location]',
            type: 'Full-time',
            description: 'Design, implement, manage, and maintain a secure and reliable network infrastructure for remittance operations.',
            responsibilities: [
                'Design, implement, and manage the company’s network infrastructure (LAN, WAN, MPLS, VPN, SD-WAN).',
                'Ensure high availability and redundancy for critical remittance applications.',
                'Configure and maintain routers, switches, firewalls, and load balancers.',
                'Work with ISPs and vendors to optimize network performance and costs.',
                'Ensure compliance with PCI DSS, ISO 27001, and other financial security standards.',
                'Monitor and configure firewalls, intrusion prevention/detection systems (IPS/IDS), and VPNs.',
                'Regularly perform network security audits, vulnerability assessments, and penetration testing.',
                'Implement Zero Trust Architecture (ZTA) and role-based access control (RBAC) for secure data access.',
                'Manage and optimize cloud network environments (AWS, Azure, Google Cloud).',
                'Configure and troubleshoot VPNs & remote access solutions for distributed teams.',
                'Ensure secure API and microservices communication for financial transactions.',
                'Use network monitoring tools (e.g., PRTG, SolarWinds, Zabbix, Nagios) to detect and resolve issues proactively.',
                'Troubleshoot network outages and performance issues, ensuring 99.99% uptime.',
                'Conduct traffic analysis and bandwidth optimization to prevent bottlenecks.',
                'Implement and test failover strategies for network resilience.',
                'Maintain disaster recovery (DR) sites and ensure rapid failover during incidents.',
                'Collaborate with cybersecurity teams for incident response planning.',
                'Work closely with DevOps, cybersecurity, and software engineering teams to ensure smooth operations.',
                'Maintain network diagrams, SOPs, and asset documentation.',
                'Provide training and support to IT staff on networking best practices.',
            ],
            requirements: [
                'Bachelor’s degree in Computer Science, IT, Network Engineering, or related field.',
                'Certifications preferred: CCNA/CCNP, Fortinet NSE 4+, Palo Alto PCNSE, AWS Certified Advanced Networking – Specialty, or CompTIA Network+ or Security+.',
                'Strong expertise in routing and switching (BGP, OSPF, VLAN, STP, etc.).',
                'Experience with firewall security policies (Fortinet, Cisco ASA, Palo Alto, pfSense).',
                'Knowledge of load balancers (F5, HAProxy, Nginx, etc.).',
                'Experience with cloud networking (AWS, Azure, GCP, hybrid cloud setups).',
                'Familiarity with SIEM tools (Splunk, ELK, Graylog) for security event monitoring.',
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
                                    <label htmlFor="expectedSalary">Expected Salary</label>
                                    <input
                                        type="text"
                                        id="expectedSalary"
                                        value={formData.expectedSalary}
                                        onChange={handleInputChange}
                                        placeholder="Enter your expected salary (e.g., $50,000)"
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cv">Upload CV</label>
                                    <input
                                        type="file"
                                        id="cv"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="certificates">Upload Certificates</label>
                                    <input
                                        type="file"
                                        id="certificates"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleInputChange}
                                    />
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