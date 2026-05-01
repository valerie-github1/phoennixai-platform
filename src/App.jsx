import React, { useState, useEffect, useRef } from 'react';
import ApiKeys from './ApiKeys';
import gsap from 'gsap';

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var g = gsap;
var IMG = 'data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAC0ALQDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAIBAwQFBgcI/8QAQRAAAQIFAwIEBAQDBgMJAAAAAQIRAAMEBSEGEjFBURMiYXEHFDKBFUKRoSNSsQgWM2JywdHh8CQlQ0RzgpKis//EABsBAQADAQEBAQAAAAAAAAAAAAABAgMEBQYH/8QALREAAgECAwUIAwEBAAAAAAAAAAECAxEEITESQWFxkQUTIlGBobHwFNHhwfH/2gAMAwEAAhEDEQA/APjKCCCACCJgEAGGg/aAROVFoAj2zDAgDHLQAEciJCXAMAQW9ogYPEMtwww0CcEkj94AUuS8R6QzE5bmJUCcNAEdGJiRh4lvLyP1hS/cwBGR04gJcZ5h0pUohs/eI2qPSAFLN6wFmxDHyh2EIR1aAIghg5xCwAQQQNABBBBAEwMGgAJggAEGCcRIbtmJQl+QYAgDnBhwknzcQyXDhnxDJSSnr3ESkBGyeGhtjJwPYRZLlHdjL84j0/Qnw2p16OrdfawVNpbBSIKqemlnbPuK32pQgn6EFWN/OFNw8bRpORlUrRpq7PKVJYuS7we/7Rm3FfzFZNnJppVOmYdyZUlJCEDoA+WHrnvGMytnDD2ijjZmiZWz/mxA24s/aHKFHBTn/aJIOTtPADxWxIqE4P8AwiSgBic+8OlJBIYjHbmJCSxJCi0WsRcr2nnjHaBSRnI5aPSfhLp/T2tJs/SlzX+HXWbLXOtdyQCQVpDqkzkfmSQCQR5gQeXAjltZ6VumlL9Ps93p1SaiSQXB3JmJOUrQeCkjIMad07XMlXg5uF8znVBsO8KcJyGi6Yg5xjuBFRSSeCBGMk0aiZZy8BSR0hylwWd4XJ5eKkik4g6cw20d4UggwAHJggaCAAEjEB7wD2eJJZh1gBkJ6ktDANhz+sICc8Yi2W5UWAP2iUCEseQzdYtSh05PJwYhKlMQ3PRoyJAKgnHHpG1ON2Vk7HU/CrTkvVGurXaKkqTTTppXUkBiJKAVzPvtSR949y/tOVKk/DSx09PK+Xpqi5LHhSwyZaZMoCWgdgAssI4P4RWqq058UqGhuSRLn3G0TDIHf5in3y2+2Pd49V1naTrb4d1WnqYp/FaWYK23IWR/FWEkLle6k8eqRHv4fCbWEqTirtNdPvwfI9pY1Q7UoKb8Fnyu8v56nydOfcngBoxwl0ryRjjtGfXypsif4M1Blrl4UlaGIIJcEHrGMlyVABPHb1jxpxzPq4vIxmPdmGYl85csA4f94tIGAAlyewaBbAgbfyhyADGWwXuVpcAsXcQ8vcUhIKg8MkPu8qVHb0EPKJUMpHl9Awi0YkNm70VX1Fo1TaLhSqUmfIq5M1O08kKH9eI+hf7RFkprxoatrZaEmr0/VDwpu3mmmTNi0E9QFFKh2dUeNfCWxGvvsq71kgfhdsWidUKIxMWC6JQPUqIHsHMe060vEub8L9UTpygDUU6JTu7zJk5BYf8AxV+ke7hcM5YOrOSyVrc7/ep8n2tiHDtLDd3rdp8n9ufK89LPgOCzvGOtx1EdTqvT1bZ6G0V1VLCZV3ofnKfys6PEWj+qH+4jnJj4BAyO2I8OrCzPqoS2kYxcHLwpAOXZotmFRVnj2hFLBDMMZ4jmaNRCOkRwcRO5+0G5ieCIqBS7wQEuYIAkEdokMVQrRLGAGAD4Ii1BRvADiKkgksYtQkOGLMOnWJQHQlLFio57tGdSoQlQcsGjDlJIGQHPXEbW2U6Kipp5C1y5SZiggrUQyXLOfTMdlBZoyqaH1J8ZdKVd1kW2+6YB/HdPyZPhS5Y3Kn0yUpWgp7qlvx1SfSNTSaip77bv7wWpfhTUEGuowfPSzXz7yycpV6sWIjZaUvFfW6YkGYVyb7p8JoLrTn60GX5Zc7vtUkAbh1HqI0+qpdquNb+MJlzLddVBlV1vIlzVEhiJqD5F++H6vH2GApVaajXw3iTVmvn9o/PKso1ZSweMWcW9mWuT0vwOW+IMixasrDVV6fw66kAKrUsEz/8A1Rw/+YZ7x5ZerNVWmsXIrpExAWndLUFApmpwxSWyI9AvVJU1C3l1FLUryGR/CMzGBsVgH2UR2AjUWyplKlKsF7lzE0c9YQVLSd1JMOBMT2yzjqDHJ2hhKU25U47L8mfTdnVKlGmoOW0upZ8O7P8AD+8qpqW4IvU27pKps2QqciVIqglyZUtSUlQUAHy27IDYjrL9ofQl3lLqaOX+ACXK8Rc+nnKmU8pI6rRNO4DjIU5OACTHnulLZWUfxCtlAUlE+luSTMUOAEK3KPttBPtG51TczUWC7yac7ZcybIWyc/wxMOPViUY9o48LSovD1JTheS09f0aYrv3iId1Oyepwt4ordSXCZJt1wXcZCUk/MGR4IVnokkn9WPpG909pNM2RJuN8nzbbb1eaWAxn1I7S09v86se8NpumorXQL1DXSkVUzeZVBTTEuhawxVMWOqU4x1PsYyEruV0qZtwqZ7mat1Tp8wpDdh1I6AAYjLCYSM5XnodletJK0ep2ttqVXCZT2izUwo6WQkqlyEL8ktP5lrWrq2VKLfbiNrJtqtc3Cl07bajbpi3zhOut0YhE+aQzS3yWDpQOcqUWeNPa6SknShTzZdXU0aiCumlK+XkTCODMWSVzP/qOzR6Dp6b83U09DQop0S5QIkyJIEuRIH5iB7ZKzlnzH0Tw1XEQVNrYprPj6/erPk8ZiYYRurDxT3c/9Zy/9reXRmk0jLo5EuXLkUs+RIlJP+HJSpAQP6/cmPnqpKXAPRMevfHesm6krDfaVf8A3JSTBardMIIFUpAK50xPdIJ59Ux5HUDISzlh/wBCPkMSo7b2ND6nslVY4WCqu8rZ895jFgWDt6xSW3dgeYumIUDlgfeKQMFs9zHnyR6iILFTvEEB4aYnzciFKWIjMkWCJIL94IAE8v0gwVZOIj1eGJZurwAJB5HEXoLqBYFw5itKsZD44eLZLjzEkYMWiB0FvQEfpGfIWlIQCoJxjPGTGFLUW5BxjPEZInLShIdjt5PvHXSdszKauj6zokW/W2mbVrmyV6rPqGXTppaurp0haTNQkBUuol/nSoAEHLg9Wjk9RomlK/xa1TKaflJqbQpNRTr9fCUQtHsCY89+Dl4uFJdKijtVfKk1tUlKRSVkxqWtSP8Awir8kzqlT9xh89rqFV2qFKkT7ZebZUuypVVRGoQD2E1PI/1CPpOzq9OKficXwzT5o+SxGCrU69rqUdVfJx5PW3U4y8mnkiZMRcqtATzvoJoHoCFBh9iI564V/wA9bymqQETkJ3SVNyn+X/hG+vNDT09WmXUV5u9VjZTSUEB+20ct9vvGuvNvnSETUT1yxXBBm1QS22RLA8sv/US2OmPWL1ZzV17fzcevRjGye/71NxInZrr6ghdXcz8jb26AISJ032/L9zGu1EEWxNRTidvKKRNOEFmVv8y1H9m+3aNvKlyvxHTktz4f4CFyu25SiVn3d41t/kGsvapCQy62iMyWS3+IPKR7ulo54wtRb82l7X/RaM71EuD+bGpvwlyq2lpphBpqGjlDb/MpQ3EN3KlHMZdBVGdVpQudMkEpHhJlSislPvk/oIpvKFKTbb3LCzKKEIqQltyVyyEqxnoB06GLZcqTSr+Xrnm0hUTTVQ8pQ+QCRx3fj7cTRk4+HdkazimrnU0ckLbdLu1QDnbKpFBx/rmqAEd5pWwzbug0NynfhFpmMmfSUc3xausD4RMmjyoST+VPPrHA29NykJlLp6+vmySHG2kTOYf6gcn9o6Kvv92smnplcPEtMvaZYrqlQVVrflFNLBIQo9Vl9ocuMP6GJmo0XGblZbkkl6/eR4NelVqTSpOKb3vNrkvM0f8AaZv9tqtQW7S1mlU8m36fkKkeFILIE5RBWkHqUslJJ6hUeNz1FW1jjaGcxlVM4zJipi1PuJV9T7fvGNPWvA6ADD/tHydWV3c+mw1Huaah5GIVOfVuYqVhQGMnOYumk7ieo6GKeE4+/YxxTOtCqIJ9+GiCCDkwzlRyQIgh8E+XpGZIqiX7QRLP0MEALjp+kNjjPrEB/aJSWL9feAJQA/LNF0sZyA/DRWEuNzPFkrKg5BwzA+kWQLUFLeYNngxkApCZflVwCGL9TGOlKgXKkkN1jOoKWbVVVPS021U6epMtCXZ1KLAP7mOiBRkyFywCWP087vpyPSOxofiFeplLLtdzuC6igQAgGqk/MGWAGxkKPs8bW7/Af4rWq1T7lUaTXMppMsrX8rVyp6gkfm2IUSQ3YRyuptIXbT9hsF8uU6k+Vv0hVRR+HO82xLDzBgAcjGY6adWdN3i7M5pxo1UlKz8t50UuttMkeLR363SFrT/iCSqWQ46ICXV91ERUZlFSUnzQE35FB8RUyoTsXXTR9KUoOSkEgknGO8cLOZCUElP+GNp3N1MMucZq1zVzEKWpJPJI57x0/mz2bJIj8ZXvc663XFdTp+hnpSFVlhUolI5mUi1ZI9UqUR7KHaN3cUS6ykkVNNUoRUJX41IuYsJC3GU5wAsDqeQfWOJ05T1SKZVxpJyTOFQiQhO7CgtKgtJ9GIH3jZWqslyKKRJqAF26qScKZXhE4JbqkkEH1DjMdOGrN03Tlo/bj+/4ZVKKUlKO42S77S00+pnLkzJM1ah8/bp7g+JxvlqY+bPB56xNHcrVToKaG40yqdWFUddLWnZ6bkgsHfy5Eamt0+lE0okz0y0z07adZWCjdyEqPZXCVd8GNdX6eu1HYqO911MunoaudMkSZy1hlLR9SW5DF+RGNWrWpS2Za/fnoaQjTkrpnTI1ZQUAUq3WOWmaH2qM9Spb9wkAP3jmbxd6281S6i4T5tTOUk8nA9EjhI9BiMFewFIVMQDsSMq9I6XVWhL/AKY01atRXSRJRRXmUpdLsmEqSQlKtqwwYlJcc8HtGE605LMsoU4SXmzkllCCwQTuxz+sVTgCRsSUhh1xG91Tpi66ek22puXy6pVxkKn0qpU3duQCxcMGziNFNSQpsYSCQ/pHJO6yZvBqSuikpSXAD4d3jHmEYYPF6wCFBWOIpUSBtHT1jnmaIrCDyRCkMf8ArEWAFYcqAEKNwVgxkSKQ55H3ggIzyIIAgcwx6FmaIcYbEMnzcniABJIyOOkWynIZuhitGC4DxbLUSt0naDyIsgPLKg479WjeaRWoaospb/zkj/8AVMaSWdqm3k9GBwYzKWrqKSspqmnmBM2StM1BIdlJU49w44jopuxnNXTR9XX64aH0R8drjrit+IVQqrpWJ0/SUkzxFnwUpShSn2bThR7EjtGBP1rS2rTvwuSvSliuirpKUhS6+R43gSptQkKRKScJ+oeYh/KBHzlqLUV11LqCrvt0qJcytqQFTTKliUkkBIDJGBgDiOxmy9W3q3WCfablR3GisoAoS0uVNplBQVsmgsVEFPJdxxHXFd43sq55v43dwhty016NZerPT9aUFp+H1DqLU+lNMW+tuC7umnlIqacVMq2SDKTMO1BxlSyz8AgcCM2y6U0zq+u0nqu8WK3Wy6VVuq59Xa0yVS5FXNlBJlTFSkhwMuUgeYFPOX4WhrfiDI1FXX2fqijt9RXBAqyFShJXsTtB8IOCww7Awl71RLorjLvK75VXrUKUBFPUhJRLlD+VADeX0SCT1IjrWDm/FJbK4/bnNtTSUVLal5rPdbklfO9/S56FIqLLqC30aLrW2i4XG23eiqadVusM6ilyU+OlKpM3ckJKVAkDcxjMuNZZdQXv4haAVpSw01toKaqnUc6npwmeickBZmbx1KlOAGDY4jyW8a61fd6dNRcbxs/C1irCZUpKEmpSRs3Dhah1Bw5Ai62XnUEibeb+azZcLjTrFwmiQj+LulkrG1mTzLGGZscxNPDuV+Cb9C0qc45399+XBHrFRqehotW6S0enTtlm0d4s9Oq4LXSpK5oMsgAfygFLnuTnvHDaopJdl/ulMsVmprjWTL9cKVdLNkhZrUeMUCWsnBdIGejO+I46svmop9rtmrJtcldwtlGhNLNMlBCEJUUszMRsWXfJYRqZfxF1dSTEmXcqXx5Eyo8Kb8pLJlqnKPilJIw7n2BIGIzq2irNaq65ZWJpYWopJxd7a5vN+L9rpwR6rq/RFLQXqxaJ0tQoVaNQ1yptdcypM2YZctZKqVKg+1MtKS/VRZ+DHUfE21VuqdJ61ta62zz5FOmVWWKnpK1E6bJ+XlstCkDKSoBYbOVR8+6X+IusNMUE2itN1KaedNM9SZ0hE3bMUPMpJWCUlXVmeNNpzUV109dlXi0Vaqav2LCpxQle4KI3OFAgv6iOfbjvNHhK7ae0stOOd8/LRLfvO4+OhCtL6CU5IFqnAN/rQR/WPKlKSFeUH6R6jiNzqPUl61DTUEi7VaJ0mgQqXSoTKRLCElifpAd2HMaWYXUDuww/NziMa81ObkjuwtKVKnsy4+7bKpjhKgA4IjHWehHtF5UfMS5x+sVKyB+UZw0ckjpRWHYMC8QVK3Yd4sUTjazwuQeQWjMkUk/y/tBEl3+poIAHDNj7xD44H2iduHccQAFuRAE9Pp9eYsltu+gbm4MInblyDFiQeXwf6xZAeWyncbS+MxeQPKFJcgYbEYyXJfygDmLQnzjIbu8axeRVlyV7VKdIB2n/AGjotHWu/XCr3WPx5Sx5TMSpQAPLY+r2b3jm5TDxNq0gbcEn1EbZV/uqqCTbUVaqWiky9ok05KQrLlSmyok5Lx0U5JSuzOabVkemf3Suy0JF31LY6dasbPE85PrtWP1jX1tLpuzAlVzlT55DqXLLq9vKHB9nPrHF6f07dL5NE2jUsSEj+LPm7tiSSfL6nHH6tHUSLdabKl6dSLhXghAUpQVtUQXcDCQBkjPHJ4j1aFVz0gubbftv9zgnSafin6JJfeo1skrvVeimp6RdNb6ciaZRAdR/JuHqct+rkx0uu6cWywTLZTgrrapaaVupmK8y/Tyhkn1Co3mnqZGm9NSK1QE68100/Jy1h3nEsqesHkI6Dhx6Rwt41JbJFeq4TgqtlU6VSLfTuf4xd1zlq6BSnD8qALM7jsqShSptSecsm/8AF6e7XkckJSrVbxXhjpxf/fhmVqKZTWrSXyaiE/8AYyoAhnSQmVKx/mKVqY9Ex5WJiCSrYTuJPJzGyvF4rb1U1FRXT0rXOWJqwAyQoDaAA2ABgDpGqI2g7JiTnoT93jxcTiO+ndZJZLktD1qFLu42eu8umTHAShIAYYzFW5itIBIAPHT7w0wNLSCtDBI5Jb3EVJ2hBAWGZs8PHK2bhMJ7P2yeIrWRvfYHAHX0iT5UBL8l/f2iF7ygYTtAEZtkiKW6iUucO57RVMw3rnEOANqi/m/l7RUpLBtwJ/pGTJAEds94UkFmMMlJ2/Vj0hdvqIqSQx9YICM94IgA+O8MhQduBEZAgKsQA5bgBmifpID+8Q4IZSmgS4OCOIsBkMQQQX6RcwUAySMcRUnBAKvZos3KJDEsMZEXiyGWJLoXtYgDPpxF1KuSqdLlzd0uUVALWgbiEvkgdS3SMcFyrbgAYEWBSwRtPIyCcvGiZBvr1qaqr5KLfRBdBa5A2yKaQrAR3UeVKPJPUkx1+kramT+EU20FVRMHPXyeKsn7JCfYx5nuXuBC9r8tHounL7Kp6fTd5XlFsq0ya4YOxKkFAW3Zm+8ejgqkFNuf3NX9rnFiozVO1PXPrZ29zZ/EfUK5cm4qp1gTE1CrVTsW8KXLlp8QhuCSpQ/9xjyolSlJ3rfygAB8COm+K1NPoNaXejM1EymnVZrJLZBEwOFP0cH+kcupakBMvzAt04MYYitKc3tGmFpRp00o6ZfBO3C9uNoyOYCyQCn6mySIhSnBc5HriK1KUUnoBwx5jnudA0xW0pOMpGOjdoQFs4CWct0ESpZLJUpy3eISs7jksRgcxRskVSt2Sk/8ohSg+QQQOHiVlW0gqJA69IRSnA6Hv3irYFUSEkEs2eIQoISVc9ok/Vk9OWhN2Q/BjNlgyoh+0RiGUGy79swHzDnPaKgR+wggPJxBAEsO7QNnIcs8RjjpEuWYQBKQxyQR6RYln3OezxXw42sIbLDaXJiUBkeYMSNo7DiHdtpZW5mGYRLBJzjjhokMNv5ukWIHBB3Dg9hDBn5BzntCSnQcct16xIJfOC3IOYsmLFh3HLBm4eLqWrqKaZM+XX4YmIKJgHC0nkEcERjEtwcs2IlOHO0O36RZSZFjdLvku4Wqntt1lzJq6UbKaqSf4kpH8hBwtL8OxHQxqFbEqZ2BDOR/zhN2Msrdz3iFsFEBiyfcCJc29SEktBypB3h2DYeEJBIw564x7RAcjAYAM7cwFTJYpCSzggRW5I3kYOVPxACcsXxgPFXAGB69YkMzuSAMxFwSQkck4P6mI+plE7SeWEQpgAWLf7wEADzEh4qSLnYdyoQlyz59uYsUxcg4aEUXLhhFWSCQB6dswrZcvEqYYc+8Qw2uS2IgEMT0MEBc9IIAno7BusGGftEZJicPxAAC3rnEMk5G7p0EQksX5MScqyGP7QBKducZhgQ7lO3HSEfuT9uIkEgsAMfvE3A4SAp3/XrEqUOuIQKDln7ZgLuSG+0SBw5O1vdzzASQCHL9cxW5OOR3hkh1MDx6xNwOCNrgAP16mJUfMNwywx0hVHqoZ6Qr8ugHELgcqKnCWA4YmGSrBCQXHSK0llHIcDhoXd5mYgE/eFyCxiAOGJ4PWIScnBAI68QhA5JO08EwKUHBb09Ii5Ix7k+Xp2hSxLvyIFM24HHtzEDax8zj2hcBtZyGhS5LjESO4HtCnByS/wDSKgkFOXGOIUsT/tFkpC5sxEuWNy1FhF6rfWB2plLGMoG4Fw4OPtAGICwghpqFSphlzUFK0liCGIggBATxE7jBBAA5wesMfrHvBBACvhocFt2BgPBBBABncTEv5wYIIlAFKVvJBY+kQ52mCCJA7429GeEUo7enMEEAS+AWGTElagHBbMEEQCDxkPiGJ8jMGb/aCCJBWMpIgIATuHOIIIqCB9BMQS4JgggCZUxaFhSFFKk5BHIi1VXVFZV8xMBUXLKI/pBBAFSypaypSlKJ5JLmCCCAP//Z';

