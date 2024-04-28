import Benefits from "@/components/benefits";
import Contact from "@/components/contact/Contact";
import Marquee from "@/components/marquee/Marquee";
import Potential from "@/components/potential/Potential";
import Supporting from "@/components/supporting";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Potential />
      <Marquee />
      <Supporting />
      <Benefits />
      <Contact />
    </Box>
  );
}
