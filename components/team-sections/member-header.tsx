import { TeamMember } from '@/lib/team-data';
import { Mail, Download, MapPin } from 'lucide-react';
import Link from 'next/link';

interface MemberHeaderProps {
  member: TeamMember;
}

export default function MemberHeader({ member }: MemberHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-surface relative">
      {/* Left side - Photo */}
      <div className="w-full md:w-[45%] relative">
        <div className="w-full flex justify-center mb-6 md:mb-0">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-none md:w-[550px] md:h-[650px] object-cover"
          />
        </div>
      </div>

      {/* Right side - Info */}
      <div className="w-full md:w-[55%]  px-6 py-10 md:px-16 md:py-20 flex flex-col">

        {/* Decorative connector and name */}
        <div className="relative flex items-start gap-6 mb-10 lg:w-full lg:max-w-[700px] lg:mx-auto md:ml-[-13%] lg:ml-0">
          <div className="relative flex items-center mt-3">
            {/* Outer ring */}
            <div className="w-6 h-6 rounded-full border-2 border-[#9c0101] flex items-center justify-center">
          <div className="w-2 h-2 bg-[#9c0101] rounded-full"></div>
            </div>
            {/* Horizontal line */}
            <div className="w-14 h-0.5 bg-[#9c0101]"></div>
            {/* End dot */}
            <div className="w-2.5 h-2.5 bg-[#9c0101] rounded-full"></div>
          </div>
          <div style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            <h1 className="text-xl md:text-3xl text-foreground mb-1 leading-tight">
              {member.name}
            </h1>
            <p className="text-base md:text-xl text-[#9c0101] italic font-bold">
              {member.title}
            </p>
          </div>
        </div>

        {/* Social icons and location */}
        <div className="flex items-center justify-between mb-14 pb-8 border-b border-[#9c0101] mt-[-3%] lg:w-full lg:max-w-[700px] lg:mx-auto md:ml-[4%] lg:ml-0">
          <div className="flex gap-4">
            
            <Link
              href={member.linkedin || '#'}
              target={member.linkedin ? "_blank" : undefined}
              rel={member.linkedin ? "noopener noreferrer" : undefined}
              className={`w-6 h-6 flex items-center justify-center text-[#9c0101] hover:text-primary-light transition ${!member.linkedin ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>

            <Link
              href={member.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}` : '#'}
              target={member.email ? "_blank" : undefined}
              rel={member.email ? "noopener noreferrer" : undefined}
              className={`w-6 h-6 flex items-center justify-center text-[#9c0101] hover:text-primary-light transition ${!member.email ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <Mail className="w-6 h-6" />
            </Link>

            <a
              href={member.vcard || '#'}
              download={!!member.vcard}
              className={`w-6 h-6 flex items-center justify-center text-[#9c0101] hover:text-primary-light transition ${!member.vcard ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <Download className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-primary text-base">
            <MapPin className="w-5 h-5" />
            <span>{member.location}</span>
          </div>

        </div>

        {/* Education */}
        <div className="mb-12 lg:w-full lg:max-w-[700px] lg:mx-auto md:ml-[4%] lg:ml-0"
        style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          <h3 className="text-[#9c0101] text-xl font-semibold mb-1">Education</h3>
          <ul className="text-foreground text-xl list-disc pl-5 space-y-1">
            {member.education?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Professional Affiliations */}
        <div className="mb-8 lg:w-full lg:max-w-[700px] lg:mx-auto md:ml-[4%] lg:ml-0"
        style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          <h3 className="text-[#9c0101] text-xl font-semibold mb-1">Professional Affiliations</h3>
          <ul className="text-foreground text-xl list-disc pl-5 space-y-1">
            {member.affiliations?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}
