import React from "react";
import { Search as SearchIcon, Filter, Settings } from "lucide-react";

const Search: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="bg-white rounded shadow p-4 animate-fade-in">
        <h2 className="mb-4 text-2xl font-bold d-flex align-items-center gap-2 text-primary">
          <SearchIcon size={28} /> Search
        </h2>

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search..."
          />
          <button className="btn btn-primary d-flex align-items-center gap-1">
            <SearchIcon size={18} /> Search
          </button>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <button className="btn btn-outline-secondary">
            <Filter size={16} /> Filter
          </button>
          <button className="btn btn-outline-secondary">
            <Settings size={16} /> Advanced
          </button>
        </div>

        <div className="border-top pt-3">
          <p className="text-muted">Results will be displayed here.</p>
          {/* you can later map your search results here */}
        </div>
      </div>
    </div>
  );
};

export default Search;
