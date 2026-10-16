import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Tabs,
  Tab,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  alpha,
} from '@mui/material';
import {
  LiveTvRounded,
  PlayCircleFilledWhiteRounded,
  OpenInNewRounded,
  MicExternalOnRounded,
  MusicVideoRounded,
  NewspaperRounded,
  CloseRounded,
  MovieCreationRounded,
  WhatsApp,
} from '@mui/icons-material';
import { GLOBOPLAY_SCENES, STANDUP_AND_MEDIA, ARTIST_INFO } from '../data/portfolioData';
import { assetUrl } from '../utils/assetUrl';

export default function TvAndReelsSection({ onNavigate }) {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('todos');
  const [videoModal, setVideoModal] = useState(null);

  const filteredMedia =
    activeTab === 'todos'
      ? STANDUP_AND_MEDIA
      : STANDUP_AND_MEDIA.filter((item) => {
          if (activeTab === 'standup') return item.category === 'Stand-Up Comedy';
          if (activeTab === 'audiovisual')
            return item.category === 'Videoclipe' || item.category === 'Workshops & TV';
          if (activeTab === 'imprensa') return item.category === 'Destaque na Mídia';
          return true;
        });

  return (
    <Box
      id="na-tv"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Chip
            icon={<LiveTvRounded />}
            label="TELEDRAMATURGIA • STAND-UP COMEDY • AUDIOVISUAL"
            color="primary"
            variant="outlined"
            sx={{ px: 1 }}
          />
          <Typography variant="h2">
            No Ar na{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              TV Globo
            </Box>{' '}
            &amp; Repertório em Vídeo
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 760 }}>
            Assista às cenas oficiais da personagem <strong>Olga</strong> na novela{' '}
            <strong>&ldquo;Coração Acelerado&rdquo;</strong> (Globoplay), além de shows de Stand-Up
            Comedy, videoclipe, oficina nos Estúdios Globo e destaque na imprensa.
          </Typography>
        </Stack>

        {/* Featured Banner: Olga in Coração Acelerado (TV Globo) */}
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, md: 4.5 },
            mb: 6,
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            backgroundImage:
              theme.palette.mode === 'dark'
                ? `linear-gradient(120deg, rgba(21, 17, 24, 0.95) 0%, rgba(21, 17, 24, 0.86) 60%, rgba(217, 56, 90, 0.24) 100%), url('${assetUrl('/assets/theater/cinema-clapperboard.jpg')}')`
                : `linear-gradient(120deg, rgba(255, 255, 255, 0.96) 0%, rgba(250, 246, 240, 0.92) 65%, rgba(158, 31, 59, 0.12) 100%), url('${assetUrl('/assets/theater/cinema-clapperboard.jpg')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.6fr 0.8fr' },
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.2} alignItems="center" flexWrap="wrap" useFlexGap>
                <Chip
                  icon={<MovieCreationRounded />}
                  label="PERSONAGEM OLGA"
                  color="secondary"
                  size="small"
                />
                <Chip
                  label='Novela "Coração Acelerado" • TV Globo / Globoplay'
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </Stack>
              <Typography variant="h3">
                Olga em &ldquo;Coração Acelerado&rdquo; (TV Globo)
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {ARTIST_INFO.featuredRole.summary}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row', md: 'column' }}
              spacing={1.5}
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<OpenInNewRounded />}
                href={GLOBOPLAY_SCENES[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Assistir Cena 01 no Globoplay
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                startIcon={<WhatsApp />}
                onClick={() => onNavigate('contato')}
              >
                Solicitar Material p/ Elenco
              </Button>
            </Stack>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* 4 Globoplay Official Scene Cards in Solid CSS Grid */}
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
            {GLOBOPLAY_SCENES.map((scene) => (
              <Card
                key={scene.id}
                elevation={4}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: alpha(theme.palette.background.paper, 0.94),
                  '&:hover .scene-thumb': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={scene.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <Box sx={{ position: 'relative', height: 195, overflow: 'hidden', bgcolor: '#000' }}>
                    <CardMedia
                      component="img"
                      image={scene.thumbnail}
                      alt={scene.title}
                      className="scene-thumb"
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.35s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.78) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PlayCircleFilledWhiteRounded
                        sx={{
                          fontSize: 52,
                          color: '#FFFFFF',
                          opacity: 0.92,
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))',
                        }}
                      />
                    </Box>
                    <Chip
                      label={scene.number}
                      color="secondary"
                      size="small"
                      sx={{ position: 'absolute', top: 12, left: 12, fontWeight: 800 }}
                    />
                    <Chip
                      label={scene.highlight}
                      size="small"
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 12,
                        bgcolor: 'rgba(11, 9, 12, 0.85)',
                        color: '#E5B84B',
                        border: '1px solid rgba(229,184,75,0.4)',
                        fontSize: '0.7rem',
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700 }}>
                      {scene.tag}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 0.5, mb: 1, lineHeight: 1.3 }}>
                      {scene.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {scene.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    color="primary"
                    endIcon={<OpenInNewRounded fontSize="small" />}
                    href={scene.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir no Globoplay
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Paper>

        {/* Sub-section: Stand-Up Comedy, Videoclipe, Imprensa & Workshops */}
        <Box sx={{ mt: 7 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={2}
            sx={{ mb: 4 }}
          >
            <Box>
              <Typography variant="overline" color="primary.main">
                PALCO, HUMOR, MÚSICA &amp; IMPRENSA
              </Typography>
              <Typography variant="h3">
                Stand-Up Comedy, Videoclipe &amp; Destaques
              </Typography>
            </Box>

            <Tabs
              value={activeTab}
              onChange={(_, val) => setActiveTab(val)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                bgcolor: alpha(theme.palette.background.paper, 0.85),
                borderRadius: 3,
                p: 0.5,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                '& .MuiTab-root': {
                  borderRadius: 2.5,
                  minHeight: 40,
                  px: 2,
                  fontSize: '0.84rem',
                  fontWeight: 700,
                },
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
                '& .Mui-selected': {
                  bgcolor: 'primary.main',
                  color: `${theme.palette.primary.contrastText} !important`,
                },
              }}
            >
              <Tab value="todos" label="Todos (7)" />
              <Tab
                value="standup"
                icon={<MicExternalOnRounded fontSize="small" />}
                iconPosition="start"
                label="Stand-Up Comedy (4)"
              />
              <Tab
                value="audiovisual"
                icon={<MusicVideoRounded fontSize="small" />}
                iconPosition="start"
                label="Clipe & Oficina Globo (2)"
              />
              <Tab
                value="imprensa"
                icon={<NewspaperRounded fontSize="small" />}
                iconPosition="start"
                label="Na Imprensa (1)"
              />
            </Tabs>
          </Stack>

          {/* Media Cards in Solid CSS Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {filteredMedia.map((item) => (
              <Card
                key={item.id}
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 225, overflow: 'hidden', bgcolor: '#09080A' }}>
                  <CardMedia
                    component="img"
                    image={item.thumbnail}
                    alt={item.title}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 50%, rgba(11,9,12,0.85) 100%)',
                    }}
                  />
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ position: 'absolute', top: 12, left: 12, right: 12 }}
                  >
                    <Chip
                      label={item.category}
                      color={item.category === 'Stand-Up Comedy' ? 'primary' : 'secondary'}
                      size="small"
                    />
                    <Chip
                      label={item.badge}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(11, 9, 12, 0.82)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    />
                  </Stack>

                  {item.embedUrl && (
                    <Tooltip title="Assistir vídeo aqui no site">
                      <IconButton
                        onClick={() => setVideoModal(item)}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          bgcolor: alpha(theme.palette.primary.main, 0.92),
                          color: theme.palette.primary.contrastText,
                          width: 58,
                          height: 58,
                          '&:hover': {
                            bgcolor: 'primary.light',
                            transform: 'translate(-50%, -50%) scale(1.08)',
                          },
                        }}
                      >
                        <PlayCircleFilledWhiteRounded sx={{ fontSize: 34 }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700 }}>
                    {item.year} • {item.subtitle}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0, gap: 1 }}>
                  {item.embedUrl && (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<PlayCircleFilledWhiteRounded />}
                      onClick={() => setVideoModal(item)}
                      sx={{ flex: 1 }}
                    >
                      Reproduzir
                    </Button>
                  )}
                  <Button
                    variant={item.embedUrl ? 'outlined' : 'contained'}
                    color={item.embedUrl ? 'primary' : 'secondary'}
                    size="small"
                    endIcon={<OpenInNewRounded />}
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ flex: 1 }}
                  >
                    {item.category === 'Destaque na Mídia'
                      ? 'Ler Matéria'
                      : item.category === 'Workshops & TV'
                      ? 'Ver Álbum'
                      : 'Abrir Original'}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Embedded Video Player Dialog */}
      <Dialog
        open={Boolean(videoModal)}
        onClose={() => setVideoModal(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: 'background.paper',
            overflow: 'hidden',
          },
        }}
      >
        {videoModal && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            >
              <Box>
                <Typography variant="overline" color="primary.main" sx={{ display: 'block', lineHeight: 1 }}>
                  {videoModal.category} • {videoModal.year}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {videoModal.title}
                </Typography>
              </Box>
              <IconButton onClick={() => setVideoModal(null)}>
                <CloseRounded />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 0, bgcolor: '#000' }}>
              <Box sx={{ position: 'relative', pt: '56.25%', width: '100%' }}>
                <Box
                  component="iframe"
                  src={videoModal.embedUrl}
                  title={videoModal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                />
              </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2, justifyContent: 'space-between' }}>
              <Typography variant="body2" color="text.secondary">
                {videoModal.subtitle}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                endIcon={<OpenInNewRounded />}
                href={videoModal.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir em Nova Aba
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
