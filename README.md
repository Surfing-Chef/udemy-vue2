# VUE 2 - UDEMY TUTORIALS #

### SECTION Two: Using VueJS to Interact with the DOM ###
Udemy Vue JS 2 - The Complete Guide - Section 2:   [https://www.udemy.com](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940950?start=0)

**JSFiddle Links:**  
Getting Started: https://jsfiddle.net/smax/pcjtcmdm/  
Template Syntax: https://jsfiddle.net/smax/bkk97b7g/  
Events: https://jsfiddle.net/smax/7zdak05g/  
Two-Way-Binding: https://jsfiddle.net/smax/ut0tsbcu/  
Computed Properties & Watch: https://jsfiddle.net/smax/yLjqxmw0/  
Dynamic Classes: https://jsfiddle.net/smax/gowg40ym/  
Dynamic Styles: https://jsfiddle.net/smax/3rvdLq5y/  

**Further Links:**  
Official Docs - Getting Started: http://vuejs.org/guide/  
Official Docs - Template Syntax: http://vuejs.org/guide/syntax.html  
Official Docs - Events: http://vuejs.org/guide/events.html  
Official Docs - Computed Properties & Watchers: http://vuejs.org/guide/computed.html  
Official Docs - Class and Style Binding: http://vuejs.org/guide/class-and-style.html  

#### NOTES: ####
**Known Options for Vue Instance:**
- **el:** Connect to DOM
- **data:** Store Data to be used
- **computed:** Dependent Properties
- **watch:** Execute code upon data changes
- **methods:** Methods of Vue instance

**Directives:** ***special tokens in the markup that tell the library to do something to a DOM element*** - an instruction placed in the code.  The argument is passed to the directive by using a colon then the argument (the attribute to bind).
- `v-bind`: tells VueJS not to use the attribute normally, bind it to some data stored within the VueJS instance
  ```javascript
  ...
  data: {
    link: 'http://surfing-chef.com'
  }
  ```
  ```html
  <a v-bind:href="link">Surfing-Chef</a>
  ```

- `v-once`: tells VueJS to only render the interpolated element once, to not update it when the code changes:

  ```javascript
  // JS
  data: {
    title: 'Hello World!',
    link: 'http://surfing-chef.com',
    finishedLink: '<a href="http://surfing-chef.com">Surfing-Chef.com</a>'
  },
  methods: {
    sayHello : function() {
      this.title = 'Hello';
      return this.title;
    }
  }

  // set the value of title initially as 'Hello World!',
  // then changes it in the sayHello() method
  ```

  ```html
  <!-- HTML -->
  <h1 v-once>{{ title }}</h1>

  <!-- Returns "Hello World!" even after the function sayHello() overwrites it  -->
  ```

- `v-html`: tells VueJS to render HTML content or code, which bypasses its default behavior - escaping HTML and only rendering text. This default behavior inhibits cross-side scripting attacks.  **USE CAREFULLY!**
```javascript
//JS
data: {
title: 'Hello World!',
link: 'http://surfing-chef.com',
finishedLink: '<a href="http://surfing-chef.com">Surfing-Chef.com</a>'
},
```

  ```html
  <!-- HTML -->
  <div id="app">
    <p v-html="finishedLink"></p>

  <!-- the v-html directive will ensure the finishedLink interpolated attribute
      is rendered as raw HTML not text, making it a working link -->  
  </div>
  ```

**Events and Listeners**  
  - `v-on`: listens to an element to receive a DOM event from our template. It then specifies a method to execute when the DOM event occurs.
  ```javascript
  //JS
  new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      increase: function(){
        this.counter++;
      }
    }
  })

  // creates the increase function that increases the
  // counter value by one on each click
  ```

    ```html
    <!-- HTML -->
    <div id="app">
      <button v-on:click="increase">Click Me</button>
      <p>{{ counter }}</p>
    </div>

    <!-- v-on waits for a click event from the button to
    call the increase method -->  
    </div>
    ```  

- Passing custom arguments with events:  
  - `v-on:click="increase(arg)"`  
  - use reserved `$event` variable to access event object properties  


- Modifying an Event - with Event Modifiers
  - [Event Modifiers](http://vuejs.org/v2/guide/events.html#Event-Modifiers)
  - event modifiers such as `.stop` in `<span v-on:mousemove.stop="">DEAD SPOT</span>` act as intermediary function of sorts, running before the defined function  
  - `.stop` stops the propagation of events at this point, a gate  
  - `.prevent` prevents a default event from occuring  
  - event modifiers can also be chained - i.e. `<span v-on:mousemove.stop.prevent="">DEAD SPOT</span>`
  -[Key Modifiers](http://vuejs.org/v2/guide/events.html#Key-Modifiers)  


- Writing JavaScript Code in the Templates
  - anywhere the Vue instance is accessed, simple javascript statements can be evaluated, as long as they are only one expression and don't contain any if statements or loops etc:  

    ```html
    <!-- HTML -->
    <button v-on:click="increase(2, $event)">Click Me</button>
    <button v-on:click="counter++">Click Me</button>

    <!-- The first button uses a function, the second an expression.
    Both achieve the same result -->
    ```
  - ternary expressions are valid
    ```html
    <!-- HTML -->
    <p>{{ counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10' }}</p>

    <!-- Outputs 'Greater...' or 'Smaller...' - depending on counter value -->
    ```  


- Using Two Way Data Binding
  - the `v-model` directive sets up two-way data binding between the element its written on and the specified property:

    ```HTML
    <!-- HTML -->
    <input type="text" v-model="name">

    <!-- binds the input field to the name property of the template  -->
    ```  


- Binding Concepts So Far:
  - ***interpolation***: most basic form of data binding using "Mustache" syntax
  - ***v-bind***: reactively updates an HTML attribute
  - ***v-on***: attaches an event listener to an element
  - ***v-model***: create a two-way binding on a form input element or a component  


- Reacting to Changes with Computed properties
  - the `computed` object is added to a Vue instance as with `el, data` and `methods`
  - can be used like a property in the `data` object:
    ```HTML
    <!-- HTML -->
    <p>Result: {{ result() | output }}</p>

    <!-- result is form the methods property (parentheses),
     output from the computed property (no parentheses) -->
    ```  
  - `methods` execute on every DOM update, `computed` caches results and doesn't recalculate if unnecessary  


- Alternative to Computed Properties: Watching
  - use `computed` as best practice - more optimized for VueJS
  - `computed` won't work when asynchronous tasks are required to run, this is where watch is used
  - define which existing property to watch, and execute a function when change occurs

  
- Saving Time with Shorthands
  - `@click` is the same as `v-on:click`
  - `:href` is the same as `v-bind:href`


Dynamic Styling with CSS Classes - Basics
- the different syntaxes to use when binding to `class` and `style`

  - `:class="{someClass: condition}"` specifies under which condition someClass should be added to this element

  - `:class="someClass"` allows for dynamic binding to some object - remove the logic from the template and put it into the js code

  - `:class="[someClass, anotherClass]"`  allows for addition of  multiple classes to an element. Here, `someClass` CAN also be an object with the `name: condition` mapping but it can also just be a class name (which then is always added, since it doesn't have a condition).
