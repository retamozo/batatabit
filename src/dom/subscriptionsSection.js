import { PLANS_CONTAINER } from "../const.js";

const plansVisibilityOptions = {
  root: null,
  threshold: 1,
};

const containerObsCb = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    focusHightlight();
  }
};
const plansContainerObserver = new IntersectionObserver(
  containerObsCb,
  plansVisibilityOptions
);

export const observePlansScrollbar = () =>
  plansContainerObserver.observe(PLANS_CONTAINER);

/**
 * Set the highlighted element as default.
 * TODO: investigate if this could be achieved by focus the first element via "tabindex".
 */
function focusHightlight() {
  const elementsQ = PLANS_CONTAINER.childElementCount;
  const widthOffsetContainer = PLANS_CONTAINER.offsetWidth;
  const totalWidth = widthOffsetContainer * elementsQ;
  const elArr = Array.from(document.getElementsByClassName("card-container"));
  const recommendedIndex =
    elArr.findIndex((el) =>
      el.firstChild.nextSibling?.classList?.contains("highlight-box")
    ) * 10 || 0;
  const positionLeft = totalWidth * (recommendedIndex / 100);
  PLANS_CONTAINER.scroll({
    behavior: "smooth",
    // cards has 15 px of margin in both left and right side (30px)
    // plus 60px (30 and 30) from plans section (section tag with .plans class name)
    left: positionLeft + 90,
  });
}

function drawSection(data) {
  if (data) {
    PLANS_CONTAINER.innerHTML = `${data
      .map((data, i) => buildCard(data, i))
      .join("")}`;
  }
}

const buildCard = (plan, i) => {
  const cards = `
    <div class="card-container" tabindex=${i} >
    ${
      plan.isRecommended
        ? `<div class="highlight-box">
    <span>Recomendado </span> </div>`
        : ""
    }
    <div class="white-box">
      <div class="plan-card--price-box">
        <p class="plan-card--floating-symbol">$</p>
        <p class="plan-card--payment-type">${plan.title}</p>
        <p class="plan-card--price">${plan.amount}</p>
      </div>
      <p class="plan-card--info">${plan.saving_message}</p>
      <button class="plan-cta">Escoger este <span class="plan-cta--icon"></span></button>
    </div>
  </div>
</section>
    `;

  return cards;
};

function main(data) {
  drawSection(data);
  observePlansScrollbar();
}

export default main;
