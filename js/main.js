window.addEventListener("load", function() {
  var delayInMilliseconds = 2550;
  const loader = document.querySelector(".loader");
  this.setTimeout(function() {
    loader.className += " hidden";
  }, delayInMilliseconds);
});
