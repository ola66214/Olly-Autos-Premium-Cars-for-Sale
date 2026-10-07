/* SEARCH CARS */

function searchCars() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    let cars = document
        .querySelectorAll(".car-card");


    cars.forEach(function(car) {

        let carName = car
            .querySelector("h3")
            .innerText
            .toLowerCase();


        if (carName.includes(input)) {

            car.style.display = "block";

        } else {

            car.style.display = "none";

        }

    });

}


/* SEND WHATSAPP MESSAGE */

function sendMessage() {

    let name = document
        .getElementById("name")
        .value;


    let phone = document
        .getElementById("phone")
        .value;


    let message = document
        .getElementById("message")
        .value;


    /* CHECK EMPTY INPUT */

    if (
        name === "" ||
        phone === "" ||
        message === ""
    ) {

        alert(
            "Please fill in your name, phone number and message."
        );

        return;

    }


    /* CREATE WHATSAPP MESSAGE */

    let whatsappMessage =

        "Hello Olly Autos!%0A%0A" +

        "Name: " + name + "%0A" +

        "Phone: " + phone + "%0A%0A" +

        "Message: " + message;


    /* OPEN WHATSAPP */

    window.open(

        "https://wa.me/2349014498663?text=" +
        whatsappMessage,

        "_blank"

    );

}


/* WELCOME MESSAGE */

window.onload = function() {

    console.log(
        "Welcome to Olly Autos!"
    );

};