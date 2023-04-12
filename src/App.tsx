import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SingleBlog from "./components/SingleBlog";

function App() {
  // implement Routing for / and for /blog
  //implement a Navbar Compennt should have links for / and for /blog
  return (
    <>
      <Navbar />
      <main className="container m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
