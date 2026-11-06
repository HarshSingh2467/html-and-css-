document.querySelectorAll("[data-demo-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        status.hidden = false;
        status.textContent = "Form submitted for this demonstration. No information was sent or stored.";
    });
});
