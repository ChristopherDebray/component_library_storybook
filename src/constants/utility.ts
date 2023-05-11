export function generateCssEvents(cssList: object, eventType: string) {
  return Object.fromEntries(
    Object.entries(cssList).map(([key, value]) => [
      key,
      `${eventType}:${value}`,
    ])
  );
}
