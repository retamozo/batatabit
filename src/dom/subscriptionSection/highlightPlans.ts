import { PLANS_CONTAINER } from "./const"

const plansVisibilityOptions: IntersectionObserverInit = {
    root: null,
    threshold: 1
}

const containerObsCb = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
        focusHightlight()
    }
}
const plansContainerObserver = new IntersectionObserver(containerObsCb, plansVisibilityOptions)

export const observePlansScrollbar = () => plansContainerObserver.observe(PLANS_CONTAINER)

/**
 * Set the highlighted element as default.
 * TODO: investigate if this could be achieved by focus the first element via "tabindex".
 */
function focusHightlight() {
    const elementsQ = PLANS_CONTAINER.childElementCount;
    const widthOffsetContainer = PLANS_CONTAINER.offsetWidth;
    const totalWidth = widthOffsetContainer * elementsQ
    const elArr = Array.from(document.getElementsByClassName("card-container"))
    const recommendedIndex = elArr.findIndex(el => el.firstChild.nextSibling?.classList?.contains("highlight-box")) * 10 || 0
    const positionLeft = totalWidth * (recommendedIndex / 100)
    PLANS_CONTAINER.scroll({
        behavior: "smooth",
        // cards has 15 px of margin in both left and right side (30px)
        // plus 60px (30 and 30) from plans section (section tag with .plans class name)
        left: positionLeft + 90,
    })
}
