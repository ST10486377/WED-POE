document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your inquiry has been sent to Rocket Resellers.");
      form.reset();
    });
  }
});