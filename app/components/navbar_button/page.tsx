import Link from "next/link";

export default function NavbarButton({icon,text,destination}: {icon?: string, text?: string, destination?: string}) {
  return (
        <div className="flex px-4 py-2 rounded-full mx-3 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-all duration-300 ease-in-out">
            <Link href={destination?destination:"/"} prefetch={true}>
                {icon && <img src={icon} alt="" className="inline-block mr-2" />}
                {text}
            </Link>
        </div>
  );
}