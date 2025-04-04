import { IService } from "@/interface/service";

export const additonData: IService[] = [
  {
    id: 1,
    title: "Тендер строительных бригад",
    description:
      "Мы отправим ваш проект проверенным строительным бригадам, которые сделают расчёт. Если у вас на примете есть строители, наш специалист по техническому надзору проедет на их стройки и проверит качество работы, а после даст вам своё заключение.",
    image: {
      url: "/services/tender-stroika.jpg",
      format: {
        thumbnail: {
          url: "/building.jpg",
        },
      },
    },
    price: 49_000,
  },
  {
    id: 2,
    title: "Составление сметы",
    description:
      "Мы отправим ваш проект проверенным строительным бригадам, которые сделают расчёт. Если у вас на примете есть строители, наш специалист по техническому надзору проедет на их стройки и проверит качество работы, а после даст вам своё заключение.",
    image: {
      url: "/services/sostavlenie-smeti.jpg",
      format: {
        thumbnail: {
          url: "/building.jpg",
        },
      },
    },
    price: 49_000,
    example: {
      url: "djhkjdhwkjc.pdf",
    },
  },
  {
    id: 3,
    title: "Печать альбома",
    description:
      "Мы отправим ваш проект проверенным строительным бригадам, которые сделают расчёт. Если у вас на примете есть строители, наш специалист по техническому надзору проедет на их стройки и проверит качество работы, а после даст вам своё заключение.",
    image: {
      url: "/services/pechat-alboma.jpg",
      format: {
        thumbnail: {
          url: "/building.jpg",
        },
      },
    },
    price: 49_000,
  },
];
