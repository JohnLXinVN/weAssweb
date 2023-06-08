"use client";
import { useEffect, useReducer, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about/ban-giam-hieu" },
  { name: "Tài liệu", href: "/tai-lieu" },
  { name: "Liên hệ", href: "/lien-he" },
  { name: "Hình ảnh", href: "/hinh-anh" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <header className="bg-[#74c3ff] shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between h-[88px] lg:px-6"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="/images/untitled-2_1.png"
            alt=""
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex  items-center h-full">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                currentPath == item.href
                  ? "items-center text-sm font-semibold leading-6 text-white bg-red-500 h-full p-2 flex"
                  : "items-center flex p-2 h-full text-sm font-semibold leading-6 text-gray-900"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="http://yendinh1.edu.vn/uploads/untitled-2_1.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
