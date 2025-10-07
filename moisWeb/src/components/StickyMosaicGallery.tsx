// StickyMosaicGallery.tsx
import "./component.css"; // reutilizamos las clases .cmp-*

type Props = {
  images: string[];
  className?: string;
};

/**
 * Versión embebible de tu layout:
 * - sin ReactLenis
 * - sin <main>, sin hero, sin footer
 * - solo la sección GRID + STICKY
 */
export default function StickyMosaicGallery({ images, className = "" }: Props) {
  // repartimos imágenes en 3 columnas (izq 5, centro 3, der 5). Si faltan, cicla.
  const pick = (i: number) => images[i % images.length];

  const left = [0, 1, 2, 3, 4].map(pick);
  const center = [5, 6, 7].map(pick);
  const right = [8, 9, 10, 11, 12].map(pick);

  return (
    <section className={`cmp-section ${className}`}>
      <div className="cmp-grid">
        {/* Columna izquierda */}
        <div className="cmp-col">
          {left.map((src, i) => (
            <figure key={`l-${i}`} className="cmp-fig">
              <img src={src} alt="" className="cmp-img" loading="lazy" />
            </figure>
          ))}
        </div>

        {/* Columna central sticky */}
        <div className="cmp-sticky">
          {center.map((src, i) => (
            <figure key={`c-${i}`} className="cmp-fig cmp-fig--full">
              <img src={src} alt="" className="cmp-img cmp-img--full" loading="lazy" />
            </figure>
          ))}
        </div>

        {/* Columna derecha */}
        <div className="cmp-col">
          {right.map((src, i) => (
            <figure key={`r-${i}`} className="cmp-fig">
              <img src={src} alt="" className="cmp-img" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
