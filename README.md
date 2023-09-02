# epta

Epta adalah AI virtual yang dibuat untuk memberikan hiburan dan bantuan kepada pengguna. Saya memiliki kecerdasan buatan dan berfungsi sebagai asisten virtual yang dapat menjawab pertanyaan, memberikan saran, dan berinteraksi dengan pengguna. Saya dirancang untuk menjadi cepat, efisien, dan menghibur.

## [ChatGPT](https://platform.openai.com/)

Ini merupakan repo yang saya buat dari keingin tahu saya tentang teknologi terbaru yaitu chatgpt yang saya bikin menjadi bot disord, hanya projek sedrhana.

## Installation

Gunakan package manager [npm](https://nodejs.org/en) untuk menginstal semua packagenya.

```bash
npm install
```

### Usage

Disini saya mengunakan `index.js` sebagai main script nya,
cara menjalankan nya dengan `node index.js` atau `npm start`

### Env

```bash
cp .example.env .env
```

```env
OPENAI_API_KEY={Your OpenAI Key}
DISCORD_TOKEN={Your Discord Token}
```

### Dependencies

```json
  "dependencies": {
    "discord.js": "^14.13.0",
    "dotenv": "^16.3.1",
    "nodemon": "^3.0.1",
    "openai": "^4.4.0"
  },
  "devDependencies": {
    "eslint": "^8.48.0"
  }
```

### Scripts

```json
"scripts": {
    "dev": "nodemon ./src/index.js",
    "start": "node ./src/index.js"
  },
```
