// =====================================
// OL KALOU SHANGI POTATOES
// =====================================


// Show the current year
const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// Mobile menu
const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle("show");

        }
    );

}


// Close menu after clicking a link
if (mainNav) {

    const links =
        mainNav.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mainNav.classList.remove("show");

            }
        );

    });

}
