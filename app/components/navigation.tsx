import { NavLink } from "@remix-run/react";

export function Nav() {
  return (
    <nav className="shrink-0 px-8 py-4 font-serif text-xl font-bold">
      <ul className="flex justify-end gap-4">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-persian" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
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
            to="/kontakt"
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
