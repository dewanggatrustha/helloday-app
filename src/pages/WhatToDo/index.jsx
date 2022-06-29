import React from "react";
import {
  Box,
  Heading,
  Divider,
  Stack,
  VStack,
  HStack,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  ListItem,
  OrderedList,
  UnorderedList,
  Center,
  Image,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
} from "@chakra-ui/react";

import { PhoneIcon } from "@chakra-ui/icons";

const WhatToDo = () => {
  return (
    <>
      <Box
        m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
        bg={useColorModeValue("white", "blue")}
      >
        <Stack direction="row" h="30px">
          <Divider
            orientation="vertical"
            borderWidth="4px"
            rounded="full"
            borderColor="primary.500"
          />
          <VStack align="left">
            <Heading as="h4" size="xl">
              WhatToDo
            </Heading>
            <Heading as="h3" size="md" fontWeight="500">
              This is what you should do when a natural disaster strikes.
            </Heading>
          </VStack>
        </Stack>
        {/* Ngoding Disini */}
      </Box>
      <Box
        m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
        bg={useColorModeValue("white", "blue")}
      >
        <Tabs>
          <TabList>
            <Tab>Instruction</Tab>
            <Tab>Emergency Calls</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="2xl">Earthquake</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <VStack direction="row">
                        <Image
                          boxSize="360px"
                          objectFit="cover"
                          rounded="5px"
                          src="https://cdn.britannica.com/34/127134-050-49EC55CD/Building-foundation-earthquake-Japan-Kobe-January-1995.jpg"
                          alt="tes"
                          mr="20px"
                        />
                      </VStack>
                      <VStack direction="column">
                        <Center w="180px">
                          <Box boxSize="sm">
                            <Image
                              boxSize="170px"
                              objectFit="cover"
                              mb="20px"
                              rounded="5px"
                              src="https://static01.nyt.com/images/2021/08/14/world/14haiti-earthquake-live-us-diaspora1/14haiti-earthquake-live-us-diaspora1-videoSixteenByNine3000.jpg"
                            />
                            <Image
                              boxSize="120px"
                              objectFit="cover"
                              rounded="5px"
                              src="https://images.newscientist.com/wp-content/uploads/2015/10/mg22830412.800-1_800.jpg?width=800"
                            />
                          </Box>
                        </Center>
                      </VStack>
                      <Center flex="1">
                        <Box boxSize="lg">
                          <Text fontSize="lg">Definition</Text>
                          <Text fontSize="sm" mb="10px">
                            Earthquake is a term used to describe both sudden
                            slip on a fault, and the resulting ground shaking
                            and radiated seismic energy caused by the slip, or
                            by volcanic or magmatic activity, or other sudden
                            stress changes in the earth.
                          </Text>
                          <UnorderedList>
                            <ListItem>Indoor</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Electronic devices are experiencing strange
                                interference at home.
                              </ListItem>
                              <ListItem>
                                The animal's behavior is restless and suddenly
                                disappears.
                              </ListItem>
                              <ListItem>
                                If there has been a small earthquake there is
                                usually a bigger big earthquake.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>Outdoor</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                If you are driving, stop on the side of the
                                road, but try to stop far from trees and
                                objects, buildings that are more or less
                                dangerous.
                              </ListItem>
                              <ListItem>
                                If you are in the center of a crowd, avoid
                                jostling and go to a large field.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>Post-Earthquake</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Reconstruct the building if the building
                                collapses.
                              </ListItem>
                              <ListItem>
                                Evaluate the risks that are dangerous in the
                                event of another earthquake.
                              </ListItem>
                            </Text>
                          </OrderedList>
                        </Box>
                      </Center>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="2xl">Tsunami</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="360px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://asset.kompas.com/crops/cKW0Rlts9q27vXhl_gho26h6bm0=/0x0:1992x1328/750x500/data/photo/2020/03/11/5e689e40e618e.jpg"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Center w="180px">
                          <Box boxSize="sm">
                            <Image
                              boxSize="170px"
                              objectFit="cover"
                              rounded="5px"
                              mb="20px"
                              src="https://images.theconversation.com/files/251862/original/file-20181221-103631-1hh06c8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
                            />
                            <Image
                              boxSize="120px"
                              objectFit="cover"
                              rounded="5px"
                              src="https://cdn0-production-images-kly.akamaized.net/Qv1LNKK-81bKUifNV4SX2AwVbtU=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1184161/original/079436500_1459140757-tsunami_3.jpg"
                            />
                          </Box>
                        </Center>
                      </VStack>
                      <Center flex="1">
                        <Box boxSize="lg">
                          <Text fontSize="lg">Definition</Text>
                          <Text fontSize="sm" mb="10px">
                            A tsunami is a series of extremely long waves caused
                            by a large and sudden displacement of the ocean,
                            usually the result of an earthquake below or near
                            the ocean floor.
                          </Text>
                          <UnorderedList>
                            <ListItem>Prevented</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>There was an earthquake.</ListItem>
                              <ListItem>Watch the sea level drop</ListItem>
                              <ListItem>
                                Always be aware of the first wave after an
                                earthquake.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>When it Happens</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                If at home, direct the family to higher ground
                                and safety.
                              </ListItem>
                              <ListItem>
                                Avoid saving yourself by crossing bridges and
                                away from rivers or beaches.
                              </ListItem>
                              <ListItem>
                                When evacuating using a vehicle and congestion
                                occurs, leave the vehicle and evacuate yourself
                                on foot.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>Post-Tsunami</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                If the conditions are safe from the tsunami,
                                immediately find a shelter post.
                              </ListItem>
                              <ListItem>
                                Never ever touch any electrically related
                                equipment.
                              </ListItem>
                              <ListItem>
                                Listen to further instructions from the BPBD or
                                the shelter post.
                              </ListItem>
                            </Text>
                          </OrderedList>
                        </Box>
                      </Center>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="2xl">Fire</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="360px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://img.alinea.id/img/content/2019/12/26/59915/kebakaran-saat-natal-200-rumah-hangus-di-chile-kFaj0VE1Mx.jpg"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Center w="180px">
                          <Box boxSize="sm">
                            <Image
                              boxSize="170px"
                              objectFit="cover"
                              rounded="5px"
                              mb="20px"
                              src="https://cdn0-production-images-kly.akamaized.net/oSLXHhsuGAcu3eNnjv8HuPNGh5o=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4047666/original/016430800_1654760735-Screenshot_20220609-130145_WhatsApp.jpg"
                            />
                            <Image
                              boxSize="120px"
                              objectFit="cover"
                              rounded="5px"
                              src="https://img.inews.co.id/media/822/files/inews_new/2021/09/22/kebakaran_hebat_melanda_pasar_siborongborong.jpg"
                            />
                          </Box>
                        </Center>
                      </VStack>
                      <Center flex="1">
                        <Box boxSize="lg">
                          <Text fontSize="lg">Definition</Text>
                          <Text fontSize="sm" mb="10px">
                            Fire is a flame, whether small or large in a place
                            we do not want it, harm is generally difficult to
                            control. Based on the classification of fires is the
                            classification or division of fires based on the
                            type of object / material being burned.
                          </Text>
                          <UnorderedList>
                            <ListItem>Prevented</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>Don't burn randomly.</ListItem>
                              <ListItem>Provide fire extinguishers.</ListItem>
                              <ListItem>
                                Do not leave the former bonfire in the forest
                                area carelessly.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>When it Happens</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Keep a distance from places where fires occur.
                              </ListItem>
                              <ListItem>
                                Get a fire extinguisher, call local residents to
                                help put out the fire and call the fire
                                department.
                              </ListItem>
                              <ListItem>
                                Close your nose and breathe through your mouth
                                so that the smoke doesn't enter your lungs.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>Post-Fire</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>Rehabilitation.</ListItem>
                              <ListItem>
                                Investigation of the cause of the fire.
                              </ListItem>
                            </Text>
                          </OrderedList>
                        </Box>
                      </Center>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="2xl">Flood</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="360px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://img.okezone.com/content/2022/04/30/408/2587626/selain-indonesia-ini-5-negara-sering-dilanda-banjir-A2OAfidSQp.jpg"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Center w="180px">
                          <Box boxSize="sm">
                            <Image
                              boxSize="170px"
                              objectFit="cover"
                              rounded="5px"
                              mb="20px"
                              src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg"
                            />
                            <Image
                              boxSize="120px"
                              objectFit="cover"
                              rounded="5px"
                              src="https://img.okezone.com/content/2018/08/19/18/1938543/sedikitnya-357-orang-tewas-akibat-bencana-banjir-muson-india-sMdowGvO1n.jpg"
                            />
                          </Box>
                        </Center>
                      </VStack>
                      <Center flex="1">
                        <Box boxSize="lg">
                          <Text fontSize="lg">Definition</Text>
                          <Text fontSize="sm" mb="10px">
                            Flood is the inundation of a place due to the
                            overflow of water that exceeds the water disposal
                            capacity in an area and causes physical, social and
                            economic losses.
                          </Text>
                          <UnorderedList>
                            <ListItem>Prevented</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Maintain and clean drains regularly.
                              </ListItem>
                              <ListItem>Increase green open land.</ListItem>
                              <ListItem>
                                Do not build buildings on the banks of rivers
                                and forests.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>When it Happens</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Move to high ground for evacuation.
                              </ListItem>
                              <ListItem>
                                Immediately turn off the power grid.
                              </ListItem>
                              <ListItem>
                                Pay attention to the water channel or the place
                                where the water will pass through.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>Post-Flood</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Immediately clean the house from the rest of the
                                water from flooding, mud and garbage.
                              </ListItem>
                              <ListItem>
                                Watch and beware of animals such as snakes,
                                mice, cockroaches, flies and mosquitoes.
                              </ListItem>
                              <ListItem>
                                Make greenery around the flood area.
                              </ListItem>
                            </Text>
                          </OrderedList>
                        </Box>
                      </Center>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="2xl">Landslide</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="360px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://balitribune.co.id/sites/default/files/styles/xtra_large/public/field/image/jalan%20Tergerus.jpg?itok=cGoo-yKl"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Center w="180px">
                          <Box boxSize="sm">
                            <Image
                              boxSize="170px"
                              objectFit="cover"
                              rounded="5px"
                              mb="20px"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpKKupFzRwL6fcz6_3TOnhlwpFBsWgZV90Q&usqp=CAU"
                            />
                            <Image
                              boxSize="120px"
                              objectFit="cover"
                              rounded="5px"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-24iaehft5AXGK1u8vEBmkGndwOXad0JNFw_pibATk_k8iBKVO5ZRHHht0KpttihVdQ&usqp=CAU"
                            />
                          </Box>
                        </Center>
                      </VStack>
                      <Center flex="1">
                        <Box boxSize="lg">
                          <Text fontSize="lg">Definition</Text>
                          <Text fontSize="sm" mb="10px">
                            Landslides is a geological event that occurs due to
                            the movement of rock or soil masses of various types
                            and types such as the fall of rocks or large lumps
                            of soil.
                          </Text>
                          <UnorderedList>
                            <ListItem>Prevented</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Soil and rocks that have a brittle structure and
                                are prone to landslides can be removed and
                                replaced with stronger materials, such as silty
                                or sandy soil.
                              </ListItem>
                              <ListItem>
                                Preserving Vegetation, because trees, grass, and
                                vegetation can minimize the amount of water that
                                seeps into the ground.
                              </ListItem>
                              <ListItem>
                                A retaining wall can be constructed by
                                horizontally adding metal, concrete, or wood
                                blocks between the retaining posts.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>When it Happens</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Do not panic and immediately move to a safe
                                place from the avalanche path.
                              </ListItem>
                              <ListItem>
                                If possible, help others who are weak, such as
                                the sick, toddlers, and the elderly.
                              </ListItem>
                              <ListItem>
                                Survive in the refugee camps until the situation
                                is completely safe.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>Post-Landslide</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                Carry out rescue actions by contacting the
                                relevant agencies to be able to send volunteers
                                and medical personnel to the disaster site.
                              </ListItem>
                              <ListItem>
                                Carry out cleaning of the remains of destroyed
                                buildings and landslide materials where all
                                damaged buildings, facilities and infrastructure
                                will be repaired.
                              </ListItem>
                              <ListItem>
                                Strengthen all facilities and infrastructure in
                                landslide disaster areas and other areas that
                                have the potential for landslides as well as
                                reconstruct damaged slopes by planting trees.
                              </ListItem>
                            </Text>
                          </OrderedList>
                        </Box>
                      </Center>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="2xl">Tornado</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="360px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://img.okezone.com/content/2022/05/17/337/2595574/5-daftar-angin-puting-beliung-terparah-di-indonesia-terbangkan-atap-hingga-pohon-tumbang-xbP26sSX0j.jpg"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Center w="180px">
                          <Box boxSize="sm">
                            <Image
                              boxSize="170px"
                              objectFit="cover"
                              rounded="5px"
                              mb="20px"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYNFanZfxmVtzhNVk-RD48jxqGypnUQ8M4HbIDNi6SQMQv5H5fRbdozD64pk9cR8kaqk&usqp=CAU"
                            />
                            <Image
                              boxSize="120px"
                              objectFit="cover"
                              rounded="5px"
                              src="https://bnpb.go.id//uploads/new/news/8km5h_z2Jq41.jpeg"
                            />
                          </Box>
                        </Center>
                      </VStack>
                      <Center flex="1">
                        <Box boxSize="lg">
                          <Text fontSize="lg">Definition</Text>
                          <Text fontSize="sm" mb="10px">
                            Tornado is a strong wind vortex with a speed of 120
                            kilometers/hour or more. Tornadoes often occur in
                            the tropics between the Tropic of Cancer, except in
                            areas very close to the equator.
                          </Text>
                          <UnorderedList>
                            <ListItem>Initial Symptoms</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>The air was hot and stifling.</ListItem>
                              <ListItem>
                                There appears to be the growth of clustered
                                white clouds in layers (Cumulus).
                              </ListItem>
                              <ListItem>
                                The tree branches and leaves were swaying fast
                                because the wind was blowing and the strong wind
                                was approaching.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>When it Happens</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                If the situation is dangerous, immediately go to
                                the shelter (Bunker)
                              </ListItem>
                              <ListItem>
                                Stay away from the corners of the room, windows,
                                doors, and outer walls of buildings.
                              </ListItem>
                              <ListItem>
                                Hide under a table using your arms to protect
                                your head and neck. Never open a window.
                              </ListItem>
                            </Text>
                          </OrderedList>
                          <UnorderedList>
                            <ListItem>Post-Tornado</ListItem>
                          </UnorderedList>
                          <OrderedList>
                            <Text fontSize="sm">
                              <ListItem>
                                If there is a victim, give help immediately.
                              </ListItem>
                              <ListItem>
                                Report to the authorized officer if there is
                                damage to electricity, gas and so on.
                              </ListItem>
                              <ListItem>
                                Building reconstruction if the building
                                collapses.
                              </ListItem>
                            </Text>
                          </OrderedList>
                        </Box>
                      </Center>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Box
                m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
                bg={useColorModeValue("white", "blue")}
              >
                <Stack direction="row" h="30px">
                  <VStack align="left">
                    <Heading as="h3" size="md" fontWeight="500">
                      The following is a list of emergency calls in the event of
                      a disaster.
                    </Heading>
                  </VStack>
                </Stack>
              </Box>
              <Flex>
                <Box
                  m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
                  bg={useColorModeValue("white", "blue")}
                >
                  <HStack mb="50px">
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="80px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://drive.google.com/uc?export=view&id=1ck5U8KAcsEQiREpPKfPBjifCG0n_lcOd"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Text fontSize="lg" fontWeight="800">
                          Ambulances
                        </Text>
                        <HStack>
                          <IconButton
                            bg={useColorModeValue("primary.500")}
                            color="white"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<PhoneIcon />}
                          />
                          <Text fontSize="xs" fontWeight="800">
                            118 or 119
                          </Text>
                        </HStack>
                      </VStack>
                    </Flex>
                  </HStack>
                  <HStack mb="50px">
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="80px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://pngimage.net/wp-content/uploads/2018/06/logo-pln-png-2.png"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Text fontSize="lg" fontWeight="800">
                          PLN
                        </Text>
                        <HStack>
                          <IconButton
                            bg={useColorModeValue("primary.500")}
                            color="white"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<PhoneIcon />}
                          />
                          <Text fontSize="xs" fontWeight="800">
                            123
                          </Text>
                        </HStack>
                      </VStack>
                    </Flex>
                  </HStack>
                </Box>
                <Box
                  m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
                  bg={useColorModeValue("white", "blue")}
                >
                  <HStack mb="50px">
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="80px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://dpkp.palangkaraya.go.id/wp-content/uploads/sites/51/2021/06/LOGO-DAMKAR.png"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Text fontSize="lg" fontWeight="800">
                          Firefighter
                        </Text>
                        <HStack>
                          <IconButton
                            bg={useColorModeValue("primary.500")}
                            color="white"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<PhoneIcon />}
                          />
                          <Text fontSize="xs" fontWeight="800">
                            113
                          </Text>
                        </HStack>
                      </VStack>
                    </Flex>
                  </HStack>
                  <HStack mb="50px">
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="80px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Lambang_Polri.png"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Text fontSize="lg" fontWeight="800">
                          Police
                        </Text>
                        <HStack>
                          <IconButton
                            bg={useColorModeValue("primary.500")}
                            color="white"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<PhoneIcon />}
                          />
                          <Text fontSize="xs" fontWeight="800">
                            110
                          </Text>
                        </HStack>
                      </VStack>
                    </Flex>
                  </HStack>
                </Box>
                <Box
                  m={{ base: "88px 12px 0px 12px", md: "88px 48px 0px 48px" }}
                  bg={useColorModeValue("white", "blue")}
                >
                  <HStack mb="50px">
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="80px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://upload.wikimedia.org/wikipedia/commons/1/16/Basarnas_Logo.png"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Text fontSize="lg" fontWeight="800">
                          Basarnas
                        </Text>
                        <HStack>
                          <IconButton
                            bg={useColorModeValue("primary.500")}
                            color="white"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<PhoneIcon />}
                          />
                          <Text fontSize="xs" fontWeight="800">
                            115
                          </Text>
                        </HStack>
                      </VStack>
                    </Flex>
                  </HStack>
                  <HStack mb="50px">
                    <Flex>
                      <Stack direction="row">
                        <Image
                          boxSize="80px"
                          objectFit="cover"
                          rounded="5px"
                          mr="20px"
                          src="https://elearning.bnpb.go.id/asset-v1:BNPB+KRB100+2021+type@asset+block@Screen_Shot_2021-01-27_at_14.53.46.png"
                          alt="tes"
                        />
                      </Stack>
                      <VStack direction="column">
                        <Text fontSize="lg" fontWeight="800">
                          BNPB
                        </Text>
                        <HStack>
                          <IconButton
                            bg={useColorModeValue("primary.500")}
                            color="white"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<PhoneIcon />}
                          />
                          <Text fontSize="xs" fontWeight="800">
                            117
                          </Text>
                        </HStack>
                      </VStack>
                    </Flex>
                  </HStack>
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default WhatToDo;
