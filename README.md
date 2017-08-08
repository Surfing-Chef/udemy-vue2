# VUE 2 - UDEMY TUTORIALS #

## SECTION Five: Understanding the VueJS Instance ##
Udemy Vue JS 2 - The Complete Guide - Section 5:   [https://www.udemy.com](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5942192?start=0)

**JSFiddle Links:**  
The Vue Instance Code: https://jsfiddle.net/smax/9a2k6cja/2/  
The VueJS Instance Lifecycle: https://jsfiddle.net/smax/jcgw7ak8/

**Further Links:**  
Official Docs - The Vue Instance: http://vuejs.org/guide/instance.html  
Official Docs - Reactivity in Depth: http://vuejs.org/guide/reactivity.html

### NOTES: ###
Accessing and Updating Instance Object Properties:
- Only the properties of objects within a Vue instance (`data:`, `methods:`, etc.) that are set before creating the instance are reactive
- Once a Vue instance is created, changes to properties of objects within a Vue instance by an external source will not be reactive and will be over written on a template render

Mounting the VueJS template:
```javascript
vm = new Vue({
  el: 'element'
});
```
- `el: '#element'` within the Vue instance behaves the same as `vm.$mount('element');` outside
- `el: '#element'` to mount on current, existing or known element
- `vm.$mount('element');` to mount after instance creation or on an element not yet determined
