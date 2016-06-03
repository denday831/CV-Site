/* @license Minigrid v3.0.4 – minimal cascading grid layout http://alves.im/minigrid */ ! function(t, e) {
	"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Minigrid = e()
}(this, function(t) {
	"use strict";

	function e(t, e) {
		for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
		return t
	}
	var i = function(t) {
		var i = t.container instanceof Node ? t.container : document.querySelector(t.container),
			n = t.item instanceof NodeList ? t.item : i.querySelectorAll(t.item);
		this.props = e(t, {
			container: i,
			nodeList: n
		})
	};
	return i.prototype.mount = function() {
		if (!this.props.container) return !1;
		if (!this.props.nodeList || 0 === this.props.nodeList.length) return !1;
		var t = "number" == typeof this.props.gutter && isFinite(this.props.gutter) && Math.floor(this.props.gutter) === this.props.gutter ? this.props.gutter : 0,
			e = this.props.done,
			i = this.props.container,
			n = this.props.nodeList;
		i.style.width = "", i.style.display = "inline";
		var r = Array.prototype.forEach,
			o = i.getBoundingClientRect().width,
			s = n[0].getBoundingClientRect().width + t,
			p = Math.max(Math.floor((o - t) / s), 1),
			a = 0;
		o = s * p + t + "px", i.style.width = o, i.style.position = "relative";
		for (var l = [], c = [], u = 0; p > u; ++u) c.push(u * s + t), l.push(t);
		r.call(n, function(e) {
			var i = l.slice(0).sort(function(t, e) {
				return t - e
			}).shift();
			i = l.indexOf(i);
			var n = parseInt(c[i]),
				r = parseInt(l[i]);
			e.style.position = "absolute", e.style.overflow = "hidden", e.style.webkitBackfaceVisibility = e.style.backfaceVisibility = "hidden", e.style.transformStyle = "preserve-3d", e.style.transform = "translate3D(" + n + "px," + r + "px, 0)", l[i] += e.getBoundingClientRect().height + t, a += 1
		}), i.style.display = "";
		var f = l.slice(0).sort(function(t, e) {
			return t - e
		}).pop();
		i.style.height = f + "px", "function" == typeof e && e(n)
	}, i
});