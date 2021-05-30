const isReg = (reg) => (testValue) => {
  return reg.test(testValue);
};

const reg = /^\d{4}[\-]\d{1,2}[\-]\d{1,2}$/;

/**
 * Check if a tested value correspond to regex test
 */
export const isDate = isReg(reg);
