<template>
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      class="h-fit w-full space-y-6 grid gap-10 lg:grid-cols-2 md:px-12 py-16 px-4">
      <div class="space-y-4">
        <p class="text-[#1475C4]">Local council services</p>
        <h1 class="text-4xl text-[#37423B] font-semibold">Councilors are Responsible for Services across the Whole of a Local Government</h1>
        <p>Our councilors play a crucial role in managing and delivering services throughout the local government. They are dedicated individuals who work tirelessly to serve the community and ensure the well-being of its residents.</p>
        <div class="space-y-2">
            <h1 class="text-2xl text-[#37423B] font-semibold">Understand how our council works:</h1>
            <ul class="list">
              <li class="">The council consists of elected representatives who make decisions on behalf of the community.</li>
              <li class="">Decisions are made through a democratic process, involving discussions, debates, and voting.</li>
              <li class="">Council meetings are held regularly to address community issues and set policies.</li>
              <li class="">The council is responsible for various areas such as infrastructure, public services, and planning.</li>
              <li class="">Citizens can participate in council meetings, voice concerns, and provide feedback.</li>
              <li class="">The council collaborates with local organizations and stakeholders to improve the community.</li>
            </ul>
        </div>
        <RouterLink to="/services"><p class="bg-[#1475C4] text-white w-fit rounded-lg px-6 py-2 mt-4 hover:bg-[transparent] hover:border-2 hover:text-[#1475C4] hover:border-[#1475C4]">Learn More</p></RouterLink>
      </div>
      <div>
        <img src="../../assets/images/garbage.jpg" alt="">
      </div>
    </section>
</template>

<style scoped>
.list li::before {
  content: "";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #1475C4;
  margin-right: 0.5rem;
}
</style>