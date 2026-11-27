import Link from "next/link";

export default function LandingPage() {
  return (
    <div id="top" className="w-full">
      {/* SECTION 1: HERO (#FAF8F5) */}
      <section className="w-full bg-[#FAF8F5]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 pt-12 pb-20 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28">
          <div className="max-w-[740px]">
            {/* Subtle Coming Soon Status Line */}
            <div className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#0277BD] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0277BD]" />
              <span>Coming very soon — Initial catalogue under verification</span>
            </div>

            <h1 className="text-[36px] sm:text-[52px] md:text-[64px] font-bold text-[#1E2022] leading-[1.08] tracking-[-0.03em]">
              Free books and textbooks in one place.
            </h1>

            <p className="mt-5 sm:mt-6 text-[17px] sm:text-[19px] md:text-[20px] text-[#3E4349] leading-[1.6] max-w-[640px] font-normal">
              OpenShelf is a centralised discovery index for legally free books.
              Find legitimate textbooks, open-access monographs, and
              public-domain works from trusted libraries, universities, and
              publishers without searching dozens of separate sites.
            </p>

            {/* Responsive Action Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/sources"
                className="text-center bg-[#0277BD] hover:bg-[#01639E] text-white text-[15px] font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Read sources &amp; policy
              </Link>
              <Link
                href="#how-it-works"
                className="justify-center bg-white hover:bg-[#F3F1EC] text-[#1E2022] border border-[#D8D4CC] text-[15px] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                <span className="font-mono text-[13px] text-[#4A4F55]">
                  &lt;&gt;
                </span>
                How OpenShelf works
              </Link>
            </div>

            <p className="mt-6 text-[13.5px] text-[#5C6168] leading-[1.5]">
              Discover more. Pay nothing. Direct links to original sources with
              clear access terms.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE PROBLEM & PURPOSE (#FFFFFF) */}
      <section
        id="how-it-works"
        className="scroll-mt-24 w-full bg-white py-16 sm:py-24 md:py-28 border-t border-[#EFECE6]"
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[30px] sm:text-[36px] md:text-[40px] font-bold text-[#1E2022] leading-[1.14] tracking-[-0.025em]">
                Millions of free books exist. Finding them is still hard.
              </h2>
              <p className="mt-4 sm:mt-5 text-[16px] sm:text-[16.5px] text-[#4A4F55] leading-[1.65]">
                Legitimate free reading material is spread across separate
                repositories, university sites, and libraries, often with
                unclear access rules and inconsistent search interfaces.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#EAE7E1]">
              <div className="pb-7 sm:pb-8">
                <h3 className="text-[18px] sm:text-[18.5px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Scattered across separate repositories
                </h3>
                <p className="mt-2.5 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  Open textbooks, course notes, public-domain archives, and
                  author releases sit on different platforms. OpenShelf brings
                  discovery into one organised index.
                </p>
              </div>

              <div className="py-7 sm:py-8">
                <h3 className="text-[18px] sm:text-[18.5px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Clear access labels before you open a book
                </h3>
                <p className="mt-2.5 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  Every entry distinguishes between free to read online, free to
                  download, free to borrow, free preview, openly licensed, and
                  public domain.
                </p>
              </div>

              <div className="pt-7 sm:pt-8">
                <h3 className="text-[18px] sm:text-[18.5px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Built around legitimate sources
                </h3>
                <p className="mt-2.5 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  OpenShelf links directly to the original publisher, library, or
                  repository rather than hosting unverified files or claiming
                  redistribution rights it does not have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RATIONALE & COMING SOON / LICENSING CALLOUT (#FAF8F5) */}
      <section
        id="status"
        className="scroll-mt-24 w-full bg-[#FAF8F5] py-16 sm:py-24 md:py-28 border-t border-[#EFECE6]"
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#1E2022] tracking-[-0.025em]">
                Why we built OpenShelf
              </h2>

              <div className="mt-5 sm:mt-6 space-y-5 text-[16px] sm:text-[16.5px] text-[#2C3035] leading-[1.7]">
                <p>
                  Students, self-learners, and general readers already have
                  access to a large body of legally free books across the web,
                  yet finding a reliable, well-described edition often takes
                  more effort than it should.
                </p>
                <p>
                  The value of a discovery platform is not raw volume alone. It
                  is accurate metadata, trustworthy sources, clear subject and
                  level organisation, and straightforward links to where the
                  book actually lives.
                </p>
                <p>
                  We are currently verifying our opening catalogue of
                  educational books and trusted repositories. The full
                  searchable library is coming very soon.
                </p>
              </div>

              <p className="mt-7 text-[15.5px] font-semibold text-[#1E2022]">
                OpenShelf — Discover more. Pay nothing.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#E1F2FE] rounded-2xl p-7 sm:p-9">
                <h3 className="text-[20px] sm:text-[21px] font-bold text-[#1E2022] leading-[1.28] tracking-[-0.015em]">
                  Launching very soon with verified sources
                </h3>
                <div className="mt-4 space-y-4 text-[14.5px] sm:text-[15px] text-[#242B30] leading-[1.65]">
                  <p>
                    OpenShelf indexes book information and links directly to
                    legitimate external sources such as public-domain libraries,
                    open-access repositories, universities, and authorised
                    publishers.
                  </p>
                  <p>
                    Before the public catalogue opens, every initial title is
                    reviewed to confirm working links, accurate licensing, and
                    clear access terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}