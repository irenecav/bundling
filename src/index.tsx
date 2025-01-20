import "./mystyles.scss";
import logoImg from './content/logo_1.png';
import React from "react";
import { createRoot } from "react-dom/client";
import { Average } from "./Average";
import"./mystyles.scss"
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Bienvenido a tu semilla</h1>
    <img src={logoImg} />
    <Average />
  </div>
);