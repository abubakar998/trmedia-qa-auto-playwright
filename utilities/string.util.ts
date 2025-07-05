export const makeUniqueName = (baseName: string): string => {
  const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
  return `${baseName}_${timestamp}`;
}
