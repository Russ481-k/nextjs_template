"use client";
import { Recommendations } from "@/app/components";
import { Badge, Flex, Heading, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import Link from "next/link";

import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function PropertyDetailPage() {


  return (
    <Flex flex={1} flexDir="column" pt="72px" width="100%">
        <Flex flexDir="column" p={4}>
            <Flex flexDir="column" fontWeight={500}>
                <Heading size="md">매물 등록</Heading>
                <TableContainer border="solid 1px lightgray" borderRadius="8px" mt={4}>
                    <Table>
                        <Tbody>
                            <Tr>
                              <Td fontWeight={600}>제목</Td>
                              <Td>
                                  <Flex alignItems="center" gap={3}>
                                      <Input flex={3} placeholder="매물 제목을 입력하세요" size="sm"/>
                                  </Flex>
                              </Td>
                              <Td fontWeight={600}>
                                매물 속성
                              </Td> {/* 관리자 only */}
                              <Td>
                                <Flex alignItems="center" gap={3}>
                                  <Flex alignItems="center"width="50%">
                                    <Select flex={2} placeholder="선택" size="sm">
                                      <option value="option1">급매</option>
                                      <option value="option2">신규</option>
                                      <option value="option3">흥정가능</option>
                                    </Select>
                                  </Flex>
                                  <Flex gap={3}>
                                    <Badge colorScheme="red" height={5}>급매</Badge>
                                    <Badge colorScheme="blue" height={5}>신규</Badge>
                                    <Badge colorScheme="yellow" height={5}>흥정가능</Badge>  
                                  </Flex>
                                </Flex>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td fontWeight={600}>의뢰 고객</Td>
                              <Td>
                                <Flex alignItems="center" gap={3}>
                                  <Input placeholder="의뢰 고객명" size="sm" width="50%"/>  
                                </Flex>
                              </Td>
                              <Td fontWeight={600}>위치</Td>
                              <Td>
                                <Input placeholder="위치" size="sm" width="50%"/>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td fontWeight={600}>카테고리</Td>
                              <Td>
                                <Input placeholder="카테고리명" size="sm" width="50%"/>  
                              </Td>
                              <Td fontWeight={600}>계약 형태</Td>
                              <Td>
                                <Flex alignItems="center" gap={3} width="50%">
                                  <Select flex={2} placeholder="선택" size="sm">
                                    <option value="option1">월세</option>
                                    <option value="option2">전세</option>
                                    <option value="option3">매매</option>
                                  </Select>
                                </Flex>
                              </Td>
                            </Tr>
                            <Tr>             
                                <Td fontWeight={600}>보증금</Td>
                                <Td>
                                  <Flex alignItems="center" gap={3} >
                                    <Flex width="50%">
                                      <Input flex={3} placeholder="0" size="sm" textAlign="right" type="number" width="50%"/>
                                    </Flex>
                                    <Flex>
                                      <Text>만 원</Text>
                                    </Flex>
                                  </Flex>
                                </Td>
                                <Td fontWeight={600}>금액</Td>
                                <Td>        
                                  <Flex alignItems="center" gap={3} >
                                    <Flex width="50%">
                                      <Input flex={3} placeholder="0" size="sm" textAlign="right" type="number" width="50%"/>
                                    </Flex>
                                    <Flex>
                                      <Text>만 원</Text>
                                    </Flex>
                                  </Flex>
                                </Td>
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
            </Flex>
        </Flex>
    </Flex>
  );
}
