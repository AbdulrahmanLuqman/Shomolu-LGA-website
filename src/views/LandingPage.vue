<!-- everything here was done in the LandingPage branch -->
<script>
import { defineComponent } from 'vue';
import FirstSection from '../components/LandingPageComponents/FirstSection.vue';
import SecondSection from '../components/LandingPageComponents/SecondSection.vue';
import ThirdSection from '../components/LandingPageComponents/ThirdSection.vue';
import FifthSection from '../components/LandingPageComponents/FifthSection.vue'



export default defineComponent({
    data() {
        return {};
    },
    components: { FirstSection, SecondSection, ThirdSection, FifthSection }
})
</script>

<template>
    <main class="bg-[whitesmoke]">
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FifthSection />
    <!-- population  597,400, programs 391, square miles 4.5-->
    </main>
</template>

