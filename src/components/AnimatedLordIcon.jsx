import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

const iconJsonCache = new Map();

function hexToLottieRgba(hex) {
  if (!hex || typeof hex !== 'string') return [1, 0.42, 0.29, 1];
  const clean = hex.replace('#', '').trim();
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return [1, 0.42, 0.29, 1];
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  return [Number(r.toFixed(4)), Number(g.toFixed(4)), Number(b.toFixed(4)), 1];
}

function applyColorsToLottie(node, primaryRgba, secondaryRgba) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      applyColorsToLottie(node[i], primaryRgba, secondaryRgba);
    }
    return;
  }

  // Update ADBE Color Control effects in 'Color & Stroke Change' / 'control' layer
  if (node._colorSlot === 'primary' && node.ef && node.ef[0] && node.ef[0].v) {
    node.ef[0].v.k = primaryRgba;
  } else if (node._colorSlot === 'secondary' && node.ef && node.ef[0] && node.ef[0].v) {
    node.ef[0].v.k = secondaryRgba;
  }

  // Update direct stroke/fill fallback colors
  if ((node.ty === 'st' || node.ty === 'fl') && node.c) {
    const role = node._colorRole || node.cl;
    if (role === 'secondary') {
      node.c.k = secondaryRgba;
    } else if (role === 'primary') {
      node.c.k = primaryRgba;
    }
  }

  for (const key of Object.keys(node)) {
    applyColorsToLottie(node[key], primaryRgba, secondaryRgba);
  }
}

export default function AnimatedLordIcon({
  src,
  trigger = 'hover',
  size = 32,
  primaryColor,
  secondaryColor,
  state,
  target,
}) {
  const theme = useTheme();
  const [blobUrl, setBlobUrl] = useState(null);

  const primary = primaryColor || theme.palette.primary.main;
  const secondary =
    secondaryColor ||
    (theme.palette.mode === 'dark'
      ? theme.palette.secondary.light || theme.palette.secondary.main
      : theme.palette.secondary.main);

  useEffect(() => {
    let active = true;
    let currentBlobUrl = null;

    async function buildColoredIcon() {
      if (!src) return;
      try {
        let baseData = iconJsonCache.get(src);
        if (!baseData) {
          const res = await fetch(`${src}?v=${Date.now()}`);
          baseData = await res.json();
          iconJsonCache.set(src, baseData);
        }
        if (!active) return;

        const cloned = JSON.parse(JSON.stringify(baseData));
        const primaryRgba = hexToLottieRgba(primary);
        const secondaryRgba = hexToLottieRgba(secondary);
        applyColorsToLottie(cloned, primaryRgba, secondaryRgba);

        const blob = new Blob([JSON.stringify(cloned)], { type: 'application/json' });
        currentBlobUrl = URL.createObjectURL(blob);
        setBlobUrl(currentBlobUrl);
      } catch (err) {
        if (active) setBlobUrl(src);
      }
    }

    buildColoredIcon();

    return () => {
      active = false;
      if (currentBlobUrl) {
        URL.revokeObjectURL(currentBlobUrl);
      }
    };
  }, [src, primary, secondary]);

  if (!blobUrl) {
    return (
      <span
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: 'inline-flex',
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <lord-icon
      key={`${src}-${primary}-${secondary}`}
      src={blobUrl}
      trigger={trigger}
      state={state}
      target={target}
      colors={`primary:${primary},secondary:${secondary}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        flexShrink: 0,
      }}
    />
  );
}
