<template>
  <q-layout>
    <q-page-container>
      <Header/>
      <Navbar/>
      <Banner/>
      <router-view />
      <FlashSale/>
      <Footer/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import Navbar from 'components/Navbar.vue'
import Banner from 'components/Banner.vue'
import FlashSale from 'components/FlashSale.vue'
import Footer from 'components/Footer.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Navbar,
    Banner,
    FlashSale,
    Footer
  }
}
</script>
