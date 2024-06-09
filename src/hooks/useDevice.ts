import { useEffect, useState } from "react";

export default function useDevice() {
  const [device, setDevice] = useState<Device>("");
  const isMobile = device === "mobile";

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    switch (true) {
      case innerWidth > 0 && innerWidth < 768:
        setDevice("mobile");
        break;

      case innerWidth >= 768 && innerWidth < 1280:
        setDevice("tablet");
        break;

      case innerWidth >= 1280 && innerWidth < 1920:
        setDevice("laptop");
        break;

      case innerWidth >= 1920:
        setDevice("desktop");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    handleResize();

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return { device, isMobile };
}
