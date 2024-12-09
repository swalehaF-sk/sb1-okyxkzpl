export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || '';
export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const SAFE_SEARCH_PARAMS = {
  safeSearch: 'strict',
  videoEmbeddable: true,
  type: 'video',
  videoCategoryId: '1', // Film & Animation
  videoDuration: 'medium', // 4-20 minutes
  maxResults: 20
};