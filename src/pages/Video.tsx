import React from "react";
import { Video as VideoIcon } from "lucide-react";

const Video: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="bg-white rounded shadow p-4 animate-fade-in">
        <h2 className="mb-4 text-2xl font-bold d-flex align-items-center gap-2 text-danger">
          <VideoIcon size={28} /> Video
        </h2>
        <p>Upload, preview, or manage video files here.</p>
      </div>
    </div>
  );
};

export default Video;
