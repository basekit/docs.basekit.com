;(function() {

  // helpers
  var __bind = function(fn, me) { return function() { return fn.apply(me, arguments); } },
      addEventListener = function(el, eventName, eventHandler) {
        if (el.addEventListener) {
          el.addEventListener(eventName, eventHandler);
        } else {
          el.attachEvent('on' + eventName, function() {
            eventHandler.call(el);
          });
        }
      },
      addClass = function(el, cssClass) {
        if (el.classList) {
          el.classList.add(cssClass);
        } else {
          el.className += ' ' + cssClass;
        }
      },
      removeClass = function(el, cssClass) {
        if (el.classList) {
          el.classList.remove(cssClass);
        } else {
          el.className = el.className.replace(new RegExp('(^|\\b)' + cssClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      },
      getPos = function (el) {
          // http://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
          for (var lx=0, ly=0;
               el != null;
               lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
          return {x: lx,y: ly};
      }
  ;

  // classes
  var StickyElement,
      StickyController,
      stickyClassName;

  stickyClassName = 'position-sticky';

  // the function to expose to the window for people to call
  var PositionSticky;

  StickyController = (function() {
    function StickyController(stickyElements) {
      this.update = __bind(this.update, this);

      // an array of all the sticky elements
      this.stickyElements = stickyElements;

      this.init();
      return this;
    }

    StickyController.prototype.init = function() {
      this.setup();
      this.events();
    };

    StickyController.prototype.setup = function() {
      for(var i = 0; i < this.stickyElements.length; i++) {
        var stickyElement = this.stickyElements[i];
        var nextStickyElement = this.stickyElements[i+1];
        stickyElement.setZindex(i);
      }
    };

    StickyController.prototype.events = function() {
      addEventListener(window, 'scroll', this.update);
      addEventListener(window, 'resize', this.update);
    };

    StickyController.prototype.update = function(e) {
      var scrollTop = this.getScrollTop();


      for(var i = 0; i < this.stickyElements.length; i++) {
        var stickyElement = this.stickyElements[i];
        var nextStickyElement = this.stickyElements[i+1];
        stickyElement.update();


        if (nextStickyElement) {
          if ( (stickyElement.position + stickyElement.height) === nextStickyElement.position ) {
            continue;
          }
        }

        // when the sticky element reaches the top
        if ( ((stickyElement.stuck === false) && (scrollTop >= stickyElement.position)) && (scrollTop <= stickyElement.limit) ) {
          stickyElement.stick();
        } else if ( (stickyElement.frozen !== true) && (scrollTop >= stickyElement.limit ) ) {
          stickyElement.freeze();
        } else if ( (stickyElement.frozen === true) && (scrollTop <= stickyElement.limit ) ) {
          stickyElement.stick();
        } else if ( (stickyElement.stuck === true) && (scrollTop <= stickyElement.position) ) {
          stickyElement.unstick();
        }
      }
    };

    StickyController.prototype.getScrollTop = function() {
      // hat tip to make getting the scrolled position more x-browser
      // https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
      return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    };

    return StickyController;
  })();



  StickyElement = (function() {
    function StickyElement(element) {
      // the element that wants to be made position: sticky
      this.element = element;
      // reference for the dummy element
      this.dummyElement = null;
      // how far the element is down the view
      this.position = null;
      // where the sticking should stop
      this.limit = null;
      // sticky state
      this.stuck = false;
      // frozen state
      this.frozen = false;

      this.zIndex = 0;

      this.init();
      return this;
    }

    StickyElement.prototype.init = function() {
      this.createDummyElement()
      this.insertDummyElement();
      this.getOffset();
      this.getLimit();
    };

    StickyElement.prototype.update = function() {
      // make the fixed bar responsive to the dummy element
      if (this.stuck) {
        this.element.style.width = this.dummyElement.offsetWidth + "px";
      }

      // if the element isn't stuck (fixed at the top of the screen)
      // keep track of the offset incase page layout changes
      if (!this.stuck) {
        this.getOffset();
      }

      // the limit should be safe to get as reflow shouldn't affect this *crosses fingers*
      this.getLimit();

      // update the frozen position if frozen incase layout changes
      if (this.frozen === true) {
        this.freeze();
      }
    };

    StickyElement.prototype.createDummyElement = function() {
      var dummyElement;
      // create a new element
      dummyElement = document.createElement('div');

      this.height = this.element.offsetHeight;

      // set the width the height off the original element
      dummyElement.style.height = "0px";

      return this.dummyElement = dummyElement;
    };

    StickyElement.prototype.insertDummyElement = function() {
      // insert the dummy element after the original element
      return this.element.parentNode.insertBefore(this.dummyElement, this.element.nextSibling);
    };

    StickyElement.prototype.getOffset = function() {
      // return the original elements offset from the top of the page
      return this.position = this.element.offsetTop;
    };

    StickyElement.prototype.getLimit = function() {
      // returns the limit for which the element should stop sticking
      return this.limit = (this.element.parentNode.offsetTop + this.element.parentNode.offsetHeight) - this.element.offsetHeight;
    };

    StickyElement.prototype.setZindex = function(index) {
      this.element.style.position = "relative";
      return this.zIndex = index + 9000;
    };

    StickyElement.prototype.hideDummyElement = function() {
      return this.dummyElement.style.height = "0px";
    };

    StickyElement.prototype.showDummyElement = function() {
      return this.dummyElement.style.height = this.height + "px";
    };

    StickyElement.prototype.stick = function() {
      this.stuck = true;
      this.frozen = false;

      this.showDummyElement();

      this.element.style.position = "fixed";
      this.element.style.top = "0";
      this.element.style.left = getPos(this.element).x;
      this.element.style.width = this.dummyElement.offsetWidth + "px";
      this.element.style.zIndex = this.zIndex;
      addClass(this.element, stickyClassName);
    };

    StickyElement.prototype.unstick = function() {
      this.stuck = false;
      this.frozen = false;

      this.hideDummyElement();
      this.element.style.position = "relative";
      this.element.style.top = null;
      this.element.style.left = null;
      this.element.style.width = null;
      this.element.style.zIndex = null;
      removeClass(this.element, stickyClassName);
    };

    StickyElement.prototype.freeze = function() {
      this.showDummyElement();

      this.frozen = true;
      this.element.style.position = "absolute";
      this.element.style.top = this.limit + "px";
      this.element.style.left = getPos(this.element).x;
      this.element.style.width = this.dummyElement.offsetWidth + "px";
      this.element.style.zIndex = null;
    };

    return StickyElement;
  })();


  // exposed function to call the code
  PositionSticky = function(elements) {
    var stickyElements = [];

    for(var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var stickyElement = new StickyElement(element);
      stickyElements.push(stickyElement);
    }

    new StickyController(stickyElements);
  };

  window.PositionSticky = PositionSticky;


  // register as a jquery plugin
  if (typeof jQuery !== 'undefined') {
    (function($) {

      $.fn.positionSticky = function() {
        if (this.length === 0) return;

        var elements = [];

        this.each(function(i, el) {
          elements.push(el);
        });

        PositionSticky(elements);

        return this;
      };

    })(jQuery);
  }

})();
