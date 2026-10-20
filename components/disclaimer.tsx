"use client";

import { useEffect, useState } from "react";
import PrivacyPolicy from "@/components/privacy-policy";

export default function Disclaimer(){

    const [showDisclaimer, setShowDisclaimer] = useState(false)
    const [showPrivacyPanel, setShowPrivacyPanel] = useState(false)
    
    useEffect(() => {
      // If already accepted in this session, do not show disclaimer
      if (sessionStorage.getItem("dkl_disclaimer_accepted") === "true") {
        setShowDisclaimer(false);
        return;
      }

      try {

        const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
        const navType = navEntries.length > 0 ? navEntries[0].type : undefined;

        const alreadyHandled = sessionStorage.getItem("dkl_nav_guard");
        const isReload = navType === "reload";
        const isFreshOpen = navType === "navigate" && !alreadyHandled;

        if (isReload || isFreshOpen) {
          setShowDisclaimer(true);
          sessionStorage.setItem("dkl_nav_guard", "1");
        }
      } catch {
        const legacyType = (performance as any)?.navigation?.type;
        const alreadyHandled = sessionStorage.getItem("dkl_nav_guard");

        if (legacyType === 1 || (legacyType === 0 && !alreadyHandled)) {
          setShowDisclaimer(true);
          sessionStorage.setItem("dkl_nav_guard", "1");
        }
      }
    }, []);
    
      const handleAccept = () => {
        sessionStorage.setItem("dkl_disclaimer_accepted", "true");
        setShowDisclaimer(false);
      }
  return(
      <>
          {showDisclaimer && (
            <>
            
              {/* <Disclaimer /> */}
              <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="relative w-[95%] max-w-2xl bg-white p-4 pt-12 md:p-8 md:pt-14 shadow-2xl animate-in fade-in zoom-in border border-gray-200 rounded-lg max-h-[90vh] overflow-y-auto">
                  <div className="absolute top-4 left-4">
                    <img
                      src="/logo.webp"
                      alt="DKL Advocates Logo"
                      className="h-8 md:h-10 w-auto object-contain"
                      />
                  </div>
                  <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center">DISCLAIMER AND CONFIRMATION</h2>
                  <div className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-5 text-justify">
                    This website contains general information about DKL ADVOCATES and is not
                    intended to serve as a source of legal advice for any purpose.
                    <br /><br />
                    Neither receipt of any information presented on this site nor any email or
                    any other electronic communication sent to DKL ADVOCATES or its lawyers
                    through this site will create a Lawyer–Client relationship, and no such
                    communication will be treated as confidential.
                    <br /><br />
                    As per the rules of Bar Council of India, we are not permitted to solicit
                    work and advertise. The user on clicking the Agree button acknowledges the
                    following:
                    <br /><br />
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>
                        There has been no advertisement, personal communication, solicitation,
                        invitation or inducement of any sort whatsoever from us or any of our team
                        members of work through this website.
                      </li>
                      <li>
                        The user wishes to gain more information about us for his/her own
                        information and usage.
                      </li>
                      <li>
                        The information about us is provided to the user only on his/her specific
                        request and any information obtained, or materials downloaded from this
                        website would not constitute any Lawyer–Client relationship.
                      </li>
                      <li>
                        We are not liable for any consequences or any action taken by the user,
                        relying on the material information provided under this website.
                      </li>
                    </ul>
                        While every aspect of this website has been taken care of, users must seek
                        independent legal advice for legal issues, as the material contained herein
                        does not substitute professional advice.    
                  </div>
                  <p className="mt-6 text-xs md:text-sm italic text-[#9c0101] mb-4">
                    By clicking ‘Agree,’ you acknowledge that you have read and agree to our{" "}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPrivacyPanel(true);
                      }}
                      className="cursor-pointer underline hover:opacity-80 text-[#9c0101]"
                    >
                      Privacy Policy
                    </button>
                    , Terms of Use, and other technical aspects involved in usage and maintenance of these website.
                  </p>

                  <div className="flex flex-col items-center gap-3 pt-2 ">
                    <button
                      onClick={handleAccept}
                      className="w-full sm:w-auto rounded-md bg-[#9c0101] px-10 py-2 text-sm font-medium text-white transition hover:opacity-90 uppercase"
                      >
                      Agree
                    </button>
                    <button
                      onClick={() => window.location.replace("https://www.google.com")}
                      className="w-full sm:w-auto rounded-md border border-gray-300 px-5 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100 uppercase"
                      >
                      Disagree
                    </button>

                  </div>
                </div>
              </div>
          </>
        )}

          {/* Privacy Policy and Disclaimer Popup Panel */}
          {showPrivacyPanel && (
            <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="relative w-[95%] max-w-3xl bg-white p-6 md:p-8 shadow-2xl border border-gray-200 rounded-lg max-h-[90vh] overflow-y-auto">
                
                {/* Close Button */}
                <button
                  onClick={() => setShowPrivacyPanel(false)}
                  className="cursor-pointer absolute top-4 right-4 text-xl font-semibold text-gray-600 hover:text-black leading-none"
                  aria-label="Close"
                >
                  ×
                </button>

                {/* Disclaimer Content */}
                <PrivacyPolicy />
              </div>
            </div>
          )}
      </>
  )
}