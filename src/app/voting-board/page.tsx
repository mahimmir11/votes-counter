"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import VotesCounter from "../votes-counter/page";

export default function VotingBoard(props: any) {
  const parties = ["BJP", "Congress", "AAP", "MP", "MM", "YS"];
  const [totalVotes, setTotalVotes] = useState(0);
  
  const handleClick = () => {
    setTotalVotes(totalVotes + 1);
  };
  
  return (
    <>
      <Center>
        <Card
          width="500px"
          borderColor="red"
          borderWidth="2px"
          bg="red"
          margin="2px"
        >
          <CardHeader>
            <Heading as="h2">Total Votes : {totalVotes}</Heading>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Center>
      <Flex 
        flexWrap="wrap" 
        justifyContent="flex-start" 
        gap="15px" 
        mt="20px" 
        mx="auto" 
        marginLeft='50px'
        maxWidth="2000px"
      >
        {parties.map((party, index) => (
          <Box
            key={index}
            width={["100%", "calc(50% - 7.5px)", "calc(33.333% - 10px)"]}
            flexGrow={0}
            flexShrink={0}
          >
            <VotesCounter party={party} handleClick={handleClick} />
          </Box>
        ))}
      </Flex>
    </>
  );
}