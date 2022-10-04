export const PrimeFactorsTo = (max: number) => {
    let store = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!store [i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}
//
// webpackJsonp([0], {
//     140: function (l, n) {
//         function u(l) {
//             return Promise.resolve().then(function () {
//                 throw new Error("Cannot find module '" + l + "'.")
//             })
//         }
//
//         u.keys = function () {
//             return []
//         }, u.resolve = u, l.exports = u, u.id = 140
//     }, 168: function (l, n) {
//         function u(l) {
//             return Promise.resolve().then(function () {
//                 throw new Error("Cannot find module '" + l + "'.")
//             })
//         }
//
//         u.keys = function () {
//             return []
//         }, u.resolve = u, l.exports = u, u.id = 168
//     }, 195: function (l, n, u) {
//         "use strict";
//         Object.defineProperty(n, "__esModule", {value: !0});
//         var a = u(48), t = u(0), o = (u(3), u(27), u(86)), i = u(87), e = function () {
//                 return function (l) {
//                     this.navCtrl = l, this.Calc = []
//                 }
//             }(), s = function () {
//                 function l() {
//                     this.primeNumberSearchList = [], this.primeNumberList = [], this.primeNumberList = window.primeNumber
//                 }
//
//                 return l.prototype.search = function (l, n) {
//                     this.primeNumberSearchList = this.primeNumberList.filter(function (n) {
//                         return n >= l
//                     }), this.primeNumberSearchList.length = this.primeNumberSearchList.length > n ? n : this.primeNumberSearchList.length
//                 }, l
//             }(), c = function () {
//                 return function (l, n) {
//                     this.primeNumber = l, this.navCtrl = n
//                 }
//             }(), r = function () {
//                 return function (l) {
//                     this.navCtrl = l, this.ShowTable = !1, this.IsShow = !0
//                 }
//             }(), _ = function () {
//                 return function (l) {
//                     this.navCtrl = l
//                 }
//             }(), d = function () {
//                 return function (l) {
//                     this.navCtrl = l
//                 }
//             }(), g = function () {
//                 return function (l) {
//                     this.navCtrl = l
//                 }
//             }(), h = function () {
//                 function l(l, n, u) {
//                     this.platform = l, this.statusBar = n, this.splashScreen = u, this.rootPage = e, this.initializeApp(), this.pages = [{
//                         title: "Trang chủ",
//                         component: e
//                     }, {title: "Tính lũy thừa modulo", component: _}, {
//                         title: "Tìm phần tử nghịch đảo",
//                         component: d
//                     }, {title: "Tính tích modulo", component: g}, {
//                         title: "Tìm phần tử nguyên thủy",
//                         component: r
//                     }, {title: "Tìm số nguyên tố", component: c}]
//                 }
//
//                 return l.prototype.initializeApp = function () {
//                     var l = this;
//                     this.platform.ready().then(function () {
//                         l.statusBar.styleDefault(), l.splashScreen.hide()
//                     })
//                 }, l.prototype.openPage = function (l) {
//                     this.nav.setRoot(l.component)
//                 }, l
//             }(), m = function () {
//                 function l(l, n) {
//                     this.navCtrl = l, this.navParams = n, this.selectedItem = n.get("item"), this.icons = ["flask", "wifi", "beer", "football", "basketball", "paper-plane", "american-football", "boat", "bluetooth", "build"], this.items = [];
//                     for (var u = 1; u < 11; u++) this.items.push({
//                         title: "Item " + u,
//                         note: "This is item #" + u,
//                         icon: this.icons[Math.floor(Math.random() * this.icons.length)]
//                     })
//                 }
//
//                 return n = l, l.prototype.itemTapped = function (l, u) {
//                     this.navCtrl.push(n, {item: u})
//                 }, l;
//                 var n
//             }(), p = u(52), f = function () {
//                 function l(l, n, u) {
//                     this.aList = [], this.aiList = [], this.powerList = [], this.xList = [], null != l && this.Compute(l, n, u)
//                 }
//
//                 return l.prototype.Compute = function (l, n, u) {
//                     for (this.aiList = [], this.aList = [], this.xList = [], this.powerList = [], this.base = l, this.exponent = n, this.modulus = u; n.greater(0);) {
//                         this.aList.push(n);
//                         var a = n.divmod(2);
//                         this.aiList.push(a.remainder), n = a.quotient
//                     }
//                     for (var t = p(1), o = 0; o < this.aList.length; o++) this.powerList.push(l), this.xList.push(t), this.aiList[o].eq(1) && (t = t.multiply(l).mod(u)), l = l.modPow(p(2), u);
//                     return this.xList.push(t), this.result = t, t
//                 }, l.Compute = function () {
//                 }, l
//             }(), b = function () {
//                 function l(l) {
//                     this.navCtrl = l, this.PowerMod = new f, this.ShowTable = !1, this.IsShow = !0
//                 }
//
//                 return l.prototype.calc = function () {
//                     this.PowerMod.Compute(p(this.Base), p(this.Exponent), p(this.Modulus))
//                 }, l
//             }(), Y = function () {
//                 function l(l, n) {
//                     this.ri_1List = [], this.riList = [], this.qi1List = [], this.ri1List = [], this.si_1List = [], this.siList = [], null != l && this.Compute(l, n)
//                 }
//
//                 return l.prototype.Compute = function (l, n) {
//                     var u = n;
//                     for (this.ri_1List = [], this.riList = [], this.qi1List = [], this.ri1List = [], this.si_1List = [], this.siList = []; l.greater(0);) {
//                         this.ri_1List.push(n), this.riList.push(l);
//                         var a = n.divmod(l);
//                         this.qi1List.push(a.quotient), this.ri1List.push(a.remainder), n = l, l = a.remainder
//                     }
//                     for (var t = p(0), o = p(1), i = this.qi1List.length, e = 0; e < i; e++) {
//                         this.si_1List.push(o), this.siList.push(t);
//                         var s = t;
//                         (t = o.minus(t.multiply(this.qi1List[i - e - 1])).mod(u)).lesser(0) && (t = t.add(u)), o = s
//                     }
//                     return this.si_1List.push(t), this.result = t, t
//                 }, l.Compute = function () {
//                 }, l
//             }(), Z = function () {
//                 function l(l) {
//                     this.navCtrl = l, this.InverseMod = new Y, this.ShowTable = !1, this.IsShow = !0
//                 }
//
//                 return l.prototype.calc = function () {
//                     this.InverseMod.Compute(p(this.a), p(this.Modulus))
//                 }, l
//             }(), v = u(194), C = function () {
//                 function l() {
//                     this.p_1List = [], this.pList = [], this.pCoefficientList = [], this.p_1coefficientList = [], this.PowerModList = [], this.PrimeNumber = new s
//                 }
//
//                 return n = l, l.prototype.Compute = function (l, u) {
//                     this.pList = [], this.P = u, this.pCoefficientList = [];
//                     for (var a = 0; u.neq(1) && !this.PrimeNumber.primeNumberList.some(function (l) {
//                         return u.eq(l)
//                     });) {
//                         for (; u.mod(this.PrimeNumber.primeNumberList[a]).neq(0);) {
//                             if (a >= this.PrimeNumber.primeNumberList.length - 1) return null;
//                             a++
//                         }
//                         this.pList.push(p(this.PrimeNumber.primeNumberList[a]));
//                         for (var t = p(0), o = u.divmod(this.PrimeNumber.primeNumberList[a]); o.remainder.eq(0);) t = t.add(1), o = (u = o.quotient).divmod(this.PrimeNumber.primeNumberList[a]);
//                         this.pCoefficientList.push(t)
//                     }
//                     u.neq(1) && (this.pCoefficientList.push(p(1)), this.pList.push(u)), this.fiP = p(1);
//                     for (var i = 0; i < this.pList.length; i++) this.fiP = this.fiP.multiply(this.pList[i].pow(this.pCoefficientList[i]).minus(this.pList[i].pow(this.pCoefficientList[i].minus(1))));
//                     var e = this.fiP;
//                     for (a = 0, this.p_1List = [], this.p_1coefficientList = []; e.neq(1) && !this.PrimeNumber.primeNumberList.some(function (l) {
//                         return e.eq(l)
//                     });) {
//                         for (; e.mod(this.PrimeNumber.primeNumberList[a]).neq(0);) {
//                             if (a >= this.PrimeNumber.primeNumberList.length - 1) return null;
//                             a++
//                         }
//                         this.p_1List.push(p(this.PrimeNumber.primeNumberList[a]));
//                         for (t = p(0), o = e.divmod(this.PrimeNumber.primeNumberList[a]); o.remainder.eq(0);) t = t.add(1), o = (e = o.quotient).divmod(this.PrimeNumber.primeNumberList[a]);
//                         this.p_1coefficientList.push(t)
//                     }
//                     e.neq(1) && (this.p_1coefficientList.push(p(1)), this.p_1List.push(e));
//                     for (var s = !1, c = p(-1); !s && c.lesser(this.P);) if (n.gcd_two_numbers(l, this.P).neq(1)) c = c.add(1), l = l.add(1); else {
//                         var r = !0, _ = [];
//                         for (i = 0; i < this.p_1List.length; i++) {
//                             var d = new f;
//                             o = d.Compute(l, this.fiP.divide(this.p_1List[i]), this.P);
//                             if (_.push(d), o.eq(1)) {
//                                 r = !1;
//                                 break
//                             }
//                         }
//                         r ? (s = !0, this.PowerModList = _) : (c = c.add(1), l = l.add(1))
//                     }
//                     return c.eq(this.P) ? (this.result = p(0), p(0)) : (this.result = l, l)
//                 }, l.gcd_two_numbers = function (l, n) {
//                     for (l = l.abs(), n = n.abs(); n.neq(0);) {
//                         var u = n;
//                         n = l.mod(n), l = u
//                     }
//                     return l
//                 }, l;
//                 var n
//             }(), I = function () {
//                 function l(l) {
//                     this.navCtrl = l, this.Start = 2, this.PrimitiveElement = new C, this.ShowTable = !1, this.IsShow = !0
//                 }
//
//                 return l.prototype.calc = function () {
//                     this.PrimitiveElement.Compute(p(this.Start), p(this.P))
//                 }, l
//             }(), y = function () {
//                 function l(l, n) {
//                 }
//
//                 return l.prototype.Compute = function (l, n, u) {
//                     return this.a = l, this.b = n, this.modulus = u, this.result = l.multiply(n).mod(u), this.result
//                 }, l
//             }(), w = function () {
//                 function l(l) {
//                     this.navCtrl = l, this.MultiplyMod = new y, this.ShowTable = !1, this.IsShow = !0
//                 }
//
//                 return l.prototype.calc = function () {
//                     this.MultiplyMod.Compute(p(this.a), p(this.b), p(this.modulus))
//                 }, l
//             }(), j = function () {
//                 return function () {
//                 }
//             }(), z = u(62), L = u(233), M = u(234), P = u(235), k = u(236), T = u(237), S = u(238), x = u(239), F = u(240),
//             U = u(241), N = u(46), q = u(15), E = u(13), V = u(1), O = u(29), $ = u(33), B = u(104), D = u(20),
//             X = u(242), H = u(45), R = u(79), A = u(4), K = u(22), G = u(8), J = u(7), W = u(6), Q = u(34), ll = u(5),
//             nl = u(243), ul = u(26), al = u(53), tl = u(35), ol = u(24), il = u(47), el = u(14), sl = u(12), cl = u(57),
//             rl = u(10), _l = u(244), dl = u(67), gl = u(42), hl = u(23),
//             ml = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function pl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 7, "button", [["class", "item item-block"], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0, o = l.component;
//                 "click" === n && (a = !1 !== t._13(l, 6).close() && a);
//                 "click" === n && (a = !1 !== o.openPage(l.context.$implicit) && a);
//                 return a
//             }, N.b, N.a)), t.Y(1, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 4, {contentLabel: 0}), t._16(603979776, 5, {_buttons: 1}), t._16(603979776, 6, {_icons: 1}), t.Y(5, 16384, null, 0, $.a, [], null, null), t.Y(6, 16384, null, 0, B.a, [D.a], {menuClose: [0, "menuClose"]}, null), (l()(), t._18(7, 2, ["\n        ", "\n      "]))], function (l, n) {
//                 l(n, 6, 0, "")
//             }, function (l, n) {
//                 l(n, 7, 0, n.context.$implicit.title)
//             })
//         }
//
//         function fl(l) {
//             return t._19(0, [t._16(402653184, 1, {nav: 0}), (l()(), t.Z(1, 0, null, null, 28, "ion-menu", [["role", "navigation"]], null, null, null, X.b, X.a)), t._15(6144, null, H.a, null, [R.a]), t.Y(3, 245760, null, 2, R.a, [D.a, t.j, V.a, A.a, t.z, K.a, G.l, J.a, W.a], {content: [0, "content"]}, null), t._16(335544320, 2, {menuContent: 0}), t._16(335544320, 3, {menuNav: 0}), (l()(), t._18(-1, 0, ["\n  "])), (l()(), t.Z(7, 0, null, 0, 10, "ion-header", [], null, null, null, null, null)), t.Y(8, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(10, 0, null, null, 6, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, nl.b, nl.a)), t.Y(11, 49152, null, 0, ul.a, [V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n      "])), (l()(), t.Z(13, 0, null, 3, 2, "ion-title", [], null, null, null, al.b, al.a)), t.Y(14, 49152, null, 0, tl.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), (l()(), t._18(-1, 0, ["Menu"])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, 0, ["\n\n  "])), (l()(), t.Z(19, 0, null, 0, 9, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(20, 4374528, [[2, 4]], 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n    "])), (l()(), t.Z(22, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), t.Y(23, 16384, null, 0, cl.a, [V.a, t.j, t.z, A.a, G.l, J.a], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.U(16777216, null, null, 1, null, pl)), t.Y(26, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t._18(-1, 0, ["\n"])), (l()(), t._18(-1, null, ["\n\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.Z(32, 0, null, null, 2, "ion-nav", [["swipeBackEnabled", "false"]], null, null, null, _l.b, _l.a)), t._15(6144, null, H.a, null, [dl.a]), t.Y(34, 4374528, [[1, 4], ["content", 4]], 0, dl.a, [[2, ll.a], [2, sl.a], W.a, V.a, A.a, t.j, t.u, t.z, t.i, G.l, gl.a, [2, hl.a], J.a, t.k], {
//                 swipeBackEnabled: [0, "swipeBackEnabled"],
//                 root: [1, "root"]
//             }, null), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 3, 0, t._13(n, 34)), l(n, 26, 0, u.pages);
//                 l(n, 34, 0, "false", u.rootPage)
//             }, function (l, n) {
//                 l(n, 10, 0, t._13(n, 11)._sbPadding), l(n, 19, 0, t._13(n, 20).statusbarPadding, t._13(n, 20)._hasRefresher)
//             })
//         }
//
//         var bl = t.V("ng-component", h, function (l) {
//                 return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "ng-component", [], null, null, null, fl, ml)), t.Y(1, 49152, null, 0, h, [A.a, o.a, i.a], null, null)], null, null)
//             }, {}, {}, []), Yl = u(51), Zl = u(50), vl = u(66), Cl = u(32), Il = u(69), yl = u(17), wl = u(44), jl = u(18),
//             zl = u(11), Ll = u(127), Ml = u(59), Pl = u(30), kl = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function Tl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Tính lũy thừa modulo: "]))], null, null)
//         }
//
//         function Sl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 4, "h3", [], null, null, null, null, null)), (l()(), t._18(1, null, ["", ""])), (l()(), t.Z(2, 0, null, null, 1, "sup", [], null, null, null, null, null)), (l()(), t._18(3, null, ["", ""])), (l()(), t._18(4, null, [" mod ", " = ", ""]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 1, 0, u.Base), l(n, 3, 0, u.Exponent), l(n, 4, 0, u.Modulus, u.PowerMod.result)
//             })
//         }
//
//         function xl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Ẩn"]))], null, null)
//         }
//
//         function Fl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Hiện"]))], null, null)
//         }
//
//         function Ul(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 22, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(1, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(3, 0, null, null, 2, "ion-col", [["class", "col"], ["col-1", ""]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(5, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(7, 0, null, null, 2, "ion-col", [["class", "col"], ["col-2", ""]], null, null, null, null, null)), t.Y(8, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(9, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(11, 0, null, null, 2, "ion-col", [["class", "col"], ["col-1", ""]], null, null, null, null, null)), t.Y(12, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(13, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(15, 0, null, null, 2, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(16, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(17, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(19, 0, null, null, 2, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(20, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(21, null, ["", ""])), (l()(), t._18(-1, null, ["\n      "]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 5, 0, n.context.index), l(n, 9, 0, u.PowerMod.aList[n.context.index]), l(n, 13, 0, u.PowerMod.aiList[n.context.index]), l(n, 17, 0, u.PowerMod.xList[n.context.index]), l(n, 21, 0, u.PowerMod.powerList[n.context.index])
//             })
//         }
//
//         function Nl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 34, "ion-grid", [["class", "grid"]], null, null, null, null, null)), t.Y(1, 16384, null, 0, vl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(3, 0, null, null, 24, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(6, 0, null, null, 2, "ion-col", [["class", "table-header col"], ["col-1", ""]], null, null, null, null, null)), t.Y(7, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["i"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(10, 0, null, null, 2, "ion-col", [["class", "table-header col"], ["col-2", ""]], null, null, null, null, null)), t.Y(11, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["a"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(14, 0, null, null, 4, "ion-col", [["class", "table-header col"], ["col-1", ""]], null, null, null, null, null)), t.Y(15, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["a"])), (l()(), t.Z(17, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["i"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(20, 0, null, null, 2, "ion-col", [["class", "table-header col"], ["col-4", ""]], null, null, null, null, null)), t.Y(21, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["x"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(24, 0, null, null, 2, "ion-col", [["class", "table-header col"], ["col-4", ""]], null, null, null, null, null)), t.Y(25, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["power"])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(29, 0, null, null, 4, "div", [["class", "table-body"]], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.U(16777216, null, null, 1, null, Ul)), t.Y(32, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "]))], function (l, n) {
//                 l(n, 32, 0, n.component.PowerMod.xList)
//             }, null)
//         }
//
//         function ql(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 121, "div", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(2, 0, null, null, 68, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(3, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(5, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(6, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(8, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(9, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 1, {contentLabel: 0}), t._16(603979776, 2, {_buttons: 1}), t._16(603979776, 3, {_icons: 1}), t.Y(13, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(15, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(16, 16384, [[1, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["Cơ số"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(19, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.Base = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(20, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(22, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(23, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(27, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(28, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(30, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(31, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 4, {contentLabel: 0}), t._16(603979776, 5, {_buttons: 1}), t._16(603979776, 6, {_icons: 1}), t.Y(35, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(37, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(38, 16384, [[4, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["Số mũ"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(41, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.Exponent = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(42, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(44, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(45, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(49, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(50, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(52, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(53, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 7, {contentLabel: 0}), t._16(603979776, 8, {_buttons: 1}), t._16(603979776, 9, {_icons: 1}), t.Y(57, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(59, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(60, 16384, [[7, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["Modulus"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(63, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.Modulus = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(64, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(66, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(67, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(72, 0, null, null, 33, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(73, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(75, 0, null, null, 6, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(76, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(78, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.calc() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(79, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 0, ["Tính"])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(83, 0, null, null, 21, "ion-col", [["class", "col"], ["col-8", ""]], null, null, null, null, null)), t.Y(84, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(86, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(87, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 10, {contentLabel: 0}), t._16(603979776, 11, {_buttons: 1}), t._16(603979776, 12, {_icons: 1}), t.Y(91, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(93, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), t.Y(94, 16384, [[10, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, null], [8, null], [8, null], [8, null]], null, null), (l()(), t._18(-1, null, ["Bảng tính toán"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(97, 0, null, 4, 5, "ion-toggle", [["checked", "false"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionChange"], [null, "ngModelChange"], [null, "keyup"]], function (l, n, u) {
//                 var a = !0, o = l.component;
//                 "keyup" === n && (a = !1 !== t._13(l, 98)._keyup(u) && a);
//                 "ionChange" === n && (a = !1 !== o.ShowTable && a);
//                 "ngModelChange" === n && (a = !1 !== (o.ShowTable = u) && a);
//                 return a
//             }, Ll.b, Ll.a)), t.Y(98, 1228800, null, 0, Ml.a, [E.a, V.a, A.a, t.j, t.z, Pl.a, [2, q.a], G.l, J.a, t.u], {checked: [0, "checked"]}, {ionChange: "ionChange"}), t._15(1024, null, yl.e, function (l) {
//                 return [l]
//             }, [Ml.a]), t.Y(100, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [2, yl.e]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(102, 16384, null, 0, yl.g, [yl.f], null, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(107, 0, null, null, 10, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(108, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 13, {contentLabel: 0}), t._16(603979776, 14, {_buttons: 1}), t._16(603979776, 15, {_icons: 1}), t.Y(112, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n    "])), (l()(), t.Z(114, 0, null, 2, 2, "button", [["ion-button", ""]], null, null, null, jl.b, jl.a)), t.Y(115, 1097728, [[14, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(116, 0, ["Kết quả : ", ""])), (l()(), t._18(-1, 2, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.U(16777216, null, null, 1, null, Nl)), t.Y(120, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 16, 0, "primary"), l(n, 20, 0, u.Base);
//                 l(n, 23, 0, "number");
//                 l(n, 38, 0, "primary"), l(n, 42, 0, u.Exponent);
//                 l(n, 45, 0, "number");
//                 l(n, 60, 0, "primary"), l(n, 64, 0, u.Modulus);
//                 l(n, 67, 0, "number");
//                 l(n, 98, 0, "false"), l(n, 100, 0, u.ShowTable), l(n, 120, 0, u.ShowTable)
//             }, function (l, n) {
//                 var u = n.component;
//                 l(n, 19, 0, t._13(n, 22).ngClassUntouched, t._13(n, 22).ngClassTouched, t._13(n, 22).ngClassPristine, t._13(n, 22).ngClassDirty, t._13(n, 22).ngClassValid, t._13(n, 22).ngClassInvalid, t._13(n, 22).ngClassPending), l(n, 41, 0, t._13(n, 44).ngClassUntouched, t._13(n, 44).ngClassTouched, t._13(n, 44).ngClassPristine, t._13(n, 44).ngClassDirty, t._13(n, 44).ngClassValid, t._13(n, 44).ngClassInvalid, t._13(n, 44).ngClassPending), l(n, 63, 0, t._13(n, 66).ngClassUntouched, t._13(n, 66).ngClassTouched, t._13(n, 66).ngClassPristine, t._13(n, 66).ngClassDirty, t._13(n, 66).ngClassValid, t._13(n, 66).ngClassInvalid, t._13(n, 66).ngClassPending), l(n, 97, 0, t._13(n, 98)._disabled, t._13(n, 98)._value, t._13(n, 98)._activated, t._13(n, 102).ngClassUntouched, t._13(n, 102).ngClassTouched, t._13(n, 102).ngClassPristine, t._13(n, 102).ngClassDirty, t._13(n, 102).ngClassValid, t._13(n, 102).ngClassInvalid, t._13(n, 102).ngClassPending), l(n, 116, 0, u.PowerMod.result)
//             })
//         }
//
//         function El(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 23, "ion-row", [["class", "row"], ["padding-top", ""]], null, null, null, null, null)), t.Y(1, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 8, "ion-col", [["class", "col"], ["col-9", ""]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Tl)), t.Y(7, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Sl)), t.Y(10, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(13, 0, null, null, 9, "ion-col", [["class", "col"], ["col-3", ""]], null, null, null, null, null)), t.Y(14, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(16, 0, null, null, 5, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0, t = l.component;
//                 "click" === n && (a = !1 != (t.IsShow = !t.IsShow) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(17, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t.U(16777216, null, 0, 1, null, xl)), t.Y(19, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t.U(16777216, null, 0, 1, null, Fl)), t.Y(21, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.U(16777216, null, null, 1, null, ql)), t.Y(26, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 7, 0, null == u.PowerMod.result || u.IsShow), l(n, 10, 0, null != u.PowerMod.result), l(n, 19, 0, u.IsShow), l(n, 21, 0, !u.IsShow), l(n, 26, 0, u.IsShow)
//             }, null)
//         }
//
//         var Vl = t.V("power-mod-calc", b, function (l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "power-mod-calc", [], null, null, null, El, kl)), t.Y(1, 49152, null, 0, b, [sl.a], null, null)], null, null)
//         }, {
//             Base: "Base",
//             Exponent: "Exponent",
//             Modulus: "Modulus",
//             PowerMod: "PowerMod",
//             ShowTable: "ShowTable",
//             IsShow: "IsShow"
//         }, {}, []), Ol = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function $l(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Tìm phần tử nghịch đảo: "]))], null, null)
//         }
//
//         function Bl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 4, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["A"])), (l()(), t.Z(2, 0, null, null, 1, "sup", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["-1"])), (l()(), t._18(-1, null, [" mod N = "]))], null, null)
//         }
//
//         function Dl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 4, "h3", [], null, null, null, null, null)), (l()(), t._18(1, null, ["", ""])), (l()(), t.Z(2, 0, null, null, 1, "sup", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["-1"])), (l()(), t._18(4, null, [" mod ", " = ", ""]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 1, 0, u.a), l(n, 4, 0, u.Modulus, u.InverseMod.result)
//             })
//         }
//
//         function Xl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Ẩn"]))], null, null)
//         }
//
//         function Hl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Hiện"]))], null, null)
//         }
//
//         function Rl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 30, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(1, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(3, 0, null, null, 2, "ion-col", [["class", "col"], ["col-1", ""]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(5, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(7, 0, null, null, 2, "ion-col", [["class", "col"], ["col-1", ""]], null, null, null, null, null)), t.Y(8, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(9, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(11, 0, null, null, 2, "ion-col", [["class", "col"], ["col-1", ""]], null, null, null, null, null)), t.Y(12, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(13, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(15, 0, null, null, 2, "ion-col", [["class", "col"], ["col-2", ""]], null, null, null, null, null)), t.Y(16, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(17, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(19, 0, null, null, 2, "ion-col", [["class", "col"], ["col-2", ""]], null, null, null, null, null)), t.Y(20, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(21, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(23, 0, null, null, 2, "ion-col", [["class", "col"], ["col-2", ""]], null, null, null, null, null)), t.Y(24, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(25, null, ["", ""])), (l()(), t._18(-1, null, ["\n        "])), (l()(), t.Z(27, 0, null, null, 2, "ion-col", [["class", "col"], ["col-3", ""]], null, null, null, null, null)), t.Y(28, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(29, null, ["", ""])), (l()(), t._18(-1, null, ["\n      "]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 5, 0, n.context.index), l(n, 9, 0, u.InverseMod.ri_1List[n.context.index]), l(n, 13, 0, u.InverseMod.riList[n.context.index]), l(n, 17, 0, u.InverseMod.qi1List[n.context.index]), l(n, 21, 0, u.InverseMod.ri1List[n.context.index]), l(n, 25, 0, u.InverseMod.si_1List[n.context.index]), l(n, 29, 0, u.InverseMod.siList[n.context.index])
//             })
//         }
//
//         function Al(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 52, "ion-grid", [["class", "grid"]], null, null, null, null, null)), t.Y(1, 16384, null, 0, vl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(3, 0, null, null, 42, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(6, 0, null, null, 2, "ion-col", [["class", "table-header col"], ["col-1", ""]], null, null, null, null, null)), t.Y(7, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["i"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(10, 0, null, null, 4, "ion-col", [["class", "table-header col"], ["col-1", ""]], null, null, null, null, null)), t.Y(11, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["r"])), (l()(), t.Z(13, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["i-1"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(16, 0, null, null, 4, "ion-col", [["class", "table-header col"], ["col-1", ""]], null, null, null, null, null)), t.Y(17, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["r"])), (l()(), t.Z(19, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["i"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(22, 0, null, null, 4, "ion-col", [["class", "table-header col"], ["col-2", ""]], null, null, null, null, null)), t.Y(23, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["q"])), (l()(), t.Z(25, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["i+1"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(28, 0, null, null, 4, "ion-col", [["class", "table-header col"], ["col-2", ""]], null, null, null, null, null)), t.Y(29, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["r"])), (l()(), t.Z(31, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["i+1"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(34, 0, null, null, 4, "ion-col", [["class", "table-header col"], ["col-2", ""]], null, null, null, null, null)), t.Y(35, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["s"])), (l()(), t.Z(37, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["i-1"])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(40, 0, null, null, 4, "ion-col", [["class", "table-header col"], ["col-3", ""]], null, null, null, null, null)), t.Y(41, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["s"])), (l()(), t.Z(43, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["i"])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(47, 0, null, null, 4, "div", [["class", "table-body"]], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.U(16777216, null, null, 1, null, Rl)), t.Y(50, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "]))], function (l, n) {
//                 l(n, 50, 0, n.component.InverseMod.siList)
//             }, null)
//         }
//
//         function Kl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 99, "div", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(2, 0, null, null, 46, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(3, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(5, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(6, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(8, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(9, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 1, {contentLabel: 0}), t._16(603979776, 2, {_buttons: 1}), t._16(603979776, 3, {_icons: 1}), t.Y(13, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(15, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(16, 16384, [[1, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["A"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(19, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.a = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(20, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(22, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(23, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(27, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(28, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(30, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(31, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 4, {contentLabel: 0}), t._16(603979776, 5, {_buttons: 1}), t._16(603979776, 6, {_icons: 1}), t.Y(35, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(37, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(38, 16384, [[4, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["N"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(41, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.Modulus = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(42, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(44, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(45, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(50, 0, null, null, 33, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(51, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(53, 0, null, null, 6, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(54, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(56, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.calc() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(57, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 0, ["Tính"])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(61, 0, null, null, 21, "ion-col", [["class", "col"], ["col-8", ""]], null, null, null, null, null)), t.Y(62, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(64, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(65, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 7, {contentLabel: 0}), t._16(603979776, 8, {_buttons: 1}), t._16(603979776, 9, {_icons: 1}), t.Y(69, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(71, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), t.Y(72, 16384, [[7, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, null], [8, null], [8, null], [8, null]], null, null), (l()(), t._18(-1, null, ["Bảng tính toán"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(75, 0, null, 4, 5, "ion-toggle", [["checked", "false"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionChange"], [null, "ngModelChange"], [null, "keyup"]], function (l, n, u) {
//                 var a = !0, o = l.component;
//                 "keyup" === n && (a = !1 !== t._13(l, 76)._keyup(u) && a);
//                 "ionChange" === n && (a = !1 !== o.ShowTable && a);
//                 "ngModelChange" === n && (a = !1 !== (o.ShowTable = u) && a);
//                 return a
//             }, Ll.b, Ll.a)), t.Y(76, 1228800, null, 0, Ml.a, [E.a, V.a, A.a, t.j, t.z, Pl.a, [2, q.a], G.l, J.a, t.u], {checked: [0, "checked"]}, {ionChange: "ionChange"}), t._15(1024, null, yl.e, function (l) {
//                 return [l]
//             }, [Ml.a]), t.Y(78, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [2, yl.e]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(80, 16384, null, 0, yl.g, [yl.f], null, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(85, 0, null, null, 10, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(86, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 10, {contentLabel: 0}), t._16(603979776, 11, {_buttons: 1}), t._16(603979776, 12, {_icons: 1}), t.Y(90, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n    "])), (l()(), t.Z(92, 0, null, 2, 2, "button", [["ion-button", ""]], null, null, null, jl.b, jl.a)), t.Y(93, 1097728, [[11, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(94, 0, ["Kết quả : ", ""])), (l()(), t._18(-1, 2, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.U(16777216, null, null, 1, null, Al)), t.Y(98, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 16, 0, "primary"), l(n, 20, 0, u.a);
//                 l(n, 23, 0, "number");
//                 l(n, 38, 0, "primary"), l(n, 42, 0, u.Modulus);
//                 l(n, 45, 0, "number");
//                 l(n, 76, 0, "false"), l(n, 78, 0, u.ShowTable), l(n, 98, 0, u.ShowTable)
//             }, function (l, n) {
//                 var u = n.component;
//                 l(n, 19, 0, t._13(n, 22).ngClassUntouched, t._13(n, 22).ngClassTouched, t._13(n, 22).ngClassPristine, t._13(n, 22).ngClassDirty, t._13(n, 22).ngClassValid, t._13(n, 22).ngClassInvalid, t._13(n, 22).ngClassPending), l(n, 41, 0, t._13(n, 44).ngClassUntouched, t._13(n, 44).ngClassTouched, t._13(n, 44).ngClassPristine, t._13(n, 44).ngClassDirty, t._13(n, 44).ngClassValid, t._13(n, 44).ngClassInvalid, t._13(n, 44).ngClassPending), l(n, 75, 0, t._13(n, 76)._disabled, t._13(n, 76)._value, t._13(n, 76)._activated, t._13(n, 80).ngClassUntouched, t._13(n, 80).ngClassTouched, t._13(n, 80).ngClassPristine, t._13(n, 80).ngClassDirty, t._13(n, 80).ngClassValid, t._13(n, 80).ngClassInvalid, t._13(n, 80).ngClassPending), l(n, 94, 0, u.InverseMod.result)
//             })
//         }
//
//         function Gl(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 26, "ion-row", [["class", "row"], ["padding-top", ""]], null, null, null, null, null)), t.Y(1, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 11, "ion-col", [["class", "col"], ["col-9", ""]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, $l)), t.Y(7, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Bl)), t.Y(10, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Dl)), t.Y(13, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(16, 0, null, null, 9, "ion-col", [["class", "col"], ["col-3", ""]], null, null, null, null, null)), t.Y(17, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(19, 0, null, null, 5, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0, t = l.component;
//                 "click" === n && (a = !1 != (t.IsShow = !t.IsShow) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(20, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t.U(16777216, null, 0, 1, null, Xl)), t.Y(22, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t.U(16777216, null, 0, 1, null, Hl)), t.Y(24, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.U(16777216, null, null, 1, null, Kl)), t.Y(29, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 7, 0, null == u.InverseMod.result || u.IsShow), l(n, 10, 0, null == u.InverseMod.result && u.IsShow), l(n, 13, 0, null != u.InverseMod.result), l(n, 22, 0, u.IsShow), l(n, 24, 0, !u.IsShow), l(n, 29, 0, u.IsShow)
//             }, null)
//         }
//
//         var Jl = t.V("inverse-mod-calc", Z, function (l) {
//                 return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "inverse-mod-calc", [], null, null, null, Gl, Ol)), t.Y(1, 49152, null, 0, Z, [sl.a], null, null)], null, null)
//             }, {a: "a", Modulus: "Modulus", InverseMod: "InverseMod", ShowTable: "ShowTable"}, {}, []),
//             Wl = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function Ql(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Tính tích modulo: "]))], null, null)
//         }
//
//         function ln(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["(A * B) mod N = "]))], null, null)
//         }
//
//         function nn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), t._18(1, null, ["(", " * ", ") mod ", " = ", ""]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 1, 0, u.a, u.b, u.Modulus, u.MultiplyMod.result)
//             })
//         }
//
//         function un(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Ẩn"]))], null, null)
//         }
//
//         function an(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Hiện"]))], null, null)
//         }
//
//         function tn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 95, "div", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(2, 0, null, null, 68, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(3, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(5, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(6, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(8, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(9, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 1, {contentLabel: 0}), t._16(603979776, 2, {_buttons: 1}), t._16(603979776, 3, {_icons: 1}), t.Y(13, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(15, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(16, 16384, [[1, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["A"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(19, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.a = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(20, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(22, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(23, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(27, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(28, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(30, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(31, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 4, {contentLabel: 0}), t._16(603979776, 5, {_buttons: 1}), t._16(603979776, 6, {_icons: 1}), t.Y(35, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(37, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(38, 16384, [[4, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["B"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(41, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.b = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(42, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(44, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(45, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(49, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(50, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(52, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(53, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 7, {contentLabel: 0}), t._16(603979776, 8, {_buttons: 1}), t._16(603979776, 9, {_icons: 1}), t.Y(57, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(59, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(60, 16384, [[7, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["N"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(63, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.modulus = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(64, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(66, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(67, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(72, 0, null, null, 10, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(73, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(75, 0, null, null, 6, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(76, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(78, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.calc() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(79, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 0, ["Tính"])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(84, 0, null, null, 10, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(85, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 10, {contentLabel: 0}), t._16(603979776, 11, {_buttons: 1}), t._16(603979776, 12, {_icons: 1}), t.Y(89, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n    "])), (l()(), t.Z(91, 0, null, 2, 2, "button", [["ion-button", ""]], null, null, null, jl.b, jl.a)), t.Y(92, 1097728, [[11, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(93, 0, ["Kết quả : ", ""])), (l()(), t._18(-1, 2, ["\n  "])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 16, 0, "primary"), l(n, 20, 0, u.a);
//                 l(n, 23, 0, "number");
//                 l(n, 38, 0, "primary"), l(n, 42, 0, u.b);
//                 l(n, 45, 0, "number");
//                 l(n, 60, 0, "primary"), l(n, 64, 0, u.modulus);
//                 l(n, 67, 0, "number")
//             }, function (l, n) {
//                 var u = n.component;
//                 l(n, 19, 0, t._13(n, 22).ngClassUntouched, t._13(n, 22).ngClassTouched, t._13(n, 22).ngClassPristine, t._13(n, 22).ngClassDirty, t._13(n, 22).ngClassValid, t._13(n, 22).ngClassInvalid, t._13(n, 22).ngClassPending), l(n, 41, 0, t._13(n, 44).ngClassUntouched, t._13(n, 44).ngClassTouched, t._13(n, 44).ngClassPristine, t._13(n, 44).ngClassDirty, t._13(n, 44).ngClassValid, t._13(n, 44).ngClassInvalid, t._13(n, 44).ngClassPending), l(n, 63, 0, t._13(n, 66).ngClassUntouched, t._13(n, 66).ngClassTouched, t._13(n, 66).ngClassPristine, t._13(n, 66).ngClassDirty, t._13(n, 66).ngClassValid, t._13(n, 66).ngClassInvalid, t._13(n, 66).ngClassPending), l(n, 93, 0, u.MultiplyMod.result)
//             })
//         }
//
//         function on(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 26, "ion-row", [["class", "row"], ["padding-top", ""]], null, null, null, null, null)), t.Y(1, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 11, "ion-col", [["class", "col"], ["col-9", ""]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Ql)), t.Y(7, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, ln)), t.Y(10, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, nn)), t.Y(13, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(16, 0, null, null, 9, "ion-col", [["class", "col"], ["col-3", ""]], null, null, null, null, null)), t.Y(17, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(19, 0, null, null, 5, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0, t = l.component;
//                 "click" === n && (a = !1 != (t.IsShow = !t.IsShow) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(20, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t.U(16777216, null, 0, 1, null, un)), t.Y(22, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t.U(16777216, null, 0, 1, null, an)), t.Y(24, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.U(16777216, null, null, 1, null, tn)), t.Y(29, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 7, 0, null == u.MultiplyMod.result || u.IsShow), l(n, 10, 0, null == u.MultiplyMod.result && u.IsShow), l(n, 13, 0, null != u.MultiplyMod.result), l(n, 22, 0, u.IsShow), l(n, 24, 0, !u.IsShow), l(n, 29, 0, u.IsShow)
//             }, null)
//         }
//
//         var en = t.V("multiply-mod-calc", w, function (l) {
//                 return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "multiply-mod-calc", [], null, null, null, on, Wl)), t.Y(1, 49152, null, 0, w, [sl.a], null, null)], null, null)
//             }, {a: "a", b: "b", modulus: "modulus", MultiplyMod: "MultiplyMod", ShowTable: "ShowTable"}, {}, []),
//             sn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function cn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Tìm phần tử nguyên thủy: "]))], null, null)
//         }
//
//         function rn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 3, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["A ∈ Z"])), (l()(), t.Z(2, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["p*"]))], null, null)
//         }
//
//         function _n(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 3, "h3", [], null, null, null, null, null)), (l()(), t._18(1, null, ["", " ∈ Z"])), (l()(), t.Z(2, 0, null, null, 1, "sub", [], null, null, null, null, null)), (l()(), t._18(3, null, ["", "*"]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 1, 0, u.PrimitiveElement.result), l(n, 3, 0, u.P)
//             })
//         }
//
//         function dn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Ẩn"]))], null, null)
//         }
//
//         function gn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["Hiện"]))], null, null)
//         }
//
//         function hn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 4, "span", [], null, null, null, null, null)), (l()(), t._18(1, null, ["", " "])), (l()(), t.Z(2, 0, null, null, 1, "sup", [], null, null, null, null, null)), (l()(), t._18(3, null, ["", ""])), (l()(), t._18(-1, null, [" "]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 1, 0, n.context.$implicit), l(n, 3, 0, u.PrimitiveElement.pCoefficientList[n.context.index])
//             })
//         }
//
//         function mn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 7, "span", [], null, null, null, null, null)), (l()(), t._18(1, null, ["(", " "])), (l()(), t.Z(2, 0, null, null, 1, "sup", [], null, null, null, null, null)), (l()(), t._18(3, null, ["", ""])), (l()(), t._18(4, null, [" - ", " "])), (l()(), t.Z(5, 0, null, null, 1, "sup", [], null, null, null, null, null)), (l()(), t._18(6, null, ["", ""])), (l()(), t._18(-1, null, [")"]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 1, 0, n.context.$implicit), l(n, 3, 0, u.PrimitiveElement.pCoefficientList[n.context.index]), l(n, 4, 0, n.context.$implicit), l(n, 6, 0, u.PrimitiveElement.pCoefficientList[n.context.index].minus(1))
//             })
//         }
//
//         function pn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 4, "span", [], null, null, null, null, null)), (l()(), t._18(1, null, ["", " "])), (l()(), t.Z(2, 0, null, null, 1, "sup", [], null, null, null, null, null)), (l()(), t._18(3, null, ["", ""])), (l()(), t._18(-1, null, [" "]))], null, function (l, n) {
//                 var u = n.component;
//                 l(n, 1, 0, n.context.$implicit), l(n, 3, 0, u.PrimitiveElement.p_1coefficientList[n.context.index])
//             })
//         }
//
//         function fn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 2, "power-mod-calc", [], null, null, null, El, kl)), t.Y(1, 49152, null, 0, b, [sl.a], {
//                 Base: [0, "Base"],
//                 Exponent: [1, "Exponent"],
//                 Modulus: [2, "Modulus"],
//                 PowerMod: [3, "PowerMod"],
//                 IsShow: [4, "IsShow"]
//             }, null), (l()(), t._18(-1, null, ["\n    "]))], function (l, n) {
//                 l(n, 1, 0, n.context.$implicit.base, n.context.$implicit.exponent, n.context.$implicit.modulus, n.context.$implicit, !1)
//             }, null)
//         }
//
//         function bn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 40, "ion-grid", [["class", "grid"]], null, null, null, null, null)), t.Y(1, 16384, null, 0, vl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(3, 0, null, null, 4, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["P = "])), (l()(), t.U(16777216, null, null, 1, null, hn)), t.Y(6, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(9, 0, null, null, 7, "h3", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["=> Φ(p) =\n      "])), (l()(), t.U(16777216, null, null, 1, null, mn)), t.Y(12, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(13, null, ["\n      = ", " = "])), (l()(), t.U(16777216, null, null, 1, null, pn)), t.Y(15, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, fn)), t.Y(19, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 6, 0, u.PrimitiveElement.pList), l(n, 12, 0, u.PrimitiveElement.pList), l(n, 15, 0, u.PrimitiveElement.p_1List), l(n, 19, 0, u.PrimitiveElement.PowerModList)
//             }, function (l, n) {
//                 l(n, 13, 0, n.component.PrimitiveElement.fiP)
//             })
//         }
//
//         function Yn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 99, "div", [], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(2, 0, null, null, 46, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(3, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(5, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(6, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(8, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(9, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 1, {contentLabel: 0}), t._16(603979776, 2, {_buttons: 1}), t._16(603979776, 3, {_icons: 1}), t.Y(13, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(15, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(16, 16384, [[1, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["Số bắt đầu"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(19, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.Start = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(20, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(22, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(23, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(27, 0, null, null, 20, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(28, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(30, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(31, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 4, {contentLabel: 0}), t._16(603979776, 5, {_buttons: 1}), t._16(603979776, 6, {_icons: 1}), t.Y(35, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(37, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(38, 16384, [[4, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["P"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(41, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.P = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(42, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(44, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(45, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(50, 0, null, null, 33, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(51, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(53, 0, null, null, 6, "ion-col", [["class", "col"], ["col-4", ""]], null, null, null, null, null)), t.Y(54, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(56, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.calc() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(57, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 0, ["Tìm"])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(61, 0, null, null, 21, "ion-col", [["class", "col"], ["col-8", ""]], null, null, null, null, null)), t.Y(62, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(64, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(65, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 7, {contentLabel: 0}), t._16(603979776, 8, {_buttons: 1}), t._16(603979776, 9, {_icons: 1}), t.Y(69, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(71, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), t.Y(72, 16384, [[7, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, null], [8, null], [8, null], [8, null]], null, null), (l()(), t._18(-1, null, ["Thông số tính toán"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(75, 0, null, 4, 5, "ion-toggle", [["checked", "false"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionChange"], [null, "ngModelChange"], [null, "keyup"]], function (l, n, u) {
//                 var a = !0, o = l.component;
//                 "keyup" === n && (a = !1 !== t._13(l, 76)._keyup(u) && a);
//                 "ionChange" === n && (a = !1 !== o.ShowTable && a);
//                 "ngModelChange" === n && (a = !1 !== (o.ShowTable = u) && a);
//                 return a
//             }, Ll.b, Ll.a)), t.Y(76, 1228800, null, 0, Ml.a, [E.a, V.a, A.a, t.j, t.z, Pl.a, [2, q.a], G.l, J.a, t.u], {checked: [0, "checked"]}, {ionChange: "ionChange"}), t._15(1024, null, yl.e, function (l) {
//                 return [l]
//             }, [Ml.a]), t.Y(78, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [2, yl.e]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(80, 16384, null, 0, yl.g, [yl.f], null, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(85, 0, null, null, 10, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(86, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 10, {contentLabel: 0}), t._16(603979776, 11, {_buttons: 1}), t._16(603979776, 12, {_icons: 1}), t.Y(90, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n    "])), (l()(), t.Z(92, 0, null, 2, 2, "button", [["ion-button", ""]], null, null, null, jl.b, jl.a)), t.Y(93, 1097728, [[11, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(94, 0, ["Kết quả : ", ""])), (l()(), t._18(-1, 2, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.U(16777216, null, null, 1, null, bn)), t.Y(98, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 16, 0, "primary"), l(n, 20, 0, u.Start);
//                 l(n, 23, 0, "number");
//                 l(n, 38, 0, "primary"), l(n, 42, 0, u.P);
//                 l(n, 45, 0, "number");
//                 l(n, 76, 0, "false"), l(n, 78, 0, u.ShowTable), l(n, 98, 0, u.ShowTable)
//             }, function (l, n) {
//                 var u = n.component;
//                 l(n, 19, 0, t._13(n, 22).ngClassUntouched, t._13(n, 22).ngClassTouched, t._13(n, 22).ngClassPristine, t._13(n, 22).ngClassDirty, t._13(n, 22).ngClassValid, t._13(n, 22).ngClassInvalid, t._13(n, 22).ngClassPending), l(n, 41, 0, t._13(n, 44).ngClassUntouched, t._13(n, 44).ngClassTouched, t._13(n, 44).ngClassPristine, t._13(n, 44).ngClassDirty, t._13(n, 44).ngClassValid, t._13(n, 44).ngClassInvalid, t._13(n, 44).ngClassPending), l(n, 75, 0, t._13(n, 76)._disabled, t._13(n, 76)._value, t._13(n, 76)._activated, t._13(n, 80).ngClassUntouched, t._13(n, 80).ngClassTouched, t._13(n, 80).ngClassPristine, t._13(n, 80).ngClassDirty, t._13(n, 80).ngClassValid, t._13(n, 80).ngClassInvalid, t._13(n, 80).ngClassPending), l(n, 94, 0, u.PrimitiveElement.result)
//             })
//         }
//
//         function Zn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 27, "ion-row", [["class", "row"], ["padding-top", ""]], null, null, null, null, null)), t.Y(1, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 11, "ion-col", [["class", "col"], ["col-9", ""]], null, null, null, null, null)), t.Y(4, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, cn)), t.Y(7, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, rn)), t.Y(10, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, _n)), t.Y(13, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(16, 0, null, null, 10, "ion-col", [["class", "col"], ["col-3", ""]], null, null, null, null, null)), t.Y(17, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(19, 0, null, null, 6, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0, t = l.component;
//                 "click" === n && (a = !1 != (t.IsShow = !t.IsShow) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(20, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t.U(16777216, null, 0, 1, null, dn)), t.Y(22, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t.U(16777216, null, 0, 1, null, gn)), t.Y(24, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.U(16777216, null, null, 1, null, Yn)), t.Y(30, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 7, 0, null == u.PrimitiveElement.result || u.IsShow), l(n, 10, 0, null == u.PrimitiveElement.result && u.IsShow), l(n, 13, 0, null != u.PrimitiveElement.result), l(n, 22, 0, u.IsShow), l(n, 24, 0, !u.IsShow), l(n, 30, 0, u.IsShow)
//             }, null)
//         }
//
//         var vn = t.V("primitive-element-calc", I, function (l) {
//                 return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "primitive-element-calc", [], null, null, null, Zn, sn)), t.Y(1, 49152, null, 0, I, [sl.a], null, null)], null, null)
//             }, {Start: "Start", P: "P", PrimitiveElement: "PrimitiveElement", ShowTable: "ShowTable"}, {}, []), Cn = u(54),
//             In = u(37), yn = u(38), wn = u(28), jn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function zn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "power-mod-calc", [], null, null, null, El, kl)), t.Y(1, 49152, null, 0, b, [sl.a], null, null)], null, null)
//         }
//
//         function Ln(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "inverse-mod-calc", [], null, null, null, Gl, Ol)), t.Y(1, 49152, null, 0, Z, [sl.a], null, null)], null, null)
//         }
//
//         function Mn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "multiply-mod-calc", [], null, null, null, on, Wl)), t.Y(1, 49152, null, 0, w, [sl.a], null, null)], null, null)
//         }
//
//         function Pn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "primitive-element-calc", [], null, null, null, Zn, sn)), t.Y(1, 49152, null, 0, I, [sl.a], null, null)], null, null)
//         }
//
//         function kn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 13, "div", [["padding-bottom", ""], ["style", "border: solid 1px #969696"]], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, zn)), t.Y(3, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Ln)), t.Y(6, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Mn)), t.Y(9, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Pn)), t.Y(12, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, null, ["\n  "]))], function (l, n) {
//                 l(n, 3, 0, 0 == n.context.$implicit), l(n, 6, 0, 1 == n.context.$implicit), l(n, 9, 0, 2 == n.context.$implicit), l(n, 12, 0, 3 == n.context.$implicit)
//             }, null)
//         }
//
//         function Tn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 56, "ion-header", [], null, null, null, null, null)), t.Y(1, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 52, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, Cn.b, Cn.a)), t.Y(4, 49152, null, 0, ol.a, [W.a, [2, ll.a], [2, sl.a], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== t._13(l, 8).toggle() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(7, 1097728, [[1, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), t.Y(8, 1064960, null, 0, In.a, [D.a, [2, ll.a], [2, zl.a], [2, ol.a]], {menuToggle: [0, "menuToggle"]}, null), t.Y(9, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 1, {_buttons: 1}), (l()(), t._18(-1, 0, ["\n      "])), (l()(), t.Z(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(13, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(16, 0, null, 2, 38, "ion-buttons", [["end", ""]], null, null, null, null, null)), t.Y(17, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 2, {_buttons: 1}), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(20, 0, null, null, 5, "button", [["color", "primary"], ["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.Calc.push(0) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(21, 1097728, [[2, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], {color: [0, "color"]}, null), (l()(), t._18(-1, 0, ["\n        "])), (l()(), t.Z(23, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(24, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n        lũy thừa\n      "])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(27, 0, null, null, 5, "button", [["color", "secondary"], ["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.Calc.push(1) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(28, 1097728, [[2, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], {color: [0, "color"]}, null), (l()(), t._18(-1, 0, ["\n        "])), (l()(), t.Z(30, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(31, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n        nghịch đảo\n      "])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(34, 0, null, null, 5, "button", [["color", "dark"], ["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.Calc.push(2) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(35, 1097728, [[2, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], {color: [0, "color"]}, null), (l()(), t._18(-1, 0, ["\n        "])), (l()(), t.Z(37, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(38, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n        nhân\n      "])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(41, 0, null, null, 5, "button", [["color", "primary"], ["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.Calc.push(3) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(42, 1097728, [[2, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], {color: [0, "color"]}, null), (l()(), t._18(-1, 0, ["\n        "])), (l()(), t.Z(44, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(45, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n        nguyên thủy\n      "])), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(48, 0, null, null, 5, "button", [["color", "danger"], ["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== (l.component.Calc = []) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(49, 1097728, [[2, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], {color: [0, "color"]}, null), (l()(), t._18(-1, 0, ["\n        "])), (l()(), t.Z(51, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(52, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n        xóa\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, 3, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.Z(58, 0, null, null, 5, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(59, 4374528, null, 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.U(16777216, null, 1, 1, null, kn)), t.Y(62, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, 1, ["\n"])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 8, 0, "");
//                 l(n, 13, 0, "menu");
//                 l(n, 21, 0, "primary");
//                 l(n, 24, 0, "add");
//                 l(n, 28, 0, "secondary");
//                 l(n, 31, 0, "add");
//                 l(n, 35, 0, "dark");
//                 l(n, 38, 0, "add");
//                 l(n, 42, 0, "primary");
//                 l(n, 45, 0, "add");
//                 l(n, 49, 0, "danger");
//                 l(n, 52, 0, "add"), l(n, 62, 0, u.Calc)
//             }, function (l, n) {
//                 l(n, 3, 0, t._13(n, 4)._hidden, t._13(n, 4)._sbPadding), l(n, 6, 0, t._13(n, 8).isHidden), l(n, 12, 0, t._13(n, 13)._hidden), l(n, 23, 0, t._13(n, 24)._hidden), l(n, 30, 0, t._13(n, 31)._hidden), l(n, 37, 0, t._13(n, 38)._hidden), l(n, 44, 0, t._13(n, 45)._hidden), l(n, 51, 0, t._13(n, 52)._hidden), l(n, 58, 0, t._13(n, 59).statusbarPadding, t._13(n, 59)._hasRefresher)
//             })
//         }
//
//         var Sn = t.V("page-home", e, function (l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "page-home", [], null, null, null, Tn, jn)), t.Y(1, 49152, null, 0, e, [sl.a], null, null)], null, null)
//         }, {}, {}, []), xn = u(16), Fn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function Un(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 12, "button", [["class", "item item-block"], ["ion-item", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== l.component.itemTapped(u, l.context.$implicit) && a);
//                 return a
//             }, N.b, N.a)), t.Y(1, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 2, {contentLabel: 0}), t._16(603979776, 3, {_buttons: 1}), t._16(603979776, 4, {_icons: 1}), t.Y(5, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t.Z(7, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(8, 147456, [[4, 4]], 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(9, 2, ["\n      ", "\n      "])), (l()(), t.Z(10, 0, null, 4, 1, "div", [["class", "item-note"], ["item-end", ""]], null, null, null, null, null)), (l()(), t._18(11, null, ["\n        ", "\n      "])), (l()(), t._18(-1, 2, ["\n    "]))], function (l, n) {
//                 l(n, 8, 0, n.context.$implicit.icon)
//             }, function (l, n) {
//                 l(n, 7, 0, t._13(n, 8)._hidden), l(n, 9, 0, n.context.$implicit.title), l(n, 11, 0, n.context.$implicit.note)
//             })
//         }
//
//         function Nn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 4, "div", [["padding", ""]], null, null, null, null, null)), (l()(), t._18(-1, null, ["\n    You navigated here from "])), (l()(), t.Z(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t._18(3, null, ["", ""])), (l()(), t._18(-1, null, ["\n  "]))], null, function (l, n) {
//                 l(n, 3, 0, n.component.selectedItem.title)
//             })
//         }
//
//         function qn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), t.Y(1, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, Cn.b, Cn.a)), t.Y(4, 49152, null, 0, ol.a, [W.a, [2, ll.a], [2, sl.a], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== t._13(l, 8).toggle() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(7, 1097728, [[1, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), t.Y(8, 1064960, null, 0, In.a, [D.a, [2, ll.a], [2, zl.a], [2, ol.a]], {menuToggle: [0, "menuToggle"]}, null), t.Y(9, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 1, {_buttons: 1}), (l()(), t._18(-1, 0, ["\n      "])), (l()(), t.Z(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(13, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(16, 0, null, 3, 2, "ion-title", [], null, null, null, al.b, al.a)), t.Y(17, 49152, null, 0, tl.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), (l()(), t._18(-1, 0, ["List"])), (l()(), t._18(-1, 3, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n\n"])), (l()(), t.Z(22, 0, null, null, 12, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(23, 4374528, null, 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.Z(25, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), t.Y(26, 16384, null, 0, cl.a, [V.a, t.j, t.z, A.a, G.l, J.a], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.U(16777216, null, null, 1, null, Un)), t.Y(29, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.U(16777216, null, 1, 1, null, Nn)), t.Y(33, 16384, null, 0, rl.i, [t.I, t.F], {ngIf: [0, "ngIf"]}, null), (l()(), t._18(-1, 1, ["\n"])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 8, 0, "");
//                 l(n, 13, 0, "menu"), l(n, 29, 0, u.items), l(n, 33, 0, u.selectedItem)
//             }, function (l, n) {
//                 l(n, 3, 0, t._13(n, 4)._hidden, t._13(n, 4)._sbPadding), l(n, 6, 0, t._13(n, 8).isHidden), l(n, 12, 0, t._13(n, 13)._hidden), l(n, 22, 0, t._13(n, 23).statusbarPadding, t._13(n, 23)._hasRefresher)
//             })
//         }
//
//         var En = t.V("page-list", m, function (l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "page-list", [], null, null, null, qn, Fn)), t.Y(1, 49152, null, 0, m, [sl.a, xn.a], null, null)], null, null)
//         }, {}, {}, []), Vn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function On(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 2, "button", [["ion-button", ""]], null, null, null, jl.b, jl.a)), t.Y(1, 1097728, null, 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(2, 0, ["", ""]))], null, function (l, n) {
//                 l(n, 2, 0, n.context.$implicit)
//             })
//         }
//
//         function $n(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), t.Y(1, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, Cn.b, Cn.a)), t.Y(4, 49152, null, 0, ol.a, [W.a, [2, ll.a], [2, sl.a], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== t._13(l, 8).toggle() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(7, 1097728, [[1, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), t.Y(8, 1064960, null, 0, In.a, [D.a, [2, ll.a], [2, zl.a], [2, ol.a]], {menuToggle: [0, "menuToggle"]}, null), t.Y(9, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 1, {_buttons: 1}), (l()(), t._18(-1, 0, ["\n      "])), (l()(), t.Z(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(13, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(16, 0, null, 3, 2, "ion-title", [], null, null, null, al.b, al.a)), t.Y(17, 49152, null, 0, tl.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), (l()(), t._18(-1, 0, ["Tìm số nguyên tố"])), (l()(), t._18(-1, 3, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.Z(22, 0, null, null, 65, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(23, 4374528, null, 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.Z(25, 0, null, 1, 46, "ion-row", [["class", "row"]], null, null, null, null, null)), t.Y(26, 16384, null, 0, Yl.a, [], null, null), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(28, 0, null, null, 20, "ion-col", [["class", "col"], ["col-6", ""]], null, null, null, null, null)), t.Y(29, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(31, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(32, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 2, {contentLabel: 0}), t._16(603979776, 3, {_buttons: 1}), t._16(603979776, 4, {_icons: 1}), t.Y(36, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(38, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(39, 16384, [[2, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["Số bắt đầu"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(42, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.From = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(43, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(45, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(46, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t.Z(50, 0, null, null, 20, "ion-col", [["class", "col"], ["col-6", ""]], null, null, null, null, null)), t.Y(51, 16384, null, 0, Zl.a, [], null, null), (l()(), t._18(-1, null, ["\n      "])), (l()(), t.Z(53, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(54, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 5, {contentLabel: 0}), t._16(603979776, 6, {_buttons: 1}), t._16(603979776, 7, {_icons: 1}), t.Y(58, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(60, 0, null, 1, 2, "ion-label", [["color", "primary"], ["floating", ""]], null, null, null, null, null)), t.Y(61, 16384, [[5, 4]], 0, Cl.a, [V.a, t.j, t.z, [8, ""], [8, null], [8, null], [8, null]], {color: [0, "color"]}, null), (l()(), t._18(-1, null, ["Giới hạn"])), (l()(), t._18(-1, 2, ["\n        "])), (l()(), t.Z(64, 0, null, 3, 4, "ion-input", [["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (l, n, u) {
//                 var a = !0;
//                 "ngModelChange" === n && (a = !1 !== (l.component.Limit = u) && a);
//                 return a
//             }, Il.b, Il.a)), t.Y(65, 671744, null, 0, yl.h, [[8, null], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), t._15(2048, null, yl.f, null, [yl.h]), t.Y(67, 16384, null, 0, yl.g, [yl.f], null, null), t.Y(68, 5423104, null, 0, wl.a, [V.a, A.a, E.a, W.a, t.j, t.z, [2, el.a], [2, q.a], [2, yl.f], J.a], {type: [0, "type"]}, null), (l()(), t._18(-1, 2, ["\n      "])), (l()(), t._18(-1, null, ["\n    "])), (l()(), t._18(-1, null, ["\n  "])), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.Z(73, 0, null, 1, 10, "ion-item", [["class", "item item-block"]], null, null, null, N.b, N.a)), t.Y(74, 1097728, null, 3, q.a, [E.a, V.a, t.j, t.z, [2, O.a]], null, null), t._16(335544320, 8, {contentLabel: 0}), t._16(603979776, 9, {_buttons: 1}), t._16(603979776, 10, {_icons: 1}), t.Y(78, 16384, null, 0, $.a, [], null, null), (l()(), t._18(-1, 2, ["\n    "])), (l()(), t.Z(80, 0, null, 2, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (l, n, u) {
//                 var a = !0, t = l.component;
//                 "click" === n && (a = !1 !== t.primeNumber.search(t.From, t.Limit) && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(81, 1097728, [[9, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 0, ["Tìm kiếm"])), (l()(), t._18(-1, 2, ["\n  "])), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.U(16777216, null, 1, 1, null, On)), t.Y(86, 802816, null, 0, rl.h, [t.I, t.F, t.p], {ngForOf: [0, "ngForOf"]}, null), (l()(), t._18(-1, 1, ["\n"])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 var u = n.component;
//                 l(n, 8, 0, "");
//                 l(n, 13, 0, "menu");
//                 l(n, 39, 0, "primary"), l(n, 43, 0, u.From);
//                 l(n, 46, 0, "number");
//                 l(n, 61, 0, "primary"), l(n, 65, 0, u.Limit);
//                 l(n, 68, 0, "number"), l(n, 86, 0, u.primeNumber.primeNumberSearchList)
//             }, function (l, n) {
//                 l(n, 3, 0, t._13(n, 4)._hidden, t._13(n, 4)._sbPadding), l(n, 6, 0, t._13(n, 8).isHidden), l(n, 12, 0, t._13(n, 13)._hidden), l(n, 22, 0, t._13(n, 23).statusbarPadding, t._13(n, 23)._hasRefresher), l(n, 42, 0, t._13(n, 45).ngClassUntouched, t._13(n, 45).ngClassTouched, t._13(n, 45).ngClassPristine, t._13(n, 45).ngClassDirty, t._13(n, 45).ngClassValid, t._13(n, 45).ngClassInvalid, t._13(n, 45).ngClassPending), l(n, 64, 0, t._13(n, 67).ngClassUntouched, t._13(n, 67).ngClassTouched, t._13(n, 67).ngClassPristine, t._13(n, 67).ngClassDirty, t._13(n, 67).ngClassValid, t._13(n, 67).ngClassInvalid, t._13(n, 67).ngClassPending)
//             })
//         }
//
//         var Bn = t.V("page-home", c, function (l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "page-home", [], null, null, null, $n, Vn)), t.Y(1, 49152, null, 0, c, [s, sl.a], null, null)], null, null)
//         }, {}, {}, []), Dn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function Xn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), t.Y(1, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, Cn.b, Cn.a)), t.Y(4, 49152, null, 0, ol.a, [W.a, [2, ll.a], [2, sl.a], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== t._13(l, 8).toggle() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(7, 1097728, [[1, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), t.Y(8, 1064960, null, 0, In.a, [D.a, [2, ll.a], [2, zl.a], [2, ol.a]], {menuToggle: [0, "menuToggle"]}, null), t.Y(9, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 1, {_buttons: 1}), (l()(), t._18(-1, 0, ["\n      "])), (l()(), t.Z(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(13, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(16, 0, null, 3, 2, "ion-title", [], null, null, null, al.b, al.a)), t.Y(17, 49152, null, 0, tl.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), (l()(), t._18(-1, 0, ["Tìm phần tử nghịch đảo"])), (l()(), t._18(-1, 3, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.Z(22, 0, null, null, 5, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(23, 4374528, null, 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.Z(25, 0, null, 1, 1, "inverse-mod-calc", [], null, null, null, Gl, Ol)), t.Y(26, 49152, null, 0, Z, [sl.a], null, null), (l()(), t._18(-1, 1, ["\n"])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 l(n, 8, 0, "");
//                 l(n, 13, 0, "menu")
//             }, function (l, n) {
//                 l(n, 3, 0, t._13(n, 4)._hidden, t._13(n, 4)._sbPadding), l(n, 6, 0, t._13(n, 8).isHidden), l(n, 12, 0, t._13(n, 13)._hidden), l(n, 22, 0, t._13(n, 23).statusbarPadding, t._13(n, 23)._hasRefresher)
//             })
//         }
//
//         var Hn = t.V("primitive-element", d, function (l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "primitive-element", [], null, null, null, Xn, Dn)), t.Y(1, 49152, null, 0, d, [sl.a], null, null)], null, null)
//         }, {}, {}, []), Rn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function An(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), t.Y(1, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, Cn.b, Cn.a)), t.Y(4, 49152, null, 0, ol.a, [W.a, [2, ll.a], [2, sl.a], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== t._13(l, 8).toggle() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(7, 1097728, [[1, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), t.Y(8, 1064960, null, 0, In.a, [D.a, [2, ll.a], [2, zl.a], [2, ol.a]], {menuToggle: [0, "menuToggle"]}, null), t.Y(9, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 1, {_buttons: 1}), (l()(), t._18(-1, 0, ["\n      "])), (l()(), t.Z(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(13, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(16, 0, null, 3, 2, "ion-title", [], null, null, null, al.b, al.a)), t.Y(17, 49152, null, 0, tl.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), (l()(), t._18(-1, 0, ["Tính lũy thừa Modulo"])), (l()(), t._18(-1, 3, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.Z(22, 0, null, null, 5, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(23, 4374528, null, 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.Z(25, 0, null, 1, 1, "power-mod-calc", [], null, null, null, El, kl)), t.Y(26, 49152, null, 0, b, [sl.a], null, null), (l()(), t._18(-1, 1, ["\n"])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 l(n, 8, 0, "");
//                 l(n, 13, 0, "menu")
//             }, function (l, n) {
//                 l(n, 3, 0, t._13(n, 4)._hidden, t._13(n, 4)._sbPadding), l(n, 6, 0, t._13(n, 8).isHidden), l(n, 12, 0, t._13(n, 13)._hidden), l(n, 22, 0, t._13(n, 23).statusbarPadding, t._13(n, 23)._hasRefresher)
//             })
//         }
//
//         var Kn = t.V("power-mod", _, function (l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "power-mod", [], null, null, null, An, Rn)), t.Y(1, 49152, null, 0, _, [sl.a], null, null)], null, null)
//         }, {}, {}, []), Gn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function Jn(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), t.Y(1, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, Cn.b, Cn.a)), t.Y(4, 49152, null, 0, ol.a, [W.a, [2, ll.a], [2, sl.a], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== t._13(l, 8).toggle() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(7, 1097728, [[1, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), t.Y(8, 1064960, null, 0, In.a, [D.a, [2, ll.a], [2, zl.a], [2, ol.a]], {menuToggle: [0, "menuToggle"]}, null), t.Y(9, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 1, {_buttons: 1}), (l()(), t._18(-1, 0, ["\n      "])), (l()(), t.Z(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(13, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(16, 0, null, 3, 2, "ion-title", [], null, null, null, al.b, al.a)), t.Y(17, 49152, null, 0, tl.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), (l()(), t._18(-1, 0, ["Tìm phần tử nguyên thủy"])), (l()(), t._18(-1, 3, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.Z(22, 0, null, null, 5, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(23, 4374528, null, 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.Z(25, 0, null, 1, 1, "primitive-element-calc", [], null, null, null, Zn, sn)), t.Y(26, 49152, null, 0, I, [sl.a], null, null), (l()(), t._18(-1, 1, ["\n"])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 l(n, 8, 0, "");
//                 l(n, 13, 0, "menu")
//             }, function (l, n) {
//                 l(n, 3, 0, t._13(n, 4)._hidden, t._13(n, 4)._sbPadding), l(n, 6, 0, t._13(n, 8).isHidden), l(n, 12, 0, t._13(n, 13)._hidden), l(n, 22, 0, t._13(n, 23).statusbarPadding, t._13(n, 23)._hasRefresher)
//             })
//         }
//
//         var Wn = t.V("primitive-element", r, function (l) {
//                 return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "primitive-element", [], null, null, null, Jn, Gn)), t.Y(1, 49152, null, 0, r, [sl.a], null, null)], null, null)
//             }, {a: "a", Modulus: "Modulus", ShowTable: "ShowTable"}, {}, []),
//             Qn = t.X({encapsulation: 2, styles: [], data: {}});
//
//         function lu(l) {
//             return t._19(0, [(l()(), t.Z(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), t.Y(1, 16384, null, 0, Q.a, [V.a, t.j, t.z, [2, ll.a]], null, null), (l()(), t._18(-1, null, ["\n  "])), (l()(), t.Z(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, Cn.b, Cn.a)), t.Y(4, 49152, null, 0, ol.a, [W.a, [2, ll.a], [2, sl.a], V.a, t.j, t.z], null, null), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (l, n, u) {
//                 var a = !0;
//                 "click" === n && (a = !1 !== t._13(l, 8).toggle() && a);
//                 return a
//             }, jl.b, jl.a)), t.Y(7, 1097728, [[1, 4]], 0, zl.a, [[8, ""], V.a, t.j, t.z], null, null), t.Y(8, 1064960, null, 0, In.a, [D.a, [2, ll.a], [2, zl.a], [2, ol.a]], {menuToggle: [0, "menuToggle"]}, null), t.Y(9, 16384, null, 1, yn.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), t._16(603979776, 1, {_buttons: 1}), (l()(), t._18(-1, 0, ["\n      "])), (l()(), t.Z(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), t.Y(13, 147456, null, 0, wn.a, [V.a, t.j, t.z], {name: [0, "name"]}, null), (l()(), t._18(-1, 0, ["\n    "])), (l()(), t._18(-1, 3, ["\n    "])), (l()(), t.Z(16, 0, null, 3, 2, "ion-title", [], null, null, null, al.b, al.a)), t.Y(17, 49152, null, 0, tl.a, [V.a, t.j, t.z, [2, ul.a], [2, ol.a]], null, null), (l()(), t._18(-1, 0, ["Tính tích Modulo"])), (l()(), t._18(-1, 3, ["\n  "])), (l()(), t._18(-1, null, ["\n"])), (l()(), t._18(-1, null, ["\n"])), (l()(), t.Z(22, 0, null, null, 5, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, il.b, il.a)), t.Y(23, 4374528, null, 0, el.a, [V.a, A.a, J.a, t.j, t.z, W.a, K.a, t.u, [2, ll.a], [2, sl.a]], null, null), (l()(), t._18(-1, 1, ["\n  "])), (l()(), t.Z(25, 0, null, 1, 1, "multiply-mod-calc", [], null, null, null, on, Wl)), t.Y(26, 49152, null, 0, w, [sl.a], null, null), (l()(), t._18(-1, 1, ["\n"])), (l()(), t._18(-1, null, ["\n"]))], function (l, n) {
//                 l(n, 8, 0, "");
//                 l(n, 13, 0, "menu")
//             }, function (l, n) {
//                 l(n, 3, 0, t._13(n, 4)._hidden, t._13(n, 4)._sbPadding), l(n, 6, 0, t._13(n, 8).isHidden), l(n, 12, 0, t._13(n, 13)._hidden), l(n, 22, 0, t._13(n, 23).statusbarPadding, t._13(n, 23)._hasRefresher)
//             })
//         }
//
//         var nu = t.V("multiply_mod", g, function (l) {
//                 return t._19(0, [(l()(), t.Z(0, 0, null, null, 1, "multiply_mod", [], null, null, null, lu, Qn)), t.Y(1, 49152, null, 0, g, [sl.a], null, null)], null, null)
//             }, {}, {}, []), uu = u(126), au = u(96), tu = u(98), ou = u(123), iu = u(103), eu = u(191), su = u(64),
//             cu = u(58), ru = u(106), _u = u(74), du = u(111), gu = u(122), hu = u(118), mu = u(190), pu = u(124),
//             fu = u(105), bu = u(125), Yu = t.W(j, [z.b], function (l) {
//                 return t._10([t._11(512, t.i, t.S, [[8, [L.a, M.a, P.a, k.a, T.a, S.a, x.a, F.a, U.a, bl, Sn, En, Bn, Hn, Kn, Wn, vn, en, nu, Jl, Vl]], [3, t.i], t.s]), t._11(5120, t.r, t._9, [[3, t.r]]), t._11(4608, rl.k, rl.j, [t.r, [2, rl.s]]), t._11(5120, t.b, t._0, []), t._11(5120, t.p, t._6, []), t._11(5120, t.q, t._7, []), t._11(4608, a.c, a.q, [rl.c]), t._11(6144, t.D, null, [a.c]), t._11(4608, a.f, uu.a, []), t._11(5120, a.d, function (l, n, u, t, o) {
//                     return [new a.k(l, n), new a.o(u), new a.n(t, o)]
//                 }, [rl.c, t.u, rl.c, rl.c, a.f]), t._11(4608, a.e, a.e, [a.d, t.u]), t._11(135680, a.m, a.m, [rl.c]), t._11(4608, a.l, a.l, [a.e, a.m]), t._11(6144, t.B, null, [a.l]), t._11(6144, a.p, null, [a.m]), t._11(4608, t.G, t.G, [t.u]), t._11(4608, a.h, a.h, [rl.c]), t._11(4608, a.i, a.i, [rl.c]), t._11(4608, v.h, v.m, [rl.c, t.w, v.k]), t._11(4608, v.n, v.n, [v.h, v.l]), t._11(5120, v.a, function (l) {
//                     return [l]
//                 }, [v.n]), t._11(4608, v.j, v.j, []), t._11(6144, v.i, null, [v.j]), t._11(4608, v.g, v.g, [v.i]), t._11(6144, v.b, null, [v.g]), t._11(5120, v.f, v.o, [v.b, [2, v.a]]), t._11(4608, v.c, v.c, [v.f]), t._11(4608, yl.k, yl.k, []), t._11(4608, yl.c, yl.c, []), t._11(4608, au.a, au.a, [W.a, V.a]), t._11(4608, tu.a, tu.a, [W.a, V.a]), t._11(4608, ou.a, ou.a, []), t._11(4608, E.a, E.a, []), t._11(4608, Pl.a, Pl.a, [A.a]), t._11(4608, K.a, K.a, [V.a, A.a, t.u, J.a]), t._11(4608, iu.a, iu.a, [W.a, V.a]), t._11(5120, rl.f, eu.b, [rl.q, [2, rl.a], V.a]), t._11(4608, rl.e, rl.e, [rl.f]), t._11(5120, su.b, su.d, [W.a, su.a]), t._11(5120, hl.a, hl.b, [W.a, su.b, rl.e, cu.b, t.i]), t._11(4608, ru.a, ru.a, [W.a, V.a, hl.a]), t._11(4608, _u.a, _u.a, [W.a, V.a]), t._11(4608, du.a, du.a, [W.a, V.a, hl.a]), t._11(4608, gu.a, gu.a, [V.a, A.a, J.a, W.a, G.l]), t._11(4608, hu.a, hu.a, [W.a, V.a]), t._11(4608, gl.a, gl.a, [A.a, V.a]), t._11(4608, o.a, o.a, []), t._11(4608, s, s, []), t._11(4608, C, C, []), t._11(4608, i.a, i.a, []), t._11(512, rl.b, rl.b, []), t._11(512, t.k, mu.a, []), t._11(256, V.b, {}, []), t._11(1024, pu.a, pu.b, []), t._11(1024, A.a, A.b, [a.b, pu.a, t.u]), t._11(1024, V.a, V.c, [V.b, A.a]), t._11(512, J.a, J.a, [A.a]), t._11(512, D.a, D.a, []), t._11(512, W.a, W.a, [V.a, A.a, [2, D.a]]), t._11(512, G.l, G.l, [W.a]), t._11(256, su.a, {links: []}, []), t._11(512, t.h, t.h, []), t._11(512, fu.a, fu.a, [t.h]), t._11(1024, cu.b, cu.c, [fu.a, t.o]), t._11(1024, t.c, function (l, n, u, t, o, i, e, s, c, r, _, d, g) {
//                     return [a.s(l), bu.a(n), ou.b(u, t), gu.b(o, i, e, s, c), cu.d(r, _, d, g)]
//                 }, [[2, t.t], V.a, A.a, J.a, V.a, A.a, J.a, W.a, G.l, V.a, su.a, cu.b, t.u]), t._11(512, t.d, t.d, [[2, t.c]]), t._11(131584, t.f, t.f, [t.u, t.T, t.o, t.k, t.i, t.d]), t._11(512, t.e, t.e, [t.f]), t._11(512, a.a, a.a, [[3, a.a]]), t._11(512, v.e, v.e, []), t._11(512, v.d, v.d, []), t._11(512, yl.j, yl.j, []), t._11(512, yl.d, yl.d, []), t._11(512, yl.i, yl.i, []), t._11(512, eu.a, eu.a, []), t._11(512, j, j, []), t._11(256, v.k, "XSRF-TOKEN", []), t._11(256, v.l, "X-XSRF-TOKEN", []), t._11(256, z.a, h, []), t._11(256, rl.a, "/", [])])
//             });
//         Object(t.M)(), Object(a.j)().bootstrapModuleFactory(Yu)
//     }
// }, [195]);