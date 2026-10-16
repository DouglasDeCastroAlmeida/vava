import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  Chip,
  Stack,
  Tabs,
  Tab,
  ToggleButtonGroup,
  ToggleButton,
  Dialog,
  DialogContent,
  IconButton,
  MobileStepper,
  Button,
  Paper,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  PhotoCameraBackRounded,
  ZoomInRounded,
  CloseRounded,
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  DownloadRounded,
  ViewModuleRounded,
  GridViewRounded,
  AutoAwesomeRounded,
} from '@mui/icons-material';
import { ENSAIO_PHOTOS, GALLERY_CATEGORIES } from '../data/portfolioData';

export default function PhotoGallerySection() {
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [gridDensity, setGridDensity] = useState('normal');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos =
    selectedCategory === 'todas'
      ? ENSAIO_PHOTOS
      : ENSAIO_PHOTOS.filter((photo) => photo.categories.includes(selectedCategory));

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleCloseLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <Box
      id="ensaio"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Chip
            icon={<PhotoCameraBackRounded />}
            label="ENSAIO VAVÁ • BOOK FOTOGRÁFICO OFICIAL (25 FOTOS)"
            color="primary"
            variant="outlined"
          />
          <Typography variant="h2">
            Galeria Editorial &amp;{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Expressão Cênica
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 740 }}>
            Do primeiro plano dramático para cinema e TV à iluminação teatral de ribalta, comédia e
            camarim. Clique em qualquer fotografia para ampliar em tela cheia.
          </Typography>
        </Stack>

        {/* Controls Bar: Category Tabs + Density Toggle */}
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'stretch', lg: 'center' }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Tabs
            value={selectedCategory}
            onChange={(_, val) => {
              setSelectedCategory(val);
              setLightboxIndex(null);
            }}
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
              '& .MuiTabs-indicator': { display: 'none' },
              '& .Mui-selected': {
                bgcolor: 'primary.main',
                color: `${theme.palette.primary.contrastText} !important`,
              },
            }}
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <Tab key={cat.id} value={cat.id} label={`${cat.label} (${cat.count})`} />
            ))}
          </Tabs>

          <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="flex-end">
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
              Tamanho da Grade:
            </Typography>
            <ToggleButtonGroup
              value={gridDensity}
              exclusive
              size="small"
              onChange={(_, val) => val && setGridDensity(val)}
            >
              <ToggleButton value="normal" sx={{ px: 1.5, borderRadius: '10px 0 0 10px' }}>
                <Tooltip title="4 Colunas (Compacto)">
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <ViewModuleRounded fontSize="small" />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>
                      4 Colunas
                    </Typography>
                  </Stack>
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="large" sx={{ px: 1.5, borderRadius: '0 10px 10px 0' }}>
                <Tooltip title="3 Colunas (Amplo)">
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <GridViewRounded fontSize="small" />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>
                      3 Colunas
                    </Typography>
                  </Stack>
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>

        {/* Stable, Clean CSS Grid for Photos */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns:
              gridDensity === 'normal'
                ? {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                  }
                : {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
            gap: 2.5,
          }}
        >
          {filteredPhotos.map((photo, index) => (
            <Card
              key={photo.id}
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
                '&:hover .gallery-img': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <CardActionArea
                onClick={() => handleOpenLightbox(index)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  height: '100%',
                }}
              >
                {/* Photo Viewport */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3 / 3.8',
                    overflow: 'hidden',
                    bgcolor: '#08070A',
                  }}
                >
                  <Box
                    component="img"
                    src={photo.localPath}
                    alt={photo.title}
                    loading="lazy"
                    className="gallery-img"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                  />

                  <Chip
                    label={photo.series}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      bgcolor: 'rgba(11, 9, 12, 0.82)',
                      color: '#E5B84B',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(229,184,75,0.35)',
                      fontSize: '0.68rem',
                    }}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      bgcolor: 'rgba(11, 9, 12, 0.8)',
                      color: '#E5B84B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(229,184,75,0.35)',
                    }}
                  >
                    <ZoomInRounded fontSize="small" />
                  </Box>
                </Box>

                {/* Clean Caption Below Photo */}
                <Box sx={{ p: 2, flexGrow: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.3, mb: 0.4 }}>
                    {photo.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    {photo.framing} • {photo.mood}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Fullscreen Lightbox Dialog */}
      <Dialog
        open={currentPhoto !== null}
        onClose={handleCloseLightbox}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: '#0B090C',
            color: '#F7F4F0',
            border: '1px solid rgba(229, 184, 75, 0.35)',
            overflow: 'hidden',
          },
        }}
      >
        {currentPhoto && (
          <>
            {/* Lightbox Top Header */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                px: 3,
                py: 1.5,
                borderBottom: '1px solid rgba(229, 184, 75, 0.18)',
                bgcolor: 'rgba(21, 17, 24, 0.95)',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <AutoAwesomeRounded sx={{ color: '#E5B84B', fontSize: 20 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2, color: '#FFF' }}>
                    {currentPhoto.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#B9B0C4' }}>
                    {currentPhoto.series} • Foto {lightboxIndex + 1} de {filteredPhotos.length}
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<DownloadRounded />}
                  component="a"
                  href={currentPhoto.localPath}
                  download
                  sx={{
                    color: '#E5B84B',
                    borderColor: 'rgba(229,184,75,0.4)',
                    display: { xs: 'none', sm: 'inline-flex' },
                  }}
                >
                  Baixar Foto
                </Button>
                <IconButton onClick={handleCloseLightbox} sx={{ color: '#FFF' }}>
                  <CloseRounded />
                </IconButton>
              </Stack>
            </Stack>

            {/* Lightbox Body */}
            <DialogContent sx={{ p: 0, position: 'relative', bgcolor: '#070608' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 330px' },
                  minHeight: { xs: 420, md: 580 },
                }}
              >
                {/* Image Stage */}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 1.5, md: 3 },
                    bgcolor: '#050406',
                  }}
                >
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      position: 'absolute',
                      left: 12,
                      bgcolor: 'rgba(21, 17, 24, 0.85)',
                      color: '#E5B84B',
                      border: '1px solid rgba(229,184,75,0.35)',
                      '&:hover': { bgcolor: 'rgba(229,184,75,0.2)' },
                    }}
                  >
                    <ArrowBackIosNewRounded fontSize="small" />
                  </IconButton>

                  <Box
                    component="img"
                    src={currentPhoto.localPath}
                    alt={currentPhoto.title}
                    sx={{
                      maxHeight: { xs: '60vh', md: '72vh' },
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: 2,
                      boxShadow: '0 16px 48px rgba(0,0,0,0.8)',
                    }}
                  />

                  <IconButton
                    onClick={handleNext}
                    sx={{
                      position: 'absolute',
                      right: 12,
                      bgcolor: 'rgba(21, 17, 24, 0.85)',
                      color: '#E5B84B',
                      border: '1px solid rgba(229,184,75,0.35)',
                      '&:hover': { bgcolor: 'rgba(229,184,75,0.2)' },
                    }}
                  >
                    <ArrowForwardIosRounded fontSize="small" />
                  </IconButton>
                </Box>

                {/* Metadata Sidebar */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: '#120E15',
                    borderLeft: { md: '1px solid rgba(229, 184, 75, 0.16)' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack spacing={2.5}>
                    <Box>
                      <Typography variant="overline" sx={{ color: '#E5B84B' }}>
                        DETALHES DA FOTO
                      </Typography>
                      <Typography variant="h5" sx={{ color: '#FFF', mt: 0.5 }}>
                        {currentPhoto.title}
                      </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: '#D0C8DA' }}>
                      {currentPhoto.description}
                    </Typography>

                    <Stack spacing={1.2}>
                      <Box>
                        <Typography variant="caption" sx={{ color: '#9A8FA6', display: 'block' }}>
                          ENQUADRAMENTO
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#FFF' }}>
                          {currentPhoto.framing}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: '#9A8FA6', display: 'block' }}>
                          FIGURINO &amp; ESTÉTICA
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#FFF' }}>
                          {currentPhoto.outfit}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: '#9A8FA6', display: 'block' }}>
                          ATMOSFERA
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#E5B84B' }}>
                          {currentPhoto.mood}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {currentPhoto.categories.map((cat) => (
                        <Chip
                          key={cat}
                          label={`#${cat}`}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(229, 184, 75, 0.14)',
                            color: '#E5B84B',
                            fontSize: '0.72rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </Stack>

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadRounded />}
                    component="a"
                    href={currentPhoto.localPath}
                    download
                    sx={{ mt: 3 }}
                  >
                    Salvar Foto em Alta
                  </Button>
                </Paper>
              </Box>
            </DialogContent>

            {/* MobileStepper at Bottom */}
            <MobileStepper
              variant="progress"
              steps={filteredPhotos.length}
              position="static"
              activeStep={lightboxIndex}
              sx={{
                bgcolor: '#151118',
                borderTop: '1px solid rgba(229, 184, 75, 0.16)',
                '& .MuiLinearProgress-root': {
                  width: '50%',
                  bgcolor: 'rgba(255,255,255,0.12)',
                },
              }}
              nextButton={
                <Button size="small" onClick={handleNext} sx={{ color: '#E5B84B' }}>
                  Próxima
                </Button>
              }
              backButton={
                <Button size="small" onClick={handlePrev} sx={{ color: '#E5B84B' }}>
                  Anterior
                </Button>
              }
            />
          </>
        )}
      </Dialog>
    </Box>
  );
}
