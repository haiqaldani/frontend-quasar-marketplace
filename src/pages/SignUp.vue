<template>
  <div class="net-rounded-lg net-col-span-10 net-m-10 md:net-mx-0 md:net-col-span-5 lg:net-col-span-4 xl:net-col-span-3 net-p-3 md:net-p-6 net-shadow-xl bg-white">
    <div class="net-mt-6 net-mb-6 net-text-center">
      <h3 class="net-text-xl net-font-normal net-text-gray-800 net-blok">Daftar Sekarang</h3>
      <h5 class="net-text-md net-font-normal net-text-gray-600 net-blok">
        Sudah punya akun Tokopedia?
        <a
          href="#"
          class="net-text-blue-soft"
        >
          Masuk
        </a>
      </h5>
    </div>
    <div class="net-mt-4 net-grid net-grid-cols-2 net-gap-4 net-text-gray-500">
      <q-btn
        class="full-width net-normal-case net-rounded-md net-font-semibold net-py-1"
        label="Google"
        outline
        unelevated
      />
      <q-btn
        class="full-width net-normal-case net-rounded-md net-font-semibold"
        label="Facebook"
        outline
        unelevated
      />
    </div>
    <div class="net-mt-6 net-mb-6 net-flex net-justify-center net-items-center">
      <span class="net-h-px net-bg-gray-300 net-w-6/12"></span>
      <span class="net-w-6/12 net-whitespace-nowrap net-text-gray-600" style="font-size: 0.78rem;padding: 0 18px;">atau daftar dengan</span>
      <span class="net-h-px net-bg-gray-300 net-w-6/12"></span>
    </div>
    <div class="net-mt-4">
      <div class="net-mb-4">
        <label class="net-text-xs net-font-semibold net-text-gray-600">Nomor HP atau Email</label>
        <div class="net-mt-1">
          <q-input
            v-model="form.username"
            class="net-input-control"
            color="blues-soft"
            outlined
            dense
            hint="Contoh: email@gmail.com"
          />
        </div>
      </div>
      <div class="net-mb-3">
        <label class="net-text-xs net-font-semibold net-text-gray-600">Kata sandi</label>
        <div class="net-mt-1">
          <q-input
            v-model="form.password"
            class="net-input-control"
            color="blues-soft"
            outlined
            dense
            type="password"
          />
        </div>
      </div>
    </div>
    <div class="net-flex net-justify-between net-items-center">
      <q-checkbox
        v-model="form.remeber"
        dense
        color="blue-soft"
        class="net-input-checkbox"
      >
        <template v-scope>
          <div
            class="net-text-gray-600"
            style="font-size: 0.78rem;"
          >
            Ingat saya
          </div>
        </template>
      </q-checkbox>
      <a
        href="#"
        class="net-text-blue-soft"
        style="font-size: 0.78rem;"
      >
        Lupa kata sandi?
      </a>
    </div>
    <div class="net-mt-4 net-mb-4 ">
      <q-btn
        class="full-width net-py-2 net-bg-blue-soft text-white net-normal-case net-rounded-md"
        label="Masuk"
        unelevated
      />
    </div>
    <div class="net-mt-6 net-mb-1">
      <span
        class="net-w-full net-block net-text-center"
        style="font-size: 0.78rem;color: rgba(0, 0, 0, 0.54);"
      >
        Dengan mendaftar, saya menyetujui
      </span>
      <span
        class="net-w-full net-block net-text-center"
        style="font-size: 0.78rem;color: rgba(0, 0, 0, 0.54);"
      >
        <a
          href="#"
          class="net-text-blue-soft"
          style="font-size: 0.82rem;"
        >
          Syarat dan Ketentuan
        </a>
        serta
        <a
          href="#"
          class="net-text-blue-soft"
          style="font-size: 0.82rem;"
        >
          Kebijakan Privasi
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: null,
        password: null,
        remeber: false
      }
    }
  }
}
</script>

<style lang="scss">
.net-input-checkbox {
  .q-checkbox__bg {
    border-radius: 0.375rem;
    // border-color: #16a34a !important;
  }
}
</style>
