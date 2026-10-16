import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  Chip,
  Avatar,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  WhatsApp,
  Instagram,
  FacebookRounded,
  AlternateEmailRounded,
  AudiotrackRounded,
  LinkRounded,
} from '@mui/icons-material';
import { ARTIST_INFO } from '../data/portfolioData';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        pt: 6,
        pb: 5,
        bgcolor: alpha(theme.palette.background.paper, 0.88),
        borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={3}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              src={ARTIST_INFO.profileImage}
              alt={ARTIST_INFO.name}
              sx={{ width: 52, height: 52, border: `2px solid ${theme.palette.primary.main}` }}
            />
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  {ARTIST_INFO.name}
                </Typography>
                <Chip label="VAVÁ" size="small" color="primary" sx={{ height: 20, fontSize: '0.68rem' }} />
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {ARTIST_INFO.headline}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Tooltip title="WhatsApp">
              <IconButton
                component="a"
                href={ARTIST_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}` }}
              >
                <WhatsApp fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton
                component="a"
                href={ARTIST_INFO.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}` }}
              >
                <Instagram fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Threads">
              <IconButton
                component="a"
                href={ARTIST_INFO.contact.threads}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}` }}
              >
                <AlternateEmailRounded fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Facebook">
              <IconButton
                component="a"
                href={ARTIST_INFO.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}` }}
              >
                <FacebookRounded fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Spotify">
              <IconButton
                component="a"
                href={ARTIST_INFO.contact.spotify}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}` }}
              >
                <AudiotrackRounded fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Linktree Oficial">
              <IconButton
                component="a"
                href={ARTIST_INFO.contact.linktree}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}` }}
              >
                <LinkRounded fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3.5 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Valesca Almeida (Vavá). Todos os direitos reservados. Ensaio fotográfico: @cdgleonardo.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Desenvolvido em React + Material UI • Pronto para publicação na Hostinger
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
