import _tool from "fp-dom-tool";
import unsplashIconImg from "../../img/unsplash.svg";
import linkedinIconImg from "../../img/linkedin-in-brands.svg";
import githubIconImg from "../../img/github-brands.svg";
import fontAwesoneIconImg from "../../img/font-awesome.svg";

/**
 * Using the npm package fp-dom-tool
 * @https://www.npmjs.com/package/fp-dom-tool
 * Create list > a for footer icons
 * @param {string} href
 * @param {string} alt
 * @param {string} src
 */
const createSocialListItem = (href, alt, src) => {
  const li = _tool._createElement("li")();
  const link = _tool._createElement("a")(["href", href], ["target", "_blank"]);
  const img = _tool._createElement("img")(["alt", alt], ["src", src]);
  _tool._appendElement(li)(_tool._appendElement(link)(img));
  return li;
};

const fontawesone = createSocialListItem(
  "https://fontawesome.com/",
  "fontawesone icon",
  fontAwesoneIconImg
);

const unsplashIcon = createSocialListItem(
  "https://unsplash.com/",
  "unsplash icon",
  unsplashIconImg
);
const linkedinIcon = createSocialListItem(
  "https://www.linkedin.com/in/cliscoet/",
  "linkeding account",
  linkedinIconImg
);
const githubIcon = createSocialListItem(
  "https://github.com/clemoni",
  "github account",
  githubIconImg
);

const addIconsToList = (...icons) => {
  const social__list = _tool._getElementClass("social__list");
  icons.forEach((icon) => {
    _tool._appendElement(social__list)(icon);
  });
};

export const fireIconsToList = () =>
  addIconsToList(fontawesone, unsplashIcon, linkedinIcon, githubIcon);
