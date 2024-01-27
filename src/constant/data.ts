export const data = {
  id: " #37_",
  image: new URL("../assets/pen.png", import.meta.url).href,
  title: "PudgyPenguins",
  eatimated_price: 1.013,
  floor_price: 1.88,
  acquisition_price: "0.000",
  acquisition_date: "Jan 9, 2022",
};

export interface IData {
  id: string;
  image: string;
  title: string;
  eatimated_price: number;
  floor_price: number;
  acquisition_price: string;
  acquisition_date: string;
}
