# 🎬 MovieBase

MovieBase é um web app de filmes construído com **JavaScript puro**, consumindo a **API do TMDB**. O projeto foca em boas práticas de front-end, organização de código, performance e experiência do usuário, sem uso de frameworks.

👉 Projeto ideal para consolidar fundamentos reais de consumo de API, estado simples, UI dinâmica e responsividade.

---

## 🚀 Funcionalidades

- 🎥 Lista de filmes populares
- 🔍 Busca de filmes com **debounce**
- ⏳ Loading animado
- 🎞 Página de detalhes do filme
- 🖼 Hero com backdrop responsivo (qualidade adaptada à tela)
- ⭐ Avaliação, duração, ano e gêneros
- 🔙 Botão de voltar com histórico
- 📱 Layout **mobile first**
- 🧠 Estado global simples
- ⚠️ Tratamento de erro (ex: busca sem resultados)

---

## 🧱 Tecnologias Utilizadas

- HTML5
- CSS3 (mobile first)
- JavaScript (ES Modules)
- API do TMDB

## 🔌 API

O projeto utiliza a **The Movie Database API (TMDB)**.

### Configuração

Crie um arquivo de configuração (ex: `api.js`) e adicione sua chave:

```
const API_KEY = "SUA_API_KEY_AQUI";
```

📌 Você precisa criar uma conta em [https://www.themoviedb.org](https://www.themoviedb.org)

---

## 🧠 Destaques Técnicos

### Estado Global Simples

Controle básico de estado para filmes, loading e busca sem bibliotecas externas.

### Debounce

Evita múltiplas requisições desnecessárias durante a digitação na busca.

### Imagens Responsivas

O tamanho do backdrop é escolhido dinamicamente conforme a largura da tela:

- Mobile: `w1280(Mantém a qualidade da imagem)`
- Tablet: `w1280`
- Desktop: `original`

---

## 📱 Mobile First

Todo o layout foi pensado inicialmente para dispositivos móveis e escalado para telas maiores com media queries.

---

## 🧪 Melhorias Futuras

- 🎬 Filmes similares
- ❤️ Favoritar filmes
- 🔐 Persistência com localStorage
- 🌙 Dark / Light mode
- 🧩 Paginação

---

## 👨‍💻 Autor

**Arthur Sampaio**
Dev Front-end em evolução 🚀
GitHub: [https://github.com/yh1r0nzs](https://github.com/yh1r0nzs)

---

## 📜 Licença

Este projeto é apenas para fins educacionais.

---

✨ Projeto desenvolvido com foco em aprendizado real e boas práticas de front-end.
