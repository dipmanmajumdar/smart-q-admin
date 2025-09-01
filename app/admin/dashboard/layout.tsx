import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative flex min-h-screen items-center justify-center ${lora.className}`}>
      {children}
    </div>
  );
}
