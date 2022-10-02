import { Box, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCrown, FaPlay, FaShareAlt } from "react-icons/fa";

function LeadingLadies() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get(`https://fake-restful-api-production.up.railway.app/leadingLadies`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   return (
      <Box m={5} mt={20} textAlign='left'>
         <Text fontSize='4xl' fontWeight='bold' my={7}>Leading Ladies</Text>
         <Grid templateColumns='repeat(5, 1fr)' gap={3} my={4}>
            {
               data.map((item, index) => (
                  <GridItem key={index} cursor='pointer' position='relative' bg='rgb(34, 26, 41)' p={1} borderRadius='lg'>
                     <Image src={item.url} alt={item.popupTitle} borderRadius='lg' w='100%' />
                     <Box className='card-icon' top='14px' left='14px'>
                        <FaCrown />
                     </Box>
                     <Box className='card-play-icon' h='5rem' w='5rem' top='33%' left='35%' fontSize='3xl'>
                        <FaPlay style={{ marginLeft: '5px' }} />
                     </Box>
                     <Box className='card-icon' bg='rgb(34, 26, 41)' bottom='63px' right='14px' color='gray.500' fontSize='xs'>
                        <FaShareAlt />
                     </Box>
                     <Box my={1}>
                        {(item.audioLangString !== '') && <Text color='gray.500' fontSize='sm' fontWeight='bold'>● {item.audioLangString}</Text>}
                        <HStack color='gray.500' fontSize='sm' fontWeight='500'>
                           {(item.duration !== '') && <Text>● {item.duration}</Text>}
                           {(item.genre1 !== '') && <Text>● {item.genre1}</Text>}
                           {(item.genre2 !== '') && <Text>● {item.genre2}</Text>}
                        </HStack>
                     </Box>
                  </GridItem>
               ))
            }
         </Grid>
      </Box>
   );
}

export default LeadingLadies;