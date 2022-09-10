import React, { useState } from "react";

import cn from "classnames";

import styles from "./menu.module.css";
import { IMenuItem, items } from "./menuList";

const InfiniteMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [level, setLevel] = useState(1);
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[][]>([items]);
  const selectLevel = (level: number, menu?: IMenuItem[]) => {
    if (!menu) return;
    setLevel(level);
    setCurrentMenu((l) => {
      l[level] = menu;
      return l;
    });
  };

  const backLevel = () => {
    setLevel(level - 1);
    setCurrentMenu((l) => {
      l[level] = [];
      return l;
    });
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Открыть</button>
      <nav className={styles.menu}></nav>
      <div
        className={cn(styles.cover, {
          [styles.coverShow]: isOpen,
        })}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={cn(styles.menuBox, {
          [styles.menuBoxShow]: isOpen,
        })}
      >
        <div className={styles.menuBoxHeader}>
          {level > 1 && (
            <button className={styles.backButton} onClick={backLevel}>
              {" "}
              Назад{" "}
            </button>
          )}
          {level === 1 && <div className={styles.backButton}>Меню</div>}
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            Х
          </button>
        </div>
        <div
          className={styles.level}
          style={{
            transform: `translateX(calc(-100% * ${level - 1} - 24px * ${
              level - 1
            }))`,
          }}
        >
          {currentMenu.map((item, i) => (
            <div key={i}>
              {item.map((m, index) => (
                <div key={m.label}>
                  {m.children && (
                    <button
                      className={styles.item}
                      onClick={() => selectLevel(level + 1, m.children)}
                    >
                      {m.label} &gt;
                    </button>
                  )}{" "}
                  {m.path && (
                    <a className={styles.item} href={m.path}>
                      {m.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteMenu;
