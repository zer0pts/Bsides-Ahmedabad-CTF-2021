import {
  Box,
  Center,
  Code,
  Flex,
  Link,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { dateFormat } from "lib/date";
import type { NextPage } from "next";
import useCTF from "../lib/api/ctf";

const Home: NextPage = () => {
  const { data: ctf } = useCTF();
  return (
    <Stack>
      <Text fontSize="4xl"> - DUNGEON - BSides Ahmedabad CTF 2021</Text>

      <Text pt={10}>
        <span style={{ fontWeight: "bold" }}>Tired of easy tasks?</span>{" "}
      </Text>
      <Box pl={4}>
        <Text>
          We invite you to spend 24 hours in the wildness of Dungeon to battle
          amongst toughest skulls and emerge as the real dragon. <br />
          There will be 5 categories with various difficulties: pwn, web, rev,
          crypto and misc.
        </Text>

        <Text>
          <span style={{ fontWeight: "bold" }}>Warning:</span> Adrenaline rush
          to win this CTF may jumping off your chair multiple times, hence play
          safe. Make sure to stock up your supplies and be ready to
          Hack-Eat-Sleep-Repeat ⭐
        </Text>
      </Box>

      {ctf && (
        <>
          <Text fontSize="xl" pt={10}>
            [ Time and Date ]
          </Text>

          <Text pl={4}>
            {dateFormat(ctf.start_at)} - {dateFormat(ctf.end_at)}
          </Text>
        </>
      )}

      <Text fontSize="xl" pt={10}>
        [ Contact ]
      </Text>

      <Text pl={4}>
        Discord:{" "}
        <Link href="https://discord.gg/hds59dnDY7">
          https://discord.gg/hds59dnDY7
        </Link>
      </Text>

      <Text fontSize="xl" pt={4}>
        [ Prizes ]
      </Text>
      <Stack pl={4}>
        <Text fontWeight="bold">1st place</Text>
        <UnorderedList pl={4}>
          <ListItem>USD 750 as CASH prize</ListItem>
          <ListItem>Hackthebox 5 X Annual VIP + 25 UK Pounds Swagcard</ListItem>
          <ListItem>
            FREE BSides Ahmedabad 2021 Pass (if played in team, any 2 team
            members will be offered passes)
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold">2nd place</Text>
        <UnorderedList pl={4}>
          <ListItem>USD 250 as CASH prize</ListItem>
          <ListItem>
            Hackthebox 5 X 6 Month VIP + 25 UK Pounds Swagcard
          </ListItem>
          <ListItem>FREE BSides Ahmedabad 2021 Pass (one pass)</ListItem>
        </UnorderedList>
        <Text fontWeight="bold">3rd place</Text>
        <UnorderedList pl={4}>
          <ListItem>
            Hackthebox 5 X 3 Month VIP + 25 UK Pounds Swagcard
          </ListItem>
        </UnorderedList>
      </Stack>

      <Text fontSize="xl" pt={4}>
        [ Rules ]
      </Text>
      <Text pl={4}>
        <UnorderedList>
          <ListItem>Your team can be of any size.</ListItem>
          <ListItem>
            Anyone is allowed to participate: no restriction on age or
            nationality.
          </ListItem>
          <ListItem>
            Your position on the scoreboard depends on 2 things: 1) your total
            number of points (higher is better); 2) the timestamp of your last
            solved challenge (lower is better).
          </ListItem>
          <ListItem>
            The survey challenge is special: it does award you some points, but
            it doesn't update your "last solved challenge" timestamp. You can't
            get ahead simply by solving the survey faster.
          </ListItem>
          <ListItem>
            You can't brute-force flags. If you submit 5 incorrect flags in a
            short succession, the flag submission form will get locked for 5
            minutes.
          </ListItem>
          <ListItem>One person can participate in only one team.</ListItem>
          <ListItem>
            Sharing solutions, hints or flags with other teams during the
            competition is strictly forbidden.
          </ListItem>
          <ListItem>You are not allowed to attack the scoreserver.</ListItem>
          <ListItem>You are not allowed to attack other teams.</ListItem>
          <ListItem>
            You are not allowed to have multiple accounts. If you can't log in
            to your account, please contact us on Discord.
          </ListItem>
          <ListItem>
            We reserve the right to ban and disqualify any team that chooses to
            break any of these rules.
          </ListItem>
          <ListItem>
            The flag format is{" "}
            <Code variant="solid" colorScheme="gray">
              {"Neko\\{[\\x20-\\x7e]+\\}"}
            </Code>
            , unless specified otherwise.
          </ListItem>
          <ListItem>Most importantly: good luck and have fun!</ListItem>
        </UnorderedList>
      </Text>

      <Text fontSize="xl" pt={4}>
        [ Organized by ]
      </Text>
      <Center>
        <Box w="xs" mx="auto">
          <Link href="https://twitter.com/zer0pts">
            <img src="zer0pts.png" />
          </Link>
        </Box>
      </Center>

      <Text fontSize="xl">[ Our Sponsors ]</Text>
      <Stack>
        <Text fontSize="lg" align="center" fontWeight="bold">
          Title Sponsor
        </Text>
        <Center>
          <Box w="md" p="10">
            <Link href="https://www.hackerone.com">
              <img src="hackerone.png" />
            </Link>
          </Box>
        </Center>
        <Spacer />

        <Text fontSize="lg" align="center" fontWeight="bold">
          Infra Sponsor
        </Text>
        <Center>
          <Box w="250px" p="10">
            <Link href="https://www.synack.com/red-team/">
              <img src="synack.png" />
            </Link>
          </Box>
        </Center>
        <Spacer />

        <Text fontSize="lg" align="center" fontWeight="bold">
          Giveaway Sponsor
        </Text>
        <Center>
          <Box w="250px" p="10">
            <Link href="https://www.hackthebox.eu/">
              <img src="hackthebox.png" />
            </Link>
          </Box>
        </Center>
        <Spacer />

        <Text fontSize="lg" align="center" fontWeight="bold">
          Powered By
        </Text>
        <Flex justify="space-evenly" align="center">
          <Box w="250px" p="10">
            <Link href="https://www.pureid.io/">
              <img src="pureid.png" />
            </Link>
          </Box>

          <Box w="250px" p="10">
            <Link href="https://rehack.xyz/">
              <img src="pureid.png" />
            </Link>
          </Box>
        </Flex>
        <Spacer />
      </Stack>
    </Stack>
  );
};

export default Home;
