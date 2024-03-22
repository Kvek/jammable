import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans as NotoSans } from "next/font/google";

import type { WrapperComponentType } from "@types";

import { ReduxProvider } from "@providers/ReduxProvider";
import { ThemeProvider } from "@providers/ThemeProvider";

import { Footer } from "@wrappers";
import { Navbar } from "@wrappers/Navbar";

import { cn } from "@lib/utils";

const notoSans = NotoSans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Create AI Covers with your favorite voices",
  title: "Jammable | Create AI Covers with your favorite voices!",
};

const RootLayout: WrapperComponentType = ({ children }) => (
  <html suppressHydrationWarning className="h-full" lang="en">
    <body className={cn("bg-background antialiased", notoSans.className)}>
      <ReduxProvider>
        <ThemeProvider disableTransitionOnChange enableSystem attribute="class">
          <Navbar />
          <div className="px-4 pb-16 pt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
