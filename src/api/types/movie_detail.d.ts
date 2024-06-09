interface DetailGenreDTO {
  id: number;
  name: string;
}

interface DetailCastDTO {
  id: number;
  name: string;
  character: string;
  order: number;
  profilePath: string;
}

interface DetailCrewDTO {
  id: number;
  name: string;
  job: string;
  profilePath: string;
}

interface DetailImageDTO {
  filePath: string;
  aspectRatio: number;
  height: number;
  width: number;
}

interface MovieDetailData {
  posterImg: string;
  backGroundImg: string;
  title: string;
  genreDTOList: GenreDTO[];
  overview: string;
  castDTOList: CastDTO[];
  crewDTOList: CrewDTO[];
  releaseDate: string;
  status: string;
  contentRating: string;
  score: number;
  runningTime: number;
  imageDTOList: ImageDTO[];
  videoList: string[];
}
