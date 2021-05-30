import { compose } from "../Util/utilities";
const weatherMainLib = {
  td: "3qucB7U2l7I",
  tn: "3qucB7U2l7I",
  dd: "Hs3dphb2J38",
  dn: "_zUAcIvs-ME",
  rd: "Hs3dphb2J38",
  rn: "_zUAcIvs-ME",
  fd: "Hs3dphb2J38",
  fn: "_zUAcIvs-ME",
  sd: "w8hWTFpGtpY",
  sn: "PzhmEp_aDU4",
  ad: "7CME6Wlgrdk",
  an: "yY66QAbGxq4",
  cd: "15AMBS1gM2E",
  cn: "DySxCmzpkO8",
  ud: "kEEl9csCutg",
  un: "UrdBlloc3oY",
};

const convertIconMain = (iconMain) => {
  const [w, , , p] = [...iconMain];
  return `${w}${p}`;
};

const getIcon = (convertIcon) => {
  return weatherMainLib[convertIcon];
};

/**
 * Convert Main Weather in order
 * to retrieve corresponding image
 */
export const getWeatherMainIcon = compose(getIcon, convertIconMain);
