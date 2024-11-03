// Fungsi untuk menampilkan elemen saat di-scroll
function scrollReveal() {
    const elements = document.querySelectorAll('[data-scroll]');
  
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Jika elemen terlihat di layar, tambahkan class "visible"
      if (position < windowHeight - 100) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
  
  // Panggil scrollReveal saat halaman di-scroll
  window.addEventListener('scroll', scrollReveal);
  
  // Panggil sekali saat halaman pertama kali dimuat
  scrollReveal();
  
  // Menambahkan efek saat scroll
window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.content img');
    
    contents.forEach((img, index) => {
      const scrollPosition = window.pageYOffset;
      const imgPosition = img.offsetTop;
      
      // Mengubah opacity gambar saat scroll
      if (scrollPosition > imgPosition - 400) {
        img.style.opacity = 1 - (scrollPosition - imgPosition + 400) / 400;
      } else {
        img.style.opacity = 1; // Reset opacity saat scroll ke atas
      }
    });
  });
  