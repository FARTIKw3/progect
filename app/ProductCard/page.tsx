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
        images={["/room1.jpg", "/room2.jpg", "/room3.jpg"]} // Передаём массив изображений
        colorScheme="Прохладная палитра"
        materials="Краска, белая эмаль"
        accents="Лиловый цвет в отделке стен"
        pdfUrl="/pdf/example.pdf"
      />
    </div>
  );
}
