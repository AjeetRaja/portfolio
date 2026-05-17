const fs = require('fs');
const path = require('path');
const { createCanvas } = require('@napi-rs/canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

const sourceDir = path.resolve('public/certificates');
const conversions = [
  {
    src: 'MD2025-M202510 (7).pdf',
    dest: 'TN_Skill_Certificate.png',
  },
  {
    src: 'MD2025-M202510 (6).pdf',
    dest: 'TN_Skill_Scorecard.png',
  },
];

async function convertFile(item) {
  const sourcePath = path.join(sourceDir, item.src);
  const destPath = path.join(sourceDir, item.dest);
  console.log(`Converting ${item.src} -> ${item.dest}`);

  const data = fs.readFileSync(sourcePath);
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDocument = await loadingTask.promise;
  const page = await pdfDocument.getPage(1);
  const scale = 2.5;
  const viewport = page.getViewport({ scale });

  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext('2d');

  const renderContext = {
    canvasContext: context,
    viewport,
  };

  await page.render(renderContext).promise;
  const pngBuffer = canvas.toBuffer('image/png');
  fs.writeFileSync(destPath, pngBuffer);

  console.log(`Saved ${item.dest} (${pngBuffer.length} bytes)`);
}

async function convertFiles() {
  for (const item of conversions) {
    await convertFile(item);
  }
}

convertFiles().catch((error) => {
  console.error('Conversion failed:', error);
  process.exit(1);
});