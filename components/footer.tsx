import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto px-[4%] lg:px-[7%] py-8">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First section with logo */}
          <div className="flex flex-col gap-2 max-w-[70%]">
            {/* <Image
              src="/placeholder.svg"
              alt="Company Logo"
              width={120}
              height={40}
              className="mb-4"
            /> */}
            {/* LOGO */}
            <span className="font-bold">YsDesigns</span>
            <p className="text-sm text-gray-600 text-center md:text-left dark:text-slate-200">
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
              {/* <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Product 3
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Product 4
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Resources section */}
          <div>
            <h3 className="text-base font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Guides
                </Link>
              </li> */}
              <li>
                <Link
                  href="#"
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
            © {new Date().getFullYear()} Ysdesigns. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
