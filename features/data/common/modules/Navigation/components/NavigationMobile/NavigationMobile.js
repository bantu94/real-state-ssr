import { HamburgerIcon } from '@chakra-ui/icons';

import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from 'react-icons/hi2';
import { navigationLinks } from "../../navigationConsts";

const NavigationMobile = () => {
    return (
      <Box 
      color='green.400'
      padding="2rem"
      backgroundColor="white"
      display={{ base:"block", md:"none" }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Link href={'/'}>
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="40" />
              <Text fontSize="2xl" fontWeight='black'>
                Toito
              </Text>
            </Box>
          </Link>
          <Menu>
            <MenuButton 
              as={IconButton} 
              aria-label="Options" 
              variant="outline" 
              icon={<HamburgerIcon/>}
            />
            <MenuList>
              {navigationLinks.map((item) => (
                <NavigationLink key={item.title} {...item} />
              ))}
            </MenuList>
          </Menu>
        
        </Flex>
      </Box>
    )
  }
  
export default NavigationMobile;

const NavigationLink = ({title, link, icon}) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  )
};