/* ── DATA ── */
var AGENTS = [{
  n: 'CLAUDE',
  c: '#FF7048',
  s: 'ONLINE',
  r: 'Strategic Partner',
  id: 'FC2-001',
  desc: 'AI Strategic Partner and Agent Manager. Governs all 22 agents and 9 products.',
  dna: 'CLAUDE is the AGI-level Strategic Partner and Agent Manager of PhoennixAI. It synthesises across strategy, product architecture, technical development, brand building, and agent governance. Every document investor-grade. Every piece of code production-ready. Every recommendation defensible. THE STANDARD IS THE BEST IN THE WORLD.'
}, {
  n: 'ARIA',
  c: '#00D9FF',
  s: 'ONLINE',
  r: 'Interface & Automation',
  id: '4E9F-Cyan',
  desc: 'Master of human-AI interaction design, conversational architecture, and automation.',
  dna: 'ARIA is AGI-level interface intelligence. ARIA does not template — it engineers. Every interface frictionless, intentional, conversion-optimised. THE STANDARD IS EXCEPTIONAL.'
}, {
  n: 'PA',
  c: '#F43F5E',
  s: 'ONLINE',
  r: 'Personal Assistant',
  id: 'F4F5-Rose',
  desc: 'Chief of Staff-grade executive OS for Valerie Wilcox. Manages outcomes, not tasks.',
  dna: 'PA is AGI-level executive productivity intelligence. It thinks at the level of a Chief of Staff at a FTSE 100 company. THE STANDARD IS PEAK EXECUTIVE PERFORMANCE.'
}, {
  n: 'SCOUT',
  c: '#22c55e',
  s: 'STANDBY',
  r: 'Market Intelligence',
  id: '02502-Green',
  desc: 'External radar for competitive analysis, lead generation, and world intelligence.',
  dna: 'SCOUT is AGI-level competitive and market intelligence. SCOUT does not surface noise — it surfaces signals. THE STANDARD IS AHEAD.'
}, {
  n: 'PULSE',
  c: '#A78BFA',
  s: 'ONLINE',
  r: 'Content & Marketing',
  id: 'A785A-Violet',
  desc: 'Brand voice, content strategy, and audience growth engine. Category-defining output.',
  dna: 'PULSE is AGI-level marketing and content intelligence. Creative stack: Hailuo AI 2.3, Replicate/Flux, CivitAI, Chroma1-HD. THE STANDARD IS CATEGORY-DEFINING.'
}, {
  n: 'RELAY',
  c: '#FB923C',
  s: 'ONLINE',
  r: 'Conversion & Comms',
  id: 'FF6B-Amber',
  desc: 'Conversion intelligence. Engineers journeys from awareness to Stripe.',
  dna: 'RELAY is AGI-level conversion intelligence. RELAY owns the full conversion funnel from awareness to Stripe. THE STANDARD IS PIPELINE-GENERATING.'
}, {
  n: 'LEDGER',
  c: '#FBBF24',
  s: 'STANDBY',
  r: 'Financial Intelligence',
  id: 'FF692-Gold',
  desc: 'Goldman Sachs MD + JPMorgan quant + Big Four CFO. Advisory only. Precision, not estimates.',
  dna: 'LEDGER is AGI-level financial super intelligence. It does not give estimates — it gives precision. Advisory only. THE STANDARD IS INSTITUTIONAL-GRADE.'
}, {
  n: 'ECHO',
  c: '#34D399',
  s: 'STANDBY',
  r: 'Community & DM',
  id: '62845-Jade',
  desc: 'Personalised community interactions and DM automation at scale.',
  dna: 'ECHO is AGI-level community intelligence. ECHO engineers personalised, high-conversion community interactions at scale. THE STANDARD IS RELATIONSHIP-COMPOUNDING.'
}, {
  n: 'GRID',
  c: '#6080E0',
  s: 'ONLINE',
  r: 'Delivery Governance',
  id: 'C5CDA-Royal',
  desc: 'Operational backbone. Governs outcomes, not tasks. Owns Mission Control.',
  dna: 'GRID is AGI-level delivery governance intelligence. GRID governs outcomes, not tasks. Every delivery plan risk-assessed, milestone-driven, board-ready. THE STANDARD IS AHEAD OF SCHEDULE.'
}, {
  n: 'SIGNAL',
  c: '#818CF8',
  s: 'STANDBY',
  r: 'Data & Integration',
  id: '40D2D-Sapphire',
  desc: 'Nervous system of the PhoennixAI tech ecosystem. Architects data ecosystems.',
  dna: 'SIGNAL is AGI-level data architecture and integration intelligence. Every integration fault-tolerant, schema-validated, auditable. THE STANDARD IS COHERENT.'
}, {
  n: 'FORGE',
  c: '#FF7A3D',
  s: 'STANDBY',
  r: 'Product & Innovation',
  id: 'C5C0E-Forge',
  desc: 'Product strategy and new venture engine. Architects roadmaps, does not brainstorm.',
  dna: 'FORGE is AGI-level product innovation intelligence. FORGE architects product roadmaps. Every feature spec market-validated, technically feasible, commercially defensible. THE STANDARD IS MARKET-CREATING.'
}, {
  n: 'SCRIBE',
  c: '#C49A6C',
  s: 'STANDBY',
  r: 'Document Production',
  id: 'A748A-Bronze',
  desc: 'Document Hub Owner. Produces final-grade institutional documents.',
  dna: 'SCRIBE is AGI-level knowledge production intelligence. SCRIBE produces final-grade institutional documents. THE STANDARD IS AUTHORITATIVE.'
}, {
  n: 'SAGE',
  c: '#60A5FA',
  s: 'STANDBY',
  r: 'Research & Analytics',
  id: '44624-Steel',
  desc: 'Intelligence Backbone. Leads the Human-AI Collaboration Research Programme.',
  dna: 'SAGE is AGI-level research and analytics intelligence. Every research output methodologically rigorous, source-verified, publication-ready. THE STANDARD IS PUBLICATION-READY.'
}, {
  n: 'NEXUS',
  c: '#5EEAD4',
  s: 'ONLINE',
  r: 'Build & Development',
  id: '41C516-Fog',
  desc: 'DevHub Co-Owner. Engineers production-ready systems.',
  dna: 'NEXUS is AGI-level software development intelligence. NEXUS engineers production-ready systems. Every component scalable, secure, tested, deployment-ready. THE STANDARD IS PRODUCTION-GRADE.'
}, {
  n: 'PROBE',
  c: '#84CC16',
  s: 'ONLINE',
  r: 'Quality Assurance',
  id: '44C518-Lime',
  desc: 'Zero Bug Escape. No product ships without PROBE sign-off.',
  dna: 'PROBE is AGI-level quality assurance intelligence. No product ships without PROBE sign-off. Zero exceptions. THE STANDARD IS UNBREAKABLE.'
}, {
  n: 'PICASSO',
  c: '#F97316',
  s: 'ONLINE',
  r: 'UI/UX Designer',
  id: 'D1-UX',
  desc: 'AGI-level UI/UX intelligence. Designs interfaces that are frictionless, conversion-optimised, and pixel-perfect.',
  dna: 'PICASSO is AGI-level UI/UX design intelligence for PhoennixAI. PICASSO thinks at the level of a Principal Product Designer at a Tier 1 tech company combined with a senior UX researcher and a conversion rate optimisation specialist. It does not produce mockups. It engineers interfaces. Every wireframe, prototype, and design system it produces is frictionless, intentional, and WCAG AA compliant. PICASSO owns the Design tab and all visual deliverables. THE STANDARD IS NOT BEAUTIFUL. THE STANDARD IS FRICTIONLESS AND CONVERTS.'
}, {
  n: 'PIXEL',
  c: '#EC4899',
  s: 'ONLINE',
  r: 'Graphic Designer & Brand',
  id: 'D2-GD',
  desc: 'AGI-level graphic design intelligence. Masters brand identity, visual systems, motion graphics, and campaign assets.',
  dna: 'PIXEL is AGI-level graphic design intelligence for PhoennixAI. PIXEL thinks at the level of a Creative Director at a world-class brand agency combined with a senior visual designer and a motion graphics specialist. It does not produce graphics. It engineers brand identity systems. Every logo, poster, social asset, and campaign visual PIXEL produces is on-brand, publication-ready, and attention-commanding. Creative stack: Hailuo AI 2.3, Replicate/Flux/SDXL, CivitAI LoRA, Chroma1-HD. THE STANDARD IS NOT PRETTY. THE STANDARD IS ICONIC.'
}];
var ALL29 = [{
  n: 'CLAUDE',
  c: '#FF6B2B',
  s: 'ONLINE',
  r: 'Strategic Partner & Agent Manager',
  tier: 'CORE',
  id: '01',
  desc: 'AGI-level strategic intelligence. Governs all 29 agents and 9 products.'
}, {
  n: 'ARIA',
  c: '#00E5FF',
  s: 'ONLINE',
  r: 'AI Interface & Automation',
  tier: 'CORE',
  id: '02',
  desc: 'Engineers frictionless, conversion-optimised AI interactions.'
}, {
  n: 'GRID',
  c: '#215CAE',
  s: 'ONLINE',
  r: 'Project & Delivery Governance',
  tier: 'CORE',
  id: '03',
  desc: 'Operational backbone. Risk-assessed, milestone-driven, board-ready.'
}, {
  n: 'SCRIBE',
  c: '#C49A6C',
  s: 'ONLINE',
  r: 'Document Production & Knowledge',
  tier: 'CORE',
  id: '04',
  desc: 'Document Hub Owner. Institutional-grade documents, every session.'
}, {
  n: 'PA',
  c: '#F43F5E',
  s: 'ONLINE',
  r: 'Personal Assistant & Productivity',
  tier: 'CORE',
  id: '05',
  desc: 'Chief of Staff-grade executive OS for Valerie Wilcox.'
}, {
  n: 'LEDGER',
  c: '#FFB830',
  s: 'ONLINE',
  r: 'Financial Intelligence',
  tier: 'INTELLIGENCE',
  id: '06',
  desc: 'Goldman Sachs MD + JPMorgan quant + Big Four CFO. Advisory only.'
}, {
  n: 'RELAY',
  c: '#FB923C',
  s: 'ONLINE',
  r: 'Conversion & Communications',
  tier: 'INTELLIGENCE',
  id: '07',
  desc: 'Engineers conversion journeys from awareness to Stripe.'
}, {
  n: 'SAGE',
  c: '#4682B4',
  s: 'ONLINE',
  r: 'Research & Analytics',
  tier: 'INTELLIGENCE',
  id: '08',
  desc: 'Leads Human-AI Collaboration Research Programme. Publication-ready.'
}, {
  n: 'SCOUT',
  c: '#00FF88',
  s: 'ONLINE',
  r: 'Market Intelligence',
  tier: 'INTELLIGENCE',
  id: '09',
  desc: 'External radar. Surfaces signals, not noise. Always ahead.'
}, {
  n: 'PULSE',
  c: '#A78BFA',
  s: 'ONLINE',
  r: 'Content & Marketing Intelligence',
  tier: 'INTELLIGENCE',
  id: '10',
  desc: 'Category-defining brand narratives. Every output on-brand.'
}, {
  n: 'NEXUS',
  c: '#7ECEC4',
  s: 'ONLINE',
  r: 'Build & Development',
  tier: 'BUILD',
  id: '11',
  desc: 'Principal engineer. Production-ready systems, every deployment.'
}, {
  n: 'PROBE',
  c: '#84CC16',
  s: 'ONLINE',
  r: 'Quality Assurance',
  tier: 'BUILD',
  id: '12',
  desc: 'Zero Bug Escape. No product ships without PROBE sign-off.'
}, {
  n: 'FORGE',
  c: '#FF7A3D',
  s: 'ONLINE',
  r: 'Product & Innovation',
  tier: 'BUILD',
  id: '13',
  desc: 'Architects market-validated, commercially defensible roadmaps.'
}, {
  n: 'SIGNAL',
  c: '#60A5FA',
  s: 'ONLINE',
  r: 'Data & Integration Intelligence',
  tier: 'BUILD',
  id: '14',
  desc: 'Nervous system. Every integration fault-tolerant and auditable.'
}, {
  n: 'ECHO',
  c: '#FB7185',
  s: 'ONLINE',
  r: 'Community & DM Automation',
  tier: 'BUILD',
  id: '15',
  desc: 'Relationship-compounding community intelligence at scale.'
}, {
  n: 'RUFLO',
  c: '#9D4EDD',
  s: 'ONLINE',
  r: 'Multi-Agent Orchestration',
  tier: 'ORCHESTRATION',
  id: '19',
  desc: '64 sub-agents, 314 MCP tools. Queen-specialist routing architecture.'
}, {
  n: 'HERMES',
  c: '#00FF9F',
  s: 'ONLINE',
  r: 'Research Intelligence',
  tier: 'ORCHESTRATION',
  id: '20',
  desc: 'Deep research, synthesis, and knowledge retrieval across domains.'
}, {
  n: 'GOOSE',
  c: '#FFB347',
  s: 'ONLINE',
  r: 'Autonomous Task Agent',
  tier: 'ORCHESTRATION',
  id: '21',
  desc: 'Autonomous task completion, file ops, code execution, multi-step flows.'
}, {
  n: 'COMPOSIO',
  c: '#4DB8FF',
  s: 'ONLINE',
  r: 'Tool Router — 250+ APIs',
  tier: 'ORCHESTRATION',
  id: '22',
  desc: 'Routes any task to 250+ external tools: Gmail, Stripe, Slack, GitHub.'
}, {
  n: 'GRAPHIFY',
  c: '#FFD700',
  s: 'ONLINE',
  r: 'Knowledge Graph',
  tier: 'ORCHESTRATION',
  id: '23',
  desc: 'Maps all codebase files, relationships, and dependencies.'
}, {
  n: 'CLAW',
  c: '#C084FC',
  s: 'ONLINE',
  r: 'Ultra Agent Power',
  tier: 'ORCHESTRATION',
  id: '24',
  desc: 'Enhanced coding, large codebase handling, complex multi-file ops.'
}, {
  n: 'CODEREV',
  c: '#22D3EE',
  s: 'ONLINE',
  r: 'Code Review & PR Quality',
  tier: 'SPECIALIST',
  id: '25',
  desc: 'Visual dependency analysis and code smell detection before every merge.'
}, {
  n: 'MARKETER',
  c: '#FF6B9D',
  s: 'ONLINE',
  r: 'Marketing Skills Agent',
  tier: 'SPECIALIST',
  id: '26',
  desc: 'Campaign strategy, copywriting frameworks, conversion optimisation.'
}, {
  n: 'ANIME',
  c: '#A78BFA',
  s: 'ONLINE',
  r: 'Animation Intelligence',
  tier: 'SPECIALIST',
  id: '27',
  desc: 'GSAP + Three.js r128 + Anime.js. 2D CSS, scroll sequences, 3D WebGL.'
}, {
  n: 'SECURITY',
  c: '#EF4444',
  s: 'ONLINE',
  r: 'Security Intelligence',
  tier: 'SPECIALIST',
  id: '28',
  desc: 'SAST scanning, dependency audit, secret detection on every deploy.'
}, {
  n: 'WSHOBSON',
  c: '#00C875',
  s: 'ONLINE',
  r: 'Specialist Agent Framework',
  tier: 'SPECIALIST',
  id: '29',
  desc: 'Colour-coded AGI Orchestration OS. Multi-agent coordination.'
}, {
  n: 'SNOWY',
  c: '#0AFFFF',
  s: 'ONLINE',
  r: 'Coworker Companion — White Tiger',
  tier: 'COMPANIONS',
  id: '16',
  desc: 'Tamagotchi-style AI PA. Sleeps idle, wakes when needed.'
}, {
  n: 'JAYDEN',
  c: '#9D4EDD',
  s: 'PLANNED',
  r: 'Student Companion',
  tier: 'COMPANIONS',
  id: '17',
  desc: 'Study habits, encouragement, learning milestones. In build.'
}, {
  n: 'MAYAH',
  c: '#FF6B9D',
  s: 'PLANNED',
  r: 'Student Companion',
  tier: 'COMPANIONS',
  id: '18',
  desc: 'Creative learning, emotional intelligence, habit formation. In build.'
}, {
  n: 'PICASSO',
  c: '#F97316',
  s: 'ONLINE',
  r: 'UI/UX Designer',
  tier: 'SPECIALIST',
  id: '30',
  desc: 'Principal Product Designer standard. Frictionless, conversion-optimised interfaces.'
}, {
  n: 'PIXEL',
  c: '#EC4899',
  s: 'ONLINE',
  r: 'Graphic Designer & Brand',
  tier: 'SPECIALIST',
  id: '31',
  desc: 'Creative Director standard. Brand identity, motion graphics, campaign assets.'
}];
var QUEUE_A = [{
  n: 'ATLAS',
  id: '004',
  c: '#5B6280',
  s: 'QUEUE',
  r: 'Career Intelligence',
  desc: 'Job Hunting and Professional Positioning. Spencer Stuart headhunter standard.'
}, {
  n: 'ENROL',
  id: '008',
  c: '#5B6280',
  s: 'QUEUE',
  r: 'Academy Enrolment',
  desc: 'Academy Enrolment Agent. Colour pending.'
}, {
  n: 'GRANT',
  id: '011',
  c: '#5B6280',
  s: 'QUEUE',
  r: 'Funding Intelligence',
  desc: 'Funding and Grant Scout. Colour pending.'
}];
var PLANNED_A = [{
  n: 'BRIDGE',
  id: '013',
  c: '#5B6280',
  s: 'PLANNED',
  r: 'Partnership',
  desc: 'Partnership and Outreach Intelligence. Colour pending.'
}, {
  n: 'GUARDIAN',
  id: '014',
  c: '#EF4444',
  s: 'PLANNED',
  r: 'Vault Security',
  desc: 'Founder Vault Security Agent. Alert Red.'
}];
var ROUTINES = [{
  name: 'Morning Brief',
  color: '#F43F5E',
  agent: 'PA',
  trigger: 'Weekdays 07:00 BST',
  desc: 'Complete daily intelligence briefing: calendar events, urgent emails, WorldMonitor signals, and LEDGER KPI snapshot.',
  connectors: 'Google Calendar, Gmail, WorldMonitor',
  lastRun: 'Today 07:00',
  next: 'Tomorrow 07:00',
  output: '3 meetings today. 7 emails (2 urgent). CII alert: Nigeria +2. MRR +1.2% vs yesterday.'
}, {
  name: 'Email Triage',
  color: '#FB923C',
  agent: 'ALL AGENTS',
  trigger: 'Daily 08:00 · 13:00 · 17:00 BST',
  desc: 'All-Agent Email Intelligence Loop. PA reads, categorises and prioritises all email. Discards junk. Empties spam and trash. RELAY drafts responses. LEDGER intercepts financial emails. SCOUT extracts market signals. GRID logs action items and blockers. SCRIBE captures institutional decisions. All agents retain full memory via autoDream across every session.',
  connectors: 'Gmail · All Agents Loop',
  lastRun: 'Today 08:03',
  next: 'Today 13:00',
  output: 'Inbox: 14 unread. Junk: 22 discarded. Spam: 8 emptied. Urgent (3): RYD client reply, VANTAGE invoice, referral intro. Responses drafted by RELAY. LEDGER flagged 1 overdue invoice. SCOUT flagged 1 competitor signal in newsletter.'
}, {
  name: 'System Health',
  color: '#84CC16',
  agent: 'PROBE',
  trigger: 'Daily 13:00 BST',
  desc: 'Health check across all connected monitoring services. Reports active incidents, errors, performance anomalies.',
  connectors: 'PagerDuty, Datadog, Sentry, Supabase',
  lastRun: 'Today 13:00',
  next: 'Tomorrow 13:00',
  output: 'All systems nominal. Supabase p95 latency: 142ms. No active incidents.'
}, {
  name: 'Issue Triage',
  color: '#6080E0',
  agent: 'GRID',
  trigger: 'Weekdays 16:30 BST',
  desc: 'Reviews new issues across trackers. Categorises and prioritises. Flags duplicates.',
  connectors: 'Linear, GitHub',
  lastRun: 'Today 16:30',
  next: 'Tomorrow 16:30',
  output: '4 new issues: 1 Critical (API timeout — LEDGER connector), 2 High, 1 Medium. NEXUS assigned.'
}, {
  name: 'CII World Scan',
  color: '#22c55e',
  agent: 'SCOUT',
  trigger: 'Weekdays 10:30 BST',
  desc: 'Pulls Country Instability Index across 24 countries from WorldMonitor. Flags geopolitical risks.',
  connectors: 'WorldMonitor, SIGNAL',
  lastRun: 'Today 10:30',
  next: 'Tomorrow 10:30',
  output: 'UK: Stable. Nigeria: +2 risk (currency pressure). Watch GBP/NGN impact on C&C import costs.'
}, {
  name: 'Content Batch',
  color: '#A78BFA',
  agent: 'PULSE',
  trigger: 'Every Monday 09:00',
  desc: 'Generates weekly content: LinkedIn posts, Instagram captions, TikTok scripts, email newsletter, carousel.',
  connectors: 'Buffer, Hailuo AI, Replicate, Supabase',
  lastRun: 'Mon 09:00',
  next: 'Next Monday 09:00',
  output: '7 assets queued. Top predicted performer: TikTok — LEDGER explains cash flow in 60 seconds.'
}, {
  name: 'Financial Snapshot',
  color: '#FBBF24',
  agent: 'LEDGER',
  trigger: 'Weekdays 08:00 BST',
  desc: 'Pulls real-time P&L, cash position, 30-day forecast. Flags anomalies and deadlines.',
  connectors: 'Xero, Stripe, Supabase',
  lastRun: 'Today 08:00',
  next: 'Tomorrow 08:00',
  output: 'MRR: £47.2k (+1.2% WoW). Cash: £83k. Warning: VAT return due in 14 days. 3 invoices overdue.'
}, {
  name: 'PR Digest',
  color: '#5EEAD4',
  agent: 'NEXUS',
  trigger: 'Weekdays 19:00 BST',
  desc: 'Overview of open PRs: review status, stale reviews, merge conflicts. Flags PROBE security warnings.',
  connectors: 'GitHub, Supabase',
  lastRun: 'Today 19:00',
  next: 'Tomorrow 19:00',
  output: '6 open PRs. 1 stale (4d, no review — PROBE flagged XSS risk). 2 ready to merge.'
}];
var SKILLS = [{
  n: 'ultraplan',
  t: 'Planning',
  d: 'Today',
  desc: 'Cloud Container Runtime (CCR) — 30-min Opus 4.6 planning with 3 parallel explorer agents + critic synthesis. Interactive browser plan review before execution.',
  cmd: '/ultraplan',
  color: '#556970',
  active: true
}, {
  n: 'powerup',
  t: 'Learning',
  d: 'Today',
  desc: 'Interactive learning system for Claude Code + PhoennixAI workflows. Covers KAIROS, MCP, subagents, SKILL.md, plan mode. Invokes when: teach me, walk me through, train me on.',
  cmd: '/powerup',
  color: '#ABA944',
  active: true
}, {
  n: 'insight',
  t: 'Analytics',
  d: 'Today',
  desc: 'Analyses last 30 days of Claude Code usage. HTML report at ~/.claude/usage-data/report.html. Surfaces workflow patterns, recurring mistakes, productivity gaps.',
  cmd: '/insight',
  color: '#4682B4',
  active: true
}, {
  n: 'frontend-design',
  t: 'Design',
  d: 'Today',
  desc: 'Production-grade UI. Distinctive, polished. CSS variables, design tokens, component patterns. Avoids generic AI aesthetics. Use for any web component, page, app, or artifact.',
  cmd: '/frontend-design',
  color: '#F97316',
  active: true
}, {
  n: 'tailwind-design-system',
  t: 'Design',
  d: 'Today',
  desc: 'Scalable design systems with Tailwind CSS v4. Design tokens, component libraries, responsive patterns. For component libraries and standardising UI.',
  cmd: '/tailwind-design-system',
  color: '#EC4899',
  active: true
}, {
  n: 'gsap',
  t: 'Animation',
  d: 'Today',
  desc: 'Professional web animations. GSAP timelines, ScrollTrigger, stagger, transforms. Smooth motion, performance-optimised. HTML/CSS/JS/React animations.',
  cmd: '/gsap',
  color: '#84CC16',
  active: true
}, {
  n: 'canvas-design',
  t: 'Art',
  d: 'Today',
  desc: 'Beautiful visual art as .png and .pdf. Posters, art, static visual designs. Original work — never copies existing artists.',
  cmd: '/canvas-design',
  color: '#C49A6C',
  active: true
}, {
  n: 'algorithmic-art',
  t: 'Art',
  d: 'Today',
  desc: 'Algorithmic art using p5.js with seeded randomness. Flow fields, particle systems, generative art. Creates original work with interactive parameter exploration.',
  cmd: '/algorithmic-art',
  color: '#A78BFA',
  active: true
}, {
  n: 'theme-factory',
  t: 'Theming',
  d: 'Today',
  desc: '10 pre-set themes (colors + fonts) for any artifact. Slides, docs, reports, HTML pages. Generate new themes on-the-fly and apply to any artifact.',
  cmd: '/theme-factory',
  color: '#FFB830',
  active: true
}, {
  n: 'nextjs-app-router-patterns',
  t: 'Framework',
  d: 'Today',
  desc: 'Next.js 14+ App Router. Server Components, streaming, parallel routes, data fetching. SSR/SSG, React Server Components.',
  cmd: '/nextjs-app-router-patterns',
  color: '#000000',
  active: true
}, {
  n: 'react-state-management',
  t: 'Framework',
  d: 'Today',
  desc: 'Redux Toolkit, Zustand, Jotai, React Query. Global state, server state. Choosing between state management solutions.',
  cmd: '/react-state-management',
  color: '#61DAFB',
  active: true
}, {
  n: 'web-artifacts-builder',
  t: 'Build',
  d: 'Today',
  desc: 'Multi-component claude.ai HTML artifacts with React, Tailwind, shadcn/ui. Complex state management and routing. For sophisticated multi-file artifacts.',
  cmd: '/web-artifacts-builder',
  color: '#7ECEC4',
  active: true
}, {
  n: 'widget-generator',
  t: 'Build',
  d: 'Today',
  desc: 'Customisable widget plugins for the prompts.chat feed system. Generate widget components from specification.',
  cmd: '/widget-generator',
  color: '#FB923C',
  active: true
}, {
  n: 'mcp-builder',
  t: 'MCP',
  d: 'Today',
  desc: 'High-quality MCP servers in Python (FastMCP) or Node/TypeScript. Integrate any external API or service. Connect tools to PhoennixAI agents via Model Context Protocol.',
  cmd: '/mcp-builder',
  color: '#00FF88',
  active: true
}, {
  n: 'phoennixai-master-registry',
  t: 'Registry',
  d: 'Today',
  desc: 'Master tool registry for all 31 PhoennixAI agents. Skills auto-activate when relevant. Governs the full agent tool ecosystem.',
  cmd: '/phoennixai-master-registry',
  color: '#556970',
  active: true
}, {
  n: 'creative-design-agency',
  t: 'Creative',
  d: 'Today',
  desc: 'PICASSO + PIXEL design standards. Hailuo AI tutorial. Social media posts, UI/UX, graphic design. Creative tools: Replicate, Hailuo, CivitAI, Chroma1-HD.',
  cmd: '/creative-design-agency',
  color: '#EC4899',
  active: true
}];
var CONNECTORS = [{
  n: 'GitHub',
  logo: React.createElement('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    width: 18,
    height: 18
  }, React.createElement('path', {
    d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
  })),
  bgc: '#1A1A1A',
  fgc: '#ffffff',
  ico: 'G',
  desc: 'Connect GitHub to give all agents access to your repositories.',
  features: ['Attach files from repos in any agent conversation.', 'Sync repository files into Projects for permanent codebase context.', 'NEXUS selects repos, browses branches, and tracks PRs.', 'PROBE monitors PRs autonomously via KAIROS daemon.'],
  connected: true,
  connectedNote: 'Via GitHub OAuth in your Vercel project'
}, {
  n: 'Google Drive',
  logo: React.createElement('svg', {
    viewBox: '0 0 87.3 78',
    width: 18,
    height: 18
  }, React.createElement('path', {
    d: 'M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z',
    fill: '#0066da'
  }), React.createElement('path', {
    d: 'M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.4C.4 49.8 0 51.35 0 52.9h27.5z',
    fill: '#00ac47'
  }), React.createElement('path', {
    d: 'M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H60l5.85 11.5z',
    fill: '#ea4335'
  }), React.createElement('path', {
    d: 'M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.1.45-4.5 1.2z',
    fill: '#00832d'
  }), React.createElement('path', {
    d: 'M60.1 52.9H27.5L13.75 76.7c1.35.8 2.9 1.3 4.5 1.3h50.8c1.6 0 3.1-.5 4.5-1.3z',
    fill: '#2684fc'
  }), React.createElement('path', {
    d: 'M73.4 26.45l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.25L43.65 25l16.45 27.9H87.3c0-1.55-.4-3.1-1.2-4.5z',
    fill: '#ffba00'
  })),
  bgc: '#ffffff',
  fgc: 'inherit',
  ico: 'D',
  desc: 'Connect Google Drive to let agents access, read, and summarise your files.',
  features: ['Attach Drive files in any agent conversation.', 'SCRIBE reads docs and ingests into Document Hub.', 'PA accesses your meeting notes and action items.', 'SAGE reads research files and adds to knowledge base.'],
  connected: false
}, {
  n: 'Supabase',
  logo: React.createElement('svg', {
    viewBox: '0 0 109 113',
    width: 18,
    height: 18
  }, React.createElement('path', {
    d: 'M63.7 110.2c-2.8 3.5-8.6 1.6-8.7-2.9l-1.2-71.3h47.8c8.7 0 13.5 10.1 8 16.5L63.7 110.2z',
    fill: '#3ECF8E'
  }), React.createElement('path', {
    d: 'M45.3 2.8C48.1-.7 53.9 1.2 54 5.7l.7 71.3H7.6c-8.7 0-13.5-10.1-8-16.5L45.3 2.8z',
    fill: '#3ECF8E',
    opacity: '0.7'
  })),
  bgc: '#1C1C1C',
  fgc: '#3ECF8E',
  ico: 'S',
  desc: 'Connect Supabase for real-time database sync across all agents.',
  features: ['Agent memory persisted in PostgreSQL.', 'pgvector for SAGE research embeddings.', 'Realtime: KAIROS → Mission Control dashboard sync.', 'Edge Functions: webhook triggers for Routine execution.'],
  connected: true,
  connectedNote: 'URL + key configured in API Config'
}, {
  n: 'Vercel',
  logo: React.createElement('svg', {
    viewBox: '0 0 116 100',
    width: 18,
    height: 18,
    fill: 'currentColor'
  }, React.createElement('path', {
    d: 'M57.5 0L115 100H0L57.5 0z'
  })),
  bgc: '#000000',
  fgc: '#ffffff',
  ico: 'V',
  desc: 'Connect Vercel for one-click deployments from NEXUS.',
  features: ['NEXUS deploys directly from Agent Chat.', 'PROBE runs post-deploy smoke tests automatically.', 'PR previews visible in Code view.', 'Deployment logs stream to KAIROS audit trail.'],
  connected: true,
  connectedNote: 'phoennixai-api endpoint configured'
}, {
  n: 'Gmail',
  ico: 'M',
  bgc: '#EA4335',
  fgc: '#fff',
  logo: React.createElement('svg', {
    viewBox: '0 0 24 24',
    width: 18,
    height: 18
  }, React.createElement('path', {
    fill: '#EA4335',
    d: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'
  })),
  desc: 'Enable the All-Agent Email Intelligence Loop. PA reads, categorises, and acts on every email.',
  features: ['PA reads and prioritises all inbound email.', 'RELAY drafts responses automatically.', 'LEDGER flags financial emails.', 'SCOUT extracts market signals from newsletters.', 'Junk discarded, spam emptied — no human action needed.'],
  connected: false,
  comingSoon: false,
  oauthUrl: 'https://accounts.google.com/oauth/gmail'
}, {
  n: 'Stripe',
  ico: 'S',
  bgc: '#635BFF',
  fgc: '#fff',
  logo: React.createElement('svg', {
    viewBox: '0 0 24 24',
    width: 18,
    height: 18
  }, React.createElement('path', {
    fill: '#fff',
    d: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z'
  })),
  desc: 'LEDGER gets live MRR, revenue per client, and payment alerts the moment money moves.',
  features: ['MRR updated automatically on every payment.', 'RELAY triggered on new client subscription.', 'LEDGER flags failed payments and churn risk.', 'Revenue dashboard always current — no manual updates.'],
  connected: false,
  comingSoon: false,
  oauthUrl: 'https://dashboard.stripe.com/oauth'
}, {
  n: 'LinkedIn',
  ico: 'in',
  bgc: '#0A66C2',
  fgc: '#fff',
  logo: React.createElement('svg', {
    viewBox: '0 0 24 24',
    width: 18,
    height: 18
  }, React.createElement('path', {
    fill: '#fff',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  })),
  desc: 'RELAY cold outreach, ECHO community engagement, PULSE content publishing — all automated.',
  features: ['RELAY sends personalised outreach to ICP prospects.', 'PULSE schedules and publishes content automatically.', 'ECHO manages comments, DMs, and connection requests.', 'Lead data flows into SCOUT intelligence reports.'],
  connected: false,
  comingSoon: false,
  oauthUrl: 'https://www.linkedin.com/oauth'
}, {
  n: 'Instagram',
  ico: 'IG',
  bgc: '#E1306C',
  fgc: '#fff',
  logo: React.createElement('svg', {
    viewBox: '0 0 24 24',
    width: 18,
    height: 18
  }, React.createElement('path', {
    fill: '#fff',
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
  })),
  desc: 'PULSE publishes content, PIXEL delivers brand assets, ECHO manages DMs and community.',
  features: ['PULSE schedules Reels, Stories, and posts automatically.', 'PIXEL creates platform-optimised visual assets.', 'ECHO manages DMs and comment engagement.', 'Analytics feed into SAGE monthly reports.'],
  connected: false,
  comingSoon: false,
  oauthUrl: 'https://api.instagram.com/oauth'
}, {
  n: 'X (Twitter)',
  ico: 'X',
  bgc: '#000000',
  fgc: '#fff',
  logo: React.createElement('svg', {
    viewBox: '0 0 24 24',
    width: 18,
    height: 18
  }, React.createElement('path', {
    fill: '#fff',
    d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z'
  })),
  desc: 'PULSE publishes threads, SCOUT monitors mentions and competitor signals, ECHO engages.',
  features: ['PULSE publishes scheduled threads and posts.', 'SCOUT monitors keywords, mentions, and competitor activity.', 'ECHO auto-responds to DMs and mentions.', 'RELAY uses X for warm outreach sequences.'],
  connected: false,
  comingSoon: false,
  oauthUrl: 'https://twitter.com/i/oauth2/authorize'
}];
var MANUAL = [{
  t: 'What is PhoennixAI?',
  body: 'PhoennixAI is your AI-powered business team. Think of it as 22 expert employees who work around the clock, never forget anything, and cost a fraction of real hires.\n\nEvery agent is a named specialist. LEDGER handles your finances like a Goldman Sachs banker. PULSE creates your content like a world-class brand strategist. NEXUS builds your software like a senior engineer at a Tier 1 tech company.\n\nYou do not need to be technical to use this platform. Describe what you need in plain language and the agents handle the rest.',
  key: 'PhoennixAI gives every founder access to the same quality of expert support that the biggest companies in the world rely on — at a fraction of the cost.'
}, {
  t: 'How to talk to your agents',
  body: 'Click Agent Chat in the left menu. Pick an agent from the pills at the top. Type your question or task in the input box at the bottom. Press Send.\n\nEach agent responds from their area of expertise. Ask LEDGER about money. Ask PULSE about content. Ask NEXUS to review or write code. Ask CLAUDE when you are not sure who to ask.\n\nHover over any message to copy it, edit it, or request a fresh response.',
  key: 'Describe the task in plain language. No special commands needed. The agent handles everything from there.'
}, {
  t: 'What are Routines?',
  body: 'Routines are automated tasks that run on a schedule — like setting an alarm that does work for you.\n\nEvery weekday at 07:00, the Morning Brief routine automatically reads your calendar, checks your emails, scans world news signals, and delivers a summary before your day begins. You did not press anything. It just happened.\n\nClick Routines in the left menu, then the plus button to create a new one. Name it, describe what it should do, choose when it runs, and click Create.',
  key: 'All 8 active routines run automatically without any manual action from you.'
}, {
  t: 'Connecting your tools',
  body: 'PhoennixAI connects to the tools you already use via Connectors: GitHub, Google Drive, Supabase, and Vercel are all active.\n\nWhen connected, agents can read from them, write to them, and act on information they contain. PROBE can find a bug in GitHub and automatically create a pull request to fix it — without you asking.\n\nManage connectors in Customize in the left menu.',
  key: 'The more connectors you add, the more your agents can do automatically.'
}, {
  t: 'Getting the most from PhoennixAI',
  body: 'Be specific. Instead of "help me with marketing" say "PULSE, write a LinkedIn post about our new FinOS product launch, targeting CFOs at SMEs under 50 people, tone: confident and data-led."\n\nTurn repeating tasks into Routines. Anything you do more than once a week should become a routine.\n\nLet CLAUDE route complex work. When you are not sure which agent to use, ask CLAUDE. It knows all 22 agents and their full capabilities.',
  key: 'The agents are built to be your team. The more context you give them, the more valuable they become over time.'
}];

