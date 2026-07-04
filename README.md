# Cyber SAC 📱💻

Aplicación móvil desarrollada con **React Native**, **Expo** y **TypeScript** para la gestión básica de productos de una tienda de accesorios para computadoras.

Este proyecto fue desarrollado como parte de un trabajo académico con el objetivo de aplicar los fundamentos del desarrollo móvil utilizando componentes reutilizables, hooks, manejo de estado y navegación entre pantallas.

---

## 📖 Descripción

Cyber SAC es una aplicación móvil que permite simular la gestión de productos de una tienda de accesorios para computadoras.

La aplicación cuenta con autenticación simulada (inicio de sesión y registro de usuarios) y un módulo para administrar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

Todos los datos se almacenan **únicamente en memoria**, por lo que la información se pierde al cerrar la aplicación.

---

## 🎯 Objetivos

- Desarrollar una aplicación móvil utilizando React Native.
- Implementar navegación entre pantallas.
- Aplicar el uso de componentes reutilizables.
- Utilizar Hooks de React para el manejo del estado.
- Implementar un CRUD básico.
- Aplicar una arquitectura organizada por carpetas.
- Diseñar una interfaz sencilla utilizando NativeWind.

---

# 📱 Funcionalidades

- ✅ Inicio de sesión
- ✅ Registro de usuarios
- ✅ Pantalla principal (Home)
- ✅ Listado de productos
- ✅ Agregar productos
- ✅ Editar productos
- ✅ Eliminar productos
- ✅ Gestión de productos en memoria
- ✅ Navegación entre pantallas

---

# 🛠 Tecnologías utilizadas

- React Native
- Expo SDK 54
- TypeScript
- Expo Router
- React Navigation
- NativeWind
- Context API
- useReducer
- useState
- useEffect
- React Native Flash Message

---

# 📂 Estructura del proyecto

```
.
├── app/
│   ├── _layout.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── productos.tsx
│   └── registro.tsx
│
├── assets/
│
├── components/
│
├── context/
│   ├── AuthContext.tsx
│   └── ProductosContext.tsx
│
├── data/
│
├── hooks/
│   ├── useLoginForm.ts
│   ├── useProductForm.ts
│   └── useRegisterForm.ts
│
├── reducers/
│
├── scripts/
│
├── utils/
│   └── alertas.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Instalación

Clonar el repositorio

```bash
git clone https://github.com/R-alber-H/examen-parcial-react-native.git
```

Ingresar al proyecto

```bash
cd examen-parcial
```

Instalar dependencias

```bash
npm install
```

---

# ▶️ Ejecutar la aplicación

Iniciar el servidor de desarrollo

```bash
npx expo start
```

También es posible ejecutar la aplicación directamente en:

Android

```bash
npm run android
```

iOS

```bash
npm run ios
```

Web

```bash
npm run web
```

---

# 🧠 Manejo del estado

La aplicación utiliza **Context API** junto con **useReducer** para compartir y administrar el estado global.

Actualmente los datos:

- Usuarios
- Productos

se almacenan únicamente en memoria, por lo que no existe persistencia de información ni conexión con una base de datos.

---

# 🎨 Diseño

La interfaz fue desarrollada utilizando **NativeWind**, aprovechando clases de estilo similares a Tailwind CSS para React Native.

---

# 📚 Aprendizajes

Durante el desarrollo de este proyecto se aplicaron conceptos como:

- React Native
- Expo
- Navegación con Expo Router
- React Navigation
- Componentes reutilizables
- Hooks personalizados
- Context API
- useReducer
- Manejo de formularios
- Organización del proyecto por módulos
- Diseño de interfaces con NativeWind

---

# 🚧 Limitaciones

Actualmente la aplicación presenta las siguientes limitaciones:

- Los datos no se almacenan en una base de datos.
- No existe autenticación real.
- No hay persistencia de información.
- El CRUD funciona únicamente mientras la aplicación permanece abierta.

---
## 👨‍💻 Autor

Desarrollado por **Ricardo Angel Alberco Huamancusi**.

Este proyecto forma parte de mi proceso de aprendizaje en React Native, Expo y TypeScript.
