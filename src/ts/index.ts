import 'bootstrap';
import $ from "jquery";

const CommonFunctions = {
    toggleLoader: () => {
        setTimeout(() => {
            $("#loader_container").fadeToggle();
        }, 1200);
    }
}

window.addEventListener("load", () => {
    let message: string = "HelloWorld";

    Object.values(CommonFunctions).map(value => value());
})