import { Carousel } from "bootstrap";
import $ from "jquery";
import DarkModeSwitch from "./DarkMode.util";
import AOS from "aos";


const CommonFunctions = {
    toggleLoader: () => {
        setTimeout(() => {
            $("#loader_container").fadeToggle();
        }, 1200);
    },
    toggleDarkMode: () => {DarkModeSwitch.getInstance()},
    carousel: () => {
        const myCarouselElement = document.querySelector('#carouselExampleCaptions') as HTMLElement
        const carousel = new Carousel(myCarouselElement, {
          interval: 5000,
          wrap: true
        })

        carousel.cycle();
    },
    form: () => {
        let form = document.querySelector("#formNews") as HTMLFormElement;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let data = new FormData(form);


            alert("Email " + data.get("emailName") + " cadastrado com sucesso!");
        })
    }
}

window.addEventListener("load", () => {
    AOS.init();
    Object.values(CommonFunctions).map(value => value());
})