<template>
   <section class="banner-flash-sale net-mb-10">
      <div class="net-mx-14 net-flex-col net-space-y-2">
        <div class="net-grid net-grid-cols-2">
          <div class="net-flex net-flex-row net-space-x-5">
            <p class="net-font-medium">Produk Rekomendasi</p>
          </div>
          <a href="" class="net-justify-self-end net-text-blue-500 net-font-medium">Lihat Semua</a>
        </div>
        <div class="net-grid net-grid-cols-6 net-gap-5">
          <div class="net-rounded-md net-shadow-md net-border net-border-gray-100">
            <div class="">
                <q-img
                    src="~assets/images/redmi-note10.jpg"
                    :ratio="1"
                />
            </div>
            <div class="net-my-3">
              <div class="net-text-left net-my-3 net-mx-2 net-space-y-1">
                <p class="net-text-gray-800 net-text-sm">Xiaomi Redmi Note 10</p>
                <div class="net-flex net-flex-row">
                  <p class="net-bg-red-diskon net-rounded net-p-1 net-text-xs net-text-white-main">10%</p>
                  <p class="net-p-1 net-text-xs net-text-gray-500 net-line-through">Rp. 3.999.999</p>
                </div>
                <p class="net-font-semibold net-text-gray-800">Rp. 3.600.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'RecomendedProduct'
}
</script>
