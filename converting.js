const input = 1000400;

function formatMillion() {
  let localeString = input.toLocaleString("id-ID");
  let splitLocaleString = localeString.split(".");
  let n1 =
    splitLocaleString[0] *
    10 ** (localeString.length - splitLocaleString.length);
  let n2 = Number(splitLocaleString.slice(-1));
  if (n1 > 999) {
    console.log("-", convertToK(n1 / 100));
  } else {
    console.log("-", convertToBoth(n1));
  }
  if (n2 > 999) {
    console.log("-", convertToK(n2 / 100));
  } else {
    console.log("-", convertToBoth(n2));
  }
}

function convertToBoth(num) {
  return num / 100 + " x " + 100;
}

function convertToK(num) {
  return num / 1000 + " x " + 100 + "k";
}

formatMillion();
