function navMenu() {
  let navbar = document.getElementById('myNavbar');
  let hamburger = document.getElementById('myHamburger')

  console.log(hamburger)
  if (navbar.tagName === "NAV" && !navbar.className.includes("responsive")) {
    navbar.className += " responsive";
    hamburger.className = "fa fa-times";
  } else {
    navbar.className -= " responsive";
    hamburger.className = "fa fa-bars";
  }
}
