<template>
  <div class="container">  
    <div>	
      <!-- <Logo /> -->
	  <img :src="planet.image" alt="" />
      <h1 class="title">{{ planet.title }}</h1>	  
	  <div class="planet-text">{{ planet.description }}</div> 
	  <PlanetsList /> 	
    </div>
  </div>
</template>

<script>
export default {
  transition: 'bounce',
  head() {
    return {
	  title: this.planet.title,
	  meta: [
	    {
		  hid: '',
		  name: 'description',
	      content: this.planet.description,
		},
	  ],
    }
  },

  async asyncData({ params }) {
    const planet = await fetch(
	  `https://api.nuxtjs.dev/planets/${params.slug}`
	).then((res) => {
	  if (res.ok) {
	    return res.json()
	  }
	  throw new Error(res.status)
	})
	return { planet }
  },  
}
</script>

<style>
h1 {
  font-family: Nunito, sans-serif;
}
img {
  height: 300px;
  width: auto;
  object-fit: cover;  
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.planet-text {
  font-family:
	'Nunito',
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 1px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>