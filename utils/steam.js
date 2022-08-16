const urlRegex =
  // eslint-disable-next-line no-useless-escape
  /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gm;

/**
 *
 * @param {String} text Text to check for url
 * @returns {Array|null} Array of matches or null for no matches
 */
export const findUrl = (text) => {
  return text.match(urlRegex);
};
