import React from 'react';
import { Header } from './components/Header';
import { VideoGrid } from './components/VideoGrid';
import { useYoutubeSearch } from './hooks/useYoutubeSearch';

function App() {
  const { videos, loading, error, search } = useYoutubeSearch();

  const handleVideoClick = (video: Video) => {
    // TODO: Implement video player
    console.log('Video clicked:', video);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={search} />
      <main className="max-w-7xl mx-auto">
        {loading && (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        )}
        {error && (
          <div className="p-4 mx-4 my-6 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}
        <VideoGrid videos={videos} onVideoClick={handleVideoClick} />
      </main>
    </div>
  );
}

export default App;