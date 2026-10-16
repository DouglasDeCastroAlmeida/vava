import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Paper,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  TrendingUpRounded,
  PauseCircleOutlineRounded,
  PlayCircleOutlineRounded,
  TheaterComedyRounded,
  LiveTvRounded,
  MicExternalOnRounded,
  FlightTakeoffRounded,
} from '@mui/icons-material';
import { CAREER_STEPS } from '../data/portfolioData';
import { assetUrl } from '../utils/assetUrl';

const STEP_ICONS = [
  <TheaterComedyRounded key="0" fontSize="small" />,
  <MicExternalOnRounded key="1" fontSize="small" />,
  <LiveTvRounded key="2" fontSize="small" />,
  <FlightTakeoffRounded key="3" fontSize="small" />,
];

export default function TheaterPillarsAndTimeline() {
  const theme = useTheme();
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const handleToggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <Box
      id="teatro-trajetoria"
      component="section"
      sx={{
        py: { xs: 9, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#0D131D',
        color: '#F7F4EF',
      }}
    >
      {/* Looping HTML5 Stage Video Background */}
      <Box
        component="video"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={assetUrl('/assets/theater/stage-spotlight.jpg')}
        src={assetUrl('/assets/theater/stage-bg.mp4')}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.34,
          filter: 'saturate(1.15) contrast(1.05)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Animated Stage Spotlight Overlay (Synced with Active Theme Palette) */}
      <Box
        sx={{
          position: 'absolute',
          inset: '-20%',
          background: `radial-gradient(ellipse at 30% 30%, ${alpha(
            theme.palette.primary.main,
            0.26
          )} 0%, transparent 55%), radial-gradient(ellipse at 70% 65%, ${alpha(
            theme.palette.secondary.main,
            0.22
          )} 0%, transparent 55%)`,
          animation: 'spotlightSweep 14s ease-in-out infinite',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Dark Cinema Vignette for High Contrast Reading Over Video */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(13, 19, 29, 0.88) 0%, rgba(13, 19, 29, 0.60) 50%, rgba(13, 19, 29, 0.90) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header with Video Motion Control */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'flex-end' }}
          spacing={2}
          sx={{ mb: 6 }}
        >
          <Box sx={{ maxWidth: 720 }}>
            <Chip
              icon={<TrendingUpRounded />}
              label="TRAJETÓRIA & EVOLUÇÃO ARTÍSTICA"
              color="primary"
              sx={{ mb: 2, borderRadius: '8px' }}
            />
            <Typography variant="h2" sx={{ color: '#F7F4EF', mb: 1.5 }}>
              Do Teatro Goiano à{' '}
              <Box component="span" sx={{ color: 'primary.light' }}>
                Ponte Aérea Nacional
              </Box>
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(247, 244, 239, 0.82)' }}>
              Uma caminhada construída nos palcos, lapidada no humor ao vivo e consagrada nas lentes
              da teledramaturgia brasileira.
            </Typography>
          </Box>

          <Tooltip title={isVideoPlaying ? 'Pausar fundo em movimento' : 'Reproduzir fundo em movimento'}>
            <IconButton
              onClick={handleToggleVideo}
              sx={{
                color: 'primary.light',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.45)}`,
                bgcolor: 'rgba(15, 23, 34, 0.65)',
                backdropFilter: 'blur(10px)',
                '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.2) },
              }}
              aria-label="Alternar vídeo de fundo"
            >
              {isVideoPlaying ? <PauseCircleOutlineRounded /> : <PlayCircleOutlineRounded />}
            </IconButton>
          </Tooltip>
        </Stack>

        {/* 4 Career Milestones in Solid CSS Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {CAREER_STEPS.map((item, idx) => {
            const isCurrent = idx === CAREER_STEPS.length - 1;
            return (
              <Paper
                key={item.step}
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: '16px',
                  position: 'relative',
                  bgcolor: 'rgba(15, 23, 34, 0.78)',
                  backdropFilter: 'blur(16px)',
                  border: isCurrent
                    ? `1.5px solid ${alpha(theme.palette.primary.light, 0.75)}`
                    : '1px solid rgba(255, 255, 255, 0.14)',
                  color: '#F7F4EF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'primary.light',
                  },
                }}
              >
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 2.5 }}
                  >
                    <Chip
                      icon={STEP_ICONS[idx]}
                      label={`FASE ${item.step}`}
                      size="small"
                      sx={{
                        fontWeight: 800,
                        borderRadius: '8px',
                        bgcolor: isCurrent ? 'primary.main' : alpha(theme.palette.primary.main, 0.22),
                        color: isCurrent ? 'primary.contrastText' : 'primary.light',
                        '& .MuiChip-icon': {
                          color: 'inherit',
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(247, 244, 239, 0.72)',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.phase}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h4"
                    sx={{
                      color: '#FFFFFF',
                      mb: 1.25,
                      fontSize: '1.25rem',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(247, 244, 239, 0.80)',
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
