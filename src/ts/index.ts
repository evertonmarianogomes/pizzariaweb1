import 'bootstrap';
import $ from "jquery";
import DarkModeSwitch from "./DarkMode.util";

const CommonFunctions = {
    toggleLoader: () => {
        setTimeout(() => {
            $("#loader_container").fadeToggle();
        }, 1200);
    },
    toggleDarkMode: () => {DarkModeSwitch.getInstance()}
}

window.addEventListener("load", () => {
    let message: string = "HelloWorld";

    Object.values(CommonFunctions).map(value => value());
})