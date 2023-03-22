<template>
      <div class="font-sans">
        <div class="flex flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                    
                      <router-link to="/chat">
                        <img src="https://media.istockphoto.com/id/1366005418/photo/start-now-neon-motivation-concept.jpg?s=170x170&k=20&c=r_GuFwATQH1j9JQNDryTr98s4CHaJdUXyErl04DBNM0=" class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="">
                      </router-link>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700"> Ask Buddy </p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Nerdy </p>
                        </div>
                        <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span class="z-10 -mr-2 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src="https://lh3.googleusercontent.com/a/AGNmyxaa82kMC2adDXUQk5VY3E4xPo5NxPv4vmpD50XKJg=s288" alt="">
                            </span>
                           
                        </div>
                    </div>
                 
                </div>
            </div>
            <p class="font-normal text-navy-700 text-gray-600 mt-20 mx-auto w-max">Created With Vue Js and Open AI'S API</p>  
        </div>
      </div>	
</template>

<script>
export default {

  name: 'HomePage',

  data () {
    return {

    }
  },
 
}
</script>

<style lang="css" scoped>
</style>