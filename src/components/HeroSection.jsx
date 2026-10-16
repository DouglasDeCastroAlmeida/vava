import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Paper,
  Avatar,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  WhatsApp,
  LocationOnRounded,
  TheaterComedyRounded,
  VerifiedRounded,
  OpenInNewRounded,
  LinkRounded,
} from '@mui/icons-material';
import { ARTIST_INFO } from '../data/portfolioData';
import AnimatedLordIcon from './AnimatedLordIcon';
import { assetUrl } from '../utils/assetUrl';

const STAT_LORDICONS = [
  assetUrl('/assets/icons/film.json'),
  assetUrl('/assets/icons/microphone.json'),
  assetUrl('/assets/icons/star.json'),
  assetUrl('/assets/icons/location.json'),
];

const HERO_PORTRAITS = [
  {
    src: ARTIST_INFO.profileImage,
    label: 'Claquete Oficial (Linktree)',
    caption: 'Atriz & Comediante • Pronta para o Set e para o Palco',
    objectPosition: 'center center',
  },
  {
    src: assetUrl('/assets/ensaio/cdgleonardo-849.jpg'),
    label: 'Palco & Comédia',
    caption: 'Presença de Palco & Energia Cômica',
    objectPosition: 'center 18%',
  },
  {
    src: assetUrl('/assets/ensaio/cdgleonardo-354.jpg'),
    label: 'Dramaturgia & TV',
    caption: 'Primeiro Plano para Cinema, Séries & Novelas',
    objectPosition: 'center 15%',
  },
  {
    src: assetUrl('/assets/ensaio/cdgleonardo-944.jpg'),
    label: 'Camarim & Bastidores',
    caption: 'Concentração Antes de Entrar em Cena',
    objectPosition: 'center 20%',
  },
];

