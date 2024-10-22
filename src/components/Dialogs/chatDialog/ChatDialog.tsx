import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
  Skeleton,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { toggleDialog } from "../../../store/slices/dialogSlice";
import { modelText } from "../../../gemini/gemini";
import { useState } from "react";

function ChatDialog() {
  const dialogStatus = useAppSelector((state) => state.dialogSlice.chatDialog);
  const dispatch = useAppDispatch();

  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  function closeDialog() {
    dispatch(toggleDialog({ name: "chatDialog", visible: false }));
  }

  async function getResponse() {
    setLoading(true);
    setOutput("");
    const result = await modelText.generateContent(prompt);
    setLoading(false);
    for (let letter of result.response.text()) {
      setTimeout(() => {
        setOutput((prev) => prev + letter);
      }, 100);
    }
  }
  return (
    <>
      <Dialog fullScreen open={dialogStatus}>
        <Box display={"flex"} justifyContent={"space-between"} padding={2.5}>
          <DialogTitle>CHAT BOX</DialogTitle>
          <IconButton onClick={closeDialog}>
            <CancelPresentationIcon />
          </IconButton>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
          paddingX={10}
          paddingY={5}
        >
          <InputBase
            multiline={true}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="start asking ..."
            sx={{ wordBreak: "break-word", width: "70%" }}
          />
        </Box>
        <Box display={"flex"} justifyContent={"end"} px={10} py={1}>
          <Button onClick={getResponse} color="secondary" variant="contained">
            generate
          </Button>
        </Box>
        <Divider />
        <Box
          overflow={"auto"}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"start"}
          padding={10}
          gap={10}
        >
          {!loading && (
            <InputBase
              multiline={true}
              value={output}
              sx={{
                wordBreak: "break-word",
                width: "70%",
                bgcolor: "black",
                padding: 2,
                color: "white",
                borderRadius: "20px",
              }}
            />
          )}
          {loading && (
            <Skeleton width={"100%"} variant="rectangular" animation="pulse" height={50} />
          )}
        </Box>
      </Dialog>
    </>
  );
}

export default ChatDialog;
