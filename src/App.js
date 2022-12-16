// Style Imports
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
// Component Imports
import Heading from "./components/Heading";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Heading>Hello, World!</Heading>
    </ThemeProvider>
  );
}

export default App;
