<template>
  <div>
    <nav>
	  <p class = "button--green"><NuxtLink to="/">Home</NuxtLink></p>
	  <p class = "button--green"><NuxtLink to="/about">About</NuxtLink></p>
	</nav>
    <Nuxt />
  </div>
</template>
<script>
export default {
 head: {
   title: 'nuxt-app',
   meta: [
     {
       hid: 'description',
	   name: 'description',
	   content: 'A mission to explore the Jamstack using Nuxt',
     },
   ],
  },
}
</script>
<style>
nav {
  text-align: center; 
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin-top: 10px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #007bff;
  color: #007bff;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 10px;
  margin-top: 10px;
}

.button--blue:hover {
  color: #fff;
  background-color: #007bff;
}
</style>
