import styles from "./style.module.css";
import { Article } from "../article";
import { OurServices } from "@/components/ourService";
import { Services } from "@/components/ServicesWork";
import { ListCheque } from "../Listcheque";
import { Title } from "../title";
import { DesignTest } from "../designTest";
import { Accordion } from "../accordion";
export const MainPage = () => {
  return (
    <>
      <Article />
      <Services />
      <OurServices />
      <ListCheque />
      <Title />
      <DesignTest />
      <Accordion />
    </>
  );
};
