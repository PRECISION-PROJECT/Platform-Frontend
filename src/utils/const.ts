export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL || '',
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
};

export const NUMBER_FORMAT_LOOK_UP = [
  { value: 1, symbol: '' },
  { value: 1e3, symbol: 'k' },
  { value: 1e6, symbol: 'M' },
  { value: 1e9, symbol: 'B' },
  { value: 1e12, symbol: 'T' },
  { value: 1e15, symbol: 'P' },
  { value: 1e18, symbol: 'E' },
];

export const IMAGE_TYPE = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
export const VIDEO_TYPE = ['mp4', 'mov', 'webm', 'ogg', 'wmv'];

export const FILE_FORMAT = [
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/jpg',
  'image/svg',
  'image/gif',
  'image/svg+xml',
];

export const DEFAULT_ACTIVE_OPTIONS = [
  { label: "Active", value: "true" },
  { label: "Inactive", value: "false" },
]

export const DEFAULT_STATUS_OPTIONS = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
]