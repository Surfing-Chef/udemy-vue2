# VUE 2 - UDEMY TUTORIALS #

## SECTION Three: Using Conditionals and Rendering Lists ##
Udemy Vue JS 2 - The Complete Guide - Section 3:   [https://www.udemy.com](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5941322)

**JSFiddle Links:**   
Conditionals (v-if and v-show): https://jsfiddle.net/smax/hoc719j5/  
Lists: https://jsfiddle.net/smax/o7uy2g0u/  

**Further Links:**  
Official Docs - Conditionals: http://vuejs.org/guide/conditional.html  
Official Docs - Lists: http://vuejs.org/guide/list.html  

### NOTES: ###
- `v-if`: attaches or detaches an element to the DOM. Preferable to the use of  `v-show` which allows extraneous elements to remain in the DOM.
- `v-else-if`: behaves as expected and can be chained multiple times. It must immediately follow `v-if` or `v-else-if` element or will be ignored.

- `<template></template>` offers an alternative to group blocks of elements to conditionally attach or detach, without the possible side effects of using other elements such as `<div></div>`.

    ```HTML
    <!-- HTML -->
    <template>
      <h1>Heading</h1>
      <p>A paragraph of text.</p>
    </template>

    <!-- will render into the browser as: -->
    <h1>Heading</h1>
    <p>A paragraph of text.</p>

    ```
- `v-show`: hides elements using CSS `display: none`, leaving it in the DOM but not visible.  Use `v-if` unless there is a reason an element must reamain although not visible.  

The `v-for` Directive  

- Arrays - `v-for` renders a list of items based on an array. The `v-for` directive requires a special syntax in the form of `item in items`, where `items` is the source data array and `item` is an alias for the array element being iterated on.  It also supports an optional second argument for the index of the current item in an array during iteration.
  ```console
  // JAVASCRIPT
  new Vue({
    el: '#app',
    data: {
      ingredients: ['meat', 'fruit', 'cookies']
    }
  });

  // HTML
  <div id="app">
    <ul>
      <li v-for="(ingredient, index) in ingredients">{{ ingredient }} ({{ index }})</li>
    </ul>
  </div>

  // render using v-for="value, index" in a list
  - ingredient 1 (0)
  - ingredient 2 (1)
  - ingredient 3 (2)

  // HTML
  <template v-for="(ingredient, index) in ingredients">
    <h1>{{ ingredient }}</h1>
    <p>{{ index }}</p>
  </template>

  // render using v-for="value, index" in a template element
  ingredient 1
  0
  ingredient 2
  1
  ingredient 3
  2
  ```

- Objects - `v-for` renders a list of items based on an object in the same way. It also supports an optional second argument for the key of the current item in an object during iteration as well as a third, the index.

  ```console
  // JAVASCRIPT
  new Vue({
    el: '#app',
    data: {
      persons: [
        {name: 'Max', age: 27, color: 'red'},
        {name: 'Anna', age: 'unknown', color: 'blue'}  
      ]
    }
  });

  // HTML
  <ul>
    <li v-for="person in persons">
      <div v-for="(value, key, index) in person">{{ key }}: {{ value }}({{ index }})</div>
    </li>
  </ul>

  <!-- renders a list of people and their properties -->
  -  name: Max(0)
     age: 27(1)
     color: red(2)
  -  name: Anna(0)
     age: unknown(1)
     color: blue(2)
  ```

- A List of Numbers
  ```console
  // HTML
  <span v-for="n in 10">{{ n }}</span>

  // renders

  ```
