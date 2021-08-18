/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href: null;
    total: number;
}

export interface Image {
    height: number | null;
    url: string;
    width: number | null;
}

export interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}

export interface Owner {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Tracks {
    href: string;
    items: any[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}

export interface Playlist {
    collaborative: boolean;
    description: null;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: any[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets?: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string | Date;
    release_date_precision: string;
    type: string;
    uri: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalIDS {
    isrc: string;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets?: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDS;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
}



//   ===========================//
export interface AuthState {
    isAuthenticated: boolean;
    token: string;
    user: UserProfile | null;
}

export interface PlaylistState {
    tracks: Track[];
    SelectTrack: string[];
    items: currentPlaylist[];
    newRelease: newRelease[]
    featurePlaylist: featurePlaylist[]
}
interface featurePlaylist{
    item: []
}
export interface ITracks {
    tracks: Track[];
}



// get current Playlist
export interface currentPlaylist{
    description: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner[];
    tracks: getTrackPlaylist[],
    type: string;
    uri: string
}
export interface getTrackPlaylist{
    href: string;
    total: number
}
export interface Owner{
    display_name: string;
    id: string;
    uri: string
}




// get new release

interface newRelease{
    album_type: string;
    artists: getArtisBynewRelease[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: string;
    type: string;
    uri: string
}
interface getArtisBynewRelease{
    external_urls: {
        spotify: string
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string
}
