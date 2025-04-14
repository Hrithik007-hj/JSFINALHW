window.addEventListener('load', function () {
  const images = document.querySelectorAll('.thumb');
  const previewImage = document.getElementById('largeImage');
  const previewBox = document.getElementById('preview');
  const previewText = document.getElementById('previewText');

  for (let i = 0; i < images.length; i++) {
    const img = images[i];

    img.setAttribute('tabindex', '0');

    const showPreview = () => {
      previewImage.src = img.src;
      previewImage.alt = img.alt;
      previewImage.classList.add('show');
      previewText.style.opacity = '0'; 
      previewBox.setAttribute('data-title', img.alt);
    };

    const hidePreview = () => {
      previewImage.classList.remove('show');
      previewImage.src = '';
      previewImage.alt = '';
      previewText.style.opacity = '1'; 
      previewBox.removeAttribute('data-title');
    };

    img.addEventListener('mouseover', showPreview);
    img.addEventListener('focus', showPreview);

    img.addEventListener('mouseout', hidePreview);
    img.addEventListener('blur', hidePreview);
  }
});