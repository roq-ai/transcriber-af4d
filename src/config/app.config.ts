interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'Transcriber ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Calculate total hours of video for transcription',
    'Manage payment plans and trials',
    'Submit videos for transcription',
    'Manage additional services',
    'Complete payment process',
    'Access and download transcriptions',
    'Review edited transcriptions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/18c9a319-bb7b-4668-b4f1-39ab5f49921d',
};
