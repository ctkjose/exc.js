!function ( b, c, d){
	
	jq = {};
	
	window.$ =  function (a){
		return jq.$(a);
	}
	
	jq.$ = function (a) {
		if (this.fn.isString(a) && /^\</.test(a)) {
			return this.i(this.fn.string2Node(a));
		}
		
		return /^f/.test(typeof a) ? /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a) : this.i(a);
	}
	jq.fn = {
		length: 0,
		isArray: (Array.isArray || function(object){ return object instanceof Array }),
		isString: function(obj){ return typeof obj == 'string'},
		string2Node : function(s){
			if (!this.isString(s)) return b;
			var f = document.createDocumentFragment(), ch;
			console.log(this);
	
			var t = document.createElement('div');
			t.innerHTML = s;
			while ((ch = t.firstChild)) { f.appendChild(ch); }
			return f;
		},
		/*
		* extend method
		* merge contents of two or more objects together into the first object
		* a = the object to extend
		* b = the this value for that function
		*/  
		extend: function(a) {
		   var k = arguments, l = null;
		   for( i = 1; i < k.length; i++ ) {
			 if ( (l = k[ i ]) ) {
			   for (j in l){a[j] = l[j]};
			 }
		   }
		   return a;
		},
		 /*
		* on method
		* a = string event type i.e 'click'
		* b = function
		* return this
		*/
		on: function (a, b) {
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
		* each method
		* use native forEach to iterate collection
		* a = the function to call on each iteration  function(index, element, [aditional_arguments...])
		* [aditional_arguments...] = additional parameters will be passed to the function given in a
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
		is: function( s ) {
			a = this[ 0 ];
			j = a && ( a.matches || a['webkitMatchesSelector'] || a['mozMatchesSelector'] || a['msMatchesSelector'] );
			return !!j && j.call( a, s );
		},
		hasClass: function(a) {
			return this[0].classList.contains(a);
		},
		text: function(a) {
			return a === []._ ? this[0].textContent : this.each(function() {
				this.textContent = a;
			});
		},
		html: function(a) {
			return a === []._ ? this[0].innerHTML : this.each(function() {
				this.innerHTML = a;
			});
		},
		hide: function() {
			return this.each(function() {
				this.style.display = 'none';
			});
		},
		show: function() {
			return this.each(function() {
				this.style.display = '';
			});
		},
		attr: function(a, v) {
			return v === []._ ? this[0].getAttribute(a) : this.each(function() {
				this.setAttribute(a, v);
			});
		},
		removeAttr: function(a) {
			return this.each(function() {
				this.removeAttribute(a);
			});
		},
		hasAttr: function(a) {
			return this[0].hasAttribute(a);
		},
		
		first: function() {
			return $(this[0]);
		},
		last: function() {
			return $(this[this.length - 1]);
		},

		//dom traversing
		parent: function() {
			return (this.length < 2) ? $(this[0].parentNode): [];
		},
		
		//dom manipulation
		css: function(a, b) {
			if (typeof(a) === 'object') {
				for(var p in a) {
					this.each(function() {
						this.style[p] = a[p];
					});
				}
				return this;
			} else {
				return b === []._ ? this[0].style[a] : this.each(function() {
					this.style[a] = b;
				});
			}
		},
		
		remove: function() {
			return this.each(function() {
				this.parentNode.removeChild(b);
			});
		},
		/*Insert content, specified by the parameter, to the end of each element in the set of matched elements.*/
		append: function(a) {
			this.each( function(i, e) {
				if (jq.fn.isArray(a)){
					var v = document.createDocumentFragment();
					a.forEach(function(e){ v.appendChild(e); });
					this.appendChild(v);
				}else if(jq.fn.isString(a)){
					this.appendChild( jq.fn.string2Node(a) );
				}else{
					this.appendChild(a);
				}
			});	
			return this;
		},
		
		/*Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.*/
		prepend: function(a) {
			this.each( function(i, e) {
				var t = this.firstChild;
				//t = t.firstChild;
				
				console.log(this.parentNode);
				console.log(t);
				
				if (jq.fn.isArray(a)){
					var v = document.createDocumentFragment();
					a.forEach(function(e){ v.appendChild(e); });
					this.insertBefore(v, t);
				}else if(jq.fn.isString(a)){
					this.insertBefore( jq.fn.string2Node(a), t );
				}else{
					this.insertBefore(a, t);
				}
			});	
			return this;
		},
		/*Insert content, specified by the parameter, before each element in the set of matched elements.*/
		before: function(a) {
			this.each( function(i, e) {
				if (jq.fn.isArray(a)){
					var v = document.createDocumentFragment();
					a.forEach(function(e){ v.appendChild(e); });
					this.insertAdjacentHTML('beforebegin', v);
				}else if(jq.fn.isString(a)){
					this.insertAdjacentHTML('beforebegin', jq.fn.string2Node(a) );
				}else{
					this.insertAdjacentHTML('beforebegin',a);
				}
			});	
			return this;
		},
		/* Insert content, specified by the parameter, after each element in the set of matched elements. */
		after: function(a) {
			this.each( function(i, e) {
				if (jq.fn.isArray(a)){
					var v = document.createDocumentFragment();
					a.forEach(function(e){ v.appendChild(e); });
					this.insertAdjacentHTML('afterend', v);
				}else if(jq.fn.isString(a)){
					this.insertAdjacentHTML('afterend', jq.fn.string2Node(a) );
				}else{
					this.insertAdjacentHTML('afterend',a);
				}
			});	
			return this;
		},
	};
	
	jq.i = function (a) {
		var o = [];
		o[d] = Array.prototype;
		Array.prototype.push.apply(o, a && a.nodeType ? [a] : ('' + a === a ? b.querySelectorAll(a) : []) );
		this.fn.extend(o[d],this.fn);
		return o
	};

	

	
	return this;
}(document, [], 'prototype');


