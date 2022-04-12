export default interface Gifs {
  images?: Images | null;
}

interface Images {
  original?: Original | null;
}

interface Original {
  url?: string | null;
}
