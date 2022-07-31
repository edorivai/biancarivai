import { NavLink } from "@remix-run/react";

export function Nav() {
  return (
    <nav className="shrink-0 px-8 py-4 font-serif text-2xl font-bold">
      <ul className="flex items-center justify-center gap-8 sm:gap-32">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-persian" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-persian" : "")}
            to="/"
          >
            {/* <h1 className="m-0 text-center text-3xl leading-6">
              Bianca
              <br />
              Rivai
            </h1> */}
            {/* <img className="h-40" src="Logo1.svg" alt="Bianca Rivai" />
            <img className="h-40" src="Logo2.svg" alt="Bianca Rivai" /> */}
            <img className="h-40" src="Logo3.svg" alt="Bianca Rivai" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-persian" : "")}
            to="/kontakt"
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
