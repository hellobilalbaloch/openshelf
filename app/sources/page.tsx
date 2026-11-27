export default function SourcesAndPolicyPage() {
  return (
    <div className="w-full">
      {/* PAGE HEADER (#FAF8F5) */}
      <section className="w-full bg-[#FAF8F5]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 pt-12 pb-14 sm:pt-16 sm:pb-16">
          <div className="max-w-[720px]">
            <h1 className="text-[36px] sm:text-[48px] md:text-[52px] font-bold text-[#1E2022] leading-[1.08] tracking-[-0.03em]">
              Sources, licences, and indexing policy.
            </h1>
            <p className="mt-5 text-[17px] sm:text-[18px] text-[#3E4349] leading-[1.6] font-normal">
              OpenShelf indexes legally accessible books and directs readers to
              their original repositories. Every listing is checked for source
              legitimacy, clear access terms, and accurate metadata.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: APPROVED SOURCE CATEGORIES (#FFFFFF) */}
      <section className="w-full bg-white py-16 sm:py-20 border-t border-[#EFECE6]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1E2022] leading-[1.15] tracking-[-0.025em]">
                Where indexed books come from
              </h2>
              <p className="mt-4 text-[16px] text-[#4A4F55] leading-[1.65]">
                Rather than scraping unverified file hosts, OpenShelf focuses on
                established institutions, open-access initiatives, and direct
                rightsholder releases.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#EAE7E1]">
              <div className="pb-7">
                <h3 className="text-[18px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Open-access textbooks and educational repositories
                </h3>
                <p className="mt-2 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  Peer-reviewed textbooks, open courseware, and academic
                  monographs published under open licences or free educational
                  access terms by universities and non-profit initiatives.
                </p>
              </div>

              <div className="py-7">
                <h3 className="text-[18px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Public-domain libraries and archives
                </h3>
                <p className="mt-2 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  Works whose copyrights have expired or been dedicated to the
                  public domain, maintained by recognised digital libraries and
                  archival collections.
                </p>
              </div>

              <div className="py-7">
                <h3 className="text-[18px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Official publisher and author-authorised releases
                </h3>
                <p className="mt-2 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  Books, guides, and technical manuals made freely available on
                  official publisher pages or directly by their authors and
                  creators.
                </p>
              </div>

              <div className="pt-7">
                <h3 className="text-[18px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Lending and preview catalogues
                </h3>
                <p className="mt-2 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  Legitimate digital lending programmes and authorised sample or
                  preview editions, clearly marked so readers know the exact
                  terms before opening a book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACCESS LABELS & LICENSING RULES (#FAF8F5) */}
      <section
        id="access-labels"
        className="scroll-mt-24 w-full bg-[#FAF8F5] py-16 sm:py-20 border-t border-[#EFECE6]"
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1E2022] leading-[1.15] tracking-[-0.025em]">
                How access labels and licences work
              </h2>

              <div className="mt-5 sm:mt-6 space-y-5 text-[15.5px] sm:text-[16px] text-[#2C3035] leading-[1.7]">
                <p>
                  Free access does not always mean identical permissions. A book
                  may be free to read in a browser, free to download as a PDF or
                  EPUB, available for digital lending, or offered as a free
                  preview.
                </p>
                <p>
                  OpenShelf separates these access types explicitly and records
                  the applicable licence or public-domain status where known. A
                  book is never marked as downloadable or redistributable unless
                  the source and terms support it.
                </p>
                <p>
                  Because OpenShelf links out to external repositories, source
                  availability and terms on third-party sites can change over
                  time. Listings are reviewed periodically to keep links accurate
                  and remove broken or non-compliant entries.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#E1F2FE] rounded-2xl p-7 sm:p-9">
                <h3 className="text-[20px] font-bold text-[#1E2022] leading-[1.28] tracking-[-0.015em]">
                  No hosted files or paywall circumvention
                </h3>
                <div className="mt-4 space-y-4 text-[14.5px] sm:text-[15px] text-[#242B30] leading-[1.65]">
                  <p>
                    OpenShelf does not host uploaded copies of books, mirror
                    restricted files, or bypass access controls on external
                    platforms.
                  </p>
                  <p>
                    All reading, downloading, or borrowing takes place on the
                    original source site that holds or distributes the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUBMISSIONS, CORRECTIONS & REMOVAL (#FFFFFF) */}
      <section
        id="submissions"
        className="scroll-mt-24 w-full bg-white py-16 sm:py-20 border-t border-[#EFECE6]"
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1E2022] leading-[1.15] tracking-[-0.025em]">
                Submissions, corrections, and takedowns
              </h2>
              <p className="mt-4 text-[16px] text-[#4A4F55] leading-[1.65]">
                Accuracy and respect for rights holders are core requirements of
                the catalogue.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#EAE7E1]">
              <div className="pb-7">
                <h3 className="text-[18px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Source and book suggestions
                </h3>
                <p className="mt-2 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  Suggested books and repositories are reviewed before
                  publication to confirm that the link points to a legitimate
                  source and that access labels match the actual terms.
                </p>
              </div>

              <div className="py-7">
                <h3 className="text-[18px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Metadata corrections and dead links
                </h3>
                <p className="mt-2 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  If a title, author, subject tag, format list, or source URL is
                  inaccurate or outdated, it is updated or retired once
                  verified.
                </p>
              </div>

              <div className="pt-7">
                <h3 className="text-[18px] font-semibold text-[#1E2022] tracking-[-0.015em]">
                  Rights and removal requests
                </h3>
                <p className="mt-2 text-[15px] sm:text-[15.5px] text-[#4A4F55] leading-[1.65]">
                  If an author, publisher, or repository representative believes a
                  listing misstates permissions or should not be indexed, it
                  will be reviewed promptly and removed where appropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}