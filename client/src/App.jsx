import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import PrizePanel from "./pages/PrizePanel";
import EcosystemSync from "./pages/EcosystemSync";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import OptOut from "./pages/OptOut";

function App() {
  return (
    <Router>
       <Layout>
        <Routes>
          <Route path="/" element={<PrizePanel />} />
          <Route path="/ecosync" element={<EcosystemSync />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/optout" element={<OptOut />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
