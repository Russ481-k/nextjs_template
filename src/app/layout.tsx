"use client";

import { fonts } from "./fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body style={{ minHeight: "100vh" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
