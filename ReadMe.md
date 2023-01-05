# Catatan/Rangkumanku saat belajar

<details>
  <summary>Daftar Isi</summary>
  <ol>
    <li>
        <a href="#1-setup-react-dengan-vite">Setup React Dengan Vite</a>
    </li>
    <li>
        <a href="#2-kita-butuh-prettier">Kita Butuh Prettier</a>
    </li>
    <li>
        <a href="#3-kita-butuh-desain">Kita Butuh Desain</a>
    </li>
    <li>
        <a href="#4-react-components">React Components</a>
        <ul>
          <li>
            <a href="#component-fixabsolute-data">Component fix/absolute data.</a>
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
    </li>
    <li>
        <a href="#5-nested-seperti-ini-salah">Nested Seperti Ini Salah</a>
        <ul>
          <li>
              <a href="#prettier-printwidth-bracketspacing-dan-bracketsameline">Prettier printWidth, bracketSpacing, dan bracketSameLine</a>
          </li>
          <li>
              <a href="#cara-lain-export-default">Cara lain export default</a>
          </li>
          <li>
              <a href="#cara-lain-membuat-function-component">Cara lain membuat function component</a>
          </li>
          <li>
              <a href="#kelebihan-function-component-es6">Kelebihan function component ES6</a>
          </li>
          <li>
              <a href="#return-jsx-tidak-menerima-lebih-dari-1-node">Return JSX tidak menerima lebih dari 1 node</a>
          </li>
          <li>
              <a href="#nested-function-components">Nested function components</a>
          </li>
          <li>
              <a href="#memisahkan-file-component">Memisahkan file component</a>
          </li>
          <li>
              <a href="#inline-destructuring-props">Inline destructuring props</a>
          </li>
          <li>
              <a href="#membuat-component-memiliki-banyak-component">Membuat component memiliki banyak component</a>
          </li>
        </ul>
    </li>
    <li>
        <a href="#6-usestate">useState</a>
    </li>    
    <li>
        <a href="#7-ekstrack-ke-dalam-komponen">Ekstrack ke dalam komponen</a>
    </li>    
  </ol>
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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

## 4. React Components

- React akan lebih untung menggunakan Component
- Menambakan class pada React menggunakan `className`
- Nama component harus berformat TitleCase

- Permasalahan-permasalahan jika tanpa component yaitu, HTML memang mempunyai component seperti button, tapi itu hanya bawaan dan tidak memiliki style apapun. Jika suatu hari nanti kita memberikan style pada button, lalu membutuhkannya kembali, maka kita harus membuat button baru lalu memberikan style lagi (redudansi)

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Component relative data dengan children

install tabler-icons

```
npm install @tabler/icons --save
```

- Menggunakan props.children

```
// Component
function Button(props) {
  return (
    <button className='bg-blue-600 text-white px-4 py-2 rounded'>
      {props.children}
    </button>
  )
}

// Pemanggilan
<Button>
    <IconBrandTwitter />
    Login
</Button>
```

Muncul permasalahan: Bagaimana jika ingin menggunakan kedua cara diatas secara bersamaan, yaitu props.text dan props children?

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### [Tailwind arbitrary variant](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants) untuk children svg/icon

```
[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1
```

Muncul permasalahan: button defaultnya memiliki property type, onchange, dsb. Bagaimana cara menambahkannya ke component?

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Menambahkan 1 property type pada component Button

- Destructuring object props

```
// Component
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

// Pemanggilan
<Button type='submit'>
    <IconBrandFacebook />
    Register
</Button>
<Button type='button'>
    <IconBrandTwitter />
    Login
</Button>
```

> Destructuring object props:<br>
> const {children, text, type} = props;<br>
> Sama dengan:<br>
> const children = props.children;<br>
> const text = props.text;<br>
> const type = props.type;

