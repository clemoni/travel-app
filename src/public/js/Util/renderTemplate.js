import _tool from "fp-dom-tool";

export const initContainer = (containerName) => {
  return _tool._getElementClass(containerName);
};
export const initChild = (containerName) => {
  return _tool._createElement("div")(["class", `${containerName}__container`]);
};

export const initTemplate = (importedTemplate) => (prepContent) => {
  return importedTemplate(prepContent);
};
export const composedChild = (child) => (initTemplate) => {
  child.innerHTML = initTemplate;
  return child;
};

export const buildTemplate = (container) => (child) => {
  container.innerHTML = "";
  _tool._appendElement(container)(child);
};
