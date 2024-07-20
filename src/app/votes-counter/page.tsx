"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  HStack,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function VotesCounter(props: any) {
  const [votes, setVotes] = useState(0);
  return (
    <>
      <Card
        width="400px"
        bg="orange"
        borderColor="red"
        borderWidth="4px"
        marginBottom="40px"
      >
        <CardHeader as="h2">Party Name: {props.party}</CardHeader>
        <Center>
          <CardBody>{votes}</CardBody>
        </Center>
        <CardFooter>
          <Button
            bg="red"
            onClick={() => {
              setVotes(votes + 1);
              {
                props.handleClick();
              }
            }}
          >
            Register your vote
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
