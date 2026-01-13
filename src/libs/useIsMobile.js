import React from "react"
export default function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia('(pointer: coarse)').matches
  )

  React.useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)')
    const handler = () => setIsMobile(mq.matches)

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}
