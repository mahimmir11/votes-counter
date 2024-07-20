import Image from "next/image";
import styles from "./page.module.css";
import VotesCounter from "./votes-counter/page";
import VotingBoard from "./voting-board/page";

export default function Home() {
  return (
    <>
    <VotingBoard/>
    </>
  );
}
