import { Link } from "@remix-run/react";
import type { PropsWithChildren } from "react";

export function ContactButton({ children }: PropsWithChildren<{}>) {
  return (
    <Link
      className="font-oswald bg-axolotl text-white px-20 py-[9px] text-[20px] font-bold tracking-[1px] block my-[50px] mx-auto"
      to="/kontakt"
    >
      <span className="text-2xl leading-none font-medium">⋗</span>{" "}
      {children ?? <>Walk with me</>}
    </Link>
  );
}
