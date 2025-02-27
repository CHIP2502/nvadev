onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);
    };

    // Tự động kích hoạt sự kiện click để "đánh lừa" chính sách tự động phát
    document.addEventListener('DOMContentLoaded', function() {
      var audioPlayer = document.getElementById('audioPlayer');
      if (audioPlayer) {
        audioPlayer.play();
        audioPlayer.pause();

        // Ẩn đi thanh điều khiển khi không phải tương tác
        audioPlayer.controls = false;
      }
    });