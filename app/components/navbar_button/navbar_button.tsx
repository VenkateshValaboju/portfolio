import Link from "next/link";

function NavbarButton({icon,text,destination}: {icon?: string, text?: string, destination?: string}) {
  return (
        <Link href={destination?destination:"/"} prefetch={true} className="flex px-4 py-2 rounded-full mx-3 font-[family-name:var(--font-geist-mono)] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-all duration-300 ease-in-out">
            {icon && <img src={icon} alt="" className="inline-block mr-2" />}
            {text}
        </Link>
  );
}

export default NavbarButton;