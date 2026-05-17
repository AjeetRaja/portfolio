const fs = require('fs');
const path = require('path');

const src1 = "C:\\Users\\black\\.gemini\\antigravity\\brain\\7cc331c5-15fc-418f-9a4f-575eb2014e68\\ecommerce_platform_1778929596039.png";
const src2 = "C:\\Users\\black\\.gemini\\antigravity\\brain\\7cc331c5-15fc-418f-9a4f-575eb2014e68\\fintech_dashboard_1778929622436.png";

const outDir = path.join(__dirname, 'public', 'projects');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

try {
  fs.copyFileSync(src1, path.join(outDir, 'ecommerce.png'));
  fs.copyFileSync(src2, path.join(outDir, 'fintech.png'));
  fs.copyFileSync(src1, path.join(outDir, 'ai.png'));
  fs.copyFileSync(src2, path.join(outDir, 'nft.png'));
  console.log("Images copied successfully");
} catch (err) {
  console.error("Error copying images:", err);
}
