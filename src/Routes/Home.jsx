import { Box } from "@chakra-ui/react";
import IMDBtopPicks from "../Components/IMDBtopPicks";
import LatestMovies from "../Components/LatestMovies";
import LeadingLadies from "../Components/LeadingLadies";
import OriginalWeb from "../Components/OriginalWeb";
import PremiumBollywood from "../Components/PremiumBollywood";
import Slideshow from "../Components/Slideshow";
import TopTen from "../Components/TopTen";

function Home() {
   return (
      <Box my={7}>
         <Slideshow />
         <TopTen />
         <LatestMovies />
         <OriginalWeb />
         <IMDBtopPicks />
         <LeadingLadies />
         <PremiumBollywood />
      </Box>
   );
}

export default Home;