import { useState, useCallback } from 'react';
import { searchVideos } from '../services/youtube';
import type { Video } from '../types/video';

export function useYoutubeSearch() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const results = await searchVideos(query);
      setVideos(results);
    } catch (err) {
      setError('Failed to search videos. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { videos, loading, error, search };
}