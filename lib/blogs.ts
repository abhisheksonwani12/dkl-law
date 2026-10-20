export interface Article {
  id: string
  slug: string
  date: string
  title: string
  description: string
  image: string
  author: string
  category: string
  content: string
}

export interface Blog {
  id: string
  slug: string
  name: string
  description: string
  color: string
  textColor: string
}

export const blogs: Blog[] = [
  {
    id: 'legal',
    slug: 'legal',
    name: 'Articles',
    description: 'Legal Essentials',
    color: 'from-blue-900 to-blue-800',
    textColor: 'text-white',
  },
  {
    id: 'outreach',
    slug: 'tech',
    name: 'Outreach',
    description: 'Our Appearances',
    color: 'from-purple-900 to-purple-800',
    textColor: 'text-white',
  },
]

export const articles: Article[] = [
  {
    id: '1',
    slug: 'disrepute-of-summons-indian-courts',
    date: 'January 25',
    title: 'How Do Courts React to the Disrepute of Summons?',
    description: 'An analysis of how Indian courts enforce summons and address non‑appearance in civil and criminal proceedings.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&h=800&fit=crop',
    author: 'Ridhi Seth and Lakshya Bhatia',
    category: 'legal',
    content: `A summons is a legal instrument issued by courts to notify a person of legal proceedings and compel their appearance. It originates from the principle of Audi Alteram Partem, meaning the right to be heard. Summons ensure that defendants, witnesses, or relevant parties appear before the court or produce necessary documents.

In criminal cases, courts take stricter measures when summons are ignored. After verifying service, courts may issue bailable warrants, non‑bailable warrants, or declare the accused an absconder. Authorities may also attach property or issue lookout notices where necessary to ensure compliance.

In civil cases, courts are comparatively flexible. Multiple summons may be issued before proceeding ex‑parte, where judgment is passed based on available evidence without the presence of the opposing party. Courts may also impose fines or proclaim property to enforce compliance.

However, delays in serving summons remain a significant challenge. Inefficiencies such as outdated delivery methods, incomplete records, and lack of procedural clarity contribute to prolonged litigation timelines. Studies have shown courts may spend several months serving summons, delaying justice delivery.

Modernization through digital delivery, email, and improved procedural enforcement can enhance efficiency. Strengthening compliance mechanisms ensures respect for judicial authority and prevents unnecessary delays. Summons remain essential for fair trial procedures and effective administration of justice.`
  },
  {
    id: '2',
    slug: 'contract-enforceability-india',
    date: 'February 10',
    title: 'Contract Enforceability and Legal Validity in India',
    description: 'Understanding essential elements required for legally enforceable contracts.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    author: 'DKL Advocates',
    category: 'legal',
    content: `Contracts form the backbone of commercial relationships. A valid contract requires offer, acceptance, lawful consideration, and intention to create legal relations. Without these elements, enforceability may be challenged.

Courts examine clarity, fairness, and absence of coercion or misrepresentation when determining validity. Businesses must ensure precise drafting and compliance with applicable statutes to avoid disputes.

Well‑structured agreements reduce litigation risk and enhance operational certainty.`
  },
  {
    id: '3',
    slug: 'corporate-governance-compliance',
    date: 'February 12',
    title: 'Corporate Governance and Regulatory Compliance',
    description: 'Why governance frameworks are critical for organizational sustainability.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    author: 'DKL Advocates',
    category: 'legal',
    content: `Corporate governance ensures accountability, transparency, and ethical business conduct. Regulatory compliance strengthens stakeholder trust and prevents legal exposure.

Organizations must adopt structured policies, maintain accurate records, and comply with statutory requirements. Strong governance enhances long‑term sustainability and institutional credibility.`
  },
  {
    id: '4',
    slug: 'dispute-resolution-strategies',
    date: 'February 15',
    title: 'Effective Legal Strategies for Dispute Resolution',
    description: 'Exploring litigation and alternative dispute resolution mechanisms.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
    author: 'DKL Advocates',
    category: 'legal',
    content: `Dispute resolution may involve litigation, arbitration, or mediation. Each method offers distinct advantages depending on complexity, confidentiality, and urgency.

Strategic legal planning minimizes financial exposure and preserves business relationships. Selecting the appropriate resolution mechanism ensures efficient conflict management.`
  },
  {
    id: '5',
    slug: 'dpdp-act-data-privacy-india',
    date: 'March 1',
    title: "The DPDP Act, 2023: Navigating India's New Data Protection Era",
    description: 'An overview of compliance requirements and rights under India\'s Digital Personal Data Protection Act.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    author: 'Bismit Nayak and Shoumya Sahu',
    category: 'legal',
    content: `The Digital Personal Data Protection (DPDP) Act, 2023, marks a paradigm shift in how digital personal data is processed in India. Grounded in principles of consent, purpose limitation, and data minimization, the Act places significant obligations on "Data Fiduciaries" while empowering "Data Principals" with distinct rights.

Under the new regime, processing personal data requires free, specific, informed, unconditional, and unambiguous consent, accompanied by a clear notice. Organizations must establish robust security safeguards, implement grievance redressal mechanisms, and report personal data breaches to the Data Protection Board of India (DPBI) and affected individuals.

Non‑compliance carries substantial financial penalties, making it imperative for corporate entities to audit their existing data flows, update privacy policies, and train personnel on data handling practices. Adapting to the DPDP framework is not merely a legal compliance requirement but a crucial step in building digital trust with clients and stakeholders.`
  },
  {
    id: '6',
    slug: 'sebi-insider-trading-regulations',
    date: 'March 5',
    title: "Understanding SEBI's Prohibition of Insider Trading Regulations",
    description: 'A guide to the legal framework governing insider trading and prevention of market abuse in India.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop',
    author: 'Abhinav Kalia and Lakshya Bhatia',
    category: 'legal',
    content: `The Securities and Exchange Board of India (Prohibition of Insider Trading) Regulations form a critical component of public market integrity. The regulations prohibit the communication or trading of Unpublished Price Sensitive Information (UPSI) by insiders, ensuring a level playing field for all investors.

Compliance requires listed companies and market intermediaries to maintain structured digital databases (SDD) to track the sharing of UPSI. Companies must also establish internal codes of conduct, specify trading window closures, and define clear pre-clearance procedures for trades by designated persons.

Enforcement actions by SEBI have grown increasingly rigorous, utilizing digital forensics and transaction pattern analysis. A robust internal compliance framework is vital to protect organizations and management from severe penalties and reputational risk.`
  },
  {
    id: '7',
    slug: 'ibc-insolvency-resolution-india',
    date: 'March 10',
    title: 'The Evolving Landscape of Insolvency Resolution under the IBC',
    description: 'Analyzing trends, challenges, and recent developments in corporate insolvency under the Insolvency and Bankruptcy Code.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    author: 'Devesh Dubey and Devesh Khara',
    category: 'legal',
    content: `The Insolvency and Bankruptcy Code (IBC), 2016, revolutionized debt restructuring and resolution in India by introducing a creditor-in-control model. The primary objective remains the maximization of value of assets of corporate debtors through timely resolution processes.

The NCLT and NCLAT continue to play a pivotal role in resolving complex corporate insolvencies. Key legal developments focus on the rights of home buyers, operational vs. financial creditors, and the sanctity of approved resolution plans.

Despite challenges such as infrastructural bottlenecks and litigation delays, the IBC has significantly improved credit discipline. Future improvements like pre-packaged insolvency resolution processes for larger corporates will further streamline debt resolution.`
  },
  {
    id: '8',
    slug: 'institutional-arbitration-india-hub',
    date: 'March 15',
    title: "Institutionalizing Arbitration: India's Push as a Dispute Resolution Hub",
    description: 'How recent amendments and institutional structures are shifting India\'s commercial dispute resolution landscape.',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop',
    author: 'Devesh Dubey and Abhinav Kalia',
    category: 'legal',
    content: `India's commercial landscape is actively embracing institutional arbitration to resolve commercial disputes efficiently. The Arbitration and Conciliation Act has undergone key amendments to ensure minimal judicial intervention, strict timelines for passing awards, and enforcement of interim measures.

The establishment of institutions like the India International Arbitration Centre (IIAC) and the Mumbai Centre for International Arbitration (MCIA) provides a structured environment for dispute resolution. These institutional frameworks offer predictability, transparent cost structures, and specialized arbitrator panels.

Transitioning from ad-hoc arbitration to institutional arbitration is essential for attracting foreign direct investment. Businesses should incorporate clear institutional arbitration clauses in commercial contracts to mitigate litigation risks.`
  },
  {
    id: '9',
    slug: 'structuring-alternative-investment-funds-aif',
    date: 'March 20',
    title: 'Structuring Alternative Investment Funds in India',
    description: 'A detailed look at the regulatory framework, categories, and setup processes for AIFs under SEBI.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    author: 'Devesh Khara and Lakshya Bhatia',
    category: 'legal',
    content: `Alternative Investment Funds (AIFs) have emerged as a preferred investment vehicle for domestic and global pooling of private capital in India. Regulated under the SEBI (Alternative Investment Funds) Regulations, 2012, AIFs are classified into three distinct categories based on their investment strategy and regulatory impact.

Category I AIFs focus on venture capital, social ventures, and SMEs. Category II AIFs include private equity and debt funds, which do not receive specific concessions but face fewer leverage restrictions. Category III AIFs employ diverse or complex trading strategies, including hedge funds.

Structuring an AIF requires careful navigation of tax implications, investor onboarding compliance, and detailed documentation such as the Private Placement Memorandum (PPM) and Contribution Agreement. Given SEBI's strict regulatory oversight, robust compliance architecture is essential for fund managers.`
  }
]

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
