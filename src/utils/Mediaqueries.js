import { useState, useEffect } from "react"

export function ShowIfDeviceIs(arg) {
  const [device, setDevice] = useState("")
  const getWidth = () => {
    if (window.innerWidth > 992) {
      setDevice("desktop")
    } else if (678 < window.innerWidth && window.innerWidth > 992) {
      setDevice("tablet")
    } else {
      setDevice("mobile")
    }
  }
  useEffect(() => {
    getWidth()
  }, [])
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", () => getWidth(), {
        passive: true,
      })
      return () => window.removeEventListener("resize", () => getWidth())
    }
  }, [device])

  return arg === device
}
