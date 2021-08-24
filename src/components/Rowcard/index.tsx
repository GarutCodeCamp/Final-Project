import { Button } from "@material-ui/core";
import React from "react";
import { Props } from "./interface";
import "./index.css";

const RowCard = ({ track, selectedTracks, setSelectedTracks }: Props) => {
  const handleButtonOnselect = (id: string): void => {
    const uri: string = id;
    if (selectedTracks.includes(uri)) {
      const newPlayList: string[] = selectedTracks.filter((track) => track !== uri)
      setSelectedTracks(newPlayList);
    } else {
      setSelectedTracks([...selectedTracks, uri])
    }
  }
  return (
    <div className="songRow" >
      <img className="songRow__album" alt="" src={track.album.images[1].url} />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists[0].name} -{" "}
          {track.album.release_date}
        </p>
      </div>
      <Button className="row__btn" variant="text" onClick={() => handleButtonOnselect(track?.uri)} size="small" color="primary"  >
        {selectedTracks.includes(track.uri) ? 'Deselect' : 'Select'}
      </Button>
    </div>
  )
}

export default RowCard;
