export const data = {
  id: " #37_",
  image: new URL("../assets/pen.png", import.meta.url).href,
  title: "PudgyPenguins",
  eatimated_price: "1.013",
  floor_price: "1.880",
  acquisition_price: "0.000",
  acquisition_date: "Jun 9, 2022",
};

export interface IData {
  id: string;
  image: string;
  title: string;
  eatimated_price: string;
  floor_price: string;
  acquisition_price: string;
  acquisition_date: string;
}
