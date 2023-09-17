const mapping: Record<string, string> = {
  'additional-services': 'additional_service',
  organizations: 'organization',
  'payment-plans': 'payment_plan',
  transcriptions: 'transcription',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
