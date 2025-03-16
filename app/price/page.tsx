import { Accordion } from "@/components/accordion";
import { Offer } from "@/components/offer";
import { Additionally } from "@/components/priceAdditionally";

export default function Price() {
  return (
    <div>
      <Offer />
      <Additionally />
      <Accordion />
    </div>
  );
}
