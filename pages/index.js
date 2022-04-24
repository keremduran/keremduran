import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'

//import { BioItem, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
//import BioSection from '../components/bio-section'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbInspireDigital from '../public/images/links/inspiredigital.png'
import thumbDoctorDemo from '../public/images/links/doctordemo.png'
//import Skills from '../components/skills'
const Skills = dynamic(() => import('../components/skills'), {
  loading: () => <div>Loading...</div>
})
const BioSection = dynamic(() => import('../components/bio-section'), {
  loading: () => <div>Loading...</div>
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        letterSpacing={1.06}
        fontWeight={800}
        textColor={useColorModeValue('purple.700', 'purple.300')}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello👋, I&apos;m a software engineer based in Toronto!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h1" fontSize={'3rem'} variant="page-title">
            Kerem Duran
          </Heading>
          <Heading as="h2" fontSize={'2rem'}>
            Web Developer
            <br />
            Software Engineer
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/kerem1.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.3} my="3">
        <Skills />
        <Box align="center" mt={6} mb={3}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My portfolio
            </Button>
          </NextLink>
        </Box>
        <Heading as="h3" variant="section-title">
          My Skills
        </Heading>
        <Paragraph>
          I specialize in developing responsive, performant, mobile friendly
          websites from scratch with latest available technology, as well as
          creating custom themes for Shopify, modifying existing themes, and
          writing custom code needed to achieve the goals of my clients.{' '}
        </Paragraph>
      </Section>
      <Section delay={0.7}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection />
      </Section>
      <Section delay={1}>
        <Heading as="h3" variant="section-title">
          My story
        </Heading>
        <Paragraph>
          Welcome to the hive, and thank you for your time and interest in
          getting to know me. I have begun my Software Engineering journey in
          2013, at one of the most esteemed universities of Turkey, Istanbul
          Technical University (Mathematical Engineering program).
        </Paragraph>
        <Paragraph>
          Born into a family of humanitarian activists who were the founding
          members establishing Lambda Istanbul (former official LGBT Community
          of Turkey), I&apos;ve naturally gravitated towards similar sentiments,
          and worked as a programmer/translator with Canadian lawyers,
          automating and digitalizing the process of case preparation regarding
          Refugees and Immigrants in Toronto between August, 2017 and April,
          2022.
        </Paragraph>
        <Paragraph>
          Currently, I&apos;m working at a startup,{' '}
          <Link href="https://inspiredigital.vercel.app/" isExternal>
            InspireDigital
          </Link>
          , working primarly with Turkish clients providing Full-Stack websites
          and content! Looking forward to working with you!
        </Paragraph>
      </Section>
      <Section delay={1.3}>
        <Heading as="h3" variant="section-title">
          In my free time
        </Heading>
        <Paragraph>
          Traveller, Kickboxer, Music Maker, Zen Practitioner
        </Paragraph>
      </Section>
      <Section delay={1.6}>
        <Heading as="h3" variant="section-title">
          You can find me at
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/keremduran" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @keremduran
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/kerem-duran/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @kerem-duran
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/kerem-duran/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                @keremduran@live.com
              </Button>
            </Link>
          </ListItem>
        </List>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Some recent work
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://inspiredigital.vercel.app/"
              title="Inspire Digital"
              thumbnail={thumbInspireDigital}
            >
              A simple landing site for our family business.
            </GridItem>
            <GridItem
              href="https://doktorwebsite-demo-next.vercel.app/"
              title="Doctor Landing & Blog"
              height={20}
              thumbnail={thumbDoctorDemo}
            >
              A demo website for doctors, comes with dato CMS.
            </GridItem>
          </SimpleGrid>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
