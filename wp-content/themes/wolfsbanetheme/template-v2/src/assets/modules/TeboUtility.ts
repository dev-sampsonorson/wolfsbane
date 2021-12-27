export default class TeboUtility {

    static isArray(variable) {
        return Object.prototype.toString.call(variable) === '[object Array]';
    }

    static isObject(variable) {
        return Object.prototype.toString.call(variable) === '[object Object]'
    }
    static isString(variable) {
        return typeof variable === 'string' || variable instanceof String;
    }
    static isChrome() {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }

    static isSafari() {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    }

    static getOffset(el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            // el = el.offsetParent;
            // chrome/safari
            // if ($.browser.webkit) {
            if (TeboUtility.isChrome() || TeboUtility.isSafari()) {
                el = el.parentNode;
            } else {
                // firefox/IE
                el = el.offsetParent;
            }
        }
        return { top: _y, left: _x };
    }

    static simulateClick(el) {
        // Create our event (with options)
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        // If cancelled, don't dispatch our event
        var canceled = !el.dispatchEvent(evt);
    }

    static getClosest(el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches(selector)) return el;
        }
        return null;
    }

    static containsElement(el) {
        return (el === document.body) ? false : document.body.contains(el);
    }

    static containsElementById(id) {
        return document.getElementById(id);
    }

    static hasClass(el, className) {
        return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    static getSiblings(el, filter) {
        var siblings: any[] = [];
        var sibling = el.parentNode.firstChild;

        do {
            if (!filter || filter(sibling)) {
                if (sibling.nodeType !== 1 || sibling === el) continue;
                siblings.push(sibling);
            }

        } while (sibling = sibling.nextSibling);

        return siblings;
    }

    static getNextSiblings(el, filter) {
        var siblings: any[] = [];
        while (el = el.nextSibling) {
            if (!filter || filter(el)) {
                if (el.nodeType !== 1) continue;
                siblings.push(el);
            }
        }
        return siblings;
    }

    static getNextSibling(el, filter) {
        while (el = el.nextSibling) {
            if (!filter || filter(el)) {
                if (el.nodeType !== 1) continue;
                return el;
            }
        }
        return null;
    }

    static getPreviousSiblings(el, filter) {
        var siblings: any[] = [];
        while (el = el.previousSibling) {
            if (!filter || filter(el)) {
                if (el.nodeType !== 1) continue;
                siblings.push(el);
            }
        }
        return siblings;
    }

    static getPreviousSibling(el: Node, filter: (el: Node) => boolean) {
        let element: Node | null = el;
        while (element = element.previousSibling) {
            if (!filter || filter(element)) {
                if (element.nodeType !== 1) continue;
                return element;
            }
        }

        return null;
    }

    static getViewportSize() {
        var w, h;
        var element = (document.compatMode === "CSS1Compat") ?
            document.documentElement :
            document.body;

        if (typeof (element.clientWidth) != 'undefined') {
            w = Math.max(element.clientWidth, (!('innerWidth' in window) ? 0 : window.innerWidth) || 0);
            h = Math.max(element.clientHeight, (!('innerHeight' in window) ? 0 : window.innerHeight) || 0);
        }

        return { width: w, height: h };
    }

    static show(el) {
        if (!el) return;
        el.style.display = 'block';
    }

    static hide(el) {
        if (!el) return;
        (el as HTMLElement).style.display = 'none';
    }

    static toggle(el) {
        if (!el) return;

        // If the element is visible, hide it
        if (window.getComputedStyle(el).display === 'block') {
            TeboUtility.hide(el);
            return;
        }

        // Otherwise, show it
        TeboUtility.show(el);
    }

    static isJsonResponse(response) {
        const contentType = response.headers.get("content-type");
        return contentType && contentType.indexOf("application/json") !== -1 && TeboUtility.tryParseToJson(response);
    }

    static tryParseToJson(text) {
        try {
            JSON.parse(text);
            return true;
        } catch (err) {
            return false;
        }
    }
}