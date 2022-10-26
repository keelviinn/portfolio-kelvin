import { useTheme } from "next-themes";
import { NextComponentType } from "next";
import { motion } from "framer-motion";
import { Transition } from "@tailwindui/react";
import Link from "next/link";
import { useState } from "react";
import { MenuToggle } from "../Nav/MenuToggle";

const navItems = [
  { id: 1, href: "/", children: "About" },
  { id: 2, href: "/", children: "Services" },
  { id: 3, href: "/", children: "Projects" },
];

const Hambuger = ({ onClick, isOpen }: any) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-slate-80 dark:bg-white transition ease transform duration-300`;

  return (
    <>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </>
  );
};

const NavItem = ({ href, children, isMobile, onClick }: any) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={`text-gray-500 transition hover:text-gray-500/75 ${
            isMobile
              ? "dark:text-pink-500 dark:hover:text-pink-500/75"
              : "dark:text-gray-200 dark:hover:text-gray-200/75"
          } `}
          onClick={isMobile ? onClick : undefined}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export const Navigation: NextComponentType = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => setIsOpen(!isOpen);

  const ThemeChange = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="bg-gray-200 dark:bg-gray-800 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="bg-gray-200 dark:bg-gray-800 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      );
    }
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <header
      aria-label="Site Header"
      className="bg-white dark:bg-slate-800 w-full"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">
              <a className="block text-pink-600 dark:text-pink-300">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="DESKTOP-MENU hidden md:block">
              <ul className="hidden md:flex items-center gap-6 text-sm">
                {navItems.map(({ id, children, href }) => (
                  <NavItem key={id} href={href}>
                    {children}
                  </NavItem>
                ))}
              </ul>
            </nav>
            <motion.nav
              aria-label="Site Nav"
              className={`MOBILE-MENU md:hidden`}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <ul className="flex flex-col absolute right-0 top-0 h-screen items-center w-[80%] py-10 gap-20 text-lg bg-white dark:bg-slate-700 justify-center">
                {navItems.map(({ id, children, href }) => (
                  <NavItem
                    key={id}
                    href={href}
                    isMobile={true}
                    onClick={handleHamburgerClick}
                  >
                    {children}
                  </NavItem>
                ))}
                <div className="sm:flex sm:gap-4">
                  <Link href="/">
                    <a
                      className="rounded-md border-pink-500 border-2 px-8 py-4 text-sm font-medium text-pink-500 shadow"
                      onClick={handleHamburgerClick}
                    >
                      Resume
                    </a>
                  </Link>
                </div>
              </ul>
            </motion.nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link href="/">
                  <a
                    className="rounded-md border-pink-500 border-2 px-8 py-4 text-sm font-medium text-pink-500 shadow dark:hover:bg-pink-200 transition-colors duration-300"
                    aria-label="Resume"
                  >
                    Resume
                  </a>
                </Link>
              </div>

              <ThemeChange />

              <div className="block md:hidden">
                <button
                  onClick={handleHamburgerClick}
                  className="rounded flex flex-col h-9 w-9 justify-center items-center group"
                >
                  <Hambuger isOpen={isOpen} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
