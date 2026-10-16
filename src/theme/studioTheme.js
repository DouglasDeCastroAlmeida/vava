import { createTheme, alpha } from '@mui/material/styles';

export const COLOR_PALETTES = {
  terracotta: {
    id: 'terracotta',
    name: 'Solar Stage & Terracotta',
    rule: 'Complementar Dividida (Adobe Color) • Carisma & Energia Ao Vivo',
    swatches: ['#D94E34', '#F5B041', '#1D4E6B', '#FAF6F0'],
    dark: {
      bgDefault: '#0F1722',
      bgPaper: '#172232',
      primaryMain: '#FF6B4A',
      primaryLight: '#FF9278',
      primaryDark: '#D94E34',
      primaryContrast: '#0F1722',
      secondaryMain: '#F5B041',
      secondaryLight: '#F8C471',
      secondaryDark: '#D68910',
      secondaryContrast: '#0F1722',
      textPrimary: '#F8F5F0',
      textSecondary: '#B2C0D0',
    },
    light: {
      bgDefault: '#FAF6F0',
      bgPaper: '#FFFFFF',
      primaryMain: '#D94E34',
      primaryLight: '#F2745C',
      primaryDark: '#A8341E',
      primaryContrast: '#FFFFFF',
      secondaryMain: '#1D4E6B',
      secondaryLight: '#2E6F95',
      secondaryDark: '#123347',
      secondaryContrast: '#FFFFFF',
      textPrimary: '#182026',
      textSecondary: '#52606D',
    },
  },
  studio: {
    id: 'studio',
    name: 'TV Studio: Coral & Índigo',
    rule: 'Tríade Contemporânea (Adobe Color) • Alto Astral & Streaming',
    swatches: ['#FF4D5A', '#FFBE0B', '#4338CA', '#F7F7FB'],
    dark: {
      bgDefault: '#111122',
      bgPaper: '#1A1A32',
      primaryMain: '#FF5E6C',
      primaryLight: '#FF8A94',
      primaryDark: '#D93848',
      primaryContrast: '#111122',
      secondaryMain: '#FFBE0B',
      secondaryLight: '#FFD147',
      secondaryDark: '#D99B00',
      secondaryContrast: '#111122',
      textPrimary: '#F7F7FC',
      textSecondary: '#B4B3CC',
    },
    light: {
      bgDefault: '#F7F7FB',
      bgPaper: '#FFFFFF',
      primaryMain: '#E63946',
      primaryLight: '#FF6875',
      primaryDark: '#B81D2A',
      primaryContrast: '#FFFFFF',
      secondaryMain: '#4338CA',
      secondaryLight: '#6366F1',
      secondaryDark: '#312E81',
      secondaryContrast: '#FFFFFF',
      textPrimary: '#14142B',
      textSecondary: '#4E4B66',
    },
  },
  emerald: {
    id: 'emerald',
    name: 'Esmeralda, Terracota & Mel',
    rule: 'Análoga Quente + Sotaque (Adobe Color) • Brasilidade & Presença Cênica',
    swatches: ['#2A6F4E', '#D48C29', '#C85A32', '#F9F5EB'],
    dark: {
      bgDefault: '#111915',
      bgPaper: '#192620',
      primaryMain: '#F0A830',
      primaryLight: '#F7C164',
      primaryDark: '#C27E15',
      primaryContrast: '#111915',
      secondaryMain: '#38A169',
      secondaryLight: '#68D391',
      secondaryDark: '#276749',
      secondaryContrast: '#FFFFFF',
      textPrimary: '#F4F1EA',
      textSecondary: '#A8B8B0',
    },
    light: {
      bgDefault: '#F9F5EB',
      bgPaper: '#FFFFFF',
      primaryMain: '#C85A32',
      primaryLight: '#E07A56',
      primaryDark: '#963D1C',
      primaryContrast: '#FFFFFF',
      secondaryMain: '#2A6F4E',
      secondaryLight: '#3D996E',
      secondaryDark: '#1B4B34',
      secondaryContrast: '#FFFFFF',
      textPrimary: '#1C2420',
      textSecondary: '#526159',
    },
  },
};

