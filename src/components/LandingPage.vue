<!-- everything here was done in the LandingPage branch -->
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
    <main class="bg-[whitesmoke]">
    <section class="w-full relative overflow-hidden  h-fit lg:h-screen md:h-[80vh] bg-gradient-to-r from-blue-400 to-[#1475C4]">
        <img width="170" src="../assets/images/header-shape-1.png" class="bounce z-0 absolute top-0 left-8" alt="">
        <img width="170" src="../assets/images/header-shape-2.png" class="bounce z-0 absolute bottom-0 right-8" alt="">
        <div class="grid md:grid-cols-2 gap-10 items-center h-full md:py-0 py-12 px-12">
            <div class="text-[whitesmoke] flex flex-col gap-8 items-center md:items-start">
                <p class="text-sm">Discover the city</p>
                <p class="lg:text-7xl md:text-4xl text:3xl font-bold">Cooperation has become a central element</p>
                <p class="bg-[#F9FBFE] w-fit px-6 py-2 text-[#1475C4] rounded-lg font-semibold">Learn more</p>
            </div> 
            <div>
                <img class="w-full" src="../assets/images/shomolu.jpg" alt="">
            </div>
        </div>
    </section>

    <section 
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out" class="px-12 py-16 h-fit space-y-6 w-full">
        <p class="text-3xl font-semibold">Policies and Initiatives</p>

        <div class="grid lg:grid-cols-5 md:grid-cols-3 gap-8 h-full">
            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center  bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1475C4" d="M3 18q-.625 0-.9-.55t.1-1.05l4-5.325q.3-.4.8-.4t.8.4L11.5 16H19l-5-6.65l-2.5 3.3L10.25 11l2.95-3.925q.3-.4.8-.4t.8.4l7 9.325q.375.5.1 1.05T21 18H3Zm11.025-2ZM5 16h4l-2-2.675L5 16Zm0 0h4h-4Z"/></svg>
                <p class="text-[#1475C4] font-semibold text-center">Environment</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#1475C4" stroke-width="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z"/><path d="m3 11l9-3l9 3m-9-9v19.5"/></g></svg>
                <p class="text-[#1475C4] font-semibold text-center">Public Safety</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="#1475C4" d="m243.86 197.65l-14.25-120A20.06 20.06 0 0 0 209.67 60h-29.84a52 52 0 0 0-103.66 0H46.33a20.06 20.06 0 0 0-19.94 17.65l-14.25 120A20 20 0 0 0 32.08 220h191.84a20 20 0 0 0 19.94-22.35ZM128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36ZM36.5 196L49.81 84h156.38l13.31 112Z"/></svg>
                <p class="text-[#1475C4] font-semibold text-center">Business and Technology</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><g fill="#1475C4"><path d="M27.998 15.999c0 3.475-1.046 6.454-2.97 8.544a9.972 9.972 0 0 1-3.407 2.397c-.089.388-.2.784-.34 1.17a7.5 7.5 0 0 1-.597 1.28c6.21-1.752 9.314-7.085 9.314-13.391c0-7.731-4.665-13.999-14-13.999C6.665 2 2 8.268 2 15.999c0 6.32 3.117 11.662 9.354 13.401a7.492 7.492 0 0 1-.605-1.29a9.96 9.96 0 0 1-.336-1.154a9.98 9.98 0 0 1-3.443-2.413C5.046 22.453 4 19.473 4 15.999c0-3.475 1.046-6.454 2.97-8.544C8.87 5.392 11.805 4 16 4s7.129 1.392 9.028 3.455c1.925 2.09 2.97 5.07 2.97 8.544Z"/><path d="M22.999 19s0 1.987-1.059 3.844a2.286 2.286 0 0 0-.283-.631c-.281-.436-.666-.712-.972-.894c-.426-.252-1.086-.412-1.802-.517c-.762-.112-1.73-.182-2.868-.182s-2.103.07-2.863.182c-.719.106-1.372.266-1.798.513c-.313.181-.704.458-.988.898a2.262 2.262 0 0 0-.29.663C8.999 21.01 8.999 19 8.999 19h14ZM11.5 6.75a.75.75 0 0 0-1.5 0v.8A2.5 2.5 0 0 0 8 10v.205a2.5 2.5 0 0 0 2.19 2.48l.934.118a1 1 0 0 1 .876.992V14a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-.25a.75.75 0 0 0-1.5 0V14a2.5 2.5 0 0 0 2 2.45v.8a.75.75 0 0 0 1.5 0v-.8a2.5 2.5 0 0 0 2-2.45v-.205a2.5 2.5 0 0 0-2.19-2.48l-.934-.118a1 1 0 0 1-.876-.992V10a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.25a.75.75 0 0 0 1.5 0V10a2.5 2.5 0 0 0-2-2.45v-.8ZM21.25 6a.75.75 0 0 1 .75.75v.8A2.5 2.5 0 0 1 24 10v.25a.75.75 0 0 1-1.5 0V10a1 1 0 0 0-1-1H21a1 1 0 0 0-1 1v.205a1 1 0 0 0 .876.992l.934.117a2.5 2.5 0 0 1 2.19 2.48V14a2.5 2.5 0 0 1-2 2.45v.8a.75.75 0 0 1-1.5 0v-.8a2.5 2.5 0 0 1-2-2.45v-.25a.75.75 0 0 1 1.5 0V14a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.205a1 1 0 0 0-.876-.992l-.934-.117a2.5 2.5 0 0 1-2.19-2.48V10a2.5 2.5 0 0 1 2-2.45v-.8a.75.75 0 0 1 .75-.75Z"/><path d="M16.015 31c4.508 0 4.846-5.04 4.965-6.801c.012-.192.023-.346.035-.449c.1-.85-.35-1.28-.84-1.57c-.49-.29-1.96-.56-4.16-.56s-3.66.27-4.16.56c-.5.29-.95.72-.84 1.57c.013.103.024.257.037.449c.118 1.761.456 6.801 4.963 6.801ZM16 22.5a.5.5 0 0 1 .5.5v.5a.504.504 0 0 1-.007.083A1.5 1.5 0 0 1 17.5 25a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5h-.073a.427.427 0 0 0-.19.809l.974.488a1.427 1.427 0 0 1-.215 2.64c.003.02.004.041.004.063v.5a.5.5 0 0 1-1 0v-.5c0-.028.002-.056.007-.083A1.5 1.5 0 0 1 14.5 27a.5.5 0 0 1 1 0a.5.5 0 0 0 .5.5h.073a.427.427 0 0 0 .19-.809l-.974-.488a1.427 1.427 0 0 1 .215-2.64a.514.514 0 0 1-.004-.063V23a.5.5 0 0 1 .5-.5Z"/></g></svg>
                <p class="text-[#1475C4] font-semibold text-center">Investments</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1475C4" fill-rule="evenodd" d="M10.948 1.25h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V7.25c.577 0 1.065.005 1.469.046c.473.048.913.153 1.309.417c.3.201.558.459.759.76c.264.395.369.835.417 1.308c.046.452.046 1.011.046 1.68v9.789H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-9.788c0-.67 0-1.229.046-1.681c.048-.473.153-.913.417-1.309c.201-.3.459-.558.76-.759c.395-.264.835-.369 1.308-.417c.404-.041.892-.045 1.469-.046V5.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08ZM6.25 8.75c-.583 0-.994.005-1.317.038c-.355.036-.519.1-.627.173a1.25 1.25 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567v9.75h2.5V8.75Zm1.5 12.5h3.5V19a.75.75 0 0 1 1.5 0v2.25h3.5V6c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789c-.13-.13-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3c-.13.13-.237.327-.3.788C7.753 4.388 7.75 5.036 7.75 6v15.25Zm10 0h2.5V11.5c0-.718 0-1.2-.038-1.567c-.036-.355-.1-.519-.173-.627a1.25 1.25 0 0 0-.345-.345c-.108-.073-.272-.137-.627-.173c-.323-.033-.734-.037-1.317-.038v12.5ZM9.25 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 5Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 8Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>                
                <p class="text-[#1475C4] font-semibold text-center">Urban Infrastructure</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#1475C4" d="M8.5 8.5v-8h.25l.27.054c.652.13 2.315.196 2.98.196s2.329-.066 2.98-.196L15.25.5h.25v8h8v.25l-.054.27c-.13.652-.196 2.315-.196 2.98s.066 2.329.196 2.98l.054.27v.25h-8v8h-.25l-.27-.054c-.652-.13-2.315-.196-2.98-.196s-2.328.066-2.98.196l-.27.054H8.5v-8h-8v-.25l.054-.27c.13-.652.196-2.315.196-2.98S.684 9.672.554 9.02L.5 8.75V8.5h8Z"/></svg>
                <p class="text-[#1475C4] font-semibold text-center">Health and Welfare</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#1475C4" d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778v66.562z"/><path fill="#1475C4" d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"/></svg>                
                <p class="text-[#1475C4] font-semibold text-center">Education</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><circle cx="16.5" cy="2.38" r="2" fill="#1475C4"/><path fill="#1475C4" d="M24 11.88v-4.7l-5.05-2.14c-.97-.41-2.09-.06-2.65.84l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17c.8-.42 1.52-.98 2.09-1.64l.6 3l-1.16 1.1l-.94.89v7.5h2v-6l2.1-2l1.8 8H23l-2.18-11l-.62-3.1l1.8.7v3.4h2zM10.29 8.09c.22.15.47.24.72.29c.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11c.24-.1.47-.24.66-.44c.49-.49.67-1.17.55-1.8c-.07-.37-.25-.74-.55-1.03c-.19-.19-.42-.34-.66-.44c-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03c-.14.02-.28.06-.41.11c-.23.11-.46.26-.65.45c-.3.29-.48.66-.55 1.03c-.12.63.06 1.31.55 1.8c.09.1.2.18.31.26z"/><path fill="#1475C4" d="m11.24 10.56l-2-2c-.1-.1-.2-.18-.31-.26a1.93 1.93 0 0 0-.72-.28c-.13-.03-.25-.04-.38-.04c-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54c0 .18.04.37.11.55l1.07 2.95l-3.63 3.63L1.46 22l4.24-4.24v-2.22L7 16.75v5.13h2v-6l-2.12-2.12l2.36-2.36l.71.71c1.29 1.26 2.97 2.04 5.03 2.04l-.14-2.07c-1.5-.02-2.7-.62-3.6-1.52z"/></svg>                
                <p class="text-[#1475C4] font-semibold text-center">Culture and Sports</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1475C4" d="M17.5 5.5q-.825 0-1.413-.588Q15.5 4.325 15.5 3.5t.587-1.413Q16.675 1.5 17.5 1.5q.825 0 1.413.587q.587.588.587 1.413q0 .825-.587 1.412q-.588.588-1.413.588ZM11 23l2.8-14.1l-1.8.7V13h-.7l-6.75 7.925q-.025-.025-.287-.225q-.263-.2-.763-.2q-.25 0-.662.15q-.413.15-.688.7l-1.1-.95q-.15-.125-.238-.3q-.087-.175-.112-.375q-.025-.2.038-.388Q.8 19.15.925 19l3.25-3.8q.125-.175.3-.25q.175-.075.375-.1q.2-.025.388.05q.187.075.337.2L7.1 16.4L10 13V8.3l5.05-2.15q.725-.325 1.475-.075q.75.25 1.175.925l1 1.6q.6 1.05 1.738 1.725Q21.575 11 23 11v2q-1.65 0-3.087-.688q-1.438-.687-2.413-1.812l-.6 3l2.1 2V23h-2v-6l-2.1-2l-1.8 8Zm-8.5-1q0-.425.288-.712Q3.075 21 3.5 21t.713.288q.287.287.287.712t-.287.712Q3.925 23 3.5 23t-.712-.288Q2.5 22.425 2.5 22Z"/></svg>                
                <p class="text-[#1475C4] font-semibold text-center">Tourism</p>
            </div>

            <div class="w-full flex flex-col py-8 gap-2 justify-center items-center bg-white rounded-lg shadow-lg hover:border-2 hover:border-[#1475C4] hover:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1475C4" d="M20.57 10.66c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 14.77l.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V19h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11zm-8.16.34h7.19l1.03 3h-9.25l1.03-3zM12 17c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill="#1475C4" d="M14 9h1V3H7v5H2v13h1V9h5V4h6z"/><path fill="#1475C4" d="M5 11h2v2H5zm5-6h2v2h-2zM5 15h2v2H5zm0 4h2v2H5z"/></svg>                
                <p class="text-[#1475C4] font-semibold text-center">Transportation</p>
            </div>
        </div>
    </section>

    <section 
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      class="h-fit w-full space-y-6 px-12 py-16"
      >
        <p class="text-3xl font-semibold">Services offered</p>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div class="services transition-all duration-1000 w-full bg-white shadow-lg p-6 flex flex-col  items-center md:flex-row gap-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="80" viewBox="0 0 256 256"><path fill="#1475C4" d="M28.4 124.8a6 6 0 0 0 8.4-1.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.59 5.59 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.69-22.26a38 38 0 1 0-46.22 0A65.32 65.32 0 0 0 128 110.7a65.32 65.32 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.69 65.69 0 0 0 27.2 116.4a6 6 0 0 0 1.2 8.4ZM176 38a26 26 0 1 1-26 26a26 26 0 0 1 26-26Zm-96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26Zm119.11 160.13a38 38 0 1 0-46.22 0A65.32 65.32 0 0 0 128 214.7a65.32 65.32 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.69 65.69 0 0 0 27.2 220.4a6 6 0 1 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.59 5.59 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.68-22.26ZM80 142a26 26 0 1 1-26 26a26 26 0 0 1 26-26Zm96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26Z"/></svg>
                <div class="flex flex-col gap-2 items-center md:items-start">
                    <p class="font-bold text-lg">Individual Services</p>
                    <p class="text-[#37423B]">Community events, safety tips, recreation options, education resources, health services, housing assistance, transportation options.</p>
                </div>
            </div>
            <div class="services transition-all duration-1000 w-full bg-white shadow-lg p-6 flex flex-col  items-center md:flex-row gap-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="80" viewBox="0 0 16 16"><path fill="#1475C4" d="M6 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-.5 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm.5 2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM7.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM8 7a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm1 0V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V13h2.146a2.33 2.33 0 0 0-.14 1H3.5a.5.5 0 0 1-.5-.5v-10A1.5 1.5 0 0 1 4.5 2h4A1.5 1.5 0 0 1 10 3.5V7H9Zm2.5 2.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Zm1.5 4.063c0 1.09-.857 2.187-3 2.187s-3-1.094-3-2.188c0-.724.576-1.312 1.286-1.312h3.428c.71 0 1.286.588 1.286 1.313Zm.477 1.687h.023c1.786 0 2.5-.941 2.5-1.875c0-.621-.48-1.125-1.071-1.125h-1.333c.256.375.404.829.404 1.313c0 .582-.166 1.173-.523 1.687ZM15 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"/></svg>                
                <div class="flex flex-col gap-2 items-center md:items-start">
                    <p class="font-bold text-lg">Business Services</p>
                    <p class="text-[#37423B]">Economic development opportunities, permits & licenses, business support programs, market data, procurement opportunities, local business news.</p>
                </div>
            </div>
            <div class="services transition-all duration-1000 w-full bg-white shadow-lg p-6 flex flex-col items-center md:flex-row gap-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="80" viewBox="0 0 20 20"><path fill="#1475C4" d="M3.5 3A1.5 1.5 0 0 0 3 5.915V16.5a.5.5 0 0 0 .5.5H10v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V16H4V6h12v2.405c.052.041.102.086.15.134c.223.229.513.49.85.729V5.915A1.5 1.5 0 0 0 16.5 3h-13ZM3 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM9 16H6v-3h3v3Zm6-7.938V7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4.583c.185-.528.65-.885 1.14-1H6V8h8v.405a1.61 1.61 0 0 1 1-.342Zm3.501 2.903c-1.37-.193-2.486-1.134-3.066-1.726a.624.624 0 0 0-.87 0c-.58.592-1.695 1.533-3.066 1.726c-.274.038-.499.259-.499.535V14c0 3.468 3.182 4.727 3.87 4.959a.4.4 0 0 0 .26 0C15.818 18.727 19 17.469 19 14v-2.5c0-.276-.225-.497-.499-.535Z"/></svg>                
                <div class="flex flex-col gap-2 items-center md:items-start">
                    <p class="font-bold text-lg">Government Services</p>
                    <p class="text-[#37423B]">Contact departments, public works updates, permitting guidelines, tax payment options, election information, public records access, community engagement opportunities.</p>
                </div>
            </div>
        </div>
    </section>
    </main>
</template>

<style scoped>
.bounce{
    animation: bounce 2s infinite alternate ease-in-out;
    opacity: 0.2;
}
@keyframes bounce{
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(18px);
    }
}

.services:hover{
    background: linear-gradient(to right, #5FA4F9, #1475C4);
    transform: translateY(-10px);
    transition: all 1s;
}
.services:hover p{
    color: whitesmoke;
}
</style>