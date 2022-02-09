const arrow = () => {
    const arrowSide = document.querySelector(".arrow-image");
    const nav = document.querySelector(".navigation");

    window.addEventListener("scroll", () => {
        if (this.pageYOffset > 300) {
            arrowSide.classList.remove("closed");
        } else arrowSide.classList.add("closed");
    })

    arrowSide.addEventListener("click", () => {
        nav.scrollIntoView();

        function scrollToTop(duration) {
            const totalScrollDistance = document.scrollingElement.scrollTop;
            let scrollY = totalScrollDistance,
                oldTimestamp = null;

            function step(newTimestamp) {
                if (oldTimestamp !== null) {
                    scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
                    if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
                    document.scrollingElement.scrollTop = scrollY;
                }
                oldTimestamp = newTimestamp;
                window.requestAnimationFrame(step);
            }
            window.requestAnimationFrame(step);
        }
        scrollToTop(50);
    })
}

arrow();