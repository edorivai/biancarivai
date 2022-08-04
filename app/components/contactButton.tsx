import { Link } from "@remix-run/react";
import type { PropsWithChildren } from "react";

export function ContactButton({ children }: PropsWithChildren<{}>) {
  return (
    <Link
      className="bg-axolotl text-white px-[17px] py-[9px] text-[16px] uppercase font-medium tracking-[1px] inline-block my-[50px]"
      to="/kontakt"
    >
      <span className="text-2xl">⋗</span> {children ?? <>Walk with me</>}
    </Link>
  );
}
