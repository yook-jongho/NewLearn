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
