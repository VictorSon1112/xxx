(function (e) {
  function t(t) {
    for (
      var a, r, s = t[0], o = t[1], l = t[2], d = 0, b = [];
      d < s.length;
      d++
    )
      (r = s[d]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && b.push(i[r][0]),
        (i[r] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    u && u(t);
    while (b.length) b.shift()();
    return c.push.apply(c, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], a = !0, s = 1; s < n.length; s++) {
        var o = n[s];
        0 !== i[o] && (a = !1);
      }
      a && (c.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var a = {},
    i = { app: 0 },
    c = [];
  function r(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = a),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var u = o;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "004d": function (e, t, n) {
    "use strict";
    n("7979");
  },
  "01d4": function (e, t, n) {
    e.exports = "img/thao.4feb00bd.png";
  },
  "0250": function (e, t, n) {
    "use strict";
    n("3fba");
  },
  "0258": function (e, t, n) {
    "use strict";
    n("e624");
  },
  "025b": function (e, t, n) {
    e.exports = "img/le.a96529e3.png";
  },
  "030c": function (e, t, n) {
    e.exports = "img/btn-explore.4b0beb9c.png";
  },
  "032b": function (e, t, n) {
    "use strict";
    n("13b9");
  },
  "0498": function (e, t, n) {
    e.exports = "img/icetea.5be16c23.png";
  },
  "0578": function (e, t, n) {
    "use strict";
    n("611f");
  },
  "05be": function (e, t, n) {
    e.exports = "img/planet4.25e69299.png";
  },
  "0665": function (e, t, n) {
    e.exports = "img/ron.baf9912d.png";
  },
  "0710": function (e, t, n) {
    e.exports = "img/minh.67c57332.png";
  },
  "08f5": function (e, t, n) {
    e.exports = listMechasSlider[2].image;
  },
  "092c": function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=16";
  },
  "0961": function (e, t, n) {
    e.exports = "img/iphone4.c59392e0.png";
  },
  "0a0e": function (e, t, n) {
    "use strict";
    n("c59a");
  },
  "0b02": function (e, t, n) {
    e.exports = "img/google_plus.9778939f.svg";
  },
  "0b48": function (e, t, n) {
    e.exports = "img/rika_thumb_s.5cc9cda9.png";
  },
  "0beb": function (e, t, n) {
    e.exports = "img/mih.07cfe176.png";
  },
  "0c86": function (e, t, n) {
    e.exports = "img/telegram.bdd062ac.svg";
  },
  "0c9c": function (e, t, n) {
    e.exports = "img/instagram.11cf4584.svg";
  },
  "0cc6": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "0e46": function (e, t, n) {},
  "0e58": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "0e8e": function (e, t, n) {
    "use strict";
    n("1bd7");
  },
  "10ca": function (e, t, n) {
    e.exports = "img/mail_confirm.72cb047f.png";
  },
  "11ca": function (e, t, n) {
    e.exports = "img/hikari.a2c9157d.png";
  },
  1217: function (e, t, n) {
    "use strict";
    n("30a6");
  },
  1293: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAMAAABxVtfCAAAAAXNSR0IB2cksfwAAAJxQTFRFAAAA/////////////////////////////////Pz8/////////////////////////////////////v7+/////////Pz8/////////////////////////////////v7+/////////////////////////////////Pz8/////////////////////f39////////////////////DcO5XQAAADR0Uk5TAP/8+O9sudleIOrxncj2wgZMzSdBajESrWJGb9MWD6LVgJWxkQwY5jdYG1s93lKnZnMK4oqfPTMAAAEvSURBVHicdZLpdoIwEIWHXfZVKIiyC6jVVt//3ZqQIeHo6fzK5Dt3lpsAsDhfHdeSJEmNqtyEbQSzrkhryH7+FOjcqtI2bIdLzS/pPfQYVQ9xJ5d+ZHjk0F2WXo3MSRfGFzPu6bEPCEtGjpzTUkijiRUCPB1esMYJDkv2OEFqcVlPwbTX2GhqwQosoRwISl2eNyBKKnvCco/nHfhi/l/CfgSLoEZg2yrVXS1PRfsMMNjh+z4ldN3jLZl0vALsXWbCXmQloJflkaMTltKhweLxkFGXguOQ4MYtFKyzF7nuTFjouwbzV54h0//ZwScO7tYXX3bfra8sU5ey9WUVjTIbM30ZLjW2DHWvGxu6eH3oxvu6URG96epQOBG3yobJVbr9oEPijDadLFetKmRfA/4AZIoScd+cUR4AAAAASUVORK5CYII=";
  },
  "12a4": function (e, t, n) {
    "use strict";
    n("996c");
  },
  "13b9": function (e, t, n) {},
  1448: function (e, t, n) {
    e.exports = "img/tab-frontline.6e0969bc.png";
  },
  1483: function (e, t, n) {
    e.exports = "img/ellipse-game.21839c2f.png";
  },
  "14c0": function (e, t, n) {
    e.exports = "img/explore_enjoy.6aa0ef13.png";
  },
  1538: function (e, t, n) {
    e.exports = "img/twitter.9eb51f15.svg";
  },
  1552: function (e, t, n) {
    e.exports = "img/logo-mirai.01ffd431.png";
  },
  "15b4": function (e, t, n) {
    e.exports = "img/globe.94d0fbab.svg";
  },
  "16fe": function (e, t, n) {},
  1749: function (e, t, n) {
    e.exports = "img/moon.e40cbbee.png";
  },
  "1b60": function (e, t, n) {
    e.exports = "img/view-detail-button.920a2198.png";
  },
  "1bcc": function (e, t, n) {
    e.exports = "img/tick_green.7d66d309.svg";
  },
  "1bd7": function (e, t, n) {},
  "1c90": function (e, t, n) {
    e.exports = "img/cancel.c42b2c02.svg";
  },
  "1d3a": function (e, t, n) {
    e.exports = "img/game.4f06bd82.png";
  },
  "1d9d": function (e, t, n) {
    e.exports = "img/arrow-right.13a212ed.svg";
  },
  2138: function (e, t, n) {
    e.exports = "img/title-game1.4f2e3893.png";
  },
  "21c7": function (e, t, n) {
    e.exports = listMechasSlider[5].thumb;
  },
  "22f1": function (e, t, n) {
    e.exports = "img/Q3-2022.f4c7b8cd.png";
  },
  "23dd": function (e, t, n) {
    e.exports = "img/team-frame.2a382441.png";
  },
  "248c": function (e, t, n) {
    e.exports = "img/build-customise.8a7df08f.svg";
  },
  "257e": function (e, t, n) {},
  2659: function (e, t, n) {
    e.exports = "img/roadmap.37168032.png";
  },
  "26ad": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "29ad": function (e, t, n) {
    e.exports = "img/explore_explore.c34a895b.png";
  },
  "29fb": function (e, t, n) {
    e.exports = "img/logo.0b9a7fb9.png";
  },
  "2ac9": function (e, t, n) {
    e.exports = listMechasSlider[0].image;
  },
  "2b63": function (e, t, n) {
    e.exports = "img/vr.809c10d5.png";
  },
  "2ba4": function (e, t, n) {
    e.exports = listMechasSlider[5].image;
  },
  "2d02": function (e, t, n) {
    e.exports = "img/copy.b77a2618.svg";
  },
  "2d4d": function (e, t, n) {
    e.exports = "img/chiyoko_thumb.f1baf9e5.png";
  },
  "2da4": function (e, t, n) {
    e.exports = "img/planet3.ca99e452.png";
  },
  "2e08": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZCAMAAABn0dyjAAAAAXNSR0IB2cksfwAAAJBQTFRFAAAA/////////v7+/////////////////////////////////////////////////v7+/////////////////////////v7+/////////////////////////////////////////f39/v7+/////////v7+////////+vr6////////////////////////JtFalgAAADB0Uk5TAP+gHusd2dYcuv7MyRjer2ACDO+Rzst7LDsFicKBsvuYM1Ljalj0K+gxmzdAI0i30RRMsgAAAOtJREFUeJx9kumSgyAQhJkQD9ggKhg1UXPfu8n7v12G1fzKwFdQ01V09XCxos6AwMw4GzlJgOv8CyPrYjS8oGoj/s1fOiVUYFmQH1jc0jSKcLg5SVciVYwGOCdJHONwc5KuxF2v0LCgzvBBl4wtQwbIV65FgG3pTTBCD8OACfQezjVv2sfuseN0i82xEVikhIo2CJXB9eDUgW6R55D8tgmqjN7kvgbNmPg3kC36FszWGn9Cxu+TmnuOqdOT7gRifRdV5bfLpWnwQf1XLZF1iR8mhC3Dzw2Y0IfWN8+CqS4UsMIvpY73GY3d4/ob6mkP9eG8rVgAAAAASUVORK5CYII=";
  },
  "2f49": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IB2cksfwAAAH5QTFRFAAAA/////////////////////////////////////f39/////////////////////////////////////////////////v7+/////////////v7+////+/v7/////////////v7+/////f39/Pz8/f39////////////////fIHsZwAAACp0Uk5TAP/3BPExpj78tjbCEc6w5dod7gyd4Y1hb7xb01Mk66pCc5iUSoQT1xmJwLUgKgAAALBJREFUeJxt0dcShCAMBdDQVMTe29q2//8Prg0GXO8Tc2CSAABHWBaFovLATEnRGhEbamO0hxNNCUcynca3XnGmseso5hozrDjQOM4Vf/WWllRnNAaUxWt9QIBi18Q9XTNbtX/o5HXBRJpA3OPPULAD08pfDg4uAa+MEMKWvXXzjxnCKNlXeH4Bo+g/lhzBDAb/ihHk19xc1a6XR7XOG+2Ubp9QzuIdUoxpkrf8OS74A3p9B+054OxbAAAAAElFTkSuQmCC";
  },
  "30a6": function (e, t, n) {},
  "336e": function (e, t, n) {
    e.exports = "img/explore_vtm.4e907cb6.png";
  },
  "33b3": function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=52";
  },
  "34c3": function (e, t, n) {
    e.exports = "img/arrow_down3.1f15b4f8.svg";
  },
  3919: function (e, t, n) {
    e.exports = "img/email.f1fd3584.svg";
  },
  "392f": function (e, t, n) {
    e.exports = "img/explore_vga.90fe8d8e.png";
  },
  "3a54": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "3a66": function (e, t, n) {
    e.exports = "img/btn-play.f8a84de2.png";
  },
  "3b6e": function (e, t, n) {
    e.exports = "img/lock.60e32145.svg";
  },
  "3bd0": function (e, t, n) {
    e.exports = "img/coming_soon.1a0cecc6.png";
  },
  "3be3": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAAXNSR0IB2cksfwAAAJxQTFRFAAAA/////////////////////////////////////////////////v7+/////////////////////////////////////////////////////////////////////////////////v7++vr6/////////v7+/////////////////////v7++/v7/////////////////v7+////C8yBZwAAADR0Uk5TAP/2q9hu+xGY7ORL3yvo1DnIRe8Gvf4ExdAYCrIeVhQNiEI1uvNgnH2ijSdnJGRRj5V5c3tBOMYAAAEzSURBVHicbZLXmoMgFIQPYF1rbIlGY6Kxp+/7v9uCQnRN5gL4zk+bAQCu/H46O6a0aS7DFv4p+Y2RkK65S+Tt0FL2K3ijm49W6o4cXfAaIUSmlZ7+iRDq2Y3UzbrsK7SpDMrkFdnJLmF9qEIeL8HP080BGjZUDPBmoIe1CmUJyXTKE04cKPGDWlbbzgLLHisOhNNe3SEZMyC0M6KxhkFim10GZkZ9YG1P+xfizGSrDBrD1nBQy6YEZMko1TwZVfWYhSoJJpwrqX6fIhywYJpwEGo83oPw+h4h6QCWzK4iXBHIbJGim20icgU488INtj0fRil7YKfITb5PBiIFITtUpqkyO1tW0Bedx5cPtC9Iuk6X3jefqBR/KWhXnym1Fp+wSKOZOKPNWceij32McWWSOuO1PzD0Errc5EQQAAAAAElFTkSuQmCC";
  },
  "3e51": function (e, t, n) {
    e.exports = "img/morningstar.4599e3f0.svg";
  },
  "3f10": function (e, t, n) {
    e.exports = "img/mail.083b5c78.svg";
  },
  "3f2f": function (e, t, n) {},
  "3fba": function (e, t, n) {},
  "404f": function (e, t, n) {
    e.exports = "img/dot1.bc4e58be.svg";
  },
  "40fe": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "41eb": function (e, t, n) {},
  4238: function (e, t, n) {
    "use strict";
    n("41eb");
  },
  4539: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=14";
  },
  "46d7": function (e, t, n) {
    e.exports = "img/chiyoko_thumb_s.37b5dc71.png";
  },
  "471b": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "48cd": function (e, t, n) {},
  "48f3": function (e, t, n) {
    e.exports = "img/6.66f9e36b.png";
  },
  "49be": function (e, t, n) {
    e.exports = "img/explore_mmp.8b86cdf0.png";
  },
  "49f8": function (e, t, n) {
    var a = { "./en.json": "edd4", "./vi.json": "aced" };
    function i(e) {
      var t = c(e);
      return n(t);
    }
    function c(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (i.keys = function () {
      return Object.keys(a);
    }),
      (i.resolve = c),
      (e.exports = i),
      (i.id = "49f8");
  },
  "4a60": function (e, t, n) {
    e.exports = listMechasSlider[1].image;
  },
  "4b11": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "4b7f": function (e, t, n) {
    e.exports = "img/planet2.1d3c3c41.png";
  },
  "4d18": function (e, t, n) {
    e.exports = "img/explore_trade.9803bae8.png";
  },
  "4d41": function (e, t, n) {},
  "4d51": function (e, t, n) {
    e.exports = listMechasSlider[1].thumb;
  },
  "4e04": function (e, t, n) {
    e.exports = "img/vr-right.d782cceb.png";
  },
  "4e72": function (e, t, n) {
    e.exports = "img/metamask.0c69dafb.svg";
  },
  "4ef4": function (e, t, n) {
    e.exports = "img/Q4-2021.4d95f12d.png";
  },
  "4f70": function (e, t) {
    e.exports = "img/dot.png";
  },
  "4ffe": function (e, t, n) {},
  "50e4": function (e, t, n) {
    e.exports = "img/game2.1b328545.png";
  },
  5177: function (e, t, n) {
    e.exports = "img/telegram.0fcb2df4.svg";
  },
  5229: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=12";
  },
  "53a7": function (e, t, n) {
    e.exports = "img/google_email.b258809d.svg";
  },
  5407: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAMAAACnDzTfAAAAAXNSR0IB2cksfwAAAJxQTFRFAAAA/////////////////////////////////////////////v7+/////////////////////////////////f39/////////////////////////v7+/////////////////////f39/////v7+/////////////v7+/f39/////////////////f39/Pz8////////////////GZrnZwAAADR0Uk5TAP/t/TCI062YE8upWPPoD7TiAkbbNMcF+vchC2mBn5G40HoYo8NkT3M8J05wOEIsX769VKOvfbUAAAEiSURBVHicbZLpgoIwDIRToNwrNyJyCYKu5x7v/27bkoIVNn+A+VKYTACYqrtS46epbtoWFpU4H0RUfPZk4pkqkSo+vdBTJ4uioUDaZokIMRFZ8RoR0o7s+B8i2Z2hx7t26LlhZq1ns/hcscUngwggN82K235AnnHNTUaoRuiAKuzBgWHsd+FisF5djFvzA4FwcuSj1LqBzB01BVJ08DmKe2SFYBhJsZcjpG9Ml1l4EKxH840m7UQVzESWWi9mEMF+8UZt55V+iYRi6Kad2uKt0STUABW77Gy/vOPKhgmprPe5Y8zA+bxrM4fucKHElFPDt6UlKzln2+/19njCGLu9Rrf5N3MWRHGlmIpARv5FThesNs0QbJwIlhUmQ0np+dTNyh/gWQ+bN/Tt0wAAAABJRU5ErkJggg==";
  },
  "54b6": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "54fc": function (e, t, n) {
    e.exports = listMechasSlider[6].thumb;
  },
  "55b4": function (e, t, n) {
    e.exports = "img/arrow.0e3577d9.svg";
  },
  "55bb": function (e, t, n) {
    "use strict";
    n("ff0b");
  },
  "562e": function (e, t, n) {
    e.exports = "img/trang.c0ec43e9.png";
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("7a23"),
      i = n("f7e2"),
      c = n("6c02"),
      r = Object(a["N"])("data-v-00b4f2ba"),
      s = r(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("Header"),
          o = Object(a["D"])("Content");
        return (
          Object(a["u"])(),
          Object(a["f"])(
            a["a"],
            null,
            [Object(a["j"])(s), Object(a["j"])(o)],
            64
          )
        );
      }),
      o = Object(a["N"])("data-v-e2963e10"),
      l = o(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("BetaTestingBanner"),
          o = Object(a["D"])("Banner"),
          l = Object(a["D"])("Exploration"),
          u = Object(a["D"])("Moon"),
          d = Object(a["D"])("AugmentedReality"),
          b = Object(a["D"])("VirtualReality"),
          j = Object(a["D"])("Game"),
          i = Object(a["D"])("Tokenomics"),
          m = Object(a["D"])("Roadmap"),
          p = Object(a["D"])("Partners"),
          f = Object(a["D"])("Team"),
          g = Object(a["D"])("Footer"),
          h = Object(a["D"])("Delimiter");
        return (
          Object(a["u"])(),
          Object(a["f"])(
            a["a"],
            null,
            [
              Object(a["j"])(
                s,
                { deadline: c.countDownDate, timeTitle: c.timeTitle },
                null,
                8,
                ["deadline", "timeTitle"]
              ),
              Object(a["j"])(
                "main",
                { ref: "main", style: r.computedStyle },
                [
                  Object(a["j"])(o),
                  Object(a["j"])(
                    l,
                    {
                      step: c.currentStep,
                      view: 2 === c.phase,
                      onChangeStep: r.changeStep,
                    },
                    null,
                    8,
                    ["step", "view", "onChangeStep"]
                  ),
                  Object(a["j"])(u),
                  Object(a["j"])(
                    d,
                    { step: c.currentStep, onChangeStep: r.changeStep },
                    null,
                    8,
                    ["step", "onChangeStep"]
                  ),
                  Object(a["j"])(
                    b,
                    { step: c.currentStep, onChangeStep: r.changeStep },
                    null,
                    8,
                    ["step", "onChangeStep"]
                  ),
                  Object(a["j"])(j, { view: 6 === c.phase }, null, 8, ["view"]),
                  Object(a["j"])(
                    m,
                    { view: 7 === c.phase, image: r.displayImage },
                    null,
                    8,
                    ["view", "image"]
                  ),
                  Object(a["j"])(
                    p,
                    { view: 8 === c.phase, image: r.displayImage },
                    null,
                    8,
                    ["view", "image"]
                  ),
                  Object(a["j"])(f, { image: r.displayImage }, null, 8, [
                    "image",
                  ]),
                  Object(a["j"])(g, { image: r.displayImage }, null, 8, [
                    "image",
                  ]),
                ],
                4
              ),
              Object(a["j"])(
                h,
                {
                  phase: 9,
                  "current-phase": c.phase,
                  step: r.step,
                  "current-step": c.currentStep,
                  onUpdatePhase: r.changePhase,
                },
                null,
                8,
                ["current-phase", "step", "current-step", "onUpdatePhase"]
              ),
            ],
            64
          )
        );
      }),
      u = n("bb7c"),
      d = n.n(u),
      b = n("abdc"),
      j = n.n(b),
      m = n("bb40"),
      p = n.n(m),
      f = n("3a66"),
      g = n.n(f),
      h = n("d354"),
      O = n.n(h),
      v = Object(a["N"])("data-v-118eb5cf");
    Object(a["x"])("data-v-118eb5cf");
    var A = { id: "banner" },
      w = { class: "controls" },
      y = { key: 0, alt: "", src: p.a },
      k = { key: 1, alt: "", src: g.a },
      C = { key: 0, class: "banner", alt: "", src: O.a };
    Object(a["v"])();
    var x = v(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", A, [
            Object(a["j"])(
              "video",
              {
                ref: "video",
                autoplay: "",
                muted: "",
                loop: "",
                src: d.a,
                poster: j.a,
                onLoadedmetadata:
                  t[1] ||
                  (t[1] = function () {
                    return r.fadeBanner && r.fadeBanner.apply(r, arguments);
                  }),
              },
              null,
              544
            ),
            Object(a["j"])("div", w, [
              Object(a["j"])(
                "div",
                {
                  class: "btn-play",
                  onClick:
                    t[2] ||
                    (t[2] = function () {
                      return r.toggle && r.toggle.apply(r, arguments);
                    }),
                },
                [
                  c.played
                    ? (Object(a["u"])(), Object(a["f"])("img", y))
                    : (Object(a["u"])(), Object(a["f"])("img", k)),
                ]
              ),
            ]),
            Object(a["j"])(
              a["c"],
              { name: "fade" },
              {
                default: v(function () {
                  return [
                    c.banner
                      ? (Object(a["u"])(), Object(a["f"])("img", C))
                      : Object(a["g"])("", !0),
                  ];
                }),
                _: 1,
              }
            ),
          ])
        );
      }),
      M = {
        name: "Banner",
        data: function () {
          return { played: !0, muted: !0, banner: !0 };
        },
        methods: {
          toggle: function () {
            var e = this.$refs.video;
            e.paused
              ? (e.play(), (this.played = !0))
              : (e.pause(), (this.played = !1));
          },
          toggleMute: function () {
            this.muted = !this.muted;
            var e = this.$refs.video;
            e.muted = this.muted;
          },
          fadeBanner: function () {
            var e = this;
            setTimeout(function () {
              e.banner = !1;
            }, 3e3);
          },
        },
        mounted: function () {},
      };
    n("4238");
    (M.render = x), (M.__scopeId = "data-v-118eb5cf");
    var S = M,
      E = n("ed33"),
      T = n.n(E),
      R = n("1749"),
      I = n.n(R),
      L = n("4f70"),
      P = n.n(L),
      U = n("f869"),
      B = n.n(U),
      D = Object(a["N"])("data-v-6945bf77");
    Object(a["x"])("data-v-6945bf77");
    var N = { id: "moon" },
      F = Object(a["j"])(
        "div",
        { class: "moon anchor" },
        [
          Object(a["j"])("div", { class: "moon-left" }, [
            Object(a["j"])("img", { alt: "", src: T.a }),
          ]),
          Object(a["j"])("div", { class: "moon-right" }, [
            Object(a["j"])("div", { class: "title" }, [
              Object(a["j"])("img", { alt: "", src: I.a }),
            ]),
            Object(a["j"])(
              "p",
              null,
              "Moonland is XXX Metaverse unique interactive, profit generating 3D Virtual World of the Moon, divided into 70,000 land plots, each represented by an unique NFT. The amount of land plot will remain the same forever."
            ),
            Object(a["j"])("p", null, "Perks of being a Moonland Owner:"),
            Object(a["j"])("div", { class: "list" }, [
              Object(a["j"])("p", null, [
                Object(a["j"])("img", { alt: "", src: P.a }),
                Object(a["j"])("span", null, "Clone Mechas in Mecha Factory."),
              ]),
              Object(a["j"])("p", null, [
                Object(a["j"])("img", { alt: "", src: P.a }),
                Object(a["j"])(
                  "span",
                  null,
                  "Craft and enhancing Weapons with Equipment Factory."
                ),
              ]),
              Object(a["j"])("p", null, [
                Object(a["j"])("img", { alt: "", src: P.a }),
                Object(a["j"])(
                  "span",
                  null,
                  "Customize your Mecha via Paint Shop."
                ),
              ]),
              Object(a["j"])("p", null, [
                Object(a["j"])("img", { alt: "", src: P.a }),
                Object(a["j"])(
                  "span",
                  null,
                  "Pilot Training in Pilot Academy."
                ),
              ]),
              Object(a["j"])("p", null, [
                Object(a["j"])("img", { alt: "", src: P.a }),
                Object(a["j"])(
                  "span",
                  null,
                  "Resource Mining for all Moonland activities."
                ),
              ]),
            ]),
            Object(a["j"])(
              "p",
              null,
              "And many other exciting facilities will be added in future updates."
            ),
            Object(a["j"])(
              "a",
              {
                href: "https://test-moon.mechmaster.io/webappbuilder/apps/2/",
                target: "_blank",
              },
              [Object(a["j"])("img", { alt: "", src: B.a })]
            ),
          ]),
        ],
        -1
      );
    Object(a["v"])();
    var V = D(function (e, t, n, i, c, r) {
        return Object(a["u"])(), Object(a["f"])("section", N, [F]);
      }),
      q = {
        name: "Moon",
        data: function () {
          return {
            cards: [
              { image: "", title: this.$t("play"), desc: this.$t("play-text") },
              {
                image: "",
                title: this.$t("build"),
                desc: this.$t("build-text"),
              },
              { image: "", title: this.$t("earn"), desc: this.$t("earn-text") },
              {
                image: "",
                title: this.$t("enjoy"),
                desc: this.$t("enjoy-text"),
              },
            ],
          };
        },
      };
    n("1217");
    (q.render = V), (q.__scopeId = "data-v-6945bf77");
    var G = q,
      H = n("cbfb"),
      z = n.n(H),
      W = n("3a54"),
      K = n.n(W),
      Q = n("7088"),
      Y = n.n(Q),
      X = n("8600"),
      J = n.n(X),
      Z = n("609e"),
      _ = n.n(Z),
      $ = n("bdfe"),
      ee = n.n($),
      te = n("d644"),
      ne = n.n(te),
      ae = n("f6e9"),
      ie = n.n(ae),
      ce = n("0961"),
      re = n.n(ce),
      se = n("c3a4"),
      oe = n.n(se),
      le = n("ac3d"),
      ue = n.n(le),
      de = n("ac33"),
      be = n.n(de),
      je = n("7cde"),
      me = n.n(je),
      pe = Object(a["N"])("data-v-d3978836");
    Object(a["x"])("data-v-d3978836");
    var fe = { id: "ar" },
      ge = { class: "ar anchor" },
      he = { class: "ar-info" },
      Oe = Object(a["j"])(
        "div",
        { class: "title" },
        [Object(a["j"])("img", { alt: "", src: z.a })],
        -1
      ),
      ve = Object(a["j"])(
        "p",
        { class: "mb" },
        "Bring all the intense battles from Mech Master to the real world and experience all the magic of the 3D world.",
        -1
      ),
      Ae = Object(a["j"])(
        "div",
        { class: "sub-title" },
        "XXX Master AR App",
        -1
      ),
      we = Object(a["j"])(
        "p",
        { class: "mb" },
        "XXX Master AR is an augmented reality and virtual reality app which provides advanced services, blending digital content (images, sounds, text) with real-world environment. Open your Augmented Reality camera and perform miracles.",
        -1
      ),
      ye = Object(a["j"])("div", null, "Try the experience on AR APP", -1),
      ke = Object(a["j"])(
        "div",
        { class: "sub-title" },
        "XXX Master AR App",
        -1
      ),
      Ce = Object(a["j"])(
        "p",
        { class: "mb" },
        "Open your Augmented Reality camera and perform miracles with Mechas.",
        -1
      ),
      xe = Object(a["j"])(
        "p",
        { class: "mb" },
        "Watch your XXX Master World come to life, and show off to your friends the huge collection of Mechas and pilots using Mech AR right at your fingertips. Take the first step into the Mech Master Metaverse, and brace yourself for the forthcoming intense battles with our AR and VR technology.",
        -1
      ),
      Me = Object(a["j"])("p", { class: "large" }, "Key features:", -1),
      Se = Object(a["j"])(
        "div",
        { class: "list" },
        [
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: P.a }),
            Object(a["j"])("span", null, "Augmented Reality (AR)"),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: P.a }),
            Object(a["j"])(
              "span",
              null,
              "Deploy your Mechas in the real world "
            ),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: P.a }),
            Object(a["j"])(
              "span",
              null,
              "Interact with your Mechas such as move and show animation"
            ),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: P.a }),
            Object(a["j"])("span", null, "Take photos and record videos"),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: P.a }),
            Object(a["j"])(
              "span",
              null,
              "Share photos and videos with friends"
            ),
          ]),
        ],
        -1
      ),
      Ee = Object(a["j"])(
        "p",
        { class: "mb" },
        "Upcoming features: interact with Pilot, weapon & battling",
        -1
      ),
      Te = Object(a["j"])(
        "div",
        { class: "download" },
        [
          Object(a["j"])(
            "a",
            {
              href: "https://apps.apple.com/app/id1599462467",
              target: "_blank",
            },
            [Object(a["j"])("img", { alt: "", src: K.a })]
          ),
          Object(a["j"])(
            "a",
            {
              href: "https://play.google.com/store/apps/details?id=com.miraistudio.mechar",
              target: "_blank",
            },
            [Object(a["j"])("img", { alt: "", src: Y.a })]
          ),
        ],
        -1
      ),
      Re = { class: "ar-action" },
      Ie = Object(a["j"])("img", { alt: "", src: J.a }, null, -1),
      Le = { class: "action-1" },
      Pe = Object(a["j"])("img", { alt: "", src: _.a }, null, -1),
      Ue = { alt: "", src: ne.a },
      Be = { alt: "", src: ie.a },
      De = Object(a["j"])("img", { alt: "", src: re.a }, null, -1),
      Ne = { class: "action-2" },
      Fe = Object(a["j"])(
        "img",
        { class: "arrow", alt: "", src: oe.a },
        null,
        -1
      ),
      Ve = { key: 1, class: "ar-last-phase" },
      qe = Object(a["j"])(
        "div",
        { class: "iphone" },
        [
          Object(a["j"])("img", { alt: "", src: ue.a }),
          Object(a["j"])("div", { class: "download" }, [
            Object(a["j"])(
              "a",
              {
                href: "https://apps.apple.com/app/id1599462467",
                target: "_blank",
              },
              [Object(a["j"])("img", { alt: "", src: K.a })]
            ),
            Object(a["j"])(
              "a",
              {
                href: "https://play.google.com/store/apps/details?id=com.miraistudio.mechar",
                target: "_blank",
              },
              [Object(a["j"])("img", { alt: "", src: Y.a })]
            ),
          ]),
        ],
        -1
      ),
      Ge = Object(a["j"])("img", { src: be.a }, null, -1),
      He = { key: 0 };
    Object(a["v"])();
    var ze = pe(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", fe, [
            Object(a["j"])("div", ge, [
              4 !== r.phase
                ? (Object(a["u"])(),
                  Object(a["f"])(
                    a["a"],
                    { key: 0 },
                    [
                      Object(a["j"])("div", he, [
                        0 === r.phase
                          ? (Object(a["u"])(),
                            Object(a["f"])(
                              a["a"],
                              { key: 0 },
                              [Oe, ve, Ae, we, ye],
                              64
                            ))
                          : (Object(a["u"])(),
                            Object(a["f"])(
                              a["a"],
                              { key: 1 },
                              [ke, Ce, xe, Me, Se, Ee],
                              64
                            )),
                        Te,
                      ]),
                      Object(a["j"])("div", Re, [
                        Object(a["L"])(
                          Object(a["j"])(
                            "div",
                            null,
                            [
                              Ie,
                              Object(a["j"])("div", Le, [
                                Pe,
                                Object(a["j"])("img", {
                                  alt: "",
                                  class: "btn",
                                  src: ee.a,
                                  onClick:
                                    t[1] ||
                                    (t[1] = function () {
                                      return (
                                        r.start && r.start.apply(r, arguments)
                                      );
                                    }),
                                }),
                              ]),
                            ],
                            512
                          ),
                          [[a["J"], 0 === r.phase]]
                        ),
                        Object(a["L"])(Object(a["j"])("img", Ue, null, 512), [
                          [a["J"], 1 === r.phase],
                        ]),
                        Object(a["L"])(Object(a["j"])("img", Be, null, 512), [
                          [a["J"], 2 === r.phase],
                        ]),
                        Object(a["L"])(
                          Object(a["j"])(
                            "div",
                            null,
                            [
                              De,
                              Object(a["j"])("div", Ne, [
                                Object(a["j"])("div", {
                                  class: "btn",
                                  onClick:
                                    t[2] ||
                                    (t[2] = function () {
                                      return (
                                        r.show && r.show.apply(r, arguments)
                                      );
                                    }),
                                }),
                                Fe,
                              ]),
                            ],
                            512
                          ),
                          [[a["J"], 3 === r.phase]]
                        ),
                      ]),
                    ],
                    64
                  ))
                : (Object(a["u"])(),
                  Object(a["f"])("div", Ve, [
                    qe,
                    Object(a["j"])(
                      a["c"],
                      { name: "open" },
                      {
                        default: pe(function () {
                          return [
                            Object(a["L"])(
                              Object(a["j"])("div", null, [Ge], 512),
                              [[a["J"], c.active.light]]
                            ),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                    Object(a["j"])(
                      "img",
                      {
                        class: "pilot-from ".concat(
                          c.active.pilot ? "pilot-to" : ""
                        ),
                        src: me.a,
                      },
                      null,
                      2
                    ),
                    c.active.video
                      ? (Object(a["u"])(), Object(a["f"])("div", He))
                      : Object(a["g"])("", !0),
                  ])),
            ]),
          ])
        );
      }),
      We =
        (n("a9e3"),
        {
          name: "AugmentedReality",
          props: { step: Number },
          data: function () {
            return { started: !1, active: { light: !1, pilot: !1, video: !1 } };
          },
          computed: {
            phase: {
              get: function () {
                return this.step;
              },
              set: function (e) {
                this.$emit("changeStep", e);
              },
            },
          },
          watch: {
            phase: function (e) {
              var t = this;
              4 === e
                ? (setTimeout(function () {
                    (t.active.light = !0),
                      setTimeout(function () {
                        t.active.pilot = !0;
                      }, 100);
                  }, 500),
                  setTimeout(function () {
                    t.active.video = !0;
                  }, 2e3))
                : ((this.active.light = !1),
                  (this.active.pilot = !1),
                  (this.active.video = !1));
            },
          },
          methods: {
            start: function () {
              var e = this;
              (this.phase = 1),
                setTimeout(function () {
                  e.phase = 2;
                }, 5e3),
                setTimeout(function () {
                  e.phase = 3;
                }, 5e3);
            },
            show: function () {
              this.phase = 4;
            },
          },
        });
    n("fe81");
    (We.render = ze), (We.__scopeId = "data-v-d3978836");
    var Ke = We,
      Qe = n("66c0"),
      Ye = n.n(Qe),
      Xe = n("2b63"),
      Je = n.n(Xe),
      Ze = n("4e04"),
      _e = n.n(Ze),
      $e = Object(a["N"])("data-v-077a2a75");
    Object(a["x"])("data-v-077a2a75");
    var et = { id: "vr" },
      tt = { class: "vr anchor" },
      nt = Object(a["j"])(
        "div",
        { class: "vr-left" },
        [Object(a["j"])("img", { alt: "", src: Ye.a })],
        -1
      ),
      at = {
        class: "vr-right",
        style: {
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
        },
      },
      it = Object(a["j"])(
        "div",
        { class: "title" },
        [Object(a["j"])("img", { alt: "", src: Je.a })],
        -1
      ),
      ct = { key: 1, class: "vr-info" },
      rt = Object(a["j"])(
        "div",
        { class: "title" },
        [Object(a["j"])("img", { alt: "", src: Je.a })],
        -1
      ),
      st = Object(a["j"])(
        "p",
        null,
        "Mech Master in-game footage we are developing",
        -1
      ),
      ot = { class: "videos" },
      lt = { class: "video factory" },
      ut = Object(a["j"])(
        "path",
        {
          d: "M31.6388 410.905H10.3886V188.897L2.55957 181.068V18.8949L14.8623 6.59216H677.533L683.125 1H705.494V209.028L714.441 217.976V393.57L702.698 405.313H679.211L677.533 403.635H38.9086L31.6388 410.905Z",
          stroke: "white",
        },
        null,
        -1
      ),
      dt = Object(a["j"])(
        "g",
        { filter: "url(#filter0_d_158_55)" },
        [
          Object(a["j"])("path", {
            d: "M29.4023 6.03304H676.415",
            stroke: "#EE28FF",
            "stroke-width": "3",
          }),
        ],
        -1
      ),
      bt = Object(a["j"])(
        "path",
        { d: "M706.053 1V33.4345", stroke: "#FAFEFF", "stroke-width": "3" },
        null,
        -1
      ),
      jt = Object(a["j"])(
        "path",
        {
          d: "M706.053 163.173V209.028L715 217.976",
          stroke: "#00E0FF",
          "stroke-width": "3",
        },
        null,
        -1
      ),
      mt = Object(a["j"])(
        "path",
        {
          d: "M714.441 360.576V393.01L702.697 404.754",
          stroke: "#00E0FF",
          "stroke-width": "3",
        },
        null,
        -1
      ),
      pt = Object(a["j"])(
        "g",
        { filter: "url(#filter1_d_158_55)" },
        [
          Object(a["j"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M39.4672 402.135H38.8459L38.4065 402.575L31.1367 409.845L33.258 411.966L40.0885 405.135H190.135L231.971 447H489.795L522.49 414.283H561.724L570.132 405.87L570.865 405.135H677.533V402.135H39.4672Z",
            fill: "url(#paint0_linear_158_55)",
          }),
        ],
        -1
      ),
      ft = Object(a["j"])(
        "path",
        {
          d: "M15.4213 410.906H9.8291V404.195M9.8291 238.667V188.897",
          stroke: "white",
          "stroke-width": "3",
        },
        null,
        -1
      ),
      gt = Object(a["j"])(
        "path",
        { d: "M2 39.5858V18.8948", stroke: "white", "stroke-width": "3" },
        null,
        -1
      ),
      ht = Object(a["j"])(
        "path",
        {
          d: "M302.935 411.5H321.275L320.54 415.7H307.03L305.875 422.28H318.09L317.355 426.48H305.14L303.46 436H298.63L302.935 411.5ZM324.162 436.28C322.388 436.28 320.988 435.907 319.962 435.16C318.935 434.413 318.422 433.41 318.422 432.15C318.422 431.963 318.445 431.683 318.492 431.31L318.737 429.945C319.017 428.428 319.74 427.25 320.907 426.41C322.097 425.547 323.613 425.115 325.457 425.115H327.557C328.233 425.115 328.957 425.197 329.727 425.36C330.52 425.523 331.208 425.745 331.792 426.025L332.107 424.205C332.13 424.112 332.142 423.972 332.142 423.785C332.142 423.318 331.978 422.945 331.652 422.665C331.348 422.385 330.917 422.245 330.357 422.245H327.382C326.705 422.245 326.145 422.397 325.702 422.7C325.258 423.003 324.99 423.412 324.897 423.925H320.277C320.603 422.128 321.408 420.74 322.692 419.76C323.975 418.757 325.608 418.255 327.592 418.255H330.567C332.527 418.255 334.078 418.698 335.222 419.585C336.388 420.472 336.972 421.662 336.972 423.155C336.972 423.505 336.937 423.855 336.867 424.205L334.767 436H330.357L330.742 433.9C330.018 434.647 329.248 435.23 328.432 435.65C327.638 436.07 326.892 436.28 326.192 436.28H324.162ZM326.822 432.64C327.662 432.64 328.467 432.418 329.237 431.975C330.007 431.532 330.613 430.937 331.057 430.19L331.162 429.595C330.858 429.315 330.38 429.093 329.727 428.93C329.073 428.767 328.373 428.685 327.627 428.685H325.457C324.873 428.685 324.395 428.825 324.022 429.105C323.648 429.362 323.415 429.735 323.322 430.225L323.147 431.135C323.053 431.578 323.17 431.94 323.497 432.22C323.847 432.5 324.337 432.64 324.967 432.64H326.822ZM345.861 436.28C343.784 436.28 342.128 435.767 340.891 434.74C339.654 433.69 339.036 432.302 339.036 430.575C339.036 430.178 339.071 429.758 339.141 429.315L339.876 425.22C340.249 423.027 341.159 421.323 342.606 420.11C344.053 418.873 345.861 418.255 348.031 418.255H350.796C352.803 418.255 354.378 418.745 355.521 419.725C356.688 420.705 357.271 422.035 357.271 423.715C357.271 424.088 357.236 424.508 357.166 424.975H352.441C352.488 424.695 352.511 424.485 352.511 424.345C352.511 423.738 352.336 423.26 351.986 422.91C351.636 422.537 351.158 422.35 350.551 422.35H347.856C346.993 422.35 346.269 422.63 345.686 423.19C345.126 423.75 344.753 424.543 344.566 425.57L343.971 428.965C343.924 429.338 343.901 429.607 343.901 429.77C343.901 430.517 344.099 431.112 344.496 431.555C344.916 431.975 345.476 432.185 346.176 432.185H348.871C349.664 432.185 350.318 431.928 350.831 431.415C351.368 430.902 351.706 430.178 351.846 429.245H356.571C356.198 431.438 355.311 433.165 353.911 434.425C352.534 435.662 350.808 436.28 348.731 436.28H345.861ZM365.729 436C364.003 436 362.719 435.673 361.879 435.02C361.039 434.343 360.619 433.305 360.619 431.905C360.619 431.462 360.678 430.913 360.794 430.26L362.159 422.595H359.079L359.779 418.535H362.999L363.944 413.25H368.564L367.619 418.535H372.134L371.434 422.595H366.919L365.589 430.05C365.543 430.377 365.519 430.598 365.519 430.715C365.519 431.532 365.951 431.94 366.814 431.94H369.789L369.054 436H365.729ZM379.118 436.28C377.065 436.28 375.408 435.767 374.148 434.74C372.911 433.69 372.293 432.313 372.293 430.61C372.293 430.19 372.328 429.77 372.398 429.35L373.133 425.255C373.53 423.062 374.451 421.347 375.898 420.11C377.345 418.873 379.165 418.255 381.358 418.255H384.473C386.596 418.255 388.276 418.768 389.513 419.795C390.75 420.798 391.368 422.163 391.368 423.89C391.368 424.147 391.321 424.602 391.228 425.255L390.493 429.35C390.096 431.543 389.186 433.247 387.763 434.46C386.34 435.673 384.496 436.28 382.233 436.28H379.118ZM382.408 432.185C383.295 432.185 384.041 431.905 384.648 431.345C385.255 430.762 385.64 429.968 385.803 428.965L386.398 425.57C386.445 425.197 386.468 424.94 386.468 424.8C386.468 424.053 386.258 423.458 385.838 423.015C385.441 422.572 384.881 422.35 384.158 422.35H381.183C380.296 422.35 379.55 422.642 378.943 423.225C378.36 423.785 377.986 424.567 377.823 425.57L377.228 428.965C377.181 429.338 377.158 429.607 377.158 429.77C377.158 430.517 377.356 431.112 377.753 431.555C378.173 431.975 378.733 432.185 379.433 432.185H382.408ZM395.769 418.535H400.144L399.794 420.775C400.401 420.075 401.136 419.515 401.999 419.095C402.886 418.675 403.773 418.465 404.659 418.465H407.074L406.339 422.595H403.959C402.723 422.595 401.649 422.968 400.739 423.715C399.853 424.462 399.304 425.418 399.094 426.585L397.449 436H392.689L395.769 418.535ZM412.108 443.105C410.218 443.105 408.701 442.627 407.558 441.67C406.438 440.737 405.878 439.488 405.878 437.925C405.878 437.668 405.889 437.47 405.913 437.33H410.603C410.579 437.843 410.719 438.252 411.023 438.555C411.349 438.882 411.781 439.045 412.318 439.045H415.188C415.981 439.045 416.646 438.753 417.183 438.17C417.719 437.61 418.069 436.828 418.233 435.825L418.618 433.55C417.964 434.273 417.288 434.845 416.588 435.265C415.888 435.662 415.246 435.86 414.663 435.86H412.458C410.731 435.86 409.378 435.393 408.398 434.46C407.441 433.503 406.963 432.22 406.963 430.61C406.963 430.097 407.009 429.607 407.103 429.14L408.958 418.535H413.718L411.863 429.21C411.816 429.537 411.793 429.758 411.793 429.875C411.793 430.458 411.944 430.925 412.248 431.275C412.551 431.625 412.971 431.8 413.508 431.8H415.503C416.249 431.8 416.996 431.485 417.743 430.855C418.489 430.202 419.084 429.35 419.528 428.3L421.278 418.535H426.038L422.993 435.825C422.596 438.112 421.686 439.897 420.263 441.18C418.863 442.463 417.101 443.105 414.978 443.105H412.108Z",
          fill: "white",
        },
        null,
        -1
      ),
      Ot = { width: "695", height: "400", x: "10", y: "5" },
      vt = Object(a["j"])(
        "defs",
        null,
        [
          Object(a["j"])(
            "filter",
            {
              id: "filter0_d_158_55",
              x: "24.4023",
              y: "0.533035",
              width: "657.013",
              height: "13",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
            },
            [
              Object(a["j"])("feFlood", {
                "flood-opacity": "0",
                result: "BackgroundImageFix",
              }),
              Object(a["j"])("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              Object(a["j"])("feOffset", { dy: "1" }),
              Object(a["j"])("feGaussianBlur", { stdDeviation: "2.5" }),
              Object(a["j"])("feComposite", {
                in2: "hardAlpha",
                operator: "out",
              }),
              Object(a["j"])("feColorMatrix", {
                type: "matrix",
                values:
                  "0 0 0 0 0.554167 0 0 0 0 0.70575 0 0 0 0 1 0 0 0 0.63 0",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_158_55",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_158_55",
                result: "shape",
              }),
            ]
          ),
          Object(a["j"])(
            "filter",
            {
              id: "filter1_d_158_55",
              x: "27.1367",
              y: "399.135",
              width: "654.396",
              height: "52.8646",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
            },
            [
              Object(a["j"])("feFlood", {
                "flood-opacity": "0",
                result: "BackgroundImageFix",
              }),
              Object(a["j"])("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              Object(a["j"])("feOffset", { dy: "1" }),
              Object(a["j"])("feGaussianBlur", { stdDeviation: "2" }),
              Object(a["j"])("feComposite", {
                in2: "hardAlpha",
                operator: "out",
              }),
              Object(a["j"])("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.92 0 0 0 0 0 0 0 0 0 1 0 0 0 0.76 0",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_158_55",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_158_55",
                result: "shape",
              }),
            ]
          ),
          Object(a["j"])(
            "linearGradient",
            {
              id: "paint0_linear_158_55",
              x1: "32.1973",
              y1: "407.27",
              x2: "677.532",
              y2: "407.27",
              gradientUnits: "userSpaceOnUse",
            },
            [
              Object(a["j"])("stop", { "stop-color": "#0E75EF" }),
              Object(a["j"])("stop", { offset: "1", "stop-color": "#EB00FF" }),
            ]
          ),
        ],
        -1
      ),
      At = { class: "video market" },
      wt = Object(a["j"])(
        "path",
        {
          d: "M31.6388 410.905H10.3886V188.897L2.55957 181.068V18.8949L14.8623 6.59216H677.533L683.125 1H705.494V209.028L714.441 217.976V393.57L702.698 405.313H679.211L677.533 403.635H38.9086L31.6388 410.905Z",
          stroke: "white",
        },
        null,
        -1
      ),
      yt = Object(a["j"])(
        "g",
        { filter: "url(#filter0_d_158_56)" },
        [
          Object(a["j"])("path", {
            d: "M29.4023 6.03304H676.415",
            stroke: "#EE28FF",
            "stroke-width": "3",
          }),
        ],
        -1
      ),
      kt = Object(a["j"])(
        "path",
        { d: "M706.053 1V33.4345", stroke: "#FAFEFF", "stroke-width": "3" },
        null,
        -1
      ),
      Ct = Object(a["j"])(
        "path",
        {
          d: "M706.053 163.173V209.028L715 217.976",
          stroke: "#00E0FF",
          "stroke-width": "3",
        },
        null,
        -1
      ),
      xt = Object(a["j"])(
        "path",
        {
          d: "M714.441 360.576V393.01L702.698 404.754",
          stroke: "#00E0FF",
          "stroke-width": "3",
        },
        null,
        -1
      ),
      Mt = Object(a["j"])(
        "g",
        { filter: "url(#filter1_d_158_56)" },
        [
          Object(a["j"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M39.4672 402.135H38.8459L38.4065 402.575L31.1367 409.845L33.258 411.966L40.0885 405.135H190.135L231.971 447H489.795L522.49 414.283H561.724L570.132 405.87L570.865 405.135H677.533V402.135H39.4672Z",
            fill: "url(#paint0_linear_158_56)",
          }),
        ],
        -1
      ),
      St = Object(a["j"])(
        "path",
        {
          d: "M15.4213 410.906H9.8291V404.195M9.8291 238.667V188.897",
          stroke: "white",
          "stroke-width": "3",
        },
        null,
        -1
      ),
      Et = Object(a["j"])(
        "path",
        {
          d: "M313.935 410.5H317.96L323.42 425.06L333.815 410.5H338.4L334.095 435H329.37L332.1 419.495L325.31 428.805C324.867 429.412 324.435 429.855 324.015 430.135C323.618 430.415 323.175 430.555 322.685 430.555H321.355L317.085 419.495L314.355 435H309.63L313.935 410.5ZM344.253 435.28C342.48 435.28 341.08 434.907 340.053 434.16C339.027 433.413 338.513 432.41 338.513 431.15C338.513 430.963 338.537 430.683 338.583 430.31L338.828 428.945C339.108 427.428 339.832 426.25 340.998 425.41C342.188 424.547 343.705 424.115 345.548 424.115H347.648C348.325 424.115 349.048 424.197 349.818 424.36C350.612 424.523 351.3 424.745 351.883 425.025L352.198 423.205C352.222 423.112 352.233 422.972 352.233 422.785C352.233 422.318 352.07 421.945 351.743 421.665C351.44 421.385 351.008 421.245 350.448 421.245H347.473C346.797 421.245 346.237 421.397 345.793 421.7C345.35 422.003 345.082 422.412 344.988 422.925H340.368C340.695 421.128 341.5 419.74 342.783 418.76C344.067 417.757 345.7 417.255 347.683 417.255H350.658C352.618 417.255 354.17 417.698 355.313 418.585C356.48 419.472 357.063 420.662 357.063 422.155C357.063 422.505 357.028 422.855 356.958 423.205L354.858 435H350.448L350.833 432.9C350.11 433.647 349.34 434.23 348.523 434.65C347.73 435.07 346.983 435.28 346.283 435.28H344.253ZM346.913 431.64C347.753 431.64 348.558 431.418 349.328 430.975C350.098 430.532 350.705 429.937 351.148 429.19L351.253 428.595C350.95 428.315 350.472 428.093 349.818 427.93C349.165 427.767 348.465 427.685 347.718 427.685H345.548C344.965 427.685 344.487 427.825 344.113 428.105C343.74 428.362 343.507 428.735 343.413 429.225L343.238 430.135C343.145 430.578 343.262 430.94 343.588 431.22C343.938 431.5 344.428 431.64 345.058 431.64H346.913ZM361.823 417.535H366.198L365.848 419.775C366.455 419.075 367.19 418.515 368.053 418.095C368.94 417.675 369.826 417.465 370.713 417.465H373.128L372.393 421.595H370.013C368.776 421.595 367.703 421.968 366.793 422.715C365.906 423.462 365.358 424.418 365.148 425.585L363.503 435H358.743L361.823 417.535ZM383.586 424.955L389.606 435H384.426L380.121 427.895L377.811 429.855L376.901 435H372.141L376.446 410.5H381.206L378.791 424.29L386.666 417.535H392.406L383.586 424.955ZM397.878 435.28C395.731 435.28 394.039 434.802 392.803 433.845C391.566 432.865 390.948 431.558 390.948 429.925C390.948 429.552 390.983 429.155 391.053 428.735L391.858 424.22C392.254 422.027 393.176 420.323 394.623 419.11C396.093 417.873 397.936 417.255 400.153 417.255H402.953C405.029 417.255 406.663 417.78 407.853 418.83C409.066 419.857 409.673 421.21 409.673 422.89C409.673 423.31 409.638 423.73 409.568 424.15L408.903 427.895H395.953L395.813 428.735C395.789 428.852 395.778 429.015 395.778 429.225C395.778 429.855 395.976 430.357 396.373 430.73C396.793 431.103 397.364 431.29 398.088 431.29H400.818C401.681 431.29 402.381 431.115 402.918 430.765C403.478 430.415 403.804 429.937 403.898 429.33H408.588C408.261 431.197 407.398 432.655 405.998 433.705C404.598 434.755 402.824 435.28 400.678 435.28H397.878ZM404.843 424.465L404.878 424.255C404.924 423.928 404.948 423.683 404.948 423.52C404.948 422.797 404.749 422.225 404.353 421.805C403.979 421.385 403.443 421.175 402.743 421.175H399.873C399.056 421.175 398.333 421.467 397.703 422.05C397.096 422.61 396.699 423.357 396.513 424.29L396.478 424.465H404.843ZM418.292 435C416.565 435 415.282 434.673 414.442 434.02C413.602 433.343 413.182 432.305 413.182 430.905C413.182 430.462 413.24 429.913 413.357 429.26L414.722 421.595H411.642L412.342 417.535H415.562L416.507 412.25H421.127L420.182 417.535H424.697L423.997 421.595H419.482L418.152 429.05C418.105 429.377 418.082 429.598 418.082 429.715C418.082 430.532 418.514 430.94 419.377 430.94H422.352L421.617 435H418.292Z",
          fill: "white",
        },
        null,
        -1
      ),
      Tt = Object(a["j"])(
        "path",
        { d: "M2 39.5858V18.8948", stroke: "white", "stroke-width": "3" },
        null,
        -1
      ),
      Rt = { width: "695", height: "400", x: "10", y: "5" },
      It = Object(a["j"])(
        "defs",
        null,
        [
          Object(a["j"])(
            "filter",
            {
              id: "filter0_d_158_56",
              x: "24.4023",
              y: "0.533035",
              width: "657.013",
              height: "13",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
            },
            [
              Object(a["j"])("feFlood", {
                "flood-opacity": "0",
                result: "BackgroundImageFix",
              }),
              Object(a["j"])("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              Object(a["j"])("feOffset", { dy: "1" }),
              Object(a["j"])("feGaussianBlur", { stdDeviation: "2.5" }),
              Object(a["j"])("feComposite", {
                in2: "hardAlpha",
                operator: "out",
              }),
              Object(a["j"])("feColorMatrix", {
                type: "matrix",
                values:
                  "0 0 0 0 0.554167 0 0 0 0 0.70575 0 0 0 0 1 0 0 0 0.63 0",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_158_56",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_158_56",
                result: "shape",
              }),
            ]
          ),
          Object(a["j"])(
            "filter",
            {
              id: "filter1_d_158_56",
              x: "27.1367",
              y: "399.135",
              width: "654.396",
              height: "52.8646",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
            },
            [
              Object(a["j"])("feFlood", {
                "flood-opacity": "0",
                result: "BackgroundImageFix",
              }),
              Object(a["j"])("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              Object(a["j"])("feOffset", { dy: "1" }),
              Object(a["j"])("feGaussianBlur", { stdDeviation: "2" }),
              Object(a["j"])("feComposite", {
                in2: "hardAlpha",
                operator: "out",
              }),
              Object(a["j"])("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.92 0 0 0 0 0 0 0 0 0 1 0 0 0 0.76 0",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_158_56",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_158_56",
                result: "shape",
              }),
            ]
          ),
          Object(a["j"])(
            "linearGradient",
            {
              id: "paint0_linear_158_56",
              x1: "32.1973",
              y1: "407.27",
              x2: "677.532",
              y2: "407.27",
              gradientUnits: "userSpaceOnUse",
            },
            [
              Object(a["j"])("stop", { "stop-color": "#0E75EF" }),
              Object(a["j"])("stop", { offset: "1", "stop-color": "#EB00FF" }),
            ]
          ),
        ],
        -1
      );
    Object(a["v"])();
    var Lt = $e(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", et, [
            Object(a["j"])("div", tt, [
              0 === r.phase
                ? (Object(a["u"])(),
                  Object(a["f"])(
                    a["a"],
                    { key: 0 },
                    [
                      nt,
                      Object(a["j"])("div", at, [
                        it,
                        Object(a["j"])("img", {
                          onClick:
                            t[1] ||
                            (t[1] = function (e) {
                              return (r.phase = 1);
                            }),
                          alt: "",
                          src: _e.a,
                        }),
                      ]),
                    ],
                    64
                  ))
                : r.phase >= 1
                ? (Object(a["u"])(),
                  Object(a["f"])("div", ct, [
                    rt,
                    st,
                    Object(a["j"])("div", ot, [
                      Object(a["j"])("div", lt, [
                        (Object(a["u"])(),
                        Object(a["f"])(
                          "svg",
                          {
                            width: c.width,
                            height: "452",
                            viewBox: "0 0 717 452",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          [
                            ut,
                            dt,
                            bt,
                            jt,
                            mt,
                            pt,
                            ft,
                            gt,
                            ht,
                            Object(a["j"])("g", null, [
                              (Object(a["u"])(),
                              Object(a["f"])("foreignObject", Ot, [
                                Object(a["j"])(
                                  "iframe",
                                  {
                                    frameborder: "0",
                                    allow:
                                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowfullscreen: "",
                                    src: r.factory,
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                              ])),
                            ]),
                            vt,
                          ],
                          8,
                          ["width"]
                        )),
                      ]),
                      Object(a["j"])("div", At, [
                        (Object(a["u"])(),
                        Object(a["f"])(
                          "svg",
                          {
                            width: c.width,
                            height: "452",
                            viewBox: "0 0 717 452",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          [
                            wt,
                            yt,
                            kt,
                            Ct,
                            xt,
                            Mt,
                            St,
                            Et,
                            Tt,
                            Object(a["j"])("g", null, [
                              (Object(a["u"])(),
                              Object(a["f"])("foreignObject", Rt, [
                                Object(a["j"])(
                                  "iframe",
                                  {
                                    frameborder: "0",
                                    allow:
                                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowfullscreen: "",
                                    src: r.market,
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                              ])),
                            ]),
                            It,
                          ],
                          8,
                          ["width"]
                        )),
                      ]),
                    ]),
                  ]))
                : Object(a["g"])("", !0),
            ]),
          ])
        );
      }),
      Pt = [
        { x: 292, y: 65 },
        { x: 733, y: 717 },
        { x: 1035, y: 975 },
        { x: 200, y: -487 },
        { x: 1260, y: 1100 },
      ],
      Ut = {
        name: "VirtualReality",
        props: { step: Number },
        data: function () {
          return {
            width: Math.floor(window.innerWidth / 3),
            height: Math.floor(0.95 * window.innerHeight),
            animated: !1,
            item1: { x: 420, y: 360, width: 262, height: 252 },
            item2: { x: Pt[1].x, y: Pt[1].y, width: 120, height: 120 },
            item3: { x: Pt[2].x, y: Pt[2].y, width: 120, height: 120 },
            item4: { x: Pt[4].x, y: Pt[4].y, width: 120, height: 120 },
          };
        },
        mounted: function () {
          var e = this;
          window.addEventListener("resize", function () {
            (e.width = Math.floor(window.innerWidth / 3)),
              (e.height = Math.floor(0.95 * window.innerHeight));
          });
        },
        computed: {
          phase: {
            get: function () {
              return this.step;
            },
            set: function (e) {
              this.$emit("changeStep", e);
            },
          },
          factory: function () {
            return 1 === this.phase
              ? "https://www.youtube.com/embed/D2o9T6_sgcQ"
              : "";
          },
          market: function () {
            return 1 === this.phase
              ? "https://www.youtube.com/embed/2kjicBR48VI"
              : "";
          },
        },
        watch: {},
        methods: {
          back: function () {
            this.phase--;
          },
          next: function () {
            this.phase++;
          },
        },
      };
    n("7401");
    (Ut.render = Lt), (Ut.__scopeId = "data-v-077a2a75");
    var Bt = Ut,
      Dt = n("6093"),
      Nt = n.n(Dt),
      Ft = n("0498"),
      Vt = n.n(Ft),
      qt = n("471b"),
      Gt = n.n(qt),
      Ht = n("84e7"),
      zt = n.n(Ht),
      Wt = n("3e51"),
      Kt = n.n(Wt),
      Qt = n("c5f7"),
      Yt = n.n(Qt),
      Xt = n("c475"),
      Jt = n.n(Xt),
      Zt = n("0beb"),
      _t = n.n(Zt),
      $t = n("7958"),
      en = n.n($t),
      tn = n("bdfd"),
      nn = n.n(tn),
      an = n("e942"),
      cn = n.n(an),
      rn = n("a5c9"),
      sn = n.n(rn),
      on = n("81e3"),
      ln = n.n(on),
      un = n("0e58"),
      dn = n.n(un),
      bn = n("798a"),
      jn = n.n(bn),
      mn = n("bf9a"),
      pn = n.n(mn),
      fn = n("c0c4"),
      gn = n.n(fn),
      hn = Object(a["N"])("data-v-241256aa");
    Object(a["x"])("data-v-241256aa");
    var On = { id: "partners" },
      vn = Object(a["j"])(
        "h2",
        { class: "sub-title" },
        [Object(a["j"])("img", { alt: "", src: Nt.a })],
        -1
      ),
      An = { class: "row" },
      wn = { class: "item" },
      yn = { key: 0, class: "big", alt: "", src: Vt.a },
      kn = { class: "item" },
      Cn = { key: 0, alt: "", src: Gt.a },
      xn = { class: "item" },
      Mn = { key: 0, alt: "", src: zt.a },
      Sn = { class: "item" },
      En = { key: 0, class: "big", alt: "", src: Kt.a },
      Tn = { class: "item" },
      Rn = { key: 0, alt: "", src: Yt.a },
      In = { class: "item" },
      Ln = { key: 0, alt: "", src: Jt.a },
      Pn = { class: "item" },
      Un = { key: 0, alt: "", src: _t.a },
      Bn = { class: "item" },
      Dn = { key: 0, alt: "", src: en.a },
      Nn = { class: "item" },
      Fn = { key: 0, alt: "", src: nn.a },
      Vn = { class: "item" },
      qn = { key: 0, alt: "", src: cn.a },
      Gn = { class: "item" },
      Hn = { key: 0, alt: "", src: sn.a },
      zn = { class: "item" },
      Wn = { key: 0, alt: "", src: ln.a },
      Kn = { class: "item" },
      Qn = { key: 0, alt: "", src: dn.a },
      Yn = { class: "item" },
      Xn = { key: 0, class: "big", alt: "", src: jn.a },
      Jn = { class: "item" },
      Zn = { key: 0, alt: "", src: pn.a };
    Object(a["v"])();
    var _n = hn(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", On, [
            vn,
            Object(a["j"])("div", An, [
              Object(a["j"])("div", wn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", yn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", kn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Cn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", xn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Mn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Sn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", En))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Tn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Rn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", In, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Ln))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Pn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Un))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Bn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Dn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Nn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Fn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Vn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", qn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Gn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Hn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", zn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Wn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Kn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Qn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Yn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Xn))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])("div", Jn, [
                r.displayImage
                  ? (Object(a["u"])(), Object(a["f"])("img", Zn))
                  : Object(a["g"])("", !0),
              ]),
            ]),
            Object(a["j"])(
              "img",
              {
                alt: "",
                class: "sun ".concat(n.view ? "to" : "from"),
                src: gn.a,
              },
              null,
              2
            ),
          ])
        );
      }),
      $n = {
        name: "Partners",
        props: { image: Boolean, view: Boolean },
        computed: {
          displayImage: function () {
            return !(window.innerWidth > 1024) || this.image;
          },
        },
      };
    n("6091");
    ($n.render = _n), ($n.__scopeId = "data-v-241256aa");
    var ea = $n,
      ta = (n("b0c0"), n("a4d3"), n("e01a"), n("ab46")),
      na = n.n(ta),
      aa = n("23dd"),
      ia = n.n(aa),
      ca = n("8fad"),
      ra = n.n(ca),
      sa = n("e638"),
      oa = n.n(sa),
      la = n("33b3"),
      ua = n.n(la),
      da = n("fa88"),
      ba = n.n(da),
      ja = n("55b4"),
      ma = n.n(ja),
      pa = n("a5ba"),
      fa = n.n(pa),
      ga = Object(a["N"])("data-v-3077d452");
    Object(a["x"])("data-v-3077d452");
    var ha = { id: "team" },
      Oa = Object(a["j"])(
        "h2",
        { class: "sub-title anchor" },
        [Object(a["j"])("img", { alt: "", src: na.a })],
        -1
      ),
      va = { class: "row" },
      Aa = { class: "item-image" },
      wa = Object(a["j"])("img", { alt: "", src: ia.a }, null, -1),
      ya = { class: "item-detail" },
      ka = { class: "item-detail_name" },
      Ca = { class: "item-detail_title" },
      xa = { class: "item-image" },
      Ma = Object(a["j"])("img", { alt: "", src: ia.a }, null, -1),
      Sa = { class: "item-detail" },
      Ea = { class: "item-detail_name" },
      Ta = { class: "item-detail_title" },
      Ra = { class: "item-image" },
      Ia = Object(a["j"])("img", { alt: "", src: ia.a }, null, -1),
      La = { class: "item-detail" },
      Pa = { class: "item-detail_name" },
      Ua = { class: "item-detail_title" },
      Ba = { class: "advisor anchor" },
      Da = { class: "advisor-card" },
      Na = Object(a["j"])("img", { alt: "", src: oa.a }, null, -1),
      Fa = { class: "advisor-card_detail" },
      Va = Object(a["j"])("img", { alt: "", src: ua.a }, null, -1),
      qa = { class: "detail" },
      Ga = Object(a["j"])("div", { class: "detail-name" }, "Thi Truong", -1),
      Ha = { class: "detail-title" },
      za = Object(a["j"])(
        "div",
        { class: "advisor-info" },
        [
          Object(a["j"])("ul", null, [
            Object(a["j"])("li", null, "Founder of Icetea Labs."),
            Object(a["j"])("li", null, "Creator of GameFi.org and Redkite."),
            Object(a["j"])(
              "li",
              null,
              "Thi is also the incubator of several high profile gaming and metaverse projects."
            ),
          ]),
        ],
        -1
      ),
      Wa = { class: "dialog-main" },
      Ka = Object(a["j"])(
        "img",
        { alt: "", class: "frame", src: ba.a },
        null,
        -1
      ),
      Qa = { class: "dialog-main_info" },
      Ya = Object(a["j"])(
        "img",
        { style: { transform: "rotate(180deg)" }, alt: "", src: ma.a },
        null,
        -1
      ),
      Xa = { class: "detail" },
      Ja = { class: "detail-name" },
      Za = { class: "detail-title" },
      _a = { class: "detail-desc" },
      $a = Object(a["j"])("img", { alt: "", src: fa.a }, null, -1),
      ei = Object(a["j"])("img", { alt: "", src: ma.a }, null, -1);
    Object(a["v"])();
    var ti = ga(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", ha, [
            Oa,
            Object(a["j"])("div", va, [
              (Object(a["u"])(!0),
              Object(a["f"])(
                a["a"],
                null,
                Object(a["B"])(c.row1, function (e, t) {
                  return (
                    Object(a["u"])(),
                    Object(a["f"])("div", { class: "item", key: t }, [
                      Object(a["j"])("div", Aa, [
                        wa,
                        Object(a["j"])(
                          "img",
                          { class: "avatar", alt: "", src: e.image },
                          null,
                          8,
                          ["src"]
                        ),
                        Object(a["j"])(
                          "img",
                          {
                            class: "hover",
                            alt: "",
                            src: ra.a,
                            onClick: function (t) {
                              return r.viewDetails(e);
                            },
                          },
                          null,
                          8,
                          ["onClick"]
                        ),
                      ]),
                      Object(a["j"])("div", ya, [
                        Object(a["j"])("div", ka, Object(a["F"])(e.name), 1),
                        Object(a["j"])("div", Ca, Object(a["F"])(e.title), 1),
                      ]),
                    ])
                  );
                }),
                128
              )),
              (Object(a["u"])(!0),
              Object(a["f"])(
                a["a"],
                null,
                Object(a["B"])(c.row2, function (e, t) {
                  return (
                    Object(a["u"])(),
                    Object(a["f"])("div", { class: "item", key: t }, [
                      Object(a["j"])("div", xa, [
                        Ma,
                        Object(a["j"])(
                          "img",
                          { class: "avatar", alt: "", src: e.image },
                          null,
                          8,
                          ["src"]
                        ),
                        Object(a["j"])(
                          "img",
                          {
                            class: "hover",
                            alt: "",
                            src: ra.a,
                            onClick: function (t) {
                              return r.viewDetails(e);
                            },
                          },
                          null,
                          8,
                          ["onClick"]
                        ),
                      ]),
                      Object(a["j"])("div", Sa, [
                        Object(a["j"])("div", Ea, Object(a["F"])(e.name), 1),
                        Object(a["j"])("div", Ta, Object(a["F"])(e.title), 1),
                      ]),
                    ])
                  );
                }),
                128
              )),
              (Object(a["u"])(!0),
              Object(a["f"])(
                a["a"],
                null,
                Object(a["B"])(c.row3, function (e, t) {
                  return (
                    Object(a["u"])(),
                    Object(a["f"])("div", { class: "item", key: t }, [
                      Object(a["j"])("div", Ra, [
                        Ia,
                        Object(a["j"])(
                          "img",
                          { class: "avatar", alt: "", src: e.image },
                          null,
                          8,
                          ["src"]
                        ),
                        Object(a["j"])(
                          "img",
                          {
                            class: "hover",
                            alt: "",
                            src: ra.a,
                            onClick: function (t) {
                              return r.viewDetails(e);
                            },
                          },
                          null,
                          8,
                          ["onClick"]
                        ),
                      ]),
                      Object(a["j"])("div", La, [
                        Object(a["j"])("div", Pa, Object(a["F"])(e.name), 1),
                        Object(a["j"])("div", Ua, Object(a["F"])(e.title), 1),
                      ]),
                    ])
                  );
                }),
                128
              )),
            ]),
            Object(a["j"])("div", Ba, [
              Object(a["j"])("div", Da, [
                Na,
                Object(a["j"])("div", Fa, [
                  Va,
                  Object(a["j"])("div", qa, [
                    Ga,
                    Object(a["j"])(
                      "div",
                      Ha,
                      Object(a["F"])(e.$t("team-title.advisor")),
                      1
                    ),
                  ]),
                ]),
              ]),
              za,
            ]),
            Object(a["j"])(
              a["c"],
              { name: "fade" },
              {
                default: ga(function () {
                  return [
                    c.show
                      ? (Object(a["u"])(),
                        Object(a["f"])(
                          "div",
                          {
                            key: 0,
                            class: "dialog",
                            onClick:
                              t[3] ||
                              (t[3] = Object(a["M"])(
                                function (e) {
                                  return (c.show = !1);
                                },
                                ["self"]
                              )),
                          },
                          [
                            Object(a["j"])("div", Wa, [
                              Ka,
                              Object(a["j"])("div", Qa, [
                                Object(a["j"])(
                                  "div",
                                  {
                                    class: "prev",
                                    onClick:
                                      t[1] ||
                                      (t[1] = Object(a["M"])(
                                        function () {
                                          return (
                                            r.prev && r.prev.apply(r, arguments)
                                          );
                                        },
                                        ["stop"]
                                      )),
                                  },
                                  [Ya]
                                ),
                                Object(a["j"])(
                                  "img",
                                  { alt: "", src: c.info.image },
                                  null,
                                  8,
                                  ["src"]
                                ),
                                Object(a["j"])("div", Xa, [
                                  Object(a["j"])(
                                    "div",
                                    Ja,
                                    Object(a["F"])(c.info.name),
                                    1
                                  ),
                                  Object(a["j"])(
                                    "div",
                                    Za,
                                    Object(a["F"])(c.info.title),
                                    1
                                  ),
                                  Object(a["j"])(
                                    "div",
                                    _a,
                                    Object(a["F"])(c.info.description),
                                    1
                                  ),
                                  c.info.socials.linkedin
                                    ? (Object(a["u"])(),
                                      Object(a["f"])(
                                        "a",
                                        {
                                          key: 0,
                                          href: c.info.socials.linkedin,
                                          target: "_blank",
                                        },
                                        [$a],
                                        8,
                                        ["href"]
                                      ))
                                    : Object(a["g"])("", !0),
                                ]),
                                Object(a["j"])(
                                  "div",
                                  {
                                    class: "next",
                                    onClick:
                                      t[2] ||
                                      (t[2] = Object(a["M"])(
                                        function () {
                                          return (
                                            r.next && r.next.apply(r, arguments)
                                          );
                                        },
                                        ["stop"]
                                      )),
                                  },
                                  [ei]
                                ),
                              ]),
                            ]),
                          ]
                        ))
                      : Object(a["g"])("", !0),
                  ];
                }),
                _: 1,
              }
            ),
          ])
        );
      }),
      ni = n("2909"),
      ai =
        (n("99af"),
        n("c740"),
        {
          name: "Team",
          props: { view: Boolean, image: Boolean },
          data: function () {
            return {
              row1: [
                {
                  name: "Hikari Mai",
                  image: n("87aa"),
                  title: this.$t("team-title.project-leader"),
                  description: this.$t("team-desc.hikari"),
                  socials: { linkedin: "http://www.linkedin.com/in/hikarimai" },
                },
                {
                  name: "Nam Vu",
                  image: n("cb9b"),
                  title: this.$t("team-title.project-manager"),
                  description: this.$t("team-desc.nam"),
                  socials: {
                    linkedin: "https://www.linkedin.com/in/vu-nam-097a45219/",
                  },
                },
                {
                  name: "Ron Nguyen",
                  image: n("6992"),
                  title: this.$t("team-title.head-marketing"),
                  description: this.$t("team-desc.ron"),
                  socials: { linkedin: "https://www.linkedin.com/in/duyhn/" },
                },
                {
                  name: "Duc Thieu",
                  image: n("6b8c"),
                  title: this.$t("team-title.art-director"),
                  description: this.$t("team-desc.duc"),
                  socials: {},
                },
                {
                  name: "Trang Nguyen",
                  image: n("a414"),
                  title: this.$t("team-title.2D-leader"),
                  description: this.$t("team-desc.trang"),
                  socials: {},
                },
              ],
              row2: [
                {
                  name: "Tuan Do",
                  image: n("8859"),
                  title: this.$t("team-title.3D-leader"),
                  description: this.$t("team-desc.tuan"),
                  socials: {},
                },
                {
                  name: "Tuyen Nguyen",
                  image: n("5229"),
                  title: this.$t("team-title.UI-leader"),
                  description: this.$t("team-desc.tuyen"),
                  socials: {},
                },
                {
                  name: "Thao Khuc",
                  image: n("092c"),
                  title: this.$t("team-title.vfx-leader"),
                  description: this.$t("team-desc.thao"),
                  socials: {},
                },
                {
                  name: "Thanh Nguyen",
                  image: n("7db3"),
                  title: this.$t("team-title.blockchain-leader"),
                  description: this.$t("team-desc.thanh"),
                  socials: {},
                },
                {
                  name: "Tu Hoang",
                  image: n("4539"),
                  title: this.$t("team-title.unity-leader"),
                  description: this.$t("team-desc.tu"),
                  socials: {
                    linkedin: "https://www.linkedin.com/in/hoang-tu-96618588/",
                  },
                },
              ],
              row3: [
                {
                  name: "Le Nguyen",
                  image: n("71ca"),
                  title: this.$t("team-title.game-designer"),
                  description: this.$t("team-desc.le"),
                  socials: {
                    linkedin: "https://www.linkedin.com/in/lenguyen0611/",
                  },
                },
                {
                  name: "Minh Le",
                  image: n("a22c"),
                  title: this.$t("team-title.game-designer"),
                  description: this.$t("team-desc.minhLe"),
                  socials: { linkedin: "https://www.linkedin.com/in/scyther/" },
                },
                {
                  name: "Minh Nguyen",
                  image: n("e69b"),
                  title: this.$t("team-title.game-designer"),
                  description: this.$t("team-desc.minh"),
                  socials: {},
                },
              ],
              show: !1,
              info: {
                name: "",
                title: "",
                image: "",
                description: "",
                socials: {},
              },
            };
          },
          watch: {
            view: function () {
              this.show = !1;
            },
          },
          methods: {
            viewDetails: function (e) {
              (this.info = e), (this.show = !0);
            },
            prev: function () {
              var e = this,
                t = [].concat(
                  Object(ni["a"])(this.row1),
                  Object(ni["a"])(this.row2),
                  Object(ni["a"])(this.row3)
                ),
                n = t.findIndex(function (t) {
                  return t.name === e.info.name;
                });
              this.info = 0 === n ? t[t.length - 1] : t[n - 1];
            },
            next: function () {
              var e = this,
                t = [].concat(
                  Object(ni["a"])(this.row1),
                  Object(ni["a"])(this.row2),
                  Object(ni["a"])(this.row3)
                ),
                n = t.findIndex(function (t) {
                  return t.name === e.info.name;
                });
              n === t.length - 1 ? (this.info = t[0]) : (this.info = t[n + 1]);
            },
          },
        });
    n("fa5c");
    (ai.render = ti), (ai.__scopeId = "data-v-3077d452");
    var ii = ai,
      ci = n("2659"),
      ri = n.n(ci),
      si = n("73e7"),
      oi = n.n(si),
      li = n("6baf"),
      ui = n.n(li),
      di = n("8f25"),
      bi = n.n(di),
      ji = n("4b7f"),
      mi = n.n(ji),
      pi = n("4ef4"),
      fi = n.n(pi),
      gi = n("2da4"),
      hi = n.n(gi),
      Oi = n("fb60"),
      vi = n.n(Oi),
      Ai = n("05be"),
      wi = n.n(Ai),
      yi = n("ee40"),
      ki = n.n(yi),
      Ci = n("f798"),
      xi = n.n(Ci),
      Mi = n("22f1"),
      Si = n.n(Mi),
      Ei = n("a7ba"),
      Ti = n.n(Ei),
      Ri = n("d454"),
      Ii = n.n(Ri),
      Li = n("a817"),
      Pi = n.n(Li),
      Ui = n("e495"),
      Bi = n.n(Ui),
      Di = Object(a["N"])("data-v-60ff7ac7");
    Object(a["x"])("data-v-60ff7ac7");
    var Ni = { id: "roadmap" },
      Fi = { class: "roadmap" },
      Vi = Object(a["j"])(
        "h1",
        { class: "title anchor" },
        [Object(a["j"])("img", { alt: "", src: ri.a })],
        -1
      ),
      qi = { key: 0, class: "desktop", alt: "", src: gn.a },
      Gi = { key: 1, class: "mobile", alt: "", src: oi.a },
      Hi = { key: 0, alt: "", class: "planet", src: ui.a },
      zi = { class: "detail-info" },
      Wi = { key: 0, alt: "", src: bi.a },
      Ki = { key: 0, alt: "", class: "planet", src: mi.a },
      Qi = { class: "detail-info" },
      Yi = { key: 0, alt: "", src: fi.a },
      Xi = { key: 0, alt: "", class: "planet", src: hi.a },
      Ji = { class: "detail-info" },
      Zi = { key: 0, alt: "", src: vi.a },
      _i = { key: 0, alt: "", class: "planet", src: wi.a },
      $i = { class: "detail-info" },
      ec = { key: 0, alt: "", src: ki.a },
      tc = { key: 0, alt: "", class: "planet", src: xi.a },
      nc = { class: "detail-info" },
      ac = { key: 0, alt: "", src: Si.a },
      ic = { key: 0, alt: "", class: "planet", src: Ti.a },
      cc = { class: "detail-info" },
      rc = { key: 0, alt: "", src: Ii.a },
      sc = { key: 0, alt: "", class: "light", src: Pi.a },
      oc = { key: 1, alt: "", class: "rock", src: Bi.a };
    Object(a["v"])();
    var lc = Di(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", Ni, [
            Object(a["j"])("div", Fi, [
              Vi,
              Object(a["j"])(
                "div",
                { class: "".concat(n.view ? "to" : "from", " sun") },
                [
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", qi))
                    : Object(a["g"])("", !0),
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", Gi))
                    : Object(a["g"])("", !0),
                ],
                2
              ),
              Object(a["j"])(
                "div",
                { class: "detail q3-2021 ".concat(n.view ? "animated" : "") },
                [
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", Hi))
                    : Object(a["g"])("", !0),
                  Object(a["j"])("div", zi, [
                    r.displayImage
                      ? (Object(a["u"])(), Object(a["f"])("img", Wi))
                      : Object(a["g"])("", !0),
                    Object(a["j"])("ul", null, [
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q3-2021-1")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q3-2021-2")),
                        1
                      ),
                    ]),
                  ]),
                ],
                2
              ),
              Object(a["j"])(
                "div",
                { class: "detail q4-2021 ".concat(n.view ? "animated" : "") },
                [
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", Ki))
                    : Object(a["g"])("", !0),
                  Object(a["j"])("div", Qi, [
                    r.displayImage
                      ? (Object(a["u"])(), Object(a["f"])("img", Yi))
                      : Object(a["g"])("", !0),
                    Object(a["j"])("ul", null, [
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q4-2021-1")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q4-2021-2")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q4-2021-3")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q4-2021-4")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q4-2021-5")),
                        1
                      ),
                    ]),
                  ]),
                ],
                2
              ),
              Object(a["j"])(
                "div",
                { class: "detail q1-2022 ".concat(n.view ? "animated" : "") },
                [
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", Xi))
                    : Object(a["g"])("", !0),
                  Object(a["j"])("div", Ji, [
                    r.displayImage
                      ? (Object(a["u"])(), Object(a["f"])("img", Zi))
                      : Object(a["g"])("", !0),
                    Object(a["j"])("ul", null, [
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q1-2022-1")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q1-2022-2")),
                        1
                      ),
                    ]),
                  ]),
                ],
                2
              ),
              Object(a["j"])(
                "div",
                { class: "detail q2-2022 ".concat(n.view ? "animated" : "") },
                [
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", _i))
                    : Object(a["g"])("", !0),
                  Object(a["j"])("div", $i, [
                    r.displayImage
                      ? (Object(a["u"])(), Object(a["f"])("img", ec))
                      : Object(a["g"])("", !0),
                    Object(a["j"])("ul", null, [
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q2-2022-1")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q2-2022-2")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q2-2022-3")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q2-2022-4")),
                        1
                      ),
                    ]),
                  ]),
                ],
                2
              ),
              Object(a["j"])(
                "div",
                { class: "detail q3-2022 ".concat(n.view ? "animated" : "") },
                [
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", tc))
                    : Object(a["g"])("", !0),
                  Object(a["j"])("div", nc, [
                    r.displayImage
                      ? (Object(a["u"])(), Object(a["f"])("img", ac))
                      : Object(a["g"])("", !0),
                    Object(a["j"])("ul", null, [
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q3-2022-1")),
                        1
                      ),
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q3-2022-2")),
                        1
                      ),
                    ]),
                  ]),
                ],
                2
              ),
              Object(a["j"])(
                "div",
                { class: "detail q4-2022 ".concat(n.view ? "animated" : "") },
                [
                  r.displayImage
                    ? (Object(a["u"])(), Object(a["f"])("img", ic))
                    : Object(a["g"])("", !0),
                  Object(a["j"])("div", cc, [
                    r.displayImage
                      ? (Object(a["u"])(), Object(a["f"])("img", rc))
                      : Object(a["g"])("", !0),
                    Object(a["j"])("ul", null, [
                      Object(a["j"])(
                        "li",
                        null,
                        Object(a["F"])(e.$t("roadmap.q4-2022-1")),
                        1
                      ),
                    ]),
                  ]),
                ],
                2
              ),
              r.displayImage
                ? (Object(a["u"])(), Object(a["f"])("img", sc))
                : Object(a["g"])("", !0),
              r.displayImage
                ? (Object(a["u"])(), Object(a["f"])("img", oc))
                : Object(a["g"])("", !0),
            ]),
          ])
        );
      }),
      uc = {
        name: "Roadmap",
        props: { view: Boolean, image: Boolean },
        data: function () {
          return { view2: !1 };
        },
        watch: {},
        computed: {
          displayImage: function () {
            return !(window.innerWidth > 1024) || this.image;
          },
        },
      };
    n("0578");
    (uc.render = lc), (uc.__scopeId = "data-v-60ff7ac7");
    var dc = uc,
      bc = n("ebae"),
      jc = n.n(bc),
      mc = n("66d0"),
      pc = n.n(mc),
      fc = n("8346"),
      gc = n.n(fc),
      hc = n("bdb7"),
      Oc = n.n(hc),
      vc = n("0c9c"),
      Ac = n.n(vc),
      wc = n("edcd"),
      yc = n.n(wc),
      kc = n("cfe6"),
      Cc = n.n(kc),
      xc = n("15b4"),
      Mc = n.n(xc),
      Sc = n("1552"),
      Ec = n.n(Sc),
      Tc = Object(a["N"])("data-v-5d2e0696");
    Object(a["x"])("data-v-5d2e0696");
    var Rc = Object(a["j"])(
        "div",
        { class: "socials" },
        [
          Object(a["j"])(
            "a",
            {
              href: "https://www.facebook.com/mechmaster.io/",
              target: "_blank",
            },
            [Object(a["j"])("img", { alt: "", src: jc.a })]
          ),
          Object(a["j"])(
            "a",
            { href: "https://twitter.com/MechMaster_IO", target: "_blank" },
            [Object(a["j"])("img", { alt: "", src: pc.a })]
          ),
          Object(a["j"])(
            "a",
            {
              href: "https://www.youtube.com/c/mechmasterofficial",
              target: "_blank",
            },
            [Object(a["j"])("img", { alt: "", src: gc.a })]
          ),
          Object(a["j"])(
            "a",
            { href: "https://t.me/MechMaster_Official", target: "_blank" },
            [Object(a["j"])("img", { alt: "", src: Oc.a })]
          ),
          Object(a["j"])(
            "a",
            {
              href: "https://www.instagram.com/mechmaster_io/",
              target: "_blank",
            },
            [Object(a["j"])("img", { alt: "", src: Ac.a })]
          ),
          Object(a["j"])(
            "a",
            { href: "https://discord.com/invite/xs8MDRvbaF", target: "_blank" },
            [Object(a["j"])("img", { alt: "", src: yc.a })]
          ),
          Object(a["j"])(
            "a",
            { href: "https://medium.com/mech-master", target: "_blank" },
            [Object(a["j"])("img", { alt: "", src: Cc.a })]
          ),
        ],
        -1
      ),
      Ic = { class: "language" },
      Lc = Object(a["j"])("img", { alt: "", src: Mc.a }, null, -1),
      Pc = { key: 0, class: "language-list" },
      Uc = { class: "copyright" },
      Bc = Object(a["j"])(
        "a",
        {
          href: "https://miraistudio.games/#/home",
          target: "_blank",
          alt: "Mirai studio",
        },
        [Object(a["j"])("img", { loading: "lazy", alt: "", src: Ec.a })],
        -1
      );
    Object(a["v"])();
    var Dc = Tc(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("footer", null, [
            Rc,
            Object(a["j"])("div", Ic, [
              Object(a["j"])(
                "div",
                {
                  class: "language-value",
                  onClick:
                    t[1] ||
                    (t[1] = function (e) {
                      return (c.show = !c.show);
                    }),
                },
                [
                  Lc,
                  Object(a["j"])(
                    "span",
                    null,
                    Object(a["F"])(c.language.title),
                    1
                  ),
                ]
              ),
              Object(a["j"])(
                a["c"],
                { name: "slide-up" },
                {
                  default: Tc(function () {
                    return [
                      c.show
                        ? (Object(a["u"])(),
                          Object(a["f"])("div", Pc, [
                            (Object(a["u"])(!0),
                            Object(a["f"])(
                              a["a"],
                              null,
                              Object(a["B"])(c.languages, function (e, t) {
                                return (
                                  Object(a["u"])(),
                                  Object(a["f"])(
                                    "div",
                                    {
                                      class: "language-list_item",
                                      key: t,
                                      onClick: function (t) {
                                        return r.changeLanguage(e);
                                      },
                                    },
                                    Object(a["F"])(e.title),
                                    9,
                                    ["onClick"]
                                  )
                                );
                              }),
                              128
                            )),
                          ]))
                        : Object(a["g"])("", !0),
                    ];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(a["j"])("div", Uc, [
              Bc,
              Object(a["j"])(
                "p",
                null,
                Object(a["F"])(e.$t("footer.first")),
                1
              ),
              Object(a["j"])(
                "p",
                null,
                Object(a["F"])(e.$t("footer.second")),
                1
              ),
            ]),
          ])
        );
      }),
      Nc = [{ title: "English", locale: "en" }],
      Fc = {
        name: "Footer",
        props: { image: Boolean },
        data: function () {
          return {
            languages: Nc,
            language: { title: "English", locale: "en" },
            show: !1,
          };
        },
        methods: {
          changeLanguage: function (e) {
            (this.language = e),
              (this.$i18n.locale = e.locale),
              (this.show = !1);
          },
        },
      };
    n("ed2c");
    (Fc.render = Dc), (Fc.__scopeId = "data-v-5d2e0696");
    var Vc = Fc,
      qc = n("f63f"),
      Gc = n.n(qc),
      Hc = n("c36f"),
      zc = n.n(Hc),
      Wc = n("c4ab"),
      Kc = n.n(Wc),
      Qc = n("336e"),
      Yc = n.n(Qc),
      Xc = n("49be"),
      Jc = n.n(Xc),
      Zc = n("404f"),
      _c = n.n(Zc),
      $c = n("b310"),
      er = n.n($c),
      tr = n("8ee6"),
      nr = n.n(tr),
      ar = n("392f"),
      ir = n.n(ar),
      cr = n("691b"),
      rr = n.n(cr),
      sr = n("030c"),
      or = n.n(sr),
      lr = n("a9ec"),
      ur = n.n(lr),
      dr = n("29ad"),
      br = n.n(dr),
      jr = n("4d18"),
      mr = n.n(jr),
      pr = n("14c0"),
      fr = n.n(pr),
      gr = Object(a["N"])("data-v-6828abbd");
    Object(a["x"])("data-v-6828abbd");
    var hr = { class: "exploration anchor" },
      Or = { key: 0, class: "exploration-moon_title" },
      vr = Object(a["j"])(
        "img",
        { alt: "", class: "title", src: Gc.a },
        null,
        -1
      ),
      Ar = { key: 1, class: "moon" },
      wr = Object(a["j"])(
        "image",
        {
          x: "239",
          y: "242",
          width: "351.221",
          height: "355.087",
          href: "img/moon2.png",
        },
        null,
        -1
      ),
      yr = { filter: "url(#filter0_d_445_510)" },
      kr = {
        ref: "ellipse",
        d: "M370.729 219.32C452.665 151.432 533.773 104.631 596.228 89.3126C627.452 81.6543 652.873 82.1443 671.315 90.5027C689.829 98.8937 701.145 115.139 704.251 138.555C707.35 161.915 702.165 191.486 689.549 225.255C676.926 259.041 656.834 297.11 630.022 337.497C576.4 418.271 500.237 501.787 418.282 569.691C336.347 637.579 255.238 684.38 192.784 699.699C161.56 707.357 136.138 706.867 117.697 698.509C99.1831 690.118 87.8672 673.872 84.7608 650.457C81.6618 627.097 86.8467 597.525 99.4631 563.756C112.086 529.97 132.178 491.902 158.989 451.514C212.612 370.74 288.775 287.224 370.729 219.32L370.729 219.32Z",
        stroke: "url(#paint0_linear_445_510)",
        "stroke-width": "2",
      },
      Cr = { filter: "url(#filter1_d_140_147)" },
      xr = {
        ref: "circle",
        d: "M109.12400000000002,397.506a283.875,283.875 0 1,0 567.75,0a283.875,283.875 0 1,0 -567.75,0",
        stroke: "#74CDFF",
        "stroke-width": "2.25",
        "shape-rendering": "crispEdges",
      },
      Mr = Object(a["j"])(
        "rect",
        {
          x: "219",
          y: "223.506",
          width: "343",
          height: "350",
          rx: "171.5",
          fill: "url(#pattern0)",
        },
        null,
        -1
      ),
      Sr = Object(a["j"])(
        "rect",
        {
          x: "219",
          y: "223.506",
          width: "343",
          height: "350",
          rx: "171.5",
          fill: "url(#paint0_linear_140_147)",
          "fill-opacity": "0.3",
        },
        null,
        -1
      ),
      Er = { ref: "ship", width: "50", height: "50" },
      Tr = { class: "orbital-object" },
      Rr = Object(a["j"])("img", { src: "img/orbital_object.png" }, null, -1),
      Ir = Object(a["j"])("span", null, "Virtual Trading Market", -1),
      Lr = { ref: "ship2", width: "50", height: "50", x: "336", y: "206" },
      Pr = { class: "orbital-object" },
      Ur = Object(a["j"])("img", { src: "img/orbital_object.png" }, null, -1),
      Br = Object(a["j"])("span", null, "Mech Metaverse Platform", -1),
      Dr = { ref: "ship3", width: "50", height: "50", x: "336", y: "206" },
      Nr = { class: "orbital-object" },
      Fr = Object(a["j"])("img", { src: "img/orbital_object.png" }, null, -1),
      Vr = Object(a["j"])("span", null, "Virtual Gaming Arena", -1),
      qr = { ref: "ship5", width: "40", height: "40", x: "336", y: "206" },
      Gr = { class: "orbital-object" },
      Hr = Object(a["j"])("img", { src: "img/orbital_object2.png" }, null, -1),
      zr = Object(a["j"])("span", null, "Mech Master", -1),
      Wr = { ref: "ship6", width: "40", height: "40", x: "336", y: "206" },
      Kr = { class: "orbital-object" },
      Qr = Object(a["j"])("img", { src: "img/orbital_object2.png" }, null, -1),
      Yr = Object(a["j"])("span", null, "Mech Frontline", -1),
      Xr = Object(a["j"])(
        "image",
        {
          x: "184",
          y: "183",
          width: "351.518",
          height: "355.087",
          href: "img/moon1.png",
        },
        null,
        -1
      ),
      Jr = Object(a["j"])(
        "defs",
        null,
        [
          Object(a["j"])(
            "filter",
            {
              id: "filter0_d_445_510",
              x: "70.8857",
              y: "70.8848",
              width: "647.24",
              height: "647.242",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
            },
            [
              Object(a["j"])("feFlood", {
                "flood-opacity": "0",
                result: "BackgroundImageFix",
              }),
              Object(a["j"])("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              Object(a["j"])("feOffset"),
              Object(a["j"])("feGaussianBlur", { stdDeviation: "6" }),
              Object(a["j"])("feComposite", {
                in2: "hardAlpha",
                operator: "out",
              }),
              Object(a["j"])("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.934083 0 0 0 0 0.529167 0 0 0 0 1 0 0 0 1 0",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_445_510",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_445_510",
                result: "shape",
              }),
            ]
          ),
          Object(a["j"])(
            "filter",
            {
              id: "filter1_d_140_147",
              x: "79.249",
              y: "83.7559",
              width: "627.5",
              height: "627.5",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
            },
            [
              Object(a["j"])("feFlood", {
                "flood-opacity": "0",
                result: "BackgroundImageFix",
              }),
              Object(a["j"])("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              Object(a["j"])("feOffset"),
              Object(a["j"])("feGaussianBlur", { stdDeviation: "14.5" }),
              Object(a["j"])("feComposite", {
                in2: "hardAlpha",
                operator: "out",
              }),
              Object(a["j"])("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.985583 0 0 0 0 0.279167 0 0 0 0 1 0 0 0 1 0",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_140_147",
              }),
              Object(a["j"])("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_140_147",
                result: "shape",
              }),
            ]
          ),
          Object(a["j"])(
            "linearGradient",
            {
              id: "paint0_linear_445_510",
              x1: "686.75",
              y1: "102.261",
              x2: "102.261",
              y2: "686.75",
              gradientUnits: "userSpaceOnUse",
            },
            [
              Object(a["j"])("stop", { "stop-color": "#00A3FF" }),
              Object(a["j"])("stop", { offset: "1", "stop-color": "#FF54F8" }),
            ]
          ),
          Object(a["j"])(
            "linearGradient",
            {
              id: "paint1_linear_140_147",
              x1: "687.245",
              y1: "102.261",
              x2: "102.755",
              y2: "686.75",
              gradientUnits: "userSpaceOnUse",
            },
            [
              Object(a["j"])("stop", { "stop-color": "#00A3FF" }),
              Object(a["j"])("stop", { offset: "1", "stop-color": "#FF54F8" }),
            ]
          ),
        ],
        -1
      ),
      Zr = { key: 2, class: "exploration-moon_btn" },
      _r = { key: 3, class: "exploration-moon_detail" },
      $r = { key: 0 },
      es = Object(a["j"])(
        "div",
        { class: "title" },
        [
          Object(a["j"])("div", null, [
            Object(a["j"])("img", { alt: "", src: Kc.a }),
          ]),
          Object(a["j"])("img", {
            class: "icon",
            alt: "",
            src: "orbital_object.png",
          }),
        ],
        -1
      ),
      ts = Object(a["j"])(
        "div",
        { class: "image" },
        [Object(a["j"])("img", { alt: "", src: Yc.a })],
        -1
      ),
      ns = Object(a["j"])(
        "div",
        { class: "content" },
        [
          Object(a["j"])(
            "p",
            null,
            "Hyper-realistic VR shopping experience through 3D display of tradeable items like Mechas, Pilots, Weapons..."
          ),
        ],
        -1
      ),
      as = { key: 1 },
      is = Object(a["j"])(
        "div",
        { class: "title" },
        [
          Object(a["j"])("div", null, [
            Object(a["j"])("img", { alt: "", src: Jc.a }),
          ]),
          Object(a["j"])("img", {
            class: "icon",
            alt: "",
            src: "orbital_object.png",
          }),
        ],
        -1
      ),
      cs = Object(a["j"])(
        "div",
        { class: "content" },
        [
          Object(a["j"])(
            "p",
            { class: "large" },
            "Get your project into our metaverse."
          ),
          Object(a["j"])(
            "p",
            null,
            "We aspire to build a diversified world. Where each city is a new experience, a new discovery, a new revelation."
          ),
          Object(a["j"])(
            "p",
            null,
            "Thus, Mech Metaverse will provide an incredibly easy-to-access and user-friendly kickstarting platform for projects to:"
          ),
        ],
        -1
      ),
      rs = Object(a["j"])(
        "div",
        { class: "list small" },
        [
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])(
              "span",
              null,
              "Build your own city for your project."
            ),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])("span", null, "Advertising across cities."),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])(
              "span",
              null,
              "Users between cities can interact with each other, participating in each other's gaming ecosystems."
            ),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])(
              "span",
              null,
              "Join a partnership with an already populated gaming ecosystems of many projects."
            ),
          ]),
        ],
        -1
      ),
      ss = Object(a["j"])(
        "img",
        { class: "mmp", alt: "", src: er.a },
        null,
        -1
      ),
      os = { key: 2 },
      ls = Object(a["j"])(
        "div",
        { class: "title" },
        [
          Object(a["j"])("div", null, [
            Object(a["j"])("img", { alt: "", src: nr.a }),
          ]),
          Object(a["j"])("img", {
            class: "icon",
            alt: "",
            src: "orbital_object.png",
          }),
        ],
        -1
      ),
      us = Object(a["j"])(
        "div",
        { class: "content" },
        [
          Object(a["j"])(
            "p",
            null,
            "Immerse yourself in the most realistic and thrilling battles."
          ),
          Object(a["j"])(
            "p",
            null,
            "A Virtual Arena on Mech City, where all the exciting guild wars, seasonal ranking tournament, and World Championship will be held"
          ),
          Object(a["j"])(
            "p",
            null,
            "In addition to being able to view all the battles of Mech Masters, users can also"
          ),
        ],
        -1
      ),
      ds = Object(a["j"])(
        "div",
        { class: "image" },
        [Object(a["j"])("img", { alt: "", src: ir.a })],
        -1
      ),
      bs = Object(a["j"])(
        "div",
        { class: "list" },
        [
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])(
              "span",
              null,
              "Watch all the games of other projects in the Mech Gaming Ecosystem"
            ),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])(
              "span",
              null,
              "Watch other top games host by the worldâ€™s most professional organization. (being developed)"
            ),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])(
              "span",
              null,
              "Participate in regulated wagering for those tournaments"
            ),
          ]),
          Object(a["j"])("p", null, [
            Object(a["j"])("img", { alt: "", src: _c.a }),
            Object(a["j"])("span", null, "And many many moreâ€¦"),
          ]),
        ],
        -1
      ),
      js = { class: "exploration-mask" },
      ms = Object(a["j"])(
        "div",
        { class: "exploration-mask_title" },
        [Object(a["j"])("img", { alt: "", src: rr.a })],
        -1
      ),
      ps = { class: "exploration-mask_detail" },
      fs = Object(a["j"])(
        "p",
        null,
        "Mech Master is a fully immersive 3D Metaverse on the Moon, where each project is a virtual city, interconnected into an ecosystem. Come to Mech City, people can socialize, relax, join in various activities and enjoy life truly in Mech Metaverse Ecosystem in a breath taking 3D Universe.",
        -1
      ),
      gs = Object(a["j"])("div", { class: "wing-left" }, null, -1),
      hs = Object(a["j"])("img", { alt: "", src: or.a }, null, -1),
      Os = Object(a["j"])("div", { class: "wing-right" }, null, -1),
      vs = Object(a["j"])(
        "div",
        { class: "exploration-mask_detail--info" },
        [
          Object(a["j"])("img", { alt: "", src: ur.a }),
          Object(a["j"])("img", { alt: "", src: br.a }),
          Object(a["j"])("img", { alt: "", src: mr.a }),
          Object(a["j"])("img", { alt: "", src: fr.a }),
        ],
        -1
      );
    Object(a["v"])();
    var As = gr(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", hr, [
            Object(a["j"])(
              "div",
              {
                class: "exploration-background ".concat(c.active ? "zoom" : ""),
              },
              null,
              2
            ),
            Object(a["j"])(
              "div",
              { class: "exploration-moon ".concat(c.active ? "active" : "") },
              [
                c.explored && !c.active
                  ? (Object(a["u"])(), Object(a["f"])("div", Or, [vr]))
                  : Object(a["g"])("", !0),
                c.explored
                  ? (Object(a["u"])(),
                    Object(a["f"])("div", Ar, [
                      (Object(a["u"])(),
                      Object(a["f"])(
                        "svg",
                        {
                          width: r.size,
                          height: r.size,
                          viewBox: "0 0 790 790",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          wr,
                          Object(a["j"])("g", yr, [
                            Object(a["j"])("path", kr, null, 512),
                          ]),
                          Object(a["j"])("g", Cr, [
                            Object(a["j"])("path", xr, null, 512),
                          ]),
                          Mr,
                          Sr,
                          Object(a["j"])("g", null, [
                            (Object(a["u"])(),
                            Object(a["f"])(
                              "foreignObject",
                              Er,
                              [
                                Object(a["L"])(
                                  Object(a["j"])("div", Tr, [Rr, Ir], 512),
                                  [[a["J"], 1 !== r.phase]]
                                ),
                              ],
                              512
                            )),
                          ]),
                          Object(a["j"])("g", null, [
                            (Object(a["u"])(),
                            Object(a["f"])(
                              "foreignObject",
                              Lr,
                              [
                                Object(a["L"])(
                                  Object(a["j"])("div", Pr, [Ur, Br], 512),
                                  [[a["J"], 2 !== r.phase]]
                                ),
                              ],
                              512
                            )),
                          ]),
                          Object(a["j"])("g", null, [
                            (Object(a["u"])(),
                            Object(a["f"])(
                              "foreignObject",
                              Dr,
                              [
                                Object(a["L"])(
                                  Object(a["j"])("div", Nr, [Fr, Vr], 512),
                                  [[a["J"], 3 !== r.phase]]
                                ),
                              ],
                              512
                            )),
                          ]),
                          Object(a["j"])("g", null, [
                            (Object(a["u"])(),
                            Object(a["f"])(
                              "foreignObject",
                              qr,
                              [
                                Object(a["L"])(
                                  Object(a["j"])("div", Gr, [Hr, zr], 512),
                                  [[a["J"], 4 !== r.phase]]
                                ),
                              ],
                              512
                            )),
                          ]),
                          Object(a["j"])("g", null, [
                            (Object(a["u"])(),
                            Object(a["f"])(
                              "foreignObject",
                              Wr,
                              [
                                Object(a["L"])(
                                  Object(a["j"])("div", Kr, [Qr, Yr], 512),
                                  [[a["J"], 4 !== r.phase]]
                                ),
                              ],
                              512
                            )),
                          ]),
                          Xr,
                          Jr,
                        ],
                        8,
                        ["width", "height"]
                      )),
                    ]))
                  : Object(a["g"])("", !0),
                c.explored
                  ? (Object(a["u"])(),
                    Object(a["f"])("div", Zr, [
                      r.phase > 0
                        ? (Object(a["u"])(),
                          Object(a["f"])("img", {
                            key: 0,
                            alt: "",
                            style: { transform: "rotate(180deg)" },
                            src: zc.a,
                            onClick:
                              t[1] ||
                              (t[1] = function () {
                                return r.back && r.back.apply(r, arguments);
                              }),
                          }))
                        : Object(a["g"])("", !0),
                      r.phase < 3
                        ? (Object(a["u"])(),
                          Object(a["f"])("img", {
                            key: 1,
                            alt: "",
                            src: zc.a,
                            onClick:
                              t[2] ||
                              (t[2] = function () {
                                return r.next && r.next.apply(r, arguments);
                              }),
                          }))
                        : Object(a["g"])("", !0),
                    ]))
                  : Object(a["g"])("", !0),
                r.phase > 0 && r.phase < 4
                  ? (Object(a["u"])(),
                    Object(a["f"])("div", _r, [
                      Object(a["j"])(
                        a["c"],
                        { name: "slide-down" },
                        {
                          default: gr(function () {
                            return [
                              1 === r.phase
                                ? (Object(a["u"])(),
                                  Object(a["f"])("div", $r, [es, ts, ns]))
                                : 2 === r.phase
                                ? (Object(a["u"])(),
                                  Object(a["f"])("div", as, [is, cs, rs, ss]))
                                : 3 === r.phase
                                ? (Object(a["u"])(),
                                  Object(a["f"])("div", os, [ls, us, ds, bs]))
                                : Object(a["g"])("", !0),
                            ];
                          }),
                          _: 1,
                        }
                      ),
                    ]))
                  : Object(a["g"])("", !0),
              ],
              2
            ),
            Object(a["j"])(
              a["c"],
              { name: "fade-out" },
              {
                default: gr(function () {
                  return [
                    Object(a["L"])(
                      Object(a["j"])(
                        "div",
                        js,
                        [
                          ms,
                          Object(a["j"])("div", ps, [
                            fs,
                            Object(a["j"])("div", null, [
                              gs,
                              Object(a["j"])(
                                "div",
                                {
                                  class: "btn-explore",
                                  onClick:
                                    t[3] ||
                                    (t[3] = function (e) {
                                      return (c.explored = !0);
                                    }),
                                },
                                [hs]
                              ),
                              Os,
                            ]),
                            vs,
                          ]),
                        ],
                        512
                      ),
                      [[a["J"], !c.explored]]
                    ),
                  ];
                }),
                _: 1,
              }
            ),
          ])
        );
      }),
      ws = n("4378"),
      ys = {
        name: "Exploration",
        components: {},
        props: { step: Number, view: Boolean },
        data: function () {
          return { explored: !1, active: !1 };
        },
        watch: {
          view: function (e) {
            e && ((this.explored = !1), (this.active = !1));
          },
          explored: function (e) {
            var t = this;
            e &&
              this.$nextTick(function () {
                var e = t.$refs.ellipse,
                  n = Object(ws["a"])(e),
                  a = t.$refs.ship,
                  i = Object(ws["a"])(a);
                i.animate(3e4, "<>")
                  .during(function (e) {
                    var t = n.length(),
                      a = n.pointAt(e * t);
                    i.center(a.x, a.y);
                  })
                  .loop(!0, !1);
                var c = t.$refs.ship2,
                  r = Object(ws["a"])(c);
                r.animate({ duration: 3e4 })
                  .during(function (e) {
                    var t = n.length(),
                      a = n.pointAt(e * t);
                    r.center(a.x, a.y);
                  })
                  .loop(!0, !1)
                  .time(1e4);
                var s = t.$refs.ship3,
                  o = Object(ws["a"])(s);
                o.animate({ duration: 3e4 })
                  .during(function (e) {
                    var t = n.length(),
                      a = n.pointAt(e * t);
                    o.center(a.x, a.y);
                  })
                  .loop(!0, !1)
                  .time(2e4);
                var l = t.$refs.circle,
                  u = Object(ws["a"])(l),
                  d = t.$refs.ship5,
                  b = Object(ws["a"])(d);
                b.animate({ duration: 4e4 })
                  .during(function (e) {
                    var t = u.length(),
                      n = u.pointAt(e * t);
                    b.center(n.x, n.y);
                  })
                  .loop(!0, !1);
                var j = t.$refs.ship6,
                  m = Object(ws["a"])(j);
                m.animate({ duration: 4e4 })
                  .during(function (e) {
                    var t = u.length(),
                      n = u.pointAt(e * t);
                    m.center(n.x, n.y);
                  })
                  .loop(!0, !1)
                  .time(2e4);
              });
          },
        },
        computed: {
          phase: {
            get: function () {
              return this.step;
            },
            set: function (e) {
              this.$emit("changeStep", e);
            },
          },
          size: function () {
            var e = window.innerHeight;
            return this.explored && !this.active
              ? 0.8 * e
              : this.active
              ? 0.6 * e
              : 400;
          },
        },
        mounted: function () {},
        methods: {
          back: function () {
            this.phase--, 0 === this.phase && (this.active = !1);
          },
          next: function () {
            (this.active = !0), this.phase++;
          },
        },
      };
    n("0250");
    (ys.render = As), (ys.__scopeId = "data-v-6828abbd");
    var ks = ys,
      Cs = n("1d3a"),
      xs = n.n(Cs),
      Ms = n("d81c"),
      Ss = n.n(Ms),
      Es = n("50e4"),
      Ts = n.n(Es),
      Rs = n("7007"),
      Is = n.n(Rs),
      Ls = n("722e"),
      Ps = n.n(Ls),
      Us = n("a135"),
      Bs = n.n(Us),
      Ds = n("feaa"),
      Ns = n.n(Ds),
      Fs = n("2138"),
      Vs = n.n(Fs),
      qs = n("1448"),
      Gs = n.n(qs),
      Hs = n("6fc8"),
      zs = n.n(Hs),
      Ws = n("807d"),
      Ks = n.n(Ws),
      Qs = n("8579"),
      Ys = n.n(Qs),
      Xs = n("cd74"),
      Js = n.n(Xs),
      Zs = n("d52e"),
      _s = n.n(Zs),
      $s = n("46d7"),
      eo = n.n($s),
      to = n("2d4d"),
      no = n.n(to),
      ao = n("0b48"),
      io = n.n(ao),
      co = n("623f"),
      ro = n.n(co),
      so = n("793b"),
      oo = n.n(so),
      lo = n("a2bf"),
      uo = n.n(lo),
      bo = n("1483"),
      jo = n.n(bo),
      mo = n("54b6"),
      po = n.n(mo),
      fo = n("87ea"),
      go = n.n(fo),
      ho = Object(a["N"])("data-v-6cd2c2e3");
    Object(a["x"])("data-v-6cd2c2e3");
    var Oo = { id: "game" },
      vo = { class: "game anchor" },
      Ao = { class: "col" },
      wo = Object(a["j"])(
        "div",
        { class: "title" },
        [Object(a["j"])("img", { alt: "", src: xs.a })],
        -1
      ),
      yo = Object(a["j"])(
        "div",
        { class: "detail" },
        [
          Object(a["j"])(
            "p",
            null,
            "For the first time ever, with only one Mecha, you can play multiple different games in the Mech Metaverse"
          ),
          Object(a["j"])(
            "p",
            null,
            "With the mission to create 3D games with the highest quality to be able to develop a gaming ecosystem, Mech master will develop many different game genres in the future."
          ),
          Object(a["j"])(
            "p",
            null,
            "Just by owning mechas and pilots, users will have the ability to participate in all of our games from different genres."
          ),
        ],
        -1
      ),
      ko = Object(a["j"])("img", { alt: "", src: or.a }, null, -1),
      Co = Object(a["j"])("img", { class: "mecha", src: Ss.a }, null, -1),
      xo = { class: "row" },
      Mo = { class: "tab" },
      So = Object(a["j"])(
        "div",
        { class: "tab-title" },
        [Object(a["j"])("img", { alt: "", src: Ts.a })],
        -1
      ),
      Eo = Object(a["j"])("div", { class: "progress" }, null, -1),
      To = { class: "tab-row" },
      Ro = Object(a["j"])(
        "div",
        { class: "tab-row_item--title" },
        "MECHAS",
        -1
      ),
      Io = Object(a["j"])(
        "div",
        { class: "tab-row_item--image" },
        [
          Object(a["j"])("div", null, [
            Object(a["j"])("img", { alt: "", src: Is.a }),
          ]),
        ],
        -1
      ),
      Lo = Object(a["j"])(
        "div",
        { class: "tab-row_item--title" },
        "PILOTS",
        -1
      ),
      Po = Object(a["j"])(
        "div",
        { class: "tab-row_item--image" },
        [
          Object(a["j"])("div", null, [
            Object(a["j"])("img", { alt: "", src: Ps.a }),
          ]),
        ],
        -1
      ),
      Uo = { class: "tab-col" },
      Bo = Object(a["j"])(
        "div",
        { class: "tab-col_title" },
        "Select your game",
        -1
      ),
      Do = Object(a["j"])("img", { alt: "", src: Bs.a }, null, -1),
      No = Object(a["j"])(
        "img",
        { alt: "", class: "legion", src: Ns.a },
        null,
        -1
      ),
      Fo = Object(a["j"])(
        "img",
        { alt: "", class: "title", src: Vs.a },
        null,
        -1
      ),
      Vo = Object(a["j"])("img", { alt: "", src: Gs.a }, null, -1),
      qo = Object(a["j"])(
        "img",
        { alt: "", class: "title", src: zs.a },
        null,
        -1
      ),
      Go = { class: "content" },
      Ho = { key: 0, class: "content-mecha" },
      zo = { class: "content-mecha_image" },
      Wo = { class: "content-mecha_info" },
      Ko = { class: "content-mecha_info--row" },
      Qo = { class: "name" },
      Yo = { class: "content-mecha_slider" },
      Xo = { key: 1, class: "content-pilot" },
      Jo = { key: 0, alt: "", src: Ks.a },
      Zo = { key: 1, alt: "", src: Ys.a },
      _o = { key: 2, alt: "", src: Js.a },
      $o = { class: "pilot-name" },
      el = { class: "pilot-selector" },
      tl = Object(a["j"])("img", { alt: "", src: _s.a }, null, -1),
      nl = Object(a["j"])("img", { alt: "", src: _s.a }, null, -1),
      al = { key: 2, class: "content-text" },
      il = Object(a["j"])("h1", null, "mech master", -1),
      cl = Object(a["j"])("h2", null, "The First", -1),
      rl = Object(a["j"])("h2", null, "3D Mecha Showdown", -1),
      sl = Object(a["j"])("h2", null, "On Blockchain", -1),
      ol = Object(a["j"])(
        "p",
        null,
        "Mech Master is a strategic turn-based RPG game where players are open to build their own territory with future technologies and protect their homeland.",
        -1
      ),
      ll = { key: 3, class: "coming-soon" },
      ul = Object(a["j"])("img", { alt: "", src: jo.a }, null, -1),
      dl = Object(a["j"])("div", { class: "text" }, "Coming Soon", -1),
      bl = { key: 0, class: "comet", alt: "", src: po.a },
      jl = { key: 1, class: "ellipse", alt: "", src: jo.a },
      ml = { key: 2, class: "mechmaster", src: go.a };
    Object(a["v"])();
    var pl = ho(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", Oo, [
            Object(a["j"])("div", vo, [
              Object(a["L"])(
                Object(a["j"])(
                  "div",
                  Ao,
                  [
                    wo,
                    yo,
                    Object(a["j"])(
                      "div",
                      {
                        class: "btn-explore",
                        onClick:
                          t[1] ||
                          (t[1] = function (e) {
                            return (c.explored = !0);
                          }),
                      },
                      [ko]
                    ),
                    Co,
                  ],
                  512
                ),
                [[a["J"], !c.explored]]
              ),
              Object(a["L"])(
                Object(a["j"])(
                  "div",
                  xo,
                  [
                    Object(a["j"])("div", Mo, [
                      So,
                      Eo,
                      Object(a["j"])("div", To, [
                        Object(a["j"])(
                          "div",
                          {
                            class: "tab-row_item ".concat(
                              "mecha" === c.tab ? "selected" : ""
                            ),
                            onClick:
                              t[2] ||
                              (t[2] = function (e) {
                                return (c.tab = "mecha");
                              }),
                          },
                          [Ro, Io],
                          2
                        ),
                        Object(a["j"])(
                          "div",
                          {
                            class: "tab-row_item ".concat(
                              "pilot" === c.tab ? "selected" : ""
                            ),
                            onClick:
                              t[3] ||
                              (t[3] = function (e) {
                                return (c.tab = "pilot");
                              }),
                          },
                          [Lo, Po],
                          2
                        ),
                      ]),
                      Object(a["j"])("div", Uo, [
                        Bo,
                        Object(a["j"])(
                          "div",
                          {
                            class: "tab-col_item ".concat(
                              "mechmaster" === c.tab ? "selected" : ""
                            ),
                            onClick:
                              t[4] ||
                              (t[4] = function (e) {
                                return (c.tab = "mechmaster");
                              }),
                          },
                          [Do, No, Fo],
                          2
                        ),
                        Object(a["j"])(
                          "div",
                          {
                            class: "tab-col_item ".concat(
                              "frontline" === c.tab ? "selected" : ""
                            ),
                            onClick:
                              t[5] ||
                              (t[5] = function (e) {
                                return (c.tab = "frontline");
                              }),
                          },
                          [Vo, qo],
                          2
                        ),
                      ]),
                    ]),
                    Object(a["j"])("div", Go, [
                      "mecha" === c.tab
                        ? (Object(a["u"])(),
                          Object(a["f"])("div", Ho, [
                            Object(a["j"])("div", zo, [
                              Object(a["j"])(
                                "img",
                                { alt: "", src: c.selectedCharacter.image },
                                null,
                                8,
                                ["src"]
                              ),
                            ]),
                            Object(a["j"])("div", Wo, [
                              Object(a["j"])("div", Ko, [
                                Object(a["j"])(
                                  "img",
                                  {
                                    class: "race",
                                    alt: "",
                                    src: c.selectedCharacter.race,
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                                Object(a["j"])(
                                  "div",
                                  Qo,
                                  Object(a["F"])(c.selectedCharacter.name),
                                  1
                                ),
                              ]),
                              Object(a["j"])(
                                "p",
                                null,
                                Object(a["F"])(c.selectedCharacter.text),
                                1
                              ),
                            ]),
                            Object(a["j"])("div", Yo, [
                              (Object(a["u"])(!0),
                              Object(a["f"])(
                                a["a"],
                                null,
                                Object(a["B"])(c.characters, function (e, t) {
                                  return (
                                    Object(a["u"])(),
                                    Object(a["f"])(
                                      "div",
                                      {
                                        class:
                                          "content-mecha_slider--item ".concat(
                                            c.selectedCharacter.id === e.id
                                              ? "selected"
                                              : ""
                                          ),
                                        key: t,
                                        onClick: function (t) {
                                          return (c.selectedCharacter = e);
                                        },
                                      },
                                      [
                                        Object(a["j"])(
                                          "img",
                                          { alt: "", src: e.thumb },
                                          null,
                                          8,
                                          ["src"]
                                        ),
                                      ],
                                      10,
                                      ["onClick"]
                                    )
                                  );
                                }),
                                128
                              )),
                            ]),
                          ]))
                        : "pilot" === c.tab
                        ? (Object(a["u"])(),
                          Object(a["f"])("div", Xo, [
                            "chiyoko" === c.pilot
                              ? (Object(a["u"])(), Object(a["f"])("img", Jo))
                              : "rika" === c.pilot
                              ? (Object(a["u"])(), Object(a["f"])("img", Zo))
                              : "yoko" === c.pilot
                              ? (Object(a["u"])(), Object(a["f"])("img", _o))
                              : Object(a["g"])("", !0),
                            Object(a["j"])(
                              "div",
                              $o,
                              Object(a["F"])(r.pilotName),
                              1
                            ),
                            Object(a["j"])("div", el, [
                              tl,
                              "chiyoko" === c.pilot
                                ? (Object(a["u"])(),
                                  Object(a["f"])("img", {
                                    key: 0,
                                    onClick:
                                      t[6] ||
                                      (t[6] = function (e) {
                                        return (c.pilot = "chiyoko");
                                      }),
                                    alt: "",
                                    src: eo.a,
                                  }))
                                : (Object(a["u"])(),
                                  Object(a["f"])("img", {
                                    key: 1,
                                    onClick:
                                      t[7] ||
                                      (t[7] = function (e) {
                                        return (c.pilot = "chiyoko");
                                      }),
                                    alt: "",
                                    src: no.a,
                                  })),
                              "rika" === c.pilot
                                ? (Object(a["u"])(),
                                  Object(a["f"])("img", {
                                    key: 2,
                                    onClick:
                                      t[8] ||
                                      (t[8] = function (e) {
                                        return (c.pilot = "rika");
                                      }),
                                    alt: "",
                                    src: io.a,
                                  }))
                                : (Object(a["u"])(),
                                  Object(a["f"])("img", {
                                    key: 3,
                                    onClick:
                                      t[9] ||
                                      (t[9] = function (e) {
                                        return (c.pilot = "rika");
                                      }),
                                    alt: "",
                                    src: ro.a,
                                  })),
                              "yoko" === c.pilot
                                ? (Object(a["u"])(),
                                  Object(a["f"])("img", {
                                    key: 4,
                                    onClick:
                                      t[10] ||
                                      (t[10] = function (e) {
                                        return (c.pilot = "yoko");
                                      }),
                                    alt: "",
                                    src: oo.a,
                                  }))
                                : (Object(a["u"])(),
                                  Object(a["f"])("img", {
                                    key: 5,
                                    onClick:
                                      t[11] ||
                                      (t[11] = function (e) {
                                        return (c.pilot = "yoko");
                                      }),
                                    alt: "",
                                    src: uo.a,
                                  })),
                              nl,
                            ]),
                          ]))
                        : "mechmaster" === c.tab
                        ? (Object(a["u"])(),
                          Object(a["f"])("div", al, [il, cl, rl, sl, ol]))
                        : (Object(a["u"])(),
                          Object(a["f"])("div", ll, [ul, dl])),
                    ]),
                  ],
                  512
                ),
                [[a["J"], c.explored]]
              ),
            ]),
            c.explored
              ? Object(a["g"])("", !0)
              : (Object(a["u"])(), Object(a["f"])("img", bl)),
            c.explored
              ? Object(a["g"])("", !0)
              : (Object(a["u"])(), Object(a["f"])("img", jl)),
            c.explored && "mechmaster" === c.tab
              ? (Object(a["u"])(), Object(a["f"])("img", ml))
              : Object(a["g"])("", !0),
            "mechmaster" !== c.tab
              ? (Object(a["u"])(),
                Object(a["f"])(
                  "img",
                  {
                    key: 3,
                    class: "sun ".concat(c.explored ? "explored" : ""),
                    alt: "",
                    src: gn.a,
                  },
                  null,
                  2
                ))
              : Object(a["g"])("", !0),
          ])
        );
      }),
      fl = n("ea3e"),
      gl = n.n(fl),
      hl = n("879b"),
      Ol = n.n(hl),
      vl = n("9e38"),
      Al = n.n(vl),
      wl = n("248c"),
      yl = n.n(wl),
      kl = n("c9f2"),
      Cl = n.n(kl),
      xl = n("6cc1"),
      Ml = n.n(xl),
      Sl = n("66a4"),
      El = n.n(Sl),
      Tl = n("11ca"),
      Rl = n.n(Tl),
      Il = n("0665"),
      Ll = n.n(Il),
      Pl = n("efe8"),
      Ul = n.n(Pl),
      Bl = n("5e86"),
      Dl = n.n(Bl),
      Nl = n("d5f5"),
      Fl = n.n(Nl),
      Vl = n("025b"),
      ql = n.n(Vl),
      Gl = n("c38a"),
      Hl = n.n(Gl),
      zl = n("0710"),
      Wl = n.n(zl),
      Kl = n("b21f"),
      Ql = n.n(Kl),
      Yl = n("cda2"),
      Xl = n.n(Yl),
      Jl = n("e630"),
      Zl = n.n(Jl),
      _l = n("01d4"),
      $l = n.n(_l),
      eu = n("562e"),
      tu = n.n(eu),
      nu = n("d86c"),
      au = n.n(nu),
      iu = n("da5d"),
      cu = n.n(iu),
      ru = n("ecf0"),
      su = n.n(ru),
      ou = n("a07d"),
      lu = n.n(ou),
      uu = n("8982"),
      du = n.n(uu),
      bu = n("d8d1"),
      ju = n.n(bu),
      mu = n("ff72"),
      pu = n.n(mu),
      fu = n("54fc"),
      gu = n.n(fu),
      hu = n("40fe"),
      Ou = n.n(hu),
      vu = n("2ac9"),
      Au = n.n(vu),
      wu = n("b8db"),
      yu = n.n(wu),
      ku = n("0cc6"),
      Cu = n.n(ku),
      xu = n("08f5"),
      Mu = n.n(xu),
      Su = n("9f2b"),
      Eu = n.n(Su),
      Tu = n("cb11"),
      Ru = n.n(Tu),
      Iu = n("4a60"),
      Lu = n.n(Iu),
      Pu = n("4d51"),
      Uu = n.n(Pu),
      Bu = n("6d64"),
      Du = n.n(Bu),
      Nu = n("2ba4"),
      Fu = n.n(Nu),
      Vu = n("21c7"),
      qu = n.n(Vu),
      Gu = n("4b11"),
      Hu = n.n(Gu),
      zu = n("9ac7"),
      Wu = n.n(zu),
      Ku = n("ba61"),
      Qu = n.n(Ku),
      Yu = n("26ad"),
      Xu = n.n(Yu),
      Ju =
        (gl.a,
        Ol.a,
        Al.a,
        yl.a,
        Cl.a,
        Ml.a,
        El.a,
        cu.a,
        su.a,
        Rl.a,
        Rl.a,
        Ul.a,
        Ul.a,
        Ll.a,
        Ll.a,
        Dl.a,
        Dl.a,
        Fl.a,
        Fl.a,
        ql.a,
        ql.a,
        Hl.a,
        Hl.a,
        Wl.a,
        Wl.a,
        Ql.a,
        Ql.a,
        Xl.a,
        Xl.a,
        Zl.a,
        Zl.a,
        $l.a,
        $l.a,
        tu.a,
        tu.a,
        au.a,
        au.a,
        [
          {
            id: 2,
            thumb: yu.a,
            race: Cu.a,
            image: Au.a,
            name: "Giant",
            text: "The name pretty much gave it away. Giants are huge and tall Mechas that tower over their enemies with big melee weapons, their durable body and high defensive stats makes up for their slow movement speed. Giants are super hard to take down, often leaving enemies feeling uneasy but the slow and inevitable fate of getting squash under their heavy melee weapons.",
          },
          {
            id: 3,
            thumb: Uu.a,
            race: Du.a,
            image: Lu.a,
            name: "Alien",
            text: "Nobody knows the origin of the Alien Mecha race. Aliens are mysterious Mecha that host a futuristic and scientific body. They are highly active and agile speed in combat, Aliens also specializes in using destructive weapons to surprise their enemy, to gain huge advantage in battles. No one knows where the Aliens come from, just that they are more advanced in technology, and they possess high intelligence.",
          },
          {
            id: 4,
            thumb: Eu.a,
            race: Ru.a,
            image: Mu.a,
            name: "Aerial",
            text: "When it comes to air battle, no species can come close to Aerials. Aerials are flying Mecha race that resembles the body of a giant bird, with a slim and lightweight body, they have moderate defense but possess insane speed that makes them deadly to anyone. They are the kings of the skies.",
          },
          {
            id: 1,
            thumb: du.a,
            race: ju.a,
            image: lu.a,
            name: "Legion",
            text: 'Legion is the first Mecha created by the human race, replicating the physique and appearance of the human body, it has a balanced speed and power distribution. "The threat isn\'t scary, humans are more scary", having a machine that fights for survival with human instincts, Legions have further enhanced their stats to match with other Mechas out there, and more upgrades will be coming soon.',
          },
          {
            id: 5,
            thumb: Qu.a,
            race: Xu.a,
            image: Wu.a,
            name: "Shapeshifter",
            text: '"You are your own enemy", it becomes literal when faced against a Shapeshifter. Shapeshifters are adaptive Mechas that has the ability to transform into anything, making it complicated for enemies to counter them. They are easily confused with Legions at first sight, but once they start transforming into a plane, a tank or a canon, it will be too late before the enemy realise that they are up against a Shapeshifter. Rumors has it that Shapeshifters can even transform into duplicated versions of some Mecha species, and with their high attack and defence capability, Shapeshifters are a deadly force that instills fear.',
          },
          {
            id: 6,
            thumb: qu.a,
            race: Hu.a,
            image: Fu.a,
            name: "Relic",
            text: "Relics are unique to other Mechas due to their lack of joints in the body, which allows them to dislocate their body parts and easily replace them. Relics' size comes head to head in rival with Giants, but they have large internal energy storage. They are flexible in combat, having the ability to excel in both close and far range, due to their own very unique weapon.",
          },
          {
            id: 7,
            thumb: gu.a,
            race: Ou.a,
            image: pu.a,
            name: "Ravager",
            text: "Ravagers are Mecha built for war, they take the shape and physique of beasts. Ravagers specializes in using their claws and fangs that are absent in any other species, to tear apart and dismantle enemies. Combined that with their agile speed, and a ferocious nature, Ravagers are a force to be reckon with.",
          },
        ]),
      Zu = {
        name: "Game",
        props: { view: Boolean },
        data: function () {
          return {
            explored: !1,
            tab: "mecha",
            pilot: "chiyoko",
            characters: Ju,
            selectedCharacter: Ju[3],
          };
        },
        computed: {
          pilotName: function () {
            switch (this.pilot) {
              case 1:
                return "Chiyoko Mabuchi";
              case 2:
                return "Rika Mikamura";
              case 3:
                return "Yoko Kinoshita";
              default:
                return "";
            }
          },
        },
        watch: {
          view: function (e) {
            e && (this.explored = !1);
          },
        },
        methods: {
          prevPilot: function () {
            1 === this.pilot ? (this.pilot = 3) : this.pilot--;
          },
          nextPilot: function () {
            3 === this.pilot ? (this.pilot = 1) : this.pilot++;
          },
        },
      };
    n("5b9e");
    (Zu.render = pl), (Zu.__scopeId = "data-v-6cd2c2e3");
    var _u = Zu,
      $u = Object(a["N"])("data-v-53f75528");
    Object(a["x"])("data-v-53f75528");
    var ed = { class: "delimiter" },
      td = { key: 0 },
      nd = { key: 1, class: "dot" },
      ad = { key: 0 },
      id = { key: 1, class: "dot" },
      cd = { class: "delimiter-item_step" },
      rd = Object(a["j"])("div", { class: "delimiter-background" }, null, -1);
    Object(a["v"])();
    var sd = $u(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("div", ed, [
            (Object(a["u"])(!0),
            Object(a["f"])(
              a["a"],
              null,
              Object(a["B"])(n.phase, function (e) {
                return (
                  Object(a["u"])(),
                  Object(a["f"])(
                    "div",
                    {
                      key: "phase_".concat(e),
                      class: "delimiter-item ".concat(
                        e === n.phase ? "last-item" : ""
                      ),
                    },
                    [
                      Object(a["j"])(
                        "div",
                        {
                          class: "delimiter-item_tag",
                          onClick: function (t) {
                            return r.goTo(e);
                          },
                        },
                        [
                          1 === e || e === n.phase
                            ? (Object(a["u"])(),
                              Object(a["f"])(
                                "div",
                                {
                                  key: 0,
                                  class: "delimiter-item_tag--square ".concat(
                                    n.currentPhase === e
                                      ? "background"
                                      : "small"
                                  ),
                                },
                                [
                                  n.currentPhase === e
                                    ? (Object(a["u"])(),
                                      Object(a["f"])(
                                        "span",
                                        td,
                                        Object(a["F"])(n.currentPhase),
                                        1
                                      ))
                                    : (Object(a["u"])(),
                                      Object(a["f"])("span", nd)),
                                ],
                                2
                              ))
                            : (Object(a["u"])(),
                              Object(a["f"])(
                                "div",
                                {
                                  key: 1,
                                  class: "delimiter-item_tag--round ".concat(
                                    n.currentPhase === e
                                      ? "background"
                                      : "small"
                                  ),
                                },
                                [
                                  n.currentPhase === e
                                    ? (Object(a["u"])(),
                                      Object(a["f"])(
                                        "span",
                                        ad,
                                        Object(a["F"])(n.currentPhase),
                                        1
                                      ))
                                    : (Object(a["u"])(),
                                      Object(a["f"])("span", id)),
                                ],
                                2
                              )),
                        ],
                        8,
                        ["onClick"]
                      ),
                      Object(a["j"])("div", cd, [
                        rd,
                        e === n.currentPhase
                          ? (Object(a["u"])(!0),
                            Object(a["f"])(
                              a["a"],
                              { key: 0 },
                              Object(a["B"])(n.step, function (e) {
                                return (
                                  Object(a["u"])(),
                                  Object(a["f"])(
                                    "div",
                                    {
                                      key: "step".concat(e),
                                      class: "".concat(
                                        e <= n.currentStep ? "step" : ""
                                      ),
                                    },
                                    null,
                                    2
                                  )
                                );
                              }),
                              128
                            ))
                          : Object(a["g"])("", !0),
                      ]),
                    ],
                    2
                  )
                );
              }),
              128
            )),
          ])
        );
      }),
      od = {
        name: "Delimiter",
        props: {
          phase: Number,
          step: Number,
          currentPhase: Number,
          currentStep: Number,
        },
        methods: {
          goTo: function (e) {
            this.$emit("updatePhase", e);
          },
        },
      };
    n("be97");
    (od.render = sd), (od.__scopeId = "data-v-53f75528");
    var ld = od,
      ud = n("b5b6"),
      dd = n.n(ud),
      bd = n("6e64"),
      jd = n.n(bd),
      md = n("1b60"),
      pd = n.n(md),
      fd = Object(a["N"])("data-v-0d2b9cda");
    Object(a["x"])("data-v-0d2b9cda");
    var gd = { id: "beta-testing-banner" },
      hd = Object(a["j"])("img", { class: "legend-icon", src: dd.a }, null, -1),
      Od = { key: 0, class: "count-down-container" },
      vd = { class: "count-down-box" },
      Ad = { class: "timer" },
      wd = Object(a["j"])("div", { class: "time-type" }, "days", -1),
      yd = { class: "timer" },
      kd = Object(a["j"])("div", { class: "time-type" }, "hours", -1),
      Cd = { class: "timer" },
      xd = Object(a["j"])("div", { class: "time-type" }, "minutes", -1),
      Md = { class: "timer" },
      Sd = Object(a["j"])("div", { class: "time-type" }, "seconds", -1);
    Object(a["v"])();
    var Ed = fd(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("section", gd, [
            hd,
            n.deadline
              ? (Object(a["u"])(),
                Object(a["f"])("div", Od, [
                  Object(a["j"])("div", vd, Object(a["F"])(n.timeTitle), 1),
                  Object(a["j"])("div", null, [
                    Object(a["j"])("div", Ad, [
                      Object(a["j"])("span", null, Object(a["F"])(r.day), 1),
                      wd,
                    ]),
                    Object(a["j"])("div", yd, [
                      Object(a["j"])("span", null, Object(a["F"])(r.hour), 1),
                      kd,
                    ]),
                    Object(a["j"])("div", Cd, [
                      Object(a["j"])("span", null, Object(a["F"])(r.minute), 1),
                      xd,
                    ]),
                    Object(a["j"])("div", Md, [
                      Object(a["j"])("span", null, Object(a["F"])(r.second), 1),
                      Sd,
                    ]),
                  ]),
                ]))
              : Object(a["g"])("", !0),
            n.deadline
              ? (Object(a["u"])(),
                Object(a["f"])("img", {
                  key: 1,
                  class: "join-now-btn",
                  src: jd.a,
                  onClick:
                    t[1] ||
                    (t[1] = function () {
                      return r.goToPage && r.goToPage.apply(r, arguments);
                    }),
                }))
              : (Object(a["u"])(),
                Object(a["f"])("img", {
                  key: 2,
                  class: "join-now-btn",
                  src: pd.a,
                  onClick:
                    t[2] ||
                    (t[2] = function () {
                      return r.goToPage && r.goToPage.apply(r, arguments);
                    }),
                })),
          ])
        );
      }),
      Td =
        (n("b65f"),
        {
          name: "BetaTestingBanner",
          props: { deadline: Object, timeTitle: { type: String, default: "" } },
          data: function () {
            return { now: new Date(), interval: null };
          },
          created: function () {
            var e = this;
            this.interval = setInterval(function () {
              e.now = new Date();
            }, 1e3);
          },
          methods: {
            twoDigits: function (e) {
              return e < 10 ? "0" + e : e;
            },
            goToPage: function () {
              window
                .open(
                  "https://app.mechmaster.io/#/beta-testing-event",
                  "_blank"
                )
                .focus();
            },
          },
          computed: {
            diff: function () {
              return this.deadline <= this.now
                ? 0
                : Math.trunc((this.deadline - this.now) / 1e3);
            },
            second: function () {
              return this.twoDigits(Math.trunc(this.diff) % 60);
            },
            minute: function () {
              return this.twoDigits(Math.trunc(this.diff / 60) % 60);
            },
            hour: function () {
              return this.twoDigits(Math.trunc(this.diff / 60 / 60) % 24);
            },
            day: function () {
              return this.twoDigits(Math.trunc(this.diff / 60 / 60 / 24));
            },
          },
          mounted: function () {
            setTimeout(function () {
              var e,
                t =
                  null ===
                    (e = document.getElementById("beta-testing-banner")) ||
                  void 0 === e
                    ? void 0
                    : e.style;
              t && (t.width = "285px");
            }, 500);
          },
          beforeUnmount: function () {
            clearInterval(this.interval);
          },
        });
    n("032b");
    (Td.render = Ed), (Td.__scopeId = "data-v-0d2b9cda");
    var Rd = Td,
      Id = n("5a0c"),
      Ld = n.n(Id),
      Pd = {
        name: "Content",
        components: {
          Delimiter: ld,
          Game: _u,
          Exploration: ks,
          Footer: Vc,
          Roadmap: dc,
          Team: ii,
          Partners: ea,
          VirtualReality: Bt,
          AugmentedReality: Ke,
          Moon: G,
          Banner: S,
          BetaTestingBanner: Rd,
        },
        props: {},
        data: function () {
          var e = Ld()("2022-03-27T12:00:00.000Z"),
            t = Ld()("2022-04-13T12:00:00.000Z"),
            n = Ld()(),
            a = e,
            i = "Time remain to Register:";
          return (
            n.isAfter(e) && n.isBefore(t)
              ? ((a = t), (i = "Time remaining:"))
              : n.isAfter(t) && (a = null),
            {
              scroll: -1,
              scrolling: !1,
              loaded: !1,
              phase: 1,
              currentStep: 0,
              countDownDate: a,
              timeTitle: i,
            }
          );
        },
        watch: {
          scroll: function (e) {
            (this.phase = 9 === e ? 9 : e + 1), (this.currentStep = 0);
          },
        },
        computed: {
          computedStyle: function () {
            var e = { transition: "all 700ms" },
              t = 0;

            return (
              this.scroll > -1 && (t = -window.innerHeight * this.scroll),
              Object.assign(e, {
                transform: "translate3D(0, ".concat(t, "px, 0)"),
              }),
              e
            );
          },
          displayImage: function () {
            return !(0 === this.scroll && !this.loaded);
          },
          step: function () {
            switch (this.phase) {
              case 2:
              case 4:
                return 4;
              default:
                return 0;
            }
          },
        },
        mounted: function () {
          var e = this;
          window.innerWidth > 1024 &&
            document.addEventListener("wheel", function (t) {
              console.log(t.wheelDelta);
              if (!e.scrolling) {
                var n;
                if (
                  (t.wheelDelta
                    ? (n = t.wheelDelta / 60)
                    : t.detail && (n = -t.detail / 2),
                  n < 0)
                ) {
                  if (e.scroll < 10) {
                    e.scroll++;
                    var a = document.getElementById("header");
                    // a && (a.style.display = "none");
                  }
                } else if (e.scroll > 0) {
                  e.scroll--;
                  var i = document.getElementById("header");
                  // i && (i.style.display = "block");
                }
                0 === e.scroll && (e.loaded = !0),
                  (e.scrolling = !0),
                  setTimeout(function () {
                    e.scrolling = !1;
                  }, 1000);
              }
            });
        },
        methods: {
          changePhase: function (e) {
            this.scroll = e - 1;
          },
          changeStep: function (e) {
            this.currentStep = e;
          },
        },
      };
    n("004d");
    (Pd.render = l), (Pd.__scopeId = "data-v-e2963e10");
    var Ud = Pd,
      Bd = n("c8b8"),
      Dd = n.n(Bd),
      Nd = n("fa19"),
      Fd = n.n(Nd),
      Vd = n("5ca8"),
      qd = n.n(Vd),
      Gd = n("b01a"),
      Hd = n.n(Gd),
      zd = Object(a["N"])("data-v-4b9c09fb");
    Object(a["x"])("data-v-4b9c09fb");
    var Wd = { id: "header" },
      Kd = { class: "header" },
      Qd = Object(a["j"])("img", { src: Dd.a, alt: "" }, null, -1),
      Yd = Object(a["j"])(
        "div",
        { class: "logo" },
        [
          Object(a["j"])("a", { href: "#" }, [
            Object(a["j"])("img", { alt: "", src: Fd.a }),
          ]),
        ],
        -1
      ),
      Xd = { class: "header__nav animate", ref: "headerNav" },
      Jd = { href: "#moon" },
      Zd = { href: "#", target: "_blank" },
      _d = { href: "#", target: "_blank" },
      $d = { href: "#", target: "_blank" },
      eb = Object(a["j"])(
        "img",
        { alt: "", class: "desktop", src: qd.a },
        null,
        -1
      ),
      tb = Object(a["j"])(
        "img",
        { class: "mobile header-bottom", alt: "", src: Hd.a },
        null,
        -1
      );
    Object(a["v"])();
    var nb = zd(function (e, t, n, i, c, r) {
      return (
        Object(a["u"])(),
        Object(a["f"])("header", Wd, [
          Object(a["j"])("div", Kd, [
            Object(a["j"])(
              "div",
              {
                ref: "hamburger",
                class: "hambuger",
                onClick:
                  t[1] ||
                  (t[1] = function () {
                    return r.onToggle && r.onToggle.apply(r, arguments);
                  }),
              },
              [Qd],
              512
            ),
            Yd,
            Object(a["j"])(
              "nav",
              Xd,
              [
                Object(a["j"])("ul", null, [
                  Object(a["j"])("li", null, [
                    Object(a["j"])("a", Jd, Object(a["F"])(e.$t("market")), 1),
                  ]),
                  Object(a["j"])("li", null, [
                    Object(a["j"])(
                      "a",
                      Zd,
                      Object(a["F"])(e.$t("whitepaper")),
                      1
                    ),
                  ]),
                  Object(a["j"])("li", null, [
                    Object(a["j"])("a", _d, Object(a["F"])(e.$t("staking")), 1),
                  ]),
                  Object(a["j"])("li", null, [
                    Object(a["j"])(
                      "a",
                      $d,
                      Object(a["F"])(e.$t("moonrace")),
                      1
                    ),
                  ]),
                ]),
              ],
              512
            ),
            Object(a["j"])(
              "div",
              {
                class: "header-btn",
                onClick:
                  t[2] ||
                  (t[2] = function () {
                    return r.buy && r.buy.apply(r, arguments);
                  }),
              },
              [eb]
            ),
            tb,
          ]),
        ])
      );
    });
    n("159b");
    function ab() {
      var e = this.$refs.headerNav,
        t = this.$refs.hamburger;
      e.classList.contains("show")
        ? (e.classList.remove("show"),
          e.classList.add("hide"),
          t.classList.remove("show"),
          (document.documentElement.style.overflow = ""))
        : (e.classList.add("show"),
          e.classList.remove("hide"),
          t.classList.add("show"),
          (document.documentElement.style.overflow = "hidden"));
    }
    var ib = {
      name: "Header",
      props: { msg: String },
      mounted: function () {
        this.$nextTick(function () {
          setTimeout(function () {
            var e = document.querySelectorAll("img.animated");
            e.forEach(function (e) {
              e.classList.remove("animated");
            });
          }, 1e3);
        });
      },
      methods: {
        onToggle: ab,
        scrollTo: function (e) {
          var t = document.getElementById(e);
          t.scrollIntoView({ behavior: "smooth" }),
            window.innerWidth <= 600 && this.onToggle();
        },
        scrollTop: function () {
          document.documentElement.scroll({ top: 0, behavior: "smooth" });
        },
        buy: function () {
          window.open(
            "https://pancakeswap.finance/swap?outputCurrency=0xc7b7844494c516b840a7a4575ff3e60ff0f056a9&inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
          );
        },
      },
    };
    n("0a0e"), n("def1");
    (ib.render = nb), (ib.__scopeId = "data-v-4b9c09fb");
    var cb = ib,
      rb = {
        name: "Home",
        components: { Content: Ud, Header: cb },
        data: function () {
          return { phase: 1, step: 0, currentStep: 0 };
        },
      };
    (rb.render = s), (rb.__scopeId = "data-v-00b4f2ba");
    var sb = rb,
      ob = n("3bd0"),
      lb = n.n(ob),
      ub = n("fba3"),
      db = n.n(ub),
      bb = Object(a["N"])("data-v-101ea754");
    Object(a["x"])("data-v-101ea754");
    var jb = { id: "marketplace" },
      mb = Object(a["j"])("img", { class: "coming", src: lb.a }, null, -1),
      pb = Object(a["j"])("img", { class: "ship", src: db.a }, null, -1);
    Object(a["v"])();
    var fb = bb(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("div", jb, [
            Object(a["j"])(
              "div",
              {
                class: "btn-back",
                onClick:
                  t[1] ||
                  (t[1] = function (e) {
                    return r.goBack();
                  }),
              },
              " Back "
            ),
            mb,
            pb,
          ])
        );
      }),
      gb = {
        name: "Marketplace",
        mounted: function () {
          var e = document.getElementById("marketplace"),
            t = e.querySelector(".ship");
          e.addEventListener("mousemove", function (e) {
            var n = e.clientX,
              a = e.clientY;
            t.style.transform = "translate("
              .concat((-n / window.innerWidth) * 4, "%, ")
              .concat((-a / window.innerHeight) * 4, "%)");
          });
        },
        methods: {
          goBack: function () {
            window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push("/");
          },
        },
      };
    n("0258");
    (gb.render = fb), (gb.__scopeId = "data-v-101ea754");
    var hb = gb,
      Ob = n("34c3"),
      vb = n.n(Ob),
      Ab = n("1d9d"),
      wb = n.n(Ab),
      yb = n("ade6"),
      kb = n.n(yb),
      Cb = n("6e32"),
      xb = n.n(Cb),
      Mb = n("d41a"),
      Sb = n.n(Mb),
      Eb = n("9655"),
      Tb = n.n(Eb),
      Rb = n("77eb"),
      Ib = n.n(Rb),
      Lb = n("bc4e"),
      Pb = n.n(Lb),
      Ub = n("1bcc"),
      Bb = n.n(Ub),
      Db = n("735c"),
      Nb = n.n(Db),
      Fb = n("2d02"),
      Vb = n.n(Fb),
      qb = n("4e72"),
      Gb = n.n(qb),
      Hb = n("aaa1"),
      zb = n.n(Hb),
      Wb = n("71d0"),
      Kb = n.n(Wb),
      Qb = n("7484"),
      Yb = n.n(Qb),
      Xb = n("5c16"),
      Jb = n.n(Xb),
      Zb = Object(a["N"])("data-v-99a3deac");
    Object(a["x"])("data-v-99a3deac");
    var _b = { class: "event-detail_main" },
      $b = { class: "box" },
      ej = Object(a["j"])(
        "div",
        { class: "box-title" },
        "GAMING NFTS PRE-SALE",
        -1
      ),
      tj = { class: "row" },
      nj = Object(a["j"])("div", { class: "status ended" }, "Ended", -1),
      aj = { class: "box-content row" },
      ij = Object(a["j"])(
        "div",
        { class: "detail", style: { "padding-right": "8px" } },
        [
          Object(a["j"])(
            "p",
            null,
            "All mystery boxes on GameFi were sold out. Box opening time will be announced soon."
          ),
          Object(a["j"])(
            "a",
            {
              class: "btn btn-cyan",
              style: { "white-space": "nowrap", width: "auto" },
              href: "https://hub.gamefi.org/#/mystery-boxes",
              target: "_blank",
            },
            [
              Object(a["i"])(" View details "),
              Object(a["j"])("img", {
                style: { "margin-left": "8px" },
                alt: "",
                src: wb.a,
              }),
            ]
          ),
        ],
        -1
      ),
      cj = Object(a["j"])(
        "img",
        { style: { height: "160px" }, alt: "", src: kb.a },
        null,
        -1
      ),
      rj = { class: "box" },
      sj = Object(a["j"])("div", { class: "box-title" }, "AIRDROP ROUND 2", -1),
      oj = { class: "row" },
      lj = { class: "status ended" },
      uj = { class: "box-content row" },
      dj = { class: "detail" },
      bj = Object(a["j"])(
        "p",
        null,
        "A chance to get grasp $4,500 $MECH Tokens at IDO price",
        -1
      ),
      jj = Object(a["j"])(
        "img",
        { style: { height: "160px" }, alt: "", src: xb.a },
        null,
        -1
      ),
      mj = { class: "box" },
      pj = Object(a["j"])("div", { class: "box-title" }, "AIRDROP ROUND 1", -1),
      fj = { class: "row" },
      gj = Object(a["j"])("div", { class: "status ended" }, "ended", -1),
      hj = { class: "box-content row" },
      Oj = { class: "detail" },
      vj = Object(a["j"])(
        "p",
        null,
        "The top 1000 users ranked on the landing page will get the chance to receive an airdrop reward of 300 $MECH.",
        -1
      ),
      Aj = Object(a["j"])(
        "img",
        { style: { height: "160px" }, alt: "", src: xb.a },
        null,
        -1
      ),
      wj = Object(a["j"])("img", { alt: "", src: Sb.a }, null, -1),
      yj = { key: 0, class: "account" },
      kj = { class: "account-main" },
      Cj = { class: "account-header" },
      xj = Object(a["j"])("img", { class: "bg", alt: "", src: Tb.a }, null, -1),
      Mj = Object(a["j"])("span", null, "User Profile", -1),
      Sj = Object(a["j"])("div", { class: "spacer" }, null, -1),
      Ej = Object(a["j"])("img", { alt: "", src: Ib.a }, null, -1),
      Tj = Object(a["i"])(" Log out "),
      Rj = { class: "account-content" },
      Ij = { class: "account-info" },
      Lj = Object(a["j"])("div", { class: "label" }, "Username", -1),
      Pj = { class: "name" },
      Uj = Object(a["j"])(
        "div",
        { class: "label" },
        [
          Object(a["i"])(" Email "),
          Object(a["j"])("span", { style: { color: "#3FD845" } }, [
            Object(a["j"])("img", { alt: "", src: Bb.a }),
            Object(a["i"])(" Verified "),
          ]),
        ],
        -1
      ),
      Bj = { class: "email" },
      Dj = { class: "account-wallet" },
      Nj = Object(a["j"])("div", { class: "title" }, "Wallet", -1),
      Fj = Object(a["j"])(
        "div",
        { class: "info" },
        " An BSC digital wallet is required to keep your in-game items in secure manner as ensured by the blockchain. We recommend using MetaMask browser extention. ",
        -1
      ),
      Vj = { class: "wallet" },
      qj = { key: 0, class: "metamask" },
      Gj = Object(a["j"])(
        "div",
        { class: "info" },
        " BSC digital wallet connected to this account: ",
        -1
      ),
      Hj = { class: "wallet-info" },
      zj = Object(a["j"])("img", { alt: "", src: Nb.a }, null, -1),
      Wj = { key: 0, class: "info", style: { "white-space": "normal" } },
      Kj = Object(a["i"])(
        " Your current address is different to your Metamask current address. Would you like to "
      ),
      Qj = Object(a["i"])(" it? "),
      Yj = Object(a["j"])("img", { alt: "", src: Gb.a }, null, -1),
      Xj = { class: "metamask" },
      Jj = Object(a["j"])(
        "div",
        { class: "info" },
        "Please unlock your MetaMask wallet and allow the connection:",
        -1
      ),
      Zj = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["j"])(
            "a",
            { href: "https://metamask.io/", target: "_blank" },
            "Download"
          ),
          Object(a["i"])(" the metamask extension. "),
        ],
        -1
      ),
      _j = Object(a["j"])(
        "div",
        { class: "account-note" },
        " *Mech Master team will never ask you for your account password, private key or a PIN code! Please stay SAFE! ",
        -1
      ),
      $j = { key: 1, class: "overlay" },
      em = { key: 2, class: "loading" },
      tm = Object(a["j"])("div", { class: "loader" }, null, -1),
      nm = Object(a["j"])("span", { class: "loader-content" }, "Loading", -1),
      am = { class: "calendar-wrapper" },
      im = Object(a["j"])("img", { alt: "", src: zb.a }, null, -1),
      cm = { key: 0, class: "calendar-list" },
      rm = { class: "calendar-list_header" },
      sm = Object(a["j"])("span", null, "List Event", -1),
      om = Object(a["j"])("img", { alt: "", src: Pb.a }, null, -1),
      lm = { class: "calendar-list_content" },
      um = { class: "calendar-list_content--header" },
      dm = { class: "calendar-list_content--main" },
      bm = { key: 0, class: "item-content" },
      jm = { key: 0 },
      mm = Object(a["j"])("img", { alt: "", src: Kb.a }, null, -1),
      pm = Object(a["i"])(" There is no event "),
      fm = { key: 0, class: "winner" },
      gm = { class: "winner-main" },
      hm = { class: "winner-header" },
      Om = Object(a["j"])("img", { class: "bg", alt: "", src: Tb.a }, null, -1),
      vm = Object(a["j"])("div", { class: "spacer" }, null, -1),
      Am = { class: "winner-show" },
      wm = { key: 0, class: "winner-content" },
      ym = { class: "winner-info" },
      km = { class: "winner-info" },
      Cm = { key: 0, class: "winner-info" },
      xm = {
        key: 1,
        class: "winner-info",
        style: { "list-style-type": "none" },
      },
      Mm = Object(a["j"])(
        "div",
        { style: { color: "#FF3838" } },
        "Please connect your wallet with metamask to receive the prize.",
        -1
      ),
      Sm = { class: "winner-info" },
      Em = Object(a["i"])(
        " Please join telegram group of winners for more details: "
      ),
      Tm = { class: "note" },
      Rm = Object(a["i"])(
        "Note: If you cant open the group link, please click "
      ),
      Im = Object(a["i"])(" icon to copy the URL."),
      Lm = { key: 1, class: "winner-content" },
      Pm = Object(a["j"])("br", null, null, -1),
      Um = Object(a["i"])(
        " We really appreciate your enthusiasm and support for our events. Wish you the best of luck the next time. "
      ),
      Bm = { class: "winner-btn-group" },
      Dm = {
        key: 0,
        class: "btn btn-cyan",
        href: "https://redkite.polkafoundry.com/#/buy-token/90",
        target: "_blank",
      },
      Nm = Object(a["i"])(" Redkite Guaranteed Pool "),
      Fm = Object(a["j"])(
        "img",
        { style: { "margin-left": "8px" }, alt: "", src: wb.a },
        null,
        -1
      ),
      Vm = {
        key: 1,
        class: "btn btn-cyan",
        href: "https://redkite.polkafoundry.com/#/buy-token/91",
        target: "_blank",
      },
      qm = Object(a["i"])(" Redkite FCFS Pool "),
      Gm = Object(a["j"])(
        "img",
        { style: { "margin-left": "8px" }, alt: "", src: wb.a },
        null,
        -1
      ),
      Hm = { class: "winner-content" },
      zm = Object(a["j"])(
        "div",
        { class: "list-header" },
        [
          Object(a["j"])("div", { class: "list-header_item" }, "No."),
          Object(a["j"])("div", { class: "list-header_item" }, "Address"),
          Object(a["j"])("div", { class: "list-header_item" }, "Reward"),
        ],
        -1
      ),
      Wm = { class: "list" },
      Km = { class: "number" },
      Qm = { class: "email" },
      Ym = { class: "wallet" },
      Xm = { class: "pagination" },
      Jm = Object(a["j"])("div", { class: "pagination-title" }, "Page:", -1),
      Zm = Object(a["j"])(
        "img",
        { style: { transform: "rotate(180deg)" }, alt: "", src: Yb.a },
        null,
        -1
      ),
      _m = Object(a["j"])("img", { alt: "", src: Jb.a }, null, -1),
      $m = { class: "pagination-item" },
      ep = Object(a["j"])(
        "img",
        { style: { transform: "rotate(180deg)" }, alt: "", src: Jb.a },
        null,
        -1
      ),
      tp = Object(a["j"])("img", { alt: "", src: Yb.a }, null, -1),
      np = { class: "pagination-title" };
    Object(a["v"])();
    var ap = Zb(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("accordion-transition"),
          o = Object(a["D"])("login-modal"),
          l = Object(a["D"])("airdrop"),
          u = Object(a["D"])("border-corner");
        return (
          Object(a["u"])(),
          Object(a["f"])(
            "div",
            {
              class: "event-detail",
              style: r.loading && { "pointer-events": "none" },
            },
            [
              Object(a["L"])(
                Object(a["j"])(
                  "div",
                  _b,
                  [
                    Object(a["j"])("div", $b, [
                      Object(a["j"])(
                        "div",
                        {
                          class: "box-header",
                          onClick:
                            t[1] ||
                            (t[1] = function (e) {
                              return (c.show.airdrop = !c.show.airdrop);
                            }),
                        },
                        [
                          ej,
                          Object(a["j"])("div", tj, [
                            nj,
                            Object(a["j"])(
                              "img",
                              {
                                class: "".concat(
                                  c.show.airdrop ? "rotate" : ""
                                ),
                                alt: "",
                                src: vb.a,
                              },
                              null,
                              2
                            ),
                          ]),
                        ]
                      ),
                      Object(a["j"])(
                        s,
                        { name: "transition" },
                        {
                          default: Zb(function () {
                            return [
                              Object(a["L"])(
                                Object(a["j"])("div", aj, [ij, cj], 512),
                                [[a["J"], c.show.airdrop]]
                              ),
                            ];
                          }),
                          _: 1,
                        }
                      ),
                    ]),
                    Object(a["j"])("div", rj, [
                      Object(a["j"])(
                        "div",
                        {
                          class: "box-header",
                          onClick:
                            t[2] ||
                            (t[2] = function (e) {
                              return (c.show.airdrop = !c.show.airdrop);
                            }),
                        },
                        [
                          sj,
                          Object(a["j"])("div", oj, [
                            Object(a["j"])(
                              "div",
                              lj,
                              Object(a["F"])(c.events[2].status),
                              1
                            ),
                            Object(a["j"])(
                              "img",
                              {
                                class: "".concat(
                                  c.show.airdrop ? "rotate" : ""
                                ),
                                alt: "",
                                src: vb.a,
                              },
                              null,
                              2
                            ),
                          ]),
                        ]
                      ),
                      Object(a["j"])(
                        s,
                        { name: "transition" },
                        {
                          default: Zb(function () {
                            return [
                              Object(a["L"])(
                                Object(a["j"])(
                                  "div",
                                  uj,
                                  [
                                    Object(a["j"])("div", dj, [
                                      bj,
                                      Object(a["j"])(
                                        "div",
                                        {
                                          class: "btn btn-cyan",
                                          onClick:
                                            t[3] ||
                                            (t[3] = function (e) {
                                              return r.openEvent(2);
                                            }),
                                        },
                                        "View Winners"
                                      ),
                                    ]),
                                    jj,
                                  ],
                                  512
                                ),
                                [[a["J"], c.show.airdrop]]
                              ),
                            ];
                          }),
                          _: 1,
                        }
                      ),
                    ]),
                    Object(a["j"])("div", mj, [
                      Object(a["j"])(
                        "div",
                        {
                          class: "box-header",
                          onClick:
                            t[4] ||
                            (t[4] = function (e) {
                              return (c.show.airdrop = !c.show.airdrop);
                            }),
                        },
                        [
                          pj,
                          Object(a["j"])("div", fj, [
                            gj,
                            Object(a["j"])(
                              "img",
                              {
                                class: "".concat(
                                  c.show.airdrop ? "rotate" : ""
                                ),
                                alt: "",
                                src: vb.a,
                              },
                              null,
                              2
                            ),
                          ]),
                        ]
                      ),
                      Object(a["j"])(
                        s,
                        { name: "transition" },
                        {
                          default: Zb(function () {
                            return [
                              Object(a["L"])(
                                Object(a["j"])(
                                  "div",
                                  hj,
                                  [
                                    Object(a["j"])("div", Oj, [
                                      vj,
                                      Object(a["j"])(
                                        "div",
                                        {
                                          class: "btn btn-cyan",
                                          onClick:
                                            t[5] ||
                                            (t[5] = function (e) {
                                              return r.openEvent(1);
                                            }),
                                        },
                                        "View Winners"
                                      ),
                                    ]),
                                    Aj,
                                  ],
                                  512
                                ),
                                [[a["J"], c.show.airdrop]]
                              ),
                            ];
                          }),
                          _: 1,
                        }
                      ),
                    ]),
                  ],
                  512
                ),
                [[a["J"], !c.show.main]]
              ),
              Object(a["L"])(
                Object(a["j"])(
                  o,
                  {
                    id: "login-modal",
                    modelValue: c.show.login,
                    "onUpdate:modelValue":
                      t[6] ||
                      (t[6] = function (e) {
                        return (c.show.login = e);
                      }),
                    class: "shake",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                [[a["J"], c.show.login]]
              ),
              r.isGuest
                ? Object(a["g"])("", !0)
                : (Object(a["u"])(),
                  Object(a["f"])(
                    "div",
                    {
                      key: 0,
                      onClick:
                        t[7] ||
                        (t[7] = function (e) {
                          return r.openDialog("account");
                        }),
                      class: "user-info",
                    },
                    [
                      wj,
                      Object(a["j"])(
                        "span",
                        null,
                        Object(a["F"])(r.user.username || r.user.email),
                        1
                      ),
                    ]
                  )),
              Object(a["j"])(
                l,
                {
                  modelValue: c.show.main,
                  "onUpdate:modelValue":
                    t[8] ||
                    (t[8] = function (e) {
                      return (c.show.main = e);
                    }),
                  event: c.event,
                },
                null,
                8,
                ["modelValue", "event"]
              ),
              Object(a["j"])(
                a["c"],
                { name: "fade" },
                {
                  default: Zb(function () {
                    return [
                      c.show.account
                        ? (Object(a["u"])(),
                          Object(a["f"])("div", yj, [
                            Object(a["j"])(
                              u,
                              { "class-name": "cyan" },
                              {
                                default: Zb(function () {
                                  return [
                                    Object(a["j"])("div", kj, [
                                      Object(a["j"])("div", Cj, [
                                        xj,
                                        Mj,
                                        Sj,
                                        Object(a["j"])(
                                          "div",
                                          {
                                            class: "btn-logout",
                                            onClick:
                                              t[9] ||
                                              (t[9] = function () {
                                                return (
                                                  r.logout &&
                                                  r.logout.apply(r, arguments)
                                                );
                                              }),
                                          },
                                          [Ej, Tj]
                                        ),
                                        Object(a["j"])("img", {
                                          onClick:
                                            t[10] ||
                                            (t[10] = function (e) {
                                              return (c.show.account = !1);
                                            }),
                                          alt: "",
                                          src: Pb.a,
                                        }),
                                      ]),
                                      Object(a["j"])("div", Rj, [
                                        Object(a["j"])("div", Ij, [
                                          Lj,
                                          Object(a["j"])(
                                            "div",
                                            Pj,
                                            Object(a["F"])(
                                              r.user.username ||
                                                r.user.ref_code ||
                                                "#12dsad21e"
                                            ),
                                            1
                                          ),
                                          Uj,
                                          Object(a["j"])(
                                            "div",
                                            Bj,
                                            Object(a["F"])(
                                              r.user.email ||
                                                "haong.l2@acauic.asd"
                                            ),
                                            1
                                          ),
                                        ]),
                                        Object(a["j"])("div", Dj, [
                                          Nj,
                                          Fj,
                                          Object(a["j"])("div", Vj, [
                                            r.user && r.user.address
                                              ? (Object(a["u"])(),
                                                Object(a["f"])("div", qj, [
                                                  Gj,
                                                  Object(a["j"])("div", Hj, [
                                                    zj,
                                                    Object(a["j"])(
                                                      "span",
                                                      null,
                                                      Object(a["F"])(
                                                        r.compressAddress(
                                                          r.user.address
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Object(a["j"])("img", {
                                                      onClick:
                                                        t[11] ||
                                                        (t[11] = function (e) {
                                                          return r.copy(
                                                            r.user.address
                                                          );
                                                        }),
                                                      alt: "",
                                                      src: Vb.a,
                                                    }),
                                                  ]),
                                                  c.address &&
                                                  c.address !== r.user.address
                                                    ? (Object(a["u"])(),
                                                      Object(a["f"])(
                                                        "div",
                                                        Wj,
                                                        [
                                                          Kj,
                                                          Object(a["j"])(
                                                            "a",
                                                            {
                                                              onClick:
                                                                t[12] ||
                                                                (t[12] =
                                                                  function () {
                                                                    return (
                                                                      r.connectWallet &&
                                                                      r.connectWallet.apply(
                                                                        r,
                                                                        arguments
                                                                      )
                                                                    );
                                                                  }),
                                                              style: {
                                                                cursor:
                                                                  "pointer",
                                                              },
                                                            },
                                                            "change"
                                                          ),
                                                          Qj,
                                                        ]
                                                      ))
                                                    : Object(a["g"])("", !0),
                                                ]))
                                              : (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 1 },
                                                  [
                                                    Yj,
                                                    Object(a["j"])("div", Xj, [
                                                      Jj,
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick:
                                                            t[13] ||
                                                            (t[13] =
                                                              function () {
                                                                return (
                                                                  r.connectWallet &&
                                                                  r.connectWallet.apply(
                                                                    r,
                                                                    arguments
                                                                  )
                                                                );
                                                              }),
                                                        },
                                                        "Connect"
                                                      ),
                                                      Zj,
                                                    ]),
                                                  ],
                                                  64
                                                )),
                                          ]),
                                        ]),
                                      ]),
                                      _j,
                                    ]),
                                  ];
                                }),
                                _: 1,
                              }
                            ),
                          ]))
                        : Object(a["g"])("", !0),
                    ];
                  }),
                  _: 1,
                }
              ),
              c.show.account || c.show.prize || c.show.winner
                ? (Object(a["u"])(), Object(a["f"])("div", $j))
                : Object(a["g"])("", !0),
              r.loading
                ? (Object(a["u"])(), Object(a["f"])("div", em, [tm, nm]))
                : Object(a["g"])("", !0),
              Object(a["j"])("div", am, [
                Object(a["j"])(
                  u,
                  { "class-name": "cyan small" },
                  {
                    default: Zb(function () {
                      return [
                        Object(a["j"])(
                          "div",
                          {
                            onClick:
                              t[14] ||
                              (t[14] = function (e) {
                                return (c.show.list = !c.show.list);
                              }),
                            class: "calendar",
                          },
                          [im]
                        ),
                      ];
                    }),
                    _: 1,
                  }
                ),
              ]),
              Object(a["j"])(
                a["c"],
                { name: "slide-right" },
                {
                  default: Zb(function () {
                    return [
                      c.show.list
                        ? (Object(a["u"])(),
                          Object(a["f"])("div", cm, [
                            Object(a["j"])("div", rm, [
                              sm,
                              Object(a["j"])(
                                "div",
                                {
                                  class: "btn-close",
                                  onClick:
                                    t[15] ||
                                    (t[15] = function (e) {
                                      return (c.show.list = !1);
                                    }),
                                },
                                [om]
                              ),
                            ]),
                            Object(a["j"])("div", lm, [
                              Object(a["j"])("div", um, [
                                Object(a["j"])(
                                  "div",
                                  {
                                    class: "status opening ".concat(
                                      "opening" === c.eventFilter
                                        ? "selected"
                                        : ""
                                    ),
                                    onClick:
                                      t[16] ||
                                      (t[16] = function (e) {
                                        return r.changeFilter("opening");
                                      }),
                                  },
                                  "Opening",
                                  2
                                ),
                                Object(a["j"])(
                                  "div",
                                  {
                                    class: "status upcoming ".concat(
                                      "upcoming" === c.eventFilter
                                        ? "selected"
                                        : ""
                                    ),
                                    onClick:
                                      t[17] ||
                                      (t[17] = function (e) {
                                        return r.changeFilter("upcoming");
                                      }),
                                  },
                                  "Upcoming",
                                  2
                                ),
                                Object(a["j"])(
                                  "div",
                                  {
                                    class: "status ended ".concat(
                                      "ended" === c.eventFilter
                                        ? "selected"
                                        : ""
                                    ),
                                    onClick:
                                      t[18] ||
                                      (t[18] = function (e) {
                                        return r.changeFilter("ended");
                                      }),
                                  },
                                  "Ended",
                                  2
                                ),
                              ]),
                              Object(a["j"])("div", dm, [
                                (Object(a["u"])(!0),
                                Object(a["f"])(
                                  a["a"],
                                  null,
                                  Object(a["B"])(
                                    r.filteredEvents,
                                    function (e, t) {
                                      return (
                                        Object(a["u"])(),
                                        Object(a["f"])(
                                          "div",
                                          { key: t, class: "item" },
                                          [
                                            Object(a["j"])(
                                              "div",
                                              {
                                                class: "item-header",
                                                onClick: function (e) {
                                                  return (c.eventHeaders[t] =
                                                    !c.eventHeaders[t]);
                                                },
                                              },
                                              [
                                                Object(a["j"])(
                                                  "span",
                                                  null,
                                                  Object(a["F"])(e.name),
                                                  1
                                                ),
                                                Object(a["j"])(
                                                  "img",
                                                  {
                                                    class: "".concat(
                                                      c.eventHeaders[t]
                                                        ? "rotate"
                                                        : ""
                                                    ),
                                                    alt: "",
                                                    src: vb.a,
                                                  },
                                                  null,
                                                  2
                                                ),
                                              ],
                                              8,
                                              ["onClick"]
                                            ),
                                            Object(a["j"])(
                                              s,
                                              null,
                                              {
                                                default: Zb(function () {
                                                  return [
                                                    c.eventHeaders[t]
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          bm,
                                                          [
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                innerHTML:
                                                                  e.info,
                                                              },
                                                              null,
                                                              8,
                                                              ["innerHTML"]
                                                            ),
                                                            e.id
                                                              ? (Object(
                                                                  a["u"]
                                                                )(),
                                                                Object(a["f"])(
                                                                  "div",
                                                                  {
                                                                    key: 0,
                                                                    class:
                                                                      "btn btn-cyan",
                                                                    onClick:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return r.openEvent(
                                                                          e.id
                                                                        );
                                                                      },
                                                                  },
                                                                  " View Winners ",
                                                                  8,
                                                                  ["onClick"]
                                                                ))
                                                              : Object(a["g"])(
                                                                  "",
                                                                  !0
                                                                ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                  ];
                                                }),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                          ]
                                        )
                                      );
                                    }
                                  ),
                                  128
                                )),
                                0 === r.filteredEvents.length
                                  ? (Object(a["u"])(),
                                    Object(a["f"])("h1", jm, [mm, pm]))
                                  : Object(a["g"])("", !0),
                              ]),
                            ]),
                          ]))
                        : Object(a["g"])("", !0),
                    ];
                  }),
                  _: 1,
                }
              ),
              Object(a["j"])(
                a["c"],
                { name: "fade" },
                {
                  default: Zb(function () {
                    return [
                      c.show.winner
                        ? (Object(a["u"])(),
                          Object(a["f"])("div", fm, [
                            Object(a["j"])(
                              u,
                              { "class-name": "cyan" },
                              {
                                default: Zb(function () {
                                  var e;
                                  return [
                                    Object(a["j"])("div", gm, [
                                      Object(a["j"])("div", hm, [
                                        Om,
                                        Object(a["j"])(
                                          "span",
                                          null,
                                          "Winner List Round " +
                                            Object(a["F"])(c.id),
                                          1
                                        ),
                                        vm,
                                        Object(a["j"])("img", {
                                          onClick:
                                            t[19] ||
                                            (t[19] = function (e) {
                                              return (c.show.winner = !1);
                                            }),
                                          alt: "",
                                          src: Pb.a,
                                        }),
                                      ]),
                                      Object(a["j"])("div", Am, [
                                        r.winner[c.id - 1]
                                          ? (Object(a["u"])(),
                                            Object(a["f"])("div", wm, [
                                              Object(a["j"])(
                                                "div",
                                                ym,
                                                " You are one of those lucky winners for MechMaster Airdrop Event Round " +
                                                  Object(a["F"])(c.id) +
                                                  ". ",
                                                1
                                              ),
                                              Object(a["j"])("ul", null, [
                                                Object(a["j"])(
                                                  "li",
                                                  km,
                                                  " Reward: " +
                                                    Object(a["F"])(
                                                      r.getPrize(
                                                        r.winner[c.id - 1]
                                                      )
                                                    ),
                                                  1
                                                ),
                                                null !== (e = r.user) &&
                                                void 0 !== e &&
                                                e.address
                                                  ? (Object(a["u"])(),
                                                    Object(a["f"])(
                                                      "li",
                                                      Cm,
                                                      " Winning Wallet: " +
                                                        Object(a["F"])(
                                                          r.user.address
                                                        ),
                                                      1
                                                    ))
                                                  : (Object(a["u"])(),
                                                    Object(a["f"])("li", xm, [
                                                      Object(a["j"])(
                                                        "div",
                                                        null,
                                                        [
                                                          Mm,
                                                          Object(a["j"])(
                                                            "div",
                                                            {
                                                              class: "btn",
                                                              style: {
                                                                background:
                                                                  "#7de0ff",
                                                                "margin-top":
                                                                  "4px",
                                                                color: "black",
                                                              },
                                                              onClick:
                                                                t[20] ||
                                                                (t[20] =
                                                                  function () {
                                                                    return (
                                                                      r.connectWallet &&
                                                                      r.connectWallet.apply(
                                                                        r,
                                                                        arguments
                                                                      )
                                                                    );
                                                                  }),
                                                            },
                                                            "Connect"
                                                          ),
                                                        ]
                                                      ),
                                                    ])),
                                                Object(a["j"])("li", Sm, [
                                                  Object(a["j"])("p", null, [
                                                    Em,
                                                    Object(a["j"])(
                                                      "a",
                                                      {
                                                        class: "highlight",
                                                        href: r.user
                                                          .winner_group,
                                                        target: "_blank",
                                                      },
                                                      Object(a["F"])(
                                                        r.user.winner_group
                                                      ),
                                                      9,
                                                      ["href"]
                                                    ),
                                                    Object(a["j"])("img", {
                                                      onClick:
                                                        t[21] ||
                                                        (t[21] = function (e) {
                                                          return r.copy(
                                                            r.user.winner_group
                                                          );
                                                        }),
                                                      alt: "",
                                                      src: Vb.a,
                                                    }),
                                                  ]),
                                                  Object(a["j"])("p", Tm, [
                                                    Rm,
                                                    Object(a["j"])("img", {
                                                      onClick:
                                                        t[22] ||
                                                        (t[22] = function (e) {
                                                          return r.copy(
                                                            r.user.winner_group
                                                          );
                                                        }),
                                                      src: Vb.a,
                                                    }),
                                                    Im,
                                                  ]),
                                                ]),
                                              ]),
                                            ]))
                                          : (Object(a["u"])(),
                                            Object(a["f"])("div", Lm, [
                                              Object(a["i"])(
                                                " Oops... Sorry, you are not the winner of Mech Master Airdrop Event Round " +
                                                  Object(a["F"])(c.id) +
                                                  ".",
                                                1
                                              ),
                                              Pm,
                                              Um,
                                            ])),
                                        Object(a["j"])("div", Bm, [
                                          1 === c.id
                                            ? (Object(a["u"])(),
                                              Object(a["f"])("a", Dm, [Nm, Fm]))
                                            : Object(a["g"])("", !0),
                                          2 === c.id
                                            ? (Object(a["u"])(),
                                              Object(a["f"])("a", Vm, [qm, Gm]))
                                            : Object(a["g"])("", !0),
                                        ]),
                                      ]),
                                      Object(a["j"])("div", Hm, [
                                        zm,
                                        Object(a["j"])("div", Wm, [
                                          (Object(a["u"])(!0),
                                          Object(a["f"])(
                                            a["a"],
                                            null,
                                            Object(a["B"])(
                                              r.winners,
                                              function (e, t) {
                                                return (
                                                  Object(a["u"])(),
                                                  Object(a["f"])(
                                                    "div",
                                                    {
                                                      class: "list-item",
                                                      key: t,
                                                    },
                                                    [
                                                      Object(a["j"])(
                                                        "div",
                                                        Km,
                                                        Object(a["F"])(
                                                          c.perPage *
                                                            (c.winnerPagination -
                                                              1) +
                                                            t +
                                                            1
                                                        ),
                                                        1
                                                      ),
                                                      Object(a["j"])(
                                                        "div",
                                                        Qm,
                                                        Object(a["F"])(
                                                          e.address
                                                        ),
                                                        1
                                                      ),
                                                      Object(a["j"])(
                                                        "div",
                                                        Ym,
                                                        Object(a["F"])(
                                                          r.getPrize(
                                                            e.winner_type
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]
                                                  )
                                                );
                                              }
                                            ),
                                            128
                                          )),
                                        ]),
                                        Object(a["j"])("div", Xm, [
                                          Jm,
                                          Object(a["j"])(
                                            "div",
                                            {
                                              class: "pagination-item",
                                              onClick:
                                                t[23] ||
                                                (t[23] = function (e) {
                                                  return r.changePagination(
                                                    -10
                                                  );
                                                }),
                                            },
                                            [Zm]
                                          ),
                                          Object(a["j"])(
                                            "div",
                                            {
                                              class: "pagination-item",
                                              onClick:
                                                t[24] ||
                                                (t[24] = function (e) {
                                                  return r.changePagination(-1);
                                                }),
                                            },
                                            [_m]
                                          ),
                                          Object(a["j"])(
                                            "div",
                                            $m,
                                            Object(a["F"])(c.winnerPagination),
                                            1
                                          ),
                                          Object(a["j"])(
                                            "div",
                                            {
                                              class: "pagination-item",
                                              onClick:
                                                t[25] ||
                                                (t[25] = function (e) {
                                                  return r.changePagination(1);
                                                }),
                                            },
                                            [ep]
                                          ),
                                          Object(a["j"])(
                                            "div",
                                            {
                                              class: "pagination-item",
                                              onClick:
                                                t[26] ||
                                                (t[26] = function (e) {
                                                  return r.changePagination(10);
                                                }),
                                            },
                                            [tp]
                                          ),
                                          Object(a["j"])(
                                            "div",
                                            np,
                                            "of " + Object(a["F"])(r.totalPage),
                                            1
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                  ];
                                }),
                                _: 1,
                              }
                            ),
                          ]))
                        : Object(a["g"])("", !0),
                    ];
                  }),
                  _: 1,
                }
              ),
            ],
            4
          )
        );
      }),
      ip = n("1da1"),
      cp = n("5530"),
      rp =
        (n("96cf"),
        n("d81d"),
        n("4de4"),
        n("fb6a"),
        n("b64b"),
        n("caad"),
        n("2532"),
        n("6452")),
      sp = n.n(rp),
      op = n("e4d8"),
      lp = n.n(op),
      up = n("7c0d"),
      dp = n.n(up),
      bp = n("de52"),
      jp = n.n(bp),
      mp = n("b326"),
      pp = n.n(mp),
      fp = n("48f3"),
      gp = n.n(fp),
      hp = n("6a16"),
      Op = n.n(hp),
      vp = { LOCK: 0, OPEN: 1 },
      Ap = {
        BEGINNER: "beginner",
        DAILY: "daily",
        CHALLENGE: "challenge",
        INVITE: "invite",
      },
      wp = { PROGRESS: 0, PENDING: 1, COMPLETE: 2 },
      yp = {
        BEGINNER: -1,
        PERSONAL_INFO: 0,
        NATION_COMMUNITY: 1,
        RETWEET: 2,
        YOUTUBE_CMT: 3,
        WHITEPAPER: 4,
        FACEBOOK: 5,
        YOUTUBE_REVIEW: 6,
        REDDIT: 7,
        NATION_TELEGRAM: 9,
        GLOBAL_TELEGRAM: 91,
        ANN_TELEGRAM: 92,
        QUESTION: 10,
        MECHA: 11,
        FACEBOOK_POST: 12,
        DISCORD: 13,
        INSTAGRAM: 14,
        MEDIUM: 15,
        GLEAM: 16,
        COUNTRY: 17,
        RETWEET_MECHA: 18,
        FB_MECHA: 19,
        WALLET: 20,
        DYNAMIC_QUESTION: 21,
        QUOTE_TWEET: 22,
        BONUS: 99,
      },
      kp = window.location.origin.includes("mechmaster.io")
        ? "https://airdrop-api.mechmaster.io/v1"
        : "https://airdrop-api.mechmaster.io/staging/v1",
      Cp = {
        USER_INFO: "".concat(kp, "/user/info/"),
        USER_REGISTER: "".concat(kp, "/user/register"),
        USER_UPDATE: "".concat(kp, "/user/update"),
        USER_INVITE: "".concat(kp, "/user/invite"),
        REQUEST_LOGIN: "".concat(kp, "/request-login-captcha"),
        LOGIN_VERIFY: "".concat(kp, "/login-verification/"),
        LOGIN_GOOGLE: "".concat(kp, "/login"),
        EVENT_INFO: "".concat(kp, "/event/info?event_name="),
        USER_EVENT_INFO: "".concat(kp, "/user/event-info?event_name="),
        EVENT_CATEGORY: "".concat(kp, "/events?category="),
        TASK_SUBMIT: "".concat(kp, "/task/submit"),
        TASK_COMPLETED: "".concat(kp, "/event/completed"),
        EVENT: "".concat(kp, "/event/info?category="),
        USER_EVENT: "".concat(kp, "/user/event-info?category="),
        WINNER: "".concat(kp, "/winners?round_id="),
        WINNER_GROUP: "".concat(kp, "/get-winner-group"),
      },
      xp = [
        {
          question: "Which platform is Mech Master published on",
          answers: ["PC", "iOS", "Android", "All of the above"],
          answer: "All of the above",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "Which day is the IDO date of Mech Master",
          answers: [
            "September 24th, 2021",
            "September 25th, 2021",
            "October 23th, 2021",
            "October 24th, 2021",
          ],
          answer: "October 24th, 2021",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "Which day is the Airdrop Round 2 date of Mech Master?",
          answers: [
            "September 4th 2021",
            "September 4th 2022",
            "October 4th 2021",
            "October 4th 2022",
          ],
          answer: "October 4th 2021",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "Which exchange will Mech master release IDO on",
          answers: ["Red Kite", "GameFi", "Polkastarter", "Red Kite & GameFi"],
          answer: "Red Kite & GameFi",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "What is the symbol of native token of GameFi",
          answers: ["$GAFI", "$GAME", "$GAMI", "$GEFI"],
          answer: "$GAFI",
          base: "GameFi",
          correct: !1,
        },
        {
          question: "What networks does GameFi Launchpad support",
          answers: [
            "Ethereum",
            "Binance Smart Chain",
            "Polygon",
            "All of them",
          ],
          answer: "All of them",
          base: "GameFi",
          correct: !1,
        },
        {
          question: "How many ranks are there in the GameFi ecosystem",
          answers: ["3", "4", "5", "6"],
          answer: "4",
          base: "GameFi",
          correct: !1,
        },
        {
          question: "What is the highest ranking in GameFi",
          answers: ["Rookie", "Elite", "Pro", "Legend"],
          answer: "Legend",
          base: "GameFi",
          correct: !1,
        },
        {
          question: "Which features are offered in the GameFi ecosystem",
          answers: [
            "Launchpad",
            "Yield Guilds, Aggregator",
            "Marketplace, Accelerator",
            "All of the above",
          ],
          answer: "All of the above",
          base: "GameFi",
          correct: !1,
        },
        {
          question: "How long were 1000 NFT boxes sold out in NFT sale Round 1",
          answers: [
            "Within 1 minute",
            "More than 1 hour",
            "More than 1 day",
            "More than 1 week",
          ],
          answer: "Within 1 minute",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "When is the expected reveal time of Mystery NFT boxes",
          answers: [
            "End of October 2021",
            "End of November 2021",
            "End of December 2021",
            "End of January 2022",
          ],
          answer: "End of October 2021",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "How many Mystery NFT boxes will be released",
          answers: ["7,000", "10,000", "15,000", "20,000"],
          answer: "7,000",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "How many Mystery NFT boxes will be sold in round 2",
          answers: ["6,000", "8,000", "10,000", "12,000"],
          answer: "6,000",
          base: "Mech Master",
          correct: !1,
        },
        {
          question: "What date is Mech Master expected to open Marketplace",
          answers: [
            "November 2021",
            "December 2021",
            "January 2022",
            "February 2022",
          ],
          answer: "November 2021",
          base: "Mech Master",
          correct: !1,
        },
        {
          question:
            "According to the Mech Master story, where was the original Mecha sent from",
          answers: [
            "From allies living on the Moon",
            "From the future through the time portal",
            "From the governments on the Earth",
            "From an unknown location",
          ],
          answer: "From the future through the time portal",
          base: "Mech Master",
          correct: !1,
        },
        {
          question:
            "According to this article, what do Ravagers use to attack enemies",
          answers: ["Machine guns", "Claws and fangs", "Sword", "Magic"],
          answer: "Claws and fangs",
          base: "Mech Master",
          correct: !1,
          extraInfo:
            "Ravagers are Mecha built for war, they take the shape and physique of beasts. These beasts specialize in using their claws and fangs that are absent in any other species, to tear apart and dismantle enemies. Combined with agile speed and a ferocious nature, Ravagers are a force to be reckoned with. <a href='https://mechmaster.medium.com/ravager-a-half-human-half-animal-beast-caae6a5d7a70' target='_blank' style='color: #7de0ff'>Read more</a>",
        },
        {
          question: "According to this article, how is the shape of Giants",
          answers: [
            "The body of a giant bird",
            "Large and tanky body",
            "Human body",
            "The shape of beasts",
          ],
          answer: "Large and tanky body",
          base: "Mech Master",
          correct: !1,
          extraInfo:
            "With a large and tanky body, Giant was founded to counter the threat of Krakens and protect human resources in the underground base. Giant tower over their enemies with big melee weapons, their durable body, and high defensive stats make up for their slow movement speed. <a href='https://mechmaster.medium.com/giant-the-iron-of-underforge-ca22d3f4789a' target='_blank' style='color: #7de0ff'>Read more</a>",
        },
        {
          question:
            "According to this article, what weapon do Aerials usually use when attacking enemies",
          answers: ["Short sword", "Long sword", "Short spear", "Long spear"],
          answer: "Long spear",
          base: "Mech Master",
          correct: !1,
          extraInfo:
            "Aerials travel at high speed, covering over miles and miles of mountain passes and ridges, relying on their rapid movement for combat. Like battle angel, they are often seen wielding a long spear, staying vigilant to contest any incoming enemies. Making use of utility equipment to help them in their fights, a balanced defense, and that deadly speed of theirs, Aerials are the king in air combat. <a href='https://mechmaster.medium.com/aerial-the-smite-in-a-breeze-b9127f63270d' target='_blank' style='color: #7de0ff'>Read more</a>",
        },
      ],
      Mp = [
        {
          question: "What community did you know about Mech Master?",
          answers: ["GameFi  Community", "Mech Master Community"],
        },
      ],
      Sp = {
        global: "https://www.facebook.com/mechmaster.io",
        vietnam: "https://www.facebook.com/groups/mechmastervietnam/",
      },
      Ep = {
        question: "What is the concept of this mecha?",
        characters: {
          legion: sp.a,
          aerial: lp.a,
          relic: dp.a,
          ravager: jp.a,
          shapeshifter: pp.a,
          alien: gp.a,
          giant: Op.a,
        },
        names: [
          "legion",
          "alien",
          "giant",
          "aerial",
          "relic",
          "shapeshifter",
          "ravager",
        ],
      },
      Tp = [
        {
          id: "1444969659220987913",
          content:
            "@MechMaster_IOðŸŒŸAIRDROP%20ROUND%202%20IS%20OPEN%21%0D%0AðŸ“Open%3A%2010.00%20UTC%2C%20October%204%2C%202021%0D%0AðŸ“Close%3A%2023.59%20UTC%2C%20October%208%2C%202021%0D%0AðŸ“Winner%20Announcement%3A%20October%2010%2C%202021%0D%0A%0D%0AðŸ‘‰How%20to%20join%3A%20https%3A%2F%2Fmechmaster.medium.com%2Fmech-master-airdrop-round-2-is-open-now-1c81490cb4a1",
          join: "%0D%0AðŸ‘‰Join%20at:%20",
        },
        {
          id: "1443497318724956161",
          content:
            "Valkyrie - The first mecha in Aerial race%0D%0AThe inspiration of the ancient Valkyries in Norse mythology who were said to be Odinâ€™s attendant goddesses.",
          medium:
            "https://mechmaster.medium.com/aerial-the-smite-in-a-breeze-b9127f63270d",
          hashtag: "\n\n#NFT #Mecha #Aerial #MechMaster",
          join: "%0D%0AðŸ‘‰Join%20at:%20",
        },
        {
          id: "1443962397903896578",
          content:
            "ðŸ•·Arachne - A Half Human Half Spider Beast%0D%0AðŸ’¥Introducing the first released 6-foot Mecha in the Ravager race with the ability to walk, jump and move even across rough terrains.",
          medium:
            "https://mechmaster.medium.com/ravager-a-half-human-half-animal-beast-caae6a5d7a70",
          hashtag: "\n\n#Mecha #MechMaster #Ravager",
          join: "%0D%0AðŸ‘‰Join%20at:%20",
        },
        {
          id: "1445381634602196994",
          content:
            "ðŸ’¥This Mech Master NFT Mystery Box Sale is jointly launched by Mech Master and GameFi with the biggest number - 6000 boxes up for grabs!ðŸ’¥",
          medium: "https://t.co/uct0KJ9C3X?amp=1",
          hashtag: "\n\n#NFT #Mecha #PlaytoEarn #BlockchainGame #MechMaster",
        },
        {
          id: "1445750705445228561",
          content:
            "ðŸ’¥WHITELIST IS OPEN!%0D%0AðŸŽ«Register at: https%3A%2F%2Fhub.gamefi.org%2F%23%2Fmystery-boxes%0D%0ARegistrants in the whitelist will be prioritized in the first 30 mins of the sale. Hurry up!!!%0D%0Aâ°Closing Time: 4 AM UTC, Oct 12, 2021",
          medium: "https://t.co/uct0KIS0Fn?amp=1",
          hashtag: "\n\n #NFT #Mecha #MechMaster #MysteryBox #Whitelist",
        },
      ],
      Rp = [
        "",
        "1 NFT Mecha box",
        "30$ IDO Ticket (Guaranteed)",
        "300 $MECH",
        "100 $MECH",
        "30$ IDO Ticket (FCFS)",
      ],
      Ip = n("10ca"),
      Lp = n.n(Ip),
      Pp = n("6f6d"),
      Up = n.n(Pp),
      Bp = n("0b02"),
      Dp = n.n(Bp),
      Np = n("53a7"),
      Fp = n.n(Np),
      Vp = n("3f10"),
      qp = n.n(Vp),
      Gp = Object(a["N"])("data-v-f94fddca");
    Object(a["x"])("data-v-f94fddca");
    var Hp = { key: 0, class: "modal", ref: "modal" },
      zp = { class: "modal-content" },
      Wp = Object(a["j"])("img", { alt: "", src: Pb.a }, null, -1),
      Kp = Object(a["j"])(
        "div",
        { class: "modal-title" },
        "Check your email",
        -1
      ),
      Qp = Object(a["j"])(
        "img",
        { alt: "", src: Lp.a, style: { margin: "12px" } },
        null,
        -1
      ),
      Yp = { class: "modal-info" },
      Xp = Object(a["i"])(" We have sent an invitation to "),
      Jp = { style: { color: "#7de0ff" } },
      Zp = Object(a["i"])(". "),
      _p = Object(a["j"])(
        "div",
        { class: "modal-info", style: { "margin-top": "8px" } },
        " Check spam box too if you can't find the email in your inbox. ",
        -1
      ),
      $p = Object(a["j"])("div", { class: "modal-title" }, "Caution", -1),
      ef = Object(a["j"])(
        "img",
        { alt: "", src: Up.a, style: { width: "150px", margin: "12px" } },
        null,
        -1
      ),
      tf = { class: "modal-info" },
      nf = Object(a["j"])("div", { class: "modal-title" }, "ENLIST TODAY", -1),
      af = Object(a["j"])(
        "div",
        { class: "modal-info" },
        "Get Mecha & MECH token",
        -1
      ),
      cf = Object(a["j"])("img", { alt: "", src: Dp.a }, null, -1),
      rf = Object(a["i"])(" Sign in with Google "),
      sf = Object(a["j"])("div", { class: "divider" }, "or", -1),
      of = Object(a["j"])("img", { alt: "", src: Fp.a }, null, -1),
      lf = Object(a["i"])(" Sign in with Email "),
      uf = Object(a["j"])("div", { class: "modal-title" }, "ENLIST TODAY", -1),
      df = { class: "modal-info", style: { "margin-bottom": "16px" } },
      bf = Object(a["i"])("Login with "),
      jf = Object(a["j"])(
        "div",
        { class: "modal-label" },
        "Enter your email:",
        -1
      ),
      mf = { class: "modal-input" },
      pf = Object(a["j"])("img", { alt: "", src: qp.a }, null, -1),
      ff = { class: "modal-message" };
    Object(a["v"])();
    var gf = Gp(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("vue-recaptcha"),
          o = Object(a["D"])("BorderCorner");
        return r.show
          ? (Object(a["u"])(),
            Object(a["f"])(
              "div",
              Hp,
              [
                Object(a["j"])(
                  o,
                  { "class-name": "cyan" },
                  {
                    default: Gp(function () {
                      return [
                        Object(a["j"])("div", zp, [
                          Object(a["j"])(
                            "div",
                            {
                              class: "btn-close",
                              onClick:
                                t[1] ||
                                (t[1] = function () {
                                  return r.close && r.close.apply(r, arguments);
                                }),
                            },
                            [Wp]
                          ),
                          c.done && !c.error
                            ? (Object(a["u"])(),
                              Object(a["f"])(
                                a["a"],
                                { key: 0 },
                                [
                                  Kp,
                                  Qp,
                                  Object(a["j"])("div", Yp, [
                                    Xp,
                                    Object(a["j"])(
                                      "span",
                                      Jp,
                                      Object(a["F"])(c.email),
                                      1
                                    ),
                                    Zp,
                                  ]),
                                  _p,
                                  Object(a["j"])(
                                    "div",
                                    {
                                      class: "btn btn-cyan",
                                      onClick:
                                        t[2] ||
                                        (t[2] = function () {
                                          return (
                                            r.close &&
                                            r.close.apply(r, arguments)
                                          );
                                        }),
                                    },
                                    " Close "
                                  ),
                                ],
                                64
                              ))
                            : !c.done && c.error
                            ? (Object(a["u"])(),
                              Object(a["f"])(
                                a["a"],
                                { key: 1 },
                                [
                                  $p,
                                  ef,
                                  Object(a["j"])(
                                    "div",
                                    tf,
                                    Object(a["F"])(c.msg),
                                    1
                                  ),
                                ],
                                64
                              ))
                            : (Object(a["u"])(),
                              Object(a["f"])(
                                a["a"],
                                { key: 2 },
                                [
                                  c.state === c.STATE.BEGIN
                                    ? (Object(a["u"])(),
                                      Object(a["f"])(
                                        a["a"],
                                        { key: 0 },
                                        [
                                          nf,
                                          af,
                                          Object(a["j"])(
                                            "div",
                                            {
                                              class: "btn btn-red",
                                              onClick:
                                                t[3] ||
                                                (t[3] = function () {
                                                  return (
                                                    r.loginWithGoogle &&
                                                    r.loginWithGoogle.apply(
                                                      r,
                                                      arguments
                                                    )
                                                  );
                                                }),
                                            },
                                            [cf, rf]
                                          ),
                                          sf,
                                          Object(a["j"])(
                                            "div",
                                            {
                                              class: "btn btn-cyan",
                                              onClick:
                                                t[4] ||
                                                (t[4] = function (e) {
                                                  return r.changeState(
                                                    c.STATE.LOGIN
                                                  );
                                                }),
                                            },
                                            [of, lf]
                                          ),
                                        ],
                                        64
                                      ))
                                    : c.state === c.STATE.LOGIN
                                    ? (Object(a["u"])(),
                                      Object(a["f"])(
                                        a["a"],
                                        { key: 1 },
                                        [
                                          uf,
                                          Object(a["j"])("div", df, [
                                            bf,
                                            Object(a["j"])(
                                              "span",
                                              {
                                                class: "link",
                                                onClick:
                                                  t[5] ||
                                                  (t[5] = function () {
                                                    return (
                                                      r.loginWithGoogle &&
                                                      r.loginWithGoogle.apply(
                                                        r,
                                                        arguments
                                                      )
                                                    );
                                                  }),
                                              },
                                              "Google"
                                            ),
                                          ]),
                                          c.captchaToken
                                            ? (Object(a["u"])(),
                                              Object(a["f"])(
                                                a["a"],
                                                { key: 0 },
                                                [
                                                  jf,
                                                  Object(a["j"])("div", mf, [
                                                    pf,
                                                    Object(a["L"])(
                                                      Object(a["j"])(
                                                        "input",
                                                        {
                                                          type: "email",
                                                          autocomplete: "email",
                                                          "onUpdate:modelValue":
                                                            t[6] ||
                                                            (t[6] = function (
                                                              e
                                                            ) {
                                                              return (c.email =
                                                                e);
                                                            }),
                                                        },
                                                        null,
                                                        512
                                                      ),
                                                      [[a["I"], c.email]]
                                                    ),
                                                  ]),
                                                  Object(a["j"])(
                                                    "div",
                                                    ff,
                                                    Object(a["F"])(c.msg.email),
                                                    1
                                                  ),
                                                  Object(a["j"])(
                                                    "div",
                                                    {
                                                      class: "btn btn-cyan",
                                                      onClick:
                                                        t[7] ||
                                                        (t[7] = function () {
                                                          return (
                                                            r.loginWithEmail &&
                                                            r.loginWithEmail.apply(
                                                              r,
                                                              arguments
                                                            )
                                                          );
                                                        }),
                                                    },
                                                    " Send link "
                                                  ),
                                                ],
                                                64
                                              ))
                                            : (Object(a["u"])(),
                                              Object(a["f"])(
                                                s,
                                                {
                                                  key: 1,
                                                  "site-key":
                                                    "6LeaLn0cAAAAAG1ovebAIdUosXGVMaNbNjILMpzS",
                                                  onVerify: r.recaptchaVerified,
                                                  onExpire: r.recaptchaExpired,
                                                  onFail: r.recaptchaFailed,
                                                  ref: "vueRecaptcha",
                                                },
                                                null,
                                                8,
                                                [
                                                  "onVerify",
                                                  "onExpire",
                                                  "onFail",
                                                ]
                                              )),
                                        ],
                                        64
                                      ))
                                    : Object(a["g"])("", !0),
                                ],
                                64
                              )),
                        ]),
                      ];
                    }),
                    _: 1,
                  }
                ),
              ],
              512
            ))
          : Object(a["g"])("", !0);
      }),
      hf = n("ade3"),
      Of = Object(a["N"])("data-v-09959a0a"),
      vf = Of(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])(
            "div",
            {
              class: [
                "wrapper-card",
                Object(hf["a"])(
                  {
                    "bd-overlay": n.useOverlay,
                    "h-a": n.usingBdActiveWhenHover,
                    "d-a": !n.usingBdActiveWhenHover,
                  },
                  n.className,
                  n.className
                ),
              ],
            },
            [
              Object(a["j"])(
                "span",
                { class: ["bd-l", n.usingBdActiveWhenHover ? "h-a" : "d-a"] },
                null,
                2
              ),
              Object(a["j"])(
                "span",
                { class: ["bd-r", n.usingBdActiveWhenHover ? "h-a" : "d-a"] },
                null,
                2
              ),
              Object(a["C"])(e.$slots, "default", {}, void 0, !0),
            ],
            2
          )
        );
      }),
      Af = {
        name: "BorderCorner",
        props: {
          usingBdActiveWhenHover: Boolean,
          useOverlay: Boolean,
          className: String,
        },
      };
    n("8c19");
    (Af.render = vf), (Af.__scopeId = "data-v-09959a0a");
    var wf = Af,
      yf = n("bc3a"),
      kf = n.n(yf),
      Cf = n("2e4e"),
      xf = { BEGIN: 0, REGISTER: 1, LOGIN: 2, WELCOME: 3, PWD: 4 },
      Mf = {
        name: "LoginModal",
        components: { BorderCorner: wf, VueRecaptcha: Cf["a"] },
        props: { modelValue: Boolean },
        data: function () {
          return {
            STATE: xf,
            state: 0,
            email: "",
            msg: "",
            done: !1,
            ref_code: "",
            captchaToken: "",
            error: !1,
          };
        },
        created: function () {
          var e = this;
          return Object(ip["a"])(
            regeneratorRuntime.mark(function t() {
              var n;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = e.$route.query),
                        n && n.refer && (e.ref_code = n.refer);
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        mounted: function () {
          var e = this.$refs.modal;
          if (e) {
            var t = window.getComputedStyle(e).getPropertyValue("bottom");
            document.addEventListener("scroll", function () {
              var n = window.pageYOffset || document.documentElement.scrollTop;
              if (n > 50) {
                var a = window.innerHeight;
                e.style.bottom = "".concat(a - 360, "px");
              } else e.style.bottom = t;
            });
          }
        },
        computed: {
          show: {
            get: function () {
              return this.modelValue;
            },
            set: function (e) {
              this.$emit("update:modelValue", e);
            },
          },
        },
        methods: {
          close: function () {
            this.show = !1;
          },
          changeState: function (e) {
            (this.email = ""),
              (this.password = ""),
              (this.repeatPassword = ""),
              (this.state = e);
          },
          loginWithEmail: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (e.$emit("loading", !0),
                          (n =
                            localStorage.getItem(e.email) ||
                            sessionStorage.getItem("email")),
                          !n)
                        ) {
                          t.next = 9;
                          break;
                        }
                        e.$store.commit("saveToken", n),
                          e.$store.dispatch("getUserInfo"),
                          (e.show = !1),
                          setTimeout(
                            Object(ip["a"])(
                              regeneratorRuntime.mark(function t() {
                                return regeneratorRuntime.wrap(function (t) {
                                  while (1)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.next = 2),
                                          e.$router.push("/event/2")
                                        );
                                      case 2:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            ),
                            2e3
                          ),
                          (t.next = 17);
                        break;
                      case 9:
                        return (
                          (a = Cp.REQUEST_LOGIN),
                          (i = {
                            email: e.email,
                            captcha_token: e.captchaToken,
                            round_id: 2,
                          }),
                          e.ref_code &&
                            Object.assign(i, { referral: e.ref_code }),
                          (t.next = 14),
                          kf.a.post(a, i)
                        );
                      case 14:
                        (c = t.sent),
                          c.data
                            ? 200 === c.data.code
                              ? ((e.done = !0), (e.error = !1))
                              : ((e.done = !1),
                                (e.error = !0),
                                (e.msg = c.data.message))
                            : ((e.done = !1),
                              (e.error = !0),
                              (e.msg =
                                "Something wrong happened! Please refresh and try again after 5 minutes!")),
                          e.$emit("loading", !1);
                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          loginWithGoogle: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c, r, s, o;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.$emit("loading", !0),
                            (t.prev = 1),
                            (t.next = 4),
                            e.$gAuth.signIn()
                          );
                        case 4:
                          return (
                            (n = t.sent),
                            (a = n.getAuthResponse()),
                            (i = a.id_token),
                            (c = Cp.LOGIN_GOOGLE),
                            (r = { id_token: i, round_id: 2 }),
                            e.ref_code &&
                              Object.assign(r, { referral: e.ref_code }),
                            (t.next = 12),
                            kf.a.post(c, r)
                          );
                        case 12:
                          return (
                            (s = t.sent),
                            (o = s.data.access_token.token),
                            e.$store.commit("saveToken", o),
                            e.$store.dispatch("getUserInfo"),
                            (e.show = !1),
                            (t.next = 19),
                            e.$router.push("/event/2")
                          );
                        case 19:
                          t.next = 26;
                          break;
                        case 21:
                          (t.prev = 21),
                            (t.t0 = t["catch"](1)),
                            "popup_closed_by_user" !==
                              (null === t.t0 || void 0 === t.t0
                                ? void 0
                                : t.t0.error) &&
                              ((e.done = !1),
                              (e.error = !0),
                              (e.msg =
                                "Too many requests. Sorry! Rate limit exceeded. Try again later."),
                              setTimeout(function () {
                                (e.error = !1), (e.msg = "");
                              }, 6e4)),
                            console.log(t.t0),
                            e.$emit("loading", !1);
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 21]]
                );
              })
            )();
          },
          recaptchaVerified: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        t.captchaToken = e;
                      case 1:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          recaptchaExpired: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.$refs.vueRecaptcha.reset();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          recaptchaFailed: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.$refs.vueRecaptcha.reset();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      };
    n("6754");
    (Mf.render = gf), (Mf.__scopeId = "data-v-f94fddca");
    var Sf = Mf,
      Ef = Object(a["N"])("data-v-26c596ec"),
      Tf = Ef(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])(
            a["c"],
            {
              name: "open",
              onBeforeEnter: r.beforeEnter,
              onEnter: r.enter,
              onEnterCancelled: r.enterCancelled,
              onLeave: r.leave,
              onAfterLeave: r.afterLeave,
              onLeaveCancelled: r.leaveCancelled,
            },
            {
              default: Ef(function () {
                return [Object(a["C"])(e.$slots, "default", {}, void 0, !0)];
              }),
              _: 3,
            },
            8,
            [
              "onBeforeEnter",
              "onEnter",
              "onEnterCancelled",
              "onLeave",
              "onAfterLeave",
              "onLeaveCancelled",
            ]
          )
        );
      });
    function Rf(e) {
      var t = e._initialStyle["height"];
      (e.style.overflow = e._initialStyle.overflow),
        null != t && (e.style["height"] = t),
        delete e._initialStyle;
    }
    function If(e) {
      e._parent && e._parent.classList.remove("accordion"), Rf(e);
    }
    var Lf = {
      name: "accordionTransition",
      methods: {
        beforeEnter: function (e) {
          (e._parent = e.parentNode),
            (e._initialStyle = Object(hf["a"])(
              {
                transition: e.style.transition,
                visibility: e.style.visibility,
                overflow: e.style.overflow,
              },
              "height",
              e.style["height"]
            ));
        },
        enter: function (e) {
          var t = e._initialStyle,
            n = "".concat(e["offsetHeight"], "px");
          e.style.setProperty("transition", "none", "important"),
            (e.style.visibility = "hidden"),
            (e.style.visibility = t.visibility),
            (e.style.overflow = "hidden"),
            (e.style["height"] = "0"),
            e.offsetHeight,
            (e.style.transition = t.transition),
            e._parent && e._parent.classList.add("accordion"),
            requestAnimationFrame(function () {
              e.style["height"] = n;
            });
        },
        afterEnter: Rf,
        enterCancelled: Rf,
        leave: function (e) {
          (e._initialStyle = Object(hf["a"])(
            { transition: "", visibility: "", overflow: e.style.overflow },
            "height",
            e.style["height"]
          )),
            (e.style.overflow = "hidden"),
            (e.style["height"] = "".concat(e["offsetHeight"], "px")),
            e.offsetHeight,
            requestAnimationFrame(function () {
              return (e.style["height"] = "0");
            });
        },
        afterLeave: If,
        leaveCancelled: If,
      },
    };
    (Lf.render = Tf), (Lf.__scopeId = "data-v-26c596ec");
    var Pf = Lf,
      Uf = n("76fd"),
      Bf = n.n(Uf),
      Df = n("3b6e"),
      Nf = n.n(Df),
      Ff = n("d7d8"),
      Vf = n.n(Ff),
      qf = Object(a["N"])("data-v-b299c42c");
    Object(a["x"])("data-v-b299c42c");
    var Gf = { key: 0, class: "airdrop" },
      Hf = { class: "airdrop-main" },
      zf = { class: "airdrop-header" },
      Wf = Object(a["j"])("img", { class: "bg", alt: "", src: Tb.a }, null, -1),
      Kf = Object(a["j"])("span", null, "Airdrop Campaign", -1),
      Qf = { class: "airdrop-content" },
      Yf = { class: "airdrop-content_side" },
      Xf = { class: "airdrop-content_box" },
      Jf = { class: "row" },
      Zf = { class: "score" },
      _f = Object(a["j"])("p", null, "Your Point", -1),
      $f = { key: 0, class: "rank" },
      eg = Object(a["j"])("p", null, "Your Rank", -1),
      tg = { key: 0, class: "info" },
      ng = { class: "airdrop-content_box" },
      ag = Object(a["j"])(
        "img",
        { class: "img-box", alt: "", src: Bf.a },
        null,
        -1
      ),
      ig = { class: "airdrop-content_box" },
      cg = Object(a["j"])("h1", null, "HOW TO PARTICIPATE", -1),
      rg = Object(a["j"])(
        "ul",
        null,
        [
          Object(a["j"])(
            "li",
            null,
            "Perform the Airdrop missions listed, including Beginner, Daily, Challenge, Invite."
          ),
          Object(a["j"])(
            "li",
            null,
            "Solve all tasks in each mission and receive your points."
          ),
          Object(a["j"])(
            "li",
            null,
            "Wait for the announcement of the winners."
          ),
        ],
        -1
      ),
      sg = { class: "airdrop-content_main" },
      og = { class: "airdrop-content_box" },
      lg = Object(a["j"])("h1", null, "Mission List", -1),
      ug = { class: "tab" },
      dg = { class: "tab-bar" },
      bg = { key: 0, alt: "", src: Nf.a },
      jg = { key: 1, alt: "", src: Vf.a },
      mg = { class: "tab-view" };
    Object(a["v"])();
    var pg = qf(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("flip-countdown"),
          o = Object(a["D"])("Daily"),
          l = Object(a["D"])("Challenge"),
          u = Object(a["D"])("Invite"),
          d = Object(a["D"])("border-corner");
        return (
          Object(a["u"])(),
          Object(a["f"])(
            a["c"],
            { name: "fade" },
            {
              default: qf(function () {
                return [
                  r.computedValue
                    ? (Object(a["u"])(),
                      Object(a["f"])("div", Gf, [
                        Object(a["j"])(
                          d,
                          { "class-name": "cyan" },
                          {
                            default: qf(function () {
                              var e, i, d, b, j;
                              return [
                                Object(a["j"])("div", Hf, [
                                  Object(a["j"])("div", zf, [
                                    Wf,
                                    Kf,
                                    Object(a["j"])("img", {
                                      onClick:
                                        t[1] ||
                                        (t[1] = function (e) {
                                          return (r.computedValue = !1);
                                        }),
                                      alt: "",
                                      src: Pb.a,
                                    }),
                                  ]),
                                  Object(a["j"])("div", Qf, [
                                    Object(a["j"])("div", Yf, [
                                      Object(a["j"])("div", Xf, [
                                        Object(a["j"])("div", Jf, [
                                          Object(a["j"])("div", Zf, [
                                            _f,
                                            Object(a["j"])(
                                              "p",
                                              null,
                                              Object(a["F"])(r.score) + " Pts",
                                              1
                                            ),
                                          ]),
                                          n.event.rank
                                            ? (Object(a["u"])(),
                                              Object(a["f"])("div", $f, [
                                                eg,
                                                Object(a["j"])(
                                                  "p",
                                                  null,
                                                  Object(a["F"])(r.rank),
                                                  1
                                                ),
                                              ]))
                                            : Object(a["g"])("", !0),
                                        ]),
                                        n.event.rank
                                          ? (Object(a["u"])(),
                                            Object(a["f"])(
                                              "div",
                                              tg,
                                              "Points will increase your Rank for a better chance to become a winner"
                                            ))
                                          : Object(a["g"])("", !0),
                                      ]),
                                      Object(a["j"])("div", ng, [
                                        Object(a["j"])(
                                          "h1",
                                          null,
                                          Object(a["F"])(n.event.name),
                                          1
                                        ),
                                        Object(a["j"])(
                                          "h2",
                                          null,
                                          Object(a["F"])(
                                            n.event.countdownText
                                          ) + " in",
                                          1
                                        ),
                                        Object(a["j"])(
                                          s,
                                          {
                                            deadline: n.event.countdownDeadline,
                                            class: "countdown",
                                          },
                                          null,
                                          8,
                                          ["deadline"]
                                        ),
                                        n.event.info
                                          ? (Object(a["u"])(),
                                            Object(a["f"])(
                                              "div",
                                              {
                                                key: 0,
                                                class: "info",
                                                innerHTML: n.event.info,
                                              },
                                              null,
                                              8,
                                              ["innerHTML"]
                                            ))
                                          : Object(a["g"])("", !0),
                                        ag,
                                      ]),
                                      Object(a["j"])("div", ig, [
                                        n.event.extraInfo
                                          ? (Object(a["u"])(),
                                            Object(a["f"])(
                                              "div",
                                              {
                                                key: 0,
                                                innerHTML: n.event.extraInfo,
                                              },
                                              null,
                                              8,
                                              ["innerHTML"]
                                            ))
                                          : (Object(a["u"])(),
                                            Object(a["f"])(
                                              a["a"],
                                              { key: 1 },
                                              [cg, rg],
                                              64
                                            )),
                                      ]),
                                    ]),
                                    Object(a["j"])("div", sg, [
                                      Object(a["j"])("div", og, [
                                        lg,
                                        Object(a["j"])("div", ug, [
                                          Object(a["j"])("div", dg, [
                                            (Object(a["u"])(!0),
                                            Object(a["f"])(
                                              a["a"],
                                              null,
                                              Object(a["B"])(
                                                r.listMissions,
                                                function (e, t) {
                                                  var n;
                                                  return (
                                                    Object(a["u"])(),
                                                    Object(a["f"])(
                                                      "div",
                                                      {
                                                        class: "tab-item "
                                                          .concat(
                                                            (null ===
                                                              (n =
                                                                c.selectedMission) ||
                                                            void 0 === n
                                                              ? void 0
                                                              : n.name) ===
                                                              e.name
                                                              ? "selected"
                                                              : "",
                                                            " "
                                                          )
                                                          .concat(
                                                            e.status
                                                              ? ""
                                                              : "disabled"
                                                          ),
                                                        key: t,
                                                        onClick: function (t) {
                                                          return r.chooseMission(
                                                            e
                                                          );
                                                        },
                                                      },
                                                      [
                                                        0 === e.status
                                                          ? (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "img",
                                                              bg
                                                            ))
                                                          : (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "img",
                                                              jg
                                                            )),
                                                        Object(a["j"])(
                                                          "span",
                                                          null,
                                                          Object(a["F"])(
                                                            e.name
                                                          ),
                                                          1
                                                        ),
                                                      ],
                                                      10,
                                                      ["onClick"]
                                                    )
                                                  );
                                                }
                                              ),
                                              128
                                            )),
                                          ]),
                                          Object(a["j"])("div", mg, [
                                            "Daily" === c.selectedMission.name
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  o,
                                                  {
                                                    key: 0,
                                                    ended:
                                                      null === (e = n.event) ||
                                                      void 0 === e
                                                        ? void 0
                                                        : e.ended,
                                                    "show-rank":
                                                      null === (i = n.event) ||
                                                      void 0 === i
                                                        ? void 0
                                                        : i.rank,
                                                  },
                                                  null,
                                                  8,
                                                  ["ended", "show-rank"]
                                                ))
                                              : Object(a["g"])("", !0),
                                            "Challenge" ===
                                            c.selectedMission.name
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  l,
                                                  {
                                                    key: 1,
                                                    ended:
                                                      null === (d = n.event) ||
                                                      void 0 === d
                                                        ? void 0
                                                        : d.ended,
                                                  },
                                                  null,
                                                  8,
                                                  ["ended"]
                                                ))
                                              : Object(a["g"])("", !0),
                                            "Invite" === c.selectedMission.name
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  u,
                                                  {
                                                    key: 2,
                                                    locked:
                                                      !c.selectedMission.status,
                                                    rule:
                                                      null === (b = n.event) ||
                                                      void 0 === b
                                                        ? void 0
                                                        : b.inviteRule,
                                                    "show-rank":
                                                      null === (j = n.event) ||
                                                      void 0 === j
                                                        ? void 0
                                                        : j.rank,
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "locked",
                                                    "rule",
                                                    "show-rank",
                                                  ]
                                                ))
                                              : Object(a["g"])("", !0),
                                          ]),
                                        ]),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ];
                            }),
                            _: 1,
                          }
                        ),
                      ]))
                    : Object(a["g"])("", !0),
                ];
              }),
              _: 1,
            }
          )
        );
      }),
      fg = Object(a["N"])("data-v-60d3dd99");
    Object(a["x"])("data-v-60d3dd99");
    var gg = { class: "flip-clock" },
      hg = { class: "flip-clock__card flip-card" },
      Og = { class: "flip-card__top" },
      vg = { class: "flip-clock__slot" };
    Object(a["v"])();
    var Ag = fg(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("div", gg, [
            (Object(a["u"])(!0),
            Object(a["f"])(
              a["a"],
              null,
              Object(a["B"])(c.timeData, function (e) {
                return (
                  Object(a["u"])(),
                  Object(a["f"])(
                    "span",
                    {
                      key: e.label,
                      class: "flip-clock__piece",
                      id: e.elementId,
                    },
                    [
                      Object(a["j"])("span", hg, [
                        Object(a["j"])(
                          "span",
                          Og,
                          Object(a["F"])(r.twoDigits(e.current)),
                          1
                        ),
                        Object(a["j"])(
                          "span",
                          {
                            class: "flip-card__bottom",
                            "data-value": r.twoDigits(e.current),
                          },
                          null,
                          8,
                          ["data-value"]
                        ),
                        Object(a["j"])(
                          "span",
                          {
                            class: "flip-card__back",
                            "data-value": r.twoDigits(e.previous),
                          },
                          null,
                          8,
                          ["data-value"]
                        ),
                        Object(a["j"])(
                          "span",
                          {
                            class: "flip-card__back-bottom",
                            "data-value": r.twoDigits(e.previous),
                          },
                          null,
                          8,
                          ["data-value"]
                        ),
                      ]),
                      Object(a["j"])("span", vg, Object(a["F"])(e.label), 1),
                    ],
                    8,
                    ["id"]
                  )
                );
              }),
              128
            )),
          ])
        );
      }),
      wg = n("b85c"),
      yg =
        (n("ac1f"),
        n("5319"),
        n("d3b7"),
        n("25f0"),
        {
          name: "flipCountdown",
          props: {
            deadline: { type: String },
            id: { type: String, default: "1" },
            length: { type: Number, default: 4 },
          },
          data: function () {
            return {
              now: Math.trunc(new Date().getTime() / 1e3),
              date: null,
              interval: null,
              diff: 0,
              timeData: [
                {
                  current: 0,
                  previous: 0,
                  label: "Days",
                  elementId: "flip-card-days-" + this.id,
                },
                {
                  current: 0,
                  previous: 0,
                  label: "Hours",
                  elementId: "flip-card-hours-" + this.id,
                },
                {
                  current: 0,
                  previous: 0,
                  label: "Minutes",
                  elementId: "flip-card-minutes-" + this.id,
                },
                {
                  current: 0,
                  previous: 0,
                  label: "Seconds",
                  elementId: "flip-card-seconds-" + this.id,
                },
              ],
            };
          },
          created: function () {
            var e = this;
            this.deadline &&
              ((this.date = Math.trunc(Date.parse(this.deadline) / 1e3)),
              this.date &&
                ((this.timeData = this.timeData.slice(4 - this.length, 4)),
                (this.interval = setInterval(function () {
                  e.now = Math.trunc(new Date().getTime() / 1e3);
                }, 900))));
          },
          computed: {
            seconds: function () {
              return Math.trunc(this.diff) % 60;
            },
            minutes: function () {
              return Math.trunc(this.diff / 60) % 60;
            },
            hours: function () {
              return Math.trunc(this.diff / 60 / 60) % 24;
            },
            days: function () {
              return Math.trunc(this.diff / 60 / 60 / 24);
            },
          },
          watch: {
            deadline: function (e) {
              this.date = Math.trunc(
                Date.parse(e.toString().replace(/-/g, "/")) / 1e3
              );
            },
            now: function (e) {
              (this.diff = this.date - e),
                this.diff <= 0
                  ? ((this.diff = 0), this.updateTime(3, 0))
                  : this.updateAllCards();
            },
            diff: function (e) {
              0 === e && this.updateAllCards();
            },
          },
          methods: {
            twoDigits: function (e) {
              return e.toString().length <= 1
                ? "0" + e.toString()
                : e.toString();
            },
            updateAllCards: function () {
              switch (this.length) {
                case 1:
                  this.updateTime(0, this.seconds);
                  break;
                case 2:
                  this.updateTime(0, this.minutes),
                    this.updateTime(1, this.seconds);
                  break;
                case 3:
                  this.updateTime(0, this.hours),
                    this.updateTime(1, this.minutes),
                    this.updateTime(2, this.seconds);
                  break;
                default:
                  this.updateTime(0, this.days),
                    this.updateTime(1, this.hours),
                    this.updateTime(2, this.minutes),
                    this.updateTime(3, this.seconds);
                  break;
              }
            },
            updateTime: function (e, t) {
              if (!(e >= this.timeData.length || void 0 === t)) {
                window["requestAnimationFrame"] &&
                  (this.frame = requestAnimationFrame(
                    this.updateTime.bind(this)
                  ));
                var n = this.timeData[e],
                  a = t < 0 ? 0 : t,
                  i = document.querySelector("#".concat(n.elementId));
                if (
                  a !== n.current &&
                  ((n.previous = n.current),
                  (n.current = a),
                  i &&
                    (i.classList.remove("flip"),
                    i.offsetWidth,
                    i.classList.add("flip")),
                  0 === e)
                ) {
                  var c = i.querySelectorAll("span span");
                  if (c) {
                    var r,
                      s = Object(wg["a"])(c);
                    try {
                      for (s.s(); !(r = s.n()).done; ) {
                        var o = r.value,
                          l = o.classList[0];
                        if (t / 1e3 >= 1) {
                          if (!l.includes("-4digits")) {
                            var u = l + "-4digits";
                            o.classList.add(u), o.classList.remove(l);
                          }
                        } else if (l.includes("-4digits")) {
                          var d = l.replace("-4digits", "");
                          o.classList.add(d), o.classList.remove(l);
                        }
                      }
                    } catch (b) {
                      s.e(b);
                    } finally {
                      s.f();
                    }
                  }
                }
              }
            },
          },
          beforeUnmount: function () {
            window["cancelAnimationFrame"] && cancelAnimationFrame(this.frame);
          },
          unmounted: function () {
            clearInterval(this.interval);
          },
        });
    n("ad1a");
    (yg.render = Ag), (yg.__scopeId = "data-v-60d3dd99");
    var kg = yg,
      Cg = (n("9911"), n("64ca")),
      xg = n.n(Cg),
      Mg = n("0c86"),
      Sg = n.n(Mg),
      Eg = n("1538"),
      Tg = n.n(Eg),
      Rg = n("f943"),
      Ig = n.n(Rg),
      Lg = n("8f1f"),
      Pg = n.n(Lg),
      Ug = n("3919"),
      Bg = n.n(Ug),
      Dg = n("1293"),
      Ng = n.n(Dg),
      Fg = n("3be3"),
      Vg = n.n(Fg),
      qg = n("5407"),
      Gg = n.n(qg),
      Hg = n("977e"),
      zg = n.n(Hg),
      Wg = n("dee1"),
      Kg = n.n(Wg),
      Qg = n("8dbd"),
      Yg = n.n(Qg),
      Xg = n("d95e"),
      Jg = n.n(Xg),
      Zg = n("6cbd"),
      _g = n.n(Zg),
      $g = n("1c90"),
      eh = n.n($g),
      th = n("e2c2"),
      nh = n.n(th),
      ah = n("5177"),
      ih = n.n(ah),
      ch = n("7a1f"),
      rh = n.n(ch),
      sh = Object(a["N"])("data-v-e57225c6");
    Object(a["x"])("data-v-e57225c6");
    var oh = { class: "main" },
      lh = { class: "tab-bar" },
      uh = { style: { "margin-right": "24px", "margin-left": "12px" } },
      dh = { class: "completed" },
      bh = Object(a["j"])("img", { alt: "", src: xg.a }, null, -1),
      jh = { class: "hover" },
      mh = { class: "tab-view" },
      ph = { class: "row" },
      fh = {
        key: 0,
        style: { margin: "8px 12px 8px 4px" },
        alt: "",
        src: Nf.a,
      },
      gh = Object(a["j"])("div", { class: "spacer" }, null, -1),
      hh = Object(a["j"])(
        "div",
        { class: "info" },
        " Enter the username of your personal accounts ",
        -1
      ),
      Oh = { class: "link row" },
      vh = Object(a["j"])(
        "img",
        { alt: "", src: Sg.a, style: { "margin-right": "12px" } },
        null,
        -1
      ),
      Ah = { class: "link row" },
      wh = Object(a["j"])(
        "img",
        { alt: "", src: Tg.a, style: { "margin-right": "12px" } },
        null,
        -1
      ),
      yh = Object(a["j"])("div", null, "Select your country:", -1),
      kh = { class: "row" },
      Ch = { class: "dropdown", style: { margin: "0" } },
      xh = Object(a["j"])("img", { alt: "", src: Ig.a }, null, -1),
      Mh = { class: "dropdown-list" },
      Sh = { key: 0, class: "row" },
      Eh = Object(a["j"])(
        "span",
        {
          style: {
            color: "#FDB43A",
            "text-transform": "none",
            "font-size": "14px",
            "letter-spacing": "normal",
            "font-weight": "400",
          },
        },
        "Verifying in progress:",
        -1
      ),
      Th = { class: "countdown" },
      Rh = { key: 1, style: { color: "#ff4c2e" } },
      Ih = Object(a["j"])(
        "div",
        { class: "info" },
        " Join our global telegram channel ",
        -1
      ),
      Lh = { class: "row" },
      Ph = Object(a["j"])(
        "div",
        { class: "link" },
        [
          Object(a["j"])("img", { alt: "", src: Sg.a }),
          Object(a["i"])(" https://t.me/MechMaster_Official "),
        ],
        -1
      ),
      Uh = { key: 0, style: { "font-size": "14px", padding: "0 8px" } },
      Bh = { key: 1, style: { "font-size": "14px" } },
      Dh = { key: 2, style: { "font-size": "14px", color: "white" } },
      Nh = Object(a["j"])(
        "div",
        { class: "info red" },
        " NOTE: Only those who have joined the global group and announcement channel of Mech Master are eligible to receive the reward. ",
        -1
      ),
      Fh = { key: 0, class: "row" },
      Vh = Object(a["j"])(
        "span",
        {
          style: {
            color: "#FDB43A",
            "text-transform": "none",
            "font-size": "14px",
            "letter-spacing": "normal",
            "font-weight": "400",
          },
        },
        "Verifying in progress:",
        -1
      ),
      qh = { class: "countdown" },
      Gh = { key: 1, style: { color: "#ff4c2e" } },
      Hh = Object(a["j"])(
        "div",
        { class: "info" },
        " Join our announcement telegram channel ",
        -1
      ),
      zh = { class: "row" },
      Wh = Object(a["j"])(
        "div",
        { class: "link" },
        [
          Object(a["j"])("img", { alt: "", src: Sg.a }),
          Object(a["i"])(" https://t.me/MechMaster_ANN "),
        ],
        -1
      ),
      Kh = { key: 0, style: { "font-size": "14px", padding: "0 8px" } },
      Qh = { key: 1, style: { "font-size": "14px" } },
      Yh = { key: 2, style: { "font-size": "14px", color: "white" } },
      Xh = Object(a["j"])(
        "div",
        { class: "info red" },
        " NOTE: Only those who have joined the global group and announcement channel of Mech Master are eligible to receive the reward. ",
        -1
      ),
      Jh = { key: 3, class: "wallet" },
      Zh = { key: 0, class: "metamask" },
      _h = Object(a["j"])(
        "div",
        { class: "info" },
        " BSC digital wallet connected to this account: ",
        -1
      ),
      $h = { class: "wallet-info" },
      eO = Object(a["j"])("img", { alt: "", src: Nb.a }, null, -1),
      tO = Object(a["j"])("img", { alt: "", src: Gb.a }, null, -1),
      nO = { class: "metamask" },
      aO = Object(a["j"])(
        "div",
        { class: "info" },
        "Please unlock your MetaMask wallet and allow the connection:",
        -1
      ),
      iO = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["j"])(
            "a",
            { href: "https://metamask.io/", target: "_blank" },
            "Download"
          ),
          Object(a["i"])(" the metamask extension. "),
        ],
        -1
      ),
      cO = { class: "question" },
      rO = {
        key: 0,
        width: "12",
        height: "11",
        viewBox: "0 0 12 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      sO = Object(a["j"])(
        "path",
        {
          d: "M11.2282 0.572552L10.9158 0.30417C10.3973 -0.141435 9.61808 -0.091765 9.16027 0.415905L3.93437 6.21039L2.35691 4.85179C1.83892 4.40568 1.05958 4.45435 0.601225 4.96148L0.325017 5.26711C0.101025 5.51482 -0.0152769 5.84158 0.00161289 6.17535C0.0186692 6.50894 0.16749 6.82211 0.41558 7.04601L3.30714 9.69393C3.55749 9.92903 3.893 10.0516 4.23594 10.0334C4.57887 10.0153 4.89949 9.85774 5.12351 9.59742L11.3619 2.34884C11.5799 2.09558 11.6882 1.76616 11.6631 1.43308C11.638 1.09975 11.4816 0.790264 11.2282 0.572552Z",
          fill: "#7DE0FF",
        },
        null,
        -1
      ),
      oO = { class: "task" },
      lO = { class: "row" },
      uO = Object(a["j"])("span", null, "Complete Gleam Task", -1),
      dO = Object(a["j"])("div", { class: "spacer" }, null, -1),
      bO = { key: 0, style: { color: "#FDB43A" } },
      jO = { key: 1 },
      mO = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      pO = Object(a["j"])(
        "div",
        { class: "info" },
        " Complete the following steps to unlock the missions and be eligible for the Airdrops Campaign reward: ",
        -1
      ),
      fO = Object(a["j"])(
        "div",
        { class: "info red" },
        " NOTE: You should use your Mech Master login email to log in and do Gleam. ",
        -1
      ),
      gO = Object(a["j"])(
        "div",
        { class: "info" },
        " Click on the Gleam link below and complete the required tasks: ",
        -1
      ),
      hO = { class: "row" },
      OO = { class: "link" },
      vO = Object(a["j"])("img", { alt: "", src: Pg.a }, null, -1),
      AO = Object(a["j"])("span", { style: { padding: "0 8px" } }, "Go", -1),
      wO = Object(a["j"])(
        "div",
        { class: "info" },
        " MECHMASTER reserves the right to revoke received rewards in case one of these criterias is no longer met. ",
        -1
      ),
      yO = { class: "answer" },
      kO = {
        key: 0,
        width: "12",
        height: "11",
        viewBox: "0 0 12 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      CO = Object(a["j"])(
        "path",
        {
          d: "M11.2282 0.572552L10.9158 0.30417C10.3973 -0.141435 9.61808 -0.091765 9.16027 0.415905L3.93437 6.21039L2.35691 4.85179C1.83892 4.40568 1.05958 4.45435 0.601225 4.96148L0.325017 5.26711C0.101025 5.51482 -0.0152769 5.84158 0.00161289 6.17535C0.0186692 6.50894 0.16749 6.82211 0.41558 7.04601L3.30714 9.69393C3.55749 9.92903 3.893 10.0516 4.23594 10.0334C4.57887 10.0153 4.89949 9.85774 5.12351 9.59742L11.3619 2.34884C11.5799 2.09558 11.6882 1.76616 11.6631 1.43308C11.638 1.09975 11.4816 0.790264 11.2282 0.572552Z",
          fill: "#7DE0FF",
        },
        null,
        -1
      ),
      xO = Object(a["i"])("I used the email "),
      MO = { class: "highlight" },
      SO = Object(a["i"])(" to complete the task on Gleam"),
      EO = { class: "answer" },
      TO = {
        key: 0,
        width: "12",
        height: "11",
        viewBox: "0 0 12 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      RO = Object(a["j"])(
        "path",
        {
          d: "M11.2282 0.572552L10.9158 0.30417C10.3973 -0.141435 9.61808 -0.091765 9.16027 0.415905L3.93437 6.21039L2.35691 4.85179C1.83892 4.40568 1.05958 4.45435 0.601225 4.96148L0.325017 5.26711C0.101025 5.51482 -0.0152769 5.84158 0.00161289 6.17535C0.0186692 6.50894 0.16749 6.82211 0.41558 7.04601L3.30714 9.69393C3.55749 9.92903 3.893 10.0516 4.23594 10.0334C4.57887 10.0153 4.89949 9.85774 5.12351 9.59742L11.3619 2.34884C11.5799 2.09558 11.6882 1.76616 11.6631 1.43308C11.638 1.09975 11.4816 0.790264 11.2282 0.572552Z",
          fill: "#7DE0FF",
        },
        null,
        -1
      ),
      IO = Object(a["j"])(
        "span",
        null,
        "Or enter your email used on Gleam",
        -1
      ),
      LO = { key: 2, class: "link" },
      PO = Object(a["j"])("img", { alt: "", src: Bg.a }, null, -1),
      UO = { class: "row" },
      BO = {
        key: 0,
        style: { margin: "8px 12px 8px 4px" },
        alt: "",
        src: Nf.a,
      },
      DO = Object(a["j"])("div", { class: "spacer" }, null, -1),
      NO = Object(a["j"])(
        "div",
        { class: "info" },
        " Enter the link of your personal accounts ",
        -1
      ),
      FO = { class: "row offset-left" },
      VO = Object(a["j"])("img", { alt: "", src: Ng.a }, null, -1),
      qO = { class: "row offset-left" },
      GO = Object(a["j"])("img", { alt: "", src: Vg.a }, null, -1),
      HO = { class: "row offset-left" },
      zO = Object(a["j"])("img", { alt: "", src: Gg.a }, null, -1),
      WO = { class: "row offset-left" },
      KO = Object(a["j"])("img", { alt: "", src: zg.a }, null, -1),
      QO = { key: 1, class: "row" },
      YO = { class: "dropdown" },
      XO = Object(a["j"])("img", { alt: "", src: Ig.a }, null, -1),
      JO = { class: "dropdown-list" },
      ZO = { key: 0, style: { color: "#FDB43A" } },
      _O = { key: 1 },
      $O = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      ev = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["i"])(" Create a Tweet with hashtag "),
          Object(a["j"])(
            "span",
            { class: "highlight" },
            "#MechMaster #Gunpla #Mecha"
          ),
          Object(a["i"])(". "),
        ],
        -1
      ),
      tv = Object(a["j"])(
        "div",
        { class: "info" },
        " Send us the link of the Tweet: ",
        -1
      ),
      nv = { key: 2, class: "row" },
      av = Object(a["j"])(
        "div",
        { class: "info" },
        "Manual check may be required for Point to be credited.",
        -1
      ),
      iv = { key: 0, style: { color: "#FDB43A" } },
      cv = { key: 1 },
      rv = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      sv = { class: "info" },
      ov = Object(a["i"])(" Quote tweet about "),
      lv = { class: "highlight" },
      uv = Object(a["i"])(
        " with @MechMaster_io and hashtags #NFT #Mecha #PlaytoEarn #BlockchainGame #MechMaster . "
      ),
      dv = { class: "row" },
      bv = Object(a["j"])(
        "img",
        { alt: "", src: Kg.a, style: { "margin-right": "8px" } },
        null,
        -1
      ),
      jv = Object(a["i"])(" Open Tweet "),
      mv = Object(a["j"])(
        "div",
        { class: "info" },
        " Send us the link of the Tweet: ",
        -1
      ),
      pv = { key: 2, class: "row" },
      fv = Object(a["j"])(
        "div",
        { class: "info" },
        "Manual check may be required for Point to be credited.",
        -1
      ),
      gv = { key: 0, style: { color: "#FDB43A" } },
      hv = { class: "info" },
      Ov = Object(a["i"])(
        " Help us to spread a word about the event by write a tweet with hashtags "
      ),
      vv = { class: "highlight" },
      Av = Object(a["i"])(". "),
      wv = { class: "row" },
      yv = Object(a["j"])(
        "img",
        { alt: "", src: Kg.a, style: { "margin-right": "8px" } },
        null,
        -1
      ),
      kv = Object(a["i"])(" Open to Tweet "),
      Cv = Object(a["j"])(
        "div",
        { class: "info" },
        " Send us the link of the Tweet: ",
        -1
      ),
      xv = { class: "row" },
      Mv = { key: 0, class: "info red" },
      Sv = Object(a["j"])(
        "div",
        { class: "info" },
        "Manual check may be required for Point to be credited.",
        -1
      ),
      Ev = { key: 0, style: { color: "#FDB43A" } },
      Tv = { key: 1 },
      Rv = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      Iv = { class: "info" },
      Lv = Object(a["i"])(" Share our post about "),
      Pv = { class: "highlight" },
      Uv = Object(a["i"])(" on Facebook and get at least 5 likes. "),
      Bv = { class: "row" },
      Dv = Object(a["j"])(
        "img",
        { alt: "", src: Yg.a, style: { "margin-right": "8px", width: "24px" } },
        null,
        -1
      ),
      Nv = Object(a["i"])(" Open the post "),
      Fv = Object(a["j"])(
        "div",
        { class: "info" },
        " Send us the link of the shared post: ",
        -1
      ),
      Vv = { class: "row" },
      qv = Object(a["i"])("Resubmit"),
      Gv = Object(a["i"])("Submit"),
      Hv = { key: 0, style: { color: "#FF3838" } },
      zv = Object(a["j"])(
        "div",
        { class: "info" },
        "Manual check may be required for Point to be credited.",
        -1
      ),
      Wv = { key: 0, style: { color: "#FDB43A" } },
      Kv = { key: 1 },
      Qv = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      Yv = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["i"])(
            " Share the latest Medium post by a tweet and mention "
          ),
          Object(a["j"])("span", { class: "highlight" }, "@mechmaster_io"),
        ],
        -1
      ),
      Xv = { class: "row" },
      Jv = Object(a["j"])(
        "div",
        { class: "info" },
        " Send us the link of the Tweet: ",
        -1
      ),
      Zv = { key: 2, class: "row" },
      _v = Object(a["j"])(
        "div",
        { class: "info" },
        "MECH MASTER reserves the right to revoke received rewards in case one of these criterias will no longer be met. ",
        -1
      ),
      $v = { key: 0, style: { color: "#FDB43A" } },
      eA = { key: 1 },
      tA = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      nA = Object(a["j"])(
        "div",
        { class: "info" },
        " Like, Subscribe and Comment on the video: ",
        -1
      ),
      aA = { class: "video" },
      iA = Object(a["j"])("img", { alt: "", src: Jg.a }, null, -1),
      cA = Object(a["j"])("div", null, "Mech Master Trailer", -1),
      rA = Object(a["j"])(
        "img",
        { style: { "margin-right": "8px" }, alt: "", src: _g.a },
        null,
        -1
      ),
      sA = Object(a["i"])(" Open on Youtube "),
      oA = Object(a["j"])(
        "div",
        { class: "info" },
        " Link your YouTube comment: ",
        -1
      ),
      lA = { class: "row" },
      uA = Object(a["j"])(
        "div",
        { class: "info" },
        " A manual check may be required for points being credited. ",
        -1
      ),
      dA = Object(a["j"])(
        "div",
        { class: "info" },
        ' Tip to get your YouTube comment link: Right click on "time" next to your comment, then copy the link address ',
        -1
      ),
      bA = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["i"])(" Read "),
          Object(a["j"])(
            "a",
            { href: "https://whitepaper.mechmaster.io/", target: "_blank" },
            "Whitepaper Mech Master"
          ),
          Object(a["i"])(" project and answer the question below. "),
        ],
        -1
      ),
      jA = { class: "question" },
      mA = {
        key: 0,
        width: "12",
        height: "11",
        viewBox: "0 0 12 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      pA = Object(a["j"])(
        "path",
        {
          d: "M11.2282 0.572552L10.9158 0.30417C10.3973 -0.141435 9.61808 -0.091765 9.16027 0.415905L3.93437 6.21039L2.35691 4.85179C1.83892 4.40568 1.05958 4.45435 0.601225 4.96148L0.325017 5.26711C0.101025 5.51482 -0.0152769 5.84158 0.00161289 6.17535C0.0186692 6.50894 0.16749 6.82211 0.41558 7.04601L3.30714 9.69393C3.55749 9.92903 3.893 10.0516 4.23594 10.0334C4.57887 10.0153 4.89949 9.85774 5.12351 9.59742L11.3619 2.34884C11.5799 2.09558 11.6882 1.76616 11.6631 1.43308C11.638 1.09975 11.4816 0.790264 11.2282 0.572552Z",
          fill: "#7DE0FF",
        },
        null,
        -1
      ),
      fA = Object(a["j"])(
        "div",
        { class: "row red" },
        [
          Object(a["j"])("img", {
            alt: "",
            src: eh.a,
            style: { "margin-right": "4px" },
          }),
          Object(a["i"])(" Sorry, your answer is wrong! "),
        ],
        -1
      ),
      gA = { class: "row" },
      hA = Object(a["i"])(" Please wait and try again after 2 minutes "),
      OA = { class: "countdown" },
      vA = { key: 1, class: "row" },
      AA = Object(a["j"])("img", { alt: "", src: Bb.a }, null, -1),
      wA = Object(a["j"])(
        "p",
        { style: { "margin-left": "4px", color: "#3FD845" } },
        "Congratulations, you got the correct answer!!!",
        -1
      ),
      yA = { class: "info" },
      kA = { class: "question" },
      CA = {
        key: 0,
        width: "12",
        height: "11",
        viewBox: "0 0 12 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      xA = Object(a["j"])(
        "path",
        {
          d: "M11.2282 0.572552L10.9158 0.30417C10.3973 -0.141435 9.61808 -0.091765 9.16027 0.415905L3.93437 6.21039L2.35691 4.85179C1.83892 4.40568 1.05958 4.45435 0.601225 4.96148L0.325017 5.26711C0.101025 5.51482 -0.0152769 5.84158 0.00161289 6.17535C0.0186692 6.50894 0.16749 6.82211 0.41558 7.04601L3.30714 9.69393C3.55749 9.92903 3.893 10.0516 4.23594 10.0334C4.57887 10.0153 4.89949 9.85774 5.12351 9.59742L11.3619 2.34884C11.5799 2.09558 11.6882 1.76616 11.6631 1.43308C11.638 1.09975 11.4816 0.790264 11.2282 0.572552Z",
          fill: "#7DE0FF",
        },
        null,
        -1
      ),
      MA = Object(a["j"])(
        "div",
        { class: "row red" },
        [
          Object(a["j"])("img", {
            alt: "",
            src: eh.a,
            style: { "margin-right": "4px" },
          }),
          Object(a["i"])(" Sorry, your answer is wrong! "),
        ],
        -1
      ),
      SA = { class: "row" },
      EA = Object(a["i"])(" Please wait and try again after 2 minutes "),
      TA = { class: "countdown" },
      RA = Object(a["j"])(
        "div",
        { class: "row" },
        [
          Object(a["j"])("img", { alt: "", src: Bb.a }),
          Object(a["j"])(
            "p",
            { style: { "margin-left": "4px", color: "#3FD845" } },
            "Congratulations, you got the correct answer!!!"
          ),
        ],
        -1
      ),
      IA = Object(a["j"])(
        "div",
        { class: "info" },
        " Hit Like and join us on Facebook: ",
        -1
      ),
      LA = { class: "row" },
      PA = { class: "link" },
      UA = Object(a["j"])("img", { alt: "", src: Pg.a }, null, -1),
      BA = Object(a["j"])("span", { style: { padding: "0 8px" } }, "Go", -1),
      DA = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["i"])(" Refer to the "),
          Object(a["j"])("a", { href: "#", target: "_blank" }, "Character"),
          Object(a["i"])(
            " section of the Landing page Mech Master and answer the following question: "
          ),
        ],
        -1
      ),
      NA = { class: "question" },
      FA = {
        class: "row mecha-answer",
        style: { "align-items": "flex-start" },
      },
      VA = { style: { padding: "16px" } },
      qA = {
        key: 0,
        width: "12",
        height: "11",
        viewBox: "0 0 12 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      GA = Object(a["j"])(
        "path",
        {
          d: "M11.2282 0.572552L10.9158 0.30417C10.3973 -0.141435 9.61808 -0.091765 9.16027 0.415905L3.93437 6.21039L2.35691 4.85179C1.83892 4.40568 1.05958 4.45435 0.601225 4.96148L0.325017 5.26711C0.101025 5.51482 -0.0152769 5.84158 0.00161289 6.17535C0.0186692 6.50894 0.16749 6.82211 0.41558 7.04601L3.30714 9.69393C3.55749 9.92903 3.893 10.0516 4.23594 10.0334C4.57887 10.0153 4.89949 9.85774 5.12351 9.59742L11.3619 2.34884C11.5799 2.09558 11.6882 1.76616 11.6631 1.43308C11.638 1.09975 11.4816 0.790264 11.2282 0.572552Z",
          fill: "#7DE0FF",
        },
        null,
        -1
      ),
      HA = { style: { "text-transform": "capitalize" } },
      zA = Object(a["j"])(
        "div",
        { class: "row red" },
        [
          Object(a["j"])("img", {
            alt: "",
            src: eh.a,
            style: { "margin-right": "4px" },
          }),
          Object(a["i"])(" Sorry, your answer is wrong! "),
        ],
        -1
      ),
      WA = { class: "row" },
      KA = Object(a["i"])(" Please wait and try again after 2 minutes "),
      QA = { class: "countdown" },
      YA = { key: 1, class: "row" },
      XA = Object(a["j"])("img", { alt: "", src: Bb.a }, null, -1),
      JA = Object(a["j"])(
        "p",
        { style: { "margin-left": "4px", color: "#3FD845" } },
        "Congratulations, you got the correct answer!!!",
        -1
      ),
      ZA = { key: 0, style: { color: "#FDB43A" } },
      _A = { key: 1 },
      $A = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      ew = Object(a["j"])(
        "div",
        { class: "info" },
        " Publish a post on Facebook about the Mech Master, mention Mech Master page and a friend, send us a link: ",
        -1
      ),
      tw = { key: 2, class: "row" },
      nw = Object(a["j"])(
        "div",
        { class: "info" },
        " Point will be added after a manual check. ",
        -1
      ),
      aw = Object(a["j"])(
        "div",
        { class: "info" },
        " Follow the invitation link to join Discord sever: ",
        -1
      ),
      iw = { class: "row" },
      cw = Object(a["j"])(
        "div",
        { class: "icon" },
        [Object(a["j"])("img", { alt: "", src: nh.a })],
        -1
      ),
      rw = { class: "link" },
      sw = Object(a["j"])("span", { style: { padding: "0 8px" } }, "Go", -1),
      ow = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["i"])(" and send this code to "),
          Object(a["j"])("span", { class: "highlight" }, "#welcome"),
          Object(a["i"])(" channel "),
        ],
        -1
      ),
      lw = { class: "row" },
      uw = { class: "link" },
      dw = { key: 0, class: "notification" },
      bw = Object(a["j"])(
        "div",
        { class: "info" },
        " Confirmation from the bot will follow. ",
        -1
      ),
      jw = { key: 15, class: "info" },
      mw = { key: 0, style: { color: "#FDB43A" } },
      pw = { key: 1 },
      fw = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      gw = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["i"])(
            " Publicly repost Mech Master Airdrop Event post on your story and mention "
          ),
          Object(a["j"])("span", { class: "highlight" }, "@mechmaster_io"),
        ],
        -1
      ),
      hw = { key: 2, class: "row" },
      Ow = Object(a["j"])(
        "div",
        { class: "info" },
        " MECH MASTER reserves the right to revoke received rewards in case one of these criterias will no longer be met. ",
        -1
      ),
      vw = { key: 0, style: { color: "#FDB43A" } },
      Aw = { key: 1 },
      ww = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      yw = Object(a["j"])(
        "div",
        { class: "info" },
        " Film your Mech Master experience, upload it to YouTube and submit a link: ",
        -1
      ),
      kw = { key: 2, class: "row" },
      Cw = Object(a["j"])(
        "div",
        { class: "info", style: { "font-weight": "600" } },
        " Rule Introduction: ",
        -1
      ),
      xw = Object(a["j"])(
        "div",
        { class: "info" },
        [
          Object(a["j"])(
            "div",
            null,
            "1. Video need to be a minimum of 1 min in length."
          ),
          Object(a["j"])(
            "div",
            null,
            "2. Content must focus on a relevant topic: project features, latest project token updates, blockchain, etc. "
          ),
          Object(a["j"])(
            "div",
            null,
            "3. Only original content will be accepted. Copy from the project website, YouTube channels or from others' work will be rejected. "
          ),
          Object(a["j"])(
            "div",
            null,
            "4. Videos should never be removed within the duration of the Airdrop event. Removal/deletion will result in disqualification. "
          ),
          Object(a["j"])(
            "div",
            null,
            "5. By joining this program, all participants accept that the project team can use all of these videos as marketing materials. "
          ),
          Object(a["j"])(
            "div",
            null,
            "6. All posts and articles must be published online and accessible by everyone."
          ),
          Object(a["j"])(
            "div",
            null,
            "7. Manual check may be required for Points to be credited."
          ),
        ],
        -1
      ),
      Mw = { key: 0, style: { color: "#FDB43A" } },
      Sw = { key: 1 },
      Ew = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      Tw = Object(a["j"])(
        "div",
        { class: "info" },
        " Click on the Gleam link below and complete the required tasks: ",
        -1
      ),
      Rw = { class: "row" },
      Iw = { class: "link" },
      Lw = Object(a["j"])("img", { alt: "", src: Pg.a }, null, -1),
      Pw = Object(a["j"])("span", { style: { padding: "0 8px" } }, "Go", -1),
      Uw = Object(a["j"])(
        "div",
        { class: "info red" },
        " NOTE: You should use your Mech Master login email to log in and do Gleam. ",
        -1
      ),
      Bw = Object(a["j"])(
        "div",
        { class: "info" },
        " MECHMASTER reserves the right to revoke received rewards in case one of these criterias is no longer met. ",
        -1
      ),
      Dw = Object(a["j"])(
        "div",
        { class: "info" },
        " Enter your email on Gleam: ",
        -1
      ),
      Nw = { class: "row" },
      Fw = { class: "row" },
      Vw = { class: "dropdown" },
      qw = Object(a["j"])("img", { alt: "", src: Ig.a }, null, -1),
      Gw = { class: "dropdown-list" },
      Hw = { key: 0, class: "info" },
      zw = Object(a["i"])(" Join National Telegram: "),
      Ww = { class: "row" },
      Kw = { class: "link" },
      Qw = Object(a["j"])("img", { alt: "", src: ih.a }, null, -1),
      Yw = Object(a["j"])("span", { style: { padding: "0 8px" } }, "Go", -1),
      Xw = { key: 1, style: { width: "100%" }, alt: "", src: rh.a };
    Object(a["v"])();
    var Jw = sh(function (e, t, n, i, c, r) {
        var s,
          o = Object(a["D"])("status-box");
        return (
          Object(a["u"])(),
          Object(a["f"])("div", oh, [
            Object(a["j"])("div", lh, [
              (Object(a["u"])(!0),
              Object(a["f"])(
                a["a"],
                null,
                Object(a["B"])(r.events, function (e, t) {
                  var n;
                  return (
                    Object(a["u"])(),
                    Object(a["f"])(
                      "div",
                      {
                        key: t,
                        onClick: function (t) {
                          return r.switchDay(e);
                        },
                        class: "tab-bar_item ".concat(
                          (null === (n = c.selectedDay) || void 0 === n
                            ? void 0
                            : n.name) === e.name
                            ? "selected"
                            : ""
                        ),
                      },
                      [
                        Object(a["j"])(
                          "span",
                          uh,
                          Object(a["F"])(r.getDay(e)),
                          1
                        ),
                        Object(a["j"])(
                          "div",
                          {
                            class: "status",
                            style: { background: r.getDayStatus(e) },
                          },
                          null,
                          4
                        ),
                        Object(a["j"])("div", dh, [
                          bh,
                          Object(a["i"])(
                            " " +
                              Object(a["F"])(r.getCompletedUser(e.name)) +
                              " ",
                            1
                          ),
                          Object(a["j"])(
                            "div",
                            jh,
                            " User completed: " +
                              Object(a["F"])(r.getCompletedUser(e.name)),
                            1
                          ),
                        ]),
                      ],
                      10,
                      ["onClick"]
                    )
                  );
                }),
                128
              )),
            ]),
            Object(a["j"])("div", mh, [
              c.selectedDay && c.selectedDay.tasks.length
                ? (Object(a["u"])(),
                  Object(a["f"])(
                    a["a"],
                    { key: 0 },
                    [
                      "Basic" ===
                      (null === (s = c.selectedDay) || void 0 === s
                        ? void 0
                        : s.name)
                        ? (Object(a["u"])(),
                          Object(a["f"])(
                            a["a"],
                            { key: 0 },
                            [
                              (Object(a["u"])(!0),
                              Object(a["f"])(
                                a["a"],
                                null,
                                Object(a["B"])(
                                  r.beginnerActionTask,
                                  function (e, i) {
                                    return (
                                      Object(a["u"])(),
                                      Object(a["f"])(
                                        "div",
                                        { key: i, class: "task bb" },
                                        [
                                          Object(a["j"])("div", ph, [
                                            0 === c.selectedDay.status
                                              ? (Object(a["u"])(),
                                                Object(a["f"])("img", fh))
                                              : (Object(a["u"])(),
                                                Object(a["f"])(
                                                  o,
                                                  { key: 1, status: e.status },
                                                  null,
                                                  8,
                                                  ["status"]
                                                )),
                                            Object(a["j"])(
                                              "span",
                                              null,
                                              Object(a["F"])(e.task_name),
                                              1
                                            ),
                                            gh,
                                            Object(a["j"])(
                                              "div",
                                              {
                                                style: {
                                                  opacity:
                                                    2 === e.status ? 0.5 : 1,
                                                },
                                                class: "score",
                                              },
                                              Object(a["F"])(e.point) +
                                                " Point ",
                                              5
                                            ),
                                          ]),
                                          e.type ===
                                          c.DAILY_TASK_TYPE.PERSONAL_INFO
                                            ? (Object(a["u"])(),
                                              Object(a["f"])(
                                                a["a"],
                                                { key: 0 },
                                                [
                                                  hh,
                                                  Object(a["j"])("div", Oh, [
                                                    vh,
                                                    Object(a["L"])(
                                                      Object(a["j"])(
                                                        "input",
                                                        {
                                                          placeholder:
                                                            "Telegram @username",
                                                          "onUpdate:modelValue":
                                                            t[1] ||
                                                            (t[1] = function (
                                                              e
                                                            ) {
                                                              return (c.personalInfo.telegram =
                                                                e);
                                                            }),
                                                        },
                                                        null,
                                                        512
                                                      ),
                                                      [
                                                        [
                                                          a["I"],
                                                          c.personalInfo
                                                            .telegram,
                                                        ],
                                                      ]
                                                    ),
                                                  ]),
                                                  Object(a["j"])("div", Ah, [
                                                    wh,
                                                    Object(a["L"])(
                                                      Object(a["j"])(
                                                        "input",
                                                        {
                                                          placeholder:
                                                            "Twitter @username",
                                                          "onUpdate:modelValue":
                                                            t[2] ||
                                                            (t[2] = function (
                                                              e
                                                            ) {
                                                              return (c.personalInfo.twitter =
                                                                e);
                                                            }),
                                                        },
                                                        null,
                                                        512
                                                      ),
                                                      [
                                                        [
                                                          a["I"],
                                                          c.personalInfo
                                                            .twitter,
                                                        ],
                                                      ]
                                                    ),
                                                  ]),
                                                  yh,
                                                  Object(a["j"])("div", kh, [
                                                    Object(a["j"])("div", Ch, [
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class:
                                                            "dropdown-value",
                                                          onClick:
                                                            t[5] ||
                                                            (t[5] = function (
                                                              e
                                                            ) {
                                                              return (c.menu =
                                                                !c.menu);
                                                            }),
                                                        },
                                                        [
                                                          Object(a["L"])(
                                                            Object(a["j"])(
                                                              "input",
                                                              {
                                                                onInput:
                                                                  t[3] ||
                                                                  (t[3] =
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return (c.menu =
                                                                        !0);
                                                                    }),
                                                                "onUpdate:modelValue":
                                                                  t[4] ||
                                                                  (t[4] =
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return (c.selectedNation =
                                                                        e);
                                                                    }),
                                                              },
                                                              null,
                                                              544
                                                            ),
                                                            [
                                                              [
                                                                a["I"],
                                                                c.selectedNation,
                                                              ],
                                                            ]
                                                          ),
                                                          xh,
                                                        ]
                                                      ),
                                                      Object(a["j"])(
                                                        a["c"],
                                                        { name: "slide-down" },
                                                        {
                                                          default: sh(
                                                            function () {
                                                              return [
                                                                Object(a["L"])(
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "div",
                                                                    Mh,
                                                                    [
                                                                      (Object(
                                                                        a["u"]
                                                                      )(!0),
                                                                      Object(
                                                                        a["f"]
                                                                      )(
                                                                        a["a"],
                                                                        null,
                                                                        Object(
                                                                          a["B"]
                                                                        )(
                                                                          r.nationsList,
                                                                          function (
                                                                            e,
                                                                            t
                                                                          ) {
                                                                            return (
                                                                              Object(
                                                                                a[
                                                                                  "u"
                                                                                ]
                                                                              )(),
                                                                              Object(
                                                                                a[
                                                                                  "f"
                                                                                ]
                                                                              )(
                                                                                "div",
                                                                                {
                                                                                  class:
                                                                                    "dropdown-item",
                                                                                  key: t,
                                                                                  onClick:
                                                                                    function (
                                                                                      t
                                                                                    ) {
                                                                                      (c.selectedNation =
                                                                                        e),
                                                                                        (c.menu =
                                                                                          !1);
                                                                                    },
                                                                                },
                                                                                Object(
                                                                                  a[
                                                                                    "F"
                                                                                  ]
                                                                                )(
                                                                                  e
                                                                                ),
                                                                                9,
                                                                                [
                                                                                  "onClick",
                                                                                ]
                                                                              )
                                                                            );
                                                                          }
                                                                        ),
                                                                        128
                                                                      )),
                                                                    ],
                                                                    512
                                                                  ),
                                                                  [
                                                                    [
                                                                      a["J"],
                                                                      c.menu,
                                                                    ],
                                                                  ]
                                                                ),
                                                              ];
                                                            }
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                    ]),
                                                  ]),
                                                  c.error.personalInfo
                                                    ? (Object(a["u"])(),
                                                      Object(a["f"])(
                                                        "div",
                                                        {
                                                          key: 0,
                                                          class: "info red",
                                                          innerHTML:
                                                            c.error
                                                              .personalInfo,
                                                        },
                                                        null,
                                                        8,
                                                        ["innerHTML"]
                                                      ))
                                                    : Object(a["g"])("", !0),
                                                  Object(a["j"])(
                                                    "div",
                                                    {
                                                      disabled: n.ended,
                                                      class: "btn btn-cyan",
                                                      onClick: function (t) {
                                                        return r.submitPersonalInfo(
                                                          e
                                                        );
                                                      },
                                                    },
                                                    Object(a["F"])(
                                                      0 === e.status
                                                        ? "Submit"
                                                        : "Update"
                                                    ),
                                                    9,
                                                    ["disabled", "onClick"]
                                                  ),
                                                ],
                                                64
                                              ))
                                            : Object(a["g"])("", !0),
                                          e.type ===
                                          c.DAILY_TASK_TYPE.GLOBAL_TELEGRAM
                                            ? (Object(a["u"])(),
                                              Object(a["f"])(
                                                a["a"],
                                                { key: 1 },
                                                [
                                                  1 === e.status
                                                    ? (Object(a["u"])(),
                                                      Object(a["f"])(
                                                        a["a"],
                                                        { key: 0 },
                                                        [
                                                          c.countdownVerify
                                                            .global > 0
                                                            ? (Object(a["u"])(),
                                                              Object(a["f"])(
                                                                "div",
                                                                Sh,
                                                                [
                                                                  Eh,
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "div",
                                                                    Th,
                                                                    Object(
                                                                      a["F"]
                                                                    )(
                                                                      r.displayTimer(
                                                                        c
                                                                          .countdownVerify
                                                                          .global,
                                                                        !0
                                                                      )
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                              ))
                                                            : (Object(a["u"])(),
                                                              Object(a["f"])(
                                                                "div",
                                                                Rh,
                                                                "You have not joined Mech Master global group. Please try again."
                                                              )),
                                                        ],
                                                        64
                                                      ))
                                                    : Object(a["g"])("", !0),
                                                  Ih,
                                                  Object(a["j"])("div", Lh, [
                                                    Ph,
                                                    Object(a["j"])(
                                                      "div",
                                                      {
                                                        class: "btn ".concat(
                                                          e.status > 0 &&
                                                            (2 === e.status
                                                              ? "btn-green"
                                                              : "btn-yellow")
                                                        ),
                                                        style: { margin: "0" },
                                                        onClick: function (t) {
                                                          return r.submitTelegram(
                                                            e,
                                                            "https://t.me/MechMaster_Official",
                                                            "global"
                                                          );
                                                        },
                                                      },
                                                      [
                                                        0 === e.status
                                                          ? (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "span",
                                                              Uh,
                                                              "Go"
                                                            ))
                                                          : 1 === e.status
                                                          ? (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "span",
                                                              Bh,
                                                              " Verifying "
                                                            ))
                                                          : 2 === e.status
                                                          ? (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "span",
                                                              Dh,
                                                              " Verified "
                                                            ))
                                                          : Object(a["g"])(
                                                              "",
                                                              !0
                                                            ),
                                                      ],
                                                      10,
                                                      ["onClick"]
                                                    ),
                                                  ]),
                                                  Nh,
                                                ],
                                                64
                                              ))
                                            : Object(a["g"])("", !0),
                                          e.type ===
                                          c.DAILY_TASK_TYPE.ANN_TELEGRAM
                                            ? (Object(a["u"])(),
                                              Object(a["f"])(
                                                a["a"],
                                                { key: 2 },
                                                [
                                                  1 === e.status
                                                    ? (Object(a["u"])(),
                                                      Object(a["f"])(
                                                        a["a"],
                                                        { key: 0 },
                                                        [
                                                          c.countdownVerify
                                                            .ann > 0
                                                            ? (Object(a["u"])(),
                                                              Object(a["f"])(
                                                                "div",
                                                                Fh,
                                                                [
                                                                  Vh,
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "div",
                                                                    qh,
                                                                    Object(
                                                                      a["F"]
                                                                    )(
                                                                      r.displayTimer(
                                                                        c
                                                                          .countdownVerify
                                                                          .ann,
                                                                        !0
                                                                      )
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                              ))
                                                            : (Object(a["u"])(),
                                                              Object(a["f"])(
                                                                "div",
                                                                Gh,
                                                                "You have not joined Mech Master announcement channel. Please try again."
                                                              )),
                                                        ],
                                                        64
                                                      ))
                                                    : Object(a["g"])("", !0),
                                                  Hh,
                                                  Object(a["j"])("div", zh, [
                                                    Wh,
                                                    Object(a["j"])(
                                                      "div",
                                                      {
                                                        class: "btn ".concat(
                                                          e.status > 0 &&
                                                            (2 === e.status
                                                              ? "btn-green"
                                                              : "btn-yellow")
                                                        ),
                                                        style: { margin: "0" },
                                                        onClick: function (t) {
                                                          return r.submitTelegram(
                                                            e,
                                                            "https://t.me/MechMaster_ANN",
                                                            "ann"
                                                          );
                                                        },
                                                      },
                                                      [
                                                        0 === e.status
                                                          ? (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "span",
                                                              Kh,
                                                              "Go"
                                                            ))
                                                          : 1 === e.status
                                                          ? (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "span",
                                                              Qh,
                                                              " Verifying "
                                                            ))
                                                          : 2 === e.status
                                                          ? (Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "span",
                                                              Yh,
                                                              " Verified "
                                                            ))
                                                          : Object(a["g"])(
                                                              "",
                                                              !0
                                                            ),
                                                      ],
                                                      10,
                                                      ["onClick"]
                                                    ),
                                                  ]),
                                                  Xh,
                                                ],
                                                64
                                              ))
                                            : Object(a["g"])("", !0),
                                          e.type === c.DAILY_TASK_TYPE.WALLET
                                            ? (Object(a["u"])(),
                                              Object(a["f"])("div", Jh, [
                                                r.address
                                                  ? (Object(a["u"])(),
                                                    Object(a["f"])("div", Zh, [
                                                      _h,
                                                      Object(a["j"])(
                                                        "div",
                                                        $h,
                                                        [
                                                          eO,
                                                          Object(a["j"])(
                                                            "span",
                                                            null,
                                                            Object(a["F"])(
                                                              r.address
                                                            ),
                                                            1
                                                          ),
                                                          Object(a["j"])(
                                                            "img",
                                                            {
                                                              onClick:
                                                                t[6] ||
                                                                (t[6] =
                                                                  function (e) {
                                                                    return r.copy(
                                                                      r.address
                                                                    );
                                                                  }),
                                                              alt: "",
                                                              src: Vb.a,
                                                            }
                                                          ),
                                                        ]
                                                      ),
                                                    ]))
                                                  : (Object(a["u"])(),
                                                    Object(a["f"])(
                                                      a["a"],
                                                      { key: 1 },
                                                      [
                                                        tO,
                                                        Object(a["j"])(
                                                          "div",
                                                          nO,
                                                          [
                                                            aO,
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.connectWallet(
                                                                      e
                                                                    );
                                                                  },
                                                              },
                                                              "Connect",
                                                              8,
                                                              ["onClick"]
                                                            ),
                                                            iO,
                                                          ]
                                                        ),
                                                      ],
                                                      64
                                                    )),
                                              ]))
                                            : Object(a["g"])("", !0),
                                          e.type ===
                                          c.DAILY_TASK_TYPE.DYNAMIC_QUESTION
                                            ? (Object(a["u"])(),
                                              Object(a["f"])(
                                                a["a"],
                                                { key: 4 },
                                                [
                                                  Object(a["j"])(
                                                    "div",
                                                    cO,
                                                    Object(a["F"])(
                                                      e.question.question
                                                    ),
                                                    1
                                                  ),
                                                  (Object(a["u"])(!0),
                                                  Object(a["f"])(
                                                    a["a"],
                                                    null,
                                                    Object(a["B"])(
                                                      e.question.answers,
                                                      function (t, n) {
                                                        return (
                                                          Object(a["u"])(),
                                                          Object(a["f"])(
                                                            "div",
                                                            {
                                                              class:
                                                                "answer ".concat(
                                                                  c.answer4[
                                                                    e.id
                                                                  ] === t
                                                                    ? "selected"
                                                                    : ""
                                                                ),
                                                              key: n,
                                                            },
                                                            [
                                                              Object(a["j"])(
                                                                "div",
                                                                {
                                                                  class: "box",
                                                                  onClick:
                                                                    function () {
                                                                      0 ===
                                                                        e.status &&
                                                                        (c.answer4[
                                                                          e.id
                                                                        ] = t);
                                                                    },
                                                                },
                                                                [
                                                                  c.answer4[
                                                                    e.id
                                                                  ] === t
                                                                    ? (Object(
                                                                        a["u"]
                                                                      )(),
                                                                      Object(
                                                                        a["f"]
                                                                      )(
                                                                        "svg",
                                                                        rO,
                                                                        [sO]
                                                                      ))
                                                                    : Object(
                                                                        a["g"]
                                                                      )("", !0),
                                                                ],
                                                                8,
                                                                ["onClick"]
                                                              ),
                                                              Object(a["j"])(
                                                                "span",
                                                                null,
                                                                Object(a["F"])(
                                                                  t
                                                                ),
                                                                1
                                                              ),
                                                            ],
                                                            2
                                                          )
                                                        );
                                                      }
                                                    ),
                                                    128
                                                  )),
                                                  0 === e.status
                                                    ? (Object(a["u"])(),
                                                      Object(a["f"])(
                                                        "div",
                                                        {
                                                          key: 0,
                                                          disabled: n.ended,
                                                          class: "btn",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.submitDynamicQuestion(
                                                              e
                                                            );
                                                          },
                                                        },
                                                        "Submit",
                                                        8,
                                                        ["disabled", "onClick"]
                                                      ))
                                                    : Object(a["g"])("", !0),
                                                ],
                                                64
                                              ))
                                            : Object(a["g"])("", !0),
                                        ]
                                      )
                                    );
                                  }
                                ),
                                128
                              )),
                              Object(a["j"])("div", oO, [
                                Object(a["j"])("div", lO, [
                                  Object(a["j"])(
                                    o,
                                    { status: r.gleamTask.status },
                                    null,
                                    8,
                                    ["status"]
                                  ),
                                  uO,
                                  dO,
                                  Object(a["j"])(
                                    "div",
                                    {
                                      style: {
                                        opacity:
                                          r.gleamTask.status > 1 ? 0.5 : 1,
                                      },
                                      class: "score",
                                    },
                                    Object(a["F"])(r.gleamTask.point) +
                                      " Point ",
                                    5
                                  ),
                                ]),
                                1 === r.gleamTask.status
                                  ? (Object(a["u"])(),
                                    Object(a["f"])("div", bO, "IN PROGRESS..."))
                                  : Object(a["g"])("", !0),
                                -1 === r.gleamTask.status
                                  ? (Object(a["u"])(),
                                    Object(a["f"])("div", jO, [
                                      mO,
                                      Object(a["j"])(
                                        "div",
                                        null,
                                        "Reason: " +
                                          Object(a["F"])(
                                            r.gleamTask.reason || "N/A"
                                          ),
                                        1
                                      ),
                                    ]))
                                  : Object(a["g"])("", !0),
                                pO,
                                fO,
                                gO,
                                Object(a["j"])("div", hO, [
                                  Object(a["j"])("div", OO, [
                                    vO,
                                    Object(a["i"])(
                                      " " +
                                        Object(a["F"])(r.gleamTask.gleam_url),
                                      1
                                    ),
                                  ]),
                                  Object(a["j"])(
                                    "div",
                                    {
                                      class: "btn",
                                      onClick:
                                        t[7] ||
                                        (t[7] = function (e) {
                                          return r.open(r.gleamTask.gleam_url);
                                        }),
                                    },
                                    [AO]
                                  ),
                                ]),
                                wO,
                                Object(a["j"])("div", yO, [
                                  Object(a["j"])(
                                    "div",
                                    {
                                      class: "box",
                                      onClick:
                                        t[8] ||
                                        (t[8] = function (e) {
                                          return r.chooseGleamEmail(
                                            r.gleamTask,
                                            !0
                                          );
                                        }),
                                    },
                                    [
                                      c.gleamEmail
                                        ? (Object(a["u"])(),
                                          Object(a["f"])("svg", kO, [CO]))
                                        : Object(a["g"])("", !0),
                                    ]
                                  ),
                                  Object(a["j"])("span", null, [
                                    xO,
                                    Object(a["j"])(
                                      "span",
                                      MO,
                                      Object(a["F"])(r.email),
                                      1
                                    ),
                                    SO,
                                  ]),
                                ]),
                                Object(a["j"])("div", EO, [
                                  Object(a["j"])(
                                    "div",
                                    {
                                      class: "box",
                                      onClick:
                                        t[9] ||
                                        (t[9] = function (e) {
                                          return r.chooseGleamEmail(
                                            r.gleamTask,
                                            !1
                                          );
                                        }),
                                    },
                                    [
                                      c.gleamEmail
                                        ? Object(a["g"])("", !0)
                                        : (Object(a["u"])(),
                                          Object(a["f"])("svg", TO, [RO])),
                                    ]
                                  ),
                                  IO,
                                ]),
                                c.gleamEmail
                                  ? Object(a["g"])("", !0)
                                  : (Object(a["u"])(),
                                    Object(a["f"])("div", LO, [
                                      PO,
                                      Object(a["L"])(
                                        Object(a["j"])(
                                          "input",
                                          {
                                            disabled: r.gleamTask.status > 0,
                                            placeholder: "Email",
                                            "onUpdate:modelValue":
                                              t[10] ||
                                              (t[10] = function (e) {
                                                return (c.link.refer = e);
                                              }),
                                          },
                                          null,
                                          8,
                                          ["disabled"]
                                        ),
                                        [[a["I"], c.link.refer]]
                                      ),
                                    ])),
                                Object(a["j"])(
                                  "div",
                                  {
                                    disabled: r.gleamTask.status > 0 || n.ended,
                                    class: "btn",
                                    onClick:
                                      t[11] ||
                                      (t[11] = function () {
                                        return (
                                          r.submitGleam &&
                                          r.submitGleam.apply(r, arguments)
                                        );
                                      }),
                                  },
                                  "Submit",
                                  8,
                                  ["disabled"]
                                ),
                              ]),
                            ],
                            64
                          ))
                        : (Object(a["u"])(!0),
                          Object(a["f"])(
                            a["a"],
                            { key: 1 },
                            Object(a["B"])(c.tasks, function (e, i) {
                              var s, l;
                              return (
                                Object(a["u"])(),
                                Object(a["f"])(
                                  "div",
                                  {
                                    key: i,
                                    class: "task ".concat(
                                      i !== c.tasks.length - 1 ? "bb" : ""
                                    ),
                                  },
                                  [
                                    Object(a["j"])("div", UO, [
                                      0 === c.selectedDay.status
                                        ? (Object(a["u"])(),
                                          Object(a["f"])("img", BO))
                                        : (Object(a["u"])(),
                                          Object(a["f"])(
                                            o,
                                            { key: 1, status: e.status },
                                            null,
                                            8,
                                            ["status"]
                                          )),
                                      Object(a["j"])(
                                        "span",
                                        null,
                                        Object(a["F"])(e.task_name),
                                        1
                                      ),
                                      DO,
                                      Object(a["j"])(
                                        "div",
                                        {
                                          style: {
                                            opacity: 2 === e.status ? 0.5 : 1,
                                          },
                                          class: "score",
                                        },
                                        Object(a["F"])(e.point) + " Point ",
                                        5
                                      ),
                                    ]),
                                    c.selectedDay.status > 0
                                      ? (Object(a["u"])(),
                                        Object(a["f"])(
                                          a["a"],
                                          { key: 0 },
                                          [
                                            e.type ===
                                            c.DAILY_TASK_TYPE.PERSONAL_INFO
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 0 },
                                                  [
                                                    NO,
                                                    Object(a["j"])("div", FO, [
                                                      VO,
                                                      Object(a["L"])(
                                                        Object(a["j"])(
                                                          "input",
                                                          {
                                                            disabled:
                                                              0 === e.status,
                                                            "onUpdate:modelValue":
                                                              t[12] ||
                                                              (t[12] =
                                                                function (e) {
                                                                  return (c.personalInfo.facebook =
                                                                    e);
                                                                }),
                                                          },
                                                          null,
                                                          8,
                                                          ["disabled"]
                                                        ),
                                                        [
                                                          [
                                                            a["I"],
                                                            c.personalInfo
                                                              .facebook,
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
                                                    Object(a["j"])("div", qO, [
                                                      GO,
                                                      Object(a["L"])(
                                                        Object(a["j"])(
                                                          "input",
                                                          {
                                                            disabled:
                                                              0 === e.status,
                                                            "onUpdate:modelValue":
                                                              t[13] ||
                                                              (t[13] =
                                                                function (e) {
                                                                  return (c.personalInfo.telegram =
                                                                    e);
                                                                }),
                                                          },
                                                          null,
                                                          8,
                                                          ["disabled"]
                                                        ),
                                                        [
                                                          [
                                                            a["I"],
                                                            c.personalInfo
                                                              .telegram,
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
                                                    Object(a["j"])("div", HO, [
                                                      zO,
                                                      Object(a["L"])(
                                                        Object(a["j"])(
                                                          "input",
                                                          {
                                                            disabled:
                                                              0 === e.status,
                                                            "onUpdate:modelValue":
                                                              t[14] ||
                                                              (t[14] =
                                                                function (e) {
                                                                  return (c.personalInfo.twitter =
                                                                    e);
                                                                }),
                                                          },
                                                          null,
                                                          8,
                                                          ["disabled"]
                                                        ),
                                                        [
                                                          [
                                                            a["I"],
                                                            c.personalInfo
                                                              .twitter,
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
                                                    Object(a["j"])("div", WO, [
                                                      KO,
                                                      Object(a["L"])(
                                                        Object(a["j"])(
                                                          "input",
                                                          {
                                                            disabled:
                                                              0 === e.status,
                                                            "onUpdate:modelValue":
                                                              t[15] ||
                                                              (t[15] =
                                                                function (e) {
                                                                  return (c.personalInfo.youtube =
                                                                    e);
                                                                }),
                                                          },
                                                          null,
                                                          8,
                                                          ["disabled"]
                                                        ),
                                                        [
                                                          [
                                                            a["I"],
                                                            c.personalInfo
                                                              .youtube,
                                                          ],
                                                        ]
                                                      ),
                                                    ]),
                                                    Object(a["j"])(
                                                      "div",
                                                      {
                                                        disabled:
                                                          0 === e.status,
                                                        class:
                                                          "btn btn-round offset-left",
                                                        onClick:
                                                          t[16] ||
                                                          (t[16] = function () {
                                                            return (
                                                              r.submitPersonalInfo &&
                                                              r.submitPersonalInfo.apply(
                                                                r,
                                                                arguments
                                                              )
                                                            );
                                                          }),
                                                      },
                                                      " Submit ",
                                                      8,
                                                      ["disabled"]
                                                    ),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.NATION_COMMUNITY
                                              ? (Object(a["u"])(),
                                                Object(a["f"])("div", QO, [
                                                  Object(a["j"])("div", YO, [
                                                    Object(a["j"])(
                                                      "div",
                                                      {
                                                        class: "dropdown-value",
                                                        onClick:
                                                          t[18] ||
                                                          (t[18] = function (
                                                            e
                                                          ) {
                                                            return (c.menu =
                                                              !c.menu);
                                                          }),
                                                      },
                                                      [
                                                        Object(a["L"])(
                                                          Object(a["j"])(
                                                            "input",
                                                            {
                                                              "onUpdate:modelValue":
                                                                t[17] ||
                                                                (t[17] =
                                                                  function (e) {
                                                                    return (c.selectedNation =
                                                                      e);
                                                                  }),
                                                            },
                                                            null,
                                                            512
                                                          ),
                                                          [
                                                            [
                                                              a["I"],
                                                              c.selectedNation,
                                                            ],
                                                          ]
                                                        ),
                                                        XO,
                                                      ]
                                                    ),
                                                    Object(a["j"])(
                                                      a["c"],
                                                      { name: "slide-down" },
                                                      {
                                                        default: sh(
                                                          function () {
                                                            return [
                                                              Object(a["L"])(
                                                                Object(a["j"])(
                                                                  "div",
                                                                  JO,
                                                                  [
                                                                    (Object(
                                                                      a["u"]
                                                                    )(!0),
                                                                    Object(
                                                                      a["f"]
                                                                    )(
                                                                      a["a"],
                                                                      null,
                                                                      Object(
                                                                        a["B"]
                                                                      )(
                                                                        r.nationsList,
                                                                        function (
                                                                          t,
                                                                          n
                                                                        ) {
                                                                          return (
                                                                            Object(
                                                                              a[
                                                                                "u"
                                                                              ]
                                                                            )(),
                                                                            Object(
                                                                              a[
                                                                                "f"
                                                                              ]
                                                                            )(
                                                                              "div",
                                                                              {
                                                                                class:
                                                                                  "dropdown-item",
                                                                                key: n,
                                                                                onClick:
                                                                                  function (
                                                                                    n
                                                                                  ) {
                                                                                    return r.selectNation(
                                                                                      t,
                                                                                      e
                                                                                    );
                                                                                  },
                                                                              },
                                                                              Object(
                                                                                a[
                                                                                  "F"
                                                                                ]
                                                                              )(
                                                                                t
                                                                              ),
                                                                              9,
                                                                              [
                                                                                "onClick",
                                                                              ]
                                                                            )
                                                                          );
                                                                        }
                                                                      ),
                                                                      128
                                                                    )),
                                                                  ],
                                                                  512
                                                                ),
                                                                [
                                                                  [
                                                                    a["J"],
                                                                    c.menu,
                                                                  ],
                                                                ]
                                                              ),
                                                            ];
                                                          }
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]),
                                                ]))
                                              : Object(a["g"])("", !0),
                                            e.type === c.DAILY_TASK_TYPE.RETWEET
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 2 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          ZO,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          _O,
                                                          [
                                                            $O,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    ev,
                                                    tv,
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          nv,
                                                          [
                                                            Object(a["L"])(
                                                              Object(a["j"])(
                                                                "input",
                                                                {
                                                                  placeholder:
                                                                    "Enter link",
                                                                  "onUpdate:modelValue":
                                                                    t[19] ||
                                                                    (t[19] =
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (c.link.tweet =
                                                                          e);
                                                                      }),
                                                                },
                                                                null,
                                                                512
                                                              ),
                                                              [
                                                                [
                                                                  a["I"],
                                                                  c.link.tweet,
                                                                ],
                                                              ]
                                                            ),
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.submitLink(
                                                                      e,
                                                                      c.link
                                                                        .tweet
                                                                    );
                                                                  },
                                                              },
                                                              "Submit",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    av,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.RETWEET_MECHA
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 3 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          iv,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          cv,
                                                          [
                                                            rv,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    Object(a["j"])("div", sv, [
                                                      ov,
                                                      Object(a["j"])(
                                                        "span",
                                                        lv,
                                                        Object(a["F"])(
                                                          e.description
                                                        ),
                                                        1
                                                      ),
                                                      uv,
                                                    ]),
                                                    Object(a["j"])("div", dv, [
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.open(
                                                              e.gleam_url
                                                            );
                                                          },
                                                        },
                                                        [bv, jv],
                                                        8,
                                                        ["onClick"]
                                                      ),
                                                    ]),
                                                    mv,
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          pv,
                                                          [
                                                            Object(a["L"])(
                                                              Object(a["j"])(
                                                                "input",
                                                                {
                                                                  placeholder:
                                                                    "Enter link",
                                                                  "onUpdate:modelValue":
                                                                    t[20] ||
                                                                    (t[20] =
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (c.link.retweet =
                                                                          e);
                                                                      }),
                                                                },
                                                                null,
                                                                512
                                                              ),
                                                              [
                                                                [
                                                                  a["I"],
                                                                  c.link
                                                                    .retweet,
                                                                ],
                                                              ]
                                                            ),
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.submitLink(
                                                                      e,
                                                                      c.link
                                                                        .retweet
                                                                    );
                                                                  },
                                                              },
                                                              "Submit",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    fv,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.QUOTE_TWEET
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 4 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          gv,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    Object(a["j"])("div", hv, [
                                                      Ov,
                                                      Object(a["j"])(
                                                        "span",
                                                        vv,
                                                        Object(a["F"])(
                                                          e.hashtag
                                                            ? e.hashtag
                                                            : "#NFT #Mecha #PlaytoEarn #BlockchainGame #MechMaster"
                                                        ),
                                                        1
                                                      ),
                                                      Av,
                                                    ]),
                                                    Object(a["j"])("div", wv, [
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.open(
                                                              e.link,
                                                              !0
                                                            );
                                                          },
                                                        },
                                                        [yv, kv],
                                                        8,
                                                        ["onClick"]
                                                      ),
                                                    ]),
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          a["a"],
                                                          { key: 1 },
                                                          [
                                                            Cv,
                                                            Object(a["j"])(
                                                              "div",
                                                              xv,
                                                              [
                                                                Object(a["L"])(
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "input",
                                                                    {
                                                                      placeholder:
                                                                        "Enter link",
                                                                      "onUpdate:modelValue":
                                                                        t[21] ||
                                                                        (t[21] =
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return (c.link.quoteTweet =
                                                                              e);
                                                                          }),
                                                                    },
                                                                    null,
                                                                    512
                                                                  ),
                                                                  [
                                                                    [
                                                                      a["I"],
                                                                      c.link
                                                                        .quoteTweet,
                                                                    ],
                                                                  ]
                                                                ),
                                                                Object(a["j"])(
                                                                  "div",
                                                                  {
                                                                    disabled:
                                                                      n.ended,
                                                                    class:
                                                                      "btn",
                                                                    onClick:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return r.submitQuoteTweet(
                                                                          e,
                                                                          c.link
                                                                            .quoteTweet
                                                                        );
                                                                      },
                                                                  },
                                                                  "Submit",
                                                                  8,
                                                                  [
                                                                    "disabled",
                                                                    "onClick",
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            e.error
                                                              ? (Object(
                                                                  a["u"]
                                                                )(),
                                                                Object(a["f"])(
                                                                  "div",
                                                                  Mv,
                                                                  Object(
                                                                    a["F"]
                                                                  )(e.error),
                                                                  1
                                                                ))
                                                              : Object(a["g"])(
                                                                  "",
                                                                  !0
                                                                ),
                                                            Sv,
                                                          ],
                                                          64
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.FB_MECHA
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 5 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Ev,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Tv,
                                                          [
                                                            Rv,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    Object(a["j"])("div", Iv, [
                                                      Lv,
                                                      Object(a["j"])(
                                                        "span",
                                                        Pv,
                                                        Object(a["F"])(
                                                          e.description
                                                        ),
                                                        1
                                                      ),
                                                      Uv,
                                                    ]),
                                                    Object(a["j"])("div", Bv, [
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.open(
                                                              e.gleam_url
                                                            );
                                                          },
                                                        },
                                                        [Dv, Nv],
                                                        8,
                                                        ["onClick"]
                                                      ),
                                                    ]),
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          a["a"],
                                                          { key: 2 },
                                                          [
                                                            Fv,
                                                            Object(a["j"])(
                                                              "div",
                                                              Vv,
                                                              [
                                                                Object(a["L"])(
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "input",
                                                                    {
                                                                      placeholder:
                                                                        "Enter link",
                                                                      "onUpdate:modelValue":
                                                                        t[22] ||
                                                                        (t[22] =
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return (c.link.fbPost =
                                                                              e);
                                                                          }),
                                                                    },
                                                                    null,
                                                                    512
                                                                  ),
                                                                  [
                                                                    [
                                                                      a["I"],
                                                                      c.link
                                                                        .fbPost,
                                                                    ],
                                                                  ]
                                                                ),
                                                                Object(a["j"])(
                                                                  "div",
                                                                  {
                                                                    disabled:
                                                                      n.ended,
                                                                    class:
                                                                      "btn",
                                                                    onClick:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return r.verifyAndSubmit(
                                                                          e,
                                                                          c.link
                                                                            .fbPost,
                                                                          "facebook.com"
                                                                        );
                                                                      },
                                                                  },
                                                                  [
                                                                    e.error
                                                                      ? (Object(
                                                                          a["u"]
                                                                        )(),
                                                                        Object(
                                                                          a["f"]
                                                                        )(
                                                                          a[
                                                                            "a"
                                                                          ],
                                                                          {
                                                                            key: 0,
                                                                          },
                                                                          [qv],
                                                                          64
                                                                        ))
                                                                      : (Object(
                                                                          a["u"]
                                                                        )(),
                                                                        Object(
                                                                          a["f"]
                                                                        )(
                                                                          a[
                                                                            "a"
                                                                          ],
                                                                          {
                                                                            key: 1,
                                                                          },
                                                                          [Gv],
                                                                          64
                                                                        )),
                                                                  ],
                                                                  8,
                                                                  [
                                                                    "disabled",
                                                                    "onClick",
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            e.error
                                                              ? (Object(
                                                                  a["u"]
                                                                )(),
                                                                Object(a["f"])(
                                                                  "div",
                                                                  Hv,
                                                                  Object(
                                                                    a["F"]
                                                                  )(e.error),
                                                                  1
                                                                ))
                                                              : Object(a["g"])(
                                                                  "",
                                                                  !0
                                                                ),
                                                          ],
                                                          64
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    zv,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type === c.DAILY_TASK_TYPE.MEDIUM
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 6 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Wv,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Kv,
                                                          [
                                                            Qv,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    Yv,
                                                    Object(a["j"])("div", Xv, [
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.open(
                                                              e.description
                                                            );
                                                          },
                                                        },
                                                        " Open Medium Post ",
                                                        8,
                                                        ["onClick"]
                                                      ),
                                                    ]),
                                                    Jv,
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Zv,
                                                          [
                                                            Object(a["L"])(
                                                              Object(a["j"])(
                                                                "input",
                                                                {
                                                                  placeholder:
                                                                    "Enter link",
                                                                  "onUpdate:modelValue":
                                                                    t[23] ||
                                                                    (t[23] =
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (c.link.retweetMedium =
                                                                          e);
                                                                      }),
                                                                },
                                                                null,
                                                                512
                                                              ),
                                                              [
                                                                [
                                                                  a["I"],
                                                                  c.link
                                                                    .retweetMedium,
                                                                ],
                                                              ]
                                                            ),
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.submitLink(
                                                                      e,
                                                                      c.link
                                                                        .retweetMedium
                                                                    );
                                                                  },
                                                              },
                                                              "Submit",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    _v,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.YOUTUBE_CMT
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 7 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          $v,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          eA,
                                                          [
                                                            tA,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    nA,
                                                    Object(a["j"])("div", aA, [
                                                      iA,
                                                      Object(a["j"])(
                                                        "div",
                                                        null,
                                                        [
                                                          cA,
                                                          Object(a["j"])(
                                                            "div",
                                                            {
                                                              class:
                                                                "btn btn-youtube",
                                                              onClick:
                                                                function (t) {
                                                                  return r.open(
                                                                    e.description
                                                                  );
                                                                },
                                                            },
                                                            [rA, sA],
                                                            8,
                                                            ["onClick"]
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          a["a"],
                                                          { key: 2 },
                                                          [
                                                            oA,
                                                            Object(a["j"])(
                                                              "div",
                                                              lA,
                                                              [
                                                                Object(a["L"])(
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "input",
                                                                    {
                                                                      "onUpdate:modelValue":
                                                                        t[24] ||
                                                                        (t[24] =
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return (c.link.youtubeHandle =
                                                                              e);
                                                                          }),
                                                                    },
                                                                    null,
                                                                    512
                                                                  ),
                                                                  [
                                                                    [
                                                                      a["I"],
                                                                      c.link
                                                                        .youtubeHandle,
                                                                    ],
                                                                  ]
                                                                ),
                                                                Object(a["j"])(
                                                                  "div",
                                                                  {
                                                                    disabled:
                                                                      n.ended,
                                                                    class:
                                                                      "btn",
                                                                    onClick:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return r.submitLink(
                                                                          e,
                                                                          c.link
                                                                            .youtubeHandle
                                                                        );
                                                                      },
                                                                  },
                                                                  "Submit",
                                                                  8,
                                                                  [
                                                                    "disabled",
                                                                    "onClick",
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          64
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    uA,
                                                    dA,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.WHITEPAPER
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 8 },
                                                  [
                                                    bA,
                                                    Object(a["j"])(
                                                      "div",
                                                      jA,
                                                      Object(a["F"])(
                                                        c.question[e.id]
                                                          .question
                                                      ),
                                                      1
                                                    ),
                                                    (Object(a["u"])(!0),
                                                    Object(a["f"])(
                                                      a["a"],
                                                      null,
                                                      Object(a["B"])(
                                                        c.question[e.id]
                                                          .answers,
                                                        function (t, n) {
                                                          return (
                                                            Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "div",
                                                              {
                                                                class: "answer "
                                                                  .concat(
                                                                    c.answer[
                                                                      e.id
                                                                    ] === t
                                                                      ? "selected"
                                                                      : "",
                                                                    "  "
                                                                  )
                                                                  .concat(
                                                                    c.countdown[
                                                                      e.id
                                                                    ].show
                                                                      ? "error"
                                                                      : "",
                                                                    " "
                                                                  )
                                                                  .concat(
                                                                    c.question[
                                                                      e.id
                                                                    ].correct
                                                                      ? "success"
                                                                      : ""
                                                                  ),
                                                                key: n,
                                                              },
                                                              [
                                                                Object(a["j"])(
                                                                  "div",
                                                                  {
                                                                    class:
                                                                      "box",
                                                                    onClick:
                                                                      function (
                                                                        n
                                                                      ) {
                                                                        return (c.answer[
                                                                          e.id
                                                                        ] = t);
                                                                      },
                                                                  },
                                                                  [
                                                                    c.answer[
                                                                      e.id
                                                                    ] === t
                                                                      ? (Object(
                                                                          a["u"]
                                                                        )(),
                                                                        Object(
                                                                          a["f"]
                                                                        )(
                                                                          "svg",
                                                                          mA,
                                                                          [pA]
                                                                        ))
                                                                      : Object(
                                                                          a["g"]
                                                                        )(
                                                                          "",
                                                                          !0
                                                                        ),
                                                                  ],
                                                                  8,
                                                                  ["onClick"]
                                                                ),
                                                                Object(a["j"])(
                                                                  "span",
                                                                  null,
                                                                  Object(
                                                                    a["F"]
                                                                  )(t),
                                                                  1
                                                                ),
                                                              ],
                                                              2
                                                            )
                                                          );
                                                        }
                                                      ),
                                                      128
                                                    )),
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          a["a"],
                                                          { key: 0 },
                                                          [
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  c.countdown[
                                                                    e.id
                                                                  ].show ||
                                                                  c.question[
                                                                    e.id
                                                                  ].correct ||
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.submitQuestion(
                                                                      e
                                                                    );
                                                                  },
                                                              },
                                                              "Submit ",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                            c.countdown[e.id]
                                                              .show
                                                              ? (Object(
                                                                  a["u"]
                                                                )(),
                                                                Object(a["f"])(
                                                                  a["a"],
                                                                  { key: 0 },
                                                                  [
                                                                    fA,
                                                                    Object(
                                                                      a["j"]
                                                                    )(
                                                                      "div",
                                                                      gA,
                                                                      [
                                                                        hA,
                                                                        Object(
                                                                          a["j"]
                                                                        )(
                                                                          "div",
                                                                          OA,
                                                                          Object(
                                                                            a[
                                                                              "F"
                                                                            ]
                                                                          )(
                                                                            r.displayTimer(
                                                                              c
                                                                                .countdown[
                                                                                e
                                                                                  .id
                                                                              ]
                                                                                .time
                                                                            )
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  64
                                                                ))
                                                              : Object(a["g"])(
                                                                  "",
                                                                  !0
                                                                ),
                                                          ],
                                                          64
                                                        ))
                                                      : (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          vA,
                                                          [AA, wA]
                                                        )),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.NATION_TELEGRAM
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  "div",
                                                  {
                                                    key: 9,
                                                    class: "btn btn-cyan",
                                                    onClick: function (t) {
                                                      return r.openTelegram(e);
                                                    },
                                                  },
                                                  " Join telegram ",
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.QUESTION
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 10 },
                                                  [
                                                    Object(a["j"])(
                                                      "div",
                                                      yA,
                                                      " From your understanding of " +
                                                        Object(a["F"])(
                                                          e.question.base
                                                        ) +
                                                        ", answer the following question: ",
                                                      1
                                                    ),
                                                    Object(a["j"])(
                                                      "div",
                                                      kA,
                                                      Object(a["F"])(
                                                        e.question.question
                                                      ) + "?",
                                                      1
                                                    ),
                                                    (Object(a["u"])(!0),
                                                    Object(a["f"])(
                                                      a["a"],
                                                      null,
                                                      Object(a["B"])(
                                                        e.question.answers,
                                                        function (t, n) {
                                                          return (
                                                            Object(a["u"])(),
                                                            Object(a["f"])(
                                                              "div",
                                                              {
                                                                class: "answer "
                                                                  .concat(
                                                                    c.answer2[
                                                                      e.id
                                                                    ] === t
                                                                      ? "selected"
                                                                      : "",
                                                                    "  "
                                                                  )
                                                                  .concat(
                                                                    c
                                                                      .countdown2[
                                                                      e.id
                                                                    ].show
                                                                      ? "error"
                                                                      : "",
                                                                    " "
                                                                  )
                                                                  .concat(
                                                                    e.question
                                                                      .correct ||
                                                                      c
                                                                        .question2[
                                                                        e.id
                                                                      ]
                                                                      ? "success"
                                                                      : ""
                                                                  ),
                                                                key: n,
                                                              },
                                                              [
                                                                Object(a["j"])(
                                                                  "div",
                                                                  {
                                                                    class:
                                                                      "box",
                                                                    onClick:
                                                                      function (
                                                                        n
                                                                      ) {
                                                                        return (c.answer2[
                                                                          e.id
                                                                        ] = t);
                                                                      },
                                                                  },
                                                                  [
                                                                    c.answer2[
                                                                      e.id
                                                                    ] === t
                                                                      ? (Object(
                                                                          a["u"]
                                                                        )(),
                                                                        Object(
                                                                          a["f"]
                                                                        )(
                                                                          "svg",
                                                                          CA,
                                                                          [xA]
                                                                        ))
                                                                      : Object(
                                                                          a["g"]
                                                                        )(
                                                                          "",
                                                                          !0
                                                                        ),
                                                                  ],
                                                                  8,
                                                                  ["onClick"]
                                                                ),
                                                                Object(a["j"])(
                                                                  "span",
                                                                  null,
                                                                  Object(
                                                                    a["F"]
                                                                  )(t),
                                                                  1
                                                                ),
                                                              ],
                                                              2
                                                            )
                                                          );
                                                        }
                                                      ),
                                                      128
                                                    )),
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          a["a"],
                                                          { key: 0 },
                                                          [
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  c.countdown2[
                                                                    e.id
                                                                  ].show ||
                                                                  e.question
                                                                    .correct ||
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.submitPJQuestion(
                                                                      e
                                                                    );
                                                                  },
                                                              },
                                                              "Submit ",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                            null !==
                                                              (s =
                                                                c.countdown2[
                                                                  e.id
                                                                ]) &&
                                                            void 0 !== s &&
                                                            s.show
                                                              ? (Object(
                                                                  a["u"]
                                                                )(),
                                                                Object(a["f"])(
                                                                  a["a"],
                                                                  { key: 0 },
                                                                  [
                                                                    MA,
                                                                    Object(
                                                                      a["j"]
                                                                    )(
                                                                      "div",
                                                                      SA,
                                                                      [
                                                                        EA,
                                                                        Object(
                                                                          a["j"]
                                                                        )(
                                                                          "div",
                                                                          TA,
                                                                          Object(
                                                                            a[
                                                                              "F"
                                                                            ]
                                                                          )(
                                                                            r.displayTimer(
                                                                              c
                                                                                .countdown2[
                                                                                e
                                                                                  .id
                                                                              ]
                                                                                .time
                                                                            )
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    e.showExtraInfo
                                                                      ? (Object(
                                                                          a["u"]
                                                                        )(),
                                                                        Object(
                                                                          a["f"]
                                                                        )(
                                                                          "div",
                                                                          {
                                                                            key: 0,
                                                                            class:
                                                                              "info",
                                                                            innerHTML:
                                                                              e
                                                                                .question
                                                                                .extraInfo,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          [
                                                                            "innerHTML",
                                                                          ]
                                                                        ))
                                                                      : Object(
                                                                          a["g"]
                                                                        )(
                                                                          "",
                                                                          !0
                                                                        ),
                                                                  ],
                                                                  64
                                                                ))
                                                              : Object(a["g"])(
                                                                  "",
                                                                  !0
                                                                ),
                                                          ],
                                                          64
                                                        ))
                                                      : (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          a["a"],
                                                          { key: 1 },
                                                          [
                                                            RA,
                                                            e.question.extraInfo
                                                              ? (Object(
                                                                  a["u"]
                                                                )(),
                                                                Object(a["f"])(
                                                                  "div",
                                                                  {
                                                                    key: 0,
                                                                    innerHTML:
                                                                      e.question
                                                                        .extraInfo,
                                                                    class:
                                                                      "info",
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["innerHTML"]
                                                                ))
                                                              : Object(a["g"])(
                                                                  "",
                                                                  !0
                                                                ),
                                                          ],
                                                          64
                                                        )),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.FACEBOOK
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 11 },
                                                  [
                                                    IA,
                                                    Object(a["j"])("div", LA, [
                                                      Object(a["j"])(
                                                        "div",
                                                        PA,
                                                        [
                                                          UA,
                                                          Object(a["i"])(
                                                            " " +
                                                              Object(a["F"])(
                                                                e.description
                                                              ),
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.joinFacebook(
                                                              e
                                                            );
                                                          },
                                                        },
                                                        [BA],
                                                        8,
                                                        ["onClick"]
                                                      ),
                                                    ]),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type === c.DAILY_TASK_TYPE.MECHA
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 12 },
                                                  [
                                                    DA,
                                                    Object(a["j"])(
                                                      "div",
                                                      NA,
                                                      Object(a["F"])(
                                                        e.question.question
                                                      ),
                                                      1
                                                    ),
                                                    Object(a["j"])("div", FA, [
                                                      Object(a["j"])(
                                                        "img",
                                                        {
                                                          style: {
                                                            width: "250px",
                                                          },
                                                          alt: "",
                                                          src: e.question.image,
                                                        },
                                                        null,
                                                        8,
                                                        ["src"]
                                                      ),
                                                      Object(a["j"])(
                                                        "div",
                                                        VA,
                                                        [
                                                          (Object(a["u"])(!0),
                                                          Object(a["f"])(
                                                            a["a"],
                                                            null,
                                                            Object(a["B"])(
                                                              e.question
                                                                .answers,
                                                              function (t, n) {
                                                                return (
                                                                  Object(
                                                                    a["u"]
                                                                  )(),
                                                                  Object(
                                                                    a["f"]
                                                                  )(
                                                                    "div",
                                                                    {
                                                                      class:
                                                                        "answer "
                                                                          .concat(
                                                                            c
                                                                              .answer3[
                                                                              e
                                                                                .id
                                                                            ] ===
                                                                              t
                                                                              ? "selected"
                                                                              : "",
                                                                            "  "
                                                                          )
                                                                          .concat(
                                                                            c
                                                                              .countdown3[
                                                                              e
                                                                                .id
                                                                            ]
                                                                              .show
                                                                              ? "error"
                                                                              : "",
                                                                            " "
                                                                          )
                                                                          .concat(
                                                                            e
                                                                              .question
                                                                              .correct ||
                                                                              c
                                                                                .question3[
                                                                                e
                                                                                  .id
                                                                              ]
                                                                              ? "success"
                                                                              : ""
                                                                          ),
                                                                      key: n,
                                                                    },
                                                                    [
                                                                      Object(
                                                                        a["j"]
                                                                      )(
                                                                        "div",
                                                                        {
                                                                          class:
                                                                            "box",
                                                                          onClick:
                                                                            function (
                                                                              n
                                                                            ) {
                                                                              return (c.answer3[
                                                                                e.id
                                                                              ] =
                                                                                t);
                                                                            },
                                                                        },
                                                                        [
                                                                          c
                                                                            .answer3[
                                                                            e.id
                                                                          ] ===
                                                                          t
                                                                            ? (Object(
                                                                                a[
                                                                                  "u"
                                                                                ]
                                                                              )(),
                                                                              Object(
                                                                                a[
                                                                                  "f"
                                                                                ]
                                                                              )(
                                                                                "svg",
                                                                                qA,
                                                                                [
                                                                                  GA,
                                                                                ]
                                                                              ))
                                                                            : Object(
                                                                                a[
                                                                                  "g"
                                                                                ]
                                                                              )(
                                                                                "",
                                                                                !0
                                                                              ),
                                                                        ],
                                                                        8,
                                                                        [
                                                                          "onClick",
                                                                        ]
                                                                      ),
                                                                      Object(
                                                                        a["j"]
                                                                      )(
                                                                        "span",
                                                                        HA,
                                                                        Object(
                                                                          a["F"]
                                                                        )(t),
                                                                        1
                                                                      ),
                                                                    ],
                                                                    2
                                                                  )
                                                                );
                                                              }
                                                            ),
                                                            128
                                                          )),
                                                          0 === e.status
                                                            ? (Object(a["u"])(),
                                                              Object(a["f"])(
                                                                a["a"],
                                                                { key: 0 },
                                                                [
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "div",
                                                                    {
                                                                      disabled:
                                                                        c
                                                                          .countdown3[
                                                                          e.id
                                                                        ]
                                                                          .show ||
                                                                        e
                                                                          .question
                                                                          .correct ||
                                                                        n.ended,
                                                                      class:
                                                                        "btn",
                                                                      onClick:
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          return r.submitMechaQuestion(
                                                                            e
                                                                          );
                                                                        },
                                                                    },
                                                                    "Submit ",
                                                                    8,
                                                                    [
                                                                      "disabled",
                                                                      "onClick",
                                                                    ]
                                                                  ),
                                                                  null !==
                                                                    (l =
                                                                      c
                                                                        .countdown3[
                                                                        e.id
                                                                      ]) &&
                                                                  void 0 !==
                                                                    l &&
                                                                  l.show
                                                                    ? (Object(
                                                                        a["u"]
                                                                      )(),
                                                                      Object(
                                                                        a["f"]
                                                                      )(
                                                                        a["a"],
                                                                        {
                                                                          key: 0,
                                                                        },
                                                                        [
                                                                          zA,
                                                                          Object(
                                                                            a[
                                                                              "j"
                                                                            ]
                                                                          )(
                                                                            "div",
                                                                            WA,
                                                                            [
                                                                              KA,
                                                                              Object(
                                                                                a[
                                                                                  "j"
                                                                                ]
                                                                              )(
                                                                                "div",
                                                                                QA,
                                                                                Object(
                                                                                  a[
                                                                                    "F"
                                                                                  ]
                                                                                )(
                                                                                  r.displayTimer(
                                                                                    c
                                                                                      .countdown3[
                                                                                      e
                                                                                        .id
                                                                                    ]
                                                                                      .time
                                                                                  )
                                                                                ),
                                                                                1
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        64
                                                                      ))
                                                                    : Object(
                                                                        a["g"]
                                                                      )("", !0),
                                                                ],
                                                                64
                                                              ))
                                                            : (Object(a["u"])(),
                                                              Object(a["f"])(
                                                                "div",
                                                                YA,
                                                                [XA, JA]
                                                              )),
                                                        ]
                                                      ),
                                                    ]),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.FACEBOOK_POST
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 13 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          ZA,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          _A,
                                                          [
                                                            $A,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    ew,
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          tw,
                                                          [
                                                            Object(a["L"])(
                                                              Object(a["j"])(
                                                                "input",
                                                                {
                                                                  placeholder:
                                                                    "Enter link",
                                                                  "onUpdate:modelValue":
                                                                    t[25] ||
                                                                    (t[25] =
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (c.link.facebook =
                                                                          e);
                                                                      }),
                                                                },
                                                                null,
                                                                512
                                                              ),
                                                              [
                                                                [
                                                                  a["I"],
                                                                  c.link
                                                                    .facebook,
                                                                ],
                                                              ]
                                                            ),
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.verifyAndSubmit(
                                                                      e,
                                                                      c.link
                                                                        .facebook,
                                                                      "facebook.com"
                                                                    );
                                                                  },
                                                              },
                                                              "Submit",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    nw,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type === c.DAILY_TASK_TYPE.DISCORD
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 14 },
                                                  [
                                                    aw,
                                                    Object(a["j"])("div", iw, [
                                                      cw,
                                                      Object(a["j"])(
                                                        "div",
                                                        rw,
                                                        Object(a["F"])(
                                                          e.description
                                                        ),
                                                        1
                                                      ),
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          style: {
                                                            margin: "0",
                                                          },
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.open(
                                                              e.description
                                                            );
                                                          },
                                                        },
                                                        [sw],
                                                        8,
                                                        ["onClick"]
                                                      ),
                                                    ]),
                                                    ow,
                                                    Object(a["j"])("div", lw, [
                                                      Object(a["j"])(
                                                        "div",
                                                        uw,
                                                        Object(a["F"])(
                                                          r.discordCode
                                                        ),
                                                        1
                                                      ),
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick:
                                                            t[26] ||
                                                            (t[26] = function (
                                                              e
                                                            ) {
                                                              return r.copy(
                                                                r.discordCode,
                                                                "discord"
                                                              );
                                                            }),
                                                        },
                                                        "Copy"
                                                      ),
                                                      c.notification.discord
                                                        ? (Object(a["u"])(),
                                                          Object(a["f"])(
                                                            "div",
                                                            dw,
                                                            "Copied!"
                                                          ))
                                                        : Object(a["g"])(
                                                            "",
                                                            !0
                                                          ),
                                                    ]),
                                                    bw,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type === c.DAILY_TASK_TYPE.BONUS
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  "div",
                                                  jw,
                                                  Object(a["F"])(e.description),
                                                  1
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.INSTAGRAM
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 16 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          mw,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          pw,
                                                          [
                                                            fw,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    gw,
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          hw,
                                                          [
                                                            Object(a["L"])(
                                                              Object(a["j"])(
                                                                "input",
                                                                {
                                                                  placeholder:
                                                                    "Enter link",
                                                                  "onUpdate:modelValue":
                                                                    t[27] ||
                                                                    (t[27] =
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (c.link.instagram =
                                                                          e);
                                                                      }),
                                                                },
                                                                null,
                                                                512
                                                              ),
                                                              [
                                                                [
                                                                  a["I"],
                                                                  c.link
                                                                    .instagram,
                                                                ],
                                                              ]
                                                            ),
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.submitLink(
                                                                      e,
                                                                      c.link
                                                                        .instagram
                                                                    );
                                                                  },
                                                              },
                                                              "Submit",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    Ow,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type ===
                                            c.DAILY_TASK_TYPE.YOUTUBE_REVIEW
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 17 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          vw,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Aw,
                                                          [
                                                            ww,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  e.reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    yw,
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          kw,
                                                          [
                                                            Object(a["L"])(
                                                              Object(a["j"])(
                                                                "input",
                                                                {
                                                                  placeholder:
                                                                    "Enter link",
                                                                  "onUpdate:modelValue":
                                                                    t[28] ||
                                                                    (t[28] =
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (c.link.youtubeReview =
                                                                          e);
                                                                      }),
                                                                },
                                                                null,
                                                                512
                                                              ),
                                                              [
                                                                [
                                                                  a["I"],
                                                                  c.link
                                                                    .youtubeReview,
                                                                ],
                                                              ]
                                                            ),
                                                            Object(a["j"])(
                                                              "div",
                                                              {
                                                                disabled:
                                                                  n.ended,
                                                                class: "btn",
                                                                onClick:
                                                                  function (t) {
                                                                    return r.submitLink(
                                                                      e,
                                                                      c.link
                                                                        .youtubeReview
                                                                    );
                                                                  },
                                                              },
                                                              "Submit",
                                                              8,
                                                              [
                                                                "disabled",
                                                                "onClick",
                                                              ]
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    Cw,
                                                    xw,
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type === c.DAILY_TASK_TYPE.GLEAM
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 18 },
                                                  [
                                                    1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Mw,
                                                          "IN PROGRESS..."
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    -1 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Sw,
                                                          [
                                                            Ew,
                                                            Object(a["j"])(
                                                              "div",
                                                              null,
                                                              "Reason: " +
                                                                Object(a["F"])(
                                                                  r.gleamTask
                                                                    .reason ||
                                                                    "N/A"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                    Tw,
                                                    Object(a["j"])("div", Rw, [
                                                      Object(a["j"])(
                                                        "div",
                                                        Iw,
                                                        [
                                                          Lw,
                                                          Object(a["i"])(
                                                            " " +
                                                              Object(a["F"])(
                                                                e.gleam_url
                                                              ),
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      Object(a["j"])(
                                                        "div",
                                                        {
                                                          class: "btn",
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return r.open(
                                                              e.gleam_url
                                                            );
                                                          },
                                                        },
                                                        [Pw],
                                                        8,
                                                        ["onClick"]
                                                      ),
                                                    ]),
                                                    Uw,
                                                    Bw,
                                                    0 === e.status
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          a["a"],
                                                          { key: 2 },
                                                          [
                                                            Dw,
                                                            Object(a["j"])(
                                                              "div",
                                                              Nw,
                                                              [
                                                                Object(a["L"])(
                                                                  Object(
                                                                    a["j"]
                                                                  )(
                                                                    "input",
                                                                    {
                                                                      placeholder:
                                                                        "Email",
                                                                      "onUpdate:modelValue":
                                                                        t[29] ||
                                                                        (t[29] =
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return (c.link.gleam =
                                                                              e);
                                                                          }),
                                                                    },
                                                                    null,
                                                                    512
                                                                  ),
                                                                  [
                                                                    [
                                                                      a["I"],
                                                                      c.link
                                                                        .gleam,
                                                                    ],
                                                                  ]
                                                                ),
                                                                Object(a["j"])(
                                                                  "div",
                                                                  {
                                                                    disabled:
                                                                      n.ended,
                                                                    class:
                                                                      "btn",
                                                                    onClick:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return r.submitLink(
                                                                          e,
                                                                          c.link
                                                                            .gleam
                                                                        );
                                                                      },
                                                                  },
                                                                  "Submit",
                                                                  8,
                                                                  [
                                                                    "disabled",
                                                                    "onClick",
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          64
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                            e.type === c.DAILY_TASK_TYPE.COUNTRY
                                              ? (Object(a["u"])(),
                                                Object(a["f"])(
                                                  a["a"],
                                                  { key: 19 },
                                                  [
                                                    Object(a["j"])("div", Fw, [
                                                      Object(a["j"])(
                                                        "div",
                                                        Vw,
                                                        [
                                                          Object(a["j"])(
                                                            "div",
                                                            {
                                                              class:
                                                                "dropdown-value",
                                                              onClick:
                                                                t[31] ||
                                                                (t[31] =
                                                                  function (e) {
                                                                    return (c.menu =
                                                                      !c.menu);
                                                                  }),
                                                            },
                                                            [
                                                              Object(a["L"])(
                                                                Object(a["j"])(
                                                                  "input",
                                                                  {
                                                                    "onUpdate:modelValue":
                                                                      t[30] ||
                                                                      (t[30] =
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return (c.selectedNation =
                                                                            e);
                                                                        }),
                                                                  },
                                                                  null,
                                                                  512
                                                                ),
                                                                [
                                                                  [
                                                                    a["I"],
                                                                    c.selectedNation,
                                                                  ],
                                                                ]
                                                              ),
                                                              qw,
                                                            ]
                                                          ),
                                                          Object(a["j"])(
                                                            a["c"],
                                                            {
                                                              name: "slide-down",
                                                            },
                                                            {
                                                              default: sh(
                                                                function () {
                                                                  return [
                                                                    Object(
                                                                      a["L"]
                                                                    )(
                                                                      Object(
                                                                        a["j"]
                                                                      )(
                                                                        "div",
                                                                        Gw,
                                                                        [
                                                                          (Object(
                                                                            a[
                                                                              "u"
                                                                            ]
                                                                          )(!0),
                                                                          Object(
                                                                            a[
                                                                              "f"
                                                                            ]
                                                                          )(
                                                                            a[
                                                                              "a"
                                                                            ],
                                                                            null,
                                                                            Object(
                                                                              a[
                                                                                "B"
                                                                              ]
                                                                            )(
                                                                              r.nationsList,
                                                                              function (
                                                                                t,
                                                                                n
                                                                              ) {
                                                                                return (
                                                                                  Object(
                                                                                    a[
                                                                                      "u"
                                                                                    ]
                                                                                  )(),
                                                                                  Object(
                                                                                    a[
                                                                                      "f"
                                                                                    ]
                                                                                  )(
                                                                                    "div",
                                                                                    {
                                                                                      class:
                                                                                        "dropdown-item",
                                                                                      key: n,
                                                                                      onClick:
                                                                                        function (
                                                                                          n
                                                                                        ) {
                                                                                          return r.selectNation(
                                                                                            t,
                                                                                            e
                                                                                          );
                                                                                        },
                                                                                    },
                                                                                    Object(
                                                                                      a[
                                                                                        "F"
                                                                                      ]
                                                                                    )(
                                                                                      t
                                                                                    ),
                                                                                    9,
                                                                                    [
                                                                                      "onClick",
                                                                                    ]
                                                                                  )
                                                                                );
                                                                              }
                                                                            ),
                                                                            128
                                                                          )),
                                                                        ],
                                                                        512
                                                                      ),
                                                                      [
                                                                        [
                                                                          a[
                                                                            "J"
                                                                          ],
                                                                          c.menu,
                                                                        ],
                                                                      ]
                                                                    ),
                                                                  ];
                                                                }
                                                              ),
                                                              _: 2,
                                                            },
                                                            1024
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    r.nationTeleLink
                                                      ? (Object(a["u"])(),
                                                        Object(a["f"])(
                                                          "div",
                                                          Hw,
                                                          [
                                                            zw,
                                                            Object(a["j"])(
                                                              "div",
                                                              Ww,
                                                              [
                                                                Object(a["j"])(
                                                                  "div",
                                                                  Kw,
                                                                  [
                                                                    Qw,
                                                                    Object(
                                                                      a["i"]
                                                                    )(
                                                                      " " +
                                                                        Object(
                                                                          a["F"]
                                                                        )(
                                                                          r.nationTeleLink
                                                                        ),
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                                Object(a["j"])(
                                                                  "div",
                                                                  {
                                                                    class:
                                                                      "btn",
                                                                    style: {
                                                                      margin:
                                                                        "0",
                                                                    },
                                                                    onClick:
                                                                      t[32] ||
                                                                      (t[32] =
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return r.open(
                                                                            r.nationTeleLink
                                                                          );
                                                                        }),
                                                                  },
                                                                  [Yw]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ))
                                                      : Object(a["g"])("", !0),
                                                  ],
                                                  64
                                                ))
                                              : Object(a["g"])("", !0),
                                          ],
                                          64
                                        ))
                                      : Object(a["g"])("", !0),
                                  ],
                                  2
                                )
                              );
                            }),
                            128
                          )),
                    ],
                    64
                  ))
                : (Object(a["u"])(), Object(a["f"])("img", Xw)),
            ]),
          ])
        );
      }),
      Zw =
        (n("a15b"),
        n("1276"),
        n("7db0"),
        n("a434"),
        n("4e82"),
        Object(a["N"])("data-v-7eea8b35")),
      _w = Zw(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])(
            "div",
            { class: r.classes },
            [
              r.src
                ? (Object(a["u"])(),
                  Object(a["f"])(
                    "img",
                    { key: 0, alt: "", src: r.src },
                    null,
                    8,
                    ["src"]
                  ))
                : Object(a["g"])("", !0),
            ],
            2
          )
        );
      }),
      $w = {
        name: "StatusBox",
        props: { status: Number },
        computed: {
          classes: function () {
            var e = ["box-wrapper"];
            return e;
          },
          src: function () {
            switch (this.status) {
              case wp.COMPLETE:
                return Bb.a;
              case wp.PROGRESS:
                return Vf.a;
              default:
                return Nf.a;
            }
          },
        },
      };
    n("8fd3");
    ($w.render = _w), ($w.__scopeId = "data-v-7eea8b35");
    var ey = $w,
      ty = n("d772"),
      ny = n.n(ty),
      ay = n("ff16"),
      iy = n("7842"),
      cy = n("a762"),
      ry = n("2ef0"),
      sy = n.n(ry);
    Ld.a.extend(ny.a);
    var oy = function (e) {
        var t = localStorage.getItem("answered-questions") || "",
          n = (t + e)
            .split("?")
            .filter(function (e, t, n) {
              return n.indexOf(e) === t;
            })
            .join("?");
        localStorage.setItem("answered-questions", n);
      },
      ly = function () {
        var e = localStorage.getItem("answered-questions") || "",
          t = e.split("?").map(function (e) {
            return e + "?";
          });
        return iy.filter(function (e) {
          return !t.find(function (t) {
            return t === e.name;
          });
        });
      },
      uy = {
        name: "Daily",
        components: { StatusBox: ey },
        props: { ended: Boolean, showRank: Boolean },
        data: function () {
          return {
            DAILY_TASK_TYPE: yp,
            selectedDay: null,
            tasks: [],
            personalInfo: {
              facebook: "",
              telegram: "",
              twitter: "",
              youtube: "",
            },
            nations: [
              "Viet Nam",
              "China",
              "Korea",
              "Japan",
              "Indonesia",
              "Philippines",
              "Turkey",
              "Russian Federation",
            ],
            menu: !1,
            notification: { discord: !1 },
            selectedNation: null,
            nationLoading: !1,
            link: {
              tweet: "",
              youtube: "https://www.youtube.com/embed/h7i3GdidgEY",
              retweet: "",
              youtubeHandle: "",
              refer: "",
              facebook: "",
              instagram: "",
              youtubeReview: "",
              gleam: "",
              retweetMedium: "",
              fbPost: "",
              quoteTweet: "",
            },
            questions: iy,
            question: {},
            answer: {},
            question2: {},
            answer2: {},
            countdown: {},
            countdown2: {},
            question3: {},
            answer3: {},
            countdown3: {},
            question4: {},
            answer4: {},
            gleamEmail: !0,
            countdownVerify: { global: "", ann: "" },
            intervalVerify: { global: null, ann: null },
            error: { personalInfo: "" },
          };
        },
        created: function () {
          var e = this;
          return Object(ip["a"])(
            regeneratorRuntime.mark(function t() {
              var n;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (e.selectedNation = e.$store.state.user.country),
                        e.switchDay(e.events[0]),
                        (e.questions = ly()),
                        (e.personalInfo.twitter = e.$store.state.user.twitter),
                        (e.personalInfo.telegram =
                          e.$store.state.user.telegram),
                        ["global", "ann"].forEach(function (t) {
                          var n =
                            localStorage.getItem("countdown-".concat(t)) ||
                            Ld()().add(12, "hour").toISOString();
                          (e.countdownVerify[t] = Ld()(n).diff(Ld()())),
                            clearInterval(e.intervalVerify[t]),
                            (e.intervalVerify[t] = setInterval(function () {
                              e.countdownVerify[t] = Ld()(n).diff(Ld()());
                            }, 1e3));
                        }),
                        (n = localStorage.getItem(
                          "gleam-email-".concat(e.email)
                        )),
                        n &&
                          ((e.gleamEmail = n === e.email),
                          e.gleamEmail || (e.link.refer = n));
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        mounted: function () {
          var e = sy.a
              .maxBy(this.completedUser, function (e) {
                return e.completed;
              })
              .completed.toString()
              .split("").length,
            t = document.querySelectorAll(".completed");
          t.forEach(function (t) {
            t.style.width = "".concat(10 * e, "px");
          });
        },
        computed: {
          address: function () {
            return this.$store.state.user.address;
          },
          email: function () {
            return this.$store.state.user.email;
          },
          telegram: function () {
            return this.$store.state.user.telegram;
          },
          beginnerMissionStatus: function () {
            return this.$store.state.basicTaskStatus;
          },
          beginner: function () {
            return this.$store.state.event.beginner;
          },
          gleamTask: function () {
            return this.$store.state.event.beginner.find(function (e) {
              return (
                "submit-review" === e.task_type &&
                "Submit Gleam" === e.task_name
              );
            });
          },
          beginnerActionTask: function () {
            var e = this;
            return this.$store.state.event.beginner
              .filter(function (e) {
                return (
                  "gleam" !== e.task_type && "Submit Gleam" !== e.task_name
                );
              })
              .map(function (t) {
                return e.mapType(t);
              });
          },
          events: function () {
            var e = this.$store.state.event.daily,
              t = this.beginner;
            return t.length
              ? [{ name: "Basic", status: 1, tasks: t }].concat(
                  Object(ni["a"])(e)
                )
              : e;
          },
          nationsList: function () {
            var e = this,
              t = ay
                .filter(function (t) {
                  return !e.nations.find(function (e) {
                    return e === t.name;
                  });
                })
                .map(function (e) {
                  return e.name;
                }),
              n = [].concat(Object(ni["a"])(this.nations), Object(ni["a"])(t));
            return this.selectedNation
              ? n.filter(function (t) {
                  return t
                    .toLowerCase()
                    .includes(e.selectedNation.toLowerCase());
                })
              : n;
          },
          nationTeleLink: function () {
            var e,
              t = this.$store.state.user.country;
            return null ===
              (e = cy.find(function (e) {
                return e.name === t;
              })) || void 0 === e
              ? void 0
              : e.link;
          },
          discordCode: function () {
            return this.$store.state.user.discord_code;
          },
          completedUser: function () {
            return this.$store.state.event.completed;
          },
        },
        watch: {
          completedUser: {
            handler: function (e) {
              var t = sy.a
                  .maxBy(e, function (e) {
                    return e.completed;
                  })
                  .completed.toString()
                  .split("").length,
                n = document.querySelectorAll(".completed");
              n.forEach(function (e) {
                e.style.width = "".concat(10 * t, "px");
              });
            },
            deep: !0,
          },
        },
        methods: {
          chooseGleamEmail: function (e, t) {
            0 === e.status && (this.gleamEmail = t);
          },
          getCompletedUser: function (e) {
            var t;
            return (
              (null ===
                (t = this.completedUser.find(function (t) {
                  return t.name === e;
                })) || void 0 === t
                ? void 0
                : t.completed) || 0
            );
          },
          copy: function (e, t) {
            var n = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function a() {
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (e) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return");
                      case 2:
                        return (a.next = 4), navigator.clipboard.writeText(e);
                      case 4:
                        (n.notification[t] = !0),
                          setTimeout(function () {
                            n.notification[t] = !1;
                          }, 2e3);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          getDayStatus: function (e) {
            if (0 === e.status) return "#868B98";
            var t = e.tasks,
              n = t.filter(function (e) {
                return 0 === e.status;
              });
            return n.length === t.length
              ? "#FF3838"
              : 0 === n.length
              ? "#3FD845"
              : "#FDB43A";
          },
          displayTimer: function (e, t) {
            var n = Ld.a.duration(e).minutes(),
              a = Ld.a.duration(e).seconds();
            if (t) {
              var i = Ld.a.duration(e).hours();
              return ""
                .concat(i >= 10 ? i : "0" + i, ":")
                .concat(n >= 10 ? n : "0" + n, ":")
                .concat(a >= 10 ? a : "0" + a);
            }
            return "0".concat(n, ":").concat(a >= 10 ? a : "0" + a);
          },
          getDay: function (e) {
            return e.name.toLowerCase().includes("day")
              ? Ld()(e.date).format("DD/MM")
              : e.name;
          },
          mapType: function (e) {
            if (e.task_name.toLowerCase().includes("country"))
              return (
                (this.selectedNation = this.$store.state.user.country),
                Object(cp["a"])(
                  Object(cp["a"])({}, e),
                  {},
                  { type: yp.NATION_COMMUNITY }
                )
              );
            if (e.task_name.toLowerCase().includes("youtube comment")) {
              var t = e.description.split("/");
              return (
                (this.link.youtube =
                  "https://www.youtube.com/embed/" + t[t.length - 1]),
                Object(cp["a"])(
                  Object(cp["a"])({}, e),
                  {},
                  { type: yp.YOUTUBE_CMT }
                )
              );
            }
            if (e.task_name.toLowerCase().includes("white paper")) {
              if (e.status === wp.COMPLETE) {
                var n = localStorage.getItem("question" + e.id);
                (this.question[e.id] =
                  iy.find(function (e) {
                    return e.question === n;
                  }) || iy[0]),
                  (this.answer[e.id] = this.question[e.id].answer),
                  (this.question[e.id].correct = !0),
                  oy(this.question[e.id].q),
                  (this.questions = ly()),
                  Object.assign(
                    this.countdown,
                    Object(hf["a"])({}, e.id, { show: !1, time: "" })
                  );
              } else {
                var a = Math.floor(Math.random() * this.questions.length);
                (this.question[e.id] = this.questions[a]),
                  (this.answer[e.id] = ""),
                  this.questions.splice(a, 1),
                  Object.assign(
                    this.countdown,
                    Object(hf["a"])({}, e.id, { show: !1, time: "" })
                  );
              }
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.WHITEPAPER }
              );
            }
            if (e.task_name.toLowerCase().includes("about the project")) {
              var i = xp.find(function (t) {
                return t.question === e.description;
              });
              return (
                Object.assign(this.answer2, Object(hf["a"])({}, e.id, "")),
                Object.assign(
                  this.countdown2,
                  Object(hf["a"])({}, e.id, { show: !1, time: "" })
                ),
                e.status === wp.COMPLETE &&
                  ((i.correct = !0),
                  Object.assign(
                    this.answer2,
                    Object(hf["a"])({}, e.id, i.answer)
                  )),
                Object(cp["a"])(
                  Object(cp["a"])({}, e),
                  {},
                  { type: yp.QUESTION, question: i }
                )
              );
            }
            if (e.task_name.toLowerCase().includes("answer question")) {
              var c = Mp.find(function (t) {
                return t.question === e.description;
              });
              return (
                e.status === wp.COMPLETE &&
                  (this.answer4[e.id] = localStorage.getItem(
                    "".concat(c.question, "-").concat(this.email)
                  )),
                Object(cp["a"])(
                  Object(cp["a"])({}, e),
                  {},
                  { type: yp.DYNAMIC_QUESTION, question: c }
                )
              );
            }
            if (e.task_name.toLowerCase().includes("national telegram"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.NATION_TELEGRAM }
              );
            if (e.task_name.toLowerCase().includes("global telegram"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.GLOBAL_TELEGRAM }
              );
            if (e.task_name.toLowerCase().includes("announcement telegram"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.ANN_TELEGRAM }
              );
            if (e.task_name.toLowerCase().includes("join national facebook")) {
              var r =
                  "Viet Nam" === this.$store.state.user.country
                    ? "vietnam"
                    : "global",
                s = Sp[r];
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.FACEBOOK, description: s }
              );
            }
            if (e.task_name.toLowerCase().includes("facebook post"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.FACEBOOK_POST }
              );
            if (e.task_name.toLowerCase().includes("discord community"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.DISCORD }
              );
            if (e.task_name.toLowerCase().includes("daily bonus"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.BONUS }
              );
            if (e.task_name.toLowerCase().includes("youtube review"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.YOUTUBE_REVIEW }
              );
            if (e.task_name.toLowerCase().includes("instagram"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.INSTAGRAM }
              );
            if (e.task_name.toLowerCase().includes("medium"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.MEDIUM }
              );
            if (e.task_name.toLowerCase().includes("create a tweet"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.RETWEET }
              );
            if (e.task_name.toLowerCase().includes("gleam"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.GLEAM }
              );
            if (e.task_name.toLowerCase().includes("retweet about"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.RETWEET_MECHA }
              );
            if (e.task_name.toLowerCase().includes("share facebook about"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.FB_MECHA }
              );
            if (e.task_name.toLowerCase().includes("choose your nation"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.COUNTRY }
              );
            if (e.task_name.toLowerCase().includes("personal info"))
              return Object(cp["a"])(
                Object(cp["a"])({}, e),
                {},
                { type: yp.PERSONAL_INFO }
              );
            if (e.task_name.toLowerCase().includes("connect wallet"))
              return (
                this.address &&
                  0 === e.status &&
                  this.$store.dispatch("submitEvent", {
                    task_id: e.id,
                    event_name: e.event_name,
                    submit_data: this.address,
                  }),
                Object(cp["a"])(
                  Object(cp["a"])({}, e),
                  {},
                  { type: yp.WALLET, status: this.address ? 2 : 0 }
                )
              );
            if (e.task_name.toLowerCase().includes("quote tweet")) {
              var o = Tp.find(function (t) {
                  return t.id === e.description;
                }),
                l = "https://mechmaster.io/#/event/"
                  .concat(this.$store.state.event.id, "?refer=")
                  .concat(this.$store.state.user.ref_code),
                u = o.content;
              return (
                o.join &&
                  (u += encodeURIComponent("".concat(o.join).concat(l))),
                o.medium &&
                  (u += encodeURIComponent(
                    "\nðŸ‘‰Read More: ".concat(o.medium)
                  )),
                (u += encodeURIComponent(
                  o.hashtag
                    ? o.hashtag
                    : "\n\n#NFT #Mecha #PlaytoEarn #BlockchainGame #MechMaster"
                )),
                Object(cp["a"])(
                  Object(cp["a"])({}, e),
                  {},
                  {
                    type: yp.QUOTE_TWEET,
                    link: "https://twitter.com/intent/tweet?text=".concat(u),
                    hashtag: o.hashtag,
                  }
                )
              );
            }
            if (e.task_name.toLowerCase().includes("guess concept")) {
              var d = e.description.toLowerCase(),
                b = Ep.names
                  .filter(function (e) {
                    return e !== d;
                  })
                  .sort(function () {
                    return 0.5 - Math.random();
                  })
                  .slice(0, 3);
              b.splice(Math.floor(4 * Math.random()), 0, d);
              var j = {
                question: Ep.question,
                image: Ep.characters[d],
                answer: d,
                answers: b,
                correct: !1,
              };
              return (
                Object.assign(this.answer3, Object(hf["a"])({}, e.id, "")),
                Object.assign(
                  this.countdown3,
                  Object(hf["a"])({}, e.id, { show: !1, time: "" })
                ),
                e.status === wp.COMPLETE &&
                  ((j.correct = !0),
                  Object.assign(
                    this.answer3,
                    Object(hf["a"])({}, e.id, j.answer)
                  )),
                Object(cp["a"])(
                  Object(cp["a"])({}, e),
                  {},
                  { type: yp.MECHA, question: j }
                )
              );
            }
            return e;
          },
          switchDay: function (e) {
            var t = this;
            e &&
              ((this.selectedDay = e),
              "Basic" !== e.name &&
                ((this.questions = ly()),
                (this.tasks = e.tasks.map(function (e) {
                  return t.mapType(e);
                }))));
          },
          updateTaskStatus: function (e, t) {
            var n = this.tasks.findIndex(function (t) {
              return t.id === e.id;
            });
            this.tasks.splice(
              n,
              1,
              Object(cp["a"])(
                Object(cp["a"])({}, this.tasks[n]),
                {},
                { status: t }
              )
            );
          },
          submitPersonalInfo: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c, r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (((t.error.personalInfo = ""), !t.ended)) {
                          n.next = 3;
                          break;
                        }
                        return n.abrupt("return");
                      case 3:
                        if (
                          t.personalInfo.twitter &&
                          t.personalInfo.telegram &&
                          t.selectedNation
                        ) {
                          n.next = 6;
                          break;
                        }
                        return (
                          (t.error.personalInfo =
                            "Please fulfil all the required information!"),
                          n.abrupt("return")
                        );
                      case 6:
                        if (
                          ((a = t.personalInfo.telegram.replace("@", "")),
                          (i = t.personalInfo.twitter.replace("@", "")),
                          !a.includes(" ") && !i.includes(" "))
                        ) {
                          n.next = 10;
                          break;
                        }
                        return (
                          (t.error.personalInfo =
                            "Information contains invalid characters. Please make sure you enter your correct telegram/twitter USERNAME!"),
                          n.abrupt("return")
                        );
                      case 10:
                        return (
                          (c = e.id),
                          (r = e.event_name),
                          a !== t.telegram &&
                            ["global", "ann"].forEach(function (e) {
                              var n = Ld()().add(12, "hour").toISOString();
                              localStorage.setItem("countdown-".concat(e), n),
                                (t.countdownVerify[e] = Ld()(n).diff(Ld()())),
                                clearInterval(t.intervalVerify[e]),
                                (t.intervalVerify[e] = setInterval(function () {
                                  t.countdownVerify[e] = Ld()(n).diff(Ld()());
                                }, 1e3));
                            }),
                          (n.next = 14),
                          t.$store.dispatch("updateUser", {
                            telegram: a,
                            twitter: i,
                            country: t.selectedNation,
                          })
                        );
                      case 14:
                        if (0 !== e.status) {
                          n.next = 17;
                          break;
                        }
                        return (
                          (n.next = 17),
                          t.$store.dispatch("submitEvent", {
                            task_id: c,
                            event_name: r,
                            submit_data: a + "@" + i,
                          })
                        );
                      case 17:
                        return (
                          t.$store.commit("displayMessage", {
                            type: "info",
                            value:
                              0 === e.status
                                ? "Submit successfully!"
                                : "Update successfully!",
                          }),
                          (n.next = 20),
                          t.$store.dispatch("getEventBeginnerTask")
                        );
                      case 20:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          selectNation: function (e, t) {
            var n = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function a() {
                var i, c;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (n.nationLoading = !0),
                          (n.selectedNation = e),
                          (n.menu = !1),
                          (a.next = 5),
                          n.$store.dispatch("updateUser", { country: e })
                        );
                      case 5:
                        if (0 !== t.status || n.ended) {
                          a.next = 14;
                          break;
                        }
                        return (
                          (i = t.id),
                          (c = t.event_name),
                          (a.next = 9),
                          n.$store.dispatch("submitEvent", {
                            task_id: i,
                            event_name: c,
                            submit_data: e,
                          })
                        );
                      case 9:
                        return (
                          (a.next = 11), n.$store.dispatch("getEventDailyTask")
                        );
                      case 11:
                        n.$store.commit("displayMessage", {
                          type: "info",
                          value: "Submit successfully!",
                        }),
                          (n.nationLoading = !1),
                          n.updateTaskStatus(t, wp.COMPLETE);
                      case 14:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          open: function (e, t) {
            t
              ? window.open(e, "new window", "height=900,width=900")
              : window.open(e);
          },
          submitRetweet: function () {},
          submitGleam: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (e.link.refer || e.gleamEmail) &&
                          0 === e.gleamTask.status &&
                          !e.ended
                        ) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (
                          (n = e.gleamTask),
                          (a = n.id),
                          (i = n.event_name),
                          (c = e.gleamEmail ? e.email : e.link.refer),
                          (t.next = 6),
                          e.$store.dispatch("submitEvent", {
                            task_id: a,
                            event_name: i,
                            submit_data: c,
                          })
                        );
                      case 6:
                        return (
                          (t.next = 8),
                          e.$store.dispatch("getEventBeginnerTask")
                        );
                      case 8:
                        return (
                          (t.next = 10), e.$store.dispatch("getEventDailyTask")
                        );
                      case 10:
                        e.$store.commit("displayMessage", {
                          type: "info",
                          value: "Submit successfully!",
                        }),
                          localStorage.setItem(
                            "gleam-email-".concat(e.email),
                            c
                          );
                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          submitQuestion: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          t.answer[e.id] &&
                          !t.countdown[e.id].show &&
                          !t.question[e.id].correct &&
                          0 === e.status &&
                          !t.ended
                        ) {
                          n.next = 2;
                          break;
                        }
                        return n.abrupt("return");
                      case 2:
                        if (t.answer[e.id] === t.question[e.id].answer) {
                          n.next = 8;
                          break;
                        }
                        return (
                          (t.countdown[e.id].show = !0),
                          (t.countdown[e.id].time = 12e4),
                          (a = setInterval(function () {
                            t.countdown[e.id].time -= 1e3;
                          }, 1e3)),
                          setTimeout(function () {
                            (t.countdown[e.id].show = !1),
                              (t.answer[e.id] = ""),
                              (t.question[e.id] =
                                t.questions[
                                  Math.floor(Math.random() * t.questions.length)
                                ]),
                              clearInterval(a);
                          }, 12e4),
                          n.abrupt("return")
                        );
                      case 8:
                        return (
                          (t.question[e.id].correct = !0),
                          localStorage.setItem(
                            "question" + e.id,
                            t.question[e.id].question
                          ),
                          oy(t.question[e.id].question),
                          (i = e.id),
                          (c = e.event_name),
                          t.$store.commit("displayMessage", {
                            type: "info",
                            value: "Submit successfully!",
                          }),
                          (n.next = 15),
                          t.$store.dispatch("submitEvent", {
                            task_id: i,
                            event_name: c,
                            submit_data: t.answer[e.id] + e.id,
                          })
                        );
                      case 15:
                        return (n.next = 17), t.$store.dispatch("getUserInfo");
                      case 17:
                        return (
                          (n.next = 19), t.$store.dispatch("getEventDailyTask")
                        );
                      case 19:
                        t.updateTaskStatus(e, wp.COMPLETE);
                      case 20:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          submitPJQuestion: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          t.answer2[e.id] &&
                          !t.countdown2[e.id].show &&
                          !e.question.correct &&
                          2 !== e.status &&
                          !t.ended
                        ) {
                          n.next = 2;
                          break;
                        }
                        return n.abrupt("return");
                      case 2:
                        if (
                          ((e.showExtraInfo = !0),
                          t.answer2[e.id] === e.question.answer)
                        ) {
                          n.next = 9;
                          break;
                        }
                        return (
                          (t.countdown2[e.id].show = !0),
                          (t.countdown2[e.id].time = 12e4),
                          (a = setInterval(function () {
                            t.countdown2[e.id].time -= 1e3;
                          }, 1e3)),
                          setTimeout(function () {
                            (t.countdown2[e.id].show = !1),
                              (t.answer2[e.id] = ""),
                              clearInterval(a);
                          }, 12e4),
                          n.abrupt("return")
                        );
                      case 9:
                        return (
                          (i = e.id),
                          (c = e.event_name),
                          Object.assign(
                            t.question2,
                            Object(hf["a"])({}, i, !0)
                          ),
                          t.$store.commit("displayMessage", {
                            type: "info",
                            value: "Submit successfully!",
                          }),
                          (n.next = 14),
                          t.$store.dispatch("submitEvent", {
                            task_id: i,
                            event_name: c,
                            submit_data: e.question.answer,
                          })
                        );
                      case 14:
                        return (n.next = 16), t.$store.dispatch("getUserInfo");
                      case 16:
                        return (
                          (n.next = 18), t.$store.dispatch("getEventDailyTask")
                        );
                      case 18:
                        t.updateTaskStatus(e, wp.COMPLETE);
                      case 19:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          submitMechaQuestion: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          t.answer3[e.id] &&
                          !t.countdown3[e.id].show &&
                          !e.question.correct &&
                          2 !== e.status &&
                          !t.ended
                        ) {
                          n.next = 2;
                          break;
                        }
                        return n.abrupt("return");
                      case 2:
                        if (t.answer3[e.id] === e.question.answer) {
                          n.next = 8;
                          break;
                        }
                        return (
                          (t.countdown3[e.id].show = !0),
                          (t.countdown3[e.id].time = 12e4),
                          (a = setInterval(function () {
                            t.countdown3[e.id].time -= 1e3;
                          }, 1e3)),
                          setTimeout(function () {
                            (t.countdown3[e.id].show = !1),
                              (t.answer3[e.id] = ""),
                              clearInterval(a);
                          }, 12e4),
                          n.abrupt("return")
                        );
                      case 8:
                        return (
                          (i = e.id),
                          (c = e.event_name),
                          Object.assign(
                            t.question3,
                            Object(hf["a"])({}, i, !0)
                          ),
                          t.$store.commit("displayMessage", {
                            type: "info",
                            value: "Submit successfully!",
                          }),
                          (n.next = 13),
                          t.$store.dispatch("submitEvent", {
                            task_id: i,
                            event_name: c,
                            submit_data: e.question.answer,
                          })
                        );
                      case 13:
                        return (n.next = 15), t.$store.dispatch("getUserInfo");
                      case 15:
                        return (
                          (n.next = 17), t.$store.dispatch("getEventDailyTask")
                        );
                      case 17:
                        t.updateTaskStatus(e, wp.COMPLETE);
                      case 18:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          submitDynamicQuestion: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (t.answer4[e.id] && 2 !== e.status && !t.ended) {
                          n.next = 2;
                          break;
                        }
                        return n.abrupt("return");
                      case 2:
                        return (
                          (a = t.answer4[e.id]),
                          (i = e.id),
                          (c = e.event_name),
                          t.$store.commit("displayMessage", {
                            type: "info",
                            value: "Submit successfully!",
                          }),
                          (n.next = 7),
                          t.$store.dispatch("submitEvent", {
                            task_id: i,
                            event_name: c,
                            submit_data: a,
                          })
                        );
                      case 7:
                        return (n.next = 9), t.$store.dispatch("getUserInfo");
                      case 9:
                        return (
                          (n.next = 11),
                          t.$store.dispatch("getEventBeginnerTask")
                        );
                      case 11:
                        localStorage.setItem(
                          "".concat(e.question.question, "-").concat(t.email),
                          a
                        ),
                          (t.answer4[e.id] = a);
                      case 13:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          openTelegram: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c, r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          ((a = t.$store.state.user.country || "global"),
                          (i = cy.find(function (e) {
                            return e.name === a;
                          })),
                          i ||
                            (i = cy.find(function (e) {
                              return "global" === e.name;
                            })),
                          t.open(i.link),
                          0 === e.status && !t.ended)
                        ) {
                          n.next = 6;
                          break;
                        }
                        return n.abrupt("return");
                      case 6:
                        return (
                          (c = e.id),
                          (r = e.event_name),
                          (n.next = 9),
                          t.$store.dispatch("submitEvent", {
                            task_id: c,
                            event_name: r,
                            submit_data: i.link,
                          })
                        );
                      case 9:
                        return (
                          (n.next = 11), t.$store.dispatch("getEventDailyTask")
                        );
                      case 11:
                        t.updateTaskStatus(e, wp.COMPLETE);
                      case 12:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          joinFacebook: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          (t.open(e.description), 0 === e.status && !t.ended)
                        ) {
                          n.next = 3;
                          break;
                        }
                        return n.abrupt("return");
                      case 3:
                        return (
                          (a = e.id),
                          (i = e.event_name),
                          (n.next = 6),
                          t.$store.dispatch("submitEvent", {
                            task_id: a,
                            event_name: i,
                            submit_data: e.description,
                          })
                        );
                      case 6:
                        return (
                          (n.next = 8), t.$store.dispatch("getEventDailyTask")
                        );
                      case 8:
                        t.updateTaskStatus(e, wp.COMPLETE);
                      case 9:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          submitLink: function (e, t) {
            var n = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function a() {
                var i, c;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (t && 0 === e.status && !n.ended) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return");
                      case 2:
                        return (
                          (i = e.id),
                          (c = e.event_name),
                          (a.next = 5),
                          n.$store.dispatch("submitEvent", {
                            task_id: i,
                            event_name: c,
                            submit_data: t,
                          })
                        );
                      case 5:
                        n.$store.commit("displayMessage", {
                          type: "info",
                          value: "Submit successfully!",
                        }),
                          n.updateTaskStatus(e, wp.PENDING);
                      case 7:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          connectWallet: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c, r, s, o, l;
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (((n.prev = 0), (a = window.ethereum), a)) {
                            n.next = 5;
                            break;
                          }
                          return (
                            t.$store.commit("displayMessage", {
                              type: "warning",
                              value: "Please download Metamask extension!",
                            }),
                            n.abrupt("return")
                          );
                        case 5:
                          return (
                            (n.next = 7),
                            window.ethereum.request({
                              method: "eth_requestAccounts",
                            })
                          );
                        case 7:
                          return (
                            (i = window.ethereum.selectedAddress),
                            (c = [i, t.email]),
                            (r = "personal_sign"),
                            (n.next = 12),
                            window.ethereum.request({ method: r, params: c })
                          );
                        case 12:
                          return (
                            (s = n.sent),
                            (n.next = 15),
                            t.$store.dispatch("updateUser", {
                              address: i,
                              signature: s,
                            })
                          );
                        case 15:
                          if (
                            0 !== e.status ||
                            t.ended ||
                            "error" === t.$store.state.message.type
                          ) {
                            n.next = 21;
                            break;
                          }
                          return (
                            (o = e.id),
                            (l = e.event_name),
                            (n.next = 19),
                            t.$store.dispatch("submitEvent", {
                              task_id: o,
                              event_name: l,
                              submit_data: i,
                            })
                          );
                        case 19:
                          return (
                            (n.next = 21),
                            t.$store.dispatch("getEventBeginnerTask")
                          );
                        case 21:
                          n.next = 27;
                          break;
                        case 23:
                          (n.prev = 23),
                            (n.t0 = n["catch"](0)),
                            console.log(n.t0),
                            t.$store.commit("displayMessage", {
                              type: "error",
                              value: "Something wrong happened!",
                            });
                        case 27:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 23]]
                );
              })
            )();
          },
          submitTelegram: function (e, t, n) {
            var a = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function i() {
                var c;
                return regeneratorRuntime.wrap(function (i) {
                  while (1)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          a.open(t),
                          a.$store.commit("changeLoadingStatus", !0),
                          (i.next = 4),
                          a.submitLink(e, a.telegram)
                        );
                      case 4:
                        return (
                          (c = Ld()().add(12, "hour").toISOString()),
                          localStorage.setItem("countdown-".concat(n), c),
                          (a.countdownVerify[n] = Ld()(c).diff(Ld()())),
                          clearInterval(a.intervalVerify[n]),
                          (a.intervalVerify[n] = setInterval(function () {
                            a.countdownVerify[n] = Ld()(c).diff(Ld()());
                          }, 1e3)),
                          (i.next = 11),
                          a.$store.dispatch("getEventBeginnerTask")
                        );
                      case 11:
                        a.$store.commit("changeLoadingStatus", !1);
                      case 12:
                      case "end":
                        return i.stop();
                    }
                }, i);
              })
            )();
          },
          verifyAndSubmit: function (e, t, n) {
            var a = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function i() {
                var c;
                return regeneratorRuntime.wrap(function (i) {
                  while (1)
                    switch ((i.prev = i.next)) {
                      case 0:
                        if (2 !== e.status && !a.ended) {
                          i.next = 2;
                          break;
                        }
                        return i.abrupt("return");
                      case 2:
                        if (t.includes(n)) {
                          i.next = 6;
                          break;
                        }
                        return (
                          (c = a.tasks.findIndex(function (t) {
                            return t.id === e.id;
                          })),
                          a.tasks.splice(
                            c,
                            1,
                            Object(cp["a"])(
                              Object(cp["a"])({}, a.tasks[c]),
                              {},
                              { error: "Invalid Link!" }
                            )
                          ),
                          i.abrupt("return")
                        );
                      case 6:
                        return (i.next = 8), a.submitLink(e, t);
                      case 8:
                      case "end":
                        return i.stop();
                    }
                }, i);
              })
            )();
          },
          submitQuoteTweet: function (e, t) {
            var n = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function a() {
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (2 !== e.status && !n.ended) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return");
                      case 2:
                        if (t) {
                          a.next = 7;
                          break;
                        }
                        return (
                          (e.error = "Please insert your link of the Tweet!"),
                          a.abrupt("return")
                        );
                      case 7:
                        if (t.includes("twitter.com")) {
                          a.next = 12;
                          break;
                        }
                        return (e.error = "Invalid Link!"), a.abrupt("return");
                      case 12:
                        if (
                          t
                            .toLowerCase()
                            .includes(n.$store.state.user.twitter.toLowerCase())
                        ) {
                          a.next = 17;
                          break;
                        }
                        return (
                          (e.error =
                            "Please using your submitted twitter account to quote the Tweet!"),
                          a.abrupt("return")
                        );
                      case 17:
                        e.error = "";
                      case 18:
                        return (a.next = 20), n.submitLink(e, t);
                      case 20:
                        setTimeout(function () {
                          n.updateTaskStatus(e, wp.COMPLETE);
                        }, 5e3);
                      case 21:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
        },
      };
    n("8602");
    (uy.render = Jw), (uy.__scopeId = "data-v-e57225c6");
    var dy = uy,
      by = Object(a["N"])("data-v-6ebb4ef2");
    Object(a["x"])("data-v-6ebb4ef2");
    var jy = { class: "main" },
      my = { class: "task" },
      py = { class: "row" },
      fy = Object(a["j"])("div", { class: "spacer" }, null, -1),
      gy = { key: 0, style: { color: "#FDB43A" } },
      hy = { key: 1 },
      Oy = Object(a["j"])(
        "div",
        { style: { color: "#FF3030" } },
        "REJECTED",
        -1
      ),
      vy = Object(a["j"])(
        "div",
        { class: "info" },
        " Publish your story or review about the Mech Master and send us a link: ",
        -1
      ),
      Ay = { class: "row" },
      wy = Object(a["h"])(
        '<div class="info" data-v-6ebb4ef2>Point will be added after the manual check.</div><div class="rules" data-v-6ebb4ef2><div class="title" data-v-6ebb4ef2>Rule Introduction</div><p data-v-6ebb4ef2>1. Articles need to have at least 500 words.</p><p data-v-6ebb4ef2>2. Content must focus on a relevant topic: project features, latest project token updates, blockchain, etc.</p><p data-v-6ebb4ef2>3. Only original content will be accepted. A copy from the project website, blogs or from others&#39; work will be rejected.</p><p data-v-6ebb4ef2>4. Articles should not be removed until IDO begun.</p><p data-v-6ebb4ef2>5. All articles need to have a link to the project website, Medium page, Twitter page, Telegram group, Facebook page, or any other social media.</p><p data-v-6ebb4ef2>6. By joining this program, all participants accept that the project team can use all of these articles as marketing materials.</p><p data-v-6ebb4ef2>7.Must include at least 5 of these hashtags: <span class="highlight" data-v-6ebb4ef2>#mecha #gunpla #gamefi #mechmaster #nft #NFTgaming #NFTGames #NFTs #NFTCollectibles #NFTMarketplace #PlayToEarn</span></p><p data-v-6ebb4ef2>8. All posts and articles must be published online and accessible by everyone</p></div>',
        2
      );
    Object(a["v"])();
    var yy = by(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("status-box");
        return (
          Object(a["u"])(),
          Object(a["f"])("div", jy, [
            Object(a["j"])("div", my, [
              Object(a["j"])("div", py, [
                Object(a["j"])(s, { status: r.status }, null, 8, ["status"]),
                Object(a["j"])("span", null, Object(a["F"])(r.name), 1),
                fy,
                Object(a["j"])(
                  "div",
                  {
                    style: { opacity: 0 === r.status ? 1 : 0.5 },
                    class: "score",
                  },
                  Object(a["F"])(r.point) + " Point",
                  5
                ),
              ]),
              1 === r.status
                ? (Object(a["u"])(),
                  Object(a["f"])("div", gy, "IN PROGRESS..."))
                : Object(a["g"])("", !0),
              -1 === r.status
                ? (Object(a["u"])(),
                  Object(a["f"])("div", hy, [
                    Oy,
                    Object(a["j"])(
                      "div",
                      null,
                      "Reason: " + Object(a["F"])(r.reason),
                      1
                    ),
                  ]))
                : Object(a["g"])("", !0),
              0 === r.status
                ? (Object(a["u"])(),
                  Object(a["f"])(
                    a["a"],
                    { key: 2 },
                    [
                      vy,
                      Object(a["j"])("div", Ay, [
                        Object(a["L"])(
                          Object(a["j"])(
                            "input",
                            {
                              placeholder: "Enter link",
                              "onUpdate:modelValue":
                                t[1] ||
                                (t[1] = function (e) {
                                  return (c.link.review = e);
                                }),
                            },
                            null,
                            512
                          ),
                          [[a["I"], c.link.review]]
                        ),
                        Object(a["j"])(
                          "div",
                          {
                            disabled: 2 === r.status || n.ended,
                            class: "btn",
                            onClick:
                              t[2] ||
                              (t[2] = function () {
                                return (
                                  r.submitReview &&
                                  r.submitReview.apply(r, arguments)
                                );
                              }),
                          },
                          "Submit",
                          8,
                          ["disabled"]
                        ),
                      ]),
                    ],
                    64
                  ))
                : Object(a["g"])("", !0),
              wy,
            ]),
          ])
        );
      }),
      ky = {
        name: "Challenge",
        components: { StatusBox: ey },
        props: {
          discord: { type: Number, default: 0 },
          youtube: { type: Number, default: 0 },
          facebook: { type: Number, default: 0 },
          ended: Boolean,
        },
        data: function () {
          return {
            link: {
              discord: "https://discord.com/invite/xs8MDRvbaF",
              youtube: "https://www.youtube.com/c/mechmasterofficial",
              facebook: "https://www.facebook.com/",
              review: "",
            },
            code: "gvyaTShcxsw",
            notification: !1,
          };
        },
        created: function () {
          var e = this;
          return Object(ip["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), e.$store.dispatch("getChallengeTask")
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        computed: {
          tasks: function () {
            return this.$store.state.event.challenge;
          },
          status: function () {
            var e;
            return (
              (null === (e = this.tasks[0]) || void 0 === e
                ? void 0
                : e.status) || 0
            );
          },
          name: function () {
            var e;
            return null === (e = this.tasks[0]) || void 0 === e
              ? void 0
              : e.task_name;
          },
          point: function () {
            var e;
            return (
              (null === (e = this.tasks[0]) || void 0 === e
                ? void 0
                : e.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) || 0
            );
          },
          reason: function () {
            var e;
            return (
              (null === (e = this.tasks[0]) || void 0 === e
                ? void 0
                : e.reason) || "N/A"
            );
          },
        },
        methods: {
          copy: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2), navigator.clipboard.writeText(e.code)
                        );
                      case 2:
                        (e.notification = !0),
                          setTimeout(function () {
                            e.notification = !1;
                          }, 2e3);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          visit: function (e) {
            window.open(e, "_blank");
          },
          submitReview: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          e.tasks &&
                          e.tasks[0] &&
                          !(e.status > 0) &&
                          e.link.review &&
                          !e.ended
                        ) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (
                          (n = e.tasks[0]),
                          (a = n.event_name),
                          (i = n.id),
                          (t.next = 5),
                          e.$store.dispatch("submitEvent", {
                            task_id: i,
                            event_name: a,
                            submit_data: e.link.review,
                          })
                        );
                      case 5:
                        return (
                          (t.next = 7), e.$store.dispatch("getChallengeTask")
                        );
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      };
    n("c78e");
    (ky.render = yy), (ky.__scopeId = "data-v-6ebb4ef2");
    var Cy = ky,
      xy = Object(a["N"])("data-v-0f0c39c8");
    Object(a["x"])("data-v-0f0c39c8");
    var My = { class: "main" },
      Sy = { class: "task" },
      Ey = Object(a["j"])(
        "div",
        { class: "row" },
        [
          Object(a["j"])("img", {
            style: { "margin-right": "8px" },
            alt: "",
            src: Vf.a,
          }),
          Object(a["j"])("div", null, "Invite Friends"),
          Object(a["j"])("div", { class: "spacer" }),
          Object(a["j"])("div", { class: "box" }, " 200 Points per person "),
        ],
        -1
      ),
      Ty = Object(a["j"])(
        "div",
        { class: "info" },
        "Help us spread a word about the project and receive Points:",
        -1
      ),
      Ry = { class: "row" },
      Iy = { class: "link" },
      Ly = Object(a["j"])("img", { alt: "", src: Pg.a }, null, -1),
      Py = { style: { "white-space": "nowrap" } },
      Uy = Object(a["j"])("div", { class: "spacer" }, null, -1),
      By = { key: 0, class: "notification" },
      Dy = { class: "row bg-black" },
      Ny = { class: "detail" },
      Fy = Object(a["j"])("p", null, "Friend Invited", -1),
      Vy = { class: "detail" },
      qy = Object(a["j"])("p", null, "Eligible Friends", -1),
      Gy = { class: "detail" },
      Hy = Object(a["j"])("p", null, "Earned Points", -1);
    Object(a["v"])();
    var zy = xy(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("div", My, [
            Object(a["j"])("div", Sy, [
              Ey,
              Ty,
              Object(a["j"])("div", Ry, [
                Object(a["j"])("div", Iy, [
                  Ly,
                  Object(a["j"])("span", Py, Object(a["F"])(r.link), 1),
                  Uy,
                  Object(a["j"])("img", {
                    style: { cursor: "pointer" },
                    onClick:
                      t[1] ||
                      (t[1] = function () {
                        return r.copy && r.copy.apply(r, arguments);
                      }),
                    alt: "",
                    src: Vb.a,
                  }),
                ]),
                c.notification
                  ? (Object(a["u"])(), Object(a["f"])("div", By, "Copied!"))
                  : Object(a["g"])("", !0),
              ]),
              Object(a["j"])(
                "div",
                { class: "info", innerHTML: n.rule },
                null,
                8,
                ["innerHTML"]
              ),
              Object(a["j"])("div", Dy, [
                Object(a["j"])("div", Ny, [
                  Fy,
                  Object(a["j"])("p", null, Object(a["F"])(r.invited), 1),
                ]),
                Object(a["j"])("div", Vy, [
                  qy,
                  Object(a["j"])("p", null, Object(a["F"])(r.eligible), 1),
                ]),
                Object(a["j"])("div", Gy, [
                  Hy,
                  Object(a["j"])("p", null, Object(a["F"])(r.invite_point), 1),
                ]),
              ]),
            ]),
          ])
        );
      }),
      Wy = {
        name: "Invite",
        components: {},
        props: { locked: Boolean, rule: null, showRank: Boolean },
        data: function () {
          return { notification: !1 };
        },
        created: function () {
          var e = this;
          return Object(ip["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      e.$store.dispatch("getUserInvite");
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        computed: {
          link: function () {
            if (!this.locked && this.$store.state.user.ref_code) {
              var e =
                window.location.origin +
                "/#/event/"
                  .concat(this.$store.state.event.id, "?refer=")
                  .concat(this.$store.state.user.ref_code);
              return e;
            }
            return "Your Referral Code";
          },
          invited: function () {
            return this.$store.state.user.invited;
          },
          invite_point: function () {
            return this.$store.state.user.invite_point;
          },
          eligible: function () {
            return this.$store.state.user.eligible;
          },
        },
        methods: {
          copy: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.locked) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (
                          (t.next = 4), navigator.clipboard.writeText(e.link)
                        );
                      case 4:
                        (e.notification = !0),
                          setTimeout(function () {
                            e.notification = !1;
                          }, 2e3);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      };
    n("6e74");
    (Wy.render = zy), (Wy.__scopeId = "data-v-0f0c39c8");
    var Ky = Wy,
      Qy = {
        name: "Airdrop",
        components: {
          Daily: dy,
          Challenge: Cy,
          Invite: Ky,
          FlipCountdown: kg,
          BorderCorner: wf,
        },
        props: { modelValue: Boolean, event: null },
        data: function () {
          return { selectedMission: null };
        },
        created: function () {
          return Object(ip["a"])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        computed: {
          computedValue: {
            get: function () {
              return this.modelValue;
            },
            set: function (e) {
              this.$emit("update:modelValue", e);
            },
          },
          loading: function () {
            return this.$store.state.loading;
          },
          user: function () {
            return this.$store.state.user;
          },
          score: function () {
            return this.user.points;
          },
          rank: function () {
            return this.user.rank;
          },
          listMissions: function () {
            return this.event && this.event.listMissions
              ? this.event.listMissions.map(function (e) {
                  return { name: e, status: vp.OPEN };
                })
              : [];
          },
        },
        watch: {
          computedValue: function () {
            this.selectedMission = this.listMissions[0] || "";
          },
        },
        methods: {
          chooseMission: function (e) {
            e.status !== vp.LOCK && (this.selectedMission = e);
          },
        },
      };
    n("ceb1");
    (Qy.render = pg), (Qy.__scopeId = "data-v-b299c42c");
    var Yy = Qy,
      Xy = [
        {
          name: "Mystery NFT Boxes Sale Round 2",
          info: "NFT Mecha Boxes are full of surprises, including super-high-chances of epic",
          status: "upcoming",
        },
        {
          id: 1,
          name: "Airdrop Round 1",
          countdownText: "Winner Announcement",
          countdownDeadline: "Sun Oct 10 2021 23:59:59 UTC+0000",
          start: "Mon Sep 20 2021 00:00:00 UTC+0000",
          end: "Sun Sep 26 2021 23:59:59 UTC+0000",
          status: "ended",
          rank: !0,
          listMissions: ["Daily", "Challenge", "Invite"],
          info: "The top 1000 users ranked on the landing page will get the chance to receive an airdrop reward of 300 $MECH.",
          extraInfo:
            "<h1>â°AIRDROP ROUND 1 TIMELINE</h1>\n                <ul>\n                  <li>ðŸš©Open: 05:00 AM UTC, Sep 20</li>\n                  <li>ðŸš©End : 23:59 PM UTC, Sep 26</li>\n                  <li>ðŸ†Winner Announcement: Oct 10, 2021</li>\n                </ul>",
          ended: !0,
          inviteRule:
            'Everyone followed your link to register and complete at least <span class="highlight">BEGINNER mission</span> and <span class="highlight">20/09 mission in DAILY</span> with a manual check will bring you extra Point.',
        },
        {
          id: 2,
          name: "Airdrop Round 2",
          countdownText: "Event End",
          countdownDeadline: "Fri Oct 8 2021 23:59:59 UTC+0000",
          start: "Mon Oct 4 2021 09:00:00 UTC+0000",
          end: "Fri Oct 8 2021 23:59:59 UTC+0000",
          status: "opening",
          rank: !1,
          listMissions: ["Invite", "Daily"],
          info: "A chance to get grasp $4,500 $MECH Tokens at IDO price:\n                  <ul>\n                    <li>130 top referrers</li>\n                    <li>320 lucky winner random participants in <a href='https://t.me/MechMaster_Official' target='_blank'>Mech Master community</a></li>\n                    <li>150 lucky winner random participants in <a href='https://t.me/GameFi_Official' target='_blank'>GameFi community</a></li>\n                  </ul>",
          extraInfo:
            "<h1>HOW TO PARTICIPATE</h1>\n                  <ul>\n                    <li>Perform the Airdrop missions listed, including Invite and Daily.</li>\n                    <li>Solve all tasks in each mission and receive your points.</li>\n                    <li>Wait for the announcement of the winners.</li>\n                  </ul>",
          inviteRule:
            "You will get referral points if the people referred:<ul><li>Follow your link to register</li><li>Complete the Basic task</li><li>Have points greater than or equal to 600</li></ul>",
        },
      ],
      Jy = {
        name: "Event",
        components: {
          Airdrop: Yy,
          AccordionTransition: Pf,
          BorderCorner: wf,
          LoginModal: Sf,
        },
        data: function () {
          return {
            id: null,
            events: Xy.map(function (e) {
              return e.start && e.end
                ? Object(cp["a"])(
                    Object(cp["a"])({}, e),
                    {},
                    {
                      status:
                        new Date(e.start) < new Date() &&
                        new Date(e.end) > new Date()
                          ? "opening"
                          : new Date(e.end) < new Date()
                          ? "ended"
                          : "upcoming",
                      ended: new Date(e.end) < new Date(),
                    }
                  )
                : e;
            }),
            event: {},
            eventFilter: "opening",
            eventHeaders: [],
            selectedMission: null,
            show: {
              airdrop: !0,
              invite: !0,
              login: !1,
              account: !1,
              main: !1,
              sign: !1,
              list: !1,
              prize: !1,
              winner: !1,
            },
            address: "",
            winnerPagination: 1,
            perPage: 10,
          };
        },
        created: function () {
          var e = this;
          return Object(ip["a"])(
            regeneratorRuntime.mark(function t() {
              var n, a, i;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e.id = e.$route.params.id),
                        e.$store.commit("updateEvent", {
                          type: "id",
                          value: e.id,
                        }),
                        (e.event = e.events[+e.id]),
                        (n =
                          localStorage.getItem("email") ||
                          sessionStorage.getItem("email")),
                        n &&
                          ((a =
                            localStorage.getItem(n) ||
                            sessionStorage.getItem(n)),
                          a &&
                            (e.$store.commit("saveToken", a),
                            e.$store.dispatch("getUserInfo"))),
                        !window.ethereum)
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (
                        (t.next = 8),
                        window.ethereum.request({ method: "eth_accounts" })
                      );
                    case 8:
                      (i = t.sent),
                        (e.address = i[0]),
                        window.ethereum.on("accountsChanged", function (t) {
                          e.address = t[0];
                        });
                    case 11:
                      window.innerWidth < 600 && (e.perPage = 5);
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        computed: {
          isGuest: function () {
            return this.$store.state.isGuest;
          },
          user: function () {
            return this.$store.state.user;
          },
          loading: function () {
            return this.$store.state.loading;
          },
          filteredEvents: function () {
            var e = this;
            return this.isGuest
              ? []
              : this.eventFilter
              ? this.events.filter(function (t) {
                  return t.status === e.eventFilter;
                })
              : this.events;
          },
          winner: function () {
            var e = [];
            return (
              this.user.winner_1 && (e[0] = this.user.winner_1_type),
              this.user.winner_2 && (e[1] = this.user.winner_2_type),
              e
            );
          },
          winners: function () {
            return this.$store.state.winners.slice(
              (this.winnerPagination - 1) * this.perPage,
              this.winnerPagination * this.perPage
            );
          },
          totalPage: function () {
            return Math.ceil(this.$store.state.winners.length / this.perPage);
          },
          winnerLink: function () {
            return this.$store.state.winnerLink;
          },
        },
        watch: {
          filteredEvents: function (e) {
            this.eventHeaders = e.map(function () {
              return !1;
            });
          },
        },
        methods: {
          openDialog: function (e) {
            var t = this;
            Object.keys(this.show).forEach(function (e) {
              return (t.show[e] = !1);
            }),
              (this.show[e] = !0);
          },
          logout: function () {
            this.$store.commit("logout"), (this.show.account = !1);
          },
          chooseMission: function (e) {
            e.status !== vp.LOCK && (this.selectedMission = e);
          },
          openEvent: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (!t.isGuest || t.$store.state.accessToken) {
                          n.next = 6;
                          break;
                        }
                        (t.show.login = !0),
                          (a = document.getElementById("login-modal")),
                          a &&
                            (a.classList.remove("shake"),
                            setTimeout(function () {
                              a.classList.add("shake");
                            }, 100)),
                          (n.next = 19);
                        break;
                      case 6:
                        if (
                          ((t.id = e),
                          (t.event = t.events[e]),
                          (t.show.list = !1),
                          !t.event.ended)
                        ) {
                          n.next = 16;
                          break;
                        }
                        return (
                          (n.next = 12), t.$store.dispatch("getEventWinner", e)
                        );
                      case 12:
                        (t.show.winner = !0),
                          (t.winnerPagination = 1),
                          (n.next = 19);
                        break;
                      case 16:
                        return (
                          (t.show.main = !0),
                          (n.next = 19),
                          t.$store.dispatch("updateEventId", e)
                        );
                      case 19:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          copy: function (e) {
            var t = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), navigator.clipboard.writeText(e);
                      case 2:
                        t.$store.commit("displayMessage", {
                          type: "info",
                          value: "Copied!",
                        });
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          compressAddress: function (e) {
            return window.innerWidth > 600
              ? e
              : e.substr(0, 8) + "..." + e.substr(e.length - 8, 8);
          },
          connectWallet: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c, r;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), (n = window.ethereum), n)) {
                            t.next = 5;
                            break;
                          }
                          return (
                            e.$store.commit("displayMessage", {
                              type: "warning",
                              value: "Please download Metamask extension!",
                            }),
                            t.abrupt("return")
                          );
                        case 5:
                          return (
                            (t.next = 7),
                            n.request({ method: "eth_requestAccounts" })
                          );
                        case 7:
                          return (
                            (a = n.selectedAddress),
                            (i = [a, e.user.email]),
                            (c = "personal_sign"),
                            (t.next = 12),
                            n.request({ method: c, params: i })
                          );
                        case 12:
                          return (
                            (r = t.sent),
                            (t.next = 15),
                            e.$store.dispatch("updateUser", {
                              address: a,
                              signature: r,
                            })
                          );
                        case 15:
                          (e.address = a), (t.next = 22);
                          break;
                        case 18:
                          (t.prev = 18),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0),
                            e.$store.commit("displayMessage", {
                              type: "error",
                              value: "Something wrong happened!",
                            });
                        case 22:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 18]]
                );
              })
            )();
          },
          changeFilter: function (e) {
            this.eventFilter = e;
          },
          changePagination: function (e) {
            var t = this.winnerPagination + e;
            t <= 0
              ? (this.winnerPagination = 1)
              : t > Math.ceil(this.$store.state.winners.length / this.perPage)
              ? (this.winnerPagination = Math.ceil(
                  this.$store.state.winners.length / this.perPage
                ))
              : (this.winnerPagination = t);
          },
          claimPrize: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), (n = window.ethereum), n)) {
                            t.next = 5;
                            break;
                          }
                          return (
                            e.$store.commit("displayMessage", {
                              type: "warning",
                              value: "Please download Metamask extension!",
                            }),
                            t.abrupt("return")
                          );
                        case 5:
                          return (
                            (a = [
                              e.user.address,
                              "mechmaster signature message",
                            ]),
                            (i = "personal_sign"),
                            (t.next = 9),
                            n.request({ method: i, params: a })
                          );
                        case 9:
                          return (
                            (c = t.sent),
                            (t.next = 12),
                            e.$store.dispatch("getWinnerGroup", {
                              address: e.user.address,
                              signature: c,
                            })
                          );
                        case 12:
                          t.next = 18;
                          break;
                        case 14:
                          (t.prev = 14),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0),
                            -32602 === t.t0.code
                              ? e.$store.commit("displayMessage", {
                                  type: "error",
                                  value:
                                    "Please change to correct account in metamask to sign!",
                                })
                              : 4001 === t.t0.code
                              ? e.$store.commit("displayMessage", {
                                  type: "error",
                                  value:
                                    "Please sign the message to receive prize!",
                                })
                              : e.$store.commit("displayMessage", {
                                  type: "error",
                                  value: "Something wrong happened!",
                                });
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 14]]
                );
              })
            )();
          },
          openWinnerGroup: function () {
            window.open(this.winnerLink);
          },
          getPrize: function (e) {
            return Rp[e];
          },
          showMessage: function () {
            this.$store.commit("displayMessage", {
              type: "info",
              value: "Announcement between 18 Oct and 21 Oct!",
            });
          },
        },
      };
    n("d95b"), n("f0d1");
    (Jy.render = ap), (Jy.__scopeId = "data-v-99a3deac");
    var Zy = Jy,
      _y = n("865d"),
      $y = n.n(_y),
      ek = n("de92"),
      tk = n.n(ek),
      nk = n("b020"),
      ak = n.n(nk),
      ik = Object(a["N"])("data-v-768948c7");
    Object(a["x"])("data-v-768948c7");
    var ck = { class: "account" },
      rk = Object(a["j"])("h1", null, "My Account", -1),
      sk = { class: "tab" },
      ok = { class: "tab-bar" },
      lk = { class: "tab-view" },
      uk = { key: 0, class: "profile" },
      dk = { class: "profile-title" },
      bk = Object(a["j"])("span", null, "My Profile", -1),
      jk = Object(a["j"])("img", { alt: "", src: $y.a }, null, -1),
      mk = Object(a["i"])(" Edit "),
      pk = { class: "profile-detail" },
      fk = { class: "row" },
      gk = Object(a["j"])("div", { class: "title" }, "Wallet Address", -1),
      hk = { class: "detail" },
      Ok = { class: "row" },
      vk = Object(a["j"])("div", { class: "title" }, "Email", -1),
      Ak = { class: "detail" },
      wk = Object(a["j"])("img", { alt: "", src: tk.a }, null, -1),
      yk = Object(a["j"])(
        "span",
        { style: { color: "#58fe30" } },
        "Verified",
        -1
      ),
      kk = Object(a["j"])("img", { alt: "", src: ak.a }, null, -1),
      Ck = Object(a["j"])(
        "span",
        { style: { color: "#e73336" } },
        "Unverified",
        -1
      ),
      xk = { key: 0, class: "row" },
      Mk = Object(a["j"])("div", { class: "title" }, "Referral Code", -1),
      Sk = { class: "detail" },
      Ek = { class: "row" },
      Tk = Object(a["j"])("div", { class: "title" }, "Twitter Account", -1),
      Rk = { class: "detail" },
      Ik = { key: 0 },
      Lk = { class: "row" },
      Pk = Object(a["j"])("div", { class: "title" }, "Telegram Account", -1),
      Uk = { class: "detail" },
      Bk = { key: 0 },
      Dk = { class: "button-wrapper" };
    Object(a["v"])();
    var Nk = ik(function (e, t, n, i, c, r) {
        var s,
          o,
          l,
          u = Object(a["D"])("Header");
        return (
          Object(a["u"])(),
          Object(a["f"])("div", ck, [
            Object(a["j"])(u),
            rk,
            Object(a["j"])("div", sk, [
              Object(a["j"])("div", ok, [
                (Object(a["u"])(!0),
                Object(a["f"])(
                  a["a"],
                  null,
                  Object(a["B"])(c.tabs, function (e, t) {
                    return (
                      Object(a["u"])(),
                      Object(a["f"])(
                        "div",
                        {
                          class: "tab-bar__item ".concat(
                            c.selectedTab === t ? "selected" : ""
                          ),
                          key: t,
                        },
                        [
                          Object(a["j"])(
                            "img",
                            { alt: "", src: e.icon },
                            null,
                            8,
                            ["src"]
                          ),
                          Object(a["i"])(" " + Object(a["F"])(e.name), 1),
                        ],
                        2
                      )
                    );
                  }),
                  128
                )),
              ]),
              Object(a["j"])("div", lk, [
                0 === c.selectedTab
                  ? (Object(a["u"])(),
                    Object(a["f"])("div", uk, [
                      Object(a["j"])("div", dk, [
                        bk,
                        "show" === c.mode && r.user.verified
                          ? (Object(a["u"])(),
                            Object(a["f"])(
                              "div",
                              {
                                key: 0,
                                class: "btn-edit",
                                onClick:
                                  t[1] ||
                                  (t[1] = function () {
                                    return (
                                      r.toggleEditMode &&
                                      r.toggleEditMode.apply(r, arguments)
                                    );
                                  }),
                              },
                              [jk, mk]
                            ))
                          : Object(a["g"])("", !0),
                      ]),
                      Object(a["j"])("div", pk, [
                        Object(a["j"])("div", fk, [
                          gk,
                          Object(a["j"])("div", hk, [
                            Object(a["j"])(
                              "span",
                              null,
                              Object(a["F"])(r.user.address),
                              1
                            ),
                          ]),
                        ]),
                        Object(a["j"])("div", Ok, [
                          vk,
                          Object(a["j"])("div", Ak, [
                            null !== (s = r.user) && void 0 !== s && s.email
                              ? (Object(a["u"])(),
                                Object(a["f"])(
                                  a["a"],
                                  { key: 1 },
                                  [
                                    Object(a["j"])(
                                      "span",
                                      null,
                                      Object(a["F"])(r.user.email),
                                      1
                                    ),
                                    r.user.verified
                                      ? (Object(a["u"])(),
                                        Object(a["f"])(
                                          a["a"],
                                          { key: 0 },
                                          [wk, yk],
                                          64
                                        ))
                                      : (Object(a["u"])(),
                                        Object(a["f"])(
                                          a["a"],
                                          { key: 1 },
                                          [kk, Ck],
                                          64
                                        )),
                                  ],
                                  64
                                ))
                              : Object(a["L"])(
                                  (Object(a["u"])(),
                                  Object(a["f"])(
                                    "input",
                                    {
                                      key: 0,
                                      "onUpdate:modelValue":
                                        t[2] ||
                                        (t[2] = function (e) {
                                          return (c.email = e);
                                        }),
                                      type: "email",
                                    },
                                    null,
                                    512
                                  )),
                                  [[a["I"], c.email]]
                                ),
                          ]),
                        ]),
                        null !== (o = r.user) && void 0 !== o && o.email
                          ? Object(a["g"])("", !0)
                          : (Object(a["u"])(),
                            Object(a["f"])("div", xk, [
                              Mk,
                              Object(a["j"])("div", Sk, [
                                Object(a["L"])(
                                  Object(a["j"])(
                                    "input",
                                    {
                                      "onUpdate:modelValue":
                                        t[3] ||
                                        (t[3] = function (e) {
                                          return (c.code = e);
                                        }),
                                    },
                                    null,
                                    512
                                  ),
                                  [[a["I"], c.code]]
                                ),
                              ]),
                            ])),
                        r.user && r.user.email && r.user.verified
                          ? (Object(a["u"])(),
                            Object(a["f"])(
                              a["a"],
                              { key: 1 },
                              [
                                Object(a["j"])("div", Ek, [
                                  Tk,
                                  Object(a["j"])("div", Rk, [
                                    "show" === c.mode
                                      ? (Object(a["u"])(),
                                        Object(a["f"])(
                                          "span",
                                          Ik,
                                          Object(a["F"])(r.user.twitter),
                                          1
                                        ))
                                      : Object(a["L"])(
                                          (Object(a["u"])(),
                                          Object(a["f"])(
                                            "input",
                                            {
                                              key: 1,
                                              "onUpdate:modelValue":
                                                t[4] ||
                                                (t[4] = function (e) {
                                                  return (c.twitter = e);
                                                }),
                                            },
                                            null,
                                            512
                                          )),
                                          [[a["I"], c.twitter]]
                                        ),
                                  ]),
                                ]),
                                Object(a["j"])("div", Lk, [
                                  Pk,
                                  Object(a["j"])("div", Uk, [
                                    "show" === c.mode
                                      ? (Object(a["u"])(),
                                        Object(a["f"])(
                                          "span",
                                          Bk,
                                          Object(a["F"])(r.user.telegram),
                                          1
                                        ))
                                      : Object(a["L"])(
                                          (Object(a["u"])(),
                                          Object(a["f"])(
                                            "input",
                                            {
                                              key: 1,
                                              "onUpdate:modelValue":
                                                t[5] ||
                                                (t[5] = function (e) {
                                                  return (c.telegram = e);
                                                }),
                                            },
                                            null,
                                            512
                                          )),
                                          [[a["I"], c.telegram]]
                                        ),
                                  ]),
                                ]),
                              ],
                              64
                            ))
                          : Object(a["g"])("", !0),
                        Object(a["j"])("div", Dk, [
                          null !== (l = r.user) && void 0 !== l && l.email
                            ? r.user.verified
                              ? "edit" === c.mode
                                ? (Object(a["u"])(),
                                  Object(a["f"])(
                                    a["a"],
                                    { key: 2 },
                                    [
                                      Object(a["j"])(
                                        "div",
                                        {
                                          class: "btn btn-blue",
                                          onClick:
                                            t[9] ||
                                            (t[9] = function () {
                                              return (
                                                r.updateProfile &&
                                                r.updateProfile.apply(
                                                  r,
                                                  arguments
                                                )
                                              );
                                            }),
                                        },
                                        "Update Profile"
                                      ),
                                      Object(a["j"])(
                                        "div",
                                        {
                                          class: "btn",
                                          onClick:
                                            t[10] ||
                                            (t[10] = function (e) {
                                              return (c.mode = "show");
                                            }),
                                        },
                                        "Cancel"
                                      ),
                                    ],
                                    64
                                  ))
                                : Object(a["g"])("", !0)
                              : (Object(a["u"])(),
                                Object(a["f"])(
                                  a["a"],
                                  { key: 1 },
                                  [
                                    Object(a["j"])(
                                      "div",
                                      {
                                        class: "btn btn-blue",
                                        onClick:
                                          t[7] ||
                                          (t[7] = function () {
                                            return (
                                              r.sendVerifyEmail &&
                                              r.sendVerifyEmail.apply(
                                                r,
                                                arguments
                                              )
                                            );
                                          }),
                                      },
                                      "Resend"
                                    ),
                                    Object(a["j"])(
                                      "div",
                                      {
                                        class: "btn btn-purple",
                                        onClick:
                                          t[8] ||
                                          (t[8] = function () {
                                            return (
                                              r.changeEmail &&
                                              r.changeEmail.apply(r, arguments)
                                            );
                                          }),
                                      },
                                      "Change email"
                                    ),
                                  ],
                                  64
                                ))
                            : (Object(a["u"])(),
                              Object(a["f"])(
                                "div",
                                {
                                  key: 0,
                                  disabled: !c.email,
                                  class: "btn btn-blue",
                                  onClick:
                                    t[6] ||
                                    (t[6] = function () {
                                      return (
                                        r.registerEmail &&
                                        r.registerEmail.apply(r, arguments)
                                      );
                                    }),
                                },
                                "Confirm",
                                8,
                                ["disabled"]
                              )),
                        ]),
                      ]),
                    ]))
                  : Object(a["g"])("", !0),
              ]),
            ]),
          ])
        );
      }),
      Fk = n("2f49"),
      Vk = n.n(Fk),
      qk = n("a0d1"),
      Gk = n.n(qk),
      Hk = n("e14c"),
      zk = n.n(Hk),
      Wk = n("fe0f"),
      Kk = n.n(Wk),
      Qk = n("fc1d"),
      Yk = n.n(Qk),
      Xk = n("6c7c"),
      Jk = n.n(Xk),
      Zk = n("29fb"),
      _k = n.n(Zk),
      $k = n("7133"),
      eC = n.n($k),
      tC = Object(a["N"])("data-v-fc0f27b6");
    Object(a["x"])("data-v-fc0f27b6");
    var nC = Object(a["j"])(
        "a",
        { class: "logo", href: "#" },
        [Object(a["j"])("img", { alt: "", src: _k.a })],
        -1
      ),
      aC = Object(a["j"])(
        "ul",
        null,
        [
          Object(a["j"])("li", { class: "active" }, [
            Object(a["j"])("a", { href: "#" }, "Home"),
          ]),
          Object(a["j"])("li", { class: "divider" }, [
            Object(a["j"])("img", { alt: "", src: eC.a }),
          ]),
          Object(a["j"])("li", null, [
            Object(a["j"])("a", { href: "#/marketplace" }, "Marketplace"),
          ]),
          Object(a["j"])("li", { class: "divider" }, [
            Object(a["j"])("img", { alt: "", src: eC.a }),
          ]),
          Object(a["j"])("li", null, [
            Object(a["j"])("a", { href: "#/event" }, "Event"),
          ]),
        ],
        -1
      ),
      iC = Object(a["j"])("div", { class: "spacer" }, null, -1);
    Object(a["v"])();
    var cC = tC(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("ConnectWallet");
        return (
          Object(a["u"])(),
          Object(a["f"])("header", null, [nC, aC, iC, Object(a["j"])(s)])
        );
      }),
      rC = n("2e08"),
      sC = n.n(rC),
      oC = Object(a["N"])("data-v-5cbb509e");
    Object(a["x"])("data-v-5cbb509e");
    var lC = { key: 0, href: "#/account" },
      uC = Object(a["j"])("img", { alt: "", src: sC.a }, null, -1),
      dC = Object(a["i"])(" Connect Wallet ");
    Object(a["v"])();
    var bC = oC(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])("div", null, [
            e.connectedAddress
              ? (Object(a["u"])(),
                Object(a["f"])(
                  "a",
                  lC,
                  " My Account: " +
                    Object(a["F"])(r.compressAddress(e.connectedAddress)),
                  1
                ))
              : (Object(a["u"])(),
                Object(a["f"])(
                  "div",
                  {
                    key: 1,
                    class: "btn",
                    onClick:
                      t[1] ||
                      (t[1] = function () {
                        return r.login && r.login.apply(r, arguments);
                      }),
                  },
                  [uC, dC]
                )),
          ])
        );
      }),
      jC = n("5502"),
      mC = {
        name: "ConnectWallet",
        data: function () {
          return {};
        },
        computed: Object(cp["a"])(
          {},
          Object(jC["b"])(["connectedAddress", "user"])
        ),
        created: function () {
          return Object(ip["a"])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        methods: {
          compressAddress: function (e) {
            return e.substr(0, 5) + "..." + e.substr(e.length - 5, 5);
          },
          login: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          window.ethereum.request({
                            method: "eth_requestAccounts",
                          })
                        );
                      case 2:
                        e.$store.commit(
                          "changeAddress",
                          window.ethereum.selectedAddress
                        ),
                          e.$store.dispatch("getUserInfo"),
                          e.$store.dispatch("getEventBeginnerTask");
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      };
    n("0e8e");
    (mC.render = bC), (mC.__scopeId = "data-v-5cbb509e");
    var pC = mC,
      fC = { name: "Header", components: { ConnectWallet: pC } };
    n("55bb");
    (fC.render = cC), (fC.__scopeId = "data-v-fc0f27b6");
    var gC = fC,
      hC = {
        name: "Account",
        components: { Header: gC },
        data: function () {
          return {
            email: "",
            twitter: "",
            telegram: "",
            mode: "show",
            tabs: [
              { icon: Vk.a, name: "My Profile" },
              { icon: Gk.a, name: "Collections" },
              { icon: zk.a, name: "Assets" },
              { icon: Kk.a, name: "Lists" },
              { icon: Yk.a, name: "Auctions" },
              { icon: Jk.a, name: "Favorites" },
            ],
            selectedTab: 0,
            code: "",
          };
        },
        computed: {
          user: function () {
            return this.$store.state.user;
          },
        },
        methods: {
          toggleEditMode: function () {
            (this.email = this.user.email),
              (this.twitter = this.user.twitter),
              (this.telegram = this.user.telegram),
              (this.mode = "edit");
          },
          getSignature: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c, r;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((n = e.$store.state.connectedAddress),
                          (a = localStorage.getItem(n)),
                          a)
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (
                          (i = "mechmaster signature message"),
                          (c = [n, i]),
                          (r = "personal_sign"),
                          (t.next = 8),
                          window.ethereum.request({ method: r, params: c })
                        );
                      case 8:
                        (a = t.sent), localStorage.setItem(n, a);
                      case 10:
                        return t.abrupt("return", a);
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          registerEmail: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e.email) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (t.next = 4), e.getSignature();
                      case 4:
                        (n = t.sent),
                          (a = { email: e.email, signature: n }),
                          e.code && Object.assign(a, { ref_code: e.code }),
                          e.$store.dispatch("registerUser", a);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          sendVerifyEmail: function () {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          updateProfile: function () {
            var e = this;
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e.twitter || e.telegram) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (t.next = 4), e.getSignature();
                      case 4:
                        return (
                          (n = t.sent),
                          (a = {
                            twitter: e.twitter,
                            telegram: e.telegram,
                            signature: n,
                          }),
                          (t.next = 8),
                          e.$store.dispatch("updateUser", a)
                        );
                      case 8:
                        e.mode = "show";
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          changeEmail: function () {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
        },
      };
    n("12a4");
    (hC.render = Nk), (hC.__scopeId = "data-v-768948c7");
    var OC = hC,
      vC = Object(a["N"])("data-v-5ba170bc");
    Object(a["x"])("data-v-5ba170bc");
    var AC = { class: "main" },
      wC = { class: "content" },
      yC = { key: 0, class: "loader-wrapper" },
      kC = Object(a["j"])("div", { class: "loader" }, null, -1),
      CC = { class: "loader-content" },
      xC = { class: "error" },
      MC = Object(a["j"])(
        "a",
        { class: "btn", href: "#" },
        "Go back to Home page",
        -1
      ),
      SC = { key: 2, class: "info" };
    Object(a["v"])();
    var EC = vC(function (e, t, n, i, c, r) {
        var s = Object(a["D"])("Footer");
        return (
          Object(a["u"])(),
          Object(a["f"])("div", AC, [
            Object(a["j"])("div", wC, [
              c.loading
                ? (Object(a["u"])(),
                  Object(a["f"])("div", yC, [
                    kC,
                    Object(a["j"])("span", CC, Object(a["F"])(c.loading), 1),
                  ]))
                : Object(a["g"])("", !0),
              c.error
                ? (Object(a["u"])(),
                  Object(a["f"])(
                    a["a"],
                    { key: 1 },
                    [
                      Object(a["j"])(
                        "div",
                        xC,
                        "ERROR: " + Object(a["F"])(c.error),
                        1
                      ),
                      MC,
                    ],
                    64
                  ))
                : (Object(a["u"])(),
                  Object(a["f"])(
                    "div",
                    SC,
                    " Email verified. Retrieving user info and redirecting to Event page. "
                  )),
            ]),
            Object(a["j"])(s),
          ])
        );
      }),
      TC = {
        name: "LoginVerification",
        components: { Footer: Vc },
        data: function () {
          return { loading: "Verifying", error: !1, bypass: !0 };
        },
        mounted: function () {
          var e = this;
          return Object(ip["a"])(
            regeneratorRuntime.mark(function t() {
              var n, a, i, c, r;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.$route.params.token),
                        (a = Cp.LOGIN_VERIFY + n),
                        (t.next = 4),
                        kf.a.get(a)
                      );
                    case 4:
                      if (((i = t.sent), 200 === i.status)) {
                        t.next = 10;
                        break;
                      }
                      (e.loading = ""),
                        (e.error = "Some error occurred! Please try again!"),
                        (t.next = 21);
                      break;
                    case 10:
                      if (200 !== i.data.code) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (e.loading = "Retrieving"),
                        (c = null === i || void 0 === i ? void 0 : i.data),
                        (r = c.access_token.token),
                        e.$store.commit("saveToken", r),
                        e.$store.dispatch("getUserInfo"),
                        (t.next = 17),
                        e.$router.push("/event/1")
                      );
                    case 17:
                      t.next = 21;
                      break;
                    case 19:
                      (e.loading = ""), (e.error = i.data.message);
                    case 21:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      };
    n("dd48");
    (TC.render = EC), (TC.__scopeId = "data-v-5ba170bc");
    var RC = TC,
      IC = [
        { path: "/", name: "Home", component: sb },
        { path: "/marketplace", name: "Marketplace", component: hb },
        { path: "/event/:id", name: "EventDetail", component: Zy },
        { path: "/account", name: "Account", component: OC },
        {
          path: "/login-verification/:token",
          name: "Login Verification",
          component: RC,
        },
      ],
      LC = Object(c["a"])({ history: Object(c["b"])(), routes: IC }),
      PC = LC,
      UC = function (e, t) {
        return e.map(function (e) {
          var n = t.find(function (t) {
            return t.id === e.id;
          });
          return Object(cp["a"])(
            Object(cp["a"])({}, e),
            {},
            {
              status: n && n.status ? n.status : wp.PROGRESS,
              reason: null === n || void 0 === n ? void 0 : n.reason,
            }
          );
        });
      },
      BC = (function () {
        var e = Object(ip["a"])(
          regeneratorRuntime.mark(function e(t, n, a, i) {
            var c, r, s, o, l, u, d, b;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      a("changeLoadingStatus", !0),
                      (c = n.event.id),
                      (r = Cp.EVENT + t + "&round_id=" + c),
                      (e.next = 5),
                      kf.a.get(r)
                    );
                  case 5:
                    if (((s = e.sent), !s.data)) {
                      e.next = 19;
                      break;
                    }
                    if (
                      ((o = s.data.data),
                      (l = o.map(function (e) {
                        return Object(cp["a"])(
                          Object(cp["a"])({}, e),
                          {},
                          { status: wp.PROGRESS }
                        );
                      })),
                      !n.accessToken)
                    ) {
                      e.next = 17;
                      break;
                    }
                    return (
                      (r = Cp.USER_EVENT + t + "&round_id=" + c),
                      (e.next = 13),
                      kf.a.get(r, {
                        headers: {
                          Authorization: "Bearer ".concat(n.accessToken),
                        },
                      })
                    );
                  case 13:
                    (u = e.sent),
                      (d = u.data.data),
                      (l = UC(l, d)),
                      i === Ap.BEGINNER &&
                        ((b = d.find(function (e) {
                          return "submit-review" === e.task_type;
                        })),
                        b && a("updateBasicStatus", b.status));
                  case 17:
                    a("updateEvent", { type: i, value: l }),
                      a("changeLoadingStatus", !1);
                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, a, i) {
          return e.apply(this, arguments);
        };
      })(),
      DC = function (e, t) {
        return Ld()().isBefore(Ld()(t)) ? vp.LOCK : vp.OPEN;
      },
      NC = Object(jC["a"])({
        state: function () {
          return {
            message: { show: "", type: "", value: "" },
            connectedAddress: "",
            isGuest: !0,
            user: {
              address: "",
              username: "",
              email: "",
              verified: !1,
              twitter: "",
              telegram: "",
              ref_code: "",
              discord_code: "",
              country: "",
              score: 0,
              rank: "N/A",
              invited: 0,
              eligible: 0,
              invite_point: 0,
            },
            accessToken: "",
            verificationEmailSent: !1,
            event: {
              id: 0,
              beginner: [],
              daily: [],
              challenge: [],
              invite: [],
              completed: [],
            },
            basicTaskStatus: 0,
            loading: !1,
            winners: [],
            winnerLink: "",
          };
        },
        mutations: {
          displayMessage: function (e, t) {
            var n = t.type,
              a = t.value;
            (e.message = { show: !0, type: n, value: a }),
              setTimeout(function () {
                e.message.show = !1;
              }, 5e3);
          },
          changeAddress: function (e, t) {
            (e.connectedAddress = t), (e.user.address = t);
          },
          changeGuestMode: function (e, t) {
            e.isGuest = t;
          },
          updateUser: function (e, t) {
            Object.assign(e.user, t);
          },
          saveToken: function (e, t) {
            e.accessToken = t;
          },
          changeVEmailSent: function (e, t) {
            e.verificationEmailSent = t;
          },
          updateEvent: function (e, t) {
            var n = t.type,
              a = t.value;
            e.event[n] = a;
          },
          updateBasicStatus: function (e, t) {
            e.basicTaskStatus = t;
          },
          logout: function (e) {
            Object.assign(e.user, {
              address: "",
              username: "",
              email: "",
              verified: !1,
              twitter: "",
              telegram: "",
              ref_code: "",
              discord_code: "",
              country: "",
              score: 0,
              rank: "N/A",
            }),
              (e.accessToken = ""),
              (e.isGuest = !0),
              Object.assign(e.event, {
                id: 1,
                beginner: [],
                daily: [],
                challenge: [],
                invite: [],
              });
            var t = sessionStorage.getItem("email");
            sessionStorage.removeItem(t), sessionStorage.removeItem("email");
            var n = localStorage.getItem("email");
            localStorage.removeItem(n), localStorage.removeItem("email");
          },
          changeLoadingStatus: function (e, t) {
            e.loading = t;
          },
          updateWinners: function (e, t) {
            e.winners = t;
          },
          updateWinnerGroup: function (e, t) {
            e.winnerLink = t;
          },
        },
        actions: {
          getUserInfo: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c, r, s;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (a = e.state),
                          n("changeLoadingStatus", !0),
                          (i = a.accessToken),
                          (c = a.event.id),
                          (r = Cp.USER_INFO + "?round_id=" + c),
                          (t.next = 7),
                          kf.a.get(r, {
                            headers: { Authorization: "Bearer ".concat(i) },
                          })
                        );
                      case 7:
                        (s = t.sent),
                          s.data &&
                            (n("updateUser", s.data),
                            n("changeGuestMode", !1),
                            localStorage.setItem("email", s.data.email),
                            localStorage.setItem(s.data.email, i),
                            sessionStorage.setItem("email", s.data.email),
                            sessionStorage.setItem(s.data.email, i)),
                          n("changeLoadingStatus", !1);
                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          registerUser: function (e, t) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c, r, s, o, l, u;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.dispatch),
                          (i = e.state),
                          (c = e.commit),
                          (r = Cp.USER_REGISTER),
                          (s = i.connectedAddress),
                          (o = t.email),
                          (l = t.signature),
                          (n.next = 6),
                          kf.a.post(r, { email: o, address: s, signature: l })
                        );
                      case 6:
                        (u = n.sent),
                          200 === u.data.code
                            ? (a("getUserInfo"),
                              c("displayMessage", {
                                type: "info",
                                value: "Register Successfully!",
                              }))
                            : c("displayMessage", {
                                type: "error",
                                value: "Register Unsuccessfully!",
                              });
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          sendEmailVerify: function (e, t) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c, r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.commit),
                          (i = t.email),
                          (c = Cp.EMAIL_VERIFY + i),
                          a("changeVEmailSent", !1),
                          (n.next = 6),
                          kf.a.get(c)
                        );
                      case 6:
                        (r = n.sent),
                          200 === r.data && a("changeVEmailSent", !0);
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          updateUser: function (e, t) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c, r, s, o;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.dispatch),
                          (i = e.state),
                          (c = e.commit),
                          (r = i.accessToken),
                          (s = Cp.USER_UPDATE),
                          (n.next = 5),
                          kf.a.post(s, t, {
                            headers: { Authorization: "Bearer ".concat(r) },
                          })
                        );
                      case 5:
                        (o = n.sent),
                          200 === o.data.code
                            ? (a("getUserInfo"),
                              c("displayMessage", {
                                type: "info",
                                value: "Update Successfully!",
                              }))
                            : 400 === o.data.code &&
                              "Address is exist" === o.data.message
                            ? c("displayMessage", {
                                type: "error",
                                value:
                                  "This wallet is already connected to another email.",
                              })
                            : c("displayMessage", {
                                type: "error",
                                value: "Update Failed!",
                              });
                      case 7:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getEventBeginnerTask: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.state),
                          (a = e.commit),
                          (t.next = 3),
                          BC("Beginner", n, a, Ap.BEGINNER)
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getEventDailyTask: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c, r, s, o, l, u, d;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.state),
                          (a = e.commit),
                          a("changeLoadingStatus", !0),
                          (i = n.event.id),
                          (c = Cp.EVENT + "Daily&round_id=" + i),
                          (t.next = 6),
                          kf.a.get(c)
                        );
                      case 6:
                        if (((r = t.sent), !r.data)) {
                          t.next = 19;
                          break;
                        }
                        if (
                          ((s = r.data.data),
                          (o = s.map(function (e) {
                            return Object(cp["a"])(
                              Object(cp["a"])({}, e),
                              {},
                              { status: wp.PROGRESS }
                            );
                          })),
                          !n.accessToken)
                        ) {
                          t.next = 17;
                          break;
                        }
                        return (
                          (c = Cp.USER_EVENT + "Daily&round_id=" + i),
                          (t.next = 14),
                          kf.a.get(c, {
                            headers: {
                              Authorization: "Bearer ".concat(n.accessToken),
                            },
                          })
                        );
                      case 14:
                        (l = t.sent), (u = l.data.data), (o = UC(o, u));
                      case 17:
                        (d = sy.a.map(
                          sy.a.groupBy(o, "event_name"),
                          function (e, t) {
                            return {
                              name: t,
                              tasks: e,
                              status: DC(n, e[0].start),
                              date: e[0].start,
                            };
                          }
                        )),
                          a("updateEvent", {
                            type: Ap.DAILY,
                            value: sy.a.sortBy(d, "date"),
                          });
                      case 19:
                        a("changeLoadingStatus", !1);
                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getEventInviteTask: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.state),
                          (a = e.commit),
                          (t.next = 3),
                          BC("Invite", n, a, Ap.INVITE)
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getChallengeTask: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.state),
                          (a = e.commit),
                          (t.next = 3),
                          BC("Challenge", n, a, Ap.CHALLENGE)
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getEventTask: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (n = e.dispatch),
                          n("getEventBeginnerTask"),
                          n("getEventDailyTask"),
                          n("getEventInviteTask");
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          submitEvent: function (e, t) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.state),
                          (i = a.accessToken),
                          (c = Cp.TASK_SUBMIT),
                          (n.next = 5),
                          kf.a.post(c, t, {
                            headers: { Authorization: "Bearer ".concat(i) },
                          })
                        );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getUserInvite: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c, r, s;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.state),
                          (a = e.commit),
                          (i = n.accessToken),
                          (c = n.event.id),
                          (r = Cp.USER_INVITE + "?round_id=" + c),
                          (t.next = 6),
                          kf.a.get(r, {
                            headers: { Authorization: "Bearer ".concat(i) },
                          })
                        );
                      case 6:
                        (s = t.sent), s && s.data && a("updateUser", s.data);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getTaskCompleted: function (e) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, c, r, s;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.state),
                          (a = e.commit),
                          a("changeLoadingStatus", !0),
                          (i = n.event.id),
                          (c = Cp.TASK_COMPLETED + "?round_id=" + i),
                          (t.next = 6),
                          kf.a.get(c)
                        );
                      case 6:
                        (r = t.sent),
                          r &&
                            r.data &&
                            ((s = r.data.data.map(function (e) {
                              return e.event_name.includes("Basic")
                                ? { name: "Basic", completed: e.completed }
                                : {
                                    name: e.event_name,
                                    completed: e.completed,
                                  };
                            })),
                            a("updateEvent", { type: "completed", value: s })),
                          a("changeLoadingStatus", !1);
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          updateEventId: function (e, t) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.commit),
                          (i = e.dispatch),
                          a("updateEvent", { type: "id", value: t }),
                          (n.next = 4),
                          i("getUserInfo")
                        );
                      case 4:
                        return (n.next = 6), i("getEventBeginnerTask");
                      case 6:
                        return (n.next = 8), i("getEventDailyTask");
                      case 8:
                        return (n.next = 10), i("getTaskCompleted");
                      case 10:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getEventWinner: function (e, t) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c, r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.commit),
                          (i = Cp.WINNER + t),
                          (n.next = 4),
                          kf.a.get(i)
                        );
                      case 4:
                        (c = n.sent),
                          c &&
                            c.data &&
                            ((r = c.data.data),
                            console.log(r),
                            a("updateWinners", r));
                      case 6:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getWinnerGroup: function (e, t) {
            return Object(ip["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, c;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.commit),
                          a("changeLoadingStatus", !0),
                          (i = Cp.WINNER_GROUP),
                          (n.next = 5),
                          kf.a.post(i, t)
                        );
                      case 5:
                        (c = n.sent),
                          console.log(c),
                          c && c.data && a("updateWinnerGroup", c.data.data),
                          a("changeLoadingStatus", !1);
                      case 9:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        },
      }),
      FC = NC,
      VC = { id: "app" };
    function qC(e, t, n, i, c, r) {
      var s = Object(a["D"])("router-view"),
        o = Object(a["D"])("notification-message");
      return (
        Object(a["u"])(),
        Object(a["f"])("div", VC, [Object(a["j"])(s), Object(a["j"])(o)])
      );
    }
    n("0e46");
    var GC = Object(a["N"])("data-v-5c61c6e4"),
      HC = GC(function (e, t, n, i, c, r) {
        return (
          Object(a["u"])(),
          Object(a["f"])(
            a["c"],
            { name: "slide-down" },
            {
              default: GC(function () {
                return [
                  Object(a["L"])(
                    Object(a["j"])(
                      "div",
                      {
                        class: "notification-message",
                        style: { background: r.color },
                      },
                      Object(a["F"])(r.msg),
                      5
                    ),
                    [[a["J"], r.show]]
                  ),
                ];
              }),
              _: 1,
            }
          )
        );
      }),
      zC = {
        name: "NotificationMessage",
        computed: {
          show: function () {
            return this.$store.state.message.show;
          },
          msg: function () {
            return this.$store.state.message.value;
          },
          color: function () {
            if (this.$store.state.message.type)
              switch (this.$store.state.message.type) {
                case "info":
                  return "#2B892F";
                case "error":
                  return "#fa4a4a";
                case "warning":
                  return "#FFE42F";
                default:
                  return "#1994FC";
              }
            return "#1994FC";
          },
        },
      };
    n("a917");
    (zC.render = HC), (zC.__scopeId = "data-v-5c61c6e4");
    var WC = zC,
      KC = { name: "App", components: { NotificationMessage: WC } };
    KC.render = qC;
    var QC,
      YC = KC,
      XC = n("53ca");
    QC = Object(a["y"])({ isInit: !1, isAuthorized: !1 });
    var JC = (function () {
        function e() {
          var e = "https://apis.google.com/js/api.js";
          return new Promise(function (t) {
            var n = document.createElement("script");
            (n.src = e),
              (n.onreadystatechange = n.onload =
                function () {
                  (n.readyState && !/loaded|complete/.test(n.readyState)) ||
                    setTimeout(function () {
                      t();
                    }, 500);
                }),
              document.getElementsByTagName("head")[0].appendChild(n);
          });
        }
        // function t(e) {
        //   return new Promise(function (t, n) {
        //     window.gapi.load("auth2", function () {
        //       window.gapi.auth2
        //         .init(e)
        //         .then(function () {
        //           t(window.gapi);
        //         })
        //         .catch(function (e) {
        //           n(e);
        //         });
        //     });
        //   });
        // }
        function n() {
          var a = this;
          if (!(this instanceof n)) return new n();
          (this.instance = null),
            (this.load = function (n) {
              e()
                .then(function () {
                  return;
                })
                .catch(function (e) {
                  console.error(e);
                });
            }),
            (this.signIn = function () {
              return new Promise(function (e, t) {
                a.instance
                  ? a.instance
                      .signIn()
                      .then(function (t) {
                        (QC.isAuthorized = a.instance.isSignedIn.get()), e(t);
                      })
                      .catch(function (e) {
                        t(e);
                      })
                  : t(!1);
              });
            }),
            (this.getAuthCode = function () {
              return new Promise(function (e, t) {
                a.instance
                  ? a.instance
                      .grantOfflineAccess({ prompt: a.prompt })
                      .then(function (t) {
                        e(t.code);
                      })
                      .catch(function (e) {
                        t(e);
                      })
                  : t(!1);
              });
            }),
            (this.signOut = function () {
              return new Promise(function (e, t) {
                a.instance
                  ? a.instance
                      .signOut()
                      .then(function () {
                        (QC.isAuthorized = !1), e(!0);
                      })
                      .catch(function (e) {
                        t(e);
                      })
                  : t(!1);
              });
            });
        }
        return new n();
      })(),
      ZC = {
        install: function (e, t) {
          var n = null,
            i = { scope: "profile email", prompt: "select_account" };
          if ("object" !== Object(XC["a"])(t))
            throw new TypeError(
              "invalid option type. Object type accepted only"
            );
          if (((n = Object.assign(i, t)), !t.clientId))
            throw new Error("clientId is required");
          JC.load(n),
            (e.config.globalProperties.$gAuth = JC),
            e.provide("Vue3GoogleOauth", Object(a["z"])(QC));
        },
      },
      _C = (n("ddb0"), n("466d"), n("47e2"));
    function $C() {
      var e = n("49f8"),
        t = {};
      return (
        e.keys().forEach(function (n) {
          var a = n.match(/([A-Za-z0-9-_]+)\./i);
          if (a && a.length > 1) {
            var i = a[1];
            t[i] = e(n).default;
          }
        }),
        t
      );
    }
    var ex = Object(_C["a"])({
        locale: "en",
        fallbackLocale: "en",
        messages: $C(),
      }),
      tx = ex,
      nx = {
        clientId:
          "79171063071-bpdqik4srlbq9mnnqauqk0kasdd9jacu.apps.googleusercontent.com",
        scope: "profile email",
        prompt: "select_account",
      };
    Object(a["e"])(YC)
      .use(tx)
      .use(PC)
      .use(FC)
      .use(i["a"], { id: "UA-204664188-1" })
      .use(ZC, nx)
      .mount("#app");
  },
  5931: function (e, t, n) {},
  5960: function (e, t, n) {},
  "5b9e": function (e, t, n) {
    "use strict";
    n("e533");
  },
  "5c16": function (e, t, n) {
    e.exports = "img/arrow_right.786e1062.svg";
  },
  "5ca8": function (e, t, n) {
    e.exports = "img/btn-buy.d1aa8db9.png";
  },
  "5cca": function (e, t, n) {},
  "5e86": function (e, t, n) {
    e.exports = "img/hanh.dce60fde.png";
  },
  6091: function (e, t, n) {
    "use strict";
    n("5cca");
  },
  6093: function (e, t, n) {
    e.exports = "img/partner.3a9b55f6.png";
  },
  "609e": function (e, t, n) {
    e.exports = "img/ar-logo.9138f6ad.png";
  },
  "611f": function (e, t, n) {},
  "623f": function (e, t, n) {
    e.exports = "img/rika_thumb.7e394cd1.png";
  },
  6452: function (e, t, n) {
    e.exports = "img/1.b3c4c7e8.png";
  },
  "64ca": function (e, t, n) {
    e.exports = "img/person2.b980e659.svg";
  },
  "66a4": function (e, t, n) {
    e.exports = "img/thi-truong-1.f336ec45.png";
  },
  "66c0": function (e, t, n) {
    e.exports = "img/vr-left.b143b7ea.png";
  },
  "66d0": function (e, t, n) {
    e.exports = "img/twitter.43995ec1.svg";
  },
  6754: function (e, t, n) {
    "use strict";
    n("48cd");
  },
  6816: function (e, t, n) {},
  "691b": function (e, t, n) {
    e.exports = "img/explore.9bbb2af7.png";
  },
  6992: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=7";
  },
  "6a16": function (e, t, n) {
    e.exports = "img/7.f1cdeb39.png";
  },
  "6b8c": function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=8";
  },
  "6baf": function (e, t, n) {
    e.exports = "img/planet1.f4827bec.png";
  },
  "6c7c": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATBAMAAABiojCGAAAAAXNSR0IB2cksfwAAAC1QTFRFAAAA////////////////////////////////////////////////////////oUirmwAAAA90Uk5TAP/AEDCAUODQXyDwsKCPMd8IIwAAAG9JREFUeJxjYAACtgQGGDAvhjMDRWEsFkFBByiTSVBQAcJiDhQUFDUAMrjmNQoCgcTLBQwHBaFAhsECxmxmYNkIYUkDDXGEMEWA+jghzAkgwxRBLCEG3EyIAVCm7EVBQQiz1IA5HMxkOQYikxYwAACqFhG2hEdzOgAAAABJRU5ErkJggg==";
  },
  "6cbd": function (e, t, n) {
    e.exports = "img/youtube.7c2ce7f7.svg";
  },
  "6cc1": function (e, t, n) {
    e.exports = "img/trading.56c11ee0.svg";
  },
  "6d64": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "6e32": function (e, t, n) {
    e.exports = "img/airdrop-box_large.d7cf0281.png";
  },
  "6e64": function (e, t, n) {
    e.exports = "img/join-now-button.64451b86.png";
  },
  "6e74": function (e, t, n) {
    "use strict";
    n("cd69");
  },
  "6f6d": function (e, t, n) {
    e.exports = "img/caution.497497ed.svg";
  },
  "6fc8": function (e, t, n) {
    e.exports = "img/title-game2.4ac22783.png";
  },
  7007: function (e, t, n) {
    e.exports = "img/tab-mecha.70c000bc.png";
  },
  7088: function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  7133: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAyCAMAAABBEvq7AAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAURJ4mDneCPsm5qvBzWLxG797EJMbgZkAAABISURBVAjXnY63EcAwEMOgnKO1/6x+FV7APLYECF9CQGtSwjmUYm+spVZyJkbO+VnZjnEh3tMaa1HKJRtD71ckOpHOiX7uBym8Y80EynBm5GcAAAAASUVORK5CYII=";
  },
  "71ca": function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=19";
  },
  "71d0": function (e, t, n) {
    e.exports = "img/calendar_none.bc48a9bd.svg";
  },
  "722e": function (e, t, n) {
    e.exports = "img/tab-pilot.6b7c3783.png";
  },
  "735c": function (e, t, n) {
    e.exports = "img/bsc.97a84deb.svg";
  },
  "73e7": function (e, t, n) {
    e.exports = "img/sun-mb.4b0d7e46.png";
  },
  7401: function (e, t, n) {
    "use strict";
    n("ef83");
  },
  7484: function (e, t, n) {
    e.exports = "img/double_arrow_right.100f9b91.svg";
  },
  "76fd": function (e, t, n) {
    e.exports = "img/airdrop-box.9672cb2c.png";
  },
  "77eb": function (e, t, n) {
    e.exports = "img/logout.0dce1cdb.svg";
  },
  7842: function (e) {
    e.exports = JSON.parse(
      '[{"question":"Which blockchain explorer/network is Mech Master based on?","answers":["Polygon","Binance Smart Chain (BSC)","PolkaFoundry","All of the above"],"answer":"All of the above","correct":false},{"question":"How many robot race in Mech Master?","answers":["7","8","9","10"],"answer":"7","correct":false},{"question":"How many strategies available at playersâ€™ disposal?","answers":["7","8","9","No limit"],"answer":"No limit","correct":false},{"question":"Which is one of the the main token use cases?","answers":["In-game Currency","Staking","NFT farming, NFT renting","Gacha system & Governance","All of the above"],"answer":"All of the above","correct":false},{"question":"What is Mech Master?","answers":["A strategic gameplay","A trade market","Ranking and Tournaments","Metaverse","All of the above"],"answer":"All of the above","correct":false},{"question":"How are Mecha collectibles classified?","answers":["5 tiers, 7 races, 8 elements","7 tiers, 8 races, 7 elements","5 tiers, 8 races, 8 elements","7 tiers, 5 races, 8 elements"],"answer":"5 tiers, 7 races, 8 elements","correct":false},{"question":"How many types of NFTs are defined in the white paper?","answers":["2: Mecha and Pilot","3: Mecha, Pilot and Equipment","4: Mecha, Pilot, Equipment and Moon land","5: Mecha, Pilot, Equipment, Moon land and Settlement"],"answer":"5: Mecha, Pilot, Equipment, Moon land and Settlement","correct":false},{"question":"What kind of game is Mech master building?","answers":["RPG","Turn-based","Turn-based and construction","Construction Game","Card Game"],"answer":"Turn-based and construction","correct":false},{"question":"Which one is the name of Mecha race?","answers":["Aerial","Classical","Megatron","Humanoid"],"answer":"Aerial","correct":false},{"question":"Which is one of the in-game items that players can collect?","answers":["Mechas","Pilots","Equipments","Lands","All of the above"],"answer":"All of the above","correct":false},{"question":"Which technology is implemented into Mech Master game?","answers":["AR Technology","Bio Technology","VR Technology","AI Technology"],"answer":"AR Technology","correct":false},{"question":"Which is one of the daily tasks in Mech Master gameplay?","answers":["Battle other players","Get resources and Develop your Moonbase","Produce new Mecha","Trade on the Mech Master Market","All of the above"],"answer":"All of the above","correct":false},{"question":"Where is The Settlement Collectible located?","answers":["The Earth","The Mars","The Moonbase","The Universe"],"answer":"The Moonbase","correct":false},{"question":"What is the name of Future Earth inhabitants in the Mech Master game?","answers":["Homo Deus","Homo Sapiens","Home Mech"],"answer":"Homo Deus","correct":false},{"question":"How many mechas in one team players will assemble to battle against opponents?","answers":["1","2","3","5"],"answer":"5","correct":false},{"question":"What makes each battle in Mech Master a unique experience?","answers":["A huge library of Mechas, pilots, and equipment","Many types of elements such as commander, weather","Many hexagon tiles attached with unique terrain elements","Mech Master is unique itself","All of the above"],"answer":"All of the above","correct":false},{"question":"Who creates items in the game?","answers":["Players","Mechas","Aliens","Factories"],"answer":"Players","correct":false},{"question":"What is the name of the first mecha in Legion race?","answers":["Roman Legion","Homo Deus","Promethean","Bumblebee"],"answer":"Promethean","correct":false},{"question":"What is the name of the first mecha in Aerial race?","answers":["Kraken","Odin","Valkyrie","Homo Deus"],"answer":"Valkyrie","correct":false},{"question":"What is the name of the first mecha in Ravager race?","answers":["Arachne","Odin","E.T","Spider Beast"],"answer":"Arachne","correct":false},{"question":"What is the name of the first mecha in Giant race?","answers":["Dreadnaught","Homo Deus","Promethean","Roman Legion"],"answer":"Dreadnaught","correct":false},{"question":"What is the name of the first mecha in Alien race?","answers":["Rifter","Arachne","Promethean","Dreadnaught"],"answer":"Rifter","correct":false},{"question":"What is the name of the first mecha in Relic race?","answers":["Arachne","Homo Deus","Golem","Watchman"],"answer":"Watchman","correct":false}]'
    );
  },
  "793b": function (e, t, n) {
    e.exports = "img/yoko_thumb_s.cecc8d15.png";
  },
  7958: function (e, t, n) {
    e.exports = "img/au21.96e446f4.2834dc8f.svg";
  },
  7979: function (e, t, n) {},
  "798a": function (e, t, n) {
    e.exports = "img/hgventures.f5d209d7.png";
  },
  "7a1f": function (e, t, n) {
    e.exports = "img/coming-soon.87c9f5a7.png";
  },
  "7ae1": function (e, t, n) {},
  "7c0d": function (e, t, n) {
    e.exports = "img/3.458d7ab3.png";
  },
  "7cde": function (e, t, n) {
    e.exports = "img/ar-pilot.6832a1b2.png";
  },
  "7db3": function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=13";
  },
  "807d": function (e, t, n) {
    e.exports = "img/chiyoko.2f344b50.png";
  },
  "81e3": function (e, t, n) {
    e.exports = "img/eversecapital.dd2ff4f6.png";
  },
  8346: function (e, t, n) {
    e.exports = "img/youtube.6248c704.svg";
  },
  "84e7": function (e, t, n) {
    e.exports = "img/gamefi.406fcfb0.svg";
  },
  8579: function (e, t, n) {
    e.exports = "img/rika.dfedd599.png";
  },
  8600: function (e, t, n) {
    e.exports = "img/iphone.2c0c07f3.png";
  },
  8602: function (e, t, n) {
    "use strict";
    n("3f2f");
  },
  "865d": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAMAAABxVtfCAAAAAXNSR0IB2cksfwAAAI1QTFRFAAAA/////////////////////////////////////v7+/////////////f39////////////////////+/v7/////////f39/////////f39/////v7+////////////////////////////////////////////////////////////////////////kDn2YAAAAC90Uk5TAP+6T0mHgOSNFnCCvsIjdANArRo588U0VPkq55QUZgxG1glsyn6nOOwQQ/yheFtV3Xv5AAAA00lEQVR4nK3R1xqCMAwG0EQQpAKyBJUpuHC9/+MZtGWUXvrf9TtNmgCAKmGQXnKlACwQ0bZU4ibaljBQNTzdDnfCVEExotmhOSPLoXaEesqgLJZ9sisnwsgFyHBI0ApCLKiHPdATLHF6ML7K5bzuwjwrFtc2Yk2fj5E7U+pM5ytLVWPzBTGQLbnu9nwMTzbNdLX9t6pqZPPxmFPlBqLbSrYK8Ri+XxCZeJ69ZzunroA+lCGbV9dlS1OsFCbyH/MntpyYoWtD9GCw0f/rs+bWKGz3ow8Udwwcg9OMDwAAAABJRU5ErkJggg==";
  },
  8745: function (e, t, n) {},
  "879b": function (e, t, n) {
    e.exports = "img/decentraland.602a09eb.svg";
  },
  "87aa": function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=1";
  },
  "87ea": function (e, t, n) {
    e.exports = "img/bg-mechmaster.60a3314a.png";
  },
  8859: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=11";
  },
  8982: function (e, t, n) {
    e.exports = listMechasSlider[3].thumb;
  },
  "8c19": function (e, t, n) {
    "use strict";
    n("6816");
  },
  "8d08": function (e, t, n) {},
  "8d4e": function (e, t, n) {},
  "8dbd": function (e, t, n) {
    e.exports = "img/facebook.d9953815.svg";
  },
  "8ee6": function (e, t, n) {
    e.exports = "img/explore_vga.76d26f64.png";
  },
  "8f1f": function (e, t, n) {
    e.exports = "img/chain.cdac60b9.svg";
  },
  "8f25": function (e, t, n) {
    e.exports = "img/Q3-2021.6aec24ce.png";
  },
  "8f73": function (e, t, n) {},
  "8fad": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "8fd3": function (e, t, n) {
    "use strict";
    n("7ae1");
  },
  9655: function (e, t, n) {
    e.exports = "img/airdrop-header.49253f48.png";
  },
  "977e": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAATCAMAAABWWYYKAAAAAXNSR0IB2cksfwAAAGZQTFRFAAAA/////////////////////////////////////////////////////////////////////v7+////////////////////+/v7/////v7+/////////////v7+////////////pjMcpQAAACJ0Uk5TAP+/4rDStebM27ueBPurx6fDXKIIHk1iO9Z6iUSOhH7wJB7SZe4AAACTSURBVHicfdHJDoMwDATQCSEhGwn7Dm3//ydLLyhBuHMa6Um2JQNurKQJQvPiF861nlUtbeMAZ9lzbIeNIMYa7KRVkKRlCFcX8m4imjHUqemr50DXqNh4bKeOijT0LWWf/f24z6NfC+JOs3DGEkvOvpn/YwdpLaaSoHIAjmcsl/O5mF7W59JkQYlZqJAZmft23YAvATYHF3QM2Z4AAAAASUVORK5CYII=";
  },
  "996c": function (e, t, n) {},
  "9ac7": function (e, t, n) {
    e.exports = listMechasSlider[4].image;
  },
  "9e38": function (e, t, n) {
    e.exports = "img/metaverse.a0926552.svg";
  },
  "9e70": function (e, t, n) {},
  "9f2b": function (e, t, n) {
    e.exports = listMechasSlider[2].thumb;
  },
  a07d: function (e, t, n) {
    e.exports = listMechasSlider[3].image;
  },
  a0d1: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAAXNSR0IB2cksfwAAAGZQTFRFAAAA/////////////////////////////////Pz8/////////////////////Pz8////////////////////////////////////////////////////////////////////////Es13VAAAACJ0Uk5TAP/4kMjhujr6MDb3xdZWLbTe56gQ8HGSPIBRnxjiXYcfpk4iGdIAAABvSURBVHiczc/JDoMwDEXR51CoScIUhgJlaP//J1GDhEiULpG4G8tH3hjo64efHhrIlgJ9EZ1XVkIIpYiU60uR/tLErkvYShKuP3dP7u4S0zqGPK+I3x//L87sMMa/P7raGa8/93nQNdBlc+xVJcUGgWwFu+8jSNoAAAAASUVORK5CYII=";
  },
  a135: function (e, t, n) {
    e.exports = "img/tab-game.211e1c19.png";
  },
  a22c: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=33";
  },
  a2bf: function (e, t, n) {
    e.exports = "img/yoko_thumb.44b2b99f.png";
  },
  a414: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=9";
  },
  a5ba: function (e, t, n) {
    e.exports = "img/linkedin.e6cbd86e.svg";
  },
  a5c9: function (e, t, n) {
    e.exports = "img/kyros_white.26b995a4.png";
  },
  a762: function (e) {
    e.exports = JSON.parse(
      '[{"name":"global","link":"https://t.me/MechMaster_Official"},{"name":"Viet Nam","link":"https://t.me/MechMaster_VietNam"},{"name":"Korea","link":"https://t.me/MechMaster_Korea"},{"name":"Indonesia","link":"https://t.me/MechMaster_Indonesia"},{"name":"Turkey","link":"https://t.me/mechmasterturkey"},{"name":"China","link":"https://t.me/MechMaster_China"},{"name":"Philippines","link":"https://t.me/mechmasterphilippines"},{"name":"Japan","link":"https://t.me/MechMaster_jp"},{"name":"Russian Federation","link":"https://t.me/MechMaster_Russia"}]'
    );
  },
  a7ba: function (e, t, n) {
    e.exports = "img/planet6.29858a3d.png";
  },
  a817: function (e, t, n) {
    e.exports = "img/light.6d731dec.png";
  },
  a917: function (e, t, n) {
    "use strict";
    n("9e70");
  },
  a9ec: function (e, t, n) {
    e.exports = "img/explore_battle.967680e5.png";
  },
  aaa1: function (e, t, n) {
    e.exports = "img/calendar.d6bd07f9.svg";
  },
  ab46: function (e, t, n) {
    e.exports = "img/team.12c38e65.png";
  },
  abdc: function (e, t, n) {
    e.exports = "img/banner.9e0a2948.png";
  },
  ac33: function (e, t, n) {
    e.exports = "img/ar-pilot-light.7fabe0d7.png";
  },
  ac3d: function (e, t, n) {
    e.exports = "img/iphone5.399bd0f6.png";
  },
  aced: function (e, t, n) {
    "use strict";
    n.r(t),
      (t["default"] = {
        market: (e) => {
          const { normalize: t } = e;
          return t(["Cho den"]);
        },
        whitepaper: (e) => {
          const { normalize: t } = e;
          return t(["Tai lieu"]);
        },
        staking: (e) => {
          const { normalize: t } = e;
          return t(["Luu tru"]);
        },
        buy: (e) => {
          const { normalize: t } = e;
          return t(["Mua"]);
        },
        banner: (e) => {
          const { normalize: t } = e;
          return t(["Your second reality is waiting..."]);
        },
        "banner-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Own a UNIQUE PIECE OF LANDS ON THE MOON - Limited supply of thousands of unique land plots, each represented with an NFT, which can be traded freely on the Marketplace.",
          ]);
        },
        "moon-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Experience right now a very possible future world where people play, build, earn, and enjoy life on Earth's natural satellite.",
          ]);
        },
        play: (e) => {
          const { normalize: t } = e;
          return t(["Play"]);
        },
        "play-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Assemble a team to battle against other players from a huge list of Mechas, Pilots and Weapons. Become the top rank Mech Master!",
          ]);
        },
        build: (e) => {
          const { normalize: t } = e;
          return t(["Build"]);
        },
        "build-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Buy pieces of land on the Moon and build Mecha Factory, Pilot Academy, Armory... to grow your economies and Mecha army.",
          ]);
        },
        earn: (e) => {
          const { normalize: t } = e;
          return t(["Earn"]);
        },
        "earn-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Earn MECH token from participating in various activities in Mech Master like battling, staking, guild wars and individual tournaments.",
          ]);
        },
        enjoy: (e) => {
          const { normalize: t } = e;
          return t(["Enjoy"]);
        },
        "enjoy-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Enjoy Moon Metaverse via state-of-the-art Augmented Reality (AR) and Virtual Reality (VR) technology.",
          ]);
        },
        "augmented-reality": (e) => {
          const { normalize: t } = e;
          return t(["Augmented Reality"]);
        },
        "ar-combat": (e) => {
          const { normalize: t } = e;
          return t(["AR Combat"]);
        },
        "ar-combat-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Bring all the intense battles from Mech Master to the real world and experience all the magic of the 3D world.",
          ]);
        },
        "ar-cinematic": (e) => {
          const { normalize: t } = e;
          return t(["AR Cinematic"]);
        },
        "ar-cinematic-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Become part of the Mech Master Metaverse AR by owning a 3D Model of a Mecha, which you can show off by taking photos with your Mecha everywhere, in real life.",
          ]);
        },
        "ar-pilot": (e) => {
          const { normalize: t } = e;
          return t(["AR-Pilot"]);
        },
        "ar-mecha": (e) => {
          const { normalize: t } = e;
          return t(["AR-Mecha"]);
        },
        "virtual-reality": (e) => {
          const { normalize: t } = e;
          return t(["Virtual Reality"]);
        },
        "mecha-market": (e) => {
          const { normalize: t } = e;
          return t(["Mecha Market"]);
        },
        "mecha-market-desc": (e) => {
          const { normalize: t } = e;
          return t([]);
        },
        "more-feature": (e) => {
          const { normalize: t } = e;
          return t(["More Feature"]);
        },
        "more-feature-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Go shopping in virtual Shop where every giant Mecha, every stunning Pilot, and every meticulously crafted weapon is right in front of your very eyes.",
          ]);
        },
        weapon: (e) => {
          const { normalize: t } = e;
          return t(["Weapon"]);
        },
        battle: (e) => {
          const { normalize: t } = e;
          return t(["Battle"]);
        },
        pilot: (e) => {
          const { normalize: t } = e;
          return t(["Pilot"]);
        },
        factory: (e) => {
          const { normalize: t } = e;
          return t(["Factory"]);
        },
        gameplay: (e) => {
          const { normalize: t } = e;
          return t(["Gameplay"]);
        },
        "gameplay-desc-1": (e) => {
          const { normalize: t } = e;
          return t([
            "Assemble a team of humongous Mechas to battle against opponents in turn-based combat.",
          ]);
        },
        "gameplay-desc-2": (e) => {
          const { normalize: t } = e;
          return t([
            "A huge library of Mechas, pilots, and equipment, along with many other elements like commander, weather, make each battle a unique experience and push your tactical genius to the absolute limits.",
          ]);
        },
        "meet-our-mecha": (e) => {
          const { normalize: t } = e;
          return t(["Meet our mechas"]);
        },
        "meet-out-pilot": (e) => {
          const { normalize: t } = e;
          return t(["Meet our pilots"]);
        },
        roadmap: {
          title: (e) => {
            const { normalize: t } = e;
            return t(["Roadmap"]);
          },
          "q3-2021-1": (e) => {
            const { normalize: t } = e;
            return t(["Game design & Art concept"]);
          },
          "q3-2021-2": (e) => {
            const { normalize: t } = e;
            return t(["Gacha NFT sales"]);
          },
          "q4-2021-1": (e) => {
            const { normalize: t } = e;
            return t(["IDO"]);
          },
          "q4-2021-2": (e) => {
            const { normalize: t } = e;
            return t(["Mecha Marketplace"]);
          },
          "q4-2021-3": (e) => {
            const { normalize: t } = e;
            return t(["Stake tokens to increase MECHA level"]);
          },
          "q4-2021-4": (e) => {
            const { normalize: t } = e;
            return t(["Mech 3D"]);
          },
          "q4-2021-5": (e) => {
            const { normalize: t } = e;
            return t(["AR application"]);
          },
          "q1-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Mech equipment"]);
          },
          "q1-2022-2": (e) => {
            const { normalize: t } = e;
            return t(["Gacha equipment vendor"]);
          },
          "q1-2022-3": (e) => {
            const { normalize: t } = e;
            return t(["DAO platform & equipment enhancement"]);
          },
          "q1-2022-4": (e) => {
            const { normalize: t } = e;
            return t(["Master Mecha Arena (IOS+ Android)"]);
          },
          "q2-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Tournament"]);
          },
          "q2-2022-2": (e) => {
            const { normalize: t } = e;
            return t(["Moonland sale"]);
          },
          "q3-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Land customization & Guild battle"]);
          },
          "q4-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Multichain: ETH & DOT versions via PolkaFoundry"]);
          },
        },
        audit: (e) => {
          const { normalize: t } = e;
          return t(["Audit by"]);
        },
        backed: (e) => {
          const { normalize: t } = e;
          return t(["Backed by"]);
        },
        "meet-out-team": (e) => {
          const { normalize: t } = e;
          return t(["Meet our team"]);
        },
        "team-title": {
          "project-leader": (e) => {
            const { normalize: t } = e;
            return t(["Project Leader"]);
          },
          "project-manager": (e) => {
            const { normalize: t } = e;
            return t(["Project Manager"]);
          },
          "head-marketing": (e) => {
            const { normalize: t } = e;
            return t(["Head of Marketing"]);
          },
          "marketing-leader": (e) => {
            const { normalize: t } = e;
            return t(["Marketing Team Leader"]);
          },
          "3D-leader": (e) => {
            const { normalize: t } = e;
            return t(["3D Leader"]);
          },
          "art-director": (e) => {
            const { normalize: t } = e;
            return t(["Art Director"]);
          },
          "game-designer": (e) => {
            const { normalize: t } = e;
            return t(["Game Designer"]);
          },
          "unity-leader": (e) => {
            const { normalize: t } = e;
            return t(["Unity Leader"]);
          },
          "UI-leader": (e) => {
            const { normalize: t } = e;
            return t(["UI/UX Leader"]);
          },
          "backend-leader": (e) => {
            const { normalize: t } = e;
            return t(["Backend Leader"]);
          },
          "vfx-leader": (e) => {
            const { normalize: t } = e;
            return t(["VFX Leader"]);
          },
          "2D-leader": (e) => {
            const { normalize: t } = e;
            return t(["2D Leader"]);
          },
          advisor: (e) => {
            const { normalize: t } = e;
            return t(["Advisor"]);
          },
        },
        footer: {
          first: (e) => {
            const { normalize: t } = e;
            return t(["Â©2021 mirai studio, INC. ALL RIGHTS RESERVED."]);
          },
          second: (e) => {
            const { normalize: t } = e;
            return t([
              "All trademarks referenced herein are the properties of their respective owners",
            ]);
          },
        },
      });
  },
  ad1a: function (e, t, n) {
    "use strict";
    n("8d4e");
  },
  ade6: function (e, t, n) {
    e.exports = "img/loot-box.b1316fc6.png";
  },
  b01a: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsoAAAAgCAYAAAAL1l6NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7dzBTRtbFAbg68HsXwl+FTwhLxFS3EFSwSMVJFSAqYBQQZwKkg7sDStkkRJcAnsQzhnshWPDYIxJfGe+Tzoay7NE4/vPnX9ojcfjfiI7RVEMDg4OJgkA2GnX19fH9/f3nURWImuNWvHHmyZy9SXmQmAGgN1zdXX1rt1uf42PnUR24ubmrEjk7HPMMJ4KHCcAYCfEJmQn5nuE5GESkrPWUr3Iz97e3n/T6fT90tc/Yz7YXQaAvycC8mmabWT9s/D1Tcy32KG8SWTjoXqRyFLZd4pDeTF2lk6pYwDAH1ZRsxjEnMS6LCRnSFDOWITl8m61vGs9XTo1KXs13W53kACAN1PWLOJwHvPYk94yII8S2RKUa6C8SFut1rk6BgD8ORU1i7NYe78ksico10hFHWOQZhftJAEAr6Jm0RyCcs2oYwDA25jXLMqA/G7plJpFTQnKNTW/mPsx/y+dmsT07C4DwHrmm1CfkppF4wjKNaeOAQCbq6hZXMT01SzqTVBuiAjM/aSOAQBrqahZjNJso2mUqD1BuUHUMQCgmpoFiwTlBlLHAIBVahYsE5QbTB0DANQseJqg3HDqGAA0lZoFzxGUeaCOAUCTqFmwDkGZ36hjAFBnaha8hKDMCnUMAOpGzYJNCMo8SR0DgDqI9ex9HM6TmgUvJCjzrIo6xkW323UHDsBOUrPgtQRl1vJMHeND/Nj8TACwAxZqFv2lUzexyXPinRvWJSjzIhWPrwZJHSM7l5eXx7FodBJQ6e7ubtDr9SaJnadmwTYJymxkXsco79YXX4hQx8jMcDjs7O/vD9PqggLMTafTs6Ojo35ipz1Tszjx5JNNCMpsTB2jHoRleJqQvPvULHhLgjKvVvGYqzYi9Nf6WhGWYVWdQ/J4PO4XRXGa6kvNgq0oErxS/BD9iPk3Pp6l2f+jJDNl9/L29raXZk8DoPHsJGdrlB6WpYPPQjLbICizNfGj1C8PMd8S2RGWYUZIzlL5jszHWId6an9sk+oF8Bs1DJpMSAYWCcrACmGZJhKSgWWCMvAoYZkmEZKBxwjKwJPKsNxut48T1FhRFJPDw8NBAljyC4cVvggwoIbZAAAAAElFTkSuQmCC";
  },
  b020: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAAXNSR0IB2cksfwAAAKJQTFRFAAAA/05O/09P/////09P/1ZW/+Xl/8bG/4mJ/k5O/1BQ/01N/05O/01N/+zs/05O/01N/1BQ/UxM/05O/01N/05O/05O/3R0/0hI/01N/0xM/05O/0xM/15e/8vL/5yc/09P//b2/0xM/35+/0xM/01N/1VV/01N/01N/0xM/0hI/0lJ/2Vl//39/0pK/8DA/09P/7Oz/05O/09P/9LS/09PKdiCLQAAADZ0Uk5TAP+i////////MAb3hLP//fEMSsDcXc79GcYS05f///9t/yn/puoCjeVmIEL//0//N/95n/+sfc1zvAAAAO1JREFUeJx10VcWgjAQBdA8BKRKUxRRsWDvbf9bMwUwIswfuczJvAwhUoWxuyQtNe4Db6sFtwD8S7OZO4qIxo34ZAZv32ShzxH9w78FLopy/nFQGnyzbqMUUFeGMaTqbmr4oIeafu50VTpTLc6STaP1OhyR/MZRwDsp8mvnsh3tClknUimOFeG3E853pr0tkN45451Y36oYsfhde+n6XSCUcjuOJw7U6ek0LV7CDoWJbTA0smxVvlMS8Gkm5bfWOxfTVnFEjNpAbDsjeRs0ymJxrRBbS9oGvKF4+KLWAxKjtVIStWNCzEmuNFbumB9Ibw2H+fDe7gAAAABJRU5ErkJggg==";
  },
  b21f: function (e, t, n) {
    e.exports = "img/thanh.cb52aafc.png";
  },
  b310: function (e, t, n) {
    e.exports = "img/mmp.3304c8a6.png";
  },
  b326: function (e, t, n) {
    e.exports = "img/5.dc9216a5.png";
  },
  b5b6: function (e, t, n) {
    e.exports = "img/legend-icon.2c46ac73.png";
  },
  b6fd: function (e, t, n) {},
  b8db: function (e, t, n) {
    e.exports = listMechasSlider[0].thumb;
  },
  ba61: function (e, t, n) {
    e.exports = listMechasSlider[4].thumb;
  },
  bb40: function (e, t, n) {
    e.exports = "img/btn-pause.8adde3bf.png";
  },
  bb7c: function (e, t, n) {
    e.exports = "media/LangdingPage.7996324c.mp4";
  },
  bc4e: function (e, t, n) {
    e.exports = "img/close.7517a23d.svg";
  },
  bdb7: function (e, t, n) {
    e.exports = "img/telegram.744e74bb.svg";
  },
  bdfd: function (e, t, n) {
    e.exports = "img/x21.0c3362ef.a1cda36f.svg";
  },
  bdfe: function (e, t, n) {
    e.exports = "img/btn-viewapp.82ff61d1.png";
  },
  be97: function (e, t, n) {
    "use strict";
    n("257e");
  },
  bf9a: function (e, t, n) {
    e.exports = "img/vendetta.afa3c559.png";
  },
  c0c4: function (e, t, n) {
    e.exports = "img/new-sun.51dfbc73.png";
  },
  c36f: function (e, t, n) {
    e.exports = "img/big-arrow.74535081.svg";
  },
  c38a: function (e, t, n) {
    e.exports = "img/than.17bdaca3.png";
  },
  c3a4: function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  c475: function (e, t, n) {
    e.exports = "img/daomaker.f4c3af62.svg";
  },
  c4ab: function (e, t, n) {
    e.exports = "img/explore_vtm.e9ef796c.png";
  },
  c59a: function (e, t, n) {},
  c5f7: function (e, t, n) {
    e.exports = "img/youbicapital.bc8d6ce8.svg";
  },
  c78e: function (e, t, n) {
    "use strict";
    n("16fe");
  },
  c8b8: function (e, t, n) {
    e.exports = "img/hamburger.4928710e.png";
  },
  c9f2: function (e, t, n) {
    e.exports = "img/battle-event.9d3dd6ce.svg";
  },
  cb11: function (e, t, n) {
    e.exports = "img/race-aerial.2097ec6c.png";
  },
  cb9b: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=3";
  },
  cbfb: function (e, t, n) {
    e.exports = "img/ar.a8b36b00.png";
  },
  cd69: function (e, t, n) {},
  cd74: function (e, t, n) {
    e.exports = "img/yoko.e6ea47e3.png";
  },
  cda2: function (e, t, n) {
    e.exports = "img/tu.3397f606.png";
  },
  ceb1: function (e, t, n) {
    "use strict";
    n("4ffe");
  },
  cfe6: function (e, t, n) {
    e.exports = "img/medium.d877dd79.svg";
  },
  d354: function (e, t, n) {
    e.exports = "img/banner.1a72be42.png";
  },
  d41a: function (e, t, n) {
    e.exports = "img/person.fccfab21.svg";
  },
  d454: function (e, t, n) {
    e.exports = "img/Q4-2022.c760359f.png";
  },
  d52e: function (e, t, n) {
    e.exports = "img/soon.1edd18db.png";
  },
  d5f5: function (e, t, n) {
    e.exports = "img/anh.3bc48d7b.png";
  },
  d644: function (e, t, n) {
    e.exports = "img/iphone2.65b03e96.png";
  },
  d7d8: function (e, t, n) {
    e.exports = "img/unlock.ef955ffa.svg";
  },
  d81c: function (e, t, n) {
    e.exports = "img/bg-game-mecha.098b3a4a.png";
  },
  d86c: function (e, t, n) {
    e.exports = "img/tuyen.015c64ae.png";
  },
  d8d1: function (e, t, n) {
    e.exports = "img/race-legion.bf1a2c49.png";
  },
  d95b: function (e, t, n) {
    "use strict";
    n("4d41");
  },
  d95e: function (e, t, n) {
    e.exports = "img/trailer.1daa5ab9.png";
  },
  da5d: function (e, t, n) {
    e.exports = "img/thi.e729fffe.png";
  },
  dd48: function (e, t, n) {
    "use strict";
    n("5960");
  },
  de52: function (e, t, n) {
    e.exports = "img/4.278eff72.png";
  },
  de92: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAAXNSR0IB2cksfwAAAHVQTFRFAAAAVv8vVv8uVv8uVv8vVf8vVf8uU/0tVP8oTv8sVv8uVf4vV/4qVf4vVv8vVv8uVv8vVf8vVP4uVv8tVf4tVf4tVv8vVf8vVv8wVf8uWf8aVf8uT/8fU/8sS/8eV/8uVf8uVf8uVf8uVv8uVf8tVf8uVf8wvxoq/AAAACd0Uk5TAP/Tmt6I9CYYIe2jLeRx5+H8UV55WfHQa44HwxM4C4LHsMuruWR7R/vlJgAAAPdJREFUeJxtktm6gyAMhANYUbRo3ZdTtev7P+IxFBDUuXH0/0LGBACtv5otwTVYkjICX9GcE6Osj11UbETRckPfG9npYlC1JxssThAhHxXwesoEBrrsPj5noZ7sWBZwSEc0YQy1j8L7etRA0XbAPHSrMUIdon/B4rEK0b1RvoVAt6myX38ArhNQ+Jk8BT6S94CjpcQwVScwwVThBqY3seypyra9JLZ3q31eaORM4gGlDt9PiDons4RIaDum69idZYUcoDcvzSxDpyxZj4kzcqaGY4/ylMlDNisGx+AGDfaHP35PId1LGLNmC5+ku9vLu1dLKW0f0pJ/uNMLETz41JUAAAAASUVORK5CYII=";
  },
  dee1: function (e, t, n) {
    e.exports = "img/twitter.e1f8f571.svg";
  },
  def1: function (e, t, n) {
    "use strict";
    n("b6fd");
  },
  e14c: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAAXNSR0IB2cksfwAAAIpQTFRFAAAA/////////////////////////////////////////////////v7+/////////////////////////////////////////////////v7+/v7+/////////////////////f39/v7+////////////////////////////////////////////K8n/hAAAAC50Uk5TAP878wug9iKGw7rt6eRY/gcT+dbMPhvhEMnTLMHavM9yUJUDYImmj0RlmBV4giBJg7cAAAC/SURBVHicbdDbEoIgEIDhXTHK0iQK1Dx0MLWs3v/10gTUwf/yG4aFhU+WeaasKUFFcRqPtROSrk05dY3vGJjONJWSKXcn3l9VL3joJXix/UhZHCZL7sY8fz4Fs/xA+vdebed+W2BlOyZww43t4Qn2fx+5+5dxyoutiRDjyWxvOXsrj4V4YeGoJOjzXSnWekDJ1qM7yIMoioKhbj/K5SXwCVJ/KGq0AzD26r5uumkHeOBdzxbiO/VZlXZ5X01q0x+Odw8q2oe+2AAAAABJRU5ErkJggg==";
  },
  e2c2: function (e, t, n) {
    e.exports = "img/discord.c6304bd6.svg";
  },
  e495: function (e, t, n) {
    e.exports = "img/rock.57da9ea5.png";
  },
  e4d8: function (e, t, n) {
    e.exports = "img/2.8eba8429.png";
  },
  e533: function (e, t, n) {},
  e624: function (e, t, n) {},
  e630: function (e, t, n) {
    e.exports = "img/tuan.af67979b.png";
  },
  e638: function (e, t, n) {
    e.exports = "img/advisor-frame.6b0a6d01.png";
  },
  e69b: function (e, t, n) {
    e.exports = "https://i.pravatar.cc/300?img=51";
  },
  e942: function (e, t, n) {
    e.exports = "img/magnus-capital.490611fd.png";
  },
  ea3e: function (e, t, n) {
    e.exports = "img/collect.92eed8e5.svg";
  },
  ebae: function (e, t, n) {
    e.exports = "img/facebook.c0800d61.svg";
  },
  ecf0: function (e, t, n) {
    e.exports = "img/thi_hover.dcdb4271.png";
  },
  ed2c: function (e, t, n) {
    "use strict";
    n("8f73");
  },
  ed33: function (e, t, n) {
    e.exports = "img/moon.1a3a8bed.png";
  },
  edcd: function (e, t, n) {
    e.exports = "img/discord.dfe3850d.svg";
  },
  edd4: function (e, t, n) {
    "use strict";
    n.r(t),
      (t["default"] = {
        market: (e) => {
          const { normalize: t } = e;
          return t(["EXPLORE"]);
        },
        whitepaper: (e) => {
          const { normalize: t } = e;
          return t(["DEMO"]);
        },
        staking: (e) => {
          const { normalize: t } = e;
          return t(["APP"]);
        },
        moonrace: (e) => {
          const { normalize: t } = e;
          return t(["VIR"]);
        },
        buy: (e) => {
          const { normalize: t } = e;
          return t(["Buy"]);
        },
        banner: (e) => {
          const { normalize: t } = e;
          return t(["Your second reality is waiting..."]);
        },
        "banner-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Own a UNIQUE PIECE OF LANDS ON THE MOON - Limited supply of thousands of unique land plots, each represented with an NFT, which can be traded freely on the Marketplace.",
          ]);
        },
        "moon-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Experience right now a very possible future world where people play, build, earn, and enjoy life on Earth's natural satellite.",
          ]);
        },
        play: (e) => {
          const { normalize: t } = e;
          return t(["Play"]);
        },
        "play-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Assemble a team to battle against other players from a huge list of Mechas, Pilots and Weapons. Become the top rank Mech Master!",
          ]);
        },
        build: (e) => {
          const { normalize: t } = e;
          return t(["Build"]);
        },
        "build-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Buy pieces of land on the Moon and build Mecha Factory, Pilot Academy, Armory... to grow your economies and Mecha army.",
          ]);
        },
        earn: (e) => {
          const { normalize: t } = e;
          return t(["Earn"]);
        },
        "earn-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Earn MECH token from participating in various activities in Mech Master like battling, staking, guild wars and individual tournaments.",
          ]);
        },
        enjoy: (e) => {
          const { normalize: t } = e;
          return t(["Enjoy"]);
        },
        "enjoy-text": (e) => {
          const { normalize: t } = e;
          return t([
            "Enjoy Moon Metaverse via state-of-the-art Augmented Reality (AR) and Virtual Reality (VR) technology.",
          ]);
        },
        "augmented-reality": (e) => {
          const { normalize: t } = e;
          return t(["Augmented Reality"]);
        },
        "ar-combat": (e) => {
          const { normalize: t } = e;
          return t(["AR Combat"]);
        },
        "ar-combat-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Bring all the intense battles from Mech Master to the real world and experience all the magic of the 3D world.",
          ]);
        },
        "ar-cinematic": (e) => {
          const { normalize: t } = e;
          return t(["AR Cinematic"]);
        },
        "ar-cinematic-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Become part of the Mech Master Metaverse AR by owning a 3D Model of a Mecha, which you can show off by taking photos with your Mecha everywhere, in real life.",
          ]);
        },
        "ar-pilot": (e) => {
          const { normalize: t } = e;
          return t(["AR-Pilot"]);
        },
        "ar-mecha": (e) => {
          const { normalize: t } = e;
          return t(["AR-Mecha"]);
        },
        "virtual-reality": (e) => {
          const { normalize: t } = e;
          return t(["Virtual Reality"]);
        },
        "mecha-market": (e) => {
          const { normalize: t } = e;
          return t(["Mecha Market"]);
        },
        "mecha-market-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ]);
        },
        "more-feature": (e) => {
          const { normalize: t } = e;
          return t(["More Feature"]);
        },
        "more-feature-desc": (e) => {
          const { normalize: t } = e;
          return t([
            "Go shopping in virtual Shop where every giant Mecha, every stunning Pilot, and every meticulously crafted weapon is right in front of your very eyes.",
          ]);
        },
        weapon: (e) => {
          const { normalize: t } = e;
          return t(["Weapon"]);
        },
        battle: (e) => {
          const { normalize: t } = e;
          return t(["Battle"]);
        },
        pilot: (e) => {
          const { normalize: t } = e;
          return t(["Pilot"]);
        },
        factory: (e) => {
          const { normalize: t } = e;
          return t(["Factory"]);
        },
        gameplay: (e) => {
          const { normalize: t } = e;
          return t(["Gameplay"]);
        },
        "gameplay-desc-1": (e) => {
          const { normalize: t } = e;
          return t([
            "Assemble a team of humongous Mechas to battle against opponents in turn-based combat.",
          ]);
        },
        "gameplay-desc-2": (e) => {
          const { normalize: t } = e;
          return t([
            "A huge library of Mechas, pilots, and equipment, along with many other elements like commander, weather, make each battle a unique experience and push your tactical genius to the absolute limits.",
          ]);
        },
        "meet-our-mecha": (e) => {
          const { normalize: t } = e;
          return t(["Meet our mechas"]);
        },
        "meet-our-pilot": (e) => {
          const { normalize: t } = e;
          return t(["Meet our pilots"]);
        },
        "pilot-section": {
          title: (e) => {
            const { normalize: t } = e;
            return t(["Caitlyn Space"]);
          },
          desc: (e) => {
            const { normalize: t } = e;
            return t([
              "One of the first students at the Pilot Academy on Moon City. Her piloting an Origin Mecha to drive off foreign invaders on Year 2220 an iconic moment in Homo Deus history.",
            ]);
          },
        },
        roadmap: {
          title: (e) => {
            const { normalize: t } = e;
            return t(["Roadmap"]);
          },
          "q3-2021-1": (e) => {
            const { normalize: t } = e;
            return t(["Game design & Art concept"]);
          },
          "q3-2021-2": (e) => {
            const { normalize: t } = e;
            return t(["Gacha NFT sales"]);
          },
          "q4-2021-1": (e) => {
            const { normalize: t } = e;
            return t(["IDO"]);
          },
          "q4-2021-2": (e) => {
            const { normalize: t } = e;
            return t(["Mecha Marketplace"]);
          },
          "q4-2021-3": (e) => {
            const { normalize: t } = e;
            return t(["Stake tokens and MECHA"]);
          },
          "q4-2021-4": (e) => {
            const { normalize: t } = e;
            return t(["Mech 3D"]);
          },
          "q4-2021-5": (e) => {
            const { normalize: t } = e;
            return t(["AR application"]);
          },
          "q1-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Mech equipment"]);
          },
          "q1-2022-2": (e) => {
            const { normalize: t } = e;
            return t(["Mech Turn-based beta test (PC)"]);
          },
          "q2-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Mech Turn-based Mainnet (PC)"]);
          },
          "q2-2022-2": (e) => {
            const { normalize: t } = e;
            return t(["Mecha factory"]);
          },
          "q2-2022-3": (e) => {
            const { normalize: t } = e;
            return t(["Mecha renting"]);
          },
          "q2-2022-4": (e) => {
            const { normalize: t } = e;
            return t(["Pilot academy"]);
          },
          "q3-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Mech Turn-based Mobile (iOS, Android)"]);
          },
          "q3-2022-2": (e) => {
            const { normalize: t } = e;
            return t(["Tournament"]);
          },
          "q4-2022-1": (e) => {
            const { normalize: t } = e;
            return t(["Next feature of Mech ecosystem"]);
          },
        },
        audit: (e) => {
          const { normalize: t } = e;
          return t(["Audit by"]);
        },
        backed: (e) => {
          const { normalize: t } = e;
          return t(["Backed by"]);
        },
        "meet-our-team": (e) => {
          const { normalize: t } = e;
          return t(["Meet our team"]);
        },
        "team-title": {
          "project-leader": (e) => {
            const { normalize: t } = e;
            return t(["Project Leader"]);
          },
          "project-manager": (e) => {
            const { normalize: t } = e;
            return t(["Project Manager"]);
          },
          "head-marketing": (e) => {
            const { normalize: t } = e;
            return t(["Head of Marketing"]);
          },
          "marketing-leader": (e) => {
            const { normalize: t } = e;
            return t(["Marketing Team Leader"]);
          },
          "3D-leader": (e) => {
            const { normalize: t } = e;
            return t(["3D Leader"]);
          },
          "art-director": (e) => {
            const { normalize: t } = e;
            return t(["Art Director"]);
          },
          "game-designer": (e) => {
            const { normalize: t } = e;
            return t(["Game Designer"]);
          },
          "unity-leader": (e) => {
            const { normalize: t } = e;
            return t(["Unity Leader"]);
          },
          "UI-leader": (e) => {
            const { normalize: t } = e;
            return t(["UI/UX Leader"]);
          },
          "backend-leader": (e) => {
            const { normalize: t } = e;
            return t(["Backend Leader"]);
          },
          "vfx-leader": (e) => {
            const { normalize: t } = e;
            return t(["VFX Leader"]);
          },
          "2D-leader": (e) => {
            const { normalize: t } = e;
            return t(["2D Leader"]);
          },
          advisor: (e) => {
            const { normalize: t } = e;
            return t(["Advisor"]);
          },
          "blockchain-leader": (e) => {
            const { normalize: t } = e;
            return t(["Blockchain Leader"]);
          },
        },
        "team-desc": {
          hikari: (e) => {
            const { normalize: t } = e;
            return t([
              "Hikari has over 10 years of experience in the IT industry, 7 years as a manager in some of the largest IT companies in Vietnam for the Japanese market, and 2 years of working in Japan with huge companies like NTT Data and Fujitsu,..",
            ]);
          },
          nam: (e) => {
            const { normalize: t } = e;
            return t([
              "Nam Vu is the Deputy Project Manager of Mech Master. As an expert with 11 years of experience in the technology industry, he works with many Japanese customers. He plays the middle manager role in many big projects of Recruit, partnered with well-known corporations such as NTTData, Hisol, NSSol.",
            ]);
          },
          ron: (e) => {
            const { normalize: t } = e;
            return t([
              "A graduate of RMIT in Melbourne, Australia. Ron is armed with 10 years of experience in marketing, and has gained experiences working with small to large companies in management positions, including Line Vietnam, NHG, and Enterprise Rent-a-Car. He is proficient in liaising with influencers and brand partners to forge strategic alliances, and building partnerships to deliver branding solutions.",
            ]);
          },
          hanh: (e) => {
            const { normalize: t } = e;
            return t([
              "Hanh has 4-year working experience in cryptosphere. She became fascinated with blockchain and cryptocurrency during the early years of Bitcoin and Ethereum. With her grasp on blockchain concepts coupled with an extensive marketing experience, she is bringing marketing know-how and creative to the team.",
            ]);
          },
          tuan: (e) => {
            const { normalize: t } = e;
            return t([
              "Do Dinh Tuan is the 3D design team leader of Mirai Studio. Do Dinh Tuan has graduated from Arena Multimedia, specializing in 3D Artist major. Tuan has eight years of experience in 3D model game design and has gained experiences working with small to large companies in management positions.",
            ]);
          },
          duc: (e) => {
            const { normalize: t } = e;
            return t([
              "Duc is a talented 2D artist with over 10 years of experience in 2D Art. He has created lots of inhouse games from small companies to large studios such as DeNA Studio and Playstudios. Duc is skillful in working with variety of graphic styles, and has produced large outsourced projects from leading corporations and companies such as Garena and Thetan Arena.",
            ]);
          },
          le: (e) => {
            const { normalize: t } = e;
            return t([
              "Le has been working in the IT field for 10 years. She is experienced in game design ranging from hardcore to casual mobile games. She has had the opportunity to be involved in game development as a Game Designer at DeNA, Valofe. Being in charge of designing, analyzing, planning content to develop and operate, she improves the games to turn them into real game products with the highest quality.",
            ]);
          },
          minhLe: (e) => {
            const { normalize: t } = e;
            return t([
              "Minh Le is a passionate BA leader with over 5 years of experiences in IT and software development. Used to work for big projects of FPT, Tesla and Viettel, he is ready to bring his outstanding skills to project Mech Master.",
            ]);
          },
          minh: (e) => {
            const { normalize: t } = e;
            return t([
              "Started joining from 2015 until now, Minh is a specialist in the game design industry. With experience in projects from casual to hardcore along with design and visual communication knowledge, user experience is always my top priority.",
            ]);
          },
          tu: (e) => {
            const { normalize: t } = e;
            return t([
              "Hoang is a programmer with many past achievements in programming when he was in school (two 3rd place and one 2nd place in national contests) and University (1st in Developing IBM Worklight application). Currently, he is a game developer with 7 years of experience in the game developing industry for both mobile and PC (Steam) games. With experiences working on some big projects with Scopely, Strange Loop Game and an NFT game before, he will guarantee the highest quality of our game.",
            ]);
          },
          tuyen: (e) => {
            const { normalize: t } = e;
            return t([
              "Tuyen is an expert in UI/UX design with 4 years of experience. He has implemented many global projects in diverse industries such as games, education, entertainment, advertising, .Some of the notable NFT game projects he has been involved in include: SoviFinance, Stickers, Legendshot.",
            ]);
          },
          khanh: (e) => {
            const { normalize: t } = e;
            return t([
              "Khanh Pham is the back-end leader of MechMaster, he has over ten years of experience in the back-end sector, leading teams to solve many difficulties back-end projects, cover over fields from IoT, big data to gaming industry... with role as a server side system architecture and leading of the back-end team, Khanh confident that MechMaster will be leading in NFT game over the world.",
            ]);
          },
          thao: (e) => {
            const { normalize: t } = e;
            return t([
              "Thao, a VFX artist of Mirai studio, has four years of developing experience in the game industry. She is the multimedia department valedictorian of FPT University graduated in 2016. She is also in the Top 6 potential prizes of Game2Blockchain.",
            ]);
          },
          trang: (e) => {
            const { normalize: t } = e;
            return t([
              "After graduating 2D design major, Trang worked in the DeNa company based in Tokyo, which owns the Mobage platform - one of Japan's most popular mobile game platforms, for nine years. She has many experiences in 2D design and be proficient in working on many unicorn projects.",
            ]);
          },
          thanh: (e) => {
            const { normalize: t } = e;
            return t([
              "With 10 years of web development and extensive knowledge about the decentralization protocols, scalability and security, Thanh is a driven, creative problem solver, and a software engineer. His specialty is smart contracts and web development.",
            ]);
          },
        },
        "advisor-info": (e) => {
          const { normalize: t } = e;
          return t([
            "Thi is founder of Icetea Labs, PolkaFoundry, Red Kite, GameFi, and is incubator of several blockchain games like Faraland, StepHero, KabyArena, Heroverse, MyMasterWar, etc.",
          ]);
        },
        footer: {
          first: (e) => {
            const { normalize: t } = e;
            return t(["Â©2021 mirai studio, INC. ALL RIGHTS RESERVED."]);
          },
          second: (e) => {
            const { normalize: t } = e;
            return t([
              "All trademarks referenced herein are the properties of their respective owners",
            ]);
          },
        },
      });
  },
  ee40: function (e, t, n) {
    e.exports = "img/Q2-2022.53d17d9e.png";
  },
  ef83: function (e, t, n) {},
  efe8: function (e, t, n) {
    e.exports = "img/nam.7f0ee2ab.png";
  },
  f0d1: function (e, t, n) {
    "use strict";
    n("8d08");
  },
  f63f: function (e, t, n) {
    e.exports = "img/explore2.d3a1e8ec.png";
  },
  f6e9: function (e, t, n) {
    e.exports = "img/iphone3.63d7abab.png";
  },
  f798: function (e, t, n) {
    e.exports = "img/planet5.6b177e86.png";
  },
  f869: function (e, t, n) {
    e.exports = "img/btn-viewdemo.b2484553.png";
  },
  f943: function (e, t, n) {
    e.exports = "img/arrow_down.96041c32.svg";
  },
  fa19: function (e, t, n) {
    e.exports = "img/logo.2db64683.png";
  },
  fa5c: function (e, t, n) {
    "use strict";
    n("5931");
  },
  fa88: function (e, t, n) {
    e.exports = "img/team-full-frame.7cb3a0dd.png";
  },
  fb60: function (e, t, n) {
    e.exports = "img/Q1-2022.a76c0912.png";
  },
  fba3: function (e, t, n) {
    e.exports = "img/ship.cce22e4c.png";
  },
  fc1d: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAAXNSR0IB2cksfwAAAJZQTFRFAAAA/////////////v7++/v7/////////////////////v7+/////////////////v7+/////////////////////////f39/////v7+/v7+////////////////////////////////////////////////////////////+/v7/Pz8/////////////f39////////TTTC4gAAADJ0Uk5TAP8M8jcx6QP9BuEo18H5ry7b5Xr1GspBqIVqnsa0dhEf8W1d0pfPRbdgJEqaWI2UFrw+dleFAAABCElEQVR4nE1R2YKDIAwMSvG+EK1HvVp7t3v8/88tJug2L0wmYTIBAAqed6H0y/ZUwEfwxGYmst7a6COylwNVosDQtU5k+xyGCxXsPXXrlvuPBgVd8Cvkd4oxjg3XmDGRmMlOoltegaOhl0QNau+/r8AVzkITg6eLaV4q1kGOmm5KFh7H33jJBXTkoUY6n9Y1IKRzRqGGbbygM0Zvjy+18r4BlYdK1cqXBrSLkMPXFFoD3uAEfbQ+Xwwng8L+5m5T2QwFDXClkFmWhWKzTYudLQwvzXCtEcBaXvHmbF+0qDULCrTSgac7jPSu+Rd1cb2zmmyMSdNnz9wdq38nTDQfH/9MJPme6xGJP2q0DsiXlsYKAAAAAElFTkSuQmCC";
  },
  fe0f: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASAgMAAAAmvhaDAAAAAXNSR0IB2cksfwAAAAxQTFRFAAAA////////////OMA7qAAAAAR0Uk5TAP+10BJq2l4AAAAYSURBVHicY/gPAgyhIAAlV4EAAyagWCUAiEYi3pksMRYAAAAASUVORK5CYII=";
  },
  fe81: function (e, t, n) {
    "use strict";
    n("8745");
  },
  feaa: function (e, t, n) {
    e.exports = "img/tab-legion.0bb8671f.png";
  },
  ff0b: function (e, t, n) {},
  ff16: function (e) {
    e.exports = JSON.parse(
      '[{"code":"AFG","name":"Afghanistan"},{"code":"ALA","name":"Ã…land Islands"},{"code":"ALB","name":"Albania"},{"code":"DZA","name":"Algeria"},{"code":"ASM","name":"American Samoa"},{"code":"AND","name":"Andorra"},{"code":"AGO","name":"Angola"},{"code":"AIA","name":"Anguilla"},{"code":"ATA","name":"Antarctica"},{"code":"ATG","name":"Antigua and Barbuda"},{"code":"ARG","name":"Argentina"},{"code":"ARM","name":"Armenia"},{"code":"ABW","name":"Aruba"},{"code":"AUS","name":"Australia"},{"code":"AUT","name":"Austria","eu":true},{"code":"AZE","name":"Azerbaijan"},{"code":"BHS","name":"Bahamas"},{"code":"BHR","name":"Bahrain"},{"code":"BGD","name":"Bangladesh"},{"code":"BRB","name":"Barbados"},{"code":"BLR","name":"Belarus"},{"code":"BEL","name":"Belgium","eu":true},{"code":"BLZ","name":"Belize"},{"code":"BEN","name":"Benin"},{"code":"BMU","name":"Bermuda"},{"code":"BTN","name":"Bhutan"},{"code":"BOL","name":"Bolivia, Plurinational State of"},{"code":"BES","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BIH","name":"Bosnia and Herzegovina"},{"code":"BWA","name":"Botswana"},{"code":"BVT","name":"Bouvet Island"},{"code":"BRA","name":"Brazil"},{"code":"IOT","name":"British Indian Ocean Territory"},{"code":"BRN","name":"Brunei Darussalam"},{"code":"BGR","name":"Bulgaria","eu":true},{"code":"BFA","name":"Burkina Faso"},{"code":"BDI","name":"Burundi"},{"code":"KHM","name":"Cambodia"},{"code":"CMR","name":"Cameroon"},{"code":"CAN","name":"Canada"},{"code":"CPV","name":"Cape Verde"},{"code":"CYM","name":"Cayman Islands"},{"code":"CAF","name":"Central African Republic"},{"code":"TCD","name":"Chad"},{"code":"CHL","name":"Chile"},{"code":"CHN","name":"China"},{"code":"CXR","name":"Christmas Island"},{"code":"CCK","name":"Cocos (Keeling) Islands"},{"code":"COL","name":"Colombia"},{"code":"COM","name":"Comoros"},{"code":"COG","name":"Congo"},{"code":"COD","name":"Congo, the Democratic Republic of the"},{"code":"COK","name":"Cook Islands"},{"code":"CRI","name":"Costa Rica"},{"code":"CIV","name":"CÃ´te d\'Ivoire"},{"code":"HRV","name":"Croatia","eu":true},{"code":"CUB","name":"Cuba"},{"code":"CUW","name":"CuraÃ§ao"},{"code":"CYP","name":"Cyprus","eu":true},{"code":"CZE","name":"Czech Republic","eu":true},{"code":"DNK","name":"Denmark","eu":true},{"code":"DJI","name":"Djibouti"},{"code":"DMA","name":"Dominica"},{"code":"DOM","name":"Dominican Republic"},{"code":"ECU","name":"Ecuador"},{"code":"EGY","name":"Egypt"},{"code":"SLV","name":"El Salvador"},{"code":"GNQ","name":"Equatorial Guinea"},{"code":"ERI","name":"Eritrea"},{"code":"EST","name":"Estonia","eu":true},{"code":"ETH","name":"Ethiopia"},{"code":"FLK","name":"Falkland Islands (Malvinas)"},{"code":"FRO","name":"Faroe Islands"},{"code":"FJI","name":"Fiji"},{"code":"FIN","name":"Finland","eu":true},{"code":"FRA","name":"France","eu":true},{"code":"GUF","name":"French Guiana"},{"code":"PYF","name":"French Polynesia"},{"code":"ATF","name":"French Southern Territories"},{"code":"GAB","name":"Gabon"},{"code":"GMB","name":"Gambia"},{"code":"GEO","name":"Georgia"},{"code":"DEU","name":"Germany","eu":true},{"code":"GHA","name":"Ghana"},{"code":"GIB","name":"Gibraltar"},{"code":"GRC","name":"Greece","eu":true},{"code":"GRL","name":"Greenland"},{"code":"GRD","name":"Grenada"},{"code":"GLP","name":"Guadeloupe"},{"code":"GUM","name":"Guam"},{"code":"GTM","name":"Guatemala"},{"code":"GGY","name":"Guernsey"},{"code":"GIN","name":"Guinea"},{"code":"GNB","name":"Guinea-Bissau"},{"code":"GUY","name":"Guyana"},{"code":"HTI","name":"Haiti"},{"code":"HMD","name":"Heard Island and McDonald Islands"},{"code":"VAT","name":"Holy See (Vatican City State)"},{"code":"HND","name":"Honduras"},{"code":"HKG","name":"Hong Kong"},{"code":"HUN","name":"Hungary","eu":true},{"code":"ISL","name":"Iceland"},{"code":"IND","name":"India"},{"code":"IDN","name":"Indonesia"},{"code":"IRN","name":"Iran, Islamic Republic of"},{"code":"IRQ","name":"Iraq"},{"code":"IRL","name":"Ireland","eu":true},{"code":"IMN","name":"Isle of Man"},{"code":"ISR","name":"Israel"},{"code":"ITA","name":"Italy","eu":true},{"code":"JAM","name":"Jamaica"},{"code":"JPN","name":"Japan"},{"code":"JEY","name":"Jersey"},{"code":"JOR","name":"Jordan"},{"code":"KAZ","name":"Kazakhstan"},{"code":"KEN","name":"Kenya"},{"code":"KIR","name":"Kiribati"},{"code":"PRK","name":"Korea, Democratic People\'s Republic of"},{"code":"KOR","name":"Korea, Republic of"},{"code":"KWT","name":"Kuwait"},{"code":"KGZ","name":"Kyrgyzstan"},{"code":"LAO","name":"Lao People\'s Democratic Republic"},{"code":"LVA","name":"Latvia","eu":true},{"code":"LBN","name":"Lebanon"},{"code":"LSO","name":"Lesotho"},{"code":"LBR","name":"Liberia"},{"code":"LBY","name":"Libya"},{"code":"LIE","name":"Liechtenstein"},{"code":"LTU","name":"Lithuania","eu":true},{"code":"LUX","name":"Luxembourg","eu":true},{"code":"MAC","name":"Macao"},{"code":"MKD","name":"Macedonia, the former Yugoslav Republic of"},{"code":"MDG","name":"Madagascar"},{"code":"MWI","name":"Malawi"},{"code":"MYS","name":"Malaysia"},{"code":"MDV","name":"Maldives"},{"code":"MLI","name":"Mali"},{"code":"MLT","name":"Malta","eu":true},{"code":"MHL","name":"Marshall Islands"},{"code":"MTQ","name":"Martinique"},{"code":"MRT","name":"Mauritania"},{"code":"MUS","name":"Mauritius"},{"code":"MYT","name":"Mayotte"},{"code":"MEX","name":"Mexico"},{"code":"FSM","name":"Micronesia, Federated States of"},{"code":"MDA","name":"Moldova, Republic of"},{"code":"MCO","name":"Monaco"},{"code":"MNG","name":"Mongolia"},{"code":"MNE","name":"Montenegro"},{"code":"MSR","name":"Montserrat"},{"code":"MAR","name":"Morocco"},{"code":"MOZ","name":"Mozambique"},{"code":"MMR","name":"Myanmar"},{"code":"NAM","name":"Namibia"},{"code":"NRU","name":"Nauru"},{"code":"NPL","name":"Nepal"},{"code":"NLD","name":"Netherlands","eu":true},{"code":"NCL","name":"New Caledonia"},{"code":"NZL","name":"New Zealand"},{"code":"NIC","name":"Nicaragua"},{"code":"NER","name":"Niger"},{"code":"NGA","name":"Nigeria"},{"code":"NIU","name":"Niue"},{"code":"NFK","name":"Norfolk Island"},{"code":"MNP","name":"Northern Mariana Islands"},{"code":"NOR","name":"Norway"},{"code":"OMN","name":"Oman"},{"code":"PAK","name":"Pakistan"},{"code":"PLW","name":"Palau"},{"code":"PSE","name":"Palestinian Territory, Occupied"},{"code":"PAN","name":"Panama"},{"code":"PNG","name":"Papua New Guinea"},{"code":"PRY","name":"Paraguay"},{"code":"PER","name":"Peru"},{"code":"PHL","name":"Philippines"},{"code":"PCN","name":"Pitcairn"},{"code":"POL","name":"Poland","eu":true},{"code":"PRT","name":"Portugal","eu":true},{"code":"PRI","name":"Puerto Rico"},{"code":"QAT","name":"Qatar"},{"code":"REU","name":"RÃ©union"},{"code":"ROU","name":"Romania","eu":true},{"code":"RUS","name":"Russian Federation"},{"code":"RWA","name":"Rwanda"},{"code":"BLM","name":"Saint BarthÃ©lemy"},{"code":"SHN","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"KNA","name":"Saint Kitts and Nevis"},{"code":"LCA","name":"Saint Lucia"},{"code":"MAF","name":"Saint Martin (French part)"},{"code":"SPM","name":"Saint Pierre and Miquelon"},{"code":"VCT","name":"Saint Vincent and the Grenadines"},{"code":"WSM","name":"Samoa"},{"code":"SMR","name":"San Marino"},{"code":"STP","name":"Sao Tome and Principe"},{"code":"SAU","name":"Saudi Arabia"},{"code":"SEN","name":"Senegal"},{"code":"SRB","name":"Serbia"},{"code":"SYC","name":"Seychelles"},{"code":"SLE","name":"Sierra Leone"},{"code":"SGP","name":"Singapore"},{"code":"SXM","name":"Sint Maarten (Dutch part)"},{"code":"SVK","name":"Slovakia","eu":true},{"code":"SVN","name":"Slovenia","eu":true},{"code":"SLB","name":"Solomon Islands"},{"code":"SOM","name":"Somalia"},{"code":"ZAF","name":"South Africa"},{"code":"SGS","name":"South Georgia and the South Sandwich Islands"},{"code":"SSD","name":"South Sudan"},{"code":"ESP","name":"Spain","eu":true},{"code":"LKA","name":"Sri Lanka"},{"code":"SDN","name":"Sudan"},{"code":"SUR","name":"Suriname"},{"code":"SJM","name":"Svalbard and Jan Mayen"},{"code":"SWZ","name":"Swaziland"},{"code":"SWE","name":"Sweden","eu":true},{"code":"CHE","name":"Switzerland"},{"code":"SYR","name":"Syrian Arab Republic"},{"code":"TWN","name":"Taiwan, Province of China"},{"code":"TJK","name":"Tajikistan"},{"code":"TZA","name":"Tanzania, United Republic of"},{"code":"THA","name":"Thailand"},{"code":"TLS","name":"Timor-Leste"},{"code":"TGO","name":"Togo"},{"code":"TKL","name":"Tokelau"},{"code":"TON","name":"Tonga"},{"code":"TTO","name":"Trinidad and Tobago"},{"code":"TUN","name":"Tunisia"},{"code":"TUR","name":"Turkey"},{"code":"TKM","name":"Turkmenistan"},{"code":"TCA","name":"Turks and Caicos Islands"},{"code":"TUV","name":"Tuvalu"},{"code":"UGA","name":"Uganda"},{"code":"UKR","name":"Ukraine"},{"code":"ARE","name":"United Arab Emirates"},{"code":"GBR","name":"United Kingdom","eu":true},{"code":"USA","name":"United States"},{"code":"UMI","name":"United States Minor Outlying Islands"},{"code":"URY","name":"Uruguay"},{"code":"UZB","name":"Uzbekistan"},{"code":"VUT","name":"Vanuatu"},{"code":"VEN","name":"Venezuela, Bolivarian Republic of"},{"code":"VNM","name":"Viet Nam"},{"code":"VGB","name":"Virgin Islands, British"},{"code":"VIR","name":"Virgin Islands, U.S."},{"code":"WLF","name":"Wallis and Futuna"},{"code":"ESH","name":"Western Sahara"},{"code":"YEM","name":"Yemen"},{"code":"ZMB","name":"Zambia"},{"code":"ZWE","name":"Zimbabwe"}]'
    );
  },
  ff72: function (e, t, n) {
    e.exports = listMechasSlider[6].image;
  },
});
//# sourceMappingURL=app.e55d1c99.js.map

function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode);
}

const renderTokenomis = () => {
  let sectionGame = document.querySelector("#roadmap");
  let section = document.createElement("section");
  section.setAttribute("id", "tokenomics");
  let html = `
    <div class="tokenomics">
        <div class="tokenomics__head">
            <h2>Tokenomics</h2>
            <h4>${infoToken.des}</h4>
            <p>${infoToken.content}</p>
        </div>
        <div class="tokenomics__body">
          <div class="left">
            <ul class="tokenomics__list">
            ${tokenomis
              .map(
                (vl, i) =>
                  `
                  <div>
                  <svg height="20" width="20">
                    <circle cx="10" cy="10" r="10" stroke-width="3" fill="${
                      vl.color
                    }" />
                  </svg> 
                    <li>
                    <span>${vl.title}</span>
                    <span>${vl.percent}</span>
                    </li>
                    ${
                      vl.block !== ""
                        ? ` <span><img src="img/lock.png" alt=""></span>
                    <span>${vl.block}</span>`
                        : ""
                    }
                   
                  </div>
                  `
              )
              .join("")}
            </ul>
            <div class="infotknm">
              <div class="topif">
                <p>Name: <span>${infoToken.name}</span></p>
                <p>Symbol: <span>${infoToken.symbol}</span></p>
                <p>Total Supply: <span>${infoToken.totalSupply}</span></p>
                <p>Decimal: <span>${infoToken.decimal}</span></p>
              </div>
              <div class="topif">
                <p>Contract: <span class="contract">${
                  infoToken.contract
                }</span></p>
              </div>
            </div>
          </div>

          <div class="right">
              <div class="circleToken">
                <div id="chart"></div>
              </div>
          </div>
        </div>
    </div>
  `;

  section.innerHTML = html;
  insertBefore(section, sectionGame);

  let series = tokenomis.map((vl) => Number(vl.percent.replace("%", "")));

  let chartOptions = tokenomis.map((vl) => vl.percent);

  let colorOption = tokenomis.map((vl) => vl.color);

  var options = {
    series: series,
    labels: chartOptions,
    chart: {
      type: "donut",
      sparkline: {
        enabled: true,
      },
    },
    colors: colorOption,
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
    },
    stroke: {
      enabled: true,
      colors: ["#0E0E0E"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: false,
              show: false,
              label: "",
            },
          },
        },
      },
    },
  };
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  // header

  htmlHead = `
    <div class="header"  onclick="showMenuMb()">
        <div class="hambuger"><img src="img/hamburger.4928710e.png" alt=""></div>
        <div class="logo"><a href="#"><img alt="" src="img/logo.2db64683.png"></a></div>
        <nav class="header__nav header__navmb animate">
            <ul>
            ${menu
              .map((vl) => `<li><a href="#${vl.link}">${vl.title}</a></li>`)
              .join("")}
            </ul>
        </nav>
        <div class="header-btn"><img alt="" class="desktop" src="img/btn-buy.d1aa8db9.png"></div>
        <img class="mobile header-bottom" alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsoAAAAgCAYAAAAL1l6NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7dzBTRtbFAbg68HsXwl+FTwhLxFS3EFSwSMVJFSAqYBQQZwKkg7sDStkkRJcAnsQzhnshWPDYIxJfGe+Tzoay7NE4/vPnX9ojcfjfiI7RVEMDg4OJgkA2GnX19fH9/f3nURWImuNWvHHmyZy9SXmQmAGgN1zdXX1rt1uf42PnUR24ubmrEjk7HPMMJ4KHCcAYCfEJmQn5nuE5GESkrPWUr3Iz97e3n/T6fT90tc/Yz7YXQaAvycC8mmabWT9s/D1Tcy32KG8SWTjoXqRyFLZd4pDeTF2lk6pYwDAH1ZRsxjEnMS6LCRnSFDOWITl8m61vGs9XTo1KXs13W53kACAN1PWLOJwHvPYk94yII8S2RKUa6C8SFut1rk6BgD8ORU1i7NYe78ksico10hFHWOQZhftJAEAr6Jm0RyCcs2oYwDA25jXLMqA/G7plJpFTQnKNTW/mPsx/y+dmsT07C4DwHrmm1CfkppF4wjKNaeOAQCbq6hZXMT01SzqTVBuiAjM/aSOAQBrqahZjNJso2mUqD1BuUHUMQCgmpoFiwTlBlLHAIBVahYsE5QbTB0DANQseJqg3HDqGAA0lZoFzxGUeaCOAUCTqFmwDkGZ36hjAFBnaha8hKDMCnUMAOpGzYJNCMo8SR0DgDqI9ex9HM6TmgUvJCjzrIo6xkW323UHDsBOUrPgtQRl1vJMHeND/Nj8TACwAxZqFv2lUzexyXPinRvWJSjzIhWPrwZJHSM7l5eXx7FodBJQ6e7ubtDr9SaJnadmwTYJymxkXsco79YXX4hQx8jMcDjs7O/vD9PqggLMTafTs6Ojo35ipz1Tszjx5JNNCMpsTB2jHoRleJqQvPvULHhLgjKvVvGYqzYi9Nf6WhGWYVWdQ/J4PO4XRXGa6kvNgq0oErxS/BD9iPk3Pp6l2f+jJDNl9/L29raXZk8DoPHsJGdrlB6WpYPPQjLbICizNfGj1C8PMd8S2RGWYUZIzlL5jszHWId6an9sk+oF8Bs1DJpMSAYWCcrACmGZJhKSgWWCMvAoYZkmEZKBxwjKwJPKsNxut48T1FhRFJPDw8NBAljyC4cVvggwoIbZAAAAAElFTkSuQmCC">
    </div>
  `;
  let header = document.createElement("header");
  header.setAttribute("id", "header");
  header.innerHTML = htmlHead;
  let beta = document.querySelector("#beta-testing-banner");
  insertBefore(header, beta);

  //add id section
  let explore = document.querySelector(".exploration.anchor");
  explore.setAttribute("id", "explore");
};
setTimeout(() => renderTokenomis(), 500);

$(document).on("click", 'a[href^="#"]', function (e) {
  // target element id
  var id = $(this).attr("href");

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;

  // animated top scrolling
  $("body, html").animate({ scrollTop: pos });
});

function showMenuMb() {
  let menuMB = document.querySelector(".header__navmb");
  console.log(menuMB.style.display === "none");
  if (menuMB.style.display == "none") {
    menuMB.style.display = "block";
  } else {
    menuMB.style.display = "none";
  }
}
