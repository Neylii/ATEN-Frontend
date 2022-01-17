export function createMd5(s) {
  return f1(f2(f3(s), s.length * 8));
}
function f2(x, len) {
  x[len >> 5] |= 0x80 << len % 32;
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = f4(a, b, c, d, x[i + 0], 7, -680876936);
    d = f4(d, a, b, c, x[i + 1], 12, -389564586);
    c = f4(c, d, a, b, x[i + 2], 17, 606105819);
    b = f4(b, c, d, a, x[i + 3], 22, -1044525330);
    a = f4(a, b, c, d, x[i + 4], 7, -176418897);
    d = f4(d, a, b, c, x[i + 5], 12, 1200080426);
    c = f4(c, d, a, b, x[i + 6], 17, -1473231341);
    b = f4(b, c, d, a, x[i + 7], 22, -45705983);
    a = f4(a, b, c, d, x[i + 8], 7, 1770035416);
    d = f4(d, a, b, c, x[i + 9], 12, -1958414417);
    c = f4(c, d, a, b, x[i + 10], 17, -42063);
    b = f4(b, c, d, a, x[i + 11], 22, -1990404162);
    a = f4(a, b, c, d, x[i + 12], 7, 1804603682);
    d = f4(d, a, b, c, x[i + 13], 12, -40341101);
    c = f4(c, d, a, b, x[i + 14], 17, -1502002290);
    b = f4(b, c, d, a, x[i + 15], 22, 1236535329);
    a = f5(a, b, c, d, x[i + 1], 5, -165796510);
    d = f5(d, a, b, c, x[i + 6], 9, -1069501632);
    c = f5(c, d, a, b, x[i + 11], 14, 643717713);
    b = f5(b, c, d, a, x[i + 0], 20, -373897302);
    a = f5(a, b, c, d, x[i + 5], 5, -701558691);
    d = f5(d, a, b, c, x[i + 10], 9, 38016083);
    c = f5(c, d, a, b, x[i + 15], 14, -660478335);
    b = f5(b, c, d, a, x[i + 4], 20, -405537848);
    a = f5(a, b, c, d, x[i + 9], 5, 568446438);
    d = f5(d, a, b, c, x[i + 14], 9, -1019803690);
    c = f5(c, d, a, b, x[i + 3], 14, -187363961);
    b = f5(b, c, d, a, x[i + 8], 20, 1163531501);
    a = f5(a, b, c, d, x[i + 13], 5, -1444681467);
    d = f5(d, a, b, c, x[i + 2], 9, -51403784);
    c = f5(c, d, a, b, x[i + 7], 14, 1735328473);
    b = f5(b, c, d, a, x[i + 12], 20, -1926607734);
    a = f6(a, b, c, d, x[i + 5], 4, -378558);
    d = f6(d, a, b, c, x[i + 8], 11, -2022574463);
    c = f6(c, d, a, b, x[i + 11], 16, 1839030562);
    b = f6(b, c, d, a, x[i + 14], 23, -35309556);
    a = f6(a, b, c, d, x[i + 1], 4, -1530992060);
    d = f6(d, a, b, c, x[i + 4], 11, 1272893353);
    c = f6(c, d, a, b, x[i + 7], 16, -155497632);
    b = f6(b, c, d, a, x[i + 10], 23, -1094730640);
    a = f6(a, b, c, d, x[i + 13], 4, 681279174);
    d = f6(d, a, b, c, x[i + 0], 11, -358537222);
    c = f6(c, d, a, b, x[i + 3], 16, -722521979);
    b = f6(b, c, d, a, x[i + 6], 23, 76029189);
    a = f6(a, b, c, d, x[i + 9], 4, -640364487);
    d = f6(d, a, b, c, x[i + 12], 11, -421815835);
    c = f6(c, d, a, b, x[i + 15], 16, 530742520);
    b = f6(b, c, d, a, x[i + 2], 23, -995338651);
    a = f7(a, b, c, d, x[i + 0], 6, -198630844);
    d = f7(d, a, b, c, x[i + 7], 10, 1126891415);
    c = f7(c, d, a, b, x[i + 14], 15, -1416354905);
    b = f7(b, c, d, a, x[i + 5], 21, -57434055);
    a = f7(a, b, c, d, x[i + 12], 6, 1700485571);
    d = f7(d, a, b, c, x[i + 3], 10, -1894986606);
    c = f7(c, d, a, b, x[i + 10], 15, -1051523);
    b = f7(b, c, d, a, x[i + 1], 21, -2054922799);
    a = f7(a, b, c, d, x[i + 8], 6, 1873313359);
    d = f7(d, a, b, c, x[i + 15], 10, -30611744);
    c = f7(c, d, a, b, x[i + 6], 15, -1560198380);
    b = f7(b, c, d, a, x[i + 13], 21, 1309151649);
    a = f7(a, b, c, d, x[i + 4], 6, -145523070);
    d = f7(d, a, b, c, x[i + 11], 10, -1120210379);
    c = f7(c, d, a, b, x[i + 2], 15, 718787259);
    b = f7(b, c, d, a, x[i + 9], 21, -343485551);
    a = f8(a, olda);
    b = f8(b, oldb);
    c = f8(c, oldc);
    d = f8(d, oldd);
  }
  return Array(a, b, c, d);
}
function f9(q, a, b, x, s, t) {
  return f8(bit_rol(f8(f8(a, q), f8(x, t)), s), b);
}
function f4(a, b, c, d, x, s, t) {
  return f9((b & c) | (~b & d), a, b, x, s, t);
}
function f5(a, b, c, d, x, s, t) {
  return f9((b & d) | (c & ~d), a, b, x, s, t);
}
function f6(a, b, c, d, x, s, t) {
  return f9(b ^ c ^ d, a, b, x, s, t);
}
function f7(a, b, c, d, x, s, t) {
  return f9(c ^ (b | ~d), a, b, x, s, t);
}
function f8(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}
function bit_rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}
function f3(str) {
  var bin = Array();
  var mask = (1 << 8) - 1;
  for (var i = 0; i < str.length * 8; i += 8)
    bin[i >> 5] |= (str.charCodeAt(i / 8) & mask) << i % 32;
  return bin;
}
function f1(binarray) {
  var hex_tab = "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str +=
      hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) +
      hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xf);
  }
  return str;
}
