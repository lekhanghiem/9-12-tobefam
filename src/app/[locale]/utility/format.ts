import dayjs from "dayjs";

export const formatMoney = (amount: any) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
};

const formater_number = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
});

export function formatNumber(value: number) {
  return formater_number.format(value);
}

export function formatAmount(amount: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 18,
  });

  return formatter.format(amount).replace(/,/g, "");
}
export function formatAmountShort(amount: number | string) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

  return formatter.format(Number(amount)).replace(/,/g, "");
}
export default function DateFormat(currentDate: any) {
  const provideDate = dayjs(currentDate);
  const formattedDate = provideDate.format("MMM DD, YYYY hh:mm A");
  return formattedDate;
}

export function DateFormatShort(currentDate: any) {
  const provideDate = dayjs(currentDate);
  const formattedDate = provideDate.format("MMM DD, YYYY");
  return formattedDate;
}

export function formatAddressDot(
  inputStr: string,
  prefixLength: number,
  suffixLength: number
) {
  if (prefixLength + suffixLength >= inputStr.length) {
    return inputStr;
  } else {
    var prefix = inputStr.substring(0, prefixLength);
    var suffix = inputStr.substring(inputStr.length - suffixLength);
    var middle = "...";
    var result = prefix + middle + suffix;
    return result;
  }
}

export const formatAddress = (address: string) => {
  if (!address) return "...";
  const first = address?.substring(0, 6);
  const last = address?.substring(address?.length - 4, address?.length);
  return first + "..." + last;
};
