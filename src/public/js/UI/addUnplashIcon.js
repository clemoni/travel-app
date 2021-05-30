import _tool from "fp-dom-tool";
import unsplashIconImg from "../../img/unsplash.png";

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

export const addUnsplashIcon = () => {
  const unsplashIcon = createSocialListItem(
    "https://unsplash.com/",
    "unsplash icon",
    unsplashIconImg
  );
  const social__list = _tool._getElementClass("social__list");
  _tool._appendElement(social__list)(unsplashIcon);
};