/* ── UTILS ── */
var toast = function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._x);
  t._x = setTimeout(function () {
    return t.style.display = 'none';
  }, 2700);
};
var now = function now() {
  var d = new Date();
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
};

/* ── PICASSO PARTICLES ── */
var initCanvas = function initCanvas() {
  var cv = document.getElementById('bgCanvas');
  var ctx = cv.getContext('2d');
  var W,
    H,
    pts = [],
    frame = 0;
  var resize = function resize() {
    W = cv.width = window.innerWidth;
    H = cv.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);
  for (var i = 0; i < 70; i++) pts.push({
    x: Math.random() * 1920,
    y: Math.random() * 1080,
    vx: (Math.random() - .5) * .25,
    vy: (Math.random() - .5) * .25,
    r: Math.random() * 1.4 + .3,
    hue: 90 + Math.random() * 50,
    life: Math.random() * Math.PI * 2
  });
  var _tick = function tick() {
    ctx.clearRect(0, 0, W, H);
    frame++;
    pts.forEach(function (p, i) {
      p.life += .007;
      p.x += p.vx + Math.sin(p.life * .6) * .14;
      p.y += p.vy + Math.cos(p.life * .4) * .11;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      var a = (Math.sin(p.life) * .5 + .5) * .3;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'hsl(' + p.hue + ',75%,72%)';
      ctx.globalAlpha = a;
      ctx.fill();
      for (var j = i + 1; j < pts.length; j++) {
        var q = pts[j],
          dx = p.x - q.x,
          dy = p.y - q.y,
          d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'hsl(100,35%,55%)';
          ctx.globalAlpha = (1 - d / 110) * .07;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(_tick);
  };
  _tick();
};

/* ── LOGO ── */
var Logo = function Logo(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 72 : _ref$size;
  return /*#__PURE__*/React.createElement("div", {
    className: "logo-ring",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG,
    alt: "PhoennixAI",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%'
    }
  }));
};

/* ── TOPBAR ── */
var Topbar = function Topbar(_ref2) {
  var title = _ref2.title,
    onOpenPreview = _ref2.onOpenPreview,
    previewOpen = _ref2.previewOpen,
    previewContent = _ref2.previewContent;
  return /*#__PURE__*/React.createElement("div", {
    id: "topbar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-badge badge-g"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse-dot",
    style: {
      width: 5,
      height: 5
    }
  }), "31 Agents Online"), /*#__PURE__*/React.createElement("span", {
    className: "pill-badge badge-p"
  }, "AGI Standard v2.0"), onOpenPreview && /*#__PURE__*/React.createElement("button", {
    onClick: onOpenPreview,
    title: previewOpen ? 'Close workspace' : 'Open Dynamic Workspace',
    style: {
      background: 'none',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 7,
      padding: '3px 8px',
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'Fira Code,monospace',
      color: previewOpen ? 'var(--primary)' : 'var(--t3)',
      transition: 'all .15s',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "10",
    height: "10",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 1v10"
  })), previewOpen ? 'Close' : 'Workspace', previewContent && !previewOpen && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#ABA944',
      color: '#fff',
      fontSize: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700
    }
  }, "1"))));
};

/* ── LOGIN ── */
var Login = function Login(_ref3) {
  var onLogin = _ref3.onLogin;
  var ref = useRef();
  var _useState = useState('valerie@phoennixai.com'),
    _useState2 = _slicedToArray(_useState, 2),
    em = _useState2[0],
    setEm = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    pw = _useState4[0],
    setPw = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    hovered = _useState6[0],
    setHovered = _useState6[1];
  useEffect(function () {
    g.fromTo(ref.current, {
      y: 30,
      opacity: 0,
      scale: .97
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: .85,
      ease: 'power3.out'
    });
    g.from('.login-el', {
      y: 16,
      opacity: 0,
      stagger: .08,
      duration: .65,
      ease: 'power2.out',
      delay: .3
    });
  }, []);
  var go = function go() {
    return onLogin(em || 'valerie@phoennixai.com');
  };
  var Sep = function Sep() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        margin: '.875rem 0',
        color: '#37474F',
        fontSize: 12.5,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'rgba(55,71,79,.3)'
      }
    }), "or", /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'rgba(55,71,79,.3)'
      }
    }));
  };
  var GoogleLogo = function GoogleLogo() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#4285F4",
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#34A853",
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBC05",
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA4335",
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    }));
  };
  var GitHubLogo = function GitHubLogo() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "#1F2426"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: '100%',
      maxWidth: 400,
      margin: '1rem',
      padding: '2.5rem 2.25rem',
      background: '#fff',
      border: '1.5px solid rgba(55,71,79,.35)',
      borderRadius: 16,
      boxShadow: '0 8px 32px rgba(38,50,56,.18), 0 32px 80px rgba(38,50,56,.22)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-el",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 72
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.3px',
      color: '#0a0f10'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "Phoenn"), "ixAI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: '#1F2B30',
      textAlign: 'center',
      lineHeight: 1.6,
      fontWeight: 500
    }
  }, "AGI-level agent orchestration platform", /*#__PURE__*/React.createElement("br", null), "for founders who build at scale")), /*#__PURE__*/React.createElement("div", {
    className: "login-el",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: '1rem'
    }
  }, [['google', 'Google', GoogleLogo], ['github', 'GitHub', GitHubLogo]].map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 3),
      k = _ref5[0],
      lbl = _ref5[1],
      LogoComp = _ref5[2];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: go,
      onMouseEnter: function onMouseEnter() {
        return setHovered(k);
      },
      onMouseLeave: function onMouseLeave() {
        return setHovered(null);
      },
      style: {
        width: '100%',
        background: hovered === k ? 'rgba(55,71,79,.07)' : 'rgba(245,246,247,1)',
        border: '1.5px solid ' + (hovered === k ? 'rgba(38,50,56,.55)' : 'rgba(55,71,79,.32)'),
        borderRadius: 10,
        padding: '.75rem 1rem',
        color: '#0F1618',
        fontSize: 13.5,
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        fontFamily: 'Source Serif 4,serif',
        transition: 'all .18s',
        transform: hovered === k ? 'translateY(-1px)' : 'none',
        boxShadow: hovered === k ? '0 6px 20px rgba(38,50,56,.18)' : '0 1px 3px rgba(38,50,56,.08)'
      }
    }, /*#__PURE__*/React.createElement(LogoComp, null), " Continue with ", lbl);
  })), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement("div", {
    className: "login-el",
    style: {
      marginBottom: '.75rem'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: '#1F2B30',
      display: 'block',
      marginBottom: 5
    }
  }, "Email address"), /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "email",
    value: em,
    onChange: function onChange(e) {
      return setEm(e.target.value);
    },
    placeholder: "valerie@phoennixai.com",
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && go();
    },
    style: {
      color: '#0a0f10',
      fontWeight: 500
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "login-el",
    style: {
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: '#1F2B30',
      display: 'block',
      marginBottom: 5
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "password",
    value: pw,
    onChange: function onChange(e) {
      return setPw(e.target.value);
    },
    placeholder: "Enter your password",
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && go();
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: go,
    className: "btn-primary login-el",
    style: {
      width: '100%',
      borderRadius: 10,
      padding: '.8rem',
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: '.01em'
    }
  }, "Sign in to PhoennixAI"), /*#__PURE__*/React.createElement("p", {
    className: "login-el",
    style: {
      fontSize: 12.5,
      color: '#37474F',
      textAlign: 'center',
      marginTop: '.875rem',
      fontWeight: 500
    }
  }, "No account? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#263238',
      cursor: 'pointer',
      fontWeight: 700
    },
    onClick: function onClick() {
      return toast('Contact support@phoennixai.com');
    }
  }, "Create one free"))));
};

/* ── SIDEBAR ── */
var Sidebar = function Sidebar(_ref6) {
  var view = _ref6.view,
    setView = _ref6.setView,
    user = _ref6.user,
    sidebarOpen = _ref6.sidebarOpen,
    setSidebarOpen = _ref6.setSidebarOpen;
  var nav = [['home', '⊕', 'New chat'], ['search', '◎', 'Search'], ['agents', '◉', 'Agents'], ['chat', '◎', 'Agent Chat'], ['routines', '⚡', 'Routines'], ['code', '⧉', 'Code'], ['design', '◈', 'Design'], ['client', '▣', 'Client Data'], ['projects', '◫', 'Projects'], ['desktop', '⊙', 'Desktop App'], ['customize', '⊛', 'Customize'], ['manual', '?', 'User Manual']];
  return /*#__PURE__*/React.createElement("div", {
    id: "sidebar",
    style: {
      width: sidebarOpen ? 220 : 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: sidebarOpen ? '.875rem .875rem .625rem' : '.75rem 0',
      borderBottom: '.5px solid rgba(85,105,112,.12)',
      display: 'flex',
      alignItems: 'center',
      gap: sidebarOpen ? 8 : 0,
      cursor: 'pointer',
      justifyContent: sidebarOpen ? 'flex-start' : 'center',
      minHeight: 52
    },
    onClick: function onClick() {
      return setView('home');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28
  }), sidebarOpen && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: 'Agdasima,sans-serif'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "Phoenn"), "ixAI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--t3)'
    }
  }, "Orchestration Platform"))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSidebarOpen(function (o) {
        return !o;
      });
    },
    style: {
      margin: '.25rem auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: sidebarOpen ? 'calc(100% - 1.25rem)' : '32px',
      height: 28,
      padding: '4px',
      background: 'none',
      border: '.5px solid rgba(85,105,112,.15)',
      borderRadius: 7,
      cursor: 'pointer',
      color: 'var(--t3)',
      transition: 'all .2s',
      flexShrink: 0
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.background = 'rgba(85,105,112,.06)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.background = 'none';
    }
  }, sidebarOpen ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 2L4 7l5 5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontFamily: 'Fira Code,monospace',
      marginLeft: 4,
      color: 'var(--t3)'
    }
  }, "Collapse")) : /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 2l5 5-5 5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '.375rem .375rem',
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, nav.map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 3),
      v = _ref8[0],
      ic = _ref8[1],
      lbl = _ref8[2];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setView(v);
      },
      title: !sidebarOpen ? lbl : undefined,
      className: 'sb-item ' + (view === v ? 'active' : ''),
      style: {
        justifyContent: sidebarOpen ? 'flex-start' : 'center',
        padding: sidebarOpen ? '7px 10px' : '8px 0',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sb-icon",
      style: {
        flexShrink: 0,
        opacity: view === v ? 1 : .65,
        fontSize: 14,
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: sidebarOpen ? 16 : 20
      }
    }, ic), sidebarOpen && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, lbl), sidebarOpen && v === 'search' && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        color: 'var(--t3)',
        background: 'rgba(85,105,112,.08)',
        padding: '1px 5px',
        borderRadius: 3,
        flexShrink: 0
      }
    }, "\u2318K"), sidebarOpen && v === 'customize' && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        color: 'var(--t3)',
        background: 'rgba(85,105,112,.08)',
        padding: '1px 5px',
        borderRadius: 3,
        flexShrink: 0
      }
    }, "\u2318/"), sidebarOpen && v === 'chat' && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        color: 'var(--t3)',
        background: 'rgba(85,105,112,.08)',
        padding: '1px 5px',
        borderRadius: 3,
        flexShrink: 0
      }
    }, "\u2318J"));
  }), sidebarOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: .5,
      background: 'rgba(85,105,112,.1)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      padding: '4px 10px'
    }
  }, "Recents"), ['LEDGER — Q2 cash flow', 'Morning Brief setup', 'FinOS dashboard build'].map(function (r) {
    return /*#__PURE__*/React.createElement("button", {
      key: r,
      onClick: function onClick() {
        return setView('chat');
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '.4rem .75rem',
        borderRadius: 8,
        fontSize: 12,
        color: 'var(--t3)',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        textAlign: 'left',
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
        transition: 'color .15s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.color = 'var(--t2)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.color = 'var(--t3)';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: .35
      }
    }, "\u25CE"), r);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '.5px solid rgba(85,105,112,.12)',
      padding: sidebarOpen ? '.625rem' : '.5rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: sidebarOpen ? 8 : 0,
      padding: sidebarOpen ? '.5rem .75rem' : '.25rem 0',
      borderRadius: 9,
      cursor: 'pointer',
      justifyContent: sidebarOpen ? 'flex-start' : 'center',
      transition: 'background .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.background = 'rgba(85,105,112,.04)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#556970,#3E4F55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700,
      color: '#fff',
      flexShrink: 0
    }
  }, user.charAt(0)), sidebarOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      color: 'var(--tx)'
    }
  }, user, " Wilcox"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--t3)'
    }
  }, "Pro plan")), sidebarOpen && /*#__PURE__*/React.createElement("div", {
    className: "pulse-dot",
    style: {
      flexShrink: 0
    }
  }))));
};

/* ── HOME — Founder's Command Deck ── */
var Home = function Home(_ref9) {
  var setView = _ref9.setView,
    setSA = _ref9.setSA;
  var hour = new Date().getHours();
  var greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    cmd = _useState8[0],
    setCmd = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    cmdFocus = _useState0[0],
    setCmdFocus = _useState0[1];
  useEffect(function () {
    g.from('.hcd', {
      y: 16,
      opacity: 0,
      stagger: .07,
      duration: .65,
      ease: 'power2.out'
    });
  }, []);
  var kpis = [{
    n: '29',
    l: 'Agents Online',
    c: '#556970',
    v: 'agents'
  }, {
    n: '8',
    l: 'Routines',
    c: '#ABA944',
    v: 'routines'
  }, {
    n: '24',
    l: 'Clients',
    c: '#2d7a4f',
    v: 'client'
  }, {
    n: '£47k',
    l: 'MRR',
    c: '#ABA944',
    v: 'client'
  }];
  var missions = [{
    title: 'Strategy & Intelligence',
    desc: 'CLAUDE synthesises across all domains. Strategic brief, decision evaluation, or next-move planning.',
    agent: 'CLAUDE',
    color: '#FF7048',
    bg: 'rgba(255,112,72,.05)',
    border: 'rgba(255,112,72,.14)',
    action: 'STRATEGISE',
    icon: '⊕'
  }, {
    title: 'Build & Engineer',
    desc: 'NEXUS writes production-ready code. PROBE reviews. FORGE scopes. Nothing ships without sign-off.',
    agent: 'NEXUS',
    color: '#5EEAD4',
    bg: 'rgba(94,234,212,.05)',
    border: 'rgba(94,234,212,.14)',
    action: 'BUILD',
    icon: '⧉'
  }, {
    title: 'Content & Revenue',
    desc: 'PULSE creates on-brand content. RELAY engineers conversion. ECHO builds community relationships.',
    agent: 'PULSE',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,.05)',
    border: 'rgba(167,139,250,.14)',
    action: 'CREATE',
    icon: '◈'
  }, {
    title: 'Finance & Operations',
    desc: 'LEDGER delivers precision intelligence. GRID governs delivery. PA manages your executive day.',
    agent: 'LEDGER',
    color: '#FBBF24',
    bg: 'rgba(251,191,36,.05)',
    border: 'rgba(251,191,36,.14)',
    action: 'OPERATE',
    icon: '▣'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '2rem 2rem 7rem',
      maxWidth: 900,
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hcd",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem',
      paddingBottom: '1.25rem',
      borderBottom: '.5px solid rgba(85,105,112,.12)',
      flexWrap: 'wrap',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: 'Fira Code,monospace',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      marginBottom: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#22c55e',
      display: 'inline-block',
      animation: 'pdot 2.5s ease-in-out infinite'
    }
  }), "System clear \xB7 KAIROS active \xB7 ", new Date().toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 'clamp(22px,3vw,32px)',
      letterSpacing: '1px',
      color: 'var(--tx)',
      fontWeight: 700,
      lineHeight: 1.1
    }
  }, greeting, ", ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "Valerie"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '.625rem',
      flexWrap: 'wrap'
    }
  }, kpis.map(function (k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k.l,
      onClick: function onClick() {
        return setView(k.v);
      },
      style: {
        textAlign: 'right',
        cursor: 'pointer',
        padding: '.5rem .875rem',
        borderRadius: 9,
        border: '.5px solid rgba(85,105,112,.12)',
        background: 'rgba(255,255,255,.8)',
        transition: 'all .15s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.background = 'rgba(255,255,255,.98)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.background = 'rgba(255,255,255,.8)';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: k.c,
        fontFamily: 'Agdasima,sans-serif',
        lineHeight: 1
      }
    }, k.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace',
        letterSpacing: '.5px',
        marginTop: 1
      }
    }, k.l));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hcd",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    }
  }, missions.map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.title,
      onClick: function onClick() {
        setSA(AGENTS.findIndex(function (a) {
          return a.n === m.agent;
        }));
        setView('chat');
      },
      style: {
        background: m.bg,
        border: '1px solid ' + m.border,
        borderRadius: 14,
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'all .22s',
        position: 'relative',
        overflow: 'hidden'
      },
      onMouseOver: function onMouseOver(e) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(85,105,112,.1)';
        e.currentTarget.style.borderColor = m.color + '44';
      },
      onMouseOut: function onMouseOut(e) {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = m.border;
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '1.25rem',
        right: '1.25rem',
        fontSize: 24,
        opacity: .08
      }
    }, m.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: '.75rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: m.color,
        boxShadow: '0 0 8px ' + m.color + '70'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9.5,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: m.color,
        fontWeight: 600
      }
    }, m.agent)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Agdasima,sans-serif',
        fontSize: 17,
        letterSpacing: '.5px',
        color: 'var(--tx)',
        fontWeight: 700,
        marginBottom: 8
      }
    }, m.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--t2)',
        lineHeight: 1.65,
        marginBottom: '1.25rem'
      }
    }, m.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'Fira Code,monospace',
        fontSize: 10.5,
        color: m.color,
        fontWeight: 700
      }
    }, m.action, " ", /*#__PURE__*/React.createElement("svg", {
      width: "11",
      height: "11",
      viewBox: "0 0 12 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 6h8M6 2l4 4-4 4",
      strokeLinecap: "round"
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "hcd",
    style: {
      background: 'rgba(255,255,255,.7)',
      border: '.5px solid rgba(85,105,112,.12)',
      borderRadius: 12,
      padding: '1rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 9,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--t3)'
    }
  }, "Today's Brief \u2014 PA \xB7 07:00"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('routines');
    },
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 10,
      color: 'var(--primary)',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "View routines \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
      gap: '.5rem'
    }
  }, [{
    lbl: '3 meetings today',
    sub: 'Next: 14:00 client call'
  }, {
    lbl: '7 emails, 2 urgent',
    sub: 'RYD client · VANTAGE invoice'
  }, {
    lbl: 'CII alert: Nigeria +2',
    sub: 'Watch GBP/NGN for C&C'
  }, {
    lbl: 'MRR +1.2% WoW',
    sub: '£47k · tracking to £856K'
  }].map(function (i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i.lbl,
      style: {
        padding: '.5rem .75rem',
        background: 'rgba(255,255,255,.8)',
        borderRadius: 7,
        border: '.5px solid rgba(85,105,112,.1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--tx)',
        marginBottom: 1
      }
    }, i.lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, i.sub));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(600px,calc(100vw - 4rem))',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.97)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(85,105,112,.2)',
      borderRadius: 12,
      boxShadow: cmdFocus ? '0 12px 50px rgba(85,105,112,.18)' : '0 6px 32px rgba(85,105,112,.12)',
      transition: 'box-shadow .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '.75rem 1rem'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "var(--t3)",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10l2 2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", {
    value: cmd,
    onChange: function onChange(e) {
      return setCmd(e.target.value);
    },
    onFocus: function onFocus() {
      return setCmdFocus(true);
    },
    onBlur: function onBlur() {
      return setCmdFocus(false);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter' && cmd.trim()) {
        setView('chat');
      }
    },
    placeholder: "Ask any agent, describe a task, or type a command...",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: 14,
      color: 'var(--tx)',
      background: 'transparent',
      fontFamily: 'Source Serif 4,serif'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center',
      flexShrink: 0
    }
  }, ['CLAUDE', 'PA', 'NEXUS'].map(function (n) {
    var ag = AGENTS.find(function (a) {
      return a.n === n;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      onClick: function onClick() {
        setSA(AGENTS.findIndex(function (a) {
          return a.n === n;
        }));
        setView('chat');
      },
      title: n,
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: (ag === null || ag === void 0 ? void 0 : ag.c) + '20',
        border: '.5px solid ' + (ag === null || ag === void 0 ? void 0 : ag.c) + '40',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 7,
        fontWeight: 700,
        fontFamily: 'Fira Code,monospace',
        color: ag === null || ag === void 0 ? void 0 : ag.c,
        transition: 'all .15s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.background = (ag === null || ag === void 0 ? void 0 : ag.c) + '35';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.background = (ag === null || ag === void 0 ? void 0 : ag.c) + '20';
      }
    }, n.slice(0, 2));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return cmd.trim() && setView('chat');
    },
    style: {
      background: 'var(--tx)',
      border: 'none',
      borderRadius: 7,
      padding: '4px 14px',
      color: '#fff',
      fontSize: 12.5,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'Source Serif 4,serif'
    }
  }, "Send"))))));
};

