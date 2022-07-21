import { Flex, Spacer, Input, Image, Menu, MenuButton, MenuList, MenuItem, Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const baseStyle = {
   color: 'white',
   paddingBottom: '4px',
   borderBottom: 'none'
}

const activeStyle = {
   color: 'white',
   paddingBottom: '4px',
   borderBottom: '2px solid white'
}

function Navbar() {
   return (
      <Flex gap={7} p={5} align="center" position="sticky" top='0' zIndex='7'>
         <Image h='47px' src='https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.15' alt='app logo' mr={4} />
         <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : baseStyle}>Home</NavLink>
         <NavLink to="/tvShows" style={({ isActive }) => isActive ? activeStyle : baseStyle}>TV Shows</NavLink>
         <NavLink to="/movies" style={({ isActive }) => isActive ? activeStyle : baseStyle}>Movies</NavLink>
         <Spacer />
         <Input w='370px' color="white" focusBorderColor="purple.500" placeholder="🔍 Search for Movies, Shows, Channels etc. " />
         <HStack gap={2}>
            <NavLink className='nav-ls-btn' to="/login">Login</NavLink>
            <NavLink className='nav-ls-btn' to="/signup">Sign Up</NavLink>
            <Menu>
               <MenuButton as={Button} _hover='rgb(34, 26, 41)' bg='rgb(34, 26, 41)' p={3} borderRadius='50%'>
                  <FaBars />
               </MenuButton>
               <MenuList>
                  <MenuItem color='black' fontWeight='bold' borderBottom='1px solid whitesmoke' mb={1}>Download</MenuItem>
                  <MenuItem color='black' fontWeight='bold' borderBottom='1px solid whitesmoke' mb={1}>Account</MenuItem>
                  <MenuItem color='black' fontWeight='bold' borderBottom='1px solid whitesmoke' mb={1}>Settings</MenuItem>
                  <MenuItem color='black' fontWeight='bold' borderBottom='1px solid whitesmoke' mb={1}>About Us</MenuItem>
                  <MenuItem color='black' fontWeight='bold' mb={1}>Help Center</MenuItem>
               </MenuList>
            </Menu>
         </HStack>
      </Flex>
   );
}

export default Navbar;