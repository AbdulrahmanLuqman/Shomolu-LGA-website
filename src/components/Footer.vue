<!-- everything here was done in the NavAndFooter branch including their images-->

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  data(){
    return{
      
    }
  }
})
</script>

<template>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"  class="bg-[lightblue] w-full lg:h-[60vh] relative overflow-hidden flex flex-col justify-between">
        <img src="../assets/images/footer-shape-1.png" class="bounce z-0 absolute top-0 left-8" alt="">
        <img src="../assets/images/footer-shape-2.png" class="bounce z-0 absolute bottom-0 right-8" alt="">
        <div class="grid lg:grid-cols-3 w-full gap-12 px-4 md:px-12 pt-20 pb-8 md:grid-cols-2 grid-cols-1">
            <div class="z-[99] space-y-4">
                <p class="uppercase text-4xl  font-black"><span class="text-[#1475C4]">s</span>omolu</p>
                <p class="text-base font-semibold">A Local government that will do anything it takes to help its people.</p>
                <div class="flex items-center gap-6">
                   <p><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#1475C4" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg></a></p>
                   <p><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512"><path fill="#1475C4" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></p>
                   <p><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#1475C4" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></a></p>
                </div>
            </div>

            <div class="space-y-4">
                <p class="text-3xl font-bold">Quick links</p>
                <p class="text-base cursor-pointer font-semibold">Councilor</p>
                <p class="text-base cursor-pointer font-semibold">Government services</p>
                <p class="text-base cursor-pointer font-semibold">Projects</p>
            </div>

            <div class="space-y-4">
                <p class="text-3xl font-bold">Contact</p> 
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#1475C4" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>
                  <p class="text-base font-semibold">Somolu Local Government Bashua Complex, Somolu</p>
                </div>  

                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#1475C4" d="M2 20V4h20v16H2Zm10-7l8-5V6l-8 5l-8-5v2l8 5Z"/></svg>
                  <p class="text-base font-semibold"><a href="mailto:info@somolu.ng">info@somolu.ng</a></p>
                </div>

                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#1475C4" d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3Z"/></svg>
                  <div class="flex gap-4">
                    <p class="text-base font-semibold"><a href="tel:+2348024444411">+234 802 444 4411</a></p>
                    <p class="text-base font-semibold"><a href="tel: +2348024990877">+234 802 499 0877</a></p>
                  </div>
                </div>
            </div>
        </div>

        <div class="space-y-4 py-4">
            <div class="w-full h-[1px] bg-[#1475C4]"></div>
            <p class="text-center font-semibold">Copyright &copy;2023. Designed by <span class="text-[#1475C4] font-bold">Dervac</span></p>
        </div>
    </div>
</template>

<style scoped>
.bounce{
    animation: bounce 2s infinite alternate ease-in-out;
    opacity: 0.5;
}
@keyframes bounce{
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(18px);
    }
}
</style>