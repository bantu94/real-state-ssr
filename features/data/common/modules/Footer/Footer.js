import { Box, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { services, about, workWithUs, ourOffices } from './footerConsts';
import { HiHomeModern } from 'react-icons/hi2';

const Footer = () => {
  return (
    <Box backgroundColor="green.400">
        <Box 
          maxWidth="1200px"
          margin="0 auto"
          paddingY="3rem"
          paddingX={{ base:"2rem",sm:"0" }}
        >
          <SimpleGrid 
            columns='4'
            color="whiteAlpha.700"
            gap="1.7rem"
            minChildWidth="150px"
          >
            <Flex flexDirection="column">
              <FooterHeader title="Services" />
              {services.map((item) => (
                <FooterLink key={item.name} {...item} />
              ))}
            </Flex>
            
            <Flex flexDirection="column">
              <FooterHeader title="About" />
              {about.map((item) => (
                <FooterLink key={item.name} {...item} />
              ))}
            </Flex>
            <Flex flexDirection="column">
              <FooterHeader title="Work with us" />
              {workWithUs.map((item) => (
                <FooterLink key={item.name} {...item} />
              ))}
            </Flex>
            <Flex flexDirection="column">
              <FooterHeader title="Our offices" />
              {ourOffices.map((item) => (
                <FooterLink key={item.name} {...item} />
              ))}
            </Flex>

          </SimpleGrid>

        </Box>
        <Box 
          backgroundColor="green.900"
          display="flex"
          padding="2rem"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          color="white"
        >
          <Box display='flex' gap='2' alignItems='center'>
            <HiHomeModern />
            <Text fontSize="lg" fontWeight="black">
              TOITO
            </Text>

            <Text fontSize="xs" textAlign="center">
              All Rights reserved - 2023 Copyright 
            </Text>
          </Box>

        </Box>
        
    </Box>
  )
}

export default Footer

const FooterLink = ({name, link}) => {
  return (
    <Text>
      <Link href={link}>
          {name}
      </Link>
    </Text>
  )
};
const FooterHeader = ({title,}) => {
  return (
    <Text as="h4" fontSize="xl" fontWeight="light" marginBottom="1rem">
      {title}
    </Text>
  )
};
