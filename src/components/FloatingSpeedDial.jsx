import React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction, useTheme } from '@mui/material';
import {
  WhatsApp,
  Instagram,
  LiveTvRounded,
  KeyboardArrowUpRounded,
  ChatBubbleOutlineRounded,
  CloseRounded,
} from '@mui/icons-material';
import { ARTIST_INFO, GLOBOPLAY_SCENES } from '../data/portfolioData';

export default function FloatingSpeedDial({ onNavigate }) {
  const theme = useTheme();

  const actions = [
    {
      icon: <WhatsApp sx={{ color: '#25D366' }} />,
      name: 'Chamar no WhatsApp',
      onClick: () => window.open(ARTIST_INFO.contact.whatsappUrl, '_blank', 'noopener,noreferrer'),
    },
    {
      icon: <Instagram sx={{ color: '#E1306C' }} />,
      name: 'Instagram @valesca_almeida',
      onClick: () => window.open(ARTIST_INFO.contact.instagram, '_blank', 'noopener,noreferrer'),
    },
    {
      icon: <LiveTvRounded sx={{ color: theme.palette.primary.main }} />,
      name: 'Assistir Olga no Globoplay',
      onClick: () => window.open(GLOBOPLAY_SCENES[0].url, '_blank', 'noopener,noreferrer'),
    },
    {
      icon: <KeyboardArrowUpRounded />,
      name: 'Voltar ao Topo',
      onClick: () => onNavigate('inicio'),
    },
  ];

  return (
    <SpeedDial
      ariaLabel="Atalhos rápidos de contato e portfólio"
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 32 },
        right: { xs: 20, md: 32 },
        zIndex: theme.zIndex.speedDial,
        '& .MuiFab-primary': {
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          boxShadow: '0 8px 28px rgba(229, 184, 75, 0.45)',
          '&:hover': {
            bgcolor: 'primary.light',
          },
        },
      }}
      icon={<SpeedDialIcon icon={<ChatBubbleOutlineRounded />} openIcon={<CloseRounded />} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen={false}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
}
