import React from "react";
import { Music } from "lucide-react";

const Audio: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="bg-white rounded shadow p-4 animate-fade-in">
        <h2 className="mb-4 text-2xl font-bold d-flex align-items-center gap-2 text-warning">
          <Music size={28} /> Audio
        </h2>
        <p>Upload, preview, or manage audio files here.</p>
      </div>
    </div>
  );
};

export default Audio;
