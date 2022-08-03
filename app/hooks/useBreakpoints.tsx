import useMedia from "use-media";

const desktop = { minWidth: 1024 };
const tablet = { minWidth: 768 };

export function useBreakpoints() {
  return {
    fitsDesktop: useMedia(desktop),
    fitsTablet: useMedia(tablet),
  };
}
