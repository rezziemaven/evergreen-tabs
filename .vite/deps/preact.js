// node_modules/.pnpm/preact@10.24.3/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c;
var s;
var a;
var h = {};
var v = [];
var p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var y = Array.isArray;
function d(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function w(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (r2 in l2.defaultProps) void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return g(l2, f2, i2, o2, null);
}
function g(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1, __u: 0 };
  return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function m() {
  return { current: null };
}
function b(n2) {
  return n2.children;
}
function k(n2, l2) {
  this.props = n2, this.context = l2;
}
function x(n2, l2) {
  if (null == l2) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C(n2);
  }
}
function S(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !M.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(M);
}
function M() {
  var n2, u2, t2, o2, r2, e2, c2, s2;
  for (i.sort(f); n2 = i.shift(); ) n2.__d && (u2 = i.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j(c2, o2, s2), o2.__e != e2 && C(o2)), i.length > u2 && i.sort(f));
  M.__r = 0;
}
function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, w2, _2 = t2 && t2.__k || v, g2 = l2.length;
  for (u2.__d = e2, $(u2, l2, _2), e2 = u2.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u2.__k[a2]) && (p2 = -1 === y2.__i ? h : _2[y2.__i] || h, y2.__i = a2, O(n2, y2, p2, i2, o2, r2, f2, e2, c2, s2), d2 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && N(p2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || p2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u2.__d = e2, u2.__e = w2;
}
function $(n2, l2, u2) {
  var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) null != (i2 = l2[t2]) && "boolean" != typeof i2 && "function" != typeof i2 ? (r2 = t2 + a2, (i2 = n2.__k[t2] = "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? g(null, i2, null, null, null) : y(i2) ? g(b, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? g(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2).__ = n2, i2.__b = n2.__b + 1, o2 = null, -1 !== (f2 = i2.__i = L(i2, u2, r2, s2)) && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 == r2 - 1 ? a2-- : f2 == r2 + 1 ? a2++ : (f2 > r2 ? a2-- : a2++, i2.__u |= 65536))) : i2 = n2.__k[t2] = null;
  if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), V(o2, o2));
}
function I(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = I(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = x(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function H(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
    H(n3, l2);
  }) : l2.push(n2)), l2;
}
function L(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u2;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f2 < l2.length; ) {
    if (r2 >= 0) {
      if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return r2;
      r2--;
    }
    if (f2 < l2.length) {
      if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return f2;
      f2++;
    }
  }
  return -1;
}
function T(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || p.test(l2) ? u2 : u2 + "px";
}
function A(n2, l2, u2, t2, i2) {
  var o2;
  n: if ("style" === l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T(n2.style, l2, u2[l2]);
  }
  else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = e, n2.addEventListener(l2, o2 ? s : c, o2)) : n2.removeEventListener(l2, o2 ? s : c, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = e++;
      else if (u2.t < t2.u) return;
      return t2(l.event ? l.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, h2, v2, p2, w2, _2, g2, m2, x2, C2, S2, M2, $2, I2, H2, L2, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (m2 = u2.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i2[a2.__c], S2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? g2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(m2, S2) : (u2.__c = h2 = new k(m2, S2), h2.constructor = T2, h2.render = q), C2 && C2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = S2, h2.__n = i2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d({}, h2.__s)), d(h2.__s, T2.getDerivedStateFromProps(m2, h2.__s))), p2 = h2.props, w2 = h2.state, h2.__v = u2, v2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m2 !== p2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, S2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m2, h2.__s, S2) || u2.__v === t2.__v)) {
        for (u2.__v !== t2.__v && (h2.props = m2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), M2 = 0; M2 < h2._sb.length; M2++) h2.__h.push(h2._sb[M2]);
        h2._sb = [], h2.__h.length && f2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, S2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(p2, w2, _2);
      });
    }
    if (h2.context = S2, h2.props = m2, h2.__P = n2, h2.__e = false, $2 = l.__r, I2 = 0, x2) {
      for (h2.state = h2.__s, h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
      h2._sb = [];
    } else do {
      h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++I2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d(d({}, i2), h2.getChildContext())), x2 && !v2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(p2, w2)), P(n2, y(L2 = null != a2 && a2.type === b && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u2, t2, i2, o2, r2, f2, e2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && f2.push(h2), g2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != r2) {
      for (u2.__u |= c2 ? 160 : 128; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r2[r2.indexOf(e2)] = null, u2.__e = e2;
    } else u2.__e = t2.__e, u2.__k = t2.__k;
    l.__e(n3, u2, t2);
  }
  else null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = z(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l.diffed) && a2(u2);
}
function j(n2, u2, t2) {
  u2.__d = void 0;
  for (var i2 = 0; i2 < t2.length; i2++) N(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function z(u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, v2, p2, d2, _2, g2, m2, b2 = i2.props, k2 = t2.props, C2 = t2.type;
  if ("svg" === C2 ? r2 = "http://www.w3.org/2000/svg" : "math" === C2 ? r2 = "http://www.w3.org/1998/Math/MathML" : r2 || (r2 = "http://www.w3.org/1999/xhtml"), null != f2) {
    for (a2 = 0; a2 < f2.length; a2++) if ((_2 = f2[a2]) && "setAttribute" in _2 == !!C2 && (C2 ? _2.localName === C2 : 3 === _2.nodeType)) {
      u2 = _2, f2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null === C2) return document.createTextNode(k2);
    u2 = document.createElementNS(r2, C2, k2.is && k2), c2 && (l.__m && l.__m(t2, f2), c2 = false), f2 = null;
  }
  if (null === C2) b2 === k2 || c2 && u2.data === k2 || (u2.data = k2);
  else {
    if (f2 = f2 && n.call(u2.childNodes), b2 = i2.props || h, !c2 && null != f2) for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) b2[(_2 = u2.attributes[a2]).name] = _2.value;
    for (a2 in b2) if (_2 = b2[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) p2 = _2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      A(u2, a2, null, _2, r2);
    }
    for (a2 in k2) _2 = k2[a2], "children" == a2 ? d2 = _2 : "dangerouslySetInnerHTML" == a2 ? v2 = _2 : "value" == a2 ? g2 = _2 : "checked" == a2 ? m2 = _2 : c2 && "function" != typeof _2 || b2[a2] === _2 || A(u2, a2, _2, b2[a2], r2);
    if (v2) c2 || p2 && (v2.__html === p2.__html || v2.__html === u2.innerHTML) || (u2.innerHTML = v2.__html), t2.__k = [];
    else if (p2 && (u2.innerHTML = ""), P(u2, y(d2) ? d2 : [d2], t2, i2, o2, "foreignObject" === C2 ? "http://www.w3.org/1999/xhtml" : r2, f2, e2, f2 ? f2[0] : i2.__k && x(i2, 0), c2, s2), null != f2) for (a2 = f2.length; a2--; ) w(f2[a2]);
    c2 || (a2 = "value", "progress" === C2 && null == g2 ? u2.removeAttribute("value") : void 0 !== g2 && (g2 !== u2[a2] || "progress" === C2 && !g2 || "option" === C2 && g2 !== b2[a2]) && A(u2, a2, g2, b2[a2], r2), a2 = "checked", void 0 !== m2 && m2 !== u2[a2] && A(u2, a2, m2, b2[a2], r2));
  }
  return u2;
}
function N(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function V(n2, u2, t2) {
  var i2, o2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && V(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B(u2, t2, i2) {
  var o2, r2, f2, e2;
  l.__ && l.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], O(t2, u2 = (!o2 && i2 || t2).__k = _(b, null, [u2]), r2 || h, h, t2.namespaceURI, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), j(f2, u2, e2);
}
function D(n2, l2) {
  B(n2, l2, D);
}
function E(l2, u2, t2) {
  var i2, o2, r2, f2, e2 = d({}, l2.props);
  for (r2 in l2.type && l2.type.defaultProps && (f2 = l2.type.defaultProps), u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : e2[r2] = void 0 === u2[r2] && void 0 !== f2 ? f2[r2] : u2[r2];
  return arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), g(l2.type, e2, i2 || l2.key, o2 || l2.ref, null);
}
function G(n2, l2) {
  var u2 = { __c: l2 = "__cC" + a++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, t2;
    return this.getChildContext || (u3 = /* @__PURE__ */ new Set(), (t2 = {})[l2] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u3 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.forEach(function(n5) {
        n5.__e = true, S(n5);
      });
    }, this.sub = function(n4) {
      u3.add(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3 && u3.delete(n4), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = v.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, k.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u2), this.props)), n2 && d(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), S(this));
}, k.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), S(this));
}, k.prototype.render = b, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, M.__r = 0, e = 0, c = F(false), s = F(true), a = 0;
export {
  k as Component,
  b as Fragment,
  E as cloneElement,
  G as createContext,
  _ as createElement,
  m as createRef,
  _ as h,
  D as hydrate,
  t as isValidElement,
  l as options,
  B as render,
  H as toChildArray
};
//# sourceMappingURL=preact.js.map
