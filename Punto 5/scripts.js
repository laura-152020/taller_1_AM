<script>

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    var fadeList = document.querySelector(".fade-in-list");
    if (isElementInViewport(fadeList)) {
      fadeList.classList.add("show");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
</script>