import { inter, poppins } from "@/styles/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}> {/* ✅ Applies the font globally */}
      <body>{children}</body>
    </html>
  );
}