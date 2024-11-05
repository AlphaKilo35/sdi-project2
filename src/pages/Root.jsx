import { Outlet } from 'react-router-dom';
import NavigationElement from "./Navigation.jsx";
import './styles/root.css';

function RootElement () {
  return (
    <>
    <header>
      <NavigationElement />
    </header>
    <section>
      <Outlet />
    </section>
    </>

  );
}

export default RootElement;