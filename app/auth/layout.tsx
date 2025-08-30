// app/(auth)/layout.tsx
import React from "react"
import Image from "next/image"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      {/* Background image */}
      <Image
        src="/images/gradient-background.jpg" 
        alt="Background"
        fill
        className=""
        priority
      />
        

      {/* Auth content */}
      <div className="z-10 w-full max-w-md">{children}</div>
    </div>
  )
}

