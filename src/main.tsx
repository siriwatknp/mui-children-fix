import { createTheme, ThemeProvider, Button } from "@mui/material";
import { FC } from "react";
import { createRoot } from "react-dom/client";

const theme = createTheme();

export const App: FC = () => {
  return (
    <Button>
      <span>1</span>
    </Button>
  );
};
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
