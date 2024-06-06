'use client';

import { Flex } from "@chakra-ui/react";
import { Footer, TopBar } from "./components";
import { fonts } from "./fonts";
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topBarHeight = "62px";
  const welcomeImgHeight = "420px";
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
      <Providers>   
        <TopBar topBarHeight={topBarHeight} welcomeImgHeight={welcomeImgHeight}/>    
        <Flex flexDir="column">
          {children}
        </Flex>
        <Footer/>
      </Providers>
      </body>
    </html>
  );
}
