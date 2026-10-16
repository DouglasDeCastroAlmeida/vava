import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Tooltip,
  Stack,
  Menu,
  MenuItem,
  useTheme,
  alpha,
} from '@mui/material';
import {
  MenuRounded,
  CloseRounded,
  DarkModeRounded,
  LightModeRounded,
  PaletteRounded,
  CheckRounded,
  WhatsApp,
  Instagram,
  LiveTvRounded,
  TheaterComedyRounded,
  HelpOutlineRounded,
  ContactMailRounded,
  HomeRounded,
} from '@mui/icons-material';
import { ARTIST_INFO } from '../data/portfolioData';
import { COLOR_PALETTES } from '../theme/studioTheme';

const NAV_ITEMS = [
  { id: 'inicio', label: 'Início', icon: <HomeRounded fontSize="small" /> },
  { id: 'na-tv', label: 'TV & Vídeos', icon: <LiveTvRounded fontSize="small" /> },
  { id: 'teatro-trajetoria', label: 'Trajetória', icon: <TheaterComedyRounded fontSize="small" /> },
  { id: 'ficha-tecnica', label: 'Como Contratar', icon: <HelpOutlineRounded fontSize="small" /> },
  { id: 'contato', label: 'Contato', icon: <ContactMailRounded fontSize="small" /> },
];

