export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  office: string;
  location?: string;
  practiceArea: string | string[];
  sector: string | string[];
  education: string[];
  bio: string;
  quote: string;
  quoteAttribution?: string;
  testimonial: string;
  testimonialAuthor: string;
  affiliations: string[];
  zia: string;
  ziaAuthor: string;
  linkedin?: string;
  email?: string;
  vcard?: string;
}

const teamMembers: Record<string, TeamMember> = {
  '1': {
    id: '1',
    name: 'Devesh Khara',
    title: 'Principal Counsel',
    image: '/team-members/Devesh Khara.webp',
    description: 'Focuses on complex transactions and strategic corporate matters that shape the future of industries.',
    office: 'New York',
    location: 'Delhi and Mumbai',
    practiceArea: 'Corporate Law',
    sector: 'Technology',
    education: ['B.A. LL.B. (Hons.), Hidayatullah National Law University, Raipur'],
    bio: 'Focuses on complex transactions and strategic corporate matters that shape the future of industries.',
    quote: 'Delivering strategic clarity through precise legal thinking.',
    testimonial: 'A trusted advisor with exceptional commercial insight.',
    testimonialAuthor: 'Client Feedback',
    affiliations: ['Bar Council of India', 'Bar Council of Maharashtra and Goa', 'A.CIArb - Associate of the Chartered Institute of Arbitratos, United Kingdom'],
    zia: 'Recognized for leadership and solution‑driven approach.',
    ziaAuthor: 'Firm Review',
    linkedin: 'https://www.linkedin.com/in/devesh-khara-43584413/',
    email: 'devesh@dkl.law',
    vcard: '/vcards/devesh-khara.vcf',
  },
  '2': {
    id: '2',
    name: 'Devesh Dubey',
    title: 'Counsel',
    image: '/team-members/Devesh Dubey.webp',
    description: 'Focuses on complex transactions and disputes in the real estate and infrastructure sectors.',
    office: 'Delhi',
    location: 'Delhi',
    practiceArea: 'Dispute Resolution',
    sector: 'Real Estate',
    education: ['LL.B., Faculty of Law, University of Delhi', 'B.Com, Devi Ahilya Vishwavidyalaya, Indore'],
    bio: 'Focuses on complex transactions and disputes in the real estate and infrastructure sectors.',
    quote: 'Every dispute is an opportunity for resolution.',
    testimonial: 'Methodical and outcome focused professional.',
    testimonialAuthor: 'Corporate Client',
    affiliations: [
      'Bar Council of India',
      'Bar Council of Delhi'
    ],
    zia: 'Known for balanced and pragmatic counsel.',
    ziaAuthor: 'Peer Review',
    linkedin: 'https://www.linkedin.com/in/devesh-dubey-92ab60a0/',
    email: 'dubey@dkl.law',
    vcard: '/vcards/devesh-dubey.vcf',
  },
  '3': {
    id: '3',
    name: 'Abhinav Kalia',
    title: 'Counsel',
    image: '/team-members/Abhinav Kalia.webp',
    description: 'Specialising in cross-border M&A deals that drive innovation and growth in the technology sector.',
    office: 'Delhi',
    location: 'Delhi',
    practiceArea: 'Mergers and Acquisitions',
    sector: 'Technology',
    education: ['B.B.A. LL.B. (Hons.), Guru Gobind Singh Indraprastha University of Delhi'],
    bio: 'Specialising in cross-border M&A deals that drive innovation and growth in the technology sector.',
    quote: 'Precision in execution defines successful deals.',
    testimonial: 'Strong negotiator with global perspective.',
    testimonialAuthor: 'Industry Partner',
    affiliations: [
      'Bar Council of India',
      'Bar Council of Delhi',
    ],
    zia: 'Combines innovation with legal rigor.',
    ziaAuthor: 'Firm Note',
    linkedin: 'https://www.linkedin.com/in/abhinav-kalia-01003a34/',
    email: 'akalia@dkl.law',
    vcard: '/vcards/abhinav-kalia.vcf',
  },
  '4': {
    id: '4',
    name: 'Shoumya Sahu',
    title: 'Legal Associate',
    image: '/team-members/Shoumya Sahu.webp',
    description: 'Specialising in cross-border M&A deals that drive innovation and growth in the technology sector.',
    office: 'Mumbai',
    location: 'Mumbai',
    practiceArea: 'Mergers and Acquisitions',
    sector: 'Technology',
    education: ['LL.B. (Hons.), Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur', 'B.Tech. (Civil Engineering), Biju Patnaik University of Technology, Rourkela'],
    bio: 'Specialising in cross-border M&A deals that drive innovation and growth in the technology sector.',
    quote: 'Collaboration creates transactional excellence.',
    testimonial: 'Technically sound and proactive lawyer.',
    testimonialAuthor: 'Deal Team',
    affiliations: [
      'Bar Council of India',
      'Bar Council of Maharashtra and Goa',
      'Certified Valuer (Asset Class - Land and Buildings)'
    ],
    zia: 'Adds value through structured thinking.',
    ziaAuthor: 'Mentor Note',
    linkedin: 'https://www.linkedin.com/in/shoumya-sahu-21472435/',
    email: 'ssahu@dkl.law',
    vcard: '/vcards/shoumya-sahu.vcf',
  },
  '5': {
    id: '5',
    name: 'Bismit Nayak',
    title: 'Legal Associate',
    image: '/team-members/Bismit Nayak.webp',
    description: 'Focuses on intellectual property law protecting creative assets and digital innovation across media industries.',
    office: 'Mumbai',
    location: 'Mumbai',
    practiceArea: 'Intellectual Property',
    sector: 'Media',
    education: ['B.B.A LL.B., Amity University, Kolkata', 'LL.M, Comparative and International Dispute Resolution, Queen Mary University of London'],
    bio: 'Focuses on intellectual property law protecting creative assets and digital innovation across media industries.',
    quote: 'Innovation deserves robust protection.',
    testimonial: 'Insightful IP strategist.',
    testimonialAuthor: 'Media Client',
    affiliations: [
      'Bar Council of India',
      'Bar Council of Delhi'
    ],
    zia: 'Creative thinker with legal discipline.',
    ziaAuthor: 'Practice Lead',
    linkedin: 'https://www.linkedin.com/in/adv-bismit-nayak-0640133b/',
    email: 'bnayak@dkl.law',
    vcard: '/vcards/bismit-nayak.vcf',
  },
  '6': {
    id: '6',
    name: 'Lakshya Bhatia',
    title: 'Legal Associate',
    image: '/team-members/Lakshya Bhatia.webp',
    description: 'Advises on significant corporate and financial transactions with a focus on regulatory compliance and strategy.',
    office: 'Delhi',
    location: 'Delhi',
    practiceArea: 'Corporate',
    sector: 'Finance',
    education: ['BBA LL.B., Maharaja Agrasen Institute of Management Studies (GGSIPU)'],
    bio: 'Advises on significant corporate and financial transactions with a focus on regulatory compliance and strategy.',
    quote: 'Compliance is the backbone of growth.',
    testimonial: 'Reliable support in complex mandates.',
    testimonialAuthor: 'Finance Client',
    affiliations: ['Bar Council of India', 'Bar Council of Delhi'],
    zia: 'Committed to excellence and integrity.',
    ziaAuthor: 'Team Review',
    linkedin: 'https://www.linkedin.com/in/lakshyabhatia12?utm_source=share',
    email: 'bhatia@dkl.law',
    vcard: '/vcards/lakshya-bhatia.vcf',
  },
  '7': {
    id: '7',
    name: 'Devendra Kumar Singh',
    title: 'Legal Associate',
    image: '/team-members/Devendra Kumar Singh.webp',
    description: 'Advises clients on corporate and regulatory matters with a focus on practical legal solutions and strategic support.',
    office: 'Delhi',
    location: 'Delhi',
    practiceArea: 'Corporate Law',
    sector: 'Corporate',
    education: ['BBA LL.B - Army Law College, Pune'],
    bio: 'Advises clients on corporate and regulatory matters with a focus on practical legal solutions and strategic support.',
    quote: 'Strategic legal thinking drives effective outcomes.',
    testimonial: 'Dedicated and solution-oriented legal professional.',
    testimonialAuthor: 'Client Review',
    affiliations: [
      'Bar Council of India',
      'Bar Council of Delhi'
    ],
    zia: 'Recognized for a disciplined and client-focused approach.',
    ziaAuthor: 'Firm Note',
    linkedin: 'https://in.linkedin.com/in/devendra712',
    email: 'devendra@dkl.law',
    vcard: '/vcards/devendra-kumar-singh.vcf',
  },
  '8': {
    id: '8',
    name: 'Dhruv Sharma',
    title: 'Head Operations',
    image: '/team-members/Dhruv Sharma.webp',
    description: 'Supports operational coordination and strategic management initiatives across the firm.',
    office: 'Delhi',
    location: 'Delhi',
    practiceArea: 'Operations Management',
    sector: 'Management',
    education: [],
    bio: 'Supports operational coordination and strategic management initiatives across the firm.',
    quote: 'Efficient systems drive sustainable growth.',
    testimonial: 'Organized and execution-focused professional.',
    testimonialAuthor: 'Internal Team',
    affiliations: [],
    zia: 'Recognized for strong coordination and operational discipline.',
    ziaAuthor: 'Management Review',
    linkedin: '',
    email: '',
    vcard: '/vcards/dhruv-sharma.vcf',
  },
  '9': {
    id: '9',
    name: 'Vikram Rawat',
    title: 'Manager',
    image: '/team-members/Vikram Rawat.webp',
    description: 'Assists in administrative operations and organizational management support.',
    office: 'Delhi',
    location: 'Delhi',
    practiceArea: 'Administration',
    sector: 'Management',
    education: ['BA'],
    bio: 'Assists in administrative operations and organizational management support.',
    quote: 'Strong management builds stronger organizations.',
    testimonial: 'Reliable and process-oriented team member.',
    testimonialAuthor: 'Firm Operations',
    affiliations: [],
    zia: 'Known for consistency and structured workflow management.',
    ziaAuthor: 'Operations Team',
    linkedin: '',
    email: 'admin@dkl.law',
    vcard: '/vcards/vikram-rawat.vcf',
  },
};


