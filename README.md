# VUE 2 - UDEMY TUTORIALS #

## SECTION SEVEN - COMPONENTS  ##
Udemy Vue JS 2 - The Complete Guide - Section 7: [https://www.udemy.com](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5942872?start=0)

**JSFiddle Links:**  


**Further Links:**  


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
- a template can only contain one root element:
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
