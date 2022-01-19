export interface Episodes {
    name: string;
    id: string;
    date: string;
}

export interface Upcoming {
    title: string;
    when: string;
    img: string;
    alternative: string;
}

export interface RecentEpisodes {
    date: string;
    anime: string;
    description: string;
    hot: boolean;
    episode: string;
    img: string;
    id: string;
}

export interface Anime {
    episodes: Episodes[];
    title: string;
    rating: string;
    score: string;
    alternative: string;
    genres: string[];
    description: string;
    next: string;
    year: string;
    status: string;
}

export interface SearchAnime {
    title: string;
    slug: string;
    year: string;
    img: string;
    alternative: string;
}

// Generated by https://quicktype.io

export interface AxiosVideos {
    source: Source[];
    source_bk: Source[];
    track: any[];
    advertising: any[];
    linkiframe: string;
}

export interface Source {
    file: string;
    label: string;
    type: string;
    default?: string;
}
