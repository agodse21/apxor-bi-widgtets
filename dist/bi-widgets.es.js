import "./index.css";
import * as re from "react";
import Ge, { useState as Dt, useCallback as Tt, forwardRef as Bi, useContext as Fl, useLayoutEffect as _l, useRef as hi, useMemo as Gi, createContext as Dh, Component as Bh, Fragment as ao, useEffect as ds, createElement as Wt, Children as wa } from "react";
import * as hs from "react-dom";
import jh, { createPortal as Fh } from "react-dom";
var Vl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lo = { exports: {} }, wr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function _h() {
  if (Sa)
    return wr;
  Sa = 1;
  var e = Ge, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, h) {
    var m, g = {}, M = null, N = null;
    h !== void 0 && (M = "" + h), l.key !== void 0 && (M = "" + l.key), l.ref !== void 0 && (N = l.ref);
    for (m in l)
      n.call(l, m) && !s.hasOwnProperty(m) && (g[m] = l[m]);
    if (a && a.defaultProps)
      for (m in l = a.defaultProps, l)
        g[m] === void 0 && (g[m] = l[m]);
    return { $$typeof: t, type: a, key: M, ref: N, props: g, _owner: r.current };
  }
  return wr.Fragment = i, wr.jsx = o, wr.jsxs = o, wr;
}
var Sr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Vh() {
  return Ia || (Ia = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ge, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), f = Symbol.iterator, b = "@@iterator";
    function S(pe) {
      if (pe === null || typeof pe != "object")
        return null;
      var Ce = f && pe[f] || pe[b];
      return typeof Ce == "function" ? Ce : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(pe) {
      {
        for (var Ce = arguments.length, Te = new Array(Ce > 1 ? Ce - 1 : 0), Be = 1; Be < Ce; Be++)
          Te[Be - 1] = arguments[Be];
        x("error", pe, Te);
      }
    }
    function x(pe, Ce, Te) {
      {
        var Be = y.ReactDebugCurrentFrame, $e = Be.getStackAddendum();
        $e !== "" && (Ce += "%s", Te = Te.concat([$e]));
        var tt = Te.map(function(Ze) {
          return String(Ze);
        });
        tt.unshift("Warning: " + Ce), Function.prototype.apply.call(console[pe], console, tt);
      }
    }
    var I = !1, C = !1, A = !1, O = !1, z = !1, H;
    H = Symbol.for("react.module.reference");
    function F(pe) {
      return !!(typeof pe == "string" || typeof pe == "function" || pe === n || pe === s || z || pe === r || pe === h || pe === m || O || pe === N || I || C || A || typeof pe == "object" && pe !== null && (pe.$$typeof === M || pe.$$typeof === g || pe.$$typeof === o || pe.$$typeof === a || pe.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      pe.$$typeof === H || pe.getModuleId !== void 0));
    }
    function E(pe, Ce, Te) {
      var Be = pe.displayName;
      if (Be)
        return Be;
      var $e = Ce.displayName || Ce.name || "";
      return $e !== "" ? Te + "(" + $e + ")" : Te;
    }
    function k(pe) {
      return pe.displayName || "Context";
    }
    function v(pe) {
      if (pe == null)
        return null;
      if (typeof pe.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof pe == "function")
        return pe.displayName || pe.name || null;
      if (typeof pe == "string")
        return pe;
      switch (pe) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case s:
          return "Profiler";
        case r:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof pe == "object")
        switch (pe.$$typeof) {
          case a:
            var Ce = pe;
            return k(Ce) + ".Consumer";
          case o:
            var Te = pe;
            return k(Te._context) + ".Provider";
          case l:
            return E(pe, pe.render, "ForwardRef");
          case g:
            var Be = pe.displayName || null;
            return Be !== null ? Be : v(pe.type) || "Memo";
          case M: {
            var $e = pe, tt = $e._payload, Ze = $e._init;
            try {
              return v(Ze(tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var u = Object.assign, c = 0, w, T, D, G, L, J, se;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function X() {
      {
        if (c === 0) {
          w = console.log, T = console.info, D = console.warn, G = console.error, L = console.group, J = console.groupCollapsed, se = console.groupEnd;
          var pe = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: pe,
            log: pe,
            warn: pe,
            error: pe,
            group: pe,
            groupCollapsed: pe,
            groupEnd: pe
          });
        }
        c++;
      }
    }
    function U() {
      {
        if (c--, c === 0) {
          var pe = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: u({}, pe, {
              value: w
            }),
            info: u({}, pe, {
              value: T
            }),
            warn: u({}, pe, {
              value: D
            }),
            error: u({}, pe, {
              value: G
            }),
            group: u({}, pe, {
              value: L
            }),
            groupCollapsed: u({}, pe, {
              value: J
            }),
            groupEnd: u({}, pe, {
              value: se
            })
          });
        }
        c < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = y.ReactCurrentDispatcher, le;
    function R(pe, Ce, Te) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch ($e) {
            var Be = $e.stack.trim().match(/\n( *(at )?)/);
            le = Be && Be[1] || "";
          }
        return `
` + le + pe;
      }
    }
    var P = !1, W;
    {
      var q = typeof WeakMap == "function" ? WeakMap : Map;
      W = new q();
    }
    function p(pe, Ce) {
      if (!pe || P)
        return "";
      {
        var Te = W.get(pe);
        if (Te !== void 0)
          return Te;
      }
      var Be;
      P = !0;
      var $e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var tt;
      tt = te.current, te.current = null, X();
      try {
        if (Ce) {
          var Ze = function() {
            throw Error();
          };
          if (Object.defineProperty(Ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ze, []);
            } catch (Mt) {
              Be = Mt;
            }
            Reflect.construct(pe, [], Ze);
          } else {
            try {
              Ze.call();
            } catch (Mt) {
              Be = Mt;
            }
            pe.call(Ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mt) {
            Be = Mt;
          }
          pe();
        }
      } catch (Mt) {
        if (Mt && Be && typeof Mt.stack == "string") {
          for (var Xe = Mt.stack.split(`
`), yt = Be.stack.split(`
`), st = Xe.length - 1, pt = yt.length - 1; st >= 1 && pt >= 0 && Xe[st] !== yt[pt]; )
            pt--;
          for (; st >= 1 && pt >= 0; st--, pt--)
            if (Xe[st] !== yt[pt]) {
              if (st !== 1 || pt !== 1)
                do
                  if (st--, pt--, pt < 0 || Xe[st] !== yt[pt]) {
                    var Vt = `
` + Xe[st].replace(" at new ", " at ");
                    return pe.displayName && Vt.includes("<anonymous>") && (Vt = Vt.replace("<anonymous>", pe.displayName)), typeof pe == "function" && W.set(pe, Vt), Vt;
                  }
                while (st >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        P = !1, te.current = tt, U(), Error.prepareStackTrace = $e;
      }
      var Qi = pe ? pe.displayName || pe.name : "", Vi = Qi ? R(Qi) : "";
      return typeof pe == "function" && W.set(pe, Vi), Vi;
    }
    function j(pe, Ce, Te) {
      return p(pe, !1);
    }
    function B(pe) {
      var Ce = pe.prototype;
      return !!(Ce && Ce.isReactComponent);
    }
    function Z(pe, Ce, Te) {
      if (pe == null)
        return "";
      if (typeof pe == "function")
        return p(pe, B(pe));
      if (typeof pe == "string")
        return R(pe);
      switch (pe) {
        case h:
          return R("Suspense");
        case m:
          return R("SuspenseList");
      }
      if (typeof pe == "object")
        switch (pe.$$typeof) {
          case l:
            return j(pe.render);
          case g:
            return Z(pe.type, Ce, Te);
          case M: {
            var Be = pe, $e = Be._payload, tt = Be._init;
            try {
              return Z(tt($e), Ce, Te);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ne = {}, V = y.ReactDebugCurrentFrame;
    function $(pe) {
      if (pe) {
        var Ce = pe._owner, Te = Z(pe.type, pe._source, Ce ? Ce.type : null);
        V.setExtraStackFrame(Te);
      } else
        V.setExtraStackFrame(null);
    }
    function ee(pe, Ce, Te, Be, $e) {
      {
        var tt = Function.call.bind(Y);
        for (var Ze in pe)
          if (tt(pe, Ze)) {
            var Xe = void 0;
            try {
              if (typeof pe[Ze] != "function") {
                var yt = Error((Be || "React class") + ": " + Te + " type `" + Ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof pe[Ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yt.name = "Invariant Violation", yt;
              }
              Xe = pe[Ze](Ce, Ze, Be, Te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (st) {
              Xe = st;
            }
            Xe && !(Xe instanceof Error) && ($($e), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Be || "React class", Te, Ze, typeof Xe), $(null)), Xe instanceof Error && !(Xe.message in ne) && (ne[Xe.message] = !0, $($e), d("Failed %s type: %s", Te, Xe.message), $(null));
          }
      }
    }
    var ue = Array.isArray;
    function ce(pe) {
      return ue(pe);
    }
    function Q(pe) {
      {
        var Ce = typeof Symbol == "function" && Symbol.toStringTag, Te = Ce && pe[Symbol.toStringTag] || pe.constructor.name || "Object";
        return Te;
      }
    }
    function K(pe) {
      try {
        return ie(pe), !1;
      } catch {
        return !0;
      }
    }
    function ie(pe) {
      return "" + pe;
    }
    function ae(pe) {
      if (K(pe))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Q(pe)), ie(pe);
    }
    var de = y.ReactCurrentOwner, he = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, ge, me;
    me = {};
    function be(pe) {
      if (Y.call(pe, "ref")) {
        var Ce = Object.getOwnPropertyDescriptor(pe, "ref").get;
        if (Ce && Ce.isReactWarning)
          return !1;
      }
      return pe.ref !== void 0;
    }
    function ve(pe) {
      if (Y.call(pe, "key")) {
        var Ce = Object.getOwnPropertyDescriptor(pe, "key").get;
        if (Ce && Ce.isReactWarning)
          return !1;
      }
      return pe.key !== void 0;
    }
    function ye(pe, Ce) {
      if (typeof pe.ref == "string" && de.current && Ce && de.current.stateNode !== Ce) {
        var Te = v(de.current.type);
        me[Te] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', v(de.current.type), pe.ref), me[Te] = !0);
      }
    }
    function we(pe, Ce) {
      {
        var Te = function() {
          fe || (fe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ce));
        };
        Te.isReactWarning = !0, Object.defineProperty(pe, "key", {
          get: Te,
          configurable: !0
        });
      }
    }
    function Ae(pe, Ce) {
      {
        var Te = function() {
          ge || (ge = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ce));
        };
        Te.isReactWarning = !0, Object.defineProperty(pe, "ref", {
          get: Te,
          configurable: !0
        });
      }
    }
    var Se = function(pe, Ce, Te, Be, $e, tt, Ze) {
      var Xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: pe,
        key: Ce,
        ref: Te,
        props: Ze,
        // Record the component responsible for creating this element.
        _owner: tt
      };
      return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.defineProperty(Xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
    };
    function xe(pe, Ce, Te, Be, $e) {
      {
        var tt, Ze = {}, Xe = null, yt = null;
        Te !== void 0 && (ae(Te), Xe = "" + Te), ve(Ce) && (ae(Ce.key), Xe = "" + Ce.key), be(Ce) && (yt = Ce.ref, ye(Ce, $e));
        for (tt in Ce)
          Y.call(Ce, tt) && !he.hasOwnProperty(tt) && (Ze[tt] = Ce[tt]);
        if (pe && pe.defaultProps) {
          var st = pe.defaultProps;
          for (tt in st)
            Ze[tt] === void 0 && (Ze[tt] = st[tt]);
        }
        if (Xe || yt) {
          var pt = typeof pe == "function" ? pe.displayName || pe.name || "Unknown" : pe;
          Xe && we(Ze, pt), yt && Ae(Ze, pt);
        }
        return Se(pe, Xe, yt, $e, Be, de.current, Ze);
      }
    }
    var Oe = y.ReactCurrentOwner, Pe = y.ReactDebugCurrentFrame;
    function Ne(pe) {
      if (pe) {
        var Ce = pe._owner, Te = Z(pe.type, pe._source, Ce ? Ce.type : null);
        Pe.setExtraStackFrame(Te);
      } else
        Pe.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function Ue(pe) {
      return typeof pe == "object" && pe !== null && pe.$$typeof === t;
    }
    function ft() {
      {
        if (Oe.current) {
          var pe = v(Oe.current.type);
          if (pe)
            return `

Check the render method of \`` + pe + "`.";
        }
        return "";
      }
    }
    function ct(pe) {
      {
        if (pe !== void 0) {
          var Ce = pe.fileName.replace(/^.*[\\\/]/, ""), Te = pe.lineNumber;
          return `

Check your code at ` + Ce + ":" + Te + ".";
        }
        return "";
      }
    }
    var bt = {};
    function Qt(pe) {
      {
        var Ce = ft();
        if (!Ce) {
          var Te = typeof pe == "string" ? pe : pe.displayName || pe.name;
          Te && (Ce = `

Check the top-level render call using <` + Te + ">.");
        }
        return Ce;
      }
    }
    function Lt(pe, Ce) {
      {
        if (!pe._store || pe._store.validated || pe.key != null)
          return;
        pe._store.validated = !0;
        var Te = Qt(Ce);
        if (bt[Te])
          return;
        bt[Te] = !0;
        var Be = "";
        pe && pe._owner && pe._owner !== Oe.current && (Be = " It was passed a child from " + v(pe._owner.type) + "."), Ne(pe), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Te, Be), Ne(null);
      }
    }
    function yi(pe, Ce) {
      {
        if (typeof pe != "object")
          return;
        if (ce(pe))
          for (var Te = 0; Te < pe.length; Te++) {
            var Be = pe[Te];
            Ue(Be) && Lt(Be, Ce);
          }
        else if (Ue(pe))
          pe._store && (pe._store.validated = !0);
        else if (pe) {
          var $e = S(pe);
          if (typeof $e == "function" && $e !== pe.entries)
            for (var tt = $e.call(pe), Ze; !(Ze = tt.next()).done; )
              Ue(Ze.value) && Lt(Ze.value, Ce);
        }
      }
    }
    function vt(pe) {
      {
        var Ce = pe.type;
        if (Ce == null || typeof Ce == "string")
          return;
        var Te;
        if (typeof Ce == "function")
          Te = Ce.propTypes;
        else if (typeof Ce == "object" && (Ce.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Ce.$$typeof === g))
          Te = Ce.propTypes;
        else
          return;
        if (Te) {
          var Be = v(Ce);
          ee(Te, pe.props, "prop", Be, pe);
        } else if (Ce.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var $e = v(Ce);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof Ce.getDefaultProps == "function" && !Ce.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(pe) {
      {
        for (var Ce = Object.keys(pe.props), Te = 0; Te < Ce.length; Te++) {
          var Be = Ce[Te];
          if (Be !== "children" && Be !== "key") {
            Ne(pe), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Be), Ne(null);
            break;
          }
        }
        pe.ref !== null && (Ne(pe), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var _t = {};
    function un(pe, Ce, Te, Be, $e, tt) {
      {
        var Ze = F(pe);
        if (!Ze) {
          var Xe = "";
          (pe === void 0 || typeof pe == "object" && pe !== null && Object.keys(pe).length === 0) && (Xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = ct($e);
          yt ? Xe += yt : Xe += ft();
          var st;
          pe === null ? st = "null" : ce(pe) ? st = "array" : pe !== void 0 && pe.$$typeof === t ? (st = "<" + (v(pe.type) || "Unknown") + " />", Xe = " Did you accidentally export a JSX literal instead of a component?") : st = typeof pe, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", st, Xe);
        }
        var pt = xe(pe, Ce, Te, $e, tt);
        if (pt == null)
          return pt;
        if (Ze) {
          var Vt = Ce.children;
          if (Vt !== void 0)
            if (Be)
              if (ce(Vt)) {
                for (var Qi = 0; Qi < Vt.length; Qi++)
                  yi(Vt[Qi], pe);
                Object.freeze && Object.freeze(Vt);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yi(Vt, pe);
        }
        if (Y.call(Ce, "key")) {
          var Vi = v(pe), Mt = Object.keys(Ce).filter(function(Nh) {
            return Nh !== "key";
          }), Ds = Mt.length > 0 ? "{key: someKey, " + Mt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_t[Vi + Ds]) {
            var Lh = Mt.length > 0 ? "{" + Mt.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ds, Vi, Lh, Vi), _t[Vi + Ds] = !0;
          }
        }
        return pe === n ? At(pt) : vt(pt), pt;
      }
    }
    function Ns(pe, Ce, Te) {
      return un(pe, Ce, Te, !0);
    }
    function dn(pe, Ce, Te) {
      return un(pe, Ce, Te, !1);
    }
    var hn = dn, fn = Ns;
    Sr.Fragment = n, Sr.jsx = hn, Sr.jsxs = fn;
  }()), Sr;
}
process.env.NODE_ENV === "production" ? lo.exports = _h() : lo.exports = Vh();
var oe = lo.exports;
class Wl extends Ge.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, i) {
    console.info(t, i);
  }
  render() {
    return this.state.hasError ? this.props.fallback(this.state.error) : this.props.children;
  }
}
function Xl(e) {
  var t, i, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (i = Xl(e[t])) && (n && (n += " "), n += i);
    } else
      for (i in e)
        e[i] && (n && (n += " "), n += i);
  return n;
}
function Hl() {
  for (var e, t, i = 0, n = "", r = arguments.length; i < r; i++)
    (e = arguments[i]) && (t = Xl(e)) && (n && (n += " "), n += t);
  return n;
}
const Vo = "-", Gh = (e) => {
  const t = Xh(e), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Vo);
      return a[0] === "" && a.length !== 1 && a.shift(), zl(a, t) || Wh(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = i[o] || [];
      return a && n[o] ? [...l, ...n[o]] : l;
    }
  };
}, zl = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const i = e[0], n = t.nextPart.get(i), r = n ? zl(e.slice(1), n) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(Vo);
  return (o = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : o.classGroupId;
}, Aa = /^\[(.+)\]$/, Wh = (e) => {
  if (Aa.test(e)) {
    const t = Aa.exec(e)[1], i = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, Xh = (e) => {
  const {
    theme: t,
    prefix: i
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zh(Object.entries(e.classGroups), i).forEach(([s, o]) => {
    co(o, n, s, t);
  }), n;
}, co = (e, t, i, n) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : Ea(t, r);
      s.classGroupId = i;
      return;
    }
    if (typeof r == "function") {
      if (Hh(r)) {
        co(r(n), t, i, n);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: i
      });
      return;
    }
    Object.entries(r).forEach(([s, o]) => {
      co(o, Ea(t, s), i, n);
    });
  });
}, Ea = (e, t) => {
  let i = e;
  return t.split(Vo).forEach((n) => {
    i.nextPart.has(n) || i.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(n);
  }), i;
}, Hh = (e) => e.isThemeGetter, zh = (e, t) => t ? e.map(([i, n]) => {
  const r = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a]) => [t + o, a])) : s);
  return [i, r];
}) : e, Zh = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const r = (s, o) => {
    i.set(s, o), t++, t > e && (t = 0, n = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = i.get(s);
      if (o !== void 0)
        return o;
      if ((o = n.get(s)) !== void 0)
        return r(s, o), o;
    },
    set(s, o) {
      i.has(s) ? i.set(s, o) : r(s, o);
    }
  };
}, Zl = "!", Yh = (e) => {
  const {
    separator: t,
    experimentalParseClassName: i
  } = e, n = t.length === 1, r = t[0], s = t.length, o = (a) => {
    const l = [];
    let h = 0, m = 0, g;
    for (let S = 0; S < a.length; S++) {
      let y = a[S];
      if (h === 0) {
        if (y === r && (n || a.slice(S, S + s) === t)) {
          l.push(a.slice(m, S)), m = S + s;
          continue;
        }
        if (y === "/") {
          g = S;
          continue;
        }
      }
      y === "[" ? h++ : y === "]" && h--;
    }
    const M = l.length === 0 ? a : a.substring(m), N = M.startsWith(Zl), f = N ? M.substring(1) : M, b = g && g > m ? g - m : void 0;
    return {
      modifiers: l,
      hasImportantModifier: N,
      baseClassName: f,
      maybePostfixModifierPosition: b
    };
  };
  return i ? (a) => i({
    className: a,
    parseClassName: o
  }) : o;
}, Uh = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let i = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...i.sort(), n), i = []) : i.push(n);
  }), t.push(...i.sort()), t;
}, $h = (e) => ({
  cache: Zh(e.cacheSize),
  parseClassName: Yh(e),
  ...Gh(e)
}), Jh = /\s+/, Qh = (e, t) => {
  const {
    parseClassName: i,
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  } = t, s = [], o = e.trim().split(Jh);
  let a = "";
  for (let l = o.length - 1; l >= 0; l -= 1) {
    const h = o[l], {
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: M,
      maybePostfixModifierPosition: N
    } = i(h);
    let f = !!N, b = n(f ? M.substring(0, N) : M);
    if (!b) {
      if (!f) {
        a = h + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (b = n(M), !b) {
        a = h + (a.length > 0 ? " " + a : a);
        continue;
      }
      f = !1;
    }
    const S = Uh(m).join(":"), y = g ? S + Zl : S, d = y + b;
    if (s.includes(d))
      continue;
    s.push(d);
    const x = r(b, f);
    for (let I = 0; I < x.length; ++I) {
      const C = x[I];
      s.push(y + C);
    }
    a = h + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Kh() {
  let e = 0, t, i, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (i = Yl(t)) && (n && (n += " "), n += i);
  return n;
}
const Yl = (e) => {
  if (typeof e == "string")
    return e;
  let t, i = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Yl(e[n])) && (i && (i += " "), i += t);
  return i;
};
function qh(e, ...t) {
  let i, n, r, s = o;
  function o(l) {
    const h = t.reduce((m, g) => g(m), e());
    return i = $h(h), n = i.cache.get, r = i.cache.set, s = a, a(l);
  }
  function a(l) {
    const h = n(l);
    if (h)
      return h;
    const m = Qh(l, i);
    return r(l, m), m;
  }
  return function() {
    return s(Kh.apply(null, arguments));
  };
}
const at = (e) => {
  const t = (i) => i[e] || [];
  return t.isThemeGetter = !0, t;
}, Ul = /^\[(?:([a-z-]+):)?(.+)\]$/i, ef = /^\d+\/\d+$/, tf = /* @__PURE__ */ new Set(["px", "full", "screen"]), rf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, of = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, af = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ci = (e) => sr(e) || tf.has(e) || ef.test(e), xi = (e) => br(e, "length", gf), sr = (e) => !!e && !Number.isNaN(Number(e)), Bs = (e) => br(e, "number", sr), Ir = (e) => !!e && Number.isInteger(Number(e)), lf = (e) => e.endsWith("%") && sr(e.slice(0, -1)), He = (e) => Ul.test(e), Ci = (e) => rf.test(e), cf = /* @__PURE__ */ new Set(["length", "size", "percentage"]), uf = (e) => br(e, cf, $l), df = (e) => br(e, "position", $l), hf = /* @__PURE__ */ new Set(["image", "url"]), ff = (e) => br(e, hf, bf), pf = (e) => br(e, "", mf), Ar = () => !0, br = (e, t, i) => {
  const n = Ul.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : i(n[2]) : !1;
}, gf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  nf.test(e) && !sf.test(e)
), $l = () => !1, mf = (e) => of.test(e), bf = (e) => af.test(e), vf = () => {
  const e = at("colors"), t = at("spacing"), i = at("blur"), n = at("brightness"), r = at("borderColor"), s = at("borderRadius"), o = at("borderSpacing"), a = at("borderWidth"), l = at("contrast"), h = at("grayscale"), m = at("hueRotate"), g = at("invert"), M = at("gap"), N = at("gradientColorStops"), f = at("gradientColorStopPositions"), b = at("inset"), S = at("margin"), y = at("opacity"), d = at("padding"), x = at("saturate"), I = at("scale"), C = at("sepia"), A = at("skew"), O = at("space"), z = at("translate"), H = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", He, t], k = () => [He, t], v = () => ["", ci, xi], u = () => ["auto", sr, He], c = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], w = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", He], L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [sr, He];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ar],
      spacing: [ci, xi],
      blur: ["none", "", Ci, He],
      brightness: J(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ci, He],
      borderSpacing: k(),
      borderWidth: v(),
      contrast: J(),
      grayscale: G(),
      hueRotate: J(),
      invert: G(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [lf, xi],
      inset: E(),
      margin: E(),
      opacity: J(),
      padding: k(),
      saturate: J(),
      scale: J(),
      sepia: G(),
      skew: J(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", He]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ci]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": L()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": L()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...c(), He]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: H()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": H()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ir, He]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: E()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", He]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ir, He]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ar]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ir, He]
        }, He]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": u()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": u()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ar]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ir, He]
        }, He]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": u()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": u()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", He]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", He]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [M]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [M]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [M]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...D(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [d]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [d]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [d]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [d]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [d]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [d]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [d]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [d]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [d]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [S]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [S]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [S]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [S]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [S]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [S]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [S]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [S]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [S]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [O]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [O]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", He, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [He, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [He, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ci]
        }, Ci]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [He, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [He, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [He, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [He, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ci, xi]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ar]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", He]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", sr, Bs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ci, He]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", He]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", He]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...w(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ci, xi]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ci, He]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", He]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", He]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...c(), df]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", uf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ff]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [N]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [N]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [N]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...w(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: w()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [r]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...w()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ci, He]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ci, xi]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: v()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ci, xi]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ci, pf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ar]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [i]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ci, He]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [i]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", He]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: J()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", He]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: J()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", He]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ir, He]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [z]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", He]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", He]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", He]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ci, xi, Bs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, yf = /* @__PURE__ */ qh(vf);
function _e(...e) {
  return yf(Hl(e));
}
const ur = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  "div",
  {
    ref: i,
    className: _e(
      "rounded-xl border bg-card text-card-foreground shadow",
      e
    ),
    ...t
  }
));
ur.displayName = "Card";
const xf = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  "div",
  {
    ref: i,
    className: _e("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
xf.displayName = "CardHeader";
const Go = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  "h3",
  {
    ref: i,
    className: _e("font-semibold leading-none tracking-tight", e),
    ...t
  }
));
Go.displayName = "CardTitle";
const Wo = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  "p",
  {
    ref: i,
    className: _e("text-sm text-muted-foreground", e),
    ...t
  }
));
Wo.displayName = "CardDescription";
const Cf = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx("div", { ref: i, className: _e("p-6 pt-0", e), ...t }));
Cf.displayName = "CardContent";
const wf = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  "div",
  {
    ref: i,
    className: _e("flex items-center p-6 pt-0", e),
    ...t
  }
));
wf.displayName = "CardFooter";
function Jl(e) {
  var t, i, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (i = Jl(e[t])) && (n && (n += " "), n += i);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Sf() {
  for (var e, t, i = 0, n = ""; i < arguments.length; )
    (e = arguments[i++]) && (t = Jl(e)) && (n && (n += " "), n += t);
  return n;
}
const Ta = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ka = Sf, Xo = (e, t) => (i) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return ka(e, i == null ? void 0 : i.class, i == null ? void 0 : i.className);
  const { variants: r, defaultVariants: s } = t, o = Object.keys(r).map((h) => {
    const m = i == null ? void 0 : i[h], g = s == null ? void 0 : s[h];
    if (m === null)
      return null;
    const M = Ta(m) || Ta(g);
    return r[h][M];
  }), a = i && Object.entries(i).reduce((h, m) => {
    let [g, M] = m;
    return M === void 0 || (h[g] = M), h;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((h, m) => {
    let { class: g, className: M, ...N } = m;
    return Object.entries(N).every((f) => {
      let [b, S] = f;
      return Array.isArray(S) ? S.includes({
        ...s,
        ...a
      }[b]) : {
        ...s,
        ...a
      }[b] === S;
    }) ? [
      ...h,
      g,
      M
    ] : h;
  }, []);
  return ka(e, o, l, i == null ? void 0 : i.class, i == null ? void 0 : i.className);
}, If = Xo("inline-flex items-center", {
  variants: {
    size: {
      small: "h-3 w-3",
      medium: "h-6 w-6",
      large: "h-8 w-8"
    }
  },
  defaultVariants: {
    size: "small"
  }
}), Ho = (e) => {
  const { size: t } = e;
  return /* @__PURE__ */ oe.jsx("div", { className: _e("border-white dark:border-black"), children: /* @__PURE__ */ oe.jsx(
    "svg",
    {
      className: _e(If({ size: t })),
      viewBox: "0 0 2400 2400",
      width: 18,
      height: 18,
      children: /* @__PURE__ */ oe.jsxs(
        "g",
        {
          strokeWidth: 200,
          strokeLinecap: "round",
          stroke: "currentColor",
          fill: "none",
          children: [
            /* @__PURE__ */ oe.jsx("path", { d: "M1200 600L1200 100" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.5, d: "M1200 2300L1200 1800" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.917, d: "M900 680.4L650 247.4" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.417, d: "M1750 2152.6L1500 1719.6" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.833, d: "M680.4 900L247.4 650" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.333, d: "M2152.6 1750L1719.6 1500" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.75, d: "M600 1200L100 1200" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.25, d: "M2300 1200L1800 1200" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.667, d: "M680.4 1500L247.4 1750" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.167, d: "M2152.6 650L1719.6 900" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.583, d: "M900 1719.6L650 2152.6" }),
            /* @__PURE__ */ oe.jsx("path", { opacity: 0.083, d: "M1750 247.4L1500 680.4" }),
            /* @__PURE__ */ oe.jsx(
              "animateTransform",
              {
                attributeName: "transform",
                attributeType: "XML",
                type: "rotate",
                keyTimes: "0;0.08333;0.16667;0.25;0.33333;0.41667;0.5;0.58333;0.66667;0.75;0.83333;0.91667",
                values: "0 1199 1199;30 1199 1199;60 1199 1199;90 1199 1199;120 1199 1199;150 1199 1199;180 1199 1199;210 1199 1199;240 1199 1199;270 1199 1199;300 1199 1199;330 1199 1199",
                dur: "0.83333s",
                begin: "0s",
                repeatCount: "indefinite",
                calcMode: "discrete"
              }
            )
          ]
        }
      )
    }
  ) });
};
Ho.displayName = "Spinner";
const An = {
  SequentialRose: [
    "#fff1f2",
    "#ffe4e6",
    "#fecdd3",
    "#fda4af",
    "#fb7185",
    "#f43f5e",
    "#e11d48",
    "#be123c",
    "#9f1239",
    "#881337",
    "#4c0519"
  ],
  SequentialBlue: [
    "#eff6ff",
    "#dbeafe",
    "#bfdbfe",
    "#93c5fd",
    "#60a5fa",
    "#3b82f6",
    "#2563eb",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a",
    "#172554"
  ],
  SequentialGreen: [
    "#f0fdf4",
    "#dcfce7",
    "#bbf7d0",
    "#86efac",
    "#4ade80",
    "#22c55e",
    "#16a34a",
    "#15803d",
    "#166534",
    "#14532d",
    "#052e16"
  ],
  SequentialOrange: [
    "#fff7ed",
    "#ffedd5",
    "#fed7aa",
    "#fdba74",
    "#fb923c",
    "#f97316",
    "#ea580c",
    "#c2410c",
    "#9a3412",
    "#7c2d12",
    "#431407"
  ],
  SequentialGray: [
    "#f8fafc",
    "#f1f5f9",
    "#e2e8f0",
    "#cbd5e1",
    "#94a3b8",
    "#64748b",
    "#475569",
    "#334155",
    "#1e293b",
    "#0f172a",
    "#020617"
  ],
  DivergingGreenWhite: [
    "#0a2d2e",
    "#1c4e4f",
    "#436e6f",
    "#6a8e8f",
    "#879693",
    "#a49e97",
    "#deae9f",
    "#efd7cf",
    "#f7ebe7",
    "#ffffff"
  ],
  DivergingDarkGreenYellow: [
    "#00202e",
    "#003f5c",
    "#2c4875",
    "#8a508f",
    "#bc5090",
    "#ff6361",
    "#ff8531",
    "#ffa600",
    "#ffd380"
  ],
  rainbowOf10: [
    "#f65356",
    "#fb8066",
    "#fea671",
    "#fec979",
    "#feea80",
    "#d7e586",
    "#a5de94",
    "#5daad8",
    "#8187c7",
    "#c56bba"
  ],
  rainbowOf5: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
  orangeShadeOf10: [
    "#c7522a",
    "#cb6036",
    "#cf6e41",
    "#d68a58",
    "#dea66f",
    "#e5c185",
    "#f0daa5",
    "#fbf2c4",
    "#dae0b8",
    "#b8cdab"
  ],
  Random20: [
    "#1abc9c",
    "#16a085",
    "#2ecc71",
    "#27ae60",
    "#3498db",
    "#2980b9",
    "#9b59b6",
    "#8e44ad",
    "#34495e",
    "#2c3e50",
    "#f1c40f",
    "#f39c12",
    "#e67e22",
    "#d35400",
    "#e74c3c",
    "#c0392b",
    "#ecf0f1",
    "#bdc3c7",
    "#95a5a6",
    "#7f8c8d"
  ],
  DivergingDarkPurpleBlueRed: [
    "#413344",
    "#614c65",
    "#806485",
    "#936397",
    "#a662a8",
    "#664972",
    "#463c57",
    "#6e8da9",
    "#91bcdd",
    "#567d99",
    "#395e77",
    "#305662",
    "#264d4d",
    "#315c45",
    "#8a9a65",
    "#b6b975",
    "#b65d54",
    "#b60033",
    "#98062d",
    "#800022"
  ],
  ColorsForStackedBar: ["#1982c4", "#7cb5ec", "#91e8e1", "#f39c12", "#6a4c93"]
};
var Ql = { exports: {} };
(function(e) {
  /**
  * Highcharts JS v11.4.8 (2024-08-29)
  *
  * (c) 2009-2024 Torstein Honsi
  *
  * License: www.highcharts.com/license
  */
  (function(t, i) {
    e.exports ? (i.default = i, e.exports = t && t.document ? i(t) : i) : (t.Highcharts && t.Highcharts.error(16, !0), t.Highcharts = i(t));
  })(typeof window < "u" ? window : Vl, function(t) {
    var i = {};
    function n(r, s, o, a) {
      !r.hasOwnProperty(s) && (r[s] = a.apply(null, o), t && typeof CustomEvent == "function" && t.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: s, module: r[s] } })));
    }
    return n(i, "Core/Globals.js", [], function() {
      var r, s;
      return (s = r || (r = {})).SVG_NS = "http://www.w3.org/2000/svg", s.product = "Highcharts", s.version = "11.4.8", s.win = t !== void 0 ? t : {}, s.doc = s.win.document, s.svg = s.doc && s.doc.createElementNS && !!s.doc.createElementNS(s.SVG_NS, "svg").createSVGRect, s.userAgent = s.win.navigator && s.win.navigator.userAgent || "", s.isChrome = s.win.chrome, s.isFirefox = s.userAgent.indexOf("Firefox") !== -1, s.isMS = /(edge|msie|trident)/i.test(s.userAgent) && !s.win.opera, s.isSafari = !s.isChrome && s.userAgent.indexOf("Safari") !== -1, s.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(s.userAgent), s.isWebKit = s.userAgent.indexOf("AppleWebKit") !== -1, s.deg2rad = 2 * Math.PI / 360, s.hasBidiBug = s.isFirefox && 4 > parseInt(s.userAgent.split("Firefox/")[1], 10), s.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], s.noop = function() {
      }, s.supportsPassiveEvents = function() {
        let o = !1;
        if (!s.isMS) {
          let a = Object.defineProperty({}, "passive", { get: function() {
            o = !0;
          } });
          s.win.addEventListener && s.win.removeEventListener && (s.win.addEventListener("testPassive", s.noop, a), s.win.removeEventListener("testPassive", s.noop, a));
        }
        return o;
      }(), s.charts = [], s.composed = [], s.dateFormats = {}, s.seriesTypes = {}, s.symbolSizes = {}, s.chartCount = 0, r;
    }), n(i, "Core/Utilities.js", [i["Core/Globals.js"]], function(r) {
      let s, { charts: o, doc: a, win: l } = r;
      function h(u, c, w, T) {
        let D = c ? "Highcharts error" : "Highcharts warning";
        u === 32 && (u = `${D}: Deprecated member`);
        let G = S(u), L = G ? `${D} #${u}: www.highcharts.com/errors/${u}/` : u.toString();
        if (T !== void 0) {
          let J = "";
          G && (L += "?"), F(T, function(se, _) {
            J += `
 - ${_}: ${se}`, G && (L += encodeURI(_) + "=" + encodeURI(se));
          }), L += J;
        }
        k(r, "displayError", { chart: w, code: u, message: L, params: T }, function() {
          if (c)
            throw Error(L);
          l.console && h.messages.indexOf(L) === -1 && console.warn(L);
        }), h.messages.push(L);
      }
      function m(u, c) {
        return parseInt(u, c || 10);
      }
      function g(u) {
        return typeof u == "string";
      }
      function M(u) {
        let c = Object.prototype.toString.call(u);
        return c === "[object Array]" || c === "[object Array Iterator]";
      }
      function N(u, c) {
        return !!u && typeof u == "object" && (!c || !M(u));
      }
      function f(u) {
        return N(u) && typeof u.nodeType == "number";
      }
      function b(u) {
        let c = u && u.constructor;
        return !!(N(u, !0) && !f(u) && c && c.name && c.name !== "Object");
      }
      function S(u) {
        return typeof u == "number" && !isNaN(u) && u < 1 / 0 && u > -1 / 0;
      }
      function y(u) {
        return u != null;
      }
      function d(u, c, w) {
        let T, D = g(c) && !y(w), G = (L, J) => {
          y(L) ? u.setAttribute(J, L) : D ? (T = u.getAttribute(J)) || J !== "class" || (T = u.getAttribute(J + "Name")) : u.removeAttribute(J);
        };
        return g(c) ? G(w, c) : F(c, G), T;
      }
      function x(u) {
        return M(u) ? u : [u];
      }
      function I(u, c) {
        let w;
        for (w in u || (u = {}), c)
          u[w] = c[w];
        return u;
      }
      function C() {
        let u = arguments, c = u.length;
        for (let w = 0; w < c; w++) {
          let T = u[w];
          if (T != null)
            return T;
        }
      }
      function A(u, c) {
        I(u.style, c);
      }
      function O(u) {
        return Math.pow(10, Math.floor(Math.log(u) / Math.LN10));
      }
      function z(u, c) {
        return u > 1e14 ? u : parseFloat(u.toPrecision(c || 14));
      }
      (h || (h = {})).messages = [], Math.easeInOutSine = function(u) {
        return -0.5 * (Math.cos(Math.PI * u) - 1);
      };
      let H = Array.prototype.find ? function(u, c) {
        return u.find(c);
      } : function(u, c) {
        let w, T = u.length;
        for (w = 0; w < T; w++)
          if (c(u[w], w))
            return u[w];
      };
      function F(u, c, w) {
        for (let T in u)
          Object.hasOwnProperty.call(u, T) && c.call(w || u[T], u[T], T, u);
      }
      function E(u, c, w) {
        function T(L, J) {
          let se = u.removeEventListener;
          se && se.call(u, L, J, !1);
        }
        function D(L) {
          let J, se;
          u.nodeName && (c ? (J = {})[c] = !0 : J = L, F(J, function(_, X) {
            if (L[X])
              for (se = L[X].length; se--; )
                T(X, L[X][se].fn);
          }));
        }
        let G = typeof u == "function" && u.prototype || u;
        if (Object.hasOwnProperty.call(G, "hcEvents")) {
          let L = G.hcEvents;
          if (c) {
            let J = L[c] || [];
            w ? (L[c] = J.filter(function(se) {
              return w !== se.fn;
            }), T(c, w)) : (D(L), L[c] = []);
          } else
            D(L), delete G.hcEvents;
        }
      }
      function k(u, c, w, T) {
        if (w = w || {}, a.createEvent && (u.dispatchEvent || u.fireEvent && u !== r)) {
          let D = a.createEvent("Events");
          D.initEvent(c, !0, !0), w = I(D, w), u.dispatchEvent ? u.dispatchEvent(w) : u.fireEvent(c, w);
        } else if (u.hcEvents) {
          w.target || I(w, { preventDefault: function() {
            w.defaultPrevented = !0;
          }, target: u, type: c });
          let D = [], G = u, L = !1;
          for (; G.hcEvents; )
            Object.hasOwnProperty.call(G, "hcEvents") && G.hcEvents[c] && (D.length && (L = !0), D.unshift.apply(D, G.hcEvents[c])), G = Object.getPrototypeOf(G);
          L && D.sort((J, se) => J.order - se.order), D.forEach((J) => {
            J.fn.call(u, w) === !1 && w.preventDefault();
          });
        }
        T && !w.defaultPrevented && T.call(u, w);
      }
      F({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(u, c) {
        r[c] = function(w) {
          return h(32, !1, void 0, { [`Highcharts.${c}`]: `use Array.${u}` }), Array.prototype[u].apply(w, [].slice.call(arguments, 1));
        };
      });
      let v = function() {
        let u = Math.random().toString(36).substring(2, 9) + "-", c = 0;
        return function() {
          return "highcharts-" + (s ? "" : u) + c++;
        };
      }();
      return l.jQuery && (l.jQuery.fn.highcharts = function() {
        let u = [].slice.call(arguments);
        if (this[0])
          return u[0] ? (new r[g(u[0]) ? u.shift() : "Chart"](this[0], u[0], u[1]), this) : o[d(this[0], "data-highcharts-chart")];
      }), { addEvent: function(u, c, w, T = {}) {
        let D = typeof u == "function" && u.prototype || u;
        Object.hasOwnProperty.call(D, "hcEvents") || (D.hcEvents = {});
        let G = D.hcEvents;
        r.Point && u instanceof r.Point && u.series && u.series.chart && (u.series.chart.runTrackerClick = !0);
        let L = u.addEventListener;
        L && L.call(u, c, w, !!r.supportsPassiveEvents && { passive: T.passive === void 0 ? c.indexOf("touch") !== -1 : T.passive, capture: !1 }), G[c] || (G[c] = []);
        let J = { fn: w, order: typeof T.order == "number" ? T.order : 1 / 0 };
        return G[c].push(J), G[c].sort((se, _) => se.order - _.order), function() {
          E(u, c, w);
        };
      }, arrayMax: function(u) {
        let c = u.length, w = u[0];
        for (; c--; )
          u[c] > w && (w = u[c]);
        return w;
      }, arrayMin: function(u) {
        let c = u.length, w = u[0];
        for (; c--; )
          u[c] < w && (w = u[c]);
        return w;
      }, attr: d, clamp: function(u, c, w) {
        return u > c ? u < w ? u : w : c;
      }, clearTimeout: function(u) {
        y(u) && clearTimeout(u);
      }, correctFloat: z, createElement: function(u, c, w, T, D) {
        let G = a.createElement(u);
        return c && I(G, c), D && A(G, { padding: "0", border: "none", margin: "0" }), w && A(G, w), T && T.appendChild(G), G;
      }, crisp: (u, c = 0, w) => {
        let T = c % 2 / 2, D = w ? -1 : 1;
        return (Math.round(u * D - T) + T) * D;
      }, css: A, defined: y, destroyObjectProperties: function(u, c, w) {
        F(u, function(T, D) {
          T !== c && (T != null && T.destroy) && T.destroy(), (T != null && T.destroy || !w) && delete u[D];
        });
      }, diffObjects: function(u, c, w, T) {
        let D = {};
        return function G(L, J, se, _) {
          let X = w ? J : L;
          F(L, function(U, te) {
            if (!_ && T && T.indexOf(te) > -1 && J[te]) {
              U = x(U), se[te] = [];
              for (let le = 0; le < Math.max(U.length, J[te].length); le++)
                J[te][le] && (U[le] === void 0 ? se[te][le] = J[te][le] : (se[te][le] = {}, G(U[le], J[te][le], se[te][le], _ + 1)));
            } else
              N(U, !0) && !U.nodeType ? (se[te] = M(U) ? [] : {}, G(U, J[te] || {}, se[te], _ + 1), Object.keys(se[te]).length !== 0 || te === "colorAxis" && _ === 0 || delete se[te]) : (L[te] !== J[te] || te in L && !(te in J)) && te !== "__proto__" && te !== "constructor" && (se[te] = X[te]);
          });
        }(u, c, D, 0), D;
      }, discardElement: function(u) {
        u && u.parentElement && u.parentElement.removeChild(u);
      }, erase: function(u, c) {
        let w = u.length;
        for (; w--; )
          if (u[w] === c) {
            u.splice(w, 1);
            break;
          }
      }, error: h, extend: I, extendClass: function(u, c) {
        let w = function() {
        };
        return w.prototype = new u(), I(w.prototype, c), w;
      }, find: H, fireEvent: k, getClosestDistance: function(u, c) {
        let w, T, D, G = !c;
        return u.forEach((L) => {
          if (L.length > 1)
            for (D = L.length - 1; D > 0; D--)
              (T = L[D] - L[D - 1]) < 0 && !G ? (c == null || c(), c = void 0) : T && (w === void 0 || T < w) && (w = T);
        }), w;
      }, getMagnitude: O, getNestedProperty: function(u, c) {
        let w = u.split(".");
        for (; w.length && y(c); ) {
          let T = w.shift();
          if (T === void 0 || T === "__proto__")
            return;
          if (T === "this") {
            let G;
            return N(c) && (G = c["@this"]), G ?? c;
          }
          let D = c[T];
          if (!y(D) || typeof D == "function" || typeof D.nodeType == "number" || D === l)
            return;
          c = D;
        }
        return c;
      }, getStyle: function u(c, w, T) {
        let D;
        if (w === "width") {
          let L = Math.min(c.offsetWidth, c.scrollWidth), J = c.getBoundingClientRect && c.getBoundingClientRect().width;
          return J < L && J >= L - 1 && (L = Math.floor(J)), Math.max(0, L - (u(c, "padding-left", !0) || 0) - (u(c, "padding-right", !0) || 0));
        }
        if (w === "height")
          return Math.max(0, Math.min(c.offsetHeight, c.scrollHeight) - (u(c, "padding-top", !0) || 0) - (u(c, "padding-bottom", !0) || 0));
        let G = l.getComputedStyle(c, void 0);
        return G && (D = G.getPropertyValue(w), C(T, w !== "opacity") && (D = m(D))), D;
      }, inArray: function(u, c, w) {
        return h(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }), c.indexOf(u, w);
      }, insertItem: function(u, c) {
        let w, T = u.options.index, D = c.length;
        for (w = u.options.isInternal ? D : 0; w < D + 1; w++)
          if (!c[w] || S(T) && T < C(c[w].options.index, c[w]._i) || c[w].options.isInternal) {
            c.splice(w, 0, u);
            break;
          }
        return w;
      }, isArray: M, isClass: b, isDOMElement: f, isFunction: function(u) {
        return typeof u == "function";
      }, isNumber: S, isObject: N, isString: g, keys: function(u) {
        return h(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }), Object.keys(u);
      }, merge: function() {
        let u, c = arguments, w = {}, T = function(G, L) {
          return typeof G != "object" && (G = {}), F(L, function(J, se) {
            se !== "__proto__" && se !== "constructor" && (!N(J, !0) || b(J) || f(J) ? G[se] = L[se] : G[se] = T(G[se] || {}, J));
          }), G;
        };
        c[0] === !0 && (w = c[1], c = Array.prototype.slice.call(c, 2));
        let D = c.length;
        for (u = 0; u < D; u++)
          w = T(w, c[u]);
        return w;
      }, normalizeTickInterval: function(u, c, w, T, D) {
        let G, L = u;
        w = C(w, O(u));
        let J = u / w;
        for (!c && (c = D ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], T === !1 && (w === 1 ? c = c.filter(function(se) {
          return se % 1 == 0;
        }) : w <= 0.1 && (c = [1 / w]))), G = 0; G < c.length && (L = c[G], (!D || !(L * w >= u)) && (D || !(J <= (c[G] + (c[G + 1] || c[G])) / 2))); G++)
          ;
        return z(L * w, -Math.round(Math.log(1e-3) / Math.LN10));
      }, objectEach: F, offset: function(u) {
        let c = a.documentElement, w = u.parentElement || u.parentNode ? u.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
        return { top: w.top + (l.pageYOffset || c.scrollTop) - (c.clientTop || 0), left: w.left + (l.pageXOffset || c.scrollLeft) - (c.clientLeft || 0), width: w.width, height: w.height };
      }, pad: function(u, c, w) {
        return Array((c || 2) + 1 - String(u).replace("-", "").length).join(w || "0") + u;
      }, pick: C, pInt: m, pushUnique: function(u, c) {
        return 0 > u.indexOf(c) && !!u.push(c);
      }, relativeLength: function(u, c, w) {
        return /%$/.test(u) ? c * parseFloat(u) / 100 + (w || 0) : parseFloat(u);
      }, removeEvent: E, replaceNested: function(u, ...c) {
        let w, T;
        do
          for (T of (w = u, c))
            u = u.replace(T[0], T[1]);
        while (u !== w);
        return u;
      }, splat: x, stableSort: function(u, c) {
        let w, T, D = u.length;
        for (T = 0; T < D; T++)
          u[T].safeI = T;
        for (u.sort(function(G, L) {
          return (w = c(G, L)) === 0 ? G.safeI - L.safeI : w;
        }), T = 0; T < D; T++)
          delete u[T].safeI;
      }, syncTimeout: function(u, c, w) {
        return c > 0 ? setTimeout(u, c, w) : (u.call(0, w), -1);
      }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, uniqueKey: v, useSerialIds: function(u) {
        return s = C(u, s);
      }, wrap: function(u, c, w) {
        let T = u[c];
        u[c] = function() {
          let D = arguments, G = this;
          return w.apply(this, [function() {
            return T.apply(G, arguments.length ? arguments : D);
          }].concat([].slice.call(arguments)));
        };
      } };
    }), n(i, "Core/Chart/ChartDefaults.js", [], function() {
      return { alignThresholds: !1, panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: !0, type: "line", zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" };
    }), n(i, "Core/Color/Palettes.js", [], function() {
      return { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"] };
    }), n(i, "Core/Time.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s) {
      let { win: o } = r, { defined: a, error: l, extend: h, isNumber: m, isObject: g, merge: M, objectEach: N, pad: f, pick: b, splat: S, timeUnits: y } = s, d = r.isSafari && o.Intl && o.Intl.DateTimeFormat.prototype.formatRange, x = r.isSafari && o.Intl && !o.Intl.DateTimeFormat.prototype.formatRange;
      class I {
        constructor(A) {
          this.options = {}, this.useUTC = !1, this.variableTimezone = !1, this.Date = o.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(A);
        }
        get(A, O) {
          if (this.variableTimezone || this.timezoneOffset) {
            let z = O.getTime(), H = z - this.getTimezoneOffset(O);
            O.setTime(H);
            let F = O["getUTC" + A]();
            return O.setTime(z), F;
          }
          return this.useUTC ? O["getUTC" + A]() : O["get" + A]();
        }
        set(A, O, z) {
          if (this.variableTimezone || this.timezoneOffset) {
            if (A === "Milliseconds" || A === "Seconds" || A === "Minutes" && this.getTimezoneOffset(O) % 36e5 == 0)
              return O["setUTC" + A](z);
            let H = this.getTimezoneOffset(O), F = O.getTime() - H;
            O.setTime(F), O["setUTC" + A](z);
            let E = this.getTimezoneOffset(O);
            return F = O.getTime() + E, O.setTime(F);
          }
          return this.useUTC || d && A === "FullYear" ? O["setUTC" + A](z) : O["set" + A](z);
        }
        update(A = {}) {
          let O = b(A.useUTC, !0);
          this.options = A = M(!0, this.options, A), this.Date = A.Date || o.Date || Date, this.useUTC = O, this.timezoneOffset = O && A.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = O && !!(A.getTimezoneOffset || A.timezone);
        }
        makeTime(A, O, z, H, F, E) {
          let k, v, u;
          return this.useUTC ? (k = this.Date.UTC.apply(0, arguments), v = this.getTimezoneOffset(k), k += v, v !== (u = this.getTimezoneOffset(k)) ? k += u - v : v - 36e5 !== this.getTimezoneOffset(k - 36e5) || x || (k -= 36e5)) : k = new this.Date(A, O, b(z, 1), b(H, 0), b(F, 0), b(E, 0)).getTime(), k;
        }
        timezoneOffsetFunction() {
          let A = this, O = this.options, z = O.getTimezoneOffset;
          return this.useUTC ? O.timezone ? (H) => {
            try {
              let F = `shortOffset,${O.timezone || ""}`, [E, k, v, u, c = 0] = (I.formatCache[F] = I.formatCache[F] || Intl.DateTimeFormat("en", { timeZone: O.timezone, timeZoneName: "shortOffset" })).format(H).split(/(GMT|:)/).map(Number), w = -(36e5 * (v + c / 60));
              if (m(w))
                return w;
            } catch {
              l(34);
            }
            return 0;
          } : this.useUTC && z ? (H) => 6e4 * z(H.valueOf()) : () => 6e4 * (A.timezoneOffset || 0) : (H) => 6e4 * new Date(H.toString()).getTimezoneOffset();
        }
        dateFormat(A, O, z) {
          if (!a(O) || isNaN(O))
            return r.defaultOptions.lang && r.defaultOptions.lang.invalidDate || "";
          A = b(A, "%Y-%m-%d %H:%M:%S");
          let H = this, F = new this.Date(O), E = this.get("Hours", F), k = this.get("Day", F), v = this.get("Date", F), u = this.get("Month", F), c = this.get("FullYear", F), w = r.defaultOptions.lang, T = w && w.weekdays, D = w && w.shortWeekdays;
          return N(h({ a: D ? D[k] : T[k].substr(0, 3), A: T[k], d: f(v), e: f(v, 2, " "), w: k, b: w.shortMonths[u], B: w.months[u], m: f(u + 1), o: u + 1, y: c.toString().substr(2, 2), Y: c, H: f(E), k: E, I: f(E % 12 || 12), l: E % 12 || 12, M: f(this.get("Minutes", F)), p: E < 12 ? "AM" : "PM", P: E < 12 ? "am" : "pm", S: f(this.get("Seconds", F)), L: f(Math.floor(O % 1e3), 3) }, r.dateFormats), function(G, L) {
            for (; A.indexOf("%" + L) !== -1; )
              A = A.replace("%" + L, typeof G == "function" ? G.call(H, O) : G);
          }), z ? A.substr(0, 1).toUpperCase() + A.substr(1) : A;
        }
        resolveDTLFormat(A) {
          return g(A, !0) ? A : { main: (A = S(A))[0], from: A[1], to: A[2] };
        }
        getTimeTicks(A, O, z, H) {
          let F, E, k, v, u = this, c = u.Date, w = [], T = {}, D = new c(O), G = A.unitRange, L = A.count || 1;
          if (H = b(H, 1), a(O)) {
            u.set("Milliseconds", D, G >= y.second ? 0 : L * Math.floor(u.get("Milliseconds", D) / L)), G >= y.second && u.set("Seconds", D, G >= y.minute ? 0 : L * Math.floor(u.get("Seconds", D) / L)), G >= y.minute && u.set("Minutes", D, G >= y.hour ? 0 : L * Math.floor(u.get("Minutes", D) / L)), G >= y.hour && u.set("Hours", D, G >= y.day ? 0 : L * Math.floor(u.get("Hours", D) / L)), G >= y.day && u.set("Date", D, G >= y.month ? 1 : Math.max(1, L * Math.floor(u.get("Date", D) / L))), G >= y.month && (u.set("Month", D, G >= y.year ? 0 : L * Math.floor(u.get("Month", D) / L)), E = u.get("FullYear", D)), G >= y.year && (E -= E % L, u.set("FullYear", D, E)), G === y.week && (v = u.get("Day", D), u.set("Date", D, u.get("Date", D) - v + H + (v < H ? -7 : 0))), E = u.get("FullYear", D);
            let J = u.get("Month", D), se = u.get("Date", D), _ = u.get("Hours", D);
            O = D.getTime(), (u.variableTimezone || !u.useUTC) && a(z) && (k = z - O > 4 * y.month || u.getTimezoneOffset(O) !== u.getTimezoneOffset(z));
            let X = D.getTime();
            for (F = 1; X < z; )
              w.push(X), G === y.year ? X = u.makeTime(E + F * L, 0) : G === y.month ? X = u.makeTime(E, J + F * L) : k && (G === y.day || G === y.week) ? X = u.makeTime(E, J, se + F * L * (G === y.day ? 1 : 7)) : k && G === y.hour && L > 1 ? X = u.makeTime(E, J, se, _ + F * L) : X += G * L, F++;
            w.push(X), G <= y.hour && w.length < 1e4 && w.forEach(function(U) {
              U % 18e5 == 0 && u.dateFormat("%H%M%S%L", U) === "000000000" && (T[U] = "day");
            });
          }
          return w.info = h(A, { higherRanks: T, totalRange: G * L }), w;
        }
        getDateFormat(A, O, z, H) {
          let F = this.dateFormat("%m-%d %H:%M:%S.%L", O), E = "01-01 00:00:00.000", k = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, v = "millisecond", u = v;
          for (v in y) {
            if (A === y.week && +this.dateFormat("%w", O) === z && F.substr(6) === E.substr(6)) {
              v = "week";
              break;
            }
            if (y[v] > A) {
              v = u;
              break;
            }
            if (k[v] && F.substr(k[v]) !== E.substr(k[v]))
              break;
            v !== "week" && (u = v);
          }
          return this.resolveDTLFormat(H[v]).main;
        }
      }
      return I.formatCache = {}, I;
    }), n(i, "Core/Defaults.js", [i["Core/Chart/ChartDefaults.js"], i["Core/Globals.js"], i["Core/Color/Palettes.js"], i["Core/Time.js"], i["Core/Utilities.js"]], function(r, s, o, a, l) {
      let { isTouchDevice: h } = s, { fireEvent: m, merge: g } = l, M = { colors: o.colors, symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], decimalPoint: ".", numericSymbols: ["k", "M", "G", "T", "P", "E"], resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: { buttonTheme: { fill: "#f7f7f7", padding: 8, r: 2, stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, states: { hover: { fill: "#e6e6e6" }, select: { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, disabled: { style: { color: "#cccccc" } } } } }, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: !0 }, chart: r, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", events: {}, layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
        return this.name;
      }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: { duration: 300, easing: (f) => Math.sqrt(1 - Math.pow(f - 1, 2)) }, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %e %b, %H:%M:%S.%L", second: "%A, %e %b, %H:%M:%S", minute: "%A, %e %b, %H:%M", hour: "%A, %e %b, %H:%M", day: "%A, %e %b %Y", week: "Week from %A, %e %b %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: h ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: !1 }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } };
      M.chart.styledMode = !1;
      let N = new a(M.time);
      return { defaultOptions: M, defaultTime: N, getOptions: function() {
        return M;
      }, setOptions: function(f) {
        return m(s, "setOptions", { options: f }), g(!0, M, f), (f.time || f.global) && (s.time ? s.time.update(g(M.global, M.time, f.global, f.time)) : s.time = N), M;
      } };
    }), n(i, "Core/Color/Color.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s) {
      let { isNumber: o, merge: a, pInt: l } = s;
      class h {
        static parse(g) {
          return g ? new h(g) : h.None;
        }
        constructor(g) {
          let M, N, f, b;
          this.rgba = [NaN, NaN, NaN, NaN], this.input = g;
          let S = r.Color;
          if (S && S !== h)
            return new S(g);
          if (typeof g == "object" && g.stops !== void 0)
            this.stops = g.stops.map((y) => new h(y[1]));
          else if (typeof g == "string") {
            if (this.input = g = h.names[g.toLowerCase()] || g, g.charAt(0) === "#") {
              let y = g.length, d = parseInt(g.substr(1), 16);
              y === 7 ? N = [(16711680 & d) >> 16, (65280 & d) >> 8, 255 & d, 1] : y === 4 && (N = [(3840 & d) >> 4 | (3840 & d) >> 8, (240 & d) >> 4 | 240 & d, (15 & d) << 4 | 15 & d, 1]);
            }
            if (!N)
              for (f = h.parsers.length; f-- && !N; )
                (M = (b = h.parsers[f]).regex.exec(g)) && (N = b.parse(M));
          }
          N && (this.rgba = N);
        }
        get(g) {
          let M = this.input, N = this.rgba;
          if (typeof M == "object" && this.stops !== void 0) {
            let f = a(M);
            return f.stops = [].slice.call(f.stops), this.stops.forEach((b, S) => {
              f.stops[S] = [f.stops[S][0], b.get(g)];
            }), f;
          }
          return N && o(N[0]) ? g !== "rgb" && (g || N[3] !== 1) ? g === "a" ? `${N[3]}` : "rgba(" + N.join(",") + ")" : "rgb(" + N[0] + "," + N[1] + "," + N[2] + ")" : M;
        }
        brighten(g) {
          let M = this.rgba;
          if (this.stops)
            this.stops.forEach(function(N) {
              N.brighten(g);
            });
          else if (o(g) && g !== 0)
            for (let N = 0; N < 3; N++)
              M[N] += l(255 * g), M[N] < 0 && (M[N] = 0), M[N] > 255 && (M[N] = 255);
          return this;
        }
        setOpacity(g) {
          return this.rgba[3] = g, this;
        }
        tweenTo(g, M) {
          let N = this.rgba, f = g.rgba;
          if (!o(N[0]) || !o(f[0]))
            return g.input || "none";
          let b = f[3] !== 1 || N[3] !== 1;
          return (b ? "rgba(" : "rgb(") + Math.round(f[0] + (N[0] - f[0]) * (1 - M)) + "," + Math.round(f[1] + (N[1] - f[1]) * (1 - M)) + "," + Math.round(f[2] + (N[2] - f[2]) * (1 - M)) + (b ? "," + (f[3] + (N[3] - f[3]) * (1 - M)) : "") + ")";
        }
      }
      return h.names = { white: "#ffffff", black: "#000000" }, h.parsers = [{ regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/, parse: function(m) {
        return [l(m[1]), l(m[2]), l(m[3]), parseFloat(m[4], 10)];
      } }, { regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, parse: function(m) {
        return [l(m[1]), l(m[2]), l(m[3]), 1];
      } }], h.None = new h(""), h;
    }), n(i, "Core/Animation/Fx.js", [i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { parse: a } = r, { win: l } = s, { isNumber: h, objectEach: m } = o;
      class g {
        constructor(N, f, b) {
          this.pos = NaN, this.options = f, this.elem = N, this.prop = b;
        }
        dSetter() {
          let N = this.paths, f = N && N[0], b = N && N[1], S = this.now || 0, y = [];
          if (S !== 1 && f && b)
            if (f.length === b.length && S < 1)
              for (let d = 0; d < b.length; d++) {
                let x = f[d], I = b[d], C = [];
                for (let A = 0; A < I.length; A++) {
                  let O = x[A], z = I[A];
                  h(O) && h(z) && !(I[0] === "A" && (A === 4 || A === 5)) ? C[A] = O + S * (z - O) : C[A] = z;
                }
                y.push(C);
              }
            else
              y = b;
          else
            y = this.toD || [];
          this.elem.attr("d", y, void 0, !0);
        }
        update() {
          let N = this.elem, f = this.prop, b = this.now, S = this.options.step;
          this[f + "Setter"] ? this[f + "Setter"]() : N.attr ? N.element && N.attr(f, b, null, !0) : N.style[f] = b + this.unit, S && S.call(N, b, this);
        }
        run(N, f, b) {
          let S = this, y = S.options, d = function(C) {
            return !d.stopped && S.step(C);
          }, x = l.requestAnimationFrame || function(C) {
            setTimeout(C, 13);
          }, I = function() {
            for (let C = 0; C < g.timers.length; C++)
              g.timers[C]() || g.timers.splice(C--, 1);
            g.timers.length && x(I);
          };
          N !== f || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = N, this.end = f, this.unit = b, this.now = this.start, this.pos = 0, d.elem = this.elem, d.prop = this.prop, d() && g.timers.push(d) === 1 && x(I)) : (delete y.curAnim[this.prop], y.complete && Object.keys(y.curAnim).length === 0 && y.complete.call(this.elem));
        }
        step(N) {
          let f, b, S = +/* @__PURE__ */ new Date(), y = this.options, d = this.elem, x = y.complete, I = y.duration, C = y.curAnim;
          return d.attr && !d.element ? f = !1 : N || S >= I + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), C[this.prop] = !0, b = !0, m(C, function(A) {
            A !== !0 && (b = !1);
          }), b && x && x.call(d), f = !1) : (this.pos = y.easing((S - this.startTime) / I), this.now = this.start + (this.end - this.start) * this.pos, this.update(), f = !0), f;
        }
        initPath(N, f, b) {
          let S = N.startX, y = N.endX, d = b.slice(), x = N.isArea, I = x ? 2 : 1, C = f && b.length > f.length && b.hasStackedCliffs, A, O, z, H, F = f && f.slice();
          if (!F || C)
            return [d, d];
          function E(v, u) {
            for (; v.length < O; ) {
              let c = v[0], w = u[O - v.length];
              if (w && c[0] === "M" && (w[0] === "C" ? v[0] = ["C", c[1], c[2], c[1], c[2], c[1], c[2]] : v[0] = ["L", c[1], c[2]]), v.unshift(c), x) {
                let T = v.pop();
                v.push(v[v.length - 1], T);
              }
            }
          }
          function k(v) {
            for (; v.length < O; ) {
              let u = v[Math.floor(v.length / I) - 1].slice();
              if (u[0] === "C" && (u[1] = u[5], u[2] = u[6]), x) {
                let c = v[Math.floor(v.length / I)].slice();
                v.splice(v.length / 2, 0, u, c);
              } else
                v.push(u);
            }
          }
          if (S && y && y.length) {
            for (z = 0; z < S.length; z++) {
              if (S[z] === y[0]) {
                A = z;
                break;
              }
              if (S[0] === y[y.length - S.length + z]) {
                A = z, H = !0;
                break;
              }
              if (S[S.length - 1] === y[y.length - S.length + z]) {
                A = S.length - z;
                break;
              }
            }
            A === void 0 && (F = []);
          }
          return F.length && h(A) && (O = d.length + A * I, H ? (E(F, d), k(d)) : (E(d, F), k(F))), [F, d];
        }
        fillSetter() {
          g.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(this.prop, a(this.start).tweenTo(a(this.end), this.pos), void 0, !0);
        }
      }
      return g.timers = [], g;
    }), n(i, "Core/Animation/AnimationUtilities.js", [i["Core/Animation/Fx.js"], i["Core/Utilities.js"]], function(r, s) {
      let { defined: o, getStyle: a, isArray: l, isNumber: h, isObject: m, merge: g, objectEach: M, pick: N } = s;
      function f(S) {
        return m(S) ? g({ duration: 500, defer: 0 }, S) : { duration: S ? 500 : 0, defer: 0 };
      }
      function b(S, y) {
        let d = r.timers.length;
        for (; d--; )
          r.timers[d].elem !== S || y && y !== r.timers[d].prop || (r.timers[d].stopped = !0);
      }
      return { animate: function(S, y, d) {
        let x, I = "", C, A, O;
        m(d) || (O = arguments, d = { duration: O[2], easing: O[3], complete: O[4] }), h(d.duration) || (d.duration = 400), d.easing = typeof d.easing == "function" ? d.easing : Math[d.easing] || Math.easeInOutSine, d.curAnim = g(y), M(y, function(z, H) {
          b(S, H), A = new r(S, d, H), C = void 0, H === "d" && l(y.d) ? (A.paths = A.initPath(S, S.pathArray, y.d), A.toD = y.d, x = 0, C = 1) : S.attr ? x = S.attr(H) : (x = parseFloat(a(S, H)) || 0, H !== "opacity" && (I = "px")), C || (C = z), typeof C == "string" && C.match("px") && (C = C.replace(/px/g, "")), A.run(x, C, I);
        });
      }, animObject: f, getDeferredAnimation: function(S, y, d) {
        let x = f(y), I = d ? [d] : S.series, C = 0, A = 0;
        return I.forEach((O) => {
          let z = f(O.options.animation);
          C = m(y) && o(y.defer) ? x.defer : Math.max(C, z.duration + z.defer), A = Math.min(x.duration, z.duration);
        }), S.renderer.forExport && (C = 0), { defer: Math.max(0, C - A), duration: Math.min(C, A) };
      }, setAnimation: function(S, y) {
        y.renderer.globalAnimation = N(S, y.options.chart.animation, !0);
      }, stop: b };
    }), n(i, "Core/Renderer/HTML/AST.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s) {
      let { SVG_NS: o, win: a } = r, { attr: l, createElement: h, css: m, error: g, isFunction: M, isString: N, objectEach: f, splat: b } = s, { trustedTypes: S } = a, y = S && M(S.createPolicy) && S.createPolicy("highcharts", { createHTML: (C) => C }), d = y ? y.createHTML("") : "", x = function() {
        try {
          return !!new DOMParser().parseFromString(d, "text/html");
        } catch {
          return !1;
        }
      }();
      class I {
        static filterUserAttributes(A) {
          return f(A, (O, z) => {
            let H = !0;
            I.allowedAttributes.indexOf(z) === -1 && (H = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(z) !== -1 && (H = N(O) && I.allowedReferences.some((F) => O.indexOf(F) === 0)), H || (g(33, !1, void 0, { "Invalid attribute in config": `${z}` }), delete A[z]), N(O) && A[z] && (A[z] = O.replace(/</g, "&lt;"));
          }), A;
        }
        static parseStyle(A) {
          return A.split(";").reduce((O, z) => {
            let H = z.split(":").map((E) => E.trim()), F = H.shift();
            return F && H.length && (O[F.replace(/-([a-z])/g, (E) => E[1].toUpperCase())] = H.join(":")), O;
          }, {});
        }
        static setElementHTML(A, O) {
          A.innerHTML = I.emptyHTML, O && new I(O).addToDOM(A);
        }
        constructor(A) {
          this.nodes = typeof A == "string" ? this.parseMarkup(A) : A;
        }
        addToDOM(A) {
          return function O(z, H) {
            let F;
            return b(z).forEach(function(E) {
              let k, v = E.tagName, u = E.textContent ? r.doc.createTextNode(E.textContent) : void 0, c = I.bypassHTMLFiltering;
              if (v)
                if (v === "#text")
                  k = u;
                else if (I.allowedTags.indexOf(v) !== -1 || c) {
                  let w = v === "svg" ? o : H.namespaceURI || o, T = r.doc.createElementNS(w, v), D = E.attributes || {};
                  f(E, function(G, L) {
                    L !== "tagName" && L !== "attributes" && L !== "children" && L !== "style" && L !== "textContent" && (D[L] = G);
                  }), l(T, c ? D : I.filterUserAttributes(D)), E.style && m(T, E.style), u && T.appendChild(u), O(E.children || [], T), k = T;
                } else
                  g(33, !1, void 0, { "Invalid tagName in config": v });
              k && H.appendChild(k), F = k;
            }), F;
          }(this.nodes, A);
        }
        parseMarkup(A) {
          let O, z = [];
          if (A = A.trim().replace(/ style=(["'])/g, " data-style=$1"), x)
            O = new DOMParser().parseFromString(y ? y.createHTML(A) : A, "text/html");
          else {
            let F = h("div");
            F.innerHTML = A, O = { body: F };
          }
          let H = (F, E) => {
            let k = F.nodeName.toLowerCase(), v = { tagName: k };
            k === "#text" && (v.textContent = F.textContent || "");
            let u = F.attributes;
            if (u) {
              let c = {};
              [].forEach.call(u, (w) => {
                w.name === "data-style" ? v.style = I.parseStyle(w.value) : c[w.name] = w.value;
              }), v.attributes = c;
            }
            if (F.childNodes.length) {
              let c = [];
              [].forEach.call(F.childNodes, (w) => {
                H(w, c);
              }), c.length && (v.children = c);
            }
            E.push(v);
          };
          return [].forEach.call(O.body.childNodes, (F) => H(F, z)), z;
        }
      }
      return I.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], I.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], I.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMorphology", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], I.emptyHTML = d, I.bypassHTMLFiltering = !1, I;
    }), n(i, "Core/Templating.js", [i["Core/Defaults.js"], i["Core/Utilities.js"]], function(r, s) {
      let { defaultOptions: o, defaultTime: a } = r, { extend: l, getNestedProperty: h, isArray: m, isNumber: g, isObject: M, pick: N, pInt: f } = s, b = { add: (d, x) => d + x, divide: (d, x) => x !== 0 ? d / x : "", eq: (d, x) => d == x, each: function(d) {
        let x = arguments[arguments.length - 1];
        return !!m(d) && d.map((I, C) => S(x.body, l(M(I) ? I : { "@this": I }, { "@index": C, "@first": C === 0, "@last": C === d.length - 1 }))).join("");
      }, ge: (d, x) => d >= x, gt: (d, x) => d > x, if: (d) => !!d, le: (d, x) => d <= x, lt: (d, x) => d < x, multiply: (d, x) => d * x, ne: (d, x) => d != x, subtract: (d, x) => d - x, unless: (d) => !d };
      function S(d = "", x, I) {
        let C = /\{([\w\:\.\,;\-\/<>%@"'’= #\(\)]+)\}/g, A = /\(([\w\:\.\,;\-\/<>%@"'= ]+)\)/g, O = [], z = /f$/, H = /\.(\d)/, F = o.lang, E = I && I.time || a, k = I && I.numberFormatter || y, v = (D = "") => {
          let G;
          return D === "true" || D !== "false" && ((G = Number(D)).toString() === D ? G : h(D, x));
        }, u, c, w = 0, T;
        for (; (u = C.exec(d)) !== null; ) {
          let D = A.exec(u[1]);
          D && (u = D, T = !0), c && c.isBlock || (c = { ctx: x, expression: u[1], find: u[0], isBlock: u[1].charAt(0) === "#", start: u.index, startInner: u.index + u[0].length, length: u[0].length });
          let G = u[1].split(" ")[0].replace("#", "");
          b[G] && (c.isBlock && G === c.fn && w++, c.fn || (c.fn = G));
          let L = u[1] === "else";
          if (c.isBlock && c.fn && (u[1] === `/${c.fn}` || L))
            if (w)
              !L && w--;
            else {
              let J = c.startInner, se = d.substr(J, u.index - J);
              c.body === void 0 ? (c.body = se, c.startInner = u.index + u[0].length) : c.elseBody = se, c.find += se + u[0], L || (O.push(c), c = void 0);
            }
          else
            c.isBlock || O.push(c);
          if (D && !(c != null && c.isBlock))
            break;
        }
        return O.forEach((D) => {
          let G, L, { body: J, elseBody: se, expression: _, fn: X } = D;
          if (X) {
            let U = [D], te = _.split(" ");
            for (L = b[X].length; L--; )
              U.unshift(v(te[L + 1]));
            G = b[X].apply(x, U), D.isBlock && typeof G == "boolean" && (G = S(G ? J : se, x, I));
          } else {
            let U = _.split(":");
            if (G = v(U.shift() || ""), U.length && typeof G == "number") {
              let te = U.join(":");
              if (z.test(te)) {
                let le = parseInt((te.match(H) || ["", "-1"])[1], 10);
                G !== null && (G = k(G, le, F.decimalPoint, te.indexOf(",") > -1 ? F.thousandsSep : ""));
              } else
                G = E.dateFormat(te, G);
            }
          }
          d = d.replace(D.find, N(G, ""));
        }), T ? S(d, x, I) : d;
      }
      function y(d, x, I, C) {
        let A, O;
        d = +d || 0, x = +x;
        let z = o.lang, H = (d.toString().split(".")[1] || "").split("e")[0].length, F = d.toString().split("e"), E = x;
        x === -1 ? x = Math.min(H, 20) : g(x) ? x && F[1] && F[1] < 0 && ((O = x + +F[1]) >= 0 ? (F[0] = (+F[0]).toExponential(O).split("e")[0], x = O) : (F[0] = F[0].split(".")[0] || 0, d = x < 20 ? (F[0] * Math.pow(10, F[1])).toFixed(x) : 0, F[1] = 0)) : x = 2;
        let k = (Math.abs(F[1] ? F[0] : d) + Math.pow(10, -Math.max(x, H) - 1)).toFixed(x), v = String(f(k)), u = v.length > 3 ? v.length % 3 : 0;
        return I = N(I, z.decimalPoint), C = N(C, z.thousandsSep), A = (d < 0 ? "-" : "") + (u ? v.substr(0, u) + C : ""), 0 > +F[1] && !E ? A = "0" : A += v.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + C), x ? A += I + k.slice(-x) : +A == 0 && (A = "0"), F[1] && +A != 0 && (A += "e" + F[1]), A;
      }
      return { dateFormat: function(d, x, I) {
        return a.dateFormat(d, x, I);
      }, format: S, helpers: b, numberFormat: y };
    }), n(i, "Core/Renderer/RendererRegistry.js", [i["Core/Globals.js"]], function(r) {
      var s, o;
      let a;
      return (o = s || (s = {})).rendererTypes = {}, o.getRendererType = function(l = a) {
        return o.rendererTypes[l] || o.rendererTypes[a];
      }, o.registerRendererType = function(l, h, m) {
        o.rendererTypes[l] = h, (!a || m) && (a = l, r.Renderer = h);
      }, s;
    }), n(i, "Core/Renderer/RendererUtilities.js", [i["Core/Utilities.js"]], function(r) {
      var s;
      let { clamp: o, pick: a, pushUnique: l, stableSort: h } = r;
      return (s || (s = {})).distribute = function m(g, M, N) {
        let f = g, b = f.reducedLen || M, S = (v, u) => v.target - u.target, y = [], d = g.length, x = [], I = y.push, C, A, O, z = !0, H, F, E = 0, k;
        for (C = d; C--; )
          E += g[C].size;
        if (E > b) {
          for (h(g, (v, u) => (u.rank || 0) - (v.rank || 0)), O = (k = g[0].rank === g[g.length - 1].rank) ? d / 2 : -1, A = k ? O : d - 1; O && E > b; )
            H = g[C = Math.floor(A)], l(x, C) && (E -= H.size), A += O, k && A >= g.length && (O /= 2, A = O);
          x.sort((v, u) => u - v).forEach((v) => I.apply(y, g.splice(v, 1)));
        }
        for (h(g, S), g = g.map((v) => ({ size: v.size, targets: [v.target], align: a(v.align, 0.5) })); z; ) {
          for (C = g.length; C--; )
            H = g[C], F = (Math.min.apply(0, H.targets) + Math.max.apply(0, H.targets)) / 2, H.pos = o(F - H.size * H.align, 0, M - H.size);
          for (C = g.length, z = !1; C--; )
            C > 0 && g[C - 1].pos + g[C - 1].size > g[C].pos && (g[C - 1].size += g[C].size, g[C - 1].targets = g[C - 1].targets.concat(g[C].targets), g[C - 1].align = 0.5, g[C - 1].pos + g[C - 1].size > M && (g[C - 1].pos = M - g[C - 1].size), g.splice(C, 1), z = !0);
        }
        return I.apply(f, y), C = 0, g.some((v) => {
          let u = 0;
          return (v.targets || []).some(() => (f[C].pos = v.pos + u, N !== void 0 && Math.abs(f[C].pos - f[C].target) > N ? (f.slice(0, C + 1).forEach((c) => delete c.pos), f.reducedLen = (f.reducedLen || M) - 0.1 * M, f.reducedLen > 0.1 * M && m(f, M, N), !0) : (u += f[C].size, C++, !1)));
        }), h(f, S), f;
      }, s;
    }), n(i, "Core/Renderer/SVG/SVGElement.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s, o, a) {
      let { animate: l, animObject: h, stop: m } = r, { deg2rad: g, doc: M, svg: N, SVG_NS: f, win: b } = o, { addEvent: S, attr: y, createElement: d, crisp: x, css: I, defined: C, erase: A, extend: O, fireEvent: z, isArray: H, isFunction: F, isObject: E, isString: k, merge: v, objectEach: u, pick: c, pInt: w, pushUnique: T, replaceNested: D, syncTimeout: G, uniqueKey: L } = a;
      class J {
        _defaultGetter(_) {
          let X = c(this[_ + "Value"], this[_], this.element ? this.element.getAttribute(_) : null, 0);
          return /^-?[\d\.]+$/.test(X) && (X = parseFloat(X)), X;
        }
        _defaultSetter(_, X, U) {
          U.setAttribute(X, _);
        }
        add(_) {
          let X, U = this.renderer, te = this.element;
          return _ && (this.parentGroup = _), this.textStr !== void 0 && this.element.nodeName === "text" && U.buildText(this), this.added = !0, (!_ || _.handleZ || this.zIndex) && (X = this.zIndexSetter()), X || (_ ? _.element : U.box).appendChild(te), this.onAdd && this.onAdd(), this;
        }
        addClass(_, X) {
          let U = X ? "" : this.attr("class") || "";
          return (_ = (_ || "").split(/ /g).reduce(function(te, le) {
            return U.indexOf(le) === -1 && te.push(le), te;
          }, U ? [U] : []).join(" ")) !== U && this.attr("class", _), this;
        }
        afterSetters() {
          this.doTransform && (this.updateTransform(), this.doTransform = !1);
        }
        align(_, X, U, te = !0) {
          let le, R, P, W, q = {}, p = this.renderer, j = p.alignedObjects, B = !!_;
          _ ? (this.alignOptions = _, this.alignByTranslate = X, this.alignTo = U) : (_ = this.alignOptions || {}, X = this.alignByTranslate, U = this.alignTo);
          let Z = !U || k(U) ? U || "renderer" : void 0;
          Z && (B && T(j, this), U = void 0);
          let Y = c(U, p[Z], p), ne = _.align, V = _.verticalAlign;
          return le = (Y.x || 0) + (_.x || 0), R = (Y.y || 0) + (_.y || 0), ne === "right" ? P = 1 : ne === "center" && (P = 2), P && (le += ((Y.width || 0) - (_.width || 0)) / P), q[X ? "translateX" : "x"] = Math.round(le), V === "bottom" ? W = 1 : V === "middle" && (W = 2), W && (R += ((Y.height || 0) - (_.height || 0)) / W), q[X ? "translateY" : "y"] = Math.round(R), te && (this[this.placed ? "animate" : "attr"](q), this.placed = !0), this.alignAttr = q, this;
        }
        alignSetter(_) {
          let X = { left: "start", center: "middle", right: "end" };
          X[_] && (this.alignValue = _, this.element.setAttribute("text-anchor", X[_]));
        }
        animate(_, X, U) {
          let te = h(c(X, this.renderer.globalAnimation, !0)), le = te.defer;
          return M.hidden && (te.duration = 0), te.duration !== 0 ? (U && (te.complete = U), G(() => {
            this.element && l(this, _, te);
          }, le)) : (this.attr(_, void 0, U || te.complete), u(_, function(R, P) {
            te.step && te.step.call(this, R, { prop: P, pos: 1, elem: this });
          }, this)), this;
        }
        applyTextOutline(_) {
          let X = this.element;
          _.indexOf("contrast") !== -1 && (_ = _.replace(/contrast/g, this.renderer.getContrast(X.style.fill)));
          let U = _.split(" "), te = U[U.length - 1], le = U[0];
          if (le && le !== "none" && o.svg) {
            this.fakeTS = !0, le = le.replace(/(^[\d\.]+)(.*?)$/g, function(p, j, B) {
              return 2 * Number(j) + B;
            }), this.removeTextOutline();
            let R = M.createElementNS(f, "tspan");
            y(R, { class: "highcharts-text-outline", fill: te, stroke: te, "stroke-width": le, "stroke-linejoin": "round" });
            let P = X.querySelector("textPath") || X;
            [].forEach.call(P.childNodes, (p) => {
              let j = p.cloneNode(!0);
              j.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((B) => j.removeAttribute(B)), R.appendChild(j);
            });
            let W = 0;
            [].forEach.call(P.querySelectorAll("text tspan"), (p) => {
              W += Number(p.getAttribute("dy"));
            });
            let q = M.createElementNS(f, "tspan");
            q.textContent = "​", y(q, { x: Number(X.getAttribute("x")), dy: -W }), R.appendChild(q), P.insertBefore(R, P.firstChild);
          }
        }
        attr(_, X, U, te) {
          let { element: le } = this, R = J.symbolCustomAttribs, P, W, q = this, p;
          return typeof _ == "string" && X !== void 0 && (P = _, (_ = {})[P] = X), typeof _ == "string" ? q = (this[_ + "Getter"] || this._defaultGetter).call(this, _, le) : (u(_, function(j, B) {
            p = !1, te || m(this, B), this.symbolName && R.indexOf(B) !== -1 && (W || (this.symbolAttr(_), W = !0), p = !0), this.rotation && (B === "x" || B === "y") && (this.doTransform = !0), p || (this[B + "Setter"] || this._defaultSetter).call(this, j, B, le);
          }, this), this.afterSetters()), U && U.call(this), q;
        }
        clip(_) {
          if (_ && !_.clipPath) {
            let X = L() + "-", U = this.renderer.createElement("clipPath").attr({ id: X }).add(this.renderer.defs);
            O(_, { clipPath: U, id: X, count: 0 }), _.add(U);
          }
          return this.attr("clip-path", _ ? `url(${this.renderer.url}#${_.id})` : "none");
        }
        crisp(_, X) {
          X = Math.round(X || _.strokeWidth || 0);
          let U = _.x || this.x || 0, te = _.y || this.y || 0, le = (_.width || this.width || 0) + U, R = (_.height || this.height || 0) + te, P = x(U, X), W = x(te, X);
          return O(_, { x: P, y: W, width: x(le, X) - P, height: x(R, X) - W }), C(_.strokeWidth) && (_.strokeWidth = X), _;
        }
        complexColor(_, X, U) {
          let te = this.renderer, le, R, P, W, q, p, j, B, Z, Y, ne = [], V;
          z(this.renderer, "complexColor", { args: arguments }, function() {
            if (_.radialGradient ? R = "radialGradient" : _.linearGradient && (R = "linearGradient"), R) {
              if (P = _[R], q = te.gradients, p = _.stops, Z = U.radialReference, H(P) && (_[R] = P = { x1: P[0], y1: P[1], x2: P[2], y2: P[3], gradientUnits: "userSpaceOnUse" }), R === "radialGradient" && Z && !C(P.gradientUnits) && (W = P, P = v(P, te.getRadialAttr(Z, W), { gradientUnits: "userSpaceOnUse" })), u(P, function($, ee) {
                ee !== "id" && ne.push(ee, $);
              }), u(p, function($) {
                ne.push($);
              }), q[ne = ne.join(",")])
                Y = q[ne].attr("id");
              else {
                P.id = Y = L();
                let $ = q[ne] = te.createElement(R).attr(P).add(te.defs);
                $.radAttr = W, $.stops = [], p.forEach(function(ee) {
                  ee[1].indexOf("rgba") === 0 ? (j = (le = s.parse(ee[1])).get("rgb"), B = le.get("a")) : (j = ee[1], B = 1);
                  let ue = te.createElement("stop").attr({ offset: ee[0], "stop-color": j, "stop-opacity": B }).add($);
                  $.stops.push(ue);
                });
              }
              V = "url(" + te.url + "#" + Y + ")", U.setAttribute(X, V), U.gradient = ne, _.toString = function() {
                return V;
              };
            }
          });
        }
        css(_) {
          let X = this.styles, U = {}, te = this.element, le, R = !X;
          if (X && u(_, function(P, W) {
            X && X[W] !== P && (U[W] = P, R = !0);
          }), R) {
            X && (_ = O(X, U)), _.width === null || _.width === "auto" ? delete this.textWidth : te.nodeName.toLowerCase() === "text" && _.width && (le = this.textWidth = w(_.width)), O(this.styles, _), le && !N && this.renderer.forExport && delete _.width;
            let P = v(_);
            te.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((W) => P && delete P[W]), P.color && (P.fill = P.color)), I(te, P);
          }
          return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), _.textOutline && this.applyTextOutline(_.textOutline)), this;
        }
        dashstyleSetter(_) {
          let X, U = this["stroke-width"];
          if (U === "inherit" && (U = 1), _ = _ && _.toLowerCase()) {
            let te = _.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
            for (X = te.length; X--; )
              te[X] = "" + w(te[X]) * c(U, NaN);
            _ = te.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", _);
          }
        }
        destroy() {
          var W;
          let _ = this, X = _.element || {}, U = _.renderer, te = X.ownerSVGElement, le = X.nodeName === "SPAN" && _.parentGroup || void 0, R, P;
          if (X.onclick = X.onmouseout = X.onmouseover = X.onmousemove = X.point = null, m(_), _.clipPath && te) {
            let q = _.clipPath;
            [].forEach.call(te.querySelectorAll("[clip-path],[CLIP-PATH]"), function(p) {
              p.getAttribute("clip-path").indexOf(q.element.id) > -1 && p.removeAttribute("clip-path");
            }), _.clipPath = q.destroy();
          }
          if (_.connector = (W = _.connector) == null ? void 0 : W.destroy(), _.stops) {
            for (P = 0; P < _.stops.length; P++)
              _.stops[P].destroy();
            _.stops.length = 0, _.stops = void 0;
          }
          for (_.safeRemoveChild(X); le && le.div && le.div.childNodes.length === 0; )
            R = le.parentGroup, _.safeRemoveChild(le.div), delete le.div, le = R;
          _.alignOptions && A(U.alignedObjects, _), u(_, function(q, p) {
            _[p] && _[p].parentGroup === _ && _[p].destroy && _[p].destroy(), delete _[p];
          });
        }
        dSetter(_, X, U) {
          H(_) && (typeof _[0] == "string" && (_ = this.renderer.pathToSegments(_)), this.pathArray = _, _ = _.reduce((te, le, R) => le && le.join ? (R ? te + " " : "") + le.join(" ") : (le || "").toString(), "")), /(NaN| {2}|^$)/.test(_) && (_ = "M 0 0"), this[X] !== _ && (U.setAttribute(X, _), this[X] = _);
        }
        fillSetter(_, X, U) {
          typeof _ == "string" ? U.setAttribute(X, _) : _ && this.complexColor(_, X, U);
        }
        hrefSetter(_, X, U) {
          U.setAttributeNS("http://www.w3.org/1999/xlink", X, _);
        }
        getBBox(_, X) {
          let U, te, le, R, { alignValue: P, element: W, renderer: q, styles: p, textStr: j } = this, { cache: B, cacheKeys: Z } = q, Y = W.namespaceURI === this.SVG_NS, ne = c(X, this.rotation, 0), V = q.styledMode ? W && J.prototype.getStyle.call(W, "font-size") : p.fontSize;
          if (C(j) && ((R = j.toString()).indexOf("<") === -1 && (R = R.replace(/\d/g, "0")), R += ["", q.rootFontSize, V, ne, this.textWidth, P, p.textOverflow, p.fontWeight].join(",")), R && !_ && (U = B[R]), !U || U.polygon) {
            if (Y || q.forExport) {
              try {
                le = this.fakeTS && function(ee) {
                  let ue = W.querySelector(".highcharts-text-outline");
                  ue && I(ue, { display: ee });
                }, F(le) && le("none"), U = W.getBBox ? O({}, W.getBBox()) : { width: W.offsetWidth, height: W.offsetHeight, x: 0, y: 0 }, F(le) && le("");
              } catch {
              }
              (!U || U.width < 0) && (U = { x: 0, y: 0, width: 0, height: 0 });
            } else
              U = this.htmlGetBBox();
            te = U.height, Y && (U.height = te = { "11px,17": 14, "13px,20": 16 }[`${V || ""},${Math.round(te)}`] || te), ne && (U = this.getRotatedBox(U, ne));
            let $ = { bBox: U };
            z(this, "afterGetBBox", $), U = $.bBox;
          }
          if (R && (j === "" || U.height > 0)) {
            for (; Z.length > 250; )
              delete B[Z.shift()];
            B[R] || Z.push(R), B[R] = U;
          }
          return U;
        }
        getRotatedBox(_, X) {
          let { x: U, y: te, width: le, height: R } = _, { alignValue: P, translateY: W, rotationOriginX: q = 0, rotationOriginY: p = 0 } = this, j = { right: 1, center: 0.5 }[P || 0] || 0, B = Number(this.element.getAttribute("y") || 0) - (W ? 0 : te), Z = X * g, Y = (X - 90) * g, ne = Math.cos(Z), V = Math.sin(Z), $ = le * ne, ee = le * V, ue = Math.cos(Y), ce = Math.sin(Y), [[Q, K], [ie, ae]] = [q, p].map((Oe) => [Oe - Oe * ne, Oe * V]), de = U + j * (le - $) + Q + ae + B * ue, he = de + $, fe = he - R * ue, ge = fe - $, me = te + B - j * ee - K + ie + B * ce, be = me + ee, ve = be - R * ce, ye = ve - ee, we = Math.min(de, he, fe, ge), Ae = Math.min(me, be, ve, ye), Se = Math.max(de, he, fe, ge) - we, xe = Math.max(me, be, ve, ye) - Ae;
          return { x: we, y: Ae, width: Se, height: xe, polygon: [[de, me], [he, be], [fe, ve], [ge, ye]] };
        }
        getStyle(_) {
          return b.getComputedStyle(this.element || this, "").getPropertyValue(_);
        }
        hasClass(_) {
          return ("" + this.attr("class")).split(" ").indexOf(_) !== -1;
        }
        hide() {
          return this.attr({ visibility: "hidden" });
        }
        htmlGetBBox() {
          return { height: 0, width: 0, x: 0, y: 0 };
        }
        constructor(_, X) {
          this.onEvents = {}, this.opacity = 1, this.SVG_NS = f, this.element = X === "span" || X === "body" ? d(X) : M.createElementNS(this.SVG_NS, X), this.renderer = _, this.styles = {}, z(this, "afterInit");
        }
        on(_, X) {
          let { onEvents: U } = this;
          return U[_] && U[_](), U[_] = S(this.element, _, X), this;
        }
        opacitySetter(_, X, U) {
          let te = Number(Number(_).toFixed(3));
          this.opacity = te, U.setAttribute(X, te);
        }
        reAlign() {
          var _;
          (_ = this.alignOptions) != null && _.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
        }
        removeClass(_) {
          return this.attr("class", ("" + this.attr("class")).replace(k(_) ? RegExp(`(^| )${_}( |$)`) : _, " ").replace(/ +/g, " ").trim());
        }
        removeTextOutline() {
          let _ = this.element.querySelector("tspan.highcharts-text-outline");
          _ && this.safeRemoveChild(_);
        }
        safeRemoveChild(_) {
          let X = _.parentNode;
          X && X.removeChild(_);
        }
        setRadialReference(_) {
          let X = this.element.gradient && this.renderer.gradients[this.element.gradient];
          return this.element.radialReference = _, X && X.radAttr && X.animate(this.renderer.getRadialAttr(_, X.radAttr)), this;
        }
        shadow(_) {
          var le;
          let { renderer: X } = this, U = v(((le = this.parentGroup) == null ? void 0 : le.rotation) === 90 ? { offsetX: -1, offsetY: -1 } : {}, E(_) ? _ : {}), te = X.shadowDefinition(U);
          return this.attr({ filter: _ ? `url(${X.url}#${te})` : "none" });
        }
        show(_ = !0) {
          return this.attr({ visibility: _ ? "inherit" : "visible" });
        }
        "stroke-widthSetter"(_, X, U) {
          this[X] = _, U.setAttribute(X, _);
        }
        strokeWidth() {
          if (!this.renderer.styledMode)
            return this["stroke-width"] || 0;
          let _ = this.getStyle("stroke-width"), X = 0, U;
          return /px$/.test(_) ? X = w(_) : _ !== "" && (y(U = M.createElementNS(f, "rect"), { width: _, "stroke-width": 0 }), this.element.parentNode.appendChild(U), X = U.getBBox().width, U.parentNode.removeChild(U)), X;
        }
        symbolAttr(_) {
          let X = this;
          J.symbolCustomAttribs.forEach(function(U) {
            X[U] = c(_[U], X[U]);
          }), X.attr({ d: X.renderer.symbols[X.symbolName](X.x, X.y, X.width, X.height, X) });
        }
        textSetter(_) {
          _ !== this.textStr && (delete this.textPxLength, this.textStr = _, this.added && this.renderer.buildText(this), this.reAlign());
        }
        titleSetter(_) {
          let X = this.element, U = X.getElementsByTagName("title")[0] || M.createElementNS(this.SVG_NS, "title");
          X.insertBefore ? X.insertBefore(U, X.firstChild) : X.appendChild(U), U.textContent = D(c(_, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        }
        toFront() {
          let _ = this.element;
          return _.parentNode.appendChild(_), this;
        }
        translate(_, X) {
          return this.attr({ translateX: _, translateY: X });
        }
        updateTransform(_ = "transform") {
          var B;
          let { element: X, matrix: U, rotation: te = 0, rotationOriginX: le, rotationOriginY: R, scaleX: P, scaleY: W, translateX: q = 0, translateY: p = 0 } = this, j = ["translate(" + q + "," + p + ")"];
          C(U) && j.push("matrix(" + U.join(",") + ")"), te && (j.push("rotate(" + te + " " + c(le, X.getAttribute("x"), 0) + " " + c(R, X.getAttribute("y") || 0) + ")"), ((B = this.text) == null ? void 0 : B.element.tagName) === "SPAN" && this.text.attr({ rotation: te, rotationOriginX: (le || 0) - this.padding, rotationOriginY: (R || 0) - this.padding })), (C(P) || C(W)) && j.push("scale(" + c(P, 1) + " " + c(W, 1) + ")"), j.length && !(this.text || this).textPath && X.setAttribute(_, j.join(" "));
        }
        visibilitySetter(_, X, U) {
          _ === "inherit" ? U.removeAttribute(X) : this[X] !== _ && U.setAttribute(X, _), this[X] = _;
        }
        xGetter(_) {
          return this.element.nodeName === "circle" && (_ === "x" ? _ = "cx" : _ === "y" && (_ = "cy")), this._defaultGetter(_);
        }
        zIndexSetter(_, X) {
          let U = this.renderer, te = this.parentGroup, le = (te || U).element || U.box, R = this.element, P = le === U.box, W, q, p, j = !1, B, Z = this.added, Y;
          if (C(_) ? (R.setAttribute("data-z-index", _), _ = +_, this[X] === _ && (Z = !1)) : C(this[X]) && R.removeAttribute("data-z-index"), this[X] = _, Z) {
            for ((_ = this.zIndex) && te && (te.handleZ = !0), Y = (W = le.childNodes).length - 1; Y >= 0 && !j; Y--)
              B = !C(p = (q = W[Y]).getAttribute("data-z-index")), q !== R && (_ < 0 && B && !P && !Y ? (le.insertBefore(R, W[Y]), j = !0) : (w(p) <= _ || B && (!C(_) || _ >= 0)) && (le.insertBefore(R, W[Y + 1]), j = !0));
            j || (le.insertBefore(R, W[P ? 3 : 0]), j = !0);
          }
          return j;
        }
      }
      return J.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], J.prototype.strokeSetter = J.prototype.fillSetter, J.prototype.yGetter = J.prototype.xGetter, J.prototype.matrixSetter = J.prototype.rotationOriginXSetter = J.prototype.rotationOriginYSetter = J.prototype.rotationSetter = J.prototype.scaleXSetter = J.prototype.scaleYSetter = J.prototype.translateXSetter = J.prototype.translateYSetter = J.prototype.verticalAlignSetter = function(se, _) {
        this[_] = se, this.doTransform = !0;
      }, J;
    }), n(i, "Core/Renderer/SVG/SVGLabel.js", [i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]], function(r, s) {
      let { defined: o, extend: a, isNumber: l, merge: h, pick: m, removeEvent: g } = s;
      class M extends r {
        constructor(f, b, S, y, d, x, I, C, A, O) {
          let z;
          super(f, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = b, this.x = S, this.y = y, this.anchorX = x, this.anchorY = I, this.baseline = A, this.className = O, this.addClass(O === "button" ? "highcharts-no-tooltip" : "highcharts-label"), O && this.addClass("highcharts-" + O), this.text = f.text(void 0, 0, 0, C).attr({ zIndex: 1 }), typeof d == "string" && ((z = /^url\((.*?)\)$/.test(d)) || this.renderer.symbols[d]) && (this.symbolKey = d), this.bBox = M.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = f.styledMode || z, this.deferredAttr = {}, this.alignFactor = 0;
        }
        alignSetter(f) {
          let b = { left: 0, center: 0.5, right: 1 }[f];
          b !== this.alignFactor && (this.alignFactor = b, this.bBox && l(this.xSetting) && this.attr({ x: this.xSetting }));
        }
        anchorXSetter(f, b) {
          this.anchorX = f, this.boxAttr(b, Math.round(f) - this.getCrispAdjust() - this.xSetting);
        }
        anchorYSetter(f, b) {
          this.anchorY = f, this.boxAttr(b, f - this.ySetting);
        }
        boxAttr(f, b) {
          this.box ? this.box.attr(f, b) : this.deferredAttr[f] = b;
        }
        css(f) {
          if (f) {
            let b = {};
            f = h(f), M.textProps.forEach((S) => {
              f[S] !== void 0 && (b[S] = f[S], delete f[S]);
            }), this.text.css(b), "fontSize" in b || "fontWeight" in b ? this.updateTextPadding() : ("width" in b || "textOverflow" in b) && this.updateBoxSize();
          }
          return r.prototype.css.call(this, f);
        }
        destroy() {
          g(this.element, "mouseenter"), g(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), r.prototype.destroy.call(this);
        }
        fillSetter(f, b) {
          f && (this.needsBox = !0), this.fill = f, this.boxAttr(b, f);
        }
        getBBox(f, b) {
          this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
          let { padding: S, height: y = 0, translateX: d = 0, translateY: x = 0, width: I = 0 } = this, C = m(this.paddingLeft, S), A = b ?? (this.rotation || 0), O = { width: I, height: y, x: d + this.bBox.x - C, y: x + this.bBox.y - S + this.baselineOffset };
          return A && (O = this.getRotatedBox(O, A)), O;
        }
        getCrispAdjust() {
          return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
        }
        heightSetter(f) {
          this.heightSetting = f, this.doUpdate = !0;
        }
        afterSetters() {
          super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1);
        }
        onAdd() {
          this.text.add(this), this.attr({ text: m(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && o(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(f, b) {
          l(f) ? f !== this[b] && (this[b] = f, this.updateTextPadding()) : this[b] = void 0;
        }
        rSetter(f, b) {
          this.boxAttr(b, f);
        }
        strokeSetter(f, b) {
          this.stroke = f, this.boxAttr(b, f);
        }
        "stroke-widthSetter"(f, b) {
          f && (this.needsBox = !0), this["stroke-width"] = f, this.boxAttr(b, f);
        }
        "text-alignSetter"(f) {
          this.textAlign = f;
        }
        textSetter(f) {
          f !== void 0 && this.text.attr({ text: f }), this.updateTextPadding(), this.reAlign();
        }
        updateBoxSize() {
          let f, b = this.text, S = {}, y = this.padding, d = this.bBox = (!l(this.widthSetting) || !l(this.heightSetting) || this.textAlign) && o(b.textStr) ? b.getBBox(void 0, 0) : M.emptyBBox;
          this.width = this.getPaddedWidth(), this.height = (this.heightSetting || d.height || 0) + 2 * y;
          let x = this.renderer.fontMetrics(b);
          if (this.baselineOffset = y + Math.min((this.text.firstLineMetrics || x).b, d.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - x.h) / 2), this.needsBox && !b.textPath) {
            if (!this.box) {
              let I = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
              I.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), I.add(this);
            }
            f = this.getCrispAdjust(), S.x = f, S.y = (this.baseline ? -this.baselineOffset : 0) + f, S.width = Math.round(this.width), S.height = Math.round(this.height), this.box.attr(a(S, this.deferredAttr)), this.deferredAttr = {};
          }
        }
        updateTextPadding() {
          let f = this.text;
          if (!f.textPath) {
            this.updateBoxSize();
            let b = this.baseline ? 0 : this.baselineOffset, S = m(this.paddingLeft, this.padding);
            o(this.widthSetting) && this.bBox && (this.textAlign === "center" || this.textAlign === "right") && (S += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)), (S !== f.x || b !== f.y) && (f.attr("x", S), f.hasBoxWidthChanged && (this.bBox = f.getBBox(!0)), b !== void 0 && f.attr("y", b)), f.x = S, f.y = b;
          }
        }
        widthSetter(f) {
          this.widthSetting = l(f) ? f : void 0, this.doUpdate = !0;
        }
        getPaddedWidth() {
          let f = this.padding, b = m(this.paddingLeft, f), S = m(this.paddingRight, f);
          return (this.widthSetting || this.bBox.width || 0) + b + S;
        }
        xSetter(f) {
          this.x = f, this.alignFactor && (f -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(f), this.attr("translateX", this.xSetting);
        }
        ySetter(f) {
          this.ySetting = this.y = Math.round(f), this.attr("translateY", this.ySetting);
        }
      }
      return M.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, M.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], M;
    }), n(i, "Core/Renderer/SVG/Symbols.js", [i["Core/Utilities.js"]], function(r) {
      let { defined: s, isNumber: o, pick: a } = r;
      function l(g, M, N, f, b) {
        let S = [];
        if (b) {
          let y = b.start || 0, d = a(b.r, N), x = a(b.r, f || N), I = 2e-4 / (b.borderRadius ? 1 : Math.max(d, 1)), C = Math.abs((b.end || 0) - y - 2 * Math.PI) < I, A = (b.end || 0) - (C ? I : 0), O = b.innerR, z = a(b.open, C), H = Math.cos(y), F = Math.sin(y), E = Math.cos(A), k = Math.sin(A), v = a(b.longArc, A - y - Math.PI < I ? 0 : 1), u = ["A", d, x, 0, v, a(b.clockwise, 1), g + d * E, M + x * k];
          u.params = { start: y, end: A, cx: g, cy: M }, S.push(["M", g + d * H, M + x * F], u), s(O) && ((u = ["A", O, O, 0, v, s(b.clockwise) ? 1 - b.clockwise : 0, g + O * H, M + O * F]).params = { start: A, end: y, cx: g, cy: M }, S.push(z ? ["M", g + O * E, M + O * k] : ["L", g + O * E, M + O * k], u)), z || S.push(["Z"]);
        }
        return S;
      }
      function h(g, M, N, f, b) {
        return b && b.r ? m(g, M, N, f, b) : [["M", g, M], ["L", g + N, M], ["L", g + N, M + f], ["L", g, M + f], ["Z"]];
      }
      function m(g, M, N, f, b) {
        let S = (b == null ? void 0 : b.r) || 0;
        return [["M", g + S, M], ["L", g + N - S, M], ["A", S, S, 0, 0, 1, g + N, M + S], ["L", g + N, M + f - S], ["A", S, S, 0, 0, 1, g + N - S, M + f], ["L", g + S, M + f], ["A", S, S, 0, 0, 1, g, M + f - S], ["L", g, M + S], ["A", S, S, 0, 0, 1, g + S, M], ["Z"]];
      }
      return { arc: l, callout: function(g, M, N, f, b) {
        let S = Math.min(b && b.r || 0, N, f), y = S + 6, d = b && b.anchorX, x = b && b.anchorY || 0, I = m(g, M, N, f, { r: S });
        if (!o(d) || d < N && d > 0 && x < f && x > 0)
          return I;
        if (g + d > N - y)
          if (x > M + y && x < M + f - y)
            I.splice(3, 1, ["L", g + N, x - 6], ["L", g + N + 6, x], ["L", g + N, x + 6], ["L", g + N, M + f - S]);
          else if (d < N) {
            let C = x < M + y, A = C ? M : M + f;
            I.splice(C ? 2 : 5, 0, ["L", d, x], ["L", g + N - S, A]);
          } else
            I.splice(3, 1, ["L", g + N, f / 2], ["L", d, x], ["L", g + N, f / 2], ["L", g + N, M + f - S]);
        else if (g + d < y)
          if (x > M + y && x < M + f - y)
            I.splice(7, 1, ["L", g, x + 6], ["L", g - 6, x], ["L", g, x - 6], ["L", g, M + S]);
          else if (d > 0) {
            let C = x < M + y, A = C ? M : M + f;
            I.splice(C ? 1 : 6, 0, ["L", d, x], ["L", g + S, A]);
          } else
            I.splice(7, 1, ["L", g, f / 2], ["L", d, x], ["L", g, f / 2], ["L", g, M + S]);
        else
          x > f && d < N - y ? I.splice(5, 1, ["L", d + 6, M + f], ["L", d, M + f + 6], ["L", d - 6, M + f], ["L", g + S, M + f]) : x < 0 && d > y && I.splice(1, 1, ["L", d - 6, M], ["L", d, M - 6], ["L", d + 6, M], ["L", N - S, M]);
        return I;
      }, circle: function(g, M, N, f) {
        return l(g + N / 2, M + f / 2, N / 2, f / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
      }, diamond: function(g, M, N, f) {
        return [["M", g + N / 2, M], ["L", g + N, M + f / 2], ["L", g + N / 2, M + f], ["L", g, M + f / 2], ["Z"]];
      }, rect: h, roundedRect: m, square: h, triangle: function(g, M, N, f) {
        return [["M", g + N / 2, M], ["L", g + N, M + f], ["L", g, M + f], ["Z"]];
      }, "triangle-down": function(g, M, N, f) {
        return [["M", g, M], ["L", g + N, M], ["L", g + N / 2, M + f], ["Z"]];
      } };
    }), n(i, "Core/Renderer/SVG/TextBuilder.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { doc: a, SVG_NS: l, win: h } = s, { attr: m, extend: g, fireEvent: M, isString: N, objectEach: f, pick: b } = o;
      return class {
        constructor(S) {
          let y = S.styles;
          this.renderer = S.renderer, this.svgElement = S, this.width = S.textWidth, this.textLineHeight = y && y.lineHeight, this.textOutline = y && y.textOutline, this.ellipsis = !!(y && y.textOverflow === "ellipsis"), this.noWrap = !!(y && y.whiteSpace === "nowrap");
        }
        buildSVG() {
          let S = this.svgElement, y = S.element, d = S.renderer, x = b(S.textStr, "").toString(), I = x.indexOf("<") !== -1, C = y.childNodes, A = !S.added && d.box, O = [x, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, S.getStyle("font-size"), this.width].join(",");
          if (O !== S.textCache) {
            S.textCache = O, delete S.actualWidth;
            for (let z = C.length; z--; )
              y.removeChild(C[z]);
            if (I || this.ellipsis || this.width || S.textPath || x.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(x))) {
              if (x !== "") {
                A && A.appendChild(y);
                let z = new r(x);
                this.modifyTree(z.nodes), z.addToDOM(y), this.modifyDOM(), this.ellipsis && (y.textContent || "").indexOf("…") !== -1 && S.attr("title", this.unescapeEntities(S.textStr || "", ["&lt;", "&gt;"])), A && A.removeChild(y);
              }
            } else
              y.appendChild(a.createTextNode(this.unescapeEntities(x)));
            N(this.textOutline) && S.applyTextOutline && S.applyTextOutline(this.textOutline);
          }
        }
        modifyDOM() {
          let S, y = this.svgElement, d = m(y.element, "x");
          for (y.firstLineMetrics = void 0; (S = y.element.firstChild) && /^[\s\u200B]*$/.test(S.textContent || " "); )
            y.element.removeChild(S);
          [].forEach.call(y.element.querySelectorAll("tspan.highcharts-br"), (A, O) => {
            A.nextSibling && A.previousSibling && (O === 0 && A.previousSibling.nodeType === 1 && (y.firstLineMetrics = y.renderer.fontMetrics(A.previousSibling)), m(A, { dy: this.getLineHeight(A.nextSibling), x: d }));
          });
          let x = this.width || 0;
          if (!x)
            return;
          let I = (A, O) => {
            let z = A.textContent || "", H = z.replace(/([^\^])-/g, "$1- ").split(" "), F = !this.noWrap && (H.length > 1 || y.element.childNodes.length > 1), E = this.getLineHeight(O), k = 0, v = y.actualWidth;
            if (this.ellipsis)
              z && this.truncate(A, z, void 0, 0, Math.max(0, x - 0.8 * E), (u, c) => u.substring(0, c) + "…");
            else if (F) {
              let u = [], c = [];
              for (; O.firstChild && O.firstChild !== A; )
                c.push(O.firstChild), O.removeChild(O.firstChild);
              for (; H.length; )
                H.length && !this.noWrap && k > 0 && (u.push(A.textContent || ""), A.textContent = H.join(" ").replace(/- /g, "-")), this.truncate(A, void 0, H, k === 0 && v || 0, x, (w, T) => H.slice(0, T).join(" ").replace(/- /g, "-")), v = y.actualWidth, k++;
              c.forEach((w) => {
                O.insertBefore(w, A);
              }), u.forEach((w) => {
                O.insertBefore(a.createTextNode(w), A);
                let T = a.createElementNS(l, "tspan");
                T.textContent = "​", m(T, { dy: E, x: d }), O.insertBefore(T, A);
              });
            }
          }, C = (A) => {
            [].slice.call(A.childNodes).forEach((O) => {
              O.nodeType === h.Node.TEXT_NODE ? I(O, A) : (O.className.baseVal.indexOf("highcharts-br") !== -1 && (y.actualWidth = 0), C(O));
            });
          };
          C(y.element);
        }
        getLineHeight(S) {
          let y = S.nodeType === h.Node.TEXT_NODE ? S.parentElement : S;
          return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(y || this.svgElement.element).h;
        }
        modifyTree(S) {
          let y = (d, x) => {
            let { attributes: I = {}, children: C, style: A = {}, tagName: O } = d, z = this.renderer.styledMode;
            if (O === "b" || O === "strong" ? z ? I.class = "highcharts-strong" : A.fontWeight = "bold" : (O === "i" || O === "em") && (z ? I.class = "highcharts-emphasized" : A.fontStyle = "italic"), A && A.color && (A.fill = A.color), O === "br") {
              I.class = "highcharts-br", d.textContent = "​";
              let H = S[x + 1];
              H && H.textContent && (H.textContent = H.textContent.replace(/^ +/gm, ""));
            } else
              O === "a" && C && C.some((H) => H.tagName === "#text") && (d.children = [{ children: C, tagName: "tspan" }]);
            O !== "#text" && O !== "a" && (d.tagName = "tspan"), g(d, { attributes: I, style: A }), C && C.filter((H) => H.tagName !== "#text").forEach(y);
          };
          S.forEach(y), M(this.svgElement, "afterModifyTree", { nodes: S });
        }
        truncate(S, y, d, x, I, C) {
          let A, O, z = this.svgElement, { rotation: H } = z, F = [], E = d ? 1 : 0, k = (y || d || "").length, v = k, u = function(c, w) {
            let T = w || c, D = S.parentNode;
            if (D && F[T] === void 0 && D.getSubStringLength)
              try {
                F[T] = x + D.getSubStringLength(0, d ? T + 1 : T);
              } catch {
              }
            return F[T];
          };
          if (z.rotation = 0, x + (O = u(S.textContent.length)) > I) {
            for (; E <= k; )
              v = Math.ceil((E + k) / 2), d && (A = C(d, v)), O = u(v, A && A.length - 1), E === k ? E = k + 1 : O > I ? k = v - 1 : E = v;
            k === 0 ? S.textContent = "" : y && k === y.length - 1 || (S.textContent = A || C(y || d, v));
          }
          d && d.splice(0, v), z.actualWidth = O, z.rotation = H;
        }
        unescapeEntities(S, y) {
          return f(this.renderer.escapes, function(d, x) {
            y && y.indexOf(d) !== -1 || (S = S.toString().replace(RegExp(d, "g"), x));
          }), S;
        }
      };
    }), n(i, "Core/Renderer/SVG/SVGRenderer.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Defaults.js"], i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Renderer/SVG/SVGLabel.js"], i["Core/Renderer/SVG/Symbols.js"], i["Core/Renderer/SVG/TextBuilder.js"], i["Core/Utilities.js"]], function(r, s, o, a, l, h, m, g, M, N) {
      let f, { defaultOptions: b } = s, { charts: S, deg2rad: y, doc: d, isFirefox: x, isMS: I, isWebKit: C, noop: A, SVG_NS: O, symbolSizes: z, win: H } = a, { addEvent: F, attr: E, createElement: k, crisp: v, css: u, defined: c, destroyObjectProperties: w, extend: T, isArray: D, isNumber: G, isObject: L, isString: J, merge: se, pick: _, pInt: X, replaceNested: U, uniqueKey: te } = N;
      class le {
        constructor(P, W, q, p, j, B, Z) {
          let Y, ne, V = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), $ = V.element;
          Z || V.css(this.getStyle(p || {})), P.appendChild($), E(P, "dir", "ltr"), P.innerHTML.indexOf("xmlns") === -1 && E($, "xmlns", this.SVG_NS), this.box = $, this.boxWrapper = V, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(d.createTextNode("Created with Highcharts 11.4.8")), this.defs = this.createElement("defs").add(), this.allowHTML = B, this.forExport = j, this.styledMode = Z, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = V.getStyle("font-size"), this.setSize(W, q, !1), x && P.getBoundingClientRect && ((Y = function() {
            u(P, { left: 0, top: 0 }), ne = P.getBoundingClientRect(), u(P, { left: Math.ceil(ne.left) - ne.left + "px", top: Math.ceil(ne.top) - ne.top + "px" });
          })(), this.unSubPixelFix = F(H, "resize", Y));
        }
        definition(P) {
          return new r([P]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((x || C) && d.getElementsByTagName("base").length) {
            if (!c(f)) {
              let P = te(), W = new r([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: P }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${P})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(d.body);
              u(W, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
              let q = d.elementFromPoint(6, 6);
              f = (q && q.id) === "hitme", d.body.removeChild(W);
            }
            if (f)
              return U(H.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
          }
          return "";
        }
        getStyle(P) {
          return this.style = T({ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "1rem" }, P), this.style;
        }
        setStyle(P) {
          this.boxWrapper.css(this.getStyle(P));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          let P = this.defs;
          return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), w(this.gradients || {}), this.gradients = null, this.defs = P.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
        }
        createElement(P) {
          return new this.Element(this, P);
        }
        getRadialAttr(P, W) {
          return { cx: P[0] - P[2] / 2 + (W.cx || 0) * P[2], cy: P[1] - P[2] / 2 + (W.cy || 0) * P[2], r: (W.r || 0) * P[2] };
        }
        shadowDefinition(P) {
          let W = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(P).map((p) => `${p}-${P[p]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), q = se({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, P);
          return this.defs.element.querySelector(`#${W}`) || this.definition({ tagName: "filter", attributes: { id: W, filterUnits: q.filterUnits }, children: this.getShadowFilterContent(q) }), W;
        }
        getShadowFilterContent(P) {
          return [{ tagName: "feDropShadow", attributes: { dx: P.offsetX, dy: P.offsetY, "flood-color": P.color, "flood-opacity": Math.min(5 * P.opacity, 1), stdDeviation: P.width / 2 } }];
        }
        buildText(P) {
          new M(P).buildSVG();
        }
        getContrast(P) {
          let W = o.parse(P).rgba.map((p) => {
            let j = p / 255;
            return j <= 0.03928 ? j / 12.92 : Math.pow((j + 0.055) / 1.055, 2.4);
          }), q = 0.2126 * W[0] + 0.7152 * W[1] + 0.0722 * W[2];
          return 1.05 / (q + 0.05) > (q + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
        }
        button(P, W, q, p, j = {}, B, Z, Y, ne, V) {
          let $ = this.label(P, W, q, ne, void 0, void 0, V, void 0, "button"), ee = this.styledMode, ue = arguments, ce = 0;
          j = se(b.global.buttonTheme, j), ee && (delete j.fill, delete j.stroke, delete j["stroke-width"]);
          let Q = j.states || {}, K = j.style || {};
          delete j.states, delete j.style;
          let ie = [r.filterUserAttributes(j)], ae = [K];
          return ee || ["hover", "select", "disabled"].forEach((de, he) => {
            ie.push(se(ie[0], r.filterUserAttributes(ue[he + 5] || Q[de] || {}))), ae.push(ie[he + 1].style), delete ie[he + 1].style;
          }), F($.element, I ? "mouseover" : "mouseenter", function() {
            ce !== 3 && $.setState(1);
          }), F($.element, I ? "mouseout" : "mouseleave", function() {
            ce !== 3 && $.setState(ce);
          }), $.setState = (de = 0) => {
            if (de !== 1 && ($.state = ce = de), $.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][de]), !ee) {
              $.attr(ie[de]);
              let he = ae[de];
              L(he) && $.css(he);
            }
          }, $.attr(ie[0]), !ee && ($.css(T({ cursor: "default" }, K)), V && $.text.css({ pointerEvents: "none" })), $.on("touchstart", (de) => de.stopPropagation()).on("click", function(de) {
            ce !== 3 && p.call($, de);
          });
        }
        crispLine(P, W) {
          let [q, p] = P;
          return c(q[1]) && q[1] === p[1] && (q[1] = p[1] = v(q[1], W)), c(q[2]) && q[2] === p[2] && (q[2] = p[2] = v(q[2], W)), P;
        }
        path(P) {
          let W = this.styledMode ? {} : { fill: "none" };
          return D(P) ? W.d = P : L(P) && T(W, P), this.createElement("path").attr(W);
        }
        circle(P, W, q) {
          let p = L(P) ? P : P === void 0 ? {} : { x: P, y: W, r: q }, j = this.createElement("circle");
          return j.xSetter = j.ySetter = function(B, Z, Y) {
            Y.setAttribute("c" + Z, B);
          }, j.attr(p);
        }
        arc(P, W, q, p, j, B) {
          let Z;
          L(P) ? (W = (Z = P).y, q = Z.r, p = Z.innerR, j = Z.start, B = Z.end, P = Z.x) : Z = { innerR: p, start: j, end: B };
          let Y = this.symbol("arc", P, W, q, q, Z);
          return Y.r = q, Y;
        }
        rect(P, W, q, p, j, B) {
          let Z = L(P) ? P : P === void 0 ? {} : { x: P, y: W, r: j, width: Math.max(q || 0, 0), height: Math.max(p || 0, 0) }, Y = this.createElement("rect");
          return this.styledMode || (B !== void 0 && (Z["stroke-width"] = B, T(Z, Y.crisp(Z))), Z.fill = "none"), Y.rSetter = function(ne, V, $) {
            Y.r = ne, E($, { rx: ne, ry: ne });
          }, Y.rGetter = function() {
            return Y.r || 0;
          }, Y.attr(Z);
        }
        roundedRect(P) {
          return this.symbol("roundedRect").attr(P);
        }
        setSize(P, W, q) {
          this.width = P, this.height = W, this.boxWrapper.animate({ width: P, height: W }, { step: function() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: _(q, !0) ? void 0 : 0 }), this.alignElements();
        }
        g(P) {
          let W = this.createElement("g");
          return P ? W.attr({ class: "highcharts-" + P }) : W;
        }
        image(P, W, q, p, j, B) {
          let Z = { preserveAspectRatio: "none" };
          G(W) && (Z.x = W), G(q) && (Z.y = q), G(p) && (Z.width = p), G(j) && (Z.height = j);
          let Y = this.createElement("image").attr(Z), ne = function(V) {
            Y.attr({ href: P }), B.call(Y, V);
          };
          if (B) {
            Y.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
            let V = new H.Image();
            F(V, "load", ne), V.src = P, V.complete && ne({});
          } else
            Y.attr({ href: P });
          return Y;
        }
        symbol(P, W, q, p, j, B) {
          let Z, Y, ne, V, $ = this, ee = /^url\((.*?)\)$/, ue = ee.test(P), ce = !ue && (this.symbols[P] ? P : "circle"), Q = ce && this.symbols[ce];
          if (Q)
            typeof W == "number" && (Y = Q.call(this.symbols, W || 0, q || 0, p || 0, j || 0, B)), Z = this.path(Y), $.styledMode || Z.attr("fill", "none"), T(Z, { symbolName: ce || void 0, x: W, y: q, width: p, height: j }), B && T(Z, B);
          else if (ue) {
            ne = P.match(ee)[1];
            let K = Z = this.image(ne);
            K.imgwidth = _(B && B.width, z[ne] && z[ne].width), K.imgheight = _(B && B.height, z[ne] && z[ne].height), V = (ie) => ie.attr({ width: ie.width, height: ie.height }), ["width", "height"].forEach((ie) => {
              K[`${ie}Setter`] = function(ae, de) {
                this[de] = ae;
                let { alignByTranslate: he, element: fe, width: ge, height: me, imgwidth: be, imgheight: ve } = this, ye = de === "width" ? be : ve, we = 1;
                B && B.backgroundSize === "within" && ge && me && be && ve ? (we = Math.min(ge / be, me / ve), E(fe, { width: Math.round(be * we), height: Math.round(ve * we) })) : fe && ye && fe.setAttribute(de, ye), !he && be && ve && this.translate(((ge || 0) - be * we) / 2, ((me || 0) - ve * we) / 2);
              };
            }), c(W) && K.attr({ x: W, y: q }), K.isImg = !0, K.symbolUrl = P, c(K.imgwidth) && c(K.imgheight) ? V(K) : (K.attr({ width: 0, height: 0 }), k("img", { onload: function() {
              let ie = S[$.chartIndex];
              this.width === 0 && (u(this, { position: "absolute", top: "-999em" }), d.body.appendChild(this)), z[ne] = { width: this.width, height: this.height }, K.imgwidth = this.width, K.imgheight = this.height, K.element && V(K), this.parentNode && this.parentNode.removeChild(this), $.imgCount--, $.imgCount || !ie || ie.hasLoaded || ie.onload();
            }, src: ne }), this.imgCount++);
          }
          return Z;
        }
        clipRect(P, W, q, p) {
          return this.rect(P, W, q, p, 0);
        }
        text(P, W, q, p) {
          let j = {};
          if (p && (this.allowHTML || !this.forExport))
            return this.html(P, W, q);
          j.x = Math.round(W || 0), q && (j.y = Math.round(q)), c(P) && (j.text = P);
          let B = this.createElement("text").attr(j);
          return p && (!this.forExport || this.allowHTML) || (B.xSetter = function(Z, Y, ne) {
            let V = ne.getElementsByTagName("tspan"), $ = ne.getAttribute(Y);
            for (let ee = 0, ue; ee < V.length; ee++)
              (ue = V[ee]).getAttribute(Y) === $ && ue.setAttribute(Y, Z);
            ne.setAttribute(Y, Z);
          }), B;
        }
        fontMetrics(P) {
          let W = X(h.prototype.getStyle.call(P, "font-size") || 0), q = W < 24 ? W + 3 : Math.round(1.2 * W), p = Math.round(0.8 * q);
          return { h: q, b: p, f: W };
        }
        rotCorr(P, W, q) {
          let p = P;
          return W && q && (p = Math.max(p * Math.cos(W * y), 4)), { x: -P / 3 * Math.sin(W * y), y: p };
        }
        pathToSegments(P) {
          let W = [], q = [], p = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let j = 0; j < P.length; j++)
            J(q[0]) && G(P[j]) && q.length === p[q[0].toUpperCase()] && P.splice(j, 0, q[0].replace("M", "L").replace("m", "l")), typeof P[j] == "string" && (q.length && W.push(q.slice(0)), q.length = 0), q.push(P[j]);
          return W.push(q.slice(0)), W;
        }
        label(P, W, q, p, j, B, Z, Y, ne) {
          return new m(this, P, W, q, p, j, B, Z, Y, ne);
        }
        alignElements() {
          this.alignedObjects.forEach((P) => P.align());
        }
      }
      return T(le.prototype, { Element: h, SVG_NS: O, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: g, draw: A }), l.registerRendererType("svg", le, !0), le;
    }), n(i, "Core/Renderer/HTML/HTMLElement.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Globals.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]], function(r, s, o, a) {
      let { composed: l } = s, { attr: h, css: m, createElement: g, defined: M, extend: N, pInt: f, pushUnique: b } = a;
      function S(I, C, A) {
        var z;
        let O = ((z = this.div) == null ? void 0 : z.style) || A.style;
        o.prototype[`${C}Setter`].call(this, I, C, A), O && (O[C] = I);
      }
      let y = (I, C) => {
        var A;
        if (!I.div) {
          let O = h(I.element, "class"), z = I.css, H = g("div", O ? { className: O } : void 0, { position: "absolute", left: `${I.translateX || 0}px`, top: `${I.translateY || 0}px`, ...I.styles, display: I.display, opacity: I.opacity, visibility: I.visibility }, ((A = I.parentGroup) == null ? void 0 : A.div) || C);
          I.classSetter = (F, E, k) => {
            k.setAttribute("class", F), H.className = F;
          }, I.translateXSetter = I.translateYSetter = (F, E) => {
            I[E] = F, H.style[E === "translateX" ? "left" : "top"] = `${F}px`, I.doTransform = !0;
          }, I.opacitySetter = I.visibilitySetter = S, I.css = (F) => (z.call(I, F), F.cursor && (H.style.cursor = F.cursor), F.pointerEvents && (H.style.pointerEvents = F.pointerEvents), I), I.on = function() {
            return o.prototype.on.apply({ element: H, onEvents: I.onEvents }, arguments), I;
          }, I.div = H;
        }
        return I.div;
      };
      class d extends o {
        static compose(C) {
          b(l, this.compose) && (C.prototype.html = function(A, O, z) {
            return new d(this, "span").attr({ text: A, x: Math.round(O), y: Math.round(z) });
          });
        }
        constructor(C, A) {
          super(C, A), this.css({ position: "absolute", ...C.styledMode ? {} : { fontFamily: C.style.fontFamily, fontSize: C.style.fontSize } }), this.element.style.whiteSpace = "nowrap";
        }
        getSpanCorrection(C, A, O) {
          this.xCorr = -C * O, this.yCorr = -A;
        }
        css(C) {
          let A, { element: O } = this, z = O.tagName === "SPAN" && C && "width" in C, H = z && C.width;
          return z && (delete C.width, this.textWidth = f(H) || void 0, A = !0), (C == null ? void 0 : C.textOverflow) === "ellipsis" && (C.whiteSpace = "nowrap", C.overflow = "hidden"), N(this.styles, C), m(O, C), A && this.updateTransform(), this;
        }
        htmlGetBBox() {
          let { element: C } = this;
          return { x: C.offsetLeft, y: C.offsetTop, width: C.offsetWidth, height: C.offsetHeight };
        }
        updateTransform() {
          var G;
          if (!this.added) {
            this.alignOnAdd = !0;
            return;
          }
          let { element: C, renderer: A, rotation: O, rotationOriginX: z, rotationOriginY: H, styles: F, textAlign: E = "left", textWidth: k, translateX: v = 0, translateY: u = 0, x: c = 0, y: w = 0 } = this, T = { left: 0, center: 0.5, right: 1 }[E], D = F.whiteSpace;
          if (m(C, { marginLeft: `${v}px`, marginTop: `${u}px` }), C.tagName === "SPAN") {
            let L = [O, E, C.innerHTML, k, this.textAlign].join(","), J = -(((G = this.parentGroup) == null ? void 0 : G.padding) * 1) || 0, se, _ = !1;
            if (k !== this.oldTextWidth) {
              let R = this.textPxLength ? this.textPxLength : (m(C, { width: "", whiteSpace: D || "nowrap" }), C.offsetWidth), P = k || 0;
              (P > this.oldTextWidth || R > P) && (/[ \-]/.test(C.textContent || C.innerText) || C.style.textOverflow === "ellipsis") && (m(C, { width: R > P || O ? k + "px" : "auto", display: "block", whiteSpace: D || "normal" }), this.oldTextWidth = k, _ = !0);
            }
            this.hasBoxWidthChanged = _, L !== this.cTT && (se = A.fontMetrics(C).b, M(O) && (O !== (this.oldRotation || 0) || E !== this.oldAlign) && this.setSpanRotation(O, J, J), this.getSpanCorrection(!M(O) && this.textPxLength || C.offsetWidth, se, T));
            let { xCorr: X = 0, yCorr: U = 0 } = this, te = (z ?? c) - X - c - J, le = (H ?? w) - U - w - J;
            m(C, { left: `${c + X}px`, top: `${w + U}px`, transformOrigin: `${te}px ${le}px` }), this.cTT = L, this.oldRotation = O, this.oldAlign = E;
          }
        }
        setSpanRotation(C, A, O) {
          m(this.element, { transform: `rotate(${C}deg)`, transformOrigin: `${A}% ${O}px` });
        }
        add(C) {
          let A, O = this.renderer.box.parentNode, z = [];
          if (this.parentGroup = C, C && !(A = C.div)) {
            let H = C;
            for (; H; )
              z.push(H), H = H.parentGroup;
            for (let F of z.reverse())
              A = y(F, O);
          }
          return (A || O).appendChild(this.element), this.added = !0, this.alignOnAdd && this.updateTransform(), this;
        }
        textSetter(C) {
          C !== this.textStr && (delete this.bBox, delete this.oldTextWidth, r.setElementHTML(this.element, C ?? ""), this.textStr = C, this.doTransform = !0);
        }
        alignSetter(C) {
          this.alignValue = this.textAlign = C, this.doTransform = !0;
        }
        xSetter(C, A) {
          this[A] = C, this.doTransform = !0;
        }
      }
      let x = d.prototype;
      return x.visibilitySetter = x.opacitySetter = S, x.ySetter = x.rotationSetter = x.rotationOriginXSetter = x.rotationOriginYSetter = x.xSetter, d;
    }), n(i, "Core/Axis/AxisDefaults.js", [], function() {
      var r, s;
      return (s = r || (r = {})).xAxis = { alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 }, minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e %b" }, week: { main: "%e %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotationLimit: 80, distance: 15, enabled: !0, indentation: 10, overflow: "justify", reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", useHTML: !1, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, s.yAxis = { reversedStacks: !0, endOnTick: !0, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: void 0 }, startOnTick: !0, title: { text: "Values" }, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function() {
        let { numberFormatter: o } = this.axis.chart;
        return o(this.total || 0, -1);
      }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }, r;
    }), n(i, "Core/Foundation.js", [i["Core/Utilities.js"]], function(r) {
      var s;
      let { addEvent: o, isFunction: a, objectEach: l, removeEvent: h } = r;
      return (s || (s = {})).registerEventOptions = function(m, g) {
        m.eventOptions = m.eventOptions || {}, l(g.events, function(M, N) {
          m.eventOptions[N] !== M && (m.eventOptions[N] && (h(m, N, m.eventOptions[N]), delete m.eventOptions[N]), a(M) && (m.eventOptions[N] = M, o(m, N, M, { order: 0 })));
        });
      }, s;
    }), n(i, "Core/Axis/Tick.js", [i["Core/Templating.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { deg2rad: a } = s, { clamp: l, correctFloat: h, defined: m, destroyObjectProperties: g, extend: M, fireEvent: N, isNumber: f, merge: b, objectEach: S, pick: y } = o;
      return class {
        constructor(d, x, I, C, A) {
          this.isNew = !0, this.isNewLabel = !0, this.axis = d, this.pos = x, this.type = I || "", this.parameters = A || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, N(this, "init"), I || C || this.addLabel();
        }
        addLabel() {
          let d = this, x = d.axis, I = x.options, C = x.chart, A = x.categories, O = x.logarithmic, z = x.names, H = d.pos, F = y(d.options && d.options.labels, I.labels), E = x.tickPositions, k = H === E[0], v = H === E[E.length - 1], u = (!F.step || F.step === 1) && x.tickInterval === 1, c = E.info, w = d.label, T, D, G, L = this.parameters.category || (A ? y(A[H], z[H], H) : H);
          O && f(L) && (L = h(O.lin2log(L))), x.dateTime && (c ? T = (D = C.time.resolveDTLFormat(I.dateTimeLabelFormats[!I.grid && c.higherRanks[H] || c.unitName])).main : f(L) && (T = x.dateTime.getXDateFormat(L, I.dateTimeLabelFormats || {}))), d.isFirst = k, d.isLast = v;
          let J = { axis: x, chart: C, dateTimeLabelFormat: T, isFirst: k, isLast: v, pos: H, tick: d, tickPositionInfo: c, value: L };
          N(this, "labelFormat", J);
          let se = (U) => F.formatter ? F.formatter.call(U, U) : F.format ? (U.text = x.defaultLabelFormatter.call(U), r.format(F.format, U, C)) : x.defaultLabelFormatter.call(U), _ = se.call(J, J), X = D && D.list;
          X ? d.shortenLabel = function() {
            for (G = 0; G < X.length; G++)
              if (M(J, { dateTimeLabelFormat: X[G] }), w.attr({ text: se.call(J, J) }), w.getBBox().width < x.getSlotWidth(d) - 2 * (F.padding || 0))
                return;
            w.attr({ text: "" });
          } : d.shortenLabel = void 0, u && x._addedPlotLB && d.moveLabel(_, F), m(w) || d.movedLabel ? w && w.textStr !== _ && !u && (!w.textWidth || F.style.width || w.styles.width || w.css({ width: null }), w.attr({ text: _ }), w.textPxLength = w.getBBox().width) : (d.label = w = d.createLabel(_, F), d.rotation = 0);
        }
        createLabel(d, x, I) {
          let C = this.axis, A = C.chart, O = m(d) && x.enabled ? A.renderer.text(d, I == null ? void 0 : I.x, I == null ? void 0 : I.y, x.useHTML).add(C.labelGroup) : void 0;
          return O && (A.styledMode || O.css(b(x.style)), O.textPxLength = O.getBBox().width), O;
        }
        destroy() {
          g(this, this.axis);
        }
        getPosition(d, x, I, C) {
          let A = this.axis, O = A.chart, z = C && O.oldChartHeight || O.chartHeight, H = { x: d ? h(A.translate(x + I, void 0, void 0, C) + A.transB) : A.left + A.offset + (A.opposite ? (C && O.oldChartWidth || O.chartWidth) - A.right - A.left : 0), y: d ? z - A.bottom + A.offset - (A.opposite ? A.height : 0) : h(z - A.translate(x + I, void 0, void 0, C) - A.transB) };
          return H.y = l(H.y, -1e9, 1e9), N(this, "afterGetPosition", { pos: H }), H;
        }
        getLabelPosition(d, x, I, C, A, O, z, H) {
          let F, E, k = this.axis, v = k.transA, u = k.isLinked && k.linkedParent ? k.linkedParent.reversed : k.reversed, c = k.staggerLines, w = k.tickRotCorr || { x: 0, y: 0 }, T = C || k.reserveSpaceDefault ? 0 : -k.labelOffset * (k.labelAlign === "center" ? 0.5 : 1), D = A.distance, G = {};
          return F = k.side === 0 ? I.rotation ? -D : -I.getBBox().height : k.side === 2 ? w.y + D : Math.cos(I.rotation * a) * (w.y - I.getBBox(!1, 0).height / 2), m(A.y) && (F = k.side === 0 && k.horiz ? A.y + F : A.y), d = d + y(A.x, [0, 1, 0, -1][k.side] * D) + T + w.x - (O && C ? O * v * (u ? -1 : 1) : 0), x = x + F - (O && !C ? O * v * (u ? 1 : -1) : 0), c && (E = z / (H || 1) % c, k.opposite && (E = c - E - 1), x += E * (k.labelOffset / c)), G.x = d, G.y = Math.round(x), N(this, "afterGetLabelPosition", { pos: G, tickmarkOffset: O, index: z }), G;
        }
        getLabelSize() {
          return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        }
        getMarkPath(d, x, I, C, A = !1, O) {
          return O.crispLine([["M", d, x], ["L", d + (A ? 0 : -I), x + (A ? I : 0)]], C);
        }
        handleOverflow(d) {
          let x = this.axis, I = x.options.labels, C = d.x, A = x.chart.chartWidth, O = x.chart.spacing, z = y(x.labelLeft, Math.min(x.pos, O[3])), H = y(x.labelRight, Math.max(x.isRadial ? 0 : x.pos + x.len, A - O[1])), F = this.label, E = this.rotation, k = { left: 0, center: 0.5, right: 1 }[x.labelAlign || F.attr("align")], v = F.getBBox().width, u = x.getSlotWidth(this), c = {}, w = u, T = 1, D, G, L;
          E || I.overflow !== "justify" ? E < 0 && C - k * v < z ? L = Math.round(C / Math.cos(E * a) - z) : E > 0 && C + k * v > H && (L = Math.round((A - C) / Math.cos(E * a))) : (D = C - k * v, G = C + (1 - k) * v, D < z ? w = d.x + w * (1 - k) - z : G > H && (w = H - d.x + w * k, T = -1), (w = Math.min(u, w)) < u && x.labelAlign === "center" && (d.x += T * (u - w - k * (u - Math.min(v, w)))), (v > w || x.autoRotation && (F.styles || {}).width) && (L = w)), L && (this.shortenLabel ? this.shortenLabel() : (c.width = Math.floor(L) + "px", (I.style || {}).textOverflow || (c.textOverflow = "ellipsis"), F.css(c)));
        }
        moveLabel(d, x) {
          let I = this, C = I.label, A = I.axis, O = !1, z;
          C && C.textStr === d ? (I.movedLabel = C, O = !0, delete I.label) : S(A.ticks, function(H) {
            O || H.isNew || H === I || !H.label || H.label.textStr !== d || (I.movedLabel = H.label, O = !0, H.labelPos = I.movedLabel.xy, delete H.label);
          }), !O && (I.labelPos || C) && (z = I.labelPos || C.xy, I.movedLabel = I.createLabel(d, x, z), I.movedLabel && I.movedLabel.attr({ opacity: 0 }));
        }
        render(d, x, I) {
          let C = this.axis, A = C.horiz, O = this.pos, z = y(this.tickmarkOffset, C.tickmarkOffset), H = this.getPosition(A, O, z, x), F = H.x, E = H.y, k = C.pos, v = k + C.len, u = A ? F : E;
          !C.chart.polar && this.isNew && (h(u) < k || u > v) && (I = 0);
          let c = y(I, this.label && this.label.newOpacity, 1);
          I = y(I, 1), this.isActive = !0, this.renderGridLine(x, I), this.renderMark(H, I), this.renderLabel(H, x, c, d), this.isNew = !1, N(this, "afterRender");
        }
        renderGridLine(d, x) {
          let I = this.axis, C = I.options, A = {}, O = this.pos, z = this.type, H = y(this.tickmarkOffset, I.tickmarkOffset), F = I.chart.renderer, E = this.gridLine, k, v = C.gridLineWidth, u = C.gridLineColor, c = C.gridLineDashStyle;
          this.type === "minor" && (v = C.minorGridLineWidth, u = C.minorGridLineColor, c = C.minorGridLineDashStyle), E || (I.chart.styledMode || (A.stroke = u, A["stroke-width"] = v || 0, A.dashstyle = c), z || (A.zIndex = 1), d && (x = 0), this.gridLine = E = F.path().attr(A).addClass("highcharts-" + (z ? z + "-" : "") + "grid-line").add(I.gridGroup)), E && (k = I.getPlotLinePath({ value: O + H, lineWidth: E.strokeWidth(), force: "pass", old: d, acrossPanes: !1 })) && E[d || this.isNew ? "attr" : "animate"]({ d: k, opacity: x });
        }
        renderMark(d, x) {
          let I = this.axis, C = I.options, A = I.chart.renderer, O = this.type, z = I.tickSize(O ? O + "Tick" : "tick"), H = d.x, F = d.y, E = y(C[O !== "minor" ? "tickWidth" : "minorTickWidth"], !O && I.isXAxis ? 1 : 0), k = C[O !== "minor" ? "tickColor" : "minorTickColor"], v = this.mark, u = !v;
          z && (I.opposite && (z[0] = -z[0]), v || (this.mark = v = A.path().addClass("highcharts-" + (O ? O + "-" : "") + "tick").add(I.axisGroup), I.chart.styledMode || v.attr({ stroke: k, "stroke-width": E })), v[u ? "attr" : "animate"]({ d: this.getMarkPath(H, F, z[0], v.strokeWidth(), I.horiz, A), opacity: x }));
        }
        renderLabel(d, x, I, C) {
          let A = this.axis, O = A.horiz, z = A.options, H = this.label, F = z.labels, E = F.step, k = y(this.tickmarkOffset, A.tickmarkOffset), v = d.x, u = d.y, c = !0;
          H && f(v) && (H.xy = d = this.getLabelPosition(v, u, H, O, F, k, C, E), (!this.isFirst || this.isLast || z.showFirstLabel) && (!this.isLast || this.isFirst || z.showLastLabel) ? !O || F.step || F.rotation || x || I === 0 || this.handleOverflow(d) : c = !1, E && C % E && (c = !1), c && f(d.y) ? (d.opacity = I, H[this.isNewLabel ? "attr" : "animate"](d).show(!0), this.isNewLabel = !1) : (H.hide(), this.isNewLabel = !0));
        }
        replaceMovedLabel() {
          let d = this.label, x = this.axis;
          d && !this.isNew && (d.animate({ opacity: 0 }, void 0, d.destroy), delete this.label), x.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
        }
      };
    }), n(i, "Core/Axis/Axis.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Axis/AxisDefaults.js"], i["Core/Color/Color.js"], i["Core/Defaults.js"], i["Core/Foundation.js"], i["Core/Globals.js"], i["Core/Axis/Tick.js"], i["Core/Utilities.js"]], function(r, s, o, a, l, h, m, g) {
      let { animObject: M } = r, { xAxis: N, yAxis: f } = s, { defaultOptions: b } = a, { registerEventOptions: S } = l, { deg2rad: y } = h, { arrayMax: d, arrayMin: x, clamp: I, correctFloat: C, defined: A, destroyObjectProperties: O, erase: z, error: H, extend: F, fireEvent: E, getClosestDistance: k, insertItem: v, isArray: u, isNumber: c, isString: w, merge: T, normalizeTickInterval: D, objectEach: G, pick: L, relativeLength: J, removeEvent: se, splat: _, syncTimeout: X } = g, U = (le, R) => D(R, void 0, void 0, L(le.options.allowDecimals, R < 0.5 || le.tickAmount !== void 0), !!le.tickAmount);
      F(b, { xAxis: N, yAxis: T(N, f) });
      class te {
        constructor(R, P, W) {
          this.init(R, P, W);
        }
        init(R, P, W = this.coll) {
          let q = W === "xAxis", p = this.isZAxis || (R.inverted ? !q : q);
          this.chart = R, this.horiz = p, this.isXAxis = q, this.coll = W, E(this, "init", { userOptions: P }), this.opposite = L(P.opposite, this.opposite), this.side = L(P.side, this.side, p ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(P);
          let j = this.options, B = j.labels;
          this.type ?? (this.type = j.type || "linear"), this.uniqueNames ?? (this.uniqueNames = j.uniqueNames ?? !0), E(this, "afterSetType"), this.userOptions = P, this.minPixelPadding = 0, this.reversed = L(j.reversed, this.reversed), this.visible = j.visible, this.zoomEnabled = j.zoomEnabled, this.hasNames = this.type === "category" || j.categories === !0, this.categories = u(j.categories) && j.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = A(j.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = j.minRange || j.maxZoom, this.range = j.range, this.offset = j.offset || 0, this.max = void 0, this.min = void 0;
          let Z = L(j.crosshair, _(R.options.tooltip.crosshairs)[q ? 0 : 1]);
          this.crosshair = Z === !0 ? {} : Z, R.axes.indexOf(this) === -1 && (q ? R.axes.splice(R.xAxis.length, 0, this) : R.axes.push(this), v(this, R[this.coll])), R.orderItems(this.coll), this.series = this.series || [], R.inverted && !this.isZAxis && q && !A(this.reversed) && (this.reversed = !0), this.labelRotation = c(B.rotation) ? B.rotation : void 0, S(this, j), E(this, "afterInit");
        }
        setOptions(R) {
          let P = this.horiz ? { labels: { autoRotation: [-45], padding: 4 }, margin: 15 } : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
          this.options = T(P, b[this.coll], R), E(this, "afterSetOptions", { userOptions: R });
        }
        defaultLabelFormatter() {
          let R = this.axis, { numberFormatter: P } = this.chart, W = c(this.value) ? this.value : NaN, q = R.chart.time, p = R.categories, j = this.dateTimeLabelFormat, B = b.lang, Z = B.numericSymbols, Y = B.numericSymbolMagnitude || 1e3, ne = R.logarithmic ? Math.abs(W) : R.tickInterval, V = Z && Z.length, $, ee;
          if (p)
            ee = `${this.value}`;
          else if (j)
            ee = q.dateFormat(j, W);
          else if (V && Z && ne >= 1e3)
            for (; V-- && ee === void 0; )
              ne >= ($ = Math.pow(Y, V + 1)) && 10 * W % $ == 0 && Z[V] !== null && W !== 0 && (ee = P(W / $, -1) + Z[V]);
          return ee === void 0 && (ee = Math.abs(W) >= 1e4 ? P(W, -1) : P(W, -1, void 0, "")), ee;
        }
        getSeriesExtremes() {
          let R, P = this;
          E(this, "getSeriesExtremes", null, function() {
            P.hasVisibleSeries = !1, P.dataMin = P.dataMax = P.threshold = void 0, P.softThreshold = !P.isXAxis, P.series.forEach((W) => {
              if (W.reserveSpace()) {
                let q = W.options, p, j = q.threshold, B, Z;
                if (P.hasVisibleSeries = !0, P.positiveValuesOnly && 0 >= (j || 0) && (j = void 0), P.isXAxis)
                  (p = W.xData) && p.length && (p = P.logarithmic ? p.filter((Y) => Y > 0) : p, B = (R = W.getXExtremes(p)).min, Z = R.max, c(B) || B instanceof Date || (p = p.filter(c), B = (R = W.getXExtremes(p)).min, Z = R.max), p.length && (P.dataMin = Math.min(L(P.dataMin, B), B), P.dataMax = Math.max(L(P.dataMax, Z), Z)));
                else {
                  let Y = W.applyExtremes();
                  c(Y.dataMin) && (B = Y.dataMin, P.dataMin = Math.min(L(P.dataMin, B), B)), c(Y.dataMax) && (Z = Y.dataMax, P.dataMax = Math.max(L(P.dataMax, Z), Z)), A(j) && (P.threshold = j), (!q.softThreshold || P.positiveValuesOnly) && (P.softThreshold = !1);
                }
              }
            });
          }), E(this, "afterGetSeriesExtremes");
        }
        translate(R, P, W, q, p, j) {
          var ce;
          let B = this.linkedParent || this, Z = q && B.old ? B.old.min : B.min;
          if (!c(Z))
            return NaN;
          let Y = B.minPixelPadding, ne = (B.isOrdinal || ((ce = B.brokenAxis) == null ? void 0 : ce.hasBreaks) || B.logarithmic && p) && B.lin2val, V = 1, $ = 0, ee = q && B.old ? B.old.transA : B.transA, ue = 0;
          return ee || (ee = B.transA), W && (V *= -1, $ = B.len), B.reversed && (V *= -1, $ -= V * (B.sector || B.len)), P ? (ue = (R = R * V + $ - Y) / ee + Z, ne && (ue = B.lin2val(ue))) : (ne && (R = B.val2lin(R)), ue = V * (R - Z) * ee + $ + V * Y + (c(j) ? ee * j : 0), B.isRadial || (ue = C(ue))), ue;
        }
        toPixels(R, P) {
          return this.translate(R, !1, !this.horiz, void 0, !0) + (P ? 0 : this.pos);
        }
        toValue(R, P) {
          return this.translate(R - (P ? 0 : this.pos), !0, !this.horiz, void 0, !0);
        }
        getPlotLinePath(R) {
          let P = this, W = P.chart, q = P.left, p = P.top, j = R.old, B = R.value, Z = R.lineWidth, Y = j && W.oldChartHeight || W.chartHeight, ne = j && W.oldChartWidth || W.chartWidth, V = P.transB, $ = R.translatedValue, ee = R.force, ue, ce, Q, K, ie;
          function ae(he, fe, ge) {
            return ee !== "pass" && (he < fe || he > ge) && (ee ? he = I(he, fe, ge) : ie = !0), he;
          }
          let de = { value: B, lineWidth: Z, old: j, force: ee, acrossPanes: R.acrossPanes, translatedValue: $ };
          return E(this, "getPlotLinePath", de, function(he) {
            ue = Q = ($ = I($ = L($, P.translate(B, void 0, void 0, j)), -1e9, 1e9)) + V, ce = K = Y - $ - V, c($) ? P.horiz ? (ce = p, K = Y - P.bottom + (P.options.isInternal ? 0 : W.scrollablePixelsY || 0), ue = Q = ae(ue, q, q + P.width)) : (ue = q, Q = ne - P.right + (W.scrollablePixelsX || 0), ce = K = ae(ce, p, p + P.height)) : (ie = !0, ee = !1), he.path = ie && !ee ? void 0 : W.renderer.crispLine([["M", ue, ce], ["L", Q, K]], Z || 1);
          }), de.path;
        }
        getLinearTickPositions(R, P, W) {
          let q, p, j, B = C(Math.floor(P / R) * R), Z = C(Math.ceil(W / R) * R), Y = [];
          if (C(B + R) === B && (j = 20), this.single)
            return [P];
          for (q = B; q <= Z && (Y.push(q), (q = C(q + R, j)) !== p); )
            p = q;
          return Y;
        }
        getMinorTickInterval() {
          let { minorTicks: R, minorTickInterval: P } = this.options;
          return R === !0 ? L(P, "auto") : R !== !1 ? P : void 0;
        }
        getMinorTickPositions() {
          let R = this.options, P = this.tickPositions, W = this.minorTickInterval, q = this.pointRangePadding || 0, p = (this.min || 0) - q, j = (this.max || 0) + q, B = j - p, Z = [], Y;
          if (B && B / W < this.len / 3) {
            let ne = this.logarithmic;
            if (ne)
              this.paddedTicks.forEach(function(V, $, ee) {
                $ && Z.push.apply(Z, ne.getLogTickPositions(W, ee[$ - 1], ee[$], !0));
              });
            else if (this.dateTime && this.getMinorTickInterval() === "auto")
              Z = Z.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(W), p, j, R.startOfWeek));
            else
              for (Y = p + (P[0] - p) % W; Y <= j && Y !== Z[0]; Y += W)
                Z.push(Y);
          }
          return Z.length !== 0 && this.trimTicks(Z), Z;
        }
        adjustForMinRange() {
          let R = this.options, P = this.logarithmic, { max: W, min: q, minRange: p } = this, j, B, Z, Y;
          this.isXAxis && p === void 0 && !P && (p = A(R.min) || A(R.max) || A(R.floor) || A(R.ceiling) ? null : Math.min(5 * (k(this.series.map((ne) => {
            var V;
            return (ne.xIncrement ? (V = ne.xData) == null ? void 0 : V.slice(0, 2) : ne.xData) || [];
          })) || 0), this.dataMax - this.dataMin)), c(W) && c(q) && c(p) && W - q < p && (B = this.dataMax - this.dataMin >= p, j = (p - W + q) / 2, Z = [q - j, L(R.min, q - j)], B && (Z[2] = P ? P.log2lin(this.dataMin) : this.dataMin), Y = [(q = d(Z)) + p, L(R.max, q + p)], B && (Y[2] = P ? P.log2lin(this.dataMax) : this.dataMax), (W = x(Y)) - q < p && (Z[0] = W - p, Z[1] = L(R.min, W - p), q = d(Z))), this.minRange = p, this.min = q, this.max = W;
        }
        getClosest() {
          let R, P;
          if (this.categories)
            P = 1;
          else {
            let W = [];
            this.series.forEach(function(q) {
              var j;
              let p = q.closestPointRange;
              ((j = q.xData) == null ? void 0 : j.length) === 1 ? W.push(q.xData[0]) : !q.noSharedTooltip && A(p) && q.reserveSpace() && (P = A(P) ? Math.min(P, p) : p);
            }), W.length && (W.sort((q, p) => q - p), R = k([W]));
          }
          return R && P ? Math.min(R, P) : R || P;
        }
        nameToX(R) {
          let P = u(this.options.categories), W = P ? this.categories : this.names, q = R.options.x, p;
          return R.series.requireSorting = !1, A(q) || (q = this.uniqueNames && W ? P ? W.indexOf(R.name) : L(W.keys[R.name], -1) : R.series.autoIncrement()), q === -1 ? !P && W && (p = W.length) : p = q, p !== void 0 ? (this.names[p] = R.name, this.names.keys[R.name] = p) : R.x && (p = R.x), p;
        }
        updateNames() {
          let R = this, P = this.names;
          P.length > 0 && (Object.keys(P.keys).forEach(function(W) {
            delete P.keys[W];
          }), P.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((W) => {
            W.xIncrement = null, (!W.points || W.isDirtyData) && (R.max = Math.max(R.max, W.xData.length - 1), W.processData(), W.generatePoints()), W.data.forEach(function(q, p) {
              let j;
              q != null && q.options && q.name !== void 0 && (j = R.nameToX(q)) !== void 0 && j !== q.x && (q.x = j, W.xData[p] = j);
            });
          }));
        }
        setAxisTranslation() {
          let R = this, P = R.max - R.min, W = R.linkedParent, q = !!R.categories, p = R.isXAxis, j = R.axisPointRange || 0, B, Z = 0, Y = 0, ne, V = R.transA;
          (p || q || j) && (B = R.getClosest(), W ? (Z = W.minPointOffset, Y = W.pointRangePadding) : R.series.forEach(function($) {
            let ee = q ? 1 : p ? L($.options.pointRange, B, 0) : R.axisPointRange || 0, ue = $.options.pointPlacement;
            if (j = Math.max(j, ee), !R.single || q) {
              let ce = $.is("xrange") ? !p : p;
              Z = Math.max(Z, ce && w(ue) ? 0 : ee / 2), Y = Math.max(Y, ce && ue === "on" ? 0 : ee);
            }
          }), ne = R.ordinal && R.ordinal.slope && B ? R.ordinal.slope / B : 1, R.minPointOffset = Z *= ne, R.pointRangePadding = Y *= ne, R.pointRange = Math.min(j, R.single && q ? 1 : P), p && B && (R.closestPointRange = B)), R.translationSlope = R.transA = V = R.staticScale || R.len / (P + Y || 1), R.transB = R.horiz ? R.left : R.bottom, R.minPixelPadding = V * Z, E(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          let { max: R, min: P } = this;
          return c(R) && c(P) && R - P || void 0;
        }
        setTickInterval(R) {
          var Se, xe, Oe, Pe;
          let { categories: P, chart: W, dataMax: q, dataMin: p, dateTime: j, isXAxis: B, logarithmic: Z, options: Y, softThreshold: ne } = this, V = c(this.threshold) ? this.threshold : void 0, $ = this.minRange || 0, { ceiling: ee, floor: ue, linkedTo: ce, softMax: Q, softMin: K } = Y, ie = c(ce) && ((Se = W[this.coll]) == null ? void 0 : Se[ce]), ae = Y.tickPixelInterval, de = Y.maxPadding, he = Y.minPadding, fe = 0, ge, me = c(Y.tickInterval) && Y.tickInterval >= 0 ? Y.tickInterval : void 0, be, ve, ye, we;
          if (j || P || ie || this.getTickAmount(), ye = L(this.userMin, Y.min), we = L(this.userMax, Y.max), ie ? (this.linkedParent = ie, ge = ie.getExtremes(), this.min = L(ge.min, ge.dataMin), this.max = L(ge.max, ge.dataMax), this.type !== ie.type && H(11, !0, W)) : (ne && A(V) && c(q) && c(p) && (p >= V ? (be = V, he = 0) : q <= V && (ve = V, de = 0)), this.min = L(ye, be, p), this.max = L(we, ve, q)), c(this.max) && c(this.min) && (Z && (this.positiveValuesOnly && !R && 0 >= Math.min(this.min, L(p, this.min)) && H(10, !0, W), this.min = C(Z.log2lin(this.min), 16), this.max = C(Z.log2lin(this.max), 16)), this.range && c(p) && (this.userMin = this.min = ye = Math.max(p, this.minFromRange() || 0), this.userMax = we = this.max, this.range = void 0)), E(this, "foundExtremes"), this.adjustForMinRange(), c(this.min) && c(this.max)) {
            if (!c(this.userMin) && c(K) && K < this.min && (this.min = ye = K), !c(this.userMax) && c(Q) && Q > this.max && (this.max = we = Q), P || this.axisPointRange || (xe = this.stacking) != null && xe.usePercentage || ie || !(fe = this.max - this.min) || (!A(ye) && he && (this.min -= fe * he), A(we) || !de || (this.max += fe * de)), !c(this.userMin) && c(ue) && (this.min = Math.max(this.min, ue)), !c(this.userMax) && c(ee) && (this.max = Math.min(this.max, ee)), ne && c(p) && c(q)) {
              let Ne = V || 0;
              !A(ye) && this.min < Ne && p >= Ne ? this.min = Y.minRange ? Math.min(Ne, this.max - $) : Ne : !A(we) && this.max > Ne && q <= Ne && (this.max = Y.minRange ? Math.max(Ne, this.min + $) : Ne);
            }
            !W.polar && this.min > this.max && (A(Y.min) ? this.max = this.min : A(Y.max) && (this.min = this.max)), fe = this.max - this.min;
          }
          if (this.min !== this.max && c(this.min) && c(this.max) ? ie && !me && ae === ie.options.tickPixelInterval ? this.tickInterval = me = ie.tickInterval : this.tickInterval = L(me, this.tickAmount ? fe / Math.max(this.tickAmount - 1, 1) : void 0, P ? 1 : fe * ae / Math.max(this.len, ae)) : this.tickInterval = 1, B && !R) {
            let Ne = this.min !== ((Oe = this.old) == null ? void 0 : Oe.min) || this.max !== ((Pe = this.old) == null ? void 0 : Pe.max);
            this.series.forEach(function(Ke) {
              var Ue;
              Ke.forceCrop = (Ue = Ke.forceCropping) == null ? void 0 : Ue.call(Ke), Ke.processData(Ne);
            }), E(this, "postProcessData", { hasExtremesChanged: Ne });
          }
          this.setAxisTranslation(), E(this, "initialAxisTranslation"), this.pointRange && !me && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
          let Ae = L(Y.minTickInterval, j && !this.series.some((Ne) => Ne.noSharedTooltip) ? this.closestPointRange : 0);
          !me && this.tickInterval < Ae && (this.tickInterval = Ae), j || Z || me || (this.tickInterval = U(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
        }
        setTickPositions() {
          var ne, V;
          let R = this.options, P = R.tickPositions, W = R.tickPositioner, q = this.getMinorTickInterval(), p = !this.isPanning, j = p && R.startOnTick, B = p && R.endOnTick, Z = [], Y;
          if (this.tickmarkOffset = this.categories && R.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.single = this.min === this.max && A(this.min) && !this.tickAmount && (this.min % 1 == 0 || R.allowDecimals !== !1), P)
            Z = P.slice();
          else if (c(this.min) && c(this.max)) {
            if (!((ne = this.ordinal) != null && ne.positions) && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))
              Z = [this.min, this.max], H(19, !1, this.chart);
            else if (this.dateTime)
              Z = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, R.units), this.min, this.max, R.startOfWeek, (V = this.ordinal) == null ? void 0 : V.positions, this.closestPointRange, !0);
            else if (this.logarithmic)
              Z = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
            else {
              let $ = this.tickInterval, ee = $;
              for (; ee <= 2 * $ && (Z = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && Z.length > this.tickAmount); )
                this.tickInterval = U(this, ee *= 1.1);
            }
            Z.length > this.len && (Z = [Z[0], Z[Z.length - 1]])[0] === Z[1] && (Z.length = 1), W && (this.tickPositions = Z, (Y = W.apply(this, [this.min, this.max])) && (Z = Y));
          }
          this.tickPositions = Z, this.minorTickInterval = q === "auto" && this.tickInterval ? this.tickInterval / R.minorTicksPerMajor : q, this.paddedTicks = Z.slice(0), this.trimTicks(Z, j, B), !this.isLinked && c(this.min) && c(this.max) && (this.single && Z.length < 2 && !this.categories && !this.series.some(($) => $.is("heatmap") && $.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), P || Y || this.adjustTickAmount()), E(this, "afterSetTickPositions");
        }
        trimTicks(R, P, W) {
          let q = R[0], p = R[R.length - 1], j = !this.isOrdinal && this.minPointOffset || 0;
          if (E(this, "trimTicks"), !this.isLinked) {
            if (P && q !== -1 / 0)
              this.min = q;
            else
              for (; this.min - j > R[0]; )
                R.shift();
            if (W)
              this.max = p;
            else
              for (; this.max + j < R[R.length - 1]; )
                R.pop();
            R.length === 0 && A(q) && !this.options.tickPositions && R.push((p + q) / 2);
          }
        }
        alignToOthers() {
          let R, P = this, W = P.chart, q = [this], p = P.options, j = W.options.chart, B = this.coll === "yAxis" && j.alignThresholds, Z = [];
          if (P.thresholdAlignment = void 0, (j.alignTicks !== !1 && p.alignTicks || B) && p.startOnTick !== !1 && p.endOnTick !== !1 && !P.logarithmic) {
            let Y = (V) => {
              let { horiz: $, options: ee } = V;
              return [$ ? ee.left : ee.top, ee.width, ee.height, ee.pane].join(",");
            }, ne = Y(this);
            W[this.coll].forEach(function(V) {
              let { series: $ } = V;
              $.length && $.some((ee) => ee.visible) && V !== P && Y(V) === ne && (R = !0, q.push(V));
            });
          }
          if (R && B) {
            q.forEach((ne) => {
              let V = ne.getThresholdAlignment(P);
              c(V) && Z.push(V);
            });
            let Y = Z.length > 1 ? Z.reduce((ne, V) => ne += V, 0) / Z.length : void 0;
            q.forEach((ne) => {
              ne.thresholdAlignment = Y;
            });
          }
          return R;
        }
        getThresholdAlignment(R) {
          if ((!c(this.dataMin) || this !== R && this.series.some((P) => P.isDirty || P.isDirtyData)) && this.getSeriesExtremes(), c(this.threshold)) {
            let P = I((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
            return this.options.reversed && (P = 1 - P), P;
          }
        }
        getTickAmount() {
          let R = this.options, P = R.tickPixelInterval, W = R.tickAmount;
          A(R.tickInterval) || W || !(this.len < P) || this.isRadial || this.logarithmic || !R.startOnTick || !R.endOnTick || (W = 2), !W && this.alignToOthers() && (W = Math.ceil(this.len / P) + 1), W < 4 && (this.finalTickAmt = W, W = 5), this.tickAmount = W;
        }
        adjustTickAmount() {
          let R = this, { finalTickAmt: P, max: W, min: q, options: p, tickPositions: j, tickAmount: B, thresholdAlignment: Z } = R, Y = j == null ? void 0 : j.length, ne = L(R.threshold, R.softThreshold ? 0 : null), V, $, ee = R.tickInterval, ue, ce = () => j.push(C(j[j.length - 1] + ee)), Q = () => j.unshift(C(j[0] - ee));
          if (c(Z) && (ue = Z < 0.5 ? Math.ceil(Z * (B - 1)) : Math.floor(Z * (B - 1)), p.reversed && (ue = B - 1 - ue)), R.hasData() && c(q) && c(W)) {
            let K = () => {
              R.transA *= (Y - 1) / (B - 1), R.min = p.startOnTick ? j[0] : Math.min(q, j[0]), R.max = p.endOnTick ? j[j.length - 1] : Math.max(W, j[j.length - 1]);
            };
            if (c(ue) && c(R.threshold)) {
              for (; j[ue] !== ne || j.length !== B || j[0] > q || j[j.length - 1] < W; ) {
                for (j.length = 0, j.push(R.threshold); j.length < B; )
                  j[ue] === void 0 || j[ue] > R.threshold ? Q() : ce();
                if (ee > 8 * R.tickInterval)
                  break;
                ee *= 2;
              }
              K();
            } else if (Y < B) {
              for (; j.length < B; )
                j.length % 2 || q === ne ? ce() : Q();
              K();
            }
            if (A(P)) {
              for ($ = V = j.length; $--; )
                (P === 3 && $ % 2 == 1 || P <= 2 && $ > 0 && $ < V - 1) && j.splice($, 1);
              R.finalTickAmt = void 0;
            }
          }
        }
        setScale() {
          var j, B;
          let { coll: R, stacking: P } = this, W = !1, q = !1;
          this.series.forEach((Z) => {
            W = W || Z.isDirtyData || Z.isDirty, q = q || Z.xAxis && Z.xAxis.isDirty || !1;
          }), this.setAxisSize();
          let p = this.len !== (this.old && this.old.len);
          p || W || q || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (P && R === "yAxis" && P.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), P && R === "xAxis" && P.buildStacks(), this.isDirty || (this.isDirty = p || this.min !== ((j = this.old) == null ? void 0 : j.min) || this.max !== ((B = this.old) == null ? void 0 : B.max))) : P && P.cleanStacks(), W && delete this.allExtremes, E(this, "afterSetScale");
        }
        setExtremes(R, P, W = !0, q, p) {
          this.series.forEach((j) => {
            delete j.kdTree;
          }), E(this, "setExtremes", p = F(p, { min: R, max: P }), (j) => {
            this.userMin = j.min, this.userMax = j.max, this.eventArgs = j, W && this.chart.redraw(q);
          });
        }
        setAxisSize() {
          let R = this.chart, P = this.options, W = P.offsets || [0, 0, 0, 0], q = this.horiz, p = this.width = Math.round(J(L(P.width, R.plotWidth - W[3] + W[1]), R.plotWidth)), j = this.height = Math.round(J(L(P.height, R.plotHeight - W[0] + W[2]), R.plotHeight)), B = this.top = Math.round(J(L(P.top, R.plotTop + W[0]), R.plotHeight, R.plotTop)), Z = this.left = Math.round(J(L(P.left, R.plotLeft + W[3]), R.plotWidth, R.plotLeft));
          this.bottom = R.chartHeight - j - B, this.right = R.chartWidth - p - Z, this.len = Math.max(q ? p : j, 0), this.pos = q ? Z : B;
        }
        getExtremes() {
          let R = this.logarithmic;
          return { min: R ? C(R.lin2log(this.min)) : this.min, max: R ? C(R.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
        }
        getThreshold(R) {
          let P = this.logarithmic, W = P ? P.lin2log(this.min) : this.min, q = P ? P.lin2log(this.max) : this.max;
          return R === null || R === -1 / 0 ? R = W : R === 1 / 0 ? R = q : W > R ? R = W : q < R && (R = q), this.translate(R, 0, 1, 0, 1);
        }
        autoLabelAlign(R) {
          let P = (L(R, 0) - 90 * this.side + 720) % 360, W = { align: "center" };
          return E(this, "autoLabelAlign", W, function(q) {
            P > 15 && P < 165 ? q.align = "right" : P > 195 && P < 345 && (q.align = "left");
          }), W.align;
        }
        tickSize(R) {
          let P = this.options, W = L(P[R === "tick" ? "tickWidth" : "minorTickWidth"], R === "tick" && this.isXAxis && !this.categories ? 1 : 0), q = P[R === "tick" ? "tickLength" : "minorTickLength"], p;
          W && q && (P[R + "Position"] === "inside" && (q = -q), p = [q, W]);
          let j = { tickSize: p };
          return E(this, "afterTickSize", j), j.tickSize;
        }
        labelMetrics() {
          let R = this.chart.renderer, P = this.ticks, W = P[Object.keys(P)[0]] || {};
          return this.chart.renderer.fontMetrics(W.label || W.movedLabel || R.box);
        }
        unsquish() {
          let R = this.options.labels, P = R.padding || 0, W = this.horiz, q = this.tickInterval, p = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / q), j = R.rotation, B = C(0.8 * this.labelMetrics().h), Z = Math.max(this.max - this.min, 0), Y = function(ue) {
            let ce = (ue + 2 * P) / (p || 1);
            return (ce = ce > 1 ? Math.ceil(ce) : 1) * q > Z && ue !== 1 / 0 && p !== 1 / 0 && Z && (ce = Math.ceil(Z / q)), C(ce * q);
          }, ne = q, V, $ = Number.MAX_VALUE, ee;
          if (W) {
            if (!R.staggerLines && (c(j) ? ee = [j] : p < R.autoRotationLimit && (ee = R.autoRotation)), ee) {
              let ue, ce;
              for (let Q of ee)
                (Q === j || Q && Q >= -90 && Q <= 90) && (ce = (ue = Y(Math.abs(B / Math.sin(y * Q)))) + Math.abs(Q / 360)) < $ && ($ = ce, V = Q, ne = ue);
            }
          } else
            ne = Y(0.75 * B);
          return this.autoRotation = ee, this.labelRotation = L(V, c(j) ? j : 0), R.step ? q : ne;
        }
        getSlotWidth(R) {
          let P = this.chart, W = this.horiz, q = this.options.labels, p = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), j = P.margin[3];
          if (R && c(R.slotWidth))
            return R.slotWidth;
          if (W && q.step < 2)
            return q.rotation ? 0 : (this.staggerLines || 1) * this.len / p;
          if (!W) {
            let B = q.style.width;
            if (B !== void 0)
              return parseInt(String(B), 10);
            if (j)
              return j - P.spacing[3];
          }
          return 0.33 * P.chartWidth;
        }
        renderUnsquish() {
          let R = this.chart, P = R.renderer, W = this.tickPositions, q = this.ticks, p = this.options.labels, j = p.style, B = this.horiz, Z = this.getSlotWidth(), Y = Math.max(1, Math.round(Z - (B ? 2 * (p.padding || 0) : p.distance || 0))), ne = {}, V = this.labelMetrics(), $ = j.textOverflow, ee, ue, ce = 0, Q, K;
          if (w(p.rotation) || (ne.rotation = p.rotation || 0), W.forEach(function(ie) {
            let ae = q[ie];
            ae.movedLabel && ae.replaceMovedLabel(), ae && ae.label && ae.label.textPxLength > ce && (ce = ae.label.textPxLength);
          }), this.maxLabelLength = ce, this.autoRotation)
            ce > Y && ce > V.h ? ne.rotation = this.labelRotation : this.labelRotation = 0;
          else if (Z && (ee = Y, !$))
            for (ue = "clip", K = W.length; !B && K--; )
              (Q = q[W[K]].label) && (Q.styles.textOverflow === "ellipsis" ? Q.css({ textOverflow: "clip" }) : Q.textPxLength > Z && Q.css({ width: Z + "px" }), Q.getBBox().height > this.len / W.length - (V.h - V.f) && (Q.specificTextOverflow = "ellipsis"));
          ne.rotation && (ee = ce > 0.5 * R.chartHeight ? 0.33 * R.chartHeight : ce, $ || (ue = "ellipsis")), this.labelAlign = p.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (ne.align = this.labelAlign), W.forEach(function(ie) {
            let ae = q[ie], de = ae && ae.label, he = j.width, fe = {};
            de && (de.attr(ne), ae.shortenLabel ? ae.shortenLabel() : ee && !he && j.whiteSpace !== "nowrap" && (ee < de.textPxLength || de.element.tagName === "SPAN") ? (fe.width = ee + "px", $ || (fe.textOverflow = de.specificTextOverflow || ue), de.css(fe)) : !de.styles.width || fe.width || he || de.css({ width: null }), delete de.specificTextOverflow, ae.rotation = ne.rotation);
          }, this), this.tickRotCorr = P.rotCorr(V.b, this.labelRotation || 0, this.side !== 0);
        }
        hasData() {
          return this.series.some(function(R) {
            return R.hasData();
          }) || this.options.showEmpty && A(this.min) && A(this.max);
        }
        addTitle(R) {
          let P, W = this.chart.renderer, q = this.horiz, p = this.opposite, j = this.options.title, B = this.chart.styledMode;
          this.axisTitle || ((P = j.textAlign) || (P = (q ? { low: "left", middle: "center", high: "right" } : { low: p ? "right" : "left", middle: "center", high: p ? "left" : "right" })[j.align]), this.axisTitle = W.text(j.text || "", 0, 0, j.useHTML).attr({ zIndex: 7, rotation: j.rotation || 0, align: P }).addClass("highcharts-axis-title"), B || this.axisTitle.css(T(j.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), B || j.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[R ? "show" : "hide"](R);
        }
        generateTick(R) {
          let P = this.ticks;
          P[R] ? P[R].addLabel() : P[R] = new m(this, R);
        }
        createGroups() {
          let { axisParent: R, chart: P, coll: W, options: q } = this, p = P.renderer, j = (B, Z, Y) => p.g(B).attr({ zIndex: Y }).addClass(`highcharts-${W.toLowerCase()}${Z} ` + (this.isRadial ? `highcharts-radial-axis${Z} ` : "") + (q.className || "")).add(R);
          this.axisGroup || (this.gridGroup = j("grid", "-grid", q.gridZIndex), this.axisGroup = j("axis", "", q.zIndex), this.labelGroup = j("axis-labels", "-labels", q.labels.zIndex));
        }
        getOffset() {
          let R = this, { chart: P, horiz: W, options: q, side: p, ticks: j, tickPositions: B, coll: Z } = R, Y = P.inverted && !R.isZAxis ? [1, 0, 3, 2][p] : p, ne = R.hasData(), V = q.title, $ = q.labels, ee = c(q.crossing), ue = P.axisOffset, ce = P.clipOffset, Q = [-1, 1, 1, -1][p], K, ie = 0, ae, de = 0, he = 0, fe, ge;
          if (R.showAxis = K = ne || q.showEmpty, R.staggerLines = R.horiz && $.staggerLines || void 0, R.createGroups(), ne || R.isLinked ? (B.forEach(function(me) {
            R.generateTick(me);
          }), R.renderUnsquish(), R.reserveSpaceDefault = p === 0 || p === 2 || { 1: "left", 3: "right" }[p] === R.labelAlign, L($.reserveSpace, !ee && null, R.labelAlign === "center" || null, R.reserveSpaceDefault) && B.forEach(function(me) {
            he = Math.max(j[me].getLabelSize(), he);
          }), R.staggerLines && (he *= R.staggerLines), R.labelOffset = he * (R.opposite ? -1 : 1)) : G(j, function(me, be) {
            me.destroy(), delete j[be];
          }), V != null && V.text && V.enabled !== !1 && (R.addTitle(K), K && !ee && V.reserveSpace !== !1 && (R.titleOffset = ie = R.axisTitle.getBBox()[W ? "height" : "width"], de = A(ae = V.offset) ? 0 : L(V.margin, W ? 5 : 10))), R.renderLine(), R.offset = Q * L(q.offset, ue[p] ? ue[p] + (q.margin || 0) : 0), R.tickRotCorr = R.tickRotCorr || { x: 0, y: 0 }, ge = p === 0 ? -R.labelMetrics().h : p === 2 ? R.tickRotCorr.y : 0, fe = Math.abs(he) + de, he && (fe -= ge, fe += Q * (W ? L($.y, R.tickRotCorr.y + Q * $.distance) : L($.x, Q * $.distance))), R.axisTitleMargin = L(ae, fe), R.getMaxLabelDimensions && (R.maxLabelDimensions = R.getMaxLabelDimensions(j, B)), Z !== "colorAxis" && ce) {
            let me = this.tickSize("tick");
            ue[p] = Math.max(ue[p], (R.axisTitleMargin || 0) + ie + Q * R.offset, fe, B && B.length && me ? me[0] + Q * R.offset : 0);
            let be = !R.axisLine || q.offset ? 0 : R.axisLine.strokeWidth() / 2;
            ce[Y] = Math.max(ce[Y], be);
          }
          E(this, "afterGetOffset");
        }
        getLinePath(R) {
          let P = this.chart, W = this.opposite, q = this.offset, p = this.horiz, j = this.left + (W ? this.width : 0) + q, B = P.chartHeight - this.bottom - (W ? this.height : 0) + q;
          return W && (R *= -1), P.renderer.crispLine([["M", p ? this.left : j, p ? B : this.top], ["L", p ? P.chartWidth - this.right : j, p ? B : P.chartHeight - this.bottom]], R);
        }
        renderLine() {
          this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
        }
        getTitlePosition(R) {
          let P = this.horiz, W = this.left, q = this.top, p = this.len, j = this.options.title, B = P ? W : q, Z = this.opposite, Y = this.offset, ne = j.x, V = j.y, $ = this.chart.renderer.fontMetrics(R), ee = R ? Math.max(R.getBBox(!1, 0).height - $.h - 1, 0) : 0, ue = { low: B + (P ? 0 : p), middle: B + p / 2, high: B + (P ? p : 0) }[j.align], ce = (P ? q + this.height : W) + (P ? 1 : -1) * (Z ? -1 : 1) * (this.axisTitleMargin || 0) + [-ee, ee, $.f, -ee][this.side], Q = { x: P ? ue + ne : ce + (Z ? this.width : 0) + Y + ne, y: P ? ce + V - (Z ? this.height : 0) + Y : ue + V };
          return E(this, "afterGetTitlePosition", { titlePosition: Q }), Q;
        }
        renderMinorTick(R, P) {
          let W = this.minorTicks;
          W[R] || (W[R] = new m(this, R, "minor")), P && W[R].isNew && W[R].render(null, !0), W[R].render(null, !1, 1);
        }
        renderTick(R, P, W) {
          let q = this.isLinked, p = this.ticks;
          (!q || R >= this.min && R <= this.max || this.grid && this.grid.isColumn) && (p[R] || (p[R] = new m(this, R)), W && p[R].isNew && p[R].render(P, !0, -1), p[R].render(P));
        }
        render() {
          let R, P, W = this, q = W.chart, p = W.logarithmic, j = q.renderer, B = W.options, Z = W.isLinked, Y = W.tickPositions, ne = W.axisTitle, V = W.ticks, $ = W.minorTicks, ee = W.alternateBands, ue = B.stackLabels, ce = B.alternateGridColor, Q = B.crossing, K = W.tickmarkOffset, ie = W.axisLine, ae = W.showAxis, de = M(j.globalAnimation);
          if (W.labelEdge.length = 0, W.overlap = !1, [V, $, ee].forEach(function(he) {
            G(he, function(fe) {
              fe.isActive = !1;
            });
          }), c(Q)) {
            let he = this.isXAxis ? q.yAxis[0] : q.xAxis[0], fe = [1, -1, -1, 1][this.side];
            if (he) {
              let ge = he.toPixels(Q, !0);
              W.horiz && (ge = he.len - ge), W.offset = fe * ge;
            }
          }
          if (W.hasData() || Z) {
            let he = W.chart.hasRendered && W.old && c(W.old.min);
            W.minorTickInterval && !W.categories && W.getMinorTickPositions().forEach(function(fe) {
              W.renderMinorTick(fe, he);
            }), Y.length && (Y.forEach(function(fe, ge) {
              W.renderTick(fe, ge, he);
            }), K && (W.min === 0 || W.single) && (V[-1] || (V[-1] = new m(W, -1, null, !0)), V[-1].render(-1))), ce && Y.forEach(function(fe, ge) {
              P = Y[ge + 1] !== void 0 ? Y[ge + 1] + K : W.max - K, ge % 2 == 0 && fe < W.max && P <= W.max + (q.polar ? -K : K) && (ee[fe] || (ee[fe] = new h.PlotLineOrBand(W, {})), R = fe + K, ee[fe].options = { from: p ? p.lin2log(R) : R, to: p ? p.lin2log(P) : P, color: ce, className: "highcharts-alternate-grid" }, ee[fe].render(), ee[fe].isActive = !0);
            }), W._addedPlotLB || (W._addedPlotLB = !0, (B.plotLines || []).concat(B.plotBands || []).forEach(function(fe) {
              W.addPlotBandOrLine(fe);
            }));
          }
          [V, $, ee].forEach(function(he) {
            let fe = [], ge = de.duration;
            G(he, function(me, be) {
              me.isActive || (me.render(be, !1, 0), me.isActive = !1, fe.push(be));
            }), X(function() {
              let me = fe.length;
              for (; me--; )
                he[fe[me]] && !he[fe[me]].isActive && (he[fe[me]].destroy(), delete he[fe[me]]);
            }, he !== ee && q.hasRendered && ge ? ge : 0);
          }), ie && (ie[ie.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(ie.strokeWidth()) }), ie.isPlaced = !0, ie[ae ? "show" : "hide"](ae)), ne && ae && (ne[ne.isNew ? "attr" : "animate"](W.getTitlePosition(ne)), ne.isNew = !1), ue && ue.enabled && W.stacking && W.stacking.renderStackTotals(), W.old = { len: W.len, max: W.max, min: W.min, transA: W.transA, userMax: W.userMax, userMin: W.userMin }, W.isDirty = !1, E(this, "afterRender");
        }
        redraw() {
          this.visible && (this.render(), this.plotLinesAndBands.forEach(function(R) {
            R.render();
          })), this.series.forEach(function(R) {
            R.isDirty = !0;
          });
        }
        getKeepProps() {
          return this.keepProps || te.keepProps;
        }
        destroy(R) {
          let P = this, W = P.plotLinesAndBands, q = this.eventOptions;
          if (E(this, "destroy", { keepEvents: R }), R || se(P), [P.ticks, P.minorTicks, P.alternateBands].forEach(function(p) {
            O(p);
          }), W) {
            let p = W.length;
            for (; p--; )
              W[p].destroy();
          }
          for (let p in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(j) {
            P[j] && (P[j] = P[j].destroy());
          }), P.plotLinesAndBandsGroups)
            P.plotLinesAndBandsGroups[p] = P.plotLinesAndBandsGroups[p].destroy();
          G(P, function(p, j) {
            P.getKeepProps().indexOf(j) === -1 && delete P[j];
          }), this.eventOptions = q;
        }
        drawCrosshair(R, P) {
          let W = this.crosshair, q = L(W && W.snap, !0), p = this.chart, j, B, Z, Y = this.cross, ne;
          if (E(this, "drawCrosshair", { e: R, point: P }), R || (R = this.cross && this.cross.e), W && (A(P) || !q) !== !1) {
            if (q ? A(P) && (B = L(this.coll !== "colorAxis" ? P.crosshairPos : null, this.isXAxis ? P.plotX : this.len - P.plotY)) : B = R && (this.horiz ? R.chartX - this.pos : this.len - R.chartY + this.pos), A(B) && (ne = { value: P && (this.isXAxis ? P.x : L(P.stackY, P.y)), translatedValue: B }, p.polar && F(ne, { isCrosshair: !0, chartX: R && R.chartX, chartY: R && R.chartY, point: P }), j = this.getPlotLinePath(ne) || null), !A(j)) {
              this.hideCrosshair();
              return;
            }
            Z = this.categories && !this.isRadial, Y || (this.cross = Y = p.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (Z ? "category " : "thin ") + (W.className || "")).attr({ zIndex: L(W.zIndex, 2) }).add(), !p.styledMode && (Y.attr({ stroke: W.color || (Z ? o.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": L(W.width, 1) }).css({ "pointer-events": "none" }), W.dashStyle && Y.attr({ dashstyle: W.dashStyle }))), Y.show().attr({ d: j }), Z && !W.width && Y.attr({ "stroke-width": this.transA }), this.cross.e = R;
          } else
            this.hideCrosshair();
          E(this, "afterDrawCrosshair", { e: R, point: P });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), E(this, "afterHideCrosshair");
        }
        update(R, P) {
          let W = this.chart;
          R = T(this.userOptions, R), this.destroy(!0), this.init(W, R), W.isDirtyBox = !0, L(P, !0) && W.redraw();
        }
        remove(R) {
          let P = this.chart, W = this.coll, q = this.series, p = q.length;
          for (; p--; )
            q[p] && q[p].remove(!1);
          z(P.axes, this), z(P[W] || [], this), P.orderItems(W), this.destroy(), P.isDirtyBox = !0, L(R, !0) && P.redraw();
        }
        setTitle(R, P) {
          this.update({ title: R }, P);
        }
        setCategories(R, P) {
          this.update({ categories: R }, P);
        }
      }
      return te.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"], te;
    }), n(i, "Core/Axis/DateTimeAxis.js", [i["Core/Utilities.js"]], function(r) {
      var s;
      let { addEvent: o, getMagnitude: a, normalizeTickInterval: l, timeUnits: h } = r;
      return function(m) {
        function g() {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        }
        function M() {
          if (this.type !== "datetime") {
            this.dateTime = void 0;
            return;
          }
          this.dateTime || (this.dateTime = new N(this));
        }
        m.compose = function(f) {
          return f.keepProps.includes("dateTime") || (f.keepProps.push("dateTime"), f.prototype.getTimeTicks = g, o(f, "afterSetType", M)), f;
        };
        class N {
          constructor(b) {
            this.axis = b;
          }
          normalizeTimeTickInterval(b, S) {
            let y = S || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = y[y.length - 1], x = h[d[0]], I = d[1], C;
            for (C = 0; C < y.length && (x = h[(d = y[C])[0]], I = d[1], !y[C + 1] || !(b <= (x * I[I.length - 1] + h[y[C + 1][0]]) / 2)); C++)
              ;
            x === h.year && b < 5 * x && (I = [1, 2, 5]);
            let A = l(b / x, I, d[0] === "year" ? Math.max(a(b / x), 1) : 1);
            return { unitRange: x, count: A, unitName: d[0] };
          }
          getXDateFormat(b, S) {
            let { axis: y } = this, d = y.chart.time;
            return y.closestPointRange ? d.getDateFormat(y.closestPointRange, b, y.options.startOfWeek, S) || d.resolveDTLFormat(S.year).main : d.resolveDTLFormat(S.day).main;
          }
        }
        m.Additions = N;
      }(s || (s = {})), s;
    }), n(i, "Core/Axis/LogarithmicAxis.js", [i["Core/Utilities.js"]], function(r) {
      var s;
      let { addEvent: o, normalizeTickInterval: a, pick: l } = r;
      return function(h) {
        function m() {
          this.type !== "logarithmic" ? this.logarithmic = void 0 : this.logarithmic ?? (this.logarithmic = new M(this));
        }
        function g() {
          let N = this.logarithmic;
          N && (this.lin2val = function(f) {
            return N.lin2log(f);
          }, this.val2lin = function(f) {
            return N.log2lin(f);
          });
        }
        h.compose = function(N) {
          return N.keepProps.includes("logarithmic") || (N.keepProps.push("logarithmic"), o(N, "afterSetType", m), o(N, "afterInit", g)), N;
        };
        class M {
          constructor(f) {
            this.axis = f;
          }
          getLogTickPositions(f, b, S, y) {
            let d = this.axis, x = d.len, I = d.options, C = [];
            if (y || (this.minorAutoInterval = void 0), f >= 0.5)
              f = Math.round(f), C = d.getLinearTickPositions(f, b, S);
            else if (f >= 0.08) {
              let A, O, z, H, F, E, k, v = Math.floor(b);
              for (A = f > 0.3 ? [1, 2, 4] : f > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], O = v; O < S + 1 && !k; O++)
                for (z = 0, H = A.length; z < H && !k; z++)
                  (F = this.log2lin(this.lin2log(O) * A[z])) > b && (!y || E <= S) && E !== void 0 && C.push(E), E > S && (k = !0), E = F;
            } else {
              let A = this.lin2log(b), O = this.lin2log(S), z = y ? d.getMinorTickInterval() : I.tickInterval, H = I.tickPixelInterval / (y ? 5 : 1), F = y ? x / d.tickPositions.length : x;
              f = a(f = l(z === "auto" ? null : z, this.minorAutoInterval, (O - A) * H / (F || 1))), C = d.getLinearTickPositions(f, A, O).map(this.log2lin), y || (this.minorAutoInterval = f / 5);
            }
            return y || (d.tickInterval = f), C;
          }
          lin2log(f) {
            return Math.pow(10, f);
          }
          log2lin(f) {
            return Math.log(f) / Math.LN10;
          }
        }
        h.Additions = M;
      }(s || (s = {})), s;
    }), n(i, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [i["Core/Utilities.js"]], function(r) {
      var s;
      let { erase: o, extend: a, isNumber: l } = r;
      return function(h) {
        let m;
        function g(d) {
          return this.addPlotBandOrLine(d, "plotBands");
        }
        function M(d, x) {
          let I = this.userOptions, C = new m(this, d);
          if (this.visible && (C = C.render()), C) {
            if (this._addedPlotLB || (this._addedPlotLB = !0, (I.plotLines || []).concat(I.plotBands || []).forEach((A) => {
              this.addPlotBandOrLine(A);
            })), x) {
              let A = I[x] || [];
              A.push(d), I[x] = A;
            }
            this.plotLinesAndBands.push(C);
          }
          return C;
        }
        function N(d) {
          return this.addPlotBandOrLine(d, "plotLines");
        }
        function f(d, x, I) {
          I = I || this.options;
          let C = this.getPlotLinePath({ value: x, force: !0, acrossPanes: I.acrossPanes }), A = [], O = this.horiz, z = !l(this.min) || !l(this.max) || d < this.min && x < this.min || d > this.max && x > this.max, H = this.getPlotLinePath({ value: d, force: !0, acrossPanes: I.acrossPanes }), F, E = 1, k;
          if (H && C)
            for (z && (k = H.toString() === C.toString(), E = 0), F = 0; F < H.length; F += 2) {
              let v = H[F], u = H[F + 1], c = C[F], w = C[F + 1];
              (v[0] === "M" || v[0] === "L") && (u[0] === "M" || u[0] === "L") && (c[0] === "M" || c[0] === "L") && (w[0] === "M" || w[0] === "L") && (O && c[1] === v[1] ? (c[1] += E, w[1] += E) : O || c[2] !== v[2] || (c[2] += E, w[2] += E), A.push(["M", v[1], v[2]], ["L", u[1], u[2]], ["L", w[1], w[2]], ["L", c[1], c[2]], ["Z"])), A.isFlat = k;
            }
          return A;
        }
        function b(d) {
          this.removePlotBandOrLine(d);
        }
        function S(d) {
          let x = this.plotLinesAndBands, I = this.options, C = this.userOptions;
          if (x) {
            let A = x.length;
            for (; A--; )
              x[A].id === d && x[A].destroy();
            [I.plotLines || [], C.plotLines || [], I.plotBands || [], C.plotBands || []].forEach(function(O) {
              for (A = O.length; A--; )
                (O[A] || {}).id === d && o(O, O[A]);
            });
          }
        }
        function y(d) {
          this.removePlotBandOrLine(d);
        }
        h.compose = function(d, x) {
          let I = x.prototype;
          return I.addPlotBand || (m = d, a(I, { addPlotBand: g, addPlotLine: N, addPlotBandOrLine: M, getPlotBandPath: f, removePlotBand: b, removePlotLine: y, removePlotBandOrLine: S })), x;
        };
      }(s || (s = {})), s;
    }), n(i, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [i["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], i["Core/Utilities.js"]], function(r, s) {
      let { addEvent: o, arrayMax: a, arrayMin: l, defined: h, destroyObjectProperties: m, erase: g, fireEvent: M, merge: N, objectEach: f, pick: b } = s;
      class S {
        static compose(d, x) {
          return o(d, "afterInit", function() {
            this.labelCollectors.push(() => {
              var C;
              let I = [];
              for (let A of this.axes)
                for (let { label: O, options: z } of A.plotLinesAndBands)
                  O && !((C = z == null ? void 0 : z.label) != null && C.allowOverlap) && I.push(O);
              return I;
            });
          }), r.compose(S, x);
        }
        constructor(d, x) {
          this.axis = d, this.options = x, this.id = x.id;
        }
        render() {
          M(this, "render");
          let { axis: d, options: x } = this, { horiz: I, logarithmic: C } = d, { color: A, events: O, zIndex: z = 0 } = x, H = {}, F = d.chart.renderer, E = x.to, k = x.from, v = x.value, u = x.borderWidth, c = x.label, { label: w, svgElem: T } = this, D = [], G, L = h(k) && h(E), J = h(v), se = !T, _ = { class: "highcharts-plot-" + (L ? "band " : "line ") + (x.className || "") }, X = L ? "bands" : "lines";
          if (!d.chart.styledMode && (J ? (_.stroke = A || "#999999", _["stroke-width"] = b(x.width, 1), x.dashStyle && (_.dashstyle = x.dashStyle)) : L && (_.fill = A || "#e6e9ff", u && (_.stroke = x.borderColor, _["stroke-width"] = u))), H.zIndex = z, X += "-" + z, (G = d.plotLinesAndBandsGroups[X]) || (d.plotLinesAndBandsGroups[X] = G = F.g("plot-" + X).attr(H).add()), T || (this.svgElem = T = F.path().attr(_).add(G)), h(v))
            D = d.getPlotLinePath({ value: (C == null ? void 0 : C.log2lin(v)) ?? v, lineWidth: T.strokeWidth(), acrossPanes: x.acrossPanes });
          else {
            if (!(h(k) && h(E)))
              return;
            D = d.getPlotBandPath((C == null ? void 0 : C.log2lin(k)) ?? k, (C == null ? void 0 : C.log2lin(E)) ?? E, x);
          }
          return !this.eventsAdded && O && (f(O, (U, te) => {
            T == null || T.on(te, (le) => {
              O[te].apply(this, [le]);
            });
          }), this.eventsAdded = !0), (se || !T.d) && (D != null && D.length) ? T.attr({ d: D }) : T && (D ? (T.show(), T.animate({ d: D })) : T.d && (T.hide(), w && (this.label = w = w.destroy()))), c && (h(c.text) || h(c.formatter)) && (D != null && D.length) && d.width > 0 && d.height > 0 && !D.isFlat ? (c = N({ align: I && L ? "center" : void 0, x: I ? !L && 4 : 10, verticalAlign: !I && L ? "middle" : void 0, y: I ? L ? 16 : 10 : L ? 6 : -4, rotation: I && !L ? 90 : 0, ...L ? { inside: !0 } : {} }, c), this.renderLabel(c, D, L, z)) : w && w.hide(), this;
        }
        renderLabel(d, x, I, C) {
          var c;
          let A = this.axis, O = A.chart.renderer, z = d.inside, H = this.label;
          H || (this.label = H = O.text(this.getLabelText(d), 0, 0, d.useHTML).attr({ align: d.textAlign || d.align, rotation: d.rotation, class: "highcharts-plot-" + (I ? "band" : "line") + "-label " + (d.className || ""), zIndex: C }), A.chart.styledMode || H.css(N({ fontSize: "0.8em", textOverflow: I && !z ? "" : "ellipsis" }, d.style)), H.add());
          let F = x.xBounds || [x[0][1], x[1][1], I ? x[2][1] : x[0][1]], E = x.yBounds || [x[0][2], x[1][2], I ? x[2][2] : x[0][2]], k = l(F), v = l(E), u = a(F) - k;
          H.align(d, !1, { x: k, y: v, width: u, height: a(E) - v }), (!H.alignValue || H.alignValue === "left" || h(z)) && H.css({ width: (((c = d.style) == null ? void 0 : c.width) || (I && z ? u : H.rotation === 90 ? A.height - (H.alignAttr.y - A.top) : (d.clip ? A.width : A.chart.chartWidth) - (H.alignAttr.x - A.left))) + "px" }), H.show(!0);
        }
        getLabelText(d) {
          return h(d.formatter) ? d.formatter.call(this) : d.text;
        }
        destroy() {
          g(this.axis.plotLinesAndBands, this), delete this.axis, m(this);
        }
      }
      return S;
    }), n(i, "Core/Tooltip.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Templating.js"], i["Core/Globals.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Utilities.js"]], function(r, s, o, a, l, h) {
      var m;
      let { animObject: g } = r, { format: M } = s, { composed: N, doc: f, isSafari: b } = o, { distribute: S } = a, { addEvent: y, clamp: d, css: x, discardElement: I, extend: C, fireEvent: A, isArray: O, isNumber: z, isString: H, merge: F, pick: E, pushUnique: k, splat: v, syncTimeout: u } = h;
      class c {
        constructor(T, D, G) {
          this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = T, this.init(T, D), this.pointer = G;
        }
        bodyFormatter(T) {
          return T.map(function(D) {
            let G = D.series.tooltipOptions;
            return (G[(D.point.formatPrefix || "point") + "Formatter"] || D.point.tooltipFormatter).call(D.point, G[(D.point.formatPrefix || "point") + "Format"] || "");
          });
        }
        cleanSplit(T) {
          this.chart.series.forEach(function(D) {
            let G = D && D.tt;
            G && (!G.isActive || T ? D.tt = G.destroy() : G.isActive = !1);
          });
        }
        defaultFormatter(T) {
          let D, G = this.points || v(this);
          return (D = (D = [T.tooltipFooterHeaderFormatter(G[0])]).concat(T.bodyFormatter(G))).push(T.tooltipFooterHeaderFormatter(G[0], !0)), D;
        }
        destroy() {
          this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), I(this.container)), h.clearTimeout(this.hideTimer);
        }
        getAnchor(T, D) {
          let G, { chart: L, pointer: J } = this, se = L.inverted, _ = L.plotTop, X = L.plotLeft;
          if ((T = v(T))[0].series && T[0].series.yAxis && !T[0].series.yAxis.options.reversedStacks && (T = T.slice().reverse()), this.followPointer && D)
            D.chartX === void 0 && (D = J.normalize(D)), G = [D.chartX - X, D.chartY - _];
          else if (T[0].tooltipPos)
            G = T[0].tooltipPos;
          else {
            let U = 0, te = 0;
            T.forEach(function(le) {
              let R = le.pos(!0);
              R && (U += R[0], te += R[1]);
            }), U /= T.length, te /= T.length, this.shared && T.length > 1 && D && (se ? U = D.chartX : te = D.chartY), G = [U - X, te - _];
          }
          return G.map(Math.round);
        }
        getClassName(T, D, G) {
          let L = this.options, J = T.series, se = J.options;
          return [L.className, "highcharts-label", G && "highcharts-tooltip-header", D ? "highcharts-tooltip-box" : "highcharts-tooltip", !G && "highcharts-color-" + E(T.colorIndex, J.colorIndex), se && se.className].filter(H).join(" ");
        }
        getLabel({ anchorX: T, anchorY: D } = { anchorX: 0, anchorY: 0 }) {
          let G = this, L = this.chart.styledMode, J = this.options, se = this.split && this.allowShared, _ = this.container, X = this.chart.renderer;
          if (this.label) {
            let U = !this.label.hasClass("highcharts-label");
            (!se && U || se && !U) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              let U = this.chart.options.chart.style, te = l.getRendererType();
              this.container = _ = o.doc.createElement("div"), _.className = "highcharts-tooltip-container", x(_, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (U && U.zIndex || 0) + 3) }), this.renderer = X = new te(_, 0, 0, U, void 0, void 0, X.styledMode);
            }
            if (se ? this.label = X.g("tooltip") : (this.label = X.label("", T, D, J.shape, void 0, void 0, J.useHTML, void 0, "tooltip").attr({ padding: J.padding, r: J.borderRadius }), L || this.label.attr({ fill: J.backgroundColor, "stroke-width": J.borderWidth || 0 }).css(J.style).css({ pointerEvents: J.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), G.outside) {
              let U = this.label;
              [U.xSetter, U.ySetter].forEach((te, le) => {
                U[le ? "ySetter" : "xSetter"] = (R) => {
                  te.call(U, G.distance), U[le ? "y" : "x"] = R, _ && (_.style[le ? "top" : "left"] = `${R}px`);
                };
              });
            }
            this.label.attr({ zIndex: 8 }).shadow(J.shadow).add();
          }
          return _ && !_.parentElement && o.doc.body.appendChild(_), this.label;
        }
        getPlayingField() {
          let { body: T, documentElement: D } = f, { chart: G, distance: L, outside: J } = this;
          return { width: J ? Math.max(T.scrollWidth, D.scrollWidth, T.offsetWidth, D.offsetWidth, D.clientWidth) - 2 * L : G.chartWidth, height: J ? Math.max(T.scrollHeight, D.scrollHeight, T.offsetHeight, D.offsetHeight, D.clientHeight) : G.chartHeight };
        }
        getPosition(T, D, G) {
          var de, he;
          let { distance: L, chart: J, outside: se, pointer: _ } = this, { inverted: X, plotLeft: U, plotTop: te, polar: le } = J, { plotX: R = 0, plotY: P = 0 } = G, W = {}, q = X && G.h || 0, { height: p, width: j } = this.getPlayingField(), B = _.getChartPosition(), Z = (fe) => fe * B.scaleX, Y = (fe) => fe * B.scaleY, ne = (fe) => {
            let ge = fe === "x";
            return [fe, ge ? j : p, ge ? T : D].concat(se ? [ge ? Z(T) : Y(D), ge ? B.left - L + Z(R + U) : B.top - L + Y(P + te), 0, ge ? j : p] : [ge ? T : D, ge ? R + U : P + te, ge ? U : te, ge ? U + J.plotWidth : te + J.plotHeight]);
          }, V = ne("y"), $ = ne("x"), ee, ue = !!G.negative;
          !le && ((he = (de = J.hoverSeries) == null ? void 0 : de.yAxis) != null && he.reversed) && (ue = !ue);
          let ce = !this.followPointer && E(G.ttBelow, !le && !X === ue), Q = function(fe, ge, me, be, ve, ye, we) {
            let Ae = se ? fe === "y" ? Y(L) : Z(L) : L, Se = (me - be) / 2, xe = be < ve - L, Oe = ve + L + be < ge, Pe = ve - Ae - me + Se, Ne = ve + Ae - Se;
            if (ce && Oe)
              W[fe] = Ne;
            else if (!ce && xe)
              W[fe] = Pe;
            else if (xe)
              W[fe] = Math.min(we - be, Pe - q < 0 ? Pe : Pe - q);
            else {
              if (!Oe)
                return !1;
              W[fe] = Math.max(ye, Ne + q + me > ge ? Ne : Ne + q);
            }
          }, K = function(fe, ge, me, be, ve) {
            if (ve < L || ve > ge - L)
              return !1;
            ve < me / 2 ? W[fe] = 1 : ve > ge - be / 2 ? W[fe] = ge - be - 2 : W[fe] = ve - me / 2;
          }, ie = function(fe) {
            [V, $] = [$, V], ee = fe;
          }, ae = () => {
            Q.apply(0, V) !== !1 ? K.apply(0, $) !== !1 || ee || (ie(!0), ae()) : ee ? W.x = W.y = 0 : (ie(!0), ae());
          };
          return (X && !le || this.len > 1) && ie(), ae(), W;
        }
        hide(T) {
          let D = this;
          h.clearTimeout(this.hideTimer), T = E(T, this.options.hideDelay), this.isHidden || (this.hideTimer = u(function() {
            let G = D.getLabel();
            D.getLabel().animate({ opacity: 0 }, { duration: T && 150, complete: () => {
              G.hide(), D.container && D.container.remove();
            } }), D.isHidden = !0;
          }, T));
        }
        init(T, D) {
          this.chart = T, this.options = D, this.crosshairs = [], this.isHidden = !0, this.split = D.split && !T.inverted && !T.polar, this.shared = D.shared || this.split, this.outside = E(D.outside, !!(T.scrollablePixelsX || T.scrollablePixelsY));
        }
        shouldStickOnContact(T) {
          return !!(!this.followPointer && this.options.stickOnContact && (!T || this.pointer.inClass(T.target, "highcharts-tooltip")));
        }
        move(T, D, G, L) {
          let J = this, se = g(!J.isHidden && J.options.animation), _ = J.followPointer || (J.len || 0) > 1, X = { x: T, y: D };
          _ || (X.anchorX = G, X.anchorY = L), se.step = () => J.drawTracker(), J.getLabel().animate(X, se);
        }
        refresh(T, D) {
          let { chart: G, options: L, pointer: J, shared: se } = this, _ = v(T), X = _[0], U = [], te = L.format, le = L.formatter || this.defaultFormatter, R = G.styledMode, P = {}, W = this.allowShared;
          if (!L.enabled || !X.series)
            return;
          h.clearTimeout(this.hideTimer), this.allowShared = !(!O(T) && T.series && T.series.noSharedTooltip), W = W && !this.allowShared, this.followPointer = !this.split && X.series.tooltipOptions.followPointer;
          let q = this.getAnchor(T, D), p = q[0], j = q[1];
          se && this.allowShared ? (J.applyInactiveState(_), _.forEach(function(Y) {
            Y.setState("hover"), U.push(Y.getLabelConfig());
          }), (P = X.getLabelConfig()).points = U) : P = X.getLabelConfig(), this.len = U.length;
          let B = H(te) ? M(te, P, G) : le.call(P, this), Z = X.series;
          if (this.distance = E(Z.tooltipOptions.distance, 16), B === !1)
            this.hide();
          else {
            if (this.split && this.allowShared)
              this.renderSplit(B, _);
            else {
              let Y = p, ne = j;
              if (D && J.isDirectTouch && (Y = D.chartX - G.plotLeft, ne = D.chartY - G.plotTop), G.polar || Z.options.clip === !1 || _.some((V) => J.isDirectTouch || V.series.shouldShowTooltip(Y, ne))) {
                let V = this.getLabel(W && this.tt || {});
                (!L.style.width || R) && V.css({ width: (this.outside ? this.getPlayingField() : G.spacingBox).width + "px" }), V.attr({ class: this.getClassName(X), text: B && B.join ? B.join("") : B }), this.outside && V.attr({ x: d(V.x || 0, 0, this.getPlayingField().width - (V.width || 0)) }), R || V.attr({ stroke: L.borderColor || X.color || Z.color || "#666666" }), this.updatePosition({ plotX: p, plotY: j, negative: X.negative, ttBelow: X.ttBelow, h: q[2] || 0 });
              } else {
                this.hide();
                return;
              }
            }
            this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
          }
          A(this, "refresh");
        }
        renderSplit(T, D) {
          var ge;
          let G = this, { chart: L, chart: { chartWidth: J, chartHeight: se, plotHeight: _, plotLeft: X, plotTop: U, scrollablePixelsY: te = 0, scrollablePixelsX: le, styledMode: R }, distance: P, options: W, options: { positioner: q }, pointer: p } = G, { scrollLeft: j = 0, scrollTop: B = 0 } = ((ge = L.scrollablePlotArea) == null ? void 0 : ge.scrollingContainer) || {}, Z = G.outside && typeof le != "number" ? f.documentElement.getBoundingClientRect() : { left: j, right: j + J, top: B, bottom: B + se }, Y = G.getLabel(), ne = this.renderer || L.renderer, V = !!(L.xAxis[0] && L.xAxis[0].opposite), { left: $, top: ee } = p.getChartPosition(), ue = U + B, ce = 0, Q = _ - te;
          function K(me, be, ve, ye, we = !0) {
            let Ae, Se;
            return ve ? (Ae = V ? 0 : Q, Se = d(me - ye / 2, Z.left, Z.right - ye - (G.outside ? $ : 0))) : (Ae = be - ue, Se = d(Se = we ? me - ye - P : me + P, we ? Se : Z.left, Z.right)), { x: Se, y: Ae };
          }
          H(T) && (T = [!1, T]);
          let ie = T.slice(0, D.length + 1).reduce(function(me, be, ve) {
            if (be !== !1 && be !== "") {
              let ye = D[ve - 1] || { isHeader: !0, plotX: D[0].plotX, plotY: _, series: {} }, we = ye.isHeader, Ae = we ? G : ye.series, Se = Ae.tt = function(Ke, Ue, ft) {
                let ct = Ke, { isHeader: bt, series: Qt } = Ue;
                if (!ct) {
                  let Lt = { padding: W.padding, r: W.borderRadius };
                  R || (Lt.fill = W.backgroundColor, Lt["stroke-width"] = W.borderWidth ?? 1), ct = ne.label("", 0, 0, W[bt ? "headerShape" : "shape"], void 0, void 0, W.useHTML).addClass(G.getClassName(Ue, !0, bt)).attr(Lt).add(Y);
                }
                return ct.isActive = !0, ct.attr({ text: ft }), R || ct.css(W.style).attr({ stroke: W.borderColor || Ue.color || Qt.color || "#333333" }), ct;
              }(Ae.tt, ye, be.toString()), xe = Se.getBBox(), Oe = xe.width + Se.strokeWidth();
              we && (ce = xe.height, Q += ce, V && (ue -= ce));
              let { anchorX: Pe, anchorY: Ne } = function(Ke) {
                let Ue, ft, { isHeader: ct, plotX: bt = 0, plotY: Qt = 0, series: Lt } = Ke;
                if (ct)
                  Ue = Math.max(X + bt, X), ft = U + _ / 2;
                else {
                  let { xAxis: yi, yAxis: vt } = Lt;
                  Ue = yi.pos + d(bt, -P, yi.len + P), Lt.shouldShowTooltip(0, vt.pos - U + Qt, { ignoreX: !0 }) && (ft = vt.pos + Qt);
                }
                return { anchorX: Ue = d(Ue, Z.left - P, Z.right + P), anchorY: ft };
              }(ye);
              if (typeof Ne == "number") {
                let Ke = xe.height + 1, Ue = q ? q.call(G, Oe, Ke, ye) : K(Pe, Ne, we, Oe);
                me.push({ align: q ? 0 : void 0, anchorX: Pe, anchorY: Ne, boxWidth: Oe, point: ye, rank: E(Ue.rank, we ? 1 : 0), size: Ke, target: Ue.y, tt: Se, x: Ue.x });
              } else
                Se.isActive = !1;
            }
            return me;
          }, []);
          !q && ie.some((me) => {
            let { outside: be } = G, ve = (be ? $ : 0) + me.anchorX;
            return ve < Z.left && ve + me.boxWidth < Z.right || ve < $ - Z.left + me.boxWidth && Z.right - ve > ve;
          }) && (ie = ie.map((me) => {
            let { x: be, y: ve } = K(me.anchorX, me.anchorY, me.point.isHeader, me.boxWidth, !1);
            return C(me, { target: ve, x: be });
          })), G.cleanSplit(), S(ie, Q);
          let ae = { left: $, right: $ };
          ie.forEach(function(me) {
            let { x: be, boxWidth: ve, isHeader: ye } = me;
            !ye && (G.outside && $ + be < ae.left && (ae.left = $ + be), !ye && G.outside && ae.left + ve > ae.right && (ae.right = $ + be));
          }), ie.forEach(function(me) {
            let { x: be, anchorX: ve, anchorY: ye, pos: we, point: { isHeader: Ae } } = me, Se = { visibility: we === void 0 ? "hidden" : "inherit", x: be, y: (we || 0) + ue, anchorX: ve, anchorY: ye };
            if (G.outside && be < ve) {
              let xe = $ - ae.left;
              xe > 0 && (Ae || (Se.x = be + xe, Se.anchorX = ve + xe), Ae && (Se.x = (ae.right - ae.left) / 2, Se.anchorX = ve + xe));
            }
            me.tt.attr(Se);
          });
          let { container: de, outside: he, renderer: fe } = G;
          if (he && de && fe) {
            let { width: me, height: be, x: ve, y: ye } = Y.getBBox();
            fe.setSize(me + ve, be + ye, !1), de.style.left = ae.left + "px", de.style.top = ee + "px";
          }
          b && Y.attr({ opacity: Y.opacity === 1 ? 0.999 : 1 });
        }
        drawTracker() {
          if (!this.shouldStickOnContact()) {
            this.tracker && (this.tracker = this.tracker.destroy());
            return;
          }
          let T = this.chart, D = this.label, G = this.shared ? T.hoverPoints : T.hoverPoint;
          if (!D || !G)
            return;
          let L = { x: 0, y: 0, width: 0, height: 0 }, J = this.getAnchor(G), se = D.getBBox();
          J[0] += T.plotLeft - (D.translateX || 0), J[1] += T.plotTop - (D.translateY || 0), L.x = Math.min(0, J[0]), L.y = Math.min(0, J[1]), L.width = J[0] < 0 ? Math.max(Math.abs(J[0]), se.width - J[0]) : Math.max(Math.abs(J[0]), se.width), L.height = J[1] < 0 ? Math.max(Math.abs(J[1]), se.height - Math.abs(J[1])) : Math.max(Math.abs(J[1]), se.height), this.tracker ? this.tracker.attr(L) : (this.tracker = D.renderer.rect(L).addClass("highcharts-tracker").add(D), T.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
        }
        styledModeFormat(T) {
          return T.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
        }
        tooltipFooterHeaderFormatter(T, D) {
          let G = T.series, L = G.tooltipOptions, J = G.xAxis, se = J && J.dateTime, _ = { isFooter: D, labelConfig: T }, X = L.xDateFormat, U = L[D ? "footerFormat" : "headerFormat"];
          return A(this, "headerFormatter", _, function(te) {
            se && !X && z(T.key) && (X = se.getXDateFormat(T.key, L.dateTimeLabelFormats)), se && X && (T.point && T.point.tooltipDateKeys || ["key"]).forEach(function(le) {
              U = U.replace("{point." + le + "}", "{point." + le + ":" + X + "}");
            }), G.chart.styledMode && (U = this.styledModeFormat(U)), te.text = M(U, { point: T, series: G }, this.chart);
          }), _.text;
        }
        update(T) {
          this.destroy(), this.init(this.chart, F(!0, this.options, T));
        }
        updatePosition(T) {
          let { chart: D, container: G, distance: L, options: J, pointer: se, renderer: _ } = this, { height: X = 0, width: U = 0 } = this.getLabel(), { left: te, top: le, scaleX: R, scaleY: P } = se.getChartPosition(), W = (J.positioner || this.getPosition).call(this, U, X, T), q = (T.plotX || 0) + D.plotLeft, p = (T.plotY || 0) + D.plotTop, j;
          _ && G && (J.positioner && (W.x += te - L, W.y += le - L), j = (J.borderWidth || 0) + 2 * L + 2, _.setSize(U + j, X + j, !1), (R !== 1 || P !== 1) && (x(G, { transform: `scale(${R}, ${P})` }), q *= R, p *= P), q += te - W.x, p += le - W.y), this.move(Math.round(W.x), Math.round(W.y || 0), q, p);
        }
      }
      return (m = c || (c = {})).compose = function(w) {
        k(N, "Core.Tooltip") && y(w, "afterInit", function() {
          let T = this.chart;
          T.options.tooltip && (T.tooltip = new m(T, T.options.tooltip, this));
        });
      }, c;
    }), n(i, "Core/Series/Point.js", [i["Core/Renderer/HTML/AST.js"], i["Core/Animation/AnimationUtilities.js"], i["Core/Defaults.js"], i["Core/Templating.js"], i["Core/Utilities.js"]], function(r, s, o, a, l) {
      let { animObject: h } = s, { defaultOptions: m } = o, { format: g } = a, { addEvent: M, crisp: N, erase: f, extend: b, fireEvent: S, getNestedProperty: y, isArray: d, isFunction: x, isNumber: I, isObject: C, merge: A, pick: O, syncTimeout: z, removeEvent: H, uniqueKey: F } = l;
      class E {
        animateBeforeDestroy() {
          let v = this, u = { x: v.startXPos, opacity: 0 }, c = v.getGraphicalProps();
          c.singular.forEach(function(w) {
            v[w] = v[w].animate(w === "dataLabel" ? { x: v[w].startXPos, y: v[w].startYPos, opacity: 0 } : u);
          }), c.plural.forEach(function(w) {
            v[w].forEach(function(T) {
              T.element && T.animate(b({ x: v.startXPos }, T.startYPos ? { x: T.startXPos, y: T.startYPos } : {}));
            });
          });
        }
        applyOptions(v, u) {
          let c = this.series, w = c.options.pointValKey || c.pointValKey;
          return b(this, v = E.prototype.optionsToObject.call(this, v)), this.options = this.options ? b(this.options, v) : v, v.group && delete this.group, v.dataLabels && delete this.dataLabels, w && (this.y = E.prototype.getNestedProperty.call(this, w)), this.selected && (this.state = "select"), "name" in this && u === void 0 && c.xAxis && c.xAxis.hasNames && (this.x = c.xAxis.nameToX(this)), this.x === void 0 && c ? this.x = u ?? c.autoIncrement() : I(v.x) && c.options.relativeXValue && (this.x = c.autoIncrement(v.x)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
        }
        destroy() {
          if (!this.destroyed) {
            let v = this, u = v.series, c = u.chart, w = u.options.dataSorting, T = c.hoverPoints, D = h(v.series.chart.renderer.globalAnimation), G = () => {
              for (let L in (v.graphic || v.graphics || v.dataLabel || v.dataLabels) && (H(v), v.destroyElements()), v)
                delete v[L];
            };
            v.legendItem && c.legend.destroyItem(v), T && (v.setState(), f(T, v), T.length || (c.hoverPoints = null)), v === c.hoverPoint && v.onMouseOut(), w && w.enabled ? (this.animateBeforeDestroy(), z(G, D.duration)) : G(), c.pointCount--;
          }
          this.destroyed = !0;
        }
        destroyElements(v) {
          let u = this, c = u.getGraphicalProps(v);
          c.singular.forEach(function(w) {
            u[w] = u[w].destroy();
          }), c.plural.forEach(function(w) {
            u[w].forEach(function(T) {
              T && T.element && T.destroy();
            }), delete u[w];
          });
        }
        firePointEvent(v, u, c) {
          let w = this, T = this.series.options;
          w.manageEvent(v), v === "click" && T.allowPointSelect && (c = function(D) {
            !w.destroyed && w.select && w.select(null, D.ctrlKey || D.metaKey || D.shiftKey);
          }), S(w, v, u, c);
        }
        getClassName() {
          return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (this.colorIndex !== void 0 ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
        }
        getGraphicalProps(v) {
          let u, c, w = this, T = [], D = { singular: [], plural: [] };
          for ((v = v || { graphic: 1, dataLabel: 1 }).graphic && T.push("graphic", "connector"), v.dataLabel && T.push("dataLabel", "dataLabelPath", "dataLabelUpper"), c = T.length; c--; )
            w[u = T[c]] && D.singular.push(u);
          return ["graphic", "dataLabel"].forEach(function(G) {
            let L = G + "s";
            v[G] && w[L] && D.plural.push(L);
          }), D;
        }
        getLabelConfig() {
          return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
        }
        getNestedProperty(v) {
          return v ? v.indexOf("custom.") === 0 ? y(v, this.options) : this[v] : void 0;
        }
        getZone() {
          let v = this.series, u = v.zones, c = v.zoneAxis || "y", w, T = 0;
          for (w = u[0]; this[c] >= w.value; )
            w = u[++T];
          return this.nonZonedColor || (this.nonZonedColor = this.color), w && w.color && !this.options.color ? this.color = w.color : this.color = this.nonZonedColor, w;
        }
        hasNewShapeType() {
          return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
        }
        constructor(v, u, c) {
          this.formatPrefix = "point", this.visible = !0, this.series = v, this.applyOptions(u, c), this.id ?? (this.id = F()), this.resolveColor(), v.chart.pointCount++, S(this, "afterInit");
        }
        isValid() {
          return (I(this.x) || this.x instanceof Date) && I(this.y);
        }
        optionsToObject(v) {
          let u = this.series, c = u.options.keys, w = c || u.pointArrayMap || ["y"], T = w.length, D = {}, G, L = 0, J = 0;
          if (I(v) || v === null)
            D[w[0]] = v;
          else if (d(v))
            for (!c && v.length > T && ((G = typeof v[0]) == "string" ? D.name = v[0] : G === "number" && (D.x = v[0]), L++); J < T; )
              c && v[L] === void 0 || (w[J].indexOf(".") > 0 ? E.prototype.setNestedProperty(D, v[L], w[J]) : D[w[J]] = v[L]), L++, J++;
          else
            typeof v == "object" && (D = v, v.dataLabels && (u.hasDataLabels = () => !0), v.marker && (u._hasPointMarkers = !0));
          return D;
        }
        pos(v, u = this.plotY) {
          if (!this.destroyed) {
            let { plotX: c, series: w } = this, { chart: T, xAxis: D, yAxis: G } = w, L = 0, J = 0;
            if (I(c) && I(u))
              return v && (L = D ? D.pos : T.plotLeft, J = G ? G.pos : T.plotTop), T.inverted && D && G ? [G.len - u + J, D.len - c + L] : [c + L, u + J];
          }
        }
        resolveColor() {
          let v = this.series, u = v.chart.options.chart, c = v.chart.styledMode, w, T, D = u.colorCount, G;
          delete this.nonZonedColor, v.options.colorByPoint ? (c || (w = (T = v.options.colors || v.chart.options.colors)[v.colorCounter], D = T.length), G = v.colorCounter, v.colorCounter++, v.colorCounter === D && (v.colorCounter = 0)) : (c || (w = v.color), G = v.colorIndex), this.colorIndex = O(this.options.colorIndex, G), this.color = O(this.options.color, w);
        }
        setNestedProperty(v, u, c) {
          return c.split(".").reduce(function(w, T, D, G) {
            let L = G.length - 1 === D;
            return w[T] = L ? u : C(w[T], !0) ? w[T] : {}, w[T];
          }, v), v;
        }
        shouldDraw() {
          return !this.isNull;
        }
        tooltipFormatter(v) {
          let u = this.series, c = u.tooltipOptions, w = O(c.valueDecimals, ""), T = c.valuePrefix || "", D = c.valueSuffix || "";
          return u.chart.styledMode && (v = u.chart.tooltip.styledModeFormat(v)), (u.pointArrayMap || ["y"]).forEach(function(G) {
            G = "{point." + G, (T || D) && (v = v.replace(RegExp(G + "}", "g"), T + G + "}" + D)), v = v.replace(RegExp(G + "}", "g"), G + ":,." + w + "f}");
          }), g(v, { point: this, series: this.series }, u.chart);
        }
        update(v, u, c, w) {
          let T, D = this, G = D.series, L = D.graphic, J = G.chart, se = G.options;
          function _() {
            D.applyOptions(v);
            let X = L && D.hasMockGraphic, U = D.y === null ? !X : X;
            L && U && (D.graphic = L.destroy(), delete D.hasMockGraphic), C(v, !0) && (L && L.element && v && v.marker && v.marker.symbol !== void 0 && (D.graphic = L.destroy()), v != null && v.dataLabels && D.dataLabel && (D.dataLabel = D.dataLabel.destroy())), T = D.index, G.updateParallelArrays(D, T), se.data[T] = C(se.data[T], !0) || C(v, !0) ? D.options : O(v, se.data[T]), G.isDirty = G.isDirtyData = !0, !G.fixedBox && G.hasCartesianSeries && (J.isDirtyBox = !0), se.legendType === "point" && (J.isDirtyLegend = !0), u && J.redraw(c);
          }
          u = O(u, !0), w === !1 ? _() : D.firePointEvent("update", { options: v }, _);
        }
        remove(v, u) {
          this.series.removePoint(this.series.data.indexOf(this), v, u);
        }
        select(v, u) {
          let c = this, w = c.series, T = w.chart;
          v = O(v, !c.selected), this.selectedStaging = v, c.firePointEvent(v ? "select" : "unselect", { accumulate: u }, function() {
            c.selected = c.options.selected = v, w.options.data[w.data.indexOf(c)] = c.options, c.setState(v && "select"), u || T.getSelectedPoints().forEach(function(D) {
              let G = D.series;
              D.selected && D !== c && (D.selected = D.options.selected = !1, G.options.data[G.data.indexOf(D)] = D.options, D.setState(T.hoverPoints && G.options.inactiveOtherPoints ? "inactive" : ""), D.firePointEvent("unselect"));
            });
          }), delete this.selectedStaging;
        }
        onMouseOver(v) {
          let { inverted: u, pointer: c } = this.series.chart;
          c && (v = v ? c.normalize(v) : c.getChartCoordinatesFromPoint(this, u), c.runPointActions(v, this));
        }
        onMouseOut() {
          let v = this.series.chart;
          this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (v.hoverPoints || []).forEach(function(u) {
            u.setState();
          }), v.hoverPoints = v.hoverPoint = null;
        }
        manageEvent(v) {
          var w, T, D, G, L, J;
          let u = A(this.series.options.point, this.options), c = (w = u.events) == null ? void 0 : w[v];
          x(c) && (!((T = this.hcEvents) != null && T[v]) || ((G = (D = this.hcEvents) == null ? void 0 : D[v]) == null ? void 0 : G.map((se) => se.fn).indexOf(c)) === -1) ? ((L = this.importedUserEvent) == null || L.call(this), this.importedUserEvent = M(this, v, c)) : this.importedUserEvent && !c && ((J = this.hcEvents) != null && J[v]) && (H(this, v), delete this.hcEvents[v], Object.keys(this.hcEvents) || delete this.importedUserEvent);
        }
        setState(v, u) {
          var B;
          let c = this.series, w = this.state, T = c.options.states[v || "normal"] || {}, D = m.plotOptions[c.type].marker && c.options.marker, G = D && D.enabled === !1, L = D && D.states && D.states[v || "normal"] || {}, J = L.enabled === !1, se = this.marker || {}, _ = c.chart, X = D && c.markerAttribs, U = c.halo, te, le, R, P = c.stateMarkerGraphic, W;
          if ((v = v || "") === this.state && !u || this.selected && v !== "select" || T.enabled === !1 || v && (J || G && L.enabled === !1) || v && se.states && se.states[v] && se.states[v].enabled === !1)
            return;
          if (this.state = v, X && (te = c.markerAttribs(this, v)), this.graphic && !this.hasMockGraphic) {
            if (w && this.graphic.removeClass("highcharts-point-" + w), v && this.graphic.addClass("highcharts-point-" + v), !_.styledMode) {
              le = c.pointAttribs(this, v), R = O(_.options.chart.animation, T.animation);
              let Z = le.opacity;
              c.options.inactiveOtherPoints && I(Z) && (this.dataLabels || []).forEach(function(Y) {
                Y && !Y.hasClass("highcharts-data-label-hidden") && (Y.animate({ opacity: Z }, R), Y.connector && Y.connector.animate({ opacity: Z }, R));
              }), this.graphic.animate(le, R);
            }
            te && this.graphic.animate(te, O(_.options.chart.animation, L.animation, D.animation)), P && P.hide();
          } else
            v && L && (W = se.symbol || c.symbol, P && P.currentSymbol !== W && (P = P.destroy()), te && (P ? P[u ? "animate" : "attr"]({ x: te.x, y: te.y }) : W && (c.stateMarkerGraphic = P = _.renderer.symbol(W, te.x, te.y, te.width, te.height).add(c.markerGroup), P.currentSymbol = W)), !_.styledMode && P && this.state !== "inactive" && P.attr(c.pointAttribs(this, v))), P && (P[v && this.isInside ? "show" : "hide"](), P.element.point = this, P.addClass(this.getClassName(), !0));
          let q = T.halo, p = this.graphic || P, j = p && p.visibility || "inherit";
          q && q.size && p && j !== "hidden" && !this.isCluster ? (U || (c.halo = U = _.renderer.path().add(p.parentGroup)), U.show()[u ? "animate" : "attr"]({ d: this.haloPath(q.size) }), U.attr({ class: "highcharts-halo highcharts-color-" + O(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""), visibility: j, zIndex: -1 }), U.point = this, _.styledMode || U.attr(b({ fill: this.color || c.color, "fill-opacity": q.opacity }, r.filterUserAttributes(q.attributes || {})))) : (B = U == null ? void 0 : U.point) != null && B.haloPath && !U.point.destroyed && U.animate({ d: U.point.haloPath(0) }, null, U.hide), S(this, "afterSetState", { state: v });
        }
        haloPath(v) {
          let u = this.pos();
          return u ? this.series.chart.renderer.symbols.circle(N(u[0], 1) - v, u[1] - v, 2 * v, 2 * v) : [];
        }
      }
      return E;
    }), n(i, "Core/Pointer.js", [i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s, o) {
      var a;
      let { parse: l } = r, { charts: h, composed: m, isTouchDevice: g } = s, { addEvent: M, attr: N, css: f, extend: b, find: S, fireEvent: y, isNumber: d, isObject: x, objectEach: I, offset: C, pick: A, pushUnique: O, splat: z } = o;
      class H {
        applyInactiveState(E) {
          let k = [], v;
          (E || []).forEach(function(u) {
            v = u.series, k.push(v), v.linkedParent && k.push(v.linkedParent), v.linkedSeries && (k = k.concat(v.linkedSeries)), v.navigatorSeries && k.push(v.navigatorSeries);
          }), this.chart.series.forEach(function(u) {
            k.indexOf(u) === -1 ? u.setState("inactive", !0) : u.options.inactiveOtherPoints && u.setAllPointsToState("inactive");
          });
        }
        destroy() {
          let E = this;
          this.eventsToUnbind.forEach((k) => k()), this.eventsToUnbind = [], !s.chartCount && (H.unbindDocumentMouseUp && H.unbindDocumentMouseUp.forEach((k) => k()), H.unbindDocumentTouchEnd && (H.unbindDocumentTouchEnd = H.unbindDocumentTouchEnd())), clearInterval(E.tooltipTimeout), I(E, function(k, v) {
            E[v] = void 0;
          });
        }
        getSelectionMarkerAttrs(E, k) {
          let v = { args: { chartX: E, chartY: k }, attrs: {}, shapeType: "rect" };
          return y(this, "getSelectionMarkerAttrs", v, (u) => {
            let c, { chart: w, zoomHor: T, zoomVert: D } = this, { mouseDownX: G = 0, mouseDownY: L = 0 } = w, J = u.attrs;
            J.x = w.plotLeft, J.y = w.plotTop, J.width = T ? 1 : w.plotWidth, J.height = D ? 1 : w.plotHeight, T && (c = E - G, J.width = Math.max(1, Math.abs(c)), J.x = (c > 0 ? 0 : c) + G), D && (c = k - L, J.height = Math.max(1, Math.abs(c)), J.y = (c > 0 ? 0 : c) + L);
          }), v;
        }
        drag(E) {
          let { chart: k } = this, { mouseDownX: v = 0, mouseDownY: u = 0 } = k, { panning: c, panKey: w, selectionMarkerFill: T } = k.options.chart, D = k.plotLeft, G = k.plotTop, L = k.plotWidth, J = k.plotHeight, se = x(c) ? c.enabled : c, _ = w && E[`${w}Key`], X = E.chartX, U = E.chartY, te, le = this.selectionMarker;
          if ((!le || !le.touch) && (X < D ? X = D : X > D + L && (X = D + L), U < G ? U = G : U > G + J && (U = G + J), this.hasDragged = Math.sqrt(Math.pow(v - X, 2) + Math.pow(u - U, 2)), this.hasDragged > 10)) {
            te = k.isInsidePlot(v - D, u - G, { visiblePlotOnly: !0 });
            let { shapeType: R, attrs: P } = this.getSelectionMarkerAttrs(X, U);
            (k.hasCartesianSeries || k.mapView) && this.hasZoom && te && !_ && !le && (this.selectionMarker = le = k.renderer[R](), le.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), k.styledMode || le.attr({ fill: T || l("#334eff").setOpacity(0.25).get() })), le && le.attr(P), te && !le && se && k.pan(E, c);
          }
        }
        dragStart(E) {
          let k = this.chart;
          k.mouseIsDown = E.type, k.cancelClick = !1, k.mouseDownX = E.chartX, k.mouseDownY = E.chartY;
        }
        getSelectionBox(E) {
          let k = { args: { marker: E }, result: E.getBBox() };
          return y(this, "getSelectionBox", k), k.result;
        }
        drop(E) {
          let k, { chart: v, selectionMarker: u } = this;
          for (let c of v.axes)
            c.isPanning && (c.isPanning = !1, (c.options.startOnTick || c.options.endOnTick || c.series.some((w) => w.boosted)) && (c.forceRedraw = !0, c.setExtremes(c.userMin, c.userMax, !1), k = !0));
          if (k && v.redraw(), u && E) {
            if (this.hasDragged) {
              let c = this.getSelectionBox(u);
              v.transform({ axes: v.axes.filter((w) => w.zoomEnabled && (w.coll === "xAxis" && this.zoomX || w.coll === "yAxis" && this.zoomY)), selection: { originalEvent: E, xAxis: [], yAxis: [], ...c }, from: c });
            }
            d(v.index) && (this.selectionMarker = u.destroy());
          }
          v && d(v.index) && (f(v.container, { cursor: v._cursor }), v.cancelClick = this.hasDragged > 10, v.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = []);
        }
        findNearestKDPoint(E, k, v) {
          let u;
          return E.forEach(function(c) {
            let w = !(c.noSharedTooltip && k) && 0 > c.options.findNearestPointBy.indexOf("y"), T = c.searchPoint(v, w);
            x(T, !0) && T.series && (!x(u, !0) || function(D, G) {
              var _, X;
              let L = D.distX - G.distX, J = D.dist - G.dist, se = ((_ = G.series.group) == null ? void 0 : _.zIndex) - ((X = D.series.group) == null ? void 0 : X.zIndex);
              return L !== 0 && k ? L : J !== 0 ? J : se !== 0 ? se : D.series.index > G.series.index ? -1 : 1;
            }(u, T) > 0) && (u = T);
          }), u;
        }
        getChartCoordinatesFromPoint(E, k) {
          let { xAxis: v, yAxis: u } = E.series, c = E.shapeArgs;
          if (v && u) {
            let w = E.clientX ?? E.plotX ?? 0, T = E.plotY || 0;
            return E.isNode && c && d(c.x) && d(c.y) && (w = c.x, T = c.y), k ? { chartX: u.len + u.pos - T, chartY: v.len + v.pos - w } : { chartX: w + v.pos, chartY: T + u.pos };
          }
          if (c && c.x && c.y)
            return { chartX: c.x, chartY: c.y };
        }
        getChartPosition() {
          if (this.chartPosition)
            return this.chartPosition;
          let { container: E } = this.chart, k = C(E);
          this.chartPosition = { left: k.left, top: k.top, scaleX: 1, scaleY: 1 };
          let { offsetHeight: v, offsetWidth: u } = E;
          return u > 2 && v > 2 && (this.chartPosition.scaleX = k.width / u, this.chartPosition.scaleY = k.height / v), this.chartPosition;
        }
        getCoordinates(E) {
          let k = { xAxis: [], yAxis: [] };
          for (let v of this.chart.axes)
            k[v.isXAxis ? "xAxis" : "yAxis"].push({ axis: v, value: v.toValue(E[v.horiz ? "chartX" : "chartY"]) });
          return k;
        }
        getHoverData(E, k, v, u, c, w) {
          let T = [], D = function(_) {
            return _.visible && !(!c && _.directTouch) && A(_.options.enableMouseTracking, !0);
          }, G = k, L, J = { chartX: w ? w.chartX : void 0, chartY: w ? w.chartY : void 0, shared: c };
          y(this, "beforeGetHoverData", J), L = G && !G.stickyTracking ? [G] : v.filter((_) => _.stickyTracking && (J.filter || D)(_));
          let se = u && E || !w ? E : this.findNearestKDPoint(L, c, w);
          return G = se && se.series, se && (c && !G.noSharedTooltip ? (L = v.filter(function(_) {
            return J.filter ? J.filter(_) : D(_) && !_.noSharedTooltip;
          })).forEach(function(_) {
            let X = S(_.points, function(U) {
              return U.x === se.x && !U.isNull;
            });
            x(X) && (_.boosted && _.boost && (X = _.boost.getPoint(X)), T.push(X));
          }) : T.push(se)), y(this, "afterGetHoverData", J = { hoverPoint: se }), { hoverPoint: J.hoverPoint, hoverSeries: G, hoverPoints: T };
        }
        getPointFromEvent(E) {
          let k = E.target, v;
          for (; k && !v; )
            v = k.point, k = k.parentNode;
          return v;
        }
        onTrackerMouseOut(E) {
          let k = this.chart, v = E.relatedTarget, u = k.hoverSeries;
          this.isDirectTouch = !1, !u || !v || u.stickyTracking || this.inClass(v, "highcharts-tooltip") || this.inClass(v, "highcharts-series-" + u.index) && this.inClass(v, "highcharts-tracker") || u.onMouseOut();
        }
        inClass(E, k) {
          let v = E, u;
          for (; v; ) {
            if (u = N(v, "class")) {
              if (u.indexOf(k) !== -1)
                return !0;
              if (u.indexOf("highcharts-container") !== -1)
                return !1;
            }
            v = v.parentElement;
          }
        }
        constructor(E, k) {
          var v;
          this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = k, this.chart = E, this.runChartClick = !!((v = k.chart.events) != null && v.click), this.pinchDown = [], this.setDOMEvents(), y(this, "afterInit");
        }
        normalize(E, k) {
          let v = E.touches, u = v ? v.length ? v.item(0) : A(v.changedTouches, E.changedTouches)[0] : E;
          k || (k = this.getChartPosition());
          let c = u.pageX - k.left, w = u.pageY - k.top;
          return b(E, { chartX: Math.round(c /= k.scaleX), chartY: Math.round(w /= k.scaleY) });
        }
        onContainerClick(E) {
          let k = this.chart, v = k.hoverPoint, u = this.normalize(E), c = k.plotLeft, w = k.plotTop;
          !k.cancelClick && (v && this.inClass(u.target, "highcharts-tracker") ? (y(v.series, "click", b(u, { point: v })), k.hoverPoint && v.firePointEvent("click", u)) : (b(u, this.getCoordinates(u)), k.isInsidePlot(u.chartX - c, u.chartY - w, { visiblePlotOnly: !0 }) && y(k, "click", u)));
        }
        onContainerMouseDown(E) {
          var v;
          let k = (1 & (E.buttons || E.button)) == 1;
          E = this.normalize(E), s.isFirefox && E.button !== 0 && this.onContainerMouseMove(E), (E.button === void 0 || k) && (this.zoomOption(E), k && ((v = E.preventDefault) == null || v.call(E)), this.dragStart(E));
        }
        onContainerMouseLeave(E) {
          let { pointer: k } = h[A(H.hoverChartIndex, -1)] || {};
          E = this.normalize(E), this.onContainerMouseMove(E), k && !this.inClass(E.relatedTarget, "highcharts-tooltip") && (k.reset(), k.chartPosition = void 0);
        }
        onContainerMouseEnter() {
          delete this.chartPosition;
        }
        onContainerMouseMove(E) {
          let k = this.chart, v = k.tooltip, u = this.normalize(E);
          this.setHoverChartIndex(E), (k.mouseIsDown === "mousedown" || this.touchSelect(u)) && this.drag(u), !k.openMenu && (this.inClass(u.target, "highcharts-tracker") || k.isInsidePlot(u.chartX - k.plotLeft, u.chartY - k.plotTop, { visiblePlotOnly: !0 })) && !(v && v.shouldStickOnContact(u)) && (this.inClass(u.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(u));
        }
        onDocumentTouchEnd(E) {
          this.onDocumentMouseUp(E);
        }
        onContainerTouchMove(E) {
          this.touchSelect(E) ? this.onContainerMouseMove(E) : this.touch(E);
        }
        onContainerTouchStart(E) {
          this.touchSelect(E) ? this.onContainerMouseDown(E) : (this.zoomOption(E), this.touch(E, !0));
        }
        onDocumentMouseMove(E) {
          let k = this.chart, v = k.tooltip, u = this.chartPosition, c = this.normalize(E, u);
          !u || k.isInsidePlot(c.chartX - k.plotLeft, c.chartY - k.plotTop, { visiblePlotOnly: !0 }) || v && v.shouldStickOnContact(c) || c.target !== k.container.ownerDocument && this.inClass(c.target, "highcharts-tracker") || this.reset();
        }
        onDocumentMouseUp(E) {
          var k, v;
          (v = (k = h[A(H.hoverChartIndex, -1)]) == null ? void 0 : k.pointer) == null || v.drop(E);
        }
        pinch(E) {
          let k = this, { chart: v, hasZoom: u, lastTouches: c } = k, w = [].map.call(E.touches || [], (J) => k.normalize(J)), T = w.length, D = T === 1 && (k.inClass(E.target, "highcharts-tracker") && v.runTrackerClick || k.runChartClick), G = v.tooltip, L = T === 1 && A(G == null ? void 0 : G.options.followTouchMove, !0);
          T > 1 ? k.initiated = !0 : L && (k.initiated = !1), u && k.initiated && !D && E.cancelable !== !1 && E.preventDefault(), E.type === "touchstart" ? (k.pinchDown = w, k.res = !0, v.mouseDownX = E.chartX) : L ? this.runPointActions(k.normalize(E)) : c && (y(v, "touchpan", { originalEvent: E, touches: w }, () => {
            let J = (se) => {
              let _ = se[0], X = se[1] || _;
              return { x: _.chartX, y: _.chartY, width: X.chartX - _.chartX, height: X.chartY - _.chartY };
            };
            v.transform({ axes: v.axes.filter((se) => se.zoomEnabled && (this.zoomHor && se.horiz || this.zoomVert && !se.horiz)), to: J(w), from: J(c), trigger: E.type });
          }), k.res && (k.res = !1, this.reset(!1, 0))), k.lastTouches = w;
        }
        reset(E, k) {
          let v = this.chart, u = v.hoverSeries, c = v.hoverPoint, w = v.hoverPoints, T = v.tooltip, D = T && T.shared ? w : c;
          E && D && z(D).forEach(function(G) {
            G.series.isCartesian && G.plotX === void 0 && (E = !1);
          }), E ? T && D && z(D).length && (T.refresh(D), T.shared && w ? w.forEach(function(G) {
            G.setState(G.state, !0), G.series.isCartesian && (G.series.xAxis.crosshair && G.series.xAxis.drawCrosshair(null, G), G.series.yAxis.crosshair && G.series.yAxis.drawCrosshair(null, G));
          }) : c && (c.setState(c.state, !0), v.axes.forEach(function(G) {
            G.crosshair && c.series[G.coll] === G && G.drawCrosshair(null, c);
          }))) : (c && c.onMouseOut(), w && w.forEach(function(G) {
            G.setState();
          }), u && u.onMouseOut(), T && T.hide(k), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), v.axes.forEach(function(G) {
            G.hideCrosshair();
          }), v.hoverPoints = v.hoverPoint = void 0);
        }
        runPointActions(E, k, v) {
          let u = this.chart, c = u.series, w = u.tooltip && u.tooltip.options.enabled ? u.tooltip : void 0, T = !!w && w.shared, D = k || u.hoverPoint, G = D && D.series || u.hoverSeries, L = (!E || E.type !== "touchmove") && (!!k || G && G.directTouch && this.isDirectTouch), J = this.getHoverData(D, G, c, L, T, E);
          D = J.hoverPoint, G = J.hoverSeries;
          let se = J.hoverPoints, _ = G && G.tooltipOptions.followPointer && !G.tooltipOptions.split, X = T && G && !G.noSharedTooltip;
          if (D && (v || D !== u.hoverPoint || w && w.isHidden)) {
            if ((u.hoverPoints || []).forEach(function(U) {
              se.indexOf(U) === -1 && U.setState();
            }), u.hoverSeries !== G && G.onMouseOver(), this.applyInactiveState(se), (se || []).forEach(function(U) {
              U.setState("hover");
            }), u.hoverPoint && u.hoverPoint.firePointEvent("mouseOut"), !D.series)
              return;
            u.hoverPoints = se, u.hoverPoint = D, D.firePointEvent("mouseOver", void 0, () => {
              w && D && w.refresh(X ? se : D, E);
            });
          } else if (_ && w && !w.isHidden) {
            let U = w.getAnchor([{}], E);
            u.isInsidePlot(U[0], U[1], { visiblePlotOnly: !0 }) && w.updatePosition({ plotX: U[0], plotY: U[1] });
          }
          this.unDocMouseMove || (this.unDocMouseMove = M(u.container.ownerDocument, "mousemove", (U) => {
            var te, le;
            return (le = (te = h[H.hoverChartIndex ?? -1]) == null ? void 0 : te.pointer) == null ? void 0 : le.onDocumentMouseMove(U);
          }), this.eventsToUnbind.push(this.unDocMouseMove)), u.axes.forEach(function(U) {
            let te, le = A((U.crosshair || {}).snap, !0);
            !le || (te = u.hoverPoint) && te.series[U.coll] === U || (te = S(se, (R) => R.series && R.series[U.coll] === U)), te || !le ? U.drawCrosshair(E, te) : U.hideCrosshair();
          });
        }
        setDOMEvents() {
          let E = this.chart.container, k = E.ownerDocument;
          E.onmousedown = this.onContainerMouseDown.bind(this), E.onmousemove = this.onContainerMouseMove.bind(this), E.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(M(E, "mouseenter", this.onContainerMouseEnter.bind(this)), M(E, "mouseleave", this.onContainerMouseLeave.bind(this))), H.unbindDocumentMouseUp || (H.unbindDocumentMouseUp = []), H.unbindDocumentMouseUp.push(M(k, "mouseup", this.onDocumentMouseUp.bind(this)));
          let v = this.chart.renderTo.parentElement;
          for (; v && v.tagName !== "BODY"; )
            this.eventsToUnbind.push(M(v, "scroll", () => {
              delete this.chartPosition;
            })), v = v.parentElement;
          this.eventsToUnbind.push(M(E, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), M(E, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), H.unbindDocumentTouchEnd || (H.unbindDocumentTouchEnd = M(k, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })), this.setPointerCapture(), M(this.chart, "redraw", this.setPointerCapture.bind(this));
        }
        setPointerCapture() {
          var c, w;
          if (!g)
            return;
          let E = this.pointerCaptureEventsToUnbind, k = this.chart, v = k.container, u = A((c = k.options.tooltip) == null ? void 0 : c.followTouchMove, !0) && k.series.some((T) => T.options.findNearestPointBy.indexOf("y") > -1);
          !this.hasPointerCapture && u ? (E.push(M(v, "pointerdown", (T) => {
            var D, G;
            (D = T.target) != null && D.hasPointerCapture(T.pointerId) && ((G = T.target) == null || G.releasePointerCapture(T.pointerId));
          }), M(v, "pointermove", (T) => {
            var D, G;
            (G = (D = k.pointer) == null ? void 0 : D.getPointFromEvent(T)) == null || G.onMouseOver(T);
          })), k.styledMode || f(v, { "touch-action": "none" }), v.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !u && (E.forEach((T) => T()), E.length = 0, k.styledMode || f(v, { "touch-action": A((w = k.options.chart.style) == null ? void 0 : w["touch-action"], "manipulation") }), v.className = v.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1);
        }
        setHoverChartIndex(E) {
          var u;
          let k = this.chart, v = s.charts[A(H.hoverChartIndex, -1)];
          if (v && v !== k) {
            let c = { relatedTarget: k.container };
            E && !(E != null && E.relatedTarget) && (E = { ...c, ...E }), (u = v.pointer) == null || u.onContainerMouseLeave(E || c);
          }
          v && v.mouseIsDown || (H.hoverChartIndex = k.index);
        }
        touch(E, k) {
          let v, { chart: u, pinchDown: c = [] } = this;
          this.setHoverChartIndex(), (E = this.normalize(E)).touches.length === 1 ? u.isInsidePlot(E.chartX - u.plotLeft, E.chartY - u.plotTop, { visiblePlotOnly: !0 }) && !u.openMenu ? (k && this.runPointActions(E), E.type === "touchmove" && (v = !!c[0] && Math.pow(c[0].chartX - E.chartX, 2) + Math.pow(c[0].chartY - E.chartY, 2) >= 16), A(v, !0) && this.pinch(E)) : k && this.reset() : E.touches.length === 2 && this.pinch(E);
        }
        touchSelect(E) {
          return !!(this.chart.zooming.singleTouch && E.touches && E.touches.length === 1);
        }
        zoomOption(E) {
          let k = this.chart, v = k.inverted, u = k.zooming.type || "", c, w;
          /touch/.test(E.type) && (u = A(k.zooming.pinchType, u)), this.zoomX = c = /x/.test(u), this.zoomY = w = /y/.test(u), this.zoomHor = c && !v || w && v, this.zoomVert = w && !v || c && v, this.hasZoom = c || w;
        }
      }
      return (a = H || (H = {})).compose = function(F) {
        O(m, "Core.Pointer") && M(F, "beforeRender", function() {
          this.pointer = new a(this, this.options);
        });
      }, H;
    }), n(i, "Core/Legend/LegendSymbol.js", [i["Core/Utilities.js"]], function(r) {
      var s;
      let { extend: o, merge: a, pick: l } = r;
      return function(h) {
        function m(g, M, N) {
          var v, u;
          let f = this.legendItem = this.legendItem || {}, { chart: b, options: S } = this, { baseline: y = 0, symbolWidth: d, symbolHeight: x } = g, I = this.symbol || "circle", C = x / 2, A = b.renderer, O = f.group, z = y - Math.round((((v = g.fontMetrics) == null ? void 0 : v.b) || x) * (N ? 0.4 : 0.3)), H = {}, F, E = S.marker, k = 0;
          if (b.styledMode || (H["stroke-width"] = Math.min(S.lineWidth || 0, 24), S.dashStyle ? H.dashstyle = S.dashStyle : S.linecap === "square" || (H["stroke-linecap"] = "round")), f.line = A.path().addClass("highcharts-graph").attr(H).add(O), N && (f.area = A.path().addClass("highcharts-area").add(O)), H["stroke-linecap"] && (k = Math.min(f.line.strokeWidth(), d) / 2), d) {
            let c = [["M", k, z], ["L", d - k, z]];
            f.line.attr({ d: c }), (u = f.area) == null || u.attr({ d: [...c, ["L", d - k, y], ["L", k, y]] });
          }
          if (E && E.enabled !== !1 && d) {
            let c = Math.min(l(E.radius, C), C);
            I.indexOf("url") === 0 && (E = a(E, { width: x, height: x }), c = 0), f.symbol = F = A.symbol(I, d / 2 - c, z - c, 2 * c, 2 * c, o({ context: "legend" }, E)).addClass("highcharts-point").add(O), F.isMarker = !0;
          }
        }
        h.areaMarker = function(g, M) {
          m.call(this, g, M, !0);
        }, h.lineMarker = m, h.rectangle = function(g, M) {
          let N = M.legendItem || {}, f = g.options, b = g.symbolHeight, S = f.squareSymbol, y = S ? b : g.symbolWidth;
          N.symbol = this.chart.renderer.rect(S ? (g.symbolWidth - b) / 2 : 0, g.baseline - b + 1, y, b, l(g.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(N.group);
        };
      }(s || (s = {})), s;
    }), n(i, "Core/Series/SeriesDefaults.js", [], function() {
      return { lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1e3 }, enableMouseTracking: !0, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function() {
        let { numberFormatter: r } = this.series.chart;
        return typeof this.y != "number" ? "" : r(this.y, -1);
      }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: !0, turboThreshold: 1e3, findNearestPointBy: "x" };
    }), n(i, "Core/Series/SeriesRegistry.js", [i["Core/Globals.js"], i["Core/Defaults.js"], i["Core/Series/Point.js"], i["Core/Utilities.js"]], function(r, s, o, a) {
      var l;
      let { defaultOptions: h } = s, { extend: m, extendClass: g, merge: M } = a;
      return function(N) {
        function f(b, S) {
          let y = h.plotOptions || {}, d = S.defaultOptions, x = S.prototype;
          return x.type = b, x.pointClass || (x.pointClass = o), !N.seriesTypes[b] && (d && (y[b] = d), N.seriesTypes[b] = S, !0);
        }
        N.seriesTypes = r.seriesTypes, N.registerSeriesType = f, N.seriesType = function(b, S, y, d, x) {
          let I = h.plotOptions || {};
          if (S = S || "", I[b] = M(I[S], y), delete N.seriesTypes[b], f(b, g(N.seriesTypes[S] || function() {
          }, d)), N.seriesTypes[b].prototype.type = b, x) {
            class C extends o {
            }
            m(C.prototype, x), N.seriesTypes[b].prototype.pointClass = C;
          }
          return N.seriesTypes[b];
        };
      }(l || (l = {})), l;
    }), n(i, "Core/Series/Series.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Defaults.js"], i["Core/Foundation.js"], i["Core/Globals.js"], i["Core/Legend/LegendSymbol.js"], i["Core/Series/Point.js"], i["Core/Series/SeriesDefaults.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]], function(r, s, o, a, l, h, m, g, M, N) {
      let { animObject: f, setAnimation: b } = r, { defaultOptions: S } = s, { registerEventOptions: y } = o, { svg: d, win: x } = a, { seriesTypes: I } = g, { arrayMax: C, arrayMin: A, clamp: O, correctFloat: z, crisp: H, defined: F, destroyObjectProperties: E, diffObjects: k, erase: v, error: u, extend: c, find: w, fireEvent: T, getClosestDistance: D, getNestedProperty: G, insertItem: L, isArray: J, isNumber: se, isString: _, merge: X, objectEach: U, pick: te, removeEvent: le, splat: R, syncTimeout: P } = N;
      class W {
        constructor() {
          this.zoneAxis = "y";
        }
        init(p, j) {
          let B;
          T(this, "init", { options: j });
          let Z = this, Y = p.series;
          this.eventsToUnbind = [], Z.chart = p, Z.options = Z.setOptions(j);
          let ne = Z.options, V = ne.visible !== !1;
          Z.linkedSeries = [], Z.bindAxes(), c(Z, { name: ne.name, state: "", visible: V, selected: ne.selected === !0 }), y(this, ne);
          let $ = ne.events;
          ($ && $.click || ne.point && ne.point.events && ne.point.events.click || ne.allowPointSelect) && (p.runTrackerClick = !0), Z.getColor(), Z.getSymbol(), Z.parallelArrays.forEach(function(ee) {
            Z[ee + "Data"] || (Z[ee + "Data"] = []);
          }), Z.isCartesian && (p.hasCartesianSeries = !0), Y.length && (B = Y[Y.length - 1]), Z._i = te(B && B._i, -1) + 1, Z.opacity = Z.options.opacity, p.orderItems("series", L(this, Y)), ne.dataSorting && ne.dataSorting.enabled ? Z.setDataSortingOptions() : Z.points || Z.data || Z.setData(ne.data, !1), T(this, "afterInit");
        }
        is(p) {
          return I[p] && this instanceof I[p];
        }
        bindAxes() {
          let p, j = this, B = j.options, Z = j.chart;
          T(this, "bindAxes", null, function() {
            (j.axisTypes || []).forEach(function(Y) {
              (Z[Y] || []).forEach(function(ne) {
                p = ne.options, (te(B[Y], 0) === ne.index || B[Y] !== void 0 && B[Y] === p.id) && (L(j, ne.series), j[Y] = ne, ne.isDirty = !0);
              }), j[Y] || j.optionalAxis === Y || u(18, !0, Z);
            });
          }), T(this, "afterBindAxes");
        }
        updateParallelArrays(p, j, B) {
          let Z = p.series, Y = se(j) ? function(ne) {
            let V = ne === "y" && Z.toYData ? Z.toYData(p) : p[ne];
            Z[ne + "Data"][j] = V;
          } : function(ne) {
            Array.prototype[j].apply(Z[ne + "Data"], B);
          };
          Z.parallelArrays.forEach(Y);
        }
        hasData() {
          return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.yData && this.yData.length > 0;
        }
        hasMarkerChanged(p, j) {
          let B = p.marker, Z = j.marker || {};
          return B && (Z.enabled && !B.enabled || Z.symbol !== B.symbol || Z.height !== B.height || Z.width !== B.width);
        }
        autoIncrement(p) {
          let j = this.options, B = j.pointIntervalUnit, Z = j.relativeXValue, Y = this.chart.time, ne = this.xIncrement, V, $;
          return ne = te(ne, j.pointStart, 0), this.pointInterval = $ = te(this.pointInterval, j.pointInterval, 1), Z && se(p) && ($ *= p), B && (V = new Y.Date(ne), B === "day" ? Y.set("Date", V, Y.get("Date", V) + $) : B === "month" ? Y.set("Month", V, Y.get("Month", V) + $) : B === "year" && Y.set("FullYear", V, Y.get("FullYear", V) + $), $ = V.getTime() - ne), Z && se(p) ? ne + $ : (this.xIncrement = ne + $, ne);
        }
        setDataSortingOptions() {
          let p = this.options;
          c(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), F(p.pointRange) || (p.pointRange = 1);
        }
        setOptions(p) {
          var de, he;
          let j, B = this.chart, Z = B.options.plotOptions, Y = B.userOptions || {}, ne = X(p), V = B.styledMode, $ = { plotOptions: Z, userOptions: ne };
          T(this, "setOptions", $);
          let ee = $.plotOptions[this.type], ue = Y.plotOptions || {}, ce = ue.series || {}, Q = S.plotOptions[this.type] || {}, K = ue[this.type] || {};
          this.userOptions = $.userOptions;
          let ie = X(ee, Z.series, K, ne);
          this.tooltipOptions = X(S.tooltip, (de = S.plotOptions.series) == null ? void 0 : de.tooltip, Q == null ? void 0 : Q.tooltip, B.userOptions.tooltip, (he = ue.series) == null ? void 0 : he.tooltip, K.tooltip, ne.tooltip), this.stickyTracking = te(ne.stickyTracking, K.stickyTracking, ce.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || ie.stickyTracking), ee.marker === null && delete ie.marker, this.zoneAxis = ie.zoneAxis || "y";
          let ae = this.zones = (ie.zones || []).map((fe) => ({ ...fe }));
          return (ie.negativeColor || ie.negativeFillColor) && !ie.zones && (j = { value: ie[this.zoneAxis + "Threshold"] || ie.threshold || 0, className: "highcharts-negative" }, V || (j.color = ie.negativeColor, j.fillColor = ie.negativeFillColor), ae.push(j)), ae.length && F(ae[ae.length - 1].value) && ae.push(V ? {} : { color: this.color, fillColor: this.fillColor }), T(this, "afterSetOptions", { options: ie }), ie;
        }
        getName() {
          return te(this.options.name, "Series " + (this.index + 1));
        }
        getCyclic(p, j, B) {
          let Z, Y, ne = this.chart, V = `${p}Index`, $ = `${p}Counter`, ee = (B == null ? void 0 : B.length) || ne.options.chart.colorCount;
          !j && (F(Y = te(p === "color" ? this.options.colorIndex : void 0, this[V])) ? Z = Y : (ne.series.length || (ne[$] = 0), Z = ne[$] % ee, ne[$] += 1), B && (j = B[Z])), Z !== void 0 && (this[V] = Z), this[p] = j;
        }
        getColor() {
          this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || S.plotOptions[this.type].color, this.chart.options.colors);
        }
        getPointsCollection() {
          return (this.hasGroupedData ? this.points : this.data) || [];
        }
        getSymbol() {
          let p = this.options.marker;
          this.getCyclic("symbol", p.symbol, this.chart.options.symbols);
        }
        findPointIndex(p, j) {
          let B, Z, Y, ne = p.id, V = p.x, $ = this.points, ee = this.options.dataSorting;
          if (ne) {
            let ue = this.chart.get(ne);
            ue instanceof h && (B = ue);
          } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
            let ue = (ce) => !ce.touched && ce.index === p.index;
            if (ee && ee.matchByName ? ue = (ce) => !ce.touched && ce.name === p.name : this.options.relativeXValue && (ue = (ce) => !ce.touched && ce.options.x === p.x), !(B = w($, ue)))
              return;
          }
          return B && (Y = B && B.index) !== void 0 && (Z = !0), Y === void 0 && se(V) && (Y = this.xData.indexOf(V, j)), Y !== -1 && Y !== void 0 && this.cropped && (Y = Y >= this.cropStart ? Y - this.cropStart : Y), !Z && se(Y) && $[Y] && $[Y].touched && (Y = void 0), Y;
        }
        updateData(p, j) {
          let B = this.options, Z = B.dataSorting, Y = this.points, ne = [], V = this.requireSorting, $ = p.length === Y.length, ee, ue, ce, Q, K = !0;
          if (this.xIncrement = null, p.forEach(function(ie, ae) {
            let de, he = F(ie) && this.pointClass.prototype.optionsToObject.call({ series: this }, ie) || {}, fe = he.x;
            he.id || se(fe) ? ((de = this.findPointIndex(he, Q)) === -1 || de === void 0 ? ne.push(ie) : Y[de] && ie !== B.data[de] ? (Y[de].update(ie, !1, null, !1), Y[de].touched = !0, V && (Q = de + 1)) : Y[de] && (Y[de].touched = !0), (!$ || ae !== de || Z && Z.enabled || this.hasDerivedData) && (ee = !0)) : ne.push(ie);
          }, this), ee)
            for (ue = Y.length; ue--; )
              (ce = Y[ue]) && !ce.touched && ce.remove && ce.remove(!1, j);
          else
            !$ || Z && Z.enabled ? K = !1 : (p.forEach(function(ie, ae) {
              ie === Y[ae].y || Y[ae].destroyed || Y[ae].update(ie, !1, null, !1);
            }), ne.length = 0);
          return Y.forEach(function(ie) {
            ie && (ie.touched = !1);
          }), !!K && (ne.forEach(function(ie) {
            this.addPoint(ie, !1, null, null, !1);
          }, this), this.xIncrement === null && this.xData && this.xData.length && (this.xIncrement = C(this.xData), this.autoIncrement()), !0);
        }
        setData(p, j = !0, B, Z) {
          var Ae;
          let Y = this, ne = Y.points, V = ne && ne.length || 0, $ = Y.options, ee = Y.chart, ue = $.dataSorting, ce = Y.xAxis, Q = $.turboThreshold, K = this.xData, ie = this.yData, ae = Y.pointArrayMap, de = ae && ae.length, he = $.keys, fe, ge, me, be = 0, ve = 1, ye;
          ee.options.chart.allowMutatingData || ($.data && delete Y.options.data, Y.userOptions.data && delete Y.userOptions.data, ye = X(!0, p));
          let we = (p = ye || p || []).length;
          if (ue && ue.enabled && (p = this.sortData(p)), ee.options.chart.allowMutatingData && Z !== !1 && we && V && !Y.cropped && !Y.hasGroupedData && Y.visible && !Y.boosted && (me = this.updateData(p, B)), !me) {
            Y.xIncrement = null, Y.colorCounter = 0, this.parallelArrays.forEach(function(xe) {
              Y[xe + "Data"].length = 0;
            });
            let Se = Q && we > Q;
            if (Se) {
              let xe = Y.getFirstValidPoint(p), Oe = Y.getFirstValidPoint(p, we - 1, -1), Pe = (Ne) => !!(J(Ne) && (he || se(Ne[0])));
              if (se(xe) && se(Oe))
                for (fe = 0; fe < we; fe++)
                  K[fe] = this.autoIncrement(), ie[fe] = p[fe];
              else if (Pe(xe) && Pe(Oe))
                if (de)
                  if (xe.length === de)
                    for (fe = 0; fe < we; fe++)
                      K[fe] = this.autoIncrement(), ie[fe] = p[fe];
                  else
                    for (fe = 0; fe < we; fe++)
                      ge = p[fe], K[fe] = ge[0], ie[fe] = ge.slice(1, de + 1);
                else if (he && (be = he.indexOf("x"), ve = he.indexOf("y"), be = be >= 0 ? be : 0, ve = ve >= 0 ? ve : 1), xe.length === 1 && (ve = 0), be === ve)
                  for (fe = 0; fe < we; fe++)
                    K[fe] = this.autoIncrement(), ie[fe] = p[fe][ve];
                else
                  for (fe = 0; fe < we; fe++)
                    ge = p[fe], K[fe] = ge[be], ie[fe] = ge[ve];
              else
                Se = !1;
            }
            if (!Se)
              for (fe = 0; fe < we; fe++)
                ge = { series: Y }, Y.pointClass.prototype.applyOptions.apply(ge, [p[fe]]), Y.updateParallelArrays(ge, fe);
            for (ie && _(ie[0]) && u(14, !0, ee), Y.data = [], Y.options.data = Y.userOptions.data = p, fe = V; fe--; )
              (Ae = ne[fe]) == null || Ae.destroy();
            ce && (ce.minRange = ce.userMinRange), Y.isDirty = ee.isDirtyBox = !0, Y.isDirtyData = !!ne, B = !1;
          }
          $.legendType === "point" && (this.processData(), this.generatePoints()), j && ee.redraw(B);
        }
        sortData(p) {
          let j = this, B = j.options.dataSorting.sortKey || "y", Z = function(Y, ne) {
            return F(ne) && Y.pointClass.prototype.optionsToObject.call({ series: Y }, ne) || {};
          };
          return p.forEach(function(Y, ne) {
            p[ne] = Z(j, Y), p[ne].index = ne;
          }, this), p.concat().sort((Y, ne) => {
            let V = G(B, Y), $ = G(B, ne);
            return $ < V ? -1 : $ > V ? 1 : 0;
          }).forEach(function(Y, ne) {
            Y.x = ne;
          }, this), j.linkedSeries && j.linkedSeries.forEach(function(Y) {
            let ne = Y.options, V = ne.data;
            ne.dataSorting && ne.dataSorting.enabled || !V || (V.forEach(function($, ee) {
              V[ee] = Z(Y, $), p[ee] && (V[ee].x = p[ee].x, V[ee].index = ee);
            }), Y.setData(V, !1));
          }), p;
        }
        getProcessedData(p) {
          let j = this, B = j.xAxis, Z = j.options.cropThreshold, Y = B == null ? void 0 : B.logarithmic, ne = j.isCartesian, V, $, ee = 0, ue, ce, Q, K = j.xData, ie = j.yData, ae = !1, de = K.length;
          B && (ce = (ue = B.getExtremes()).min, Q = ue.max, ae = !!(B.categories && !B.names.length)), ne && j.sorted && !p && (!Z || de > Z || j.forceCrop) && (K[de - 1] < ce || K[0] > Q ? (K = [], ie = []) : j.yData && (K[0] < ce || K[de - 1] > Q) && (K = (V = this.cropData(j.xData, j.yData, ce, Q)).xData, ie = V.yData, ee = V.start, $ = !0));
          let he = D([Y ? K.map(Y.log2lin) : K], () => j.requireSorting && !ae && u(15, !1, j.chart));
          return { xData: K, yData: ie, cropped: $, cropStart: ee, closestPointRange: he };
        }
        processData(p) {
          let j = this.xAxis;
          if (this.isCartesian && !this.isDirty && !j.isDirty && !this.yAxis.isDirty && !p)
            return !1;
          let B = this.getProcessedData();
          this.cropped = B.cropped, this.cropStart = B.cropStart, this.processedXData = B.xData, this.processedYData = B.yData, this.closestPointRange = this.basePointRange = B.closestPointRange, T(this, "afterProcessData");
        }
        cropData(p, j, B, Z) {
          let Y = p.length, ne, V, $ = 0, ee = Y;
          for (ne = 0; ne < Y; ne++)
            if (p[ne] >= B) {
              $ = Math.max(0, ne - 1);
              break;
            }
          for (V = ne; V < Y; V++)
            if (p[V] > Z) {
              ee = V + 1;
              break;
            }
          return { xData: p.slice($, ee), yData: j.slice($, ee), start: $, end: ee };
        }
        generatePoints() {
          let p = this.options, j = this.processedData || p.data, B = this.processedXData, Z = this.processedYData, Y = this.pointClass, ne = B.length, V = this.cropStart || 0, $ = this.hasGroupedData, ee = p.keys, ue = [], ce = p.dataGrouping && p.dataGrouping.groupAll ? V : 0, Q, K, ie, ae, de = this.data;
          if (!de && !$) {
            let he = [];
            he.length = j.length, de = this.data = he;
          }
          for (ee && $ && (this.options.keys = !1), ae = 0; ae < ne; ae++)
            K = V + ae, $ ? ((ie = new Y(this, [B[ae]].concat(R(Z[ae])))).dataGroup = this.groupMap[ce + ae], ie.dataGroup.options && (ie.options = ie.dataGroup.options, c(ie, ie.dataGroup.options), delete ie.dataLabels)) : (ie = de[K]) || j[K] === void 0 || (de[K] = ie = new Y(this, j[K], B[ae])), ie && (ie.index = $ ? ce + ae : K, ue[ae] = ie);
          if (this.options.keys = ee, de && (ne !== (Q = de.length) || $))
            for (ae = 0; ae < Q; ae++)
              ae !== V || $ || (ae += ne), de[ae] && (de[ae].destroyElements(), de[ae].plotX = void 0);
          this.data = de, this.points = ue, T(this, "afterGeneratePoints");
        }
        getXExtremes(p) {
          return { min: A(p), max: C(p) };
        }
        getExtremes(p, j) {
          let B = this.xAxis, Z = this.yAxis, Y = [], ne = this.requireSorting && !this.is("column") ? 1 : 0, V = !!Z && Z.positiveValuesOnly, $ = j || this.getExtremesFromAll || this.options.getExtremesFromAll, { processedXData: ee, processedYData: ue } = this, ce, Q, K, ie, ae, de, he, fe = 0, ge = 0, me = 0;
          if (this.cropped && $) {
            let we = this.getProcessedData(!0);
            ee = we.xData, ue = we.yData;
          }
          let be = (p = p || this.stackedYData || ue || []).length, ve = ee || this.xData;
          for (B && (fe = (ce = B.getExtremes()).min, ge = ce.max), de = 0; de < be; de++)
            if (ie = ve[de], Q = (se(ae = p[de]) || J(ae)) && ((se(ae) ? ae > 0 : ae.length) || !V), K = j || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !B || (ve[de + ne] || ie) >= fe && (ve[de - ne] || ie) <= ge, Q && K)
              if (he = ae.length)
                for (; he--; )
                  se(ae[he]) && (Y[me++] = ae[he]);
              else
                Y[me++] = ae;
          let ye = { activeYData: Y, dataMin: A(Y), dataMax: C(Y) };
          return T(this, "afterGetExtremes", { dataExtremes: ye }), ye;
        }
        applyExtremes() {
          let p = this.getExtremes();
          return this.dataMin = p.dataMin, this.dataMax = p.dataMax, p;
        }
        getFirstValidPoint(p, j = 0, B = 1) {
          let Z = p.length, Y = j;
          for (; Y >= 0 && Y < Z; ) {
            if (F(p[Y]))
              return p[Y];
            Y += B;
          }
        }
        translate() {
          var ge;
          this.processedXData || this.processData(), this.generatePoints();
          let p = this.options, j = p.stacking, B = this.xAxis, Z = B.categories, Y = this.enabledDataSorting, ne = this.yAxis, V = this.points, $ = V.length, ee = this.pointPlacementToXValue(), ue = !!ee, ce = p.threshold, Q = p.startFromThreshold ? ce : 0, K, ie, ae, de, he = Number.MAX_VALUE;
          function fe(me) {
            return O(me, -1e9, 1e9);
          }
          for (K = 0; K < $; K++) {
            let me, be = V[K], ve = be.x, ye, we, Ae = be.y, Se = be.low, xe = j && ((ge = ne.stacking) == null ? void 0 : ge.stacks[(this.negStacks && Ae < (Q ? 0 : ce) ? "-" : "") + this.stackKey]);
            ie = B.translate(ve, !1, !1, !1, !0, ee), be.plotX = se(ie) ? z(fe(ie)) : void 0, j && this.visible && xe && xe[ve] && (de = this.getStackIndicator(de, ve, this.index), !be.isNull && de.key && (we = (ye = xe[ve]).points[de.key]), ye && J(we) && (Se = we[0], Ae = we[1], Se === Q && de.key === xe[ve].base && (Se = te(se(ce) ? ce : ne.min)), ne.positiveValuesOnly && F(Se) && Se <= 0 && (Se = void 0), be.total = be.stackTotal = te(ye.total), be.percentage = F(be.y) && ye.total ? be.y / ye.total * 100 : void 0, be.stackY = Ae, this.irregularWidths || ye.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), be.yBottom = F(Se) ? fe(ne.translate(Se, !1, !0, !1, !0)) : void 0, this.dataModify && (Ae = this.dataModify.modifyValue(Ae, K)), se(Ae) && be.plotX !== void 0 && (me = se(me = ne.translate(Ae, !1, !0, !1, !0)) ? fe(me) : void 0), be.plotY = me, be.isInside = this.isPointInside(be), be.clientX = ue ? z(B.translate(ve, !1, !1, !1, !0, ee)) : ie, be.negative = (be.y || 0) < (ce || 0), be.category = te(Z && Z[be.x], be.x), be.isNull || be.visible === !1 || (ae !== void 0 && (he = Math.min(he, Math.abs(ie - ae))), ae = ie), be.zone = this.zones.length ? be.getZone() : void 0, !be.graphic && this.group && Y && (be.isNew = !0);
          }
          this.closestPointRangePx = he, T(this, "afterTranslate");
        }
        getValidPoints(p, j, B) {
          let Z = this.chart;
          return (p || this.points || []).filter(function(Y) {
            let { plotX: ne, plotY: V } = Y;
            return !!((B || !Y.isNull && se(V)) && (!j || Z.isInsidePlot(ne, V, { inverted: Z.inverted }))) && Y.visible !== !1;
          });
        }
        getClipBox() {
          let { chart: p, xAxis: j, yAxis: B } = this, { x: Z, y: Y, width: ne, height: V } = X(p.clipBox);
          return j && j.len !== p.plotSizeX && (ne = j.len), B && B.len !== p.plotSizeY && (V = B.len), p.inverted && !this.invertible && ([ne, V] = [V, ne]), { x: Z, y: Y, width: ne, height: V };
        }
        getSharedClipKey() {
          return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
        }
        setClip() {
          let { chart: p, group: j, markerGroup: B } = this, Z = p.sharedClips, Y = p.renderer, ne = this.getClipBox(), V = this.getSharedClipKey(), $ = Z[V];
          $ ? $.animate(ne) : Z[V] = $ = Y.clipRect(ne), j && j.clip(this.options.clip === !1 ? void 0 : $), B && B.clip();
        }
        animate(p) {
          let { chart: j, group: B, markerGroup: Z } = this, Y = j.inverted, ne = f(this.options.animation), V = [this.getSharedClipKey(), ne.duration, ne.easing, ne.defer].join(","), $ = j.sharedClips[V], ee = j.sharedClips[V + "m"];
          if (p && B) {
            let ue = this.getClipBox();
            if ($)
              $.attr("height", ue.height);
            else {
              ue.width = 0, Y && (ue.x = j.plotHeight), $ = j.renderer.clipRect(ue), j.sharedClips[V] = $;
              let ce = { x: -99, y: -99, width: Y ? j.plotWidth + 199 : 99, height: Y ? 99 : j.plotHeight + 199 };
              ee = j.renderer.clipRect(ce), j.sharedClips[V + "m"] = ee;
            }
            B.clip($), Z == null || Z.clip(ee);
          } else if ($ && !$.hasClass("highcharts-animating")) {
            let ue = this.getClipBox(), ce = ne.step;
            (Z != null && Z.element.childNodes.length || j.series.length > 1) && (ne.step = function(Q, K) {
              ce && ce.apply(K, arguments), K.prop === "width" && (ee != null && ee.element) && ee.attr(Y ? "height" : "width", Q + 99);
            }), $.addClass("highcharts-animating").animate(ue, ne);
          }
        }
        afterAnimate() {
          this.setClip(), U(this.chart.sharedClips, (p, j, B) => {
            p && !this.chart.container.querySelector(`[clip-path="url(#${p.id})"]`) && (p.destroy(), delete B[j]);
          }), this.finishedAnimating = !0, T(this, "afterAnimate");
        }
        drawPoints(p = this.points) {
          let j, B, Z, Y, ne, V, $, ee = this.chart, ue = ee.styledMode, { colorAxis: ce, options: Q } = this, K = Q.marker, ie = this[this.specialGroup || "markerGroup"], ae = this.xAxis, de = te(K.enabled, !ae || !!ae.isRadial || null, this.closestPointRangePx >= K.enabledThreshold * K.radius);
          if (K.enabled !== !1 || this._hasPointMarkers)
            for (j = 0; j < p.length; j++)
              if (Y = (Z = (B = p[j]).graphic) ? "animate" : "attr", ne = B.marker || {}, V = !!B.marker, (de && ne.enabled === void 0 || ne.enabled) && !B.isNull && B.visible !== !1) {
                let he = te(ne.symbol, this.symbol, "rect");
                $ = this.markerAttribs(B, B.selected && "select"), this.enabledDataSorting && (B.startXPos = ae.reversed ? -($.width || 0) : ae.width);
                let fe = B.isInside !== !1;
                if (!Z && fe && (($.width || 0) > 0 || B.hasImage) && (B.graphic = Z = ee.renderer.symbol(he, $.x, $.y, $.width, $.height, V ? ne : K).add(ie), this.enabledDataSorting && ee.hasRendered && (Z.attr({ x: B.startXPos }), Y = "animate")), Z && Y === "animate" && Z[fe ? "show" : "hide"](fe).animate($), Z) {
                  let ge = this.pointAttribs(B, ue || !B.selected ? void 0 : "select");
                  ue ? ce && Z.css({ fill: ge.fill }) : Z[Y](ge);
                }
                Z && Z.addClass(B.getClassName(), !0);
              } else
                Z && (B.graphic = Z.destroy());
        }
        markerAttribs(p, j) {
          let B = this.options, Z = B.marker, Y = p.marker || {}, ne = Y.symbol || Z.symbol, V = {}, $, ee, ue = te(Y.radius, Z && Z.radius);
          j && ($ = Z.states[j], ue = te((ee = Y.states && Y.states[j]) && ee.radius, $ && $.radius, ue && ue + ($ && $.radiusPlus || 0))), p.hasImage = ne && ne.indexOf("url") === 0, p.hasImage && (ue = 0);
          let ce = p.pos();
          return se(ue) && ce && (B.crisp && (ce[0] = H(ce[0], p.hasImage ? 0 : ne === "rect" ? (Z == null ? void 0 : Z.lineWidth) || 0 : 1)), V.x = ce[0] - ue, V.y = ce[1] - ue), ue && (V.width = V.height = 2 * ue), V;
        }
        pointAttribs(p, j) {
          let B = this.options.marker, Z = p && p.options, Y = Z && Z.marker || {}, ne = Z && Z.color, V = p && p.color, $ = p && p.zone && p.zone.color, ee, ue, ce = this.color, Q, K, ie = te(Y.lineWidth, B.lineWidth), ae = 1;
          return ce = ne || $ || V || ce, Q = Y.fillColor || B.fillColor || ce, K = Y.lineColor || B.lineColor || ce, j = j || "normal", ee = B.states[j] || {}, ie = te((ue = Y.states && Y.states[j] || {}).lineWidth, ee.lineWidth, ie + te(ue.lineWidthPlus, ee.lineWidthPlus, 0)), Q = ue.fillColor || ee.fillColor || Q, { stroke: K = ue.lineColor || ee.lineColor || K, "stroke-width": ie, fill: Q, opacity: ae = te(ue.opacity, ee.opacity, ae) };
        }
        destroy(p) {
          let j, B, Z, Y = this, ne = Y.chart, V = /AppleWebKit\/533/.test(x.navigator.userAgent), $ = Y.data || [];
          for (T(Y, "destroy", { keepEventsForUpdate: p }), this.removeEvents(p), (Y.axisTypes || []).forEach(function(ee) {
            (Z = Y[ee]) && Z.series && (v(Z.series, Y), Z.isDirty = Z.forceRedraw = !0);
          }), Y.legendItem && Y.chart.legend.destroyItem(Y), j = $.length; j--; )
            (B = $[j]) && B.destroy && B.destroy();
          for (let ee of Y.zones)
            E(ee, void 0, !0);
          N.clearTimeout(Y.animationTimeout), U(Y, function(ee, ue) {
            ee instanceof M && !ee.survive && ee[V && ue === "group" ? "hide" : "destroy"]();
          }), ne.hoverSeries === Y && (ne.hoverSeries = void 0), v(ne.series, Y), ne.orderItems("series"), U(Y, function(ee, ue) {
            p && ue === "hcEvents" || delete Y[ue];
          });
        }
        applyZones() {
          let { area: p, chart: j, graph: B, zones: Z, points: Y, xAxis: ne, yAxis: V, zoneAxis: $ } = this, { inverted: ee, renderer: ue } = j, ce = this[`${$}Axis`], { isXAxis: Q, len: K = 0 } = ce || {}, ie = ((B == null ? void 0 : B.strokeWidth()) || 0) / 2 + 1, ae = (de, he = 0, fe = 0) => {
            ee && (fe = K - fe);
            let { translated: ge = 0, lineClip: me } = de, be = fe - ge;
            me == null || me.push(["L", he, Math.abs(be) < ie ? fe - ie * (be <= 0 ? -1 : 1) : ge]);
          };
          if (Z.length && (B || p) && ce && se(ce.min)) {
            let de = ce.getExtremes().max, he = (me) => {
              me.forEach((be, ve) => {
                (be[0] === "M" || be[0] === "L") && (me[ve] = [be[0], Q ? K - be[1] : be[1], Q ? be[2] : K - be[2]]);
              });
            };
            if (Z.forEach((me) => {
              me.lineClip = [], me.translated = O(ce.toPixels(te(me.value, de), !0) || 0, 0, K);
            }), B && !this.showLine && B.hide(), p && p.hide(), $ === "y" && Y.length < ne.len)
              for (let me of Y) {
                let { plotX: be, plotY: ve, zone: ye } = me, we = ye && Z[Z.indexOf(ye) - 1];
                ye && ae(ye, be, ve), we && ae(we, be, ve);
              }
            let fe = [], ge = ce.toPixels(ce.getExtremes().min, !0);
            Z.forEach((me) => {
              var Ke, Ue;
              let be = me.lineClip || [], ve = Math.round(me.translated || 0);
              ne.reversed && be.reverse();
              let { clip: ye, simpleClip: we } = me, Ae = 0, Se = 0, xe = ne.len, Oe = V.len;
              Q ? (Ae = ve, xe = ge) : (Se = ve, Oe = ge);
              let Pe = [["M", Ae, Se], ["L", xe, Se], ["L", xe, Oe], ["L", Ae, Oe], ["Z"]], Ne = [Pe[0], ...be, Pe[1], Pe[2], ...fe, Pe[3], Pe[4]];
              fe = be.reverse(), ge = ve, ee && (he(Ne), p && he(Pe)), ye ? (ye.animate({ d: Ne }), we == null || we.animate({ d: Pe })) : (ye = me.clip = ue.path(Ne), p && (we = me.simpleClip = ue.path(Pe))), B && ((Ke = me.graph) == null || Ke.clip(ye)), p && ((Ue = me.area) == null || Ue.clip(we));
            });
          } else
            this.visible && (B && B.show(), p && p.show());
        }
        plotGroup(p, j, B, Z, Y) {
          let ne = this[p], V = !ne, $ = { visibility: B, zIndex: Z || 0.1 };
          return F(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && ($.opacity = this.opacity), ne || (this[p] = ne = this.chart.renderer.g().add(Y)), ne.addClass("highcharts-" + j + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (F(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (ne.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), ne.attr($)[V ? "attr" : "animate"](this.getPlotBox(j)), ne;
        }
        getPlotBox(p) {
          let j = this.xAxis, B = this.yAxis, Z = this.chart, Y = Z.inverted && !Z.polar && j && this.invertible && p === "series";
          return Z.inverted && (j = B, B = this.xAxis), { translateX: j ? j.left : Z.plotLeft, translateY: B ? B.top : Z.plotTop, rotation: Y ? 90 : 0, rotationOriginX: Y ? (j.len - B.len) / 2 : 0, rotationOriginY: Y ? (j.len + B.len) / 2 : 0, scaleX: Y ? -1 : 1, scaleY: 1 };
        }
        removeEvents(p) {
          let { eventsToUnbind: j } = this;
          p || le(this), j.length && (j.forEach((B) => {
            B();
          }), j.length = 0);
        }
        render() {
          var ue, ce, Q, K, ie;
          let p = this, { chart: j, options: B, hasRendered: Z } = p, Y = f(B.animation), ne = p.visible ? "inherit" : "hidden", V = B.zIndex, $ = j.seriesGroup, ee = p.finishedAnimating ? 0 : Y.duration;
          T(this, "render"), p.plotGroup("group", "series", ne, V, $), p.markerGroup = p.plotGroup("markerGroup", "markers", ne, V, $), B.clip !== !1 && p.setClip(), ee && ((ue = p.animate) == null || ue.call(p, !0)), p.drawGraph && (p.drawGraph(), p.applyZones()), p.visible && p.drawPoints(), (ce = p.drawDataLabels) == null || ce.call(p), (Q = p.redrawPoints) == null || Q.call(p), B.enableMouseTracking && ((K = p.drawTracker) == null || K.call(p)), ee && ((ie = p.animate) == null || ie.call(p)), Z || (ee && Y.defer && (ee += Y.defer), p.animationTimeout = P(() => {
            p.afterAnimate();
          }, ee || 0)), p.isDirty = !1, p.hasRendered = !0, T(p, "afterRender");
        }
        redraw() {
          let p = this.isDirty || this.isDirtyData;
          this.translate(), this.render(), p && delete this.kdTree;
        }
        reserveSpace() {
          return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
        }
        searchPoint(p, j) {
          let { xAxis: B, yAxis: Z } = this, Y = this.chart.inverted;
          return this.searchKDTree({ clientX: Y ? B.len - p.chartY + B.pos : p.chartX - B.pos, plotY: Y ? Z.len - p.chartX + Z.pos : p.chartY - Z.pos }, j, p);
        }
        buildKDTree(p) {
          this.buildingKdTree = !0;
          let j = this, B = j.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
          delete j.kdTree, P(function() {
            j.kdTree = function Z(Y, ne, V) {
              let $, ee, ue = Y == null ? void 0 : Y.length;
              if (ue)
                return $ = j.kdAxisArray[ne % V], Y.sort((ce, Q) => (ce[$] || 0) - (Q[$] || 0)), { point: Y[ee = Math.floor(ue / 2)], left: Z(Y.slice(0, ee), ne + 1, V), right: Z(Y.slice(ee + 1), ne + 1, V) };
            }(j.getValidPoints(void 0, !j.directTouch), B, B), j.buildingKdTree = !1;
          }, j.options.kdNow || (p == null ? void 0 : p.type) === "touchstart" ? 0 : 1);
        }
        searchKDTree(p, j, B) {
          let Z = this, [Y, ne] = this.kdAxisArray, V = j ? "distX" : "dist", $ = (Z.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, ee = !!Z.isBubble;
          if (this.kdTree || this.buildingKdTree || this.buildKDTree(B), this.kdTree)
            return function ue(ce, Q, K, ie) {
              var ye;
              let ae = Q.point, de = Z.kdAxisArray[K % ie], he, fe, ge = ae;
              (function(we, Ae) {
                var ft;
                let Se = we[Y], xe = Ae[Y], Oe = F(Se) && F(xe) ? Se - xe : null, Pe = we[ne], Ne = Ae[ne], Ke = F(Pe) && F(Ne) ? Pe - Ne : 0, Ue = ee && ((ft = Ae.marker) == null ? void 0 : ft.radius) || 0;
                Ae.dist = Math.sqrt((Oe && Oe * Oe || 0) + Ke * Ke) - Ue, Ae.distX = F(Oe) ? Math.abs(Oe) - Ue : Number.MAX_VALUE;
              })(ce, ae);
              let me = (ce[de] || 0) - (ae[de] || 0) + (ee && ((ye = ae.marker) == null ? void 0 : ye.radius) || 0), be = me < 0 ? "left" : "right", ve = me < 0 ? "right" : "left";
              return Q[be] && (ge = (he = ue(ce, Q[be], K + 1, ie))[V] < ge[V] ? he : ae), Q[ve] && Math.sqrt(me * me) < ge[V] && (ge = (fe = ue(ce, Q[ve], K + 1, ie))[V] < ge[V] ? fe : ge), ge;
            }(p, this.kdTree, $, $);
        }
        pointPlacementToXValue() {
          let { options: p, xAxis: j } = this, B = p.pointPlacement;
          return B === "between" && (B = j.reversed ? -0.5 : 0.5), se(B) ? B * (p.pointRange || j.pointRange) : 0;
        }
        isPointInside(p) {
          let { chart: j, xAxis: B, yAxis: Z } = this, { plotX: Y = -1, plotY: ne = -1 } = p;
          return ne >= 0 && ne <= (Z ? Z.len : j.plotHeight) && Y >= 0 && Y <= (B ? B.len : j.plotWidth);
        }
        drawTracker() {
          var Q;
          let p = this, j = p.options, B = j.trackByArea, Z = [].concat((B ? p.areaPath : p.graphPath) || []), Y = p.chart, ne = Y.pointer, V = Y.renderer, $ = ((Q = Y.options.tooltip) == null ? void 0 : Q.snap) || 0, ee = () => {
            j.enableMouseTracking && Y.hoverSeries !== p && p.onMouseOver();
          }, ue = "rgba(192,192,192," + (d ? 1e-4 : 2e-3) + ")", ce = p.tracker;
          ce ? ce.attr({ d: Z }) : p.graph && (p.tracker = ce = V.path(Z).attr({ visibility: p.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(B ? "highcharts-tracker-area" : "highcharts-tracker-line").add(p.group), Y.styledMode || ce.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: ue, fill: B ? ue : "none", "stroke-width": p.graph.strokeWidth() + (B ? 0 : 2 * $) }), [p.tracker, p.markerGroup, p.dataLabelsGroup].forEach((K) => {
            K && (K.addClass("highcharts-tracker").on("mouseover", ee).on("mouseout", (ie) => {
              ne == null || ne.onTrackerMouseOut(ie);
            }), j.cursor && !Y.styledMode && K.css({ cursor: j.cursor }), K.on("touchstart", ee));
          })), T(this, "afterDrawTracker");
        }
        addPoint(p, j, B, Z, Y) {
          let ne, V, $ = this.options, ee = this.data, ue = this.chart, ce = this.xAxis, Q = ce && ce.hasNames && ce.names, K = $.data, ie = this.xData;
          j = te(j, !0);
          let ae = { series: this };
          this.pointClass.prototype.applyOptions.apply(ae, [p]);
          let de = ae.x;
          if (V = ie.length, this.requireSorting && de < ie[V - 1])
            for (ne = !0; V && ie[V - 1] > de; )
              V--;
          this.updateParallelArrays(ae, "splice", [V, 0, 0]), this.updateParallelArrays(ae, V), Q && ae.name && (Q[de] = ae.name), K.splice(V, 0, p), (ne || this.processedData) && (this.data.splice(V, 0, null), this.processData()), $.legendType === "point" && this.generatePoints(), B && (ee[0] && ee[0].remove ? ee[0].remove(!1) : (ee.shift(), this.updateParallelArrays(ae, "shift"), K.shift())), Y !== !1 && T(this, "addPoint", { point: ae }), this.isDirty = !0, this.isDirtyData = !0, j && ue.redraw(Z);
        }
        removePoint(p, j, B) {
          let Z = this, Y = Z.data, ne = Y[p], V = Z.points, $ = Z.chart, ee = function() {
            V && V.length === Y.length && V.splice(p, 1), Y.splice(p, 1), Z.options.data.splice(p, 1), Z.updateParallelArrays(ne || { series: Z }, "splice", [p, 1]), ne && ne.destroy(), Z.isDirty = !0, Z.isDirtyData = !0, j && $.redraw();
          };
          b(B, $), j = te(j, !0), ne ? ne.firePointEvent("remove", null, ee) : ee();
        }
        remove(p, j, B, Z) {
          let Y = this, ne = Y.chart;
          function V() {
            Y.destroy(Z), ne.isDirtyLegend = ne.isDirtyBox = !0, ne.linkSeries(Z), te(p, !0) && ne.redraw(j);
          }
          B !== !1 ? T(Y, "remove", null, V) : V();
        }
        update(p, j) {
          var he, fe, ge;
          T(this, "update", { options: p = k(p, this.userOptions) });
          let B = this, Z = B.chart, Y = B.userOptions, ne = B.initialType || B.type, V = Z.options.plotOptions, $ = I[ne].prototype, ee = B.finishedAnimating && { animation: !1 }, ue = {}, ce, Q, K = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], ie = p.type || Y.type || Z.options.chart.type, ae = !(this.hasDerivedData || ie && ie !== this.type || p.pointStart !== void 0 || p.pointInterval !== void 0 || p.relativeXValue !== void 0 || p.joinBy || p.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((me) => B.hasOptionChanged(me)));
          ie = ie || ne, ae && (K.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), p.visible !== !1 && K.push("area", "graph"), B.parallelArrays.forEach(function(me) {
            K.push(me + "Data");
          }), p.data && (p.dataSorting && c(B.options.dataSorting, p.dataSorting), this.setData(p.data, !1))), p = X(Y, { index: Y.index === void 0 ? B.index : Y.index, pointStart: ((he = V == null ? void 0 : V.series) == null ? void 0 : he.pointStart) ?? Y.pointStart ?? ((fe = B.xData) == null ? void 0 : fe[0]) }, !ae && { data: B.options.data }, p, ee), ae && p.data && (p.data = B.options.data), (K = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(K)).forEach(function(me) {
            K[me] = B[me], delete B[me];
          });
          let de = !1;
          if (I[ie]) {
            if (de = ie !== B.type, B.remove(!1, !1, !1, !0), de)
              if (Z.propFromSeries(), Object.setPrototypeOf)
                Object.setPrototypeOf(B, I[ie].prototype);
              else {
                let me = Object.hasOwnProperty.call(B, "hcEvents") && B.hcEvents;
                for (Q in $)
                  B[Q] = void 0;
                c(B, I[ie].prototype), me ? B.hcEvents = me : delete B.hcEvents;
              }
          } else
            u(17, !0, Z, { missingModuleFor: ie });
          if (K.forEach(function(me) {
            B[me] = K[me];
          }), B.init(Z, p), ae && this.points)
            for (let me of ((ce = B.options).visible === !1 ? (ue.graphic = 1, ue.dataLabel = 1) : (this.hasMarkerChanged(ce, Y) && (ue.graphic = 1), (ge = B.hasDataLabels) != null && ge.call(B) || (ue.dataLabel = 1)), this.points))
              me && me.series && (me.resolveColor(), Object.keys(ue).length && me.destroyElements(ue), ce.showInLegend === !1 && me.legendItem && Z.legend.destroyItem(me));
          B.initialType = ne, Z.linkSeries(), Z.setSortedData(), de && B.linkedSeries.length && (B.isDirtyData = !0), T(this, "afterUpdate"), te(j, !0) && Z.redraw(!!ae && void 0);
        }
        setName(p) {
          this.name = this.options.name = this.userOptions.name = p, this.chart.isDirtyLegend = !0;
        }
        hasOptionChanged(p) {
          var V, $;
          let j = this.chart, B = this.options[p], Z = j.options.plotOptions, Y = this.userOptions[p], ne = te((V = Z == null ? void 0 : Z[this.type]) == null ? void 0 : V[p], ($ = Z == null ? void 0 : Z.series) == null ? void 0 : $[p]);
          return Y && !F(ne) ? B !== Y : B !== te(ne, B);
        }
        onMouseOver() {
          let p = this.chart, j = p.hoverSeries, B = p.pointer;
          B == null || B.setHoverChartIndex(), j && j !== this && j.onMouseOut(), this.options.events.mouseOver && T(this, "mouseOver"), this.setState("hover"), p.hoverSeries = this;
        }
        onMouseOut() {
          let p = this.options, j = this.chart, B = j.tooltip, Z = j.hoverPoint;
          j.hoverSeries = null, Z && Z.onMouseOut(), this && p.events.mouseOut && T(this, "mouseOut"), B && !this.stickyTracking && (!B.shared || this.noSharedTooltip) && B.hide(), j.series.forEach(function(Y) {
            Y.setState("", !0);
          });
        }
        setState(p, j) {
          let B = this, Z = B.options, Y = B.graph, ne = Z.inactiveOtherPoints, V = Z.states, $ = te(V[p || "normal"] && V[p || "normal"].animation, B.chart.options.chart.animation), ee = Z.lineWidth, ue = Z.opacity;
          if (p = p || "", B.state !== p && ([B.group, B.markerGroup, B.dataLabelsGroup].forEach(function(ce) {
            ce && (B.state && ce.removeClass("highcharts-series-" + B.state), p && ce.addClass("highcharts-series-" + p));
          }), B.state = p, !B.chart.styledMode)) {
            if (V[p] && V[p].enabled === !1)
              return;
            if (p && (ee = V[p].lineWidth || ee + (V[p].lineWidthPlus || 0), ue = te(V[p].opacity, ue)), Y && !Y.dashstyle && se(ee))
              for (let ce of [Y, ...this.zones.map((Q) => Q.graph)])
                ce == null || ce.animate({ "stroke-width": ee }, $);
            ne || [B.group, B.markerGroup, B.dataLabelsGroup, B.labelBySeries].forEach(function(ce) {
              ce && ce.animate({ opacity: ue }, $);
            });
          }
          j && ne && B.points && B.setAllPointsToState(p || void 0);
        }
        setAllPointsToState(p) {
          this.points.forEach(function(j) {
            j.setState && j.setState(p);
          });
        }
        setVisible(p, j) {
          var $;
          let B = this, Z = B.chart, Y = Z.options.chart.ignoreHiddenSeries, ne = B.visible;
          B.visible = p = B.options.visible = B.userOptions.visible = p === void 0 ? !ne : p;
          let V = p ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((ee) => {
            var ue;
            (ue = B[ee]) == null || ue[V]();
          }), (Z.hoverSeries === B || (($ = Z.hoverPoint) == null ? void 0 : $.series) === B) && B.onMouseOut(), B.legendItem && Z.legend.colorizeItem(B, p), B.isDirty = !0, B.options.stacking && Z.series.forEach((ee) => {
            ee.options.stacking && ee.visible && (ee.isDirty = !0);
          }), B.linkedSeries.forEach((ee) => {
            ee.setVisible(p, !1);
          }), Y && (Z.isDirtyBox = !0), T(B, V), j !== !1 && Z.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(p) {
          this.selected = p = this.options.selected = p === void 0 ? !this.selected : p, this.checkbox && (this.checkbox.checked = p), T(this, p ? "select" : "unselect");
        }
        shouldShowTooltip(p, j, B = {}) {
          return B.series = this, B.visiblePlotOnly = !0, this.chart.isInsidePlot(p, j, B);
        }
        drawLegendSymbol(p, j) {
          var B;
          (B = l[this.options.legendSymbol || "rectangle"]) == null || B.call(this, p, j);
        }
      }
      return W.defaultOptions = m, W.types = g.seriesTypes, W.registerType = g.registerSeriesType, c(W.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: !1, invertible: !0, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: h, requireSorting: !0, sorted: !0 }), g.series = W, W;
    }), n(i, "Core/Legend/Legend.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Foundation.js"], i["Core/Globals.js"], i["Core/Series/Series.js"], i["Core/Series/Point.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Templating.js"], i["Core/Utilities.js"]], function(r, s, o, a, l, h, m, g) {
      var M;
      let { animObject: N, setAnimation: f } = r, { registerEventOptions: b } = s, { composed: S, marginNames: y } = o, { distribute: d } = h, { format: x } = m, { addEvent: I, createElement: C, css: A, defined: O, discardElement: z, find: H, fireEvent: F, isNumber: E, merge: k, pick: v, pushUnique: u, relativeLength: c, stableSort: w, syncTimeout: T } = g;
      class D {
        constructor(L, J) {
          this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = L, this.setOptions(J), J.enabled && (this.render(), b(this, J), I(this.chart, "endResize", function() {
            this.legend.positionCheckboxes();
          })), I(this.chart, "render", () => {
            this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
          });
        }
        setOptions(L) {
          let J = v(L.padding, 8);
          this.options = L, this.chart.styledMode || (this.itemStyle = L.itemStyle, this.itemHiddenStyle = k(this.itemStyle, L.itemHiddenStyle)), this.itemMarginTop = L.itemMarginTop, this.itemMarginBottom = L.itemMarginBottom, this.padding = J, this.initialItemY = J - 5, this.symbolWidth = v(L.symbolWidth, 16), this.pages = [], this.proximate = L.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
        }
        update(L, J) {
          let se = this.chart;
          this.setOptions(k(!0, this.options, L)), "events" in this.options && b(this, this.options), this.destroy(), se.isDirtyLegend = se.isDirtyBox = !0, v(J, !0) && se.redraw(), F(this, "afterUpdate", { redraw: J });
        }
        colorizeItem(L, J) {
          let { area: se, group: _, label: X, line: U, symbol: te } = L.legendItem || {};
          if (_ == null || _[J ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
            let { itemHiddenStyle: le = {} } = this, R = le.color, { fillColor: P, fillOpacity: W, lineColor: q, marker: p } = L.options, j = (B) => (!J && (B.fill && (B.fill = R), B.stroke && (B.stroke = R)), B);
            X == null || X.css(k(J ? this.itemStyle : le)), U == null || U.attr(j({ stroke: q || L.color })), te && te.attr(j(p && te.isMarker ? L.pointAttribs() : { fill: L.color })), se == null || se.attr(j({ fill: P || L.color, "fill-opacity": P ? 1 : W ?? 0.75 }));
          }
          F(this, "afterColorizeItem", { item: L, visible: J });
        }
        positionItems() {
          this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
        }
        positionItem(L) {
          let { group: J, x: se = 0, y: _ = 0 } = L.legendItem || {}, X = this.options, U = X.symbolPadding, te = !X.rtl, le = L.checkbox;
          if (J && J.element) {
            let R = { translateX: te ? se : this.legendWidth - se - 2 * U - 4, translateY: _ };
            J[O(J.translateY) ? "animate" : "attr"](R, void 0, () => {
              F(this, "afterPositionItem", { item: L });
            });
          }
          le && (le.x = se, le.y = _);
        }
        destroyItem(L) {
          let J = L.checkbox, se = L.legendItem || {};
          for (let _ of ["group", "label", "line", "symbol"])
            se[_] && (se[_] = se[_].destroy());
          J && z(J), L.legendItem = void 0;
        }
        destroy() {
          for (let L of this.getAllItems())
            this.destroyItem(L);
          for (let L of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"])
            this[L] && (this[L] = this[L].destroy());
          this.display = null;
        }
        positionCheckboxes() {
          let L, J = this.group && this.group.alignAttr, se = this.clipHeight || this.legendHeight, _ = this.titleHeight;
          J && (L = J.translateY, this.allItems.forEach(function(X) {
            let U, te = X.checkbox;
            te && (U = L + _ + te.y + (this.scrollOffset || 0) + 3, A(te, { left: J.translateX + X.checkboxOffset + te.x - 20 + "px", top: U + "px", display: this.proximate || U > L - 6 && U < L + se - 6 ? "" : "none" }));
          }, this));
        }
        renderTitle() {
          let L = this.options, J = this.padding, se = L.title, _, X = 0;
          se.text && (this.title || (this.title = this.chart.renderer.label(se.text, J - 3, J - 4, void 0, void 0, void 0, L.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(se.style), this.title.add(this.group)), se.width || this.title.css({ width: this.maxLegendWidth + "px" }), X = (_ = this.title.getBBox()).height, this.offsetWidth = _.width, this.contentGroup.attr({ translateY: X })), this.titleHeight = X;
        }
        setText(L) {
          let J = this.options;
          L.legendItem.label.attr({ text: J.labelFormat ? x(J.labelFormat, L, this.chart) : J.labelFormatter.call(L) });
        }
        renderItem(L) {
          let J = L.legendItem = L.legendItem || {}, se = this.chart, _ = se.renderer, X = this.options, U = X.layout === "horizontal", te = this.symbolWidth, le = X.symbolPadding || 0, R = this.itemStyle, P = this.itemHiddenStyle, W = U ? v(X.itemDistance, 20) : 0, q = !X.rtl, p = !L.series, j = !p && L.series.drawLegendSymbol ? L.series : L, B = j.options, Z = !!this.createCheckboxForItem && B && B.showCheckbox, Y = X.useHTML, ne = L.options.className, V = J.label, $ = te + le + W + (Z ? 20 : 0);
          !V && (J.group = _.g("legend-item").addClass("highcharts-" + j.type + "-series highcharts-color-" + L.colorIndex + (ne ? " " + ne : "") + (p ? " highcharts-series-" + L.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), J.label = V = _.text("", q ? te + le : -le, this.baseline || 0, Y), se.styledMode || V.css(k(L.visible ? R : P)), V.attr({ align: q ? "left" : "right", zIndex: 2 }).add(J.group), !this.baseline && (this.fontMetrics = _.fontMetrics(V), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, V.attr("y", this.baseline), this.symbolHeight = v(X.symbolHeight, this.fontMetrics.f), X.squareSymbol && (this.symbolWidth = v(X.symbolWidth, Math.max(this.symbolHeight, 16)), $ = this.symbolWidth + le + W + (Z ? 20 : 0), q && V.attr("x", this.symbolWidth + le))), j.drawLegendSymbol(this, L), this.setItemEvents && this.setItemEvents(L, V, Y)), Z && !L.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(L), this.colorizeItem(L, L.visible), (se.styledMode || !R.width) && V.css({ width: (X.itemWidth || this.widthOption || se.spacingBox.width) - $ + "px" }), this.setText(L);
          let ee = V.getBBox(), ue = this.fontMetrics && this.fontMetrics.h || 0;
          L.itemWidth = L.checkboxOffset = X.itemWidth || J.labelWidth || ee.width + $, this.maxItemWidth = Math.max(this.maxItemWidth, L.itemWidth), this.totalItemWidth += L.itemWidth, this.itemHeight = L.itemHeight = Math.round(J.labelHeight || (ee.height > 1.5 * ue ? ee.height : ue));
        }
        layoutItem(L) {
          let J = this.options, se = this.padding, _ = J.layout === "horizontal", X = L.itemHeight, U = this.itemMarginBottom, te = this.itemMarginTop, le = _ ? v(J.itemDistance, 20) : 0, R = this.maxLegendWidth, P = J.alignColumns && this.totalItemWidth > R ? this.maxItemWidth : L.itemWidth, W = L.legendItem || {};
          _ && this.itemX - se + P > R && (this.itemX = se, this.lastLineHeight && (this.itemY += te + this.lastLineHeight + U), this.lastLineHeight = 0), this.lastItemY = te + this.itemY + U, this.lastLineHeight = Math.max(X, this.lastLineHeight), W.x = this.itemX, W.y = this.itemY, _ ? this.itemX += P : (this.itemY += te + X + U, this.lastLineHeight = X), this.offsetWidth = this.widthOption || Math.max((_ ? this.itemX - se - (L.checkbox ? 0 : le) : P) + se, this.offsetWidth);
        }
        getAllItems() {
          let L = [];
          return this.chart.series.forEach(function(J) {
            let se = J && J.options;
            J && v(se.showInLegend, !O(se.linkedTo) && void 0, !0) && (L = L.concat((J.legendItem || {}).labels || (se.legendType === "point" ? J.data : J)));
          }), F(this, "afterGetAllItems", { allItems: L }), L;
        }
        getAlignment() {
          let L = this.options;
          return this.proximate ? L.align.charAt(0) + "tv" : L.floating ? "" : L.align.charAt(0) + L.verticalAlign.charAt(0) + L.layout.charAt(0);
        }
        adjustMargins(L, J) {
          let se = this.chart, _ = this.options, X = this.getAlignment();
          X && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(U, te) {
            U.test(X) && !O(L[te]) && (se[y[te]] = Math.max(se[y[te]], se.legend[(te + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][te] * _[te % 2 ? "x" : "y"] + v(_.margin, 12) + J[te] + (se.titleOffset[te] || 0)));
          });
        }
        proximatePositions() {
          let L, J = this.chart, se = [], _ = this.options.align === "left";
          for (let X of (this.allItems.forEach(function(U) {
            let te, le, R = _, P, W;
            U.yAxis && (U.xAxis.options.reversed && (R = !R), U.points && (te = H(R ? U.points : U.points.slice(0).reverse(), function(q) {
              return E(q.plotY);
            })), le = this.itemMarginTop + U.legendItem.label.getBBox().height + this.itemMarginBottom, W = U.yAxis.top - J.plotTop, P = U.visible ? (te ? te.plotY : U.yAxis.height) + (W - 0.3 * le) : W + U.yAxis.height, se.push({ target: P, size: le, item: U }));
          }, this), d(se, J.plotHeight)))
            L = X.item.legendItem || {}, E(X.pos) && (L.y = J.plotTop - J.spacing[0] + X.pos);
        }
        render() {
          let L = this.chart, J = L.renderer, se = this.options, _ = this.padding, X = this.getAllItems(), U, te, le, R = this.group, P, W = this.box;
          this.itemX = _, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = c(se.width, L.spacingBox.width - _), P = L.spacingBox.width - 2 * _ - se.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (P /= 2), this.maxLegendWidth = this.widthOption || P, R || (this.group = R = J.g("legend").addClass(se.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = J.g().attr({ zIndex: 1 }).add(R), this.scrollGroup = J.g().add(this.contentGroup)), this.renderTitle(), w(X, (q, p) => (q.options && q.options.legendIndex || 0) - (p.options && p.options.legendIndex || 0)), se.reversed && X.reverse(), this.allItems = X, this.display = U = !!X.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, X.forEach(this.renderItem, this), X.forEach(this.layoutItem, this), te = (this.widthOption || this.offsetWidth) + _, le = this.lastItemY + this.lastLineHeight + this.titleHeight, le = this.handleOverflow(le) + _, W || (this.box = W = J.rect().addClass("highcharts-legend-box").attr({ r: se.borderRadius }).add(R)), L.styledMode || W.attr({ stroke: se.borderColor, "stroke-width": se.borderWidth || 0, fill: se.backgroundColor || "none" }).shadow(se.shadow), te > 0 && le > 0 && W[W.placed ? "animate" : "attr"](W.crisp.call({}, { x: 0, y: 0, width: te, height: le }, W.strokeWidth())), R[U ? "show" : "hide"](), L.styledMode && R.getStyle("display") === "none" && (te = le = 0), this.legendWidth = te, this.legendHeight = le, U && this.align(), this.proximate || this.positionItems(), F(this, "afterRender");
        }
        align(L = this.chart.spacingBox) {
          let J = this.chart, se = this.options, _ = L.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && J.titleOffset[0] > 0 ? _ += J.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && J.titleOffset[2] > 0 && (_ -= J.titleOffset[2]), _ !== L.y && (L = k(L, { y: _ })), J.hasRendered || (this.group.placed = !1), this.group.align(k(se, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : se.verticalAlign }), !0, L);
        }
        handleOverflow(L) {
          let J = this, se = this.chart, _ = se.renderer, X = this.options, U = X.y, te = X.verticalAlign === "top", le = this.padding, R = X.maxHeight, P = X.navigation, W = v(P.animation, !0), q = P.arrowSize || 12, p = this.pages, j = this.allItems, B = function(ce) {
            typeof ce == "number" ? ue.attr({ height: ce }) : ue && (J.clipRect = ue.destroy(), J.contentGroup.clip()), J.contentGroup.div && (J.contentGroup.div.style.clip = ce ? "rect(" + le + "px,9999px," + (le + ce) + "px,0)" : "auto");
          }, Z = function(ce) {
            return J[ce] = _.circle(0, 0, 1.3 * q).translate(q / 2, q / 2).add(ee), se.styledMode || J[ce].attr("fill", "rgba(0,0,0,0.0001)"), J[ce];
          }, Y, ne, V, $ = se.spacingBox.height + (te ? -U : U) - le, ee = this.nav, ue = this.clipRect;
          return X.layout !== "horizontal" || X.verticalAlign === "middle" || X.floating || ($ /= 2), R && ($ = Math.min($, R)), p.length = 0, L && $ > 0 && L > $ && P.enabled !== !1 ? (this.clipHeight = Y = Math.max($ - 20 - this.titleHeight - le, 0), this.currentPage = v(this.currentPage, 1), this.fullHeight = L, j.forEach((ce, Q) => {
            let K = (V = ce.legendItem || {}).y || 0, ie = Math.round(V.label.getBBox().height), ae = p.length;
            (!ae || K - p[ae - 1] > Y && (ne || K) !== p[ae - 1]) && (p.push(ne || K), ae++), V.pageIx = ae - 1, ne && ((j[Q - 1].legendItem || {}).pageIx = ae - 1), Q === j.length - 1 && K + ie - p[ae - 1] > Y && K > p[ae - 1] && (p.push(K), V.pageIx = ae), K !== ne && (ne = K);
          }), ue || (ue = J.clipRect = _.clipRect(0, le - 2, 9999, 0), J.contentGroup.clip(ue)), B(Y), ee || (this.nav = ee = _.g().attr({ zIndex: 1 }).add(this.group), this.up = _.symbol("triangle", 0, 0, q, q).add(ee), Z("upTracker").on("click", function() {
            J.scroll(-1, W);
          }), this.pager = _.text("", 15, 10).addClass("highcharts-legend-navigation"), !se.styledMode && P.style && this.pager.css(P.style), this.pager.add(ee), this.down = _.symbol("triangle-down", 0, 0, q, q).add(ee), Z("downTracker").on("click", function() {
            J.scroll(1, W);
          })), J.scroll(0), L = $) : ee && (B(), this.nav = ee.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), L;
        }
        scroll(L, J) {
          let se = this.chart, _ = this.pages, X = _.length, U = this.clipHeight, te = this.options.navigation, le = this.pager, R = this.padding, P = this.currentPage + L;
          P > X && (P = X), P > 0 && (J !== void 0 && f(J, se), this.nav.attr({ translateX: R, translateY: U + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(W) {
            W.attr({ class: P === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }), le.attr({ text: P + "/" + X }), [this.down, this.downTracker].forEach(function(W) {
            W.attr({ x: 18 + this.pager.getBBox().width, class: P === X ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }, this), se.styledMode || (this.up.attr({ fill: P === 1 ? te.inactiveColor : te.activeColor }), this.upTracker.css({ cursor: P === 1 ? "default" : "pointer" }), this.down.attr({ fill: P === X ? te.inactiveColor : te.activeColor }), this.downTracker.css({ cursor: P === X ? "default" : "pointer" })), this.scrollOffset = -_[P - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = P, this.positionCheckboxes(), T(() => {
            F(this, "afterScroll", { currentPage: P });
          }, N(v(J, se.renderer.globalAnimation, !0)).duration));
        }
        setItemEvents(L, J, se) {
          let _ = this, X = L.legendItem || {}, U = _.chart.renderer.boxWrapper, te = L instanceof l, le = L instanceof a, R = "highcharts-legend-" + (te ? "point" : "series") + "-active", P = _.chart.styledMode, W = se ? [J, X.symbol] : [X.group], q = (p) => {
            _.allItems.forEach((j) => {
              L !== j && [j].concat(j.linkedSeries || []).forEach((B) => {
                B.setState(p, !te);
              });
            });
          };
          for (let p of W)
            p && p.on("mouseover", function() {
              L.visible && q("inactive"), L.setState("hover"), L.visible && U.addClass(R), P || J.css(_.options.itemHoverStyle);
            }).on("mouseout", function() {
              _.chart.styledMode || J.css(k(L.visible ? _.itemStyle : _.itemHiddenStyle)), q(""), U.removeClass(R), L.setState();
            }).on("click", function(j) {
              let B = function() {
                L.setVisible && L.setVisible(), q(L.visible ? "inactive" : "");
              };
              U.removeClass(R), F(_, "itemClick", { browserEvent: j, legendItem: L }, B), te ? L.firePointEvent("legendItemClick", { browserEvent: j }) : le && F(L, "legendItemClick", { browserEvent: j });
            });
        }
        createCheckboxForItem(L) {
          L.checkbox = C("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: L.selected, defaultChecked: L.selected }, this.options.itemCheckboxStyle, this.chart.container), I(L.checkbox, "click", function(J) {
            let se = J.target;
            F(L.series || L, "checkboxClick", { checked: se.checked, item: L }, function() {
              L.select();
            });
          });
        }
      }
      return (M = D || (D = {})).compose = function(G) {
        u(S, "Core.Legend") && I(G, "beforeMargins", function() {
          this.legend = new M(this, this.options.legend);
        });
      }, D;
    }), n(i, "Core/Chart/Chart.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Axis/Axis.js"], i["Core/Defaults.js"], i["Core/Templating.js"], i["Core/Foundation.js"], i["Core/Globals.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Renderer/SVG/SVGRenderer.js"], i["Core/Time.js"], i["Core/Utilities.js"], i["Core/Renderer/HTML/AST.js"], i["Core/Axis/Tick.js"]], function(r, s, o, a, l, h, m, g, M, N, f, b, S, y) {
      let { animate: d, animObject: x, setAnimation: I } = r, { defaultOptions: C, defaultTime: A } = o, { numberFormat: O } = a, { registerEventOptions: z } = l, { charts: H, doc: F, marginNames: E, svg: k, win: v } = h, { seriesTypes: u } = M, { addEvent: c, attr: w, createElement: T, css: D, defined: G, diffObjects: L, discardElement: J, erase: se, error: _, extend: X, find: U, fireEvent: te, getStyle: le, isArray: R, isNumber: P, isObject: W, isString: q, merge: p, objectEach: j, pick: B, pInt: Z, relativeLength: Y, removeEvent: ne, splat: V, syncTimeout: $, uniqueKey: ee } = b;
      class ue {
        static chart(Q, K, ie) {
          return new ue(Q, K, ie);
        }
        constructor(Q, K, ie) {
          this.sharedClips = {};
          let ae = [...arguments];
          (q(Q) || Q.nodeName) && (this.renderTo = ae.shift()), this.init(ae[0], ae[1]);
        }
        setZoomOptions() {
          let Q = this.options.chart, K = Q.zooming;
          this.zooming = { ...K, type: B(Q.zoomType, K.type), key: B(Q.zoomKey, K.key), pinchType: B(Q.pinchType, K.pinchType), singleTouch: B(Q.zoomBySingleTouch, K.singleTouch, !1), resetButton: p(K.resetButton, Q.resetZoomButton) };
        }
        init(Q, K) {
          te(this, "init", { args: arguments }, function() {
            let ie = p(C, Q), ae = ie.chart;
            this.userOptions = X({}, Q), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = K, this.isResizing = 0, this.options = ie, this.axes = [], this.series = [], this.time = Q.time && Object.keys(Q.time).length ? new f(Q.time) : h.time, this.numberFormatter = ae.numberFormatter || O, this.styledMode = ae.styledMode, this.hasCartesianSeries = ae.showAxes, this.index = H.length, H.push(this), h.chartCount++, z(this, ae), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), te(this, "afterInit"), this.firstRender();
          });
        }
        initSeries(Q) {
          let K = this.options.chart, ie = Q.type || K.type, ae = u[ie];
          ae || _(17, !0, this, { missingModuleFor: ie });
          let de = new ae();
          return typeof de.init == "function" && de.init(this, Q), de;
        }
        setSortedData() {
          this.getSeriesOrderByLinks().forEach(function(Q) {
            Q.points || Q.data || !Q.enabledDataSorting || Q.setData(Q.options.data, !1);
          });
        }
        getSeriesOrderByLinks() {
          return this.series.concat().sort(function(Q, K) {
            return Q.linkedSeries.length || K.linkedSeries.length ? K.linkedSeries.length - Q.linkedSeries.length : 0;
          });
        }
        orderItems(Q, K = 0) {
          let ie = this[Q], ae = this.options[Q] = V(this.options[Q]).slice(), de = this.userOptions[Q] = this.userOptions[Q] ? V(this.userOptions[Q]).slice() : [];
          if (this.hasRendered && (ae.splice(K), de.splice(K)), ie)
            for (let he = K, fe = ie.length; he < fe; ++he) {
              let ge = ie[he];
              ge && (ge.index = he, ge instanceof g && (ge.name = ge.getName()), ge.options.isInternal || (ae[he] = ge.options, de[he] = ge.userOptions));
            }
        }
        isInsidePlot(Q, K, ie = {}) {
          var xe;
          let { inverted: ae, plotBox: de, plotLeft: he, plotTop: fe, scrollablePlotBox: ge } = this, { scrollLeft: me = 0, scrollTop: be = 0 } = ie.visiblePlotOnly && ((xe = this.scrollablePlotArea) == null ? void 0 : xe.scrollingContainer) || {}, ve = ie.series, ye = ie.visiblePlotOnly && ge || de, we = ie.inverted ? K : Q, Ae = ie.inverted ? Q : K, Se = { x: we, y: Ae, isInsidePlot: !0, options: ie };
          if (!ie.ignoreX) {
            let Oe = ve && (ae && !this.polar ? ve.yAxis : ve.xAxis) || { pos: he, len: 1 / 0 }, Pe = ie.paneCoordinates ? Oe.pos + we : he + we;
            Pe >= Math.max(me + he, Oe.pos) && Pe <= Math.min(me + he + ye.width, Oe.pos + Oe.len) || (Se.isInsidePlot = !1);
          }
          if (!ie.ignoreY && Se.isInsidePlot) {
            let Oe = !ae && ie.axis && !ie.axis.isXAxis && ie.axis || ve && (ae ? ve.xAxis : ve.yAxis) || { pos: fe, len: 1 / 0 }, Pe = ie.paneCoordinates ? Oe.pos + Ae : fe + Ae;
            Pe >= Math.max(be + fe, Oe.pos) && Pe <= Math.min(be + fe + ye.height, Oe.pos + Oe.len) || (Se.isInsidePlot = !1);
          }
          return te(this, "afterIsInsidePlot", Se), Se.isInsidePlot;
        }
        redraw(Q) {
          te(this, "beforeRedraw");
          let K = this.hasCartesianSeries ? this.axes : this.colorAxis || [], ie = this.series, ae = this.pointer, de = this.legend, he = this.userOptions.legend, fe = this.renderer, ge = fe.isHidden(), me = [], be, ve, ye, we = this.isDirtyBox, Ae = this.isDirtyLegend, Se;
          for (fe.rootFontSize = fe.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), I(!!this.hasRendered && Q, this), ge && this.temporaryDisplay(), this.layOutTitles(!1), ye = ie.length; ye--; )
            if (((Se = ie[ye]).options.stacking || Se.options.centerInCategory) && (ve = !0, Se.isDirty)) {
              be = !0;
              break;
            }
          if (be)
            for (ye = ie.length; ye--; )
              (Se = ie[ye]).options.stacking && (Se.isDirty = !0);
          ie.forEach(function(xe) {
            xe.isDirty && (xe.options.legendType === "point" ? (typeof xe.updateTotals == "function" && xe.updateTotals(), Ae = !0) : he && (he.labelFormatter || he.labelFormat) && (Ae = !0)), xe.isDirtyData && te(xe, "updatedData");
          }), Ae && de && de.options.enabled && (de.render(), this.isDirtyLegend = !1), ve && this.getStacks(), K.forEach(function(xe) {
            xe.updateNames(), xe.setScale();
          }), this.getMargins(), K.forEach(function(xe) {
            xe.isDirty && (we = !0);
          }), K.forEach(function(xe) {
            let Oe = xe.min + "," + xe.max;
            xe.extKey !== Oe && (xe.extKey = Oe, me.push(function() {
              te(xe, "afterSetExtremes", X(xe.eventArgs, xe.getExtremes())), delete xe.eventArgs;
            })), (we || ve) && xe.redraw();
          }), we && this.drawChartBox(), te(this, "predraw"), ie.forEach(function(xe) {
            (we || xe.isDirty) && xe.visible && xe.redraw(), xe.isDirtyData = !1;
          }), ae && ae.reset(!0), fe.draw(), te(this, "redraw"), te(this, "render"), ge && this.temporaryDisplay(!0), me.forEach(function(xe) {
            xe.call();
          });
        }
        get(Q) {
          let K = this.series;
          function ie(de) {
            return de.id === Q || de.options && de.options.id === Q;
          }
          let ae = U(this.axes, ie) || U(this.series, ie);
          for (let de = 0; !ae && de < K.length; de++)
            ae = U(K[de].points || [], ie);
          return ae;
        }
        getAxes() {
          let Q = this.userOptions;
          for (let K of (te(this, "getAxes"), ["xAxis", "yAxis"]))
            for (let ie of Q[K] = V(Q[K] || {}))
              new s(this, ie, K);
          te(this, "afterGetAxes");
        }
        getSelectedPoints() {
          return this.series.reduce((Q, K) => (K.getPointsCollection().forEach((ie) => {
            B(ie.selectedStaging, ie.selected) && Q.push(ie);
          }), Q), []);
        }
        getSelectedSeries() {
          return this.series.filter(function(Q) {
            return Q.selected;
          });
        }
        setTitle(Q, K, ie) {
          this.applyDescription("title", Q), this.applyDescription("subtitle", K), this.applyDescription("caption", void 0), this.layOutTitles(ie);
        }
        applyDescription(Q, K) {
          let ie = this, ae = this.options[Q] = p(this.options[Q], K), de = this[Q];
          de && K && (this[Q] = de = de.destroy()), ae && !de && ((de = this.renderer.text(ae.text, 0, 0, ae.useHTML).attr({ align: ae.align, class: "highcharts-" + Q, zIndex: ae.zIndex || 4 }).add()).update = function(he, fe) {
            ie.applyDescription(Q, he), ie.layOutTitles(fe);
          }, this.styledMode || de.css(X(Q === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, ae.style)), this[Q] = de);
        }
        layOutTitles(Q = !0) {
          let K = [0, 0, 0], ie = this.renderer, ae = this.spacingBox;
          ["title", "subtitle", "caption"].forEach(function(he) {
            let fe = this[he], ge = this.options[he], me = ge.verticalAlign || "top", be = he === "title" ? me === "top" ? -3 : 0 : me === "top" ? K[0] + 2 : 0;
            if (fe) {
              fe.css({ width: (ge.width || ae.width + (ge.widthAdjust || 0)) + "px" });
              let ve = ie.fontMetrics(fe).b, ye = Math.round(fe.getBBox(ge.useHTML).height);
              fe.align(X({ y: me === "bottom" ? ve : be + ve, height: ye }, ge), !1, "spacingBox"), ge.floating || (me === "top" ? K[0] = Math.ceil(K[0] + ye) : me === "bottom" && (K[2] = Math.ceil(K[2] + ye)));
            }
          }, this), K[0] && (this.options.title.verticalAlign || "top") === "top" && (K[0] += this.options.title.margin), K[2] && this.options.caption.verticalAlign === "bottom" && (K[2] += this.options.caption.margin);
          let de = !this.titleOffset || this.titleOffset.join(",") !== K.join(",");
          this.titleOffset = K, te(this, "afterLayOutTitles"), !this.isDirtyBox && de && (this.isDirtyBox = this.isDirtyLegend = de, this.hasRendered && Q && this.isDirtyBox && this.redraw());
        }
        getContainerBox() {
          let Q = [].map.call(this.renderTo.children, (ie) => {
            if (ie !== this.container) {
              let ae = ie.style.display;
              return ie.style.display = "none", [ie, ae];
            }
          }), K = { width: le(this.renderTo, "width", !0) || 0, height: le(this.renderTo, "height", !0) || 0 };
          return Q.filter(Boolean).forEach(([ie, ae]) => {
            ie.style.display = ae;
          }), K;
        }
        getChartSize() {
          var he;
          let Q = this.options.chart, K = Q.width, ie = Q.height, ae = this.getContainerBox(), de = ae.height > 1 && !(!((he = this.renderTo.parentElement) != null && he.style.height) && this.renderTo.style.height === "100%");
          this.chartWidth = Math.max(0, K || ae.width || 600), this.chartHeight = Math.max(0, Y(ie, this.chartWidth) || (de ? ae.height : 400)), this.containerBox = ae;
        }
        temporaryDisplay(Q) {
          let K = this.renderTo, ie;
          if (Q)
            for (; K && K.style; )
              K.hcOrigStyle && (D(K, K.hcOrigStyle), delete K.hcOrigStyle), K.hcOrigDetached && (F.body.removeChild(K), K.hcOrigDetached = !1), K = K.parentNode;
          else
            for (; K && K.style && (F.body.contains(K) || K.parentNode || (K.hcOrigDetached = !0, F.body.appendChild(K)), (le(K, "display", !1) === "none" || K.hcOricDetached) && (K.hcOrigStyle = { display: K.style.display, height: K.style.height, overflow: K.style.overflow }, ie = { display: "block", overflow: "hidden" }, K !== this.renderTo && (ie.height = 0), D(K, ie), K.offsetWidth || K.style.setProperty("display", "block", "important")), (K = K.parentNode) !== F.body); )
              ;
        }
        setClassName(Q) {
          this.container.className = "highcharts-container " + (Q || "");
        }
        getContainer() {
          var ye;
          let Q = this.options, K = Q.chart, ie = "data-highcharts-chart", ae = ee(), de, he = this.renderTo;
          he || (this.renderTo = he = K.renderTo), q(he) && (this.renderTo = he = F.getElementById(he)), he || _(13, !0, this);
          let fe = Z(w(he, ie));
          P(fe) && H[fe] && H[fe].hasRendered && H[fe].destroy(), w(he, ie, this.index), he.innerHTML = S.emptyHTML, K.skipClone || he.offsetWidth || this.temporaryDisplay(), this.getChartSize();
          let ge = this.chartHeight, me = this.chartWidth;
          D(he, { overflow: "hidden" }), this.styledMode || (de = X({ position: "relative", overflow: "hidden", width: me + "px", height: ge + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none", padding: "0px" }, K.style || {}));
          let be = T("div", { id: ae }, de, he);
          this.container = be, this.getChartSize(), me === this.chartWidth || (me = this.chartWidth, this.styledMode || D(be, { width: B((ye = K.style) == null ? void 0 : ye.width, me + "px") })), this.containerBox = this.getContainerBox(), this._cursor = be.style.cursor;
          let ve = K.renderer || !k ? m.getRendererType(K.renderer) : N;
          if (this.renderer = new ve(be, me, ge, void 0, K.forExport, Q.exporting && Q.exporting.allowHTML, this.styledMode), I(void 0, this), this.setClassName(K.className), this.styledMode)
            for (let we in Q.defs)
              this.renderer.definition(Q.defs[we]);
          else
            this.renderer.setStyle(K.style);
          this.renderer.chartIndex = this.index, te(this, "afterGetContainer");
        }
        getMargins(Q) {
          let { spacing: K, margin: ie, titleOffset: ae } = this;
          this.resetMargins(), ae[0] && !G(ie[0]) && (this.plotTop = Math.max(this.plotTop, ae[0] + K[0])), ae[2] && !G(ie[2]) && (this.marginBottom = Math.max(this.marginBottom, ae[2] + K[2])), this.legend && this.legend.display && this.legend.adjustMargins(ie, K), te(this, "getMargins"), Q || this.getAxisMargins();
        }
        getAxisMargins() {
          let Q = this, K = Q.axisOffset = [0, 0, 0, 0], ie = Q.colorAxis, ae = Q.margin, de = function(he) {
            he.forEach(function(fe) {
              fe.visible && fe.getOffset();
            });
          };
          Q.hasCartesianSeries ? de(Q.axes) : ie && ie.length && de(ie), E.forEach(function(he, fe) {
            G(ae[fe]) || (Q[he] += K[fe]);
          }), Q.setChartSize();
        }
        getOptions() {
          return L(this.userOptions, C);
        }
        reflow(Q) {
          var de;
          let K = this, ie = K.containerBox, ae = K.getContainerBox();
          (de = K.pointer) == null || delete de.chartPosition, !K.isPrinting && !K.isResizing && ie && ae.width && ((ae.width !== ie.width || ae.height !== ie.height) && (b.clearTimeout(K.reflowTimeout), K.reflowTimeout = $(function() {
            K.container && K.setSize(void 0, void 0, !1);
          }, Q ? 100 : 0)), K.containerBox = ae);
        }
        setReflow() {
          let Q = this, K = (ie) => {
            var ae;
            (ae = Q.options) != null && ae.chart.reflow && Q.hasLoaded && Q.reflow(ie);
          };
          if (typeof ResizeObserver == "function")
            new ResizeObserver(K).observe(Q.renderTo);
          else {
            let ie = c(v, "resize", K);
            c(this, "destroy", ie);
          }
        }
        setSize(Q, K, ie) {
          let ae = this, de = ae.renderer;
          ae.isResizing += 1, I(ie, ae);
          let he = de.globalAnimation;
          ae.oldChartHeight = ae.chartHeight, ae.oldChartWidth = ae.chartWidth, Q !== void 0 && (ae.options.chart.width = Q), K !== void 0 && (ae.options.chart.height = K), ae.getChartSize();
          let { chartWidth: fe, chartHeight: ge, scrollablePixelsX: me = 0, scrollablePixelsY: be = 0 } = ae;
          (ae.isDirtyBox || fe !== ae.oldChartWidth || ge !== ae.oldChartHeight) && (ae.styledMode || (he ? d : D)(ae.container, { width: `${fe + me}px`, height: `${ge + be}px` }, he), ae.setChartSize(!0), de.setSize(fe, ge, he), ae.axes.forEach(function(ve) {
            ve.isDirty = !0, ve.setScale();
          }), ae.isDirtyLegend = !0, ae.isDirtyBox = !0, ae.layOutTitles(), ae.getMargins(), ae.redraw(he), ae.oldChartHeight = void 0, te(ae, "resize"), setTimeout(() => {
            ae && te(ae, "endResize");
          }, x(he).duration)), ae.isResizing -= 1;
        }
        setChartSize(Q) {
          let K, ie, ae, de, { chartHeight: he, chartWidth: fe, inverted: ge, spacing: me, renderer: be } = this, ve = this.clipOffset, ye = Math[ge ? "floor" : "round"];
          this.plotLeft = K = Math.round(this.plotLeft), this.plotTop = ie = Math.round(this.plotTop), this.plotWidth = ae = Math.max(0, Math.round(fe - K - this.marginRight)), this.plotHeight = de = Math.max(0, Math.round(he - ie - this.marginBottom)), this.plotSizeX = ge ? de : ae, this.plotSizeY = ge ? ae : de, this.spacingBox = be.spacingBox = { x: me[3], y: me[0], width: fe - me[3] - me[1], height: he - me[0] - me[2] }, this.plotBox = be.plotBox = { x: K, y: ie, width: ae, height: de }, ve && (this.clipBox = { x: ye(ve[3]), y: ye(ve[0]), width: ye(this.plotSizeX - ve[1] - ve[3]), height: ye(this.plotSizeY - ve[0] - ve[2]) }), Q || (this.axes.forEach(function(we) {
            we.setAxisSize(), we.setAxisTranslation();
          }), be.alignElements()), te(this, "afterSetChartSize", { skipAxes: Q });
        }
        resetMargins() {
          te(this, "resetMargins");
          let Q = this, K = Q.options.chart, ie = K.plotBorderWidth || 0, ae = ie / 2;
          ["margin", "spacing"].forEach(function(de) {
            let he = K[de], fe = W(he) ? he : [he, he, he, he];
            ["Top", "Right", "Bottom", "Left"].forEach(function(ge, me) {
              Q[de][me] = B(K[de + ge], fe[me]);
            });
          }), E.forEach(function(de, he) {
            Q[de] = B(Q.margin[he], Q.spacing[he]);
          }), Q.axisOffset = [0, 0, 0, 0], Q.clipOffset = [ae, ae, ae, ae], Q.plotBorderWidth = ie;
        }
        drawChartBox() {
          let Q = this.options.chart, K = this.renderer, ie = this.chartWidth, ae = this.chartHeight, de = this.styledMode, he = this.plotBGImage, fe = Q.backgroundColor, ge = Q.plotBackgroundColor, me = Q.plotBackgroundImage, be = this.plotLeft, ve = this.plotTop, ye = this.plotWidth, we = this.plotHeight, Ae = this.plotBox, Se = this.clipRect, xe = this.clipBox, Oe = this.chartBackground, Pe = this.plotBackground, Ne = this.plotBorder, Ke, Ue, ft, ct = "animate";
          Oe || (this.chartBackground = Oe = K.rect().addClass("highcharts-background").add(), ct = "attr"), de ? Ke = Ue = Oe.strokeWidth() : (Ue = (Ke = Q.borderWidth || 0) + (Q.shadow ? 8 : 0), ft = { fill: fe || "none" }, (Ke || Oe["stroke-width"]) && (ft.stroke = Q.borderColor, ft["stroke-width"] = Ke), Oe.attr(ft).shadow(Q.shadow)), Oe[ct]({ x: Ue / 2, y: Ue / 2, width: ie - Ue - Ke % 2, height: ae - Ue - Ke % 2, r: Q.borderRadius }), ct = "animate", Pe || (ct = "attr", this.plotBackground = Pe = K.rect().addClass("highcharts-plot-background").add()), Pe[ct](Ae), !de && (Pe.attr({ fill: ge || "none" }).shadow(Q.plotShadow), me && (he ? (me !== he.attr("href") && he.attr("href", me), he.animate(Ae)) : this.plotBGImage = K.image(me, be, ve, ye, we).add())), Se ? Se.animate({ width: xe.width, height: xe.height }) : this.clipRect = K.clipRect(xe), ct = "animate", Ne || (ct = "attr", this.plotBorder = Ne = K.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), de || Ne.attr({ stroke: Q.plotBorderColor, "stroke-width": Q.plotBorderWidth || 0, fill: "none" }), Ne[ct](Ne.crisp({ x: be, y: ve, width: ye, height: we }, -Ne.strokeWidth())), this.isDirtyBox = !1, te(this, "afterDrawChartBox");
        }
        propFromSeries() {
          let Q, K, ie, ae = this, de = ae.options.chart, he = ae.options.series;
          ["inverted", "angular", "polar"].forEach(function(fe) {
            for (K = u[de.type], ie = de[fe] || K && K.prototype[fe], Q = he && he.length; !ie && Q--; )
              (K = u[he[Q].type]) && K.prototype[fe] && (ie = !0);
            ae[fe] = ie;
          });
        }
        linkSeries(Q) {
          let K = this, ie = K.series;
          ie.forEach(function(ae) {
            ae.linkedSeries.length = 0;
          }), ie.forEach(function(ae) {
            let { linkedTo: de } = ae.options;
            if (q(de)) {
              let he;
              (he = de === ":previous" ? K.series[ae.index - 1] : K.get(de)) && he.linkedParent !== ae && (he.linkedSeries.push(ae), ae.linkedParent = he, he.enabledDataSorting && ae.setDataSortingOptions(), ae.visible = B(ae.options.visible, he.options.visible, ae.visible));
            }
          }), te(this, "afterLinkSeries", { isUpdating: Q });
        }
        renderSeries() {
          this.series.forEach(function(Q) {
            Q.translate(), Q.render();
          });
        }
        render() {
          var be;
          let Q = this.axes, K = this.colorAxis, ie = this.renderer, ae = this.options.chart.axisLayoutRuns || 2, de = (ve) => {
            ve.forEach((ye) => {
              ye.visible && ye.render();
            });
          }, he = 0, fe = !0, ge, me = 0;
          for (let ve of (this.setTitle(), te(this, "beforeMargins"), (be = this.getStacks) == null || be.call(this), this.getMargins(!0), this.setChartSize(), Q)) {
            let { options: ye } = ve, { labels: we } = ye;
            if (this.hasCartesianSeries && ve.horiz && ve.visible && we.enabled && ve.series.length && ve.coll !== "colorAxis" && !this.polar) {
              he = ye.tickLength, ve.createGroups();
              let Ae = new y(ve, 0, "", !0), Se = Ae.createLabel("x", we);
              if (Ae.destroy(), Se && B(we.reserveSpace, !P(ye.crossing)) && (he = Se.getBBox().height + we.distance + Math.max(ye.offset || 0, 0)), he) {
                Se == null || Se.destroy();
                break;
              }
            }
          }
          for (this.plotHeight = Math.max(this.plotHeight - he, 0); (fe || ge || ae > 1) && me < ae; ) {
            let ve = this.plotWidth, ye = this.plotHeight;
            for (let we of Q)
              me === 0 ? we.setScale() : (we.horiz && fe || !we.horiz && ge) && we.setTickInterval(!0);
            me === 0 ? this.getAxisMargins() : this.getMargins(), fe = ve / this.plotWidth > (me ? 1 : 1.1), ge = ye / this.plotHeight > (me ? 1 : 1.05), me++;
          }
          this.drawChartBox(), this.hasCartesianSeries ? de(Q) : K && K.length && de(K), this.seriesGroup || (this.seriesGroup = ie.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
        }
        addCredits(Q) {
          let K = this, ie = p(!0, this.options.credits, Q);
          ie.enabled && !this.credits && (this.credits = this.renderer.text(ie.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
            ie.href && (v.location.href = ie.href);
          }).attr({ align: ie.position.align, zIndex: 8 }), K.styledMode || this.credits.css(ie.style), this.credits.add().align(ie.position), this.credits.update = function(ae) {
            K.credits = K.credits.destroy(), K.addCredits(ae);
          });
        }
        destroy() {
          let Q, K = this, ie = K.axes, ae = K.series, de = K.container, he = de && de.parentNode;
          for (te(K, "destroy"), K.renderer.forExport ? se(H, K) : H[K.index] = void 0, h.chartCount--, K.renderTo.removeAttribute("data-highcharts-chart"), ne(K), Q = ie.length; Q--; )
            ie[Q] = ie[Q].destroy();
          for (this.scroller && this.scroller.destroy && this.scroller.destroy(), Q = ae.length; Q--; )
            ae[Q] = ae[Q].destroy();
          ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(fe) {
            let ge = K[fe];
            ge && ge.destroy && (K[fe] = ge.destroy());
          }), de && (de.innerHTML = S.emptyHTML, ne(de), he && J(de)), j(K, function(fe, ge) {
            delete K[ge];
          });
        }
        firstRender() {
          var ae;
          let Q = this, K = Q.options;
          Q.getContainer(), Q.resetMargins(), Q.setChartSize(), Q.propFromSeries(), Q.getAxes();
          let ie = R(K.series) ? K.series : [];
          K.series = [], ie.forEach(function(de) {
            Q.initSeries(de);
          }), Q.linkSeries(), Q.setSortedData(), te(Q, "beforeRender"), Q.render(), (ae = Q.pointer) == null || ae.getChartPosition(), Q.renderer.imgCount || Q.hasLoaded || Q.onload(), Q.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function(Q) {
            Q && this.index !== void 0 && Q.apply(this, [this]);
          }, this), te(this, "load"), te(this, "render"), G(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
        }
        warnIfA11yModuleNotLoaded() {
          let { options: Q, title: K } = this;
          !Q || this.accessibility || (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (K && K.element.textContent || "").replace(/</g, "&lt;") }), Q.accessibility && Q.accessibility.enabled === !1 || _('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this));
        }
        addSeries(Q, K, ie) {
          let ae, de = this;
          return Q && (K = B(K, !0), te(de, "addSeries", { options: Q }, function() {
            ae = de.initSeries(Q), de.isDirtyLegend = !0, de.linkSeries(), ae.enabledDataSorting && ae.setData(Q.data, !1), te(de, "afterAddSeries", { series: ae }), K && de.redraw(ie);
          })), ae;
        }
        addAxis(Q, K, ie, ae) {
          return this.createAxis(K ? "xAxis" : "yAxis", { axis: Q, redraw: ie, animation: ae });
        }
        addColorAxis(Q, K, ie) {
          return this.createAxis("colorAxis", { axis: Q, redraw: K, animation: ie });
        }
        createAxis(Q, K) {
          let ie = new s(this, K.axis, Q);
          return B(K.redraw, !0) && this.redraw(K.animation), ie;
        }
        showLoading(Q) {
          let K = this, ie = K.options, ae = ie.loading, de = function() {
            he && D(he, { left: K.plotLeft + "px", top: K.plotTop + "px", width: K.plotWidth + "px", height: K.plotHeight + "px" });
          }, he = K.loadingDiv, fe = K.loadingSpan;
          he || (K.loadingDiv = he = T("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, K.container)), fe || (K.loadingSpan = fe = T("span", { className: "highcharts-loading-inner" }, null, he), c(K, "redraw", de)), he.className = "highcharts-loading", S.setElementHTML(fe, B(Q, ie.lang.loading, "")), K.styledMode || (D(he, X(ae.style, { zIndex: 10 })), D(fe, ae.labelStyle), K.loadingShown || (D(he, { opacity: 0, display: "" }), d(he, { opacity: ae.style.opacity || 0.5 }, { duration: ae.showDuration || 0 }))), K.loadingShown = !0, de();
        }
        hideLoading() {
          let Q = this.options, K = this.loadingDiv;
          K && (K.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || d(K, { opacity: 0 }, { duration: Q.loading.hideDuration || 100, complete: function() {
            D(K, { display: "none" });
          } })), this.loadingShown = !1;
        }
        update(Q, K, ie, ae) {
          let de, he, fe, ge = this, me = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, be = Q.isResponsiveOptions, ve = [];
          te(ge, "update", { options: Q }), be || ge.setResponsive(!1, !0), Q = L(Q, ge.options), ge.userOptions = p(ge.userOptions, Q);
          let ye = Q.chart;
          ye && (p(!0, ge.options.chart, ye), this.setZoomOptions(), "className" in ye && ge.setClassName(ye.className), ("inverted" in ye || "polar" in ye || "type" in ye) && (ge.propFromSeries(), de = !0), "alignTicks" in ye && (de = !0), "events" in ye && z(this, ye), j(ye, function(Se, xe) {
            ge.propsRequireUpdateSeries.indexOf("chart." + xe) !== -1 && (he = !0), ge.propsRequireDirtyBox.indexOf(xe) !== -1 && (ge.isDirtyBox = !0), ge.propsRequireReflow.indexOf(xe) === -1 || (ge.isDirtyBox = !0, be || (fe = !0));
          }), !ge.styledMode && ye.style && ge.renderer.setStyle(ge.options.chart.style || {})), !ge.styledMode && Q.colors && (this.options.colors = Q.colors), Q.time && (this.time === A && (this.time = new f(Q.time)), p(!0, ge.options.time, Q.time)), j(Q, function(Se, xe) {
            ge[xe] && typeof ge[xe].update == "function" ? ge[xe].update(Se, !1) : typeof ge[me[xe]] == "function" ? ge[me[xe]](Se) : xe !== "colors" && ge.collectionsWithUpdate.indexOf(xe) === -1 && p(!0, ge.options[xe], Q[xe]), xe !== "chart" && ge.propsRequireUpdateSeries.indexOf(xe) !== -1 && (he = !0);
          }), this.collectionsWithUpdate.forEach(function(Se) {
            Q[Se] && (V(Q[Se]).forEach(function(xe, Oe) {
              let Pe, Ne = G(xe.id);
              Ne && (Pe = ge.get(xe.id)), !Pe && ge[Se] && (Pe = ge[Se][B(xe.index, Oe)]) && (Ne && G(Pe.options.id) || Pe.options.isInternal) && (Pe = void 0), Pe && Pe.coll === Se && (Pe.update(xe, !1), ie && (Pe.touched = !0)), !Pe && ie && ge.collectionsWithInit[Se] && (ge.collectionsWithInit[Se][0].apply(ge, [xe].concat(ge.collectionsWithInit[Se][1] || []).concat([!1])).touched = !0);
            }), ie && ge[Se].forEach(function(xe) {
              xe.touched || xe.options.isInternal ? delete xe.touched : ve.push(xe);
            }));
          }), ve.forEach(function(Se) {
            Se.chart && Se.remove && Se.remove(!1);
          }), de && ge.axes.forEach(function(Se) {
            Se.update({}, !1);
          }), he && ge.getSeriesOrderByLinks().forEach(function(Se) {
            Se.chart && Se.update({}, !1);
          }, this);
          let we = ye && ye.width, Ae = ye && (q(ye.height) ? Y(ye.height, we || ge.chartWidth) : ye.height);
          fe || P(we) && we !== ge.chartWidth || P(Ae) && Ae !== ge.chartHeight ? ge.setSize(we, Ae, ae) : B(K, !0) && ge.redraw(ae), te(ge, "afterUpdate", { options: Q, redraw: K, animation: ae });
        }
        setSubtitle(Q, K) {
          this.applyDescription("subtitle", Q), this.layOutTitles(K);
        }
        setCaption(Q, K) {
          this.applyDescription("caption", Q), this.layOutTitles(K);
        }
        showResetZoom() {
          let Q = this, K = C.lang, ie = Q.zooming.resetButton, ae = ie.theme, de = ie.relativeTo === "chart" || ie.relativeTo === "spacingBox" ? null : "plotBox";
          function he() {
            Q.zoomOut();
          }
          te(this, "beforeShowResetZoom", null, function() {
            Q.resetZoomButton = Q.renderer.button(K.resetZoom, null, null, he, ae).attr({ align: ie.position.align, title: K.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(ie.position, !1, de);
          }), te(this, "afterShowResetZoom");
        }
        zoomOut() {
          te(this, "selection", { resetSelection: !0 }, () => this.transform({ reset: !0, trigger: "zoom" }));
        }
        pan(Q, K) {
          let ie = this, ae = typeof K == "object" ? K : { enabled: K, type: "x" }, de = ae.type, he = de && ie[{ x: "xAxis", xy: "axes", y: "yAxis" }[de]].filter((ge) => ge.options.panningEnabled && !ge.options.isInternal), fe = ie.options.chart;
          fe != null && fe.panning && (fe.panning = ae), te(this, "pan", { originalEvent: Q }, () => {
            ie.transform({ axes: he, event: Q, to: { x: Q.chartX - (ie.mouseDownX || 0), y: Q.chartY - (ie.mouseDownY || 0) }, trigger: "pan" }), D(ie.container, { cursor: "move" });
          });
        }
        transform(Q) {
          var we;
          let { axes: K = this.axes, event: ie, from: ae = {}, reset: de, selection: he, to: fe = {}, trigger: ge } = Q, { inverted: me } = this, be = !1, ve, ye;
          for (let Ae of ((we = this.hoverPoints) == null || we.forEach((Se) => Se.setState()), K)) {
            let { horiz: Se, len: xe, minPointOffset: Oe = 0, options: Pe, reversed: Ne } = Ae, Ke = Se ? "width" : "height", Ue = Se ? "x" : "y", ft = B(fe[Ke], Ae.len), ct = B(ae[Ke], Ae.len), bt = 10 > Math.abs(ft) ? 1 : ft / ct, Qt = (ae[Ue] || 0) + ct / 2 - Ae.pos, Lt = Qt - ((fe[Ue] ?? Ae.pos) + ft / 2 - Ae.pos) / bt, yi = Ne && !me || !Ne && me ? -1 : 1;
            if (!de && (Qt < 0 || Qt > Ae.len))
              continue;
            let vt = Ae.toValue(Lt, !0) + (he || Ae.isOrdinal ? 0 : Oe * yi), At = Ae.toValue(Lt + xe / bt, !0) - (he || Ae.isOrdinal ? 0 : Oe * yi || 0), _t = Ae.allExtremes;
            if (vt > At && ([vt, At] = [At, vt]), bt === 1 && !de && Ae.coll === "yAxis" && !_t) {
              for (let yt of Ae.series) {
                let st = yt.getExtremes(yt.getProcessedData(!0).yData, !0);
                _t ?? (_t = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }), P(st.dataMin) && P(st.dataMax) && (_t.dataMin = Math.min(st.dataMin, _t.dataMin), _t.dataMax = Math.max(st.dataMax, _t.dataMax));
              }
              Ae.allExtremes = _t;
            }
            let { dataMin: un, dataMax: Ns, min: dn, max: hn } = X(Ae.getExtremes(), _t || {}), fn = un ?? Pe.min, pe = Ns ?? Pe.max, Ce = At - vt, Te = Ae.categories ? 0 : Math.min(Ce, pe - fn), Be = fn - Te * (G(Pe.min) ? 0 : Pe.minPadding), $e = pe + Te * (G(Pe.max) ? 0 : Pe.maxPadding), tt = Ae.allowZoomOutside || bt === 1 || ge !== "zoom" && bt > 1, Ze = Math.min(Pe.min ?? Be, Be, tt ? dn : Be), Xe = Math.max(Pe.max ?? $e, $e, tt ? hn : $e);
            (!Ae.isOrdinal || Ae.options.overscroll || bt !== 1 || de) && (vt < Ze && (vt = Ze, bt >= 1 && (At = vt + Ce)), At > Xe && (At = Xe, bt >= 1 && (vt = At - Ce)), (de || Ae.series.length && (vt !== dn || At !== hn) && vt >= Ze && At <= Xe) && (he ? he[Ae.coll].push({ axis: Ae, min: vt, max: At }) : (Ae.isPanning = ge !== "zoom", Ae.isPanning && (ye = !0), Ae.setExtremes(de ? void 0 : vt, de ? void 0 : At, !1, !1, { move: Lt, trigger: ge, scale: bt }), !de && (vt > Ze || At < Xe) && ge !== "mousewheel" && (ve = !0)), be = !0), ie && (this[Se ? "mouseDownX" : "mouseDownY"] = ie[Se ? "chartX" : "chartY"]));
          }
          return be && (he ? te(this, "selection", he, () => {
            delete Q.selection, Q.trigger = "zoom", this.transform(Q);
          }) : (!ve || ye || this.resetZoomButton ? !ve && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw(ge === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), be;
        }
      }
      return X(ue.prototype, { callbacks: [], collectionsWithInit: { xAxis: [ue.prototype.addAxis, [!0]], yAxis: [ue.prototype.addAxis, [!1]], series: [ue.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] }), ue;
    }), n(i, "Extensions/ScrollablePlotArea.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Globals.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Utilities.js"]], function(r, s, o, a) {
      let { stop: l } = r, { composed: h } = s, { addEvent: m, createElement: g, css: M, defined: N, merge: f, pushUnique: b } = a;
      function S() {
        let x = this.scrollablePlotArea;
        (this.scrollablePixelsX || this.scrollablePixelsY) && !x && (this.scrollablePlotArea = x = new d(this)), x == null || x.applyFixed();
      }
      function y() {
        this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
      }
      class d {
        static compose(I, C, A) {
          b(h, this.compose) && (m(I, "afterInit", y), m(C, "afterSetChartSize", (O) => this.afterSetSize(O.target, O)), m(C, "render", S), m(A, "show", y));
        }
        static afterSetSize(I, C) {
          let A, O, z, { minWidth: H, minHeight: F } = I.options.chart.scrollablePlotArea || {}, { clipBox: E, plotBox: k, inverted: v, renderer: u } = I;
          if (!u.forExport && (H ? (I.scrollablePixelsX = A = Math.max(0, H - I.chartWidth), A && (I.scrollablePlotBox = f(I.plotBox), k.width = I.plotWidth += A, E[v ? "height" : "width"] += A, z = !0)) : F && (I.scrollablePixelsY = O = Math.max(0, F - I.chartHeight), N(O) && (I.scrollablePlotBox = f(I.plotBox), k.height = I.plotHeight += O, E[v ? "width" : "height"] += O, z = !1)), N(z) && !C.skipAxes))
            for (let c of I.axes)
              c.horiz === z && (c.setAxisSize(), c.setAxisTranslation());
        }
        constructor(I) {
          var w;
          let C, A = I.options.chart, O = o.getRendererType(), z = A.scrollablePlotArea || {}, H = this.moveFixedElements.bind(this), F = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          I.scrollablePixelsX && (F.overflowX = "auto"), I.scrollablePixelsY && (F.overflowY = "auto"), this.chart = I;
          let E = this.parentDiv = g("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, I.renderTo), k = this.scrollingContainer = g("div", { className: "highcharts-scrolling" }, F, E), v = this.innerContainer = g("div", { className: "highcharts-inner-container" }, void 0, k), u = this.fixedDiv = g("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (((w = A.style) == null ? void 0 : w.zIndex) || 0) + 2, top: 0 }, void 0, !0), c = this.fixedRenderer = new O(u, I.chartWidth, I.chartHeight, A.style);
          this.mask = c.path().attr({ fill: A.backgroundColor || "#fff", "fill-opacity": z.opacity ?? 0.85, zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), k.parentNode.insertBefore(u, k), M(I.renderTo, { overflow: "visible" }), m(I, "afterShowResetZoom", H), m(I, "afterApplyDrilldown", H), m(I, "afterLayOutTitles", H), m(k, "scroll", () => {
            let { pointer: T, hoverPoint: D } = I;
            T && (delete T.chartPosition, D && (C = D), T.runPointActions(void 0, C, !0));
          }), v.appendChild(I.container);
        }
        applyFixed() {
          var P;
          let { chart: I, fixedRenderer: C, isDirty: A, scrollingContainer: O } = this, { axisOffset: z, chartWidth: H, chartHeight: F, container: E, plotHeight: k, plotLeft: v, plotTop: u, plotWidth: c, scrollablePixelsX: w = 0, scrollablePixelsY: T = 0 } = I, { scrollPositionX: D = 0, scrollPositionY: G = 0 } = I.options.chart.scrollablePlotArea || {}, L = H + w, J = F + T;
          C.setSize(H, F), (A ?? !0) && (this.isDirty = !1, this.moveFixedElements()), l(I.container), M(E, { width: `${L}px`, height: `${J}px` }), I.renderer.boxWrapper.attr({ width: L, height: J, viewBox: [0, 0, L, J].join(" ") }), (P = I.chartBackground) == null || P.attr({ width: L, height: J }), M(O, { width: `${H}px`, height: `${F}px` }), N(A) || (O.scrollLeft = w * D, O.scrollTop = T * G);
          let se = u - z[0] - 1, _ = v - z[3] - 1, X = u + k + z[2] + 1, U = v + c + z[1] + 1, te = v + c - w, le = u + k - T, R = [["M", 0, 0]];
          w ? R = [["M", 0, se], ["L", v - 1, se], ["L", v - 1, X], ["L", 0, X], ["Z"], ["M", te, se], ["L", H, se], ["L", H, X], ["L", te, X], ["Z"]] : T && (R = [["M", _, 0], ["L", _, u - 1], ["L", U, u - 1], ["L", U, 0], ["Z"], ["M", _, le], ["L", _, F], ["L", U, F], ["L", U, le], ["Z"]]), I.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: R });
        }
        moveFixedElements() {
          let I, { container: C, inverted: A, scrollablePixelsX: O, scrollablePixelsY: z } = this.chart, H = this.fixedRenderer, F = d.fixedSelectors;
          for (let E of (O && !A ? I = ".highcharts-yaxis" : O && A || z && !A ? I = ".highcharts-xaxis" : z && A && (I = ".highcharts-yaxis"), I && F.push(`${I}:not(.highcharts-radial-axis)`, `${I}-labels:not(.highcharts-radial-axis-labels)`), F))
            [].forEach.call(C.querySelectorAll(E), (k) => {
              (k.namespaceURI === H.SVG_NS ? H.box : H.box.parentNode).appendChild(k), k.style.pointerEvents = "auto";
            });
        }
      }
      return d.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"], d;
    }), n(i, "Core/Axis/Stacking/StackItem.js", [i["Core/Templating.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { format: a } = r, { series: l } = s, { destroyObjectProperties: h, fireEvent: m, isNumber: g, pick: M } = o;
      return class {
        constructor(N, f, b, S, y) {
          let d = N.chart.inverted, x = N.reversed;
          this.axis = N;
          let I = this.isNegative = !!b != !!x;
          this.options = f = f || {}, this.x = S, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = y, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: f.align || (d ? I ? "left" : "right" : "center"), verticalAlign: f.verticalAlign || (d ? "middle" : I ? "bottom" : "top"), y: f.y, x: f.x }, this.textAlign = f.textAlign || (d ? I ? "right" : "left" : "center");
        }
        destroy() {
          h(this, this.axis);
        }
        render(N) {
          let f = this.axis.chart, b = this.options, S = b.format, y = S ? a(S, this, f) : b.formatter.call(this);
          if (this.label)
            this.label.attr({ text: y, visibility: "hidden" });
          else {
            this.label = f.renderer.label(y, null, void 0, b.shape, void 0, void 0, b.useHTML, !1, "stack-labels");
            let d = { r: b.borderRadius || 0, text: y, padding: M(b.padding, 5), visibility: "hidden" };
            f.styledMode || (d.fill = b.backgroundColor, d.stroke = b.borderColor, d["stroke-width"] = b.borderWidth, this.label.css(b.style || {})), this.label.attr(d), this.label.added || this.label.add(N);
          }
          this.label.labelrank = f.plotSizeY, m(this, "afterRender");
        }
        setOffset(N, f, b, S, y, d) {
          let { alignOptions: x, axis: I, label: C, options: A, textAlign: O } = this, z = I.chart, H = this.getStackBox({ xOffset: N, width: f, boxBottom: b, boxTop: S, defaultX: y, xAxis: d }), { verticalAlign: F } = x;
          if (C && H) {
            let E = C.getBBox(void 0, 0), k = C.padding, v = M(A.overflow, "justify") === "justify", u;
            x.x = A.x || 0, x.y = A.y || 0;
            let { x: c, y: w } = this.adjustStackPosition({ labelBox: E, verticalAlign: F, textAlign: O });
            H.x -= c, H.y -= w, C.align(x, !1, H), (u = z.isInsidePlot(C.alignAttr.x + x.x + c, C.alignAttr.y + x.y + w)) || (v = !1), v && l.prototype.justifyDataLabel.call(I, C, x, C.alignAttr, E, H), C.attr({ x: C.alignAttr.x, y: C.alignAttr.y, rotation: A.rotation, rotationOriginX: E.width * { left: 0, center: 0.5, right: 1 }[A.textAlign || "center"], rotationOriginY: E.height / 2 }), M(!v && A.crop, !0) && (u = g(C.x) && g(C.y) && z.isInsidePlot(C.x - k + (C.width || 0), C.y) && z.isInsidePlot(C.x + k, C.y)), C[u ? "show" : "hide"]();
          }
          m(this, "afterSetOffset", { xOffset: N, width: f });
        }
        adjustStackPosition({ labelBox: N, verticalAlign: f, textAlign: b }) {
          let S = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 }, y = S[f], d = S[b];
          return { x: N.width / 2 + N.width / 2 * d, y: N.height / 2 * y };
        }
        getStackBox(N) {
          let f = this.axis, b = f.chart, { boxTop: S, defaultX: y, xOffset: d, width: x, boxBottom: I } = N, C = f.stacking.usePercentage ? 100 : M(S, this.total, 0), A = f.toPixels(C), O = N.xAxis || b.xAxis[0], z = M(y, O.translate(this.x)) + d, H = Math.abs(A - f.toPixels(I || g(f.min) && f.logarithmic && f.logarithmic.lin2log(f.min) || 0)), F = b.inverted, E = this.isNegative;
          return F ? { x: (E ? A : A - H) - b.plotLeft, y: O.height - z - x + O.top - b.plotTop, width: H, height: x } : { x: z + O.transB - b.plotLeft, y: (E ? A - H : A) - b.plotTop, width: x, height: H };
        }
      };
    }), n(i, "Core/Axis/Stacking/StackingAxis.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Axis/Axis.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Axis/Stacking/StackItem.js"], i["Core/Utilities.js"]], function(r, s, o, a, l) {
      var h;
      let { getDeferredAnimation: m } = r, { series: { prototype: g } } = o, { addEvent: M, correctFloat: N, defined: f, destroyObjectProperties: b, fireEvent: S, isArray: y, isNumber: d, objectEach: x, pick: I } = l;
      function C() {
        let u = this.inverted;
        this.axes.forEach((c) => {
          c.stacking && c.stacking.stacks && c.hasVisibleSeries && (c.stacking.oldStacks = c.stacking.stacks);
        }), this.series.forEach((c) => {
          let w = c.xAxis && c.xAxis.options || {};
          c.options.stacking && c.reserveSpace() && (c.stackKey = [c.type, I(c.options.stack, ""), u ? w.top : w.left, u ? w.height : w.width].join(","));
        });
      }
      function A() {
        var c;
        let u = this.stacking;
        if (u) {
          let w = u.stacks;
          x(w, (T, D) => {
            b(T), delete w[D];
          }), (c = u.stackTotalGroup) == null || c.destroy();
        }
      }
      function O() {
        this.stacking || (this.stacking = new v(this));
      }
      function z(u, c, w, T) {
        return !f(u) || u.x !== c || T && u.stackKey !== T ? u = { x: c, index: 0, key: T, stackKey: T } : u.index++, u.key = [w, c, u.index].join(","), u;
      }
      function H() {
        let u, c = this, w = c.yAxis, T = c.stackKey || "", D = w.stacking.stacks, G = c.processedXData, L = c.options.stacking, J = c[L + "Stacker"];
        J && [T, "-" + T].forEach((se) => {
          var le;
          let _ = G.length, X, U, te;
          for (; _--; )
            X = G[_], u = c.getStackIndicator(u, X, c.index, se), U = (le = D[se]) == null ? void 0 : le[X], (te = U == null ? void 0 : U.points[u.key || ""]) && J.call(c, te, U, _);
        });
      }
      function F(u, c, w) {
        let T = c.total ? 100 / c.total : 0;
        u[0] = N(u[0] * T), u[1] = N(u[1] * T), this.stackedYData[w] = u[1];
      }
      function E(u) {
        (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && !this.options.stacking && this.chart.series.length > 1 ? g.setStackedPoints.call(this, u, "group") : u.stacking.resetStacks());
      }
      function k(u, c) {
        var ee, ue;
        let w, T, D, G, L, J, se, _, X, U = c || this.options.stacking;
        if (!U || !this.reserveSpace() || ({ group: "xAxis" }[U] || "yAxis") !== u.coll)
          return;
        let te = this.processedXData, le = this.processedYData, R = [], P = le.length, W = this.options, q = W.threshold || 0, p = W.startFromThreshold ? q : 0, j = W.stack, B = c ? `${this.type},${U}` : this.stackKey || "", Z = "-" + B, Y = this.negStacks, ne = u.stacking, V = ne.stacks, $ = ne.oldStacks;
        for (ne.stacksTouched += 1, se = 0; se < P; se++) {
          _ = te[se], X = le[se], J = (w = this.getStackIndicator(w, _, this.index)).key || "", V[L = (T = Y && X < (p ? 0 : q)) ? Z : B] || (V[L] = {}), V[L][_] || ((ee = $[L]) != null && ee[_] ? (V[L][_] = $[L][_], V[L][_].total = null) : V[L][_] = new a(u, u.options.stackLabels, !!T, _, j)), D = V[L][_], X !== null ? (D.points[J] = D.points[this.index] = [I(D.cumulative, p)], f(D.cumulative) || (D.base = J), D.touched = ne.stacksTouched, w.index > 0 && this.singleStacks === !1 && (D.points[J][0] = D.points[this.index + "," + _ + ",0"][0])) : (delete D.points[J], delete D.points[this.index]);
          let ce = D.total || 0;
          U === "percent" ? (G = T ? B : Z, ce = Y && ((ue = V[G]) != null && ue[_]) ? (G = V[G][_]).total = Math.max(G.total || 0, ce) + Math.abs(X) || 0 : N(ce + (Math.abs(X) || 0))) : U === "group" ? (y(X) && (X = X[0]), X !== null && ce++) : ce = N(ce + (X || 0)), U === "group" ? D.cumulative = (ce || 1) - 1 : D.cumulative = N(I(D.cumulative, p) + (X || 0)), D.total = ce, X !== null && (D.points[J].push(D.cumulative), R[se] = D.cumulative, D.hasValidPoints = !0);
        }
        U === "percent" && (ne.usePercentage = !0), U !== "group" && (this.stackedYData = R), ne.oldStacks = {};
      }
      class v {
        constructor(c) {
          this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = c;
        }
        buildStacks() {
          let c, w, T = this.axis, D = T.series, G = T.coll === "xAxis", L = T.options.reversedStacks, J = D.length;
          for (this.resetStacks(), this.usePercentage = !1, w = J; w--; )
            c = D[L ? w : J - w - 1], G && c.setGroupedPoints(T), c.setStackedPoints(T);
          if (!G)
            for (w = 0; w < J; w++)
              D[w].modifyStacks();
          S(T, "afterBuildStacks");
        }
        cleanStacks() {
          this.oldStacks && (this.stacks = this.oldStacks, x(this.stacks, (c) => {
            x(c, (w) => {
              w.cumulative = w.total;
            });
          }));
        }
        resetStacks() {
          x(this.stacks, (c) => {
            x(c, (w, T) => {
              d(w.touched) && w.touched < this.stacksTouched ? (w.destroy(), delete c[T]) : (w.total = null, w.cumulative = null);
            });
          });
        }
        renderStackTotals() {
          var J;
          let c = this.axis, w = c.chart, T = w.renderer, D = this.stacks, G = m(w, ((J = c.options.stackLabels) == null ? void 0 : J.animation) || !1), L = this.stackTotalGroup = this.stackTotalGroup || T.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
          L.translate(w.plotLeft, w.plotTop), x(D, (se) => {
            x(se, (_) => {
              _.render(L);
            });
          }), L.animate({ opacity: 1 }, G);
        }
      }
      return (h || (h = {})).compose = function(u, c, w) {
        let T = c.prototype, D = w.prototype;
        T.getStacks || (M(u, "init", O), M(u, "destroy", A), T.getStacks = C, D.getStackIndicator = z, D.modifyStacks = H, D.percentStacker = F, D.setGroupedPoints = E, D.setStackedPoints = k);
      }, h;
    }), n(i, "Series/Line/LineSeries.js", [i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { defined: a, merge: l, isObject: h } = o;
      class m extends r {
        drawGraph() {
          let M = this.options, N = (this.gappedPath || this.getGraphPath).call(this), f = this.chart.styledMode;
          [this, ...this.zones].forEach((b, S) => {
            let y, d = b.graph, x = d ? "animate" : "attr", I = b.dashStyle || M.dashStyle;
            d ? (d.endX = this.preventGraphAnimation ? null : N.xMap, d.animate({ d: N })) : N.length && (b.graph = d = this.chart.renderer.path(N).addClass("highcharts-graph" + (S ? ` highcharts-zone-graph-${S - 1} ` : " ") + (S && b.className || "")).attr({ zIndex: 1 }).add(this.group)), d && !f && (y = { stroke: !S && M.lineColor || b.color || this.color || "#cccccc", "stroke-width": M.lineWidth || 0, fill: this.fillGraph && this.color || "none" }, I ? y.dashstyle = I : M.linecap !== "square" && (y["stroke-linecap"] = y["stroke-linejoin"] = "round"), d[x](y).shadow(S < 2 && M.shadow && l({ filterUnits: "userSpaceOnUse" }, h(M.shadow) ? M.shadow : {}))), d && (d.startX = N.xMap, d.isArea = N.isArea);
          });
        }
        getGraphPath(M, N, f) {
          let b = this, S = b.options, y = [], d = [], x, I = S.step, C = (M = M || b.points).reversed;
          return C && M.reverse(), (I = { right: 1, center: 2 }[I] || I && 3) && C && (I = 4 - I), (M = this.getValidPoints(M, !1, !(S.connectNulls && !N && !f))).forEach(function(A, O) {
            let z, H = A.plotX, F = A.plotY, E = M[O - 1], k = A.isNull || typeof F != "number";
            (A.leftCliff || E && E.rightCliff) && !f && (x = !0), k && !a(N) && O > 0 ? x = !S.connectNulls : k && !N ? x = !0 : (O === 0 || x ? z = [["M", A.plotX, A.plotY]] : b.getPointSpline ? z = [b.getPointSpline(M, A, O)] : I ? (z = I === 1 ? [["L", E.plotX, F]] : I === 2 ? [["L", (E.plotX + H) / 2, E.plotY], ["L", (E.plotX + H) / 2, F]] : [["L", H, E.plotY]]).push(["L", H, F]) : z = [["L", H, F]], d.push(A.x), I && (d.push(A.x), I === 2 && d.push(A.x)), y.push.apply(y, z), x = !1);
          }), y.xMap = d, b.graphPath = y, y;
        }
      }
      return m.defaultOptions = l(r.defaultOptions, { legendSymbol: "lineMarker" }), s.registerSeriesType("line", m), m;
    }), n(i, "Series/Area/AreaSeriesDefaults.js", [], function() {
      return { threshold: 0, legendSymbol: "areaMarker" };
    }), n(i, "Series/Area/AreaSeries.js", [i["Series/Area/AreaSeriesDefaults.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { seriesTypes: { line: a } } = s, { extend: l, merge: h, objectEach: m, pick: g } = o;
      class M extends a {
        drawGraph() {
          this.areaPath = [], super.drawGraph.apply(this);
          let { areaPath: f, options: b } = this;
          [this, ...this.zones].forEach((S, y) => {
            let d = {}, x = S.fillColor || b.fillColor, I = S.area, C = I ? "animate" : "attr";
            I ? (I.endX = this.preventGraphAnimation ? null : f.xMap, I.animate({ d: f })) : (d.zIndex = 0, (I = S.area = this.chart.renderer.path(f).addClass("highcharts-area" + (y ? ` highcharts-zone-area-${y - 1} ` : " ") + (y && S.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (d.fill = x || S.color || this.color, d["fill-opacity"] = x ? 1 : b.fillOpacity ?? 0.75, I.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), I[C](d), I.startX = f.xMap, I.shiftUnit = b.step ? 2 : 1;
          });
        }
        getGraphPath(f) {
          let b, S, y, d = a.prototype.getGraphPath, x = this.options, I = x.stacking, C = this.yAxis, A = [], O = [], z = this.index, H = C.stacking.stacks[this.stackKey], F = x.threshold, E = Math.round(C.getThreshold(x.threshold)), k = g(x.connectNulls, I === "percent"), v = function(G, L, J) {
            let se = f[G], _ = I && H[se.x].points[z], X = se[J + "Null"] || 0, U = se[J + "Cliff"] || 0, te, le, R = !0;
            U || X ? (te = (X ? _[0] : _[1]) + U, le = _[0] + U, R = !!X) : !I && f[L] && f[L].isNull && (te = le = F), te !== void 0 && (O.push({ plotX: b, plotY: te === null ? E : C.getThreshold(te), isNull: R, isCliff: !0 }), A.push({ plotX: b, plotY: le === null ? E : C.getThreshold(le), doCurve: !1 }));
          };
          f = f || this.points, I && (f = this.getStackPoints(f));
          for (let G = 0, L = f.length; G < L; ++G)
            I || (f[G].leftCliff = f[G].rightCliff = f[G].leftNull = f[G].rightNull = void 0), S = f[G].isNull, b = g(f[G].rectPlotX, f[G].plotX), y = I ? g(f[G].yBottom, E) : E, S && !k || (k || v(G, G - 1, "left"), S && !I && k || (O.push(f[G]), A.push({ x: G, plotX: b, plotY: y })), k || v(G, G + 1, "right"));
          let u = d.call(this, O, !0, !0);
          A.reversed = !0;
          let c = d.call(this, A, !0, !0), w = c[0];
          w && w[0] === "M" && (c[0] = ["L", w[1], w[2]]);
          let T = u.concat(c);
          T.length && T.push(["Z"]);
          let D = d.call(this, O, !1, k);
          return this.chart.series.length > 1 && I && O.some((G) => G.isCliff) && (T.hasStackedCliffs = D.hasStackedCliffs = !0), T.xMap = u.xMap, this.areaPath = T, D;
        }
        getStackPoints(f) {
          let b = this, S = [], y = [], d = this.xAxis, x = this.yAxis, I = x.stacking.stacks[this.stackKey], C = {}, A = x.series, O = A.length, z = x.options.reversedStacks ? 1 : -1, H = A.indexOf(b);
          if (f = f || this.points, this.options.stacking) {
            for (let E = 0; E < f.length; E++)
              f[E].leftNull = f[E].rightNull = void 0, C[f[E].x] = f[E];
            m(I, function(E, k) {
              E.total !== null && y.push(k);
            }), y.sort(function(E, k) {
              return E - k;
            });
            let F = A.map((E) => E.visible);
            y.forEach(function(E, k) {
              let v = 0, u, c;
              if (C[E] && !C[E].isNull)
                S.push(C[E]), [-1, 1].forEach(function(w) {
                  let T = w === 1 ? "rightNull" : "leftNull", D = I[y[k + w]], G = 0;
                  if (D) {
                    let L = H;
                    for (; L >= 0 && L < O; ) {
                      let J = A[L].index;
                      !(u = D.points[J]) && (J === b.index ? C[E][T] = !0 : F[L] && (c = I[E].points[J]) && (G -= c[1] - c[0])), L += z;
                    }
                  }
                  C[E][w === 1 ? "rightCliff" : "leftCliff"] = G;
                });
              else {
                let w = H;
                for (; w >= 0 && w < O; ) {
                  let T = A[w].index;
                  if (u = I[E].points[T]) {
                    v = u[1];
                    break;
                  }
                  w += z;
                }
                v = g(v, 0), v = x.translate(v, 0, 1, 0, 1), S.push({ isNull: !0, plotX: d.translate(E, 0, 0, 0, 1), x: E, plotY: v, yBottom: v });
              }
            });
          }
          return S;
        }
      }
      return M.defaultOptions = h(a.defaultOptions, r), l(M.prototype, { singleStacks: !1 }), s.registerSeriesType("area", M), M;
    }), n(i, "Series/Spline/SplineSeries.js", [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s) {
      let { line: o } = r.seriesTypes, { merge: a, pick: l } = s;
      class h extends o {
        getPointSpline(g, M, N) {
          let f, b, S, y, d = M.plotX || 0, x = M.plotY || 0, I = g[N - 1], C = g[N + 1];
          function A(z) {
            return z && !z.isNull && z.doCurve !== !1 && !M.isCliff;
          }
          if (A(I) && A(C)) {
            let z = I.plotX || 0, H = I.plotY || 0, F = C.plotX || 0, E = C.plotY || 0, k = 0;
            f = (1.5 * d + z) / 2.5, b = (1.5 * x + H) / 2.5, S = (1.5 * d + F) / 2.5, y = (1.5 * x + E) / 2.5, S !== f && (k = (y - b) * (S - d) / (S - f) + x - y), b += k, y += k, b > H && b > x ? (b = Math.max(H, x), y = 2 * x - b) : b < H && b < x && (b = Math.min(H, x), y = 2 * x - b), y > E && y > x ? (y = Math.max(E, x), b = 2 * x - y) : y < E && y < x && (y = Math.min(E, x), b = 2 * x - y), M.rightContX = S, M.rightContY = y, M.controlPoints = { low: [f, b], high: [S, y] };
          }
          let O = ["C", l(I.rightContX, I.plotX, 0), l(I.rightContY, I.plotY, 0), l(f, d, 0), l(b, x, 0), d, x];
          return I.rightContX = I.rightContY = void 0, O;
        }
      }
      return h.defaultOptions = a(o.defaultOptions), r.registerSeriesType("spline", h), h;
    }), n(i, "Series/AreaSpline/AreaSplineSeries.js", [i["Series/Spline/SplineSeries.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { area: a, area: { prototype: l } } = s.seriesTypes, { extend: h, merge: m } = o;
      class g extends r {
      }
      return g.defaultOptions = m(r.defaultOptions, a.defaultOptions), h(g.prototype, { getGraphPath: l.getGraphPath, getStackPoints: l.getStackPoints, drawGraph: l.drawGraph }), s.registerSeriesType("areaspline", g), g;
    }), n(i, "Series/Column/ColumnSeriesDefaults.js", [], function() {
      return { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" };
    }), n(i, "Series/Column/ColumnSeries.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Color/Color.js"], i["Series/Column/ColumnSeriesDefaults.js"], i["Core/Globals.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o, a, l, h, m) {
      let { animObject: g } = r, { parse: M } = s, { noop: N } = a, { clamp: f, crisp: b, defined: S, extend: y, fireEvent: d, isArray: x, isNumber: I, merge: C, pick: A, objectEach: O } = m;
      class z extends l {
        animate(F) {
          let E, k, v = this, u = this.yAxis, c = u.pos, w = u.reversed, T = v.options, { clipOffset: D, inverted: G } = this.chart, L = {}, J = G ? "translateX" : "translateY";
          F && D ? (L.scaleY = 1e-3, k = f(u.toPixels(T.threshold), c, c + u.len), G ? (k += w ? -Math.floor(D[0]) : Math.ceil(D[2]), L.translateX = k - u.len) : (k += w ? Math.ceil(D[0]) : -Math.floor(D[2]), L.translateY = k), v.clipBox && v.setClip(), v.group.attr(L)) : (E = Number(v.group.attr(J)), v.group.animate({ scaleY: 1 }, y(g(v.options.animation), { step: function(se, _) {
            v.group && (L[J] = E + _.pos * (c - E), v.group.attr(L));
          } })));
        }
        init(F, E) {
          super.init.apply(this, arguments);
          let k = this;
          (F = k.chart).hasRendered && F.series.forEach(function(v) {
            v.type === k.type && (v.isDirty = !0);
          });
        }
        getColumnMetrics() {
          var X, U;
          let F = this, E = F.options, k = F.xAxis, v = F.yAxis, u = k.options.reversedStacks, c = k.reversed && !u || !k.reversed && u, w = {}, T, D = 0;
          E.grouping === !1 ? D = 1 : F.chart.series.forEach(function(te) {
            let le, R = te.yAxis, P = te.options;
            te.type === F.type && te.reserveSpace() && v.len === R.len && v.pos === R.pos && (P.stacking && P.stacking !== "group" ? (w[T = te.stackKey] === void 0 && (w[T] = D++), le = w[T]) : P.grouping !== !1 && (le = D++), te.columnIndex = le);
          });
          let G = Math.min(Math.abs(k.transA) * (!((X = k.brokenAxis) != null && X.hasBreaks) && ((U = k.ordinal) == null ? void 0 : U.slope) || E.pointRange || k.closestPointRange || k.tickInterval || 1), k.len), L = G * E.groupPadding, J = (G - 2 * L) / (D || 1), se = Math.min(E.maxPointWidth || k.len, A(E.pointWidth, J * (1 - 2 * E.pointPadding))), _ = (F.columnIndex || 0) + (c ? 1 : 0);
          return F.columnMetrics = { width: se, offset: (J - se) / 2 + (L + _ * J - G / 2) * (c ? -1 : 1), paddedWidth: J, columnCount: D }, F.columnMetrics;
        }
        crispCol(F, E, k, v) {
          let u = this.borderWidth, c = this.chart.inverted;
          return v = b(E + v, u, c) - (E = b(E, u, c)), this.options.crisp && (k = b(F + k, u) - (F = b(F, u))), { x: F, y: E, width: k, height: v };
        }
        adjustForMissingColumns(F, E, k, v) {
          var u;
          if (!k.isNull && v.columnCount > 1) {
            let c = this.xAxis.series.filter((G) => G.visible).map((G) => G.index), w = 0, T = 0;
            O((u = this.xAxis.stacking) == null ? void 0 : u.stacks, (G) => {
              if (typeof k.x == "number") {
                let L = G[k.x.toString()];
                if (L && x(L.points[this.index])) {
                  let J = Object.keys(L.points).filter((se) => !se.match(",") && L.points[se] && L.points[se].length > 1).map(parseFloat).filter((se) => c.indexOf(se) !== -1).sort((se, _) => _ - se);
                  w = J.indexOf(this.index), T = J.length;
                }
              }
            }), w = this.xAxis.reversed ? T - 1 - w : w;
            let D = (T - 1) * v.paddedWidth + E;
            F = (k.plotX || 0) + D / 2 - E - w * v.paddedWidth;
          }
          return F;
        }
        translate() {
          let F = this, E = F.chart, k = F.options, v = F.dense = F.closestPointRange * F.xAxis.transA < 2, u = F.borderWidth = A(k.borderWidth, v ? 0 : 1), c = F.xAxis, w = F.yAxis, T = k.threshold, D = A(k.minPointLength, 5), G = F.getColumnMetrics(), L = G.width, J = F.pointXOffset = G.offset, se = F.dataMin, _ = F.dataMax, X = F.translatedThreshold = w.getThreshold(T), U = F.barW = Math.max(L, 1 + 2 * u);
          k.pointPadding && (U = Math.ceil(U)), l.prototype.translate.apply(F), F.points.forEach(function(te) {
            let le = A(te.yBottom, X), R = 999 + Math.abs(le), P = te.plotX || 0, W = f(te.plotY, -R, w.len + R), q, p = Math.min(W, le), j = Math.max(W, le) - p, B = L, Z = P + J, Y = U;
            D && Math.abs(j) < D && (j = D, q = !w.reversed && !te.negative || w.reversed && te.negative, I(T) && I(_) && te.y === T && _ <= T && (w.min || 0) < T && (se !== _ || (w.max || 0) <= T) && (q = !q, te.negative = !te.negative), p = Math.abs(p - X) > D ? le - D : X - (q ? D : 0)), S(te.options.pointWidth) && (Z -= Math.round(((B = Y = Math.ceil(te.options.pointWidth)) - L) / 2)), k.centerInCategory && !k.stacking && (Z = F.adjustForMissingColumns(Z, B, te, G)), te.barX = Z, te.pointWidth = B, te.tooltipPos = E.inverted ? [f(w.len + w.pos - E.plotLeft - W, w.pos - E.plotLeft, w.len + w.pos - E.plotLeft), c.len + c.pos - E.plotTop - Z - Y / 2, j] : [c.left - E.plotLeft + Z + Y / 2, f(W + w.pos - E.plotTop, w.pos - E.plotTop, w.len + w.pos - E.plotTop), j], te.shapeType = F.pointClass.prototype.shapeType || "roundedRect", te.shapeArgs = F.crispCol(Z, te.isNull ? X : p, Y, te.isNull ? 0 : j);
          }), d(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }
        pointAttribs(F, E) {
          let k = this.options, v = this.pointAttrToOptions || {}, u = v.stroke || "borderColor", c = v["stroke-width"] || "borderWidth", w, T, D, G = F && F.color || this.color, L = F && F[u] || k[u] || G, J = F && F.options.dashStyle || k.dashStyle, se = F && F[c] || k[c] || this[c] || 0, _ = A(F && F.opacity, k.opacity, 1);
          F && this.zones.length && (T = F.getZone(), G = F.options.color || T && (T.color || F.nonZonedColor) || this.color, T && (L = T.borderColor || L, J = T.dashStyle || J, se = T.borderWidth || se)), E && F && (D = (w = C(k.states[E], F.options.states && F.options.states[E] || {})).brightness, G = w.color || D !== void 0 && M(G).brighten(w.brightness).get() || G, L = w[u] || L, se = w[c] || se, J = w.dashStyle || J, _ = A(w.opacity, _));
          let X = { fill: G, stroke: L, "stroke-width": se, opacity: _ };
          return J && (X.dashstyle = J), X;
        }
        drawPoints(F = this.points) {
          let E, k = this, v = this.chart, u = k.options, c = v.renderer, w = u.animationLimit || 250;
          F.forEach(function(T) {
            let D = T.plotY, G = T.graphic, L = !!G, J = G && v.pointCount < w ? "animate" : "attr";
            I(D) && T.y !== null ? (E = T.shapeArgs, G && T.hasNewShapeType() && (G = G.destroy()), k.enabledDataSorting && (T.startXPos = k.xAxis.reversed ? -(E && E.width || 0) : k.xAxis.width), !G && (T.graphic = G = c[T.shapeType](E).add(T.group || k.group), G && k.enabledDataSorting && v.hasRendered && v.pointCount < w && (G.attr({ x: T.startXPos }), L = !0, J = "animate")), G && L && G[J](C(E)), v.styledMode || G[J](k.pointAttribs(T, T.selected && "select")).shadow(T.allowShadow !== !1 && u.shadow), G && (G.addClass(T.getClassName(), !0), G.attr({ visibility: T.visible ? "inherit" : "hidden" }))) : G && (T.graphic = G.destroy());
          });
        }
        drawTracker(F = this.points) {
          let E, k = this, v = k.chart, u = v.pointer, c = function(w) {
            let T = u == null ? void 0 : u.getPointFromEvent(w);
            u && T && k.options.enableMouseTracking && (u.isDirectTouch = !0, T.onMouseOver(w));
          };
          F.forEach(function(w) {
            E = x(w.dataLabels) ? w.dataLabels : w.dataLabel ? [w.dataLabel] : [], w.graphic && (w.graphic.element.point = w), E.forEach(function(T) {
              (T.div || T.element).point = w;
            });
          }), k._hasTracking || (k.trackerGroups.forEach(function(w) {
            k[w] && (k[w].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function(T) {
              u == null || u.onTrackerMouseOut(T);
            }).on("touchstart", c), !v.styledMode && k.options.cursor && k[w].css({ cursor: k.options.cursor }));
          }), k._hasTracking = !0), d(this, "afterDrawTracker");
        }
        remove() {
          let F = this, E = F.chart;
          E.hasRendered && E.series.forEach(function(k) {
            k.type === F.type && (k.isDirty = !0);
          }), l.prototype.remove.apply(F, arguments);
        }
      }
      return z.defaultOptions = C(l.defaultOptions, o), y(z.prototype, { directTouch: !0, getSymbol: N, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), h.registerSeriesType("column", z), z;
    }), n(i, "Core/Series/DataLabel.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Templating.js"], i["Core/Utilities.js"]], function(r, s, o) {
      var a;
      let { getDeferredAnimation: l } = r, { format: h } = s, { defined: m, extend: g, fireEvent: M, isArray: N, isString: f, merge: b, objectEach: S, pick: y, pInt: d, splat: x } = o;
      return function(I) {
        function C() {
          return k(this).some((u) => u == null ? void 0 : u.enabled);
        }
        function A(u, c, w, T, D) {
          var W;
          let { chart: G, enabledDataSorting: L } = this, J = this.isCartesian && G.inverted, se = u.plotX, _ = u.plotY, X = w.rotation || 0, U = m(se) && m(_) && G.isInsidePlot(se, Math.round(_), { inverted: J, paneCoordinates: !0, series: this }), te = X === 0 && y(w.overflow, L ? "none" : "justify") === "justify", le = this.visible && u.visible !== !1 && m(se) && (u.series.forceDL || L && !te || U || y(w.inside, !!this.options.stacking) && T && G.isInsidePlot(se, J ? T.x + 1 : T.y + T.height - 1, { inverted: J, paneCoordinates: !0, series: this })), R = u.pos();
          if (le && R) {
            var P;
            let q = c.getBBox(), p = c.getBBox(void 0, 0), j = { right: 1, center: 0.5 }[w.align || 0] || 0, B = { bottom: 1, middle: 0.5 }[w.verticalAlign || 0] || 0;
            if (T = g({ x: R[0], y: Math.round(R[1]), width: 0, height: 0 }, T || {}), w.alignTo === "plotEdges" && this.isCartesian && (T[J ? "x" : "y"] = 0, T[J ? "width" : "height"] = ((W = this.yAxis) == null ? void 0 : W.len) || 0), g(w, { width: q.width, height: q.height }), P = T, L && this.xAxis && !te && this.setDataLabelStartPos(u, c, D, U, P), c.align(b(w, { width: p.width, height: p.height }), !1, T, !1), c.alignAttr.x += j * (p.width - q.width), c.alignAttr.y += B * (p.height - q.height), c[c.placed ? "animate" : "attr"]({ x: c.alignAttr.x + (q.width - p.width) / 2, y: c.alignAttr.y + (q.height - p.height) / 2, rotationOriginX: (c.width || 0) / 2, rotationOriginY: (c.height || 0) / 2 }), te && T.height >= 0)
              this.justifyDataLabel(c, w, c.alignAttr, q, T, D);
            else if (y(w.crop, !0)) {
              let { x: Z, y: Y } = c.alignAttr;
              le = G.isInsidePlot(Z, Y, { paneCoordinates: !0, series: this }) && G.isInsidePlot(Z + q.width - 1, Y + q.height - 1, { paneCoordinates: !0, series: this });
            }
            w.shape && !X && c[D ? "attr" : "animate"]({ anchorX: R[0], anchorY: R[1] });
          }
          D && L && (c.placed = !1), le || L && !te ? (c.show(), c.placed = !0) : (c.hide(), c.placed = !1);
        }
        function O() {
          return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
        }
        function z(u) {
          let c = this.hasRendered || 0, w = this.initDataLabelsGroup().attr({ opacity: +c });
          return !c && w && (this.visible && w.show(), this.options.animation ? w.animate({ opacity: 1 }, u) : w.attr({ opacity: 1 })), w;
        }
        function H(u) {
          var le;
          let c;
          u = u || this.points;
          let w = this, T = w.chart, D = w.options, G = T.renderer, { backgroundColor: L, plotBackgroundColor: J } = T.options.chart, se = G.getContrast(f(J) && J || f(L) && L || "#000000"), _ = k(w), { animation: X, defer: U } = _[0], te = U ? l(T, X, w) : { defer: 0, duration: 0 };
          M(this, "drawDataLabels"), (le = w.hasDataLabels) != null && le.call(w) && (c = this.initDataLabels(te), u.forEach((R) => {
            var q, p;
            let P = R.dataLabels || [];
            x(E(_, R.dlOptions || ((q = R.options) == null ? void 0 : q.dataLabels))).forEach((j, B) => {
              let Z = j.enabled && (R.visible || R.dataLabelOnHidden) && (!R.isNull || R.dataLabelOnNull) && function(he, fe) {
                let ge = fe.filter;
                if (ge) {
                  let me = ge.operator, be = he[ge.property], ve = ge.value;
                  return me === ">" && be > ve || me === "<" && be < ve || me === ">=" && be >= ve || me === "<=" && be <= ve || me === "==" && be == ve || me === "===" && be === ve || me === "!=" && be != ve || me === "!==" && be !== ve;
                }
                return !0;
              }(R, j), { backgroundColor: Y, borderColor: ne, distance: V, style: $ = {} } = j, ee, ue, ce, Q, K = {}, ie = P[B], ae = !ie, de;
              Z && (ue = y(j[R.formatPrefix + "Format"], j.format), ee = R.getLabelConfig(), ce = m(ue) ? h(ue, ee, T) : (j[R.formatPrefix + "Formatter"] || j.formatter).call(ee, j), Q = j.rotation, !T.styledMode && ($.color = y(j.color, $.color, f(w.color) ? w.color : void 0, "#000000"), $.color === "contrast" ? (Y !== "none" && (de = Y), R.contrastColor = G.getContrast(de !== "auto" && de || R.color || w.color), $.color = de || !m(V) && j.inside || 0 > d(V || 0) || D.stacking ? R.contrastColor : se) : delete R.contrastColor, D.cursor && ($.cursor = D.cursor)), K = { r: j.borderRadius || 0, rotation: Q, padding: j.padding, zIndex: 1 }, T.styledMode || (K.fill = Y === "auto" ? R.color : Y, K.stroke = ne === "auto" ? R.color : ne, K["stroke-width"] = j.borderWidth), S(K, (he, fe) => {
                he === void 0 && delete K[fe];
              })), !ie || Z && m(ce) && !!ie.div == !!j.useHTML && (ie.rotation && j.rotation || ie.rotation === j.rotation) || (ie = void 0, ae = !0), Z && m(ce) && (ie ? K.text = ce : (ie = G.label(ce, 0, 0, j.shape, void 0, void 0, j.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + R.colorIndex + " " + (j.className || "") + (j.useHTML ? " highcharts-tracker" : "")), ie && (ie.options = j, ie.attr(K), T.styledMode ? $.width && ie.css({ width: $.width, textOverflow: $.textOverflow }) : ie.css($).shadow(j.shadow), M(ie, "beforeAddingDataLabel", { labelOptions: j, point: R }), ie.added || ie.add(c), w.alignDataLabel(R, ie, j, void 0, ae), ie.isActive = !0, P[B] && P[B] !== ie && P[B].destroy(), P[B] = ie));
            });
            let W = P.length;
            for (; W--; )
              P[W] && P[W].isActive ? P[W].isActive = !1 : ((p = P[W]) == null || p.destroy(), P.splice(W, 1));
            R.dataLabel = P[0], R.dataLabels = P;
          })), M(this, "afterDrawDataLabels");
        }
        function F(u, c, w, T, D, G) {
          let L = this.chart, J = c.align, se = c.verticalAlign, _ = u.box ? 0 : u.padding || 0, X = L.inverted ? this.yAxis : this.xAxis, U = X ? X.left - L.plotLeft : 0, te = L.inverted ? this.xAxis : this.yAxis, le = te ? te.top - L.plotTop : 0, { x: R = 0, y: P = 0 } = c, W, q;
          return (W = (w.x || 0) + _ + U) < 0 && (J === "right" && R >= 0 ? (c.align = "left", c.inside = !0) : R -= W, q = !0), (W = (w.x || 0) + T.width - _ + U) > L.plotWidth && (J === "left" && R <= 0 ? (c.align = "right", c.inside = !0) : R += L.plotWidth - W, q = !0), (W = w.y + _ + le) < 0 && (se === "bottom" && P >= 0 ? (c.verticalAlign = "top", c.inside = !0) : P -= W, q = !0), (W = (w.y || 0) + T.height - _ + le) > L.plotHeight && (se === "top" && P <= 0 ? (c.verticalAlign = "bottom", c.inside = !0) : P += L.plotHeight - W, q = !0), q && (c.x = R, c.y = P, u.placed = !G, u.align(c, void 0, D)), q;
        }
        function E(u, c) {
          let w = [], T;
          if (N(u) && !N(c))
            w = u.map(function(D) {
              return b(D, c);
            });
          else if (N(c) && !N(u))
            w = c.map(function(D) {
              return b(u, D);
            });
          else if (N(u) || N(c)) {
            if (N(u) && N(c))
              for (T = Math.max(u.length, c.length); T--; )
                w[T] = b(u[T], c[T]);
          } else
            w = b(u, c);
          return w;
        }
        function k(u) {
          var w, T;
          let c = u.chart.options.plotOptions;
          return x(E(E((w = c == null ? void 0 : c.series) == null ? void 0 : w.dataLabels, (T = c == null ? void 0 : c[u.type]) == null ? void 0 : T.dataLabels), u.options.dataLabels));
        }
        function v(u, c, w, T, D) {
          let G = this.chart, L = G.inverted, J = this.xAxis, se = J.reversed, _ = ((L ? c.height : c.width) || 0) / 2, X = u.pointWidth, U = X ? X / 2 : 0;
          c.startXPos = L ? D.x : se ? -_ - U : J.width - _ + U, c.startYPos = L ? se ? this.yAxis.height - _ + U : -_ - U : D.y, T ? c.visibility === "hidden" && (c.show(), c.attr({ opacity: 0 }).animate({ opacity: 1 })) : c.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c.hide), G.hasRendered && (w && c.attr({ x: c.startXPos, y: c.startYPos }), c.placed = !0);
        }
        I.compose = function(u) {
          let c = u.prototype;
          c.initDataLabels || (c.initDataLabels = z, c.initDataLabelsGroup = O, c.alignDataLabel = A, c.drawDataLabels = H, c.justifyDataLabel = F, c.setDataLabelStartPos = v, c.hasDataLabels = C);
        };
      }(a || (a = {})), a;
    }), n(i, "Series/Column/ColumnDataLabel.js", [i["Core/Series/DataLabel.js"], i["Core/Globals.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o, a) {
      var l;
      let { composed: h } = s, { series: m } = o, { merge: g, pick: M, pushUnique: N } = a;
      return function(f) {
        function b(S, y, d, x, I) {
          let C = this.chart.inverted, A = S.series, O = (A.xAxis ? A.xAxis.len : this.chart.plotSizeX) || 0, z = (A.yAxis ? A.yAxis.len : this.chart.plotSizeY) || 0, H = S.dlBox || S.shapeArgs, F = M(S.below, S.plotY > M(this.translatedThreshold, z)), E = M(d.inside, !!this.options.stacking);
          if (H) {
            if (x = g(H), !(d.overflow === "allow" && d.crop === !1)) {
              x.y < 0 && (x.height += x.y, x.y = 0);
              let k = x.y + x.height - z;
              k > 0 && k < x.height - 1 && (x.height -= k);
            }
            C && (x = { x: z - x.y - x.height, y: O - x.x - x.width, width: x.height, height: x.width }), E || (C ? (x.x += F ? 0 : x.width, x.width = 0) : (x.y += F ? x.height : 0, x.height = 0));
          }
          d.align = M(d.align, !C || E ? "center" : F ? "right" : "left"), d.verticalAlign = M(d.verticalAlign, C || E ? "middle" : F ? "top" : "bottom"), m.prototype.alignDataLabel.call(this, S, y, d, x, I), d.inside && S.contrastColor && y.css({ color: S.contrastColor });
        }
        f.compose = function(S) {
          r.compose(m), N(h, "ColumnDataLabel") && (S.prototype.alignDataLabel = b);
        };
      }(l || (l = {})), l;
    }), n(i, "Series/Bar/BarSeries.js", [i["Series/Column/ColumnSeries.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { extend: a, merge: l } = o;
      class h extends r {
      }
      return h.defaultOptions = l(r.defaultOptions, {}), a(h.prototype, { inverted: !0 }), s.registerSeriesType("bar", h), h;
    }), n(i, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
      return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } };
    }), n(i, "Series/Scatter/ScatterSeries.js", [i["Series/Scatter/ScatterSeriesDefaults.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { column: a, line: l } = s.seriesTypes, { addEvent: h, extend: m, merge: g } = o;
      class M extends l {
        applyJitter() {
          let f = this, b = this.options.jitter, S = this.points.length;
          b && this.points.forEach(function(y, d) {
            ["x", "y"].forEach(function(x, I) {
              if (b[x] && !y.isNull) {
                let C = `plot${x.toUpperCase()}`, A = f[`${x}Axis`], O = b[x] * A.transA;
                if (A && !A.logarithmic) {
                  let z = Math.max(0, (y[C] || 0) - O), H = Math.min(A.len, (y[C] || 0) + O);
                  y[C] = z + (H - z) * function(F) {
                    let E = 1e4 * Math.sin(F);
                    return E - Math.floor(E);
                  }(d + I * S), x === "x" && (y.clientX = y.plotX);
                }
              }
            });
          });
        }
        drawGraph() {
          this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
        }
      }
      return M.defaultOptions = g(l.defaultOptions, r), m(M.prototype, { drawTracker: a.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"] }), h(M, "afterTranslate", function() {
        this.applyJitter();
      }), s.registerSeriesType("scatter", M), M;
    }), n(i, "Series/CenteredUtilities.js", [i["Core/Globals.js"], i["Core/Series/Series.js"], i["Core/Utilities.js"]], function(r, s, o) {
      var a, l;
      let { deg2rad: h } = r, { fireEvent: m, isNumber: g, pick: M, relativeLength: N } = o;
      return (l = a || (a = {})).getCenter = function() {
        let f = this.options, b = this.chart, S = 2 * (f.slicedOffset || 0), y = b.plotWidth - 2 * S, d = b.plotHeight - 2 * S, x = f.center, I = Math.min(y, d), C = f.thickness, A, O = f.size, z = f.innerSize || 0, H, F;
        typeof O == "string" && (O = parseFloat(O)), typeof z == "string" && (z = parseFloat(z));
        let E = [M(x[0], "50%"), M(x[1], "50%"), M(O && O < 0 ? void 0 : f.size, "100%"), M(z && z < 0 ? void 0 : f.innerSize || 0, "0%")];
        for (!b.angular || this instanceof s || (E[3] = 0), H = 0; H < 4; ++H)
          F = E[H], A = H < 2 || H === 2 && /%$/.test(F), E[H] = N(F, [y, d, I, E[2]][H]) + (A ? S : 0);
        return E[3] > E[2] && (E[3] = E[2]), g(C) && 2 * C < E[2] && C > 0 && (E[3] = E[2] - 2 * C), m(this, "afterGetCenter", { positions: E }), E;
      }, l.getStartAndEndRadians = function(f, b) {
        let S = g(f) ? f : 0, y = g(b) && b > S && b - S < 360 ? b : S + 360;
        return { start: h * (S + -90), end: h * (y + -90) };
      }, a;
    }), n(i, "Series/Pie/PiePoint.js", [i["Core/Animation/AnimationUtilities.js"], i["Core/Series/Point.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { setAnimation: a } = r, { addEvent: l, defined: h, extend: m, isNumber: g, pick: M, relativeLength: N } = o;
      class f extends s {
        getConnectorPath(S) {
          let y = S.dataLabelPosition, d = S.options || {}, x = d.connectorShape, I = this.connectorShapes[x] || x;
          return y && I.call(this, { ...y.computed, alignment: y.alignment }, y.connectorPosition, d) || [];
        }
        getTranslate() {
          return this.sliced && this.slicedTranslation || { translateX: 0, translateY: 0 };
        }
        haloPath(S) {
          let y = this.shapeArgs;
          return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(y.x, y.y, y.r + S, y.r + S, { innerR: y.r - 1, start: y.start, end: y.end, borderRadius: y.borderRadius });
        }
        constructor(S, y, d) {
          super(S, y, d), this.half = 0, this.name ?? (this.name = "Slice");
          let x = (I) => {
            this.slice(I.type === "select");
          };
          l(this, "select", x), l(this, "unselect", x);
        }
        isValid() {
          return g(this.y) && this.y >= 0;
        }
        setVisible(S, y = !0) {
          S !== this.visible && this.update({ visible: S ?? !this.visible }, y, void 0, !1);
        }
        slice(S, y, d) {
          let x = this.series;
          a(d, x.chart), y = M(y, !0), this.sliced = this.options.sliced = S = h(S) ? S : !this.sliced, x.options.data[x.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      return m(f.prototype, { connectorShapes: { fixedOffset: function(b, S, y) {
        let d = S.breakAt, x = S.touchingSliceAt, I = y.softConnector ? ["C", b.x + (b.alignment === "left" ? -5 : 5), b.y, 2 * d.x - x.x, 2 * d.y - x.y, d.x, d.y] : ["L", d.x, d.y];
        return [["M", b.x, b.y], I, ["L", x.x, x.y]];
      }, straight: function(b, S) {
        let y = S.touchingSliceAt;
        return [["M", b.x, b.y], ["L", y.x, y.y]];
      }, crookedLine: function(b, S, y) {
        let { breakAt: d, touchingSliceAt: x } = S, { series: I } = this, [C, A, O] = I.center, z = O / 2, { plotLeft: H, plotWidth: F } = I.chart, E = b.alignment === "left", { x: k, y: v } = b, u = d.x;
        if (y.crookDistance) {
          let w = N(y.crookDistance, 1);
          u = E ? C + z + (F + H - C - z) * (1 - w) : H + (C - z) * w;
        } else
          u = C + (A - v) * Math.tan((this.angle || 0) - Math.PI / 2);
        let c = [["M", k, v]];
        return (E ? u <= k && u >= d.x : u >= k && u <= d.x) && c.push(["L", u, v]), c.push(["L", d.x, d.y], ["L", x.x, x.y]), c;
      } } }), f;
    }), n(i, "Series/Pie/PieSeriesDefaults.js", [], function() {
      return { borderRadius: 3, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: !0, formatter: function() {
        return this.point.isNull ? void 0 : this.point.name;
      }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } };
    }), n(i, "Series/Pie/PieSeries.js", [i["Series/CenteredUtilities.js"], i["Series/Column/ColumnSeries.js"], i["Core/Globals.js"], i["Series/Pie/PiePoint.js"], i["Series/Pie/PieSeriesDefaults.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Renderer/SVG/Symbols.js"], i["Core/Utilities.js"]], function(r, s, o, a, l, h, m, g, M) {
      let { getStartAndEndRadians: N } = r, { noop: f } = o, { clamp: b, extend: S, fireEvent: y, merge: d, pick: x } = M;
      class I extends h {
        animate(A) {
          let O = this, z = O.points, H = O.startAngleRad;
          A || z.forEach(function(F) {
            let E = F.graphic, k = F.shapeArgs;
            E && k && (E.attr({ r: x(F.startR, O.center && O.center[3] / 2), start: H, end: H }), E.animate({ r: k.r, start: k.start, end: k.end }, O.options.animation));
          });
        }
        drawEmpty() {
          let A, O, z = this.startAngleRad, H = this.endAngleRad, F = this.options;
          this.total === 0 && this.center ? (A = this.center[0], O = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(A, O, this.center[1] / 2, 0, z, H).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: g.arc(A, O, this.center[2] / 2, 0, { start: z, end: H, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": F.borderWidth, fill: F.fillColor || "none", stroke: F.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
        }
        drawPoints() {
          let A = this.chart.renderer;
          this.points.forEach(function(O) {
            O.graphic && O.hasNewShapeType() && (O.graphic = O.graphic.destroy()), O.graphic || (O.graphic = A[O.shapeType](O.shapeArgs).add(O.series.group), O.delayedRendering = !0);
          });
        }
        generatePoints() {
          super.generatePoints(), this.updateTotals();
        }
        getX(A, O, z, H) {
          let F = this.center, E = this.radii ? this.radii[z.index] || 0 : F[2] / 2, k = H.dataLabelPosition, v = (k == null ? void 0 : k.distance) || 0, u = Math.asin(b((A - F[1]) / (E + v), -1, 1));
          return F[0] + Math.cos(u) * (E + v) * (O ? -1 : 1) + (v > 0 ? (O ? -1 : 1) * (H.padding || 0) : 0);
        }
        hasData() {
          return !!this.processedXData.length;
        }
        redrawPoints() {
          let A, O, z, H, F = this, E = F.chart;
          this.drawEmpty(), F.group && !E.styledMode && F.group.shadow(F.options.shadow), F.points.forEach(function(k) {
            let v = {};
            O = k.graphic, !k.isNull && O ? (H = k.shapeArgs, A = k.getTranslate(), E.styledMode || (z = F.pointAttribs(k, k.selected && "select")), k.delayedRendering ? (O.setRadialReference(F.center).attr(H).attr(A), E.styledMode || O.attr(z).attr({ "stroke-linejoin": "round" }), k.delayedRendering = !1) : (O.setRadialReference(F.center), E.styledMode || d(!0, v, z), d(!0, v, H, A), O.animate(v)), O.attr({ visibility: k.visible ? "inherit" : "hidden" }), O.addClass(k.getClassName(), !0)) : O && (k.graphic = O.destroy());
          });
        }
        sortByAngle(A, O) {
          A.sort(function(z, H) {
            return z.angle !== void 0 && (H.angle - z.angle) * O;
          });
        }
        translate(A) {
          y(this, "translate"), this.generatePoints();
          let O = this.options, z = O.slicedOffset, H = N(O.startAngle, O.endAngle), F = this.startAngleRad = H.start, E = (this.endAngleRad = H.end) - F, k = this.points, v = O.ignoreHiddenPoint, u = k.length, c, w, T, D, G, L, J, se = 0;
          for (A || (this.center = A = this.getCenter()), L = 0; L < u; L++) {
            J = k[L], c = F + se * E, J.isValid() && (!v || J.visible) && (se += J.percentage / 100), w = F + se * E;
            let _ = { x: A[0], y: A[1], r: A[2] / 2, innerR: A[3] / 2, start: Math.round(1e3 * c) / 1e3, end: Math.round(1e3 * w) / 1e3 };
            J.shapeType = "arc", J.shapeArgs = _, (T = (w + c) / 2) > 1.5 * Math.PI ? T -= 2 * Math.PI : T < -Math.PI / 2 && (T += 2 * Math.PI), J.slicedTranslation = { translateX: Math.round(Math.cos(T) * z), translateY: Math.round(Math.sin(T) * z) }, D = Math.cos(T) * A[2] / 2, G = Math.sin(T) * A[2] / 2, J.tooltipPos = [A[0] + 0.7 * D, A[1] + 0.7 * G], J.half = T < -Math.PI / 2 || T > Math.PI / 2 ? 1 : 0, J.angle = T;
          }
          y(this, "afterTranslate");
        }
        updateTotals() {
          let A = this.points, O = A.length, z = this.options.ignoreHiddenPoint, H, F, E = 0;
          for (H = 0; H < O; H++)
            (F = A[H]).isValid() && (!z || F.visible) && (E += F.y);
          for (H = 0, this.total = E; H < O; H++)
            (F = A[H]).percentage = E > 0 && (F.visible || !z) ? F.y / E * 100 : 0, F.total = E;
        }
      }
      return I.defaultOptions = d(h.defaultOptions, l), S(I.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: s.prototype.drawTracker, getCenter: r.getCenter, getSymbol: f, invertible: !1, isCartesian: !1, noSharedTooltip: !0, pointAttribs: s.prototype.pointAttribs, pointClass: a, requireSorting: !1, searchPoint: f, trackerGroups: ["group", "dataLabelsGroup"] }), m.registerSeriesType("pie", I), I;
    }), n(i, "Series/Pie/PieDataLabel.js", [i["Core/Series/DataLabel.js"], i["Core/Globals.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(r, s, o, a, l) {
      var h;
      let { composed: m, noop: g } = s, { distribute: M } = o, { series: N } = a, { arrayMax: f, clamp: b, defined: S, pick: y, pushUnique: d, relativeLength: x } = l;
      return function(I) {
        let C = { radialDistributionY: function(F, E) {
          var k;
          return (((k = E.dataLabelPosition) == null ? void 0 : k.top) || 0) + F.distributeBox.pos;
        }, radialDistributionX: function(F, E, k, v, u) {
          let c = u.dataLabelPosition;
          return F.getX(k < ((c == null ? void 0 : c.top) || 0) + 2 || k > ((c == null ? void 0 : c.bottom) || 0) - 2 ? v : k, E.half, E, u);
        }, justify: function(F, E, k, v) {
          var u;
          return v[0] + (F.half ? -1 : 1) * (k + (((u = E.dataLabelPosition) == null ? void 0 : u.distance) || 0));
        }, alignToPlotEdges: function(F, E, k, v) {
          let u = F.getBBox().width;
          return E ? u + v : k - u - v;
        }, alignToConnectors: function(F, E, k, v) {
          let u = 0, c;
          return F.forEach(function(w) {
            (c = w.dataLabel.getBBox().width) > u && (u = c);
          }), E ? u + v : k - u - v;
        } };
        function A(F, E) {
          let { center: k, options: v } = this, u = k[2] / 2, c = F.angle || 0, w = Math.cos(c), T = Math.sin(c), D = k[0] + w * u, G = k[1] + T * u, L = Math.min((v.slicedOffset || 0) + (v.borderWidth || 0), E / 5);
          return { natural: { x: D + w * E, y: G + T * E }, computed: {}, alignment: E < 0 ? "center" : F.half ? "right" : "left", connectorPosition: { breakAt: { x: D + w * L, y: G + T * L }, touchingSliceAt: { x: D, y: G } }, distance: E };
        }
        function O() {
          var le;
          let F = this, E = F.points, k = F.chart, v = k.plotWidth, u = k.plotHeight, c = k.plotLeft, w = Math.round(k.chartWidth / 3), T = F.center, D = T[2] / 2, G = T[1], L = [[], []], J = [0, 0, 0, 0], se = F.dataLabelPositioners, _, X, U, te = 0;
          F.visible && ((le = F.hasDataLabels) != null && le.call(F)) && (E.forEach((R) => {
            (R.dataLabels || []).forEach((P) => {
              P.shortened && (P.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), P.shortened = !1);
            });
          }), N.prototype.drawDataLabels.apply(F), E.forEach((R) => {
            (R.dataLabels || []).forEach((P, W) => {
              var B;
              let q = T[2] / 2, p = P.options, j = x((p == null ? void 0 : p.distance) || 0, q);
              W === 0 && L[R.half].push(R), !S((B = p == null ? void 0 : p.style) == null ? void 0 : B.width) && P.getBBox().width > w && (P.css({ width: Math.round(0.7 * w) + "px" }), P.shortened = !0), P.dataLabelPosition = this.getDataLabelPosition(R, j), te = Math.max(te, j);
            });
          }), L.forEach((R, P) => {
            let W = R.length, q = [], p, j, B = 0, Z;
            W && (F.sortByAngle(R, P - 0.5), te > 0 && (p = Math.max(0, G - D - te), j = Math.min(G + D + te, k.plotHeight), R.forEach((Y) => {
              (Y.dataLabels || []).forEach((ne) => {
                var $;
                let V = ne.dataLabelPosition;
                V && V.distance > 0 && (V.top = Math.max(0, G - D - V.distance), V.bottom = Math.min(G + D + V.distance, k.plotHeight), B = ne.getBBox().height || 21, ne.lineHeight = k.renderer.fontMetrics(ne.text || ne).h + 2 * ne.padding, Y.distributeBox = { target: ((($ = ne.dataLabelPosition) == null ? void 0 : $.natural.y) || 0) - V.top + ne.lineHeight / 2, size: B, rank: Y.y }, q.push(Y.distributeBox));
              });
            }), M(q, Z = j + B - p, Z / 5)), R.forEach((Y) => {
              (Y.dataLabels || []).forEach((ne) => {
                let V = ne.options || {}, $ = Y.distributeBox, ee = ne.dataLabelPosition, ue = (ee == null ? void 0 : ee.natural.y) || 0, ce = V.connectorPadding || 0, Q = ne.lineHeight || 21, K = (Q - ne.getBBox().height) / 2, ie = 0, ae = ue, de = "inherit";
                if (ee) {
                  if (q && S($) && ee.distance > 0 && ($.pos === void 0 ? de = "hidden" : (U = $.size, ae = se.radialDistributionY(Y, ne))), V.justify)
                    ie = se.justify(Y, ne, D, T);
                  else
                    switch (V.alignTo) {
                      case "connectors":
                        ie = se.alignToConnectors(R, P, v, c);
                        break;
                      case "plotEdges":
                        ie = se.alignToPlotEdges(ne, P, v, c);
                        break;
                      default:
                        ie = se.radialDistributionX(F, Y, ae - K, ue, ne);
                    }
                  if (ee.attribs = { visibility: de, align: ee.alignment }, ee.posAttribs = { x: ie + (V.x || 0) + ({ left: ce, right: -ce }[ee.alignment] || 0), y: ae + (V.y || 0) - Q / 2 }, ee.computed.x = ie, ee.computed.y = ae - K, y(V.crop, !0)) {
                    let he;
                    ie - (X = ne.getBBox().width) < ce && P === 1 ? (he = Math.round(X - ie + ce), J[3] = Math.max(he, J[3])) : ie + X > v - ce && P === 0 && (he = Math.round(ie + X - v + ce), J[1] = Math.max(he, J[1])), ae - U / 2 < 0 ? J[0] = Math.max(Math.round(-ae + U / 2), J[0]) : ae + U / 2 > u && (J[2] = Math.max(Math.round(ae + U / 2 - u), J[2])), ee.sideOverflow = he;
                  }
                }
              });
            }));
          }), (f(J) === 0 || this.verifyDataLabelOverflow(J)) && (this.placeDataLabels(), this.points.forEach((R) => {
            (R.dataLabels || []).forEach((P) => {
              var j;
              let { connectorColor: W, connectorWidth: q = 1 } = P.options || {}, p = P.dataLabelPosition;
              if (q) {
                let B;
                _ = P.connector, p && p.distance > 0 ? (B = !_, _ || (P.connector = _ = k.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + R.colorIndex + (R.className ? " " + R.className : "")).add(F.dataLabelsGroup)), k.styledMode || _.attr({ "stroke-width": q, stroke: W || R.color || "#666666" }), _[B ? "attr" : "animate"]({ d: R.getConnectorPath(P) }), _.attr({ visibility: (j = p.attribs) == null ? void 0 : j.visibility })) : _ && (P.connector = _.destroy());
              }
            });
          })));
        }
        function z() {
          this.points.forEach((F) => {
            (F.dataLabels || []).forEach((E) => {
              var v;
              let k = E.dataLabelPosition;
              k ? (k.sideOverflow && (E.css({ width: Math.max(E.getBBox().width - k.sideOverflow, 0) + "px", textOverflow: (((v = E.options) == null ? void 0 : v.style) || {}).textOverflow || "ellipsis" }), E.shortened = !0), E.attr(k.attribs), E[E.moved ? "animate" : "attr"](k.posAttribs), E.moved = !0) : E && E.attr({ y: -9999 });
            }), delete F.distributeBox;
          }, this);
        }
        function H(F) {
          let E = this.center, k = this.options, v = k.center, u = k.minSize || 80, c = u, w = k.size !== null;
          return !w && (v[0] !== null ? c = Math.max(E[2] - Math.max(F[1], F[3]), u) : (c = Math.max(E[2] - F[1] - F[3], u), E[0] += (F[3] - F[1]) / 2), v[1] !== null ? c = b(c, u, E[2] - Math.max(F[0], F[2])) : (c = b(c, u, E[2] - F[0] - F[2]), E[1] += (F[0] - F[2]) / 2), c < E[2] ? (E[2] = c, E[3] = Math.min(k.thickness ? Math.max(0, c - 2 * k.thickness) : Math.max(0, x(k.innerSize || 0, c)), c), this.translate(E), this.drawDataLabels && this.drawDataLabels()) : w = !0), w;
        }
        I.compose = function(F) {
          if (r.compose(N), d(m, "PieDataLabel")) {
            let E = F.prototype;
            E.dataLabelPositioners = C, E.alignDataLabel = g, E.drawDataLabels = O, E.getDataLabelPosition = A, E.placeDataLabels = z, E.verifyDataLabelOverflow = H;
          }
        };
      }(h || (h = {})), h;
    }), n(i, "Core/Geometry/GeometryUtilities.js", [], function() {
      var r, s;
      return (s = r || (r = {})).getCenterOfPoints = function(o) {
        let a = o.reduce((l, h) => (l.x += h.x, l.y += h.y, l), { x: 0, y: 0 });
        return { x: a.x / o.length, y: a.y / o.length };
      }, s.getDistanceBetweenPoints = function(o, a) {
        return Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2));
      }, s.getAngleBetweenPoints = function(o, a) {
        return Math.atan2(a.x - o.x, a.y - o.y);
      }, s.pointInPolygon = function({ x: o, y: a }, l) {
        let h = l.length, m, g, M = !1;
        for (m = 0, g = h - 1; m < h; g = m++) {
          let [N, f] = l[m], [b, S] = l[g];
          f > a != S > a && o < (b - N) * (a - f) / (S - f) + N && (M = !M);
        }
        return M;
      }, r;
    }), n(i, "Extensions/OverlappingDataLabels.js", [i["Core/Geometry/GeometryUtilities.js"], i["Core/Utilities.js"]], function(r, s) {
      let { pointInPolygon: o } = r, { addEvent: a, fireEvent: l, objectEach: h, pick: m } = s;
      function g(f) {
        let b = f.length, S = (z, H) => !(H.x >= z.x + z.width || H.x + H.width <= z.x || H.y >= z.y + z.height || H.y + H.height <= z.y), y = (z, H) => {
          for (let F of z)
            if (o({ x: F[0], y: F[1] }, H))
              return !0;
          return !1;
        }, d, x, I, C, A, O = !1;
        for (let z = 0; z < b; z++)
          (d = f[z]) && (d.oldOpacity = d.opacity, d.newOpacity = 1, d.absoluteBox = function(H) {
            var F, E;
            if (H && (!H.alignAttr || H.placed)) {
              let k = H.box ? 0 : H.padding || 0, v = H.alignAttr || { x: H.attr("x"), y: H.attr("y") }, u = H.getBBox();
              return H.width = u.width, H.height = u.height, { x: v.x + (((F = H.parentGroup) == null ? void 0 : F.translateX) || 0) + k, y: v.y + (((E = H.parentGroup) == null ? void 0 : E.translateY) || 0) + k, width: (H.width || 0) - 2 * k, height: (H.height || 0) - 2 * k, polygon: u == null ? void 0 : u.polygon };
            }
          }(d));
        f.sort((z, H) => (H.labelrank || 0) - (z.labelrank || 0));
        for (let z = 0; z < b; ++z) {
          C = (x = f[z]) && x.absoluteBox;
          let H = C == null ? void 0 : C.polygon;
          for (let F = z + 1; F < b; ++F) {
            A = (I = f[F]) && I.absoluteBox;
            let E = !1;
            if (C && A && x !== I && x.newOpacity !== 0 && I.newOpacity !== 0 && x.visibility !== "hidden" && I.visibility !== "hidden") {
              let k = A.polygon;
              if (H && k && H !== k ? y(H, k) && (E = !0) : S(C, A) && (E = !0), E) {
                let v = x.labelrank < I.labelrank ? x : I, u = v.text;
                v.newOpacity = 0, u != null && u.element.querySelector("textPath") && u.hide();
              }
            }
          }
        }
        for (let z of f)
          M(z, this) && (O = !0);
        O && l(this, "afterHideAllOverlappingLabels");
      }
      function M(f, b) {
        let S, y, d = !1;
        return f && (y = f.newOpacity, f.oldOpacity !== y && (f.hasClass("highcharts-data-label") ? (f[y ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), S = function() {
          b.styledMode || f.css({ pointerEvents: y ? "auto" : "none" });
        }, d = !0, f[f.isOld ? "animate" : "attr"]({ opacity: y }, void 0, S), l(b, "afterHideOverlappingLabel")) : f.attr({ opacity: y })), f.isOld = !0), d;
      }
      function N() {
        var S;
        let f = this, b = [];
        for (let y of f.labelCollectors || [])
          b = b.concat(y());
        for (let y of f.yAxis || [])
          y.stacking && y.options.stackLabels && !y.options.stackLabels.allowOverlap && h(y.stacking.stacks, (d) => {
            h(d, (x) => {
              x.label && b.push(x.label);
            });
          });
        for (let y of f.series || [])
          if (y.visible && ((S = y.hasDataLabels) != null && S.call(y))) {
            let d = (x) => {
              for (let I of x)
                I.visible && (I.dataLabels || []).forEach((C) => {
                  var O;
                  let A = C.options || {};
                  C.labelrank = m(A.labelrank, I.labelrank, (O = I.shapeArgs) == null ? void 0 : O.height), A.allowOverlap ?? Number(A.distance) > 0 ? (C.oldOpacity = C.opacity, C.newOpacity = 1, M(C, f)) : b.push(C);
                });
            };
            d(y.nodes || []), d(y.points);
          }
        this.hideOverlappingLabels(b);
      }
      return { compose: function(f) {
        let b = f.prototype;
        b.hideOverlappingLabels || (b.hideOverlappingLabels = g, a(f, "render", N));
      } };
    }), n(i, "Extensions/BorderRadius.js", [i["Core/Defaults.js"], i["Core/Globals.js"], i["Core/Utilities.js"]], function(r, s, o) {
      let { defaultOptions: a } = r, { noop: l } = s, { addEvent: h, extend: m, isObject: g, merge: M, relativeLength: N } = o, f = { radius: 0, scope: "stack", where: void 0 }, b = l, S = l;
      function y(A, O, z, H, F = {}) {
        let E = b(A, O, z, H, F), { innerR: k = 0, r: v = z, start: u = 0, end: c = 0 } = F;
        if (F.open || !F.borderRadius)
          return E;
        let w = c - u, T = Math.sin(w / 2), D = Math.max(Math.min(N(F.borderRadius || 0, v - k), (v - k) / 2, v * T / (1 + T)), 0), G = Math.min(D, w / Math.PI * 2 * k), L = E.length - 1;
        for (; L--; )
          (function(J, se, _) {
            let X, U, te, le = J[se], R = J[se + 1];
            if (R[0] === "Z" && (R = J[0]), (le[0] === "M" || le[0] === "L") && R[0] === "A" ? (X = le, U = R, te = !0) : le[0] === "A" && (R[0] === "M" || R[0] === "L") && (X = R, U = le), X && U && U.params) {
              let P = U[1], W = U[5], q = U.params, { start: p, end: j, cx: B, cy: Z } = q, Y = W ? P - _ : P + _, ne = Y ? Math.asin(_ / Y) : 0, V = W ? ne : -ne, $ = Math.cos(ne) * Y;
              te ? (q.start = p + V, X[1] = B + $ * Math.cos(p), X[2] = Z + $ * Math.sin(p), J.splice(se + 1, 0, ["A", _, _, 0, 0, 1, B + P * Math.cos(q.start), Z + P * Math.sin(q.start)])) : (q.end = j - V, U[6] = B + P * Math.cos(q.end), U[7] = Z + P * Math.sin(q.end), J.splice(se + 1, 0, ["A", _, _, 0, 0, 1, B + $ * Math.cos(j), Z + $ * Math.sin(j)])), U[4] = Math.abs(q.end - q.start) < Math.PI ? 0 : 1;
            }
          })(E, L, L > 1 ? G : D);
        return E;
      }
      function d() {
        var A, O;
        if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
          let { options: z, yAxis: H } = this, F = z.stacking === "percent", E = (O = (A = a.plotOptions) == null ? void 0 : A[this.type]) == null ? void 0 : O.borderRadius, k = x(z.borderRadius, g(E) ? E : {}), v = H.options.reversed;
          for (let u of this.points) {
            let { shapeArgs: c } = u;
            if (u.shapeType === "roundedRect" && c) {
              let { width: w = 0, height: T = 0, y: D = 0 } = c, G = D, L = T;
              if (k.scope === "stack" && u.stackTotal) {
                let X = H.translate(F ? 100 : u.stackTotal, !1, !0, !1, !0), U = H.translate(z.threshold || 0, !1, !0, !1, !0), te = this.crispCol(0, Math.min(X, U), 0, Math.abs(X - U));
                G = te.y, L = te.height;
              }
              let J = (u.negative ? -1 : 1) * (v ? -1 : 1) == -1, se = k.where;
              !se && this.is("waterfall") && Math.abs((u.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (se = "all"), se || (se = "end");
              let _ = Math.min(N(k.radius, w), w / 2, se === "all" ? T / 2 : 1 / 0) || 0;
              se === "end" && (J && (G -= _), L += _), m(c, { brBoxHeight: L, brBoxY: G, r: _ });
            }
          }
        }
      }
      function x(A, O) {
        return g(A) || (A = { radius: A || 0 }), M(f, O, A);
      }
      function I() {
        let A = x(this.options.borderRadius);
        for (let O of this.points) {
          let z = O.shapeArgs;
          z && (z.borderRadius = N(A.radius, (z.r || 0) - (z.innerR || 0)));
        }
      }
      function C(A, O, z, H, F = {}) {
        let E = S(A, O, z, H, F), { r: k = 0, brBoxHeight: v = H, brBoxY: u = O } = F, c = O - u, w = u + v - (O + H), T = c - k > -0.1 ? 0 : k, D = w - k > -0.1 ? 0 : k, G = Math.max(T && c, 0), L = Math.max(D && w, 0), J = [A + T, O], se = [A + z - T, O], _ = [A + z, O + T], X = [A + z, O + H - D], U = [A + z - D, O + H], te = [A + D, O + H], le = [A, O + H - D], R = [A, O + T], P = (W, q) => Math.sqrt(Math.pow(W, 2) - Math.pow(q, 2));
        if (G) {
          let W = P(T, T - G);
          J[0] -= W, se[0] += W, _[1] = R[1] = O + T - G;
        }
        if (H < T - G) {
          let W = P(T, T - G - H);
          _[0] = X[0] = A + z - T + W, U[0] = Math.min(_[0], U[0]), te[0] = Math.max(X[0], te[0]), le[0] = R[0] = A + T - W, _[1] = R[1] = O + H;
        }
        if (L) {
          let W = P(D, D - L);
          U[0] += W, te[0] -= W, X[1] = le[1] = O + H - D + L;
        }
        if (H < D - L) {
          let W = P(D, D - L - H);
          _[0] = X[0] = A + z - D + W, se[0] = Math.min(_[0], se[0]), J[0] = Math.max(X[0], J[0]), le[0] = R[0] = A + D - W, X[1] = le[1] = O;
        }
        return E.length = 0, E.push(["M", ...J], ["L", ...se], ["A", T, T, 0, 0, 1, ..._], ["L", ...X], ["A", D, D, 0, 0, 1, ...U], ["L", ...te], ["A", D, D, 0, 0, 1, ...le], ["L", ...R], ["A", T, T, 0, 0, 1, ...J], ["Z"]), E;
      }
      return { compose: function(A, O, z) {
        let H = A.types.pie;
        if (!O.symbolCustomAttribs.includes("borderRadius")) {
          let F = z.prototype.symbols;
          h(A, "afterColumnTranslate", d, { order: 9 }), h(H, "afterTranslate", I), O.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), b = F.arc, S = F.roundedRect, F.arc = y, F.roundedRect = C;
        }
      }, optionsToObject: x };
    }), n(i, "Core/Responsive.js", [i["Core/Utilities.js"]], function(r) {
      var s;
      let { diffObjects: o, extend: a, find: l, merge: h, pick: m, uniqueKey: g } = r;
      return function(M) {
        function N(b, S) {
          let y = b.condition;
          (y.callback || function() {
            return this.chartWidth <= m(y.maxWidth, Number.MAX_VALUE) && this.chartHeight <= m(y.maxHeight, Number.MAX_VALUE) && this.chartWidth >= m(y.minWidth, 0) && this.chartHeight >= m(y.minHeight, 0);
          }).call(this) && S.push(b._id);
        }
        function f(b, S) {
          let y = this.options.responsive, d = this.currentResponsive, x = [], I;
          !S && y && y.rules && y.rules.forEach((O) => {
            O._id === void 0 && (O._id = g()), this.matchResponsiveRule(O, x);
          }, this);
          let C = h(...x.map((O) => l((y || {}).rules || [], (z) => z._id === O)).map((O) => O && O.chartOptions));
          C.isResponsiveOptions = !0, x = x.toString() || void 0;
          let A = d && d.ruleIds;
          x === A || (d && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(d.undoOptions, b, !0), this.updatingResponsive = !1), x ? ((I = o(C, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = { ruleIds: x, mergedOptions: C, undoOptions: I }, this.updatingResponsive || this.update(C, b, !0)) : this.currentResponsive = void 0);
        }
        M.compose = function(b) {
          let S = b.prototype;
          return S.matchResponsiveRule || a(S, { matchResponsiveRule: N, setResponsive: f }), b;
        };
      }(s || (s = {})), s;
    }), n(i, "masters/highcharts.src.js", [i["Core/Globals.js"], i["Core/Utilities.js"], i["Core/Defaults.js"], i["Core/Animation/Fx.js"], i["Core/Animation/AnimationUtilities.js"], i["Core/Renderer/HTML/AST.js"], i["Core/Templating.js"], i["Core/Renderer/RendererRegistry.js"], i["Core/Renderer/RendererUtilities.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Renderer/SVG/SVGRenderer.js"], i["Core/Renderer/HTML/HTMLElement.js"], i["Core/Axis/Axis.js"], i["Core/Axis/DateTimeAxis.js"], i["Core/Axis/LogarithmicAxis.js"], i["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], i["Core/Axis/Tick.js"], i["Core/Tooltip.js"], i["Core/Series/Point.js"], i["Core/Pointer.js"], i["Core/Legend/Legend.js"], i["Core/Legend/LegendSymbol.js"], i["Core/Chart/Chart.js"], i["Extensions/ScrollablePlotArea.js"], i["Core/Axis/Stacking/StackingAxis.js"], i["Core/Axis/Stacking/StackItem.js"], i["Core/Series/Series.js"], i["Core/Series/SeriesRegistry.js"], i["Series/Column/ColumnDataLabel.js"], i["Series/Pie/PieDataLabel.js"], i["Core/Series/DataLabel.js"], i["Extensions/OverlappingDataLabels.js"], i["Extensions/BorderRadius.js"], i["Core/Responsive.js"], i["Core/Color/Color.js"], i["Core/Time.js"]], function(r, s, o, a, l, h, m, g, M, N, f, b, S, y, d, x, I, C, A, O, z, H, F, E, k, v, u, c, w, T, D, G, L, J, se, _) {
      return r.AST = h, r.Axis = S, r.Chart = F, r.Color = se, r.DataLabel = D, r.Fx = a, r.HTMLElement = b, r.Legend = z, r.LegendSymbol = H, r.OverlappingDataLabels = r.OverlappingDataLabels || G, r.PlotLineOrBand = x, r.Point = A, r.Pointer = O, r.RendererRegistry = g, r.Series = u, r.SeriesRegistry = c, r.StackItem = v, r.SVGElement = N, r.SVGRenderer = f, r.Templating = m, r.Tick = I, r.Time = _, r.Tooltip = C, r.animate = l.animate, r.animObject = l.animObject, r.chart = F.chart, r.color = se.parse, r.dateFormat = m.dateFormat, r.defaultOptions = o.defaultOptions, r.distribute = M.distribute, r.format = m.format, r.getDeferredAnimation = l.getDeferredAnimation, r.getOptions = o.getOptions, r.numberFormat = m.numberFormat, r.seriesType = c.seriesType, r.setAnimation = l.setAnimation, r.setOptions = o.setOptions, r.stop = l.stop, r.time = o.defaultTime, r.timers = a.timers, L.compose(r.Series, r.SVGElement, r.SVGRenderer), w.compose(r.Series.types.column), D.compose(r.Series), y.compose(r.Axis), b.compose(r.SVGRenderer), z.compose(r.Chart), d.compose(r.Axis), G.compose(r.Chart), T.compose(r.Series.types.pie), x.compose(r.Chart, r.Axis), O.compose(r.Chart), J.compose(r.Chart), E.compose(r.Axis, r.Chart, r.Series), k.compose(r.Axis, r.Chart, r.Series), C.compose(r.Pointer), s.extend(r, s), r;
    }), i["masters/highcharts.src.js"]._modules = i, i["masters/highcharts.src.js"];
  });
})(Ql);
var Af = Ql.exports;
const Ef = /* @__PURE__ */ Gl(Af);
var Kl = { exports: {} };
(function(e, t) {
  (function(i, n) {
    e.exports = n(Ge);
  })(typeof self < "u" ? self : Vl, function(i) {
    return function(n) {
      function r(o) {
        if (s[o])
          return s[o].exports;
        var a = s[o] = { i: o, l: !1, exports: {} };
        return n[o].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
      }
      var s = {};
      return r.m = n, r.c = s, r.d = function(o, a, l) {
        r.o(o, a) || Object.defineProperty(o, a, { configurable: !1, enumerable: !0, get: l });
      }, r.n = function(o) {
        var a = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return r.d(a, "a", a), a;
      }, r.o = function(o, a) {
        return Object.prototype.hasOwnProperty.call(o, a);
      }, r.p = "", r(r.s = 0);
    }([function(n, r, s) {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(d) {
          for (var x = 1; x < arguments.length; x++) {
            var I = arguments[x];
            for (var C in I)
              Object.prototype.hasOwnProperty.call(I, C) && (d[C] = I[C]);
          }
          return d;
        }, o.apply(this, arguments);
      }
      function a(d) {
        return g(d) || m(d) || h(d) || l();
      }
      function l() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function h(d, x) {
        if (d) {
          if (typeof d == "string")
            return M(d, x);
          var I = Object.prototype.toString.call(d).slice(8, -1);
          return I === "Object" && d.constructor && (I = d.constructor.name), I === "Map" || I === "Set" ? Array.from(d) : I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I) ? M(d, x) : void 0;
        }
      }
      function m(d) {
        if (typeof Symbol < "u" && d[Symbol.iterator] != null || d["@@iterator"] != null)
          return Array.from(d);
      }
      function g(d) {
        if (Array.isArray(d))
          return M(d);
      }
      function M(d, x) {
        (x == null || x > d.length) && (x = d.length);
        for (var I = 0, C = new Array(x); I < x; I++)
          C[I] = d[I];
        return C;
      }
      function N(d) {
        "@babel/helpers - typeof";
        return (N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
          return typeof x;
        } : function(x) {
          return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
        })(d);
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), s.d(r, "HighchartsReact", function() {
        return y;
      });
      var f = s(1), b = s.n(f), S = typeof window < "u" ? f.useLayoutEffect : f.useEffect, y = Object(f.memo)(Object(f.forwardRef)(function(d, x) {
        var I = Object(f.useRef)(), C = Object(f.useRef)(), A = Object(f.useRef)(d.constructorType), O = Object(f.useRef)(d.highcharts);
        return S(function() {
          function z() {
            var F = d.highcharts || (typeof window > "u" ? "undefined" : N(window)) === "object" && window.Highcharts, E = d.constructorType || "chart";
            F ? F[E] ? d.options ? C.current = F[E](I.current, d.options, d.callback) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.');
          }
          if (C.current) {
            if (d.allowChartUpdate !== !1)
              if (d.constructorType !== A.current || d.highcharts !== O.current)
                A.current = d.constructorType, O.current = d.highcharts, z();
              else if (!d.immutable && C.current) {
                var H;
                (H = C.current).update.apply(H, [d.options].concat(a(d.updateArgs || [!0, !0])));
              } else
                z();
          } else
            z();
        }, [d.options, d.allowChartUpdate, d.updateArgs, d.containerProps, d.highcharts, d.constructorType]), S(function() {
          return function() {
            C.current && (C.current.destroy(), C.current = null);
          };
        }, []), Object(f.useImperativeHandle)(x, function() {
          return { get chart() {
            return C.current;
          }, container: I };
        }, []), b.a.createElement("div", o({}, d.containerProps, { ref: I }));
      }));
      r.default = y;
    }, function(n, r) {
      n.exports = i;
    }]);
  });
})(Kl);
var Tf = Kl.exports;
const kf = /* @__PURE__ */ Gl(Tf), Mf = ({
  data: e,
  title: t,
  rootStyles: i,
  titleStyles: n,
  chartContainerStyles: r,
  height: s = 500,
  width: o = 600,
  colorScheme: a = "rainbowOf10",
  showDataLabels: l = !1,
  showDataValues: h = !1,
  showlegends: m = !1,
  unit: g = null,
  legendSymbol: M = "circle",
  chartType: N = "pieChart",
  loading: f = !1
}) => {
  const b = An[a], S = e == null ? void 0 : e.map((d) => ({
    name: d.key,
    y: d.value
  })), y = {
    chart: {
      plotBackgroundColor: void 0,
      plotBorderWidth: void 0,
      plotShadow: !1,
      type: "pie",
      width: o,
      height: s,
      backgroundColor: "transparent"
    },
    title: void 0,
    tooltip: {
      useHTML: !0,
      formatter: function() {
        var d, x, I, C, A;
        return `
        ${(d = this == null ? void 0 : this.point) == null ? void 0 : d.name}<br>
       <b> ${(x = this == null ? void 0 : this.series) == null ? void 0 : x.name}: ${(I = this == null ? void 0 : this.point) == null ? void 0 : I.y} ${g || ""} (${(A = (C = this == null ? void 0 : this.point) == null ? void 0 : C.percentage) == null ? void 0 : A.toFixed(1)}%)</b>
      `;
      }
    },
    accessibility: {
      point: {
        valueSuffix: "%"
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: !0,
        cursor: "pointer",
        dataLabels: {
          enabled: l,
          format: h ? `{point.name}<br /><b>{point.y} ${g || ""} ({point.percentage:.1f}%)</b>` : "{point.name}",
          distance: 20
        },
        showInLegend: m,
        startAngle: 0,
        endAngle: 360,
        center: ["50%", "50%"],
        size: "80%"
      }
    },
    legend: {
      ...M === "rectangle" && {
        symbolRadius: 0
      },
      margin: 30
    },
    series: [
      {
        type: "pie",
        innerSize: N === "donutChart" ? "50%" : 0,
        name: "value",
        data: S
      }
    ],
    colors: b
  };
  return /* @__PURE__ */ oe.jsxs(ur, { style: { ...i }, className: "w-fit p-6", children: [
    /* @__PURE__ */ oe.jsx(
      "span",
      {
        className: "text-2xl font-medium",
        style: {
          ...n
        },
        children: t
      }
    ),
    f && /* @__PURE__ */ oe.jsx("div", { className: "min-w-[400px] w-auto min-h-96 h-auto flex justify-center items-center", children: /* @__PURE__ */ oe.jsx(Ho, { size: "medium" }) }),
    !f && (e == null ? void 0 : e.length) === 0 && /* @__PURE__ */ oe.jsx("div", { className: "min-w-[400px] w-auto min-h-96 h-auto flex justify-center items-center", children: /* @__PURE__ */ oe.jsx("span", { children: "No Data" }) }),
    !f && (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ oe.jsx(
      "div",
      {
        className: "w-fit h-fit p-1 mt-10",
        style: {
          ...r
        },
        children: /* @__PURE__ */ oe.jsx(kf, { highcharts: Ef, options: y })
      }
    )
  ] });
}, EC = (e) => {
  const { title: t, rootStyles: i, titleStyles: n } = e;
  return /* @__PURE__ */ oe.jsx(
    Wl,
    {
      fallback: (r) => /* @__PURE__ */ oe.jsxs(ur, { style: { ...i }, className: "w-fit p-6", children: [
        /* @__PURE__ */ oe.jsx(
          "span",
          {
            className: "text-2xl font-medium",
            style: {
              ...n
            },
            children: t
          }
        ),
        /* @__PURE__ */ oe.jsx("div", { className: "min-w-[400px] w-auto min-h-96 h-auto flex justify-center items-center", children: /* @__PURE__ */ oe.jsx("span", { children: r ? r.message : "An unknown error occurred." }) })
      ] }),
      children: /* @__PURE__ */ oe.jsx(Mf, { ...e })
    }
  );
};
var ql = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ma = Ge.createContext && /* @__PURE__ */ Ge.createContext(ql), Pf = ["attr", "size", "title"];
function Rf(e, t) {
  if (e == null)
    return {};
  var i = Of(e, t), n, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function Of(e, t) {
  if (e == null)
    return {};
  var i = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0)
        continue;
      i[n] = e[n];
    }
  return i;
}
function Vn() {
  return Vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
  }, Vn.apply(this, arguments);
}
function Pa(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function Gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pa(Object(i), !0).forEach(function(n) {
      Lf(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Pa(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Lf(e, t, i) {
  return t = Nf(t), t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Nf(e) {
  var t = Df(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Df(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ec(e) {
  return e && e.map((t, i) => /* @__PURE__ */ Ge.createElement(t.tag, Gn({
    key: i
  }, t.attr), ec(t.child)));
}
function ji(e) {
  return (t) => /* @__PURE__ */ Ge.createElement(Bf, Vn({
    attr: Gn({}, e.attr)
  }, t), ec(e.child));
}
function Bf(e) {
  var t = (i) => {
    var {
      attr: n,
      size: r,
      title: s
    } = e, o = Rf(e, Pf), a = r || i.size || "1em", l;
    return i.className && (l = i.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ Ge.createElement("svg", Vn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, n, o, {
      className: l,
      style: Gn(Gn({
        color: e.color || i.color
      }, i.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ Ge.createElement("title", null, s), e.children);
  };
  return Ma !== void 0 ? /* @__PURE__ */ Ge.createElement(Ma.Consumer, null, (i) => t(i)) : t(ql);
}
function Si(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M5 12l5 5l10 -10" }, child: [] }] })(e);
}
function jf(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, child: [] }, { tag: "path", attr: { d: "M12 9h.01" }, child: [] }, { tag: "path", attr: { d: "M11 12h1v4h1" }, child: [] }] })(e);
}
function Ff(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M4 7l16 0" }, child: [] }, { tag: "path", attr: { d: "M10 11l0 6" }, child: [] }, { tag: "path", attr: { d: "M14 11l0 6" }, child: [] }, { tag: "path", attr: { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" }, child: [] }, { tag: "path", attr: { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" }, child: [] }] })(e);
}
function Hi(e) {
  "@babel/helpers - typeof";
  return Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hi(e);
}
function _f(e, t) {
  if (Hi(e) != "object" || !e)
    return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t || "default");
    if (Hi(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tc(e) {
  var t = _f(e, "string");
  return Hi(t) == "symbol" ? t : t + "";
}
function Pr(e, t, i) {
  return (t = tc(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function Ra(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(i), !0).forEach(function(n) {
      Pr(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Ra(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Vf(e) {
  if (Array.isArray(e))
    return e;
}
function Gf(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, r, s, o, a = [], l = !0, h = !1;
    try {
      if (s = (i = i.call(e)).next, t === 0) {
        if (Object(i) !== i)
          return;
        l = !1;
      } else
        for (; !(l = (n = s.call(i)).done) && (a.push(n.value), a.length !== t); l = !0)
          ;
    } catch (m) {
      h = !0, r = m;
    } finally {
      try {
        if (!l && i.return != null && (o = i.return(), Object(o) !== o))
          return;
      } finally {
        if (h)
          throw r;
      }
    }
    return a;
  }
}
function uo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++)
    n[i] = e[i];
  return n;
}
function ic(e, t) {
  if (e) {
    if (typeof e == "string")
      return uo(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? uo(e, t) : void 0;
  }
}
function Wf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pi(e, t) {
  return Vf(e) || Gf(e, t) || ic(e, t) || Wf();
}
function Xf(e, t) {
  if (e == null)
    return {};
  var i = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.includes(n))
        continue;
      i[n] = e[n];
    }
  return i;
}
function vi(e, t) {
  if (e == null)
    return {};
  var i, n, r = Xf(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      i = s[n], t.includes(i) || {}.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
  }
  return r;
}
var Hf = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function zf(e) {
  var t = e.defaultInputValue, i = t === void 0 ? "" : t, n = e.defaultMenuIsOpen, r = n === void 0 ? !1 : n, s = e.defaultValue, o = s === void 0 ? null : s, a = e.inputValue, l = e.menuIsOpen, h = e.onChange, m = e.onInputChange, g = e.onMenuClose, M = e.onMenuOpen, N = e.value, f = vi(e, Hf), b = Dt(a !== void 0 ? a : i), S = pi(b, 2), y = S[0], d = S[1], x = Dt(l !== void 0 ? l : r), I = pi(x, 2), C = I[0], A = I[1], O = Dt(N !== void 0 ? N : o), z = pi(O, 2), H = z[0], F = z[1], E = Tt(function(D, G) {
    typeof h == "function" && h(D, G), F(D);
  }, [h]), k = Tt(function(D, G) {
    var L;
    typeof m == "function" && (L = m(D, G)), d(L !== void 0 ? L : D);
  }, [m]), v = Tt(function() {
    typeof M == "function" && M(), A(!0);
  }, [M]), u = Tt(function() {
    typeof g == "function" && g(), A(!1);
  }, [g]), c = a !== void 0 ? a : y, w = l !== void 0 ? l : C, T = N !== void 0 ? N : H;
  return De(De({}, f), {}, {
    inputValue: c,
    menuIsOpen: w,
    onChange: E,
    onInputChange: k,
    onMenuClose: u,
    onMenuOpen: v,
    value: T
  });
}
function je() {
  return je = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i)
        ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
  }, je.apply(null, arguments);
}
function Zf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oa(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tc(n.key), n);
  }
}
function Yf(e, t, i) {
  return t && Oa(e.prototype, t), i && Oa(e, i), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ho(e, t) {
  return ho = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, ho(e, t);
}
function Uf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && ho(e, t);
}
function Wn(e) {
  return Wn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Wn(e);
}
function rc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rc = function() {
    return !!e;
  })();
}
function $f(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jf(e, t) {
  if (t && (Hi(t) == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $f(e);
}
function Qf(e) {
  var t = rc();
  return function() {
    var i, n = Wn(e);
    if (t) {
      var r = Wn(this).constructor;
      i = Reflect.construct(n, arguments, r);
    } else
      i = n.apply(this, arguments);
    return Jf(this, i);
  };
}
function Kf(e) {
  if (Array.isArray(e))
    return uo(e);
}
function qf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ep() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zo(e) {
  return Kf(e) || qf(e) || ic(e) || ep();
}
var tp = !1;
function ip(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function rp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var np = /* @__PURE__ */ function() {
  function e(i) {
    var n = this;
    this._insertTag = function(r) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(r, s), n.tags.push(r);
    }, this.isSpeedy = i.speedy === void 0 ? !tp : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(rp(this));
    var r = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = ip(r);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      r.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var r;
      return (r = n.parentNode) == null ? void 0 : r.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), wt = "-ms-", Xn = "-moz-", qe = "-webkit-", nc = "comm", Zo = "rule", Yo = "decl", sp = "@import", sc = "@keyframes", op = "@layer", ap = Math.abs, fs = String.fromCharCode, lp = Object.assign;
function cp(e, t) {
  return xt(e, 0) ^ 45 ? (((t << 2 ^ xt(e, 0)) << 2 ^ xt(e, 1)) << 2 ^ xt(e, 2)) << 2 ^ xt(e, 3) : 0;
}
function oc(e) {
  return e.trim();
}
function up(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function et(e, t, i) {
  return e.replace(t, i);
}
function fo(e, t) {
  return e.indexOf(t);
}
function xt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Br(e, t, i) {
  return e.slice(t, i);
}
function Kt(e) {
  return e.length;
}
function Uo(e) {
  return e.length;
}
function pn(e, t) {
  return t.push(e), e;
}
function dp(e, t) {
  return e.map(t).join("");
}
var ps = 1, dr = 1, ac = 0, Ot = 0, gt = 0, vr = "";
function gs(e, t, i, n, r, s, o) {
  return { value: e, root: t, parent: i, type: n, props: r, children: s, line: ps, column: dr, length: o, return: "" };
}
function Er(e, t) {
  return lp(gs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hp() {
  return gt;
}
function fp() {
  return gt = Ot > 0 ? xt(vr, --Ot) : 0, dr--, gt === 10 && (dr = 1, ps--), gt;
}
function Bt() {
  return gt = Ot < ac ? xt(vr, Ot++) : 0, dr++, gt === 10 && (dr = 1, ps++), gt;
}
function ii() {
  return xt(vr, Ot);
}
function En() {
  return Ot;
}
function rn(e, t) {
  return Br(vr, e, t);
}
function jr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function lc(e) {
  return ps = dr = 1, ac = Kt(vr = e), Ot = 0, [];
}
function cc(e) {
  return vr = "", e;
}
function Tn(e) {
  return oc(rn(Ot - 1, po(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pp(e) {
  for (; (gt = ii()) && gt < 33; )
    Bt();
  return jr(e) > 2 || jr(gt) > 3 ? "" : " ";
}
function gp(e, t) {
  for (; --t && Bt() && !(gt < 48 || gt > 102 || gt > 57 && gt < 65 || gt > 70 && gt < 97); )
    ;
  return rn(e, En() + (t < 6 && ii() == 32 && Bt() == 32));
}
function po(e) {
  for (; Bt(); )
    switch (gt) {
      case e:
        return Ot;
      case 34:
      case 39:
        e !== 34 && e !== 39 && po(gt);
        break;
      case 40:
        e === 41 && po(e);
        break;
      case 92:
        Bt();
        break;
    }
  return Ot;
}
function mp(e, t) {
  for (; Bt() && e + gt !== 47 + 10; )
    if (e + gt === 42 + 42 && ii() === 47)
      break;
  return "/*" + rn(t, Ot - 1) + "*" + fs(e === 47 ? e : Bt());
}
function bp(e) {
  for (; !jr(ii()); )
    Bt();
  return rn(e, Ot);
}
function vp(e) {
  return cc(kn("", null, null, null, [""], e = lc(e), 0, [0], e));
}
function kn(e, t, i, n, r, s, o, a, l) {
  for (var h = 0, m = 0, g = o, M = 0, N = 0, f = 0, b = 1, S = 1, y = 1, d = 0, x = "", I = r, C = s, A = n, O = x; S; )
    switch (f = d, d = Bt()) {
      case 40:
        if (f != 108 && xt(O, g - 1) == 58) {
          fo(O += et(Tn(d), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Tn(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += pp(f);
        break;
      case 92:
        O += gp(En() - 1, 7);
        continue;
      case 47:
        switch (ii()) {
          case 42:
          case 47:
            pn(yp(mp(Bt(), En()), t, i), l);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * b:
        a[h++] = Kt(O) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            S = 0;
          case 59 + m:
            y == -1 && (O = et(O, /\f/g, "")), N > 0 && Kt(O) - g && pn(N > 32 ? Na(O + ";", n, i, g - 1) : Na(et(O, " ", "") + ";", n, i, g - 2), l);
            break;
          case 59:
            O += ";";
          default:
            if (pn(A = La(O, t, i, h, m, r, a, x, I = [], C = [], g), s), d === 123)
              if (m === 0)
                kn(O, t, A, A, I, s, g, a, C);
              else
                switch (M === 99 && xt(O, 3) === 110 ? 100 : M) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    kn(e, A, A, n && pn(La(e, A, A, 0, 0, r, a, x, r, I = [], g), C), r, C, g, a, n ? I : C);
                    break;
                  default:
                    kn(O, A, A, A, [""], C, 0, a, C);
                }
        }
        h = m = N = 0, b = y = 1, x = O = "", g = o;
        break;
      case 58:
        g = 1 + Kt(O), N = f;
      default:
        if (b < 1) {
          if (d == 123)
            --b;
          else if (d == 125 && b++ == 0 && fp() == 125)
            continue;
        }
        switch (O += fs(d), d * b) {
          case 38:
            y = m > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            a[h++] = (Kt(O) - 1) * y, y = 1;
            break;
          case 64:
            ii() === 45 && (O += Tn(Bt())), M = ii(), m = g = Kt(x = O += bp(En())), d++;
            break;
          case 45:
            f === 45 && Kt(O) == 2 && (b = 0);
        }
    }
  return s;
}
function La(e, t, i, n, r, s, o, a, l, h, m) {
  for (var g = r - 1, M = r === 0 ? s : [""], N = Uo(M), f = 0, b = 0, S = 0; f < n; ++f)
    for (var y = 0, d = Br(e, g + 1, g = ap(b = o[f])), x = e; y < N; ++y)
      (x = oc(b > 0 ? M[y] + " " + d : et(d, /&\f/g, M[y]))) && (l[S++] = x);
  return gs(e, t, i, r === 0 ? Zo : a, l, h, m);
}
function yp(e, t, i) {
  return gs(e, t, i, nc, fs(hp()), Br(e, 2, -2), 0);
}
function Na(e, t, i, n) {
  return gs(e, t, i, Yo, Br(e, 0, n), Br(e, n + 1, -1), n);
}
function or(e, t) {
  for (var i = "", n = Uo(e), r = 0; r < n; r++)
    i += t(e[r], r, e, t) || "";
  return i;
}
function xp(e, t, i, n) {
  switch (e.type) {
    case op:
      if (e.children.length)
        break;
    case sp:
    case Yo:
      return e.return = e.return || e.value;
    case nc:
      return "";
    case sc:
      return e.return = e.value + "{" + or(e.children, n) + "}";
    case Zo:
      e.value = e.props.join(",");
  }
  return Kt(i = or(e.children, n)) ? e.return = e.value + "{" + i + "}" : "";
}
function Cp(e) {
  var t = Uo(e);
  return function(i, n, r, s) {
    for (var o = "", a = 0; a < t; a++)
      o += e[a](i, n, r, s) || "";
    return o;
  };
}
function wp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Sp(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return t[i] === void 0 && (t[i] = e(i)), t[i];
  };
}
var Ip = function(t, i, n) {
  for (var r = 0, s = 0; r = s, s = ii(), r === 38 && s === 12 && (i[n] = 1), !jr(s); )
    Bt();
  return rn(t, Ot);
}, Ap = function(t, i) {
  var n = -1, r = 44;
  do
    switch (jr(r)) {
      case 0:
        r === 38 && ii() === 12 && (i[n] = 1), t[n] += Ip(Ot - 1, i, n);
        break;
      case 2:
        t[n] += Tn(r);
        break;
      case 4:
        if (r === 44) {
          t[++n] = ii() === 58 ? "&\f" : "", i[n] = t[n].length;
          break;
        }
      default:
        t[n] += fs(r);
    }
  while (r = Bt());
  return t;
}, Ep = function(t, i) {
  return cc(Ap(lc(t), i));
}, Da = /* @__PURE__ */ new WeakMap(), Tp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var i = t.value, n = t.parent, r = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && i.charCodeAt(0) !== 58 && !Da.get(n)) && !r) {
      Da.set(t, !0);
      for (var s = [], o = Ep(i, s), a = n.props, l = 0, h = 0; l < o.length; l++)
        for (var m = 0; m < a.length; m++, h++)
          t.props[h] = s[l] ? o[l].replace(/&\f/g, a[m]) : a[m] + " " + o[l];
    }
  }
}, kp = function(t) {
  if (t.type === "decl") {
    var i = t.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function uc(e, t) {
  switch (cp(e, t)) {
    case 5103:
      return qe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return qe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return qe + e + Xn + e + wt + e + e;
    case 6828:
    case 4268:
      return qe + e + wt + e + e;
    case 6165:
      return qe + e + wt + "flex-" + e + e;
    case 5187:
      return qe + e + et(e, /(\w+).+(:[^]+)/, qe + "box-$1$2" + wt + "flex-$1$2") + e;
    case 5443:
      return qe + e + wt + "flex-item-" + et(e, /flex-|-self/, "") + e;
    case 4675:
      return qe + e + wt + "flex-line-pack" + et(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return qe + e + wt + et(e, "shrink", "negative") + e;
    case 5292:
      return qe + e + wt + et(e, "basis", "preferred-size") + e;
    case 6060:
      return qe + "box-" + et(e, "-grow", "") + qe + e + wt + et(e, "grow", "positive") + e;
    case 4554:
      return qe + et(e, /([^-])(transform)/g, "$1" + qe + "$2") + e;
    case 6187:
      return et(et(et(e, /(zoom-|grab)/, qe + "$1"), /(image-set)/, qe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return et(e, /(image-set\([^]*)/, qe + "$1$`$1");
    case 4968:
      return et(et(e, /(.+:)(flex-)?(.*)/, qe + "box-pack:$3" + wt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + qe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return et(e, /(.+)-inline(.+)/, qe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Kt(e) - 1 - t > 6)
        switch (xt(e, t + 1)) {
          case 109:
            if (xt(e, t + 4) !== 45)
              break;
          case 102:
            return et(e, /(.+:)(.+)-([^]+)/, "$1" + qe + "$2-$3$1" + Xn + (xt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~fo(e, "stretch") ? uc(et(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (xt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (xt(e, Kt(e) - 3 - (~fo(e, "!important") && 10))) {
        case 107:
          return et(e, ":", ":" + qe) + e;
        case 101:
          return et(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + qe + (xt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + qe + "$2$3$1" + wt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (xt(e, t + 11)) {
        case 114:
          return qe + e + wt + et(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return qe + e + wt + et(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return qe + e + wt + et(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return qe + e + wt + e + e;
  }
  return e;
}
var Mp = function(t, i, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Yo:
        t.return = uc(t.value, t.length);
        break;
      case sc:
        return or([Er(t, {
          value: et(t.value, "@", "@" + qe)
        })], r);
      case Zo:
        if (t.length)
          return dp(t.props, function(s) {
            switch (up(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return or([Er(t, {
                  props: [et(s, /:(read-\w+)/, ":" + Xn + "$1")]
                })], r);
              case "::placeholder":
                return or([Er(t, {
                  props: [et(s, /:(plac\w+)/, ":" + qe + "input-$1")]
                }), Er(t, {
                  props: [et(s, /:(plac\w+)/, ":" + Xn + "$1")]
                }), Er(t, {
                  props: [et(s, /:(plac\w+)/, wt + "input-$1")]
                })], r);
            }
            return "";
          });
    }
}, Pp = [Mp], Rp = function(t) {
  var i = t.key;
  if (i === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var S = b.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var r = t.stylisPlugins || Pp, s = {}, o, a = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(b) {
      for (var S = b.getAttribute("data-emotion").split(" "), y = 1; y < S.length; y++)
        s[S[y]] = !0;
      a.push(b);
    }
  );
  var l, h = [Tp, kp];
  {
    var m, g = [xp, wp(function(b) {
      m.insert(b);
    })], M = Cp(h.concat(r, g)), N = function(S) {
      return or(vp(S), M);
    };
    l = function(S, y, d, x) {
      m = d, N(S ? S + "{" + y.styles + "}" : y.styles), x && (f.inserted[y.name] = !0);
    };
  }
  var f = {
    key: i,
    sheet: new np({
      key: i,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return f.sheet.hydrate(a), f;
}, go = { exports: {} }, it = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function Op() {
  if (Ba)
    return it;
  Ba = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, N = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, d = e ? Symbol.for("react.scope") : 60119;
  function x(C) {
    if (typeof C == "object" && C !== null) {
      var A = C.$$typeof;
      switch (A) {
        case t:
          switch (C = C.type, C) {
            case l:
            case h:
            case n:
            case s:
            case r:
            case g:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case a:
                case m:
                case f:
                case N:
                case o:
                  return C;
                default:
                  return A;
              }
          }
        case i:
          return A;
      }
    }
  }
  function I(C) {
    return x(C) === h;
  }
  return it.AsyncMode = l, it.ConcurrentMode = h, it.ContextConsumer = a, it.ContextProvider = o, it.Element = t, it.ForwardRef = m, it.Fragment = n, it.Lazy = f, it.Memo = N, it.Portal = i, it.Profiler = s, it.StrictMode = r, it.Suspense = g, it.isAsyncMode = function(C) {
    return I(C) || x(C) === l;
  }, it.isConcurrentMode = I, it.isContextConsumer = function(C) {
    return x(C) === a;
  }, it.isContextProvider = function(C) {
    return x(C) === o;
  }, it.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, it.isForwardRef = function(C) {
    return x(C) === m;
  }, it.isFragment = function(C) {
    return x(C) === n;
  }, it.isLazy = function(C) {
    return x(C) === f;
  }, it.isMemo = function(C) {
    return x(C) === N;
  }, it.isPortal = function(C) {
    return x(C) === i;
  }, it.isProfiler = function(C) {
    return x(C) === s;
  }, it.isStrictMode = function(C) {
    return x(C) === r;
  }, it.isSuspense = function(C) {
    return x(C) === g;
  }, it.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === h || C === s || C === r || C === g || C === M || typeof C == "object" && C !== null && (C.$$typeof === f || C.$$typeof === N || C.$$typeof === o || C.$$typeof === a || C.$$typeof === m || C.$$typeof === S || C.$$typeof === y || C.$$typeof === d || C.$$typeof === b);
  }, it.typeOf = x, it;
}
var rt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Lp() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, N = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, d = e ? Symbol.for("react.scope") : 60119;
    function x(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === h || p === s || p === r || p === g || p === M || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === N || p.$$typeof === o || p.$$typeof === a || p.$$typeof === m || p.$$typeof === S || p.$$typeof === y || p.$$typeof === d || p.$$typeof === b);
    }
    function I(p) {
      if (typeof p == "object" && p !== null) {
        var j = p.$$typeof;
        switch (j) {
          case t:
            var B = p.type;
            switch (B) {
              case l:
              case h:
              case n:
              case s:
              case r:
              case g:
                return B;
              default:
                var Z = B && B.$$typeof;
                switch (Z) {
                  case a:
                  case m:
                  case f:
                  case N:
                  case o:
                    return Z;
                  default:
                    return j;
                }
            }
          case i:
            return j;
        }
      }
    }
    var C = l, A = h, O = a, z = o, H = t, F = m, E = n, k = f, v = N, u = i, c = s, w = r, T = g, D = !1;
    function G(p) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(p) || I(p) === l;
    }
    function L(p) {
      return I(p) === h;
    }
    function J(p) {
      return I(p) === a;
    }
    function se(p) {
      return I(p) === o;
    }
    function _(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function X(p) {
      return I(p) === m;
    }
    function U(p) {
      return I(p) === n;
    }
    function te(p) {
      return I(p) === f;
    }
    function le(p) {
      return I(p) === N;
    }
    function R(p) {
      return I(p) === i;
    }
    function P(p) {
      return I(p) === s;
    }
    function W(p) {
      return I(p) === r;
    }
    function q(p) {
      return I(p) === g;
    }
    rt.AsyncMode = C, rt.ConcurrentMode = A, rt.ContextConsumer = O, rt.ContextProvider = z, rt.Element = H, rt.ForwardRef = F, rt.Fragment = E, rt.Lazy = k, rt.Memo = v, rt.Portal = u, rt.Profiler = c, rt.StrictMode = w, rt.Suspense = T, rt.isAsyncMode = G, rt.isConcurrentMode = L, rt.isContextConsumer = J, rt.isContextProvider = se, rt.isElement = _, rt.isForwardRef = X, rt.isFragment = U, rt.isLazy = te, rt.isMemo = le, rt.isPortal = R, rt.isProfiler = P, rt.isStrictMode = W, rt.isSuspense = q, rt.isValidElementType = x, rt.typeOf = I;
  }()), rt;
}
process.env.NODE_ENV === "production" ? go.exports = Op() : go.exports = Lp();
var Np = go.exports, dc = Np, Dp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hc = {};
hc[dc.ForwardRef] = Dp;
hc[dc.Memo] = Bp;
var jp = !0;
function Fp(e, t, i) {
  var n = "";
  return i.split(" ").forEach(function(r) {
    e[r] !== void 0 ? t.push(e[r] + ";") : r && (n += r + " ");
  }), n;
}
var fc = function(t, i, n) {
  var r = t.key + "-" + i.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  jp === !1) && t.registered[r] === void 0 && (t.registered[r] = i.styles);
}, _p = function(t, i, n) {
  fc(t, i, n);
  var r = t.key + "-" + i.name;
  if (t.inserted[i.name] === void 0) {
    var s = i;
    do
      t.insert(i === s ? "." + r : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Vp(e) {
  for (var t = 0, i, n = 0, r = e.length; r >= 4; ++n, r -= 4)
    i = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, i = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= /* k >>> r: */
    i >>> 24, t = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Gp = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Wp = !1, Xp = /[A-Z]|^ms/g, Hp = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pc = function(t) {
  return t.charCodeAt(1) === 45;
}, Fa = function(t) {
  return t != null && typeof t != "boolean";
}, js = /* @__PURE__ */ Sp(function(e) {
  return pc(e) ? e : e.replace(Xp, "-$&").toLowerCase();
}), _a = function(t, i) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(Hp, function(n, r, s) {
          return qt = {
            name: r,
            styles: s,
            next: qt
          }, r;
        });
  }
  return Gp[t] !== 1 && !pc(t) && typeof i == "number" && i !== 0 ? i + "px" : i;
}, zp = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Fr(e, t, i) {
  if (i == null)
    return "";
  var n = i;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var r = i;
      if (r.anim === 1)
        return qt = {
          name: r.name,
          styles: r.styles,
          next: qt
        }, r.name;
      var s = i;
      if (s.styles !== void 0) {
        var o = s.next;
        if (o !== void 0)
          for (; o !== void 0; )
            qt = {
              name: o.name,
              styles: o.styles,
              next: qt
            }, o = o.next;
        var a = s.styles + ";";
        return a;
      }
      return Zp(e, t, i);
    }
    case "function": {
      if (e !== void 0) {
        var l = qt, h = i(e);
        return qt = l, Fr(e, t, h);
      }
      break;
    }
  }
  var m = i;
  if (t == null)
    return m;
  var g = t[m];
  return g !== void 0 ? g : m;
}
function Zp(e, t, i) {
  var n = "";
  if (Array.isArray(i))
    for (var r = 0; r < i.length; r++)
      n += Fr(e, t, i[r]) + ";";
  else
    for (var s in i) {
      var o = i[s];
      if (typeof o != "object") {
        var a = o;
        t != null && t[a] !== void 0 ? n += s + "{" + t[a] + "}" : Fa(a) && (n += js(s) + ":" + _a(s, a) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Wp)
          throw new Error(zp);
        if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
          for (var l = 0; l < o.length; l++)
            Fa(o[l]) && (n += js(s) + ":" + _a(s, o[l]) + ";");
        else {
          var h = Fr(e, t, o);
          switch (s) {
            case "animation":
            case "animationName": {
              n += js(s) + ":" + h + ";";
              break;
            }
            default:
              n += s + "{" + h + "}";
          }
        }
      }
    }
  return n;
}
var Va = /label:\s*([^\s;{]+)\s*(;|$)/g, qt;
function gc(e, t, i) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, r = "";
  qt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, r += Fr(i, t, s);
  else {
    var o = s;
    r += o[0];
  }
  for (var a = 1; a < e.length; a++)
    if (r += Fr(i, t, e[a]), n) {
      var l = s;
      r += l[a];
    }
  Va.lastIndex = 0;
  for (var h = "", m; (m = Va.exec(r)) !== null; )
    h += "-" + m[1];
  var g = Vp(r) + h;
  return {
    name: g,
    styles: r,
    next: qt
  };
}
var Yp = function(t) {
  return t();
}, Up = re["useInsertionEffect"] ? re["useInsertionEffect"] : !1, $p = Up || Yp, Jp = !1, mc = /* @__PURE__ */ re.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Rp({
    key: "css"
  }) : null
);
mc.Provider;
var Qp = function(t) {
  return /* @__PURE__ */ Bi(function(i, n) {
    var r = Fl(mc);
    return t(i, r, n);
  });
}, Kp = /* @__PURE__ */ re.createContext({}), $o = {}.hasOwnProperty, mo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", qp = function(t, i) {
  var n = {};
  for (var r in i)
    $o.call(i, r) && (n[r] = i[r]);
  return n[mo] = t, n;
}, eg = function(t) {
  var i = t.cache, n = t.serialized, r = t.isStringTag;
  return fc(i, n, r), $p(function() {
    return _p(i, n, r);
  }), null;
}, tg = /* @__PURE__ */ Qp(
  /* <any, any> */
  function(e, t, i) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var r = e[mo], s = [n], o = "";
    typeof e.className == "string" ? o = Fp(t.registered, s, e.className) : e.className != null && (o = e.className + " ");
    var a = gc(s, void 0, re.useContext(Kp));
    o += t.key + "-" + a.name;
    var l = {};
    for (var h in e)
      $o.call(e, h) && h !== "css" && h !== mo && !Jp && (l[h] = e[h]);
    return l.className = o, i && (l.ref = i), /* @__PURE__ */ re.createElement(re.Fragment, null, /* @__PURE__ */ re.createElement(eg, {
      cache: t,
      serialized: a,
      isStringTag: typeof r == "string"
    }), /* @__PURE__ */ re.createElement(r, l));
  }
), ig = tg, Le = function(t, i) {
  var n = arguments;
  if (i == null || !$o.call(i, "css"))
    return re.createElement.apply(void 0, n);
  var r = n.length, s = new Array(r);
  s[0] = ig, s[1] = qp(t, i);
  for (var o = 2; o < r; o++)
    s[o] = n[o];
  return re.createElement.apply(null, s);
};
function Jo() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return gc(t);
}
var rg = function() {
  var t = Jo.apply(void 0, arguments), i = "animation-" + t.name;
  return {
    name: i,
    styles: "@keyframes " + i + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function ng(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const sg = ["top", "right", "bottom", "left"], ki = Math.min, Nt = Math.max, Hn = Math.round, gn = Math.floor, Mi = (e) => ({
  x: e,
  y: e
}), og = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ag = {
  start: "end",
  end: "start"
};
function bo(e, t, i) {
  return Nt(e, ki(t, i));
}
function gi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mi(e) {
  return e.split("-")[0];
}
function yr(e) {
  return e.split("-")[1];
}
function Qo(e) {
  return e === "x" ? "y" : "x";
}
function Ko(e) {
  return e === "y" ? "height" : "width";
}
function Pi(e) {
  return ["top", "bottom"].includes(mi(e)) ? "y" : "x";
}
function qo(e) {
  return Qo(Pi(e));
}
function lg(e, t, i) {
  i === void 0 && (i = !1);
  const n = yr(e), r = qo(e), s = Ko(r);
  let o = r === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (o = zn(o)), [o, zn(o)];
}
function cg(e) {
  const t = zn(e);
  return [vo(e), t, vo(t)];
}
function vo(e) {
  return e.replace(/start|end/g, (t) => ag[t]);
}
function ug(e, t, i) {
  const n = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? r : n : t ? n : r;
    case "left":
    case "right":
      return t ? s : o;
    default:
      return [];
  }
}
function dg(e, t, i, n) {
  const r = yr(e);
  let s = ug(mi(e), i === "start", n);
  return r && (s = s.map((o) => o + "-" + r), t && (s = s.concat(s.map(vo)))), s;
}
function zn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => og[t]);
}
function hg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bc(e) {
  return typeof e != "number" ? hg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zn(e) {
  const {
    x: t,
    y: i,
    width: n,
    height: r
  } = e;
  return {
    width: n,
    height: r,
    top: i,
    left: t,
    right: t + n,
    bottom: i + r,
    x: t,
    y: i
  };
}
function Ga(e, t, i) {
  let {
    reference: n,
    floating: r
  } = e;
  const s = Pi(t), o = qo(t), a = Ko(o), l = mi(t), h = s === "y", m = n.x + n.width / 2 - r.width / 2, g = n.y + n.height / 2 - r.height / 2, M = n[a] / 2 - r[a] / 2;
  let N;
  switch (l) {
    case "top":
      N = {
        x: m,
        y: n.y - r.height
      };
      break;
    case "bottom":
      N = {
        x: m,
        y: n.y + n.height
      };
      break;
    case "right":
      N = {
        x: n.x + n.width,
        y: g
      };
      break;
    case "left":
      N = {
        x: n.x - r.width,
        y: g
      };
      break;
    default:
      N = {
        x: n.x,
        y: n.y
      };
  }
  switch (yr(t)) {
    case "start":
      N[o] -= M * (i && h ? -1 : 1);
      break;
    case "end":
      N[o] += M * (i && h ? -1 : 1);
      break;
  }
  return N;
}
const fg = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: o
  } = i, a = s.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: m,
    y: g
  } = Ga(h, n, l), M = n, N = {}, f = 0;
  for (let b = 0; b < a.length; b++) {
    const {
      name: S,
      fn: y
    } = a[b], {
      x: d,
      y: x,
      data: I,
      reset: C
    } = await y({
      x: m,
      y: g,
      initialPlacement: n,
      placement: M,
      strategy: r,
      middlewareData: N,
      rects: h,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = d ?? m, g = x ?? g, N = {
      ...N,
      [S]: {
        ...N[S],
        ...I
      }
    }, C && f <= 50 && (f++, typeof C == "object" && (C.placement && (M = C.placement), C.rects && (h = C.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : C.rects), {
      x: m,
      y: g
    } = Ga(h, M, l)), b = -1);
  }
  return {
    x: m,
    y: g,
    placement: M,
    strategy: r,
    middlewareData: N
  };
};
async function _r(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: n,
    y: r,
    platform: s,
    rects: o,
    elements: a,
    strategy: l
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: g = "floating",
    altBoundary: M = !1,
    padding: N = 0
  } = gi(t, e), f = bc(N), S = a[M ? g === "floating" ? "reference" : "floating" : g], y = Zn(await s.getClippingRect({
    element: (i = await (s.isElement == null ? void 0 : s.isElement(S))) == null || i ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: h,
    rootBoundary: m,
    strategy: l
  })), d = g === "floating" ? {
    x: n,
    y: r,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), I = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Zn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: d,
    offsetParent: x,
    strategy: l
  }) : d);
  return {
    top: (y.top - C.top + f.top) / I.y,
    bottom: (C.bottom - y.bottom + f.bottom) / I.y,
    left: (y.left - C.left + f.left) / I.x,
    right: (C.right - y.right + f.right) / I.x
  };
}
const pg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: n,
      placement: r,
      rects: s,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: h,
      padding: m = 0
    } = gi(e, t) || {};
    if (h == null)
      return {};
    const g = bc(m), M = {
      x: i,
      y: n
    }, N = qo(r), f = Ko(N), b = await o.getDimensions(h), S = N === "y", y = S ? "top" : "left", d = S ? "bottom" : "right", x = S ? "clientHeight" : "clientWidth", I = s.reference[f] + s.reference[N] - M[N] - s.floating[f], C = M[N] - s.reference[N], A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let O = A ? A[x] : 0;
    (!O || !await (o.isElement == null ? void 0 : o.isElement(A))) && (O = a.floating[x] || s.floating[f]);
    const z = I / 2 - C / 2, H = O / 2 - b[f] / 2 - 1, F = ki(g[y], H), E = ki(g[d], H), k = F, v = O - b[f] - E, u = O / 2 - b[f] / 2 + z, c = bo(k, u, v), w = !l.arrow && yr(r) != null && u !== c && s.reference[f] / 2 - (u < k ? F : E) - b[f] / 2 < 0, T = w ? u < k ? u - k : u - v : 0;
    return {
      [N]: M[N] + T,
      data: {
        [N]: c,
        centerOffset: u - c - T,
        ...w && {
          alignmentOffset: T
        }
      },
      reset: w
    };
  }
}), gg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, n;
      const {
        placement: r,
        middlewareData: s,
        rects: o,
        initialPlacement: a,
        platform: l,
        elements: h
      } = t, {
        mainAxis: m = !0,
        crossAxis: g = !0,
        fallbackPlacements: M,
        fallbackStrategy: N = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: b = !0,
        ...S
      } = gi(e, t);
      if ((i = s.arrow) != null && i.alignmentOffset)
        return {};
      const y = mi(r), d = Pi(a), x = mi(a) === a, I = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), C = M || (x || !b ? [zn(a)] : cg(a)), A = f !== "none";
      !M && A && C.push(...dg(a, b, f, I));
      const O = [a, ...C], z = await _r(t, S), H = [];
      let F = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (m && H.push(z[y]), g) {
        const u = lg(r, o, I);
        H.push(z[u[0]], z[u[1]]);
      }
      if (F = [...F, {
        placement: r,
        overflows: H
      }], !H.every((u) => u <= 0)) {
        var E, k;
        const u = (((E = s.flip) == null ? void 0 : E.index) || 0) + 1, c = O[u];
        if (c)
          return {
            data: {
              index: u,
              overflows: F
            },
            reset: {
              placement: c
            }
          };
        let w = (k = F.filter((T) => T.overflows[0] <= 0).sort((T, D) => T.overflows[1] - D.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!w)
          switch (N) {
            case "bestFit": {
              var v;
              const T = (v = F.filter((D) => {
                if (A) {
                  const G = Pi(D.placement);
                  return G === d || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((G) => G > 0).reduce((G, L) => G + L, 0)]).sort((D, G) => D[1] - G[1])[0]) == null ? void 0 : v[0];
              T && (w = T);
              break;
            }
            case "initialPlacement":
              w = a;
              break;
          }
        if (r !== w)
          return {
            reset: {
              placement: w
            }
          };
      }
      return {};
    }
  };
};
function Wa(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xa(e) {
  return sg.some((t) => e[t] >= 0);
}
const mg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: i
      } = t, {
        strategy: n = "referenceHidden",
        ...r
      } = gi(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await _r(t, {
            ...r,
            elementContext: "reference"
          }), o = Wa(s, i.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: Xa(o)
            }
          };
        }
        case "escaped": {
          const s = await _r(t, {
            ...r,
            altBoundary: !0
          }), o = Wa(s, i.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: Xa(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function bg(e, t) {
  const {
    placement: i,
    platform: n,
    elements: r
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), o = mi(i), a = yr(i), l = Pi(i) === "y", h = ["left", "top"].includes(o) ? -1 : 1, m = s && l ? -1 : 1, g = gi(t, e);
  let {
    mainAxis: M,
    crossAxis: N,
    alignmentAxis: f
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return a && typeof f == "number" && (N = a === "end" ? f * -1 : f), l ? {
    x: N * m,
    y: M * h
  } : {
    x: M * h,
    y: N * m
  };
}
const vg = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, n;
      const {
        x: r,
        y: s,
        placement: o,
        middlewareData: a
      } = t, l = await bg(t, e);
      return o === ((i = a.offset) == null ? void 0 : i.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: r + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, yg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: i,
        y: n,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (S) => {
            let {
              x: y,
              y: d
            } = S;
            return {
              x: y,
              y: d
            };
          }
        },
        ...l
      } = gi(e, t), h = {
        x: i,
        y: n
      }, m = await _r(t, l), g = Pi(mi(r)), M = Qo(g);
      let N = h[M], f = h[g];
      if (s) {
        const S = M === "y" ? "top" : "left", y = M === "y" ? "bottom" : "right", d = N + m[S], x = N - m[y];
        N = bo(d, N, x);
      }
      if (o) {
        const S = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", d = f + m[S], x = f - m[y];
        f = bo(d, f, x);
      }
      const b = a.fn({
        ...t,
        [M]: N,
        [g]: f
      });
      return {
        ...b,
        data: {
          x: b.x - i,
          y: b.y - n,
          enabled: {
            [M]: s,
            [g]: o
          }
        }
      };
    }
  };
}, xg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: i,
        y: n,
        placement: r,
        rects: s,
        middlewareData: o
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: h = !0
      } = gi(e, t), m = {
        x: i,
        y: n
      }, g = Pi(r), M = Qo(g);
      let N = m[M], f = m[g];
      const b = gi(a, t), S = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...b
      };
      if (l) {
        const x = M === "y" ? "height" : "width", I = s.reference[M] - s.floating[x] + S.mainAxis, C = s.reference[M] + s.reference[x] - S.mainAxis;
        N < I ? N = I : N > C && (N = C);
      }
      if (h) {
        var y, d;
        const x = M === "y" ? "width" : "height", I = ["top", "left"].includes(mi(r)), C = s.reference[g] - s.floating[x] + (I && ((y = o.offset) == null ? void 0 : y[g]) || 0) + (I ? 0 : S.crossAxis), A = s.reference[g] + s.reference[x] + (I ? 0 : ((d = o.offset) == null ? void 0 : d[g]) || 0) - (I ? S.crossAxis : 0);
        f < C ? f = C : f > A && (f = A);
      }
      return {
        [M]: N,
        [g]: f
      };
    }
  };
}, Cg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var i, n;
      const {
        placement: r,
        rects: s,
        platform: o,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...h
      } = gi(e, t), m = await _r(t, h), g = mi(r), M = yr(r), N = Pi(r) === "y", {
        width: f,
        height: b
      } = s.floating;
      let S, y;
      g === "top" || g === "bottom" ? (S = g, y = M === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = g, S = M === "end" ? "top" : "bottom");
      const d = b - m.top - m.bottom, x = f - m.left - m.right, I = ki(b - m[S], d), C = ki(f - m[y], x), A = !t.middlewareData.shift;
      let O = I, z = C;
      if ((i = t.middlewareData.shift) != null && i.enabled.x && (z = x), (n = t.middlewareData.shift) != null && n.enabled.y && (O = d), A && !M) {
        const F = Nt(m.left, 0), E = Nt(m.right, 0), k = Nt(m.top, 0), v = Nt(m.bottom, 0);
        N ? z = f - 2 * (F !== 0 || E !== 0 ? F + E : Nt(m.left, m.right)) : O = b - 2 * (k !== 0 || v !== 0 ? k + v : Nt(m.top, m.bottom));
      }
      await l({
        ...t,
        availableWidth: z,
        availableHeight: O
      });
      const H = await o.getDimensions(a.floating);
      return f !== H.width || b !== H.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ms() {
  return typeof window < "u";
}
function xr(e) {
  return vc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function jt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ai(e) {
  var t;
  return (t = (vc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vc(e) {
  return ms() ? e instanceof Node || e instanceof jt(e).Node : !1;
}
function Ut(e) {
  return ms() ? e instanceof Element || e instanceof jt(e).Element : !1;
}
function ni(e) {
  return ms() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1;
}
function Ha(e) {
  return !ms() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot;
}
function nn(e) {
  const {
    overflow: t,
    overflowX: i,
    overflowY: n,
    display: r
  } = $t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(r);
}
function wg(e) {
  return ["table", "td", "th"].includes(xr(e));
}
function bs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ea(e) {
  const t = ta(), i = Ut(e) ? $t(e) : e;
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !t && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !t && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (i.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (i.contain || "").includes(n));
}
function Sg(e) {
  let t = Ri(e);
  for (; ni(t) && !hr(t); ) {
    if (ea(t))
      return t;
    if (bs(t))
      return null;
    t = Ri(t);
  }
  return null;
}
function ta() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function hr(e) {
  return ["html", "body", "#document"].includes(xr(e));
}
function $t(e) {
  return jt(e).getComputedStyle(e);
}
function vs(e) {
  return Ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ri(e) {
  if (xr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ha(e) && e.host || // Fallback.
    ai(e)
  );
  return Ha(t) ? t.host : t;
}
function yc(e) {
  const t = Ri(e);
  return hr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ni(t) && nn(t) ? t : yc(t);
}
function Vr(e, t, i) {
  var n;
  t === void 0 && (t = []), i === void 0 && (i = !0);
  const r = yc(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = jt(r);
  if (s) {
    const a = yo(o);
    return t.concat(o, o.visualViewport || [], nn(r) ? r : [], a && i ? Vr(a) : []);
  }
  return t.concat(r, Vr(r, [], i));
}
function yo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function xc(e) {
  const t = $t(e);
  let i = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const r = ni(e), s = r ? e.offsetWidth : i, o = r ? e.offsetHeight : n, a = Hn(i) !== s || Hn(n) !== o;
  return a && (i = s, n = o), {
    width: i,
    height: n,
    $: a
  };
}
function ia(e) {
  return Ut(e) ? e : e.contextElement;
}
function ar(e) {
  const t = ia(e);
  if (!ni(t))
    return Mi(1);
  const i = t.getBoundingClientRect(), {
    width: n,
    height: r,
    $: s
  } = xc(t);
  let o = (s ? Hn(i.width) : i.width) / n, a = (s ? Hn(i.height) : i.height) / r;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Ig = /* @__PURE__ */ Mi(0);
function Cc(e) {
  const t = jt(e);
  return !ta() || !t.visualViewport ? Ig : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ag(e, t, i) {
  return t === void 0 && (t = !1), !i || t && i !== jt(e) ? !1 : t;
}
function zi(e, t, i, n) {
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const r = e.getBoundingClientRect(), s = ia(e);
  let o = Mi(1);
  t && (n ? Ut(n) && (o = ar(n)) : o = ar(e));
  const a = Ag(s, i, n) ? Cc(s) : Mi(0);
  let l = (r.left + a.x) / o.x, h = (r.top + a.y) / o.y, m = r.width / o.x, g = r.height / o.y;
  if (s) {
    const M = jt(s), N = n && Ut(n) ? jt(n) : n;
    let f = M, b = yo(f);
    for (; b && n && N !== f; ) {
      const S = ar(b), y = b.getBoundingClientRect(), d = $t(b), x = y.left + (b.clientLeft + parseFloat(d.paddingLeft)) * S.x, I = y.top + (b.clientTop + parseFloat(d.paddingTop)) * S.y;
      l *= S.x, h *= S.y, m *= S.x, g *= S.y, l += x, h += I, f = jt(b), b = yo(f);
    }
  }
  return Zn({
    width: m,
    height: g,
    x: l,
    y: h
  });
}
function Eg(e) {
  let {
    elements: t,
    rect: i,
    offsetParent: n,
    strategy: r
  } = e;
  const s = r === "fixed", o = ai(n), a = t ? bs(t.floating) : !1;
  if (n === o || a && s)
    return i;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = Mi(1);
  const m = Mi(0), g = ni(n);
  if ((g || !g && !s) && ((xr(n) !== "body" || nn(o)) && (l = vs(n)), ni(n))) {
    const M = zi(n);
    h = ar(n), m.x = M.x + n.clientLeft, m.y = M.y + n.clientTop;
  }
  return {
    width: i.width * h.x,
    height: i.height * h.y,
    x: i.x * h.x - l.scrollLeft * h.x + m.x,
    y: i.y * h.y - l.scrollTop * h.y + m.y
  };
}
function Tg(e) {
  return Array.from(e.getClientRects());
}
function xo(e, t) {
  const i = vs(e).scrollLeft;
  return t ? t.left + i : zi(ai(e)).left + i;
}
function kg(e) {
  const t = ai(e), i = vs(e), n = e.ownerDocument.body, r = Nt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = Nt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -i.scrollLeft + xo(e);
  const a = -i.scrollTop;
  return $t(n).direction === "rtl" && (o += Nt(t.clientWidth, n.clientWidth) - r), {
    width: r,
    height: s,
    x: o,
    y: a
  };
}
function Mg(e, t) {
  const i = jt(e), n = ai(e), r = i.visualViewport;
  let s = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (r) {
    s = r.width, o = r.height;
    const h = ta();
    (!h || h && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: a,
    y: l
  };
}
function Pg(e, t) {
  const i = zi(e, !0, t === "fixed"), n = i.top + e.clientTop, r = i.left + e.clientLeft, s = ni(e) ? ar(e) : Mi(1), o = e.clientWidth * s.x, a = e.clientHeight * s.y, l = r * s.x, h = n * s.y;
  return {
    width: o,
    height: a,
    x: l,
    y: h
  };
}
function za(e, t, i) {
  let n;
  if (t === "viewport")
    n = Mg(e, i);
  else if (t === "document")
    n = kg(ai(e));
  else if (Ut(t))
    n = Pg(t, i);
  else {
    const r = Cc(e);
    n = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return Zn(n);
}
function wc(e, t) {
  const i = Ri(e);
  return i === t || !Ut(i) || hr(i) ? !1 : $t(i).position === "fixed" || wc(i, t);
}
function Rg(e, t) {
  const i = t.get(e);
  if (i)
    return i;
  let n = Vr(e, [], !1).filter((a) => Ut(a) && xr(a) !== "body"), r = null;
  const s = $t(e).position === "fixed";
  let o = s ? Ri(e) : e;
  for (; Ut(o) && !hr(o); ) {
    const a = $t(o), l = ea(o);
    !l && a.position === "fixed" && (r = null), (s ? !l && !r : !l && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || nn(o) && !l && wc(e, o)) ? n = n.filter((m) => m !== o) : r = a, o = Ri(o);
  }
  return t.set(e, n), n;
}
function Og(e) {
  let {
    element: t,
    boundary: i,
    rootBoundary: n,
    strategy: r
  } = e;
  const o = [...i === "clippingAncestors" ? bs(t) ? [] : Rg(t, this._c) : [].concat(i), n], a = o[0], l = o.reduce((h, m) => {
    const g = za(t, m, r);
    return h.top = Nt(g.top, h.top), h.right = ki(g.right, h.right), h.bottom = ki(g.bottom, h.bottom), h.left = Nt(g.left, h.left), h;
  }, za(t, a, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Lg(e) {
  const {
    width: t,
    height: i
  } = xc(e);
  return {
    width: t,
    height: i
  };
}
function Ng(e, t, i) {
  const n = ni(t), r = ai(t), s = i === "fixed", o = zi(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Mi(0);
  if (n || !n && !s)
    if ((xr(t) !== "body" || nn(r)) && (a = vs(t)), n) {
      const N = zi(t, !0, s, t);
      l.x = N.x + t.clientLeft, l.y = N.y + t.clientTop;
    } else
      r && (l.x = xo(r));
  let h = 0, m = 0;
  if (r && !n && !s) {
    const N = r.getBoundingClientRect();
    m = N.top + a.scrollTop, h = N.left + a.scrollLeft - // RTL <body> scrollbar.
    xo(r, N);
  }
  const g = o.left + a.scrollLeft - l.x - h, M = o.top + a.scrollTop - l.y - m;
  return {
    x: g,
    y: M,
    width: o.width,
    height: o.height
  };
}
function Fs(e) {
  return $t(e).position === "static";
}
function Za(e, t) {
  if (!ni(e) || $t(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let i = e.offsetParent;
  return ai(e) === i && (i = i.ownerDocument.body), i;
}
function Sc(e, t) {
  const i = jt(e);
  if (bs(e))
    return i;
  if (!ni(e)) {
    let r = Ri(e);
    for (; r && !hr(r); ) {
      if (Ut(r) && !Fs(r))
        return r;
      r = Ri(r);
    }
    return i;
  }
  let n = Za(e, t);
  for (; n && wg(n) && Fs(n); )
    n = Za(n, t);
  return n && hr(n) && Fs(n) && !ea(n) ? i : n || Sg(e) || i;
}
const Dg = async function(e) {
  const t = this.getOffsetParent || Sc, i = this.getDimensions, n = await i(e.floating);
  return {
    reference: Ng(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Bg(e) {
  return $t(e).direction === "rtl";
}
const jg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Eg,
  getDocumentElement: ai,
  getClippingRect: Og,
  getOffsetParent: Sc,
  getElementRects: Dg,
  getClientRects: Tg,
  getDimensions: Lg,
  getScale: ar,
  isElement: Ut,
  isRTL: Bg
};
function Fg(e, t) {
  let i = null, n;
  const r = ai(e);
  function s() {
    var a;
    clearTimeout(n), (a = i) == null || a.disconnect(), i = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const {
      left: h,
      top: m,
      width: g,
      height: M
    } = e.getBoundingClientRect();
    if (a || t(), !g || !M)
      return;
    const N = gn(m), f = gn(r.clientWidth - (h + g)), b = gn(r.clientHeight - (m + M)), S = gn(h), d = {
      rootMargin: -N + "px " + -f + "px " + -b + "px " + -S + "px",
      threshold: Nt(0, ki(1, l)) || 1
    };
    let x = !0;
    function I(C) {
      const A = C[0].intersectionRatio;
      if (A !== l) {
        if (!x)
          return o();
        A ? o(!1, A) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      i = new IntersectionObserver(I, {
        ...d,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(I, d);
    }
    i.observe(e);
  }
  return o(!0), s;
}
function Ic(e, t, i, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, h = ia(e), m = r || s ? [...h ? Vr(h) : [], ...Vr(t)] : [];
  m.forEach((y) => {
    r && y.addEventListener("scroll", i, {
      passive: !0
    }), s && y.addEventListener("resize", i);
  });
  const g = h && a ? Fg(h, i) : null;
  let M = -1, N = null;
  o && (N = new ResizeObserver((y) => {
    let [d] = y;
    d && d.target === h && N && (N.unobserve(t), cancelAnimationFrame(M), M = requestAnimationFrame(() => {
      var x;
      (x = N) == null || x.observe(t);
    })), i();
  }), h && !l && N.observe(h), N.observe(t));
  let f, b = l ? zi(e) : null;
  l && S();
  function S() {
    const y = zi(e);
    b && (y.x !== b.x || y.y !== b.y || y.width !== b.width || y.height !== b.height) && i(), b = y, f = requestAnimationFrame(S);
  }
  return i(), () => {
    var y;
    m.forEach((d) => {
      r && d.removeEventListener("scroll", i), s && d.removeEventListener("resize", i);
    }), g == null || g(), (y = N) == null || y.disconnect(), N = null, l && cancelAnimationFrame(f);
  };
}
const _g = vg, Vg = yg, Gg = gg, Wg = Cg, Xg = mg, Ya = pg, Hg = xg, zg = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), r = {
    platform: jg,
    ...i
  }, s = {
    ...r.platform,
    _c: n
  };
  return fg(e, t, {
    ...r,
    platform: s
  });
};
var Co = _l, Zg = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Yn = function() {
};
function Yg(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function Ug(e, t) {
  for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    n[r - 2] = arguments[r];
  var s = [].concat(n);
  if (t && e)
    for (var o in t)
      t.hasOwnProperty(o) && t[o] && s.push("".concat(Yg(e, o)));
  return s.filter(function(a) {
    return a;
  }).map(function(a) {
    return String(a).trim();
  }).join(" ");
}
var Ua = function(t) {
  return rm(t) ? t.filter(Boolean) : Hi(t) === "object" && t !== null ? [t] : [];
}, Ac = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var i = vi(t, Zg);
  return De({}, i);
}, dt = function(t, i, n) {
  var r = t.cx, s = t.getStyles, o = t.getClassNames, a = t.className;
  return {
    css: s(i, t),
    className: r(n ?? {}, o(i, t), a)
  };
};
function ys(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function $g(e) {
  return ys(e) ? window.innerHeight : e.clientHeight;
}
function Ec(e) {
  return ys(e) ? window.pageYOffset : e.scrollTop;
}
function Un(e, t) {
  if (ys(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Jg(e) {
  var t = getComputedStyle(e), i = t.position === "absolute", n = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var r = e; r = r.parentElement; )
    if (t = getComputedStyle(r), !(i && t.position === "static") && n.test(t.overflow + t.overflowY + t.overflowX))
      return r;
  return document.documentElement;
}
function Qg(e, t, i, n) {
  return i * ((e = e / n - 1) * e * e + 1) + t;
}
function mn(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Yn, r = Ec(e), s = t - r, o = 10, a = 0;
  function l() {
    a += o;
    var h = Qg(a, r, s, i);
    Un(e, h), a < i ? window.requestAnimationFrame(l) : n(e);
  }
  l();
}
function $a(e, t) {
  var i = e.getBoundingClientRect(), n = t.getBoundingClientRect(), r = t.offsetHeight / 3;
  n.bottom + r > i.bottom ? Un(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + r, e.scrollHeight)) : n.top - r < i.top && Un(e, Math.max(t.offsetTop - r, 0));
}
function Kg(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function Ja() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function qg() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Tc = !1, em = {
  get passive() {
    return Tc = !0;
  }
}, bn = typeof window < "u" ? window : {};
bn.addEventListener && bn.removeEventListener && (bn.addEventListener("p", Yn, em), bn.removeEventListener("p", Yn, !1));
var tm = Tc;
function im(e) {
  return e != null;
}
function rm(e) {
  return Array.isArray(e);
}
function vn(e, t, i) {
  return e ? t : i;
}
var nm = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
    n[r - 1] = arguments[r];
  var s = Object.entries(t).filter(function(o) {
    var a = pi(o, 1), l = a[0];
    return !n.includes(l);
  });
  return s.reduce(function(o, a) {
    var l = pi(a, 2), h = l[0], m = l[1];
    return o[h] = m, o;
  }, {});
}, sm = ["children", "innerProps"], om = ["children", "innerProps"];
function am(e) {
  var t = e.maxHeight, i = e.menuEl, n = e.minHeight, r = e.placement, s = e.shouldScroll, o = e.isFixedPosition, a = e.controlHeight, l = Jg(i), h = {
    placement: "bottom",
    maxHeight: t
  };
  if (!i || !i.offsetParent)
    return h;
  var m = l.getBoundingClientRect(), g = m.height, M = i.getBoundingClientRect(), N = M.bottom, f = M.height, b = M.top, S = i.offsetParent.getBoundingClientRect(), y = S.top, d = o ? window.innerHeight : $g(l), x = Ec(l), I = parseInt(getComputedStyle(i).marginBottom, 10), C = parseInt(getComputedStyle(i).marginTop, 10), A = y - C, O = d - b, z = A + x, H = g - x - b, F = N - d + x + I, E = x + b - C, k = 160;
  switch (r) {
    case "auto":
    case "bottom":
      if (O >= f)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (H >= f && !o)
        return s && mn(l, F, k), {
          placement: "bottom",
          maxHeight: t
        };
      if (!o && H >= n || o && O >= n) {
        s && mn(l, F, k);
        var v = o ? O - I : H - I;
        return {
          placement: "bottom",
          maxHeight: v
        };
      }
      if (r === "auto" || o) {
        var u = t, c = o ? A : z;
        return c >= n && (u = Math.min(c - I - a, t)), {
          placement: "top",
          maxHeight: u
        };
      }
      if (r === "bottom")
        return s && Un(l, F), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (A >= f)
        return {
          placement: "top",
          maxHeight: t
        };
      if (z >= f && !o)
        return s && mn(l, E, k), {
          placement: "top",
          maxHeight: t
        };
      if (!o && z >= n || o && A >= n) {
        var w = t;
        return (!o && z >= n || o && A >= n) && (w = o ? A - C : z - C), s && mn(l, E, k), {
          placement: "top",
          maxHeight: w
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(r, '".'));
  }
  return h;
}
function lm(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var kc = function(t) {
  return t === "auto" ? "bottom" : t;
}, cm = function(t, i) {
  var n, r = t.placement, s = t.theme, o = s.borderRadius, a = s.spacing, l = s.colors;
  return De((n = {
    label: "menu"
  }, Pr(n, lm(r), "100%"), Pr(n, "position", "absolute"), Pr(n, "width", "100%"), Pr(n, "zIndex", 1), n), i ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: o,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: a.menuGutter,
    marginTop: a.menuGutter
  });
}, Mc = /* @__PURE__ */ Dh(null), um = function(t) {
  var i = t.children, n = t.minMenuHeight, r = t.maxMenuHeight, s = t.menuPlacement, o = t.menuPosition, a = t.menuShouldScrollIntoView, l = t.theme, h = Fl(Mc) || {}, m = h.setPortalPlacement, g = hi(null), M = Dt(r), N = pi(M, 2), f = N[0], b = N[1], S = Dt(null), y = pi(S, 2), d = y[0], x = y[1], I = l.spacing.controlHeight;
  return Co(function() {
    var C = g.current;
    if (C) {
      var A = o === "fixed", O = a && !A, z = am({
        maxHeight: r,
        menuEl: C,
        minHeight: n,
        placement: s,
        shouldScroll: O,
        isFixedPosition: A,
        controlHeight: I
      });
      b(z.maxHeight), x(z.placement), m == null || m(z.placement);
    }
  }, [r, s, o, a, n, m, I]), i({
    ref: g,
    placerProps: De(De({}, t), {}, {
      placement: d || kc(s),
      maxHeight: f
    })
  });
}, dm = function(t) {
  var i = t.children, n = t.innerRef, r = t.innerProps;
  return Le("div", je({}, dt(t, "menu", {
    menu: !0
  }), {
    ref: n
  }, r), i);
}, hm = dm, fm = function(t, i) {
  var n = t.maxHeight, r = t.theme.spacing.baseUnit;
  return De({
    maxHeight: n,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, i ? {} : {
    paddingBottom: r,
    paddingTop: r
  });
}, pm = function(t) {
  var i = t.children, n = t.innerProps, r = t.innerRef, s = t.isMulti;
  return Le("div", je({}, dt(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": s
  }), {
    ref: r
  }, n), i);
}, Pc = function(t, i) {
  var n = t.theme, r = n.spacing.baseUnit, s = n.colors;
  return De({
    textAlign: "center"
  }, i ? {} : {
    color: s.neutral40,
    padding: "".concat(r * 2, "px ").concat(r * 3, "px")
  });
}, gm = Pc, mm = Pc, bm = function(t) {
  var i = t.children, n = i === void 0 ? "No options" : i, r = t.innerProps, s = vi(t, sm);
  return Le("div", je({}, dt(De(De({}, s), {}, {
    children: n,
    innerProps: r
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), r), n);
}, vm = function(t) {
  var i = t.children, n = i === void 0 ? "Loading..." : i, r = t.innerProps, s = vi(t, om);
  return Le("div", je({}, dt(De(De({}, s), {}, {
    children: n,
    innerProps: r
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), r), n);
}, ym = function(t) {
  var i = t.rect, n = t.offset, r = t.position;
  return {
    left: i.left,
    position: r,
    top: n,
    width: i.width,
    zIndex: 1
  };
}, xm = function(t) {
  var i = t.appendTo, n = t.children, r = t.controlElement, s = t.innerProps, o = t.menuPlacement, a = t.menuPosition, l = hi(null), h = hi(null), m = Dt(kc(o)), g = pi(m, 2), M = g[0], N = g[1], f = Gi(function() {
    return {
      setPortalPlacement: N
    };
  }, []), b = Dt(null), S = pi(b, 2), y = S[0], d = S[1], x = Tt(function() {
    if (r) {
      var O = Kg(r), z = a === "fixed" ? 0 : window.pageYOffset, H = O[M] + z;
      (H !== (y == null ? void 0 : y.offset) || O.left !== (y == null ? void 0 : y.rect.left) || O.width !== (y == null ? void 0 : y.rect.width)) && d({
        offset: H,
        rect: O
      });
    }
  }, [r, a, M, y == null ? void 0 : y.offset, y == null ? void 0 : y.rect.left, y == null ? void 0 : y.rect.width]);
  Co(function() {
    x();
  }, [x]);
  var I = Tt(function() {
    typeof h.current == "function" && (h.current(), h.current = null), r && l.current && (h.current = Ic(r, l.current, x, {
      elementResize: "ResizeObserver" in window
    }));
  }, [r, x]);
  Co(function() {
    I();
  }, [I]);
  var C = Tt(function(O) {
    l.current = O, I();
  }, [I]);
  if (!i && a !== "fixed" || !y)
    return null;
  var A = Le("div", je({
    ref: C
  }, dt(De(De({}, t), {}, {
    offset: y.offset,
    position: a,
    rect: y.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), s), n);
  return Le(Mc.Provider, {
    value: f
  }, i ? /* @__PURE__ */ Fh(A, i) : A);
}, Cm = function(t) {
  var i = t.isDisabled, n = t.isRtl;
  return {
    label: "container",
    direction: n ? "rtl" : void 0,
    pointerEvents: i ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, wm = function(t) {
  var i = t.children, n = t.innerProps, r = t.isDisabled, s = t.isRtl;
  return Le("div", je({}, dt(t, "container", {
    "--is-disabled": r,
    "--is-rtl": s
  }), n), i);
}, Sm = function(t, i) {
  var n = t.theme.spacing, r = t.isMulti, s = t.hasValue, o = t.selectProps.controlShouldRenderValue;
  return De({
    alignItems: "center",
    display: r && s && o ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, i ? {} : {
    padding: "".concat(n.baseUnit / 2, "px ").concat(n.baseUnit * 2, "px")
  });
}, Im = function(t) {
  var i = t.children, n = t.innerProps, r = t.isMulti, s = t.hasValue;
  return Le("div", je({}, dt(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": r,
    "value-container--has-value": s
  }), n), i);
}, Am = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, Em = function(t) {
  var i = t.children, n = t.innerProps;
  return Le("div", je({}, dt(t, "indicatorsContainer", {
    indicators: !0
  }), n), i);
}, Qa, Tm = ["size"], km = ["innerProps", "isRtl", "size"];
function Mm() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Pm = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */",
  toString: Mm
}, Rc = function(t) {
  var i = t.size, n = vi(t, Tm);
  return Le("svg", je({
    height: i,
    width: i,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: Pm
  }, n));
}, ra = function(t) {
  return Le(Rc, je({
    size: 20
  }, t), Le("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Oc = function(t) {
  return Le(Rc, je({
    size: 20
  }, t), Le("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Lc = function(t, i) {
  var n = t.isFocused, r = t.theme, s = r.spacing.baseUnit, o = r.colors;
  return De({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, i ? {} : {
    color: n ? o.neutral60 : o.neutral20,
    padding: s * 2,
    ":hover": {
      color: n ? o.neutral80 : o.neutral40
    }
  });
}, Rm = Lc, Om = function(t) {
  var i = t.children, n = t.innerProps;
  return Le("div", je({}, dt(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), n), i || Le(Oc, null));
}, Lm = Lc, Nm = function(t) {
  var i = t.children, n = t.innerProps;
  return Le("div", je({}, dt(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), n), i || Le(ra, null));
}, Dm = function(t, i) {
  var n = t.isDisabled, r = t.theme, s = r.spacing.baseUnit, o = r.colors;
  return De({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, i ? {} : {
    backgroundColor: n ? o.neutral10 : o.neutral20,
    marginBottom: s * 2,
    marginTop: s * 2
  });
}, Bm = function(t) {
  var i = t.innerProps;
  return Le("span", je({}, i, dt(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, jm = rg(Qa || (Qa = ng([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), Fm = function(t, i) {
  var n = t.isFocused, r = t.size, s = t.theme, o = s.colors, a = s.spacing.baseUnit;
  return De({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: r,
    lineHeight: 1,
    marginRight: r,
    textAlign: "center",
    verticalAlign: "middle"
  }, i ? {} : {
    color: n ? o.neutral60 : o.neutral20,
    padding: a * 2
  });
}, _s = function(t) {
  var i = t.delay, n = t.offset;
  return Le("span", {
    css: /* @__PURE__ */ Jo({
      animation: "".concat(jm, " 1s ease-in-out ").concat(i, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: n ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */")
  });
}, _m = function(t) {
  var i = t.innerProps, n = t.isRtl, r = t.size, s = r === void 0 ? 4 : r, o = vi(t, km);
  return Le("div", je({}, dt(De(De({}, o), {}, {
    innerProps: i,
    isRtl: n,
    size: s
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), i), Le(_s, {
    delay: 0,
    offset: n
  }), Le(_s, {
    delay: 160,
    offset: !0
  }), Le(_s, {
    delay: 320,
    offset: !n
  }));
}, Vm = function(t, i) {
  var n = t.isDisabled, r = t.isFocused, s = t.theme, o = s.colors, a = s.borderRadius, l = s.spacing;
  return De({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: l.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, i ? {} : {
    backgroundColor: n ? o.neutral5 : o.neutral0,
    borderColor: n ? o.neutral10 : r ? o.primary : o.neutral20,
    borderRadius: a,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: r ? "0 0 0 1px ".concat(o.primary) : void 0,
    "&:hover": {
      borderColor: r ? o.primary : o.neutral30
    }
  });
}, Gm = function(t) {
  var i = t.children, n = t.isDisabled, r = t.isFocused, s = t.innerRef, o = t.innerProps, a = t.menuIsOpen;
  return Le("div", je({
    ref: s
  }, dt(t, "control", {
    control: !0,
    "control--is-disabled": n,
    "control--is-focused": r,
    "control--menu-is-open": a
  }), o, {
    "aria-disabled": n || void 0
  }), i);
}, Wm = Gm, Xm = ["data"], Hm = function(t, i) {
  var n = t.theme.spacing;
  return i ? {} : {
    paddingBottom: n.baseUnit * 2,
    paddingTop: n.baseUnit * 2
  };
}, zm = function(t) {
  var i = t.children, n = t.cx, r = t.getStyles, s = t.getClassNames, o = t.Heading, a = t.headingProps, l = t.innerProps, h = t.label, m = t.theme, g = t.selectProps;
  return Le("div", je({}, dt(t, "group", {
    group: !0
  }), l), Le(o, je({}, a, {
    selectProps: g,
    theme: m,
    getStyles: r,
    getClassNames: s,
    cx: n
  }), h), Le("div", null, i));
}, Zm = function(t, i) {
  var n = t.theme, r = n.colors, s = n.spacing;
  return De({
    label: "group",
    cursor: "default",
    display: "block"
  }, i ? {} : {
    color: r.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: s.baseUnit * 3,
    paddingRight: s.baseUnit * 3,
    textTransform: "uppercase"
  });
}, Ym = function(t) {
  var i = Ac(t);
  i.data;
  var n = vi(i, Xm);
  return Le("div", je({}, dt(t, "groupHeading", {
    "group-heading": !0
  }), n));
}, Um = zm, $m = ["innerRef", "isDisabled", "isHidden", "inputClassName"], Jm = function(t, i) {
  var n = t.isDisabled, r = t.value, s = t.theme, o = s.spacing, a = s.colors;
  return De(De({
    visibility: n ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: r ? "translateZ(0)" : ""
  }, Qm), i ? {} : {
    margin: o.baseUnit / 2,
    paddingBottom: o.baseUnit / 2,
    paddingTop: o.baseUnit / 2,
    color: a.neutral80
  });
}, Nc = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, Qm = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": De({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Nc)
}, Km = function(t) {
  return De({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, Nc);
}, qm = function(t) {
  var i = t.cx, n = t.value, r = Ac(t), s = r.innerRef, o = r.isDisabled, a = r.isHidden, l = r.inputClassName, h = vi(r, $m);
  return Le("div", je({}, dt(t, "input", {
    "input-container": !0
  }), {
    "data-value": n || ""
  }), Le("input", je({
    className: i({
      input: !0
    }, l),
    ref: s,
    style: Km(a),
    disabled: o
  }, h)));
}, eb = qm, tb = function(t, i) {
  var n = t.theme, r = n.spacing, s = n.borderRadius, o = n.colors;
  return De({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, i ? {} : {
    backgroundColor: o.neutral10,
    borderRadius: s / 2,
    margin: r.baseUnit / 2
  });
}, ib = function(t, i) {
  var n = t.theme, r = n.borderRadius, s = n.colors, o = t.cropWithEllipsis;
  return De({
    overflow: "hidden",
    textOverflow: o || o === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, i ? {} : {
    borderRadius: r / 2,
    color: s.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, rb = function(t, i) {
  var n = t.theme, r = n.spacing, s = n.borderRadius, o = n.colors, a = t.isFocused;
  return De({
    alignItems: "center",
    display: "flex"
  }, i ? {} : {
    borderRadius: s / 2,
    backgroundColor: a ? o.dangerLight : void 0,
    paddingLeft: r.baseUnit,
    paddingRight: r.baseUnit,
    ":hover": {
      backgroundColor: o.dangerLight,
      color: o.danger
    }
  });
}, Dc = function(t) {
  var i = t.children, n = t.innerProps;
  return Le("div", n, i);
}, nb = Dc, sb = Dc;
function ob(e) {
  var t = e.children, i = e.innerProps;
  return Le("div", je({
    role: "button"
  }, i), t || Le(ra, {
    size: 14
  }));
}
var ab = function(t) {
  var i = t.children, n = t.components, r = t.data, s = t.innerProps, o = t.isDisabled, a = t.removeProps, l = t.selectProps, h = n.Container, m = n.Label, g = n.Remove;
  return Le(h, {
    data: r,
    innerProps: De(De({}, dt(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": o
    })), s),
    selectProps: l
  }, Le(m, {
    data: r,
    innerProps: De({}, dt(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, i), Le(g, {
    data: r,
    innerProps: De(De({}, dt(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(i || "option")
    }, a),
    selectProps: l
  }));
}, lb = ab, cb = function(t, i) {
  var n = t.isDisabled, r = t.isFocused, s = t.isSelected, o = t.theme, a = o.spacing, l = o.colors;
  return De({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, i ? {} : {
    backgroundColor: s ? l.primary : r ? l.primary25 : "transparent",
    color: n ? l.neutral20 : s ? l.neutral0 : "inherit",
    padding: "".concat(a.baseUnit * 2, "px ").concat(a.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: n ? void 0 : s ? l.primary : l.primary50
    }
  });
}, ub = function(t) {
  var i = t.children, n = t.isDisabled, r = t.isFocused, s = t.isSelected, o = t.innerRef, a = t.innerProps;
  return Le("div", je({}, dt(t, "option", {
    option: !0,
    "option--is-disabled": n,
    "option--is-focused": r,
    "option--is-selected": s
  }), {
    ref: o,
    "aria-disabled": n
  }, a), i);
}, db = ub, hb = function(t, i) {
  var n = t.theme, r = n.spacing, s = n.colors;
  return De({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, i ? {} : {
    color: s.neutral50,
    marginLeft: r.baseUnit / 2,
    marginRight: r.baseUnit / 2
  });
}, fb = function(t) {
  var i = t.children, n = t.innerProps;
  return Le("div", je({}, dt(t, "placeholder", {
    placeholder: !0
  }), n), i);
}, pb = fb, gb = function(t, i) {
  var n = t.isDisabled, r = t.theme, s = r.spacing, o = r.colors;
  return De({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, i ? {} : {
    color: n ? o.neutral40 : o.neutral80,
    marginLeft: s.baseUnit / 2,
    marginRight: s.baseUnit / 2
  });
}, mb = function(t) {
  var i = t.children, n = t.isDisabled, r = t.innerProps;
  return Le("div", je({}, dt(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": n
  }), r), i);
}, bb = mb, sn = {
  ClearIndicator: Nm,
  Control: Wm,
  DropdownIndicator: Om,
  DownChevron: Oc,
  CrossIcon: ra,
  Group: Um,
  GroupHeading: Ym,
  IndicatorsContainer: Em,
  IndicatorSeparator: Bm,
  Input: eb,
  LoadingIndicator: _m,
  Menu: hm,
  MenuList: pm,
  MenuPortal: xm,
  LoadingMessage: vm,
  NoOptionsMessage: bm,
  MultiValue: lb,
  MultiValueContainer: nb,
  MultiValueLabel: sb,
  MultiValueRemove: ob,
  Option: db,
  Placeholder: pb,
  SelectContainer: wm,
  SingleValue: bb,
  ValueContainer: Im
}, vb = function(t) {
  return De(De({}, sn), t.components);
}, Ka = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function yb(e, t) {
  return !!(e === t || Ka(e) && Ka(t));
}
function xb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var i = 0; i < e.length; i++)
    if (!yb(e[i], t[i]))
      return !1;
  return !0;
}
function Cb(e, t) {
  t === void 0 && (t = xb);
  var i = null;
  function n() {
    for (var r = [], s = 0; s < arguments.length; s++)
      r[s] = arguments[s];
    if (i && i.lastThis === this && t(r, i.lastArgs))
      return i.lastResult;
    var o = e.apply(this, r);
    return i = {
      lastResult: o,
      lastArgs: r,
      lastThis: this
    }, o;
  }
  return n.clear = function() {
    i = null;
  }, n;
}
function wb() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Sb = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: wb
}, Ib = function(t) {
  return Le("span", je({
    css: Sb
  }, t));
}, qa = Ib, Ab = {
  guidance: function(t) {
    var i = t.isSearchable, n = t.isMulti, r = t.tabSelectsValue, s = t.context, o = t.isInitialFocus;
    switch (s) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(r ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return o ? "".concat(t["aria-label"] || "Select", " is focused ").concat(i ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var i = t.action, n = t.label, r = n === void 0 ? "" : n, s = t.labels, o = t.isDisabled;
    switch (i) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(r, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(s.length > 1 ? "s" : "", " ").concat(s.join(","), ", selected.");
      case "select-option":
        return o ? "option ".concat(r, " is disabled. Select another option.") : "option ".concat(r, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var i = t.context, n = t.focused, r = t.options, s = t.label, o = s === void 0 ? "" : s, a = t.selectValue, l = t.isDisabled, h = t.isSelected, m = t.isAppleDevice, g = function(b, S) {
      return b && b.length ? "".concat(b.indexOf(S) + 1, " of ").concat(b.length) : "";
    };
    if (i === "value" && a)
      return "value ".concat(o, " focused, ").concat(g(a, n), ".");
    if (i === "menu" && m) {
      var M = l ? " disabled" : "", N = "".concat(h ? " selected" : "").concat(M);
      return "".concat(o).concat(N, ", ").concat(g(r, n), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var i = t.inputValue, n = t.resultsMessage;
    return "".concat(n).concat(i ? " for search term " + i : "", ".");
  }
}, Eb = function(t) {
  var i = t.ariaSelection, n = t.focusedOption, r = t.focusedValue, s = t.focusableOptions, o = t.isFocused, a = t.selectValue, l = t.selectProps, h = t.id, m = t.isAppleDevice, g = l.ariaLiveMessages, M = l.getOptionLabel, N = l.inputValue, f = l.isMulti, b = l.isOptionDisabled, S = l.isSearchable, y = l.menuIsOpen, d = l.options, x = l.screenReaderStatus, I = l.tabSelectsValue, C = l.isLoading, A = l["aria-label"], O = l["aria-live"], z = Gi(function() {
    return De(De({}, Ab), g || {});
  }, [g]), H = Gi(function() {
    var c = "";
    if (i && z.onChange) {
      var w = i.option, T = i.options, D = i.removedValue, G = i.removedValues, L = i.value, J = function(R) {
        return Array.isArray(R) ? null : R;
      }, se = D || w || J(L), _ = se ? M(se) : "", X = T || G || void 0, U = X ? X.map(M) : [], te = De({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: se && b(se, a),
        label: _,
        labels: U
      }, i);
      c = z.onChange(te);
    }
    return c;
  }, [i, z, b, a, M]), F = Gi(function() {
    var c = "", w = n || r, T = !!(n && a && a.includes(n));
    if (w && z.onFocus) {
      var D = {
        focused: w,
        label: M(w),
        isDisabled: b(w, a),
        isSelected: T,
        options: s,
        context: w === n ? "menu" : "value",
        selectValue: a,
        isAppleDevice: m
      };
      c = z.onFocus(D);
    }
    return c;
  }, [n, r, M, b, z, s, a, m]), E = Gi(function() {
    var c = "";
    if (y && d.length && !C && z.onFilter) {
      var w = x({
        count: s.length
      });
      c = z.onFilter({
        inputValue: N,
        resultsMessage: w
      });
    }
    return c;
  }, [s, N, y, z, d, x, C]), k = (i == null ? void 0 : i.action) === "initial-input-focus", v = Gi(function() {
    var c = "";
    if (z.guidance) {
      var w = r ? "value" : y ? "menu" : "input";
      c = z.guidance({
        "aria-label": A,
        context: w,
        isDisabled: n && b(n, a),
        isMulti: f,
        isSearchable: S,
        tabSelectsValue: I,
        isInitialFocus: k
      });
    }
    return c;
  }, [A, n, r, f, b, S, y, z, a, I, k]), u = Le(ao, null, Le("span", {
    id: "aria-selection"
  }, H), Le("span", {
    id: "aria-focused"
  }, F), Le("span", {
    id: "aria-results"
  }, E), Le("span", {
    id: "aria-guidance"
  }, v));
  return Le(ao, null, Le(qa, {
    id: h
  }, k && u), Le(qa, {
    "aria-live": O,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, o && !k && u));
}, Tb = Eb, wo = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], kb = new RegExp("[" + wo.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Bc = {};
for (var Vs = 0; Vs < wo.length; Vs++)
  for (var Gs = wo[Vs], Ws = 0; Ws < Gs.letters.length; Ws++)
    Bc[Gs.letters[Ws]] = Gs.base;
var jc = function(t) {
  return t.replace(kb, function(i) {
    return Bc[i];
  });
}, Mb = Cb(jc), el = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, Pb = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, Rb = function(t) {
  return function(i, n) {
    if (i.data.__isNew__)
      return !0;
    var r = De({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Pb,
      trim: !0,
      matchFrom: "any"
    }, t), s = r.ignoreCase, o = r.ignoreAccents, a = r.stringify, l = r.trim, h = r.matchFrom, m = l ? el(n) : n, g = l ? el(a(i)) : a(i);
    return s && (m = m.toLowerCase(), g = g.toLowerCase()), o && (m = Mb(m), g = jc(g)), h === "start" ? g.substr(0, m.length) === m : g.indexOf(m) > -1;
  };
}, Ob = ["innerRef"];
function Lb(e) {
  var t = e.innerRef, i = vi(e, Ob), n = nm(i, "onExited", "in", "enter", "exit", "appear");
  return Le("input", je({
    ref: t
  }, n, {
    css: /* @__PURE__ */ Jo({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}
var Nb = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function Db(e) {
  var t = e.isEnabled, i = e.onBottomArrive, n = e.onBottomLeave, r = e.onTopArrive, s = e.onTopLeave, o = hi(!1), a = hi(!1), l = hi(0), h = hi(null), m = Tt(function(S, y) {
    if (h.current !== null) {
      var d = h.current, x = d.scrollTop, I = d.scrollHeight, C = d.clientHeight, A = h.current, O = y > 0, z = I - C - x, H = !1;
      z > y && o.current && (n && n(S), o.current = !1), O && a.current && (s && s(S), a.current = !1), O && y > z ? (i && !o.current && i(S), A.scrollTop = I, H = !0, o.current = !0) : !O && -y > x && (r && !a.current && r(S), A.scrollTop = 0, H = !0, a.current = !0), H && Nb(S);
    }
  }, [i, n, r, s]), g = Tt(function(S) {
    m(S, S.deltaY);
  }, [m]), M = Tt(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), N = Tt(function(S) {
    var y = l.current - S.changedTouches[0].clientY;
    m(S, y);
  }, [m]), f = Tt(function(S) {
    if (S) {
      var y = tm ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", g, y), S.addEventListener("touchstart", M, y), S.addEventListener("touchmove", N, y);
    }
  }, [N, M, g]), b = Tt(function(S) {
    S && (S.removeEventListener("wheel", g, !1), S.removeEventListener("touchstart", M, !1), S.removeEventListener("touchmove", N, !1));
  }, [N, M, g]);
  return ds(function() {
    if (t) {
      var S = h.current;
      return f(S), function() {
        b(S);
      };
    }
  }, [t, f, b]), function(S) {
    h.current = S;
  };
}
var tl = ["boxSizing", "height", "overflow", "paddingRight", "position"], il = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function rl(e) {
  e.preventDefault();
}
function nl(e) {
  e.stopPropagation();
}
function sl() {
  var e = this.scrollTop, t = this.scrollHeight, i = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : i === t && (this.scrollTop = e - 1);
}
function ol() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var al = !!(typeof window < "u" && window.document && window.document.createElement), Tr = 0, Ki = {
  capture: !1,
  passive: !1
};
function Bb(e) {
  var t = e.isEnabled, i = e.accountForScrollbars, n = i === void 0 ? !0 : i, r = hi({}), s = hi(null), o = Tt(function(l) {
    if (al) {
      var h = document.body, m = h && h.style;
      if (n && tl.forEach(function(f) {
        var b = m && m[f];
        r.current[f] = b;
      }), n && Tr < 1) {
        var g = parseInt(r.current.paddingRight, 10) || 0, M = document.body ? document.body.clientWidth : 0, N = window.innerWidth - M + g || 0;
        Object.keys(il).forEach(function(f) {
          var b = il[f];
          m && (m[f] = b);
        }), m && (m.paddingRight = "".concat(N, "px"));
      }
      h && ol() && (h.addEventListener("touchmove", rl, Ki), l && (l.addEventListener("touchstart", sl, Ki), l.addEventListener("touchmove", nl, Ki))), Tr += 1;
    }
  }, [n]), a = Tt(function(l) {
    if (al) {
      var h = document.body, m = h && h.style;
      Tr = Math.max(Tr - 1, 0), n && Tr < 1 && tl.forEach(function(g) {
        var M = r.current[g];
        m && (m[g] = M);
      }), h && ol() && (h.removeEventListener("touchmove", rl, Ki), l && (l.removeEventListener("touchstart", sl, Ki), l.removeEventListener("touchmove", nl, Ki)));
    }
  }, [n]);
  return ds(function() {
    if (t) {
      var l = s.current;
      return o(l), function() {
        a(l);
      };
    }
  }, [t, o, a]), function(l) {
    s.current = l;
  };
}
function jb() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Fb = function(t) {
  var i = t.target;
  return i.ownerDocument.activeElement && i.ownerDocument.activeElement.blur();
}, _b = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: jb
};
function Vb(e) {
  var t = e.children, i = e.lockEnabled, n = e.captureEnabled, r = n === void 0 ? !0 : n, s = e.onBottomArrive, o = e.onBottomLeave, a = e.onTopArrive, l = e.onTopLeave, h = Db({
    isEnabled: r,
    onBottomArrive: s,
    onBottomLeave: o,
    onTopArrive: a,
    onTopLeave: l
  }), m = Bb({
    isEnabled: i
  }), g = function(N) {
    h(N), m(N);
  };
  return Le(ao, null, i && Le("div", {
    onClick: Fb,
    css: _b
  }), t(g));
}
function Gb() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Wb = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: Gb
}, Xb = function(t) {
  var i = t.name, n = t.onFocus;
  return Le("input", {
    required: !0,
    name: i,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: n,
    css: Wb,
    value: "",
    onChange: function() {
    }
  });
}, Hb = Xb;
function na(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function zb() {
  return na(/^iPhone/i);
}
function Fc() {
  return na(/^Mac/i);
}
function Zb() {
  return na(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Fc() && navigator.maxTouchPoints > 1;
}
function Yb() {
  return zb() || Zb();
}
function Ub() {
  return Fc() || Yb();
}
var $b = function(t) {
  return t.label;
}, Jb = function(t) {
  return t.label;
}, Qb = function(t) {
  return t.value;
}, Kb = function(t) {
  return !!t.isDisabled;
}, qb = {
  clearIndicator: Lm,
  container: Cm,
  control: Vm,
  dropdownIndicator: Rm,
  group: Hm,
  groupHeading: Zm,
  indicatorsContainer: Am,
  indicatorSeparator: Dm,
  input: Jm,
  loadingIndicator: Fm,
  loadingMessage: mm,
  menu: cm,
  menuList: fm,
  menuPortal: ym,
  multiValue: tb,
  multiValueLabel: ib,
  multiValueRemove: rb,
  noOptionsMessage: gm,
  option: cb,
  placeholder: hb,
  singleValue: gb,
  valueContainer: Sm
}, ev = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, tv = 4, _c = 4, iv = 38, rv = _c * 2, nv = {
  baseUnit: _c,
  controlHeight: iv,
  menuGutter: rv
}, Xs = {
  borderRadius: tv,
  colors: ev,
  spacing: nv
}, sv = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Ja(),
  captureMenuScroll: !Ja(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Rb(),
  formatGroupLabel: $b,
  getOptionLabel: Jb,
  getOptionValue: Qb,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Kb,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !qg(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var i = t.count;
    return "".concat(i, " result").concat(i !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function ll(e, t, i, n) {
  var r = Wc(e, t, i), s = Xc(e, t, i), o = Gc(e, t), a = $n(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: r,
    isSelected: s,
    label: o,
    value: a,
    index: n
  };
}
function Mn(e, t) {
  return e.options.map(function(i, n) {
    if ("options" in i) {
      var r = i.options.map(function(o, a) {
        return ll(e, o, t, a);
      }).filter(function(o) {
        return ul(e, o);
      });
      return r.length > 0 ? {
        type: "group",
        data: i,
        options: r,
        index: n
      } : void 0;
    }
    var s = ll(e, i, t, n);
    return ul(e, s) ? s : void 0;
  }).filter(im);
}
function Vc(e) {
  return e.reduce(function(t, i) {
    return i.type === "group" ? t.push.apply(t, zo(i.options.map(function(n) {
      return n.data;
    }))) : t.push(i.data), t;
  }, []);
}
function cl(e, t) {
  return e.reduce(function(i, n) {
    return n.type === "group" ? i.push.apply(i, zo(n.options.map(function(r) {
      return {
        data: r.data,
        id: "".concat(t, "-").concat(n.index, "-").concat(r.index)
      };
    }))) : i.push({
      data: n.data,
      id: "".concat(t, "-").concat(n.index)
    }), i;
  }, []);
}
function ov(e, t) {
  return Vc(Mn(e, t));
}
function ul(e, t) {
  var i = e.inputValue, n = i === void 0 ? "" : i, r = t.data, s = t.isSelected, o = t.label, a = t.value;
  return (!zc(e) || !s) && Hc(e, {
    label: o,
    value: a,
    data: r
  }, n);
}
function av(e, t) {
  var i = e.focusedValue, n = e.selectValue, r = n.indexOf(i);
  if (r > -1) {
    var s = t.indexOf(i);
    if (s > -1)
      return i;
    if (r < t.length)
      return t[r];
  }
  return null;
}
function lv(e, t) {
  var i = e.focusedOption;
  return i && t.indexOf(i) > -1 ? i : t[0];
}
var Hs = function(t, i) {
  var n, r = (n = t.find(function(s) {
    return s.data === i;
  })) === null || n === void 0 ? void 0 : n.id;
  return r || null;
}, Gc = function(t, i) {
  return t.getOptionLabel(i);
}, $n = function(t, i) {
  return t.getOptionValue(i);
};
function Wc(e, t, i) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, i) : !1;
}
function Xc(e, t, i) {
  if (i.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, i);
  var n = $n(e, t);
  return i.some(function(r) {
    return $n(e, r) === n;
  });
}
function Hc(e, t, i) {
  return e.filterOption ? e.filterOption(t, i) : !0;
}
var zc = function(t) {
  var i = t.hideSelectedOptions, n = t.isMulti;
  return i === void 0 ? n : i;
}, cv = 1, Zc = /* @__PURE__ */ function(e) {
  Uf(i, e);
  var t = Qf(i);
  function i(n) {
    var r;
    if (Zf(this, i), r = t.call(this, n), r.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, r.blockOptionHover = !1, r.isComposing = !1, r.commonProps = void 0, r.initialTouchX = 0, r.initialTouchY = 0, r.openAfterFocus = !1, r.scrollToFocusedOptionOnUpdate = !1, r.userIsDragging = void 0, r.isAppleDevice = Ub(), r.controlRef = null, r.getControlRef = function(l) {
      r.controlRef = l;
    }, r.focusedOptionRef = null, r.getFocusedOptionRef = function(l) {
      r.focusedOptionRef = l;
    }, r.menuListRef = null, r.getMenuListRef = function(l) {
      r.menuListRef = l;
    }, r.inputRef = null, r.getInputRef = function(l) {
      r.inputRef = l;
    }, r.focus = r.focusInput, r.blur = r.blurInput, r.onChange = function(l, h) {
      var m = r.props, g = m.onChange, M = m.name;
      h.name = M, r.ariaOnChange(l, h), g(l, h);
    }, r.setValue = function(l, h, m) {
      var g = r.props, M = g.closeMenuOnSelect, N = g.isMulti, f = g.inputValue;
      r.onInputChange("", {
        action: "set-value",
        prevInputValue: f
      }), M && (r.setState({
        inputIsHiddenAfterUpdate: !N
      }), r.onMenuClose()), r.setState({
        clearFocusValueOnUpdate: !0
      }), r.onChange(l, {
        action: h,
        option: m
      });
    }, r.selectOption = function(l) {
      var h = r.props, m = h.blurInputOnSelect, g = h.isMulti, M = h.name, N = r.state.selectValue, f = g && r.isOptionSelected(l, N), b = r.isOptionDisabled(l, N);
      if (f) {
        var S = r.getOptionValue(l);
        r.setValue(N.filter(function(y) {
          return r.getOptionValue(y) !== S;
        }), "deselect-option", l);
      } else if (!b)
        g ? r.setValue([].concat(zo(N), [l]), "select-option", l) : r.setValue(l, "select-option");
      else {
        r.ariaOnChange(l, {
          action: "select-option",
          option: l,
          name: M
        });
        return;
      }
      m && r.blurInput();
    }, r.removeValue = function(l) {
      var h = r.props.isMulti, m = r.state.selectValue, g = r.getOptionValue(l), M = m.filter(function(f) {
        return r.getOptionValue(f) !== g;
      }), N = vn(h, M, M[0] || null);
      r.onChange(N, {
        action: "remove-value",
        removedValue: l
      }), r.focusInput();
    }, r.clearValue = function() {
      var l = r.state.selectValue;
      r.onChange(vn(r.props.isMulti, [], null), {
        action: "clear",
        removedValues: l
      });
    }, r.popValue = function() {
      var l = r.props.isMulti, h = r.state.selectValue, m = h[h.length - 1], g = h.slice(0, h.length - 1), M = vn(l, g, g[0] || null);
      m && r.onChange(M, {
        action: "pop-value",
        removedValue: m
      });
    }, r.getFocusedOptionId = function(l) {
      return Hs(r.state.focusableOptionsWithIds, l);
    }, r.getFocusableOptionsWithIds = function() {
      return cl(Mn(r.props, r.state.selectValue), r.getElementId("option"));
    }, r.getValue = function() {
      return r.state.selectValue;
    }, r.cx = function() {
      for (var l = arguments.length, h = new Array(l), m = 0; m < l; m++)
        h[m] = arguments[m];
      return Ug.apply(void 0, [r.props.classNamePrefix].concat(h));
    }, r.getOptionLabel = function(l) {
      return Gc(r.props, l);
    }, r.getOptionValue = function(l) {
      return $n(r.props, l);
    }, r.getStyles = function(l, h) {
      var m = r.props.unstyled, g = qb[l](h, m);
      g.boxSizing = "border-box";
      var M = r.props.styles[l];
      return M ? M(g, h) : g;
    }, r.getClassNames = function(l, h) {
      var m, g;
      return (m = (g = r.props.classNames)[l]) === null || m === void 0 ? void 0 : m.call(g, h);
    }, r.getElementId = function(l) {
      return "".concat(r.state.instancePrefix, "-").concat(l);
    }, r.getComponents = function() {
      return vb(r.props);
    }, r.buildCategorizedOptions = function() {
      return Mn(r.props, r.state.selectValue);
    }, r.getCategorizedOptions = function() {
      return r.props.menuIsOpen ? r.buildCategorizedOptions() : [];
    }, r.buildFocusableOptions = function() {
      return Vc(r.buildCategorizedOptions());
    }, r.getFocusableOptions = function() {
      return r.props.menuIsOpen ? r.buildFocusableOptions() : [];
    }, r.ariaOnChange = function(l, h) {
      r.setState({
        ariaSelection: De({
          value: l
        }, h)
      });
    }, r.onMenuMouseDown = function(l) {
      l.button === 0 && (l.stopPropagation(), l.preventDefault(), r.focusInput());
    }, r.onMenuMouseMove = function(l) {
      r.blockOptionHover = !1;
    }, r.onControlMouseDown = function(l) {
      if (!l.defaultPrevented) {
        var h = r.props.openMenuOnClick;
        r.state.isFocused ? r.props.menuIsOpen ? l.target.tagName !== "INPUT" && l.target.tagName !== "TEXTAREA" && r.onMenuClose() : h && r.openMenu("first") : (h && (r.openAfterFocus = !0), r.focusInput()), l.target.tagName !== "INPUT" && l.target.tagName !== "TEXTAREA" && l.preventDefault();
      }
    }, r.onDropdownIndicatorMouseDown = function(l) {
      if (!(l && l.type === "mousedown" && l.button !== 0) && !r.props.isDisabled) {
        var h = r.props, m = h.isMulti, g = h.menuIsOpen;
        r.focusInput(), g ? (r.setState({
          inputIsHiddenAfterUpdate: !m
        }), r.onMenuClose()) : r.openMenu("first"), l.preventDefault();
      }
    }, r.onClearIndicatorMouseDown = function(l) {
      l && l.type === "mousedown" && l.button !== 0 || (r.clearValue(), l.preventDefault(), r.openAfterFocus = !1, l.type === "touchend" ? r.focusInput() : setTimeout(function() {
        return r.focusInput();
      }));
    }, r.onScroll = function(l) {
      typeof r.props.closeMenuOnScroll == "boolean" ? l.target instanceof HTMLElement && ys(l.target) && r.props.onMenuClose() : typeof r.props.closeMenuOnScroll == "function" && r.props.closeMenuOnScroll(l) && r.props.onMenuClose();
    }, r.onCompositionStart = function() {
      r.isComposing = !0;
    }, r.onCompositionEnd = function() {
      r.isComposing = !1;
    }, r.onTouchStart = function(l) {
      var h = l.touches, m = h && h.item(0);
      m && (r.initialTouchX = m.clientX, r.initialTouchY = m.clientY, r.userIsDragging = !1);
    }, r.onTouchMove = function(l) {
      var h = l.touches, m = h && h.item(0);
      if (m) {
        var g = Math.abs(m.clientX - r.initialTouchX), M = Math.abs(m.clientY - r.initialTouchY), N = 5;
        r.userIsDragging = g > N || M > N;
      }
    }, r.onTouchEnd = function(l) {
      r.userIsDragging || (r.controlRef && !r.controlRef.contains(l.target) && r.menuListRef && !r.menuListRef.contains(l.target) && r.blurInput(), r.initialTouchX = 0, r.initialTouchY = 0);
    }, r.onControlTouchEnd = function(l) {
      r.userIsDragging || r.onControlMouseDown(l);
    }, r.onClearIndicatorTouchEnd = function(l) {
      r.userIsDragging || r.onClearIndicatorMouseDown(l);
    }, r.onDropdownIndicatorTouchEnd = function(l) {
      r.userIsDragging || r.onDropdownIndicatorMouseDown(l);
    }, r.handleInputChange = function(l) {
      var h = r.props.inputValue, m = l.currentTarget.value;
      r.setState({
        inputIsHiddenAfterUpdate: !1
      }), r.onInputChange(m, {
        action: "input-change",
        prevInputValue: h
      }), r.props.menuIsOpen || r.onMenuOpen();
    }, r.onInputFocus = function(l) {
      r.props.onFocus && r.props.onFocus(l), r.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (r.openAfterFocus || r.props.openMenuOnFocus) && r.openMenu("first"), r.openAfterFocus = !1;
    }, r.onInputBlur = function(l) {
      var h = r.props.inputValue;
      if (r.menuListRef && r.menuListRef.contains(document.activeElement)) {
        r.inputRef.focus();
        return;
      }
      r.props.onBlur && r.props.onBlur(l), r.onInputChange("", {
        action: "input-blur",
        prevInputValue: h
      }), r.onMenuClose(), r.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, r.onOptionHover = function(l) {
      if (!(r.blockOptionHover || r.state.focusedOption === l)) {
        var h = r.getFocusableOptions(), m = h.indexOf(l);
        r.setState({
          focusedOption: l,
          focusedOptionId: m > -1 ? r.getFocusedOptionId(l) : null
        });
      }
    }, r.shouldHideSelectedOptions = function() {
      return zc(r.props);
    }, r.onValueInputFocus = function(l) {
      l.preventDefault(), l.stopPropagation(), r.focus();
    }, r.onKeyDown = function(l) {
      var h = r.props, m = h.isMulti, g = h.backspaceRemovesValue, M = h.escapeClearsValue, N = h.inputValue, f = h.isClearable, b = h.isDisabled, S = h.menuIsOpen, y = h.onKeyDown, d = h.tabSelectsValue, x = h.openMenuOnFocus, I = r.state, C = I.focusedOption, A = I.focusedValue, O = I.selectValue;
      if (!b && !(typeof y == "function" && (y(l), l.defaultPrevented))) {
        switch (r.blockOptionHover = !0, l.key) {
          case "ArrowLeft":
            if (!m || N)
              return;
            r.focusValue("previous");
            break;
          case "ArrowRight":
            if (!m || N)
              return;
            r.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (N)
              return;
            if (A)
              r.removeValue(A);
            else {
              if (!g)
                return;
              m ? r.popValue() : f && r.clearValue();
            }
            break;
          case "Tab":
            if (r.isComposing || l.shiftKey || !S || !d || !C || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            x && r.isOptionSelected(C, O))
              return;
            r.selectOption(C);
            break;
          case "Enter":
            if (l.keyCode === 229)
              break;
            if (S) {
              if (!C || r.isComposing)
                return;
              r.selectOption(C);
              break;
            }
            return;
          case "Escape":
            S ? (r.setState({
              inputIsHiddenAfterUpdate: !1
            }), r.onInputChange("", {
              action: "menu-close",
              prevInputValue: N
            }), r.onMenuClose()) : f && M && r.clearValue();
            break;
          case " ":
            if (N)
              return;
            if (!S) {
              r.openMenu("first");
              break;
            }
            if (!C)
              return;
            r.selectOption(C);
            break;
          case "ArrowUp":
            S ? r.focusOption("up") : r.openMenu("last");
            break;
          case "ArrowDown":
            S ? r.focusOption("down") : r.openMenu("first");
            break;
          case "PageUp":
            if (!S)
              return;
            r.focusOption("pageup");
            break;
          case "PageDown":
            if (!S)
              return;
            r.focusOption("pagedown");
            break;
          case "Home":
            if (!S)
              return;
            r.focusOption("first");
            break;
          case "End":
            if (!S)
              return;
            r.focusOption("last");
            break;
          default:
            return;
        }
        l.preventDefault();
      }
    }, r.state.instancePrefix = "react-select-" + (r.props.instanceId || ++cv), r.state.selectValue = Ua(n.value), n.menuIsOpen && r.state.selectValue.length) {
      var s = r.getFocusableOptionsWithIds(), o = r.buildFocusableOptions(), a = o.indexOf(r.state.selectValue[0]);
      r.state.focusableOptionsWithIds = s, r.state.focusedOption = o[a], r.state.focusedOptionId = Hs(s, o[a]);
    }
    return r;
  }
  return Yf(i, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && $a(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(r) {
      var s = this.props, o = s.isDisabled, a = s.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !o && r.isDisabled || // ensure focus is on the Input when the menu opens
      l && a && !r.menuIsOpen) && this.focusInput(), l && o && !r.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !o && r.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && ($a(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(r, s) {
      this.props.onInputChange(r, s);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(r) {
      var s = this, o = this.state, a = o.selectValue, l = o.isFocused, h = this.buildFocusableOptions(), m = r === "first" ? 0 : h.length - 1;
      if (!this.props.isMulti) {
        var g = h.indexOf(a[0]);
        g > -1 && (m = g);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: h[m],
        focusedOptionId: this.getFocusedOptionId(h[m])
      }, function() {
        return s.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(r) {
      var s = this.state, o = s.selectValue, a = s.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = o.indexOf(a);
        a || (l = -1);
        var h = o.length - 1, m = -1;
        if (o.length) {
          switch (r) {
            case "previous":
              l === 0 ? m = 0 : l === -1 ? m = h : m = l - 1;
              break;
            case "next":
              l > -1 && l < h && (m = l + 1);
              break;
          }
          this.setState({
            inputIsHidden: m !== -1,
            focusedValue: o[m]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", s = this.props.pageSize, o = this.state.focusedOption, a = this.getFocusableOptions();
      if (a.length) {
        var l = 0, h = a.indexOf(o);
        o || (h = -1), r === "up" ? l = h > 0 ? h - 1 : a.length - 1 : r === "down" ? l = (h + 1) % a.length : r === "pageup" ? (l = h - s, l < 0 && (l = 0)) : r === "pagedown" ? (l = h + s, l > a.length - 1 && (l = a.length - 1)) : r === "last" && (l = a.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: a[l],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(a[l])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Xs) : De(De({}, Xs), this.props.theme) : Xs;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var r = this.clearValue, s = this.cx, o = this.getStyles, a = this.getClassNames, l = this.getValue, h = this.selectOption, m = this.setValue, g = this.props, M = g.isMulti, N = g.isRtl, f = g.options, b = this.hasValue();
      return {
        clearValue: r,
        cx: s,
        getStyles: o,
        getClassNames: a,
        getValue: l,
        hasValue: b,
        isMulti: M,
        isRtl: N,
        options: f,
        selectOption: h,
        selectProps: g,
        setValue: m,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var r = this.state.selectValue;
      return r.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var r = this.props, s = r.isClearable, o = r.isMulti;
      return s === void 0 ? o : s;
    }
  }, {
    key: "isOptionDisabled",
    value: function(r, s) {
      return Wc(this.props, r, s);
    }
  }, {
    key: "isOptionSelected",
    value: function(r, s) {
      return Xc(this.props, r, s);
    }
  }, {
    key: "filterOption",
    value: function(r, s) {
      return Hc(this.props, r, s);
    }
  }, {
    key: "formatOptionLabel",
    value: function(r, s) {
      if (typeof this.props.formatOptionLabel == "function") {
        var o = this.props.inputValue, a = this.state.selectValue;
        return this.props.formatOptionLabel(r, {
          context: s,
          inputValue: o,
          selectValue: a
        });
      } else
        return this.getOptionLabel(r);
    }
  }, {
    key: "formatGroupLabel",
    value: function(r) {
      return this.props.formatGroupLabel(r);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var r = this.props, s = r.isDisabled, o = r.isSearchable, a = r.inputId, l = r.inputValue, h = r.tabIndex, m = r.form, g = r.menuIsOpen, M = r.required, N = this.getComponents(), f = N.Input, b = this.state, S = b.inputIsHidden, y = b.ariaSelection, d = this.commonProps, x = a || this.getElementId("input"), I = De(De(De({
          "aria-autocomplete": "list",
          "aria-expanded": g,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": M,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, g && {
          "aria-controls": this.getElementId("listbox")
        }), !o && {
          "aria-readonly": !0
        }), this.hasValue() ? (y == null ? void 0 : y.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return o ? /* @__PURE__ */ re.createElement(f, je({}, d, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: x,
          innerRef: this.getInputRef,
          isDisabled: s,
          isHidden: S,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: h,
          form: m,
          type: "text",
          value: l
        }, I)) : /* @__PURE__ */ re.createElement(Lb, je({
          id: x,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Yn,
          onFocus: this.onInputFocus,
          disabled: s,
          tabIndex: h,
          inputMode: "none",
          form: m,
          value: ""
        }, I));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var r = this, s = this.getComponents(), o = s.MultiValue, a = s.MultiValueContainer, l = s.MultiValueLabel, h = s.MultiValueRemove, m = s.SingleValue, g = s.Placeholder, M = this.commonProps, N = this.props, f = N.controlShouldRenderValue, b = N.isDisabled, S = N.isMulti, y = N.inputValue, d = N.placeholder, x = this.state, I = x.selectValue, C = x.focusedValue, A = x.isFocused;
      if (!this.hasValue() || !f)
        return y ? null : /* @__PURE__ */ re.createElement(g, je({}, M, {
          key: "placeholder",
          isDisabled: b,
          isFocused: A,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), d);
      if (S)
        return I.map(function(z, H) {
          var F = z === C, E = "".concat(r.getOptionLabel(z), "-").concat(r.getOptionValue(z));
          return /* @__PURE__ */ re.createElement(o, je({}, M, {
            components: {
              Container: a,
              Label: l,
              Remove: h
            },
            isFocused: F,
            isDisabled: b,
            key: E,
            index: H,
            removeProps: {
              onClick: function() {
                return r.removeValue(z);
              },
              onTouchEnd: function() {
                return r.removeValue(z);
              },
              onMouseDown: function(v) {
                v.preventDefault();
              }
            },
            data: z
          }), r.formatOptionLabel(z, "value"));
        });
      if (y)
        return null;
      var O = I[0];
      return /* @__PURE__ */ re.createElement(m, je({}, M, {
        data: O,
        isDisabled: b
      }), this.formatOptionLabel(O, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var r = this.getComponents(), s = r.ClearIndicator, o = this.commonProps, a = this.props, l = a.isDisabled, h = a.isLoading, m = this.state.isFocused;
      if (!this.isClearable() || !s || l || !this.hasValue() || h)
        return null;
      var g = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ re.createElement(s, je({}, o, {
        innerProps: g,
        isFocused: m
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var r = this.getComponents(), s = r.LoadingIndicator, o = this.commonProps, a = this.props, l = a.isDisabled, h = a.isLoading, m = this.state.isFocused;
      if (!s || !h)
        return null;
      var g = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ re.createElement(s, je({}, o, {
        innerProps: g,
        isDisabled: l,
        isFocused: m
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var r = this.getComponents(), s = r.DropdownIndicator, o = r.IndicatorSeparator;
      if (!s || !o)
        return null;
      var a = this.commonProps, l = this.props.isDisabled, h = this.state.isFocused;
      return /* @__PURE__ */ re.createElement(o, je({}, a, {
        isDisabled: l,
        isFocused: h
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var r = this.getComponents(), s = r.DropdownIndicator;
      if (!s)
        return null;
      var o = this.commonProps, a = this.props.isDisabled, l = this.state.isFocused, h = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ re.createElement(s, je({}, o, {
        innerProps: h,
        isDisabled: a,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var r = this, s = this.getComponents(), o = s.Group, a = s.GroupHeading, l = s.Menu, h = s.MenuList, m = s.MenuPortal, g = s.LoadingMessage, M = s.NoOptionsMessage, N = s.Option, f = this.commonProps, b = this.state.focusedOption, S = this.props, y = S.captureMenuScroll, d = S.inputValue, x = S.isLoading, I = S.loadingMessage, C = S.minMenuHeight, A = S.maxMenuHeight, O = S.menuIsOpen, z = S.menuPlacement, H = S.menuPosition, F = S.menuPortalTarget, E = S.menuShouldBlockScroll, k = S.menuShouldScrollIntoView, v = S.noOptionsMessage, u = S.onMenuScrollToTop, c = S.onMenuScrollToBottom;
      if (!O)
        return null;
      var w = function(_, X) {
        var U = _.type, te = _.data, le = _.isDisabled, R = _.isSelected, P = _.label, W = _.value, q = b === te, p = le ? void 0 : function() {
          return r.onOptionHover(te);
        }, j = le ? void 0 : function() {
          return r.selectOption(te);
        }, B = "".concat(r.getElementId("option"), "-").concat(X), Z = {
          id: B,
          onClick: j,
          onMouseMove: p,
          onMouseOver: p,
          tabIndex: -1,
          role: "option",
          "aria-selected": r.isAppleDevice ? void 0 : R
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ re.createElement(N, je({}, f, {
          innerProps: Z,
          data: te,
          isDisabled: le,
          isSelected: R,
          key: B,
          label: P,
          type: U,
          value: W,
          isFocused: q,
          innerRef: q ? r.getFocusedOptionRef : void 0
        }), r.formatOptionLabel(_.data, "menu"));
      }, T;
      if (this.hasOptions())
        T = this.getCategorizedOptions().map(function(se) {
          if (se.type === "group") {
            var _ = se.data, X = se.options, U = se.index, te = "".concat(r.getElementId("group"), "-").concat(U), le = "".concat(te, "-heading");
            return /* @__PURE__ */ re.createElement(o, je({}, f, {
              key: te,
              data: _,
              options: X,
              Heading: a,
              headingProps: {
                id: le,
                data: se.data
              },
              label: r.formatGroupLabel(se.data)
            }), se.options.map(function(R) {
              return w(R, "".concat(U, "-").concat(R.index));
            }));
          } else if (se.type === "option")
            return w(se, "".concat(se.index));
        });
      else if (x) {
        var D = I({
          inputValue: d
        });
        if (D === null)
          return null;
        T = /* @__PURE__ */ re.createElement(g, f, D);
      } else {
        var G = v({
          inputValue: d
        });
        if (G === null)
          return null;
        T = /* @__PURE__ */ re.createElement(M, f, G);
      }
      var L = {
        minMenuHeight: C,
        maxMenuHeight: A,
        menuPlacement: z,
        menuPosition: H,
        menuShouldScrollIntoView: k
      }, J = /* @__PURE__ */ re.createElement(um, je({}, f, L), function(se) {
        var _ = se.ref, X = se.placerProps, U = X.placement, te = X.maxHeight;
        return /* @__PURE__ */ re.createElement(l, je({}, f, L, {
          innerRef: _,
          innerProps: {
            onMouseDown: r.onMenuMouseDown,
            onMouseMove: r.onMenuMouseMove
          },
          isLoading: x,
          placement: U
        }), /* @__PURE__ */ re.createElement(Vb, {
          captureEnabled: y,
          onTopArrive: u,
          onBottomArrive: c,
          lockEnabled: E
        }, function(le) {
          return /* @__PURE__ */ re.createElement(h, je({}, f, {
            innerRef: function(P) {
              r.getMenuListRef(P), le(P);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": f.isMulti,
              id: r.getElementId("listbox")
            },
            isLoading: x,
            maxHeight: te,
            focusedOption: b
          }), T);
        }));
      });
      return F || H === "fixed" ? /* @__PURE__ */ re.createElement(m, je({}, f, {
        appendTo: F,
        controlElement: this.controlRef,
        menuPlacement: z,
        menuPosition: H
      }), J) : J;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var r = this, s = this.props, o = s.delimiter, a = s.isDisabled, l = s.isMulti, h = s.name, m = s.required, g = this.state.selectValue;
      if (m && !this.hasValue() && !a)
        return /* @__PURE__ */ re.createElement(Hb, {
          name: h,
          onFocus: this.onValueInputFocus
        });
      if (!(!h || a))
        if (l)
          if (o) {
            var M = g.map(function(b) {
              return r.getOptionValue(b);
            }).join(o);
            return /* @__PURE__ */ re.createElement("input", {
              name: h,
              type: "hidden",
              value: M
            });
          } else {
            var N = g.length > 0 ? g.map(function(b, S) {
              return /* @__PURE__ */ re.createElement("input", {
                key: "i-".concat(S),
                name: h,
                type: "hidden",
                value: r.getOptionValue(b)
              });
            }) : /* @__PURE__ */ re.createElement("input", {
              name: h,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ re.createElement("div", null, N);
          }
        else {
          var f = g[0] ? this.getOptionValue(g[0]) : "";
          return /* @__PURE__ */ re.createElement("input", {
            name: h,
            type: "hidden",
            value: f
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var r = this.commonProps, s = this.state, o = s.ariaSelection, a = s.focusedOption, l = s.focusedValue, h = s.isFocused, m = s.selectValue, g = this.getFocusableOptions();
      return /* @__PURE__ */ re.createElement(Tb, je({}, r, {
        id: this.getElementId("live-region"),
        ariaSelection: o,
        focusedOption: a,
        focusedValue: l,
        isFocused: h,
        selectValue: m,
        focusableOptions: g,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.getComponents(), s = r.Control, o = r.IndicatorsContainer, a = r.SelectContainer, l = r.ValueContainer, h = this.props, m = h.className, g = h.id, M = h.isDisabled, N = h.menuIsOpen, f = this.state.isFocused, b = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ re.createElement(a, je({}, b, {
        className: m,
        innerProps: {
          id: g,
          onKeyDown: this.onKeyDown
        },
        isDisabled: M,
        isFocused: f
      }), this.renderLiveRegion(), /* @__PURE__ */ re.createElement(s, je({}, b, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: M,
        isFocused: f,
        menuIsOpen: N
      }), /* @__PURE__ */ re.createElement(l, je({}, b, {
        isDisabled: M
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ re.createElement(o, je({}, b, {
        isDisabled: M
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, s) {
      var o = s.prevProps, a = s.clearFocusValueOnUpdate, l = s.inputIsHiddenAfterUpdate, h = s.ariaSelection, m = s.isFocused, g = s.prevWasFocused, M = s.instancePrefix, N = r.options, f = r.value, b = r.menuIsOpen, S = r.inputValue, y = r.isMulti, d = Ua(f), x = {};
      if (o && (f !== o.value || N !== o.options || b !== o.menuIsOpen || S !== o.inputValue)) {
        var I = b ? ov(r, d) : [], C = b ? cl(Mn(r, d), "".concat(M, "-option")) : [], A = a ? av(s, d) : null, O = lv(s, I), z = Hs(C, O);
        x = {
          selectValue: d,
          focusedOption: O,
          focusedOptionId: z,
          focusableOptionsWithIds: C,
          focusedValue: A,
          clearFocusValueOnUpdate: !1
        };
      }
      var H = l != null && r !== o ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, F = h, E = m && g;
      return m && !E && (F = {
        value: vn(y, d, d[0] || null),
        options: d,
        action: "initial-input-focus"
      }, E = !g), (h == null ? void 0 : h.action) === "initial-input-focus" && (F = null), De(De(De({}, x), H), {}, {
        prevProps: r,
        ariaSelection: F,
        prevWasFocused: E
      });
    }
  }]), i;
}(Bh);
Zc.defaultProps = sv;
var uv = /* @__PURE__ */ Bi(function(e, t) {
  var i = zf(e);
  return /* @__PURE__ */ re.createElement(Zc, je({
    ref: t
  }, i));
}), Ii = uv;
function Yc(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" }, child: [] }] })(e);
}
function dv(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "12", x2: "12", y1: "20", y2: "10" }, child: [] }, { tag: "line", attr: { x1: "18", x2: "18", y1: "20", y2: "4" }, child: [] }, { tag: "line", attr: { x1: "6", x2: "6", y1: "20", y2: "16" }, child: [] }] })(e);
}
function hv(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m6 9 6 6 6-6" }, child: [] }] })(e);
}
function fv(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }, child: [] }, { tag: "path", attr: { d: "M21 3v5h-5" }, child: [] }, { tag: "path", attr: { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }, child: [] }, { tag: "path", attr: { d: "M8 16H3v5" }, child: [] }] })(e);
}
const zs = {
  base: "border rounded-lg bg-white hover:cursor-pointer w-[200px] min-h-10",
  focus: "border-blue-600 ring-1 ring-blue-500",
  nonFocus: "border-gray-300 hover:border-gray-400"
}, pv = "text-gray-500 pl-1 py-0.5", gv = "pl-1 py-0.5", mv = "p-1 gap-1", bv = "leading-7 ml-1", vv = "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5 w-fit", yv = "leading-6 py-0.5 max-w-[100px] truncate text-xs", xv = "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md", Cv = "p-1 gap-1", wv = "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800", Sv = "bg-gray-300", Iv = "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black", Av = "p-1 mt-2 border border-gray-200 bg-white rounded-lg max-h-[200px] overflow-hidden", Ev = "ml-3 mt-2 mb-1 text-gray-500 text-sm", Zs = {
  base: "hover:cursor-pointer px-3 py-2 rounded w-full truncate text-sm font-normal",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500"
}, Tv = "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm", kv = (e) => /* @__PURE__ */ oe.jsx(sn.DropdownIndicator, { ...e, children: /* @__PURE__ */ oe.jsx(hv, {}) }), Mv = (e) => /* @__PURE__ */ oe.jsx(sn.ClearIndicator, { ...e, children: /* @__PURE__ */ oe.jsx(Yc, {}) }), Pv = (e) => /* @__PURE__ */ oe.jsx(sn.MultiValueRemove, { ...e, children: /* @__PURE__ */ oe.jsx(Yc, {}) });
function Rv({
  onChange: e,
  options: t,
  value: i
}) {
  return /* @__PURE__ */ oe.jsx(
    Ii,
    {
      isMulti: !0,
      closeMenuOnSelect: !1,
      hideSelectedOptions: !1,
      unstyled: !0,
      options: t,
      value: (i == null ? void 0 : i.length) > 0 ? i == null ? void 0 : i.map((n) => ({ label: n, value: n })) : null,
      onChange: (n) => {
        const r = n ? n == null ? void 0 : n.map((s) => s.value) : [];
        e(r);
      },
      menuPlacement: "auto",
      placeholder: "Property Value",
      styles: {
        input: (n) => ({
          ...n,
          "input:focus": {
            boxShadow: "none"
          }
        }),
        control: (n) => ({
          ...n,
          transition: "none"
        })
      },
      components: {
        MultiValueRemove: Pv,
        DropdownIndicator: kv,
        ClearIndicator: Mv,
        IndicatorSeparator: null,
        Option: ({ innerProps: n, ...r }) => /* @__PURE__ */ oe.jsxs(
          "div",
          {
            ...n,
            ...r,
            className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
            children: [
              /* @__PURE__ */ oe.jsx("span", { className: "max-w-[180px] truncate text-xs", children: r.label }),
              /* @__PURE__ */ oe.jsx(
                Si,
                {
                  className: _e(
                    r.isSelected ? "text-green-500" : "text-transparent"
                  )
                }
              )
            ]
          }
        )
      },
      classNames: {
        control: ({ isFocused: n }) => Hl(
          n ? zs.focus : zs.nonFocus,
          zs.base
        ),
        placeholder: () => pv,
        input: () => gv,
        valueContainer: () => mv,
        singleValue: () => bv,
        multiValue: () => vv,
        multiValueLabel: () => yv,
        multiValueRemove: () => xv,
        indicatorsContainer: () => Cv,
        clearIndicator: () => wv,
        indicatorSeparator: () => Sv,
        dropdownIndicator: () => Iv,
        menu: () => Av,
        groupHeading: () => Ev,
        option: ({ isFocused: n, isSelected: r }) => _e(
          n && Zs.focus,
          r && Zs.selected,
          Zs.base
        ),
        noOptionsMessage: () => Tv
      }
    }
  );
}
function xs(e, t) {
  if (e == null)
    return {};
  var i = {}, n = Object.keys(e), r, s;
  for (s = 0; s < n.length; s++)
    r = n[s], !(t.indexOf(r) >= 0) && (i[r] = e[r]);
  return i;
}
var Ov = ["color"], Lv = /* @__PURE__ */ Bi(function(e, t) {
  var i = e.color, n = i === void 0 ? "currentColor" : i, r = xs(e, Ov);
  return Wt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), Wt("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Nv = ["color"], Uc = /* @__PURE__ */ Bi(function(e, t) {
  var i = e.color, n = i === void 0 ? "currentColor" : i, r = xs(e, Nv);
  return Wt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), Wt("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Dv = ["color"], Bv = /* @__PURE__ */ Bi(function(e, t) {
  var i = e.color, n = i === void 0 ? "currentColor" : i, r = xs(e, Dv);
  return Wt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), Wt("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), jv = ["color"], Fv = /* @__PURE__ */ Bi(function(e, t) {
  var i = e.color, n = i === void 0 ? "currentColor" : i, r = xs(e, jv);
  return Wt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), Wt("path", {
    d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
function So(e, [t, i]) {
  return Math.min(i, Math.max(t, e));
}
function Ye(e, t, { checkForDefaultPrevented: i = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), i === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function sa(e, t = []) {
  let i = [];
  function n(s, o) {
    const a = re.createContext(o), l = i.length;
    i = [...i, o];
    function h(g) {
      const { scope: M, children: N, ...f } = g, b = (M == null ? void 0 : M[e][l]) || a, S = re.useMemo(() => f, Object.values(f));
      return /* @__PURE__ */ oe.jsx(b.Provider, { value: S, children: N });
    }
    function m(g, M) {
      const N = (M == null ? void 0 : M[e][l]) || a, f = re.useContext(N);
      if (f)
        return f;
      if (o !== void 0)
        return o;
      throw new Error(`\`${g}\` must be used within \`${s}\``);
    }
    return h.displayName = s + "Provider", [h, m];
  }
  const r = () => {
    const s = i.map((o) => re.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return re.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return r.scopeName = e, [n, _v(r, ...t)];
}
function _v(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const i = () => {
    const n = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const o = n.reduce((a, { useScope: l, scopeName: h }) => {
        const g = l(s)[`__scope${h}`];
        return { ...a, ...g };
      }, {});
      return re.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return i.scopeName = t.scopeName, i;
}
function Vv(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $c(...e) {
  return (t) => e.forEach((i) => Vv(i, t));
}
function ot(...e) {
  return re.useCallback($c(...e), e);
}
var Zi = re.forwardRef((e, t) => {
  const { children: i, ...n } = e, r = re.Children.toArray(i), s = r.find(Wv);
  if (s) {
    const o = s.props.children, a = r.map((l) => l === s ? re.Children.count(o) > 1 ? re.Children.only(null) : re.isValidElement(o) ? o.props.children : null : l);
    return /* @__PURE__ */ oe.jsx(Io, { ...n, ref: t, children: re.isValidElement(o) ? re.cloneElement(o, void 0, a) : null });
  }
  return /* @__PURE__ */ oe.jsx(Io, { ...n, ref: t, children: i });
});
Zi.displayName = "Slot";
var Io = re.forwardRef((e, t) => {
  const { children: i, ...n } = e;
  if (re.isValidElement(i)) {
    const r = Hv(i);
    return re.cloneElement(i, {
      ...Xv(n, i.props),
      // @ts-ignore
      ref: t ? $c(t, r) : r
    });
  }
  return re.Children.count(i) > 1 ? re.Children.only(null) : null;
});
Io.displayName = "SlotClone";
var Gv = ({ children: e }) => /* @__PURE__ */ oe.jsx(oe.Fragment, { children: e });
function Wv(e) {
  return re.isValidElement(e) && e.type === Gv;
}
function Xv(e, t) {
  const i = { ...t };
  for (const n in t) {
    const r = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? r && s ? i[n] = (...a) => {
      s(...a), r(...a);
    } : r && (i[n] = r) : n === "style" ? i[n] = { ...r, ...s } : n === "className" && (i[n] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...i };
}
function Hv(e) {
  var n, r;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, i = t && "isReactWarning" in t && t.isReactWarning;
  return i ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, i = t && "isReactWarning" in t && t.isReactWarning, i ? e.props.ref : e.props.ref || e.ref);
}
function Jc(e) {
  const t = e + "CollectionProvider", [i, n] = sa(t), [r, s] = i(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), o = (N) => {
    const { scope: f, children: b } = N, S = Ge.useRef(null), y = Ge.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ oe.jsx(r, { scope: f, itemMap: y, collectionRef: S, children: b });
  };
  o.displayName = t;
  const a = e + "CollectionSlot", l = Ge.forwardRef(
    (N, f) => {
      const { scope: b, children: S } = N, y = s(a, b), d = ot(f, y.collectionRef);
      return /* @__PURE__ */ oe.jsx(Zi, { ref: d, children: S });
    }
  );
  l.displayName = a;
  const h = e + "CollectionItemSlot", m = "data-radix-collection-item", g = Ge.forwardRef(
    (N, f) => {
      const { scope: b, children: S, ...y } = N, d = Ge.useRef(null), x = ot(f, d), I = s(h, b);
      return Ge.useEffect(() => (I.itemMap.set(d, { ref: d, ...y }), () => void I.itemMap.delete(d))), /* @__PURE__ */ oe.jsx(Zi, { [m]: "", ref: x, children: S });
    }
  );
  g.displayName = h;
  function M(N) {
    const f = s(e + "CollectionConsumer", N);
    return Ge.useCallback(() => {
      const S = f.collectionRef.current;
      if (!S)
        return [];
      const y = Array.from(S.querySelectorAll(`[${m}]`));
      return Array.from(f.itemMap.values()).sort(
        (I, C) => y.indexOf(I.ref.current) - y.indexOf(C.ref.current)
      );
    }, [f.collectionRef, f.itemMap]);
  }
  return [
    { Provider: o, Slot: l, ItemSlot: g },
    M,
    n
  ];
}
function Cs(e, t = []) {
  let i = [];
  function n(s, o) {
    const a = re.createContext(o), l = i.length;
    i = [...i, o];
    const h = (g) => {
      var y;
      const { scope: M, children: N, ...f } = g, b = ((y = M == null ? void 0 : M[e]) == null ? void 0 : y[l]) || a, S = re.useMemo(() => f, Object.values(f));
      return /* @__PURE__ */ oe.jsx(b.Provider, { value: S, children: N });
    };
    h.displayName = s + "Provider";
    function m(g, M) {
      var b;
      const N = ((b = M == null ? void 0 : M[e]) == null ? void 0 : b[l]) || a, f = re.useContext(N);
      if (f)
        return f;
      if (o !== void 0)
        return o;
      throw new Error(`\`${g}\` must be used within \`${s}\``);
    }
    return [h, m];
  }
  const r = () => {
    const s = i.map((o) => re.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return re.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return r.scopeName = e, [n, zv(r, ...t)];
}
function zv(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const i = () => {
    const n = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const o = n.reduce((a, { useScope: l, scopeName: h }) => {
        const g = l(s)[`__scope${h}`];
        return { ...a, ...g };
      }, {});
      return re.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return i.scopeName = t.scopeName, i;
}
var Zv = re.createContext(void 0);
function ws(e) {
  const t = re.useContext(Zv);
  return e || t || "ltr";
}
var Yv = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Qe = Yv.reduce((e, t) => {
  const i = re.forwardRef((n, r) => {
    const { asChild: s, ...o } = n, a = s ? Zi : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ oe.jsx(a, { ...o, ref: r });
  });
  return i.displayName = `Primitive.${t}`, { ...e, [t]: i };
}, {});
function Uv(e, t) {
  e && hs.flushSync(() => e.dispatchEvent(t));
}
function Ct(e) {
  const t = re.useRef(e);
  return re.useEffect(() => {
    t.current = e;
  }), re.useMemo(() => (...i) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...i);
  }, []);
}
function $v(e, t = globalThis == null ? void 0 : globalThis.document) {
  const i = Ct(e);
  re.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && i(r);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [i, t]);
}
var Jv = "DismissableLayer", Ao = "dismissableLayer.update", Qv = "dismissableLayer.pointerDownOutside", Kv = "dismissableLayer.focusOutside", dl, Qc = re.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Kc = re.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: i = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: o,
      onDismiss: a,
      ...l
    } = e, h = re.useContext(Qc), [m, g] = re.useState(null), M = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, N] = re.useState({}), f = ot(t, (O) => g(O)), b = Array.from(h.layers), [S] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), y = b.indexOf(S), d = m ? b.indexOf(m) : -1, x = h.layersWithOutsidePointerEventsDisabled.size > 0, I = d >= y, C = t0((O) => {
      const z = O.target, H = [...h.branches].some((F) => F.contains(z));
      !I || H || (r == null || r(O), o == null || o(O), O.defaultPrevented || a == null || a());
    }, M), A = i0((O) => {
      const z = O.target;
      [...h.branches].some((F) => F.contains(z)) || (s == null || s(O), o == null || o(O), O.defaultPrevented || a == null || a());
    }, M);
    return $v((O) => {
      d === h.layers.size - 1 && (n == null || n(O), !O.defaultPrevented && a && (O.preventDefault(), a()));
    }, M), re.useEffect(() => {
      if (m)
        return i && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (dl = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(m)), h.layers.add(m), hl(), () => {
          i && h.layersWithOutsidePointerEventsDisabled.size === 1 && (M.body.style.pointerEvents = dl);
        };
    }, [m, M, i, h]), re.useEffect(() => () => {
      m && (h.layers.delete(m), h.layersWithOutsidePointerEventsDisabled.delete(m), hl());
    }, [m, h]), re.useEffect(() => {
      const O = () => N({});
      return document.addEventListener(Ao, O), () => document.removeEventListener(Ao, O);
    }, []), /* @__PURE__ */ oe.jsx(
      Qe.div,
      {
        ...l,
        ref: f,
        style: {
          pointerEvents: x ? I ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ye(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: Ye(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: Ye(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Kc.displayName = Jv;
var qv = "DismissableLayerBranch", e0 = re.forwardRef((e, t) => {
  const i = re.useContext(Qc), n = re.useRef(null), r = ot(t, n);
  return re.useEffect(() => {
    const s = n.current;
    if (s)
      return i.branches.add(s), () => {
        i.branches.delete(s);
      };
  }, [i.branches]), /* @__PURE__ */ oe.jsx(Qe.div, { ...e, ref: r });
});
e0.displayName = qv;
function t0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const i = Ct(e), n = re.useRef(!1), r = re.useRef(() => {
  });
  return re.useEffect(() => {
    const s = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          qc(
            Qv,
            i,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      n.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, i]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function i0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const i = Ct(e), n = re.useRef(!1);
  return re.useEffect(() => {
    const r = (s) => {
      s.target && !n.current && qc(Kv, i, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, i]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function hl() {
  const e = new CustomEvent(Ao);
  document.dispatchEvent(e);
}
function qc(e, t, i, { discrete: n }) {
  const r = i.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: i });
  t && r.addEventListener(e, t, { once: !0 }), n ? Uv(r, s) : r.dispatchEvent(s);
}
var Ys = 0;
function r0() {
  re.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? fl()), document.body.insertAdjacentElement("beforeend", e[1] ?? fl()), Ys++, () => {
      Ys === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ys--;
    };
  }, []);
}
function fl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Us = "focusScope.autoFocusOnMount", $s = "focusScope.autoFocusOnUnmount", pl = { bubbles: !1, cancelable: !0 }, n0 = "FocusScope", eu = re.forwardRef((e, t) => {
  const {
    loop: i = !1,
    trapped: n = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...o
  } = e, [a, l] = re.useState(null), h = Ct(r), m = Ct(s), g = re.useRef(null), M = ot(t, (b) => l(b)), N = re.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  re.useEffect(() => {
    if (n) {
      let b = function(x) {
        if (N.paused || !a)
          return;
        const I = x.target;
        a.contains(I) ? g.current = I : wi(g.current, { select: !0 });
      }, S = function(x) {
        if (N.paused || !a)
          return;
        const I = x.relatedTarget;
        I !== null && (a.contains(I) || wi(g.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const C of x)
            C.removedNodes.length > 0 && wi(a);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", S);
      const d = new MutationObserver(y);
      return a && d.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", S), d.disconnect();
      };
    }
  }, [n, a, N.paused]), re.useEffect(() => {
    if (a) {
      ml.add(N);
      const b = document.activeElement;
      if (!a.contains(b)) {
        const y = new CustomEvent(Us, pl);
        a.addEventListener(Us, h), a.dispatchEvent(y), y.defaultPrevented || (s0(u0(tu(a)), { select: !0 }), document.activeElement === b && wi(a));
      }
      return () => {
        a.removeEventListener(Us, h), setTimeout(() => {
          const y = new CustomEvent($s, pl);
          a.addEventListener($s, m), a.dispatchEvent(y), y.defaultPrevented || wi(b ?? document.body, { select: !0 }), a.removeEventListener($s, m), ml.remove(N);
        }, 0);
      };
    }
  }, [a, h, m, N]);
  const f = re.useCallback(
    (b) => {
      if (!i && !n || N.paused)
        return;
      const S = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, y = document.activeElement;
      if (S && y) {
        const d = b.currentTarget, [x, I] = o0(d);
        x && I ? !b.shiftKey && y === I ? (b.preventDefault(), i && wi(x, { select: !0 })) : b.shiftKey && y === x && (b.preventDefault(), i && wi(I, { select: !0 })) : y === d && b.preventDefault();
      }
    },
    [i, n, N.paused]
  );
  return /* @__PURE__ */ oe.jsx(Qe.div, { tabIndex: -1, ...o, ref: M, onKeyDown: f });
});
eu.displayName = n0;
function s0(e, { select: t = !1 } = {}) {
  const i = document.activeElement;
  for (const n of e)
    if (wi(n, { select: t }), document.activeElement !== i)
      return;
}
function o0(e) {
  const t = tu(e), i = gl(t, e), n = gl(t.reverse(), e);
  return [i, n];
}
function tu(e) {
  const t = [], i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const r = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || r ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; i.nextNode(); )
    t.push(i.currentNode);
  return t;
}
function gl(e, t) {
  for (const i of e)
    if (!a0(i, { upTo: t }))
      return i;
}
function a0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function l0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function wi(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const i = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== i && l0(e) && t && e.select();
  }
}
var ml = c0();
function c0() {
  let e = [];
  return {
    add(t) {
      const i = e[0];
      t !== i && (i == null || i.pause()), e = bl(e, t), e.unshift(t);
    },
    remove(t) {
      var i;
      e = bl(e, t), (i = e[0]) == null || i.resume();
    }
  };
}
function bl(e, t) {
  const i = [...e], n = i.indexOf(t);
  return n !== -1 && i.splice(n, 1), i;
}
function u0(e) {
  return e.filter((t) => t.tagName !== "A");
}
var St = globalThis != null && globalThis.document ? re.useLayoutEffect : () => {
}, d0 = re["useId".toString()] || (() => {
}), h0 = 0;
function on(e) {
  const [t, i] = re.useState(d0());
  return St(() => {
    e || i((n) => n ?? String(h0++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Pn = typeof document < "u" ? _l : ds;
function Jn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let i, n, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (i = e.length, i !== t.length)
        return !1;
      for (n = i; n-- !== 0; )
        if (!Jn(e[n], t[n]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), i = r.length, i !== Object.keys(t).length)
      return !1;
    for (n = i; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[n]))
        return !1;
    for (n = i; n-- !== 0; ) {
      const s = r[n];
      if (!(s === "_owner" && e.$$typeof) && !Jn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function iu(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vl(e, t) {
  const i = iu(e);
  return Math.round(t * i) / i;
}
function Js(e) {
  const t = re.useRef(e);
  return Pn(() => {
    t.current = e;
  }), t;
}
function f0(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: i = "absolute",
    middleware: n = [],
    platform: r,
    elements: {
      reference: s,
      floating: o
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: h
  } = e, [m, g] = re.useState({
    x: 0,
    y: 0,
    strategy: i,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [M, N] = re.useState(n);
  Jn(M, n) || N(n);
  const [f, b] = re.useState(null), [S, y] = re.useState(null), d = re.useCallback((D) => {
    D !== A.current && (A.current = D, b(D));
  }, []), x = re.useCallback((D) => {
    D !== O.current && (O.current = D, y(D));
  }, []), I = s || f, C = o || S, A = re.useRef(null), O = re.useRef(null), z = re.useRef(m), H = l != null, F = Js(l), E = Js(r), k = Js(h), v = re.useCallback(() => {
    if (!A.current || !O.current)
      return;
    const D = {
      placement: t,
      strategy: i,
      middleware: M
    };
    E.current && (D.platform = E.current), zg(A.current, O.current, D).then((G) => {
      const L = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      u.current && !Jn(z.current, L) && (z.current = L, hs.flushSync(() => {
        g(L);
      }));
    });
  }, [M, t, i, E, k]);
  Pn(() => {
    h === !1 && z.current.isPositioned && (z.current.isPositioned = !1, g((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [h]);
  const u = re.useRef(!1);
  Pn(() => (u.current = !0, () => {
    u.current = !1;
  }), []), Pn(() => {
    if (I && (A.current = I), C && (O.current = C), I && C) {
      if (F.current)
        return F.current(I, C, v);
      v();
    }
  }, [I, C, v, F, H]);
  const c = re.useMemo(() => ({
    reference: A,
    floating: O,
    setReference: d,
    setFloating: x
  }), [d, x]), w = re.useMemo(() => ({
    reference: I,
    floating: C
  }), [I, C]), T = re.useMemo(() => {
    const D = {
      position: i,
      left: 0,
      top: 0
    };
    if (!w.floating)
      return D;
    const G = vl(w.floating, m.x), L = vl(w.floating, m.y);
    return a ? {
      ...D,
      transform: "translate(" + G + "px, " + L + "px)",
      ...iu(w.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: i,
      left: G,
      top: L
    };
  }, [i, a, w.floating, m.x, m.y]);
  return re.useMemo(() => ({
    ...m,
    update: v,
    refs: c,
    elements: w,
    floatingStyles: T
  }), [m, v, c, w, T]);
}
const p0 = (e) => {
  function t(i) {
    return {}.hasOwnProperty.call(i, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(i) {
      const {
        element: n,
        padding: r
      } = typeof e == "function" ? e(i) : e;
      return n && t(n) ? n.current != null ? Ya({
        element: n.current,
        padding: r
      }).fn(i) : {} : n ? Ya({
        element: n,
        padding: r
      }).fn(i) : {};
    }
  };
}, g0 = (e, t) => ({
  ..._g(e),
  options: [e, t]
}), m0 = (e, t) => ({
  ...Vg(e),
  options: [e, t]
}), b0 = (e, t) => ({
  ...Hg(e),
  options: [e, t]
}), v0 = (e, t) => ({
  ...Gg(e),
  options: [e, t]
}), y0 = (e, t) => ({
  ...Wg(e),
  options: [e, t]
}), x0 = (e, t) => ({
  ...Xg(e),
  options: [e, t]
}), C0 = (e, t) => ({
  ...p0(e),
  options: [e, t]
});
var w0 = "Arrow", ru = re.forwardRef((e, t) => {
  const { children: i, width: n = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ oe.jsx(
    Qe.svg,
    {
      ...s,
      ref: t,
      width: n,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? i : /* @__PURE__ */ oe.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ru.displayName = w0;
var S0 = ru;
function nu(e) {
  const [t, i] = re.useState(void 0);
  return St(() => {
    if (e) {
      i({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let o, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, h = Array.isArray(l) ? l[0] : l;
          o = h.inlineSize, a = h.blockSize;
        } else
          o = e.offsetWidth, a = e.offsetHeight;
        i({ width: o, height: a });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      i(void 0);
  }, [e]), t;
}
var oa = "Popper", [su, ou] = sa(oa), [I0, au] = su(oa), lu = (e) => {
  const { __scopePopper: t, children: i } = e, [n, r] = re.useState(null);
  return /* @__PURE__ */ oe.jsx(I0, { scope: t, anchor: n, onAnchorChange: r, children: i });
};
lu.displayName = oa;
var cu = "PopperAnchor", uu = re.forwardRef(
  (e, t) => {
    const { __scopePopper: i, virtualRef: n, ...r } = e, s = au(cu, i), o = re.useRef(null), a = ot(t, o);
    return re.useEffect(() => {
      s.onAnchorChange((n == null ? void 0 : n.current) || o.current);
    }), n ? null : /* @__PURE__ */ oe.jsx(Qe.div, { ...r, ref: a });
  }
);
uu.displayName = cu;
var aa = "PopperContent", [A0, E0] = su(aa), du = re.forwardRef(
  (e, t) => {
    var le, R, P, W, q, p;
    const {
      __scopePopper: i,
      side: n = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: o = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: h = [],
      collisionPadding: m = 0,
      sticky: g = "partial",
      hideWhenDetached: M = !1,
      updatePositionStrategy: N = "optimized",
      onPlaced: f,
      ...b
    } = e, S = au(aa, i), [y, d] = re.useState(null), x = ot(t, (j) => d(j)), [I, C] = re.useState(null), A = nu(I), O = (A == null ? void 0 : A.width) ?? 0, z = (A == null ? void 0 : A.height) ?? 0, H = n + (s !== "center" ? "-" + s : ""), F = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, E = Array.isArray(h) ? h : [h], k = E.length > 0, v = {
      padding: F,
      boundary: E.filter(k0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: u, floatingStyles: c, placement: w, isPositioned: T, middlewareData: D } = f0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: H,
      whileElementsMounted: (...j) => Ic(...j, {
        animationFrame: N === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        g0({ mainAxis: r + z, alignmentAxis: o }),
        l && m0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: g === "partial" ? b0() : void 0,
          ...v
        }),
        l && v0({ ...v }),
        y0({
          ...v,
          apply: ({ elements: j, rects: B, availableWidth: Z, availableHeight: Y }) => {
            const { width: ne, height: V } = B.reference, $ = j.floating.style;
            $.setProperty("--radix-popper-available-width", `${Z}px`), $.setProperty("--radix-popper-available-height", `${Y}px`), $.setProperty("--radix-popper-anchor-width", `${ne}px`), $.setProperty("--radix-popper-anchor-height", `${V}px`);
          }
        }),
        I && C0({ element: I, padding: a }),
        M0({ arrowWidth: O, arrowHeight: z }),
        M && x0({ strategy: "referenceHidden", ...v })
      ]
    }), [G, L] = pu(w), J = Ct(f);
    St(() => {
      T && (J == null || J());
    }, [T, J]);
    const se = (le = D.arrow) == null ? void 0 : le.x, _ = (R = D.arrow) == null ? void 0 : R.y, X = ((P = D.arrow) == null ? void 0 : P.centerOffset) !== 0, [U, te] = re.useState();
    return St(() => {
      y && te(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ oe.jsx(
      "div",
      {
        ref: u.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...c,
          transform: T ? c.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U,
          "--radix-popper-transform-origin": [
            (W = D.transformOrigin) == null ? void 0 : W.x,
            (q = D.transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((p = D.hide) == null ? void 0 : p.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ oe.jsx(
          A0,
          {
            scope: i,
            placedSide: G,
            onArrowChange: C,
            arrowX: se,
            arrowY: _,
            shouldHideArrow: X,
            children: /* @__PURE__ */ oe.jsx(
              Qe.div,
              {
                "data-side": G,
                "data-align": L,
                ...b,
                ref: x,
                style: {
                  ...b.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: T ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
du.displayName = aa;
var hu = "PopperArrow", T0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fu = re.forwardRef(function(t, i) {
  const { __scopePopper: n, ...r } = t, s = E0(hu, n), o = T0[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ oe.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [o]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ oe.jsx(
          S0,
          {
            ...r,
            ref: i,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
fu.displayName = hu;
function k0(e) {
  return e !== null;
}
var M0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, y, d;
    const { placement: i, rects: n, middlewareData: r } = t, o = ((S = r.arrow) == null ? void 0 : S.centerOffset) !== 0, a = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [h, m] = pu(i), g = { start: "0%", center: "50%", end: "100%" }[m], M = (((y = r.arrow) == null ? void 0 : y.x) ?? 0) + a / 2, N = (((d = r.arrow) == null ? void 0 : d.y) ?? 0) + l / 2;
    let f = "", b = "";
    return h === "bottom" ? (f = o ? g : `${M}px`, b = `${-l}px`) : h === "top" ? (f = o ? g : `${M}px`, b = `${n.floating.height + l}px`) : h === "right" ? (f = `${-l}px`, b = o ? g : `${N}px`) : h === "left" && (f = `${n.floating.width + l}px`, b = o ? g : `${N}px`), { data: { x: f, y: b } };
  }
});
function pu(e) {
  const [t, i = "center"] = e.split("-");
  return [t, i];
}
var P0 = lu, R0 = uu, O0 = du, L0 = fu, N0 = "Portal", gu = re.forwardRef((e, t) => {
  var a;
  const { container: i, ...n } = e, [r, s] = re.useState(!1);
  St(() => s(!0), []);
  const o = i || r && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return o ? jh.createPortal(/* @__PURE__ */ oe.jsx(Qe.div, { ...n, ref: t }), o) : null;
});
gu.displayName = N0;
function Gr({
  prop: e,
  defaultProp: t,
  onChange: i = () => {
  }
}) {
  const [n, r] = D0({ defaultProp: t, onChange: i }), s = e !== void 0, o = s ? e : n, a = Ct(i), l = re.useCallback(
    (h) => {
      if (s) {
        const g = typeof h == "function" ? h(e) : h;
        g !== e && a(g);
      } else
        r(h);
    },
    [s, e, r, a]
  );
  return [o, l];
}
function D0({
  defaultProp: e,
  onChange: t
}) {
  const i = re.useState(e), [n] = i, r = re.useRef(n), s = Ct(t);
  return re.useEffect(() => {
    r.current !== n && (s(n), r.current = n);
  }, [n, r, s]), i;
}
function mu(e) {
  const t = re.useRef({ value: e, previous: e });
  return re.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var B0 = "VisuallyHidden", bu = re.forwardRef(
  (e, t) => /* @__PURE__ */ oe.jsx(
    Qe.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
bu.displayName = B0;
var j0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qi = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), xn = {}, Qs = 0, vu = function(e) {
  return e && (e.host || vu(e.parentNode));
}, F0 = function(e, t) {
  return t.map(function(i) {
    if (e.contains(i))
      return i;
    var n = vu(i);
    return n && e.contains(n) ? n : (console.error("aria-hidden", i, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(i) {
    return !!i;
  });
}, _0 = function(e, t, i, n) {
  var r = F0(t, Array.isArray(e) ? e : [e]);
  xn[i] || (xn[i] = /* @__PURE__ */ new WeakMap());
  var s = xn[i], o = [], a = /* @__PURE__ */ new Set(), l = new Set(r), h = function(g) {
    !g || a.has(g) || (a.add(g), h(g.parentNode));
  };
  r.forEach(h);
  var m = function(g) {
    !g || l.has(g) || Array.prototype.forEach.call(g.children, function(M) {
      if (a.has(M))
        m(M);
      else
        try {
          var N = M.getAttribute(n), f = N !== null && N !== "false", b = (qi.get(M) || 0) + 1, S = (s.get(M) || 0) + 1;
          qi.set(M, b), s.set(M, S), o.push(M), b === 1 && f && yn.set(M, !0), S === 1 && M.setAttribute(i, "true"), f || M.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", M, y);
        }
    });
  };
  return m(t), a.clear(), Qs++, function() {
    o.forEach(function(g) {
      var M = qi.get(g) - 1, N = s.get(g) - 1;
      qi.set(g, M), s.set(g, N), M || (yn.has(g) || g.removeAttribute(n), yn.delete(g)), N || g.removeAttribute(i);
    }), Qs--, Qs || (qi = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), xn = {});
  };
}, V0 = function(e, t, i) {
  i === void 0 && (i = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), r = t || j0(e);
  return r ? (n.push.apply(n, Array.from(r.querySelectorAll("[aria-live]"))), _0(n, r, i, "aria-hidden")) : function() {
    return null;
  };
}, ei = function() {
  return ei = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, ei.apply(this, arguments);
};
function yu(e, t) {
  var i = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (i[n[r]] = e[n[r]]);
  return i;
}
function G0(e, t, i) {
  if (i || arguments.length === 2)
    for (var n = 0, r = t.length, s; n < r; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Rn = "right-scroll-bar-position", On = "width-before-scroll-bar", W0 = "with-scroll-bars-hidden", X0 = "--removed-body-scroll-bar-size";
function Ks(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function H0(e, t) {
  var i = Dt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return i.value;
        },
        set current(n) {
          var r = i.value;
          r !== n && (i.value = n, i.callback(n, r));
        }
      }
    };
  })[0];
  return i.callback = t, i.facade;
}
var z0 = typeof window < "u" ? re.useLayoutEffect : re.useEffect, yl = /* @__PURE__ */ new WeakMap();
function Z0(e, t) {
  var i = H0(t || null, function(n) {
    return e.forEach(function(r) {
      return Ks(r, n);
    });
  });
  return z0(function() {
    var n = yl.get(i);
    if (n) {
      var r = new Set(n), s = new Set(e), o = i.current;
      r.forEach(function(a) {
        s.has(a) || Ks(a, null);
      }), s.forEach(function(a) {
        r.has(a) || Ks(a, o);
      });
    }
    yl.set(i, e);
  }, [e]), i;
}
function Y0(e) {
  return e;
}
function U0(e, t) {
  t === void 0 && (t = Y0);
  var i = [], n = !1, r = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return i.length ? i[i.length - 1] : e;
    },
    useMedium: function(s) {
      var o = t(s, n);
      return i.push(o), function() {
        i = i.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; i.length; ) {
        var o = i;
        i = [], o.forEach(s);
      }
      i = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return i;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var o = [];
      if (i.length) {
        var a = i;
        i = [], a.forEach(s), o = i;
      }
      var l = function() {
        var m = o;
        o = [], m.forEach(s);
      }, h = function() {
        return Promise.resolve().then(l);
      };
      h(), i = {
        push: function(m) {
          o.push(m), h();
        },
        filter: function(m) {
          return o = o.filter(m), i;
        }
      };
    }
  };
  return r;
}
function $0(e) {
  e === void 0 && (e = {});
  var t = U0(null);
  return t.options = ei({ async: !0, ssr: !1 }, e), t;
}
var xu = function(e) {
  var t = e.sideCar, i = yu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return re.createElement(n, ei({}, i));
};
xu.isSideCarExport = !0;
function J0(e, t) {
  return e.useMedium(t), xu;
}
var Cu = $0(), qs = function() {
}, Ss = re.forwardRef(function(e, t) {
  var i = re.useRef(null), n = re.useState({
    onScrollCapture: qs,
    onWheelCapture: qs,
    onTouchMoveCapture: qs
  }), r = n[0], s = n[1], o = e.forwardProps, a = e.children, l = e.className, h = e.removeScrollBar, m = e.enabled, g = e.shards, M = e.sideCar, N = e.noIsolation, f = e.inert, b = e.allowPinchZoom, S = e.as, y = S === void 0 ? "div" : S, d = e.gapMode, x = yu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), I = M, C = Z0([i, t]), A = ei(ei({}, x), r);
  return re.createElement(
    re.Fragment,
    null,
    m && re.createElement(I, { sideCar: Cu, removeScrollBar: h, shards: g, noIsolation: N, inert: f, setCallbacks: s, allowPinchZoom: !!b, lockRef: i, gapMode: d }),
    o ? re.cloneElement(re.Children.only(a), ei(ei({}, A), { ref: C })) : re.createElement(y, ei({}, A, { className: l, ref: C }), a)
  );
});
Ss.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ss.classNames = {
  fullWidth: On,
  zeroRight: Rn
};
var xl, Q0 = function() {
  if (xl)
    return xl;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function K0() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Q0();
  return t && e.setAttribute("nonce", t), e;
}
function q0(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ey(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ty = function() {
  var e = 0, t = null;
  return {
    add: function(i) {
      e == 0 && (t = K0()) && (q0(t, i), ey(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, iy = function() {
  var e = ty();
  return function(t, i) {
    re.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && i]);
  };
}, wu = function() {
  var e = iy(), t = function(i) {
    var n = i.styles, r = i.dynamic;
    return e(n, r), null;
  };
  return t;
}, ry = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, eo = function(e) {
  return parseInt(e || "", 10) || 0;
}, ny = function(e) {
  var t = window.getComputedStyle(document.body), i = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [eo(i), eo(n), eo(r)];
}, sy = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ry;
  var t = ny(e), i = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - i + t[2] - t[0])
  };
}, oy = wu(), lr = "data-scroll-locked", ay = function(e, t, i, n) {
  var r = e.left, s = e.top, o = e.right, a = e.gap;
  return i === void 0 && (i = "margin"), `
  .`.concat(W0, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body[`).concat(lr, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    i === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    i === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Rn, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(On, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Rn, " .").concat(Rn, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(On, " .").concat(On, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(lr, `] {
    `).concat(X0, ": ").concat(a, `px;
  }
`);
}, Cl = function() {
  var e = parseInt(document.body.getAttribute(lr) || "0", 10);
  return isFinite(e) ? e : 0;
}, ly = function() {
  re.useEffect(function() {
    return document.body.setAttribute(lr, (Cl() + 1).toString()), function() {
      var e = Cl() - 1;
      e <= 0 ? document.body.removeAttribute(lr) : document.body.setAttribute(lr, e.toString());
    };
  }, []);
}, cy = function(e) {
  var t = e.noRelative, i = e.noImportant, n = e.gapMode, r = n === void 0 ? "margin" : n;
  ly();
  var s = re.useMemo(function() {
    return sy(r);
  }, [r]);
  return re.createElement(oy, { styles: ay(s, !t, r, i ? "" : "!important") });
}, Eo = !1;
if (typeof window < "u")
  try {
    var Cn = Object.defineProperty({}, "passive", {
      get: function() {
        return Eo = !0, !0;
      }
    });
    window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
  } catch {
    Eo = !1;
  }
var er = Eo ? { passive: !1 } : !1, uy = function(e) {
  return e.tagName === "TEXTAREA";
}, Su = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var i = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    i[t] !== "hidden" && // contains scroll inside self
    !(i.overflowY === i.overflowX && !uy(e) && i[t] === "visible")
  );
}, dy = function(e) {
  return Su(e, "overflowY");
}, hy = function(e) {
  return Su(e, "overflowX");
}, wl = function(e, t) {
  var i = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Iu(e, n);
    if (r) {
      var s = Au(e, n), o = s[1], a = s[2];
      if (o > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== i.body);
  return !1;
}, fy = function(e) {
  var t = e.scrollTop, i = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    i,
    n
  ];
}, py = function(e) {
  var t = e.scrollLeft, i = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    i,
    n
  ];
}, Iu = function(e, t) {
  return e === "v" ? dy(t) : hy(t);
}, Au = function(e, t) {
  return e === "v" ? fy(t) : py(t);
}, gy = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, my = function(e, t, i, n, r) {
  var s = gy(e, window.getComputedStyle(t).direction), o = s * n, a = i.target, l = t.contains(a), h = !1, m = o > 0, g = 0, M = 0;
  do {
    var N = Au(e, a), f = N[0], b = N[1], S = N[2], y = b - S - s * f;
    (f || y) && Iu(e, a) && (g += y, M += f), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (m && (r && Math.abs(g) < 1 || !r && o > g) || !m && (r && Math.abs(M) < 1 || !r && -o > M)) && (h = !0), h;
}, wn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Sl = function(e) {
  return [e.deltaX, e.deltaY];
}, Il = function(e) {
  return e && "current" in e ? e.current : e;
}, by = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, vy = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, yy = 0, tr = [];
function xy(e) {
  var t = re.useRef([]), i = re.useRef([0, 0]), n = re.useRef(), r = re.useState(yy++)[0], s = re.useState(wu)[0], o = re.useRef(e);
  re.useEffect(function() {
    o.current = e;
  }, [e]), re.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var b = G0([e.lockRef.current], (e.shards || []).map(Il), !0).filter(Boolean);
      return b.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), b.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = re.useCallback(function(b, S) {
    if ("touches" in b && b.touches.length === 2 || b.type === "wheel" && b.ctrlKey)
      return !o.current.allowPinchZoom;
    var y = wn(b), d = i.current, x = "deltaX" in b ? b.deltaX : d[0] - y[0], I = "deltaY" in b ? b.deltaY : d[1] - y[1], C, A = b.target, O = Math.abs(x) > Math.abs(I) ? "h" : "v";
    if ("touches" in b && O === "h" && A.type === "range")
      return !1;
    var z = wl(O, A);
    if (!z)
      return !0;
    if (z ? C = O : (C = O === "v" ? "h" : "v", z = wl(O, A)), !z)
      return !1;
    if (!n.current && "changedTouches" in b && (x || I) && (n.current = C), !C)
      return !0;
    var H = n.current || C;
    return my(H, S, b, H === "h" ? x : I, !0);
  }, []), l = re.useCallback(function(b) {
    var S = b;
    if (!(!tr.length || tr[tr.length - 1] !== s)) {
      var y = "deltaY" in S ? Sl(S) : wn(S), d = t.current.filter(function(C) {
        return C.name === S.type && (C.target === S.target || S.target === C.shadowParent) && by(C.delta, y);
      })[0];
      if (d && d.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!d) {
        var x = (o.current.shards || []).map(Il).filter(Boolean).filter(function(C) {
          return C.contains(S.target);
        }), I = x.length > 0 ? a(S, x[0]) : !o.current.noIsolation;
        I && S.cancelable && S.preventDefault();
      }
    }
  }, []), h = re.useCallback(function(b, S, y, d) {
    var x = { name: b, delta: S, target: y, should: d, shadowParent: Cy(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(I) {
        return I !== x;
      });
    }, 1);
  }, []), m = re.useCallback(function(b) {
    i.current = wn(b), n.current = void 0;
  }, []), g = re.useCallback(function(b) {
    h(b.type, Sl(b), b.target, a(b, e.lockRef.current));
  }, []), M = re.useCallback(function(b) {
    h(b.type, wn(b), b.target, a(b, e.lockRef.current));
  }, []);
  re.useEffect(function() {
    return tr.push(s), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: M
    }), document.addEventListener("wheel", l, er), document.addEventListener("touchmove", l, er), document.addEventListener("touchstart", m, er), function() {
      tr = tr.filter(function(b) {
        return b !== s;
      }), document.removeEventListener("wheel", l, er), document.removeEventListener("touchmove", l, er), document.removeEventListener("touchstart", m, er);
    };
  }, []);
  var N = e.removeScrollBar, f = e.inert;
  return re.createElement(
    re.Fragment,
    null,
    f ? re.createElement(s, { styles: vy(r) }) : null,
    N ? re.createElement(cy, { gapMode: e.gapMode }) : null
  );
}
function Cy(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const wy = J0(Cu, xy);
var Eu = re.forwardRef(function(e, t) {
  return re.createElement(Ss, ei({}, e, { ref: t, sideCar: wy }));
});
Eu.classNames = Ss.classNames;
const Sy = Eu;
var Iy = [" ", "Enter", "ArrowUp", "ArrowDown"], Ay = [" ", "Enter"], an = "Select", [Is, As, Ey] = Jc(an), [Cr, TC] = Cs(an, [
  Ey,
  ou
]), Es = ou(), [Ty, Fi] = Cr(an), [ky, My] = Cr(an), Tu = (e) => {
  const {
    __scopeSelect: t,
    children: i,
    open: n,
    defaultOpen: r,
    onOpenChange: s,
    value: o,
    defaultValue: a,
    onValueChange: l,
    dir: h,
    name: m,
    autoComplete: g,
    disabled: M,
    required: N,
    form: f
  } = e, b = Es(t), [S, y] = re.useState(null), [d, x] = re.useState(null), [I, C] = re.useState(!1), A = ws(h), [O = !1, z] = Gr({
    prop: n,
    defaultProp: r,
    onChange: s
  }), [H, F] = Gr({
    prop: o,
    defaultProp: a,
    onChange: l
  }), E = re.useRef(null), k = S ? f || !!S.closest("form") : !0, [v, u] = re.useState(/* @__PURE__ */ new Set()), c = Array.from(v).map((w) => w.props.value).join(";");
  return /* @__PURE__ */ oe.jsx(P0, { ...b, children: /* @__PURE__ */ oe.jsxs(
    Ty,
    {
      required: N,
      scope: t,
      trigger: S,
      onTriggerChange: y,
      valueNode: d,
      onValueNodeChange: x,
      valueNodeHasChildren: I,
      onValueNodeHasChildrenChange: C,
      contentId: on(),
      value: H,
      onValueChange: F,
      open: O,
      onOpenChange: z,
      dir: A,
      triggerPointerDownPosRef: E,
      disabled: M,
      children: [
        /* @__PURE__ */ oe.jsx(Is.Provider, { scope: t, children: /* @__PURE__ */ oe.jsx(
          ky,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: re.useCallback((w) => {
              u((T) => new Set(T).add(w));
            }, []),
            onNativeOptionRemove: re.useCallback((w) => {
              u((T) => {
                const D = new Set(T);
                return D.delete(w), D;
              });
            }, []),
            children: i
          }
        ) }),
        k ? /* @__PURE__ */ oe.jsxs(
          Ku,
          {
            "aria-hidden": !0,
            required: N,
            tabIndex: -1,
            name: m,
            autoComplete: g,
            value: H,
            onChange: (w) => F(w.target.value),
            disabled: M,
            form: f,
            children: [
              H === void 0 ? /* @__PURE__ */ oe.jsx("option", { value: "" }) : null,
              Array.from(v)
            ]
          },
          c
        ) : null
      ]
    }
  ) });
};
Tu.displayName = an;
var ku = "SelectTrigger", Mu = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, disabled: n = !1, ...r } = e, s = Es(i), o = Fi(ku, i), a = o.disabled || n, l = ot(t, o.onTriggerChange), h = As(i), m = re.useRef("touch"), [g, M, N] = qu((b) => {
      const S = h().filter((x) => !x.disabled), y = S.find((x) => x.value === o.value), d = ed(S, b, y);
      d !== void 0 && o.onValueChange(d.value);
    }), f = (b) => {
      a || (o.onOpenChange(!0), N()), b && (o.triggerPointerDownPosRef.current = {
        x: Math.round(b.pageX),
        y: Math.round(b.pageY)
      });
    };
    return /* @__PURE__ */ oe.jsx(R0, { asChild: !0, ...s, children: /* @__PURE__ */ oe.jsx(
      Qe.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": o.contentId,
        "aria-expanded": o.open,
        "aria-required": o.required,
        "aria-autocomplete": "none",
        dir: o.dir,
        "data-state": o.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": Qu(o.value) ? "" : void 0,
        ...r,
        ref: l,
        onClick: Ye(r.onClick, (b) => {
          b.currentTarget.focus(), m.current !== "mouse" && f(b);
        }),
        onPointerDown: Ye(r.onPointerDown, (b) => {
          m.current = b.pointerType;
          const S = b.target;
          S.hasPointerCapture(b.pointerId) && S.releasePointerCapture(b.pointerId), b.button === 0 && b.ctrlKey === !1 && b.pointerType === "mouse" && (f(b), b.preventDefault());
        }),
        onKeyDown: Ye(r.onKeyDown, (b) => {
          const S = g.current !== "";
          !(b.ctrlKey || b.altKey || b.metaKey) && b.key.length === 1 && M(b.key), !(S && b.key === " ") && Iy.includes(b.key) && (f(), b.preventDefault());
        })
      }
    ) });
  }
);
Mu.displayName = ku;
var Pu = "SelectValue", Ru = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, className: n, style: r, children: s, placeholder: o = "", ...a } = e, l = Fi(Pu, i), { onValueNodeHasChildrenChange: h } = l, m = s !== void 0, g = ot(t, l.onValueNodeChange);
    return St(() => {
      h(m);
    }, [h, m]), /* @__PURE__ */ oe.jsx(
      Qe.span,
      {
        ...a,
        ref: g,
        style: { pointerEvents: "none" },
        children: Qu(l.value) ? /* @__PURE__ */ oe.jsx(oe.Fragment, { children: o }) : s
      }
    );
  }
);
Ru.displayName = Pu;
var Py = "SelectIcon", Ou = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, children: n, ...r } = e;
    return /* @__PURE__ */ oe.jsx(Qe.span, { "aria-hidden": !0, ...r, ref: t, children: n || "▼" });
  }
);
Ou.displayName = Py;
var Ry = "SelectPortal", Lu = (e) => /* @__PURE__ */ oe.jsx(gu, { asChild: !0, ...e });
Lu.displayName = Ry;
var Yi = "SelectContent", Nu = re.forwardRef(
  (e, t) => {
    const i = Fi(Yi, e.__scopeSelect), [n, r] = re.useState();
    if (St(() => {
      r(new DocumentFragment());
    }, []), !i.open) {
      const s = n;
      return s ? hs.createPortal(
        /* @__PURE__ */ oe.jsx(Du, { scope: e.__scopeSelect, children: /* @__PURE__ */ oe.jsx(Is.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ oe.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ oe.jsx(Bu, { ...e, ref: t });
  }
);
Nu.displayName = Yi;
var Ht = 10, [Du, _i] = Cr(Yi), Oy = "SelectContentImpl", Bu = re.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: i,
      position: n = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: s,
      onPointerDownOutside: o,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: h,
      alignOffset: m,
      arrowPadding: g,
      collisionBoundary: M,
      collisionPadding: N,
      sticky: f,
      hideWhenDetached: b,
      avoidCollisions: S,
      //
      ...y
    } = e, d = Fi(Yi, i), [x, I] = re.useState(null), [C, A] = re.useState(null), O = ot(t, (le) => I(le)), [z, H] = re.useState(null), [F, E] = re.useState(
      null
    ), k = As(i), [v, u] = re.useState(!1), c = re.useRef(!1);
    re.useEffect(() => {
      if (x)
        return V0(x);
    }, [x]), r0();
    const w = re.useCallback(
      (le) => {
        const [R, ...P] = k().map((p) => p.ref.current), [W] = P.slice(-1), q = document.activeElement;
        for (const p of le)
          if (p === q || (p == null || p.scrollIntoView({ block: "nearest" }), p === R && C && (C.scrollTop = 0), p === W && C && (C.scrollTop = C.scrollHeight), p == null || p.focus(), document.activeElement !== q))
            return;
      },
      [k, C]
    ), T = re.useCallback(
      () => w([z, x]),
      [w, z, x]
    );
    re.useEffect(() => {
      v && T();
    }, [v, T]);
    const { onOpenChange: D, triggerPointerDownPosRef: G } = d;
    re.useEffect(() => {
      if (x) {
        let le = { x: 0, y: 0 };
        const R = (W) => {
          var q, p;
          le = {
            x: Math.abs(Math.round(W.pageX) - (((q = G.current) == null ? void 0 : q.x) ?? 0)),
            y: Math.abs(Math.round(W.pageY) - (((p = G.current) == null ? void 0 : p.y) ?? 0))
          };
        }, P = (W) => {
          le.x <= 10 && le.y <= 10 ? W.preventDefault() : x.contains(W.target) || D(!1), document.removeEventListener("pointermove", R), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", R), document.addEventListener("pointerup", P, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", R), document.removeEventListener("pointerup", P, { capture: !0 });
        };
      }
    }, [x, D, G]), re.useEffect(() => {
      const le = () => D(!1);
      return window.addEventListener("blur", le), window.addEventListener("resize", le), () => {
        window.removeEventListener("blur", le), window.removeEventListener("resize", le);
      };
    }, [D]);
    const [L, J] = qu((le) => {
      const R = k().filter((q) => !q.disabled), P = R.find((q) => q.ref.current === document.activeElement), W = ed(R, le, P);
      W && setTimeout(() => W.ref.current.focus());
    }), se = re.useCallback(
      (le, R, P) => {
        const W = !c.current && !P;
        (d.value !== void 0 && d.value === R || W) && (H(le), W && (c.current = !0));
      },
      [d.value]
    ), _ = re.useCallback(() => x == null ? void 0 : x.focus(), [x]), X = re.useCallback(
      (le, R, P) => {
        const W = !c.current && !P;
        (d.value !== void 0 && d.value === R || W) && E(le);
      },
      [d.value]
    ), U = n === "popper" ? To : ju, te = U === To ? {
      side: a,
      sideOffset: l,
      align: h,
      alignOffset: m,
      arrowPadding: g,
      collisionBoundary: M,
      collisionPadding: N,
      sticky: f,
      hideWhenDetached: b,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ oe.jsx(
      Du,
      {
        scope: i,
        content: x,
        viewport: C,
        onViewportChange: A,
        itemRefCallback: se,
        selectedItem: z,
        onItemLeave: _,
        itemTextRefCallback: X,
        focusSelectedItem: T,
        selectedItemText: F,
        position: n,
        isPositioned: v,
        searchRef: L,
        children: /* @__PURE__ */ oe.jsx(Sy, { as: Zi, allowPinchZoom: !0, children: /* @__PURE__ */ oe.jsx(
          eu,
          {
            asChild: !0,
            trapped: d.open,
            onMountAutoFocus: (le) => {
              le.preventDefault();
            },
            onUnmountAutoFocus: Ye(r, (le) => {
              var R;
              (R = d.trigger) == null || R.focus({ preventScroll: !0 }), le.preventDefault();
            }),
            children: /* @__PURE__ */ oe.jsx(
              Kc,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: o,
                onFocusOutside: (le) => le.preventDefault(),
                onDismiss: () => d.onOpenChange(!1),
                children: /* @__PURE__ */ oe.jsx(
                  U,
                  {
                    role: "listbox",
                    id: d.contentId,
                    "data-state": d.open ? "open" : "closed",
                    dir: d.dir,
                    onContextMenu: (le) => le.preventDefault(),
                    ...y,
                    ...te,
                    onPlaced: () => u(!0),
                    ref: O,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: Ye(y.onKeyDown, (le) => {
                      const R = le.ctrlKey || le.altKey || le.metaKey;
                      if (le.key === "Tab" && le.preventDefault(), !R && le.key.length === 1 && J(le.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(le.key)) {
                        let W = k().filter((q) => !q.disabled).map((q) => q.ref.current);
                        if (["ArrowUp", "End"].includes(le.key) && (W = W.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(le.key)) {
                          const q = le.target, p = W.indexOf(q);
                          W = W.slice(p + 1);
                        }
                        setTimeout(() => w(W)), le.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Bu.displayName = Oy;
var Ly = "SelectItemAlignedPosition", ju = re.forwardRef((e, t) => {
  const { __scopeSelect: i, onPlaced: n, ...r } = e, s = Fi(Yi, i), o = _i(Yi, i), [a, l] = re.useState(null), [h, m] = re.useState(null), g = ot(t, (O) => m(O)), M = As(i), N = re.useRef(!1), f = re.useRef(!0), { viewport: b, selectedItem: S, selectedItemText: y, focusSelectedItem: d } = o, x = re.useCallback(() => {
    if (s.trigger && s.valueNode && a && h && b && S && y) {
      const O = s.trigger.getBoundingClientRect(), z = h.getBoundingClientRect(), H = s.valueNode.getBoundingClientRect(), F = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const q = F.left - z.left, p = H.left - q, j = O.left - p, B = O.width + j, Z = Math.max(B, z.width), Y = window.innerWidth - Ht, ne = So(p, [
          Ht,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ht, Y - Z)
        ]);
        a.style.minWidth = B + "px", a.style.left = ne + "px";
      } else {
        const q = z.right - F.right, p = window.innerWidth - H.right - q, j = window.innerWidth - O.right - p, B = O.width + j, Z = Math.max(B, z.width), Y = window.innerWidth - Ht, ne = So(p, [
          Ht,
          Math.max(Ht, Y - Z)
        ]);
        a.style.minWidth = B + "px", a.style.right = ne + "px";
      }
      const E = M(), k = window.innerHeight - Ht * 2, v = b.scrollHeight, u = window.getComputedStyle(h), c = parseInt(u.borderTopWidth, 10), w = parseInt(u.paddingTop, 10), T = parseInt(u.borderBottomWidth, 10), D = parseInt(u.paddingBottom, 10), G = c + w + v + D + T, L = Math.min(S.offsetHeight * 5, G), J = window.getComputedStyle(b), se = parseInt(J.paddingTop, 10), _ = parseInt(J.paddingBottom, 10), X = O.top + O.height / 2 - Ht, U = k - X, te = S.offsetHeight / 2, le = S.offsetTop + te, R = c + w + le, P = G - R;
      if (R <= X) {
        const q = E.length > 0 && S === E[E.length - 1].ref.current;
        a.style.bottom = "0px";
        const p = h.clientHeight - b.offsetTop - b.offsetHeight, j = Math.max(
          U,
          te + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (q ? _ : 0) + p + T
        ), B = R + j;
        a.style.height = B + "px";
      } else {
        const q = E.length > 0 && S === E[0].ref.current;
        a.style.top = "0px";
        const j = Math.max(
          X,
          c + b.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (q ? se : 0) + te
        ) + P;
        a.style.height = j + "px", b.scrollTop = R - X + b.offsetTop;
      }
      a.style.margin = `${Ht}px 0`, a.style.minHeight = L + "px", a.style.maxHeight = k + "px", n == null || n(), requestAnimationFrame(() => N.current = !0);
    }
  }, [
    M,
    s.trigger,
    s.valueNode,
    a,
    h,
    b,
    S,
    y,
    s.dir,
    n
  ]);
  St(() => x(), [x]);
  const [I, C] = re.useState();
  St(() => {
    h && C(window.getComputedStyle(h).zIndex);
  }, [h]);
  const A = re.useCallback(
    (O) => {
      O && f.current === !0 && (x(), d == null || d(), f.current = !1);
    },
    [x, d]
  );
  return /* @__PURE__ */ oe.jsx(
    Dy,
    {
      scope: i,
      contentWrapper: a,
      shouldExpandOnScrollRef: N,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ oe.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: I
          },
          children: /* @__PURE__ */ oe.jsx(
            Qe.div,
            {
              ...r,
              ref: g,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...r.style
              }
            }
          )
        }
      )
    }
  );
});
ju.displayName = Ly;
var Ny = "SelectPopperPosition", To = re.forwardRef((e, t) => {
  const {
    __scopeSelect: i,
    align: n = "start",
    collisionPadding: r = Ht,
    ...s
  } = e, o = Es(i);
  return /* @__PURE__ */ oe.jsx(
    O0,
    {
      ...o,
      ...s,
      ref: t,
      align: n,
      collisionPadding: r,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
To.displayName = Ny;
var [Dy, la] = Cr(Yi, {}), ko = "SelectViewport", Fu = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, nonce: n, ...r } = e, s = _i(ko, i), o = la(ko, i), a = ot(t, s.onViewportChange), l = re.useRef(0);
    return /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
      /* @__PURE__ */ oe.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ oe.jsx(Is.Slot, { scope: i, children: /* @__PURE__ */ oe.jsx(
        Qe.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...r.style
          },
          onScroll: Ye(r.onScroll, (h) => {
            const m = h.currentTarget, { contentWrapper: g, shouldExpandOnScrollRef: M } = o;
            if (M != null && M.current && g) {
              const N = Math.abs(l.current - m.scrollTop);
              if (N > 0) {
                const f = window.innerHeight - Ht * 2, b = parseFloat(g.style.minHeight), S = parseFloat(g.style.height), y = Math.max(b, S);
                if (y < f) {
                  const d = y + N, x = Math.min(f, d), I = d - x;
                  g.style.height = x + "px", g.style.bottom === "0px" && (m.scrollTop = I > 0 ? I : 0, g.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Fu.displayName = ko;
var _u = "SelectGroup", [By, jy] = Cr(_u), Fy = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, ...n } = e, r = on();
    return /* @__PURE__ */ oe.jsx(By, { scope: i, id: r, children: /* @__PURE__ */ oe.jsx(Qe.div, { role: "group", "aria-labelledby": r, ...n, ref: t }) });
  }
);
Fy.displayName = _u;
var Vu = "SelectLabel", Gu = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, ...n } = e, r = jy(Vu, i);
    return /* @__PURE__ */ oe.jsx(Qe.div, { id: r.id, ...n, ref: t });
  }
);
Gu.displayName = Vu;
var Qn = "SelectItem", [_y, Wu] = Cr(Qn), Xu = re.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: i,
      value: n,
      disabled: r = !1,
      textValue: s,
      ...o
    } = e, a = Fi(Qn, i), l = _i(Qn, i), h = a.value === n, [m, g] = re.useState(s ?? ""), [M, N] = re.useState(!1), f = ot(
      t,
      (d) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, d, n, r);
      }
    ), b = on(), S = re.useRef("touch"), y = () => {
      r || (a.onValueChange(n), a.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ oe.jsx(
      _y,
      {
        scope: i,
        value: n,
        disabled: r,
        textId: b,
        isSelected: h,
        onItemTextChange: re.useCallback((d) => {
          g((x) => x || ((d == null ? void 0 : d.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ oe.jsx(
          Is.ItemSlot,
          {
            scope: i,
            value: n,
            disabled: r,
            textValue: m,
            children: /* @__PURE__ */ oe.jsx(
              Qe.div,
              {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": M ? "" : void 0,
                "aria-selected": h && M,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...o,
                ref: f,
                onFocus: Ye(o.onFocus, () => N(!0)),
                onBlur: Ye(o.onBlur, () => N(!1)),
                onClick: Ye(o.onClick, () => {
                  S.current !== "mouse" && y();
                }),
                onPointerUp: Ye(o.onPointerUp, () => {
                  S.current === "mouse" && y();
                }),
                onPointerDown: Ye(o.onPointerDown, (d) => {
                  S.current = d.pointerType;
                }),
                onPointerMove: Ye(o.onPointerMove, (d) => {
                  var x;
                  S.current = d.pointerType, r ? (x = l.onItemLeave) == null || x.call(l) : S.current === "mouse" && d.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Ye(o.onPointerLeave, (d) => {
                  var x;
                  d.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: Ye(o.onKeyDown, (d) => {
                  var I;
                  ((I = l.searchRef) == null ? void 0 : I.current) !== "" && d.key === " " || (Ay.includes(d.key) && y(), d.key === " " && d.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Xu.displayName = Qn;
var Rr = "SelectItemText", Hu = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, className: n, style: r, ...s } = e, o = Fi(Rr, i), a = _i(Rr, i), l = Wu(Rr, i), h = My(Rr, i), [m, g] = re.useState(null), M = ot(
      t,
      (y) => g(y),
      l.onItemTextChange,
      (y) => {
        var d;
        return (d = a.itemTextRefCallback) == null ? void 0 : d.call(a, y, l.value, l.disabled);
      }
    ), N = m == null ? void 0 : m.textContent, f = re.useMemo(
      () => /* @__PURE__ */ oe.jsx("option", { value: l.value, disabled: l.disabled, children: N }, l.value),
      [l.disabled, l.value, N]
    ), { onNativeOptionAdd: b, onNativeOptionRemove: S } = h;
    return St(() => (b(f), () => S(f)), [b, S, f]), /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
      /* @__PURE__ */ oe.jsx(Qe.span, { id: l.textId, ...s, ref: M }),
      l.isSelected && o.valueNode && !o.valueNodeHasChildren ? hs.createPortal(s.children, o.valueNode) : null
    ] });
  }
);
Hu.displayName = Rr;
var zu = "SelectItemIndicator", Zu = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, ...n } = e;
    return Wu(zu, i).isSelected ? /* @__PURE__ */ oe.jsx(Qe.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
Zu.displayName = zu;
var Mo = "SelectScrollUpButton", Yu = re.forwardRef((e, t) => {
  const i = _i(Mo, e.__scopeSelect), n = la(Mo, e.__scopeSelect), [r, s] = re.useState(!1), o = ot(t, n.onScrollButtonChange);
  return St(() => {
    if (i.viewport && i.isPositioned) {
      let a = function() {
        const h = l.scrollTop > 0;
        s(h);
      };
      const l = i.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [i.viewport, i.isPositioned]), r ? /* @__PURE__ */ oe.jsx(
    $u,
    {
      ...e,
      ref: o,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = i;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Yu.displayName = Mo;
var Po = "SelectScrollDownButton", Uu = re.forwardRef((e, t) => {
  const i = _i(Po, e.__scopeSelect), n = la(Po, e.__scopeSelect), [r, s] = re.useState(!1), o = ot(t, n.onScrollButtonChange);
  return St(() => {
    if (i.viewport && i.isPositioned) {
      let a = function() {
        const h = l.scrollHeight - l.clientHeight, m = Math.ceil(l.scrollTop) < h;
        s(m);
      };
      const l = i.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [i.viewport, i.isPositioned]), r ? /* @__PURE__ */ oe.jsx(
    $u,
    {
      ...e,
      ref: o,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = i;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Uu.displayName = Po;
var $u = re.forwardRef((e, t) => {
  const { __scopeSelect: i, onAutoScroll: n, ...r } = e, s = _i("SelectScrollButton", i), o = re.useRef(null), a = As(i), l = re.useCallback(() => {
    o.current !== null && (window.clearInterval(o.current), o.current = null);
  }, []);
  return re.useEffect(() => () => l(), [l]), St(() => {
    var m;
    const h = a().find((g) => g.ref.current === document.activeElement);
    (m = h == null ? void 0 : h.ref.current) == null || m.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ oe.jsx(
    Qe.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: Ye(r.onPointerDown, () => {
        o.current === null && (o.current = window.setInterval(n, 50));
      }),
      onPointerMove: Ye(r.onPointerMove, () => {
        var h;
        (h = s.onItemLeave) == null || h.call(s), o.current === null && (o.current = window.setInterval(n, 50));
      }),
      onPointerLeave: Ye(r.onPointerLeave, () => {
        l();
      })
    }
  );
}), Vy = "SelectSeparator", Ju = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, ...n } = e;
    return /* @__PURE__ */ oe.jsx(Qe.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Ju.displayName = Vy;
var Ro = "SelectArrow", Gy = re.forwardRef(
  (e, t) => {
    const { __scopeSelect: i, ...n } = e, r = Es(i), s = Fi(Ro, i), o = _i(Ro, i);
    return s.open && o.position === "popper" ? /* @__PURE__ */ oe.jsx(L0, { ...r, ...n, ref: t }) : null;
  }
);
Gy.displayName = Ro;
function Qu(e) {
  return e === "" || e === void 0;
}
var Ku = re.forwardRef(
  (e, t) => {
    const { value: i, ...n } = e, r = re.useRef(null), s = ot(t, r), o = mu(i);
    return re.useEffect(() => {
      const a = r.current, l = window.HTMLSelectElement.prototype, m = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (o !== i && m) {
        const g = new Event("change", { bubbles: !0 });
        m.call(a, i), a.dispatchEvent(g);
      }
    }, [o, i]), /* @__PURE__ */ oe.jsx(bu, { asChild: !0, children: /* @__PURE__ */ oe.jsx("select", { ...n, ref: s, defaultValue: i }) });
  }
);
Ku.displayName = "BubbleSelect";
function qu(e) {
  const t = Ct(e), i = re.useRef(""), n = re.useRef(0), r = re.useCallback(
    (o) => {
      const a = i.current + o;
      t(a), function l(h) {
        i.current = h, window.clearTimeout(n.current), h !== "" && (n.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), s = re.useCallback(() => {
    i.current = "", window.clearTimeout(n.current);
  }, []);
  return re.useEffect(() => () => window.clearTimeout(n.current), []), [i, r, s];
}
function ed(e, t, i) {
  const r = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, s = i ? e.indexOf(i) : -1;
  let o = Wy(e, Math.max(s, 0));
  r.length === 1 && (o = o.filter((h) => h !== i));
  const l = o.find(
    (h) => h.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== i ? l : void 0;
}
function Wy(e, t) {
  return e.map((i, n) => e[(t + n) % e.length]);
}
var Xy = Tu, td = Mu, Hy = Ru, zy = Ou, Zy = Lu, id = Nu, Yy = Fu, rd = Gu, nd = Xu, Uy = Hu, $y = Zu, sd = Yu, od = Uu, ad = Ju;
const Jy = Xy, Qy = Hy, ld = re.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ oe.jsxs(
  td,
  {
    ref: n,
    className: _e(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...i,
    children: [
      t,
      /* @__PURE__ */ oe.jsx(zy, { asChild: !0, children: /* @__PURE__ */ oe.jsx(Lv, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
ld.displayName = td.displayName;
const cd = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  sd,
  {
    ref: i,
    className: _e(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ oe.jsx(Fv, {})
  }
));
cd.displayName = sd.displayName;
const ud = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  od,
  {
    ref: i,
    className: _e(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ oe.jsx(Bv, {})
  }
));
ud.displayName = od.displayName;
const dd = re.forwardRef(({ className: e, children: t, position: i = "popper", ...n }, r) => /* @__PURE__ */ oe.jsx(Zy, { children: /* @__PURE__ */ oe.jsxs(
  id,
  {
    ref: r,
    className: _e(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      i === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: i,
    ...n,
    children: [
      /* @__PURE__ */ oe.jsx(cd, {}),
      /* @__PURE__ */ oe.jsx(
        Yy,
        {
          className: _e(
            "p-1",
            i === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ oe.jsx(ud, {})
    ]
  }
) }));
dd.displayName = id.displayName;
const Ky = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  rd,
  {
    ref: i,
    className: _e("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
Ky.displayName = rd.displayName;
const hd = re.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ oe.jsxs(
  nd,
  {
    ref: n,
    className: _e(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ oe.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ oe.jsx($y, { children: /* @__PURE__ */ oe.jsx(Uc, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ oe.jsx(Uy, { children: t })
    ]
  }
));
hd.displayName = nd.displayName;
const qy = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  ad,
  {
    ref: i,
    className: _e("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qy.displayName = ad.displayName;
function ex({
  name: e,
  operator: t,
  data_type: i,
  value: n,
  index: r,
  id: s = "",
  filterPropertieOperators: o,
  filterPropertieValues: a,
  filterProperties: l,
  setCustomFilters: h
}) {
  const [m, g] = Dt([]), [M, N] = Dt([]);
  return ds(() => {
    e && (g(o(i)), N(a(e)));
  }, [e, i]), /* @__PURE__ */ oe.jsxs(
    "div",
    {
      id: `filters-${r}${s ? `-${s}` : ""}`,
      className: "flex items-center gap-2 ",
      children: [
        /* @__PURE__ */ oe.jsxs("div", { className: "flex items-center gap-2", id: "custom-formula-builder", children: [
          /* @__PURE__ */ oe.jsx("div", { className: "w-8 border-b border-slate-300" }),
          /* @__PURE__ */ oe.jsx(
            Ii,
            {
              isMulti: !1,
              closeMenuOnSelect: !0,
              hideSelectedOptions: !1,
              isClearable: !0,
              unstyled: !0,
              options: l == null ? void 0 : l.map((f) => ({
                label: f.attribute,
                value: f.attribute
              })),
              value: e ? {
                label: e,
                value: e
              } : null,
              onChange: (f) => {
                var S;
                const b = f != null && f.value ? (S = l == null ? void 0 : l.find((y) => y.attribute === (f == null ? void 0 : f.value))) == null ? void 0 : S.type : "";
                h((y) => y.map(
                  (d, x) => x === r ? { ...d, name: f == null ? void 0 : f.value, data_type: b } : d
                ));
              },
              menuPlacement: "auto",
              placeholder: "Select property",
              styles: {
                input: (f) => ({
                  ...f,
                  "input:focus": {
                    boxShadow: "none"
                  }
                }),
                multiValueLabel: (f) => ({
                  ...f,
                  whiteSpace: "normal",
                  overflow: "visible"
                }),
                control: (f) => ({
                  ...f,
                  transition: "none"
                })
              },
              components: {
                IndicatorSeparator: null,
                Option: ({ innerProps: f, ...b }) => /* @__PURE__ */ oe.jsxs(
                  "div",
                  {
                    ...f,
                    ...b,
                    className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
                    children: [
                      /* @__PURE__ */ oe.jsx("span", { className: "max-w-[180px] truncate text-xs", children: b.label }),
                      b.isSelected && /* @__PURE__ */ oe.jsx(Si, { className: "text-green-500" })
                    ]
                  }
                )
              },
              classNames: {
                control: ({ isFocused: f }) => _e(
                  "bg-white border border-gray-300 rounded-md p-2 min-h-10  w-[200px]",
                  f && "border-blue-600 ring-1 ring-blue-500"
                ),
                placeholder: () => "text-gray-500",
                input: () => "",
                valueContainer: () => "",
                singleValue: () => "",
                multiValue: () => "",
                multiValueLabel: () => "",
                multiValueRemove: () => "",
                indicatorsContainer: () => "",
                clearIndicator: () => "text-gray-300 hover:text-red-500 cursor-pointer",
                indicatorSeparator: () => "",
                dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
                menu: () => "p-2 mt-2 border border-gray-200 bg-white rounded-md max-h-[200px] overflow-hidden",
                groupHeading: () => "",
                option: () => _e("hover:bg-gray-100 p-2 rounded-md"),
                noOptionsMessage: () => ""
              }
            }
          ),
          e && /* @__PURE__ */ oe.jsxs(
            Jy,
            {
              value: t,
              onValueChange: (f) => {
                h((b) => b.map(
                  (S, y) => y === r ? { ...S, operator: f } : S
                ));
              },
              children: [
                /* @__PURE__ */ oe.jsx(
                  ld,
                  {
                    className: `w-[100px] h-10 bg-white
           focus:border-blue-600 focus:ring-1 focus:ring-blue-500`,
                    children: /* @__PURE__ */ oe.jsx(
                      Qy,
                      {
                        placeholder: "Operator",
                        className: "text-gray-500 data-[data=selected]:text-slate-900"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ oe.jsx(dd, { className: "w-[100px]", children: m.length > 0 && (m == null ? void 0 : m.map((f) => /* @__PURE__ */ oe.jsx(hd, { value: f.value, children: f.label }, f.value))) })
              ]
            }
          ),
          e && t && /* @__PURE__ */ oe.jsx(
            Rv,
            {
              onChange: (f) => {
                h((b) => b.map(
                  (S, y) => y === r ? { ...S, value: f } : S
                ));
              },
              options: M,
              value: n
            }
          )
        ] }),
        /* @__PURE__ */ oe.jsx(
          "button",
          {
            onClick: () => {
              h((f) => f.filter((b, S) => S !== r));
            },
            title: "Remove",
            className: "hover:bg-slate-200 p-2 rounded-full",
            children: /* @__PURE__ */ oe.jsx(Ff, { className: "text-red-500 size-5" })
          }
        )
      ]
    }
  );
}
const tx = Xo(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ln = re.forwardRef(
  ({ className: e, variant: t, size: i, asChild: n = !1, ...r }, s) => {
    const o = n ? Zi : "button";
    return /* @__PURE__ */ oe.jsx(
      o,
      {
        className: _e(tx({ variant: t, size: i, className: e })),
        ref: s,
        ...r
      }
    );
  }
);
Ln.displayName = "Button";
function ix(e, t) {
  return re.useReducer((i, n) => t[i][n] ?? i, e);
}
var Ji = (e) => {
  const { present: t, children: i } = e, n = rx(t), r = typeof i == "function" ? i({ present: n.isPresent }) : re.Children.only(i), s = ot(n.ref, nx(r));
  return typeof i == "function" || n.isPresent ? re.cloneElement(r, { ref: s }) : null;
};
Ji.displayName = "Presence";
function rx(e) {
  const [t, i] = re.useState(), n = re.useRef({}), r = re.useRef(e), s = re.useRef("none"), o = e ? "mounted" : "unmounted", [a, l] = ix(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return re.useEffect(() => {
    const h = Sn(n.current);
    s.current = a === "mounted" ? h : "none";
  }, [a]), St(() => {
    const h = n.current, m = r.current;
    if (m !== e) {
      const M = s.current, N = Sn(h);
      e ? l("MOUNT") : N === "none" || (h == null ? void 0 : h.display) === "none" ? l("UNMOUNT") : l(m && M !== N ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), St(() => {
    if (t) {
      let h;
      const m = t.ownerDocument.defaultView ?? window, g = (N) => {
        const b = Sn(n.current).includes(N.animationName);
        if (N.target === t && b && (l("ANIMATION_END"), !r.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, M = (N) => {
        N.target === t && (s.current = Sn(n.current));
      };
      return t.addEventListener("animationstart", M), t.addEventListener("animationcancel", g), t.addEventListener("animationend", g), () => {
        m.clearTimeout(h), t.removeEventListener("animationstart", M), t.removeEventListener("animationcancel", g), t.removeEventListener("animationend", g);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: re.useCallback((h) => {
      h && (n.current = getComputedStyle(h)), i(h);
    }, [])
  };
}
function Sn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function nx(e) {
  var n, r;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, i = t && "isReactWarning" in t && t.isReactWarning;
  return i ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, i = t && "isReactWarning" in t && t.isReactWarning, i ? e.props.ref : e.props.ref || e.ref);
}
var ca = "Checkbox", [sx, kC] = Cs(ca), [ox, ax] = sx(ca), fd = re.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: i,
      name: n,
      checked: r,
      defaultChecked: s,
      required: o,
      disabled: a,
      value: l = "on",
      onCheckedChange: h,
      form: m,
      ...g
    } = e, [M, N] = re.useState(null), f = ot(t, (I) => N(I)), b = re.useRef(!1), S = M ? m || !!M.closest("form") : !0, [y = !1, d] = Gr({
      prop: r,
      defaultProp: s,
      onChange: h
    }), x = re.useRef(y);
    return re.useEffect(() => {
      const I = M == null ? void 0 : M.form;
      if (I) {
        const C = () => d(x.current);
        return I.addEventListener("reset", C), () => I.removeEventListener("reset", C);
      }
    }, [M, d]), /* @__PURE__ */ oe.jsxs(ox, { scope: i, state: y, disabled: a, children: [
      /* @__PURE__ */ oe.jsx(
        Qe.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": Ti(y) ? "mixed" : y,
          "aria-required": o,
          "data-state": md(y),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...g,
          ref: f,
          onKeyDown: Ye(e.onKeyDown, (I) => {
            I.key === "Enter" && I.preventDefault();
          }),
          onClick: Ye(e.onClick, (I) => {
            d((C) => Ti(C) ? !0 : !C), S && (b.current = I.isPropagationStopped(), b.current || I.stopPropagation());
          })
        }
      ),
      S && /* @__PURE__ */ oe.jsx(
        lx,
        {
          control: M,
          bubbles: !b.current,
          name: n,
          value: l,
          checked: y,
          required: o,
          disabled: a,
          form: m,
          style: { transform: "translateX(-100%)" },
          defaultChecked: Ti(s) ? !1 : s
        }
      )
    ] });
  }
);
fd.displayName = ca;
var pd = "CheckboxIndicator", gd = re.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: i, forceMount: n, ...r } = e, s = ax(pd, i);
    return /* @__PURE__ */ oe.jsx(Ji, { present: n || Ti(s.state) || s.state === !0, children: /* @__PURE__ */ oe.jsx(
      Qe.span,
      {
        "data-state": md(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
gd.displayName = pd;
var lx = (e) => {
  const { control: t, checked: i, bubbles: n = !0, defaultChecked: r, ...s } = e, o = re.useRef(null), a = mu(i), l = nu(t);
  re.useEffect(() => {
    const m = o.current, g = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(g, "checked").set;
    if (a !== i && N) {
      const f = new Event("click", { bubbles: n });
      m.indeterminate = Ti(i), N.call(m, Ti(i) ? !1 : i), m.dispatchEvent(f);
    }
  }, [a, i, n]);
  const h = re.useRef(Ti(i) ? !1 : i);
  return /* @__PURE__ */ oe.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r ?? h.current,
      ...s,
      tabIndex: -1,
      ref: o,
      style: {
        ...e.style,
        ...l,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Ti(e) {
  return e === "indeterminate";
}
function md(e) {
  return Ti(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var bd = fd, cx = gd;
const Nn = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  bd,
  {
    ref: i,
    className: _e(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=checked]:text-primary-foreground data-[state=checked]:border-none",
      e
    ),
    ...t,
    children: /* @__PURE__ */ oe.jsx(
      cx,
      {
        className: _e("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ oe.jsx(Uc, { className: "h-4 w-4" })
      }
    )
  }
));
Nn.displayName = bd.displayName;
var ln = (e) => e.type === "checkbox", Wi = (e) => e instanceof Date, Et = (e) => e == null;
const vd = (e) => typeof e == "object";
var ht = (e) => !Et(e) && !Array.isArray(e) && vd(e) && !Wi(e), yd = (e) => ht(e) && e.target ? ln(e.target) ? e.target.checked : e.target.value : e, ux = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, xd = (e, t) => e.has(ux(t)), dx = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ht(t) && t.hasOwnProperty("isPrototypeOf");
}, ua = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Pt(e) {
  let t;
  const i = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ua && (e instanceof Blob || e instanceof FileList)) && (i || ht(e)))
    if (t = i ? [] : {}, !i && !dx(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = Pt(e[n]));
  else
    return e;
  return t;
}
var Ts = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ut = (e) => e === void 0, Ee = (e, t, i) => {
  if (!t || !ht(e))
    return i;
  const n = Ts(t.split(/[,[\].]+?/)).reduce((r, s) => Et(r) ? r : r[s], e);
  return ut(n) || n === e ? ut(e[t]) ? i : e[t] : n;
}, Gt = (e) => typeof e == "boolean", da = (e) => /^\w*$/.test(e), Cd = (e) => Ts(e.replace(/["|']|\]/g, "").split(/\.|\[/)), nt = (e, t, i) => {
  let n = -1;
  const r = da(t) ? [t] : Cd(t), s = r.length, o = s - 1;
  for (; ++n < s; ) {
    const a = r[n];
    let l = i;
    if (n !== o) {
      const h = e[a];
      l = ht(h) || Array.isArray(h) ? h : isNaN(+r[n + 1]) ? {} : [];
    }
    if (a === "__proto__")
      return;
    e[a] = l, e = e[a];
  }
  return e;
};
const Kn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, zt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, ui = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, wd = Ge.createContext(null), ks = () => Ge.useContext(wd), hx = (e) => {
  const { children: t, ...i } = e;
  return Ge.createElement(wd.Provider, { value: i }, t);
};
var Sd = (e, t, i, n = !0) => {
  const r = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(r, s, {
      get: () => {
        const o = s;
        return t._proxyFormState[o] !== zt.all && (t._proxyFormState[o] = !n || zt.all), i && (i[o] = !0), e[o];
      }
    });
  return r;
}, Rt = (e) => ht(e) && !Object.keys(e).length, Id = (e, t, i, n) => {
  i(e);
  const { name: r, ...s } = e;
  return Rt(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((o) => t[o] === (!n || zt.all));
}, Nr = (e) => Array.isArray(e) ? e : [e], Ad = (e, t, i) => !e || !t || e === t || Nr(e).some((n) => n && (i ? n === t : n.startsWith(t) || t.startsWith(n)));
function ha(e) {
  const t = Ge.useRef(e);
  t.current = e, Ge.useEffect(() => {
    const i = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      i && i.unsubscribe();
    };
  }, [e.disabled]);
}
function fx(e) {
  const t = ks(), { control: i = t.control, disabled: n, name: r, exact: s } = e || {}, [o, a] = Ge.useState(i._formState), l = Ge.useRef(!0), h = Ge.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), m = Ge.useRef(r);
  return m.current = r, ha({
    disabled: n,
    next: (g) => l.current && Ad(m.current, g.name, s) && Id(g, h.current, i._updateFormState) && a({
      ...i._formState,
      ...g
    }),
    subject: i._subjects.state
  }), Ge.useEffect(() => (l.current = !0, h.current.isValid && i._updateValid(!0), () => {
    l.current = !1;
  }), [i]), Sd(o, i, h.current, !1);
}
var ti = (e) => typeof e == "string", Ed = (e, t, i, n, r) => ti(e) ? (n && t.watch.add(e), Ee(i, e, r)) : Array.isArray(e) ? e.map((s) => (n && t.watch.add(s), Ee(i, s))) : (n && (t.watchAll = !0), i);
function px(e) {
  const t = ks(), { control: i = t.control, name: n, defaultValue: r, disabled: s, exact: o } = e || {}, a = Ge.useRef(n);
  a.current = n, ha({
    disabled: s,
    subject: i._subjects.values,
    next: (m) => {
      Ad(a.current, m.name, o) && h(Pt(Ed(a.current, i._names, m.values || i._formValues, !1, r)));
    }
  });
  const [l, h] = Ge.useState(i._getWatch(n, r));
  return Ge.useEffect(() => i._removeUnmounted()), l;
}
function gx(e) {
  const t = ks(), { name: i, disabled: n, control: r = t.control, shouldUnregister: s } = e, o = xd(r._names.array, i), a = px({
    control: r,
    name: i,
    defaultValue: Ee(r._formValues, i, Ee(r._defaultValues, i, e.defaultValue)),
    exact: !0
  }), l = fx({
    control: r,
    name: i,
    exact: !0
  }), h = Ge.useRef(r.register(i, {
    ...e.rules,
    value: a,
    ...Gt(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return Ge.useEffect(() => {
    const m = r._options.shouldUnregister || s, g = (M, N) => {
      const f = Ee(r._fields, M);
      f && f._f && (f._f.mount = N);
    };
    if (g(i, !0), m) {
      const M = Pt(Ee(r._options.defaultValues, i));
      nt(r._defaultValues, i, M), ut(Ee(r._formValues, i)) && nt(r._formValues, i, M);
    }
    return () => {
      (o ? m && !r._state.action : m) ? r.unregister(i) : g(i, !1);
    };
  }, [i, r, o, s]), Ge.useEffect(() => {
    Ee(r._fields, i) && r._updateDisabledField({
      disabled: n,
      fields: r._fields,
      name: i,
      value: Ee(r._fields, i)._f.value
    });
  }, [n, i, r]), {
    field: {
      name: i,
      value: a,
      ...Gt(n) || l.disabled ? { disabled: l.disabled || n } : {},
      onChange: Ge.useCallback((m) => h.current.onChange({
        target: {
          value: yd(m),
          name: i
        },
        type: Kn.CHANGE
      }), [i]),
      onBlur: Ge.useCallback(() => h.current.onBlur({
        target: {
          value: Ee(r._formValues, i),
          name: i
        },
        type: Kn.BLUR
      }), [i, r]),
      ref: Ge.useCallback((m) => {
        const g = Ee(r._fields, i);
        g && m && (g._f.ref = {
          focus: () => m.focus(),
          select: () => m.select(),
          setCustomValidity: (M) => m.setCustomValidity(M),
          reportValidity: () => m.reportValidity()
        });
      }, [r._fields, i])
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!Ee(l.errors, i)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!Ee(l.dirtyFields, i)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!Ee(l.touchedFields, i)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!Ee(l.validatingFields, i)
      },
      error: {
        enumerable: !0,
        get: () => Ee(l.errors, i)
      }
    })
  };
}
const mx = (e) => e.render(gx(e));
var Td = (e, t, i, n, r) => t ? {
  ...i[e],
  types: {
    ...i[e] && i[e].types ? i[e].types : {},
    [n]: r || !0
  }
} : {}, Al = (e) => ({
  isOnSubmit: !e || e === zt.onSubmit,
  isOnBlur: e === zt.onBlur,
  isOnChange: e === zt.onChange,
  isOnAll: e === zt.all,
  isOnTouch: e === zt.onTouched
}), El = (e, t, i) => !i && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Dr = (e, t, i, n) => {
  for (const r of i || Object.keys(e)) {
    const s = Ee(e, r);
    if (s) {
      const { _f: o, ...a } = s;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], r) && !n)
          return !0;
        if (o.ref && t(o.ref, o.name) && !n)
          return !0;
        if (Dr(a, t))
          break;
      } else if (ht(a) && Dr(a, t))
        break;
    }
  }
};
var bx = (e, t, i) => {
  const n = Nr(Ee(e, i));
  return nt(n, "root", t[i]), nt(e, i, n), e;
}, fa = (e) => e.type === "file", fi = (e) => typeof e == "function", qn = (e) => {
  if (!ua)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Dn = (e) => ti(e), pa = (e) => e.type === "radio", es = (e) => e instanceof RegExp;
const Tl = {
  value: !1,
  isValid: !1
}, kl = { value: !0, isValid: !0 };
var kd = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((i) => i && i.checked && !i.disabled).map((i) => i.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ut(e[0].attributes.value) ? ut(e[0].value) || e[0].value === "" ? kl : { value: e[0].value, isValid: !0 } : kl
    ) : Tl;
  }
  return Tl;
};
const Ml = {
  isValid: !1,
  value: null
};
var Md = (e) => Array.isArray(e) ? e.reduce((t, i) => i && i.checked && !i.disabled ? {
  isValid: !0,
  value: i.value
} : t, Ml) : Ml;
function Pl(e, t, i = "validate") {
  if (Dn(e) || Array.isArray(e) && e.every(Dn) || Gt(e) && !e)
    return {
      type: i,
      message: Dn(e) ? e : "",
      ref: t
    };
}
var ir = (e) => ht(e) && !es(e) ? e : {
  value: e,
  message: ""
}, Rl = async (e, t, i, n, r) => {
  const { ref: s, refs: o, required: a, maxLength: l, minLength: h, min: m, max: g, pattern: M, validate: N, name: f, valueAsNumber: b, mount: S, disabled: y } = e._f, d = Ee(t, f);
  if (!S || y)
    return {};
  const x = o ? o[0] : s, I = (k) => {
    n && x.reportValidity && (x.setCustomValidity(Gt(k) ? "" : k || ""), x.reportValidity());
  }, C = {}, A = pa(s), O = ln(s), z = A || O, H = (b || fa(s)) && ut(s.value) && ut(d) || qn(s) && s.value === "" || d === "" || Array.isArray(d) && !d.length, F = Td.bind(null, f, i, C), E = (k, v, u, c = ui.maxLength, w = ui.minLength) => {
    const T = k ? v : u;
    C[f] = {
      type: k ? c : w,
      message: T,
      ref: s,
      ...F(k ? c : w, T)
    };
  };
  if (r ? !Array.isArray(d) || !d.length : a && (!z && (H || Et(d)) || Gt(d) && !d || O && !kd(o).isValid || A && !Md(o).isValid)) {
    const { value: k, message: v } = Dn(a) ? { value: !!a, message: a } : ir(a);
    if (k && (C[f] = {
      type: ui.required,
      message: v,
      ref: x,
      ...F(ui.required, v)
    }, !i))
      return I(v), C;
  }
  if (!H && (!Et(m) || !Et(g))) {
    let k, v;
    const u = ir(g), c = ir(m);
    if (!Et(d) && !isNaN(d)) {
      const w = s.valueAsNumber || d && +d;
      Et(u.value) || (k = w > u.value), Et(c.value) || (v = w < c.value);
    } else {
      const w = s.valueAsDate || new Date(d), T = (L) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + L), D = s.type == "time", G = s.type == "week";
      ti(u.value) && d && (k = D ? T(d) > T(u.value) : G ? d > u.value : w > new Date(u.value)), ti(c.value) && d && (v = D ? T(d) < T(c.value) : G ? d < c.value : w < new Date(c.value));
    }
    if ((k || v) && (E(!!k, u.message, c.message, ui.max, ui.min), !i))
      return I(C[f].message), C;
  }
  if ((l || h) && !H && (ti(d) || r && Array.isArray(d))) {
    const k = ir(l), v = ir(h), u = !Et(k.value) && d.length > +k.value, c = !Et(v.value) && d.length < +v.value;
    if ((u || c) && (E(u, k.message, v.message), !i))
      return I(C[f].message), C;
  }
  if (M && !H && ti(d)) {
    const { value: k, message: v } = ir(M);
    if (es(k) && !d.match(k) && (C[f] = {
      type: ui.pattern,
      message: v,
      ref: s,
      ...F(ui.pattern, v)
    }, !i))
      return I(v), C;
  }
  if (N) {
    if (fi(N)) {
      const k = await N(d, t), v = Pl(k, x);
      if (v && (C[f] = {
        ...v,
        ...F(ui.validate, v.message)
      }, !i))
        return I(v.message), C;
    } else if (ht(N)) {
      let k = {};
      for (const v in N) {
        if (!Rt(k) && !i)
          break;
        const u = Pl(await N[v](d, t), x, v);
        u && (k = {
          ...u,
          ...F(v, u.message)
        }, I(u.message), i && (C[f] = k));
      }
      if (!Rt(k) && (C[f] = {
        ref: x,
        ...k
      }, !i))
        return C;
    }
  }
  return I(!0), C;
};
function vx(e, t) {
  const i = t.slice(0, -1).length;
  let n = 0;
  for (; n < i; )
    e = ut(e) ? n++ : e[t[n++]];
  return e;
}
function yx(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ut(e[t]))
      return !1;
  return !0;
}
function mt(e, t) {
  const i = Array.isArray(t) ? t : da(t) ? [t] : Cd(t), n = i.length === 1 ? e : vx(e, i), r = i.length - 1, s = i[r];
  return n && delete n[s], r !== 0 && (ht(n) && Rt(n) || Array.isArray(n) && yx(n)) && mt(e, i.slice(0, -1)), e;
}
var to = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (r) => {
      for (const s of e)
        s.next && s.next(r);
    },
    subscribe: (r) => (e.push(r), {
      unsubscribe: () => {
        e = e.filter((s) => s !== r);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Oo = (e) => Et(e) || !vd(e);
function Ai(e, t) {
  if (Oo(e) || Oo(t))
    return e === t;
  if (Wi(e) && Wi(t))
    return e.getTime() === t.getTime();
  const i = Object.keys(e), n = Object.keys(t);
  if (i.length !== n.length)
    return !1;
  for (const r of i) {
    const s = e[r];
    if (!n.includes(r))
      return !1;
    if (r !== "ref") {
      const o = t[r];
      if (Wi(s) && Wi(o) || ht(s) && ht(o) || Array.isArray(s) && Array.isArray(o) ? !Ai(s, o) : s !== o)
        return !1;
    }
  }
  return !0;
}
var Pd = (e) => e.type === "select-multiple", xx = (e) => pa(e) || ln(e), io = (e) => qn(e) && e.isConnected, Rd = (e) => {
  for (const t in e)
    if (fi(e[t]))
      return !0;
  return !1;
};
function ts(e, t = {}) {
  const i = Array.isArray(e);
  if (ht(e) || i)
    for (const n in e)
      Array.isArray(e[n]) || ht(e[n]) && !Rd(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, ts(e[n], t[n])) : Et(e[n]) || (t[n] = !0);
  return t;
}
function Od(e, t, i) {
  const n = Array.isArray(e);
  if (ht(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || ht(e[r]) && !Rd(e[r]) ? ut(t) || Oo(i[r]) ? i[r] = Array.isArray(e[r]) ? ts(e[r], []) : { ...ts(e[r]) } : Od(e[r], Et(t) ? {} : t[r], i[r]) : i[r] = !Ai(e[r], t[r]);
  return i;
}
var kr = (e, t) => Od(e, t, ts(t)), Ld = (e, { valueAsNumber: t, valueAsDate: i, setValueAs: n }) => ut(e) ? e : t ? e === "" ? NaN : e && +e : i && ti(e) ? new Date(e) : n ? n(e) : e;
function ro(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((i) => i.disabled) : t.disabled))
    return fa(t) ? t.files : pa(t) ? Md(e.refs).value : Pd(t) ? [...t.selectedOptions].map(({ value: i }) => i) : ln(t) ? kd(e.refs).value : Ld(ut(t.value) ? e.ref.value : t.value, e);
}
var Cx = (e, t, i, n) => {
  const r = {};
  for (const s of e) {
    const o = Ee(t, s);
    o && nt(r, s, o._f);
  }
  return {
    criteriaMode: i,
    names: [...e],
    fields: r,
    shouldUseNativeValidation: n
  };
}, Mr = (e) => ut(e) ? e : es(e) ? e.source : ht(e) ? es(e.value) ? e.value.source : e.value : e;
const Ol = "AsyncFunction";
var wx = (e) => (!e || !e.validate) && !!(fi(e.validate) && e.validate.constructor.name === Ol || ht(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Ol)), Sx = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ll(e, t, i) {
  const n = Ee(e, i);
  if (n || da(i))
    return {
      error: n,
      name: i
    };
  const r = i.split(".");
  for (; r.length; ) {
    const s = r.join("."), o = Ee(t, s), a = Ee(e, s);
    if (o && !Array.isArray(o) && i !== s)
      return { name: i };
    if (a && a.type)
      return {
        name: s,
        error: a
      };
    r.pop();
  }
  return {
    name: i
  };
}
var Ix = (e, t, i, n, r) => r.isOnAll ? !1 : !i && r.isOnTouch ? !(t || e) : (i ? n.isOnBlur : r.isOnBlur) ? !e : (i ? n.isOnChange : r.isOnChange) ? e : !0, Ax = (e, t) => !Ts(Ee(e, t)).length && mt(e, t);
const Ex = {
  mode: zt.onSubmit,
  reValidateMode: zt.onChange,
  shouldFocusError: !0
};
function Tx(e = {}) {
  let t = {
    ...Ex,
    ...e
  }, i = {
    submitCount: 0,
    isDirty: !1,
    isLoading: fi(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, n = {}, r = ht(t.defaultValues) || ht(t.values) ? Pt(t.defaultValues || t.values) || {} : {}, s = t.shouldUnregister ? {} : Pt(r), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, a = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, h = 0;
  const m = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, g = {
    values: to(),
    array: to(),
    state: to()
  }, M = Al(t.mode), N = Al(t.reValidateMode), f = t.criteriaMode === zt.all, b = (V) => ($) => {
    clearTimeout(h), h = setTimeout(V, $);
  }, S = async (V) => {
    if (!e.disabled && (m.isValid || V)) {
      const $ = t.resolver ? Rt((await z()).errors) : await F(n, !0);
      $ !== i.isValid && g.state.next({
        isValid: $
      });
    }
  }, y = (V, $) => {
    !e.disabled && (m.isValidating || m.validatingFields) && ((V || Array.from(a.mount)).forEach((ee) => {
      ee && ($ ? nt(i.validatingFields, ee, $) : mt(i.validatingFields, ee));
    }), g.state.next({
      validatingFields: i.validatingFields,
      isValidating: !Rt(i.validatingFields)
    }));
  }, d = (V, $ = [], ee, ue, ce = !0, Q = !0) => {
    if (ue && ee && !e.disabled) {
      if (o.action = !0, Q && Array.isArray(Ee(n, V))) {
        const K = ee(Ee(n, V), ue.argA, ue.argB);
        ce && nt(n, V, K);
      }
      if (Q && Array.isArray(Ee(i.errors, V))) {
        const K = ee(Ee(i.errors, V), ue.argA, ue.argB);
        ce && nt(i.errors, V, K), Ax(i.errors, V);
      }
      if (m.touchedFields && Q && Array.isArray(Ee(i.touchedFields, V))) {
        const K = ee(Ee(i.touchedFields, V), ue.argA, ue.argB);
        ce && nt(i.touchedFields, V, K);
      }
      m.dirtyFields && (i.dirtyFields = kr(r, s)), g.state.next({
        name: V,
        isDirty: k(V, $),
        dirtyFields: i.dirtyFields,
        errors: i.errors,
        isValid: i.isValid
      });
    } else
      nt(s, V, $);
  }, x = (V, $) => {
    nt(i.errors, V, $), g.state.next({
      errors: i.errors
    });
  }, I = (V) => {
    i.errors = V, g.state.next({
      errors: i.errors,
      isValid: !1
    });
  }, C = (V, $, ee, ue) => {
    const ce = Ee(n, V);
    if (ce) {
      const Q = Ee(s, V, ut(ee) ? Ee(r, V) : ee);
      ut(Q) || ue && ue.defaultChecked || $ ? nt(s, V, $ ? Q : ro(ce._f)) : c(V, Q), o.mount && S();
    }
  }, A = (V, $, ee, ue, ce) => {
    let Q = !1, K = !1;
    const ie = {
      name: V
    };
    if (!e.disabled) {
      const ae = !!(Ee(n, V) && Ee(n, V)._f && Ee(n, V)._f.disabled);
      if (!ee || ue) {
        m.isDirty && (K = i.isDirty, i.isDirty = ie.isDirty = k(), Q = K !== ie.isDirty);
        const de = ae || Ai(Ee(r, V), $);
        K = !!(!ae && Ee(i.dirtyFields, V)), de || ae ? mt(i.dirtyFields, V) : nt(i.dirtyFields, V, !0), ie.dirtyFields = i.dirtyFields, Q = Q || m.dirtyFields && K !== !de;
      }
      if (ee) {
        const de = Ee(i.touchedFields, V);
        de || (nt(i.touchedFields, V, ee), ie.touchedFields = i.touchedFields, Q = Q || m.touchedFields && de !== ee);
      }
      Q && ce && g.state.next(ie);
    }
    return Q ? ie : {};
  }, O = (V, $, ee, ue) => {
    const ce = Ee(i.errors, V), Q = m.isValid && Gt($) && i.isValid !== $;
    if (e.delayError && ee ? (l = b(() => x(V, ee)), l(e.delayError)) : (clearTimeout(h), l = null, ee ? nt(i.errors, V, ee) : mt(i.errors, V)), (ee ? !Ai(ce, ee) : ce) || !Rt(ue) || Q) {
      const K = {
        ...ue,
        ...Q && Gt($) ? { isValid: $ } : {},
        errors: i.errors,
        name: V
      };
      i = {
        ...i,
        ...K
      }, g.state.next(K);
    }
  }, z = async (V) => {
    y(V, !0);
    const $ = await t.resolver(s, t.context, Cx(V || a.mount, n, t.criteriaMode, t.shouldUseNativeValidation));
    return y(V), $;
  }, H = async (V) => {
    const { errors: $ } = await z(V);
    if (V)
      for (const ee of V) {
        const ue = Ee($, ee);
        ue ? nt(i.errors, ee, ue) : mt(i.errors, ee);
      }
    else
      i.errors = $;
    return $;
  }, F = async (V, $, ee = {
    valid: !0
  }) => {
    for (const ue in V) {
      const ce = V[ue];
      if (ce) {
        const { _f: Q, ...K } = ce;
        if (Q) {
          const ie = a.array.has(Q.name), ae = ce._f && wx(ce._f);
          ae && m.validatingFields && y([ue], !0);
          const de = await Rl(ce, s, f, t.shouldUseNativeValidation && !$, ie);
          if (ae && m.validatingFields && y([ue]), de[Q.name] && (ee.valid = !1, $))
            break;
          !$ && (Ee(de, Q.name) ? ie ? bx(i.errors, de, Q.name) : nt(i.errors, Q.name, de[Q.name]) : mt(i.errors, Q.name));
        }
        !Rt(K) && await F(K, $, ee);
      }
    }
    return ee.valid;
  }, E = () => {
    for (const V of a.unMount) {
      const $ = Ee(n, V);
      $ && ($._f.refs ? $._f.refs.every((ee) => !io(ee)) : !io($._f.ref)) && te(V);
    }
    a.unMount = /* @__PURE__ */ new Set();
  }, k = (V, $) => !e.disabled && (V && $ && nt(s, V, $), !Ai(J(), r)), v = (V, $, ee) => Ed(V, a, {
    ...o.mount ? s : ut($) ? r : ti(V) ? { [V]: $ } : $
  }, ee, $), u = (V) => Ts(Ee(o.mount ? s : r, V, e.shouldUnregister ? Ee(r, V, []) : [])), c = (V, $, ee = {}) => {
    const ue = Ee(n, V);
    let ce = $;
    if (ue) {
      const Q = ue._f;
      Q && (!Q.disabled && nt(s, V, Ld($, Q)), ce = qn(Q.ref) && Et($) ? "" : $, Pd(Q.ref) ? [...Q.ref.options].forEach((K) => K.selected = ce.includes(K.value)) : Q.refs ? ln(Q.ref) ? Q.refs.length > 1 ? Q.refs.forEach((K) => (!K.defaultChecked || !K.disabled) && (K.checked = Array.isArray(ce) ? !!ce.find((ie) => ie === K.value) : ce === K.value)) : Q.refs[0] && (Q.refs[0].checked = !!ce) : Q.refs.forEach((K) => K.checked = K.value === ce) : fa(Q.ref) ? Q.ref.value = "" : (Q.ref.value = ce, Q.ref.type || g.values.next({
        name: V,
        values: { ...s }
      })));
    }
    (ee.shouldDirty || ee.shouldTouch) && A(V, ce, ee.shouldTouch, ee.shouldDirty, !0), ee.shouldValidate && L(V);
  }, w = (V, $, ee) => {
    for (const ue in $) {
      const ce = $[ue], Q = `${V}.${ue}`, K = Ee(n, Q);
      (a.array.has(V) || ht(ce) || K && !K._f) && !Wi(ce) ? w(Q, ce, ee) : c(Q, ce, ee);
    }
  }, T = (V, $, ee = {}) => {
    const ue = Ee(n, V), ce = a.array.has(V), Q = Pt($);
    nt(s, V, Q), ce ? (g.array.next({
      name: V,
      values: { ...s }
    }), (m.isDirty || m.dirtyFields) && ee.shouldDirty && g.state.next({
      name: V,
      dirtyFields: kr(r, s),
      isDirty: k(V, Q)
    })) : ue && !ue._f && !Et(Q) ? w(V, Q, ee) : c(V, Q, ee), El(V, a) && g.state.next({ ...i }), g.values.next({
      name: o.mount ? V : void 0,
      values: { ...s }
    });
  }, D = async (V) => {
    o.mount = !0;
    const $ = V.target;
    let ee = $.name, ue = !0;
    const ce = Ee(n, ee), Q = () => $.type ? ro(ce._f) : yd(V), K = (ie) => {
      ue = Number.isNaN(ie) || Wi(ie) && isNaN(ie.getTime()) || Ai(ie, Ee(s, ee, ie));
    };
    if (ce) {
      let ie, ae;
      const de = Q(), he = V.type === Kn.BLUR || V.type === Kn.FOCUS_OUT, fe = !Sx(ce._f) && !t.resolver && !Ee(i.errors, ee) && !ce._f.deps || Ix(he, Ee(i.touchedFields, ee), i.isSubmitted, N, M), ge = El(ee, a, he);
      nt(s, ee, de), he ? (ce._f.onBlur && ce._f.onBlur(V), l && l(0)) : ce._f.onChange && ce._f.onChange(V);
      const me = A(ee, de, he, !1), be = !Rt(me) || ge;
      if (!he && g.values.next({
        name: ee,
        type: V.type,
        values: { ...s }
      }), fe)
        return m.isValid && (e.mode === "onBlur" ? he && S() : S()), be && g.state.next({ name: ee, ...ge ? {} : me });
      if (!he && ge && g.state.next({ ...i }), t.resolver) {
        const { errors: ve } = await z([ee]);
        if (K(de), ue) {
          const ye = Ll(i.errors, n, ee), we = Ll(ve, n, ye.name || ee);
          ie = we.error, ee = we.name, ae = Rt(ve);
        }
      } else
        y([ee], !0), ie = (await Rl(ce, s, f, t.shouldUseNativeValidation))[ee], y([ee]), K(de), ue && (ie ? ae = !1 : m.isValid && (ae = await F(n, !0)));
      ue && (ce._f.deps && L(ce._f.deps), O(ee, ae, ie, me));
    }
  }, G = (V, $) => {
    if (Ee(i.errors, $) && V.focus)
      return V.focus(), 1;
  }, L = async (V, $ = {}) => {
    let ee, ue;
    const ce = Nr(V);
    if (t.resolver) {
      const Q = await H(ut(V) ? V : ce);
      ee = Rt(Q), ue = V ? !ce.some((K) => Ee(Q, K)) : ee;
    } else
      V ? (ue = (await Promise.all(ce.map(async (Q) => {
        const K = Ee(n, Q);
        return await F(K && K._f ? { [Q]: K } : K);
      }))).every(Boolean), !(!ue && !i.isValid) && S()) : ue = ee = await F(n);
    return g.state.next({
      ...!ti(V) || m.isValid && ee !== i.isValid ? {} : { name: V },
      ...t.resolver || !V ? { isValid: ee } : {},
      errors: i.errors
    }), $.shouldFocus && !ue && Dr(n, G, V ? ce : a.mount), ue;
  }, J = (V) => {
    const $ = {
      ...o.mount ? s : r
    };
    return ut(V) ? $ : ti(V) ? Ee($, V) : V.map((ee) => Ee($, ee));
  }, se = (V, $) => ({
    invalid: !!Ee(($ || i).errors, V),
    isDirty: !!Ee(($ || i).dirtyFields, V),
    error: Ee(($ || i).errors, V),
    isValidating: !!Ee(i.validatingFields, V),
    isTouched: !!Ee(($ || i).touchedFields, V)
  }), _ = (V) => {
    V && Nr(V).forEach(($) => mt(i.errors, $)), g.state.next({
      errors: V ? i.errors : {}
    });
  }, X = (V, $, ee) => {
    const ue = (Ee(n, V, { _f: {} })._f || {}).ref, ce = Ee(i.errors, V) || {}, { ref: Q, message: K, type: ie, ...ae } = ce;
    nt(i.errors, V, {
      ...ae,
      ...$,
      ref: ue
    }), g.state.next({
      name: V,
      errors: i.errors,
      isValid: !1
    }), ee && ee.shouldFocus && ue && ue.focus && ue.focus();
  }, U = (V, $) => fi(V) ? g.values.subscribe({
    next: (ee) => V(v(void 0, $), ee)
  }) : v(V, $, !0), te = (V, $ = {}) => {
    for (const ee of V ? Nr(V) : a.mount)
      a.mount.delete(ee), a.array.delete(ee), $.keepValue || (mt(n, ee), mt(s, ee)), !$.keepError && mt(i.errors, ee), !$.keepDirty && mt(i.dirtyFields, ee), !$.keepTouched && mt(i.touchedFields, ee), !$.keepIsValidating && mt(i.validatingFields, ee), !t.shouldUnregister && !$.keepDefaultValue && mt(r, ee);
    g.values.next({
      values: { ...s }
    }), g.state.next({
      ...i,
      ...$.keepDirty ? { isDirty: k() } : {}
    }), !$.keepIsValid && S();
  }, le = ({ disabled: V, name: $, field: ee, fields: ue, value: ce }) => {
    if (Gt(V) && o.mount || V) {
      const Q = V ? void 0 : ut(ce) ? ro(ee ? ee._f : Ee(ue, $)._f) : ce;
      nt(s, $, Q), A($, Q, !1, !1, !0);
    }
  }, R = (V, $ = {}) => {
    let ee = Ee(n, V);
    const ue = Gt($.disabled) || Gt(e.disabled);
    return nt(n, V, {
      ...ee || {},
      _f: {
        ...ee && ee._f ? ee._f : { ref: { name: V } },
        name: V,
        mount: !0,
        ...$
      }
    }), a.mount.add(V), ee ? le({
      field: ee,
      disabled: Gt($.disabled) ? $.disabled : e.disabled,
      name: V,
      value: $.value
    }) : C(V, !0, $.value), {
      ...ue ? { disabled: $.disabled || e.disabled } : {},
      ...t.progressive ? {
        required: !!$.required,
        min: Mr($.min),
        max: Mr($.max),
        minLength: Mr($.minLength),
        maxLength: Mr($.maxLength),
        pattern: Mr($.pattern)
      } : {},
      name: V,
      onChange: D,
      onBlur: D,
      ref: (ce) => {
        if (ce) {
          R(V, $), ee = Ee(n, V);
          const Q = ut(ce.value) && ce.querySelectorAll && ce.querySelectorAll("input,select,textarea")[0] || ce, K = xx(Q), ie = ee._f.refs || [];
          if (K ? ie.find((ae) => ae === Q) : Q === ee._f.ref)
            return;
          nt(n, V, {
            _f: {
              ...ee._f,
              ...K ? {
                refs: [
                  ...ie.filter(io),
                  Q,
                  ...Array.isArray(Ee(r, V)) ? [{}] : []
                ],
                ref: { type: Q.type, name: V }
              } : { ref: Q }
            }
          }), C(V, !1, void 0, Q);
        } else
          ee = Ee(n, V, {}), ee._f && (ee._f.mount = !1), (t.shouldUnregister || $.shouldUnregister) && !(xd(a.array, V) && o.action) && a.unMount.add(V);
      }
    };
  }, P = () => t.shouldFocusError && Dr(n, G, a.mount), W = (V) => {
    Gt(V) && (g.state.next({ disabled: V }), Dr(n, ($, ee) => {
      const ue = Ee(n, ee);
      ue && ($.disabled = ue._f.disabled || V, Array.isArray(ue._f.refs) && ue._f.refs.forEach((ce) => {
        ce.disabled = ue._f.disabled || V;
      }));
    }, 0, !1));
  }, q = (V, $) => async (ee) => {
    let ue;
    ee && (ee.preventDefault && ee.preventDefault(), ee.persist && ee.persist());
    let ce = Pt(s);
    if (g.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: Q, values: K } = await z();
      i.errors = Q, ce = K;
    } else
      await F(n);
    if (mt(i.errors, "root"), Rt(i.errors)) {
      g.state.next({
        errors: {}
      });
      try {
        await V(ce, ee);
      } catch (Q) {
        ue = Q;
      }
    } else
      $ && await $({ ...i.errors }, ee), P(), setTimeout(P);
    if (g.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Rt(i.errors) && !ue,
      submitCount: i.submitCount + 1,
      errors: i.errors
    }), ue)
      throw ue;
  }, p = (V, $ = {}) => {
    Ee(n, V) && (ut($.defaultValue) ? T(V, Pt(Ee(r, V))) : (T(V, $.defaultValue), nt(r, V, Pt($.defaultValue))), $.keepTouched || mt(i.touchedFields, V), $.keepDirty || (mt(i.dirtyFields, V), i.isDirty = $.defaultValue ? k(V, Pt(Ee(r, V))) : k()), $.keepError || (mt(i.errors, V), m.isValid && S()), g.state.next({ ...i }));
  }, j = (V, $ = {}) => {
    const ee = V ? Pt(V) : r, ue = Pt(ee), ce = Rt(V), Q = ce ? r : ue;
    if ($.keepDefaultValues || (r = ee), !$.keepValues) {
      if ($.keepDirtyValues) {
        const K = /* @__PURE__ */ new Set([
          ...a.mount,
          ...Object.keys(kr(r, s))
        ]);
        for (const ie of Array.from(K))
          Ee(i.dirtyFields, ie) ? nt(Q, ie, Ee(s, ie)) : T(ie, Ee(Q, ie));
      } else {
        if (ua && ut(V))
          for (const K of a.mount) {
            const ie = Ee(n, K);
            if (ie && ie._f) {
              const ae = Array.isArray(ie._f.refs) ? ie._f.refs[0] : ie._f.ref;
              if (qn(ae)) {
                const de = ae.closest("form");
                if (de) {
                  de.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      s = e.shouldUnregister ? $.keepDefaultValues ? Pt(r) : {} : Pt(Q), g.array.next({
        values: { ...Q }
      }), g.values.next({
        values: { ...Q }
      });
    }
    a = {
      mount: $.keepDirtyValues ? a.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !m.isValid || !!$.keepIsValid || !!$.keepDirtyValues, o.watch = !!e.shouldUnregister, g.state.next({
      submitCount: $.keepSubmitCount ? i.submitCount : 0,
      isDirty: ce ? !1 : $.keepDirty ? i.isDirty : !!($.keepDefaultValues && !Ai(V, r)),
      isSubmitted: $.keepIsSubmitted ? i.isSubmitted : !1,
      dirtyFields: ce ? {} : $.keepDirtyValues ? $.keepDefaultValues && s ? kr(r, s) : i.dirtyFields : $.keepDefaultValues && V ? kr(r, V) : $.keepDirty ? i.dirtyFields : {},
      touchedFields: $.keepTouched ? i.touchedFields : {},
      errors: $.keepErrors ? i.errors : {},
      isSubmitSuccessful: $.keepIsSubmitSuccessful ? i.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, B = (V, $) => j(fi(V) ? V(s) : V, $);
  return {
    control: {
      register: R,
      unregister: te,
      getFieldState: se,
      handleSubmit: q,
      setError: X,
      _executeSchema: z,
      _getWatch: v,
      _getDirty: k,
      _updateValid: S,
      _removeUnmounted: E,
      _updateFieldArray: d,
      _updateDisabledField: le,
      _getFieldArray: u,
      _reset: j,
      _resetDefaultValues: () => fi(t.defaultValues) && t.defaultValues().then((V) => {
        B(V, t.resetOptions), g.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (V) => {
        i = {
          ...i,
          ...V
        };
      },
      _disableForm: W,
      _subjects: g,
      _proxyFormState: m,
      _setErrors: I,
      get _fields() {
        return n;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return o;
      },
      set _state(V) {
        o = V;
      },
      get _defaultValues() {
        return r;
      },
      get _names() {
        return a;
      },
      set _names(V) {
        a = V;
      },
      get _formState() {
        return i;
      },
      set _formState(V) {
        i = V;
      },
      get _options() {
        return t;
      },
      set _options(V) {
        t = {
          ...t,
          ...V
        };
      }
    },
    trigger: L,
    register: R,
    handleSubmit: q,
    watch: U,
    setValue: T,
    getValues: J,
    reset: B,
    resetField: p,
    clearErrors: _,
    unregister: te,
    setError: X,
    setFocus: (V, $ = {}) => {
      const ee = Ee(n, V), ue = ee && ee._f;
      if (ue) {
        const ce = ue.refs ? ue.refs[0] : ue.ref;
        ce.focus && (ce.focus(), $.shouldSelect && ce.select());
      }
    },
    getFieldState: se
  };
}
function kx(e = {}) {
  const t = Ge.useRef(), i = Ge.useRef(), [n, r] = Ge.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: fi(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: fi(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Tx(e),
    formState: n
  });
  const s = t.current.control;
  return s._options = e, ha({
    subject: s._subjects.state,
    next: (o) => {
      Id(o, s._proxyFormState, s._updateFormState, !0) && r({ ...s._formState });
    }
  }), Ge.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), Ge.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const o = s._getDirty();
      o !== n.isDirty && s._subjects.state.next({
        isDirty: o
      });
    }
  }, [s, n.isDirty]), Ge.useEffect(() => {
    e.values && !Ai(e.values, i.current) ? (s._reset(e.values, s._options.resetOptions), i.current = e.values, r((o) => ({ ...o }))) : s._resetDefaultValues();
  }, [e.values, s]), Ge.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), Ge.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), Ge.useEffect(() => {
    e.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [e.shouldUnregister, s]), Ge.useEffect(() => {
    t.current && (t.current.watch = t.current.watch.bind({}));
  }, [n]), t.current.formState = Sd(n, s), t.current;
}
var Mx = "Label", Nd = re.forwardRef((e, t) => /* @__PURE__ */ oe.jsx(
  Qe.label,
  {
    ...e,
    ref: t,
    onMouseDown: (i) => {
      var r;
      i.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, i), !i.defaultPrevented && i.detail > 1 && i.preventDefault());
    }
  }
));
Nd.displayName = Mx;
var Dd = Nd;
const Px = Xo(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Bd = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  Dd,
  {
    ref: i,
    className: _e(Px(), e),
    ...t
  }
));
Bd.displayName = Dd.displayName;
const Rx = hx, jd = re.createContext(
  {}
), no = ({
  ...e
}) => /* @__PURE__ */ oe.jsx(jd.Provider, { value: { name: e.name }, children: /* @__PURE__ */ oe.jsx(mx, { ...e }) }), Ms = () => {
  const e = re.useContext(jd), t = re.useContext(Fd), { getFieldState: i, formState: n } = ks(), r = i(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = t;
  return {
    id: s,
    name: e.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...r
  };
}, Fd = re.createContext(
  {}
), Bn = re.forwardRef(({ className: e, ...t }, i) => {
  const n = re.useId();
  return /* @__PURE__ */ oe.jsx(Fd.Provider, { value: { id: n }, children: /* @__PURE__ */ oe.jsx("div", { ref: i, className: _e("space-y-1", e), ...t }) });
});
Bn.displayName = "FormItem";
const jn = re.forwardRef(({ className: e, ...t }, i) => {
  const { error: n, formItemId: r } = Ms();
  return /* @__PURE__ */ oe.jsx(
    Bd,
    {
      ref: i,
      className: _e(n && "text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
});
jn.displayName = "FormLabel";
const Fn = re.forwardRef(({ ...e }, t) => {
  const { error: i, formItemId: n, formDescriptionId: r, formMessageId: s } = Ms();
  return /* @__PURE__ */ oe.jsx(
    Zi,
    {
      ref: t,
      id: n,
      "aria-describedby": i ? `${r} ${s}` : `${r}`,
      "aria-invalid": !!i,
      ...e
    }
  );
});
Fn.displayName = "FormControl";
const Ox = re.forwardRef(({ className: e, ...t }, i) => {
  const { formDescriptionId: n } = Ms();
  return /* @__PURE__ */ oe.jsx(
    "p",
    {
      ref: i,
      id: n,
      className: _e("text-[0.8rem] text-muted-foreground", e),
      ...t
    }
  );
});
Ox.displayName = "FormDescription";
const _n = re.forwardRef(({ className: e, children: t, ...i }, n) => {
  const { error: r, formMessageId: s } = Ms(), o = r ? String(r == null ? void 0 : r.message) : t;
  return o ? /* @__PURE__ */ oe.jsx(
    "p",
    {
      ref: n,
      id: s,
      className: _e("text-[0.8rem] font-normal text-destructive", e),
      ...i,
      children: o
    }
  ) : null;
});
_n.displayName = "FormMessage";
const _d = re.forwardRef(
  ({ className: e, type: t, ...i }, n) => /* @__PURE__ */ oe.jsx(
    "input",
    {
      type: t,
      className: _e(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...i
    }
  )
);
_d.displayName = "Input";
function Lx(e, t) {
  return re.useReducer((i, n) => t[i][n] ?? i, e);
}
var ga = "ScrollArea", [Vd, MC] = Cs(ga), [Nx, Xt] = Vd(ga), Gd = re.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: i,
      type: n = "hover",
      dir: r,
      scrollHideDelay: s = 600,
      ...o
    } = e, [a, l] = re.useState(null), [h, m] = re.useState(null), [g, M] = re.useState(null), [N, f] = re.useState(null), [b, S] = re.useState(null), [y, d] = re.useState(0), [x, I] = re.useState(0), [C, A] = re.useState(!1), [O, z] = re.useState(!1), H = ot(t, (E) => l(E)), F = ws(r);
    return /* @__PURE__ */ oe.jsx(
      Nx,
      {
        scope: i,
        type: n,
        dir: F,
        scrollHideDelay: s,
        scrollArea: a,
        viewport: h,
        onViewportChange: m,
        content: g,
        onContentChange: M,
        scrollbarX: N,
        onScrollbarXChange: f,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: A,
        scrollbarY: b,
        onScrollbarYChange: S,
        scrollbarYEnabled: O,
        onScrollbarYEnabledChange: z,
        onCornerWidthChange: d,
        onCornerHeightChange: I,
        children: /* @__PURE__ */ oe.jsx(
          Qe.div,
          {
            dir: F,
            ...o,
            ref: H,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Gd.displayName = ga;
var Wd = "ScrollAreaViewport", Xd = re.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: i, children: n, asChild: r, nonce: s, ...o } = e, a = Xt(Wd, i), l = re.useRef(null), h = ot(t, l, a.onViewportChange);
    return /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
      /* @__PURE__ */ oe.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ oe.jsx(
        Qe.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...o,
          asChild: r,
          ref: h,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: Hx({ asChild: r, children: n }, (m) => /* @__PURE__ */ oe.jsx(
            "div",
            {
              "data-radix-scroll-area-content": "",
              ref: a.onContentChange,
              style: { minWidth: a.scrollbarXEnabled ? "fit-content" : void 0 },
              children: m
            }
          ))
        }
      )
    ] });
  }
);
Xd.displayName = Wd;
var li = "ScrollAreaScrollbar", ma = re.forwardRef(
  (e, t) => {
    const { forceMount: i, ...n } = e, r = Xt(li, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: o } = r, a = e.orientation === "horizontal";
    return re.useEffect(() => (a ? s(!0) : o(!0), () => {
      a ? s(!1) : o(!1);
    }), [a, s, o]), r.type === "hover" ? /* @__PURE__ */ oe.jsx(Dx, { ...n, ref: t, forceMount: i }) : r.type === "scroll" ? /* @__PURE__ */ oe.jsx(Bx, { ...n, ref: t, forceMount: i }) : r.type === "auto" ? /* @__PURE__ */ oe.jsx(Hd, { ...n, ref: t, forceMount: i }) : r.type === "always" ? /* @__PURE__ */ oe.jsx(ba, { ...n, ref: t }) : null;
  }
);
ma.displayName = li;
var Dx = re.forwardRef((e, t) => {
  const { forceMount: i, ...n } = e, r = Xt(li, e.__scopeScrollArea), [s, o] = re.useState(!1);
  return re.useEffect(() => {
    const a = r.scrollArea;
    let l = 0;
    if (a) {
      const h = () => {
        window.clearTimeout(l), o(!0);
      }, m = () => {
        l = window.setTimeout(() => o(!1), r.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", h), a.addEventListener("pointerleave", m), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", h), a.removeEventListener("pointerleave", m);
      };
    }
  }, [r.scrollArea, r.scrollHideDelay]), /* @__PURE__ */ oe.jsx(Ji, { present: i || s, children: /* @__PURE__ */ oe.jsx(
    Hd,
    {
      "data-state": s ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), Bx = re.forwardRef((e, t) => {
  const { forceMount: i, ...n } = e, r = Xt(li, e.__scopeScrollArea), s = e.orientation === "horizontal", o = Rs(() => l("SCROLL_END"), 100), [a, l] = Lx("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return re.useEffect(() => {
    if (a === "idle") {
      const h = window.setTimeout(() => l("HIDE"), r.scrollHideDelay);
      return () => window.clearTimeout(h);
    }
  }, [a, r.scrollHideDelay, l]), re.useEffect(() => {
    const h = r.viewport, m = s ? "scrollLeft" : "scrollTop";
    if (h) {
      let g = h[m];
      const M = () => {
        const N = h[m];
        g !== N && (l("SCROLL"), o()), g = N;
      };
      return h.addEventListener("scroll", M), () => h.removeEventListener("scroll", M);
    }
  }, [r.viewport, s, l, o]), /* @__PURE__ */ oe.jsx(Ji, { present: i || a !== "hidden", children: /* @__PURE__ */ oe.jsx(
    ba,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: Ye(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: Ye(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Hd = re.forwardRef((e, t) => {
  const i = Xt(li, e.__scopeScrollArea), { forceMount: n, ...r } = e, [s, o] = re.useState(!1), a = e.orientation === "horizontal", l = Rs(() => {
    if (i.viewport) {
      const h = i.viewport.offsetWidth < i.viewport.scrollWidth, m = i.viewport.offsetHeight < i.viewport.scrollHeight;
      o(a ? h : m);
    }
  }, 10);
  return fr(i.viewport, l), fr(i.content, l), /* @__PURE__ */ oe.jsx(Ji, { present: n || s, children: /* @__PURE__ */ oe.jsx(
    ba,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), ba = re.forwardRef((e, t) => {
  const { orientation: i = "vertical", ...n } = e, r = Xt(li, e.__scopeScrollArea), s = re.useRef(null), o = re.useRef(0), [a, l] = re.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = $d(a.viewport, a.content), m = {
    ...n,
    sizes: a,
    onSizesChange: l,
    hasThumb: h > 0 && h < 1,
    onThumbChange: (M) => s.current = M,
    onThumbPointerUp: () => o.current = 0,
    onThumbPointerDown: (M) => o.current = M
  };
  function g(M, N) {
    return Wx(M, o.current, a, N);
  }
  return i === "horizontal" ? /* @__PURE__ */ oe.jsx(
    jx,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const M = r.viewport.scrollLeft, N = Nl(M, a, r.dir);
          s.current.style.transform = `translate3d(${N}px, 0, 0)`;
        }
      },
      onWheelScroll: (M) => {
        r.viewport && (r.viewport.scrollLeft = M);
      },
      onDragScroll: (M) => {
        r.viewport && (r.viewport.scrollLeft = g(M, r.dir));
      }
    }
  ) : i === "vertical" ? /* @__PURE__ */ oe.jsx(
    Fx,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const M = r.viewport.scrollTop, N = Nl(M, a);
          s.current.style.transform = `translate3d(0, ${N}px, 0)`;
        }
      },
      onWheelScroll: (M) => {
        r.viewport && (r.viewport.scrollTop = M);
      },
      onDragScroll: (M) => {
        r.viewport && (r.viewport.scrollTop = g(M));
      }
    }
  ) : null;
}), jx = re.forwardRef((e, t) => {
  const { sizes: i, onSizesChange: n, ...r } = e, s = Xt(li, e.__scopeScrollArea), [o, a] = re.useState(), l = re.useRef(null), h = ot(t, l, s.onScrollbarXChange);
  return re.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ oe.jsx(
    Zd,
    {
      "data-orientation": "horizontal",
      ...r,
      ref: h,
      sizes: i,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ps(i) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.x),
      onDragScroll: (m) => e.onDragScroll(m.x),
      onWheelScroll: (m, g) => {
        if (s.viewport) {
          const M = s.viewport.scrollLeft + m.deltaX;
          e.onWheelScroll(M), Qd(M, g) && m.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && o && n({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: rs(o.paddingLeft),
            paddingEnd: rs(o.paddingRight)
          }
        });
      }
    }
  );
}), Fx = re.forwardRef((e, t) => {
  const { sizes: i, onSizesChange: n, ...r } = e, s = Xt(li, e.__scopeScrollArea), [o, a] = re.useState(), l = re.useRef(null), h = ot(t, l, s.onScrollbarYChange);
  return re.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ oe.jsx(
    Zd,
    {
      "data-orientation": "vertical",
      ...r,
      ref: h,
      sizes: i,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ps(i) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.y),
      onDragScroll: (m) => e.onDragScroll(m.y),
      onWheelScroll: (m, g) => {
        if (s.viewport) {
          const M = s.viewport.scrollTop + m.deltaY;
          e.onWheelScroll(M), Qd(M, g) && m.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && o && n({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: rs(o.paddingTop),
            paddingEnd: rs(o.paddingBottom)
          }
        });
      }
    }
  );
}), [_x, zd] = Vd(li), Zd = re.forwardRef((e, t) => {
  const {
    __scopeScrollArea: i,
    sizes: n,
    hasThumb: r,
    onThumbChange: s,
    onThumbPointerUp: o,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: h,
    onWheelScroll: m,
    onResize: g,
    ...M
  } = e, N = Xt(li, i), [f, b] = re.useState(null), S = ot(t, (H) => b(H)), y = re.useRef(null), d = re.useRef(""), x = N.viewport, I = n.content - n.viewport, C = Ct(m), A = Ct(l), O = Rs(g, 10);
  function z(H) {
    if (y.current) {
      const F = H.clientX - y.current.left, E = H.clientY - y.current.top;
      h({ x: F, y: E });
    }
  }
  return re.useEffect(() => {
    const H = (F) => {
      const E = F.target;
      (f == null ? void 0 : f.contains(E)) && C(F, I);
    };
    return document.addEventListener("wheel", H, { passive: !1 }), () => document.removeEventListener("wheel", H, { passive: !1 });
  }, [x, f, I, C]), re.useEffect(A, [n, A]), fr(f, O), fr(N.content, O), /* @__PURE__ */ oe.jsx(
    _x,
    {
      scope: i,
      scrollbar: f,
      hasThumb: r,
      onThumbChange: Ct(s),
      onThumbPointerUp: Ct(o),
      onThumbPositionChange: A,
      onThumbPointerDown: Ct(a),
      children: /* @__PURE__ */ oe.jsx(
        Qe.div,
        {
          ...M,
          ref: S,
          style: { position: "absolute", ...M.style },
          onPointerDown: Ye(e.onPointerDown, (H) => {
            H.button === 0 && (H.target.setPointerCapture(H.pointerId), y.current = f.getBoundingClientRect(), d.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", N.viewport && (N.viewport.style.scrollBehavior = "auto"), z(H));
          }),
          onPointerMove: Ye(e.onPointerMove, z),
          onPointerUp: Ye(e.onPointerUp, (H) => {
            const F = H.target;
            F.hasPointerCapture(H.pointerId) && F.releasePointerCapture(H.pointerId), document.body.style.webkitUserSelect = d.current, N.viewport && (N.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), is = "ScrollAreaThumb", Yd = re.forwardRef(
  (e, t) => {
    const { forceMount: i, ...n } = e, r = zd(is, e.__scopeScrollArea);
    return /* @__PURE__ */ oe.jsx(Ji, { present: i || r.hasThumb, children: /* @__PURE__ */ oe.jsx(Vx, { ref: t, ...n }) });
  }
), Vx = re.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: i, style: n, ...r } = e, s = Xt(is, i), o = zd(is, i), { onThumbPositionChange: a } = o, l = ot(
      t,
      (g) => o.onThumbChange(g)
    ), h = re.useRef(), m = Rs(() => {
      h.current && (h.current(), h.current = void 0);
    }, 100);
    return re.useEffect(() => {
      const g = s.viewport;
      if (g) {
        const M = () => {
          if (m(), !h.current) {
            const N = Xx(g, a);
            h.current = N, a();
          }
        };
        return a(), g.addEventListener("scroll", M), () => g.removeEventListener("scroll", M);
      }
    }, [s.viewport, m, a]), /* @__PURE__ */ oe.jsx(
      Qe.div,
      {
        "data-state": o.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: Ye(e.onPointerDownCapture, (g) => {
          const N = g.target.getBoundingClientRect(), f = g.clientX - N.left, b = g.clientY - N.top;
          o.onThumbPointerDown({ x: f, y: b });
        }),
        onPointerUp: Ye(e.onPointerUp, o.onThumbPointerUp)
      }
    );
  }
);
Yd.displayName = is;
var va = "ScrollAreaCorner", Ud = re.forwardRef(
  (e, t) => {
    const i = Xt(va, e.__scopeScrollArea), n = !!(i.scrollbarX && i.scrollbarY);
    return i.type !== "scroll" && n ? /* @__PURE__ */ oe.jsx(Gx, { ...e, ref: t }) : null;
  }
);
Ud.displayName = va;
var Gx = re.forwardRef((e, t) => {
  const { __scopeScrollArea: i, ...n } = e, r = Xt(va, i), [s, o] = re.useState(0), [a, l] = re.useState(0), h = !!(s && a);
  return fr(r.scrollbarX, () => {
    var g;
    const m = ((g = r.scrollbarX) == null ? void 0 : g.offsetHeight) || 0;
    r.onCornerHeightChange(m), l(m);
  }), fr(r.scrollbarY, () => {
    var g;
    const m = ((g = r.scrollbarY) == null ? void 0 : g.offsetWidth) || 0;
    r.onCornerWidthChange(m), o(m);
  }), h ? /* @__PURE__ */ oe.jsx(
    Qe.div,
    {
      ...n,
      ref: t,
      style: {
        width: s,
        height: a,
        position: "absolute",
        right: r.dir === "ltr" ? 0 : void 0,
        left: r.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function rs(e) {
  return e ? parseInt(e, 10) : 0;
}
function $d(e, t) {
  const i = e / t;
  return isNaN(i) ? 0 : i;
}
function Ps(e) {
  const t = $d(e.viewport, e.content), i = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - i) * t;
  return Math.max(n, 18);
}
function Wx(e, t, i, n = "ltr") {
  const r = Ps(i), s = r / 2, o = t || s, a = r - o, l = i.scrollbar.paddingStart + o, h = i.scrollbar.size - i.scrollbar.paddingEnd - a, m = i.content - i.viewport, g = n === "ltr" ? [0, m] : [m * -1, 0];
  return Jd([l, h], g)(e);
}
function Nl(e, t, i = "ltr") {
  const n = Ps(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - r, o = t.content - t.viewport, a = s - n, l = i === "ltr" ? [0, o] : [o * -1, 0], h = So(e, l);
  return Jd([0, o], [0, a])(h);
}
function Jd(e, t) {
  return (i) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (i - e[0]);
  };
}
function Qd(e, t) {
  return e > 0 && e < t;
}
var Xx = (e, t = () => {
}) => {
  let i = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function r() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, o = i.left !== s.left, a = i.top !== s.top;
    (o || a) && t(), i = s, n = window.requestAnimationFrame(r);
  }(), () => window.cancelAnimationFrame(n);
};
function Rs(e, t) {
  const i = Ct(e), n = re.useRef(0);
  return re.useEffect(() => () => window.clearTimeout(n.current), []), re.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(i, t);
  }, [i, t]);
}
function fr(e, t) {
  const i = Ct(t);
  St(() => {
    let n = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(i);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(n), r.unobserve(e);
      };
    }
  }, [e, i]);
}
function Hx(e, t) {
  const { asChild: i, children: n } = e;
  if (!i)
    return typeof t == "function" ? t(n) : t;
  const r = re.Children.only(n);
  return re.cloneElement(r, {
    children: typeof t == "function" ? t(r.props.children) : t
  });
}
var Kd = Gd, zx = Xd, Zx = Ud;
const qd = re.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ oe.jsxs(
  Kd,
  {
    ref: n,
    className: _e("relative overflow-hidden", e),
    ...i,
    children: [
      /* @__PURE__ */ oe.jsx(zx, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ oe.jsx(eh, {}),
      /* @__PURE__ */ oe.jsx(Zx, {})
    ]
  }
));
qd.displayName = Kd.displayName;
const eh = re.forwardRef(({ className: e, orientation: t = "vertical", ...i }, n) => /* @__PURE__ */ oe.jsx(
  ma,
  {
    ref: n,
    orientation: t,
    className: _e(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...i,
    children: /* @__PURE__ */ oe.jsx(Yd, { className: "relative flex-1 rounded-full bg-border" })
  }
));
eh.displayName = ma.displayName;
var so = "rovingFocusGroup.onEntryFocus", Yx = { bubbles: !1, cancelable: !0 }, Os = "RovingFocusGroup", [Lo, th, Ux] = Jc(Os), [$x, ih] = sa(
  Os,
  [Ux]
), [Jx, Qx] = $x(Os), rh = re.forwardRef(
  (e, t) => /* @__PURE__ */ oe.jsx(Lo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ oe.jsx(Lo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ oe.jsx(Kx, { ...e, ref: t }) }) })
);
rh.displayName = Os;
var Kx = re.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: i,
    orientation: n,
    loop: r = !1,
    dir: s,
    currentTabStopId: o,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: h,
    preventScrollOnEntryFocus: m = !1,
    ...g
  } = e, M = re.useRef(null), N = ot(t, M), f = ws(s), [b = null, S] = Gr({
    prop: o,
    defaultProp: a,
    onChange: l
  }), [y, d] = re.useState(!1), x = Ct(h), I = th(i), C = re.useRef(!1), [A, O] = re.useState(0);
  return re.useEffect(() => {
    const z = M.current;
    if (z)
      return z.addEventListener(so, x), () => z.removeEventListener(so, x);
  }, [x]), /* @__PURE__ */ oe.jsx(
    Jx,
    {
      scope: i,
      orientation: n,
      dir: f,
      loop: r,
      currentTabStopId: b,
      onItemFocus: re.useCallback(
        (z) => S(z),
        [S]
      ),
      onItemShiftTab: re.useCallback(() => d(!0), []),
      onFocusableItemAdd: re.useCallback(
        () => O((z) => z + 1),
        []
      ),
      onFocusableItemRemove: re.useCallback(
        () => O((z) => z - 1),
        []
      ),
      children: /* @__PURE__ */ oe.jsx(
        Qe.div,
        {
          tabIndex: y || A === 0 ? -1 : 0,
          "data-orientation": n,
          ...g,
          ref: N,
          style: { outline: "none", ...e.style },
          onMouseDown: Ye(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: Ye(e.onFocus, (z) => {
            const H = !C.current;
            if (z.target === z.currentTarget && H && !y) {
              const F = new CustomEvent(so, Yx);
              if (z.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                const E = I().filter((w) => w.focusable), k = E.find((w) => w.active), v = E.find((w) => w.id === b), c = [k, v, ...E].filter(
                  Boolean
                ).map((w) => w.ref.current);
                oh(c, m);
              }
            }
            C.current = !1;
          }),
          onBlur: Ye(e.onBlur, () => d(!1))
        }
      )
    }
  );
}), nh = "RovingFocusGroupItem", sh = re.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: i,
      focusable: n = !0,
      active: r = !1,
      tabStopId: s,
      ...o
    } = e, a = on(), l = s || a, h = Qx(nh, i), m = h.currentTabStopId === l, g = th(i), { onFocusableItemAdd: M, onFocusableItemRemove: N } = h;
    return re.useEffect(() => {
      if (n)
        return M(), () => N();
    }, [n, M, N]), /* @__PURE__ */ oe.jsx(
      Lo.ItemSlot,
      {
        scope: i,
        id: l,
        focusable: n,
        active: r,
        children: /* @__PURE__ */ oe.jsx(
          Qe.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": h.orientation,
            ...o,
            ref: t,
            onMouseDown: Ye(e.onMouseDown, (f) => {
              n ? h.onItemFocus(l) : f.preventDefault();
            }),
            onFocus: Ye(e.onFocus, () => h.onItemFocus(l)),
            onKeyDown: Ye(e.onKeyDown, (f) => {
              if (f.key === "Tab" && f.shiftKey) {
                h.onItemShiftTab();
                return;
              }
              if (f.target !== f.currentTarget)
                return;
              const b = t1(f, h.orientation, h.dir);
              if (b !== void 0) {
                if (f.metaKey || f.ctrlKey || f.altKey || f.shiftKey)
                  return;
                f.preventDefault();
                let y = g().filter((d) => d.focusable).map((d) => d.ref.current);
                if (b === "last")
                  y.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && y.reverse();
                  const d = y.indexOf(f.currentTarget);
                  y = h.loop ? i1(y, d + 1) : y.slice(d + 1);
                }
                setTimeout(() => oh(y));
              }
            })
          }
        )
      }
    );
  }
);
sh.displayName = nh;
var qx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function e1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function t1(e, t, i) {
  const n = e1(e.key, i);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return qx[n];
}
function oh(e, t = !1) {
  const i = document.activeElement;
  for (const n of e)
    if (n === i || (n.focus({ preventScroll: t }), document.activeElement !== i))
      return;
}
function i1(e, t) {
  return e.map((i, n) => e[(t + n) % e.length]);
}
var r1 = rh, n1 = sh, ya = "Tabs", [s1, PC] = Cs(ya, [
  ih
]), ah = ih(), [o1, xa] = s1(ya), lh = re.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: i,
      value: n,
      onValueChange: r,
      defaultValue: s,
      orientation: o = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...h
    } = e, m = ws(a), [g, M] = Gr({
      prop: n,
      onChange: r,
      defaultProp: s
    });
    return /* @__PURE__ */ oe.jsx(
      o1,
      {
        scope: i,
        baseId: on(),
        value: g,
        onValueChange: M,
        orientation: o,
        dir: m,
        activationMode: l,
        children: /* @__PURE__ */ oe.jsx(
          Qe.div,
          {
            dir: m,
            "data-orientation": o,
            ...h,
            ref: t
          }
        )
      }
    );
  }
);
lh.displayName = ya;
var ch = "TabsList", uh = re.forwardRef(
  (e, t) => {
    const { __scopeTabs: i, loop: n = !0, ...r } = e, s = xa(ch, i), o = ah(i);
    return /* @__PURE__ */ oe.jsx(
      r1,
      {
        asChild: !0,
        ...o,
        orientation: s.orientation,
        dir: s.dir,
        loop: n,
        children: /* @__PURE__ */ oe.jsx(
          Qe.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...r,
            ref: t
          }
        )
      }
    );
  }
);
uh.displayName = ch;
var dh = "TabsTrigger", hh = re.forwardRef(
  (e, t) => {
    const { __scopeTabs: i, value: n, disabled: r = !1, ...s } = e, o = xa(dh, i), a = ah(i), l = gh(o.baseId, n), h = mh(o.baseId, n), m = n === o.value;
    return /* @__PURE__ */ oe.jsx(
      n1,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        active: m,
        children: /* @__PURE__ */ oe.jsx(
          Qe.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": h,
            "data-state": m ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: l,
            ...s,
            ref: t,
            onMouseDown: Ye(e.onMouseDown, (g) => {
              !r && g.button === 0 && g.ctrlKey === !1 ? o.onValueChange(n) : g.preventDefault();
            }),
            onKeyDown: Ye(e.onKeyDown, (g) => {
              [" ", "Enter"].includes(g.key) && o.onValueChange(n);
            }),
            onFocus: Ye(e.onFocus, () => {
              const g = o.activationMode !== "manual";
              !m && !r && g && o.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
hh.displayName = dh;
var fh = "TabsContent", ph = re.forwardRef(
  (e, t) => {
    const { __scopeTabs: i, value: n, forceMount: r, children: s, ...o } = e, a = xa(fh, i), l = gh(a.baseId, n), h = mh(a.baseId, n), m = n === a.value, g = re.useRef(m);
    return re.useEffect(() => {
      const M = requestAnimationFrame(() => g.current = !1);
      return () => cancelAnimationFrame(M);
    }, []), /* @__PURE__ */ oe.jsx(Ji, { present: r || m, children: ({ present: M }) => /* @__PURE__ */ oe.jsx(
      Qe.div,
      {
        "data-state": m ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !M,
        id: h,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
          ...e.style,
          animationDuration: g.current ? "0s" : void 0
        },
        children: M && s
      }
    ) });
  }
);
ph.displayName = fh;
function gh(e, t) {
  return `${e}-trigger-${t}`;
}
function mh(e, t) {
  return `${e}-content-${t}`;
}
var a1 = lh, bh = uh, vh = hh, yh = ph;
const l1 = a1, xh = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  bh,
  {
    ref: i,
    className: _e(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
xh.displayName = bh.displayName;
const No = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  vh,
  {
    ref: i,
    className: _e(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
No.displayName = vh.displayName;
const Do = re.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ oe.jsx(
  yh,
  {
    ref: i,
    className: _e(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Do.displayName = yh.displayName;
const Dl = (e, t, i) => {
  if (e && "reportValidity" in e) {
    const n = Ee(i, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, Ch = (e, t) => {
  for (const i in t.fields) {
    const n = t.fields[i];
    n && n.ref && "reportValidity" in n.ref ? Dl(n.ref, i, e) : n.refs && n.refs.forEach((r) => Dl(r, i, e));
  }
}, c1 = (e, t) => {
  t.shouldUseNativeValidation && Ch(e, t);
  const i = {};
  for (const n in e) {
    const r = Ee(t.fields, n), s = Object.assign(e[n] || {}, { ref: r && r.ref });
    if (u1(t.names || Object.keys(e), n)) {
      const o = Object.assign({}, Ee(i, n));
      nt(o, "root", s), nt(i, n, o);
    } else
      nt(i, n, s);
  }
  return i;
}, u1 = (e, t) => e.some((i) => i.startsWith(t + "."));
var d1 = function(e, t) {
  for (var i = {}; e.length; ) {
    var n = e[0], r = n.code, s = n.message, o = n.path.join(".");
    if (!i[o])
      if ("unionErrors" in n) {
        var a = n.unionErrors[0].errors[0];
        i[o] = { message: a.message, type: a.code };
      } else
        i[o] = { message: s, type: r };
    if ("unionErrors" in n && n.unionErrors.forEach(function(m) {
      return m.errors.forEach(function(g) {
        return e.push(g);
      });
    }), t) {
      var l = i[o].types, h = l && l[n.code];
      i[o] = Td(o, t, i, r, h ? [].concat(h, n.message) : n.message);
    }
    e.shift();
  }
  return i;
}, h1 = function(e, t, i) {
  return i === void 0 && (i = {}), function(n, r, s) {
    try {
      return Promise.resolve(function(o, a) {
        try {
          var l = Promise.resolve(e[i.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(h) {
            return s.shouldUseNativeValidation && Ch({}, s), { errors: {}, values: i.raw ? n : h };
          });
        } catch (h) {
          return a(h);
        }
        return l && l.then ? l.then(void 0, a) : l;
      }(0, function(o) {
        if (function(a) {
          return Array.isArray(a == null ? void 0 : a.errors);
        }(o))
          return { values: {}, errors: c1(d1(o.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wh = (...e) => e.filter((t, i, n) => !!t && n.indexOf(t) === i).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var p1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = Bi(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: n,
    className: r = "",
    children: s,
    iconNode: o,
    ...a
  }, l) => Wt(
    "svg",
    {
      ref: l,
      ...p1,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(i) * 24 / Number(t) : i,
      className: wh("lucide", r),
      ...a
    },
    [
      ...o.map(([h, m]) => Wt(h, m)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = (e, t) => {
  const i = Bi(
    ({ className: n, ...r }, s) => Wt(g1, {
      ref: s,
      iconNode: t,
      className: wh(`lucide-${f1(e)}`, n),
      ...r
    })
  );
  return i.displayName = `${e}`, i;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = m1("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
function v1(e) {
  return ji({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM18 13h-2v3h-3v2h3v3h2v-3h3v-2h-3z" }, child: [] }] })(e);
}
var Je;
(function(e) {
  e.assertEqual = (r) => r;
  function t(r) {
  }
  e.assertIs = t;
  function i(r) {
    throw new Error();
  }
  e.assertNever = i, e.arrayToEnum = (r) => {
    const s = {};
    for (const o of r)
      s[o] = o;
    return s;
  }, e.getValidEnumValues = (r) => {
    const s = e.objectKeys(r).filter((a) => typeof r[r[a]] != "number"), o = {};
    for (const a of s)
      o[a] = r[a];
    return e.objectValues(o);
  }, e.objectValues = (r) => e.objectKeys(r).map(function(s) {
    return r[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const s = [];
    for (const o in r)
      Object.prototype.hasOwnProperty.call(r, o) && s.push(o);
    return s;
  }, e.find = (r, s) => {
    for (const o of r)
      if (s(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && isFinite(r) && Math.floor(r) === r;
  function n(r, s = " | ") {
    return r.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (r, s) => typeof s == "bigint" ? s.toString() : s;
})(Je || (Je = {}));
var Bo;
(function(e) {
  e.mergeShapes = (t, i) => ({
    ...t,
    ...i
    // second overwrites first
  });
})(Bo || (Bo = {}));
const Me = Je.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Ei = (e) => {
  switch (typeof e) {
    case "undefined":
      return Me.undefined;
    case "string":
      return Me.string;
    case "number":
      return isNaN(e) ? Me.nan : Me.number;
    case "boolean":
      return Me.boolean;
    case "function":
      return Me.function;
    case "bigint":
      return Me.bigint;
    case "symbol":
      return Me.symbol;
    case "object":
      return Array.isArray(e) ? Me.array : e === null ? Me.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? Me.promise : typeof Map < "u" && e instanceof Map ? Me.map : typeof Set < "u" && e instanceof Set ? Me.set : typeof Date < "u" && e instanceof Date ? Me.date : Me.object;
    default:
      return Me.unknown;
  }
}, Ie = Je.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), y1 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ft extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const i = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, i) : this.__proto__ = i, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const i = t || function(s) {
      return s.message;
    }, n = { _errors: [] }, r = (s) => {
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(r);
        else if (o.code === "invalid_return_type")
          r(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          r(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(i(o));
        else {
          let a = n, l = 0;
          for (; l < o.path.length; ) {
            const h = o.path[l];
            l === o.path.length - 1 ? (a[h] = a[h] || { _errors: [] }, a[h]._errors.push(i(o))) : a[h] = a[h] || { _errors: [] }, a = a[h], l++;
          }
        }
    };
    return r(this), n;
  }
  static assert(t) {
    if (!(t instanceof Ft))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Je.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (i) => i.message) {
    const i = {}, n = [];
    for (const r of this.issues)
      r.path.length > 0 ? (i[r.path[0]] = i[r.path[0]] || [], i[r.path[0]].push(t(r))) : n.push(t(r));
    return { formErrors: n, fieldErrors: i };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ft.create = (e) => new Ft(e);
const pr = (e, t) => {
  let i;
  switch (e.code) {
    case Ie.invalid_type:
      e.received === Me.undefined ? i = "Required" : i = `Expected ${e.expected}, received ${e.received}`;
      break;
    case Ie.invalid_literal:
      i = `Invalid literal value, expected ${JSON.stringify(e.expected, Je.jsonStringifyReplacer)}`;
      break;
    case Ie.unrecognized_keys:
      i = `Unrecognized key(s) in object: ${Je.joinValues(e.keys, ", ")}`;
      break;
    case Ie.invalid_union:
      i = "Invalid input";
      break;
    case Ie.invalid_union_discriminator:
      i = `Invalid discriminator value. Expected ${Je.joinValues(e.options)}`;
      break;
    case Ie.invalid_enum_value:
      i = `Invalid enum value. Expected ${Je.joinValues(e.options)}, received '${e.received}'`;
      break;
    case Ie.invalid_arguments:
      i = "Invalid function arguments";
      break;
    case Ie.invalid_return_type:
      i = "Invalid function return type";
      break;
    case Ie.invalid_date:
      i = "Invalid date";
      break;
    case Ie.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (i = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (i = `${i} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? i = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? i = `Invalid input: must end with "${e.validation.endsWith}"` : Je.assertNever(e.validation) : e.validation !== "regex" ? i = `Invalid ${e.validation}` : i = "Invalid";
      break;
    case Ie.too_small:
      e.type === "array" ? i = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? i = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? i = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? i = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : i = "Invalid input";
      break;
    case Ie.too_big:
      e.type === "array" ? i = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? i = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? i = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? i = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? i = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : i = "Invalid input";
      break;
    case Ie.custom:
      i = "Invalid input";
      break;
    case Ie.invalid_intersection_types:
      i = "Intersection results could not be merged";
      break;
    case Ie.not_multiple_of:
      i = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case Ie.not_finite:
      i = "Number must be finite";
      break;
    default:
      i = t.defaultError, Je.assertNever(e);
  }
  return { message: i };
};
let Sh = pr;
function x1(e) {
  Sh = e;
}
function ns() {
  return Sh;
}
const ss = (e) => {
  const { data: t, path: i, errorMaps: n, issueData: r } = e, s = [...i, ...r.path || []], o = {
    ...r,
    path: s
  };
  if (r.message !== void 0)
    return {
      ...r,
      path: s,
      message: r.message
    };
  let a = "";
  const l = n.filter((h) => !!h).slice().reverse();
  for (const h of l)
    a = h(o, { data: t, defaultError: a }).message;
  return {
    ...r,
    path: s,
    message: a
  };
}, C1 = [];
function ke(e, t) {
  const i = ns(), n = ss({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      i,
      i === pr ? void 0 : pr
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class It {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, i) {
    const n = [];
    for (const r of i) {
      if (r.status === "aborted")
        return Ve;
      r.status === "dirty" && t.dirty(), n.push(r.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, i) {
    const n = [];
    for (const r of i) {
      const s = await r.key, o = await r.value;
      n.push({
        key: s,
        value: o
      });
    }
    return It.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, i) {
    const n = {};
    for (const r of i) {
      const { key: s, value: o } = r;
      if (s.status === "aborted" || o.status === "aborted")
        return Ve;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || r.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const Ve = Object.freeze({
  status: "aborted"
}), nr = (e) => ({ status: "dirty", value: e }), kt = (e) => ({ status: "valid", value: e }), jo = (e) => e.status === "aborted", Fo = (e) => e.status === "dirty", Wr = (e) => e.status === "valid", Xr = (e) => typeof Promise < "u" && e instanceof Promise;
function os(e, t, i, n) {
  if (i === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? n : i === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Ih(e, t, i, n, r) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? r.call(e, i) : r ? r.value = i : t.set(e, i), i;
}
var Re;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Re || (Re = {}));
var Or, Lr;
class si {
  constructor(t, i, n, r) {
    this._cachedPath = [], this.parent = t, this.data = i, this._path = n, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Bl = (e, t) => {
  if (Wr(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const i = new Ft(e.common.issues);
      return this._error = i, this._error;
    }
  };
};
function We(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: i, required_error: n, description: r } = e;
  if (t && (i || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: r } : { errorMap: (o, a) => {
    var l, h;
    const { message: m } = e;
    return o.code === "invalid_enum_value" ? { message: m ?? a.defaultError } : typeof a.data > "u" ? { message: (l = m ?? n) !== null && l !== void 0 ? l : a.defaultError } : o.code !== "invalid_type" ? { message: a.defaultError } : { message: (h = m ?? i) !== null && h !== void 0 ? h : a.defaultError };
  }, description: r };
}
class ze {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ei(t.data);
  }
  _getOrReturnCtx(t, i) {
    return i || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ei(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new It(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ei(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const i = this._parse(t);
    if (Xr(i))
      throw new Error("Synchronous parse encountered promise.");
    return i;
  }
  _parseAsync(t) {
    const i = this._parse(t);
    return Promise.resolve(i);
  }
  parse(t, i) {
    const n = this.safeParse(t, i);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, i) {
    var n;
    const r = {
      common: {
        issues: [],
        async: (n = i == null ? void 0 : i.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: i == null ? void 0 : i.errorMap
      },
      path: (i == null ? void 0 : i.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Ei(t)
    }, s = this._parseSync({ data: t, path: r.path, parent: r });
    return Bl(r, s);
  }
  async parseAsync(t, i) {
    const n = await this.safeParseAsync(t, i);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, i) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: i == null ? void 0 : i.errorMap,
        async: !0
      },
      path: (i == null ? void 0 : i.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Ei(t)
    }, r = this._parse({ data: t, path: n.path, parent: n }), s = await (Xr(r) ? r : Promise.resolve(r));
    return Bl(n, s);
  }
  refine(t, i) {
    const n = (r) => typeof i == "string" || typeof i > "u" ? { message: i } : typeof i == "function" ? i(r) : i;
    return this._refinement((r, s) => {
      const o = t(r), a = () => s.addIssue({
        code: Ie.custom,
        ...n(r)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(t, i) {
    return this._refinement((n, r) => t(n) ? !0 : (r.addIssue(typeof i == "function" ? i(n, r) : i), !1));
  }
  _refinement(t) {
    return new Jt({
      schema: this,
      typeName: Fe.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return ri.create(this, this._def);
  }
  nullable() {
    return Di.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Yt.create(this, this._def);
  }
  promise() {
    return mr.create(this, this._def);
  }
  or(t) {
    return Yr.create([this, t], this._def);
  }
  and(t) {
    return Ur.create(this, t, this._def);
  }
  transform(t) {
    return new Jt({
      ...We(this._def),
      schema: this,
      typeName: Fe.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const i = typeof t == "function" ? t : () => t;
    return new qr({
      ...We(this._def),
      innerType: this,
      defaultValue: i,
      typeName: Fe.ZodDefault
    });
  }
  brand() {
    return new Ca({
      typeName: Fe.ZodBranded,
      type: this,
      ...We(this._def)
    });
  }
  catch(t) {
    const i = typeof t == "function" ? t : () => t;
    return new en({
      ...We(this._def),
      innerType: this,
      catchValue: i,
      typeName: Fe.ZodCatch
    });
  }
  describe(t) {
    const i = this.constructor;
    return new i({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return cn.create(this, t);
  }
  readonly() {
    return tn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const w1 = /^c[^\s-]{8,}$/i, S1 = /^[0-9a-z]+$/, I1 = /^[0-9A-HJKMNP-TV-Z]{26}$/, A1 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, E1 = /^[a-z0-9_-]{21}$/i, T1 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, k1 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, M1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let oo;
const P1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, R1 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, O1 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ah = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", L1 = new RegExp(`^${Ah}$`);
function Eh(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function N1(e) {
  return new RegExp(`^${Eh(e)}$`);
}
function Th(e) {
  let t = `${Ah}T${Eh(e)}`;
  const i = [];
  return i.push(e.local ? "Z?" : "Z"), e.offset && i.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${i.join("|")})`, new RegExp(`^${t}$`);
}
function D1(e, t) {
  return !!((t === "v4" || !t) && P1.test(e) || (t === "v6" || !t) && R1.test(e));
}
class Zt extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== Me.string) {
      const s = this._getOrReturnCtx(t);
      return ke(s, {
        code: Ie.invalid_type,
        expected: Me.string,
        received: s.parsedType
      }), Ve;
    }
    const n = new It();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, a = t.data.length < s.value;
        (o || a) && (r = this._getOrReturnCtx(t, r), o ? ke(r, {
          code: Ie.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && ke(r, {
          code: Ie.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        k1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "email",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        oo || (oo = new RegExp(M1, "u")), oo.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "emoji",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        A1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "uuid",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        E1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "nanoid",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        w1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "cuid",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        S1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "cuid2",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        I1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "ulid",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), ke(r, {
            validation: "url",
            code: Ie.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "regex",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "datetime" ? Th(s).test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "date" ? L1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.invalid_string,
          validation: "date",
          message: s.message
        }), n.dirty()) : s.kind === "time" ? N1(s).test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          code: Ie.invalid_string,
          validation: "time",
          message: s.message
        }), n.dirty()) : s.kind === "duration" ? T1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "duration",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? D1(t.data, s.version) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "ip",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty()) : s.kind === "base64" ? O1.test(t.data) || (r = this._getOrReturnCtx(t, r), ke(r, {
          validation: "base64",
          code: Ie.invalid_string,
          message: s.message
        }), n.dirty()) : Je.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, i, n) {
    return this.refinement((r) => t.test(r), {
      validation: i,
      code: Ie.invalid_string,
      ...Re.errToObj(n)
    });
  }
  _addCheck(t) {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Re.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Re.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Re.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Re.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Re.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Re.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Re.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Re.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Re.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Re.errToObj(t) });
  }
  datetime(t) {
    var i, n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (i = t == null ? void 0 : t.offset) !== null && i !== void 0 ? i : !1,
      local: (n = t == null ? void 0 : t.local) !== null && n !== void 0 ? n : !1,
      ...Re.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...Re.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Re.errToObj(t) });
  }
  regex(t, i) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Re.errToObj(i)
    });
  }
  includes(t, i) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: i == null ? void 0 : i.position,
      ...Re.errToObj(i == null ? void 0 : i.message)
    });
  }
  startsWith(t, i) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Re.errToObj(i)
    });
  }
  endsWith(t, i) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Re.errToObj(i)
    });
  }
  min(t, i) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Re.errToObj(i)
    });
  }
  max(t, i) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Re.errToObj(i)
    });
  }
  length(t, i) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Re.errToObj(i)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Re.errToObj(t));
  }
  trim() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t;
  }
}
Zt.create = (e) => {
  var t;
  return new Zt({
    checks: [],
    typeName: Fe.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...We(e)
  });
};
function B1(e, t) {
  const i = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, r = i > n ? i : n, s = parseInt(e.toFixed(r).replace(".", "")), o = parseInt(t.toFixed(r).replace(".", ""));
  return s % o / Math.pow(10, r);
}
class Oi extends ze {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== Me.number) {
      const s = this._getOrReturnCtx(t);
      return ke(s, {
        code: Ie.invalid_type,
        expected: Me.number,
        received: s.parsedType
      }), Ve;
    }
    let n;
    const r = new It();
    for (const s of this._def.checks)
      s.kind === "int" ? Je.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? B1(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.not_finite,
        message: s.message
      }), r.dirty()) : Je.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, i) {
    return this.setLimit("min", t, !0, Re.toString(i));
  }
  gt(t, i) {
    return this.setLimit("min", t, !1, Re.toString(i));
  }
  lte(t, i) {
    return this.setLimit("max", t, !0, Re.toString(i));
  }
  lt(t, i) {
    return this.setLimit("max", t, !1, Re.toString(i));
  }
  setLimit(t, i, n, r) {
    return new Oi({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: i,
          inclusive: n,
          message: Re.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Oi({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Re.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  multipleOf(t, i) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Re.toString(i)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Re.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Re.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Re.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Je.isInteger(t.value));
  }
  get isFinite() {
    let t = null, i = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (i === null || n.value > i) && (i = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(i) && Number.isFinite(t);
  }
}
Oi.create = (e) => new Oi({
  checks: [],
  typeName: Fe.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...We(e)
});
class Li extends ze {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== Me.bigint) {
      const s = this._getOrReturnCtx(t);
      return ke(s, {
        code: Ie.invalid_type,
        expected: Me.bigint,
        received: s.parsedType
      }), Ve;
    }
    let n;
    const r = new It();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), ke(n, {
        code: Ie.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : Je.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, i) {
    return this.setLimit("min", t, !0, Re.toString(i));
  }
  gt(t, i) {
    return this.setLimit("min", t, !1, Re.toString(i));
  }
  lte(t, i) {
    return this.setLimit("max", t, !0, Re.toString(i));
  }
  lt(t, i) {
    return this.setLimit("max", t, !1, Re.toString(i));
  }
  setLimit(t, i, n, r) {
    return new Li({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: i,
          inclusive: n,
          message: Re.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Li({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Re.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Re.toString(t)
    });
  }
  multipleOf(t, i) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Re.toString(i)
    });
  }
  get minValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t;
  }
}
Li.create = (e) => {
  var t;
  return new Li({
    checks: [],
    typeName: Fe.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...We(e)
  });
};
class Hr extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Me.boolean) {
      const n = this._getOrReturnCtx(t);
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.boolean,
        received: n.parsedType
      }), Ve;
    }
    return kt(t.data);
  }
}
Hr.create = (e) => new Hr({
  typeName: Fe.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...We(e)
});
class Ui extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== Me.date) {
      const s = this._getOrReturnCtx(t);
      return ke(s, {
        code: Ie.invalid_type,
        expected: Me.date,
        received: s.parsedType
      }), Ve;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return ke(s, {
        code: Ie.invalid_date
      }), Ve;
    }
    const n = new It();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), ke(r, {
        code: Ie.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), ke(r, {
        code: Ie.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : Je.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Ui({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, i) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Re.toString(i)
    });
  }
  max(t, i) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Re.toString(i)
    });
  }
  get minDate() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t != null ? new Date(t) : null;
  }
}
Ui.create = (e) => new Ui({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Fe.ZodDate,
  ...We(e)
});
class as extends ze {
  _parse(t) {
    if (this._getType(t) !== Me.symbol) {
      const n = this._getOrReturnCtx(t);
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.symbol,
        received: n.parsedType
      }), Ve;
    }
    return kt(t.data);
  }
}
as.create = (e) => new as({
  typeName: Fe.ZodSymbol,
  ...We(e)
});
class zr extends ze {
  _parse(t) {
    if (this._getType(t) !== Me.undefined) {
      const n = this._getOrReturnCtx(t);
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.undefined,
        received: n.parsedType
      }), Ve;
    }
    return kt(t.data);
  }
}
zr.create = (e) => new zr({
  typeName: Fe.ZodUndefined,
  ...We(e)
});
class Zr extends ze {
  _parse(t) {
    if (this._getType(t) !== Me.null) {
      const n = this._getOrReturnCtx(t);
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.null,
        received: n.parsedType
      }), Ve;
    }
    return kt(t.data);
  }
}
Zr.create = (e) => new Zr({
  typeName: Fe.ZodNull,
  ...We(e)
});
class gr extends ze {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return kt(t.data);
  }
}
gr.create = (e) => new gr({
  typeName: Fe.ZodAny,
  ...We(e)
});
class Xi extends ze {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return kt(t.data);
  }
}
Xi.create = (e) => new Xi({
  typeName: Fe.ZodUnknown,
  ...We(e)
});
class bi extends ze {
  _parse(t) {
    const i = this._getOrReturnCtx(t);
    return ke(i, {
      code: Ie.invalid_type,
      expected: Me.never,
      received: i.parsedType
    }), Ve;
  }
}
bi.create = (e) => new bi({
  typeName: Fe.ZodNever,
  ...We(e)
});
class ls extends ze {
  _parse(t) {
    if (this._getType(t) !== Me.undefined) {
      const n = this._getOrReturnCtx(t);
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.void,
        received: n.parsedType
      }), Ve;
    }
    return kt(t.data);
  }
}
ls.create = (e) => new ls({
  typeName: Fe.ZodVoid,
  ...We(e)
});
class Yt extends ze {
  _parse(t) {
    const { ctx: i, status: n } = this._processInputParams(t), r = this._def;
    if (i.parsedType !== Me.array)
      return ke(i, {
        code: Ie.invalid_type,
        expected: Me.array,
        received: i.parsedType
      }), Ve;
    if (r.exactLength !== null) {
      const o = i.data.length > r.exactLength.value, a = i.data.length < r.exactLength.value;
      (o || a) && (ke(i, {
        code: o ? Ie.too_big : Ie.too_small,
        minimum: a ? r.exactLength.value : void 0,
        maximum: o ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), n.dirty());
    }
    if (r.minLength !== null && i.data.length < r.minLength.value && (ke(i, {
      code: Ie.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), n.dirty()), r.maxLength !== null && i.data.length > r.maxLength.value && (ke(i, {
      code: Ie.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), n.dirty()), i.common.async)
      return Promise.all([...i.data].map((o, a) => r.type._parseAsync(new si(i, o, i.path, a)))).then((o) => It.mergeArray(n, o));
    const s = [...i.data].map((o, a) => r.type._parseSync(new si(i, o, i.path, a)));
    return It.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, i) {
    return new Yt({
      ...this._def,
      minLength: { value: t, message: Re.toString(i) }
    });
  }
  max(t, i) {
    return new Yt({
      ...this._def,
      maxLength: { value: t, message: Re.toString(i) }
    });
  }
  length(t, i) {
    return new Yt({
      ...this._def,
      exactLength: { value: t, message: Re.toString(i) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Yt.create = (e, t) => new Yt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Fe.ZodArray,
  ...We(t)
});
function rr(e) {
  if (e instanceof lt) {
    const t = {};
    for (const i in e.shape) {
      const n = e.shape[i];
      t[i] = ri.create(rr(n));
    }
    return new lt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Yt ? new Yt({
      ...e._def,
      type: rr(e.element)
    }) : e instanceof ri ? ri.create(rr(e.unwrap())) : e instanceof Di ? Di.create(rr(e.unwrap())) : e instanceof oi ? oi.create(e.items.map((t) => rr(t))) : e;
}
class lt extends ze {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), i = Je.objectKeys(t);
    return this._cached = { shape: t, keys: i };
  }
  _parse(t) {
    if (this._getType(t) !== Me.object) {
      const h = this._getOrReturnCtx(t);
      return ke(h, {
        code: Ie.invalid_type,
        expected: Me.object,
        received: h.parsedType
      }), Ve;
    }
    const { status: n, ctx: r } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof bi && this._def.unknownKeys === "strip"))
      for (const h in r.data)
        o.includes(h) || a.push(h);
    const l = [];
    for (const h of o) {
      const m = s[h], g = r.data[h];
      l.push({
        key: { status: "valid", value: h },
        value: m._parse(new si(r, g, r.path, h)),
        alwaysSet: h in r.data
      });
    }
    if (this._def.catchall instanceof bi) {
      const h = this._def.unknownKeys;
      if (h === "passthrough")
        for (const m of a)
          l.push({
            key: { status: "valid", value: m },
            value: { status: "valid", value: r.data[m] }
          });
      else if (h === "strict")
        a.length > 0 && (ke(r, {
          code: Ie.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (h !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const h = this._def.catchall;
      for (const m of a) {
        const g = r.data[m];
        l.push({
          key: { status: "valid", value: m },
          value: h._parse(
            new si(r, g, r.path, m)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: m in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const h = [];
      for (const m of l) {
        const g = await m.key, M = await m.value;
        h.push({
          key: g,
          value: M,
          alwaysSet: m.alwaysSet
        });
      }
      return h;
    }).then((h) => It.mergeObjectSync(n, h)) : It.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Re.errToObj, new lt({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (i, n) => {
          var r, s, o, a;
          const l = (o = (s = (r = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(r, i, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return i.code === "unrecognized_keys" ? {
            message: (a = Re.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new lt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new lt({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new lt({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new lt({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Fe.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, i) {
    return this.augment({ [t]: i });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new lt({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const i = {};
    return Je.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (i[n] = this.shape[n]);
    }), new lt({
      ...this._def,
      shape: () => i
    });
  }
  omit(t) {
    const i = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      t[n] || (i[n] = this.shape[n]);
    }), new lt({
      ...this._def,
      shape: () => i
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return rr(this);
  }
  partial(t) {
    const i = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      const r = this.shape[n];
      t && !t[n] ? i[n] = r : i[n] = r.optional();
    }), new lt({
      ...this._def,
      shape: () => i
    });
  }
  required(t) {
    const i = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        i[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof ri; )
          s = s._def.innerType;
        i[n] = s;
      }
    }), new lt({
      ...this._def,
      shape: () => i
    });
  }
  keyof() {
    return kh(Je.objectKeys(this.shape));
  }
}
lt.create = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: bi.create(),
  typeName: Fe.ZodObject,
  ...We(t)
});
lt.strictCreate = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: bi.create(),
  typeName: Fe.ZodObject,
  ...We(t)
});
lt.lazycreate = (e, t) => new lt({
  shape: e,
  unknownKeys: "strip",
  catchall: bi.create(),
  typeName: Fe.ZodObject,
  ...We(t)
});
class Yr extends ze {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t), n = this._def.options;
    function r(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return i.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((a) => new Ft(a.ctx.common.issues));
      return ke(i, {
        code: Ie.invalid_union,
        unionErrors: o
      }), Ve;
    }
    if (i.common.async)
      return Promise.all(n.map(async (s) => {
        const o = {
          ...i,
          common: {
            ...i.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: i.data,
            path: i.path,
            parent: o
          }),
          ctx: o
        };
      })).then(r);
    {
      let s;
      const o = [];
      for (const l of n) {
        const h = {
          ...i,
          common: {
            ...i.common,
            issues: []
          },
          parent: null
        }, m = l._parseSync({
          data: i.data,
          path: i.path,
          parent: h
        });
        if (m.status === "valid")
          return m;
        m.status === "dirty" && !s && (s = { result: m, ctx: h }), h.common.issues.length && o.push(h.common.issues);
      }
      if (s)
        return i.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((l) => new Ft(l));
      return ke(i, {
        code: Ie.invalid_union,
        unionErrors: a
      }), Ve;
    }
  }
  get options() {
    return this._def.options;
  }
}
Yr.create = (e, t) => new Yr({
  options: e,
  typeName: Fe.ZodUnion,
  ...We(t)
});
const di = (e) => e instanceof Jr ? di(e.schema) : e instanceof Jt ? di(e.innerType()) : e instanceof Qr ? [e.value] : e instanceof Ni ? e.options : e instanceof Kr ? Je.objectValues(e.enum) : e instanceof qr ? di(e._def.innerType) : e instanceof zr ? [void 0] : e instanceof Zr ? [null] : e instanceof ri ? [void 0, ...di(e.unwrap())] : e instanceof Di ? [null, ...di(e.unwrap())] : e instanceof Ca || e instanceof tn ? di(e.unwrap()) : e instanceof en ? di(e._def.innerType) : [];
class Ls extends ze {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Me.object)
      return ke(i, {
        code: Ie.invalid_type,
        expected: Me.object,
        received: i.parsedType
      }), Ve;
    const n = this.discriminator, r = i.data[n], s = this.optionsMap.get(r);
    return s ? i.common.async ? s._parseAsync({
      data: i.data,
      path: i.path,
      parent: i
    }) : s._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }) : (ke(i, {
      code: Ie.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), Ve);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, i, n) {
    const r = /* @__PURE__ */ new Map();
    for (const s of i) {
      const o = di(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (r.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        r.set(a, s);
      }
    }
    return new Ls({
      typeName: Fe.ZodDiscriminatedUnion,
      discriminator: t,
      options: i,
      optionsMap: r,
      ...We(n)
    });
  }
}
function _o(e, t) {
  const i = Ei(e), n = Ei(t);
  if (e === t)
    return { valid: !0, data: e };
  if (i === Me.object && n === Me.object) {
    const r = Je.objectKeys(t), s = Je.objectKeys(e).filter((a) => r.indexOf(a) !== -1), o = { ...e, ...t };
    for (const a of s) {
      const l = _o(e[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (i === Me.array && n === Me.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], a = t[s], l = _o(o, a);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else
    return i === Me.date && n === Me.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ur extends ze {
  _parse(t) {
    const { status: i, ctx: n } = this._processInputParams(t), r = (s, o) => {
      if (jo(s) || jo(o))
        return Ve;
      const a = _o(s.value, o.value);
      return a.valid ? ((Fo(s) || Fo(o)) && i.dirty(), { status: i.value, value: a.data }) : (ke(n, {
        code: Ie.invalid_intersection_types
      }), Ve);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([s, o]) => r(s, o)) : r(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Ur.create = (e, t, i) => new Ur({
  left: e,
  right: t,
  typeName: Fe.ZodIntersection,
  ...We(i)
});
class oi extends ze {
  _parse(t) {
    const { status: i, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Me.array)
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.array,
        received: n.parsedType
      }), Ve;
    if (n.data.length < this._def.items.length)
      return ke(n, {
        code: Ie.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Ve;
    !this._def.rest && n.data.length > this._def.items.length && (ke(n, {
      code: Ie.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), i.dirty());
    const s = [...n.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new si(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => It.mergeArray(i, o)) : It.mergeArray(i, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new oi({
      ...this._def,
      rest: t
    });
  }
}
oi.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new oi({
    items: e,
    typeName: Fe.ZodTuple,
    rest: null,
    ...We(t)
  });
};
class $r extends ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: i, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Me.object)
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.object,
        received: n.parsedType
      }), Ve;
    const r = [], s = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      r.push({
        key: s._parse(new si(n, a, n.path, a)),
        value: o._parse(new si(n, n.data[a], n.path, a)),
        alwaysSet: a in n.data
      });
    return n.common.async ? It.mergeObjectAsync(i, r) : It.mergeObjectSync(i, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, i, n) {
    return i instanceof ze ? new $r({
      keyType: t,
      valueType: i,
      typeName: Fe.ZodRecord,
      ...We(n)
    }) : new $r({
      keyType: Zt.create(),
      valueType: t,
      typeName: Fe.ZodRecord,
      ...We(i)
    });
  }
}
class cs extends ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: i, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Me.map)
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.map,
        received: n.parsedType
      }), Ve;
    const r = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([a, l], h) => ({
      key: r._parse(new si(n, a, n.path, [h, "key"])),
      value: s._parse(new si(n, l, n.path, [h, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const h = await l.key, m = await l.value;
          if (h.status === "aborted" || m.status === "aborted")
            return Ve;
          (h.status === "dirty" || m.status === "dirty") && i.dirty(), a.set(h.value, m.value);
        }
        return { status: i.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const h = l.key, m = l.value;
        if (h.status === "aborted" || m.status === "aborted")
          return Ve;
        (h.status === "dirty" || m.status === "dirty") && i.dirty(), a.set(h.value, m.value);
      }
      return { status: i.value, value: a };
    }
  }
}
cs.create = (e, t, i) => new cs({
  valueType: t,
  keyType: e,
  typeName: Fe.ZodMap,
  ...We(i)
});
class $i extends ze {
  _parse(t) {
    const { status: i, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Me.set)
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.set,
        received: n.parsedType
      }), Ve;
    const r = this._def;
    r.minSize !== null && n.data.size < r.minSize.value && (ke(n, {
      code: Ie.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), i.dirty()), r.maxSize !== null && n.data.size > r.maxSize.value && (ke(n, {
      code: Ie.too_big,
      maximum: r.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.maxSize.message
    }), i.dirty());
    const s = this._def.valueType;
    function o(l) {
      const h = /* @__PURE__ */ new Set();
      for (const m of l) {
        if (m.status === "aborted")
          return Ve;
        m.status === "dirty" && i.dirty(), h.add(m.value);
      }
      return { status: i.value, value: h };
    }
    const a = [...n.data.values()].map((l, h) => s._parse(new si(n, l, n.path, h)));
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(t, i) {
    return new $i({
      ...this._def,
      minSize: { value: t, message: Re.toString(i) }
    });
  }
  max(t, i) {
    return new $i({
      ...this._def,
      maxSize: { value: t, message: Re.toString(i) }
    });
  }
  size(t, i) {
    return this.min(t, i).max(t, i);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
$i.create = (e, t) => new $i({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Fe.ZodSet,
  ...We(t)
});
class cr extends ze {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Me.function)
      return ke(i, {
        code: Ie.invalid_type,
        expected: Me.function,
        received: i.parsedType
      }), Ve;
    function n(a, l) {
      return ss({
        data: a,
        path: i.path,
        errorMaps: [
          i.common.contextualErrorMap,
          i.schemaErrorMap,
          ns(),
          pr
        ].filter((h) => !!h),
        issueData: {
          code: Ie.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function r(a, l) {
      return ss({
        data: a,
        path: i.path,
        errorMaps: [
          i.common.contextualErrorMap,
          i.schemaErrorMap,
          ns(),
          pr
        ].filter((h) => !!h),
        issueData: {
          code: Ie.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const s = { errorMap: i.common.contextualErrorMap }, o = i.data;
    if (this._def.returns instanceof mr) {
      const a = this;
      return kt(async function(...l) {
        const h = new Ft([]), m = await a._def.args.parseAsync(l, s).catch((N) => {
          throw h.addIssue(n(l, N)), h;
        }), g = await Reflect.apply(o, this, m);
        return await a._def.returns._def.type.parseAsync(g, s).catch((N) => {
          throw h.addIssue(r(g, N)), h;
        });
      });
    } else {
      const a = this;
      return kt(function(...l) {
        const h = a._def.args.safeParse(l, s);
        if (!h.success)
          throw new Ft([n(l, h.error)]);
        const m = Reflect.apply(o, this, h.data), g = a._def.returns.safeParse(m, s);
        if (!g.success)
          throw new Ft([r(m, g.error)]);
        return g.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new cr({
      ...this._def,
      args: oi.create(t).rest(Xi.create())
    });
  }
  returns(t) {
    return new cr({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, i, n) {
    return new cr({
      args: t || oi.create([]).rest(Xi.create()),
      returns: i || Xi.create(),
      typeName: Fe.ZodFunction,
      ...We(n)
    });
  }
}
class Jr extends ze {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    return this._def.getter()._parse({ data: i.data, path: i.path, parent: i });
  }
}
Jr.create = (e, t) => new Jr({
  getter: e,
  typeName: Fe.ZodLazy,
  ...We(t)
});
class Qr extends ze {
  _parse(t) {
    if (t.data !== this._def.value) {
      const i = this._getOrReturnCtx(t);
      return ke(i, {
        received: i.data,
        code: Ie.invalid_literal,
        expected: this._def.value
      }), Ve;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Qr.create = (e, t) => new Qr({
  value: e,
  typeName: Fe.ZodLiteral,
  ...We(t)
});
function kh(e, t) {
  return new Ni({
    values: e,
    typeName: Fe.ZodEnum,
    ...We(t)
  });
}
class Ni extends ze {
  constructor() {
    super(...arguments), Or.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const i = this._getOrReturnCtx(t), n = this._def.values;
      return ke(i, {
        expected: Je.joinValues(n),
        received: i.parsedType,
        code: Ie.invalid_type
      }), Ve;
    }
    if (os(this, Or, "f") || Ih(this, Or, new Set(this._def.values), "f"), !os(this, Or, "f").has(t.data)) {
      const i = this._getOrReturnCtx(t), n = this._def.values;
      return ke(i, {
        received: i.data,
        code: Ie.invalid_enum_value,
        options: n
      }), Ve;
    }
    return kt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const i of this._def.values)
      t[i] = i;
    return t;
  }
  get Values() {
    const t = {};
    for (const i of this._def.values)
      t[i] = i;
    return t;
  }
  get Enum() {
    const t = {};
    for (const i of this._def.values)
      t[i] = i;
    return t;
  }
  extract(t, i = this._def) {
    return Ni.create(t, {
      ...this._def,
      ...i
    });
  }
  exclude(t, i = this._def) {
    return Ni.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...i
    });
  }
}
Or = /* @__PURE__ */ new WeakMap();
Ni.create = kh;
class Kr extends ze {
  constructor() {
    super(...arguments), Lr.set(this, void 0);
  }
  _parse(t) {
    const i = Je.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== Me.string && n.parsedType !== Me.number) {
      const r = Je.objectValues(i);
      return ke(n, {
        expected: Je.joinValues(r),
        received: n.parsedType,
        code: Ie.invalid_type
      }), Ve;
    }
    if (os(this, Lr, "f") || Ih(this, Lr, new Set(Je.getValidEnumValues(this._def.values)), "f"), !os(this, Lr, "f").has(t.data)) {
      const r = Je.objectValues(i);
      return ke(n, {
        received: n.data,
        code: Ie.invalid_enum_value,
        options: r
      }), Ve;
    }
    return kt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Lr = /* @__PURE__ */ new WeakMap();
Kr.create = (e, t) => new Kr({
  values: e,
  typeName: Fe.ZodNativeEnum,
  ...We(t)
});
class mr extends ze {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Me.promise && i.common.async === !1)
      return ke(i, {
        code: Ie.invalid_type,
        expected: Me.promise,
        received: i.parsedType
      }), Ve;
    const n = i.parsedType === Me.promise ? i.data : Promise.resolve(i.data);
    return kt(n.then((r) => this._def.type.parseAsync(r, {
      path: i.path,
      errorMap: i.common.contextualErrorMap
    })));
  }
}
mr.create = (e, t) => new mr({
  type: e,
  typeName: Fe.ZodPromise,
  ...We(t)
});
class Jt extends ze {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Fe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: i, ctx: n } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (o) => {
        ke(n, o), o.fatal ? i.abort() : i.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), r.type === "preprocess") {
      const o = r.transform(n.data, s);
      if (n.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (i.value === "aborted")
            return Ve;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? Ve : l.status === "dirty" || i.value === "dirty" ? nr(l.value) : l;
        });
      {
        if (i.value === "aborted")
          return Ve;
        const a = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? Ve : a.status === "dirty" || i.value === "dirty" ? nr(a.value) : a;
      }
    }
    if (r.type === "refinement") {
      const o = (a) => {
        const l = r.refinement(a, s);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? Ve : (a.status === "dirty" && i.dirty(), o(a.value), { status: i.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? Ve : (a.status === "dirty" && i.dirty(), o(a.value).then(() => ({ status: i.value, value: a.value }))));
    }
    if (r.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Wr(o))
          return o;
        const a = r.transform(o.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: i.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => Wr(o) ? Promise.resolve(r.transform(o.value, s)).then((a) => ({ status: i.value, value: a })) : o);
    Je.assertNever(r);
  }
}
Jt.create = (e, t, i) => new Jt({
  schema: e,
  typeName: Fe.ZodEffects,
  effect: t,
  ...We(i)
});
Jt.createWithPreprocess = (e, t, i) => new Jt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Fe.ZodEffects,
  ...We(i)
});
class ri extends ze {
  _parse(t) {
    return this._getType(t) === Me.undefined ? kt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ri.create = (e, t) => new ri({
  innerType: e,
  typeName: Fe.ZodOptional,
  ...We(t)
});
class Di extends ze {
  _parse(t) {
    return this._getType(t) === Me.null ? kt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Di.create = (e, t) => new Di({
  innerType: e,
  typeName: Fe.ZodNullable,
  ...We(t)
});
class qr extends ze {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    let n = i.data;
    return i.parsedType === Me.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: i.path,
      parent: i
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
qr.create = (e, t) => new qr({
  innerType: e,
  typeName: Fe.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...We(t)
});
class en extends ze {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t), n = {
      ...i,
      common: {
        ...i.common,
        issues: []
      }
    }, r = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Xr(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Ft(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Ft(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
en.create = (e, t) => new en({
  innerType: e,
  typeName: Fe.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...We(t)
});
class us extends ze {
  _parse(t) {
    if (this._getType(t) !== Me.nan) {
      const n = this._getOrReturnCtx(t);
      return ke(n, {
        code: Ie.invalid_type,
        expected: Me.nan,
        received: n.parsedType
      }), Ve;
    }
    return { status: "valid", value: t.data };
  }
}
us.create = (e) => new us({
  typeName: Fe.ZodNaN,
  ...We(e)
});
const j1 = Symbol("zod_brand");
class Ca extends ze {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t), n = i.data;
    return this._def.type._parse({
      data: n,
      path: i.path,
      parent: i
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class cn extends ze {
  _parse(t) {
    const { status: i, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? Ve : s.status === "dirty" ? (i.dirty(), nr(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const r = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return r.status === "aborted" ? Ve : r.status === "dirty" ? (i.dirty(), {
        status: "dirty",
        value: r.value
      }) : this._def.out._parseSync({
        data: r.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, i) {
    return new cn({
      in: t,
      out: i,
      typeName: Fe.ZodPipeline
    });
  }
}
class tn extends ze {
  _parse(t) {
    const i = this._def.innerType._parse(t), n = (r) => (Wr(r) && (r.value = Object.freeze(r.value)), r);
    return Xr(i) ? i.then((r) => n(r)) : n(i);
  }
  unwrap() {
    return this._def.innerType;
  }
}
tn.create = (e, t) => new tn({
  innerType: e,
  typeName: Fe.ZodReadonly,
  ...We(t)
});
function Mh(e, t = {}, i) {
  return e ? gr.create().superRefine((n, r) => {
    var s, o;
    if (!e(n)) {
      const a = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, l = (o = (s = a.fatal) !== null && s !== void 0 ? s : i) !== null && o !== void 0 ? o : !0, h = typeof a == "string" ? { message: a } : a;
      r.addIssue({ code: "custom", ...h, fatal: l });
    }
  }) : gr.create();
}
const F1 = {
  object: lt.lazycreate
};
var Fe;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Fe || (Fe = {}));
const _1 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Mh((i) => i instanceof e, t), Ph = Zt.create, Rh = Oi.create, V1 = us.create, G1 = Li.create, Oh = Hr.create, W1 = Ui.create, X1 = as.create, H1 = zr.create, z1 = Zr.create, Z1 = gr.create, Y1 = Xi.create, U1 = bi.create, $1 = ls.create, J1 = Yt.create, Q1 = lt.create, K1 = lt.strictCreate, q1 = Yr.create, eC = Ls.create, tC = Ur.create, iC = oi.create, rC = $r.create, nC = cs.create, sC = $i.create, oC = cr.create, aC = Jr.create, lC = Qr.create, cC = Ni.create, uC = Kr.create, dC = mr.create, jl = Jt.create, hC = ri.create, fC = Di.create, pC = Jt.createWithPreprocess, gC = cn.create, mC = () => Ph().optional(), bC = () => Rh().optional(), vC = () => Oh().optional(), yC = {
  string: (e) => Zt.create({ ...e, coerce: !0 }),
  number: (e) => Oi.create({ ...e, coerce: !0 }),
  boolean: (e) => Hr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Li.create({ ...e, coerce: !0 }),
  date: (e) => Ui.create({ ...e, coerce: !0 })
}, xC = Ve;
var In = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: pr,
  setErrorMap: x1,
  getErrorMap: ns,
  makeIssue: ss,
  EMPTY_PATH: C1,
  addIssueToContext: ke,
  ParseStatus: It,
  INVALID: Ve,
  DIRTY: nr,
  OK: kt,
  isAborted: jo,
  isDirty: Fo,
  isValid: Wr,
  isAsync: Xr,
  get util() {
    return Je;
  },
  get objectUtil() {
    return Bo;
  },
  ZodParsedType: Me,
  getParsedType: Ei,
  ZodType: ze,
  datetimeRegex: Th,
  ZodString: Zt,
  ZodNumber: Oi,
  ZodBigInt: Li,
  ZodBoolean: Hr,
  ZodDate: Ui,
  ZodSymbol: as,
  ZodUndefined: zr,
  ZodNull: Zr,
  ZodAny: gr,
  ZodUnknown: Xi,
  ZodNever: bi,
  ZodVoid: ls,
  ZodArray: Yt,
  ZodObject: lt,
  ZodUnion: Yr,
  ZodDiscriminatedUnion: Ls,
  ZodIntersection: Ur,
  ZodTuple: oi,
  ZodRecord: $r,
  ZodMap: cs,
  ZodSet: $i,
  ZodFunction: cr,
  ZodLazy: Jr,
  ZodLiteral: Qr,
  ZodEnum: Ni,
  ZodNativeEnum: Kr,
  ZodPromise: mr,
  ZodEffects: Jt,
  ZodTransformer: Jt,
  ZodOptional: ri,
  ZodNullable: Di,
  ZodDefault: qr,
  ZodCatch: en,
  ZodNaN: us,
  BRAND: j1,
  ZodBranded: Ca,
  ZodPipeline: cn,
  ZodReadonly: tn,
  custom: Mh,
  Schema: ze,
  ZodSchema: ze,
  late: F1,
  get ZodFirstPartyTypeKind() {
    return Fe;
  },
  coerce: yC,
  any: Z1,
  array: J1,
  bigint: G1,
  boolean: Oh,
  date: W1,
  discriminatedUnion: eC,
  effect: jl,
  enum: cC,
  function: oC,
  instanceof: _1,
  intersection: tC,
  lazy: aC,
  literal: lC,
  map: nC,
  nan: V1,
  nativeEnum: uC,
  never: U1,
  null: z1,
  nullable: fC,
  number: Rh,
  object: Q1,
  oboolean: vC,
  onumber: bC,
  optional: hC,
  ostring: mC,
  pipeline: gC,
  preprocess: pC,
  promise: dC,
  record: rC,
  set: sC,
  strictObject: K1,
  string: Ph,
  symbol: X1,
  transformer: jl,
  tuple: iC,
  undefined: H1,
  union: q1,
  unknown: Y1,
  void: $1,
  NEVER: xC,
  ZodIssueCode: Ie,
  quotelessJson: y1,
  ZodError: Ft
});
const CC = In.object({
  name: In.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  identifier: In.string().min(2, {
    message: "Identifier must be selected."
  }),
  dimension: In.string().min(2, {
    message: "Dimension must be selected."
  })
}), wC = ({
  dimensions: e,
  filterPropertieOperators: t,
  filterPropertieValues: i,
  filterProperties: n,
  identifiers: r,
  isUpdate: s = !1,
  updateProps: o,
  units: a,
  dashboardRedirectionOptions: l,
  onSaveOrUpdateChart: h,
  onViewChart: m,
  rootStyles: g,
  isViewChartLoading: M
}) => {
  var O, z, H, F, E, k, v, u, c, w, T, D, G, L, J, se, _;
  const [N, f] = Dt("view"), [b, S] = Dt(s && (o != null && o.customFilters) ? o == null ? void 0 : o.customFilters : []), [y, d] = Dt({
    colorScheme: s && (o != null && o.customization.colorScheme) ? o == null ? void 0 : o.customization.colorScheme : "rainbowOf10",
    chartType: s && ((O = o == null ? void 0 : o.customization) != null && O.chartType) ? (z = o == null ? void 0 : o.customization) == null ? void 0 : z.chartType : "pieChart",
    unit: s && ((H = o == null ? void 0 : o.customization) != null && H.unit) ? (F = o == null ? void 0 : o.customization) == null ? void 0 : F.unit : null,
    showDataValues: s && ((E = o == null ? void 0 : o.customization) != null && E.showDataValues) ? (k = o == null ? void 0 : o.customization) == null ? void 0 : k.showDataValues : !1,
    showDataLabels: s && ((v = o == null ? void 0 : o.customization) != null && v.showDataLabels) ? (u = o == null ? void 0 : o.customization) == null ? void 0 : u.showDataLabels : !1,
    showlegends: s && ((c = o == null ? void 0 : o.customization) != null && c.showlegends) ? (w = o == null ? void 0 : o.customization) == null ? void 0 : w.showlegends : !1,
    dashboardRedirectionUrl: s && ((T = o == null ? void 0 : o.customization) != null && T.dashboardRedirectionUrl) ? (D = o == null ? void 0 : o.customization) == null ? void 0 : D.dashboardRedirectionUrl : null
  }), x = (G = Object.keys(An)) == null ? void 0 : G.map((X) => ({
    label: X,
    value: X
  })), I = kx({
    resolver: h1(CC),
    defaultValues: {
      name: s ? (L = o == null ? void 0 : o.visualization) == null ? void 0 : L.name : "",
      identifier: s ? (J = o == null ? void 0 : o.visualization) == null ? void 0 : J.identifier : "",
      dimension: s ? (se = o == null ? void 0 : o.visualization) == null ? void 0 : se.dimension : ""
    }
  });
  function C(X) {
    N === "view" ? m({
      visualization: X,
      customization: y,
      customFilters: b
    }) : (h({
      visualization: X,
      customization: y,
      customFilters: b
    }), S([]), d({
      colorScheme: "rainbowOf10",
      chartType: "pieChart",
      unit: null,
      showDataValues: !1,
      showDataLabels: !1,
      showlegends: !1,
      dashboardRedirectionUrl: null
    }), I.reset());
  }
  const A = Gi(() => b.some(
    (X) => X.name === "" || X.data_type === "" || X.value.length === 0
  ), [b]);
  return /* @__PURE__ */ oe.jsx(
    ur,
    {
      className: "p-6 flex flex-col gap-5 min-w-[700px]",
      id: "pie-chart-creation",
      style: {
        ...g
      },
      children: /* @__PURE__ */ oe.jsx(Rx, { ...I, children: /* @__PURE__ */ oe.jsxs("form", { onSubmit: I.handleSubmit(C), className: "space-y-8", children: [
        /* @__PURE__ */ oe.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ oe.jsx(Go, { className: "text-2xl font-medium", children: "Pie Chart" }),
          /* @__PURE__ */ oe.jsx(Wo, { className: "text-base", children: "Breaks down data into segments, illustrating each category's contribution to the whole." })
        ] }),
        /* @__PURE__ */ oe.jsx("div", { className: "w-full", children: /* @__PURE__ */ oe.jsxs(l1, { defaultValue: "visualization", className: "w-full", children: [
          /* @__PURE__ */ oe.jsxs(xh, { className: "border-none bg-transparent shadow-none", children: [
            /* @__PURE__ */ oe.jsx(
              No,
              {
                value: "visualization",
                className: "h-10 rounded-none border-b-2 border-transparent text-lg data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:font-normal data-[state=active]:text-slate-900 data-[state=active]:ring-0 data-[state=active]:hover:bg-transparent data-[state=active]:hover:text-slate-900 data-[state=active]:shadow-none",
                children: "Data Visualization"
              }
            ),
            /* @__PURE__ */ oe.jsx(
              No,
              {
                value: "customization",
                className: "h-10 rounded-none border-b-2 border-transparent text-lg data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:font-normal data-[state=active]:text-slate-900 data-[state=active]:ring-0 data-[state=active]:hover:bg-transparent data-[state=active]:hover:text-slate-900 data-[state=active]:shadow-none",
                children: "Customization"
              }
            )
          ] }),
          /* @__PURE__ */ oe.jsxs(
            Do,
            {
              value: "visualization",
              className: "mt-3 flex flex-col gap-3 data-[state=inactive]:hidden ",
              children: [
                /* @__PURE__ */ oe.jsx(
                  no,
                  {
                    control: I.control,
                    name: "name",
                    render: ({ field: X }) => /* @__PURE__ */ oe.jsxs(Bn, { children: [
                      /* @__PURE__ */ oe.jsx(jn, { className: "font-normal", children: "Name of Visualization" }),
                      /* @__PURE__ */ oe.jsx(Fn, { children: /* @__PURE__ */ oe.jsx(
                        _d,
                        {
                          placeholder: "Name of Visualization",
                          className: "h-10 w-full",
                          ...X
                        }
                      ) }),
                      /* @__PURE__ */ oe.jsx(_n, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ oe.jsx(
                  no,
                  {
                    control: I.control,
                    name: "identifier",
                    render: ({ field: X }) => /* @__PURE__ */ oe.jsxs(Bn, { children: [
                      /* @__PURE__ */ oe.jsx(jn, { className: "font-normal", children: "Identifier" }),
                      /* @__PURE__ */ oe.jsx(Fn, { children: /* @__PURE__ */ oe.jsx(
                        Ii,
                        {
                          ...X,
                          isMulti: !1,
                          closeMenuOnSelect: !0,
                          hideSelectedOptions: !1,
                          isClearable: !0,
                          unstyled: !0,
                          options: (r == null ? void 0 : r.map((U) => ({
                            label: U,
                            value: U
                          }))) ?? [],
                          value: X.value ? {
                            label: X.value,
                            value: X.value
                          } : null,
                          onChange: (U) => {
                            X.onChange((U == null ? void 0 : U.value) ?? "");
                          },
                          placeholder: "Identifier",
                          styles: {
                            input: (U) => ({
                              ...U,
                              "input:focus": {
                                boxShadow: "none"
                              }
                            }),
                            multiValueLabel: (U) => ({
                              ...U,
                              whiteSpace: "normal",
                              overflow: "visible"
                            }),
                            control: (U) => ({
                              ...U,
                              transition: "none"
                            })
                          },
                          components: {
                            IndicatorSeparator: null,
                            Option: ({ innerProps: U, ...te }) => /* @__PURE__ */ oe.jsxs(
                              "div",
                              {
                                ...U,
                                ...te,
                                className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
                                children: [
                                  /* @__PURE__ */ oe.jsx("span", { children: te.label }),
                                  te.isSelected && /* @__PURE__ */ oe.jsx(Si, { className: "text-green-500" })
                                ]
                              }
                            )
                          },
                          classNames: {
                            control: ({ isFocused: U }) => _e(
                              "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                              U && "border-blue-600 ring-1 ring-blue-500"
                            ),
                            placeholder: () => "text-gray-500",
                            input: () => "",
                            valueContainer: () => "",
                            singleValue: () => "",
                            multiValue: () => "",
                            multiValueLabel: () => "",
                            multiValueRemove: () => "",
                            indicatorsContainer: () => "",
                            clearIndicator: () => "text-gray-300 hover:text-red-500 cursor-pointer",
                            indicatorSeparator: () => "",
                            dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
                            menu: () => "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                            groupHeading: () => "",
                            option: () => _e("hover:bg-gray-100 p-2 rounded-md"),
                            noOptionsMessage: () => ""
                          }
                        }
                      ) }),
                      /* @__PURE__ */ oe.jsx(_n, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ oe.jsx(
                  no,
                  {
                    control: I.control,
                    name: "dimension",
                    render: ({ field: X }) => /* @__PURE__ */ oe.jsxs(Bn, { children: [
                      /* @__PURE__ */ oe.jsx(jn, { className: "font-normal", children: "Dimension" }),
                      /* @__PURE__ */ oe.jsx(Fn, { children: /* @__PURE__ */ oe.jsx(
                        Ii,
                        {
                          ...X,
                          isMulti: !1,
                          closeMenuOnSelect: !0,
                          hideSelectedOptions: !1,
                          isClearable: !0,
                          unstyled: !0,
                          options: (e == null ? void 0 : e.map((U) => ({
                            label: U,
                            value: U
                          }))) ?? [],
                          value: X.value ? {
                            label: X.value,
                            value: X.value
                          } : null,
                          onChange: (U) => {
                            X.onChange((U == null ? void 0 : U.value) ?? "");
                          },
                          placeholder: "Dimension",
                          styles: {
                            input: (U) => ({
                              ...U,
                              "input:focus": {
                                boxShadow: "none"
                              }
                            }),
                            multiValueLabel: (U) => ({
                              ...U,
                              whiteSpace: "normal",
                              overflow: "visible"
                            }),
                            control: (U) => ({
                              ...U,
                              transition: "none"
                            })
                          },
                          components: {
                            IndicatorSeparator: null,
                            Option: ({ innerProps: U, ...te }) => /* @__PURE__ */ oe.jsxs(
                              "div",
                              {
                                ...U,
                                ...te,
                                className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
                                children: [
                                  /* @__PURE__ */ oe.jsx("span", { children: te.label }),
                                  te.isSelected && /* @__PURE__ */ oe.jsx(Si, { className: "text-green-500" })
                                ]
                              }
                            )
                          },
                          classNames: {
                            control: ({ isFocused: U }) => _e(
                              "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                              U && "border-blue-600 ring-1 ring-blue-500"
                            ),
                            placeholder: () => "text-gray-500",
                            input: () => "",
                            valueContainer: () => "",
                            singleValue: () => "",
                            multiValue: () => "",
                            multiValueLabel: () => "",
                            multiValueRemove: () => "",
                            indicatorsContainer: () => "",
                            clearIndicator: () => "text-gray-300 hover:text-red-500 cursor-pointer",
                            indicatorSeparator: () => "",
                            dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
                            menu: () => "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                            groupHeading: () => "",
                            option: () => _e("hover:bg-gray-100 p-2 rounded-md"),
                            noOptionsMessage: () => ""
                          }
                        }
                      ) }),
                      /* @__PURE__ */ oe.jsx(_n, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ oe.jsxs("div", { className: "flex flex-col gap-1 mt-4 w-full", children: [
                  /* @__PURE__ */ oe.jsxs("div", { className: "flex w-full items-start justify-between", children: [
                    /* @__PURE__ */ oe.jsx("span", { children: "Custom Filters" }),
                    /* @__PURE__ */ oe.jsx(
                      Ln,
                      {
                        variant: "ghost",
                        size: "icon",
                        onClick: (X) => {
                          X.stopPropagation(), b.length > 0 ? S((U) => [
                            ...U,
                            {
                              name: "",
                              operator: "EQ",
                              data_type: "",
                              value: []
                            }
                          ]) : S([
                            {
                              name: "",
                              operator: "EQ",
                              data_type: "",
                              value: []
                            }
                          ]);
                        },
                        title: "Add Filters",
                        type: "button",
                        children: /* @__PURE__ */ oe.jsx(b1, {})
                      }
                    )
                  ] }),
                  b.length > 0 && /* @__PURE__ */ oe.jsx(qd, { className: _e("w-full", "h-[30vh]"), children: /* @__PURE__ */ oe.jsx(ur, { className: "w-full bg-slate-50 shadow-none p-6", children: /* @__PURE__ */ oe.jsx("div", { className: "flex w-full flex-col gap-1 border-l border-slate-300", children: (_ = b == null ? void 0 : b.reverse()) == null ? void 0 : _.map((X, U) => /* @__PURE__ */ Wt(
                    ex,
                    {
                      ...X,
                      index: U,
                      key: U,
                      setCustomFilters: S,
                      filterPropertieOperators: t,
                      filterPropertieValues: i,
                      filterProperties: n
                    }
                  )) }) }) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ oe.jsxs(
            Do,
            {
              value: "customization",
              className: "mt-3 flex flex-col gap-3",
              children: [
                /* @__PURE__ */ oe.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ oe.jsx("label", { htmlFor: "colors", children: "Colors" }),
                  /* @__PURE__ */ oe.jsx(
                    Ii,
                    {
                      isMulti: !1,
                      closeMenuOnSelect: !0,
                      hideSelectedOptions: !1,
                      unstyled: !0,
                      options: x,
                      value: y.colorScheme ? {
                        label: y.colorScheme,
                        value: y.colorScheme
                      } : null,
                      onChange: (X) => {
                        d((U) => ({
                          ...U,
                          colorScheme: X == null ? void 0 : X.value
                        }));
                      },
                      placeholder: "Colors",
                      styles: {
                        input: (X) => ({
                          ...X,
                          "input:focus": {
                            boxShadow: "none"
                          }
                        }),
                        multiValueLabel: (X) => ({
                          ...X,
                          whiteSpace: "normal",
                          overflow: "visible"
                        }),
                        control: (X) => ({
                          ...X,
                          transition: "none"
                        })
                      },
                      components: {
                        Option: ({ innerProps: X, ...U }) => {
                          var te;
                          return /* @__PURE__ */ oe.jsxs(
                            "div",
                            {
                              ...X,
                              ...U,
                              className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
                              children: [
                                /* @__PURE__ */ oe.jsx("span", { children: U.label }),
                                /* @__PURE__ */ oe.jsxs("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ oe.jsx("div", { className: "flex", children: (te = An[U.label]) == null ? void 0 : te.map((le) => /* @__PURE__ */ oe.jsx(
                                    "div",
                                    {
                                      style: {
                                        backgroundColor: le
                                      },
                                      className: "size-2.5"
                                    },
                                    le
                                  )) }),
                                  /* @__PURE__ */ oe.jsx(
                                    Si,
                                    {
                                      className: _e(
                                        U.isSelected ? "text-green-500" : "text-transparent"
                                      )
                                    }
                                  )
                                ] })
                              ]
                            }
                          );
                        },
                        Control: (X) => {
                          const U = X.children;
                          return /* @__PURE__ */ oe.jsxs(sn.Control, { ...X, children: [
                            wa.map(U, (te, le) => {
                              if (le === 0)
                                return te;
                            }),
                            /* @__PURE__ */ oe.jsx("div", { className: "flex mr-2", children: An[y.colorScheme].map(
                              (te) => /* @__PURE__ */ oe.jsx(
                                "div",
                                {
                                  style: {
                                    backgroundColor: te
                                  },
                                  className: "size-2.5"
                                },
                                te
                              )
                            ) }),
                            wa.map(U, (te, le) => {
                              if (le > 0)
                                return te;
                            })
                          ] });
                        }
                      },
                      classNames: {
                        control: ({ isFocused: X }) => _e(
                          "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                          X && "border-blue-600 ring-1 ring-blue-500"
                        ),
                        placeholder: () => "text-gray-500",
                        input: () => "",
                        valueContainer: () => "",
                        singleValue: () => "",
                        multiValue: () => "",
                        multiValueLabel: () => "",
                        multiValueRemove: () => "",
                        indicatorsContainer: () => "",
                        clearIndicator: () => "text-gray-300 hover:text-red-500 cursor-pointer",
                        indicatorSeparator: () => "",
                        dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
                        menu: () => "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                        groupHeading: () => "",
                        option: () => _e("hover:bg-gray-100 p-2 rounded-md"),
                        noOptionsMessage: () => ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ oe.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ oe.jsxs("div", { className: "flex col-span-1 flex-col gap-1 ", children: [
                    /* @__PURE__ */ oe.jsx("label", { htmlFor: "type", className: "font-normal", children: "Pie Chart Type" }),
                    /* @__PURE__ */ oe.jsx(
                      Ii,
                      {
                        isMulti: !1,
                        closeMenuOnSelect: !0,
                        hideSelectedOptions: !1,
                        unstyled: !0,
                        options: [
                          {
                            label: "Pie Chart",
                            value: "pieChart"
                          },
                          {
                            label: "Donut Chart",
                            value: "donutChart"
                          }
                        ],
                        value: y != null && y.chartType ? {
                          label: (y == null ? void 0 : y.chartType) === "donutChart" ? "Donut Chart" : "Pie Chart",
                          value: y == null ? void 0 : y.chartType
                        } : null,
                        onChange: (X) => {
                          d((U) => ({
                            ...U,
                            chartType: X == null ? void 0 : X.value
                          }));
                        },
                        placeholder: "Chart Type",
                        styles: {
                          input: (X) => ({
                            ...X,
                            "input:focus": {
                              boxShadow: "none"
                            }
                          }),
                          multiValueLabel: (X) => ({
                            ...X,
                            whiteSpace: "normal",
                            overflow: "visible"
                          }),
                          control: (X) => ({
                            ...X,
                            transition: "none"
                          })
                        },
                        components: {
                          IndicatorSeparator: null,
                          Option: ({ innerProps: X, ...U }) => /* @__PURE__ */ oe.jsxs(
                            "div",
                            {
                              ...X,
                              ...U,
                              className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
                              children: [
                                /* @__PURE__ */ oe.jsx("span", { children: U.label }),
                                U.isSelected && /* @__PURE__ */ oe.jsx(Si, { className: "text-green-500" })
                              ]
                            }
                          )
                        },
                        classNames: {
                          control: ({ isFocused: X }) => _e(
                            "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                            X && "border-blue-600 ring-1 ring-blue-500"
                          ),
                          placeholder: () => "text-gray-500",
                          input: () => "",
                          valueContainer: () => "",
                          singleValue: () => "",
                          multiValue: () => "",
                          multiValueLabel: () => "",
                          multiValueRemove: () => "",
                          indicatorsContainer: () => "",
                          clearIndicator: () => "text-gray-300 hover:text-red-500 cursor-pointer",
                          indicatorSeparator: () => "",
                          dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
                          menu: () => "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                          groupHeading: () => "",
                          option: () => _e("hover:bg-gray-100 p-2 rounded-md"),
                          noOptionsMessage: () => ""
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ oe.jsxs("div", { className: "flex col-span-1 flex-col gap-1", children: [
                    /* @__PURE__ */ oe.jsx("label", { htmlFor: "unit", children: "Dimension Units" }),
                    /* @__PURE__ */ oe.jsx(
                      Ii,
                      {
                        isMulti: !1,
                        closeMenuOnSelect: !0,
                        hideSelectedOptions: !1,
                        isClearable: !0,
                        unstyled: !0,
                        options: a.map((X) => ({
                          label: X,
                          value: X
                        })),
                        value: y.unit ? {
                          label: y.unit,
                          value: y.unit
                        } : null,
                        onChange: (X) => {
                          d((U) => ({
                            ...U,
                            unit: X == null ? void 0 : X.value
                          }));
                        },
                        placeholder: "Dimension Units",
                        styles: {
                          input: (X) => ({
                            ...X,
                            "input:focus": {
                              boxShadow: "none"
                            }
                          }),
                          multiValueLabel: (X) => ({
                            ...X,
                            whiteSpace: "normal",
                            overflow: "visible"
                          }),
                          control: (X) => ({
                            ...X,
                            transition: "none"
                          })
                        },
                        components: {
                          IndicatorSeparator: null,
                          Option: ({ innerProps: X, ...U }) => /* @__PURE__ */ oe.jsxs(
                            "div",
                            {
                              ...X,
                              ...U,
                              className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
                              children: [
                                /* @__PURE__ */ oe.jsx("span", { children: U.label }),
                                U.isSelected && /* @__PURE__ */ oe.jsx(Si, { className: "text-green-500" })
                              ]
                            }
                          )
                        },
                        classNames: {
                          control: ({ isFocused: X }) => _e(
                            "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                            X && "border-blue-600 ring-1 ring-blue-500"
                          ),
                          placeholder: () => "text-gray-500",
                          input: () => "",
                          valueContainer: () => "",
                          singleValue: () => "",
                          multiValue: () => "",
                          multiValueLabel: () => "",
                          multiValueRemove: () => "",
                          indicatorsContainer: () => "",
                          clearIndicator: () => "text-gray-300 hover:text-red-500 cursor-pointer",
                          indicatorSeparator: () => "",
                          dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
                          menu: () => "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                          groupHeading: () => "",
                          option: () => _e("hover:bg-gray-100 p-2 rounded-md"),
                          noOptionsMessage: () => ""
                        }
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ oe.jsxs("div", { className: "flex items-center gap-5 px-2", children: [
                  /* @__PURE__ */ oe.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ oe.jsx(
                      Nn,
                      {
                        id: "legends",
                        checked: y.showlegends,
                        onCheckedChange: (X) => d((U) => ({
                          ...U,
                          showlegends: X
                        }))
                      }
                    ),
                    /* @__PURE__ */ oe.jsx("label", { htmlFor: "legends", children: "Show Legends" })
                  ] }),
                  /* @__PURE__ */ oe.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ oe.jsx(
                      Nn,
                      {
                        id: "labels",
                        checked: y.showDataLabels,
                        onCheckedChange: (X) => d((U) => ({
                          ...U,
                          showDataLabels: X
                        }))
                      }
                    ),
                    /* @__PURE__ */ oe.jsx("label", { htmlFor: "labels", children: "Show Data Labels" })
                  ] }),
                  y.showDataLabels && /* @__PURE__ */ oe.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ oe.jsx(
                      Nn,
                      {
                        id: "values",
                        checked: y.showDataValues,
                        onCheckedChange: (X) => d((U) => ({
                          ...U,
                          showDataValues: X
                        }))
                      }
                    ),
                    /* @__PURE__ */ oe.jsx("label", { htmlFor: "values", children: "Show Data Values" })
                  ] })
                ] }),
                /* @__PURE__ */ oe.jsxs("div", { className: "flex flex-col gap-1 mt-2", children: [
                  /* @__PURE__ */ oe.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ oe.jsx("label", { htmlFor: "redirection", children: "Dashboard Redirection " }),
                    /* @__PURE__ */ oe.jsx(
                      jf,
                      {
                        className: "text-gray-500",
                        title: "It will redirect to a particular dashboard when clicking on the visualization"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ oe.jsx(
                    Ii,
                    {
                      isMulti: !1,
                      closeMenuOnSelect: !0,
                      hideSelectedOptions: !1,
                      isClearable: !0,
                      unstyled: !0,
                      options: l,
                      value: y.dashboardRedirectionUrl ? l.find(
                        (X) => X.value === y.dashboardRedirectionUrl
                      ) : null,
                      onChange: (X) => {
                        d((U) => ({
                          ...U,
                          dashboardRedirectionUrl: X == null ? void 0 : X.value
                        }));
                      },
                      placeholder: "Dashboard Redirection",
                      styles: {
                        input: (X) => ({
                          ...X,
                          "input:focus": {
                            boxShadow: "none"
                          }
                        }),
                        multiValueLabel: (X) => ({
                          ...X,
                          whiteSpace: "normal",
                          overflow: "visible"
                        }),
                        control: (X) => ({
                          ...X,
                          transition: "none"
                        })
                      },
                      components: {
                        IndicatorSeparator: null,
                        Option: ({ innerProps: X, ...U }) => /* @__PURE__ */ oe.jsxs(
                          "div",
                          {
                            ...X,
                            ...U,
                            className: "flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md",
                            children: [
                              /* @__PURE__ */ oe.jsx("span", { children: U.label }),
                              U.isSelected && /* @__PURE__ */ oe.jsx(Si, { className: "text-green-500" })
                            ]
                          }
                        )
                      },
                      classNames: {
                        control: ({ isFocused: X }) => _e(
                          "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                          X && "border-blue-600 ring-1 ring-blue-500"
                        ),
                        placeholder: () => "text-gray-500",
                        input: () => "",
                        valueContainer: () => "",
                        singleValue: () => "",
                        multiValue: () => "",
                        multiValueLabel: () => "",
                        multiValueRemove: () => "",
                        indicatorsContainer: () => "",
                        clearIndicator: () => "text-gray-300 hover:text-red-500 cursor-pointer",
                        indicatorSeparator: () => "",
                        dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
                        menu: () => "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                        groupHeading: () => "",
                        option: () => _e("hover:bg-gray-100 p-2 rounded-md"),
                        noOptionsMessage: () => ""
                      }
                    }
                  )
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ oe.jsxs("div", { className: "flex justify-end gap-3 px-0", children: [
          /* @__PURE__ */ oe.jsxs(
            Ln,
            {
              type: "submit",
              onClick: () => {
                f("view");
              },
              className: "bg-slate-700 px-4 py-3 text-white hover:bg-slate-800 flex items-center gap-2",
              disabled: A,
              children: [
                M && /* @__PURE__ */ oe.jsx(oe.Fragment, { children: /* @__PURE__ */ oe.jsx(Ho, {}) }),
                !M && /* @__PURE__ */ oe.jsx(dv, {}),
                "View Chart"
              ]
            }
          ),
          /* @__PURE__ */ oe.jsx(
            Ln,
            {
              type: "submit",
              onClick: () => {
                f("save");
              },
              disabled: A,
              className: "bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 flex items-center gap-2",
              children: s ? /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
                /* @__PURE__ */ oe.jsx(fv, { className: "size-4" }),
                "Update Visualization"
              ] }) : /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
                /* @__PURE__ */ oe.jsx(v1, { className: "size-4" }),
                "Add to Dashboard"
              ] })
            }
          )
        ] })
      ] }) })
    }
  );
}, RC = (e) => {
  const { rootStyles: t } = e;
  return /* @__PURE__ */ oe.jsx(
    Wl,
    {
      fallback: (i) => /* @__PURE__ */ oe.jsx(
        ur,
        {
          className: "p-6 flex flex-col gap-5 min-w-[700px]",
          id: "pie-chart-creation",
          style: {
            ...t
          },
          children: /* @__PURE__ */ oe.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ oe.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ oe.jsx(Go, { className: "text-2xl font-medium", children: "Pie Chart" }),
              /* @__PURE__ */ oe.jsx(Wo, { className: "text-base", children: "Breaks down data into segments, illustrating each category's contribution to the whole." })
            ] }),
            /* @__PURE__ */ oe.jsx("div", { className: "min-w-[400px] w-auto min-h-96 h-auto flex justify-center items-center", children: /* @__PURE__ */ oe.jsx("span", { children: i ? i.message : "An unknown error occurred." }) })
          ] })
        }
      ),
      children: /* @__PURE__ */ oe.jsx(wC, { ...e })
    }
  );
};
export {
  EC as PieChart,
  RC as PieChartCreation
};
