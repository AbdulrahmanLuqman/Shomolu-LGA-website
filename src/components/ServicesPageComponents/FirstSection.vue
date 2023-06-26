<template>
    <section class="relative h-[300px] w-full">
        <div class="absolute h-full top-0 w-full">
          <img src="../../assets/images/shomolu.jpg" class="h-full w-full" alt="">
        </div>
        <div class="absolute top-0 bg-[#37423B] w-full h-full opacity-75">

        </div>
        <div class="absolute top-0 w-full h-full flex flex-col space-y-4 items-center justify-center">
            <p class="text-white text-5xl font-bold">Services</p>
            <div class="flex gap-4">
                <RouterLink to="/" class="text-white text-lg font-semibold">Home</RouterLink>
                <p class="text-lg text-white">/</p>
                <p class="text-blue-300 text-lg font-semibold">Services</p>
            </div>
        </div>
    </section>
</template>