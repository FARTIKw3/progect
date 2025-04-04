import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "@/components/ProductCard/ProductCard.module.css";

export default function ProductPage() {
  return (
    <div className="product-card">
      <ProductCard
        title="Акварель (Dark)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat a, ligula consequat tellus. In tellus ultrices senectus nisl sit."
        price={30000}
        images={[
          {
            id: 1,
            url: "/room1.jpg",
            width: 992,
          },
          {
            id: 2,
            url: "/room2.jpg",
            width: 313,
          },
          {
            id: 3,
            url: "/room3.jpg",
            width: 992,
          },
        ]}
        colorScheme="Прохладная палитра"
        materials="Краска, белая эмаль"
        accents="Лиловый цвет в отделке стен"
        pdfUrl="/pdf/example.pdf"
      />
    </div>
  );
}
