<template>
  <div class="net-mx-20 net-mt-10">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="~assets/images/banner.png"
      />
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
