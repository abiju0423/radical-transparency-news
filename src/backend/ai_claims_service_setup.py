import spacy
from transformers import pipeline
# Add download commands for new users
try:
    _ = spacy.load('en_core_web_sm')
except:
    import os
    os.system('python -m spacy download en_core_web_sm')
    _ = spacy.load('en_core_web_sm')

try:
    pipeline('text-classification', model='facebook/bart-large-mnli')
except:
    from transformers import AutoModelForSequenceClassification, AutoTokenizer
    AutoTokenizer.from_pretrained('facebook/bart-large-mnli')
    AutoModelForSequenceClassification.from_pretrained('facebook/bart-large-mnli')
