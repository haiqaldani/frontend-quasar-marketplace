<template>
  <div class="navbar net-py-4 net-border-b net-border-gray-400">
    <div class="net-mx-5 net-grid net-grid-cols-5">
      <div class="net-col-span-4 net-grid net-grid-cols-5 net-gap-5">
        <a
          href=""
          class="net-text-3xl net-font-bold net-text-transparent net-bg-clip-text net-bg-gradient-to-br net-from-blue-700 net-to-blue-300"
          >NETLANTAS</a
        >
        <div class="net-grid-cols-10 net-grid net-col-span-3 net-gap-3">
          <q-input
            v-model="text"
            type="text"
            color="blue-soft"
            class="net-col-span-8"
            outlined
            dense
            placeholder="Contoh: Xiaomi Redmi Note 10"
          />
          <q-btn
            class="net-col-span-2 net-rounded net-py-0.5 net-bg-red-500 net-text-white-main"
            label="Cari"

          />
        </div>
        <q-select outlined v-model="model" :options="options" label="Kategori"  dense/>
      </div>
      <div
        class="net-justify-self-end net-flex net-flex-row net-space-x-3 net-text-right net-items-center"
      >
        <div class="net-py-2 net-w-full">
          <img src="images/icon-cart-empty.svg" alt="" />
        </div>
        <a href="" class="net-px-6 net-py-2 net-font-semibold">Masuk</a>
        <a
          href=""
          class=" net-px-6 net-py-2 net-rounded net-border net-border-red-500 net-text-red-500 net-font-semibold hover:net-bg-red-500 hover:net-text-white-main"
          >Daftar</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
