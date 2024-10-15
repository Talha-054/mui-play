import { currComponentType } from "../../../types/slices/component";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { lazy, Suspense } from "react";
import { componentMap } from "../../../utils/componentMap/componentMap";
import { Box } from "@mui/material";

function Component() {
  const componentData: currComponentType = useAppSelector((state) => state.componentSlice);

  // const Current = lazy(() => import(`@mui/material/Button`));

  if (componentData.component == "") return;
  const Current = lazy(() => componentMap[componentData.component]());

  return (
    <>
      <Suspense fallback={<div>processing...</div>}>
        <Box maxWidth={"500px"}>
          <Current {...componentData?.props} sx={{ ...componentData?.styles }} />
          {}
        </Box>
      </Suspense>
    </>
  );
}

export default Component;
