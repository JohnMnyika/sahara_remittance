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
            location: 'Nairobi, Kenya',
            type: 'Full-time',
            description: 'Drive business growth and expand market presence for our remittance services. The ideal candidate will have a deep understanding of the remittance industry, excellent networking skills, and a proven track record in business development.',
            responsibilities: [
                'Conduct thorough market research to identify new business opportunities and assess market trends.',
                'Analyze competitor strategies and market dynamics to inform business development initiatives.',
                'Identify and pursue new business opportunities through market research, networking, and outreach efforts.',
                'Develop and maintain relationships with potential clients, partners, and stakeholders to generate leads and secure new business.',
                'Manage and retain relationships with existing clients, ensuring high levels of satisfaction and loyalty.',
                'Develop and implement growth strategies and plans to achieve business objectives.',
                'Collaborate with internal teams to align business development strategies with company goals.',
                'Monitor and report on the effectiveness of business development strategies, making adjustments as needed.',
                'Prepare and present business proposals to potential clients and partners.',
                'Negotiate contract terms with clients and communicate with stakeholders.',
                'Ensure that proposals align with company capabilities and client needs.',
                'Represent the company at industry events, conferences, and networking functions to promote our brand and services.',
                'Build and maintain a professional network to stay informed about industry developments and opportunities.',
                'Identify and establish strategic partnerships within specific remittance corridors to enhance service offerings and expand market reach.',
                'Conduct feasibility studies and market analysis to determine the viability of entering new remittance corridors.',
                'Collaborate with partners to develop tailored solutions that meet the unique needs of each corridor.',
            ],
            requirements: [
                'Bachelor’s degree in Business Administration, Marketing, Finance, or a related field.',
                'Minimum of 5 years of experience in business development, sales, or a related role within the financial services or remittance industry.',
                'Strong understanding of the remittance industry and market dynamics.',
                'Excellent communication, negotiation, and interpersonal skills.',
                'Proven ability to drive the business development process from planning to closing deals.',
                'Strong analytical and problem-solving abilities.',
                'Proficiency in Microsoft Office Suite and CRM software.',
            ],
        },
        {
            title: 'Director of Remittance',
            location: 'Nairobi, Kenya',
            type: 'Full-time',
            description: 'Lead the launch, operation, and scaling of our remittance business. The ideal candidate will have a deep understanding of the remittance landscape, expertise in financial regulations, and experience in scaling fintech or banking businesses to profitability.',
            responsibilities: [
                'Conduct market research to analyze competitors like Upesi, Safaricom (M-Pesa), and Equity Bank, and develop a unique value proposition.',
                'Design and implement a competitive pricing strategy that balances affordability and profitability.',
                'Partner with banks, fintech firms, SACCOs, and mobile network operators (MNOs) to enhance reach.',
                'Develop customer loyalty programs, referral incentives, and commission structures to increase adoption.',
                'Set a 12-24 month roadmap to break even and achieve profitability.',
                'Define key revenue streams, including transaction fees, forex margins, agent commissions, and B2B remittance services.',
                'Launch additional financial products like micro-loans, bill payments, and digital wallets to drive retention.',
                'Monitor cost structures and transaction profitability, optimizing fees and commission models.',
                'Obtain regulatory licenses from CBK (Central Bank of Kenya), FCA, FinCEN, or other relevant financial authorities.',
                'Ensure full compliance with AML (Anti-Money Laundering), KYC (Know Your Customer), CFT (Counter-Terrorism Financing), GDPR, and local financial regulations.',
                'Develop and implement a risk management framework, including fraud detection and cybersecurity measures.',
                'Oversee the setup of a secure and scalable remittance platform with API integrations, AI-powered fraud detection tools, and blockchain-based ledger tracking.',
                'Ensure 24/7 system uptime and transaction reliability through strong IT infrastructure.',
                'Establish a mobile-first strategy, including USSD, mobile apps, and WhatsApp banking solutions.',
                'Work with the marketing team to launch aggressive campaigns across social media, community outreach, and influencer partnerships.',
                'Develop an agent-based remittance model, onboarding local kiosks, SACCOs, and financial institutions.',
                'Optimize forex management and liquidity planning to ensure stable transaction pricing.',
                'Negotiate and establish key partnerships with banks, fintech startups, and mobile money operators (MNOs).',
                'Expand into new regional markets (Uganda, Tanzania, Rwanda, South Sudan) for cross-border remittances.',
                'Work with diaspora organizations, churches, and community groups to drive remittance inflows.',
                'Explore opportunities for blockchain-based remittances and cryptocurrency payment integrations.',
            ],
            requirements: [
                'Bachelor’s or Master’s degree in Finance, Economics, Business, Banking, or related fields.',
                '10+ years of experience in remittance, banking, fintech, or financial services, with at least 5 years in a leadership role.',
                'Proven experience in growing a financial services business from startup to profitability.',
                'Expertise in digital payments, forex management, and compliance regulations.',
                'Strong experience with mobile money platforms (M-Pesa, Airtel Money), banking integrations, and agent networks.',
                'Solid understanding of AML/KYC compliance, fraud prevention, and remittance regulations.',
                'Entrepreneurial mindset with strong leadership, negotiation, and business development skills.',
            ],
        },
        {
            title: 'Compliance Officer - Money Remittance',
            location: 'Nairobi, Kenya',
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
            location: 'Nairobi, Kenya',
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
            location: 'Nairobi, Kenya',
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
            location: 'Nairobi, Kenya',
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
            location: 'Nairobi, Kenya',
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
        {
            title: 'Senior Software Developer – Remittance Application with M-Pesa and Cryptocurrency Integration',
            location: 'Nairobi, Kenya',
            type: 'Full-time',
            description: 'Lead the development of a sophisticated remittance application enabling users to store and manage foreign currencies, with seamless integration of M-Pesa, Bitcoin, and other cryptocurrency services.',
            responsibilities: [
                'Design and implement a scalable and secure mobile application for foreign currency storage and management.',
                'Develop responsive and intuitive user interfaces to enhance user engagement.',
                'Ensure cross-platform compatibility and optimal performance across various devices.',
                'Lead the integration of M-Pesa payment services to facilitate local transactions within the application.',
                'Develop and maintain APIs to ensure seamless communication between the application and M-Pesa systems.',
                'Collaborate with M-Pesa’s technical teams to stay updated on API changes and enhancements.',
                'Integrate Bitcoin and other cryptocurrency services, enabling users to conduct transactions using digital assets.',
                'Implement secure wallet functionalities, including key management and transaction signing.',
                'Stay abreast of developments in blockchain technology to incorporate relevant features.',
                'Implement industry-standard security protocols to protect user data and financial transactions.',
                'Conduct regular security assessments and vulnerability testing.',
                'Ensure compliance with global financial regulations, including AML (Anti-Money Laundering) and KYC (Know Your Customer) requirements.',
                'Work closely with product managers, UX/UI designers, and other stakeholders to define application requirements and specifications.',
                'Mentor junior developers and conduct code reviews to uphold coding standards.',
                'Foster a collaborative development environment and promote knowledge sharing.',
                'Create and maintain detailed technical documentation, including system architecture diagrams, API documentation, and user guides.',
                'Document development processes, coding standards, and best practices.',
                'Develop and execute comprehensive test plans to ensure application reliability and performance.',
                'Monitor application performance and implement optimizations as needed.',
                'Provide ongoing support and maintenance, addressing user feedback and resolving issues promptly.',
            ],
            requirements: [
                'Bachelor’s or Master’s degree in Computer Science, Software Engineering, or a related field.',
                'A minimum of 5 years of experience in software development, with a focus on mobile applications and payment systems.',
                'Demonstrated experience in integrating M-Pesa payment services into applications.',
                'Proven track record of working with blockchain technologies and cryptocurrency integrations.',
                'Proficiency in programming languages such as Java, Swift, Kotlin, and JavaScript.',
                'Experience with frameworks like React Native or Flutter for cross-platform mobile development.',
                'Strong understanding of RESTful API design and development.',
                'Familiarity with blockchain platforms such as Ethereum or Bitcoin, and experience with smart contract development using Solidity or similar languages.',
                'Knowledge of database management systems, including SQL and NoSQL databases.',
                'Understanding of cloud services and deployment, particularly AWS or Azure.',
                'Excellent problem-solving abilities and analytical skills.',
                'Strong communication skills, with the ability to articulate complex technical concepts to non-technical stakeholders.',
                'Proven leadership and team collaboration skills.',
                'Adaptability and a continuous learning mindset to keep pace with technological advancements.',
            ],
        },
        {
            title: 'Compliance Officer',
            location: 'Nairobi, Kenya',
            type: 'Full-time',
            description: 'Ensure the organization’s adherence to legal standards and in-house policies, particularly within the financial services and remittance sectors.',
            responsibilities: [
                'Develop and implement an effective legal compliance program, ensuring alignment with industry regulations and standards.',
                'Monitor and interpret regulatory developments within the remittance industry, assessing their impact on company operations.',
                'Ensure compliance with Anti-Money Laundering (AML) regulations and other relevant financial laws.',
                'Draft, revise, and enforce company policies and procedures to ensure compliance with legal and regulatory requirements.',
                'Establish and maintain internal controls to monitor adherence to these policies.',
                'Educate and train employees on regulations and industry best practices, fostering a culture of compliance.',
                'Address employee concerns or questions regarding legal compliance.',
                'Proactively audit company processes, practices, and documents to identify weaknesses and assess compliance risks.',
                'Evaluate business activities to assess compliance risk and implement corrective actions as necessary.',
                'Prepare and present clear and concise reports for senior management and external regulatory bodies as appropriate.',
                'Collaborate with external auditors and HR when needed to ensure compliance across all departments.',
            ],
            requirements: [
                'Bachelor’s degree in Law, Finance, Business Administration, or a related field.',
                'Proven experience as a Compliance Officer or Compliance Manager, preferably within the financial services or remittance industry.',
                'In-depth knowledge of industry standards and regulations, including AML and other financial compliance requirements.',
                'Excellent analytical abilities to understand complex legal documents and assess potential risks in business procedures.',
                'Strong communication skills to effectively relay complex regulatory information to other members of the organization.',
                'High ethical standards and integrity, with a proactive approach to ensuring compliance and addressing potential issues.',
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