"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { DATA } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = DATA.navigation;

  return (
    <Navbar
      isBlurred
      className="sticky top-0 z-50 shadow-lg backdrop-blur-xl bg-background/60"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo - Left Side */}
      <NavbarContent className="sm:basis-1/3" justify="start">
        <NavbarBrand>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className="flex items-center gap-3"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                priority
                alt="NOM Logo"
                className="h-10 w-10"
                height={40}
                src="/Favicon-09.svg"
                width={40}
              />
              <span className="font-bold text-xl text-black dark:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-konexy)', letterSpacing: '10px' }}>
                NOM
              </span>
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      {/* Navigation Menu - Center */}
      <NavbarContent className="hidden sm:flex gap-10 sm:basis-1/3" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={item.name}>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                className={`flex items-center gap-2 transition-all font-medium ${
                  pathname === item.href
                    ? "text-primary-500 font-semibold"
                    : "text-foreground hover:text-primary-500"
                }`}
                href={item.href}
              >
                <Icon 
                  className={`w-4 h-4 ${
                    pathname === item.href ? "text-primary-500" : ""
                  }`} 
                  icon={item.icon} 
                />
                {item.name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Theme Switcher - Right Side */}
      <NavbarContent className="sm:basis-1/3" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden ml-2"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/90 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.name}>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-medium transition-colors ${
                    pathname === item.href
                      ? "bg-primary-500/10 text-primary-500 font-semibold"
                      : "hover:bg-content1"
                  }`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
