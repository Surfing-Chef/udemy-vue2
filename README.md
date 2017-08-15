# VUE 2 - UDEMY TUTORIALS #

## SECTION SEVEN - COMPONENTS  ##
Udemy Vue JS 2 - The Complete Guide - Section 7: [https://www.udemy.com](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5942872?start=0)

**JSFiddle Links:**  


**Further Links:**  
VueJS Components: http://vuejs.org/guide/components.html

### NOTES: ###
**Registering Components**  
```javascript
// Register Global
Vue.component('my-cmp', {
	data: function() {
  	return {
    	status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
  	changeStatus: function() {
    	this.status = 'Normal';
    }
  }
});

new Vue({
	el: '#app',
});

// Register Local
var component = ('my-cmp', {
	data: function() {
  	return {
    	status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
  	changeStatus: function() {
    	this.status = 'Normal';
    }
  }
});

new Vue({
	el: '#app',
  components: {
  	'my-cmp': component
  }
});
```

**Creating a Component**  
A template can only contain one root element.
```html
// wrong - no root container
<template>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus" type="button" name="button">Change</button>
</template>

// correct - div element as root container
<template>
  <div class="">
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus" type="button" name="button">Change</button>
  </div>
</template>
```

**Folder Structures**
```bash
// Components sorted
├───src
│   │   App.vue
│   │   main.js
│   │
│   ├───assets
│   │       logo.png
│   │
│   └───components
│       ├───Server
│       │       ServerDetails.vue
│       │       Servers.vue
│       │
│       └───Shared
│               Footer.vue
│               Header.vue

// Alternatively grouped by feature
├───src
│   │   App.vue
│   │   main.js
│   │
│   ├───assets
│   │       logo.png
│   │
│   ├───users
│   │   ├───account
│   │   └───analytics
│   ├───shop
│   │   ├───main
│   │   └───checkout
```
**Scoping Component Styles**  
By default, styles in a Vue component are global.  To specify the scope to remain within the component use the `scoped` attribute:
```javascript
// global
<style>
 div {
	 1px sold red;
 }
<style>

// scoped
<style scoped>
 div {
	 1px sold red;
 }
<style>
```
