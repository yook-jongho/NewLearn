export type news = {
  newsId: number;
  thumbnail: string;
  title: string;
  publishedDate: string;
  source: string;
};

export type NewsData = {
  newsList: news[];
};

export interface Article {
  newsId: number;
  thumbnail: string;
  title: string;
  publishedDate: string;
  source: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: {
    articles: Article[];
  };
}