export default function Navbar({
  mode,
  onToggleMode,
  paletteId,
  onSelectPalette,
  activeSection,
  onNavigate,
}) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [paletteMenuAnchor, setPaletteMenuAnchor] = useState(null);

  const currentTabIndex = Math.max(
    0,
    NAV_ITEMS.findIndex((item) => item.id === activeSection)
  );

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: alpha(theme.palette.background.default, 0.86),
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
          color: 'text.primary',
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 70 },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            {/* Brand / Identity — Minimalist & Clean: Just "Vavá" */}
            <Stack
              direction="row"
              spacing={1.25}
              alignItems="center"
              onClick={() => handleNavClick('inicio')}
              sx={{
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'opacity 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
                '&:hover': { opacity: 0.85 },
              }}
            >
              <Avatar
                src={ARTIST_INFO.profileImage}
                alt="Vavá"
                sx={{
                  width: 38,
                  height: 38,
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: 'text.primary',
                }}
              >
                Vavá
              </Typography>
            </Stack>

            {/* Desktop Navigation Tabs */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Tabs
                value={currentTabIndex}
                onChange={(_, idx) => handleNavClick(NAV_ITEMS[idx].id)}
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  minHeight: 46,
                  '& .MuiTab-root': {
                    minHeight: 46,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 2,
                    color: 'text.secondary',
                    transition: 'color 0.2s ease',
                    '&.Mui-selected': {
                      color: 'primary.main',
                      fontWeight: 700,
                    },
                  },
                  '& .MuiTabs-indicator': {
                    height: 2.5,
                    borderRadius: '2px',
                    bgcolor: 'primary.main',
                  },
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <Tab key={item.id} label={item.label} disableRipple />
                ))}
              </Tabs>
            </Box>

            {/* Right Actions: Palette Selector, Theme Mode, Instagram & Contratar */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Tooltip title="Escolher Paleta de Cores (Color Hunt / Adobe Color)">
                <IconButton
                  onClick={(e) => setPaletteMenuAnchor(e.currentTarget)}
                  color="inherit"
                  size="small"
                  sx={{
                    width: 38,
                    height: 38,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    bgcolor: alpha(theme.palette.background.paper, 0.6),
                  }}
                >
                  <PaletteRounded fontSize="small" sx={{ color: 'primary.main' }} />
                </IconButton>
              </Tooltip>

              <Tooltip title={mode === 'dark' ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}>
                <IconButton
                  onClick={onToggleMode}
                  color="inherit"
                  size="small"
                  sx={{
                    width: 38,
                    height: 38,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    bgcolor: alpha(theme.palette.background.paper, 0.6),
                  }}
                >
                  {mode === 'dark' ? (
                    <LightModeRounded fontSize="small" sx={{ color: 'primary.main' }} />
                  ) : (
                    <DarkModeRounded fontSize="small" sx={{ color: 'primary.main' }} />
                  )}
                </IconButton>
              </Tooltip>

              <Tooltip title="Instagram @valesca_almeida">
                <IconButton
                  component="a"
                  href={ARTIST_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    width: 38,
                    height: 38,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    bgcolor: alpha(theme.palette.background.paper, 0.6),
                    color: 'text.primary',
                    '&:hover': {
                      color: '#E1306C',
                      borderColor: '#E1306C',
                    },
                  }}
                >
                  <Instagram fontSize="small" />
                </IconButton>
              </Tooltip>

              <Button
                variant="contained"
                color="primary"
                startIcon={<WhatsApp />}
                onClick={() => handleNavClick('contato')}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  px: 2.2,
                  py: 0.85,
                  fontSize: '0.86rem',
                  borderRadius: '10px',
                }}
              >
                Contratar
              </Button>

              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  display: { xs: 'inline-flex', md: 'none' },
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                }}
                aria-label="Abrir menu"
              >
                <MenuRounded />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Color Hunt / Adobe Color Palette Menu */}
      <Menu
        anchorEl={paletteMenuAnchor}
        open={Boolean(paletteMenuAnchor)}
        onClose={() => setPaletteMenuAnchor(null)}
        PaperProps={{
          sx: {
            mt: 1,
            width: 320,
            borderRadius: '14px',
            p: 1,
          },
        }}
      >
        <Box sx={{ px: 1.5, py: 1 }}>
          <Typography variant="overline" color="primary.main" sx={{ display: 'block', lineHeight: 1.2 }}>
            HARMONIA DE CORES (ADOBE COLOR &amp; COLOR HUNT)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Teste ao vivo as 3 propostas cromáticas:
          </Typography>
        </Box>
        <Divider sx={{ my: 0.5 }} />
        {Object.values(COLOR_PALETTES).map((pal) => {
          const isSelected = paletteId === pal.id;
          return (
            <MenuItem
              key={pal.id}
              selected={isSelected}
              onClick={() => {
                onSelectPalette(pal.id);
                setPaletteMenuAnchor(null);
              }}
              sx={{
                borderRadius: '10px',
                py: 1.25,
                px: 1.5,
                mb: 0.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.75 }}>
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  {pal.name}
                </Typography>
                {isSelected && <CheckRounded fontSize="small" color="primary" />}
              </Stack>

              {/* 4 Color Hunt Swatch Bar */}
              <Stack
                direction="row"
                sx={{
                  height: 18,
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.12)',
                  mb: 0.6,
                }}
              >
                {pal.swatches.map((hex) => (
                  <Box key={hex} sx={{ flex: 1, bgcolor: hex }} />
                ))}
              </Stack>

              <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: 'normal', fontSize: '0.72rem' }}>
                {pal.rule}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 290,
            bgcolor: 'background.paper',
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Avatar src={ARTIST_INFO.profileImage} alt="Vavá" />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                  Vavá
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {ARTIST_INFO.name}
                </Typography>
              </Box>
            </Stack>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseRounded />
            </IconButton>
          </Stack>

          <Divider sx={{ mb: 1.5 }} />

          <List disablePadding>
            {NAV_ITEMS.map((item) => {
              const selected = activeSection === item.id;
              return (
                <ListItemButton
                  key={item.id}
                  selected={selected}
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    borderRadius: '10px',
                    mb: 0.5,
                    '&.Mui-selected': {
                      bgcolor: alpha(theme.palette.primary.main, 0.14),
                      color: 'primary.main',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: selected ? 'primary.main' : 'text.secondary' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: selected ? 700 : 500 }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>

        <Box sx={{ pt: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={1.2}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              startIcon={<WhatsApp />}
              href={ARTIST_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Direto
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              startIcon={<Instagram />}
              href={ARTIST_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ARTIST_INFO.contact.instagramHandle}
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
