import gql from "graphql-tag";

export const gameTypeDefs = gql`
#   type Game {
#     id: ID!
#     name: String
#     releaseDate: String
#     rating: Float
#     platforms: [String]
#   }
type Game {
  id: Int!
  name: String!
  slug: String!
  released: String!
  tba: Boolean!
  background_image: String!
  rating: Float!
  rating_top: Float!
  ratings: [Rating!]!
  ratings_count: Int!
  reviews_text_count: Int!
  added: Int!
  added_by_status: AddedByStatus!
  metacritic: Int
  playtime: Int!
  suggestions_count: Int!
  updated: String!
  esrb_rating: EsrbRating
  platforms: [PlatformRelease!]!
  parent_platforms: [ParentPlatform!]!
  genres: [Genre!]!
  stores: [StoreLink!]!
  clip: Clip
  tags: [Tag!]!
  short_screenshots: [Screenshot!]!
}

type Rating {
  id: Int!
  title: String!
  count: Int!
  percent: Float!
}

type AddedByStatus {
  yet: Int!
  owned: Int!
  beaten: Int!
  toplay: Int!
  dropped: Int!
  playing: Int!
}

type PlatformRelease {
  platform: Platform!
  released_at: String!
  requirements: Requirements
}

type Platform {
  id: Int!
  name: String!
  slug: String!
}

type Requirements {
  minimum: String!
  recommended: String!
}

type ParentPlatform {
  platform: Platform!
}

type EsrbRating {
  id: Int!
  name: String!
  slug: String!
}

type StoreLink {
  id: Int!
  store: Store!
  url_en: String!
  url_ru: String
}

type Store {
  id: Int!
  name: String!
  slug: String!
}

type Clip {
  clip: String!
  clips: ClipUrls!
  video: String!
  preview: String!
}

type ClipUrls {
  size320: String!
  size640: String!
  full: String!
}

type Tag {
  id: Int!
  name: String!
  slug: String!
  language: String!
  games_count: Int!
  image_background: String!
}

type Screenshot {
  id: Int!
  image: String!
}
type Genre {
  id: Int!
  name: String!
  slug: String!
}

  type Query {
    getGame(search: String!): [Game]
  }
`;


