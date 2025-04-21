export interface Card {
  id: string;
  description: string;
  urls: {
    full: string;
    regular: string;
  }
}