function addBinary(a: string, b: string): string {
  // O(n)
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    result = "";
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--], 10);
    if (j >= 0) sum += parseInt(b[j--], 10);
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  if (carry !== 0) result = carry + result;
  return result;
}
