import NavbarButton from "../navbar_button/page";

export default function Navbar() {
  const buttons = [
    { icon: "/home-icon.svg", text: "Home", destination: "/" },
    { icon: "/about-icon.svg", text: "About", destination: "/about" },
    { icon: "/projects-icon.svg", text: "Projects", destination: "/projects" }
  ];
  return (
    <div className="flex items-start justify-start p-3 mb-3">
      {buttons.map((button, index) => (
        <NavbarButton key={index} icon={button.icon} text={button.text} destination={button.destination} />
      ))}
    </div>
  );
}