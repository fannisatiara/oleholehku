const Home = {
  async render() {
    return `
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container text-center position-relative">
            <h1>Jelajahi Keunikan Indonesia</h1>
            <h2>Temukan Buah Tangan Khas Indonesia yang Wajib Dibawa Pulang</h2>
            <a href="#/about" class="btn-get-started scrollto">Mulai</a>
        </div>
    </section><!-- End Hero -->
    
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
