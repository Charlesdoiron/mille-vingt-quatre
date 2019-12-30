import { useState, useEffect } from "react"

export default function ShowIfDeviceIs(arg) {
  const [device, setDevice] = useState("")
  const ShowIfDeviceIs = () => {
    if (window.innerWidth > 992) {
      setDevice("desktop")
    } else if (678 < window.innerWidth && window.innerWidth > 992) {
      setDevice("tablet")
    } else {
      setDevice("mobile")
    }
  }
  useEffect(() => {
    ShowIfDeviceIs()
  }, [])
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", () => ShowIfDeviceIs(), {
        passive: true,
      })
      return () => window.removeEventListener("resize", () => ShowIfDeviceIs())
    }
  }, [device])

  return arg === device
}
