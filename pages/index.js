import { Button, Container, Group, Image, SimpleGrid, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export default function IndexPage() {

  const [selectedGoat, setSelectedGoat] = useState(null)

  const handleClick = (goatId) => {
    setSelectedGoat(goatId)
  }


  return <>
    <Container style={{backgroundColor: "beige", minHeight: "100vh"}}>
        <Title order={1}> Goat & Float</Title>
        <Text size="xl" mt="md">The Ultimate Relaxation experience</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <Group my="md" justify="center">
              Click a goat to learn more.
        </Group>


          <SimpleGrid cols={3} align="center">
            <div style={{cursor: "pointer"}} onClick={()=>handleClick(1)}>
              <Image src="/images/goat.jpg" width={200} height={160} alt="Floating Tank" />
              <Text>Billy Eilish</Text>
            </div>
            <div style={{cursor: "pointer"}} onClick={()=>handleClick(2)}>
              <Image src="/images/goat.jpg" width={200} height={160} alt="Floating Tank" />
              <Text>Scarlett Goat-hansson</Text>
            </div>
            <div style={{cursor: "pointer"}} onClick={()=>handleClick(3)}>
              <Image src="/images/goat.jpg" width={200} height={160} alt="Floating Tank" />
              <Text>Lizzoat</Text>
            </div>
          </SimpleGrid>


        {selectedGoat === 1 && 
          <>
              <Title order={3}>Billy</Title>
              <Text>
                  You chose Goat 1
              </Text>
          </>
        }

        {selectedGoat === 2 && 
          <>
            <Title order={3}>Scarlett</Title>
            <Text>
              You chose Goat 2
            </Text>
          </>
        }

        {selectedGoat === 3 && 
          <>
            <Title order={3}>Lizzoat</Title>
            <Text>
              You chose Goat 3
            </Text>
          </>
        }

        <Group my="md" justify="right">
          <Link href={"/book"}>
              <Button size="xl" color="orange">Book a Goat</Button>
          </Link>
        </Group>
    </Container>
  </>;
}
