<template>
    <section 
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      class="h-fit w-full space-y-6 md:px-12 py-16 px-4"
      >
        <p class="md:text-3xl text-xl font-semibold">Services offered</p>

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
</template>

<style scoped>
.services:hover{
    background: linear-gradient(to right, #5FA4F9, #1475C4);
    transform: translateY(-10px);
    transition: all 1s;
}
.services:hover p{
    color: whitesmoke;
}

</style>