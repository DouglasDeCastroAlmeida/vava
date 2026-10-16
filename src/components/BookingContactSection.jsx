import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Chip,
  Snackbar,
  Alert,
  Divider,
  Avatar,
  Card,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import {
  WhatsApp,
  Instagram,
  ContentCopyRounded,
  SendRounded,
  OpenInNewRounded,
  AudiotrackRounded,
  FacebookRounded,
  AlternateEmailRounded,
  LinkRounded,
  CloseRounded,
  CheckCircleOutlineRounded,
} from '@mui/icons-material';
import { ARTIST_INFO } from '../data/portfolioData';

const PROJECT_TYPES = [
  'TV, Cinema ou Streaming (Teste / Elenco)',
  'Show de Stand-Up Comedy / Humor',
  'Espetáculo Teatral / Dramaturgia',
  'Campanha Publicitária / Presença Digital',
  'Mestre de Cerimônias / Evento Corporativo',
  'Imprensa, Podcast ou Entrevista',
];

const LOCATIONS = ['Goiânia / GO', 'Rio de Janeiro / RJ', 'São Paulo / Nacional', 'Remoto / Digital'];

const SOCIAL_CARDS = [
  {
    name: 'WhatsApp Oficial',
    handle: ARTIST_INFO.contact.whatsappDisplay,
    url: ARTIST_INFO.contact.whatsappUrl,
    icon: <WhatsApp />,
    color: '#25D366',
  },
  {
    name: 'Linktree Oficial',
    handle: 'linktr.ee/valesca_almeida',
    url: ARTIST_INFO.contact.linktree,
    icon: <LinkRounded />,
    color: '#43E660',
  },
  {
    name: 'Instagram Oficial',
    handle: ARTIST_INFO.contact.instagramHandle,
    url: ARTIST_INFO.contact.instagram,
    icon: <Instagram />,
    color: '#E1306C',
  },
  {
    name: 'Threads',
    handle: '@valesca_almeida',
    url: ARTIST_INFO.contact.threads,
    icon: <AlternateEmailRounded />,
    color: '#E5B84B',
  },
  {
    name: 'Facebook',
    handle: '/valesca.almeida',
    url: ARTIST_INFO.contact.facebook,
    icon: <FacebookRounded />,
    color: '#1877F2',
  },
  {
    name: 'Spotify',
    handle: 'Perfil Musical Valesca',
    url: ARTIST_INFO.contact.spotify,
    icon: <AudiotrackRounded />,
    color: '#1DB954',
  },
];