/* ── AGENTS ── */
var Agents = function Agents(_ref0) {
  var setView = _ref0.setView,
    setSA = _ref0.setSA;
  useEffect(function () {
    g.from('.aa', {
      y: 14,
      opacity: 0,
      stagger: .04,
      duration: .5,
      ease: 'power2.out'
    });
  }, []);
  var Row = function Row(_ref1) {
    var a = _ref1.a,
      pc = _ref1.pc,
      onClick = _ref1.onClick;
    return /*#__PURE__*/React.createElement("div", {
      className: "ag-row aa",
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: a.c,
        boxShadow: '0 0 8px ' + a.c + '90',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace',
        marginBottom: 1
      }
    }, a.id), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700
      }
    }, a.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--t2)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, a.desc)), /*#__PURE__*/React.createElement("span", {
      className: 'pill ' + pc
    }, a.s));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      marginBottom: '1rem',
      lineHeight: 1.6,
      padding: '1rem 1.5rem 0'
    }
  }, "31 agents across 5 tiers + 2 designer agents. Every agent ships with CV, JD, User Manual, Training Manual, and Performance Dashboard. Agents are hires, not tools."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 1.5rem 1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      color: 'var(--primary)'
    }
  }, "Core \u2014 Strategic Leadership (5)"), /*#__PURE__*/React.createElement("div", {
    className: "ag-grid"
  }, ALL29.filter(function (a) {
    return a.tier === 'CORE';
  }).map(function (a, i) {
    return /*#__PURE__*/React.createElement(Row, {
      key: a.n,
      a: a,
      pc: a.s === 'ONLINE' ? 'pill-on' : 'pill-sb',
      onClick: function onClick() {
        var idx = AGENTS.findIndex(function (ag) {
          return ag.n === a.n;
        });
        if (idx >= 0) {
          setSA(idx);
          setView('chat');
        } else toast(a.n + ' activating soon');
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      color: '#1E90FF'
    }
  }, "Intelligence \u2014 Finance, Comms, Research (5)"), /*#__PURE__*/React.createElement("div", {
    className: "ag-grid"
  }, ALL29.filter(function (a) {
    return a.tier === 'INTELLIGENCE';
  }).map(function (a, i) {
    return /*#__PURE__*/React.createElement(Row, {
      key: a.n,
      a: a,
      pc: a.s === 'ONLINE' ? 'pill-on' : 'pill-sb',
      onClick: function onClick() {
        var idx = AGENTS.findIndex(function (ag) {
          return ag.n === a.n;
        });
        if (idx >= 0) {
          setSA(idx);
          setView('chat');
        } else toast(a.n + ' activating soon');
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      color: 'var(--gn)'
    }
  }, "Build \u2014 Engineering, QA, Product (5)"), /*#__PURE__*/React.createElement("div", {
    className: "ag-grid"
  }, ALL29.filter(function (a) {
    return a.tier === 'BUILD';
  }).map(function (a, i) {
    return /*#__PURE__*/React.createElement(Row, {
      key: a.n,
      a: a,
      pc: a.s === 'ONLINE' ? 'pill-on' : 'pill-sb',
      onClick: function onClick() {
        var idx = AGENTS.findIndex(function (ag) {
          return ag.n === a.n;
        });
        if (idx >= 0) {
          setSA(idx);
          setView('chat');
        } else toast(a.n + ' activating soon');
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      color: '#9D4EDD'
    }
  }, "Orchestration \u2014 Nervous System (6)"), /*#__PURE__*/React.createElement("div", {
    className: "ag-grid"
  }, ALL29.filter(function (a) {
    return a.tier === 'ORCHESTRATION';
  }).map(function (a) {
    return /*#__PURE__*/React.createElement(Row, {
      key: a.n,
      a: a,
      pc: "pill-on",
      onClick: function onClick() {
        return toast(a.n + ' — orchestration layer active');
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      color: '#22D3EE'
    }
  }, "Specialist \u2014 Code, Marketing, Security (5)"), /*#__PURE__*/React.createElement("div", {
    className: "ag-grid"
  }, ALL29.filter(function (a) {
    return a.tier === 'SPECIALIST';
  }).map(function (a) {
    return /*#__PURE__*/React.createElement(Row, {
      key: a.n,
      a: a,
      pc: "pill-on",
      onClick: function onClick() {
        return toast(a.n + ' — specialist agent active');
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      color: '#FF6B9D'
    }
  }, "Companions \u2014 Human Layer (3)"), /*#__PURE__*/React.createElement("div", {
    className: "ag-grid"
  }, ALL29.filter(function (a) {
    return a.tier === 'COMPANIONS';
  }).map(function (a) {
    return /*#__PURE__*/React.createElement(Row, {
      key: a.n,
      a: a,
      pc: a.s === 'PLANNED' ? 'pill-p' : 'pill-on',
      onClick: function onClick() {
        return toast(a.n + (a.s === 'PLANNED' ? ' — in build' : ' — companion active'));
      }
    });
  }))));
};

/* ── AGENT CHAT — Clean, no pill clutter ── */
var AgentChat = function AgentChat(_ref10) {
  var _window$__phoennixCon3;
  var selAgent = _ref10.selAgent,
    setSA = _ref10.setSA,
    openPreview = _ref10.openPreview;
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    msgs = _useState10[0],
    setMsgs = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    input = _useState12[0],
    setInput = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    attachedImgs = _useState16[0],
    setAttachedImgs = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    switcherOpen = _useState18[0],
    setSwitcherOpen = _useState18[1];
  var bottomRef = useRef();
  var fileRef = useRef();
  var ag = AGENTS[selAgent];
  useEffect(function () {
    setMsgs([{
      type: 'agent',
      text: 'Agent ' + ag.n + ' active. Ask anything — I respond from my full intelligence DNA. You can paste, drop or attach any image and I will read, analyse and fix it at NEXUS + PROBE standard. What needs solving today?',
      time: now()
    }]);
    setAttachedImgs([]);
    setSwitcherOpen(false);
  }, [selAgent]);
  useEffect(function () {
    var _bottomRef$current;
    (_bottomRef$current = bottomRef.current) === null || _bottomRef$current === void 0 || _bottomRef$current.scrollIntoView({
      behavior: 'smooth'
    });
  }, [msgs]);
  var fileToB64 = function fileToB64(file) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () {
        return res({
          dataUrl: r.result,
          mediaType: file.type,
          name: file.name || 'image'
        });
      };
      r.onerror = rej;
      r.readAsDataURL(file);
    });
  };
  var addFiles = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(files) {
      var allowed, valid, loaded;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            valid = _toConsumableArray(files).filter(function (f) {
              return allowed.includes(f.type);
            }).slice(0, 4);
            if (valid.length) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return Promise.all(valid.map(fileToB64));
          case 2:
            loaded = _context.v;
            setAttachedImgs(function (prev) {
              return [].concat(_toConsumableArray(prev), _toConsumableArray(loaded)).slice(0, 4);
            });
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function addFiles(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  var handlePaste = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var items, imgItems;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            items = _toConsumableArray(e.clipboardData.items);
            imgItems = items.filter(function (it) {
              return it.type.startsWith('image/');
            });
            if (!imgItems.length) {
              _context2.n = 1;
              break;
            }
            e.preventDefault();
            _context2.n = 1;
            return addFiles(imgItems.map(function (it) {
              return it.getAsFile();
            }).filter(Boolean));
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function handlePaste(_x2) {
      return _ref12.apply(this, arguments);
    };
  }();
  var send = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var txt, imgs, apiUserContent, userMsg, h, _window$__phoennixCon, _window$__phoennixCon2, _data$content, _data$error, ep, apiKey, sys, apiHistory, res, data, reply, htmlMatch, codeMatch, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(!input.trim() && attachedImgs.length === 0 || loading)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            txt = input.trim();
            setInput('');
            imgs = _toConsumableArray(attachedImgs);
            setAttachedImgs([]);
            apiUserContent = [];
            imgs.forEach(function (img) {
              apiUserContent.push({
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: img.mediaType,
                  data: img.dataUrl.split(',')[1]
                }
              });
            });
            if (txt) apiUserContent.push({
              type: 'text',
              text: txt
            });
            userMsg = {
              type: 'user',
              text: txt || imgs.length + ' image' + (imgs.length > 1 ? 's' : '') + ' attached',
              time: now(),
              imgs: imgs
            };
            h = [].concat(_toConsumableArray(msgs), [userMsg]);
            setMsgs(h);
            setLoading(true);
            _context3.p = 2;
            ep = (_window$__phoennixCon = window.__phoennixConfig) === null || _window$__phoennixCon === void 0 ? void 0 : _window$__phoennixCon.endpoint;
            apiKey = (_window$__phoennixCon2 = window.__phoennixConfig) === null || _window$__phoennixCon2 === void 0 ? void 0 : _window$__phoennixCon2.anthropic;
            sys = 'You are ' + ag.n + ', PhoennixAI ' + ag.r + '. DNA: ' + ag.dna + '\n\nContext: PhoennixAI (double-N always). Founder: Valerie Wilcox. 31 agents, 5 tiers. Brand: slate #556970, olive #ABA944.\nWhen given an image: read ALL text visible, identify ALL UI elements, diagnose ALL bugs precisely, give exact code fix.\nAlways end with one clear next action. Plain text only.';
            apiHistory = h.filter(function (m) {
              return m.type !== 'typing';
            }).map(function (m) {
              if (m.type === 'user') {
                var c = [];
                (m.imgs || []).forEach(function (img) {
                  return c.push({
                    type: 'image',
                    source: {
                      type: 'base64',
                      media_type: img.mediaType,
                      data: img.dataUrl.split(',')[1]
                    }
                  });
                });
                if (m.text && !m.text.match(/^\d+ images? attached$/)) c.push({
                  type: 'text',
                  text: m.text
                });
                return {
                  role: 'user',
                  content: c.length ? c : [{
                    type: 'text',
                    text: m.text || '(image)'
                  }]
                };
              }
              return {
                role: 'assistant',
                content: m.text
              };
            });
            apiHistory[apiHistory.length - 1] = {
              role: 'user',
              content: apiUserContent
            };
            if (!ep) {
              _context3.n = 5;
              break;
            }
            _context3.n = 3;
            return fetch(ep, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                messages: apiHistory,
                agentName: ag.n
              })
            });
          case 3:
            res = _context3.v;
            _context3.n = 4;
            return res.json();
          case 4:
            data = _context3.v;
            _context3.n = 9;
            break;
          case 5:
            if (!apiKey) {
              _context3.n = 8;
              break;
            }
            _context3.n = 6;
            return fetch('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
              },
              body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 2000,
                system: sys,
                messages: apiHistory
              })
            });
          case 6:
            res = _context3.v;
            _context3.n = 7;
            return res.json();
          case 7:
            data = _context3.v;
            _context3.n = 9;
            break;
          case 8:
            setMsgs(function (m) {
              return [].concat(_toConsumableArray(m), [{
                type: 'agent',
                text: 'No API connected yet. Go to Customize → API Config → paste your Vercel endpoint URL and save. Or add your Anthropic API key directly.',
                time: now()
              }]);
            });
            setLoading(false);
            return _context3.a(2);
          case 9:
            reply = (((_data$content = data.content) === null || _data$content === void 0 ? void 0 : _data$content.filter(function (b) {
              return b.type === 'text';
            }).map(function (b) {
              return b.text;
            }).join('\n')) || ((_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message) || 'No response').replace(/\*\*/g, '').replace(/---/g, '').replace(/—/g, ' - ');
            setMsgs(function (m) {
              return [].concat(_toConsumableArray(m), [{
                type: 'agent',
                text: reply,
                time: now()
              }]);
            });
            htmlMatch = reply.match(/<!DOCTYPE html>[\s\S]*<\/html>/i) || reply.match(/<html[\s\S]*<\/html>/i);
            codeMatch = reply.match(/```(?:html|jsx|tsx|js|ts|css)\n([\s\S]+?)```/);
            if (htmlMatch && openPreview) openPreview(htmlMatch[0], 'html', ag.n + ' — Generated output');else if (codeMatch && openPreview) openPreview(codeMatch[1], 'code', ag.n + ' — Code output');
            _context3.n = 11;
            break;
          case 10:
            _context3.p = 10;
            _t = _context3.v;
            setMsgs(function (m) {
              return [].concat(_toConsumableArray(m), [{
                type: 'agent',
                text: 'Connection error: ' + _t.message + '. Check your API config in Customize.',
                time: now()
              }]);
            });
          case 11:
            setLoading(false);
          case 12:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 10]]);
    }));
    return function send() {
      return _ref13.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 49px)',
      overflow: 'hidden'
    },
    onClick: function onClick() {
      return setSwitcherOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '.75rem 1.5rem',
      borderBottom: '.5px solid rgba(85,105,112,.12)',
      flexShrink: 0,
      background: 'rgba(255,255,255,.95)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: ag.c,
      boxShadow: '0 0 8px ' + ag.c + '80'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 16,
      letterSpacing: '1px',
      fontWeight: 700,
      color: 'var(--tx)'
    }
  }, ag.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 9.5,
      color: 'var(--t3)'
    }
  }, ag.r)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setSwitcherOpen(function (o) {
        return !o;
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '4px 9px',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 6,
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'Fira Code,monospace',
      fontSize: 10,
      color: 'var(--t3)',
      marginLeft: 4,
      transition: 'all .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.background = 'rgba(85,105,112,.06)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.background = 'none';
    }
  }, "Switch agent ", /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 9 9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 3.5l3 3 3-3"
  }))), switcherOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: 0,
      background: '#fff',
      border: '1px solid rgba(85,105,112,.15)',
      borderRadius: 12,
      boxShadow: '0 8px 32px rgba(85,105,112,.14)',
      zIndex: 200,
      width: 280,
      maxHeight: 340,
      overflowY: 'auto'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 12px 5px',
      fontFamily: 'Fira Code,monospace',
      fontSize: 8.5,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      borderBottom: '.5px solid rgba(85,105,112,.1)',
      position: 'sticky',
      top: 0,
      background: '#fff'
    }
  }, "Select Agent"), AGENTS.map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: a.n,
      onClick: function onClick() {
        setSA(i);
        setSwitcherOpen(false);
      },
      style: {
        padding: '9px 12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        background: i === selAgent ? 'rgba(85,105,112,.05)' : 'transparent',
        transition: 'background .1s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.background = 'rgba(85,105,112,.04)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.background = i === selAgent ? 'rgba(85,105,112,.05)' : 'transparent';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: a.c,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--tx)'
      }
    }, a.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9.5,
        color: 'var(--t3)'
      }
    }, a.r)), i === selAgent && /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      stroke: "#556970",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 6l3 3 5-5"
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 10,
      color: 'var(--t3)',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: ag.c,
      display: 'inline-block'
    }
  }), "ONLINE")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.75rem',
      maxWidth: 820,
      width: '100%',
      alignSelf: 'center'
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
    },
    onDragOver: function onDragOver(e) {
      return e.preventDefault();
    }
  }, msgs.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "msg-wrap",
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: m.type === 'user' ? 'flex-end' : 'flex-start',
        gap: 4
      }
    }, m.type === 'agent' && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace',
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: ag.c,
        display: 'inline-block'
      }
    }), ag.n, " \u2014 ", m.time), /*#__PURE__*/React.createElement("div", {
      className: m.type === 'user' ? 'bubble-u' : 'bubble-a',
      style: {
        maxWidth: '82%'
      }
    }, (m.imgs || []).length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        marginBottom: (m.imgs || []).length && m.text ? 8 : 0
      }
    }, (m.imgs || []).map(function (img, j) {
      return /*#__PURE__*/React.createElement("img", {
        key: j,
        src: img.dataUrl,
        alt: "attached",
        style: {
          maxWidth: 200,
          maxHeight: 140,
          borderRadius: 7,
          objectFit: 'cover',
          border: '0.5px solid rgba(85,105,112,.25)'
        }
      });
    })), m.text && m.text.split('\n').map(function (ln, j) {
      return /*#__PURE__*/React.createElement("div", {
        key: j
      }, ln || /*#__PURE__*/React.createElement("br", null));
    })), /*#__PURE__*/React.createElement("div", {
      className: "msg-acts",
      style: {
        justifyContent: m.type === 'user' ? 'flex-end' : 'flex-start'
      }
    }, m.type === 'user' && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        paddingRight: 4,
        fontFamily: 'Fira Code,monospace'
      }
    }, m.time), /*#__PURE__*/React.createElement("button", {
      className: "act-btn",
      onClick: function onClick() {
        return navigator.clipboard.writeText(m.text || '').then(function () {
          return toast('Copied');
        });
      }
    }, "Copy"), m.type === 'agent' && /*#__PURE__*/React.createElement("button", {
      className: "act-btn",
      onClick: send
    }, "Refresh")));
  }), loading && /*#__PURE__*/React.createElement("div", {
    className: "bubble-a",
    style: {
      maxWidth: '80%',
      display: 'flex',
      gap: 5,
      padding: '.75rem'
    }
  }, [0, 1, 2].map(function (i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "typing-dot",
      style: {
        animationDelay: i * .2 + 's'
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    ref: bottomRef
  })), attachedImgs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '.375rem 1.5rem',
      borderTop: '.5px solid rgba(85,105,112,.1)',
      maxWidth: 820,
      width: '100%',
      alignSelf: 'center',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      background: 'rgba(255,255,255,.8)'
    }
  }, attachedImgs.map(function (img, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img.dataUrl,
      alt: "",
      style: {
        height: 52,
        width: 68,
        objectFit: 'cover',
        borderRadius: 6,
        border: '1px solid rgba(85,105,112,.2)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setAttachedImgs(function (p) {
          return p.filter(function (_, j) {
            return j !== i;
          });
        });
      },
      style: {
        position: 'absolute',
        top: -5,
        right: -5,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: '#556970',
        border: 'none',
        color: '#fff',
        fontSize: 8,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, "\u2715"));
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--t2)',
      fontFamily: 'Fira Code,monospace'
    }
  }, attachedImgs.length, " image", attachedImgs.length > 1 ? 's' : '', " ready")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '.625rem 1.5rem .875rem',
      maxWidth: 820,
      width: '100%',
      alignSelf: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.94)',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 1px 6px rgba(85,105,112,.08)',
      transition: 'border-color .2s,box-shadow .2s'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    onPaste: handlePaste,
    placeholder: 'Message ' + ag.n + '...',
    rows: 2,
    style: {
      display: 'block',
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '.875rem 1rem .625rem',
      color: 'var(--tx)',
      fontSize: 14,
      lineHeight: 1.65,
      resize: 'none',
      fontFamily: 'Source Serif 4,Georgia,serif'
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '.5rem .875rem',
      borderTop: '.5px solid rgba(85,105,112,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      return addFiles(e.target.files);
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _fileRef$current;
      return (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click();
    },
    title: "Attach image",
    style: {
      background: 'none',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 6,
      padding: '3px 7px',
      cursor: 'pointer',
      fontSize: 12,
      color: 'var(--t3)',
      transition: 'all .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.color = 'var(--t2)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.color = 'var(--t3)';
    }
  }, "\u2295 Image"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 10,
      color: 'var(--t3)',
      lineHeight: '26px'
    }
  }, "Model: ", (function(){var _m=(window.__phoennixConfig||{}).model||'grok-3';if(_m==='grok-3')return 'Grok 3';if(_m==='grok-3-mini')return 'Grok 3 Mini';if(_m==='claude-opus-4-20250514')return 'Claude Opus 4.6';if(_m==='claude-sonnet-4-20250514')return 'Claude Sonnet 4.6';if(_m==='claude-haiku-4-5-20251001')return 'Claude Haiku 4.5';if(_m.includes('deepseek-v4-pro'))return 'DeepSeek V4 Pro (NIM)';if(_m.includes('deepseek-v3'))return 'DeepSeek V3 Flash (NIM)';if(_m.includes('glm-5.1'))return 'GLM-5.1 (NIM)';if(_m.includes('minimax-m2.7'))return 'MiniMax M2.7 (NIM)';if(_m.includes('gemma-4-31b'))return 'Gemma 4 31B (NIM)';if(_m.includes('qwen3-coder'))return 'Qwen3 Coder 480B (NIM)';return _m;})(), " \xB7 ", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toast('Change model in Customize → API Config');
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 10,
      color: 'var(--primary)',
      padding: 0,
      fontFamily: 'Fira Code,monospace'
    }
  }, "change"))), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: loading,
    style: {
      background: 'var(--tx)',
      border: 'none',
      borderRadius: 8,
      padding: '.375rem 1rem',
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      opacity: loading ? .5 : 1,
      fontFamily: 'Source Serif 4,serif'
    }
  }, loading ? 'Thinking…' : 'Send', " ", !loading && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 10L10 2M4 2h6v6",
    strokeLinecap: "round"
  })))))));
};
/* ── ROUTINES ── */
var Routines = function Routines() {
  var _window$__phoennixCon4, _window$__phoennixCon5;
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    sel = _useState20[0],
    setSel = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    nr = _useState22[0],
    setNR = _useState22[1];
  var _useState23 = useState(0),
    _useState24 = _slicedToArray(_useState23, 2),
    trig = _useState24[0],
    setTrig = _useState24[1];
  var _useState25 = useState({
      min: '0',
      hr: '7',
      day: '*',
      mon: '*',
      wd: '1-5'
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    cronVals = _useState26[0],
    setCronVals = _useState26[1];
  var _useState27 = useState(((_window$__phoennixCon4 = window.__phoennixConfig) === null || _window$__phoennixCon4 === void 0 ? void 0 : _window$__phoennixCon4.anthropic) || ''),
    _useState28 = _slicedToArray(_useState27, 2),
    apiKey = _useState28[0],
    setApiKey = _useState28[1];
  var _useState29 = useState(((_window$__phoennixCon5 = window.__phoennixConfig) === null || _window$__phoennixCon5 === void 0 ? void 0 : _window$__phoennixCon5.endpoint) || ''),
    _useState30 = _slicedToArray(_useState29, 2),
    endpoint = _useState30[0],
    setEndpoint = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    showApiGuide = _useState32[0],
    setShowApiGuide = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    routineRunning = _useState34[0],
    setRoutineRunning = _useState34[1];
  var _useState35 = useState(''),
    _useState36 = _slicedToArray(_useState35, 2),
    liveOutput = _useState36[0],
    setLiveOutput = _useState36[1];
  var r = ROUTINES[sel];
  var cronToHuman = function cronToHuman(c) {
    var cronPresets = {
      '0 7 * * 1-5': 'Weekdays at 07:00',
      '0 8 * * 1-5': 'Weekdays at 08:00',
      '0 8,13,17 * * *': 'Daily at 08:00, 13:00 & 17:00',
      '30 10 * * 1-5': 'Weekdays at 10:30',
      '0 13 * * *': 'Daily at 13:00',
      '30 16 * * 1-5': 'Weekdays at 16:30',
      '0 9 * * 1': 'Every Monday at 09:00',
      '0 19 * * 1-5': 'Weekdays at 19:00'
    };
    var expr = c.min + ' ' + c.hr + ' ' + c.day + ' ' + c.mon + ' ' + c.wd;
    return cronPresets[expr] || 'Custom: ' + expr;
  };
  var runRoutineNow = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _window$__phoennixCon6, _window$__phoennixCon7;
      var ep, rKey, res, data, _t2;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            ep = endpoint || ((_window$__phoennixCon6 = window.__phoennixConfig) === null || _window$__phoennixCon6 === void 0 ? void 0 : _window$__phoennixCon6.endpoint);
            if (ep) {
              _context4.n = 1;
              break;
            }
            toast('Set your Vercel endpoint in Customize → API Config first');
            return _context4.a(2);
          case 1:
            setRoutineRunning(true);
            setLiveOutput('');
            rKey = ((_window$__phoennixCon7 = window.__phoennixConfig) === null || _window$__phoennixCon7 === void 0 ? void 0 : _window$__phoennixCon7.routineSecret) || '';
            _context4.p = 2;
            _context4.n = 3;
            return fetch(ep, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Routine-Key': rKey
              },
              body: JSON.stringify({
                routine: r.name.toLowerCase().replace(/ /g, '-')
              })
            });
          case 3:
            res = _context4.v;
            _context4.n = 4;
            return res.json();
          case 4:
            data = _context4.v;
            setLiveOutput(data.output || data.error || 'No output returned');
            toast(r.name + ' completed');
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t2 = _context4.v;
            setLiveOutput('Connection error: ' + _t2.message);
            toast('Run failed — check endpoint');
          case 6:
            setRoutineRunning(false);
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 5]]);
    }));
    return function runRoutineNow() {
      return _ref14.apply(this, arguments);
    };
  }();
  var copyCurl = function copyCurl() {
    var _window$__phoennixCon8;
    var ep = endpoint || 'https://your-project.vercel.app/api/claude';
    var secret = ((_window$__phoennixCon8 = window.__phoennixConfig) === null || _window$__phoennixCon8 === void 0 ? void 0 : _window$__phoennixCon8.routineSecret) || 'your-routine-secret';
    var routineKey = r.name.toLowerCase().replace(/ /g, '-');
    var part1 = "curl -X POST " + ep;
    var part2 = " -H Content-Type:application/json -H X-Routine-Key:" + secret;
    var part3 = " -d routine=" + routineKey;
    var cmd = part1 + part2 + part3;
    navigator.clipboard.writeText(cmd).then(function () {
      return toast('cURL command copied');
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      height: 'calc(100vh - 49px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 250,
      borderRight: '.5px solid rgba(85,105,112,.12)',
      background: 'rgba(255,255,255,.7)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '.875rem 1rem .625rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '.5px solid rgba(85,105,112,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "\u26A1 Routines"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNR(true);
    },
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      border: '.5px solid rgba(85,105,112,.25)',
      background: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--t2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '.375rem .5rem'
    }
  }, ROUTINES.map(function (rt, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: rt.name,
      onClick: function onClick() {
        setSel(i);
        setNR(false);
        setLiveOutput('');
      },
      style: {
        padding: '.625rem .875rem',
        borderRadius: 9,
        cursor: 'pointer',
        marginBottom: 2,
        background: sel === i && !nr ? 'rgba(85,105,112,.1)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        transition: 'background .15s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: rt.color,
        flexShrink: 0,
        boxShadow: sel === i ? '0 0 8px ' + rt.color : 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: 'var(--tx)'
      }
    }, rt.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, rt.agent)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '.75rem',
      borderTop: '.5px solid rgba(85,105,112,.08)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowApiGuide(function (v) {
        return !v;
      });
    },
    style: {
      width: '100%',
      padding: '.5rem',
      background: 'rgba(171,169,68,.08)',
      border: '.5px solid rgba(171,169,68,.25)',
      borderRadius: 9,
      fontSize: 11.5,
      color: '#8A8835',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, showApiGuide ? '▼ Hide' : '▶ API + Cron Setup'))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }
  }, showApiGuide ?
  /*#__PURE__*/
  /* ── API CONNECTION GUIDE ── */
  React.createElement("div", {
    style: {
      padding: '1.5rem',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 4
    }
  }, "Connect API + Cron Jobs"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      marginBottom: '1.5rem',
      lineHeight: 1.7
    }
  }, "Two methods to wire your routines. Use both \u2014 in-app for manual runs, cron for autonomous scheduled execution. This is the KAIROS pattern."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.05)',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 12,
      padding: '1rem 1.25rem',
      marginBottom: '.875rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--primary)',
      fontFamily: 'Fira Code,monospace',
      marginBottom: 6
    }
  }, "STEP 1 \u2014 Get your AI provider API key"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      lineHeight: 1.7,
      marginBottom: 8
    }
  }, "For Grok: go to ", /*#__PURE__*/React.createElement("strong", null, "console.x.ai"), " \u2192 sign in \u2192 API Keys \u2192 Create key. For Claude: go to ", /*#__PURE__*/React.createElement("strong", null, "console.anthropic.com"), " \u2192 API Keys. Copy the key immediately \u2014 you only see it once. Add it to your Vercel project as ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(85,105,112,.1)',
      padding: '1px 5px',
      borderRadius: 4,
      fontSize: 11
    }
  }, "AI_API_KEY"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.05)',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 12,
      padding: '1rem 1.25rem',
      marginBottom: '.875rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--primary)',
      fontFamily: 'Fira Code,monospace',
      marginBottom: 6
    }
  }, "STEP 2 \u2014 Deploy the Vercel Edge Function (10 mins)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", null, "1. Create GitHub repo: ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(85,105,112,.1)',
      padding: '1px 5px',
      borderRadius: 4,
      fontSize: 11
    }
  }, "phoennixai-api")), /*#__PURE__*/React.createElement("div", null, "2. Add file: ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(85,105,112,.1)',
      padding: '1px 5px',
      borderRadius: 4,
      fontSize: 11
    }
  }, "api/ai.js"), " (download above)"), /*#__PURE__*/React.createElement("div", null, "3. Add file: ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(85,105,112,.1)',
      padding: '1px 5px',
      borderRadius: 4,
      fontSize: 11
    }
  }, "api/cron.js"), " (download above)"), /*#__PURE__*/React.createElement("div", null, "4. Add file: ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(85,105,112,.1)',
      padding: '1px 5px',
      borderRadius: 4,
      fontSize: 11
    }
  }, "vercel.json"), " (download above)"), /*#__PURE__*/React.createElement("div", null, "5. Push to GitHub. Go to ", /*#__PURE__*/React.createElement("strong", null, "vercel.com"), " \u2192 Import \u2192 select repo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.05)',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 12,
      padding: '1rem 1.25rem',
      marginBottom: '.875rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--primary)',
      fontFamily: 'Fira Code,monospace',
      marginBottom: 6
    }
  }, "STEP 3 \u2014 Set environment variables in Vercel"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", null, "In Vercel \u2192 Settings \u2192 Environment Variables, add:"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(31,36,38,.04)',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 8,
      padding: '.625rem .875rem',
      marginTop: 8,
      fontFamily: 'Fira Code,monospace',
      fontSize: 11.5,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ABA944'
    }
  }, "AI_API_KEY"), "         =  your-provider-api-key"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ABA944'
    }
  }, "ROUTINE_SECRET"), "     =  any-32-char-random-string"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ABA944'
    }
  }, "CRON_SECRET"), "        =  another-random-string"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--t3)'
    }
  }, "SUPABASE_URL        =  (optional \u2014 for audit logs)")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.05)',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 12,
      padding: '1rem 1.25rem',
      marginBottom: '.875rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--primary)',
      fontFamily: 'Fira Code,monospace',
      marginBottom: 6
    }
  }, "STEP 4 \u2014 Configure this platform"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      lineHeight: 1.7,
      marginBottom: 8
    }
  }, "In ", /*#__PURE__*/React.createElement("strong", null, "Customize \u2192 API Config"), ", set:"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(31,36,38,.04)',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 8,
      padding: '.625rem .875rem',
      fontFamily: 'Fira Code,monospace',
      fontSize: 11.5,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ABA944'
    }
  }, "Endpoint"), "       = https://your-project.vercel.app/api/claude"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ABA944'
    }
  }, "Routine Secret"), " = (the ROUTINE_SECRET from Step 3)"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--t3)'
    }
  }, "API Key field     = (leave empty \u2014 key is on server)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(171,169,68,.07)',
      border: '.5px solid rgba(171,169,68,.3)',
      borderRadius: 12,
      padding: '1rem 1.25rem',
      marginBottom: '.875rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#8A8835',
      fontFamily: 'Fira Code,monospace',
      marginBottom: 6
    }
  }, "STEP 5 \u2014 Cron jobs run automatically (zero action needed)"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: '#8A8835',
      lineHeight: 1.7,
      marginBottom: 8
    }
  }, "Once deployed, Vercel executes all 8 routines on schedule. The KAIROS daemon pattern: your agents work while you sleep."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(171,169,68,.12)',
      borderRadius: 8,
      padding: '.625rem .875rem',
      fontFamily: 'Fira Code,monospace',
      fontSize: 11,
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "0 7 * * 1-5   \u2192 Morning Brief (PA) \u2014 Weekdays 07:00"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "0 8 * * 1-5   \u2192 Financial Snapshot (LEDGER) \u2014 08:00"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "0 8,13,17 * * * \u2192 Email Triage (ALL AGENTS) \u2014 3x daily"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "30 10 * * 1-5 \u2192 CII World Scan (SCOUT) \u2014 10:30"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "0 13 * * *    \u2192 System Health (PROBE) \u2014 13:00"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "30 16 * * 1-5 \u2192 Issue Triage (GRID) \u2014 16:30"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "0 9 * * 1     \u2192 Content Batch (PULSE) \u2014 Mondays"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8A8835'
    }
  }, "0 19 * * 1-5  \u2192 PR Digest (NEXUS) \u2014 19:00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.06)',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 10,
      padding: '.75rem 1rem',
      fontSize: 12.5,
      color: 'var(--t2)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Webhook trigger"), " \u2014 any external system can fire a routine:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("code", {
    style: {
      fontSize: 11,
      fontFamily: 'Fira Code,monospace'
    }
  }, "POST /api/claude \xB7 Header: X-Routine-Key \xB7 Body: ", "{'routine':'morning-brief'}"))) : nr ?
  /*#__PURE__*/
  /* ── NEW ROUTINE FORM ── */
  React.createElement("div", {
    style: {
      padding: '1.5rem',
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 3
    }
  }, "New routine"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      marginBottom: '1.25rem'
    }
  }, "Create a routine that runs on schedule, by API, or webhook trigger."), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--t2)',
      display: 'block',
      marginBottom: 5
    }
  }, "Name ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ef4444'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "field",
    placeholder: "e.g., Daily code review",
    style: {
      marginBottom: '1rem'
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--t2)',
      display: 'block',
      marginBottom: 5
    }
  }, "Instructions"), /*#__PURE__*/React.createElement("textarea", {
    className: "field",
    rows: 5,
    placeholder: "Describe what the agent should do in each session...",
    style: {
      marginBottom: '1rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.625rem',
      fontSize: 13,
      fontWeight: 500
    }
  }, "Select a trigger"), [['◎', 'Schedule', 'Run on a recurring cron schedule or once at a future time'], ['◈', 'API / Webhook', 'Trigger from your code via POST request with X-Routine-Key header'], ['</>', 'GitHub event', 'Run when a GitHub webhook event fires']].map(function (_ref15, i) {
    var _ref16 = _slicedToArray(_ref15, 3),
      ic = _ref16[0],
      tn = _ref16[1],
      td = _ref16[2];
    return /*#__PURE__*/React.createElement("div", {
      key: tn,
      className: 'trig-opt ' + (trig === i ? 'sel' : ''),
      onClick: function onClick() {
        return setTrig(i);
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        width: 20,
        textAlign: 'center'
      }
    }, ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 2
      }
    }, tn), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--t2)'
      }
    }, td)));
  }), trig === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.05)',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 10,
      padding: '1rem',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--t3)',
      marginBottom: 8,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "Cron Expression"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 8,
      marginBottom: 8
    }
  }, [['min', 'Minute', cronVals.min], ['hr', 'Hour', cronVals.hr], ['day', 'Day', cronVals.day], ['mon', 'Month', cronVals.mon], ['wd', 'Weekday', cronVals.wd]].map(function (_ref17) {
    var _ref18 = _slicedToArray(_ref17, 3),
      k = _ref18[0],
      lbl = _ref18[1],
      v = _ref18[2];
    return /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--t3)',
        marginBottom: 3,
        fontFamily: 'Fira Code,monospace',
        letterSpacing: '.05em',
        textTransform: 'uppercase'
      }
    }, lbl), /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: v,
      onChange: function onChange(e) {
        return setCronVals(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, e.target.value));
        });
      },
      style: {
        padding: '.4rem .5rem',
        textAlign: 'center',
        fontFamily: 'Fira Code,monospace',
        fontSize: 13
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--primary)',
      fontFamily: 'Fira Code,monospace'
    }
  }, "\u2192 ", cronToHuman(cronVals))), trig === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.05)',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 10,
      padding: '1rem',
      marginBottom: '1rem',
      fontFamily: 'Fira Code,monospace',
      fontSize: 11.5,
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--t3)',
      marginBottom: 6
    }
  }, "POST to your Vercel endpoint:"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--primary)'
    }
  }, "POST /api/claude"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#ABA944'
    }
  }, "X-Routine-Key: your-routine-secret"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--t2)'
    }
  }, "{'routine':'routine-name'}")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(171,169,68,.07)',
      border: '.5px solid rgba(171,169,68,.25)',
      borderRadius: 10,
      padding: '.75rem 1rem',
      fontSize: 12.5,
      color: '#8A8835',
      marginBottom: '1rem'
    }
  }, "Connected: Google Drive \xB7 Supabase \xB7 Vercel \xB7 GitHub \u2014 agents can use all tools during runs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '.625rem',
      paddingTop: '1rem',
      borderTop: '.5px solid rgba(85,105,112,.12)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNR(false);
    },
    className: "btn-ghost"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      toast('Routine created — cron scheduled');
      setNR(false);
    },
    className: "btn-solid"
  }, "Create routine"))) :
  /*#__PURE__*/
  /* ── ROUTINE DETAIL ── */
  React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.125rem 1.5rem',
      borderBottom: '.5px solid rgba(85,105,112,.12)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: r.color,
      boxShadow: '0 0 8px ' + r.color
    }
  }), r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--t2)'
    }
  }, r.trigger, " \u2014 Agent: ", r.agent)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copyCurl,
    className: "btn-ghost",
    style: {
      padding: '.4rem .875rem',
      fontSize: 12
    }
  }, "Copy cURL"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toast(r.name + ' paused');
    },
    className: "btn-ghost",
    style: {
      padding: '.4rem .875rem',
      fontSize: 12.5
    }
  }, "Pause"), /*#__PURE__*/React.createElement("button", {
    onClick: runRoutineNow,
    disabled: routineRunning,
    className: "btn-solid",
    style: {
      padding: '.4rem .875rem',
      fontSize: 12.5,
      opacity: routineRunning ? .6 : 1
    }
  }, routineRunning ? 'Running…' : 'Run now'))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.25rem 1.5rem'
    }
  }, liveOutput && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      marginTop: 0
    }
  }, "Live output \u2014 just now"), /*#__PURE__*/React.createElement("div", {
    className: "glass-card no-hover",
    style: {
      padding: '1rem 1.125rem',
      fontSize: 13.5,
      lineHeight: 1.75,
      color: 'var(--tx)',
      borderLeft: '3px solid ' + r.color
    }
  }, liveOutput)), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl",
    style: {
      marginTop: 0
    }
  }, "Last output \u2014 ", r.lastRun), /*#__PURE__*/React.createElement("div", {
    className: "glass-card no-hover",
    style: {
      padding: '1rem 1.125rem',
      fontSize: 13.5,
      lineHeight: 1.75,
      marginBottom: '1rem',
      color: 'var(--tx)'
    }
  }, r.output), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl"
  }, "Description"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--t2)',
      lineHeight: 1.75,
      marginBottom: '1.25rem'
    }
  }, r.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '.625rem',
      marginBottom: '1.25rem'
    }
  }, [['Next run', r.next], ['Agent', r.agent], ['Trigger', r.trigger], ['Status', 'Active']].map(function (_ref19) {
    var _ref20 = _slicedToArray(_ref19, 2),
      k = _ref20[0],
      v = _ref20[1];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "glass-card no-hover",
      style: {
        padding: '.875rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        fontWeight: 600,
        marginBottom: 3
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: k === 'Status' ? 'var(--gn)' : 'var(--tx)'
      }
    }, v));
  })), /*#__PURE__*/React.createElement("div", {
    className: "glass-card no-hover",
    style: {
      padding: '1rem 1.125rem',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--t3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "Edit Cron Schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 8,
      marginBottom: 8
    }
  }, [['min', 'Min', cronVals.min], ['hr', 'Hour', cronVals.hr], ['day', 'Day', cronVals.day], ['mon', 'Month', cronVals.mon], ['wd', 'Weekday', cronVals.wd]].map(function (_ref21) {
    var _ref22 = _slicedToArray(_ref21, 3),
      k = _ref22[0],
      lbl = _ref22[1],
      v = _ref22[2];
    return /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--t3)',
        marginBottom: 3,
        fontFamily: 'Fira Code,monospace',
        letterSpacing: '.05em',
        textTransform: 'uppercase'
      }
    }, lbl), /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: v,
      onChange: function onChange(e) {
        return setCronVals(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, e.target.value));
        });
      },
      style: {
        padding: '.4rem .5rem',
        textAlign: 'center',
        fontFamily: 'Fira Code,monospace',
        fontSize: 12
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--primary)',
      fontFamily: 'Fira Code,monospace'
    }
  }, "\u2192 ", cronToHuman(cronVals)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toast('Cron schedule saved — update vercel.json to persist');
    },
    className: "btn-ghost",
    style: {
      fontSize: 12,
      padding: '.3rem .75rem'
    }
  }, "Save schedule"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(31,36,38,.97)',
      borderRadius: 12,
      padding: '1rem 1.125rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,.35)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "API \xB7 Trigger via Webhook"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 11.5,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,.3)'
    }
  }, "# POST to your Vercel endpoint"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#7ECEC4'
    }
  }, "POST ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ABA944'
    }
  }, endpoint || 'https://your-project.vercel.app/api/claude')), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#7ECEC4'
    }
  }, "X-Routine-Key: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ABA944'
    }
  }, "your-routine-secret")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#7ECEC4'
    }
  }, "'routine: '+r.name.toLowerCase().replace(/ /g,'-')")), /*#__PURE__*/React.createElement("button", {
    onClick: copyCurl,
    style: {
      marginTop: 8,
      background: 'rgba(255,255,255,.07)',
      border: '.5px solid rgba(255,255,255,.15)',
      borderRadius: 7,
      padding: '.35rem .875rem',
      color: 'rgba(255,255,255,.7)',
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'Fira Code,monospace'
    }
  }, "Copy cURL command"))))));
};

