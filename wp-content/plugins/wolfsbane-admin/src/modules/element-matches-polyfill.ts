if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matches ||
        // @ts-ignore
    Element.prototype.matchesSelector ||
        // @ts-ignore
    Element.prototype.mozMatchesSelector ||
        // @ts-ignore
    Element.prototype.msMatchesSelector ||
        // @ts-ignore
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) { }
            return i > -1;
        };
}