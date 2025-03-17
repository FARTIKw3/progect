export interface DataAdd {
  src: string;
  title: string;
  rout: string;
}
export const additonData: DataAdd[] = [
  {
    src: "/building.jpg",
    title: "Тендер строительных бригад",
    rout: "/price/schemes",
  },
  {
    src: "/schemes.jpg",
    title: "Составление сметы",
    rout: "/price/building",
  },
  {
    src: "/album.jpg",
    title: "Печать альбома",
    rout: "",
  },
];
