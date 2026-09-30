import TeamMemberCard from '@/components/team-member-card';
import { advocatePartners } from '@/lib/team-data';

export default function ManagementTeam() {

  return (
    <section className="py-16 px-4  text-[#9c0101]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-12">
          {/* <div className="w-12 h-1 bg-primary mb-4"></div> */}
          <h2 className="text-3xl lg:text-4xl font-semibold font-['Times_New_Roman'] uppercase">management</h2>
          <div className="w-12 h-1 bg-[#9c0101] mt-4"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advocatePartners.slice(7,).map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <TeamMemberCard {...partner} />
            </div>
          ))}
        </div>

        {advocatePartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#9c0101]/80">No management team members available</p>
          </div>
        )}
      </div>
    </section>
  );
}
