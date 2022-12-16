// React Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Style Imports
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
// Page Imports
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* Routes Setup */}
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
