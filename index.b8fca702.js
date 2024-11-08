// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
/* eslint-disable no-console */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _hammerjs = require("hammerjs");
var _hammerjsDefault = parcelHelpers.interopDefault(_hammerjs);
"use strict";
const Game = require("789b00406e138236");
const game = new Game();
const table = document.querySelector("tbody");
let boardState = game.getState();
const gameScoreText = document.querySelector(".game-score");
const gameScoreRecordText = document.querySelector(".record");
let gameScore = 0;
let highScore = parseInt(localStorage.getItem("highScore")) || 0;
gameScoreRecordText.textContent = highScore;
console.log(game.getStatus());
const displayText = ()=>{
    gameScore = 0;
    Array.from(table.rows).forEach((row)=>{
        Array.from(row.cells).forEach((cell)=>{
            const cellValue = parseFloat(cell.textContent) || 0;
            gameScore += cellValue;
        });
    });
    gameScoreText.textContent = `${gameScore}`;
    if (gameScore > highScore) {
        highScore = gameScore;
        localStorage.setItem("highScore", highScore);
        gameScoreRecordText.textContent = highScore;
    }
};
const startGameBoard = ()=>{
    const randomRow1 = Math.floor(Math.random() * boardState.length);
    const randomCol1 = Math.floor(Math.random() * boardState[randomRow1].length);
    const randomChance1 = Math.random();
    const randomValue1 = randomChance1 < 0.1 ? 4 : 2;
    let randomRow2, randomCol2, randomValue2;
    let positionIsSame = true;
    do {
        randomRow2 = Math.floor(Math.random() * boardState.length);
        randomCol2 = Math.floor(Math.random() * boardState[randomRow2].length);
        const randomChance2 = Math.random();
        randomValue2 = randomChance2 < 0.1 ? 4 : 2;
        positionIsSame = randomRow1 === randomRow2 && randomCol1 === randomCol2;
    }while (positionIsSame);
    boardState[randomRow1][randomCol1] = randomValue1;
    boardState[randomRow2][randomCol2] = randomValue2;
};
const renderDom = (direction)=>{
    Array.from(table.rows).forEach((row)=>{
        Array.from(row.cells).forEach((cell)=>{
            cell.textContent = "";
            cell.classList.remove(...cell.classList);
            cell.classList.add("field-cell");
        });
    });
    const movedCells = game.getMovedCells();
    Array.from(table.rows).forEach((row, rowIndex)=>{
        Array.from(row.cells).forEach((cell, cellIndex)=>{
            const value = boardState[rowIndex][cellIndex];
            if (value !== 0) {
                cell.textContent = value;
                cell.classList.add(`field-cell--${value}`);
                const isMoved = movedCells.some((movedCell)=>movedCell.row === rowIndex && movedCell.col === cellIndex);
                if (isMoved && direction) cell.classList.add(`field-cell-moving-${direction}`);
            }
            setTimeout(()=>{
                if (direction) cell.classList.remove(`field-cell-moving-${direction}`);
            }, 100);
        });
    });
};
const startGame = ()=>{
    startGameBoard();
    renderDom();
};
const buttonStart = document.querySelector(".start");
const messageStart = document.querySelector(".message-start");
const messageLose = document.querySelector(".message-lose");
const messageWin = document.querySelector(".message-win");
const restart = ()=>{
    game.status = "idle";
    game.restart();
    boardState = game.getState();
    gameScore = 0;
    gameScoreText.textContent = "0";
    renderDom();
    buttonStart.textContent = "Start";
    buttonStart.classList.remove("restart");
    buttonStart.classList.add("start");
};
const iWin = ()=>{
    let isWin = false;
    Array.from(table.rows).forEach((row, rowIndex)=>{
        Array.from(row.cells).forEach((cell, cellIndex)=>{
            const value = boardState[rowIndex][cellIndex];
            if (value === 2048) isWin = true;
        });
    });
    if (isWin) {
        game.status = "win";
        messageWin.classList.remove("hidden");
    }
};
const handleMove = (direction)=>{
    let canMove = false;
    if (direction === "up" && game.canMoveUp()) {
        game.moveUp();
        canMove = true;
    } else if (direction === "down" && game.canMoveDown()) {
        game.moveDown();
        canMove = true;
    } else if (direction === "left" && game.canMoveLeft()) {
        game.moveLeft();
        canMove = true;
    } else if (direction === "right" && game.canMoveRight()) {
        game.moveRight();
        canMove = true;
    }
    if (canMove) {
        renderDom(direction);
        displayText();
        if (!game.canMoveUp() && !game.canMoveDown() && !game.canMoveLeft() && !game.canMoveRight() && game.getStatus() !== "idle") {
            game.status = "lose";
            messageLose.classList.remove("hidden");
        }
        iWin();
    }
};
document.addEventListener("click", (e)=>{
    if (e.target === buttonStart && game.getStatus() === "idle") {
        game.status = "playing";
        game.start();
        startGame();
        displayText();
        buttonStart.textContent = "Restart";
        buttonStart.classList.remove("start");
        buttonStart.classList.add("restart");
        messageStart.classList.add("hidden");
        document.addEventListener("keydown", (ev)=>{
            const keyDirection = {
                ArrowUp: "up",
                ArrowDown: "down",
                ArrowLeft: "left",
                ArrowRight: "right"
            };
            if (keyDirection[ev.key]) handleMove(keyDirection[ev.key]);
        });
    } else if (e.target === buttonStart && game.getStatus() !== "idle") {
        restart();
        messageLose.classList.add("hidden");
        messageStart.classList.remove("hidden");
        messageWin.classList.add("hidden");
    }
});
const hammer = new (0, _hammerjsDefault.default)(document.body);
hammer.get("swipe").set({
    direction: (0, _hammerjsDefault.default).DIRECTION_ALL
});
hammer.on("swipeleft", ()=>handleMove("left"));
hammer.on("swiperight", ()=>handleMove("right"));
hammer.on("swipeup", ()=>handleMove("up"));
hammer.on("swipedown", ()=>handleMove("down"));

},{"789b00406e138236":"eIbh2","hammerjs":"lHwvQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIbh2":[function(require,module,exports) {
/* eslint-disable no-console */ "use strict";
class Game {
    constructor(initialState = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ]){
        this.initialState = initialState;
        this.board = JSON.parse(JSON.stringify(initialState));
        this.previousBoard = JSON.parse(JSON.stringify(initialState));
        this.status = "idle";
        this.score = 0;
    // eslint-disable-next-line no-console
    }
    savePreviousState() {
        this.previousBoard = JSON.parse(JSON.stringify(this.board));
    }
    getMovedCells() {
        const movedCells = [];
        for(let row = 0; row < this.board.length; row++){
            for(let col = 0; col < this.board[row].length; col++)if (this.board[row][col] !== this.previousBoard[row][col]) movedCells.push({
                row,
                col
            });
        }
        return movedCells;
    }
    moveLeft() {
        this.savePreviousState();
        for(let row = 0; row < this.board.length; row++){
            const currentRow = [];
            for(let col = 0; col < this.board[row].length; col++)if (this.board[row][col] !== 0) currentRow.push(this.board[row][col]);
            while(currentRow.length < this.board[row].length)currentRow.push(0);
            for(let col = 0; col < this.board[row].length; col++)this.board[row][col] = currentRow[col];
            for(let col = 0; col < this.board[row].length - 1; col++)if (this.board[row][col] === this.board[row][col + 1] && this.board[row][col] !== 0) {
                this.board[row][col] *= 2;
                this.board[row][col + 1] = 0;
            }
            const newRow = [];
            for(let col = 0; col < this.board[row].length; col++)if (this.board[row][col] !== 0) newRow.push(this.board[row][col]);
            while(newRow.length < this.board[row].length)newRow.push(0);
            for(let col = 0; col < this.board[row].length; col++)this.board[row][col] = newRow[col];
        }
        this.updateTable();
        this.getRandomCellNumber();
        this.updateTable();
    }
    moveRight() {
        this.savePreviousState();
        for(let row = 0; row < this.board.length; row++){
            const currentRow = [];
            for(let col = 0; col < this.board[row].length; col++)if (this.board[row][col] !== 0) currentRow.push(this.board[row][col]);
            while(currentRow.length < this.board[row].length)currentRow.unshift(0);
            for(let col = 0; col < this.board[row].length; col++)this.board[row][col] = currentRow[col];
            for(let col = this.board[row].length - 1; col > 0; col--)if (this.board[row][col] === this.board[row][col - 1] && this.board[row][col] !== 0) {
                this.board[row][col] *= 2;
                this.board[row][col - 1] = 0;
            }
            const newRow = [];
            for(let col = 0; col < this.board[row].length; col++)if (this.board[row][col] !== 0) newRow.push(this.board[row][col]);
            while(newRow.length < this.board[row].length)newRow.unshift(0);
            for(let col = 0; col < this.board[row].length; col++)this.board[row][col] = newRow[col];
        }
        this.updateTable();
        this.getRandomCellNumber();
        this.updateTable();
    }
    moveUp() {
        this.savePreviousState();
        for(let col = 0; col < this.board[0].length; col++){
            const column = [];
            for(let row = 0; row < this.board.length; row++)if (this.board[row][col] !== 0) column.push(this.board[row][col]);
            while(column.length < this.board.length)column.push(0);
            for(let row = 0; row < this.board.length; row++)this.board[row][col] = column[row];
            for(let row = 0; row < this.board.length - 1; row++)if (this.board[row][col] === this.board[row + 1][col] && this.board[row][col] !== 0) {
                this.board[row][col] *= 2;
                this.board[row + 1][col] = 0;
            }
            const newColumn = [];
            for(let row = 0; row < this.board.length; row++)if (this.board[row][col] !== 0) newColumn.push(this.board[row][col]);
            while(newColumn.length < this.board.length)newColumn.push(0);
            for(let row = 0; row < this.board.length; row++)this.board[row][col] = newColumn[row];
        }
        this.updateTable();
        this.getRandomCellNumber();
        this.updateTable();
    }
    moveDown() {
        this.savePreviousState();
        for(let col = 0; col < this.board[0].length; col++){
            const column = [];
            for(let row = 0; row < this.board.length; row++)if (this.board[row][col] !== 0) column.push(this.board[row][col]);
            while(column.length < this.board.length)column.unshift(0);
            for(let row = 0; row < this.board.length; row++)this.board[row][col] = column[row];
            for(let row = this.board.length - 1; row > 0; row--)if (this.board[row][col] === this.board[row - 1][col] && this.board[row][col] !== 0) {
                this.board[row][col] *= 2;
                this.board[row - 1][col] = 0;
            }
            const newColumn = [];
            for(let row = 0; row < this.board.length; row++)if (this.board[row][col] !== 0) newColumn.push(this.board[row][col]);
            while(newColumn.length < this.board.length)newColumn.unshift(0);
            for(let row = 0; row < this.board.length; row++)this.board[row][col] = newColumn[row];
        }
        this.updateTable();
        this.getRandomCellNumber();
        this.updateTable();
    }
    getScore() {}
    getState() {
        return this.board;
    }
    getStatus() {
        return this.status;
    }
    start() {
        this.status = "playing";
    }
    restart() {
        this.status = "idle";
        this.board = JSON.parse(JSON.stringify(this.initialState));
    }
    updateTable() {
        const table = document.querySelector("tbody");
        Array.from(table.rows).forEach((row, rowIndex)=>{
            Array.from(row.cells).forEach((cell, cellIndex)=>{
                const value = this.board[rowIndex][cellIndex];
                cell.textContent = value !== 0 ? value : "";
            });
        });
    }
    getRandomCellNumber() {
        const emptyCells = [];
        for(let row = 0; row < this.board.length; row++){
            for(let col = 0; col < this.board[row].length; col++)if (this.board[row][col] === 0) emptyCells.push({
                row,
                col
            });
        }
        if (emptyCells.length > 0) {
            const { row: randomRow, col: randomCol } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            const randomChance = Math.random();
            this.board[randomRow][randomCol] = randomChance < 0.1 ? 4 : 2;
        }
    }
    canMoveUp() {
        for(let row = 1; row < this.board.length; row++)for(let col = 0; col < this.board[row].length; col++){
            if (this.board[row][col] !== 0 && (this.board[row - 1][col] === 0 || this.board[row - 1][col] === this.board[row][col])) return true;
        }
        return false;
    }
    canMoveDown() {
        for(let row = 0; row < this.board.length - 1; row++)for(let col = 0; col < this.board[row].length; col++){
            if (this.board[row][col] !== 0 && (this.board[row + 1][col] === 0 || this.board[row + 1][col] === this.board[row][col])) return true;
        }
        return false;
    }
    canMoveLeft() {
        for(let row = 0; row < this.board.length; row++)for(let col = 1; col < this.board[row].length; col++){
            if (this.board[row][col] !== 0 && (this.board[row][col - 1] === 0 || this.board[row][col - 1] === this.board[row][col])) return true;
        }
        return false;
    }
    canMoveRight() {
        for(let row = 0; row < this.board.length; row++)for(let col = 0; col < this.board[row].length - 1; col++){
            if (this.board[row][col] !== 0 && (this.board[row][col + 1] === 0 || this.board[row][col + 1] === this.board[row][col])) return true;
        }
        return false;
    }
}
module.exports = Game;

},{}],"lHwvQ":[function(require,module,exports) {
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */ (function(window1, document1, exportName, undefined) {
    "use strict";
    var VENDOR_PREFIXES = [
        "",
        "webkit",
        "Moz",
        "MS",
        "ms",
        "o"
    ];
    var TEST_ELEMENT = document1.createElement("div");
    var TYPE_FUNCTION = "function";
    var round = Math.round;
    var abs = Math.abs;
    var now = Date.now;
    /**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */ function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
    }
    /**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */ function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
            each(arg, context[fn], context);
            return true;
        }
        return false;
    }
    /**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */ function each(obj, iterator, context) {
        var i;
        if (!obj) return;
        if (obj.forEach) obj.forEach(iterator, context);
        else if (obj.length !== undefined) {
            i = 0;
            while(i < obj.length){
                iterator.call(context, obj[i], i, obj);
                i++;
            }
        } else for(i in obj)obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
    }
    /**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */ function deprecate(method, name, message) {
        var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
        return function() {
            var e = new Error("get-stack-trace");
            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
            var log = window1.console && (window1.console.warn || window1.console.log);
            if (log) log.call(window1.console, deprecationMessage, stack);
            return method.apply(this, arguments);
        };
    }
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */ var assign;
    if (typeof Object.assign !== "function") assign = function assign(target) {
        if (target === undefined || target === null) throw new TypeError("Cannot convert undefined or null to object");
        var output = Object(target);
        for(var index = 1; index < arguments.length; index++){
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for(var nextKey in source)if (source.hasOwnProperty(nextKey)) output[nextKey] = source[nextKey];
            }
        }
        return output;
    };
    else assign = Object.assign;
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */ var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;
        while(i < keys.length){
            if (!merge || merge && dest[keys[i]] === undefined) dest[keys[i]] = src[keys[i]];
            i++;
        }
        return dest;
    }, "extend", "Use `assign`.");
    /**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */ var merge = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
    }, "merge", "Use `assign`.");
    /**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */ function inherit(child, base, properties) {
        var baseP = base.prototype, childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;
        if (properties) assign(childP, properties);
    }
    /**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */ function bindFn(fn, context) {
        return function boundFn() {
            return fn.apply(context, arguments);
        };
    }
    /**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */ function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) return val.apply(args ? args[0] || undefined : undefined, args);
        return val;
    }
    /**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */ function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
    }
    /**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function addEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.addEventListener(type, handler, false);
        });
    }
    /**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function removeEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.removeEventListener(type, handler, false);
        });
    }
    /**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */ function hasParent(node, parent) {
        while(node){
            if (node == parent) return true;
            node = node.parentNode;
        }
        return false;
    }
    /**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */ function inStr(str, find) {
        return str.indexOf(find) > -1;
    }
    /**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */ function splitStr(str) {
        return str.trim().split(/\s+/g);
    }
    /**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */ function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) return src.indexOf(find);
        else {
            var i = 0;
            while(i < src.length){
                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) return i;
                i++;
            }
            return -1;
        }
    }
    /**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */ function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
    }
    /**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */ function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;
        while(i < src.length){
            var val = key ? src[i][key] : src[i];
            if (inArray(values, val) < 0) results.push(src[i]);
            values[i] = val;
            i++;
        }
        if (sort) {
            if (!key) results = results.sort();
            else results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
        return results;
    }
    /**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */ function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;
        while(i < VENDOR_PREFIXES.length){
            prefix = VENDOR_PREFIXES[i];
            prop = prefix ? prefix + camelProp : property;
            if (prop in obj) return prop;
            i++;
        }
        return undefined;
    }
    /**
 * get a unique id
 * @returns {number} uniqueId
 */ var _uniqueId = 1;
    function uniqueId() {
        return _uniqueId++;
    }
    /**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */ function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window1;
    }
    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    var SUPPORT_TOUCH = "ontouchstart" in window1;
    var SUPPORT_POINTER_EVENTS = prefixed(window1, "PointerEvent") !== undefined;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
    var INPUT_TYPE_TOUCH = "touch";
    var INPUT_TYPE_PEN = "pen";
    var INPUT_TYPE_MOUSE = "mouse";
    var INPUT_TYPE_KINECT = "kinect";
    var COMPUTE_INTERVAL = 25;
    var INPUT_START = 1;
    var INPUT_MOVE = 2;
    var INPUT_END = 4;
    var INPUT_CANCEL = 8;
    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;
    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
    var PROPS_XY = [
        "x",
        "y"
    ];
    var PROPS_CLIENT_XY = [
        "clientX",
        "clientY"
    ];
    /**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */ function Input(manager, callback) {
        var self1 = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget;
        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.
        this.domHandler = function(ev) {
            if (boolOrFn(manager.options.enable, [
                manager
            ])) self1.handler(ev);
        };
        this.init();
    }
    Input.prototype = {
        /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */ handler: function() {},
        /**
     * bind the events
     */ init: function() {
            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },
        /**
     * unbind the events
     */ destroy: function() {
            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
    };
    /**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */ function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;
        if (inputClass) Type = inputClass;
        else if (SUPPORT_POINTER_EVENTS) Type = PointerEventInput;
        else if (SUPPORT_ONLY_TOUCH) Type = TouchInput;
        else if (!SUPPORT_TOUCH) Type = MouseInput;
        else Type = TouchMouseInput;
        return new Type(manager, inputHandler);
    }
    /**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */ function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;
        if (isFirst) manager.session = {};
        // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'
        input.eventType = eventType;
        // compute scale, rotation etc
        computeInputData(manager, input);
        // emit secret event
        manager.emit("hammer.input", input);
        manager.recognize(input);
        manager.session.prevInput = input;
    }
    /**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */ function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length;
        // store the first input to calculate the distance and direction
        if (!session.firstInput) session.firstInput = simpleCloneInputData(input);
        // to compute scale and rotation we need to store the multiple touches
        if (pointersLength > 1 && !session.firstMultiple) session.firstMultiple = simpleCloneInputData(input);
        else if (pointersLength === 1) session.firstMultiple = false;
        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input);
        // find the correct target
        var target = manager.element;
        if (hasParent(input.srcEvent.target, target)) target = input.srcEvent.target;
        input.target = target;
    }
    function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};
        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
            prevDelta = session.prevDelta = {
                x: prevInput.deltaX || 0,
                y: prevInput.deltaY || 0
            };
            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }
        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
    }
    /**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */ function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
            var deltaX = input.deltaX - last.deltaX;
            var deltaY = input.deltaY - last.deltaY;
            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY);
            session.lastInterval = input;
        } else {
            // use latest velocity info if it doesn't overtake a minimum period
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }
        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
    }
    /**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */ function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;
        while(i < input.pointers.length){
            pointers[i] = {
                clientX: round(input.pointers[i].clientX),
                clientY: round(input.pointers[i].clientY)
            };
            i++;
        }
        return {
            timeStamp: now(),
            pointers: pointers,
            center: getCenter(pointers),
            deltaX: input.deltaX,
            deltaY: input.deltaY
        };
    }
    /**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */ function getCenter(pointers) {
        var pointersLength = pointers.length;
        // no need to loop when only one touch
        if (pointersLength === 1) return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
        var x = 0, y = 0, i = 0;
        while(i < pointersLength){
            x += pointers[i].clientX;
            y += pointers[i].clientY;
            i++;
        }
        return {
            x: round(x / pointersLength),
            y: round(y / pointersLength)
        };
    }
    /**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */ function getVelocity(deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    }
    /**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */ function getDirection(x, y) {
        if (x === y) return DIRECTION_NONE;
        if (abs(x) >= abs(y)) return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }
    /**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */ function getDistance(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
    }
    /**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */ function getAngle(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
    }
    /**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */ function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }
    /**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */ function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }
    var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
    };
    var MOUSE_ELEMENT_EVENTS = "mousedown";
    var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
    /**
 * Mouse events input
 * @constructor
 * @extends Input
 */ function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state
        Input.apply(this, arguments);
    }
    inherit(MouseInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function MEhandler(ev) {
            var eventType = MOUSE_INPUT_MAP[ev.type];
            // on start we want to have the left mouse button down
            if (eventType & INPUT_START && ev.button === 0) this.pressed = true;
            if (eventType & INPUT_MOVE && ev.which !== 1) eventType = INPUT_END;
            // mouse must be down
            if (!this.pressed) return;
            if (eventType & INPUT_END) this.pressed = false;
            this.callback(this.manager, eventType, {
                pointers: [
                    ev
                ],
                changedPointers: [
                    ev
                ],
                pointerType: INPUT_TYPE_MOUSE,
                srcEvent: ev
            });
        }
    });
    var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
    };
    // in IE10 the pointer types is defined as an enum
    var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
    };
    var POINTER_ELEMENT_EVENTS = "pointerdown";
    var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
    // IE10 has prefixed support, and case-sensitive
    if (window1.MSPointerEvent && !window1.PointerEvent) {
        POINTER_ELEMENT_EVENTS = "MSPointerDown";
        POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
    }
    /**
 * Pointer events input
 * @constructor
 * @extends Input
 */ function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
    }
    inherit(PointerEventInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function PEhandler(ev) {
            var store = this.store;
            var removePointer = false;
            var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
            var isTouch = pointerType == INPUT_TYPE_TOUCH;
            // get index of the event in the store
            var storeIndex = inArray(store, ev.pointerId, "pointerId");
            // start and mouse must be down
            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
                if (storeIndex < 0) {
                    store.push(ev);
                    storeIndex = store.length - 1;
                }
            } else if (eventType & (INPUT_END | INPUT_CANCEL)) removePointer = true;
            // it not found, so the pointer hasn't been down (so it's probably a hover)
            if (storeIndex < 0) return;
            // update the event in the store
            store[storeIndex] = ev;
            this.callback(this.manager, eventType, {
                pointers: store,
                changedPointers: [
                    ev
                ],
                pointerType: pointerType,
                srcEvent: ev
            });
            if (removePointer) // remove from the store
            store.splice(storeIndex, 1);
        }
    });
    var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
    var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Touch events input
 * @constructor
 * @extends Input
 */ function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
    }
    inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
            // should we handle the touch events?
            if (type === INPUT_START) this.started = true;
            if (!this.started) return;
            var touches = normalizeSingleTouches.call(this, ev, type);
            // when done, reset the started state
            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) this.started = false;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);
        if (type & (INPUT_END | INPUT_CANCEL)) all = uniqueArray(all.concat(changed), "identifier", true);
        return [
            all,
            changed
        ];
    }
    var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */ function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
    }
    inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
            var type = TOUCH_INPUT_MAP[ev.type];
            var touches = getTouches.call(this, ev, type);
            if (!touches) return;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds;
        // when there is only one touch, the process can be simplified
        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            return [
                allTouches,
                allTouches
            ];
        }
        var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
        // get target touches from touches
        targetTouches = allTouches.filter(function(touch) {
            return hasParent(touch.target, target);
        });
        // collect touches
        if (type === INPUT_START) {
            i = 0;
            while(i < targetTouches.length){
                targetIds[targetTouches[i].identifier] = true;
                i++;
            }
        }
        // filter changed touches to only contain touches that exist in the collected target ids
        i = 0;
        while(i < changedTouches.length){
            if (targetIds[changedTouches[i].identifier]) changedTargetTouches.push(changedTouches[i]);
            // cleanup removed touches
            if (type & (INPUT_END | INPUT_CANCEL)) delete targetIds[changedTouches[i].identifier];
            i++;
        }
        if (!changedTargetTouches.length) return;
        return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
            changedTargetTouches
        ];
    }
    /**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */ var DEDUP_TIMEOUT = 2500;
    var DEDUP_DISTANCE = 25;
    function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
    }
    inherit(TouchMouseInput, Input, {
        /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */ handler: function TMEhandler(manager, inputEvent, inputData) {
            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH, isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) return;
            // when we're in a touch event, record touches to  de-dupe synthetic mouse event
            if (isTouch) recordTouches.call(this, inputEvent, inputData);
            else if (isMouse && isSyntheticEvent.call(this, inputData)) return;
            this.callback(manager, inputEvent, inputData);
        },
        /**
     * remove the event listeners
     */ destroy: function destroy() {
            this.touch.destroy();
            this.mouse.destroy();
        }
    });
    function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
            this.primaryTouch = eventData.changedPointers[0].identifier;
            setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) setLastTouch.call(this, eventData);
    }
    function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];
        if (touch.identifier === this.primaryTouch) {
            var lastTouch = {
                x: touch.clientX,
                y: touch.clientY
            };
            this.lastTouches.push(lastTouch);
            var lts = this.lastTouches;
            var removeLastTouch = function() {
                var i = lts.indexOf(lastTouch);
                if (i > -1) lts.splice(i, 1);
            };
            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
    }
    function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
        for(var i = 0; i < this.lastTouches.length; i++){
            var t = this.lastTouches[i];
            var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) return true;
        }
        return false;
    }
    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
    // magical touchAction value
    var TOUCH_ACTION_COMPUTE = "compute";
    var TOUCH_ACTION_AUTO = "auto";
    var TOUCH_ACTION_MANIPULATION = "manipulation"; // not implemented
    var TOUCH_ACTION_NONE = "none";
    var TOUCH_ACTION_PAN_X = "pan-x";
    var TOUCH_ACTION_PAN_Y = "pan-y";
    var TOUCH_ACTION_MAP = getTouchActionProps();
    /**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */ function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
    }
    TouchAction.prototype = {
        /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */ set: function(value) {
            // find out the touch-action by the event handlers
            if (value == TOUCH_ACTION_COMPUTE) value = this.compute();
            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
            this.actions = value.toLowerCase().trim();
        },
        /**
     * just re-set the touchAction value
     */ update: function() {
            this.set(this.manager.options.touchAction);
        },
        /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */ compute: function() {
            var actions = [];
            each(this.manager.recognizers, function(recognizer) {
                if (boolOrFn(recognizer.options.enable, [
                    recognizer
                ])) actions = actions.concat(recognizer.getTouchAction());
            });
            return cleanTouchActions(actions.join(" "));
        },
        /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */ preventDefaults: function(input) {
            var srcEvent = input.srcEvent;
            var direction = input.offsetDirection;
            // if the touch action did prevented once this session
            if (this.manager.session.prevented) {
                srcEvent.preventDefault();
                return;
            }
            var actions = this.actions;
            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
            if (hasNone) {
                //do not prevent defaults if this is a tap gesture
                var isTapPointer = input.pointers.length === 1;
                var isTapMovement = input.distance < 2;
                var isTapTouchTime = input.deltaTime < 250;
                if (isTapPointer && isTapMovement && isTapTouchTime) return;
            }
            if (hasPanX && hasPanY) // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) return this.preventSrc(srcEvent);
        },
        /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */ preventSrc: function(srcEvent) {
            this.manager.session.prevented = true;
            srcEvent.preventDefault();
        }
    };
    /**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */ function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) return TOUCH_ACTION_NONE;
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning
        if (hasPanX && hasPanY) return TOUCH_ACTION_NONE;
        // pan-x OR pan-y
        if (hasPanX || hasPanY) return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        // manipulation
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) return TOUCH_ACTION_MANIPULATION;
        return TOUCH_ACTION_AUTO;
    }
    function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) return false;
        var touchMap = {};
        var cssSupports = window1.CSS && window1.CSS.supports;
        [
            "auto",
            "manipulation",
            "pan-y",
            "pan-x",
            "pan-x pan-y",
            "none"
        ].forEach(function(val) {
            // If css.supports is not supported but there is native touch-action assume it supports
            // all values. This is the case for IE 10 and 11.
            touchMap[val] = cssSupports ? window1.CSS.supports("touch-action", val) : true;
        });
        return touchMap;
    }
    /**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */ var STATE_POSSIBLE = 1;
    var STATE_BEGAN = 2;
    var STATE_CHANGED = 4;
    var STATE_ENDED = 8;
    var STATE_RECOGNIZED = STATE_ENDED;
    var STATE_CANCELLED = 16;
    var STATE_FAILED = 32;
    /**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */ function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null;
        // default is enable true
        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
    }
    Recognizer.prototype = {
        /**
     * @virtual
     * @type {Object}
     */ defaults: {},
        /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */ set: function(options) {
            assign(this.options, options);
            // also update the touchAction, in case something changed about the directions/enabled state
            this.manager && this.manager.touchAction.update();
            return this;
        },
        /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ recognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) return this;
            var simultaneous = this.simultaneous;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (!simultaneous[otherRecognizer.id]) {
                simultaneous[otherRecognizer.id] = otherRecognizer;
                otherRecognizer.recognizeWith(this);
            }
            return this;
        },
        /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRecognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            delete this.simultaneous[otherRecognizer.id];
            return this;
        },
        /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ requireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "requireFailure", this)) return this;
            var requireFail = this.requireFail;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (inArray(requireFail, otherRecognizer) === -1) {
                requireFail.push(otherRecognizer);
                otherRecognizer.requireFailure(this);
            }
            return this;
        },
        /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRequireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            var index = inArray(this.requireFail, otherRecognizer);
            if (index > -1) this.requireFail.splice(index, 1);
            return this;
        },
        /**
     * has require failures boolean
     * @returns {boolean}
     */ hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */ canRecognizeWith: function(otherRecognizer) {
            return !!this.simultaneous[otherRecognizer.id];
        },
        /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */ emit: function(input) {
            var self1 = this;
            var state = this.state;
            function emit(event) {
                self1.manager.emit(event, input);
            }
            // 'panstart' and 'panmove'
            if (state < STATE_ENDED) emit(self1.options.event + stateStr(state));
            emit(self1.options.event); // simple 'eventName' events
            if (input.additionalEvent) emit(input.additionalEvent);
            // panend and pancancel
            if (state >= STATE_ENDED) emit(self1.options.event + stateStr(state));
        },
        /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */ tryEmit: function(input) {
            if (this.canEmit()) return this.emit(input);
            // it's failing anyway
            this.state = STATE_FAILED;
        },
        /**
     * can we emit?
     * @returns {boolean}
     */ canEmit: function() {
            var i = 0;
            while(i < this.requireFail.length){
                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) return false;
                i++;
            }
            return true;
        },
        /**
     * update the recognizer
     * @param {Object} inputData
     */ recognize: function(inputData) {
            // make a new copy of the inputData
            // so we can change the inputData without messing up the other recognizers
            var inputDataClone = assign({}, inputData);
            // is is enabled and allow recognizing?
            if (!boolOrFn(this.options.enable, [
                this,
                inputDataClone
            ])) {
                this.reset();
                this.state = STATE_FAILED;
                return;
            }
            // reset when we've reached the end
            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) this.state = STATE_POSSIBLE;
            this.state = this.process(inputDataClone);
            // the recognizer has recognized a gesture
            // so trigger an event
            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) this.tryEmit(inputDataClone);
        },
        /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */ process: function(inputData) {},
        /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */ getTouchAction: function() {},
        /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */ reset: function() {}
    };
    /**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */ function stateStr(state) {
        if (state & STATE_CANCELLED) return "cancel";
        else if (state & STATE_ENDED) return "end";
        else if (state & STATE_CHANGED) return "move";
        else if (state & STATE_BEGAN) return "start";
        return "";
    }
    /**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */ function directionStr(direction) {
        if (direction == DIRECTION_DOWN) return "down";
        else if (direction == DIRECTION_UP) return "up";
        else if (direction == DIRECTION_LEFT) return "left";
        else if (direction == DIRECTION_RIGHT) return "right";
        return "";
    }
    /**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */ function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;
        if (manager) return manager.get(otherRecognizer);
        return otherRecognizer;
    }
    /**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */ function AttrRecognizer() {
        Recognizer.apply(this, arguments);
    }
    inherit(AttrRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof AttrRecognizer
     */ defaults: {
            /**
         * @type {Number}
         * @default 1
         */ pointers: 1
        },
        /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */ attrTest: function(input) {
            var optionPointers = this.options.pointers;
            return optionPointers === 0 || input.pointers.length === optionPointers;
        },
        /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */ process: function(input) {
            var state = this.state;
            var eventType = input.eventType;
            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
            var isValid = this.attrTest(input);
            // on cancel input and we've recognized before, return STATE_CANCELLED
            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) return state | STATE_CANCELLED;
            else if (isRecognized || isValid) {
                if (eventType & INPUT_END) return state | STATE_ENDED;
                else if (!(state & STATE_BEGAN)) return STATE_BEGAN;
                return state | STATE_CHANGED;
            }
            return STATE_FAILED;
        }
    });
    /**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
    }
    inherit(PanRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PanRecognizer
     */ defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: DIRECTION_ALL
        },
        getTouchAction: function() {
            var direction = this.options.direction;
            var actions = [];
            if (direction & DIRECTION_HORIZONTAL) actions.push(TOUCH_ACTION_PAN_Y);
            if (direction & DIRECTION_VERTICAL) actions.push(TOUCH_ACTION_PAN_X);
            return actions;
        },
        directionTest: function(input) {
            var options = this.options;
            var hasMoved = true;
            var distance = input.distance;
            var direction = input.direction;
            var x = input.deltaX;
            var y = input.deltaY;
            // lock to axis?
            if (!(direction & options.direction)) {
                if (options.direction & DIRECTION_HORIZONTAL) {
                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                    hasMoved = x != this.pX;
                    distance = Math.abs(input.deltaX);
                } else {
                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                    hasMoved = y != this.pY;
                    distance = Math.abs(input.deltaY);
                }
            }
            input.direction = direction;
            return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function(input) {
            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function(input) {
            this.pX = input.deltaX;
            this.pY = input.deltaY;
            var direction = directionStr(input.direction);
            if (direction) input.additionalEvent = this.options.event + direction;
            this._super.emit.call(this, input);
        }
    });
    /**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */ function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(PinchRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function(input) {
            if (input.scale !== 1) {
                var inOut = input.scale < 1 ? "in" : "out";
                input.additionalEvent = this.options.event + inOut;
            }
            this._super.emit.call(this, input);
        }
    });
    /**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */ function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
    }
    inherit(PressRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PressRecognizer
     */ defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9 // a minimal movement is ok, but keep it low
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_AUTO
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTime = input.deltaTime > options.time;
            this._input = input;
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) this.reset();
            else if (input.eventType & INPUT_START) {
                this.reset();
                this._timer = setTimeoutContext(function() {
                    this.state = STATE_RECOGNIZED;
                    this.tryEmit();
                }, options.time, this);
            } else if (input.eventType & INPUT_END) return STATE_RECOGNIZED;
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(input) {
            if (this.state !== STATE_RECOGNIZED) return;
            if (input && input.eventType & INPUT_END) this.manager.emit(this.options.event + "up", input);
            else {
                this._input.timeStamp = now();
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */ function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(RotateRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof RotateRecognizer
     */ defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
    });
    /**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(SwipeRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof SwipeRecognizer
     */ defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
            pointers: 1
        },
        getTouchAction: function() {
            return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function(input) {
            var direction = this.options.direction;
            var velocity;
            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) velocity = input.overallVelocity;
            else if (direction & DIRECTION_HORIZONTAL) velocity = input.overallVelocityX;
            else if (direction & DIRECTION_VERTICAL) velocity = input.overallVelocityY;
            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function(input) {
            var direction = directionStr(input.offsetDirection);
            if (direction) this.manager.emit(this.options.event + direction, input);
            this.manager.emit(this.options.event, input);
        }
    });
    /**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */ function TapRecognizer() {
        Recognizer.apply(this, arguments);
        // previous time and center,
        // used for tap counting
        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
    }
    inherit(TapRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10 // a multi-tap can be a bit off the initial position
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_MANIPULATION
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTouchTime = input.deltaTime < options.time;
            this.reset();
            if (input.eventType & INPUT_START && this.count === 0) return this.failTimeout();
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (validMovement && validTouchTime && validPointers) {
                if (input.eventType != INPUT_END) return this.failTimeout();
                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
                this.pTime = input.timeStamp;
                this.pCenter = input.center;
                if (!validMultiTap || !validInterval) this.count = 1;
                else this.count += 1;
                this._input = input;
                // if tap count matches we have recognized it,
                // else it has began recognizing...
                var tapCount = this.count % options.taps;
                if (tapCount === 0) {
                    // no failing requirements, immediately trigger the tap event
                    // or wait as long as the multitap interval to trigger
                    if (!this.hasRequireFailures()) return STATE_RECOGNIZED;
                    else {
                        this._timer = setTimeoutContext(function() {
                            this.state = STATE_RECOGNIZED;
                            this.tryEmit();
                        }, options.interval, this);
                        return STATE_BEGAN;
                    }
                }
            }
            return STATE_FAILED;
        },
        failTimeout: function() {
            this._timer = setTimeoutContext(function() {
                this.state = STATE_FAILED;
            }, this.options.interval, this);
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            if (this.state == STATE_RECOGNIZED) {
                this._input.tapCount = this.count;
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
    }
    /**
 * @const {string}
 */ Hammer.VERSION = "2.0.7";
    /**
 * default settings
 * @namespace
 */ Hammer.defaults = {
        /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */ domEvents: false,
        /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */ touchAction: TOUCH_ACTION_COMPUTE,
        /**
     * @type {Boolean}
     * @default true
     */ enable: true,
        /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */ inputTarget: null,
        /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */ inputClass: null,
        /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */ preset: [
            // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
            [
                RotateRecognizer,
                {
                    enable: false
                }
            ],
            [
                PinchRecognizer,
                {
                    enable: false
                },
                [
                    "rotate"
                ]
            ],
            [
                SwipeRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                }
            ],
            [
                PanRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                },
                [
                    "swipe"
                ]
            ],
            [
                TapRecognizer
            ],
            [
                TapRecognizer,
                {
                    event: "doubletap",
                    taps: 2
                },
                [
                    "tap"
                ]
            ],
            [
                PressRecognizer
            ]
        ],
        /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */ cssProps: {
            /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userSelect: "none",
            /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */ touchSelect: "none",
            /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */ touchCallout: "none",
            /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */ contentZooming: "none",
            /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userDrag: "none",
            /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */ tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var STOP = 1;
    var FORCED_STOP = 2;
    /**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function(item) {
            var recognizer = this.add(new item[0](item[1]));
            item[2] && recognizer.recognizeWith(item[2]);
            item[3] && recognizer.requireFailure(item[3]);
        }, this);
    }
    Manager.prototype = {
        /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */ set: function(options) {
            assign(this.options, options);
            // Options that need a little more setup
            if (options.touchAction) this.touchAction.update();
            if (options.inputTarget) {
                // Clean up existing event listeners and reinitialize
                this.input.destroy();
                this.input.target = options.inputTarget;
                this.input.init();
            }
            return this;
        },
        /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */ stop: function(force) {
            this.session.stopped = force ? FORCED_STOP : STOP;
        },
        /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */ recognize: function(inputData) {
            var session = this.session;
            if (session.stopped) return;
            // run the touch-action polyfill
            this.touchAction.preventDefaults(inputData);
            var recognizer;
            var recognizers = this.recognizers;
            // this holds the recognizer that is being recognized.
            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
            // if no recognizer is detecting a thing, it is set to `null`
            var curRecognizer = session.curRecognizer;
            // reset when the last recognizer is recognized
            // or when we're in a new session
            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) curRecognizer = session.curRecognizer = null;
            var i = 0;
            while(i < recognizers.length){
                recognizer = recognizers[i];
                // find out if we are allowed try to recognize the input for this one.
                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
                //      that is being recognized.
                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
                //      this can be setup with the `recognizeWith()` method on the recognizer.
                if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || // 2
                recognizer.canRecognizeWith(curRecognizer))) recognizer.recognize(inputData);
                else recognizer.reset();
                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
                // current active recognizer. but only if we don't already have an active recognizer
                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) curRecognizer = session.curRecognizer = recognizer;
                i++;
            }
        },
        /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */ get: function(recognizer) {
            if (recognizer instanceof Recognizer) return recognizer;
            var recognizers = this.recognizers;
            for(var i = 0; i < recognizers.length; i++){
                if (recognizers[i].options.event == recognizer) return recognizers[i];
            }
            return null;
        },
        /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */ add: function(recognizer) {
            if (invokeArrayArg(recognizer, "add", this)) return this;
            // remove existing
            var existing = this.get(recognizer.options.event);
            if (existing) this.remove(existing);
            this.recognizers.push(recognizer);
            recognizer.manager = this;
            this.touchAction.update();
            return recognizer;
        },
        /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */ remove: function(recognizer) {
            if (invokeArrayArg(recognizer, "remove", this)) return this;
            recognizer = this.get(recognizer);
            // let's make sure this recognizer exists
            if (recognizer) {
                var recognizers = this.recognizers;
                var index = inArray(recognizers, recognizer);
                if (index !== -1) {
                    recognizers.splice(index, 1);
                    this.touchAction.update();
                }
            }
            return this;
        },
        /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */ on: function(events, handler) {
            if (events === undefined) return;
            if (handler === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                handlers[event] = handlers[event] || [];
                handlers[event].push(handler);
            });
            return this;
        },
        /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */ off: function(events, handler) {
            if (events === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                if (!handler) delete handlers[event];
                else handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            });
            return this;
        },
        /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */ emit: function(event, data) {
            // we also want to trigger dom events
            if (this.options.domEvents) triggerDomEvent(event, data);
            // no handlers, so skip it all
            var handlers = this.handlers[event] && this.handlers[event].slice();
            if (!handlers || !handlers.length) return;
            data.type = event;
            data.preventDefault = function() {
                data.srcEvent.preventDefault();
            };
            var i = 0;
            while(i < handlers.length){
                handlers[i](data);
                i++;
            }
        },
        /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */ destroy: function() {
            this.element && toggleCssProps(this, false);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null;
        }
    };
    /**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */ function toggleCssProps(manager, add) {
        var element = manager.element;
        if (!element.style) return;
        var prop;
        each(manager.options.cssProps, function(value, name) {
            prop = prefixed(element.style, name);
            if (add) {
                manager.oldCssProps[prop] = element.style[prop];
                element.style[prop] = value;
            } else element.style[prop] = manager.oldCssProps[prop] || "";
        });
        if (!add) manager.oldCssProps = {};
    }
    /**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */ function triggerDomEvent(event, data) {
        var gestureEvent = document1.createEvent("Event");
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
    }
    assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
    });
    // this prevents errors when Hammer is loaded in the presence of an AMD
    //  style loader but by script tag, not by the loader.
    var freeGlobal = typeof window1 !== "undefined" ? window1 : typeof self !== "undefined" ? self : {}; // jshint ignore:line
    freeGlobal.Hammer = Hammer;
    if (typeof define === "function" && define.amd) define(function() {
        return Hammer;
    });
    else if (0, module.exports) module.exports = Hammer;
    else window1[exportName] = Hammer;
})(window, document, "Hammer");

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire7b01")

//# sourceMappingURL=index.b8fca702.js.map
