/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";
export interface IMenuItem {
  icon?: ReactNode | null;
  key: string;
  label: string;
  path?: string;
  children?: IMenuItem[];
}
// Иконки для примера, path адрес роута, (пока что рандомные)
export const items: IMenuItem[] = [
  {
    key: "1",
    label: "Моя страница",
    path: "/user",
  },
  {
    key: "2",
    label: "Материалы",
    path: "/topics",
  },
  {
    key: "3",
    label: "Таблица грейдов",
    path: "/grades",
  },
  {
    key: "18",
    label: "Навыки пользователей",
    path: "/usersskills-report",
  },
  {
    key: "sub1",
    icon: null,
    label: "Справочники",
    path: "/",
    children: [
      {
        key: "4",
        icon: null,
        label: "Полный отчёт",
        path: "/full-report",
        children: [
          {
            key: "12",
            icon: null,
            label: "Компетенции пользователей",
            path: "/competences",
          },
          {
            key: "13",
            icon: null,
            label: "Группы компетенций",
            path: "/competence-groups",
          },
          {
            key: "14",
            icon: null,
            label: "Секции",
            path: "/sections",
          },
          {
            key: "15",
            icon: null,
            label: "Справочники сертификатов",
            path: "/certificate-directory",
          },
        ],
      },
    ],
  },
];
