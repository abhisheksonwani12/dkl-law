import React from "react";
import {
  Scale,
  Landmark,
  Sparkles,
  ShieldCheck,
  Users,
  LineChart,
  Briefcase,
  Lightbulb,
  Network
} from "lucide-react";


export default function PracticeArea() {

  const [activeTab, setActiveTab] = React.useState("Contentious Practice");

  return (
    <section
      id="expertise"
      className="py-12 px-4 md:py-20 bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: "url('/bg-practice-area.png')" }}
    >
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-1 mb-12">

          <div className="flex items-center gap-6 w-full justify-center mb-1">
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#111f2d] font-normal tracking-normal text-center px-2 whitespace-nowrap">
              OUR CORE PRACTICE AREAS
            </h2>
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
          </div>

          <div className="uppercase text-[14px] tracking-[0.25em] text-[#9c0101] font-semibold mb-12 text-center mt-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            Focused Expertise, Proven Outcomes          </div>
        </div>

        {/* TAB MENU */}
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-0">
            <div className="w-full md:w-[260px] flex flex-col gap-0 mt-4 md:mt-20 self-stretch">
              {[
                "Contentious Practice",
                "Corporate Practice",
                "Bespoke Corporate Advisory",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-5 py-3 border rounded-md border-l-8 border-l-transparent border-dotted transition-all duration-300 hover:shadow-md hover:-translate-x-1 ${activeTab === tab
                    ? "bg-[#9c0101] text-white border border-transparent border-l-8 border-l-[#9c0101] border-dotted shadow-lg -translate-y-1"
                    : "bg-white text-[#111f2d] border-[#9c0101] hover:bg-[#fce8e8] hover:text-[#9c0101] hover:border-l-[#9c0101]"
                    }`}
                >
                  <span className="font-bold flex items-center gap-2">
                    {tab === "Contentious Practice" && <Scale className="w-4 h-4" />}
                    {tab === "Corporate Practice" && <Landmark className="w-4 h-4" />}
                    {tab === "Bespoke Corporate Advisory" && <Sparkles className="w-4 h-4" />}
                    {tab}
                  </span>
                </button>
              ))}
            </div>

            {/* CONTENT AREA */}
            <div className="bg-white shadow-2xl rounded-lg px-8 pt-8 pb-8 transition-all duration-500 border border-[#9c0101] mt-0 md:-mt-10 h-[90vh] overflow-y-auto">

              {/* CONTENTIOUS PRACTICE */}
              {activeTab === "Contentious Practice" && (
                <div>
                  <div className="flex justify-center w-full">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center bg-[#9c0101] py-2 px-6 rounded-lg inline-block">
                      Contentious Practice
                    </h3>
                  </div>
                  <p className="text-[#555] mb-6 max-w-3xl">
                    Representing clients before regulatory and judicial bodies in high-stakes disputes and complex matters.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-12 text-[#555]">

                    {/* Left Column */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#9c0101] mt-6 mb-3 flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-[#9c0101]" />
                        Litigation
                      </h4>
                      <ul className="list-disc list-inside space-y-3">

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Hon'ble High Court of Bombay and Hon'ble High Court of Delhi</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Advising a NBFC with respect to commercial disputes pending before HC of Bombay and Delhi in aggregate amounting to ₹4,150 crores.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">National Company Law Tribunal (NCLT) & National Company Law Appellate Tribunal (NCLAT)</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Advising a NBFC with respect to recovery proceedings pending before Debt Recovery Tribunal in aggregate amounting to ₹450 crores.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Securities Appellate Tribunal</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Managing appeals and legal proceedings against orders of SEBI and IRDAI before the Securities Appellate Tribunal.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Securities and Exchange Board of India</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Handling comprehensive securities law matters, including regulatory filings, compliance disputes, enforcement actions, and litigation before SEBI.
                          </p>
                        </li>

                        {/* <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Insurance Regulatory and Development Authority of India</strong>
                        <p className="text-sm text-[#666] ml-1 mt-1">
                          Advocating for clients in insurance regulatory issues, compliance challenges, and dispute resolution processes under IRDAI jurisdiction.
                        </p>
                      </li> */}


                      </ul>
                    </div>

                    {/* Right Column */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#111f2d] mt-6 mb-3 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-[#9c0101]" />
                        Arbitration
                      </h4>
                      <ul className="list-disc list-inside space-y-3">

                        <li className="p-4 mb-4 mr-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Domestic Arbitration</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Representing clients in commercial arbitration proceedings globally.
                          </p>
                        </li>

                        <li className="p-4 mb-4 mr-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">International Arbitration</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Expertise in cross-border dispute resolution across major arbitration hubs.
                          </p>
                        </li>

                      </ul>

                      <h4 className="text-xl font-semibold text-[#111f2d] mt-8 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#9c0101]" />
                        Mediation
                      </h4>
                      <ul className="list-disc list-inside space-y-3">

                        <li className="p-4 mb-4 mr-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Institutional Mediation</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Representation and strategic advisory in mediation proceedings conducted through recognized institutional frameworks and formal dispute resolution bodies.
                          </p>
                        </li>

                        <li className="p-4 mb-4 mr-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Private Commercial Mediation</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Facilitating negotiated settlements between corporate parties through confidential and structured private mediation processes.
                          </p>
                        </li>


                        <li className="p-4 mb-4 mr-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Cross‑Border Mediation Support</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Advising on mediation strategies for disputes involving international parties, multi‑jurisdictional issues, and global commercial interests.
                          </p>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* CORPORATE PRACTICE */}
              {activeTab === "Corporate Practice" && (
                <div>
                  <div className="flex justify-center w-full">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center bg-[#9c0101] py-2 px-6 rounded-lg inline-block">
                      Corporate Practice
                    </h3>
                  </div>
                  <p className="text-[#555] mb-6 max-w-3xl">
                    Structuring and executing transactions across public and private markets.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-12 text-[#555]">

                    {/* Public Market */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#9c0101] mt-6 mb-3 flex items-center gap-2">
                        <LineChart className="w-5 h-5 text-[#9c0101]" />
                        Public Market Transactions
                      </h4>
                      <ul className="list-disc list-inside space-y-3">

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Takeovers and control transactions</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Advising on legal frameworks and regulatory compliance for acquiring control of listed companies through strategic takeovers.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Initial Public Offerings</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Guiding issuers and underwriters through the entire IPO lifecycle, including due diligence, documentation, and regulatory filings.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Follow‑on Public Offerings</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Providing legal support for subsequent public equity offerings, ensuring compliance with securities laws and market regulations.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Private Placements and Buybacks</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Structuring private placements and managing buyback transactions to optimize shareholder value and regulatory adherence.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Debt Issuances</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Drafting and reviewing comprehensive documentation for debt securities, ensuring compliance with applicable laws and investor protection.
                          </p>
                        </li>

                        {/* <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Bespoke Corporate Situations</strong>
                        <p className="text-sm text-[#666] ml-1 mt-1">
                          Offering tailored legal solutions for complex corporate transactions and restructuring scenarios to meet unique client needs.
                        </p>
                      </li> */}

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Mergers, Demergers</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Facilitating the legal processes involved in mergers, acquisitions, and demerges to ensure smooth integration and compliance.
                          </p>
                        </li>

                      </ul>
                    </div>

                    {/* Private Market */}
                    <div>
                      <div className="p-0">
                        <h4 className="text-xl font-semibold text-[#111f2d] mt-6 mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-[#9c0101]" />
                          Private Transactions
                        </h4>
                        <ul className="list-disc list-inside space-y-3">
                          <li className="p-4 mb-4 bg-[#fff7f7] ml-4 mr-4 rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Private Trust Establishment</strong>
                            <p className="text-sm text-[#666] ml-1 mt-1">
                              Advising on the formation and structuring of family and private trusts to achieve estate planning and asset protection goals.
                            </p>
                          </li>
                          <li className="p-4 mb-4 bg-[#fff7f7] ml-4 mr-4 rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Partnership Structuring</strong>
                            <p className="text-sm text-[#666] ml-1 mt-1">
                              Drafting and negotiating partnership and LLP agreements tailored to the business objectives and legal requirements.
                            </p>
                          </li>
                          <li className="p-4 mb-4 bg-[#fff7f7] ml-4 mr-4 rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Slump Sales</strong>
                            <p className="text-sm text-[#666] ml-1 mt-1">
                              Structuring asset transfer transactions designed to optimize tax efficiency and comply with regulatory standards.
                            </p>
                          </li>
                          <li className="p-4 mb-4 bg-[#fff7f7] ml-4 mr-4 rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Joint Ventures</strong>
                            <p className="text-sm text-[#666] ml-1 mt-1">
                              Negotiating and documenting joint venture agreements to facilitate strategic business collaborations and partnerships.
                            </p>
                          </li>
                          <li className="p-4 mb-4 bg-[#fff7f7] ml-4 mr-4 rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Private Equity Investments</strong>
                            <p className="text-sm text-[#666] ml-1 mt-1">
                              Advising investors and startups on structuring, negotiation, and compliance aspects of funding rounds and equity investments.
                            </p>
                          </li>
                          <li className="p-4 mb-4 bg-[#fff7f7] ml-4 mr-4 rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1"><strong className="ml-1">Investment Funds</strong>
                            <p className="text-sm text-[#666] ml-1 mt-1">
                              Structuring Alternative Investment Funds (AIFs) and venture capital funds, ensuring regulatory compliance and investor protection.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Financial Regulatory Practices */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#111f2d] mt-6 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#9c0101]" />
                        Financial Regulatory Practices
                      </h4>
                      <div className="flex flex-col gap-4">

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Corporate Governance</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Drafting and implementing governance frameworks, board policies, and compliance programs to enhance corporate accountability.
                          </p>
                        </div>

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Insider Trading Investigations</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Conducting investigations and providing defense strategies relating to alleged insider trading and market abuse.
                          </p>
                        </div>

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Prohibition of Fraudulent and Unfair Trade Practices (PFUTP)</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Advising clients on adherence to securities fraud regulations and representing them in enforcement proceedings.
                          </p>
                        </div>

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Listing Obligations and Disclosure Requirements (LODR)</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Ensuring compliance with SEBI’s listing norms, continuous disclosure obligations, and corporate governance standards.
                          </p>
                        </div>

                        {/* <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                        <strong>Representation before Securities and Exchange Board of India (SEBI)</strong>
                        <p className="text-sm text-[#666] mt-2">
                          Advocating on behalf of clients in enforcement actions, hearings, and compliance matters before SEBI.
                        </p>
                      </div>

                      <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                        <strong>Representation before Insurance Regulatory and Development Authority of India (IRDAI)</strong>
                        <p className="text-sm text-[#666] mt-2">
                          Handling regulatory clarifications, compliance disputes, and enforcement proceedings before IRDAI.
                        </p>
                      </div>

                      <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                        <strong>Representation before Pension Fund Regulatory and Development Authority (PFRDA)</strong>
                        <p className="text-sm text-[#666] mt-2">
                          Advising and representing clients on pension fund regulations, compliance requirements, and dispute resolution before PFRDA.
                        </p>
                      </div> */}

                      </div>
                    </div>

                    {/* Incubation Practice */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#111f2d] mt-6 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-[#9c0101]" />
                        Incubation Practice
                      </h4>
                      <div className="flex flex-col gap-4">

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Intellectual Property (IP)</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Advising on trademark registration, copyright protection, patent filings, and enforcement strategies to safeguard intellectual assets and protect innovation portfolios.
                          </p>
                        </div>

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Real Estate</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Providing legal support for property transactions, title verification, due diligence, lease structuring, and compliance with zoning and land-use regulations.
                          </p>
                        </div>

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Privacy & Data Security</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Drafting privacy policies, managing data protection compliance, conducting risk assessments, and advising on cybersecurity governance frameworks.
                          </p>
                        </div>

                        {/* <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                        <strong>Environmental, Social and Governance (ESG)</strong>
                        <p className="text-sm text-[#666] mt-2">
                          Assisting corporations with sustainability disclosures, ethical governance implementation, ESG audits, and compliance with global sustainability reporting standards.
                        </p>
                      </div> */}

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Taxation & Customs</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Advising clients on direct and indirect tax structures, cross-border taxation, customs duties, and compliance strategies to minimize regulatory exposure.
                          </p>
                        </div>

                        <div className="p-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong>Cryptocurrency</strong>
                          <p className="text-sm text-[#666] mt-2">
                            Guiding clients through the evolving legal landscape of digital assets, fintech regulations, compliance frameworks, and cryptocurrency taxation policies.
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* BESPOKE CORPORATE ADVISORY */}
              {activeTab === "Bespoke Corporate Advisory" && (
                <div>
                  <div className="flex justify-center w-full">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center bg-[#9c0101] py-2 px-6 rounded-lg inline-block">
                      Bespoke Corporate Advisory
                    </h3>
                  </div>

                  <p className="text-[#555] mb-6 max-w-3xl">
                    Strategic, tailored legal advisory for complex corporate structures, cross‑border operations, and evolving regulatory environments. We partner with clients to design forward‑looking legal frameworks that align with business growth, governance excellence, and risk optimization.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-12 text-[#555]">

                    {/* Strategic Structuring */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#9c0101] mt-6 mb-3 flex items-center gap-2">
                        <Network className="w-5 h-5 text-[#9c0101]" />
                        Strategic Corporate Structuring
                      </h4>
                      <ul className="list-disc list-inside space-y-3">
                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Business Structuring & Reorganization</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Designing optimal corporate structures aligned with commercial strategy, regulatory positioning, and operational efficiency.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Cross‑Border Structuring</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Advising on international corporate frameworks, jurisdictional positioning, and regulatory harmonization across markets.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Group Restructuring</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Implementing structural reorganization, consolidation, and internal restructuring for operational and financial efficiency.
                          </p>
                        </li>
                      </ul>
                    </div>

                    {/* Regulatory Strategy */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#111f2d] mt-6 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#9c0101]" />
                        Regulatory & Governance Strategy
                      </h4>
                      <ul className="list-disc list-inside space-y-3">
                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Regulatory Risk Architecture</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Designing compliance frameworks to manage regulatory exposure across sectors and jurisdictions.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Governance Enhancement Programs</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Developing board governance models, accountability structures, and enterprise oversight mechanisms.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Regulatory Strategy Advisory</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Strategic guidance on regulatory positioning, approvals, and long‑term compliance planning.
                          </p>
                        </li>
                      </ul>
                    </div>

                    {/* Risk & Innovation */}
                    <div className="p-0">
                      <h4 className="text-xl font-semibold text-[#111f2d] mt-6 mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#9c0101]" />
                        Risk, Innovation & Emerging Business Models
                      </h4>
                      <ul className="list-disc list-inside space-y-3">
                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Innovation‑Driven Legal Strategy</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Legal frameworks supporting new business models, technology adoption, and market expansion initiatives.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Enterprise Risk Advisory</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Integrated legal risk assessment and mitigation strategies aligned with corporate objectives.
                          </p>
                        </li>

                        <li className="p-4 mb-4 bg-[#fff7f7] rounded-xl border border-red-100 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-1">
                          <strong className="ml-1">Special Situation Advisory</strong>
                          <p className="text-sm text-[#666] ml-1 mt-1">
                            Tailored legal support for complex corporate events, strategic pivots, and high‑impact commercial decisions.
                          </p>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
