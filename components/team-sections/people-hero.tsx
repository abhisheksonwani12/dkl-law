export default function PeopleHero() {
  return (

    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
      style={{ backgroundImage: "url('/bg-team.webp')" }}
    >
      
      <div className="relative z-10 font-['Times_New_Roman']">

        {/* Main heading */}
        <h1 className="text-5xl lg:text-6xl text-center mb-4 text-[#c3a678] tracking-[0.18em]">
          PEOPLE
        </h1>

        {/* Decorative line */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-0.5 bg-[#c3a678]"></div>
        </div>

        {/* Description */}
        <p className="text-center text-xl text-white max-w-2xl leading-relaxed">
          Our lawyers represent the diverse of backgrounds of Bharat. Yet, they all share essential qualities — intelligence, creativity, energy, dedication, and an unwavering commitment to excellence.        
        </p>
      </div>

    </div>
    
  );
}
