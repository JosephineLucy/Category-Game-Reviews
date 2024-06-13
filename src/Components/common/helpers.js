export function formatDate(date) {
  if (date === undefined) {
    return "undated";
  }

  let dateArray = [];

  for (let i = 0; i < 10; i++) {
    dateArray.push(date[i]);
  }
  let joinedFormattedDate = dateArray.join("");
  let formattedDate = joinedFormattedDate.split("-").reverse().join("-");
  return formattedDate;
}