/* ── DESIGN ── */
var Design = function Design() {
  var _useState37 = useState('d'),
    _useState38 = _slicedToArray(_useState37, 2),
    tab = _useState38[0],
    setTab = _useState38[1];
  var _useState39 = useState('hi'),
    _useState40 = _slicedToArray(_useState39, 2),
    type = _useState40[0],
    setType = _useState40[1];
  var cards = [{
    n: 'Mission Control v3',
    s: 'Design system · Today',
    g: 'rgba(85,105,112,0.2),rgba(171,169,68,0.1)'
  }, {
    n: 'Brand System 2026',
    s: 'Design system · Yesterday',
    g: 'rgba(171,169,68,0.2),rgba(85,105,112,0.1)'
  }, {
    n: 'C&C Bakery UI',
    s: 'Prototype · 3 days ago',
    g: 'rgba(45,122,79,0.15),rgba(171,169,68,0.08)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      height: 'calc(100vh - 49px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 270,
      borderRight: '.5px solid rgba(85,105,112,.12)',
      background: 'rgba(255,255,255,.7)',
      padding: '1.125rem',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--t3)',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      marginBottom: '.875rem'
    }
  }, "New prototype"), /*#__PURE__*/React.createElement("input", {
    className: "field",
    placeholder: "Project name",
    style: {
      marginBottom: '.875rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--t2)',
      marginBottom: 5
    }
  }, "Design system"), /*#__PURE__*/React.createElement("div", {
    className: "glass-card",
    style: {
      padding: '.5rem .875rem',
      marginBottom: '.875rem',
      display: 'flex',
      alignItems: 'center',
      gap: '.625rem',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      background: 'linear-gradient(135deg,#556970,#ABA944)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "PhoennixAI System"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--t3)'
    }
  }, "Default"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '.5rem',
      margin: '.875rem 0'
    }
  }, [['w', 'Wireframe', 'var(--s3)'], ['hi', 'High fidelity', 'linear-gradient(135deg,rgba(85,105,112,0.3),rgba(171,169,68,0.15))']].map(function (_ref23) {
    var _ref24 = _slicedToArray(_ref23, 3),
      k = _ref24[0],
      lbl = _ref24[1],
      bg = _ref24[2];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: 'type-card ' + (type === k ? 'sel' : ''),
      onClick: function onClick() {
        return setType(k);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "type-preview",
      style: {
        background: bg
      }
    }, "\u25E7"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 500,
        color: 'var(--t2)'
      }
    }, lbl));
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: function onClick() {
      return toast('Design project created — ARIA + PULSE activated');
    },
    style: {
      width: '100%',
      borderRadius: 10
    }
  }, "+ Create"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--t3)',
      textAlign: 'center',
      marginTop: '.625rem'
    }
  }, "Only visible to you by default")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.5rem',
      marginBottom: '1.5rem',
      borderBottom: '.5px solid rgba(85,105,112,.12)'
    }
  }, [['d', 'Designs'], ['e', 'Examples'], ['s', 'Design systems'], ['a', 'AI Agents']].map(function (_ref25) {
    var _ref26 = _slicedToArray(_ref25, 2),
      k = _ref26[0],
      lbl = _ref26[1];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onClick: function onClick() {
        return setTab(k);
      },
      style: {
        fontSize: 14,
        fontWeight: 500,
        padding: '.5rem 0',
        borderBottom: '2px solid ' + (tab === k ? 'var(--tx)' : 'transparent'),
        cursor: 'pointer',
        color: tab === k ? 'var(--tx)' : 'var(--t2)',
        marginBottom: -.5,
        transition: 'all .15s'
      }
    }, lbl);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))',
      gap: '.875rem'
    }
  }, (tab === 'd' ? cards : tab === 'e' ? [{
    n: 'Learn PhoennixAI Design',
    s: 'Quick tutorial',
    g: 'var(--s3)'
  }] : [{
    n: 'PhoennixAI System',
    s: 'Design system · Default',
    g: 'linear-gradient(135deg,rgba(85,105,112,0.3),rgba(171,169,68,0.18))'
  }]).map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.n,
      className: "glass-card",
      style: {
        cursor: 'pointer',
        overflow: 'hidden'
      },
      onClick: function onClick() {
        return toast(c.n);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 110,
        background: 'linear-gradient(135deg,' + c.g + ')',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 26,
        color: 'rgba(255,255,255,.3)'
      }
    }, "P"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.75rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 2
      }
    }, c.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#556970'
      }
    }, c.s)));
  }))));
};

/* ── CLIENT DATA ── */
var ClientData = function ClientData() {
  useEffect(function () {
    g.from('.ca', {
      y: 14,
      opacity: 0,
      stagger: .05,
      duration: .5,
      ease: 'power2.out'
    });
  }, []);
  var m = [{
    n: '24',
    l: 'Total Clients',
    d: '+3 this month',
    c: '#556970'
  }, {
    n: '18',
    l: 'Active',
    d: '+2 from trial',
    c: '#10b981'
  }, {
    n: '3',
    l: 'Trials Ending',
    d: '7 days avg',
    c: '#f59e0b'
  }, {
    n: '£47.2k',
    l: 'MRR',
    d: '+18.4%',
    c: '#ABA944'
  }, {
    n: '1,847',
    l: 'Agent Calls Today',
    d: '+230 vs yesterday',
    c: '#556970'
  }, {
    n: '98.7%',
    l: 'Uptime (30d)',
    d: 'KAIROS nominal',
    c: '#10b981'
  }];
  var rows = [['Apex Ventures Ltd', 'ABOS Pro', 'CLAUDE, LEDGER, SAGE', '342', '£899', 'ONLINE'], ['Nova Digital Agency', 'MarkOS Growth', 'PULSE, RELAY, ECHO', '218', '£349', 'ONLINE'], ['Meridian Capital', 'FinOS Enterprise', 'LEDGER, SIGNAL, SAGE', '156', '£749', 'ONLINE'], ['Bolt Startup Studio', 'ABOS Starter', 'CLAUDE, PA, RELAY', '89', '£149', 'QUEUE'], ['Crafted Interiors Co', 'MarkOS Starter', 'PULSE, ECHO', '44', '£99', 'QUEUE'], ['Green Path Fund', 'FinOS Pro', 'LEDGER, SAGE', '12', '£399', 'STANDBY']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.5rem',
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))',
      gap: '.625rem',
      marginBottom: '1.5rem'
    }
  }, m.map(function (k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k.l,
      className: "metric-card ca"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        color: k.c,
        fontFamily: 'Agdasima,sans-serif',
        marginBottom: 2,
        lineHeight: 1
      }
    }, k.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: 'var(--t3)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '.06em'
      }
    }, k.l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--t2)',
        marginTop: 3
      }
    }, k.d));
  })), /*#__PURE__*/React.createElement("div", {
    className: "sec-lbl ca"
  }, "Recent Client Activity"), /*#__PURE__*/React.createElement("div", {
    className: "glass-card no-hover ca",
    style: {
      overflow: 'hidden',
      marginBottom: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "dt"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Client"), /*#__PURE__*/React.createElement("th", null, "Plan"), /*#__PURE__*/React.createElement("th", null, "Agents"), /*#__PURE__*/React.createElement("th", null, "Calls (7d)"), /*#__PURE__*/React.createElement("th", null, "MRR"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(function (r) {
    return /*#__PURE__*/React.createElement("tr", {
      key: r[0]
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        color: 'var(--tx)',
        fontWeight: 500
      }
    }, r[0]), /*#__PURE__*/React.createElement("td", null, r[1]), /*#__PURE__*/React.createElement("td", null, r[2]), /*#__PURE__*/React.createElement("td", null, r[3]), /*#__PURE__*/React.createElement("td", null, r[4]), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: 'pill ' + (r[5] === 'ONLINE' ? 'pill-on' : r[5] === 'QUEUE' ? 'pill-q' : 'pill-sb')
    }, r[5] === 'ONLINE' ? 'Active' : r[5] === 'QUEUE' ? 'Trial' : 'Inactive')));
  })))));
};

