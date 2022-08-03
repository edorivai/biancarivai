import { Link } from "@remix-run/react";
import type { PropsWithChildren } from "react";

export function ContactButton({ children }: PropsWithChildren<{}>) {
  return (
    <Link
      className="bg-olive text-white px-[17px] py-[9px] rounded-lg text-[16px] uppercase font-medium tracking-[1px] inline-block my-[50px]"
      to="/kontakt"
    >
      ⋗ {children ?? <>Walk with me</>}
    </Link>
  );
}
