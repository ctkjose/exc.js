# exc.js

exc.js is a small jQuery-like API JavaScript library inspired by ki.js and zepto.js. The goal is to provide a small footprint, be as close as possible to native javascript while providing a basic compatibility with jquery.

I use exc.js because I find myself using a small subset of jQuery in many projects, and when size is an issue. Todays browsers are not as bad as you expect, they have a good set of functionality for web applications, you may not need so much sugar on top of it.

Currently at ~8kb uncompressed.

### Browser support

Currently only tested in: Chrome, Safari, Firefox.


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


### Trying to use this readme as a guide!

Must functions that operate on DOM elements accept a selector as defined by the [DOM Sepcification](http://dev.w3.org/2006/webapi/selectors-api2/) and supported by most modern browsers.

This documentation will describe selector arguments as `"selector"`. For example: `.append("selector")`.

You can also pass DOM nodes as provided by native JavaScript functions. The documentation will describe an argument that accepts a node as `elem`. For example: `.append(elem)`. Also code examples will use `elem` when referring to an instance of a DOM node/element. 

A node can also be represented as an instance of an `exc` object. The documentation will describe an argument that accepts an `exc` instance as `exc`. For example: `.append(exc)`. Code examples will use variables prefixed with the dollar sign to indicate that their are instances of an exc object, for example `var $aForm = $("#myForm");`.

Some functions allows to pass a string with valid HTML code. The documentation will describe an argument that accepts a valid HTML string as `"html"`. For example: `.append("html")`.

In many instances the documentation will use a pipe character to indicate when more than one type is allowed for example `["selector"|elem|"html"|exc]` as in `.append(["selector"|elem|"html"|exc])`.

A string argument is represented in the documentation as `"string"`. When a string is a particular thing we may use a name inside the quotes for example a css property like `border-left` would be `"css-property-name"`, etc.

When you can pass a simple primitive value (a string, number, or boolean) the documentation will use the word `value`.

An object as `obj`, an array as `array`, a boolean value is `bool` and numbers as `number`.



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
Events with the known `.on()` and `.off()` methods

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

  // get all p tags
  $('p').each(function (i, elem) {
    // change color to red
    elem.style.color = 'red';
    // append the index to the text
    elem.textContent += i;
  });

```

Just like jQuery this represents the DOM element you are operating on, use `$(this)` to convert it to an exc instance.

### .is()
The `is("selector")` returns true if the item matches the selector given.
```html
<div id="main_news" class="news"></div>
```
```javascript
$("#main_news").is(".news");
```

### .extend()
The `extend(obj)` merges the contents of the objects passed into the first object. It returns the first object.
```javascript
var obj1 = {a:"1"};
var obj2 = {b:"2"};
var obj3 = {c:"3"};

$.extend(obj1,obj2,obj3);
```

### Other methods to be documented...

.first(), .last(), .html(), .html("string"), .text(), .text("string"), .parseHTML("html"), .attr("string"), .attr("string", value), .removeAttr("string"), .hasAttr("string"), .prop("string"), .prop("string", value)


## Methods to get and set CSS-related properties of elements.

### .css("css-property-name")
Returns the value of a css property name.

### .css(properties)
Sets an elements css properties. Properties is an object with value pairs. Each entry is a css property name with its value.
```javascript
$(".mydiv").css({ "background-color": "#ffe", "border-left": "5px solid #ccc" });
```
You can also use DOM based style properties as used in javascript, for example `backgroundColor` for `background-color`.

### .addClass("class-name")
to be documented...

### .hasClass("class-name")
to be documented...

### .removeClass("class-name")
to be documented...

### .toggleClass("class-name")
to be documented...

### .toggleClass("class-name", state)
to be documented...

## Manipulate DOM

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
to be documented...

### .before()
to be documented...

### .after()
to be documented...

### .parent()
to be documented...

## Forms

### Working with radios and checkboxes

Test if a checkbox is `checked` with:
```javascript
if( $(aCheckbox).is(":checked") ){
	console.log("is checked");
}

if( $(aCheckbox).prop("checked") ){
	console.log("is checked");
}

```

You can use `.attr()` to test for `checked` but must browsers check attributes against the actual HTML contents. If the `checked` attribute was not used on a checkbox you will not be able to test for `checked`. The `.prop()` method uses the node properties which are values computed by the browser.


Set the check state with the following code:
```javascript
$(aCheckbox).prop("checked", true);
```

## Credits

Based on original work of [dciccale](https://github.com/dciccale) and [james2doyle](https://github.com/james2doyle).

Inspired by [youmightnotneedjquery](http://youmightnotneedjquery.com).