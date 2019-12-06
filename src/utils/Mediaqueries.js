import { useMediaQuery } from "react-responsive"

export const isDesktopOrLaptop = useMediaQuery({
  query: "(min-width: 1224px)",
})

export const isTabletOrMobileDevice = useMediaQuery({
  query: "(max-width: 1224px)",
})
