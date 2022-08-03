import { useMediaQuery } from "react-responsive";

const desktop = { minWidth: 1024 };
const tablet = { minWidth: 768 };

export function useBreakpoints() {
  return {
    fitsDesktop: useMediaQuery(desktop),
    fitsTablet: useMediaQuery(tablet),
  };
}
