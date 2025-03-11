import { Outlet } from "react-router-dom";
import Headers from './Layout/Header';
import Section from './Layout/Section';
import Footers from './Layout/Footer';

const App = () => {
  return (
    <>
      <Headers />
      <Section />
      <Outlet />
      <Footers />
    </>
  )
};

export default App;