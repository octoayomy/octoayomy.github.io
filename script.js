
// Tahun dinamis
document.getElementById('tahun').textContent = new Date().getFullYear();

// Toggle menu responsif
document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// Dark mode switch
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  // Simpan preferensi pengguna
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Tombol dark mode desktop dan mobile
document.getElementById('dark-toggle').addEventListener('click', toggleDarkMode);
document.getElementById('dark-toggle-mobile').addEventListener('click', toggleDarkMode);

// Inisialisasi dark mode berdasarkan localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
