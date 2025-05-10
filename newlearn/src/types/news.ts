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

export type NewsDetail = {
  [K in keyof news]: news[K]; // 기존 타입 복사
} & {
  content: string; // 새로운 프로퍼티 추가
};

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}
