// File: components/managers/theme-system.js
// Provides theme capabilities to the row wrapper

export class ThemeSystem {
  constructor(host) {
    this.host = host;
    this.currentTheme = 'default';
    this.themes = {
      default: {
        hostBorder: '1px solid black',
        rowOutline: '3px solid blue',
        columnOutline: '1px solid black',
        buttonBackground: 'rgba(0, 0, 0, 0.5)',
        buttonColor: 'white'
      },
      dark: {
        hostBorder: '10px solid #333',
        rowOutline: '3px solid #555',
        columnOutline: '9px solid #777',
        buttonBackground: 'rgba(255, 255, 255, 0.2)',
        buttonColor: 'white'
      },
      minimal: {
        hostBorder: '1px solid #ccc',
        rowOutline: 'none',
        columnOutline: '1px solid #eee',
        buttonBackground: 'rgba(0, 0, 0, 0.2)',
        buttonColor: 'black'
      }
    };
  }
  
  applyTheme(themeName) {
    if (!this.themes[themeName]) {
      console.warn(`Theme "${themeName}" not found, using default`);
      themeName = 'default';
    }
    
    const theme = this.themes[themeName];
    this.currentTheme = themeName;
    
    // Apply theme properties to the host element
    this.host.style.setProperty('--host-border', theme.hostBorder);
    this.host.style.setProperty('--row-outline', theme.rowOutline);
    this.host.style.setProperty('--column-outline', theme.columnOutline);
    this.host.style.setProperty('--button-background', theme.buttonBackground);
    this.host.style.setProperty('--button-color', theme.buttonColor);
  }
  
  getCurrentTheme() {
    return this.currentTheme;
  }
  
  registerTheme(name, themeProperties) {
    this.themes[name] = { ...themeProperties };
  }
}

