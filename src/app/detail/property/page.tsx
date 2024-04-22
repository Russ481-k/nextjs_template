"use client";
import { Recommendations } from "@/app/components";
import { Badge, Flex, Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import Link from "next/link";

import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function PropertyDetailPage() {


  return (
    <Flex flex={1} flexDir="column" pt="72px" width="100%">
        <Flex flexDir="column" p={4}>
            <Flex flexDir="column" fontWeight={500}>
                <Heading size="md">매물 상세</Heading>
                <TableContainer border="solid 1px lightgray" borderRadius="8px" mt={4}>
                    <Table>
                        <Tbody>
                            <Tr>
                                <Td fontWeight={600}>제목</Td>
                                <Td>
                                    <Flex gap={3}>
                                        <Text>대동 IC 근처 800평 매물</Text>
                                        <Badge colorScheme="red" >급매</Badge>
                                        <Badge colorScheme="blue">신규</Badge>
                                        <Badge colorScheme="yellow">흥정가능</Badge>
                                    </Flex>
                                </Td>
                                <Td fontWeight={600}>의뢰 고객</Td> {/* 관리자 only */}
                                <Td>
                                    <Link href="/customer/1">
                                        고객 이름
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={600}>카테고리</Td>
                                <Td>농지</Td>
                                <Td fontWeight={600}>위치</Td>
                                <Td>대동 IC 근처</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={600}>계약 형태</Td>
                                <Td>매매</Td>
                                <Td fontWeight={600}>금액</Td>
                                <Td isNumeric>3,000 만 원 / 200 만 원</Td>
                            </Tr>
                        </Tbody>
                        <TableCaption fontWeight={600}>상세 내용</TableCaption>
                    </Table>
                    <Flex p={4} h={600}>
                    <ReactQuill modules={
                            {    toolbar: [
                                [{ header: '1' }, { header: '2' }, { font: [] }],
                                [{ size: [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [
                                  { list: 'ordered' },
                                  { list: 'bullet' },
                                  { indent: '-1' },
                                  { indent: '+1' },
                                ],
                                ['link', 'image', 'video'],
                                ['clean'],
                              ],
                              clipboard: {
                                // toggle to add extra line breaks when pasting HTML:
                                matchVisual: false,
                              },
                            }
                          }
                          formats={[
                            'header',
                            'font',
                            'size',
                            'bold',
                            'italic',
                            'underline',
                            'strike',
                            'blockquote',
                            'list',
                            'bullet',
                            'indent',
                            'link',
                            'image',
                            'video',
                          ]}
                          readOnly={false}
                          style={{width:"100%", height:"90%"}} 
                        />
                    </Flex>
                </TableContainer>
                <Recommendations/>
            </Flex>
        </Flex>
    </Flex>
  );
}
