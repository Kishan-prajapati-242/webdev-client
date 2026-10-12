"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
  const path = usePathname();
  return (
    <nav
      id="wd-account-navigation"
      aria-label="Account"
      className="wd-account-nav flex w-full flex-col border-b border-neutral-200 pb-3 md:w-[145px] md:shrink-0 md:border-b-0"
    >
      {[
        ["signin", "Sign in"],
        ["signup", "Sign up"],
        ["profile", "Profile"],
      ].map(([slug, label]) => (
        <Link
          key={slug}
          href={`/account/${slug}`}
          className={`${path.endsWith(slug) ? "active" : "border-l-3 border-transparent"} px-3 py-2 text-sm text-neutral-700`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
