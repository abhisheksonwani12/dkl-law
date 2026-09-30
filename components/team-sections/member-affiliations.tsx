import { TeamMember } from '@/lib/team-data';

interface MemberAffiliationsProps {
  member: TeamMember;
}

export default function MemberAffiliations({ member }: MemberAffiliationsProps) {
  return (
    <div className="relative bg-white py-10 md:py-16  px-4 md:px-8 mb-0">
      <div className="max-w-7xl mx-auto mb-0">
        
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-[#9c0101] text-xl font-semibold tracking-wide">
            DIRECTORSHIPS, MEMBERSHIPS AND AFFILIATIONS
          </h2>
          <div className="w-12 h-1 bg-[#9c0101] mt-4"></div>
        </div>

        {/* Affiliations content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Left side - Bullet points */}
          <div className="w-full md:w-[45%]">
            <ul className="space-y-3 md:space-y-4">
              {/* {member.affiliations.map((affiliation, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-primary text-lg shrink-0">•</span>
                  <span className="text-foreground text-base">{affiliation}</span>
                </li>
              ))} */}
            </ul>
          </div>

          {/* Right side - Quote box */}
          <div className="stick-content w-full md:w-[75%] justify-center md:ml-20 md:-mr-30 md:sticky md:top-0 mt-10 md:mt-0">

          <div className="relative z-10 px-6 pt-6 pb-8 md:px-10 md:pt-8 md:pb-12 max-w-md text-center inline-block">
            <span className="absolute top-0 left-0 w-35 h-full border-t border-l border-[#9c0101]" />
            <span className="absolute top-0 right-0 w-35 h-12 border-t border-r border-[#9c0101]" />
            <span className="absolute bottom-0 left-0 w-35 h-12 border-b border-l border-[#9c0101]" />
            <span className="absolute bottom-0 right-0 w-35 h-full border-b border-r border-[#9c0101]" />
<p
            className="text-[#9c0101] text-[56px] md:text-[90px] leading-none -mt-6 md:-mt-14"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}
            >
            &ldquo;
          </p>            
          <p className="text-[#9c0101] italic text-lg md:text-2xl leading-relaxed mb-3 md:mb-4"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              {member.zia}
            </p>
            <p className="text-[#9c0101] font-medium text-sm md:text-base tracking-wide mt-1" >
              {member.ziaAuthor}
            </p>
          </div>
          
        </div>
        </div>
        
      </div>
    </div>
  );
}
