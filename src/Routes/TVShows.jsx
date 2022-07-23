import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

function TVShows() {
   const [loading, setLoading] = useState(false);

   setTimeout(() => setLoading(true), 3000);

   return (
      <Box my={212}>
         {!loading && <Button isLoading variant='ghost'></Button>}
         {loading && <Box color='gray'>
            Unable to load,<br />there is some issue right now...
         </Box>}
      </Box>
   );
}

export default TVShows;