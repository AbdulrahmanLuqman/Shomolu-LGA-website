<!-- everything here was done in the NavAndFooter branch including their images-->
<script>
import { defineComponent } from 'vue';
import Store from '../stores/counter.js';

export default defineComponent({
  data(){
    return{
      pages: Store().$state.pagesToggle,
      services: Store().$state.servicesToggle,
      toggle: Store().$state.showMobileNav
    }
  }
})
</script>

<template>
    <header class="sticky top-0 z-[999]">
      <div class="lg:bg-[#1475C4] lg:h-[40px] lg:w-full lg:flex lg:items-center lg:justify-between lg:px-[80px] hidden">
        <div class="flex items-center gap-10">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="white" d="M2 20V4h20v16H2Zm10-7l8-5V6l-8 5l-8-5v2l8 5Z"/></svg>
            <p class="text-white text-sm"><a href="mailto:info@somolu.ng">info@somolu.ng</a></p>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="white" d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3Z"/></svg>
            <div class="flex gap-4">
              <p class="text-sm text-white"><a href="tel:+2348024444411">+234 802 444 4411</a></p>
              <p class="text-sm text-white"><a href="tel: +2348024990877">+234 802 499 0877</a></p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="white" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>
            <p class="text-white text-sm">22 Town Planning Way, Ilupeju, Mushin</p>
          </div>
        </div>
  
        <div class="flex items-center gap-2">
          <p><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="white" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg></a></p>
          <p><a href="https://web.facebook.com/profile.php?id=467730063239521&paipv=0&eav=AfY-nJ_BtcsNtliLjLKKDEj4387R7HMKW4tm4u1MnVOxao1RCrPBhiP_aQjLGVgN3jo&_rdc=1&_rdr"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 320 512"><path fill="white" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></p>
          <p><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></a></p>
        </div>
      </div>
      <nav class="px-[80px] bg-[#F9FBFE] h-[80px] w-full flex justify-between items-center cursor-pointer">
        <div>
          <img width="40" class="z-[999]" src="../assets/images/logo.png" alt="LOGO">
        </div>
        <div class="md:flex md:bg-transparent md:items-end md:gap-6 md:static md:bg-transparent md:shadow-none md:rounded-none md:w-fit md:h-fit md:mx-0 md:p-0 w-[75%] mx-auto absolute bg-[white] shadow-lg top-[82px] left-0 right-0 rounded-lg p-4 space-y-4" :class="toggle ? 'block' : 'hidden'">
          <p class="font-semibold text-[#37423B] hover:text-[#1475C4]">Home</p>

          <div class="md:relative md:flex md:items-center md:gap-2">
            <div class="flex items-center hover:text-[#1475C4]">
              <p class="font-semibold text-[#37423B] hover:text-[#1475C4]" @click="pages = !pages">Pages</p>
              <div class="flex" @click="pages = !pages">
                <svg v-if="!pages" @click="pages = false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#37423B" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg>
                <svg v-else @click="pages = true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#37423B" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"/></svg>
              </div>
            </div>
            <div v-show="pages" class="md:absolute md:top-[40px] md:left-0 md:bg-white md:w-[200px] h-fit md:shadow-xl md:rounded-md space-y-2">
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">About</p>
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">Councilor</p>
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">Events</p>
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">Galleries</p>
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">FAQ</p>
            </div>
          </div>

          <p class="font-semibold text-[#37423B] hover:text-[#1475C4]">Projects</p>

          <div class="md:relative md:flex imd:tems-center md:gap-2">
            <div class="flex items-center hover:text-[#1475C4]">
              <p class="font-semibold text-[#37423B] hover:text-[#1475C4]" @click="services = !services">Services</p>
              <div class="flex" @click="services = !services">
                <svg v-if="!services" @click="services = false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg>
                <svg v-else @click="services = true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"/></svg>
              </div>
            </div>
            <div v-show="services" class="md:absolute md:top-[40px] md:left-0 md:bg-white md:w-[200px] h-fit md:shadow-xl md:rounded-md space-y-2">
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">Services</p>
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">Individual services</p>
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">Government services</p>
              <p class="text-[#37423B] border-b w-full p-4 font-semibold">Business services</p>
            </div>
          </div>

          <p class="font-semibold text-[#37423B] hover:text-[#1475C4]">Blog</p>
          
          <p class="font-semibold text-[#37423B] hover:text-[#1475C4]">Contact</p>
        </div>

        <div class="flex md:hidden" @click="toggle = !toggle">
          <svg v-if="!toggle" @click="toggle = false" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#1475C4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"/></svg>
          <svg v-else @click="toggle = true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#1475C4" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
        </div>
      </nav>
    </header>

  <div class="md:hidden block fixed top-0 bg-black h-screen w-full z-[10] opacity-50" :class="!toggle ? 'hidden' : 'block' "></div>

</template>