import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import { routes } from "./routes";

function App() {
  return (
    <Navbar>
      {routes.map((menu) => {
        return (
          <NavItem icon={menu.icon} key={menu.name}>
            {menu.subMenu.length > 0 ? (
              <DropdownMenu
                menus={menu.subMenu}
                main={menu.name}
              ></DropdownMenu>
            ) : (
              <></>
            )}
          </NavItem>
        );
      })}
    </Navbar>
  );
}

export default App;
