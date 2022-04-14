//Giffs Data Model
interface Giffs {
  images?: Original | null;
}
interface Original {
  original?: Url | null;
}
interface Url {
  url?: string | null;
}

export type GiffList = Giffs[];
