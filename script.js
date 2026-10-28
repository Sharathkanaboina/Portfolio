document.addEventListener("DOMContentLoaded", () => {
  const yearText = new Date().getFullYear();
  const footer = document.querySelector(".site-footer p");

  if (footer) {
    footer.textContent = `© ${yearText} Sharath Kanaboina`;
  }
});
