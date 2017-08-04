# VUE 2 - UDEMY TUTORIALS #

### SECTION Two: Using VueJS to Interact with the DOM ###
[Section Link](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940950?start=0)  

#### NOTES: ####
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

- `v-once`: tell VueJS to only render the interpolated element once, to not update it when the code changes:
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

`v-html`: 
