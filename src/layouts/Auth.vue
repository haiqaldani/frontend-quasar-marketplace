<template>
  <q-layout>
    <q-page-container
      class="net-grid-cols-10 net-grid net-h-screen net-justify-end net-items-center net-p-3 md:net-p-6"
      style="background-color: #f7f7f7"
    >
      <div class="net-col-span-10 net-m-auto">
        <a
          href=""
          class="net-text-2xl net-text-center net-font-bold net-text-transparent net-bg-clip-text net-bg-gradient-to-br net-from-blue-700 net-to-blue-300"
          >NETLANTAS</a
        >
      </div>
      <div class="md:net-col-span-5 lg:net-col-span-6 xl:net-col-span-7"></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
