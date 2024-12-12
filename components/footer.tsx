import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto px-[4%] lg:px-[7%] py-8">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2 max-w-[70%]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-new.svg"
                alt="logo"
                width={140}
                height={40}
                className="hidden md:block min-w-[140px] ml-[-12px]"
              />
            </Link>
            {/* LOGO */}
            <p className="text-sm text-gray-600 text-left dark:text-slate-200">
              Your trusted partner in innovation and excellence.
            </p>
          </div>

          {/* Products section */}
          <div>
            <h3 className="text-base font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-slate-200"
                >
                  Video Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900  dark:text-slate-200"
                >
                  Live Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources section */}
          <div>
            <h3 className="text-base font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/frequently-asked-questions"
                  className="text-gray-600 hover:text-gray-900  dark:text-slate-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900  dark:text-slate-200"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900  dark:text-slate-200"
                >
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900  dark:text-slate-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900  dark:text-slate-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900  dark:text-slate-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600 dark:text-slate-200">
            © {new Date().getFullYear()} Simplify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
