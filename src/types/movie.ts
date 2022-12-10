export type Genre = {
  id?: string;
  name?: string;
};

export type ProductionCompany = {
  name?: string;
  id?: number;
  logo_path?: string;
  origin_country?: string;
};

export type ProductionCountry = {
  iso_3166_1?: string;
  name?: string;
};

export type SpokenLanguage = {
  iso_639_1?: string;
  name?: string;
};

export type Movie = {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
