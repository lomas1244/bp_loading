window.addEventListener("load", function() {
  const delayInMilliseconds = 2550;
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, delayInMilliseconds);
});
