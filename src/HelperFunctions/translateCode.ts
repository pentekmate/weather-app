export const weatherCode = (code: number): string => {
  switch (code) {
    case 0:
      return "Derült égbolt";
    case 1:
      return "Főleg derült";
    case 2:
      return "Változóan felhős";
    case 3:
      return "Borult";
    case 45:
    case 48:
      return "Köd";
    case 51:
    case 53:
    case 55:
      return "Gyenge esőcseppek";
    case 56:
    case 57:
      return "Fagyott esőcseppek";
    case 61:
    case 63:
    case 65:
      return "Eső";
    case 66:
    case 67:
      return "Fagyott eső";
    case 71:
    case 73:
    case 75:
      return "Hó";
    case 77:
      return "Hópihe";
    case 80:
    case 81:
    case 82:
      return "Zápor";
    case 85:
    case 86:
      return "Hózápor";
    case 95:
      return "Vihar";
    case 96:
    case 99:
      return "Vihar jéggel";
    default:
      return "Ismeretlen időjárás";
  }
};
