import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const isLinkActive = (path: string) => {
    return router.pathname === path ? "bg-neutral-200" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full lg:h-screen lg:border-r bg-slate-100 rounded-full lg:rounded-none lg:bg-transparent">
      <div className="lg:absolute">
        <div className="flex flex-row lg:flex-col md:justify-start md:px-6 py-2 gap-y-2 md:gap-y-5">
          <div
            className={`py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl ${isLinkActive(
              "/profile"
            )}`}
          >
            <Link href="/profile">Profile</Link>
          </div>
          <div
            className={`py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl ${isLinkActive(
              "/my-learnings"
            )}`}
          >
            <Link href="/my-learnings">My Learnings</Link>
          </div>
          <div
            className={`py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl ${isLinkActive(
              "/payment-history"
            )}`}
          >
            <Link href="/payment-history">Payment History</Link>
          </div>
          <div className="py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl hover:bg-neutral-200">
            <Link href="#">Log out</Link>
          </div>
        </div>
      </div>
      {showScrollButton && (
        <button
          className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-all"
          onClick={scrollToTop}
        >
          <Image
            src="/up.svg"
            alt="up"
            width={40}
            height={40}
          />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