Muncul permasalahan: bagaimana jika kita ingin menambahkan property yang lain? tidak elok jika harus ditambahkan satu-satu.

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Menambahkan banyak propert dengan [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```
// Component
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

// Pemanggilan
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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

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

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Menambahkan type default overridingable

1. Tambahkan variable type beserta default value ke dalam destructuring props.
1. Tambahkan property type={type} pada tag button yang ada di compenent Button
1. Property type bisa dioverride pada property component Button

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

## 5. Nested seperti Ini salah

### Prettier printWidth, bracketSpacing, dan bracketSameLine

```
// .prettierrc.json

"printWidth": 80,
"bracketSpacing": true,
"bracketSameLine": true
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Cara lain export default

- Jika ada lebih dari satu component pada 1 file, maka export default nya dapat dipindahkan ke akhir code.

```
export default App
```

> Ketika saya melakukan ini, muncul error "Requested module does not provide export named 'default'" sehingga tampilan website kosong tanpa component. Cara memperbaikinya unik sekali, hanya dengan cara save file main.jsx. Unik bukan? padahal file main.jsx tidak disentuh.

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Cara lain membuat function component

- Cara lain untuk membuat function component yaitu dengan menggunakan style ES6. Namanya `Stateless Function Component (Arrow function)`

```
const App = () => {
  const type = 'submit'
  const onClick = () => console.log('Github Clicked')
  return (
    <div className='bg-slate-900 grid place-content-center min-h-screen'>
      <div className='flex gap-x-2'>
        <Button {...{ type, onClick }}>
          <IconBrandGithub />
          Register
        </Button>
      </div>
    </div>
  )
}
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Kelebihan function component ES6

- Kelebihan function component ES6 adalah ketika return nya hanya satu baris menjadi singkat karena tidak perlu menulis return.

```
const Title = () => <h1>Hello World</h1>
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Return JSX tidak menerima lebih dari 1 node

- Return JSX tidak menerima lebih dari 1 node. Jika ingin memaksakan lebih dari satu node, maka bisa diakali dengan node Fragment from react atau empty tag <></>

```
// Fragment from react
const Title = () => (
  <Fragment>
    <h1>Hello World</h1>
    <h2>Hello Globe</h2>
  </Fragment>
)

// Empty Node
const Title = () => (
  <>
    <h1>Hello World</h1>
    <h2>Hello Globe</h2>
  </>
)
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Nested function components

- Jangan pernah gunakan nested function components walaupun ini valid, karena kata react sendiri ada bug disana (lelet)

```
export default function App() {
  function Button(props) {
    const { className = 'bg-blue-600', children, text, type = 'submit' } = props
    return (
      <button
        {...props}
        type={type}
        className={clsx(
          className,
          '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
        )}>
        {text || children}
      </button>
    )
  }
  const type = 'submit'
  const onClick = () => console.log('Github Clicked')
  return (
    <div className='bg-slate-900 grid place-content-center min-h-screen'>
      <div className='flex gap-x-2'>
        <Button {...{ type, onClick }}>
          <IconBrandGithub />
          Register
        </Button>
      </div>
    </div>
  )
}
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Memisahkan file component

- Buat folder baru pada src dengan nama `Components`
- Buat file baru dengan nama `Button.jsx`
- Cut component Button pada file App.jsx ke file Button.jsx
- Import component Button pada file App.jsx

```
  import Button from './Components/Button'
```

- Export Button pada file Button.jsx

```
export default Button
```

- Import cslx

```
import clsx from 'clsx'
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Inline destructuring props

- Deklarasi destructuring porps pada Button dapat diinlinekan (intina mah dina parameter function Button) dengan tambahan parameter `...props`

```
export default function Button({ className = 'bg-blue-600', children,  text, type = 'submit', ...props }) {
  ....
}
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

### Membuat component memiliki banyak component

- Saat yang tepat untuk membuat component memiliki banyak component adalah seperti kasus Card
- Kurang nyaman jika harus membuat folder untuk turunan component

Cara component memiliki banyak component

1. Menggunakan props pribadi

```
// Component Card
export default function Card({ children, title, footer }) {
  return (
    <div className='shadow'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <div className='leading-relaxed'>{children}</div>
      <div className='bg-slate-50'>{footer}</div>
    </div>
  )
}

// Pemanggilan Component
<Card title='Hello World' footer={<Button>Register</Button>}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
</Card>
```

2. Component wrap/bind

```
// Component
function Card({ children, title, footer }) {
  return (
    <div className='shadow'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <div className='leading-relaxed'>{children}</div>
      <div className='bg-slate-50'>{footer}</div>
    </div>
  )
}

function Title({ children }) {
  return <h1 className='text-2xl'>{children}</h1>
}
function Footer({ children }) {
  return <div className='bg-slate-50'>{children}</div>
}

Card.Title = Title
Card.Footer = Footer

export default Card

// Pemanggilan
<Card>
  <Card.Title>Hello React</Card.Title>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  <Card.Footer>
    <Button>Register</Button>
  </Card.Footer>
</Card>
```

3. Upgrade component wrap/bind

```
// Component
function Card({ children }) {
  return (
    <div className='shadow rounded-lg overflow-hidden bg-white'>{children}</div>
  )
}
function Title({ children }) {
  return (
    <div className='p-4 border-b'>
      <h1 className='text-xl'>{children}</h1>
    </div>
  )
}
function Body({ children }) {
  return <div className='leading-relaxed p-4'>{children}</div>
}
function Footer({ children }) {
  return <div className='bg-slate-50 p-4'>{children}</div>
}
Card.Title = Title
Card.Body = Body
Card.Footer = Footer
export default Card

// Pemanggilan
<Card>
  <Card.Title>Hello React</Card.Title>
  <Card.Body>
    Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Fugiat, dicta. Lorem ipsum dolor sit, amet consectetur adipisicing
    elit. Aut, aperiam?
  </Card.Body>
  <Card.Footer>
    <Button>Register</Button>
  </Card.Footer>
</Card>
```

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

## 6. useState

- useState hadir untuk HMR, yaitu perubahan langsung/live pada browser. Penggunaan let apalagi const tidak memengaruhi HMR.

```
export default function App() {
  const [name, setName] = useState('Default')
  function handleClick() {
    setName('Eris')
  }
  return (
    <PlaceContentCenter>
      <div>{name}</div>
      <Button onClick={handleClick}>Change Name</Button>
    </PlaceContentCenter>
  )
}
```

- Variable pada useState tertinggal satu langkah setelah melakukan setState. Cara mengakalinya adalaha dengan cara membuat variable baru berawalan next, seperti nextName

```
function handleClick() {
  const nextName = 'Eris'
  setName(nextName)
}
```

- Ketika ingin menggunakan function, jangan tambahkan () agar function tersebut tidak langsung/otomatis dipanggil di awal
- Pemanggilan setState tidak bisa dilakukan berulang dalam satu waktu, karna yang terjadi hanya akan menjalankan handle secara sekali. Untuk mengakali hal tersebut, dapat menggunakan `updater`. variable prevState dapat diganti dengan apapun.

```
export default function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    // setCount(count + 1)
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <PlaceContentCenter>
      <div>{count}</div>
      <Button onClick={handleClick}>+1</Button>
      <Button
        onClick={() => {
          handleClick()
          handleClick()
          handleClick()
        }}>
        +3
      </Button>
    </PlaceContentCenter>
  )
}
```

- Ketika memanggil function didalam arrow function, pastikan untuk menambahkan ()

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>

## 7. Ekstrack ke dalam komponen

- Codingan Counter pada video sebelumnya dapat dijadikan komponen terpisah. Caranya buat file baru pada folder Components sebagaimana biasanya.
- Kadangkala komponen membutuhkan variable state yang terdapat pada komponen lainnya atau ingin mengirim data. Untuk mengakali hal tersebut, state dapat ditransfer melalui props. Catatan, jika state nya hanya untuk 1 komponen, sebaiknya simpan di komponen yang bersangkutan.
- Jika props & state memiliki nama yang sama, maka bis dibongkar menjadi `<Counter {...{ count, setCount }} />`
- Kalian juga dapat menambahkan initial props

<p align="right"><a href="#catatanrangkumanku-saat-belajar">Go 🔝</a></p>
