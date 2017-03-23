;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-webtubiaoku03" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M697.912889 551.310222c156.728889 70.997333 266.524444 228.352 269.425778 412.501333 0.113778 1.536 0.910222 2.787556 0.910222 4.380444l0.398222 4.778667c0 28.16-22.584889 51.029333-50.517333 51.029333-27.875556 0-50.517333-22.869333-50.517333-51.029333l-0.455111-4.778667c0-0.398222 0.227556-0.682667 0.227556-1.080889-2.616889-190.805333-152.462222-344.576-339.854222-352.426667-4.949333 0.227556-9.614222 1.536-14.563556 1.536-5.063111 0-9.728-1.308444-14.677333-1.536-189.098667 7.907556-340.252444 164.295111-340.252444 357.432889 0 0.056889 0 0.113778 0 0.227556L156.956444 972.344889l0.056889 0.682667C157.070222 1001.130667 134.371556 1024 106.552889 1024c-27.932444 0-50.517333-22.869333-50.517333-51.029333L55.466667 968.192c0-3.697778 1.365333-6.997333 2.104889-10.524444 5.347556-181.816889 114.403556-336.839111 269.767111-406.812444C255.374222 494.535111 185.457778 420.522667 185.457778 321.308444 185.457778 151.153778 344.689778 0 512.967111 0c168.220444 0 304.583111 137.955556 304.583111 308.053333C817.550222 407.495111 770.218667 494.990222 697.912889 551.310222L697.912889 551.310222zM512 102.456889c-111.843556 0-202.581333 91.704889-202.581333 204.913778s90.737778 204.913778 202.581333 204.913778c112.014222 0 202.752-91.704889 202.752-204.913778C714.752 194.161778 624.014222 102.456889 512 102.456889L512 102.456889z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M869.414249 429.206342h-29.191856v-47.891753c0-85.681428-33.532721-165.531034-94.420463-224.838792C685.433004 97.673553 604.742241 65.290005 518.594185 65.290005S351.755366 97.673553 291.387463 156.474774c-60.888765 59.307757-94.421486 139.157363-94.421486 224.838791v47.891754H154.584728c-27.473725 0-49.824779 22.351054-49.824779 49.824779V882.410238c0 42.071188 34.228569 76.299757 76.299757 76.299757h661.879565c42.071188 0 76.299757-34.228569 76.299757-76.299757V479.031121c0-27.473725-22.350031-49.824779-49.824779-49.824779z m-625.74867-47.891753c0-151.023622 120.763434-269.324982 274.928606-269.324982s274.92963 118.30136 274.92963 269.324982v47.891753H243.665579v-47.891753zM872.54045 882.410238c0 16.321734-13.278421 29.600155-29.600156 29.600155H181.059706c-16.321734 0-29.600155-13.278421-29.600156-29.600155V479.031121a3.12927 3.12927 0 0 1 3.126201-3.125177H869.415272a3.12927 3.12927 0 0 1 3.126201 3.125177V882.410238z"  ></path>' +
    '' +
    '<path d="M502.767731 808.711725c-14.622022 0-26.474978-11.852956-26.474977-26.474978V623.384833c0-14.622022 11.852956-26.474978 26.474977-26.474978s26.474978 11.852956 26.474978 26.474978v158.850891c0 14.622022-11.853979 26.476001-26.474978 26.476001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)