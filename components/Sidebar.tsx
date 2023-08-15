import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import sidebarItems from "@/mock/menuItems";
import ScrollToTopButton from "./ScrollToTop"; 

const Sidebar = () => {
  const router = useRouter();



  const isLinkActive = (path: string) => {
    return router.pathname === path ? "bg-neutral-200" : "";
  };

  return (
    <div className="relative w-full lg:h-screen lg:border-r bg-slate-100 rounded-full lg:rounded-none lg:bg-transparent">
      <div className="lg:absolute">
        <div className="flex flex-row lg:flex-col md:justify-start md:px-6 py-2 gap-y-2 md:gap-y-5">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <div
              key={href}
              className={`py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl ${isLinkActive(
              href
              )}`}
            >
              <Link href={href}>{name} </Link>
            </div>
          ))}
          <div className="py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl hover:bg-neutral-200">
            <Link href="#">Log out</Link>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Sidebar;