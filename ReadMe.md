# Top/maju

# Catatan/Rangkumanku saat belajar

<details>
  <summary>Daftar Isi</summary>
  <ul>
    <li>
        <a href="#1-setup-react-dengan-vite">1. Setup React Dengan Vite</a>
    </li>
    <li>
        <a href="#2-kita-butuh-prettier">2. Kita Butuh Prettier</a>
    </li>
    <li>
        <a href="#3-kita-butuh-desain">3. Kita Butuh Desain</a>
    </li>
    <li>
        <a href="#4-react-components">4. React Components</a>
    </li>
    <li>
        <a href="#component-fixabsolute-data">Component fix/absolute data.</a>
    </li>
    <li>
        <a href="#component-relative-data-dengan-props">Component relative data dengan props</a>
    </li>
    <li>
        <a href="#component-relative-data-dengan-children">Component relative data dengan children</a>
    </li>
    <li>
        <a href="#component-relative-data-dengan-pengkondisian-propstext-dan-propschildren">Component relative data dengan pengkondisian props.text dan props.children</a>
    </li>
    <li>
        <a href="#tailwind-arbitrary-variant-untuk-children-svgicon">Tailwind Arbitrary Variant untuk children svg/icon</a>
    </li>
    <li>
        <a href="#menambahkan-1-property-type-pada-component-button">Menambahkan 1 property type pada component Button</a>
    </li>
    <li>
        <a href="#menambahkan-banyak-propert-dengan-spread-syntax">Menambahkan banyak propert dengan Spread Syntax</a>
    </li>
    <li>
        <a href="#component-dengan-props-classname">Component dengan props className</a>
    </li>
    <li>
        <a href="#component-dengan-props-classname-default">Component dengan props className default</a>
    </li>
    <li>
        <a href="#clsx">CLSX</a>
    </li>
    <li>
        <a href="#memanggil-props-tidak-dengan-attribute">Memanggil props tidak dengan attribute</a>
    </li>
    <li>
        <a href="#menambahkan-type-default-overridingable">Menambahkan type default overridingable</a>
    </li>
  </ul>
</details>

## 1. Setup React Dengan Vite

- Tidak lagi menggunakan class, tapi menggunakan function
- [Vite](https://vitejs.dev/)

```sh
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm i
npm run dev
```

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

## 4. React Components

- React akan lebih untung menggunakan Component
- Menambakan class pada React menggunakan `className`
- Nama component harus berformat TitleCase

- Permasalahan-permasalahan jika tanpa component yaitu, HTML memang mempunyai component seperti button, tapi itu hanya bawaan dan tidak memiliki style apapun. Jika suatu hari nanti kita memberikan style pada button, lalu membutuhkannya kembali, maka kita harus membuat button baru lalu memberikan style lagi (redudansi)

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Component fix/absolute data.

```
function Button() {
  return (
    <button className='bg-blue-600 text-white px-4 py-2 rounded'>
      Sign In
    </button>
  )
}
```

Cara memanggilnya: `<Button />` atau `<Button></Button>`

Muncul permasalahan: Bagaimana jika textnya ingin dijadikan relative?

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Component relative data dengan props

- Menggunakan props

```
function Button(props) {
  return (
    <button className='bg-blue-600 text-white px-4 py-2 rounded'>
      {props.text}
    </button>
  )
}
```

Cara memanggilnya: `<Button text='Register' />`

Muncul permasalahan: Bagaimana jika isi text ingin ditambahkan component lain?

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Component relative data dengan children

install tabler-icons

```
npm install @tabler/icons --save
```

- Menggunakan props.children

```
function Button(props) {
  return (
    <button className='bg-blue-600 text-white px-4 py-2 rounded'>
      {props.children}
    </button>
  )
}
```

Cara memanggilnya:

```
<Button>
    <IconBrandTwitter />
    Login
</Button>
```

Muncul permasalahan: Bagaimana jika ingin menggunakan kedua cara diatas secara bersamaan, yaitu props.text dan props children?

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Component relative data dengan pengkondisian props.text dan props.children

- Menggunakan Logical Operators Or ||

```
function Button(props) {
  return (
    <button className='bg-blue-600 text-white px-4 py-2 rounded'>
      {props.text || props.children}
    </button>
  )
}
```

Cara memanggilnya seperti 2 component sebelumnya.

Muncul permasalahan: jika kita ingin memberikan style kepada icon, maka kita akan mengulang (redudansi) styling setiap kali menambahkan icon baru

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### [Tailwind Arbitrary Variant](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants) untuk children svg/icon

```
[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1
```

Muncul permasalahan: button defaultnya memiliki property type, onchange, dsb. Bagaimana cara menambahkannya ke component?

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Menambahkan 1 property type pada component Button

- Destructuring object props

```
function Button(props) {
  const { children, text, type } = props
  return (
    <button
      type={type}
      className='[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded'
    >
      {text || children}
    </button>
  )
}
```

> Destructuring object props:<br>
> const {children, text, type} = props;<br>
> Sama dengan:<br>
> const children = props.children;<br>
> const text = props.text;<br>
> const type = props.type;

Cara memanggilnya:

```
<Button type='submit'>
    <IconBrandFacebook />
    Register
</Button>
<Button type='button'>
    <IconBrandTwitter />
    Login
</Button>
```

Muncul permasalahan: bagaimana jika kita ingin menambahkan property yang lain? tidak elok jika harus ditambahkan satu-satu.

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Menambahkan banyak propert dengan [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```
function Button(props) {
  const { children, text } = props
  return (
    <button
      {...props}
      className='[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded'
    >
      {text || children}
    </button>
  )
}
```

Cara memanggilnya:

```
<Button type='submit' onClick={() => console.log('Register')}>
    <IconBrandFacebook />
    Register
</Button>
<Button type='button' onClick={() => console.log('Login')}>
    <IconBrandTwitter />
    Login
</Button>
```

Muncul permasalahan: bagaimana jika kita ingin menambahkan style yang berbeda pada component?

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Component dengan props className

```
function Button(props) {
  const { className, children, text } = props
  return (
    <button
      {...props}
      className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded`}
    >
      {text || children}
    </button>
  )
}
```

> Gunakan backtick `` untuk menggunakan Template literals (Template strings) <br>
> Cara print: ${className}

Muncul permasalahan: bagaimana jika kita ingin memberikan style default?

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Component dengan props className default

- Gunakan default variable:<br>
  className = 'bg-blue-600'

```
function Button(props) {
  const { className = 'bg-blue-600', children, text } = props
  return (
    <button
      {...props}
      className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded`}
    >
      {text || children}
    </button>
  )
}
```

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### CLSX

clsx berguna untuk merapikan className kedalam function clsx.

```
npm i clsx
```

```
import clsx from 'clsx'

className={clsx(
    className,
    '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
)}
```

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Memanggil props tidak dengan attribute

```
<Button
    {...{
        type: 'button',
        onClick: () => console.log('Github Clicked'),
    }}
>
    <IconBrandGithub />
    Register
</Button>
```

- Pemanggilan props dengan cara ini lebih baik digunakan ketika value dan property nya sama. <br> Contoh:

```
// Anggap ini value & property nya sama
const type = 'submit'
const onClick = () => console.log('Github Clicked')
// Pemanggilan props
<Button {...{ type, onClick }}>
    <IconBrandGithub />
    Register
</Button>
```

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Menambahkan type default overridingable

1. Tambahkan variable type beserta default value ke dalam destructuring props.
1. Tambahkan property type={type} pada tag button yang ada di compenent Button
1. Property type bisa dioverride pada property component Button

<p style="text-align:end"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>