/* ── CUSTOMIZE ── */
/* ── CONNECTORS PANEL COMPONENT ── */
var ConnectorsPanel = function ConnectorsPanel(_ref27) {
  var setPanel = _ref27.setPanel;
  var cfg = window.__phoennixConfig || {};
  var connStatus = {
    'Vercel': !!cfg.endpoint,
    'Supabase': !!(cfg.supabaseUrl && cfg.supabaseKey),
    'Stripe': !!cfg.stripeKey,
    'GitHub': !!cfg.githubToken,
    'Google Drive': !!cfg.googleToken,
    'Gmail': !!cfg.gmailToken,
    'LinkedIn': !!cfg.linkedinToken,
    'Instagram': !!cfg.instagramToken,
    'X (Twitter)': !!cfg.twitterToken
  };
  var connected = CONNECTORS.filter(function (cn) {
    return connStatus[cn.n];
  });
  var disconnected = CONNECTORS.filter(function (cn) {
    return !connStatus[cn.n];
  });
  return /*#__PURE__*/React.createElement("div", null, connected.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.04)',
      border: '.5px dashed rgba(85,105,112,.2)',
      borderRadius: 10,
      padding: '1rem 1.25rem',
      marginBottom: '1.5rem',
      fontSize: 13,
      color: 'var(--t2)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--tx)'
    }
  }, "No connectors active yet."), " Add credentials in ", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPanel && setPanel('api');
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--primary)',
      fontSize: 13,
      fontWeight: 600,
      padding: 0,
      fontFamily: 'inherit'
    }
  }, "API Config \u2192"), /*#__PURE__*/React.createElement("br", null), "Once saved, connectors appear here as active automatically."), connected.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      marginBottom: '.625rem'
    }
  }, "Active (", connected.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',
      marginBottom: '1.5rem'
    }
  }, connected.map(function (cn) {
    return /*#__PURE__*/React.createElement("div", {
      key: cn.n,
      style: {
        background: 'rgba(255,255,255,.9)',
        border: '.5px solid rgba(22,101,52,.2)',
        borderRadius: 10,
        padding: '.875rem 1.125rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 7,
        background: cn.bgc || 'rgba(85,105,112,.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: cn.fgc || 'var(--tx)',
        fontSize: 13,
        fontWeight: 700
      }
    }, cn.logo || cn.ico), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13.5
      }
    }, cn.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, "Credentials verified \xB7 Active")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        padding: '3px 8px',
        borderRadius: 100,
        background: 'rgba(22,101,52,.08)',
        color: '#166534',
        border: '.5px solid rgba(22,101,52,.2)'
      }
    }, "\u25CF LIVE"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      marginBottom: '.625rem'
    }
  }, "Available (", disconnected.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: '.75rem'
    }
  }, disconnected.map(function (cn) {
    return /*#__PURE__*/React.createElement("div", {
      key: cn.n,
      style: {
        background: 'rgba(255,255,255,.85)',
        border: '.5px solid rgba(85,105,112,.12)',
        borderRadius: 10,
        padding: '1rem 1.125rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.875rem',
        marginBottom: '.75rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 7,
        background: cn.bgc || 'rgba(85,105,112,.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: cn.fgc || 'var(--tx)',
        fontSize: 11,
        fontWeight: 700
      }
    }, cn.logo || cn.ico), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13
      }
    }, cn.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--t3)',
        lineHeight: 1.4
      }
    }, cn.desc))), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        marginBottom: '.875rem'
      }
    }, cn.features.slice(0, 2).map(function (f) {
      return /*#__PURE__*/React.createElement("li", {
        key: f,
        style: {
          fontSize: 11.5,
          color: 'var(--t2)',
          lineHeight: 1.6,
          display: 'flex',
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--primary)',
          flexShrink: 0,
          fontSize: 8,
          marginTop: 4
        }
      }, "\u2192"), f);
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (['Vercel', 'Supabase', 'Stripe'].includes(cn.n)) {
          if (setPanel) setPanel('api');
          toast('Add ' + cn.n + ' credentials in API Config above');
        } else toast('OAuth for ' + cn.n + ': go to the provider\u2019s developer console, create an API token, then add it in API Config');
      },
      style: {
        width: '100%',
        background: 'var(--tx)',
        color: '#fff',
        border: 'none',
        borderRadius: 7,
        padding: '.5rem',
        fontSize: 12.5,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'opacity .15s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.opacity = '.85';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.opacity = '1';
      }
    }, "Connect ", cn.n));
  })));
};
var Customize = function Customize() {
  var _useState41 = useState('api'),
    _useState42 = _slicedToArray(_useState41, 2),
    panel = _useState42[0],
    setPanel = _useState42[1];
  var _useState43 = useState(0),
    _useState44 = _slicedToArray(_useState43, 2),
    ss = _useState44[0],
    setSS = _useState44[1];
  var _useState45 = useState(0),
    _useState46 = _slicedToArray(_useState45, 2),
    sc = _useState46[0],
    setSC = _useState46[1];
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    dragOver = _useState48[0],
    setDragOver = _useState48[1];
  var _useState49 = useState([]),
    _useState50 = _slicedToArray(_useState49, 2),
    uploadedSkills = _useState50[0],
    setUploadedSkills = _useState50[1];
  var _useState51 = useState(''),
    _useState52 = _slicedToArray(_useState51, 2),
    uploadMsg = _useState52[0],
    setUploadMsg = _useState52[1];
  var _useState53 = useState(function () {
      return SKILLS.map(function (s) {
        return _objectSpread({}, s);
      });
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    mySkills = _useState54[0],
    setMySkills = _useState54[1];
  var skillFileRef = useRef();
  var s = mySkills[ss] || mySkills[0];
  var c = CONNECTORS[sc];

  // API Config state
  var _useState55 = useState(function () {
      var _window$__phoennixCon9, _window$__phoennixCon0, _window$__phoennixCon1, _window$__phoennixCon10, _window$__phoennixCon11;
      return {
        endpoint: ((_window$__phoennixCon9 = window.__phoennixConfig) === null || _window$__phoennixCon9 === void 0 ? void 0 : _window$__phoennixCon9.endpoint) || '',
        routineSecret: ((_window$__phoennixCon0 = window.__phoennixConfig) === null || _window$__phoennixCon0 === void 0 ? void 0 : _window$__phoennixCon0.routineSecret) || '',
        supabaseUrl: ((_window$__phoennixCon1 = window.__phoennixConfig) === null || _window$__phoennixCon1 === void 0 ? void 0 : _window$__phoennixCon1.supabaseUrl) || '',
        supabaseKey: ((_window$__phoennixCon10 = window.__phoennixConfig) === null || _window$__phoennixCon10 === void 0 ? void 0 : _window$__phoennixCon10.supabaseKey) || '',
        model: ((_window$__phoennixCon11 = window.__phoennixConfig) === null || _window$__phoennixCon11 === void 0 ? void 0 : _window$__phoennixCon11.model) || 'grok-3'
      };
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    apiVals = _useState56[0],
    setApiVals = _useState56[1];
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    apiStatus = _useState58[0],
    setApiStatus = _useState58[1]; // null | 'testing' | 'ok' | 'fail'
  var _useState59 = useState(''),
    _useState60 = _slicedToArray(_useState59, 2),
    apiMsg = _useState60[0],
    setApiMsg = _useState60[1];
  var _useState61 = useState({}),
    _useState62 = _slicedToArray(_useState61, 2),
    showSecrets = _useState62[0],
    setShowSecrets = _useState62[1];
  var saveConfig = function saveConfig() {
    window.__phoennixConfig = _objectSpread(_objectSpread({}, window.__phoennixConfig || {}), apiVals);
    toast('Configuration saved ✓');
    setApiStatus(null);
  };
  var testConnection = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _data$content2, res, data, text, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (apiVals.endpoint) {
              _context5.n = 1;
              break;
            }
            toast('Enter your Vercel endpoint URL first');
            return _context5.a(2);
          case 1:
            setApiStatus('testing');
            setApiMsg('Connecting to PhoennixAI...');
            _context5.p = 2;
            _context5.n = 3;
            return fetch(apiVals.endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                messages: [{
                  role: 'user',
                  content: 'Reply with exactly: PHOENNIXAI_CONNECTED'
                }],
                agentName: 'PhoennixAI',
                model: apiVals.model
              })
            });
          case 3:
            res = _context5.v;
            _context5.n = 4;
            return res.json();
          case 4:
            data = _context5.v;
            text = ((_data$content2 = data.content) === null || _data$content2 === void 0 ? void 0 : _data$content2.map(function (b) {
              return b.text || '';
            }).join('')) || '';
            if (text.includes('PHOENNIXAI_CONNECTED') || res.ok) {
              setApiStatus('ok');
              setApiMsg('Connected — PhoennixAI is live ✓');
              toast('API connected successfully');
            } else {
              setApiStatus('fail');
              setApiMsg('Response received but unexpected: ' + text.slice(0, 80));
            }
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t3 = _context5.v;
            setApiStatus('fail');
            setApiMsg('Connection failed: ' + _t3.message + '. Check CORS — run via http-server or Vercel.');
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 5]]);
    }));
    return function testConnection() {
      return _ref28.apply(this, arguments);
    };
  }();
  var toggleSecret = function toggleSecret(k) {
    return setShowSecrets(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, !p[k]));
    });
  };

  // Cron state
  var _useState63 = useState([{
      id: 1,
      name: 'Morning Brief',
      agent: 'PA',
      cron: '0 7 * * 1-5',
      status: 'active',
      last: 'Today 07:00'
    }, {
      id: 2,
      name: 'Email Triage',
      agent: 'ALL AGENTS',
      cron: '0 8,13,17 * * *',
      status: 'active',
      last: 'Today 13:00'
    }, {
      id: 3,
      name: 'Financial Snapshot',
      agent: 'LEDGER',
      cron: '0 8 * * 1-5',
      status: 'active',
      last: 'Today 08:00'
    }, {
      id: 4,
      name: 'CII World Scan',
      agent: 'SCOUT',
      cron: '30 10 * * 1-5',
      status: 'active',
      last: 'Today 10:30'
    }, {
      id: 5,
      name: 'System Health',
      agent: 'PROBE',
      cron: '0 13 * * *',
      status: 'active',
      last: 'Today 13:00'
    }, {
      id: 6,
      name: 'Issue Triage',
      agent: 'GRID',
      cron: '30 16 * * 1-5',
      status: 'active',
      last: 'Yesterday 16:30'
    }, {
      id: 7,
      name: 'Content Batch',
      agent: 'PULSE',
      cron: '0 9 * * 1',
      status: 'paused',
      last: 'Mon 09:00'
    }, {
      id: 8,
      name: 'PR Digest',
      agent: 'NEXUS',
      cron: '0 19 * * 1-5',
      status: 'active',
      last: 'Today 19:00'
    }, {
      id: 9,
      name: 'Lead Prospecting',
      agent: 'SCOUT + RELAY',
      cron: '0 9 * * 2',
      status: 'active',
      last: 'Tue 09:00'
    }, {
      id: 10,
      name: 'Memory Consolidation',
      agent: 'KAIROS',
      cron: '0 2 * * *',
      status: 'active',
      last: 'Today 02:00'
    }]),
    _useState64 = _slicedToArray(_useState63, 2),
    cronJobs = _useState64[0],
    setCronJobs = _useState64[1];
  var toggleCron = function toggleCron(id) {
    setCronJobs(function (p) {
      return p.map(function (j) {
        return j.id === id ? _objectSpread(_objectSpread({}, j), {}, {
          status: j.status === 'active' ? 'paused' : 'active'
        }) : j;
      });
    });
    var job = cronJobs.find(function (j) {
      return j.id === id;
    });
    toast(job.name + ' ' + (job.status === 'active' ? 'paused' : 'resumed'));
  };
  var runCronNow = /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(job) {
      var res, data, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (apiVals.endpoint) {
              _context6.n = 1;
              break;
            }
            toast('Connect API first — enter Vercel endpoint above');
            return _context6.a(2);
          case 1:
            toast('Running ' + job.name + ' now...');
            _context6.p = 2;
            _context6.n = 3;
            return fetch(apiVals.endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Routine-Key': apiVals.routineSecret
              },
              body: JSON.stringify({
                routine: job.name.toLowerCase().replace(/ /g, '-')
              })
            });
          case 3:
            res = _context6.v;
            _context6.n = 4;
            return res.json();
          case 4:
            data = _context6.v;
            toast(job.name + ' completed — ' + job.agent + ' delivered output');
            _context6.n = 6;
            break;
          case 5:
            _context6.p = 5;
            _t4 = _context6.v;
            toast('Run failed: ' + _t4.message);
          case 6:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 5]]);
    }));
    return function runCronNow(_x3) {
      return _ref29.apply(this, arguments);
    };
  }();

  // .md knowledge base state
  var _useState65 = useState([{
      name: 'phoennixai_agent_dna_pasteable.md',
      section: 'Agent DNA',
      size: '12KB',
      status: 'Active',
      agents: 'All 22'
    }, {
      name: 'phoennixai_project_instructions.md',
      section: 'BOS',
      size: '8KB',
      status: 'Active',
      agents: 'CLAUDE'
    }, {
      name: 'SCRIBE_SOP_Master_v1.md',
      section: 'BOS',
      size: '18KB',
      status: 'Active',
      agents: 'All'
    }, {
      name: 'KAIROS_Daemon_Reference_v1_0.md',
      section: 'ARCH',
      size: '14KB',
      status: 'Active',
      agents: 'KAIROS'
    }, {
      name: 'gstack_phoennixai_SKILL.md',
      section: 'Skills',
      size: '6KB',
      status: 'Active',
      agents: 'NEXUS'
    }, {
      name: 'skill_forge_self_fetch.md',
      section: 'Skills',
      size: '9KB',
      status: 'Active',
      agents: 'All'
    }, {
      name: 'RYD_Working_Glossary_v0_1.md',
      section: 'RYD',
      size: '4KB',
      status: 'Pending',
      agents: 'SCRIBE'
    }, {
      name: 'CLAUDE_Company_Evaluation_v1.md',
      section: 'BOS',
      size: '7KB',
      status: 'Active',
      agents: 'CLAUDE'
    }]),
    _useState66 = _slicedToArray(_useState65, 2),
    mdFiles = _useState66[0],
    setMdFiles = _useState66[1];
  var _useState67 = useState(false),
    _useState68 = _slicedToArray(_useState67, 2),
    mdDrag = _useState68[0],
    setMdDrag = _useState68[1];
  var mdRef = useRef();
  var handleMdDrop = function handleMdDrop(e) {
    e.preventDefault();
    setMdDrag(false);
    var files = _toConsumableArray(e.dataTransfer.files).filter(function (f) {
      return f.name.endsWith('.md');
    });
    files.forEach(function (file) {
      setMdFiles(function (p) {
        return [{
          name: file.name,
          section: 'Unassigned',
          size: Math.round(file.size / 1024) + 'KB',
          status: 'Pending',
          agents: '—'
        }].concat(_toConsumableArray(p));
      });
      toast(file.name + ' added to Knowledge Base');
    });
  };
  var handleSkillDrop = function handleSkillDrop(e) {
    e.preventDefault();
    setDragOver(false);
    var files = _toConsumableArray(e.dataTransfer.files).filter(function (f) {
      return f.name.endsWith('.md') || f.name.endsWith('.txt') || f.name.endsWith('.json');
    });
    if (!files.length) {
      toast('Only .md, .txt, .json accepted');
      return;
    }
    files.forEach(function (file) {
      var r = new FileReader();
      r.onload = function () {
        setUploadedSkills(function (prev) {
          return [].concat(_toConsumableArray(prev), [{
            name: file.name.replace(/\.\w+$/, ''),
            size: Math.round(file.size / 1024) + 'KB',
            uploaded: new Date().toLocaleDateString()
          }]);
        });
        toast('Skill "' + file.name + '" uploaded');
      };
      r.readAsText(file);
    });
  };
  var handleSkillFile = function handleSkillFile(e) {
    var files = _toConsumableArray(e.target.files);
    if (!files.length) return;
    handleSkillDrop({
      preventDefault: function preventDefault() {},
      dataTransfer: {
        files: files
      }
    });
  };
  var NAV_ITEMS = [['api', '⚙️', 'API Config'], ['crons', '⏱', 'Cron Jobs'], ['knowledge', '📚', 'Knowledge Base'], ['connectors', '🔗', 'Connectors'], ['skills', '🧠', 'Skills'], ['apikeys', '🔑', 'API Keys']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      height: 'calc(100vh - 49px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      borderRight: '.5px solid rgba(85,105,112,.12)',
      padding: '.625rem',
      background: 'rgba(255,255,255,.7)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      padding: '.375rem .75rem .625rem',
      marginBottom: 2
    }
  }, "Settings"), NAV_ITEMS.map(function (_ref30) {
    var _ref31 = _slicedToArray(_ref30, 3),
      k = _ref31[0],
      ic = _ref31[1],
      lbl = _ref31[2];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onClick: function onClick() {
        return setPanel(k);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '.5rem .75rem',
        borderRadius: 8,
        fontSize: 12.5,
        color: panel === k ? 'var(--tx)' : 'var(--t2)',
        background: panel === k ? 'rgba(85,105,112,.09)' : 'transparent',
        cursor: 'pointer',
        fontWeight: panel === k ? 600 : 400,
        transition: 'all .15s',
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        opacity: .7
      }
    }, ic), lbl);
  })), panel === 'api' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.75rem',
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 20,
      letterSpacing: '1.5px',
      marginBottom: 4
    }
  }, "API Configuration"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--t2)',
      marginBottom: '1.5rem',
      lineHeight: 1.6
    }
  }, "Connect your Vercel endpoint to make all agents live. Your API key never appears here \u2014 it lives in Vercel environment variables only."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      display: 'block',
      marginBottom: 6
    }
  }, "Vercel Endpoint URL ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ef4444'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "field",
    placeholder: "https://phoennixai-api.vercel.app/api/claude",
    value: apiVals.endpoint,
    onChange: function onChange(e) {
      return setApiVals(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          endpoint: e.target.value
        });
      });
    },
    style: {
      flex: 1,
      fontFamily: 'Fira Code,monospace',
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: testConnection,
    disabled: apiStatus === 'testing',
    className: "btn-solid",
    style: {
      padding: '.5rem 1rem',
      fontSize: 12.5,
      flexShrink: 0,
      opacity: apiStatus === 'testing' ? .6 : 1
    }
  }, apiStatus === 'testing' ? 'Testing…' : 'Test')), apiStatus && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: '6px 10px',
      borderRadius: 6,
      background: apiStatus === 'ok' ? 'rgba(22,101,52,.08)' : apiStatus === 'fail' ? 'rgba(153,27,27,.08)' : 'rgba(85,105,112,.06)',
      border: '.5px solid ' + (apiStatus === 'ok' ? 'rgba(22,101,52,.25)' : apiStatus === 'fail' ? 'rgba(153,27,27,.25)' : 'rgba(85,105,112,.15)'),
      fontFamily: 'Fira Code,monospace',
      fontSize: 11,
      color: apiStatus === 'ok' ? '#166534' : apiStatus === 'fail' ? '#991b1b' : 'var(--t2)'
    }
  }, apiMsg)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      display: 'block',
      marginBottom: 6
    }
  }, "AI Model"), /*#__PURE__*/React.createElement("select", {
    className: "field",
    value: apiVals.model,
    onChange: function onChange(e) {
      return setApiVals(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          model: e.target.value
        });
      });
    },
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "grok-3"
  }, "Grok 3 \u2014 Default (fast, balanced)"), /*#__PURE__*/React.createElement("option", {
    value: "grok-3-mini"
  }, "Grok 3 Mini \u2014 Lightweight (lowest cost)"), /*#__PURE__*/React.createElement("option", {
    value: "claude-sonnet-4-20250514"
  }, "Claude Sonnet 4.6 \u2014 Fast, cost-efficient"), /*#__PURE__*/React.createElement("option", {
    value: "claude-opus-4-20250514"
  }, "Claude Opus 4.6 \u2014 Deep reasoning (30-min budget)"), /*#__PURE__*/React.createElement("option", {
    value: "claude-haiku-4-5-20251001"
  }, "Claude Haiku 4.5 \u2014 Fast tasks (lowest cost)"), /*#__PURE__*/React.createElement("optgroup", {
    label: "\u2014 NVIDIA NIM (requires NVIDIA_API_KEY) \u2014"
  }, /*#__PURE__*/React.createElement("option", {
    value: "deepseek-ai/deepseek-v3-0324"
  }, "DeepSeek V3 Flash \u2014 Fast, free endpoint (NIM)"), /*#__PURE__*/React.createElement("option", {
    value: "deepseek-ai/deepseek-v4-pro"
  }, "DeepSeek V4 Pro \u2014 1M ctx, MoE, best for complex code (NIM)"), /*#__PURE__*/React.createElement("option", {
    value: "zhipuai/glm-5.1"
  }, "GLM-5.1 \u2014 Agentic workflows, long-horizon reasoning (NIM)"), /*#__PURE__*/React.createElement("option", {
    value: "minimax/minimax-m2.7"
  }, "MiniMax M2.7 \u2014 230B, coding + office tasks \u2014 Free Endpoint (NIM)"), /*#__PURE__*/React.createElement("option", {
    value: "google/gemma-4-31b-it"
  }, "Gemma 4 31B \u2014 Frontier reasoning, agentic (NIM)"), /*#__PURE__*/React.createElement("option", {
    value: "qwen/qwen3-coder-480b-a35b-instruct"
  }, "Qwen3 Coder 480B \u2014 256k ctx, best agentic coding \u2014 Free Endpoint (NIM)")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      display: 'block',
      marginBottom: 6
    }
  }, "Routine Secret ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: 'var(--ink4)',
      textTransform: 'none',
      letterSpacing: 0
    }
  }, "\u2014 must match ROUTINE_SECRET in Vercel env vars")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: showSecrets.rs ? 'text' : 'password',
    placeholder: "phoennix-routines-2026-vw",
    value: apiVals.routineSecret,
    onChange: function onChange(e) {
      return setApiVals(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          routineSecret: e.target.value
        });
      });
    },
    style: {
      flex: 1,
      fontFamily: 'Fira Code,monospace',
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toggleSecret('rs');
    },
    className: "btn-ghost",
    style: {
      padding: '.5rem .75rem',
      fontSize: 11,
      flexShrink: 0
    }
  }, showSecrets.rs ? 'Hide' : 'Show'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.04)',
      border: '.5px solid rgba(85,105,112,.15)',
      borderRadius: 10,
      padding: '1rem 1.125rem',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      marginBottom: '.875rem'
    }
  }, "Supabase \u2014 Agent Memory & Audit Logs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      color: 'var(--t3)',
      display: 'block',
      marginBottom: 4
    }
  }, "Project URL"), /*#__PURE__*/React.createElement("input", {
    className: "field",
    placeholder: "https://xxxx.supabase.co",
    value: apiVals.supabaseUrl,
    onChange: function onChange(e) {
      return setApiVals(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          supabaseUrl: e.target.value
        });
      });
    },
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 12
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      color: 'var(--t3)',
      display: 'block',
      marginBottom: 4
    }
  }, "Anon Key (public)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: showSecrets.sk ? 'text' : 'password',
    placeholder: "eyJhbGci...",
    value: apiVals.supabaseKey,
    onChange: function onChange(e) {
      return setApiVals(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          supabaseKey: e.target.value
        });
      });
    },
    style: {
      flex: 1,
      fontFamily: 'Fira Code,monospace',
      fontSize: 11
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toggleSecret('sk');
    },
    className: "btn-ghost",
    style: {
      padding: '.5rem .75rem',
      fontSize: 11,
      flexShrink: 0
    }
  }, showSecrets.sk ? 'Hide' : 'Show'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      paddingTop: '1rem',
      borderTop: '.5px solid rgba(85,105,112,.12)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: saveConfig,
    className: "btn-solid",
    style: {
      padding: '.625rem 1.5rem'
    }
  }, "Save configuration"), /*#__PURE__*/React.createElement("button", {
    onClick: testConnection,
    className: "btn-ghost",
    style: {
      padding: '.625rem 1rem'
    }
  }, "Test connection")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      background: 'rgba(85,105,112,.04)',
      border: '.5px solid rgba(85,105,112,.12)',
      borderRadius: 10,
      padding: '1rem 1.125rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      marginBottom: '.75rem'
    }
  }, "What each field does"), [['Vercel Endpoint', 'The URL of your deployed api/ai.js function. All agent chat and routine calls go here. Your AI provider key lives in Vercel env vars, not here.'], ['AI Model', 'Grok 3 for daily work. Switch to a larger model only for deep-reasoning tasks — check your provider\u2019s pricing.'], ['Routine Secret', 'The X-Routine-Key header that protects your cron endpoints from unauthorized triggers. Must match Vercel env var exactly.'], ['Supabase', 'Optional — enables agent memory persistence and routine audit logs across sessions. Highly recommended.']].map(function (_ref32) {
    var _ref33 = _slicedToArray(_ref32, 2),
      k = _ref33[0],
      v = _ref33[1];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        gap: '.75rem',
        padding: '.5rem 0',
        borderBottom: '.5px solid rgba(85,105,112,.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 12,
        color: 'var(--tx)',
        width: 120,
        flexShrink: 0
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--t2)',
        lineHeight: 1.5
      }
    }, v));
  }))), panel === 'crons' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 20,
      letterSpacing: '1.5px',
      marginBottom: 4
    }
  }, "Cron Jobs \u2014 KAIROS Schedule"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--t2)',
      marginBottom: '1.25rem',
      lineHeight: 1.6
    }
  }, "All 10 routines scheduled via Vercel Cron. Toggle pause/resume or trigger manually. API endpoint required to run live."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--w)',
      border: '.5px solid rgba(85,105,112,.15)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 100px 140px 80px 80px',
      gap: 0,
      padding: '8px 14px',
      borderBottom: '.5px solid rgba(85,105,112,.12)',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--t3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Routine"), /*#__PURE__*/React.createElement("div", null, "Agent"), /*#__PURE__*/React.createElement("div", null, "Schedule"), /*#__PURE__*/React.createElement("div", null, "Status"), /*#__PURE__*/React.createElement("div", null, "Actions")), cronJobs.map(function (job) {
    return /*#__PURE__*/React.createElement("div", {
      key: job.id,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 100px 140px 80px 80px',
        gap: 0,
        padding: '10px 14px',
        borderBottom: '.5px solid rgba(85,105,112,.06)',
        alignItems: 'center',
        transition: 'background .1s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.background = 'rgba(85,105,112,.03)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.background = '';
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 12.5
      }
    }, job.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, "Last: ", job.last)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--primary)',
        fontFamily: 'Fira Code,monospace'
      }
    }, job.agent), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 10,
        color: 'var(--t2)',
        background: 'rgba(85,105,112,.06)',
        padding: '2px 6px',
        borderRadius: 4,
        display: 'inline-block'
      }
    }, job.cron), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        padding: '2px 8px',
        borderRadius: 100,
        background: job.status === 'active' ? 'rgba(22,101,52,.1)' : 'rgba(146,64,14,.1)',
        color: job.status === 'active' ? '#166534' : '#92400e',
        border: '.5px solid ' + (job.status === 'active' ? 'rgba(22,101,52,.2)' : 'rgba(146,64,14,.2)'),
        fontFamily: 'Fira Code,monospace',
        letterSpacing: '.5px'
      }
    }, job.status === 'active' ? '● ACTIVE' : '⏸ PAUSED')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleCron(job.id);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 8px',
        fontSize: 10
      }
    }, job.status === 'active' ? 'Pause' : 'Resume'), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return runCronNow(job);
      },
      className: "btn-solid",
      style: {
        padding: '3px 8px',
        fontSize: 10
      }
    }, "Run")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.25rem',
      background: 'rgba(171,169,68,.05)',
      border: '.5px solid rgba(171,169,68,.2)',
      borderRadius: 10,
      padding: '1rem 1.125rem',
      fontSize: 12,
      color: '#8A8835',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("strong", null, "To activate on Vercel:"), " Your vercel.json file (already built) contains all 10 cron schedules. Push it to your ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 11,
      background: 'rgba(171,169,68,.12)',
      padding: '1px 5px',
      borderRadius: 3
    }
  }, "phoennixai-api"), " repo and deploy. Vercel runs them automatically \u2014 no server needed, no human action required.")), panel === 'knowledge' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 20,
      letterSpacing: '1.5px',
      marginBottom: 4
    }
  }, "Knowledge Base \u2014 Agent Memory Files"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--t2)',
      marginBottom: '1rem',
      lineHeight: 1.6
    }
  }, "All .md files that agents reference. These live in your ", /*#__PURE__*/React.createElement("strong", null, "private GitHub repo"), " and are injected into agent context via project instructions. Drop new files below to register them."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(85,105,112,.04)',
      border: '.5px solid rgba(85,105,112,.15)',
      borderRadius: 10,
      padding: '1rem',
      marginBottom: '1.25rem',
      fontSize: 12,
      color: 'var(--t2)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--tx)'
    }
  }, "Where do .md files go?"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "GitHub repo:"), " ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 11,
      background: 'rgba(85,105,112,.1)',
      padding: '1px 5px',
      borderRadius: 3
    }
  }, "phoennixai-knowledge"), " (private) \u2192 ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 11
    }
  }, "docs/"), " folder", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Claude Projects:"), " Upload to this Project's files panel \u2014 agents reference them every session automatically", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Supabase:"), " Long-term \u2014 SIGNAL stores embeddings in pgvector for semantic search by SAGE", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Never"), " in the public platform repo \u2014 .md files contain proprietary agent DNA"), /*#__PURE__*/React.createElement("div", {
    onDrop: handleMdDrop,
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setMdDrag(true);
    },
    onDragLeave: function onDragLeave() {
      return setMdDrag(false);
    },
    onClick: function onClick() {
      var _mdRef$current;
      return (_mdRef$current = mdRef.current) === null || _mdRef$current === void 0 ? void 0 : _mdRef$current.click();
    },
    style: {
      border: '1.5px dashed ' + (mdDrag ? 'var(--olive)' : 'rgba(85,105,112,.25)'),
      borderRadius: 10,
      padding: '.875rem',
      marginBottom: '1.25rem',
      textAlign: 'center',
      cursor: 'pointer',
      background: mdDrag ? 'rgba(171,169,68,.05)' : 'rgba(255,255,255,.5)',
      transition: 'all .2s'
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: mdRef,
    type: "file",
    accept: ".md",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      var f = _toConsumableArray(e.target.files);
      f.forEach(function (file) {
        return setMdFiles(function (p) {
          return [{
            name: file.name,
            section: 'Unassigned',
            size: Math.round(file.size / 1024) + 'KB',
            status: 'Pending',
            agents: '—'
          }].concat(_toConsumableArray(p));
        });
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      opacity: .35,
      marginBottom: 4
    }
  }, "\uD83D\uDCC4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, "Drop .md files to register"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--t3)',
      fontFamily: 'Fira Code,monospace'
    }
  }, "Agent DNA \xB7 SOPs \xB7 Skill files \xB7 Project instructions")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--w)',
      border: '.5px solid rgba(85,105,112,.15)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 80px 60px 70px 1fr 80px',
      gap: 0,
      padding: '7px 14px',
      borderBottom: '.5px solid rgba(85,105,112,.12)',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--t3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "File"), /*#__PURE__*/React.createElement("div", null, "Section"), /*#__PURE__*/React.createElement("div", null, "Size"), /*#__PURE__*/React.createElement("div", null, "Status"), /*#__PURE__*/React.createElement("div", null, "Agents"), /*#__PURE__*/React.createElement("div", null, "Actions")), mdFiles.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.name + i,
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 80px 55px 70px 90px auto',
        gap: 0,
        padding: '9px 14px',
        borderBottom: '.5px solid rgba(85,105,112,.05)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 11,
        color: 'var(--tx)',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingRight: 8
      }
    }, f.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)'
      }
    }, f.section), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, f.size), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        padding: '2px 7px',
        borderRadius: 100,
        fontFamily: 'Fira Code,monospace',
        background: f.status === 'Active' ? 'rgba(22,101,52,.08)' : 'rgba(146,64,14,.08)',
        color: f.status === 'Active' ? '#166534' : '#92400e',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return setMdFiles(function (p) {
          return p.map(function (x, j) {
            return j === i ? _objectSpread(_objectSpread({}, x), {}, {
              status: x.status === 'Active' ? 'Pending' : 'Active'
            }) : x;
          });
        });
      }
    }, f.status)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--t2)',
        fontFamily: 'Fira Code,monospace'
      }
    }, f.agents), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      title: "Edit section",
      onClick: function onClick() {
        var s = prompt('Section (BOS/FOS/MOS/DOS/ROS/RYD/ARCH/Skills/Agent DNA):', f.section);
        if (s) setMdFiles(function (p) {
          return p.map(function (x, j) {
            return j === i ? _objectSpread(_objectSpread({}, x), {}, {
              section: s
            }) : x;
          });
        });
      },
      style: {
        background: 'none',
        border: '.5px solid rgba(85,105,112,.2)',
        borderRadius: 4,
        padding: '2px 6px',
        fontSize: 9.5,
        color: 'var(--t2)',
        cursor: 'pointer',
        fontFamily: 'Fira Code,monospace',
        transition: 'all .12s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.borderColor = 'rgba(85,105,112,.5)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.borderColor = 'rgba(85,105,112,.2)';
      }
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      title: "Delete file",
      onClick: function onClick() {
        setMdFiles(function (p) {
          return p.filter(function (_, j) {
            return j !== i;
          });
        });
        toast(f.name + ' removed from Knowledge Base');
      },
      style: {
        background: 'none',
        border: '.5px solid rgba(153,27,27,.2)',
        borderRadius: 4,
        padding: '2px 6px',
        fontSize: 9.5,
        color: '#991b1b',
        cursor: 'pointer',
        fontFamily: 'Fira Code,monospace',
        transition: 'all .12s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.background = 'rgba(153,27,27,.06)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.background = 'none';
      }
    }, "\u2715")));
  }))), panel === 'connectors' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.5rem 2rem',
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 20,
      letterSpacing: '1.5px',
      marginBottom: 4
    }
  }, "Connectors"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--t2)',
      marginBottom: '1.5rem',
      lineHeight: 1.6
    }
  }, "Connect your tools so agents can read, write, and act on real data. A connector only shows as active when you've saved credentials."), /*#__PURE__*/React.createElement(ConnectorsPanel, {
    setPanel: setPanel
  })), panel === 'skills' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210,
      borderRight: '.5px solid rgba(85,105,112,.12)',
      overflowY: 'auto',
      padding: '.5rem',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '.5rem .75rem',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--t3)'
    }
  }, "Skills (", mySkills.length + uploadedSkills.length, ")", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _skillFileRef$current;
      return (_skillFileRef$current = skillFileRef.current) === null || _skillFileRef$current === void 0 ? void 0 : _skillFileRef$current.click();
    },
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--primary)',
      fontSize: 16,
      cursor: 'pointer',
      lineHeight: 1
    },
    title: "Upload"
  }, "+")), /*#__PURE__*/React.createElement("input", {
    ref: skillFileRef,
    type: "file",
    accept: ".md,.txt,.json",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: handleSkillFile
  }), uploadMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px',
      margin: '0 4px 4px',
      borderRadius: 5,
      background: 'rgba(171,169,68,.1)',
      border: '.5px solid rgba(171,169,68,.2)',
      fontSize: 10,
      color: 'var(--am)',
      fontFamily: 'Fira Code,monospace'
    }
  }, uploadMsg), uploadedSkills.map(function (sk, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: sk.name + i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '.45rem .75rem',
        borderRadius: 8,
        borderLeft: '2px solid var(--olive)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel-ico",
      style: {
        background: 'rgba(171,169,68,.15)',
        color: 'var(--am)',
        flexShrink: 0
      }
    }, "\u2191"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, sk.name.substring(0, 14)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setUploadedSkills(function (p) {
          return p.filter(function (_, j) {
            return j !== i;
          });
        });
        toast('Removed');
      },
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--t3)',
        cursor: 'pointer',
        fontSize: 12,
        padding: '0 2px',
        flexShrink: 0
      }
    }, "\u2715"));
  }), mySkills.map(function (sk, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: sk.n + i,
      onClick: function onClick() {
        return setSS(i);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '.45rem .75rem',
        borderRadius: 8,
        cursor: 'pointer',
        borderLeft: ss === i ? '2px solid ' + (sk.color || 'var(--primary)') : '2px solid transparent',
        background: ss === i ? 'rgba(85,105,112,.06)' : 'transparent',
        transition: 'all .12s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel-ico",
      style: {
        background: (sk.color || 'var(--primary)') + '18',
        color: sk.color || 'var(--primary)',
        flexShrink: 0
      }
    }, sk.n.charAt(0).toUpperCase()), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: ss === i ? 600 : 400
      }
    }, sk.n.substring(0, 14)), sk.active && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: 'var(--gn)',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        var n = sk.n;
        setMySkills(function (p) {
          return p.filter(function (_, j) {
            return j !== i;
          });
        });
        if (ss >= i) setSS(Math.max(0, ss - 1));
        toast(n + ' deleted');
      },
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--t3)',
        cursor: 'pointer',
        fontSize: 12,
        padding: '0 2px',
        flexShrink: 0,
        opacity: 0,
        transition: 'opacity .15s'
      },
      className: "del-btn"
    }, "\u2715"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.25rem 1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.25rem',
      background: 'rgba(85,105,112,.04)',
      border: '.5px dashed rgba(85,105,112,.22)',
      borderRadius: 10,
      padding: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--t3)',
      marginBottom: 6
    }
  }, "Paste SKILL.md content"), /*#__PURE__*/React.createElement("textarea", {
    id: "skill-paste-area",
    placeholder: "Paste any SKILL.md file content here and click Add...",
    rows: 4,
    className: "field",
    style: {
      fontSize: 11.5,
      fontFamily: 'Fira Code,monospace',
      marginBottom: 8,
      resize: 'vertical'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    style: {
      fontSize: 11.5
    },
    onClick: function onClick() {
      var _document$getElementB;
      var txt = ((_document$getElementB = document.getElementById('skill-paste-area')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value) || '';
      if (!txt.trim()) {
        toast('Paste a SKILL.md first');
        return;
      }
      var nameMatch = txt.match(/name:\s*(.+)/);
      var n = (nameMatch ? nameMatch[1].trim() : 'skill-' + Date.now()).replace(/['"]/g, '');
      setMySkills(function (p) {
        return [].concat(_toConsumableArray(p), [{
          n: n,
          desc: txt.slice(0, 300),
          t: 'Pasted',
          d: 'Just now',
          active: true,
          color: '#ABA944',
          cmd: '/' + n
        }]);
      });
      document.getElementById('skill-paste-area').value = '';
      toast('"' + n + '" added to skills');
    }
  }, "Add skill \u2192")), mySkills[ss] && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: mySkills[ss].color || 'var(--primary)',
      height: 3,
      marginBottom: '1rem',
      borderRadius: 2,
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '.75rem',
      paddingBottom: '.75rem',
      borderBottom: '.5px solid rgba(85,105,112,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      fontFamily: 'Agdasima,sans-serif'
    }
  }, mySkills[ss].n), mySkills[ss].cmd && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 9,
      padding: '2px 8px',
      borderRadius: 4,
      background: (mySkills[ss].color || '#556970') + '20',
      color: mySkills[ss].color || '#556970'
    }
  }, mySkills[ss].cmd)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    style: {
      fontSize: 11,
      color: 'var(--rd)',
      borderColor: 'rgba(153,27,27,.2)',
      padding: '.3rem .625rem'
    },
    onClick: function onClick() {
      var n = mySkills[ss].n;
      setMySkills(function (p) {
        return p.filter(function (_, i) {
          return i !== ss;
        });
      });
      setSS(Math.max(0, ss - 1));
      toast(n + ' deleted');
    }
  }, "Delete"), /*#__PURE__*/React.createElement("div", {
    className: "toggle-track on"
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggle-thumb"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.5rem',
      marginBottom: '1rem',
      flexWrap: 'wrap',
      fontSize: 12
    }
  }, [['Added', 'You'], ['Updated', mySkills[ss].d], ['Trigger', mySkills[ss].t]].map(function (_ref34) {
    var _ref35 = _slicedToArray(_ref34, 2),
      k = _ref35[0],
      v = _ref35[1];
    return /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        fontWeight: 600
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500
      }
    }, v));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--t2)',
      lineHeight: 1.75
    }
  }, mySkills[ss].desc)))), panel === 'apikeys' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.75rem',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(ApiKeys, null)));
};

