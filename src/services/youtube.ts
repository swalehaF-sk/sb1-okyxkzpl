import axios from 'axios';
import { YOUTUBE_API_KEY, YOUTUBE_API_BASE_URL, SAFE_SEARCH_PARAMS } from '../config/youtube';
import type { Video } from '../types/video';

const youtubeClient = axios.create({
  baseURL: YOUTUBE_API_BASE_URL,
  params: {
    key: YOUTUBE_API_KEY,
    part: 'snippet,statistics,contentDetails'
  }
});

export async function searchVideos(query: string): Promise<Video[]> {
  try {
    const response = await youtubeClient.get('/search', {
      params: {
        q: query,
        ...SAFE_SEARCH_PARAMS
      }
    });

    const videoIds = response.data.items.map((item: any) => item.id.videoId);
    const videosDetails = await getVideosDetails(videoIds);

    return videosDetails;
  } catch (error) {
    console.error('Error searching videos:', error);
    return [];
  }
}

export async function getVideosDetails(videoIds: string[]): Promise<Video[]> {
  try {
    const response = await youtubeClient.get('/videos', {
      params: {
        id: videoIds.join(',')
      }
    });

    return response.data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      duration: formatDuration(item.contentDetails.duration),
      views: parseInt(item.statistics.viewCount),
      category: 'Kids',
      ageRange: '5-12' // You might want to implement age detection based on video metadata
    }));
  } catch (error) {
    console.error('Error getting video details:', error);
    return [];
  }
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  let result = '';
  if (hours) result += `${hours}:`;
  result += `${minutes.padStart(2, '0')}:`;
  result += seconds.padStart(2, '0');

  return result;
}