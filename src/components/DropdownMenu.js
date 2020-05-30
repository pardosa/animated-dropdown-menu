import React, { useState, useEffect, useRef } from "react";
import DropdownItem from "./DropdownItem";

import { CSSTransition } from "react-transition-group";

export default function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      {props.menus && props.menus.length > 0 ? (
        props.menus.map((menu, index) => {
          return (
            <CSSTransition
              in={activeMenu === menu.name}
              timeout={200}
              classNames={
                activeMenu === "main" ? "menu-primary" : "menu-secondary"
              }
              unmountOnExit
              onEnter={calcHeight}
              key={index}
            >
              <div className="menu">
                {menu.items.map((item, index) => {
                  return (
                    <DropdownItem
                      leftIcon={item.leftIcon}
                      key={"sub-" + index}
                      goToMenu={item.goToMenu}
                      setActiveMenu={setActiveMenu}
                    >
                      {item.label}
                    </DropdownItem>
                  );
                })}
              </div>
            </CSSTransition>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
