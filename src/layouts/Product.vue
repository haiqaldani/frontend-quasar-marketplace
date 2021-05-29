<template>
  <q-layout>
    <q-page-container>
      <Header/>
      <Navbar/>
      <router-view />
      <RecomendedProduct/>
      <Footer/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import Navbar from 'components/Navbar.vue'
import RecomendedProduct from 'components/RecomendedProduct.vue'
import Footer from 'components/Footer.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Navbar,
    RecomendedProduct,
    Footer
  }
}
</script>
