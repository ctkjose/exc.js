# exc.js
test

exc.js is a small jQuery-like API JavaScript library inspired by ki.js and zepto.js. The goal is to provide a small footprint, be as close as possible to native javascript while providing a basic compatibility with jquery.

### Browser support

[exc.js](https://github.com/ctkjose/exc.js) **(recommended)** version is supported by the following browsers: IE9+, Chrome 6+, Safari 5+, Firefox 6+, Opera 11.5+.


## Getting started with exc.js

Include the exc.js script file in your header.

```html
<script src="exc.js"></script>
```

You can run code as soon as the document is ready (when is safe to manipulate its contents) using exc as in:
```javascript
$( function() {

    alert( "welcome" );
 
} );
```

This can also be done as:
```javascript
function initialize_my_page() {
    alert( "welcome" );
}

$(initialize_my_page);
```

This jquery syntax is also available:
```javascript
$(document).ready(initialize_my_page);
```





### What can you pass to most `exc.js` functions and methods.

Must functions that operate on DOM elements accept a selector as defined by the [DOM Sepcification](http://dev.w3.org/2006/webapi/selectors-api2/) and supported by most modern browsers.

This documentation will describe selector arguments as `"selector"`. For example: `.append("selector")`.

You can also pass DOM nodes as provided by native JavaScript functions. The documentation will describe an argument that accepts a node as `elementNode`. For example: `.append(elementNode)`.

A node can also be represented as an instance of an `exc` object. The documentation will describe an argument that accepts an `exc` instance as `exc`. For example: `.append(exc)`.

Some functions allows to pass a string with valid HTML code. The documentation will describe an argument that accepts a valid HTML string as `"html"`. For example: `.append("html")`.

In many instances the documentation will use a pipe character to indicate when more than one type is allowed for example `["selector"|elementNode|"html"|exc]` as in `.append(["selector"|elementNode|"html"|exc])`.

A string argument is represented in the documentation as `"string"`, an object as `obj`, an array as `array`, a boolean value is `bool` and numbers as `number`.

### CSS Selectors
Use any CSS selector that exists to get elements from the DOM.

```javascript
$('#anID');
$('.class');
$('div.class');
$('p:nth-last-of-type(2)');
$('[attribute|=value]');
$('p:not(.note)');
$('p:empty');
```

[See a list of all CSS selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)

## What can I do with exc.js?


### Events
Yes, events with the known `.on()` and `.off()` methods

```html
<button>exc.js</button>
```
```javascript
$(function () {
  // ok now that the dom is ready i would like to add some events
  var alertMyName = function () {
    alert('My name is ' + this.textContent); // will allert 'ki.js'
  };

  $('button').on('click', alertMyName);
  // to turn it off just use .off()
  //$('button').off('click', alertMyName);
});
```
You can add any JavaScript event even touch events for mobile, under the hood exc.js uses addEventListener, so feel free to use any valid ECMAScript 5 event.

### .each()
The `each()` is also included in the core of ki.js for easy iterating a DOM collection.

```javascript
$(function () {
  // get all p tags
  $('p').each(function (i, elem) {
    // change color to red
    elem.style.color = 'red';
    // append the index to the text
    elem.textContent += i;
  });
});
```

### .is()
The `is("aselector")` returns true if the item matches the selector given.
```html
<div id="main_news" class="news"></div>
```
```javascript
$("#main_news").is(".news");
```

### .extend()
The `extend()` merges the contents of the objects passed into the first object. It returns the first object.
```javascript
var obj1 = {a:"1"};
var obj2 = {b:"2"};
var obj3 = {c:"3"};

$.extend(obj1,obj2,obj3);
```

### Other methods

.first(), .last(), .html(), .html("string"), .text(), .text("string"), .parseHTML("html"), .attr(), .removeAttr(), .hasAttr()


##Methods to get and set CSS-related properties of elements.

### .css("css-property-name")
Returns the value of a css property name.

### .css(properties)
Sets an elements css properties. Properties is an object with value pairs. Each entry is a css property name with its value.
```javascript
$(".mydiv").css({ "background-color": "#ffe", "border-left": "5px solid #ccc" });
```
You can also use DOM based style properties as used in javascript, for example `backgroundColor` for `background-color`.

### .addClass("class-name")

### .hasClass("class-name")

### .removeClass("class-name")

### .toggleClass("class-name")

### .toggleClass("class-name", state)


##Manipulate DOM

### .append()  .prepend()
Insert content, specified by the parameter, to the end of each element in the set of matched elements.

```html
<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```javascript
$( ".inner" ).append( "<p>Test</p>" );
```

### .remove()
```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">Goodbye</div>
</div>
```

```javascript
$( ".hello" ).remove();
```

### .hide() .show()

### .before()

### .after()

### .parent()




## Credits

Based on original work of [dciccale](https://github.com/dciccale) and [james2doyle](https://github.com/james2doyle).

Inspired by [youmightnotneedjquery](http://youmightnotneedjquery.com).