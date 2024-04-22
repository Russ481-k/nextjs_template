"use client";
import { Flex } from "@chakra-ui/react";

export default function PropertyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Flex width="100%">{children}</Flex>;
}
