// datetime-utils.js

/**
 * Format a date object into a string using a specified format.
 * @param {Date} date - The date object to format.
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns {string} The formatted date string.
 */
function formatDate(date, format) {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');
  const HH = date.getHours().toString().padStart(2, '0');
  const mm = date.getMinutes().toString().padStart(2, '0');
  const ss = date.getSeconds().toString().padStart(2, '0');

  return format
      .replace('YYYY', yyyy)
      .replace('MM', mm)
      .replace('DD', dd)
      .replace('HH', HH)
      .replace('mm', mm)
      .replace('ss', ss);
}

/**
* Parse a string into a Date object using a specified format.
* @param {string} dateString - The date string to parse.
* @param {string} format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
* @returns {Date} The parsed Date object.
*/
function parseDate(dateString, format) {
  const yyyyIndex = format.indexOf('YYYY');
  const mmIndex = format.indexOf('MM');
  const ddIndex = format.indexOf('DD');
  const HHIndex = format.indexOf('HH');
  const mmIndex = format.indexOf('mm');
  const ssIndex = format.indexOf('ss');

  const yyyy = parseInt(dateString.substring(yyyyIndex, yyyyIndex + 4), 10);
  const mm = parseInt(dateString.substring(mmIndex, mmIndex + 2), 10) - 1;
  const dd = parseInt(dateString.substring(ddIndex, ddIndex + 2), 10);
  const HH = parseInt(dateString.substring(HHIndex, HHIndex + 2), 10);
  const mm = parseInt(dateString.substring(mmIndex, mmIndex + 2), 10);
  const ss = parseInt(dateString.substring(ssIndex, ssIndex + 2), 10);

  return new Date(yyyy, mm, dd, HH, mm, ss);
}

// Export functions to be used by consumers of this package
module.exports = {
  formatDate,
  parseDate
};