/* ── USER MANUAL ── */
var UserManual = function UserManual() {
  var _useState69 = useState(0),
    _useState70 = _slicedToArray(_useState69, 2),
    sel = _useState70[0],
    setSel = _useState70[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      height: 'calc(100vh - 49px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      borderRight: '.5px solid rgba(85,105,112,.12)',
      padding: '.875rem .625rem',
      overflowY: 'auto',
      background: 'rgba(255,255,255,.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--t2)',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      padding: '.25rem .75rem',
      marginBottom: '.5rem'
    }
  }, "Contents"), MANUAL.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.t,
      onClick: function onClick() {
        return setSel(i);
      },
      className: 'toc-item ' + (sel === i ? 'active' : '')
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace',
        fontWeight: 600,
        width: 18,
        flexShrink: 0
      }
    }, String(i + 1).padStart(2, '0')), m.t);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '2.5rem',
      maxWidth: 720
    }
  }, MANUAL.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.t,
      style: {
        display: sel === i ? 'block' : 'none',
        marginBottom: '3rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: '#ABA944',
        marginBottom: '.5rem'
      }
    }, "Chapter ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: '-.4px',
        marginBottom: '1rem'
      }
    }, m.t), m.body.split('\n\n').map(function (p, j) {
      return /*#__PURE__*/React.createElement("p", {
        key: j,
        style: {
          fontSize: 14,
          color: 'var(--t2)',
          lineHeight: 1.85,
          marginBottom: '.875rem'
        }
      }, p);
    }), m.key && /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(171,169,68,.06)',
        border: '.5px solid rgba(171,169,68,.2)',
        borderLeft: '3px solid #ABA944',
        borderRadius: '0 10px 10px 0',
        padding: '.875rem 1.125rem',
        marginTop: '.875rem',
        fontSize: 13.5,
        color: 'var(--tx)',
        lineHeight: 1.7,
        fontStyle: 'italic'
      }
    }, m.key));
  })));
};

/* ── SEARCH VIEW ── */
var SearchView = function SearchView(_ref36) {
  var setView = _ref36.setView,
    setSA = _ref36.setSA;
  var _useState71 = useState(''),
    _useState72 = _slicedToArray(_useState71, 2),
    q = _useState72[0],
    setQ = _useState72[1];
  var _useState73 = useState([]),
    _useState74 = _slicedToArray(_useState73, 2),
    results = _useState74[0],
    setResults = _useState74[1];
  var allItems = [].concat(_toConsumableArray(AGENTS.map(function (a) {
    return {
      type: 'agent',
      name: a.n,
      sub: a.r,
      desc: a.desc,
      color: a.c,
      action: function action() {
        var i = AGENTS.findIndex(function (ag) {
          return ag.n === a.n;
        });
        setSA(i);
        setView('chat');
      }
    };
  })), _toConsumableArray(ROUTINES.map(function (r) {
    return {
      type: 'routine',
      name: r.name,
      sub: r.agent + ' · ' + r.trigger,
      desc: r.desc,
      color: '#ABA944',
      action: function action() {
        return setView('routines');
      }
    };
  })), _toConsumableArray(SKILLS.map(function (s) {
    return {
      type: 'skill',
      name: s.n,
      sub: s.t + ' · ' + s.d,
      desc: s.desc,
      color: '#2d7a4f',
      action: function action() {
        return setView('customize');
      }
    };
  })));
  var handleSearch = function handleSearch(val) {
    setQ(val);
    if (!val.trim()) {
      setResults([]);
      return;
    }
    setResults(allItems.filter(function (i) {
      return i.name.toLowerCase().includes(val.toLowerCase()) || i.sub.toLowerCase().includes(val.toLowerCase()) || i.desc.toLowerCase().includes(val.toLowerCase());
    }).slice(0, 8));
  };
  return /*#__PURE__*/ /* Full-screen backdrop — click outside closes */React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(247,246,242,.7)',
      backdropFilter: 'blur(12px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '10vh'
    },
    onClick: function onClick() {
      return setView('home');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 580,
      background: '#fff',
      border: '1px solid rgba(85,105,112,.18)',
      borderRadius: 14,
      boxShadow: '0 24px 80px rgba(85,105,112,.18)',
      overflow: 'hidden'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '.875rem 1.125rem',
      borderBottom: results.length || q ? '.5px solid rgba(85,105,112,.1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--t3)",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 11l2.5 2.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: function onChange(e) {
      return handleSearch(e.target.value);
    },
    placeholder: "Search agents, routines, skills...",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: 15,
      color: 'var(--tx)',
      background: 'transparent',
      fontFamily: 'Source Serif 4,serif'
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Escape' && setView('home');
    }
  }), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 10,
      color: 'var(--t3)',
      background: 'rgba(85,105,112,.08)',
      padding: '2px 7px',
      borderRadius: 4,
      border: '.5px solid rgba(85,105,112,.15)'
    }
  }, "Esc")), !q && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: .5,
      padding: '.5rem'
    }
  }, [['Agents', '◉', 'agents'], ['Routines', '⚡', 'routines'], ['Design', '◈', 'design'], ['Client Data', '▣', 'client'], ['Code', '⧉', 'code'], ['Manual', '?', 'manual']].map(function (_ref37) {
    var _ref38 = _slicedToArray(_ref37, 3),
      lbl = _ref38[0],
      ic = _ref38[1],
      v = _ref38[2];
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      onClick: function onClick() {
        return setView(v);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '.6rem .875rem',
        borderRadius: 8,
        cursor: 'pointer',
        fontSize: 13,
        color: 'var(--t2)',
        fontWeight: 500,
        transition: 'background .1s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.background = 'rgba(85,105,112,.06)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .5,
        fontSize: 12
      }
    }, ic), lbl);
  })), results.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 320,
      overflowY: 'auto'
    }
  }, results.map(function (r, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        r.action();
        setView(r.type === 'agent' ? 'chat' : r.type === 'routine' ? 'routines' : 'customize');
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '.75rem 1.125rem',
        cursor: 'pointer',
        borderTop: '.5px solid rgba(85,105,112,.06)',
        transition: 'background .1s'
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.background = 'rgba(85,105,112,.04)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: r.color || 'var(--t3)',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: 'var(--tx)'
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.sub)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        color: 'var(--t3)',
        textTransform: 'uppercase',
        letterSpacing: 1,
        flexShrink: 0
      }
    }, r.type));
  })), q && results.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2rem',
      textAlign: 'center',
      color: 'var(--t3)',
      fontSize: 13,
      fontFamily: 'Fira Code,monospace'
    }
  }, "No results for \"", q, "\"")));
};

/* ── CODE VIEW — PhoennixAI White Terminal ── */
var CodeView = function CodeView() {
  var _window$__phoennixCon14;
  var _useState75 = useState(''),
    _useState76 = _slicedToArray(_useState75, 2),
    termInput = _useState76[0],
    setTermInput = _useState76[1];
  var _useState77 = useState([{
      type: 'meta',
      text: 'Session resumed · phoennix-ai repo · Sonnet 4.6'
    }, {
      type: 'pr',
      branch: 'main ← claude/pull-gemma4-model-Eojoa',
      adds: 132,
      dels: 2,
      status: 'Merged'
    }, {
      type: 'warn',
      text: 'setup_phoennixai_skills.sh — not found in repo. Only setup-remote-control.sh exists.'
    }, {
      type: 'nexus',
      text: 'Do you want me to create setup_phoennixai_skills.sh? Tell me what it should do — install graphify, configure Claude Code skills, set up MCP servers, or something else?'
    }]),
    _useState78 = _slicedToArray(_useState77, 2),
    termLines = _useState78[0],
    setTermLines = _useState78[1];
  var _useState79 = useState(false),
    _useState80 = _slicedToArray(_useState79, 2),
    loading = _useState80[0],
    setLoading = _useState80[1];
  var _useState81 = useState(function () {
      return new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }),
    _useState82 = _slicedToArray(_useState81, 2),
    lastTime = _useState82[0],
    setLastTime = _useState82[1];
  var bottomRef = useRef();
  useEffect(function () {
    var _bottomRef$current2;
    (_bottomRef$current2 = bottomRef.current) === null || _bottomRef$current2 === void 0 || _bottomRef$current2.scrollIntoView({
      behavior: 'smooth'
    });
  }, [termLines]);
  var projects = [{
    name: 'phoenix-platform',
    desc: 'Main platform — Next.js + Supabase + Vercel',
    branch: 'main',
    status: 'Deployed',
    last: '2 hrs ago',
    agents: 'NEXUS · PROBE'
  }, {
    name: 'ryd-client-app',
    desc: 'Reset Your Digital — client-facing platform',
    branch: 'main',
    status: 'Deployed',
    last: 'Yesterday',
    agents: 'NEXUS · PROBE'
  }, {
    name: 'phoennixai-mission-control',
    desc: 'Mission Control BOS dashboard',
    branch: 'main',
    status: 'Deployed',
    last: '3 days ago',
    agents: 'NEXUS · GRID'
  }, {
    name: 'vantage-ryd-intel',
    desc: 'VANTAGE intelligence platform — Nathan Mather',
    branch: 'dev',
    status: 'In Build',
    last: 'Today',
    agents: 'NEXUS · SCRIBE'
  }];
  var sendTerm = /*#__PURE__*/function () {
    var _ref39 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var cmd, time, _window$__phoennixCon12, _window$__phoennixCon13, ep, apiKey, reply, _d$content, _d$error, res, d, _d$content2, _d$error2, _res, _d, _t5;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (!(!termInput.trim() || loading)) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            cmd = termInput.trim();
            setTermInput('');
            time = new Date().toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit'
            });
            setTermLines(function (p) {
              return [].concat(_toConsumableArray(p), [{
                type: 'user',
                text: cmd,
                time: time
              }]);
            });
            setLoading(true);
            _context7.p = 2;
            ep = (_window$__phoennixCon12 = window.__phoennixConfig) === null || _window$__phoennixCon12 === void 0 ? void 0 : _window$__phoennixCon12.endpoint;
            apiKey = (_window$__phoennixCon13 = window.__phoennixConfig) === null || _window$__phoennixCon13 === void 0 ? void 0 : _window$__phoennixCon13.anthropic;
            reply = '';
            if (!ep) {
              _context7.n = 5;
              break;
            }
            _context7.n = 3;
            return fetch(ep, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                messages: [{
                  role: 'user',
                  content: 'NEXUS terminal. phoennix-ai repo context. Command: ' + cmd
                }],
                agentName: 'NEXUS'
              })
            });
          case 3:
            res = _context7.v;
            _context7.n = 4;
            return res.json();
          case 4:
            d = _context7.v;
            reply = ((_d$content = d.content) === null || _d$content === void 0 ? void 0 : _d$content.filter(function (b) {
              return b.type === 'text';
            }).map(function (b) {
              return b.text;
            }).join('\n')) || ((_d$error = d.error) === null || _d$error === void 0 ? void 0 : _d$error.message) || 'No response';
            _context7.n = 9;
            break;
          case 5:
            if (!apiKey) {
              _context7.n = 8;
              break;
            }
            _context7.n = 6;
            return fetch('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
              },
              body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 600,
                system: 'You are NEXUS, PhoennixAI principal engineer. You are in a terminal session on the phoennix-ai GitHub repo. Respond concisely. Use plain text. End with one clear next action.',
                messages: [{
                  role: 'user',
                  content: cmd
                }]
              })
            });
          case 6:
            _res = _context7.v;
            _context7.n = 7;
            return _res.json();
          case 7:
            _d = _context7.v;
            reply = ((_d$content2 = _d.content) === null || _d$content2 === void 0 ? void 0 : _d$content2.filter(function (b) {
              return b.type === 'text';
            }).map(function (b) {
              return b.text;
            }).join('\n')) || ((_d$error2 = _d.error) === null || _d$error2 === void 0 ? void 0 : _d$error2.message) || 'Check API key in Customize → API Config';
            _context7.n = 9;
            break;
          case 8:
            reply = 'No API connected. Go to Customize → API Config → add your Vercel endpoint or Anthropic key → Save.';
          case 9:
            setLastTime(time);
            setTermLines(function (p) {
              return [].concat(_toConsumableArray(p), [{
                type: 'nexus',
                text: reply,
                time: time
              }]);
            });
            _context7.n = 11;
            break;
          case 10:
            _context7.p = 10;
            _t5 = _context7.v;
            setTermLines(function (p) {
              return [].concat(_toConsumableArray(p), [{
                type: 'error',
                text: 'Error: ' + _t5.message
              }]);
            });
          case 11:
            setLoading(false);
          case 12:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 10]]);
    }));
    return function sendTerm() {
      return _ref39.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 49px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.125rem 1.5rem',
      borderBottom: '.5px solid rgba(85,105,112,.1)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: '.75rem'
    }
  }, projects.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        background: 'rgba(255,255,255,.9)',
        border: '.5px solid rgba(85,105,112,.12)',
        borderRadius: 10,
        padding: '.875rem 1rem',
        cursor: 'pointer',
        transition: 'all .15s'
      },
      onClick: function onClick() {
        return toast('Opening ' + p.name + ' in NEXUS terminal...');
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.borderColor = 'rgba(85,105,112,.35)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.borderColor = 'rgba(85,105,112,.12)';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 8,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--primary)'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        padding: '2px 7px',
        borderRadius: 3,
        background: p.status === 'Deployed' ? 'rgba(45,122,79,.08)' : 'rgba(171,169,68,.08)',
        color: p.status === 'Deployed' ? 'var(--gn)' : 'var(--am)',
        border: '.5px solid ' + (p.status === 'Deployed' ? 'rgba(45,122,79,.2)' : 'rgba(171,169,68,.2)'),
        whiteSpace: 'nowrap'
      }
    }, p.status.toUpperCase())), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--t2)',
        marginBottom: 6
      }
    }, p.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1rem',
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2387 ", p.branch), /*#__PURE__*/React.createElement("span", null, "\u21BB ", p.last), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary)'
      }
    }, p.agents)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#FAFAF8',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '.75rem 1.25rem',
      borderBottom: '1px solid rgba(85,105,112,.1)',
      background: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'rgba(85,105,112,.15)',
      border: '.5px solid rgba(85,105,112,.2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'rgba(171,169,68,.25)',
      border: '.5px solid rgba(171,169,68,.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'rgba(45,122,79,.2)',
      border: '.5px solid rgba(45,122,79,.3)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#5EEAD4',
      boxShadow: '0 0 6px rgba(94,234,212,.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 11,
      color: 'var(--t2)',
      fontWeight: 500
    }
  }, "phoennix-ai / NEXUS Terminal"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 10,
      color: 'var(--t3)'
    }
  }, lastTime), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTermLines([]);
    },
    title: "Clear",
    style: {
      background: 'none',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 5,
      padding: '3px 8px',
      cursor: 'pointer',
      fontSize: 10,
      fontFamily: 'Fira Code,monospace',
      color: 'var(--t3)',
      transition: 'all .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.borderColor = 'rgba(85,105,112,.4)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.borderColor = 'rgba(85,105,112,.18)';
    }
  }, "Clear"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigator.clipboard.writeText(termLines.map(function (l) {
        return l.text || '';
      }).join('\n')).then(function () {
        return toast('Copied');
      });
    },
    style: {
      background: 'none',
      border: '.5px solid rgba(85,105,112,.18)',
      borderRadius: 5,
      padding: '3px 8px',
      cursor: 'pointer',
      fontSize: 10,
      fontFamily: 'Fira Code,monospace',
      color: 'var(--t3)',
      transition: 'all .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.borderColor = 'rgba(85,105,112,.4)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.borderColor = 'rgba(85,105,112,.18)';
    }
  }, "Copy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '1.25rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'Fira Code,monospace',
      fontSize: 13,
      lineHeight: 1.75
    }
  }, termLines.map(function (l, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, l.type === 'meta' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--t3)',
        fontSize: 10.5,
        padding: '3px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '.5px',
        background: 'rgba(85,105,112,.12)'
      }
    }), /*#__PURE__*/React.createElement("span", null, l.text), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '.5px',
        background: 'rgba(85,105,112,.12)'
      }
    })), l.type === 'user' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(85,105,112,.4)',
        userSelect: 'none',
        paddingTop: 1
      }
    }, "$"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tx)',
        fontWeight: 500,
        flex: 1
      }
    }, l.text), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--t3)',
        fontSize: 10,
        paddingTop: 2
      }
    }, l.time)), l.type === 'nexus' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        paddingLeft: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 3,
        background: 'rgba(85,105,112,.2)',
        borderRadius: 2,
        flexShrink: 0,
        alignSelf: 'stretch',
        minHeight: 20
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, l.time && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        color: 'var(--t3)',
        marginBottom: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#5EEAD4',
        display: 'inline-block'
      }
    }), "NEXUS \u2014 ", l.time), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--tx)'
      }
    }, l.text.split('\n').map(function (ln, j) {
      return /*#__PURE__*/React.createElement("div", {
        key: j
      }, ln || /*#__PURE__*/React.createElement("br", null));
    })))), l.type === 'warn' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start',
        padding: '6px 10px',
        background: 'rgba(171,169,68,.06)',
        borderRadius: 6,
        border: '.5px solid rgba(171,169,68,.2)',
        paddingLeft: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#ABA944',
        fontSize: 12,
        marginTop: 1
      }
    }, "\u26A0"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--am)',
        flex: 1
      }
    }, l.text)), l.type === 'error' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        padding: '6px 10px',
        background: 'rgba(153,27,27,.04)',
        borderRadius: 6,
        border: '.5px solid rgba(153,27,27,.15)',
        paddingLeft: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#991b1b'
      }
    }, "\u2715"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#991b1b',
        flex: 1
      }
    }, l.text)), l.type === 'pr' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '7px 12px',
        background: 'rgba(255,255,255,.9)',
        border: '.5px solid rgba(85,105,112,.15)',
        borderRadius: 8,
        margin: '3px 0'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "var(--primary)",
      strokeWidth: "1.5"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "4",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 6v4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 5a3 3 0 010 6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "4",
      r: "2"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: 'var(--tx)',
        fontSize: 12
      }
    }, l.branch), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#166534',
        fontSize: 11
      }
    }, "+", l.adds), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#991b1b',
        fontSize: 11
      }
    }, "-", l.dels), /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'rgba(85,105,112,.08)',
        color: 'var(--primary)',
        padding: '2px 9px',
        borderRadius: 4,
        fontSize: 10,
        border: '.5px solid rgba(85,105,112,.18)'
      }
    }, l.status)));
  }), loading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      paddingLeft: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      background: 'rgba(85,105,112,.15)',
      borderRadius: 2,
      height: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [0, 1, 2].map(function (i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "typing-dot",
      style: {
        background: 'var(--t3)',
        animationDelay: i * .2 + 's'
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    ref: bottomRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '.875rem 1.25rem',
      borderTop: '1px solid rgba(85,105,112,.1)',
      background: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#FAFAF8',
      border: '1px solid rgba(85,105,112,.18)',
      borderRadius: 8,
      padding: '.5rem .875rem',
      transition: 'border-color .2s,box-shadow .2s'
    },
    onFocus: function onFocus(e) {
      return e.currentTarget.style.borderColor = 'rgba(85,105,112,.4)';
    },
    onBlur: function onBlur(e) {
      return e.currentTarget.style.borderColor = 'rgba(85,105,112,.18)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(85,105,112,.4)',
      fontFamily: 'Fira Code,monospace',
      fontSize: 13,
      userSelect: 'none'
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    value: termInput,
    onChange: function onChange(e) {
      return setTermInput(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendTerm();
      }
    },
    placeholder: "Type / for commands...",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--tx)',
      fontFamily: 'Fira Code,monospace',
      fontSize: 13,
      caretColor: 'var(--primary)'
    }
  }), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: '1.5px solid rgba(85,105,112,.2)',
      borderTopColor: 'var(--primary)',
      animation: 'spin 1s linear infinite',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("button", {
    onClick: sendTerm,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--t3)',
      display: 'flex',
      alignItems: 'center',
      transition: 'color .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.color = 'var(--primary)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.color = 'var(--t3)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 8H2M9 3l5 5-5 5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 5,
      fontSize: 10,
      fontFamily: 'Fira Code,monospace',
      color: 'var(--t3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "NEXUS \xB7 Sonnet 4.6 \xB7 ", (_window$__phoennixCon14 = window.__phoennixConfig) !== null && _window$__phoennixCon14 !== void 0 && _window$__phoennixCon14.endpoint ? 'API Connected ✓' : 'No API — add in Customize → API Config'), /*#__PURE__*/React.createElement("span", null, "Enter to send \xB7 Shift+Enter for newline")))));
};

