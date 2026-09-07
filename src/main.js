import App from "./core/App";
import { initReadingMagnifier } from "./core/magnifier";
import "./assets/sass/main.sass";

const env = import.meta.env;

const app = new App(env);
app.init();
initReadingMagnifier();
