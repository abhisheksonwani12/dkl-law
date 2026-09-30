'use client';

import { useParams } from 'next/navigation';
import MemberHeader from '@/components/team-sections/member-header';
import { getTeamMemberData } from '@/lib/team-data';

export default function MemberDetailPage() {
  
  const params = useParams();
  const memberId = params.id as string;
  const member = getTeamMemberData(memberId);

  if (!member) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-foreground text-lg">Member not found</p>
      </div>
    );
  }

  return (
        
    <div className="bg-background min-h-screen">
      <MemberHeader member={member} />
    </div>
    
  );
}
