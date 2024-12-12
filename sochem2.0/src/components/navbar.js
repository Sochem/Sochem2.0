import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Events", href: "/events" },
  { name: "Funds", href: "/funds" },
  { name: "Gallery", href: "/gallery" },
  { name: "Family", href: "/family" },
  { name: "Cloud", href: "/cloud" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  const isLoginPage = router.pathname === "/login";

  return (
    <div className="px-6 py-6 lg:px-8">
      <nav className="flex items-center justify-start" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-18" src="/images/sochem_logo.svg" alt="" />
          </a>
          <div className="pl-4 ">
            <span className="text-[#2A6BFF] text-xl font-medium">Sochem</span>
            <p className="text-l font-medium leading-6 text-white">
              IIT (BHU) Varanasi
            </p>
          </div>
        </div>
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
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:underline  2xl:text-xl text-[#F7FAFF] underline-offset-4 decoraton-8 decoration-[#2A6BFF] duration-100"
            >
              {item.name}
            </a>
          ))}
          {isLoginPage ? (
            <div className="hidden lg:flex lg:flex-1">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Home
              </a>
            </div>
          ) : user ? (
            <div className="hidden lg:flex lg:flex-1 gap-3 items-center">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="rounded-full w-8 h-8"
              />
              <p className="text-lg font-bold text-white">
                {user.name.split(" ")[0]}
              </p>
              <button
                className="rounded-md bg-red-600 px-2 py-0.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-red-600"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1">
              <a
                href="/login"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </a>
            </div>
          )}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {isLoginPage ? (
                  <a
                    href="/"
                    className="-mx-3 block rounded-xl py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Home
                  </a>
                ) : user ? (
                  <div className="space-y-2">
                    <div className="flex justify-start gap-3 items-center">
                      <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="rounded-full w-10 h-10"
                      />
                      <p className="space-y-2 text-base font-bold leading-5 text-gray-900 hover:bg-gray-400/10">
                        {user.name.split(" ")[0]}
                      </p>
                    </div>
                    <a
                      onClick={logout}
                      className="-mx-3 block rounded-xl py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log out
                    </a>
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="-mx-3 block rounded-xl py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