export function getStudioTheme(mode = 'light', paletteId = 'terracotta') {
  const isDark = mode === 'dark';
  const selectedPalette = COLOR_PALETTES[paletteId] || COLOR_PALETTES.terracotta;
  const tokens = isDark ? selectedPalette.dark : selectedPalette.light;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.primaryMain,
        light: tokens.primaryLight,
        dark: tokens.primaryDark,
        contrastText: tokens.primaryContrast,
      },
      secondary: {
        main: tokens.secondaryMain,
        light: tokens.secondaryLight,
        dark: tokens.secondaryDark,
        contrastText: tokens.secondaryContrast,
      },
      background: {
        default: tokens.bgDefault,
        paper: tokens.bgPaper,
      },
      text: {
        primary: tokens.textPrimary,
        secondary: tokens.textSecondary,
      },
      success: {
        main: '#25D366',
        dark: '#1DA851',
        contrastText: '#081C0F',
      },
      divider: alpha(tokens.primaryMain, 0.16),
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(2.35rem, 4.5vw, 3.85rem)',
        lineHeight: 1.08,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
        lineHeight: 1.22,
        letterSpacing: '-0.015em',
      },
      h4: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: 1.3,
      },
      h5: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 700,
        fontSize: '1.08rem',
        lineHeight: 1.35,
      },
      h6: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 700,
        fontSize: '0.98rem',
        lineHeight: 1.4,
      },
      subtitle1: {
        fontSize: '1.05rem',
        lineHeight: 1.65,
        fontWeight: 500,
      },
      body1: {
        fontSize: '0.98rem',
        lineHeight: 1.68,
      },
      body2: {
        fontSize: '0.88rem',
        lineHeight: 1.6,
      },
      button: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
        letterSpacing: '0.01em',
        textTransform: 'none',
      },
      overline: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 800,
        letterSpacing: '0.12em',
        fontSize: '0.74rem',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            backgroundColor: tokens.bgDefault,
            color: tokens.textPrimary,
            overflowX: 'hidden',
            transition: 'background-color 0.35s ease, color 0.35s ease',
          },
          '@keyframes spotlightSweep': {
            '0%, 100%': {
              transform: 'translate3d(-6%, -4%, 0) scale(1)',
              opacity: 0.55,
            },
            '50%': {
              transform: 'translate3d(6%, 4%, 0) scale(1.08)',
              opacity: 0.85,
            },
          },
          '@keyframes floatGlow': {
            '0%, 100%': {
              transform: 'translateY(0px)',
            },
            '50%': {
              transform: 'translateY(-6px)',
            },
          },
          '@media (prefers-reduced-motion: reduce)': {
            '*, *::before, *::after': {
              animationDuration: '0.01ms !important',
              animationIterationCount: '1 !important',
              transitionDuration: '0.01ms !important',
              scrollBehavior: 'auto !important',
            },
          },
          '::-webkit-scrollbar': {
            width: '10px',
          },
          '::-webkit-scrollbar-track': {
            background: tokens.bgDefault,
          },
          '::-webkit-scrollbar-thumb': {
            background: alpha(tokens.primaryMain, 0.38),
            borderRadius: '6px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: alpha(tokens.primaryMain, 0.65),
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            padding: '10px 22px',
            transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          },
          containedPrimary: {
            background: `linear-gradient(135deg, ${tokens.primaryMain} 0%, ${tokens.primaryDark} 100%)`,
            color: tokens.primaryContrast,
            boxShadow: `0 6px 20px ${alpha(tokens.primaryMain, 0.32)}`,
            '&:hover': {
              background: `linear-gradient(135deg, ${tokens.primaryLight} 0%, ${tokens.primaryMain} 100%)`,
              boxShadow: `0 10px 26px ${alpha(tokens.primaryMain, 0.45)}`,
              transform: 'translateY(-2px)',
            },
          },
          containedSecondary: {
            background: `linear-gradient(135deg, ${tokens.secondaryMain} 0%, ${tokens.secondaryDark} 100%)`,
            color: tokens.secondaryContrast,
            boxShadow: `0 6px 20px ${alpha(tokens.secondaryMain, 0.28)}`,
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
          outlinedPrimary: {
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: '14px',
            border: `1px solid ${alpha(tokens.primaryMain, isDark ? 0.16 : 0.14)}`,
            transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.3s ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: '16px',
            border: `1px solid ${alpha(tokens.primaryMain, isDark ? 0.16 : 0.14)}`,
            transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 700,
            letterSpacing: '0.02em',
            borderRadius: '8px',
          },
        },
      },
    },
  });
}
