<template>
  <div class="">
    <section class="navigation">
      <div
        class="net-flex net-flex-row net-space-x-3 net-mx-5 net-my-3 net-text-sm"
      >
        <p>Beranda</p>
        <span>></span>
        <p>Komputer & Aksesoris</p>
        <span>></span>
        <p>SSD</p>
        <span>></span>
        <a href="" class="net-text-blue-soft">Sandisk ssd 3d 500GB</a>
      </div>
    </section>
    <section>
      <div class="net-grid net-mx-14">
        <div
          class="net-grid net-grid-cols-7 net-grid-rows-6 net-grid-flow-col net-gap-4 net-bg-blue-soft"
        >
          <div class="net-row-start-3 net-row-span-4 net-col-span-1 net-m-5">
            <q-img src="~assets/images/toko.png" :ratio="1" />
          </div>
          <div
            class="net-row-start-4 net-row-span-3 net-col-span-1 net-text-white-main"
          >
            <p class="net-font-medium net-text-lg">Sky Techology</p>
            <p>Nama Toko</p>
            <p>Socmed</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="net-grid net-mx-14 net-gap-5 net-mt-10">
        <div class="net-grid net-grid-cols-3 net-gap-5">
          <div class="net-flex net-flex-col net-space-y-3">
            <div class="net-py-40 net-bg-blue-soft net-rounded-md"></div>
            <div class="net-grid net-grid-cols-5 net-gap-2">
              <div class="net-bg-blue-soft net-py-8 net-rounded-md"></div>
            </div>
          </div>
          <div class="net-col-span-2 net-flex net-flex-col net-space-y-3">
            <div class="">
              <p class="net-font-medium net-text-lg">
                ADATA XPG SX8200 PRO PCIe Gen3x4 M2 2280 SSD Internal 256GB
                Grnsi 4 Th
              </p>
              <div
                class="net-flex net-flex-row net-divide-gray-500 net-divide-x net-text-gray-600 net-text-sm net-space-x-3"
              >
                <div class="">
                  <p>5 (74 Ulasan)</p>
                </div>
                <div class="net-pl-3">
                  <p>Terjual 144</p>
                </div>
                <div class="net-pl-3">
                  <p>Diskusi (33)</p>
                </div>
              </div>
            </div>
            <div class="net-space-y-1">
              <p class="net-font-semibold net-text-3xl">Rp. 736.000</p>
              <div class="net-flex net-flex-row net-space-x-3">
                <p
                  class="net-bg-red-diskon net-text-white-main net-p-1 net-text-xs net-rounded-md"
                >
                  15%
                </p>
                <p class="net-line-through net-text-gray-600">Rp. 865.000</p>
              </div>
            </div>
            <div
              class="net-flex net-flex-row net-text-sm net-space-x-3 net-text-gray-800"
            >
              <p class="net-font-medium">Pengiriman</p>
              <div class="net-flex net-flex-col net-space-y-1">
                <p class="">
                  Dikirim dari
                  <span class="net-font-medium">Jakarta Utara</span>
                </p>
                <p>Ongkir Reguler 8rb</p>
                <p class="net-text-gray-600">Estimasi tiba 4 - 10 May</p>
              </div>
            </div>
            <div class="net-flex net-flex-col net-space-y-1">
              <p class="net-font-medium">Atur jumlah dan catatan</p>
              <div class="net-flex net-flex-row net-space-x-3">
                <div class="net-custom-number-input net-h-10 net-w-32">
                  <div
                    class="net-flex net-flex-row net-h-10 net-w-full net-rounded-lg net-relative net-bg-transparent net-mt-1"
                  >
                    <button
                      data-action="decrement"
                      class="net-text-gray-600 hover:net-text-white-main border hover:net-bg-blue-soft net-h-full net-w-20 net-rounded-l net-cursor-pointer onet-utline-none"
                    >
                      <span class="net-m-auto net-text-2xl net-font-thin"
                        >−</span
                      >
                    </button>
                    <input
                      type="number"
                      class="focus:net-outline-none net-text-center net-w-full net-font-semibold net-text-md hover:net-text-black focus:net-text-black  md:net-text-basecursor-default net-flex net-items-center net-text-gray-700  net-outline-none"
                      name="custom-input-number"
                      value="0"
                    />
                    <button
                      data-action="increment"
                      class="net-text-gray-600 hover:net-text-white-main net-border hover:net-bg-blue-bwa net-h-full net-w-20 net-rounded-r net-cursor-pointer"
                    >
                      <span class="net-m-auto net-text-2xl net-font-thin"
                        >+</span
                      >
                    </button>
                  </div>
                </div>
                <p class="net-py-3 net-text-gray-800">
                  Stok <span class="net-font-medium">40</span>
                </p>
              </div>
              <div class="net-grid net-grid-cols-2">
                <q-input
                  v-model="text"
                  type="text"
                  color="blue-soft"
                  class=""
                  outlined
                  dense
                  placeholder="Contoh: Warna Putih, Size M"
                />
              </div>
              <div class="net-grid net-grid-cols-3 net-gap-2">
                <q-btn
                  class="net-bg-blue-soft net-rounded-md net-text-white-main net-font-medium"
                  label="Keranjang"
                />
                <q-btn
                  style="color: #3252DF;"
                  class="net-py-3 net-rounded-md net-text-blue-bwa net-font-medium"
                  label="Beli Lansung"
                  outline
                />
              </div>
            </div>
          </div>
        </div>
        <div class="net-my-10 ">
          <q-card>
            <q-tabs
              v-model="tab"
              class="net-text-blue-soft"
              align="justify"
              narrow-indicator
            >
              <q-tab name="mails" label="Mails" />
              <q-tab name="alarms" label="Alarms" />
              <q-tab name="movies" label="Movies" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Aku suka ayam
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Enak1212
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                456
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss"></style>
