class HomeContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Layanan -->
    <section class="max-w-full">
        <div id="layanan" class="flex flex-wrap justify-center pb-10 px-6 lg:px-32 mx-auto max-w-screen-xl gap-4 md:py-16">
            
        </div>
    </section>
    <!-- Tes Gizi -->
    <section class="max-w-full">
        <div class="flex flex-wrap flex-row justify-center items-center py-8 px-6 md:gap-8 md:py-24">
            <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg" src="./health-professional-team-animate.svg" alt="">
            <div data-aos="fade-right"
                class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100 lg:text-4xl">Tes Gizi</h1>
                <p class="text-center lg:text-left">Tes ini akan memberikan pemahaman yang lebih baik tentang kebutuhan gizi individu, membantu pengguna dalam
                mengoptimalkan pola makan mereka, dan mencapai keseimbangan gizi yang lebih baik.</p>
                <button type="button"
                    class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Coba Sekarang</button>
            </div>
        </div>
    </section>
    <!-- Artikel -->
    <section class="max-w-full bg-gray-100">
        <div class="flex flex-wrap flex-row-reverse justify-center items-center py-8 px-6 md:gap-8 md:py-24">
            <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg"
                src="./health-professional-team-animate.svg" alt="">
            <div data-aos="fade-right"
                class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-end md:text-lg md:py-0">
                <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100  lg:text-4xl">Artikel</h1>
                <p class="text-center lg:text-right">Konten-konten informatif di GiziPlus membantu pengguna memahami pentingnya gizi dan memberikan langkah-langkah praktis
                untuk menerapkannya dalam kehidupan sehari-hari. Dengan artikel, tips, dan panduan ini, pengguna dapat membuat pilihan
                makanan yang tepat, menyesuaikan pola makan, dan mencapai gaya hidup sehat yang berkelanjutan.</p>
                <button type="button"
                    class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Baca Sekarang</button>
            </div>
        </div>
    </section>
    <!-- Gabung -->
    <section class="max-w-full">
        <div class="flex flex-wrap justify-center items-center py-8 px-6 md:gap-8 md:py-24">
            <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg"
                src="./health-professional-team-animate.svg" alt="">
            <div data-aos="fade-right"
                class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                <h1 class="text-2xl font-extrabold mb-6 text-center lg:text-4xl lg:text-left">Ayo Kita Jaga Kesehatan Bersama GiziPlus</h1>
                <p class="text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                    deserunt possimus inventore laboriosam, nemo quidem labore, quasi aut exercitationem temporibus
                    facilis in odit! Mollitia et nihil amet incidunt. Vero, distinctio!</p>
                <button type="button"
                    class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Gabung Sekarang</button>
            </div>
        </div>
    </section>
            `;
  }
}

customElements.define('home-content', HomeContent);
