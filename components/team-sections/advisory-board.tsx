export default function AdvisoryBoard() {
  return (
    <section className="py-20 px-4 text-[#001021]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-semibold uppercase font-['Times_New_Roman'] text-[#9c0101]">
            Advisory Board
          </h2>
          <div className="w-12 h-1 bg-[#9c0101] mt-4"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-base lg:text-lg leading-6 font-light font-['Times_New_Roman'] bg-[#9c0101]/90 text-white p-6 rounded-lg text-center">
          <p>
            The independent advisory board guiding DKL Advocates comprises of
            Senior Advocates, Tax Experts, Financial Industry Experts, and
            Legal Jurists.
          </p>

          <p>
            The Advisory Board offers DKL Advocates a powerful way to foster
            meaningful engagement with industry for gaining invaluable insights
            that shape future strategy and services.
          </p>

          <p>
            Given confidentiality requirements, the composition of the Advisory
            Board may be shared on request.
          </p>
        </div>
      </div>
    </section>
  );
}