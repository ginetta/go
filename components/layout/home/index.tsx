import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Meta from "../meta";
import Image from "next/future/image";
import { Github, Logo, Twitter } from "@/components/shared/icons";

export default function HomeLayout({
  children,
  domain,
}: {
  children: ReactNode;
  domain?: string;
}) {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Meta />
      <div className="bg-white z-20">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-20">
          <div className="h-24 flex justify-between items-center">
            <div className="flex items-center">
              {domain ? (
                <a href="https://ginetta.net" target="_blank" rel="noreferrer">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      d="M32 47a8 8 0 008-8H24a8 8 0 008 8z"
                      fill="var(--logo)"
                    ></path>
                    <circle cx="32" cy="26" r="8" fill="var(--logo)"></circle>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32zM32 47a8 8 0 008-8H24a8 8 0 008 8zm0-13a8 8 0 100-16 8 8 0 000 16z"
                    ></path>
                  </svg>
                </a>
              ) : (
                <Link href="https://ginetta.net">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      d="M32 47a8 8 0 008-8H24a8 8 0 008 8z"
                      fill="var(--logo)"
                    ></path>
                    <circle cx="32" cy="26" r="8" fill="var(--logo)"></circle>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32zM32 47a8 8 0 008-8H24a8 8 0 008 8zm0-13a8 8 0 100-16 8 8 0 000 16z"
                    ></path>
                  </svg>
                </Link>
              )}
            </div>
            {session ? (
              <a
                href="https://go-admin.ginetta.net"
                className="py-1.5 px-5 bg-black hover:bg-white rounded-full border border-black text-sm text-white hover:text-black transition-all"
              >
                Dashboard
              </a>
            ) : (
              <a
                href="https://go-admin.ginetta.net/login"
                className="py-1.5 px-5 bg-black hover:bg-white rounded-full border border-black text-sm text-white hover:text-black transition-all"
              >
                Sign in
              </a>
            )}
          </div>
        </div>
      </div>
      {children}
      <div className="border-t border-gray-200 h-20 flex items-center justify-center space-x-12">
        <a href="https://twitter.com/dubdotsh" target="_blank" rel="noreferrer">
          <span className="sr-only">Twitter</span>
          <Twitter className="w-6 h-6 text-gray-600" />
        </a>
        {domain ? (
          <a href="https://dub.sh" target="_blank" rel="noreferrer">
            <span className="sr-only">Dub.sh Logo</span>
            <Logo className="w-7 h-7 text-gray-600" />
          </a>
        ) : (
          <Link href="/">
            <a>
              <span className="sr-only">Dub.sh Logo</span>
              <Logo className="w-7 h-7 text-gray-600" />
            </a>
          </Link>
        )}
        <a
          href="https://github.com/steven-tey/dub"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Github</span>
          <Github className="w-6 h-6 text-gray-600" />
        </a>
      </div>
    </div>
  );
}
