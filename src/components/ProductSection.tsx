import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  name: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  category: string;
}

export const ProductSection = ({ title, products, category }: ProductSectionProps) => {
  return (
    <section className="py-8 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="section-header animate-street-glow mb-4 font-military">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                category={category}
              />
            ))}
          </div>
        </div>
        
        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg font-tactical">Nessun prodotto disponibile in questa sezione</p>
          </div>
        )}
      </div>
    </section>
  );
};