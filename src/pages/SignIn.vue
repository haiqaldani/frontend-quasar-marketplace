<template>
  <div class="net-rounded-lg net-p-3 md:net-p-6 net-shadow-xl net-col-span-10 net-m-10 md:net-mx-0 md:net-col-span-5 lg:net-col-span-4 xl:net-col-span-3  bg-white">
    <div class="net-mt-6 net-justify-between net-grid-cols-2 net-grid">
      <h3 class="net-text-xl net-font-semibold net-text-gray-800">Masuk</h3>
      <a href="" class="net-py-2 net-text-right net-text-blue-soft">Daftar</a>
    </div>
    <div class="net-mt-10">
      <div class="net-mb-6">
        <label class="net-text-xs net-font-semibold net-text-gray-600">Nomor HP atau Email</label>
        <div class="net-mt-1">
          <q-input
            v-model="form.username"
            class="net-input-control"
            color="blue-soft"
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
            color="blue-soft"
            class="net-input-control"
            outlined
            type="password"
            dense
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
    <div class="net-mt-4 net-mb-4">
      <q-btn
        class="full-width net-bg-blue-soft net-py-2 text-white net-normal-case net-rounded-md"
        label="Masuk"
        unelevated
      />
    </div>
    <div class="net-mt-6 net-mb-6 net-flex net-justify-center net-items-center">
      <span class="net-h-px net-bg-gray-300 net-w-6/12"></span>
      <span class="net-w-6/12 net-whitespace-nowrap net-text-gray-600" style="font-size: 0.78rem;padding: 0 18px;">atau masuk dengan</span>
      <span class="net-h-px net-bg-gray-300 net-w-6/12"></span>
    </div>
    <div class="net-mt-4 net-grid-cols-2 net-grid net-text-gray-500 net-gap-4">
      <q-btn
        class="full-width net-normal-case net-rounded-md net-py-2"
        label="Google"
        outline
        unelevated
      />
      <q-btn
        class="full-width net-normal-case net-rounded-md net-py-2"
        label="Facebook"
        outline
        unelevated
      />
    </div>
    <div class="net-mt-6 net-mb-1">
      <span
        class="net-w-full net-block net-text-center"
        style="font-size: 0.78rem;color: rgba(0, 0, 0, 0.54);"
      >
        Belum punya akun NETLANTAS?
        <a
          href="#"
          class="net-text-blue-soft"
          style="font-size: 0.78rem;"
        >
          Daftar
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