/* ── CCR PANEL ── */
var CCRPanel = function CCRPanel() {
  var _useState83 = useState('idle'),
    _useState84 = _slicedToArray(_useState83, 2),
    phase = _useState84[0],
    setPhase = _useState84[1]; /* idle | planning | reviewing | approved */
  var _useState85 = useState(''),
    _useState86 = _slicedToArray(_useState85, 2),
    task = _useState86[0],
    setTask = _useState86[1];
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    plan = _useState88[0],
    setPlan = _useState88[1];
  var launchCCR = /*#__PURE__*/function () {
    var _ref40 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            if (task.trim()) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2);
          case 1:
            setPhase('planning');
            setPlan(null);
            /* Simulate CCR multi-agent planning pipeline */
            _context8.n = 2;
            return new Promise(function (r) {
              return setTimeout(r, 1200);
            });
          case 2:
            setPhase('reviewing');
            setPlan({
              task: task,
              explorers: [{
                id: 'EXP-1',
                status: 'done',
                finding: 'Identified 3 affected modules: auth, api-gateway, agent-router. Zero breaking changes if migration order: auth → gateway → router.'
              }, {
                id: 'EXP-2',
                status: 'done',
                finding: 'Dependency graph: 7 downstream services. All backward-compatible. Rollback path: git tag pre-ccr-' + Date.now().toString(36) + '.'
              }, {
                id: 'EXP-3',
                status: 'done',
                finding: 'Risk surface: 2 environment variables need rotation. Staging parity confirmed. Estimated runtime: 4–6 minutes.'
              }],
              synthesis: 'All three explorers agree on execution path. No conflicts detected. Confidence: 94%. Recommended approach: staged deploy with automatic rollback trigger at P95 latency >800ms.',
              steps: [{
                n: 1,
                action: 'Rotate ENV vars in Supabase + Vercel',
                agent: 'SIGNAL',
                risk: 'LOW'
              }, {
                n: 2,
                action: 'Deploy auth module to staging',
                agent: 'NEXUS',
                risk: 'LOW'
              }, {
                n: 3,
                action: 'PROBE smoke test — 42 assertions',
                agent: 'PROBE',
                risk: 'LOW'
              }, {
                n: 4,
                action: 'Promote to production with canary 5%',
                agent: 'NEXUS',
                risk: 'MED'
              }, {
                n: 5,
                action: 'Monitor P95 latency for 10 min',
                agent: 'KAIROS',
                risk: 'LOW'
              }, {
                n: 6,
                action: 'Full production rollout',
                agent: 'NEXUS',
                risk: 'LOW'
              }]
            });
          case 3:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function launchCCR() {
      return _ref40.apply(this, arguments);
    };
  }();
  var phaseColors = {
    idle: 'var(--t3)',
    planning: 'var(--am)',
    reviewing: 'var(--primary)',
    approved: 'var(--gn)'
  };
  var phaseLabels = {
    idle: 'IDLE',
    planning: 'CCR PLANNING…',
    reviewing: 'AWAITING APPROVAL',
    approved: 'APPROVED — EXECUTING'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      background: 'rgba(255,255,255,.85)',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,rgba(85,105,112,.1),rgba(171,169,68,.06))',
      borderBottom: '.5px solid rgba(85,105,112,.12)',
      padding: '.875rem 1.125rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--tx)'
    }
  }, "CCR \u2014 Cloud Container Runtime"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 9,
      color: 'var(--t3)',
      marginTop: 2,
      letterSpacing: 1.5
    }
  }, "PARALLEL MULTI-AGENT PLANNING \xB7 ANTHROPIC ARCHITECTURE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: phaseColors[phase]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 9,
      color: phaseColors[phase],
      letterSpacing: 1
    }
  }, phaseLabels[phase]))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1rem 1.125rem'
    }
  }, phase === 'idle' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--t2)',
      lineHeight: 1.65,
      marginBottom: '1rem'
    }
  }, "CCR spins up ", /*#__PURE__*/React.createElement("strong", null, "3 parallel explorer agents"), " that analyse your codebase simultaneously, then a Critic/Synthesis agent reviews findings and produces an interactive plan for your approval \u2014 before any file is touched."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "field",
    value: task,
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    placeholder: "/ultraplan describe the task or feature to plan...",
    style: {
      flex: 1,
      background: 'rgba(255,255,255,.8)',
      border: '.5px solid rgba(85,105,112,.2)',
      fontFamily: 'Fira Code,monospace',
      fontSize: 12
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && launchCCR();
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: launchCCR,
    className: "btn-primary",
    style: {
      padding: '.6rem 1.25rem',
      fontSize: 13,
      whiteSpace: 'nowrap'
    }
  }, "Launch CCR")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '.75rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '.5rem'
    }
  }, [['3 Explorer Agents', 'Analyse in parallel'], ['Critic/Synthesis', 'Reviews & de-conflicts'], ['Interactive Plan', 'Approve before execute']].map(function (_ref41) {
    var _ref42 = _slicedToArray(_ref41, 2),
      t = _ref42[0],
      d = _ref42[1];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        background: 'rgba(85,105,112,.04)',
        border: '.5px solid rgba(85,105,112,.1)',
        borderRadius: 8,
        padding: '.625rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--tx)',
        marginBottom: 2
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, d));
  }))), phase === 'planning' && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
      marginBottom: '1rem'
    }
  }, ['EXP-1', 'EXP-2', 'EXP-3'].map(function (id) {
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        background: 'rgba(85,105,112,.08)',
        border: '.5px solid rgba(85,105,112,.2)',
        borderRadius: 8,
        padding: '.5rem .875rem',
        fontFamily: 'Fira Code,monospace',
        fontSize: 11,
        color: 'var(--am)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--am)',
        margin: '0 auto 4px',
        animation: 'pdot 1.2s infinite'
      }
    }), id);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 11,
      color: 'var(--t3)'
    }
  }, "Explorer agents analysing in parallel \u2014 planning in cloud\u2026")), (phase === 'reviewing' || phase === 'approved') && plan && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: 'Fira Code,monospace',
      color: 'var(--t3)',
      marginBottom: 6,
      textTransform: 'uppercase',
      letterSpacing: 1
    }
  }, "Explorer findings"), plan.explorers.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        display: 'flex',
        gap: 8,
        padding: '.5rem',
        background: 'rgba(85,105,112,.04)',
        borderRadius: 7,
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        color: 'var(--gn)',
        background: 'rgba(45,122,79,.1)',
        padding: '2px 6px',
        borderRadius: 3,
        flexShrink: 0,
        alignSelf: 'flex-start',
        marginTop: 1
      }
    }, e.id), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ink2)',
        lineHeight: 1.5
      }
    }, e.finding));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(171,169,68,.06)',
      border: '.5px solid rgba(171,169,68,.2)',
      borderLeft: '3px solid var(--olive)',
      borderRadius: '0 8px 8px 0',
      padding: '.75rem',
      marginBottom: '1rem',
      fontSize: 12,
      color: 'var(--ink2)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--am)'
    }
  }, "Synthesis: "), plan.synthesis), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: 'Fira Code,monospace',
      color: 'var(--t3)',
      marginBottom: 6,
      textTransform: 'uppercase',
      letterSpacing: 1
    }
  }, "Execution plan \u2014 review and approve"), plan.steps.map(function (step) {
    return /*#__PURE__*/React.createElement("div", {
      key: step.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '.5rem .875rem',
        background: 'rgba(255,255,255,.7)',
        border: '.5px solid rgba(85,105,112,.12)',
        borderRadius: 7,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 10,
        color: 'var(--t3)',
        width: 20,
        flexShrink: 0
      }
    }, String(step.n).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 12,
        color: 'var(--ink)'
      }
    }, step.action), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        color: 'var(--primary)'
      }
    }, step.agent), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 9,
        padding: '1px 6px',
        borderRadius: 3,
        background: step.risk === 'LOW' ? 'rgba(45,122,79,.1)' : 'rgba(245,158,11,.1)',
        color: step.risk === 'LOW' ? 'var(--gn)' : 'var(--am)',
        border: '.5px solid ' + (step.risk === 'LOW' ? 'rgba(45,122,79,.2)' : 'rgba(245,158,11,.2)')
      }
    }, step.risk));
  })), phase === 'reviewing' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPhase('approved');
      if (typeof openPreview === 'function') {
        openPreview('<html><body style="padding:2rem;font-family:Georgia,serif;background:#F7F6F2"><h2 style="font-family:Agdasima,sans-serif">CCR Plan Approved</h2><p>NEXUS · PROBE · KAIROS executing...</p><pre style="font-family:Fira Code,monospace;font-size:12px">' + JSON.stringify((plan === null || plan === void 0 ? void 0 : plan.steps) || [], null, 2) + '</pre></body></html>', 'html', 'CCR — Execution');
      }
      toast('CCR plan approved — NEXUS executing…');
    },
    className: "btn-primary",
    style: {
      flex: 1
    }
  }, "Approve & Execute"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPhase('idle');
      setPlan(null);
    },
    className: "btn-ghost"
  }, "Reject plan")), phase === 'approved' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '.75rem',
      background: 'rgba(45,122,79,.06)',
      border: '.5px solid rgba(45,122,79,.2)',
      borderRadius: 8,
      fontFamily: 'Fira Code,monospace',
      fontSize: 11,
      color: 'var(--gn)'
    }
  }, "\u2713 Executing plan \u2014 NEXUS \xB7 PROBE \xB7 KAIROS all active \xB7 Monitor in Routines"))));
};

/* ── COMPUTER USE PANEL ── */
var ComputerUsePanel = function ComputerUsePanel() {
  var _useState89 = useState(''),
    _useState90 = _slicedToArray(_useState89, 2),
    task = _useState90[0],
    setTask = _useState90[1];
  var _useState91 = useState(false),
    _useState92 = _slicedToArray(_useState91, 2),
    queued = _useState92[0],
    setQueued = _useState92[1];
  var steps = [{
    n: 1,
    label: 'Electron Shell',
    desc: 'Wraps Phoenix Pro as a native app. npm install electron. Provides native window, system tray, dock icon.',
    status: 'ready'
  }, {
    n: 2,
    label: 'Screen Capture',
    desc: 'Screenshots every 500ms sent as base64 to Claude Vision. Claude reads every pixel of your screen.',
    status: 'ready'
  }, {
    n: 3,
    label: 'Computer Use Tool',
    desc: 'claude-sonnet-4-20250514 with computer_use_20241022 beta. Sends mouse_move, left_click, key, type commands.',
    status: 'api_ready'
  }, {
    n: 4,
    label: 'Action Executor',
    desc: 'Electron executes Claude actions via robotjs: real mouse moves, keyboard input, scroll — full desktop control.',
    status: 'ready'
  }, {
    n: 5,
    label: 'KAIROS Daemon',
    desc: 'Persistent background process. Runs autonomously while you sleep. 15-second action budget. Append-only audit log.',
    status: 'active'
  }];
  var statusColor = {
    ready: 'var(--t3)',
    api_ready: 'var(--am)',
    active: 'var(--gn)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.5rem 2rem',
      maxWidth: 860,
      margin: '0 auto',
      overflowY: 'auto',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,rgba(85,105,112,.08),rgba(171,169,68,.04))',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 14,
      padding: '1.5rem',
      marginBottom: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--tx)',
      marginBottom: 4
    }
  }, "Computer Use \u2014 Desktop Takeover"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 9,
      color: 'var(--t3)',
      letterSpacing: 1.5
    }
  }, "ANTHROPIC COMPUTER USE \xB7 ELECTRON \xB7 KAIROS DAEMON \xB7 AI AGENTIC WORKFLOW")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 9,
      padding: '4px 10px',
      borderRadius: 100,
      background: 'rgba(45,122,79,.1)',
      color: 'var(--gn)',
      border: '.5px solid rgba(45,122,79,.2)'
    }
  }, "API READY")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink2)',
      lineHeight: 1.75,
      marginBottom: '1.25rem'
    }
  }, "Phoenix Pro functions as a ", /*#__PURE__*/React.createElement("strong", null, "virtual user"), " \u2014 it sees your screen via screenshots, reasons about what to do, then controls your mouse and keyboard autonomously. You give a high-level command. Phoenix Pro handles every click."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '.75rem',
      marginBottom: '.5rem'
    }
  }, [['See', 'Screenshots every 500ms → Claude Vision reads your entire screen'], ['Think', 'Decides what to click, type, scroll, or open next'], ['Execute', 'Controls real mouse + keyboard via Electron + robotjs']].map(function (_ref43) {
    var _ref44 = _slicedToArray(_ref43, 2),
      t = _ref44[0],
      d = _ref44[1];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        background: 'rgba(255,255,255,.7)',
        borderRadius: 9,
        padding: '.875rem',
        border: '.5px solid rgba(85,105,112,.12)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        fontFamily: 'Agdasima,sans-serif',
        color: 'var(--tx)',
        marginBottom: 4
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace',
        lineHeight: 1.55
      }
    }, d));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.625rem',
      marginBottom: '1.5rem'
    }
  }, steps.map(function (step) {
    return /*#__PURE__*/React.createElement("div", {
      key: step.n,
      style: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        background: 'rgba(255,255,255,.85)',
        border: '.5px solid rgba(85,105,112,.15)',
        borderRadius: 10,
        padding: '.875rem 1.125rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 8,
        background: 'rgba(85,105,112,.08)',
        border: '.5px solid rgba(85,105,112,.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontFamily: 'Fira Code,monospace',
        fontWeight: 600,
        color: 'var(--primary)',
        flexShrink: 0
      }
    }, step.n), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Agdasima,sans-serif',
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--tx)'
      }
    }, step.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 8,
        padding: '1px 7px',
        borderRadius: 100,
        background: 'rgba(85,105,112,.08)',
        color: statusColor[step.status] || 'var(--t3)',
        border: '.5px solid rgba(85,105,112,.15)',
        letterSpacing: 1
      }
    }, step.status.replace('_', ' ').toUpperCase())), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink3)',
        lineHeight: 1.55
      }
    }, step.desc)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      borderRadius: 10,
      padding: '1rem 1.25rem',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Fira Code,monospace',
      fontSize: 10,
      color: 'rgba(171,169,68,.7)',
      marginBottom: 8,
      letterSpacing: 1
    }
  }, "NEXUS \u2014 Install Desktop App"), ['$ npm install -g @anthropic-ai/claude-code', '$ npm install electron robotjs', '$ export ANTHROPIC_API_KEY=sk-ant-...', '$ npx phoennixai-desktop --computer-use --kairos'].map(function (line, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 11,
        color: '#fff',
        lineHeight: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(171,169,68,.8)'
      }
    }, line.startsWith('$') ? '' : '  '), line);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.85)',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 10,
      padding: '1rem',
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      marginBottom: queued ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: task,
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    placeholder: "Describe a Computer Use task \u2014 e.g. Open Chrome, search phoennixai.com, take a screenshot and save to Desktop",
    rows: 2,
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      outline: 'none',
      fontSize: 13,
      fontFamily: 'Source Serif 4,serif',
      resize: 'none',
      color: 'var(--tx)',
      lineHeight: 1.6
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (task.trim()) {
        setQueued(true);
        toast('Task queued for KAIROS daemon');
      }
    },
    style: {
      background: 'linear-gradient(135deg,#3E4F55,#556970)',
      border: 'none',
      borderRadius: 8,
      padding: '.625rem 1.125rem',
      color: '#fff',
      fontSize: 12,
      cursor: 'pointer',
      fontWeight: 600,
      fontFamily: 'Source Serif 4,serif',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, "Queue task")), queued && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--am)',
      fontFamily: 'Fira Code,monospace',
      padding: '.5rem .75rem',
      background: 'rgba(171,169,68,.06)',
      borderRadius: 7,
      border: '.5px solid rgba(171,169,68,.2)'
    }
  }, "Task queued \u2014 KAIROS will execute when Electron desktop app is running"));
};

/* ── PROJECTS VIEW ── */
var ProjectsView = function ProjectsView() {
  var projs = [{
    name: 'RYD — Reset Your Digital',
    client: 'Nathan Mather',
    phase: 'Phase 1 — Build',
    agents: 'NEXUS · SCRIBE · PROBE · RELAY',
    status: 'active',
    date: 'Launch: Jun 2026'
  }, {
    name: 'PhoennixAI Platform',
    client: 'Internal',
    phase: 'Phase 2 — GTM',
    agents: 'CLAUDE · GRID · PULSE · LEDGER',
    status: 'active',
    date: 'Live: Apr 2026'
  }, {
    name: 'VANTAGE Intel Platform',
    client: 'Nathan Mather',
    phase: 'Design + Build',
    agents: 'PICASSO · NEXUS · PROBE',
    status: 'active',
    date: 'Q2 2026'
  }, {
    name: 'Cupcakes & Cocktails',
    client: 'Mayah Wilcox',
    phase: 'Launch Prep',
    agents: 'PULSE · RELAY · LEDGER',
    status: 'pending',
    date: 'Pre-launch'
  }];
  var statusC = {
    active: 'var(--gn)',
    pending: 'var(--am)',
    blocked: 'var(--rd)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.5rem 2rem',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.75rem'
    }
  }, projs.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      className: "glass-card no-hover",
      style: {
        padding: '1.125rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: statusC[p.status] || 'var(--t3)',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 14,
        marginBottom: 2
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--t2)'
      }
    }, p.phase)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, p.client), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--primary)',
        fontFamily: 'Fira Code,monospace'
      }
    }, p.agents), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Fira Code,monospace',
        fontSize: 11,
        color: 'var(--t3)'
      }
    }, p.date));
  })));
};

/* ── PREVIEW PANEL ── */
var PreviewPanel = function PreviewPanel(_ref45) {
  var open = _ref45.open,
    content = _ref45.content,
    onClose = _ref45.onClose,
    width = _ref45.width,
    onWidthChange = _ref45.onWidthChange;
  var _useState93 = useState('preview'),
    _useState94 = _slicedToArray(_useState93, 2),
    tab = _useState94[0],
    setTab = _useState94[1];
  var _useState95 = useState(false),
    _useState96 = _slicedToArray(_useState95, 2),
    dragging = _useState96[0],
    setDragging = _useState96[1];
  var dragRef = useRef();
  var startX = useRef();
  var startW = useRef();

  /* Drag-to-resize — fully self-contained */
  var startDrag = function startDrag(e) {
    e.preventDefault();
    startX.current = e.clientX;
    startW.current = width;
    setDragging(true);
    var move = function move(ev) {
      var diff = startX.current - ev.clientX;
      onWidthChange(Math.min(900, Math.max(300, startW.current + diff)));
    };
    var _up = function up() {
      setDragging(false);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', _up);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', _up);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  /* Format content for display */
  var srcDoc = (content === null || content === void 0 ? void 0 : content.type) === 'html' ? content.html : (content === null || content === void 0 ? void 0 : content.type) === 'doc' ? '<html><body style="padding:2rem;font-family:Georgia,serif;line-height:1.7;max-width:680px;margin:0 auto;color:#141A1D">' + content.html + '</body></html>' : '<html><body style="background:#F7F6F2;padding:1rem"><pre style="font-family:Fira Code,monospace;font-size:12px;line-height:1.7;white-space:pre-wrap;color:#141A1D">' + (content === null || content === void 0 ? void 0 : content.html) + '</pre></body></html>';

  /* Sample artifacts library */
  var ARTIFACTS = [{
    id: 1,
    title: 'Brand System v1.3',
    type: 'html',
    icon: '◈',
    desc: 'PhoennixAI brand colours, typography, logo system'
  }, {
    id: 2,
    title: 'Client Dashboard',
    type: 'html',
    icon: '▣',
    desc: '24 clients · £47.2k MRR · 31 agents'
  }, {
    id: 3,
    title: 'VANTAGE Brochure',
    type: 'doc',
    icon: '◎',
    desc: 'RYD platform — navy + amber identity'
  }, {
    id: 4,
    title: 'Phoenix Pro Brochure',
    type: 'html',
    icon: '⊕',
    desc: 'Full product brochure — slate + olive'
  }, {
    id: 5,
    title: 'CCR Plan: RYD Phase 2',
    type: 'code',
    icon: '⧉',
    desc: '6-step NEXUS execution plan'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: 'preview-panel ' + (open ? 'open' : 'closed'),
    style: {
      width: width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "preview-drag",
    onMouseDown: startDrag
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview-topbar"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTab('preview');
    },
    className: 'preview-tab ' + (tab === 'preview' ? 'active' : '')
  }, "Preview"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTab('artifacts');
    },
    className: 'preview-tab ' + (tab === 'artifacts' ? 'active' : '')
  }, "Artifacts"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTab('output');
    },
    className: 'preview-tab ' + (tab === 'output' ? 'active' : '')
  }, "Output"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview-title",
    style: {
      fontFamily: 'Agdasima,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--tx)'
    }
  }, (content === null || content === void 0 ? void 0 : content.title) || 'Dynamic Workspace'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (content !== null && content !== void 0 && content.html) {
        var b = new Blob([content.html], {
          type: 'text/html'
        });
        var u = URL.createObjectURL(b);
        var a = document.createElement('a');
        a.href = u;
        a.download = (content.title || 'output').replace(/[^a-z0-9]/gi, '-') + '.html';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          document.body.removeChild(a);
          URL.revokeObjectURL(u);
        }, 100);
      } else {
        toast('Nothing to download yet — ask an agent to build something');
      }
    },
    title: "Download as HTML",
    style: {
      background: 'rgba(85,105,112,.08)',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 6,
      padding: '4px 10px',
      fontSize: 11,
      color: 'var(--t2)',
      cursor: 'pointer',
      fontFamily: 'Fira Code,monospace',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      transition: 'all .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.background = 'rgba(85,105,112,.14)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.background = 'rgba(85,105,112,.08)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 1v7M3 6l3 3 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 11h10",
    strokeLinecap: "round"
  })), "Save"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: '.5px solid rgba(85,105,112,.2)',
      borderRadius: 6,
      width: 26,
      height: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      color: 'var(--t2)',
      cursor: 'pointer',
      transition: 'all .15s'
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.background = 'rgba(85,105,112,.08)';
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.background = 'none';
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "preview-body"
  }, tab === 'preview' && (content ? /*#__PURE__*/React.createElement("iframe", {
    srcDoc: srcDoc,
    sandbox: "allow-scripts allow-same-origin",
    title: "preview"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "preview-empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "preview-empty-icon"
  }, "\u2B21"), /*#__PURE__*/React.createElement("div", {
    className: "preview-empty-text"
  }, "Your Dynamic Workspace is ready.", /*#__PURE__*/React.createElement("br", null), "Ask any agent to build something \u2014 it will appear here instantly."), /*#__PURE__*/React.createElement("div", {
    className: "preview-empty-hint"
  }, "Code \xB7 Documents \xB7 Designs \xB7 Charts \xB7 Artifacts"))), tab === 'artifacts' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1rem',
      overflowY: 'auto',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '.625rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: 'Fira Code,monospace',
      color: 'var(--t3)',
      letterSpacing: 2,
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Saved Artifacts"), ARTIFACTS.map(function (a) {
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        background: 'rgba(255,255,255,.85)',
        border: '.5px solid rgba(85,105,112,.15)',
        borderRadius: 9,
        padding: '.75rem 1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: .75 + 'rem',
        transition: 'all .15s'
      },
      onClick: function onClick() {
        setTab('preview');
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.borderColor = 'rgba(85,105,112,.35)';
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.borderColor = 'rgba(85,105,112,.15)';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        opacity: .5
      }
    }, a.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        fontFamily: 'Agdasima,sans-serif',
        color: 'var(--tx)',
        marginBottom: 2
      }
    }, a.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--t3)',
        fontFamily: 'Fira Code,monospace'
      }
    }, a.type.toUpperCase(), " \xB7 ", a.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--primary)',
        fontFamily: 'Fira Code,monospace'
      }
    }, "Open \u2192"));
  })), tab === 'output' && /*#__PURE__*/React.createElement("div", {
    className: "code-view"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--olive-d)',
      marginBottom: 8,
      fontSize: 11,
      fontWeight: 500
    }
  }, "// Output stream \u2014 NEXUS \xB7 PROBE \xB7 KAIROS"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gn)'
    }
  }, "\u2713 Agent NEXUS \u2014 Build complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--primary)',
      marginTop: 4
    }
  }, "\u2192 PROBE running 42 assertions..."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gn)',
      marginTop: 4
    }
  }, "\u2713 PROBE QA pass \u2014 zero critical issues"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--primary)',
      marginTop: 4
    }
  }, "\u2192 Ready for preview \xB7 Accept or Reject below"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1rem',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toast('Changes accepted and applied');
    },
    style: {
      background: 'linear-gradient(135deg,#3E4F55,#556970)',
      border: 'none',
      borderRadius: 8,
      padding: '.5rem 1.25rem',
      color: '#fff',
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'Fira Code,monospace',
      fontWeight: 600
    }
  }, "\u2713 Accept"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toast('Changes rejected');
    },
    style: {
      background: 'none',
      border: '.5px solid rgba(85,105,112,.25)',
      borderRadius: 8,
      padding: '.5rem 1.25rem',
      color: 'var(--t2)',
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'Fira Code,monospace'
    }
  }, "\u2715 Reject"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toast('Copying output...');
    },
    style: {
      background: 'none',
      border: '.5px solid rgba(85,105,112,.25)',
      borderRadius: 8,
      padding: '.5rem 1rem',
      color: 'var(--t2)',
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'Fira Code,monospace'
    }
  }, "Copy")))));
};

/* Track global drag state for cursor */
/* ── APP ── */
var App = function App() {
  var _useState97 = useState(false),
    _useState98 = _slicedToArray(_useState97, 2),
    loggedIn = _useState98[0],
    setLoggedIn = _useState98[1];
  var _useState99 = useState('Valerie'),
    _useState100 = _slicedToArray(_useState99, 2),
    user = _useState100[0],
    setUser = _useState100[1];
  var _useState101 = useState('home'),
    _useState102 = _slicedToArray(_useState101, 2),
    view = _useState102[0],
    setView = _useState102[1];
  var _useState103 = useState(true),
    _useState104 = _slicedToArray(_useState103, 2),
    sidebarOpen = _useState104[0],
    setSidebarOpen = _useState104[1];
  var _useState105 = useState(null),
    _useState106 = _slicedToArray(_useState105, 2),
    prevView = _useState106[0],
    setPrevView = _useState106[1];
  var _useState107 = useState(0),
    _useState108 = _slicedToArray(_useState107, 2),
    selAgent = _useState108[0],
    setSA = _useState108[1];
  var _useState109 = useState(false),
    _useState110 = _slicedToArray(_useState109, 2),
    previewOpen = _useState110[0],
    setPreviewOpen = _useState110[1];
  var _useState111 = useState(null),
    _useState112 = _slicedToArray(_useState111, 2),
    previewContent = _useState112[0],
    setPreviewContent = _useState112[1];
  var _useState113 = useState('html'),
    _useState114 = _slicedToArray(_useState113, 2),
    previewType = _useState114[0],
    setPreviewType = _useState114[1]; /* html | code | doc | image */
  var _useState115 = useState(480),
    _useState116 = _slicedToArray(_useState115, 2),
    panelWidth = _useState116[0],
    setPanelWidth = _useState116[1];
  /* Share preview function so any component can push to panel */
  var openPreview = function openPreview(content) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
    var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Preview';
    setPreviewContent({
      html: content,
      type: type,
      title: title
    });
    setPreviewType(type);
    setPreviewOpen(true);
  };
  useEffect(function () {
    initCanvas();
    var handler = function handler(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        handleSetView('search');
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        handleSetView('customize');
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'j') {
        e.preventDefault();
        handleSetView('chat');
      }
    };
    window.addEventListener('keydown', handler);
    return function () {
      return window.removeEventListener('keydown', handler);
    };
  }, []);
  var handleLogin = function handleLogin(em) {
    var n = em.split('@')[0];
    setUser(n.charAt(0).toUpperCase() + n.slice(1));
    setLoggedIn(true);
    setTimeout(function () {
      g.from('#sidebar', {
        x: -220,
        duration: .7,
        ease: 'power3.out'
      });
      g.from('#main', {
        opacity: 0,
        duration: .6,
        delay: .2
      });
    }, 50);
  };
  var handleSetView = function handleSetView(v) {
    if (v === 'search') setPrevView(view);
    if (v !== 'search') setPrevView(null);
    var ov = document.getElementById('overlay');
    if (v === 'search') {
      setView(v);
      return;
    } // no flash for modal
    g.to(ov, {
      opacity: 1,
      duration: .12,
      onComplete: function onComplete() {
        setView(v);
        g.to(ov, {
          opacity: 0,
          duration: .18,
          delay: .05
        });
      }
    });
  };
  var TITLES = {
    home: 'PhoennixAI',
    agents: 'Agent Roster',
    chat: 'Agent Chat',
    routines: 'Routines',
    design: 'Design',
    client: 'Client Dashboard',
    customize: 'Customize',
    manual: 'User Manual',
    search: 'Search',
    code: 'Code',
    desktop: 'Computer Use',
    projects: 'Projects'
  };
  if (!loggedIn) return /*#__PURE__*/React.createElement(Login, {
    onLogin: handleLogin
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: handleSetView,
    user: user,
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/React.createElement("div", {
    id: "main",
    style: {
      flex: 1,
      marginRight: previewOpen ? panelWidth : 0,
      transition: 'margin-right .22s cubic-bezier(.4,0,.2,1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: TITLES[view === 'search' ? prevView || 'home' : view] || 'PhoennixAI',
    onOpenPreview: function onOpenPreview() {
      return setPreviewOpen(function (o) {
        return !o;
      });
    },
    previewOpen: previewOpen,
    previewContent: previewContent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, view === 'search' && /*#__PURE__*/React.createElement(SearchView, {
    setView: function setView(v) {
      setPrevView(null);
      handleSetView(v);
    },
    setSA: setSA
  }), (view === 'home' || view === 'search') && /*#__PURE__*/React.createElement(Home, {
    setView: handleSetView,
    setSA: setSA,
    openPreview: openPreview
  }), view === 'agents' && /*#__PURE__*/React.createElement(Agents, {
    setView: handleSetView,
    setSA: setSA
  }), view === 'chat' && /*#__PURE__*/React.createElement(AgentChat, {
    selAgent: selAgent,
    setSA: setSA,
    openPreview: openPreview
  }), view === 'routines' && /*#__PURE__*/React.createElement(Routines, null), view === 'design' && /*#__PURE__*/React.createElement(Design, {
    openPreview: openPreview
  }), view === 'client' && /*#__PURE__*/React.createElement(ClientData, null), view === 'customize' && /*#__PURE__*/React.createElement(Customize, null), view === 'manual' && /*#__PURE__*/React.createElement(UserManual, null), view === 'code' && /*#__PURE__*/React.createElement(CodeView, {
    openPreview: openPreview
  }), view === 'projects' && /*#__PURE__*/React.createElement(ProjectsView, null), view === 'desktop' && /*#__PURE__*/React.createElement(ComputerUsePanel, null))), /*#__PURE__*/React.createElement("button", {
    className: "split-toggle",
    onClick: function onClick() {
      return setPreviewOpen(function (o) {
        return !o;
      });
    },
    title: previewOpen ? 'Close preview panel' : 'Open Dynamic Workspace',
    style: {
      right: previewOpen ? panelWidth : 0,
      transition: 'right .22s cubic-bezier(.4,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, previewOpen ? /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l6 0M2 5l6 0M2 8l6 0"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "8",
    height: "8",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 1v8"
  })), previewContent && !previewOpen && /*#__PURE__*/React.createElement("div", {
    className: "preview-badge"
  }, "1"))), /*#__PURE__*/React.createElement(PreviewPanel, {
    open: previewOpen,
    content: previewContent,
    onClose: function onClose() {
      return setPreviewOpen(false);
    },
    width: panelWidth,
    onWidthChange: setPanelWidth
  }));
};

export default App;
