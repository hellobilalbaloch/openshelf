import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-[#E6E3DD] mt-auto">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand & Coming Soon Note */}
          <div className="max-w-[360px]">
            <Link href="/" className="flex items-center gap-2.5">
              <svg
                width="24"
                height="22"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 4C2 2.89543 2.89543 2 4 2H11C12.1046 2 13 2.89543 13 4V20C13 18.8954 12.1046 18 11 18H4C2.89543 18 2 18.8954 2 20V4Z"
                  fill="#0277BD"
                />
                <path
                  d="M24 4C24 2.89543 23.1046 2 22 2H15C13.8954 2 13 2.89543 13 4V20C13 18.8954 13.8954 18 15 18H22C23.1046 18 24 18.8954 24 20V4Z"
                  fill="#0277BD"
                />
              </svg>
              <span className="text-[21px] font-bold tracking-[-0.025em] text-[#1E2022]">
                OpenShelf
              </span>
            </Link>
            <p className="mt-3.5 text-[14.5px] text-[#5C6168] leading-[1.6]">
              A centralised index for legally free books and textbooks from
              trusted sources. Catalogue launching very soon.
            </p>
          </div>

          {/* Two Clean Policy & Overview Columns */}
          <div className="grid grid-cols-2 sm:flex gap-10 sm:gap-16 text-[14.5px] text-[#3E4349]">
            <div className="flex flex-col gap-3">
              <Link href="/sources" className="hover:text-[#000000] transition-colors">
                Sources &amp; policy
              </Link>
              <Link
                href="/sources#access-labels"
                className="hover:text-[#000000] transition-colors"
              >
                Access labels
              </Link>
              <Link
                href="/sources#submissions"
                className="hover:text-[#000000] transition-colors"
              >
                Submissions &amp; removals
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-[#000000] transition-colors">
                Home
              </Link>
              <Link
                href="/#how-it-works"
                className="hover:text-[#000000] transition-colors"
              >
                How it works
              </Link>
              <Link
                href="/#status"
                className="hover:text-[#000000] transition-colors"
              >
                Launch status
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#EAE7E1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13.5px] text-[#6E737B]">
          <span>© 2026 OpenShelf. Discover more. Pay nothing.</span>
          <span>Public catalogue launching soon. Developed By Bilal Baloch</span>
        </div>
      </div>
    </footer>
  );
}