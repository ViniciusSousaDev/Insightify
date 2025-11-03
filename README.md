# 💡 Insightify

**Insightify** é uma aplicação web que permite **ler planilhas (Excel/CSV)** e **responder perguntas em linguagem natural** sobre os dados usando inteligência artificial (IA).
Ideal para gerar insights rápidos e inteligentes sem precisar manipular os dados manualmente.

---

## 🧰 Funcionalidades

* Upload de planilhas (.xlsx, .csv)
* Processamento automático de dados com **Pandas**
* Chat com IA para perguntas sobre os dados
* Geração de respostas em texto
* Estrutura preparada para **gráficos e insights automáticos** (próximo passo do projeto)
* Histórico de perguntas (planejado para próximas versões)

---

## ⚙️ Tecnologias

**Back-end:**

* Python 3
* FastAPI
* Pandas / OpenPyXL
* OpenAI API
* Uvicorn

**Front-end:**

* React
* Tailwind CSS
* Axios
* Chart.js / Plotly (planejado)

**Deploy sugerido:**

* Front-end: Vercel
* Back-end: Render ou Railway

---

## 🚀 Estrutura do projeto

```
insightify/
│
├── backend/
│   ├── main.py
│   ├── utils/
│   │   ├── data_reader.py
│   │   ├── ai_engine.py
│   │   └── insight_generator.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UploadForm.jsx
│   │   │   ├── ChatBox.jsx
│   │   │   └── InsightCard.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## 💻 Como executar localmente

### 1. Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

* API disponível em `http://localhost:8000`

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

* Aplicação disponível em `http://localhost:3000`

> Lembre-se de configurar a variável de ambiente `OPENAI_API_KEY` para que o chat funcione.

---

## 📈 Próximos passos do projeto

* Suporte a **gráficos automáticos** com base na pergunta do usuário
* Melhorar o **resumo da planilha** enviado à IA
* Implementar **várias planilhas e histórico de perguntas**
* Deploy completo online com frontend no Vercel e backend no Render

---

## 🔑 Requisitos

* Python 3.10+
* Node.js 18+
* Conta OpenAI com chave API
* Navegador moderno

---

## 📌 Contato

Vinícius Sousa – [LinkedIn](https://www.linkedin.com/in/vinicius-soares-de-sousa/)
Projeto desenvolvido como portfólio de **Inteligência Artificial aplicada a dados**
