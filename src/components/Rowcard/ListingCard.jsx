import React from "react";
import RowCard from ".";

const ListingPlaylist = ({ tracks, selectedTracks, setSelected }) =>
  tracks.map((track, id) => (
    <RowCard
      key={track.id}
      track={track}
      id={id}
      selectedTracks={selectedTracks}
      setSelectedTracks={setSelected}
    />
  ));

export default ListingPlaylist;
