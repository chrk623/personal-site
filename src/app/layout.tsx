import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/providers";
import { LayoutContent } from "@/components/layout/layout";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Charco Hui",
  description: "Charco Hui Person Website - Data Scientist & Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <LayoutContent>{children}</LayoutContent>
            <Analytics />
            <SpeedInsights />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
