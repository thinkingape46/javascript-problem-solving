function timeConversion(s) {
  // Write your code here

  const amOrPm = s.slice(s.length - 2);

  const timeSplit = s.split(":");

  let hr = timeSplit[0];

  if (hr == "12") {
    hr = amOrPm === "AM" ? "00" : "12";
  } else if (amOrPm === "PM") {
    hr = String(+hr + 12);
  }

  return hr + s.slice(2, s.length - 2);
}

console.log(timeConversion("12:01:00PM"));
