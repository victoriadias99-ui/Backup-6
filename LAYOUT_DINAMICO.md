# 🎨 Nuevo Layout Dinámico - Sección "Quiénes Somos" y "Qué Hacemos"

## ✨ Cambio de Diseño

Se ha rediseñado la sección para un layout **alternado y dinámico** con dos imágenes que le dan más movimiento y profesionalismo.

---

## 📐 Estructura Visual

### ANTES (Layout Estático - Stack vertical)
```
┌────────────────────────────────────────┐
│ Título + texto + párrafos              │
│ (todo en una columna)                  │
│                                        │
│ Imagen (a la derecha)                  │
└────────────────────────────────────────┘
```

### DESPUÉS (Layout Dinámico - Alternado)

#### SECCIÓN 1: ¿Quiénes Somos?
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Imagen 1]          │  ¿QUIÉNES SOMOS?        │
│  (izquierda)         │  (derecha)              │
│  Seed: packaging     │  Texto dinámico         │
│  BG: Verde claro     │  con párrafos           │
│  Rotación: -3deg     │                         │
│                      │  ┌──────────────────┐   │
│                      │  │ Destacado azul   │   │
│                      │  │ con fondo claro  │   │
│                      │  └──────────────────┘   │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### SECCIÓN 2: ¿Qué Hacemos?
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ¿QUÉ HACEMOS?       │  [Imagen 2]            │
│  (izquierda)         │  (derecha)             │
│  Texto dinámico      │  Seed: production      │
│  con párrafos        │  BG: Rosa claro        │
│                      │  Rotación: 3deg        │
│  ┌──────────────────┐│                        │
│  │ Destacado rosa   ││                        │
│  │ con fondo claro  ││                        │
│  └──────────────────┘│                        │
│                      │                        │
│  [Botón Empezar]     │                        │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Características Dinámicas

### 1. **Alternancia de Orden**
- **Sección 1:** Imagen izquierda → Contenido derecha
  ```css
  /* Mobile: imagen bajo contenido */
  order-2 md:order-1  /* Imagen va al inicio en desktop */
  order-1 md:order-2  /* Contenido va a la derecha en desktop */
  ```

- **Sección 2:** Contenido izquierda → Imagen derecha
  ```css
  /* Desktop: orden natural (izquierda a derecha) */
  ```

### 2. **Fondos Decorativos Dinámicos**
- **Sección 1:** Fondo verde claro (`#C4EB00/20`) con rotación **-3deg**
  ```css
  bg-[#C4EB00]/20 rounded-[3rem] transform -rotate-3
  ```

- **Sección 2:** Fondo rosa claro (`#FF9EDE/20`) con rotación **3deg**
  ```css
  bg-[#FF9EDE]/20 rounded-[3rem] transform rotate-3
  ```

### 3. **Imágenes Diferentes**
- **Imagen 1:** `seed/packaging-about` → Tema packaging
- **Imagen 2:** `seed/production-about` → Tema producción
- **Tamaño:** `600x600` para mejor proporción
- **Alto:** `450px` para equilibrio visual

### 4. **Párrafos Destacados**
Cada sección termina con un párrafo especial:

**Sección 1 (Azul):**
```html
<p className="text-lg font-semibold
              border-l-4 border-[#004FFF]
              pl-6 py-4
              bg-[#004FFF]/5
              rounded-r-lg">
  No somos solo una empresa de packaging...
</p>
```

**Sección 2 (Rosa):**
```html
<p className="text-lg font-semibold
              border-l-4 border-[#FF9EDE]
              pl-6 py-4
              bg-[#FF9EDE]/5
              rounded-r-lg">
  Porque cuando tu producto se ve bien...
</p>
```

---

## 📱 Responsividad

### Desktop (lg)
```
┌──────────────────┬──────────────────┐
│   [Imagen]       │   [Contenido]    │ ← Alternado
├──────────────────┼──────────────────┤
│   [Contenido]    │   [Imagen]       │ ← Invertido
└──────────────────┴──────────────────┘
```

### Tablet (md)
- Grid de 2 columnas con gap de `gap-12`
- Las órdenes visual se aplican: `order-1` y `order-2`

### Mobile
- Stack vertical (1 columna)
- Contenido arriba, imagen debajo
- Gap reduced: `gap-12`
- Imágenes a ancho completo

---

## 🎨 Detalles de Estilo

| Elemento | Tamaño | Color | Nota |
|----------|--------|-------|------|
| Título H1 | `text-5xl md:text-6xl` | Negro | Line break en MD |
| Título H2 | `text-5xl md:text-6xl` | Negro | Line break en MD |
| Párrafo intro | `text-lg` | Gris 700 | Font medium |
| Párrafo body | `text-base` | Gris 600 | Normal |
| Párrafo destacado | `text-lg` | Gris 700 | Font semibold + borde |
| Fondo decorativo 1 | - | Verde `#C4EB00/20` | Rotación -3deg |
| Fondo decorativo 2 | - | Rosa `#FF9EDE/20` | Rotación 3deg |
| Gap entre columnas | `gap-12 lg:gap-20` | - | Responsive |

---

## 🔄 Transiciones y Efectos

### Botón "Empezar ahora"
- Color: `#FF9EDE`
- Hover: `scale-105` (crece)
- Sombra: `shadow-xl`
- Posición: Bajo "¿Qué hacemos?" en mobile, normal en desktop

### Imágenes
- Border radius: `rounded-[2.5rem]` (muy redondeadas)
- Sombra: `shadow-2xl` (muy pronunciada)
- Object fit: `cover` (ajusta sin distorsión)

---

## 📊 Comparativa: Antes vs Después

| Aspecto | Antes | Después |
|---------|-------|---------|
| **Secciones** | 1 bloque | 2 secciones claras |
| **Imágenes** | 1 imagen | 2 imágenes diferentes |
| **Layout** | Vertical | Alternado (dinámico) |
| **Movimiento visual** | Estático | Dinámico (rotaciones) |
| **Fondos decorativos** | 1 fondo | 2 fondos (colores marca) |
| **Párrafos destacados** | 2 | 2 (con estilo mejorado) |
| **Responsividad** | Grid simple | Grid con order visual |
| **Profesionalismo** | Bueno | Excelente 🚀 |

---

## 🚀 Próximos Pasos

1. **Revisar en navegador:**
   - Desktop (full width)
   - Tablet (768px)
   - Mobile (375px)

2. **Verificar:**
   - Imágenes se cargan correctamente
   - Alternancia visual es clara
   - Texto es legible en todos los tamaños
   - Botón funciona

3. **Hacer commit:**
```bash
cd C:\Users\vicki\Backup-6
git add src/components/AboutPage.tsx
git commit -m "Rediseñar layout de 'Quiénes somos' y 'Qué hacemos' con diseño dinámico alternado

- Crear 2 secciones con layout alternado
- Agregar 2 imágenes diferentes con fondos decorativos
- Mejorar párrafos destacados con estilos visuales
- Implementar responsividad completa"
git push origin main
```

---

## 💡 Notas Técnicas

- Las imágenes usan `picsum.photos` con seeds diferentes para variedad
- El `order` CSS solo se aplica en `md:` breakpoint (tablets y más)
- Mobile mantiene orden natural (contenido arriba)
- Los `<br>` en títulos son `hidden md:block` (solo en desktop)
- Todos los estilos usan Tailwind CSS core utilities

**Última actualización:** 4 de Abril de 2026
