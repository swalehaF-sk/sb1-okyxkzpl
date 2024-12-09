import React from 'react';
import { Play } from 'lucide-react';
import type { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <div 
      className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{video.title}</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
          <span>{video.views.toLocaleString()} views</span>
          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
            {video.ageRange}
          </span>
        </div>
      </div>
    </div>
  );
}