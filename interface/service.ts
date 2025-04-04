export interface IService {
  id: number;
  title: string;
  image: {
    url: string;
    format: {
      thumbnail: {
        url: string;
      };
    };
  };
  description: string;
  price: number;
  example?: {
    url: string;
  };
}
