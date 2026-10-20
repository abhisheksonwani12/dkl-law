export default function WhoWeAre() {
  return (
      <section
        id="about"
        className="py-12 px-4 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-who-we-are.webp')" }}
      >
        <div className="max-w-7xl mx-auto mb-40">

          {/* HEADER */}
          <div className="flex flex-col items-center gap-1 mb-12">
            {/* Gold divider + title + gold divider */}
            <div className="flex items-center gap-6 w-full justify-center mb-1">
              <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#9c0101] font-normal tracking-normal text-center px-2 whitespace-nowrap" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                WHO WE ARE
              </h2>
              <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center text-black text-[15px] sm:text-[17px] leading-relaxed font-medium" 
          style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            <p className="hidden md:block mb-4">
              We are not, and do not strive to be the largest law firm measured by number of offices or lawyers.
              Our goal is to be the firm of choice for clients with respect to their most challenging legal issues, most significant business transactions and most critical disputes.
            </p>
            <p className="hidden md:block mb-4">
              We specialize in advising listed corporations and financial conglomerates domiciled in India.
            </p>
            <p className="hidden md:block mb-4">
              We advise our clients on commercial arbitration, public market transactions, financial regulatory matters, corporate governance advisory, investment funds, regulatory representations (contentious and otherwise) before Financial Services Regulators of India and disputes before the Courts of Maharashtra and NCT of Delhi.
            </p>

            <p className="md:hidden mb-4">
              We are not, and do not strive to be the largest law firm measured by number of offices or lawyers.
              Our goal is to be the firm of choice for clients with respect to their most challenging legal issues, most significant business transactions and most critical disputes.
            </p>
            <p className="md:hidden mb-4">
              We specialize in advising listed corporations and financial conglomerates domiciled in India.
            </p>
            <p className="md:hidden mb-4">
              We advise our clients on commercial arbitration, public market transactions, financial regulatory matters, corporate governance advisory, investment funds, regulatory representations (contentious and otherwise) before Financial Services Regulators of India and disputes before the Courts of Maharashtra and NCT of Delhi.
            </p>
          </div>

        </div>
        <div className="uppercase md:text-[18px] text-[14px] tracking-[0.25em] text-[#9c0101] font-bold mb-2 text-center mt-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          Vision Makes Us Who We Are
        </div>
      </section>
  );
}
