interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, image, category }: ProductCardProps) => {
  return (
    <div className="product-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-mono text-primary bg-black/80 px-2 py-1 rounded">
            ID: {id}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          {category}
        </p>
      </div>
    </div>
  );
};