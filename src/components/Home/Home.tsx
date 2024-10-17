import PaletteDialog from "../Dialogs/paletteDialog/PaletteDialog";
import Hero from "./sub/Hero";
import NavBar from "./sub/NavBar";
import Playground from "./sub/Playground";
import { Box } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTheme } from "@mui/material/styles";

function Home() {
  const dialogData = useAppSelector((state) => state.dialogSlice);

  const theme = useTheme();

  console.log(theme);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100vh"}
        paddingX={5}
        paddingY={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          overflow: "hidden",
          boxSizing: "border-box",
        }}
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