export default function HeroSection({ onNavigate }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [selectedPortrait, setSelectedPortrait] = useState(0);

  const activePhoto = HERO_PORTRAITS[selectedPortrait];

  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 5, md: 8 },
        pb: { xs: 7, md: 10 },
        backgroundImage: `
          radial-gradient(circle at 18% 20%, ${alpha(theme.palette.primary.main, isDark ? 0.16 : 0.10)} 0%, transparent 45%),
          radial-gradient(circle at 82% 25%, ${alpha(theme.palette.secondary.main, isDark ? 0.18 : 0.10)} 0%, transparent 50%),
          linear-gradient(180deg, ${alpha(theme.palette.background.default, isDark ? 0.90 : 0.93)} 0%, ${theme.palette.background.default} 100%),
          url('${assetUrl('/assets/theater/stage-spotlight.jpg')}')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' },
            gap: { xs: 5, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Left Column: Artist Presentation */}
          <Stack spacing={3}>
            <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
              <Chip
                icon={<TheaterComedyRounded />}
                label="ATRIZ & COMEDIANTE STAND-UP"
                color="primary"
                sx={{ px: 1, py: 2, fontSize: '0.78rem', borderRadius: '8px' }}
              />
              <Chip
                icon={<LocationOnRounded />}
                label="Goiânia (GYN) ⇄ Rio de Janeiro (RJ)"
                variant="outlined"
                color="secondary"
                sx={{
                  py: 2,
                  fontSize: '0.78rem',
                  borderRadius: '8px',
                  bgcolor: alpha(theme.palette.background.paper, 0.72),
                }}
              />
            </Stack>

            <Box>
              <Typography variant="h1" sx={{ mb: 1.5 }}>
                Valesca Almeida{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  &ldquo;Vavá&rdquo;
                </Box>
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary',
                  maxWidth: 640,
                  lineHeight: 1.35,
                }}
              >
                Da força visceral do teatro e do stand-up comedy às lentes da televisão e do audiovisual.
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                maxWidth: 650,
              }}
            >
              {ARTIST_INFO.shortBio}
            </Typography>

            {/* Primary CTA Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<WhatsApp />}
                onClick={() => onNavigate('contato')}
                sx={{ py: 1.5, px: 3.4, fontSize: '0.96rem', borderRadius: '10px' }}
              >
                Contratar / Solicitar Orçamento
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<LinkRounded />}
                endIcon={<OpenInNewRounded fontSize="small" />}
                href={ARTIST_INFO.contact.linktree}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  py: 1.5,
                  px: 3,
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  bgcolor: alpha(theme.palette.background.paper, 0.65),
                }}
              >
                Linktree Oficial
              </Button>
            </Stack>

            {/* 4 Value Indicators with Animated Lordicon Icons */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                gap: 2,
                pt: 1.5,
              }}
            >
              {ARTIST_INFO.stats.map((stat, index) => (
                <Paper
                  key={index}
                  className={`hero-stat-card-${index}`}
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    bgcolor: alpha(theme.palette.background.paper, 0.85),
                    backdropFilter: 'blur(12px)',
                    transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <AnimatedLordIcon
                      src={STAT_LORDICONS[index]}
                      trigger="hover"
                      target={`.hero-stat-card-${index}`}
                      size={32}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 800,
                      mb: 0.3,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.25 }}>
                    {stat.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {stat.detail}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Stack>

          {/* Right Column: Pure Photo Box + Separate Linktree Bar Below */}
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 450, mx: 'auto' }}>
            {/* Subtle Ambient Spotlight Behind Image */}
            <Box
              sx={{
                position: 'absolute',
                inset: -12,
                borderRadius: '24px',
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.24)}, ${alpha(
                  theme.palette.secondary.main,
                  0.2
                )})`,
                filter: 'blur(22px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            <Stack spacing={1.75} sx={{ position: 'relative', zIndex: 1 }}>
              {/* 1. Pure Image Container — No Header Bar, No Text Overlay, Fixed 16px Radius */}
              <Paper
                elevation={8}
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.42)}`,
                  bgcolor: '#080709',
                  aspectRatio: '1 / 1',
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src={activePhoto.src}
                  alt={activePhoto.caption}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: activePhoto.objectPosition,
                    display: 'block',
                    transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              </Paper>

              {/* 2. Separate Profile & Linktree Card Outside the Photo */}
              <Paper
                elevation={4}
                sx={{
                  p: 2,
                  borderRadius: '14px',
                  bgcolor: alpha(theme.palette.background.paper, 0.95),
                  backdropFilter: 'blur(14px)',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1.5}
                >
                  <Stack direction="row" spacing={1.25} alignItems="center" sx={{ minWidth: 0 }}>
                    <Avatar
                      src={ARTIST_INFO.profileImage}
                      alt={ARTIST_INFO.name}
                      sx={{
                        width: 42,
                        height: 42,
                        border: `2px solid ${theme.palette.primary.main}`,
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{ minWidth: 0 }}>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }} noWrap>
                          @valesca_almeida
                        </Typography>
                        <VerifiedRounded sx={{ fontSize: 16, color: 'primary.main', flexShrink: 0 }} />
                      </Stack>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }} noWrap>
                        {activePhoto.label}
                      </Typography>
                    </Box>
                  </Stack>

                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={<LinkRounded fontSize="small" />}
                    endIcon={<OpenInNewRounded fontSize="small" />}
                    href={ARTIST_INFO.contact.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      py: 0.75,
                      px: 1.6,
                      fontSize: '0.78rem',
                      borderRadius: '8px',
                    }}
                  >
                    Linktree
                  </Button>
                </Stack>

                {/* Portrait Thumbnail Switcher */}
                <Stack
                  direction="row"
                  spacing={1.2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    mt: 1.5,
                    pt: 1.5,
                    borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
                  }}
                >
                  {HERO_PORTRAITS.map((item, idx) => {
                    const isSelected = selectedPortrait === idx;
                    return (
                      <Tooltip key={item.src} title={item.label}>
                        <Box
                          onClick={() => setSelectedPortrait(idx)}
                          sx={{
                            width: 60,
                            height: 48,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: isSelected
                              ? `2px solid ${theme.palette.primary.main}`
                              : `1px solid ${alpha(theme.palette.text.secondary, 0.25)}`,
                            opacity: isSelected ? 1 : 0.55,
                            transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                            transition: 'all 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
                            '&:hover': { opacity: 1 },
                          }}
                        >
                          <Box
                            component="img"
                            src={item.src}
                            alt={item.label}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center top',
                              display: 'block',
                            }}
                          />
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Stack>
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
