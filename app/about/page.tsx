import { FounderInfo } from "@/components/aboutFounderInfo";
import { AboutSlider } from "@/components/aboutSlider";
import { AboutTitle } from "@/components/aboutTitle";
import { Interior } from "@/components/modernInterior";

export default function About() {
  return (
    <>
      <AboutTitle />
      <Interior />
      <AboutSlider />
      <FounderInfo />
    </>
  );
}