export default function BookingContactSection() {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [location, setLocation] = useState('Rio de Janeiro / RJ');
  const [dateWindow, setDateWindow] = useState('');
  const [details, setDetails] = useState('');
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const formattedMessage = [
    `Olá, Valesca (Vavá)! Vim pelo seu site oficial e gostaria de conversar sobre um projeto:`,
    ``,
    `• *Nome/Contato:* ${name || 'A informar'}`,
    company ? `• *Produtora/Empresa:* ${company}` : null,
    `• *Formato do Projeto:* ${projectType}`,
    `• *Local/Praça:* ${location}`,
    dateWindow ? `• *Previsão de Data:* ${dateWindow}` : null,
    details ? `• *Detalhes do Convite:* ${details}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const handleOpenPreviewModal = (e) => {
    e.preventDefault();
    setPreviewDialogOpen(true);
  };

  const handleConfirmSendWhatsApp = () => {
    const url = `${ARTIST_INFO.contact.whatsappUrl}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setPreviewDialogOpen(false);
    setSnackbar({
      open: true,
      message: 'Redirecionando para o WhatsApp oficial de Valesca Almeida!',
    });
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedMessage);
    setSnackbar({
      open: true,
      message: 'Briefing copiado para a área de transferência!',
    });
  };

  return (
    <Box
      id="contato"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Chip
            icon={<WhatsApp />}
            label="CENTRAL DE CONTRATAÇÃO, CASTING & IMPRENSA"
            color="success"
            variant="outlined"
            sx={{ borderRadius: '8px' }}
          />
          <Typography variant="h2">
            Vamos Levar a{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Vavá
            </Box>{' '}
            para o Seu Projeto?
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 720 }}>
            Preencha o briefing rápido abaixo para iniciar o atendimento direto no WhatsApp ou
            acesse os canais oficiais ao lado.
          </Typography>
        </Stack>

        {/* Main 2-Column Layout using Native CSS Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '7fr 5fr' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          {/* Left Column: Interactive Briefing Form (Without Inline Message Preview) */}
          <Paper
            component="form"
            onSubmit={handleOpenPreviewModal}
            elevation={6}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: '16px',
            }}
          >
            <Typography variant="h4" sx={{ mb: 0.5 }}>
              Briefing Rápido para Contratação / Casting
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3.5 }}>
              Ideal para produtores de elenco, diretores, agências de publicidade e produtores de
              eventos.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2.5,
              }}
            >
              <TextField
                fullWidth
                label="Seu Nome"
                placeholder="Ex: Marina Souza"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                fullWidth
                label="Produtora, Emissora ou Empresa"
                placeholder="Ex: Estúdios / Agência / Teatro"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

              <FormControl fullWidth>
                <InputLabel id="project-type-label">Tipo de Projeto / Contratação</InputLabel>
                <Select
                  labelId="project-type-label"
                  label="Tipo de Projeto / Contratação"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  {PROJECT_TYPES.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Data ou Período Previsto"
                placeholder="Ex: Novembro/2026 ou Imediato"
                value={dateWindow}
                onChange={(e) => setDateWindow(e.target.value)}
              />

              {/* Full-width Location Selector */}
              <Box sx={{ gridColumn: '1 / -1' }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 700, mb: 1, display: 'block' }}
                >
                  LOCAL / PRAÇA DO PROJETO:
                </Typography>
                <ToggleButtonGroup
                  value={location}
                  exclusive
                  onChange={(_, val) => val && setLocation(val)}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
                    gap: 1,
                    '& .MuiToggleButton-root': {
                      borderRadius: '10px !important',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.25)} !important`,
                      px: 1.5,
                      py: 1,
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                    },
                  }}
                >
                  {LOCATIONS.map((loc) => (
                    <ToggleButton key={loc} value={loc}>
                      {loc}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>

              {/* Full-width Details */}
              <Box sx={{ gridColumn: '1 / -1' }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Resumo do Convite, Personagem ou Evento"
                  placeholder="Conte um pouco sobre a personagem, formato do show de stand-up, campanha ou data do evento..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </Box>

              {/* Submit Button — Opens Preview Confirmation Modal */}
              <Box sx={{ gridColumn: '1 / -1', pt: 0.5 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  size="large"
                  startIcon={<WhatsApp />}
                  endIcon={<SendRounded />}
                  sx={{ py: 1.6, fontWeight: 800, borderRadius: '10px', fontSize: '0.96rem' }}
                >
                  Enviar Convite via WhatsApp
                </Button>
              </Box>
            </Box>
          </Paper>

          {/* Right Column: Direct Channels & Social Links */}
          <Paper
            elevation={4}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: '16px',
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(21, 17, 24, 0.96) 0%, rgba(229, 184, 75, 0.12) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(158, 31, 59, 0.08) 100%)',
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Avatar
                src={ARTIST_INFO.profileImage}
                alt={ARTIST_INFO.name}
                sx={{ width: 64, height: 64, border: `2px solid ${theme.palette.primary.main}` }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="overline" color="primary.main" sx={{ display: 'block', lineHeight: 1.1 }}>
                  CANAIS DIRETOS &amp; REDES
                </Typography>
                <Typography variant="h4" noWrap>
                  {ARTIST_INFO.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Goiânia (GYN) • Rio de Janeiro (RJ)
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ my: 2.5 }} />

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Prefere falar diretamente ou acessar todas as redes oficiais e o Linktree da Valesca?
              Clique em qualquer um dos canais abaixo:
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1.8,
              }}
            >
              {SOCIAL_CARDS.map((social) => (
                <Card
                  key={social.name}
                  elevation={0}
                  sx={{
                    borderRadius: '12px',
                    bgcolor: alpha(theme.palette.background.default, 0.68),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    minWidth: 0,
                  }}
                >
                  <CardActionArea
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ p: 1.8, height: '100%' }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: alpha(social.color, 0.16),
                          color: social.color,
                          flexShrink: 0,
                        }}
                      >
                        {social.icon}
                      </Avatar>
                      <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: 'block', lineHeight: 1.15, fontWeight: 600 }}
                          noWrap
                        >
                          {social.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {social.handle}
                        </Typography>
                      </Box>
                      <OpenInNewRounded sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0 }} />
                    </Stack>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* Message Preview Modal — Appears ONLY When Clicking to Send */}
      <Dialog
        open={previewDialogOpen}
        onClose={() => setPreviewDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            p: 1,
          },
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <Stack direction="row" spacing={1.2} alignItems="center">
            <CheckCircleOutlineRounded color="success" />
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Revisar Mensagem para o WhatsApp
            </Typography>
          </Stack>
          <IconButton onClick={() => setPreviewDialogOpen(false)} size="small">
            <CloseRounded />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ borderColor: alpha(theme.palette.primary.main, 0.16) }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Confira abaixo a prévia da mensagem que será aberta no WhatsApp oficial de{' '}
            <strong>Valesca Almeida (Vavá)</strong>:
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: '12px',
              bgcolor: alpha(theme.palette.background.default, 0.75),
              border: `1px dashed ${alpha(theme.palette.primary.main, 0.38)}`,
            }}
          >
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                whiteSpace: 'pre-line',
                fontFamily: 'monospace',
                fontSize: '0.86rem',
                lineHeight: 1.65,
              }}
            >
              {formattedMessage}
            </Typography>
          </Paper>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2, gap: 1, flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ContentCopyRounded />}
            onClick={handleCopyMessage}
            sx={{ borderRadius: '10px' }}
          >
            Copiar Texto
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="text"
            color="inherit"
            onClick={() => setPreviewDialogOpen(false)}
            sx={{ borderRadius: '10px' }}
          >
            Editar Dados
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsApp />}
            endIcon={<OpenInNewRounded fontSize="small" />}
            onClick={handleConfirmSendWhatsApp}
            sx={{ borderRadius: '10px', px: 2.5, fontWeight: 800 }}
          >
            Confirmar e Abrir WhatsApp
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4500}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity="success"
          variant="filled"
          sx={{ width: '100%', fontWeight: 700 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
