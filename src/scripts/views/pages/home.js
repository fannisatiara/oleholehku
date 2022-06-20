const Home = {
  async render() {
    return /* html */`
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container text-center position-relative">
            <h1 data-aos="zoom-in" data-aos-delay="100">Jelajahi Keunikan Indonesia</h1>
            <h2 data-aos="zoom-in" data-aos-delay="200">Temukan Buah Tangan Khas Indonesia yang Wajib Dibawa Pulang</h2>
            <a data-aos="zoom-in" data-aos-delay="400" href="#/about" class="btn-get-started scrollto">Mulai</a>
        </div>
    </section><!-- End Hero -->
    
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
