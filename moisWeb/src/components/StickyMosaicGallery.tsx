// StickyMosaicGallery.tsx
import "./component.css";

type Props = {
  images: string[];
  className?: string;
  /** Si lo pasas, limita la galería a ese número; si no, usa images.length */
  imageNumber?: number;
};

export default function StickyMosaicGallery({
  images,
  className = "",
  imageNumber,
}: Props) {
  // 1) Determinar cuántas imágenes renderizar
  const total = Math.max(0, Math.min(imageNumber ?? images.length, images.length));
  const pool = images.slice(0, total);

  // 2) Reglas para cuántas imágenes poner en el centro (sticky)
  //    - 1 si hay muy pocas
  //    - 2 para medios
  //    - 3 máximo por estética del sticky
  const centerCount = Math.min(
    3,
    Math.max(1, Math.floor(total * 0.3)) // ~30% al centro
  );

  // 3) Reparto a izquierda/derecha con el resto
  const sideTotal = Math.max(0, total - centerCount);
  const leftCount = Math.ceil(sideTotal / 2);
  const rightCount = Math.max(0, sideTotal - leftCount);

  const left = pool.slice(0, leftCount);
  const center = pool.slice(leftCount, leftCount + centerCount);
  const right = pool.slice(leftCount + centerCount, leftCount + centerCount + rightCount);

  // 4) Fallbacks simples (opcional): si total <= 3, puedes colapsar a 1 columna
  // if (total <= 3) { /* renderiza una sola columna si prefieres */ }

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
