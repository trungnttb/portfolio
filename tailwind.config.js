module.exports = {
  theme: {
    extend: {
      animation: {
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        wave: 'wave 2s infinite',
      },
    },
    keyframes: {
      orbit: {
        '0%': {
          transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
        },
      },
      wave: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '20%': {
          transform: 'rotate(14deg)',
        },
        '40%': {
          transform: 'rotate(-8deg)',
        },
        '60%': {
          transform: 'rotate(14deg)',
        },
        '80%': {
          transform: 'rotate(-4deg)',
        },
        '100%': {
          transform: 'rotate(10deg)',
        },
      },
    },
  },
};
