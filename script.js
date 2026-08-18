const SUPABASE_URL = "https://sajhbelkmserodeanrer.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (!name || !phone || !message) {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        formMessage.textContent = "Sending...";

        const { error } = await supabaseClient
            .from("contact_messages")
            .insert([
                {
                    name: name,
                    phone: phone,
                    message: message
                }
            ]);

        if (error) {
            console.error(error);
            formMessage.textContent =
                "Something went wrong. Please try again.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        this.reset();
    });
