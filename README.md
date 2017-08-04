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

`v-once`:   
`v-html`: 
