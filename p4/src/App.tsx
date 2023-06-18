import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from './layouts/Layout';



const App: FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Detail />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  );
}

export default App;