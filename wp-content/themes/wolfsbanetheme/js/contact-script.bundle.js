(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(2);window.addEventListener("DOMContentLoaded",(function(e){new i.a,new a.a({targetId:"nav-primary-hamburger",navContainerTargetId:"nav-primary",toggleClass:"c-hamburger-toggler--clicked",overlayElClass:"c-hamburger-menu__overlay",overlayOpenClass:"c-hamburger-menu--open",itemElClass:"c-hamburger-menu__item",menuLevel2OpenClass:"c-hamburger-menu__level-2--open",menuLevel2ElClass:"c-hamburger-menu__level-2"}),console.log("DOM fully loaded and parsed")}))},2:function(e,t,n){"use strict";var i=function(e){var t=this;this.config=e,this.hamburgerEl=document.getElementById(this.config.targetId),this.navContainerEl=document.getElementById(this.config.navContainerTargetId),this.overlayEl=this.navContainerEl.querySelector(":scope ."+this.config.overlayElClass),this.itemEls=Array.from(this.navContainerEl.querySelectorAll(":scope ."+this.config.itemElClass));for(var n=function(e){i.itemEls[e].addEventListener("click",(function(n){var i=t.itemEls[e].querySelector(":scope ."+t.config.menuLevel2ElClass);null==i||i.classList.toggle(t.config.menuLevel2OpenClass)}))},i=this,a=0;a<this.itemEls.length;a++)n(a);this.hamburgerEl.addEventListener("click",(function(e){t.navContainerEl.classList.toggle(t.config.toggleClass),t.navContainerEl.classList.contains(t.config.toggleClass)?window.setTimeout((function(){t.navContainerEl.classList.add(t.config.overlayOpenClass)}),500):(Array.from(t.navContainerEl.querySelectorAll(":scope ."+t.config.menuLevel2ElClass)).forEach((function(e){e.classList.remove(t.config.menuLevel2OpenClass)})),window.setTimeout((function(){t.navContainerEl.classList.remove(t.config.overlayOpenClass)}),500))}))};t.a=i},3:function(e,t,n){"use strict";var i,a=n(5);!function(e){e[e.Open=0]="Open",e[e.Active=1]="Active"}(i||(i={}));var r=i,s=function(){function e(e,t,n,i){var s,o,l,c,u=this;void 0===e&&(e="c-nav-primary__item"),void 0===t&&(t="c-nav-primary__link"),void 0===n&&(n="c-nav-primary__level-2"),void 0===i&&(i="c-nav-primary__item--has-childen"),this.itemClass=e,this.linkClass=t,this.level2Class=n,this.hasChildrenClass=i,this.openIndicatorHeight=5,this.activeIndicatorHeight=20,this.mouseEnterHandlerExecuting=!1,this.mouseLeaveHandlerExecuting=!1;a.join(["Hello","webpack"]," ");this.rootEl=document.getElementById("nav-primary"),this.activeMenuId=(null===(s=document.querySelector("body"))||void 0===s?void 0:s.dataset.navPrimaryActiveMenuId)||null,this.activeMenuItemEl=(null===(o=this.rootEl)||void 0===o?void 0:o.querySelector("#"+this.activeMenuId))||null,this.menuItemListEl=null===(l=this.rootEl)||void 0===l?void 0:l.querySelectorAll("."+this.hasChildrenClass),null===(c=this.menuItemListEl)||void 0===c||c.forEach((function(e,t){null==e||e.addEventListener("mouseenter",u.mouseEnterHandler.bind(u),!1),null==e||e.addEventListener("mouseleave",u.mouseLeaveHandler.bind(u),!1)})),this.expandIndicator(r.Active,this.activeMenuItemEl)}return e.prototype.createOpenIndicator=function(){var e;return(e=document.createElement("span")).classList.add("c-nav-primary__open-indicator"),e},e.prototype.createActiveIndicator=function(){var e;return(e=document.createElement("span")).classList.add("c-nav-primary__active-indicator"),e},e.prototype.getOpenIndicator=function(e){return e.querySelector(".c-nav-primary__open-indicator")},e.prototype.getActiveIndicator=function(e){return e.querySelector(".c-nav-primary__active-indicator")},e.prototype.mouseEnterHandler=function(e){var t=this,n=e.target;(e.stopPropagation(),this.mouseEnterHandlerExecuting)||n.classList.contains(""+this.hasChildrenClass)&&(this.mouseEnterHandlerExecuting=!0,"true"===n.getAttribute("data-open")||this.expandIndicator(r.Open,n,(function(e){var i;null===(i=n.querySelector("."+t.level2Class))||void 0===i||i.classList.add(t.level2Class+"--open"),e.setAttribute("data-open","true"),t.mouseEnterHandlerExecuting=!1})))},e.prototype.mouseLeaveHandler=function(e){var t=this,n=e.target;(e.stopPropagation(),this.mouseLeaveHandlerExecuting)||n.classList.contains(""+this.hasChildrenClass)&&(this.mouseLeaveHandlerExecuting=!0,"true"===n.getAttribute("data-open")&&this.collapseIndicator(r.Open,n,(function(e){var n;null===(n=e.querySelector("."+t.level2Class))||void 0===n||n.classList.remove(t.level2Class+"--open"),e.setAttribute("data-open","false"),t.mouseLeaveHandlerExecuting=!1})))},e.prototype.expandIndicator=function(e,t,n){void 0===n&&(n=null);var i=null,a=null,s=e===r.Open,o=e===r.Active;if(s&&(i=this.createOpenIndicator(),a=this.openIndicatorHeight),o&&(i=this.createActiveIndicator(),a=this.activeIndicatorHeight),null!==i&&null!==a){i.style.height="0px",t.querySelector("."+this.linkClass).appendChild(i);i.clientHeight;i.style.height=a+"px",n&&n.call(this,t)}},e.prototype.collapseIndicator=function(e,t,n){if(void 0===n&&(n=null),e!==r.Active){var i=this.getOpenIndicator(t),a=this.openIndicatorHeight;if(null!==i&&null!==a){var s=i.style.transition;i.style.transition="",requestAnimationFrame((function(){i.style.height=a+"px",i.style.transition=s,requestAnimationFrame((function(){i.style.height="0px"}))}));var o=function(e){i.removeEventListener("transitionend",o.bind(this)),i.removeAttribute("style"),i.remove()};i.addEventListener("transitionend",o.bind(this)),n&&n.call(this,t,o)}}},e}();t.a=s}},[[172,0,1]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21vZHVsZXMvSGFtYnVyZ2VyTWVudS9IYW1idXJnZXJNZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbW9kdWxlcy9OYXZQcmltYXJ5L01lbnVJdGVtSW5kaWNhdG9yRW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21vZHVsZXMvTmF2UHJpbWFyeS9OYXZQcmltYXJ5LnRzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldElkIiwibmF2Q29udGFpbmVyVGFyZ2V0SWQiLCJ0b2dnbGVDbGFzcyIsIm92ZXJsYXlFbENsYXNzIiwib3ZlcmxheU9wZW5DbGFzcyIsIml0ZW1FbENsYXNzIiwibWVudUxldmVsMk9wZW5DbGFzcyIsIm1lbnVMZXZlbDJFbENsYXNzIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInRoaXMiLCJoYW1idXJnZXJFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZDb250YWluZXJFbCIsIm92ZXJsYXlFbCIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtRWxzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJlIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxlbmd0aCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsImFkZCIsImZvckVhY2giLCJlbCIsInJlbW92ZSIsIk1lbnVJdGVtSW5kaWNhdG9yRW51bSIsIml0ZW1DbGFzcyIsImxpbmtDbGFzcyIsImxldmVsMkNsYXNzIiwiaGFzQ2hpbGRyZW5DbGFzcyIsIm9wZW5JbmRpY2F0b3JIZWlnaHQiLCJhY3RpdmVJbmRpY2F0b3JIZWlnaHQiLCJtb3VzZUVudGVySGFuZGxlckV4ZWN1dGluZyIsIm1vdXNlTGVhdmVIYW5kbGVyRXhlY3V0aW5nIiwicm9vdEVsIiwiYWN0aXZlTWVudUlkIiwiZGF0YXNldCIsIm5hdlByaW1hcnlBY3RpdmVNZW51SWQiLCJhY3RpdmVNZW51SXRlbUVsIiwibWVudUl0ZW1MaXN0RWwiLCJpdGVtIiwia2V5IiwibW91c2VFbnRlckhhbmRsZXIiLCJiaW5kIiwibW91c2VMZWF2ZUhhbmRsZXIiLCJleHBhbmRJbmRpY2F0b3IiLCJBY3RpdmUiLCJjcmVhdGVPcGVuSW5kaWNhdG9yIiwib3BlbkluZGljYXRvckVsIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUFjdGl2ZUluZGljYXRvciIsImFjdGl2ZUluZGljYXRvckVsIiwiZ2V0T3BlbkluZGljYXRvciIsImdldEFjdGl2ZUluZGljYXRvciIsIm1vdXNlRW50ZXJFbCIsInRhcmdldCIsInN0b3BQcm9wYWdhdGlvbiIsImdldEF0dHJpYnV0ZSIsIk9wZW4iLCJzZXRBdHRyaWJ1dGUiLCJtb3VzZUxlYXZlRWwiLCJjb2xsYXBzZUluZGljYXRvciIsImluZGljYXRvclR5cGUiLCJjYWxsYmFjayIsImluZGljYXRvciIsImluZGljYXRvckhlaWdodCIsImlzT3BlbkluZGljYXRvciIsImlzQWN0aXZlSW5kaWNhdG9yIiwic3R5bGUiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsImNsaWVudEhlaWdodCIsImNhbGwiLCJlbGVtZW50VHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0cmFuc2l0aW9uRW5kSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiIwRkFBQSx5QkFRQUEsT0FBT0MsaUJBQWlCLG9CQUFvQixTQUFDQyxHQUNuQyxJQUFJLElBQ00sSUFBSSxJQUFjLENBQzlCQyxTQUFVLHdCQUNWQyxxQkFBc0IsY0FDdEJDLFlBQWEsK0JBQ2JDLGVBQWdCLDRCQUNoQkMsaUJBQWtCLHlCQUNsQkMsWUFBYSx5QkFDYkMsb0JBQXFCLGtDQUNyQkMsa0JBQW1CLDhCQUd2QkMsUUFBUUMsSUFBSSxtQywrQkNu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IE5hdlByaW1hcnkgZnJvbSAnLi9hc3NldHMvbW9kdWxlcy9OYXZQcmltYXJ5L05hdlByaW1hcnknO1xyXG5pbXBvcnQgSGFtYnVyZ2VyTWVudSBmcm9tICcuL2Fzc2V0cy9tb2R1bGVzL0hhbWJ1cmdlck1lbnUvSGFtYnVyZ2VyTWVudSc7XHJcblxyXG5cclxubGV0IG5hdjogTmF2UHJpbWFyeTtcclxubGV0IGhhbWJ1cmdlck1lbnU6IEhhbWJ1cmdlck1lbnU7XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcclxuICAgIG5hdiA9IG5ldyBOYXZQcmltYXJ5KCk7XHJcbiAgICBoYW1idXJnZXJNZW51ID0gbmV3IEhhbWJ1cmdlck1lbnUoe1xyXG4gICAgICAgIHRhcmdldElkOiBcIm5hdi1wcmltYXJ5LWhhbWJ1cmdlclwiLFxyXG4gICAgICAgIG5hdkNvbnRhaW5lclRhcmdldElkOiBcIm5hdi1wcmltYXJ5XCIsXHJcbiAgICAgICAgdG9nZ2xlQ2xhc3M6IFwiYy1oYW1idXJnZXItdG9nZ2xlci0tY2xpY2tlZFwiLFxyXG4gICAgICAgIG92ZXJsYXlFbENsYXNzOiBcImMtaGFtYnVyZ2VyLW1lbnVfX292ZXJsYXlcIixcclxuICAgICAgICBvdmVybGF5T3BlbkNsYXNzOiBcImMtaGFtYnVyZ2VyLW1lbnUtLW9wZW5cIixcclxuICAgICAgICBpdGVtRWxDbGFzczogXCJjLWhhbWJ1cmdlci1tZW51X19pdGVtXCIsXHJcbiAgICAgICAgbWVudUxldmVsMk9wZW5DbGFzczogXCJjLWhhbWJ1cmdlci1tZW51X19sZXZlbC0yLS1vcGVuXCIsXHJcbiAgICAgICAgbWVudUxldmVsMkVsQ2xhc3M6IFwiYy1oYW1idXJnZXItbWVudV9fbGV2ZWwtMlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnRE9NIGZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkJyk7XHJcbn0pOyIsImltcG9ydCBJSGFtYnVyZ2VyTWVudUNvbmZpZyBmcm9tIFwiLi9JSGFtYnVyZ2VyTWVudUNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFtYnVyZ2VyTWVudSB7XHJcblxyXG4gICAgcHJpdmF0ZSBoYW1idXJnZXJFbDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG5hdkNvbnRhaW5lckVsOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgb3ZlcmxheUVsOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgaXRlbUVsczogSFRNTEVsZW1lbnRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogSUhhbWJ1cmdlck1lbnVDb25maWcpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb25maWcudGFyZ2V0SWQpITtcclxuICAgICAgICB0aGlzLm5hdkNvbnRhaW5lckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb25maWcubmF2Q29udGFpbmVyVGFyZ2V0SWQpITtcclxuICAgICAgICB0aGlzLm92ZXJsYXlFbCA9IHRoaXMubmF2Q29udGFpbmVyRWwucXVlcnlTZWxlY3RvcihgOnNjb3BlIC4ke3RoaXMuY29uZmlnLm92ZXJsYXlFbENsYXNzfWApISBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0aGlzLml0ZW1FbHMgPSBBcnJheS5mcm9tKHRoaXMubmF2Q29udGFpbmVyRWwucXVlcnlTZWxlY3RvckFsbChgOnNjb3BlIC4ke3RoaXMuY29uZmlnLml0ZW1FbENsYXNzfWApKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1FbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRWxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5pdGVtRWxzW2ldLnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSAuJHt0aGlzLmNvbmZpZy5tZW51TGV2ZWwyRWxDbGFzc31gKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jb25maWcubWVudUxldmVsMk9wZW5DbGFzcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Q29udGFpbmVyRWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNvbmZpZy50b2dnbGVDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5uYXZDb250YWluZXJFbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jb25maWcudG9nZ2xlQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm92ZXJsYXlPcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy5uYXZDb250YWluZXJFbC5xdWVyeVNlbGVjdG9yQWxsKGA6c2NvcGUgLiR7dGhpcy5jb25maWcubWVudUxldmVsMkVsQ2xhc3N9YCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5tZW51TGV2ZWwyT3BlbkNsYXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm92ZXJsYXlPcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSIsImVudW0gTWVudUl0ZW1JbmRpY2F0b3JFbnVtIHtcclxuICAgIE9wZW4sXHJcbiAgICBBY3RpdmVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtSW5kaWNhdG9yRW51bTsiLCJcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgTWVudUl0ZW1JbmRpY2F0b3JFbnVtIGZyb20gJy4vTWVudUl0ZW1JbmRpY2F0b3JFbnVtJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZQcmltYXJ5IHtcclxuICAgIHByaXZhdGUgcm9vdEVsOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIG9wZW5JbmRpY2F0b3JFbDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBhY3RpdmVJbmRpY2F0b3JFbDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVNZW51SXRlbUVsOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIG1lbnVJdGVtTGlzdEVsO1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlTWVudUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcGVuSW5kaWNhdG9ySGVpZ2h0OiBudW1iZXIgPSA1O1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVJbmRpY2F0b3JIZWlnaHQ6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIHByaXZhdGUgbW91c2VFbnRlckhhbmRsZXJFeGVjdXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbW91c2VMZWF2ZUhhbmRsZXJFeGVjdXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtQ2xhc3M6IHN0cmluZyA9ICdjLW5hdi1wcmltYXJ5X19pdGVtJyxcclxuICAgICAgICBwcml2YXRlIGxpbmtDbGFzczogc3RyaW5nID0gJ2MtbmF2LXByaW1hcnlfX2xpbmsnLFxyXG4gICAgICAgIHByaXZhdGUgbGV2ZWwyQ2xhc3M6IHN0cmluZyA9ICdjLW5hdi1wcmltYXJ5X19sZXZlbC0yJyxcclxuICAgICAgICBwcml2YXRlIGhhc0NoaWxkcmVuQ2xhc3M6IHN0cmluZyA9ICdjLW5hdi1wcmltYXJ5X19pdGVtLS1oYXMtY2hpbGRlbicpIHtcclxuXHJcbiAgICAgICAgLy8gZGVsZXRlXHJcbiAgICAgICAgbGV0IHRlc3Q6IHN0cmluZyA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcclxuXHJcbiAgICAgICAgLy8gZHluYW1pYyBlbGVtZW50c1xyXG4gICAgICAgIC8vIHRoaXMuYWN0aXZlSW5kaWNhdG9yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVNZW51SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk/LmRhdGFzZXQubmF2UHJpbWFyeUFjdGl2ZU1lbnVJZCB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1FbCA9IHRoaXMucm9vdEVsPy5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmFjdGl2ZU1lbnVJZH1gKSB8fCBudWxsO1xyXG5cclxuICAgICAgICAvLyBmaW5kIGl0ZW1zIHdpdGggY2hpbGRyZW5cclxuICAgICAgICB0aGlzLm1lbnVJdGVtTGlzdEVsID0gdGhpcy5yb290RWw/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuaGFzQ2hpbGRyZW5DbGFzc31gKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51SXRlbUxpc3RFbD8uZm9yRWFjaCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm1vdXNlRW50ZXJIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMubW91c2VMZWF2ZUhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGFuZEluZGljYXRvcihNZW51SXRlbUluZGljYXRvckVudW0uQWN0aXZlLCB0aGlzLmFjdGl2ZU1lbnVJdGVtRWwpO1xyXG4gICAgICAgIC8vIHRoaXMuYXBwbHlEZWZhdWx0U3R5bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU9wZW5JbmRpY2F0b3IoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICBsZXQgb3BlbkluZGljYXRvckVsOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgICAgIG9wZW5JbmRpY2F0b3JFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBvcGVuSW5kaWNhdG9yRWwhLmNsYXNzTGlzdC5hZGQoJ2MtbmF2LXByaW1hcnlfX29wZW4taW5kaWNhdG9yJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBvcGVuSW5kaWNhdG9yRWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVBY3RpdmVJbmRpY2F0b3IoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICBsZXQgYWN0aXZlSW5kaWNhdG9yRWw6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgICAgICAgYWN0aXZlSW5kaWNhdG9yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgYWN0aXZlSW5kaWNhdG9yRWwhLmNsYXNzTGlzdC5hZGQoJ2MtbmF2LXByaW1hcnlfX2FjdGl2ZS1pbmRpY2F0b3InKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUluZGljYXRvckVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3BlbkluZGljYXRvcihlbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuYy1uYXYtcHJpbWFyeV9fb3Blbi1pbmRpY2F0b3JgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFjdGl2ZUluZGljYXRvcihlbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuYy1uYXYtcHJpbWFyeV9fYWN0aXZlLWluZGljYXRvcmApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW91c2VFbnRlckhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW91c2VFbnRlckVsID0gZS50YXJnZXQgYXMgRWxlbWVudDtcclxuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VFbnRlckhhbmRsZXJFeGVjdXRpbmcpIHJldHVybjtcclxuICAgICAgICBpZiAoIW1vdXNlRW50ZXJFbC5jbGFzc0xpc3QuY29udGFpbnMoYCR7dGhpcy5oYXNDaGlsZHJlbkNsYXNzfWApKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tb3VzZUVudGVySGFuZGxlckV4ZWN1dGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBpc09wZW4gPSBtb3VzZUVudGVyRWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nKSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIGlmICghaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSW5kaWNhdG9yKE1lbnVJdGVtSW5kaWNhdG9yRW51bS5PcGVuLCBtb3VzZUVudGVyRWwsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb3VzZUVudGVyRWwucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5sZXZlbDJDbGFzc31gKT8uY2xhc3NMaXN0LmFkZChgJHt0aGlzLmxldmVsMkNsYXNzfS0tb3BlbmApO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRW50ZXJIYW5kbGVyRXhlY3V0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdXNlTGVhdmVIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vdXNlTGVhdmVFbCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW91c2VMZWF2ZUhhbmRsZXJFeGVjdXRpbmcpIHJldHVybjtcclxuICAgICAgICBpZiAoIW1vdXNlTGVhdmVFbC5jbGFzc0xpc3QuY29udGFpbnMoYCR7dGhpcy5oYXNDaGlsZHJlbkNsYXNzfWApKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tb3VzZUxlYXZlSGFuZGxlckV4ZWN1dGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBpc09wZW4gPSBtb3VzZUxlYXZlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nKSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUluZGljYXRvcihNZW51SXRlbUluZGljYXRvckVudW0uT3BlbiwgbW91c2VMZWF2ZUVsLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmxldmVsMkNsYXNzfWApPy5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMubGV2ZWwyQ2xhc3N9LS1vcGVuYCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyRXhlY3V0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cGFuZEluZGljYXRvcihpbmRpY2F0b3JUeXBlOiBNZW51SXRlbUluZGljYXRvckVudW0sIGVsZW1lbnQsIGNhbGxiYWNrOiBGdW5jdGlvbiB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGluZGljYXRvcjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBsZXQgaW5kaWNhdG9ySGVpZ2h0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBsZXQgaXNPcGVuSW5kaWNhdG9yOiBib29sZWFuID0gaW5kaWNhdG9yVHlwZSA9PT0gTWVudUl0ZW1JbmRpY2F0b3JFbnVtLk9wZW47XHJcbiAgICAgICAgbGV0IGlzQWN0aXZlSW5kaWNhdG9yOiBib29sZWFuID0gaW5kaWNhdG9yVHlwZSA9PT0gTWVudUl0ZW1JbmRpY2F0b3JFbnVtLkFjdGl2ZTtcclxuXHJcbiAgICAgICAgaWYgKGlzT3BlbkluZGljYXRvcikge1xyXG4gICAgICAgICAgICBpbmRpY2F0b3IgPSB0aGlzLmNyZWF0ZU9wZW5JbmRpY2F0b3IoKTtcclxuICAgICAgICAgICAgaW5kaWNhdG9ySGVpZ2h0ID0gdGhpcy5vcGVuSW5kaWNhdG9ySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQWN0aXZlSW5kaWNhdG9yKSB7XHJcbiAgICAgICAgICAgIGluZGljYXRvciA9IHRoaXMuY3JlYXRlQWN0aXZlSW5kaWNhdG9yKCk7XHJcbiAgICAgICAgICAgIGluZGljYXRvckhlaWdodCA9IHRoaXMuYWN0aXZlSW5kaWNhdG9ySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGljYXRvciA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChpbmRpY2F0b3JIZWlnaHQgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgaW5kaWNhdG9yLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5saW5rQ2xhc3N9YCkuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcclxuXHJcbiAgICAgICAgdmFyIHNlY3Rpb25IZWlnaHQgPSBpbmRpY2F0b3IuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGluZGljYXRvci5zdHlsZS5oZWlnaHQgPSBgJHtpbmRpY2F0b3JIZWlnaHR9cHhgOyAgICAgICAgXHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2suY2FsbCh0aGlzLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbGxhcHNlSW5kaWNhdG9yKGluZGljYXRvclR5cGU6IE1lbnVJdGVtSW5kaWNhdG9yRW51bSwgZWxlbWVudCwgY2FsbGJhY2s6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoaW5kaWNhdG9yVHlwZSA9PT0gTWVudUl0ZW1JbmRpY2F0b3JFbnVtLkFjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaW5kaWNhdG9yOiBIVE1MRWxlbWVudCB8IG51bGwgPSB0aGlzLmdldE9wZW5JbmRpY2F0b3IoZWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGluZGljYXRvckhlaWdodDogbnVtYmVyIHwgbnVsbCA9IHRoaXMub3BlbkluZGljYXRvckhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGluZGljYXRvciA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChpbmRpY2F0b3JIZWlnaHQgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgZGlzYWJsZSBhbGwgY3NzIHRyYW5zaXRpb25zXHJcbiAgICAgICAgdmFyIGVsZW1lbnRUcmFuc2l0aW9uID0gaW5kaWNhdG9yLnN0eWxlLnRyYW5zaXRpb247XHJcbiAgICAgICAgaW5kaWNhdG9yLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgaW5kaWNhdG9yIS5zdHlsZS5oZWlnaHQgPSBpbmRpY2F0b3JIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICBpbmRpY2F0b3IhLnN0eWxlLnRyYW5zaXRpb24gPSBlbGVtZW50VHJhbnNpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IhLnN0eWxlLmhlaWdodCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zaXRpb25FbmRIYW5kbGVyID0gZnVuY3Rpb24gKHRoaXM6IE5hdlByaW1hcnksIGUpIHtcclxuICAgICAgICAgICAgaW5kaWNhdG9yIS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGluZGljYXRvciEucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgICBpbmRpY2F0b3IhLnJlbW92ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5kaWNhdG9yIS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2suY2FsbCh0aGlzLCBlbGVtZW50LCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9