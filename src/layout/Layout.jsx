import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Desde Layouts</h1>
      {/* revisar esto repasar eloutlet vendria a ser en este caso Inicio mirar rutas*/}
      <Outlet />
    </div>
  );
};

export default Layout;
