import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import {
  ExpandMoreRounded,
  HelpOutlineRounded,
  AssignmentTurnedInRounded,
} from '@mui/icons-material';
import { BOOKING_FAQS } from '../data/portfolioData';
import AnimatedLordIcon from './AnimatedLordIcon';
import { assetUrl } from '../utils/assetUrl';

const HIRING_STEPS = [
  {
    label: 'Envio do Convite / Briefing (TV, Teatro, Evento ou Publi)',
    iconSrc: assetUrl('/assets/icons/chat.json'),
  },
  {
    label: 'Verificação de Agenda (Ponte Aérea GYN ⇄ RJ ou Nacional)',
    iconSrc: assetUrl('/assets/icons/calendar.json'),
  },
  {
    label: 'Alinhamento Artístico, Roteiro ou Envio de Self-Tape',
    iconSrc: assetUrl('/assets/icons/script.json'),
  },
  {
    label: 'Contrato & Realização (Set de Gravação ou Palco)',
    iconSrc: assetUrl('/assets/icons/camera.json'),
  },
];

function HiringStepIcon({ iconSrc, targetClass }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: alpha(theme.palette.primary.main, 0.14),
        border: `1.5px solid ${alpha(theme.palette.primary.main, 0.38)}`,
        transition: 'transform 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'scale(1.06)',
          borderColor: 'primary.main',
        },
      }}
    >
      <AnimatedLordIcon
        src={iconSrc}
        trigger="hover"
        target={`.${targetClass}`}
        size={30}
      />
    </Box>
  );
}

export default function CastingSheetAndFaq() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [expandedFaq, setExpandedFaq] = useState('faq-0');

  const handleFaqChange = (panel) => (_, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  return (
    <Box
      id="ficha-tecnica"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: alpha(theme.palette.background.paper, 0.55),
        borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
        borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Chip
            icon={<HelpOutlineRounded />}
            label="PROCESSO DE CONTRATAÇÃO & DÚVIDAS FREQUENTES"
            color="primary"
            variant="outlined"
          />
          <Typography variant="h2">
            Como Contratar &amp;{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Perguntas Frequentes
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 680 }}>
            Veja como funciona o processo de agendamento para produções audiovisuais, espetáculos e
            eventos corporativos.
          </Typography>
        </Stack>

        {/* Block 1: Fluxo Rápido de Contratação & Casting (Stepper with Animated Lordicon Icons) */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 4.5 },
            mb: 5,
            borderRadius: '16px',
            bgcolor: alpha(theme.palette.background.paper, 0.94),
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mb: 4 }}>
            <AssignmentTurnedInRounded color="primary" fontSize="small" />
            <Typography variant="overline" color="primary.main">
              FLUXO RÁPIDO DE CONTRATAÇÃO &amp; CASTING
            </Typography>
          </Stack>
          <Stepper
            activeStep={3}
            alternativeLabel={!isSmDown}
            orientation={isSmDown ? 'vertical' : 'horizontal'}
          >
            {HIRING_STEPS.map((step, index) => {
              const targetClass = `hiring-step-${index}`;
              return (
                <Step key={step.label} completed className={targetClass}>
                  <StepLabel
                    icon={<HiringStepIcon iconSrc={step.iconSrc} targetClass={targetClass} />}
                    sx={{
                      '& .MuiStepLabel-label': {
                        fontWeight: 700,
                        fontSize: { xs: '0.86rem', sm: '0.9rem' },
                        mt: 1,
                      },
                    }}
                  >
                    {step.label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Paper>

        {/* Block 2: Perguntas Frequentes (Accordion) */}
        <Box>
          {BOOKING_FAQS.map((faq, idx) => {
            const panelId = `faq-${idx}`;
            return (
              <Accordion
                key={panelId}
                expanded={expandedFaq === panelId}
                onChange={handleFaqChange(panelId)}
                elevation={2}
                sx={{
                  mb: 1.5,
                  borderRadius: '12px !important',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreRounded sx={{ color: 'primary.main' }} />}
                  sx={{ px: 3, py: 1 }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 2.5, pt: 0 }}>
                  <Typography variant="body1" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
