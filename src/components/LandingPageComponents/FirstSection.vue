



<template>
    <section class="w-full relative overflow-hidden  h-fit lg:h-screen md:h-[80vh] bg-gradient-to-r from-blue-400 to-[#1475C4]">
        <img width="170" src="../../assets/images/header-shape-1.png" class="bounce z-0 absolute top-0 left-8" alt="">
        <img width="170" src="../../assets/images/header-shape-2.png" class="bounce z-0 absolute bottom-0 right-8" alt="">
        <div class="grid md:grid-cols-2 gap-10 items-center h-full md:py-0 py-12 md:px-12 px-4">
            <div class="text-[whitesmoke] flex flex-col gap-8 items-center md:items-start overflow-hidden">
                <p class="text-sm">Discover the city</p>
                <div class="flex justify-between w-[300%] overflow-hidden slide">
                    <p class="w-full lg:text-5xl md:text-start md:text-4xl text:3xl font-bold text-center">Cooperation has become a central element</p>
                    <p class="w-full lg:text-5xl md:text-start md:text-4xl text:3xl font-bold text-center">We developing a happy and sustainable city</p>
                    <p class="w-full lg:text-5xl md:text-start md:text-4xl text:3xl font-bold text-center">Our citizens are our top priority</p>
                </div>
                <p class="bg-[#F9FBFE] w-fit px-6 py-2 text-[#1475C4] rounded-lg font-semibold">Learn more</p>
            </div> 
            <div>
                <img class="w-full" src="../../assets/images/shomolu.jpg" alt="">
            </div>
        </div>
    </section>
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

.slide{
    animation: slide 15s infinite alternate ease-in-out 3s;
    position: relative;
}
@keyframes slide{
    10%{
        left: 0;
    }
    20%{
        left: 0;
    }
    30%{
        left: 0;
    }
    40%{
        left: -100%;
    }
    50%{
        left: -100%;
    }
    60%{
        left: -100%;
    }
    70%{
        left: -100%;
    }
    80%{
        left: -200%;
    }
    90%{
        left: -200%;
    }
    100%{
        left: -200%;
    }
}
</style>