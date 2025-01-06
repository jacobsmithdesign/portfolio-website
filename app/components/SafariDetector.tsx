export const isSafari = (): boolean => {
  if (typeof navigator !== "undefined") {
    const userAgent = navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(userAgent);
  }
  return false;
};
