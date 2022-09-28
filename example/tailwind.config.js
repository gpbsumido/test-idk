/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/**/**/*.{html,js,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('./assets/background.svg')"
      },
      colors: {
        black: '#13161D',
        black50: '#E7E8E8',
        black100: '#B6B7B9',
        black200: '#929497',
        black300: '#616368',
        black400: '#42454A',
        black450: '#22252A',
        black500: '#13161D',
        black600: '#11141A',
        black700: '#0D1015',
        black800: '#0A0C10',
        black900: '#08090C',
        darkBlue100: '#6351DD',
        darkBlue200: '#5A4AC8',
        darkBlue300: '#5144B2',
        darkBlue400: '#483D9D',
        darkBlue500: '#3F3788',
        darkBlue600: '#373072',
        darkBlue700: '#2E2A5D',
        darkBlue800: '#252348',
        darkBlue900: '#1C1D32',
        lightBlue100: '#6351DD',
        lightBlue200: '#5C6AE0',
        lightBlue300: '#5584E3',
        lightBlue400: '#4E9EE6',
        lightBlue500: '#47B7E9',
        lightBlue600: '#6AC4EC',
        lightBlue700: '#8DD0EE',
        lightBlue800: '#B0DDF1',
        lightBlue900: '#D3E9F3',
        chartreuse100: '#E9F8CA',
        chartreuse200: '#DCFA9D',
        chartreuse300: '#CFFB71',
        chartreuse400: '#C2FD44',
        chartreuse500: '#B5FF18',
        chartreuse600: '#95D019',
        chartreuse700: '#74A21A',
        chartreuse800: '#54731B',
        chartreuse900: '#33451C',
        neutral100: '#F6F6F6',
        neutral200: '#DDDDDE',
        neutral300: '#C4C4C6',
        neutral400: '#AAABAE',
        neutral500: '#919296',
        neutral600: '#787A7D',
        neutral700: '#5F6165',
        neutral800: '#45484D',
        neutral900: '#2C2F35',
        offWhite: '#F6F6F6',
        orange: '#FF5D18',
        white: '#FFFFFF',
        semanticGreen: '#40DD7F',
        semanticRed: '#FF6262',
        semanticOrange: '#ED8936',
        tagBorder: '3A3A3A',
        purple: '#AC54FF',
        pink: '#FFC0CB',
        lightgrey: '#BEBEBE',
        referralMintColor: '#38FDCE',
        referralMintColor1: '#00533F',
        referralMintColor2: '#017559',
        referralMintColor3: '#0A9775',
        referralMintColor4: '#16B992',
        referralMintColor5: '#25DBB0',
        referralMintColor6: '#65FFDA',
        referralMintColor7: '#92FFE5',
        referralMintColor8: '#BEFFEF',
        referralMintGreenAlt: '#4CBE7D',
        referralMintGreenAlt1: '#176867',
        referralMintGreenAlt2: '#1E796D',
        referralMintGreenAlt3: '#2C9274',
        referralMintGreenAlt4: '#3BA979',
        referralMintGreenAlt5: '#71DEA1',
        referralMintGreenAlt6: '#93EEB5',
        referralMintGreenAlt7: '#B9F7CF',
        referralMintGreenAlt8: '#D8F8E6',
        referralMintYellowAlt: '#FDD98C',
        referralMintYellowAlt1: '#A06935',
        referralMintYellowAlt2: '#B98343',
        referralMintYellowAlt3: '#D9A45D',
        referralMintYellowAlt4: '#F1C277',
        referralMintYellowAlt5: '#FAE4A6',
        referralMintYellowAlt6: '#F9EBB9',
        referralMintYellowAlt7: '#F8F2D3',
        referralMintYellowAlt8: '#F7F7EA',
        referralMintRedAlt: '#FF7E65',
        referralMintRedAlt1: '#A61E28',
        referralMintRedAlt2: '#BF232A',
        referralMintRedAlt3: '#E03138',
        referralMintRedAlt4: '#FC574C',
        referralMintRedAlt5: '#FFB096',
        referralMintRedAlt6: '#FFCAB1',
        referralMintRedAlt7: '#FADFD0',
        referralMintRedAlt8: '#F3F4F5',
        darkBg: '#0E2735',
        darkBg1: '#040C10',
        darkBg2: '#07141B',
        darkBg3: '#0A1B25',
        darkBg4: '#1A323F',
        darkBg5: '#263D49',
        darkBg6: '#324753',
        darkBg7: '#BB8EFF',
        darkBg8: '#4A5D68',
        lightBg: '#F8FFFD',
        lightBg1: '#939EA4',
        lightBg2: '#9FA9AE',
        lightBg3: '#ABB3B8',
        lightBg4: '#C3C9CC',
        lightBg5: '#CFD4D7',
        lightBg6: '#D8DFE1',
        lightBg7: '#E7E9EB',
        lightBg8: '#F3F4F5',
      },
      screens: {
        'zero':'10px',
        'first': '150px',
        'left-panel-minimize': '1020px',
        'second': '550px',
        'header-minimize': '600px',
        'bagIconsGone':'685px',
        'zero-viewer':'725px',
        'third':'800px',
        'fourth':'900px',
        'fifth':'1000px',
        'midpublic':'1100px',
        'profile-hide-extra':'850px',
        'profileBaseSize': '785px',
        'first-viewer': '900px',
        'second-viewer': '1000px',
        'third-viewer': '1100px',
        'fourth-viewer': '1300px',
      },
    },
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.25: '5px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      16.5: '66px',
      17: '68px',
      18: '72px',
      20: '80px',
      20.5: '82px',
      21: '84px',
      22: '88px',
      24: '96px',
      25: '100px',
      26: '104px',
      27: '107px',
      28: '112px',
      29: '116px',
      30: '120px',
      32: '128px',
      36: '144px',
      37: '158px',
      38: '152px',
      40: '160px',
      42: '168px',
      44: '176px',
      46: '184px',
      47: '188px',
      48: '192px',
      50: '200px',
      52: '208px',
      54: '216px',
      56: '224px',
      58: '232px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
      120: '480px',
      180: '720px',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}