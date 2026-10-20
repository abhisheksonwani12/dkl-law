import { Banner } from "./types";
import { OfficeState } from "./types";

export const  banners: Banner[] = [
    {
        subtitle: "Strategic Legal Excellence",
        title: "UNMATCHED MARKET INSIGHT",
        description:
        "At the intersection of Commercial Litigation, Securities Law, and Corporate Governance, our firm brings significant technical depth in commercial situations.",
        link: "/#expertise",
    },
    {
        subtitle: "Regulatory Insight and Representation",
        title: "GUIDING THROUGH COMPLEXITY",
        description:
        "With proven experience in representing clients before Financial Regulators in India, and supported by our presence across Mumbai and Delhi, we are strategically equipped to provide end-to-end, commercially pragmatic, and institutionally informed regulatory and legal solutions to clients operating across diverse jurisdictions and sectors.",
        link: "/#resources",
    },
    {
        subtitle: "Client-Focused Counselling",
        title: "STRATEGIC AND PRACTICAL SOLUTIONS",
        description:
        "We deliver practical, business-driven legal solutions, ensuring senior-level engagement, strategic foresight, and personalized service in every mandate.",
        link: "/#our-offices",
    },
    {
        subtitle: "Deep Sectoral Expertise",
        title: "SPECIALIZED EXPERTISE",
        description:
        "Our focused practice areas provide deep industry insight and technical proficiency across a broad spectrum, including Securities Law, Corporate Governance, Commercial Litigation, Arbitration, Indirect Taxation, FEMA, Customs, and Intellectual Property Rights (IPR). We concentrate our expertise where it delivers the greatest value and tailored solutions to our clients.",
        link: "/#our-offices",
    }
];

export const offices: Record<string, OfficeState> = {

    maharashtra: {
        state: "Maharashtra",
        locations: [
        {
            name: "Mumbai – BKC HQ",
            address: "308 Madhava, BKC, Mumbai – 400051",
            map: "https://www.google.com/maps/search/?api=1&query=308+Madhava+BKC+Mumbai"
        },
        {
            name: "Mumbai – FIFC",
            address: "Level 1, FIFC, BKC, Mumbai",
            map: "https://www.google.com/maps/search/?api=1&query=FIFC+BKC+Mumbai"
        },
        {
            name: "Mumbai – Nariman Point",
            address: "414, Raheja Chambers, Free Press Journal Marg, Nariman Point – 400021",
            map: "https://www.google.com/maps/search/?api=1&query=414+Raheja+Chambers+Free+Press+Journal+Marg+Nariman+Point+Mumbai+400021"
        }
        ]
    },

    delhi: {
        state: "Delhi",
        locations: [
        {
            name: "Barakhamba Road",
            address: "Narain Manzil, CP, New Delhi",
            map: "https://www.google.com/maps/search/?api=1&query=Narain+Manzil+CP+Delhi"
        },
        {
            name: "Sansad Marg",
            address: "DLF Building, Sansad Marg, New Delhi",
            map: "https://www.google.com/maps/search/?api=1&query=DLF+Building+Sansad+Marg+Delhi"
        }
        ]
    },

    chhattisgarh: {
        state: "Chhattisgarh",
        locations: [
        {
            name: "Raipur",
            address: "Level 7, Zenith, Currency Tower, VIP Square, Raipur",
            map: "https://www.google.com/maps/search/?api=1&query=Zenith+Tower+VIP+Square+Raipur"
        }
        ]
    }
};
