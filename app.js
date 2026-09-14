const content = document.querySelector('#content');
const count = document.querySelector('#char-count');
const foreground = document.querySelector('#foreground');
const background = document.querySelector('#background');
const qrContainer = document.querySelector('#qrcode');
const downloadButton = document.querySelector('#download-button');

function selectedSize() { return Number(document.querySelector('input[name="size"]:checked').value); }
function updateQr() {
  const value = content.value.trim() || 'QuickCode';
  const size = selectedSize();
  count.textContent = `${content.value.length} / 1200`;
  document.querySelector('#foreground-value').textContent = foreground.value.toUpperCase();
  document.querySelector('#background-value').textContent = background.value.toUpperCase();
  qrContainer.replaceChildren();
  new QRCode(qrContainer, { text: value, width: size, height: size, colorDark: foreground.value, colorLight: background.value, correctLevel: QRCode.CorrectLevel.H });
}

let debounce;
content.addEventListener('input', () => { clearTimeout(debounce); debounce = setTimeout(updateQr, 180); });
[foreground, background, ...document.querySelectorAll('input[name="size"]')].forEach(input => input.addEventListener('input', updateQr));
document.querySelector('#clear-button').addEventListener('click', () => { content.value = ''; content.focus(); updateQr(); });
downloadButton.addEventListener('click', () => {
  const source = qrContainer.querySelector('canvas, img');
  if (!source) return;
  const canvas = document.createElement('canvas');
  canvas.width = source.width; canvas.height = source.height;
  const context = canvas.getContext('2d');
  context.drawImage(source, 0, 0);
  const link = document.createElement('a');
  link.download = 'qr-gen.png'; link.href = canvas.toDataURL('image/png'); link.click();
});
updateQr();
