# Beeble Indonesia

Beeble Indonesia is an API provider that offers a comprehensive set of tools and resources for developers who want to integrate Bible data into their applications.

## API Documentation

This API allows developers to access different versions of the Bible in various languages, along with additional information such as book, chapter, and verse title, numbers, and contents.

### Base URL

https://beeble.vercel.app

### List of Passages

https://beeble.vercel.app/api/v1/passage/list

### Passage Content

[https://beeble.vercel.app/api/v1/passage/{abbr}/{chapter}?ver={ver}](https://beeble.vercel.app/api/v1/passage/Kej/1?ver=av)

| Param   | Type   | Description                   | Required |
| ------- | ------ | ----------------------------- | -------- |
| abbr    | string | abbreviation of the book name | true     |
| chapter | number | chapter of number             | true     |
| ver     | string | version of content            | false    |

#### Version of Content

-   `av` (King James Version)
-   `tb` (Alkitab Terjemahan Baru)
-   `tl` (Alkitab Terjemahan Lama)

-   `bis` (Bahasa Indonesia Sehari-hari)
-   `tsi` (Terjemahan Sederhana Indonesia)
-   `net` (New English Translation)
-   `niv` (New International Version)

-   `toba` (Alkitab Terjemahan Batak Toba)
-   `karo` (Alkitab Terjemahan Batak Karo)
-   `jawa` (Alkitab Terjemahan Jawa)
-   `bali` (Alkitab Terjemahan Bali)
-   `aceh` (Alkitab Terjemahan Aceh)

Others version can be found on [https://labs.sabda.org/API](https://labs.sabda.org/API)

## Complete Documentation

https://beeble.vercel.app/docs

## Setup Installation

Make sure to install the dependencies

```bash
$ make dep
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
$ make dev
```

⓪ 2023 [Erwindo Sianipar](https://erwindosianipar.github.io) / No rights reserved by the author / Soli Deo gloria
