# Catatan/Rangkumanku saat belajar

## 1. Setup React Dengan Vite

- Tidak lagi menggunakan class, tapi menggunakan function
- [Vite](https://vitejs.dev/)

```sh
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm i
npm run dev
```

## 2. Kita Butuh Prettier

- [Prettier](https://prettier.io/)

- Install prettier
  ```sh
  npm install --save-dev --save-exact prettier
  ```
- Buat file .prettierrc.json di root directory lalu buat configurasi disana

```
{
"tabWidth": 2,
"singleQuote": true,
"jsxSingleQuote": true,
"semi": false
}
```

- File .prettierrc.json berguna untuk meminimalisir conflict pada kerja tim (github) karena perbedaan format
- Daripada menjalankan command format secara terus-menerus, lebih baik gunakan fitur `format on save`. Caranya install plugin prettier pada vscode, pergi ke preferece, search format on save, lalu check (enable).

## 3. Kita Butuh Desain

- Hapus 2 file default css dan import css pada App.jsx dan main.jsx
- Install [Tailwindcss](https://tailwindcss.com/) melalui [framework guides Vite](https://tailwindcss.com/docs/guides/vite)

```sh
npm install -D tailwindcss postcss autoprefixer
```

- Buat file Tailwind config dengan perintah

```sh
npx tailwindcss init -p
```

- Format jika ingin
- Konfigurasi path Tailwind

```
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
```

- Buat file Tailwind directive pada src

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- import pada main.jsx
- restart npm run dev
- Coding pada App.jsx untuk test Tailwind
