function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (!name || !phone || !message) {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        this.reset();
    });
