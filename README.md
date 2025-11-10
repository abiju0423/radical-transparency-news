# README for Radical Transparency News

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/abiju0423/radical-transparency-news.git
cd radical-transparency-news
```

### 2. Install dependencies for frontend & backend
```bash
cd frontend
npm install
cd ../src/backend
npm install
```

### 3. Install Python dependencies for AI microservice
```bash
pip install flask spacy transformers torch
python ai_claims_service_setup.py
```

### 4. Start the Python AI microservice (run in new terminal)
```bash
python ai_claims_service.py
```

### 5. Start the backend server
```bash
cd src/backend
npm start
```

### 6. Start the React frontend
```bash
cd ../../frontend
npm start
```

### 7. Application will be available at http://localhost:3000

*Modify `.env` in backend if you want to supply new keys (NEWS_API_KEY, etc.).*

## Features
- Full-stack React/Node app
- News aggregation through NewsAPI
- Python AI microservice for real-time claim extraction
- Glass Box transparency, AI constitution, claim explorer, login/auth

## For help, see issues or contact abiju0423 on GitHub.
