document.addEventListener("DOMContentLoaded", () => {
    const rates = document.getElementsByClassName("rate");
    Array.from(rates).forEach( (rate) => {
        rate.addEventListener("click", (e) => {
            Modal.set(rate.outerHTML);
        });
    });
});