import sharp from 'sharp';
import fs from 'fs';

const width = 1200;
const height = 630;

/**
 * Generate Meme-style Social Preview Card (OG Image)
 * Recreating the iconic "Hire me to unlock my full potential" resume meme
 * using Supawich's real formal portrait photo!
 */
async function createSocialPreview() {
  console.log('Generating meme social preview card...');

  // 1. Extract and process Supawich's photo
  // Original supawich_profile.webp is 318x320
  const cropW = 195;
  const cropH = 96;
  const { data, info } = await sharp('src/data/supawich_profile.webp')
    .extract({ left: 62, top: 32, width: cropW, height: cropH })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Convert the studio blue background to clean photo studio off-white/grey like the meme
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Detect blue background pixels
    if (b > 170 && b > r + 75 && b > g + 45) {
      data[i] = 244;
      data[i + 1] = 246;
      data[i + 2] = 249;
    }
  }

  const photoTargetW = 168;
  const photoTargetH = 112;
  const photoRadius = 10;

  const processedBuffer = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 3 },
  })
    .resize(photoTargetW, photoTargetH, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  const photoMask = Buffer.from(
    `<svg width="${photoTargetW}" height="${photoTargetH}"><rect x="0" y="0" width="${photoTargetW}" height="${photoTargetH}" rx="${photoRadius}" ry="${photoRadius}" fill="#fff"/></svg>`
  );

  const roundedPhoto = await sharp(processedBuffer)
    .composite([{ input: photoMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Subtle border / photo paper edge
  const borderedPhoto = await sharp(roundedPhoto)
    .extend({
      top: 1,
      bottom: 1,
      left: 1,
      right: 1,
      background: 'rgba(0, 0, 0, 0.12)',
    })
    .png()
    .toBuffer();

  // 2. Paper layout & rotation
  const angleDeg = 2.0; // slight authentic clockwise camera angle
  const paperW = 860;
  const paperH = 720;
  const paperX = (width - paperW) / 2 + 10;
  const paperY = -42;

  // Photo relative to paper
  const photoRelX = 75;
  const photoRelY = 75;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Warm Kraft Envelope Background Gradient -->
      <radialGradient id="deskGrad" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#E0BA8C" />
        <stop offset="35%" stop-color="#CEAA78" />
        <stop offset="70%" stop-color="#BC9765" />
        <stop offset="100%" stop-color="#9E7A4A" />
      </radialGradient>

      <!-- Realistic Paper Drop Shadow -->
      <filter id="paperShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="-6" dy="16" stdDeviation="22" flood-color="#2D1B0D" flood-opacity="0.46" />
        <feDropShadow dx="3" dy="5" stdDeviation="7" flood-color="#1A0F07" flood-opacity="0.25" />
      </filter>

      <!-- Paper Lighting Gradient (Authentic paper with room lighting from top-left) -->
      <linearGradient id="paperLight" x1="10%" y1="5%" x2="95%" y2="95%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#FBFBFD" />
        <stop offset="85%" stop-color="#F2F3F6" />
        <stop offset="100%" stop-color="#E8EAEE" />
      </linearGradient>

      <!-- Badge Gradient -->
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#2E3440" />
        <stop offset="60%" stop-color="#3B4252" />
        <stop offset="100%" stop-color="#4C566A" />
      </linearGradient>
    </defs>

    <!-- Background Surface (Kraft envelope / desk) -->
    <rect width="${width}" height="${height}" fill="url(#deskGrad)" />

    <!-- Creases on envelope / background -->
    <path d="M -50,110 Q 500,80 1250,160" stroke="rgba(255,255,255,0.14)" stroke-width="3" fill="none" />
    <path d="M -50,112 Q 500,82 1250,162" stroke="rgba(0,0,0,0.08)" stroke-width="2" fill="none" />
    <line x1="120" y1="0" x2="220" y2="630" stroke="rgba(0,0,0,0.05)" stroke-width="3" />
    <line x1="1050" y1="0" x2="1140" y2="630" stroke="rgba(0,0,0,0.06)" stroke-width="3" />

    <!-- Paper Sheet rotated clockwise by +2.0 deg -->
    <g transform="rotate(${angleDeg}, ${width / 2}, ${height / 2})">
      <rect x="${paperX}" y="${paperY}" width="${paperW}" height="${paperH}" rx="2" ry="2" fill="url(#paperLight)" filter="url(#paperShadow)" />

      <!-- Section: Objectives (Top Right) -->
      <g transform="translate(${paperX + 270}, ${paperY + 75})">
        <!-- Objectives Badge -->
        <rect x="0" y="0" width="480" height="34" rx="7" fill="url(#badgeGrad)" />
        <line x1="170" y1="17" x2="470" y2="17" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />

        <!-- User Icon -->
        <circle cx="20" cy="13" r="5" fill="#FFFFFF" />
        <path d="M 12,25.5 C 12,20 16,19.5 20,19.5 C 24,19.5 28,20 28,25.5 Z" fill="#FFFFFF" />

        <!-- Objectives Title -->
        <text x="36" y="23" font-family="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16.5" font-weight="700" fill="#FFFFFF" letter-spacing="0.2px">Objectives</text>

        <!-- Paragraph text below Objectives -->
        <text x="6" y="55" font-family="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#2D3748">To be part of your company wherein I can enhance my</text>
        <text x="6" y="75" font-family="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#2D3748">skills and gain more knowledge as well as develop my</text>
        <text x="6" y="95" font-family="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#2D3748">personality as a career person.</text>

        <!-- Education Badge (with empty space underneath) -->
        <g transform="translate(0, 118)">
          <rect x="0" y="0" width="480" height="34" rx="7" fill="url(#badgeGrad)" />
          <line x1="170" y1="17" x2="470" y2="17" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />

          <!-- Graduation Cap Icon -->
          <path d="M 20,9.5 L 8,15.5 L 20,21.5 L 32,15.5 Z" fill="#FFFFFF" />
          <path d="M 13,18.5 L 13,24 C 13,26 16.5,27.5 20,27.5 C 23.5,27.5 27,26 27,24 L 27,18.5" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
          <path d="M 30,17 L 30,24.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="30" cy="25" r="1.3" fill="#FFFFFF" />

          <!-- Education Title -->
          <text x="38" y="23" font-family="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16.5" font-weight="700" fill="#FFFFFF" letter-spacing="0.2px">Education</text>
        </g>
      </g>

      <!-- Center-Lower Punchline -->
      <g transform="translate(${paperX + paperW / 2}, ${paperY + 475})">
        <text x="0" y="0" text-anchor="middle" font-family="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Prompt', sans-serif" font-size="36" font-weight="800" fill="#0A0F1D" letter-spacing="-0.4px">Hire me to unlock my full potential</text>
      </g>
    </g>
  </svg>
  `;

  // Rotate photo by +2.0 deg
  const rotatedPhoto = await sharp(borderedPhoto)
    .rotate(angleDeg, { background: 'transparent' })
    .png()
    .toBuffer();

  const rotMeta = await sharp(rotatedPhoto).metadata();

  // Position calculation for rotated photo
  const unrotCenterX = paperX + photoRelX + photoTargetW / 2;
  const unrotCenterY = paperY + photoRelY + photoTargetH / 2;

  const angleRad = (angleDeg * Math.PI) / 180;
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);
  const dx = unrotCenterX - width / 2;
  const dy = unrotCenterY - height / 2;
  const rotCenterX = width / 2 + (dx * cosA - dy * sinA);
  const rotCenterY = height / 2 + (dx * sinA + dy * cosA);

  const finalPhotoLeft = Math.round(rotCenterX - rotMeta.width / 2);
  const finalPhotoTop = Math.round(rotCenterY - rotMeta.height / 2);

  // Output to both public/social-image.png and build/social-image.png (if build exists)
  const outputPath = 'public/social-image.png';
  await sharp(Buffer.from(svg))
    .composite([
      {
        input: rotatedPhoto,
        left: finalPhotoLeft,
        top: finalPhotoTop,
      },
    ])
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(outputPath);

  if (fs.existsSync('build')) {
    fs.copyFileSync(outputPath, 'build/social-image.png');
  }

  console.log(`Saved meme social preview card to ${outputPath}!`);
}

createSocialPreview().catch(console.error);
