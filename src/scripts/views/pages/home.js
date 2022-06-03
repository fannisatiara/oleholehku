const Home = {
  async render() {
    return `
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container text-center position-relative">
            <h1>Explore The Uniqueness Of Indonesia</h1>
            <h2>Let's Bring Some Memorable Goodies Back Home</h2>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
    </section><!-- End Hero -->
    
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
