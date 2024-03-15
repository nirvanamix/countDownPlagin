"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _getTime = /*#__PURE__*/new WeakSet();
var _coundDown = /*#__PURE__*/new WeakSet();
var _renderHtml = /*#__PURE__*/new WeakSet();
var _rendersvg = /*#__PURE__*/new WeakSet();
var _parametersSvg = /*#__PURE__*/new WeakSet();
var _svgProgressTime = /*#__PURE__*/new WeakSet();
var _percentForProgress = /*#__PURE__*/new WeakSet();
var _conjugationWords = /*#__PURE__*/new WeakSet();
var Countdown = /*#__PURE__*/function () {
  function Countdown(selector, options) {
    var _this = this;
    _classCallCheck(this, Countdown);
    _classPrivateMethodInitSpec(this, _conjugationWords);
    _classPrivateMethodInitSpec(this, _percentForProgress);
    _classPrivateMethodInitSpec(this, _svgProgressTime);
    _classPrivateMethodInitSpec(this, _parametersSvg);
    _classPrivateMethodInitSpec(this, _rendersvg);
    _classPrivateMethodInitSpec(this, _renderHtml);
    _classPrivateMethodInitSpec(this, _coundDown);
    _classPrivateMethodInitSpec(this, _getTime);
    var defaultOptions = {
      timeEnd: 'Mar 23 2024 20:35:00',
      // when the countdown ends
      format: 'day/hours/minutes/seconds',
      //  year month day hours minutes seconds
      nameTime: ['Днів', 'Години', 'Хвилини', 'Секунд'],
      // name
      conjugationWords: {
        // conjugation of words
        visible: true,
        nameTime: ['День', 'Година', 'Хвилина', 'Секунда'] // name
      },
      startCount: 'http://worldtimeapi.org/api/timezone/Etc/UTC',
      // settings: "local" (machine time) or get the time from "http://worldtimeapi.org/api/timezone/Etc/UTC"
      timeZone: 2,
      // time zone, work only if you use the time from the site
      hiddenBefoStart: false,
      // hide timer before load
      svgParameters: {
        visible: true,
        clockwise: false,
        // the direction of movement of the arrow is clockwise
        strokeLinecap: true,
        // border radius for circle
        transitionAnimation: 500,
        //  animation in milisecond
        smoothTransition: false,
        // Smooth transition from zero 59 to 0
        strokeColor: ['rgba(0,0,0, 0.1', 'rgba(255,0,0, 0.9'],
        // first color for background, second color for porgress circle,
        sizeSvg: {
          width: [200, 200],
          stroke: [14, 14]
        },
        // the first parameter is the background circle, the second parameter is the progress circle
        dayStart: 100,
        // the day from which the countdown should start, if there is such a parameter
        mediaWidth: [{
          size: 992,
          sizeSvg: {
            width: [120, 120],
            stroke: [4, 4]
          }
        }, {
          size: 720,
          sizeSvg: {
            width: [100, 100],
            stroke: [2, 2]
          }
        }, {
          size: 480,
          sizeSvg: {
            width: [70, 70],
            stroke: [2, 2]
          }
        }]
      }
    };
    this.options = Object.assign(defaultOptions, options);
    this.$selector = document.querySelectorAll(selector);
    this.selecrotName = selector;
    _classPrivateMethodGet(this, _renderHtml, _renderHtml2).call(this);
    _classPrivateMethodGet(this, _getTime, _getTime2).call(this).then(function (timeNow) {
      _classPrivateMethodGet(_this, _coundDown, _coundDown2).call(_this, timeNow);
    });
    console.log(_typeof(this.pablickMethod));
    if (typeof this.pablickMethod == 'function') this.pablickMethod();
  }
  _createClass(Countdown, [{
    key: "timerFinished",
    value:
    // Events to call from outside
    function timerFinished(callback) {
      this.timerFinishedCallback = callback; // встановлюємо колбек, який буде викликаний, коли таймер досягне нуля
    }
  }]);
  return Countdown;
}(); // const plaginCall = new Countdown('.countDonw', {});
// plaginCall.timerFinished(() => {
//     console.log("Таймер досяг нуля!");
// });
function _getTime2() {
  return _getTime3.apply(this, arguments);
}
function _getTime3() {
  _getTime3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, timeNow;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(this.options.startCount.trim() != "local")) {
            _context.next = 10;
            break;
          }
          _context.next = 3;
          return fetch(this.options.startCount);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          timeNow = _context.sent;
          return _context.abrupt("return", timeNow);
        case 10:
          return _context.abrupt("return", new Date());
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return _getTime3.apply(this, arguments);
}
function _coundDown2(timeNow) {
  var _this3 = this;
  var getNow = this.options.startCount.trim() != "local" ? new Date(timeNow.datetime.split(".")[0]).getTime() + this.options.timeZone * 60 * 60 * 1000 : new Date(timeNow).getTime();
  var getEnd = new Date(this.options.timeEnd).getTime();
  var timeLeft = getEnd - getNow;
  var refreshIntervalId = setInterval(function () {
    timeLeft = timeLeft - 1000;
    if (timeLeft < 0) {
      clearInterval(refreshIntervalId);
      _this3.timerFinishedCallback(); // викликати колбек, коли таймер стане нульовим
      _this3.$selector.forEach(function (el) {
        _this3.options.hiddenBefoStart == true && (el.style.opacity = 1);
      });
      return false;
    }
    var seconds = Math.floor(timeLeft / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var remainingDays = days % 365;
    remainingDays < 10 && (remainingDays = '0' + remainingDays);
    var remainingHours = hours % 24;
    remainingHours < 10 && (remainingHours = '0' + remainingHours);
    var remainingMinutes = minutes % 60;
    remainingMinutes < 10 && (remainingMinutes = '0' + remainingMinutes);
    var remainingSeconds = seconds % 60;
    remainingSeconds < 10 && (remainingSeconds = '0' + remainingSeconds);
    _this3.$selector.forEach(function (el) {
      _this3.options.hiddenBefoStart == true && (el.style.opacity = 1);
      el.querySelector('.seconds .time') != null && (el.querySelector('.seconds .time').innerHTML = remainingSeconds); // add seconds
      el.querySelector('.minutes .time') != null && (el.querySelector('.minutes .time').innerHTML = remainingMinutes); // add seconds
      el.querySelector('.hours .time') != null && (el.querySelector('.hours .time').innerHTML = remainingHours); // add seconds
      el.querySelector('.day .time') != null && (el.querySelector('.day .time').innerHTML = remainingDays); // add seconds
    });
    // svg progress
    _this3.options.svgParameters.visible == true && _classPrivateMethodGet(_this3, _svgProgressTime, _svgProgressTime2).call(_this3, {
      remainingSeconds: remainingSeconds,
      remainingMinutes: remainingMinutes,
      remainingHours: remainingHours,
      remainingDays: remainingDays
    });
    // conjugation of words
    _this3.options.conjugationWords.visible == true && _classPrivateMethodGet(_this3, _conjugationWords, _conjugationWords2).call(_this3);
  }, 1000);
}
function _renderHtml2() {
  var _this4 = this;
  var getFormat = this.options.format.split("/");
  var html = '';
  getFormat.forEach(function (el) {
    var nameTime = '';
    switch (el) {
      case 'day':
        nameTime = _this4.options.nameTime[0];
        break;
      case 'hours':
        nameTime = _this4.options.nameTime[1];
        break;
      case 'minutes':
        nameTime = _this4.options.nameTime[2];
        break;
      case 'seconds':
        nameTime = _this4.options.nameTime[3];
        break;
      default:
        console.error("No search ".concat(el));
        break;
    }
    var svgHtml = _this4.options.svgParameters.visible == true ? _classPrivateMethodGet(_this4, _rendersvg, _rendersvg2).call(_this4, el) : '';
    window.addEventListener('resize', function () {
      _this4.options.svgParameters.visible == true && _classPrivateMethodGet(_this4, _rendersvg, _rendersvg2).call(_this4, el);
    });
    html = html + "<div class='block-time ".concat(el, " '> ").concat(svgHtml, " <div class='wr-time'><div class='time'>00</div><div class='name-time'>").concat(nameTime, "</div></div></div>");
  });
  this.$selector.forEach(function (elm) {
    _this4.options.hiddenBefoStart == true && (elm.style.opacity = 0);
    elm.insertAdjacentHTML("afterbegin", html);
    _this4.options.svgParameters.visible == true && elm.classList.add('hasSvg');
  });
  // svg Circle
  if (this.options.svgParameters.visible == false) return false;
  _classPrivateMethodGet(this, _parametersSvg, _parametersSvg2).call(this);
  window.addEventListener('resize', function () {
    _classPrivateMethodGet(_this4, _parametersSvg, _parametersSvg2).call(_this4);
  });
}
function _rendersvg2(nametime) {
  return "<svg class=\"progres-svg-plagin\"><circle class=\"background-ring\" stroke=\"".concat(this.options.svgParameters.strokeColor[0], "\"  fill=\"transparent\"  /> <circle style=\"transform-origin: 50% 50%; transform: rotate(-90deg); stroke-linecap: ").concat(this.options.svgParameters.strokeLinecap == true && 'round', "  ; transition: stroke-dashoffset ").concat(this.options.svgParameters.transitionAnimation, "ms;\" class=\"progres-ring progress-").concat(nametime, "\" stroke=\"").concat(this.options.svgParameters.strokeColor[1], "\"  fill=\"transparent\"  /></svg>");
}
function _parametersSvg2() {
  // ring circle
  var getMediaWidth = this.options.svgParameters.sizeSvg;
  var getSizeWindow = window.innerWidth;
  for (var i = 0; i < this.options.svgParameters.mediaWidth.length; i++) {
    if (getSizeWindow <= this.options.svgParameters.mediaWidth[i].size) {
      getMediaWidth = this.options.svgParameters.mediaWidth[i].sizeSvg;
    } else {
      break;
    }
  }
  var widthMax = Math.max.apply(Math, _toConsumableArray(getMediaWidth.width)),
    widthSvg = function widthSvg(indexWidth) {
      return getMediaWidth.width[indexWidth];
    },
    cx_cy = widthMax / 2,
    width_stroke = function width_stroke(indexStroke) {
      return getMediaWidth.stroke[indexStroke];
    },
    radius = function radius(indexWidth, indexStroke) {
      return widthSvg(indexWidth) / 2 - width_stroke(indexStroke) / 2;
    };
  var general_attributes = {
    'cx': cx_cy,
    'cy': cx_cy
  };
  var attributesBackgroundAdd = {
    'r': radius(0, 0),
    'stroke-width': width_stroke(0)
  };
  var attributesProgressAdd = {
    'r': radius(1, 1),
    'stroke-width': width_stroke(1)
  };
  var attributesBackground = _objectSpread(_objectSpread({}, general_attributes), attributesBackgroundAdd);
  var attributesProgress = _objectSpread(_objectSpread({}, general_attributes), attributesProgressAdd);
  // add parameters in progres-svg-plagin
  document.querySelectorAll('.progres-svg-plagin').forEach(function (el) {
    el.setAttribute('width', widthMax);
    el.setAttribute('height', widthMax);
    for (var key in attributesBackground) {
      el.querySelector('.background-ring').setAttribute(key, attributesBackground[key]);
    }
    for (var _key in attributesProgress) {
      el.querySelector('.progres-ring').setAttribute(_key, attributesProgress[_key]);
    }
  });
}
function _svgProgressTime2(time) {
  var _this5 = this;
  var second = parseInt(time.remainingSeconds);
  var percentSecond = this.options.svgParameters.clockwise == true ? 100 - second / 60 * 100 : second / 60 * 100;
  var minute = parseInt(time.remainingMinutes);
  var percentMinute = this.options.svgParameters.clockwise == true ? 100 - minute / 60 * 100 : minute / 60 * 100;
  var hours = parseInt(time.remainingHours);
  var percentHours = this.options.svgParameters.clockwise == true ? 100 - hours / 60 * 100 : hours / 60 * 100;
  var day = this.options.svgParameters.dayStart;
  var percentDay = time.remainingDays / day * 100;
  document.querySelectorAll('.progres-svg-plagin .progres-ring').forEach(function (el) {
    if (el.classList.contains('progress-seconds') == true) _classPrivateMethodGet(_this5, _percentForProgress, _percentForProgress2).call(_this5, el, percentSecond);
    if (el.classList.contains('progress-minutes') == true) _classPrivateMethodGet(_this5, _percentForProgress, _percentForProgress2).call(_this5, el, percentMinute);
    if (el.classList.contains('progress-hours') == true) _classPrivateMethodGet(_this5, _percentForProgress, _percentForProgress2).call(_this5, el, percentHours);
    if (el.classList.contains('progress-day') == true) _classPrivateMethodGet(_this5, _percentForProgress, _percentForProgress2).call(_this5, el, percentDay);
  });
}
function _percentForProgress2(el, percent) {
  var radius = el.r.baseVal.value;
  var circumference = 2 * Math.PI * radius;
  el.style.strokeDasharray = circumference;
  var offset = circumference - percent / 100 * circumference;
  el.style.strokeDashoffset = offset;
  // smoothTransitionFromZero59To0
  this.options.svgParameters.smoothTransition == false && (percent == 0 || percent == 100 ? el.style.transition = ' stroke-dashoffset 0ms' : el.style.transition = "stroke-dashoffset ".concat(this.options.svgParameters.transitionAnimation, "ms"));
}
function _conjugationWords2() {
  var _this6 = this;
  document.querySelectorAll(".".concat(this.$selector[0].className.split(' ')[0], " .block-time")).forEach(function (el) {
    var time = parseInt(el.querySelector('.time').textContent);
    var funCojugarion = function funCojugarion(i) {
      return _this6.options.conjugationWords.nameTime[i];
    };
    var funNameTime = function funNameTime(i) {
      return _this6.options.nameTime[i];
    };
    el.classList.contains('seconds') == true && (time == 1 ? el.querySelector('.name-time').innerHTML = funCojugarion(3) : el.querySelector('.name-time').innerHTML = funNameTime(3));
    el.classList.contains('minutes') == true && (time == 1 ? el.querySelector('.name-time').innerHTML = funCojugarion(2) : el.querySelector('.name-time').innerHTML = funNameTime(2));
    el.classList.contains('hours') == true && (time == 1 ? el.querySelector('.name-time').innerHTML = funCojugarion(1) : el.querySelector('.name-time').innerHTML = funNameTime(1));
    el.classList.contains('day') == true && (time == 1 ? el.querySelector('.name-time').innerHTML = funCojugarion(0) : el.querySelector('.name-time').innerHTML = funNameTime(0));
  });
}
var SvgMogules = /*#__PURE__*/function (_Countdown2) {
  _inherits(SvgMogules, _Countdown2);
  function SvgMogules(selector, options) {
    var _this2;
    _classCallCheck(this, SvgMogules);
    _this2 = _callSuper(this, SvgMogules, [selector, options]);
    var defaultOptions = {
      svgParameters: {
        visible: false,
        clockwise: false,
        // the direction of movement of the arrow is clockwise
        strokeLinecap: false,
        // border radius for circle
        transitionAnimation: 500,
        //  animation in milisecond
        smoothTransition: false,
        // Smooth transition from zero 59 to 0
        strokeColor: ['rgba(0,0,0, 0.1', 'rgba(255,0,0, 0.9'],
        // first color for background, second color for porgress circle,
        sizeSvg: {
          width: [200, 200],
          stroke: [14, 14]
        },
        // the first parameter is the background circle, the second parameter is the progress circle
        dayStart: 100,
        // the day from which the countdown should start, if there is such a parameter
        mediaWidth: [{
          size: 992,
          sizeSvg: {
            width: [120, 120],
            stroke: [4, 4]
          }
        }, {
          size: 720,
          sizeSvg: {
            width: [100, 100],
            stroke: [2, 2]
          }
        }, {
          size: 480,
          sizeSvg: {
            width: [70, 70],
            stroke: [2, 2]
          }
        }]
      }
    };
    _this2.options = Object.assign(_this2.options, defaultOptions, options);
    console.log(_this2.options.svgParameters.visible);
    return _this2;
  }
  _createClass(SvgMogules, [{
    key: "pablickMethod",
    value: function pablickMethod() {
      console.log('ok log');
    }
  }]);
  return SvgMogules;
}(Countdown); // new Countdown('.countDonw', {})
new SvgMogules('.countDonw', {});