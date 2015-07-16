/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2014 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
!function (b, c, d, e) {

  /*
   * init function (internal use)
   * a = selector, dom element or function
   */
  function i(a) {
    c.push.apply(this, a && a.nodeType ? [a] : '' + a === a ? b.querySelectorAll(a) : e)
  }

  /*
   * $ main function
   * a = css selector, dom object, or function
   * http://www.dustindiaz.com/smallest-domready-ever
   * returns instance or executes function on ready
   */
  $ = function (a) {
    return /^f/.test(typeof a) ? /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a) : new i(a)
  }

  // set ki prototype
  fn = {

    // default length
    length: 0,
    
    //helpers
    isArray: (Array.isArray || function(object){ return object instanceof Array }),
    isString: function(obj){
      return typeof obj == 'string'
    },
    
    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on: function (a, b) {
      return this;
      return this.each(function () {
        this.addEventListener(a, b)
      })
    },

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off: function (a, b) {
      return this.each(function () {
        this.removeEventListener(a, b)
      })
    },
    /*
     * is method
     * s = a selector
     * return true if matches selector
     */
    is: function( s ) {
	  a = this[ 0 ];
	  j = a && ( a.matches || a['webkitMatchesSelector'] || a['mozMatchesSelector'] || a['msMatchesSelector'] );
	  return !!j && j.call( a, s );
	},
    /*
     * extend method
     * merge contents of two or more objects together into the first object
     * a = the object to extend
     * b = the this value for that function
     */  
    extend: function(a) {
		var k = arguments;               
		for( i = 1; i < k.length; i++ ) {
          if ( l = k[ i ] ) {
            for (j in l){a[j] = l[j]};
          }
		}
		return a;
	},
    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call on each iteration
     * b = the this value for that function
     */
    each: function (a) {
      var p = [0, null];
      for( i = 1; i < arguments.length; i++ ) {
        p.push( arguments[ i ] );
      }
      
      for( i = 0; i < this.length; i++ ) {
        p[0] = i
        p[1] = this[i];   
        a.apply(this[i], p);
      }
      return this
    },

    append: function(a) {
      this.each( function(i, e, a) {
        console.log(arguments);
        var f = document.createDocumentFragment(), ch;
        console.log(this);
        if( $.isString(a) ){
          var t = document.createElement('div');
          t.innerHTML = a;
          while (ch = t.firstChild) { f.appendChild(ch); }
        }else if ($.isArray(a)) {
          a.forEach(function(e){
            f.appendChild(e);
          });
        }else{
          f.appendChild(a);
        }
        b.appendChild(f);
      }, a);
      return this;
    },
    
    hasClass: function(a) {
      return this[0].classList.contains(a);
    },
    
    
    
    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: c.splice
  }
  
  
  $[d] = i[d] = fn;
}(document, [], 'prototype');
