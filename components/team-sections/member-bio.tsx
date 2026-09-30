import { TeamMember } from '@/lib/team-data';

interface MemberBioProps {
  member: TeamMember;
}

export default function MemberBio({ member }: MemberBioProps) {
  return (
    
    <section className="relative bg-[#f6f2ec]/90 backdrop-blur-sm z-20">
      <div className="max-w-7xl mx-auto min-h-[500px] flex flex-col md:flex-row">
        
        {/* Left side – Quote over image */}
        <div className="w-full md:w-[45%] relative flex items-center justify-center px-4 md:px-0">

          <div className="relative z-10 px-12 py-12 max-w-md text-center">
            <span className="absolute top-0 left-0 w-35 h-full border-t border-l border-[#9c0101]" />
            <span className="absolute top-0 right-0 w-35 h-12 border-t border-r border-[#9c0101]" />
            <span className="absolute bottom-0 left-0 w-35 h-12 border-b border-l border-[#9c0101]" />
            <span className="absolute bottom-0 right-0 w-35 h-full border-b border-r border-[#9c0101]" />
          <p
            className="text-[#9c0101] text-[64px] md:text-[110px] leading-none -mt-6 md:-mt-20"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}
          >
            &ldquo;
          </p>            
          <p className="text-[#9c0101] italic text-lg md:text-2xl leading-relaxed mb-6 md:mb-8"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              {member.testimonial}
          </p>
          </div>
        </div>

        {/* Right side – Bio content */}
        <div className="w-full md:w-[75%] flex items-center px-6 py-10 md:px-20 text-shadow-black">
          <p className="text-[#1e2a3a] text-sm md:text-base leading-relaxed md:leading-loose max-w-xl">
            {member.bio}
          </p>
        </div>

      </div>
    </section>

  );
}
