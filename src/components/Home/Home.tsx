import PaletteDialog from "../Dialogs/paletteDialog/PaletteDialog";
import Hero from "./sub/Hero";
import NavBar from "./sub/NavBar";
import Playground from "./sub/Playground";
import { Box } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";

function Home() {
  const dialogData = useAppSelector((state) => state.dialogSlice);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"90vh"}
        overflow={"auto"}
        paddingX={5}
        paddingY={2.5}
      >
        <NavBar />
        <Hero />
        <Playground />
      </Box>
      {dialogData.paletteForm && <PaletteDialog />}
    </>
  );
}

export default Home;
