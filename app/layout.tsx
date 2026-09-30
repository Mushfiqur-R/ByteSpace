import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  /*
   * Runtime font variables are named after their source (mirroring
   * --font-geist-sans) so the Tailwind theme keys in globals.css
   * (--font-poppins / --font-satoshi) never reference the same name.
   */
  variable: "--font-google-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/*
 * ---------------------------------------------------------------------------
 * Local fonts (Satoshi + Clash Display)
 * ---------------------------------------------------------------------------
 * Neither family exists on Google Fonts, so both are loaded from local files
 * that belong in `app/fonts/` (see app/fonts/README.md). Drop the files in,
 * then un-comment the import + the two blocks below and add
 * `${satoshi.variable}` / `${clashDisplay.variable}` to the <html> className.
 * Nothing else changes — globals.css already resolves
 * `var(--font-local-satoshi, "Satoshi")` and
 * `var(--font-local-clash-display, "Clash Display")`.
 *
 * Files required:
 *   app/fonts/Satoshi-Regular.woff2    (400)  body text, course metadata
 *   app/fonts/Satoshi-Medium.woff2     (500)  labels, buttons, tabs, categories
 *   app/fonts/ClashDisplay-Bold.woff2  (700)  the "ByteSpace" wordmark
 *
 * import localFont from "next/font/local";
 *
 * const satoshi = localFont({
 *   src: [
 *     { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
 *     { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
 *   ],
 *   variable: "--font-local-satoshi",
 *   display: "swap",
 * });
 *
 * const clashDisplay = localFont({
 *   src: [
 *     { path: "./fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
 *   ],
 *   variable: "--font-local-clash-display",
 *   display: "swap",
 * });
 * ---------------------------------------------------------------------------
 */

export const metadata: Metadata = {
  title: "ByteSpace — Get Access to Hundreds of Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses on ByteSpace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Once the local fonts are in app/fonts, extend the className below with
    // `${satoshi.variable} ${clashDisplay.variable}` (see the block above).
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
