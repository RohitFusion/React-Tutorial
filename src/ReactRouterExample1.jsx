import { BrowserRouter, Routes, Route, Link } from 'react-router';
export const RouteExampleone = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Routes>
          <Route path="/" element={<h4>Home</h4>} />
          <Route path="/about" element={<h4>About</h4>} />
          <Route path="/contact" element={<h4>Contact</h4>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
