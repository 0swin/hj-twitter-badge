// ==UserScript==
// @namespace    https://www.oswin.io/
// @author       0swin
// @version      1
// @name         hj-twitter-badge
// @description  Pour ajouter un badge sur les tweets de la HJ.
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @grant        none
// @run-at       document-end
// @license      MIT
// ==/UserScript==
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  var __webpack_exports__ = {};
  /*!******************************************************!*\
  !*** ./src/scripts/twitter-media-warning-remover.ts ***!
  \******************************************************/

  (function () {
    var users = [
      "@0swin",
      "@ch3stnut_",
      "@heimdall_baba",
      "@itsAstrae",
      "@Kourtelle",
      "@mamie_jo_",
      "@RokuKatsu7",
      "@rubrum_lucerna",
      "@s4mit0s",
      "@sam_anvbis",
      "@StyloBitch",
      "@TheSwissViper",
      "@UnderSesel",
      "@urfavalcohol",
      "@Ykonikk",
    ];

    function contains(text) {
      var elements = document.querySelectorAll("article[data-testid='tweet']");
      // in elements array, find elements that contain text in the div with data-testid="User-Names"
      var filtered = Array.from(elements).filter((element) => {
        return element
          .querySelector("div[data-testid='User-Names']")
          .innerText.includes(text);
      });
      return filtered;
    }

    function addBadgesToTweets() {
      var elements = users
        .map((user) => {
          return contains(user);
        })
        .flat();

      // for each element, find inner element with data-testid="User-Names"
      elements.forEach((element) => {
        var userNames = element.querySelector(
          "div[data-testid='User-Names']"
        ).firstChild;
        // append span with text "Verified"
        var badge = document.createElement("div");
        badge.id = "badge";
        badge.innerHTML = `<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.555 7.19c1.19.61 1.99 1.737 1.99 3.037 0 1.3-.8 2.428-1.99 3.037.418 1.263.181 2.636-.737 3.554-.918.918-2.29 1.146-3.554.736-.6 1.191-1.737 1.991-3.037 1.991-1.3 0-2.427-.8-3.036-1.99-1.264.409-2.636.181-3.555-.737-.918-.918-1.145-2.29-.727-3.554-1.19-.61-2-1.737-2-3.037 0-1.3.81-2.427 2-3.036-.418-1.264-.19-2.636.727-3.555.919-.918 2.291-1.154 3.564-.736C7.8 1.71 8.927.91 10.227.91s2.437.8 3.037 1.99c1.263-.418 2.636-.182 3.554.736.918.919 1.155 2.291.736 3.555Zm-12.1.083v6.277H7.04v-2.452h2.1v2.452h1.588V7.273H9.142v2.452h-2.1V7.273H5.454Zm10 0H13.89v4.303a1.195 1.195 0 0 1-.066.408.503.503 0 0 1-.186.245.51.51 0 0 1-.296.083.534.534 0 0 1-.297-.08.545.545 0 0 1-.188-.245 1.182 1.182 0 0 1-.075-.398h-1.586c-.002.482.089.874.274 1.177.184.3.431.52.742.662.31.139.652.208 1.027.208a2.45 2.45 0 0 0 1.144-.257c.333-.174.594-.415.782-.724.19-.31.287-.67.288-1.079V7.273Z" fill="url(#b)"/></g><defs><linearGradient id="b" x1="5" y1="4.091" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#FF47ED"/><stop offset=".219" stop-color="#FF78F2"/><stop offset="1" stop-color="#A70096"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>`;
        // badge.innerHTML = `<img src="https://pbs.twimg.com/dm_group_img/1606389664050515979/tCc_uLL5ZLcKROain0k3BuAW1y8tc5Q7ugrzdaSIgubpHKoszN?format=jpg&name=120x120" width="20" height="20" style="border-radius: 100%; margin-left: 2px;">`;
        if (!userNames.querySelector("#badge")) {
          userNames.appendChild(badge);
        }
      });
    }

    // addBadges if user has scrolled more than 100px or every 2 seconds
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 100) {
    //     addBadgesToTweets();
    //   }
    // });
    // setInterval(addBadgesToTweets, 2000);

    new MutationObserver((ms) =>
      ms.forEach((m) =>
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            addBadgesToTweets();
          }
        })
      )
    ).observe(document.body, { childList: true, subtree: true });
  })();

  /******/
})();
