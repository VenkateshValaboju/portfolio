import NavbarButton from "../navbar_button/page";

export default function Navbar() {
  const buttons = [
    { icon: "/home-icon.svg", text: "Home", destination: "/" },
    { icon: "/about-icon.svg", text: "About Me", destination: "/about" },
    { icon: "/projects-icon.svg", text: "Projects", destination: "/projects" }
  ];
  return (
    <div className="flex items-center justify-center p-3 border-b border-b-white/10 fixed top-0 left-0 right-0 bg-[#000000] dark:bg-[#000000] z-50">
      {buttons.map((button, index) => (
        <NavbarButton key={index} icon={button.icon} text={button.text} destination={button.destination} />
      ))}
    </div>
  );
}