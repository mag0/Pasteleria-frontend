# Guía para trabajar con imágenes en Pastelería Belén

## Estructura de directorios para imágenes

En este proyecto, hemos organizado las imágenes en diferentes ubicaciones según su propósito:

### 1. Imágenes públicas (accesibles directamente desde la URL)

Ubicación: `/public/`

Esta carpeta contiene imágenes que se pueden acceder directamente desde la URL del sitio. Hemos creado las siguientes subcarpetas:

- `/public/products/`: Imágenes de productos para la tienda
- `/public/gallery/`: Imágenes para la galería de fotos
- `/public/featured/`: Imágenes destacadas para la página de inicio

Ejemplo de uso en el código:
```jsx
<img src="/products/product-1.svg" alt="Torta de Chocolate" />
```

### 2. Imágenes de assets (importadas en el código)

Ubicación: `/src/assets/`

Esta carpeta contiene imágenes que se importan directamente en los componentes. Hemos creado las siguientes subcarpetas:

- `/src/assets/images/`: Imágenes generales del sitio
- `/src/assets/icons/`: Iconos y elementos gráficos pequeños
- `/src/assets/logos/`: Logotipos de la marca

Ejemplo de uso en el código:
```jsx
import logo from '../assets/logos/pasteleria-logo.svg';

// Luego en el componente
<img src={logo} alt="Pastelería Belén" />
```

## Tipos de imágenes soportadas

- **SVG**: Ideal para logotipos, iconos y gráficos vectoriales. No pierden calidad al redimensionarse.
- **PNG**: Bueno para imágenes con transparencia.
- **JPG/JPEG**: Ideal para fotografías y imágenes con muchos colores.
- **WebP**: Formato moderno con mejor compresión, ideal para optimizar el rendimiento.

## Recomendaciones para trabajar con imágenes

1. **Optimiza las imágenes antes de subirlas**:
   - Reduce el tamaño de archivo sin perder calidad visible
   - Puedes usar herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)

2. **Usa SVG para elementos gráficos**:
   - Los SVG son ideales para logotipos, iconos y elementos de interfaz
   - Se pueden estilizar con CSS y son escalables sin pérdida de calidad

3. **Proporciona texto alternativo**:
   - Siempre incluye el atributo `alt` en las etiquetas de imagen para accesibilidad

4. **Considera imágenes responsive**:
   - Usa el atributo `srcset` para diferentes tamaños de pantalla
   - Considera usar `object-fit` en CSS para controlar cómo se ajustan las imágenes

5. **Lazy loading**:
   - Usa el atributo `loading="lazy"` para cargar imágenes solo cuando son visibles

## Ejemplo de importación de imágenes en componentes React

```jsx
// Importación directa (para imágenes en /src/assets/)
import logo from '../assets/logos/pasteleria-logo.svg';
import iconoTorta from '../assets/icons/torta-icon.svg';

// Uso en el componente
function MiComponente() {
  return (
    <div>
      <img src={logo} alt="Pastelería Belén" className="logo" />
      
      {/* Para imágenes en /public/ se usa la ruta directa */}
      <img src="/products/product-1.svg" alt="Torta de Chocolate" className="producto" />
      
      {/* Con manejo de errores */}
      <img 
        src="/gallery/torta-1.svg" 
        alt="Torta en la galería" 
        onError={(e) => {
          // Fallback a una imagen por defecto si la imagen no se puede cargar
          e.target.src = '/gallery/default.svg';
        }}
      />
    </div>
  );
}
```

## Cómo añadir nuevas imágenes al proyecto

1. Decide si la imagen debe estar en `/public/` o en `/src/assets/`
2. Coloca la imagen en la subcarpeta apropiada
3. Referencia la imagen en tu componente usando la ruta correcta
4. Si es una imagen en `/src/assets/`, impórtala en tu componente
5. Si es una imagen en `/public/`, usa la ruta directa

---

Esta estructura te permitirá mantener organizadas las imágenes del proyecto y facilitar su uso en los diferentes componentes.