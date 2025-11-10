# Use this script to add Python-based AI claim extraction to the Node.js backend
from flask import Flask, request, jsonify
import spacy
from transformers import pipeline

app = Flask(__name__)
nlp = spacy.load('en_core_web_sm')
claim_model = pipeline('text-classification', model='facebook/bart-large-mnli')

@app.route('/extract_claims', methods=['POST'])
def extract_claims():
    data = request.json
    text = data.get('text', '')
    doc = nlp(text)
    claims = []
    for sent in doc.sents:
        is_claim = claim_model(sent.text)[0]['label']
        if is_claim == 'ENTAILMENT':
            claims.append({'text': sent.text, 'is_claim': True})
    return jsonify({'claims': claims})

if __name__ == '__main__':
    app.run(port=5001)
