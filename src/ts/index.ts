import { Carousel, Modal } from "bootstrap";
import $ from "jquery";
import DarkModeSwitch from "./DarkMode.util";
import AOS from "aos";

const CommonFunctions = {
    toggleLoader: () => {
        $("main.container").hide();
        setTimeout(() => {
            $("#loader_container").fadeToggle();
            $("main.container").show();
        }, 1200);
    },
    toggleDarkMode: () => {DarkModeSwitch.getInstance()},
    carousel: () => {
        const myCarouselElement = document.querySelector('#carouselExampleCaptions') as HTMLElement
        const carousel = new Carousel(myCarouselElement, {
          interval: 3500,
          wrap: true,
        })

        carousel.cycle();
    },
    pizzaSizeModal: () => {
        let modalEl = document.querySelector("#pizzaSizeModal") as HTMLElement;

        document.querySelector("#btnShowPizzaSizeModal")?.addEventListener("click", () => {
            let modal = new Modal(modalEl);
            modal.show();
        })
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
