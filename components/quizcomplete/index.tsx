import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { answersType } from "../../context/QuizProvider";

interface props {
  setActive: Dispatch<SetStateAction<number>>;
  answerResults: answersType[];
}

export const QuizComplete = (props: props) => {
  const { setActive, answerResults } = props;
  const [degrees, setDegrees] = useState(0);
  let intervalId: NodeJS.Timeout;
  const handleMouseOver = () => {
    intervalId = setInterval(() => {
      setDegrees((degrees) => degrees + 1);
    }, 10);
  };

  const handleMouseOut = () => {
    clearInterval(intervalId);
    setDegrees(0);
  };
  const results = answerResults.filter((res) => res.result).length;
  const resultText = () => {
    if (results === 10) {
      return "Perfect score! I wonder if you can get it again.";
    } else if (results >= 6 && results < 10) {
      return "You missed some but you did alright!";
    } else {
      return `You should keep practicing, you'll get the hang of it.`;
    }
  };
  const resultNumberColor = () => {
    if (results === 10) {
      return "green";
    } else if (results >= 6 && results < 10) {
      return "yellow.0";
    } else {
      return "red.0";
    }
  };
  return (
    <Flex
      direction="column"
      h="16rem"
      w="16rem"
      gap="xl"
      align="center"
      justify="center"
    >
      <Text c={resultNumberColor()} fw={700} size="4rem">
        {results}/10
      </Text>
      <Text c="gray.9" ta="center">
        {resultText()}
      </Text>

      <Flex gap="lg">
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <Button
          variant="gradient"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => setActive(0)}
          gradient={{ from: "pink", to: "cyan", deg: degrees }}
        >
          Play again
        </Button>
      </Flex>
    </Flex>
  );
};
