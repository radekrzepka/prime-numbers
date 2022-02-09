const hamburgerMenu = () => {
    const hamburgerIcon = document.querySelector(".header__hamburger-icon");
    const naviagtionList = document.querySelector(".navigation__list");
    const navigation = document.querySelector(".navigation");
    const headerImage = document.querySelector(".navigation__logo");

    hamburgerIcon.addEventListener("click", () => {
        hamburgerIcon.classList.toggle("open");
        naviagtionList.classList.toggle("open");
        navigation.classList.toggle("open");
        headerImage.classList.toggle("open");
    })
}

hamburgerMenu();