import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";

interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about"  >
          <Route index element={<About/>}/>
          <Route path=":number" element={<About/>}/>
        </Route>
        <Route path="layout" element={<Layout/>} >
          <Route index element={<About/>}/>
          <Route path=":number" element={<About/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;