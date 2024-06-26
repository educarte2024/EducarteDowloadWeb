// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los botones
    const btnDescarga = document.getElementById('btnDescarga');
    const btnDescubre = document.getElementById('btnDescubre');
  
    // Función para redirigir a Google
    btnDescarga.onclick = function() {
      window.location.href = 'https://drive.google.com/file/d/1eq-9PqNhcEDaBsTHvHDdSBzlfMpewDgj/view?usp=sharing';
    };
  
    // Función para redirigir a YouTube
    btnDescubre.onclick = function() {
      window.location.href = 'https://educarte2024.github.io/web/?fbclid=IwZXh0bgNhZW0CMTAAAR1__pwPwaB_U7i95d77lrer9bUvHMzQDBfOODdwQPyIpBEA_r89bgV6G3I_aem_vHD1_7MINXuTmjEoiscq8w';
    };
  });
  