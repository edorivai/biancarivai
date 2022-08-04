import { NavLink } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { useBreakpoints } from "../hooks/useBreakpoints";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";

const routes = {
  "/": <img className="h-40" src="Bianca.svg" alt="Bianca Rivai" />,
  "/about": "About",
  "/kontakt": "Kontakt",
  "/session": "1:1 Session",
  "/journey": "1:1 Journey",
} as const;

function menuItems(order: (keyof typeof routes)[]) {
  return order.map((route) => ({ route, content: routes[route] }));
}

export function Nav() {
  const { fitsTablet } = useBreakpoints();
  return (
    <nav className="shrink-0 px-8 py-4 font-serif text-2xl font-bold flex items-center justify-between md:justify-center gap-8 md:gap-8 lg:gap-32 whitespace-nowrap relative">
      {fitsTablet ? <DesktopItems /> : <MobileMenu />}
    </nav>
  );
}

const mobileItems = menuItems([
  "/",
  "/about",
  "/kontakt",
  "/session",
  "/journey",
]);
function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavLink to="/" className="shrink-0">
        {routes["/"]}
      </NavLink>
      <button onClick={() => setOpen(true)}>
        <MenuIcon className="h-12" />
      </button>
      {open && (
        <div className="bg-white flex-center flex-col gap-8 fixed w-full h-full z-10 top-0 left-0 ">
          <button
            className="absolute top-4 right-4"
            onClick={() => setOpen(false)}
          >
            <XIcon className="w-12" />
          </button>
          {mobileItems.map(({ route, content }) => (
            <NavLink
              key={route}
              className={({ isActive }) =>
                clsx("shrink-0", isActive ? "text-axolotl" : "")
              }
              to={route}
              onClick={() => setOpen(false)}
            >
              {content}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

const desktopItems = menuItems([
  "/about",
  "/kontakt",
  "/",
  "/session",
  "/journey",
]);
function DesktopItems() {
  return (
    <>
      {desktopItems.map(({ route, content }) => (
        <NavLink
          key={route}
          className={({ isActive }) =>
            clsx("shrink-0", isActive ? "text-axolotl" : "")
          }
          to={route}
        >
          {content}
        </NavLink>
      ))}
    </>
  );
}
