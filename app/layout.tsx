import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABCD — The Intelligent Platform for Global Trade",
  description:
    "ABCD connects every shipment, document, workflow, and stakeholder in one intelligent platform — so trade teams move faster, stay compliant, and always know what happens next.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="navy"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <ThemeProvider>{children}</ThemeProvider>
        {/* Page-edge blur overlays — blur only, no color tint */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-y-0 left-0 z-30 w-[8vw] max-w-[120px] backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to right, black 0%, black 25%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 25%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-y-0 right-0 z-30 w-[8vw] max-w-[120px] backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to left, black 0%, black 25%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, black 25%, transparent 100%)",
          }}
        />
      </body>
    </html>
  );
}
