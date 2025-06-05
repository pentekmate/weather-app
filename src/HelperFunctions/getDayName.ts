export const getDayName =(dateString: string): string =>{
  const date = new Date(dateString);
  return date.toLocaleDateString('hu-HU', { weekday: 'long' });
}