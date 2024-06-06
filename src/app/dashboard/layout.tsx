import { Flex } from "@chakra-ui/react";
import { Footer, TopBar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topBarHeight = "62px";
  const welcomeImgHeight = "420px";
  return (
    <Flex flexDir="column">
      <TopBar topBarHeight={topBarHeight} welcomeImgHeight={welcomeImgHeight} />
      {children}
      <Footer />
    </Flex>
  );
}