export const advocatePartners = [
  {
    id: '1',
    name: 'Devesh Khara',
    title: 'Principal Counsel',
    image: '/team-members/Devesh Khara.webp',
    description: 'Leads the firm with a strategic focus on complex corporate transactions and high‑value advisory mandates across evolving industries.',
  },
  {
    id: '2',
    name: 'Devesh Dubey',
    title: 'Counsel',
    image: '/team-members/Devesh Dubey.webp',
    description: 'Advises clients on dispute resolution and regulatory challenges before the NCLT and High Courts.',
  },
  {
    id: '3',
    name: 'Abhinav Kalia',
    title: 'Counsel',
    image: '/team-members/Abhinav Kalia.webp',
    description: 'Represents Clients and heads the Incubation Practice.',
  },
  {
    id: '4',
    name: 'Shoumya Sahu',
    title: 'Legal Associate',
    image: '/team-members/Shoumya Sahu.webp',
    description: 'Supports complex transactional mandates with a strong blend of legal analysis and technical understanding.',
  },
  {
    id: '5',
    name: 'Bismit Nayak',
    title: 'Legal Associate',
    image: '/team-members/Bismit Nayak.webp',
    description: 'Focuses on intellectual property strategy and protection for media, technology, and creative enterprises.',
  },
  {
    id: '6',
    name: 'Lakshya Bhatia',
    title: 'Legal Associate',
    image: '/team-members/Lakshya Bhatia.webp',
    description: 'Assists on corporate and financial transactions with emphasis on regulatory compliance and structured advisory.',
  },
  {
    id: '7',
    name: 'Devendra Kumar Singh',
    title: 'Legal Associate',
    image: '/team-members/Devendra Kumar Singh.webp',
    description: 'Supports corporate and regulatory advisory matters with a structured and solution-driven legal approach.',
  },
  {
    id: '8',
    name: 'Dhruv Sharma',
    title: 'Head Operations',
    image: '/team-members/Dhruv Sharma.webp',
    description: 'Supports operational coordination and strategic management initiatives across the firm.',
  },
  {
    id: '9',
    name: 'Vikram Rawat',
    title: 'Manager',
    image: '/team-members/Vikram Rawat.webp',
    description: 'Assists in administrative operations and organizational management support.',
  },
];

export function getTeamMemberData(id: string): TeamMember | undefined {
  return teamMembers[id];
}

export function getAllTeamMembers(): TeamMember[] {
  return Object.values(teamMembers);
}
