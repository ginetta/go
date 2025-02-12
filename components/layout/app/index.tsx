import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Meta from "../meta";
import { Logo, Divider } from "@/components/shared/icons";
import ListBox from "./list-box";
import UserDropdown from "./user-dropdown";
import { useRouter } from "next/router";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const NavTabs = dynamic(() => import("./nav-tabs"), {
  ssr: false,
  loading: () => <div className="w-full h-12 -mb-0.5" />,
}); // dynamic import to avoid react hydration mismatch error

export default function AppLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { slug, key } = router.query as {
    slug?: string;
    key?: string;
  };

  return (
    <div>
      <Meta />
      <Toaster />
      <div className="min-h-screen w-full bg-gray-50">
        <div className="sticky top-0 left-0 right-0 border-b bg-white border-gray-200 z-20">
          <div className="max-w-screen-xl mx-auto px-2.5 sm:px-20">
            <div className="h-16 flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/">
                  <a>
                    <Logo className="w-8 h-8 active:scale-95 transition-all duration-75" />
                  </a>
                </Link>
                <Divider className="h-8 w-8 ml-3 text-gray-200" />
                <ListBox />
                {key && slug && (
                  <>
                    <Divider className="h-8 w-8 mr-3 text-gray-200" />
                    <Link href={`/${slug}/${key}`}>
                      <a className="text-sm font-medium">{key}</a>
                    </Link>
                  </>
                )}
              </div>
              <UserDropdown />
            </div>
            <NavTabs />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
