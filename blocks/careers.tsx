export default function Career() {
  return (

    <section
      id="internship"
      className="relative p-0 md:p-0 m-0 box-border bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-career.png')" }}
    >

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-0 w-full min-h-[450px] p-0 m-0">

        {/* Left (100%) */}
        <div className="w-full flex flex-col justify-center items-start px-4 sm:px-6 md:pl-0 py-10 md:py-16 pr-0 relative">

          {/* Top gold divider/arrow/label */}
          <div className="flex items-center w-2/3 md:w-1/3 max-w-[500px] mb-4 relative">
            <div className="flex-1 h-0.5 bg-[#9c0101]" />
            <svg className="mx-2" width="18" height="20" viewBox="0 0 18 20">
              <circle cx="7" cy="10" r="2.5" fill="#9c0101" />
              <path d="M11 10H17" stroke="#9c0101" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 8l2 2-2 2" stroke="#9c0101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="uppercase text-[12px] sm:text-[14px] ml-2 tracking-[0.19em] text-[#9c0101] font-semibold whitespace-nowrap" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              join the team
            </span>
          </div>

          {/* Main blue border box */}
          <div className="bg-white px-6 sm:px-8 md:px-10 py-6 sm:py-8 w-full max-w-[500px] ml-16">
            <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] leading-[1.13] font-serif text-[#9c0101] font-normal uppercase ml-[-22%] md:ml-[-20] p-0" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Careers at<br />DKL Advocates
            </h2>
          </div>

          {/* Intro gray text */}
          <p className="max-w-[500px] text-[14px] sm:text-[15px] mb-6 sm:mb-8 mt-2 text-left sm:text-justify px-4 sm:px-0 sm:ml-10 md:ml-20"
            style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            DKL Advocates is always seeking talented and dedicated legal professionals with a passion for capital markets, complex corporate transactions, and strategic dispute resolution.
          </p>

          {/* Links/CTAs */}
          <div className="w-full max-w-[500px] pl-1 space-y-5 sm:space-y-7 ml-4 sm:ml-10 md:ml-20"
            style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            <div>
              <div className="font-semibold text-[#101d30] text-[17px] mb-1">Apply Now</div>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#7e8da2] font-medium">
                SEND YOUR RESUMES TO{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@dkl.law"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#101d30] normal-case hover:underline"
                >
                  hr@dkl.law
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>

  );
}