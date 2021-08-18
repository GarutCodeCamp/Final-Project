export interface Props {
  track: {
    album: {
      images: {
        [index: number]: {
          url: string;
        };
      };
      release_date: string;
    };
    name: string;
    artists: {
      [index: number]: {
        name: string;
      };
    };
    duration_ms: number;
    uri: string;
  };
  id: string;
  selectedTracks: Array<string>;
  setSelectedTracks: (query: string[]) => void;
}
