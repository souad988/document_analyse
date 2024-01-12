import csv
import os
from django.conf import settings
import PyPDF2

path = os.path.join(settings.BASE_DIR, 'media/documents')
#/media/documents/Emotional_Strategies_in_Job_Hunt_-_Students_Slides_NHPosfu.pdf

def extract_text_from_pdf(file):
    print('file path',file)
    print('file path refactored',os.path.join(settings.BASE_DIR,file[1:]))
    with open(file, "rb") as pdf_file:
        read_pdf = PyPDF2.PdfReader(pdf_file) 
        page = read_pdf.pages[0]
        page_content = page.extract_text()
        return page_content



def refactore_text():
    with open('../media/documents/text_segments.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        results = {}
        for row in reader:
            results[row['doc_name']] = results.get(row['doc_name'], {row['pagenum']: ''}) 
            results[row['doc_name']][row['pagenum']] = results[row['doc_name']].get(row['pagenum'], '') + row['text'] + ','            
        doc_names = list(results.keys())
        pages_doc = {key: sorted(results[key], key=int) for key in doc_names}         
        print(doc_names)
        print('/*********************************************************************/')
        print(pages_doc)

    with open('../media/documents/text_refactored.csv', 'w', newline='') as csvfile:
        fieldnames = ['doc_name', 'pagenum', 'text']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()

        for doc_name in doc_names:
            for pagenum in pages_doc[doc_name]:
                writer.writerow({'doc_name': doc_name, 'pagenum': pagenum, 'text': results[doc_name][pagenum]})

def get_text_by_page_and_doc(doc_name, pagenum):
    with open(path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['doc_name'] == doc_name and row['pagenum'] == pagenum:
                return row['text']
    return None

def get_text_by_doc(doc):
    with open(os.path.join(path,'text_refactored.csv'), newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        text = ''
        for row in reader:
            if row['doc_name'] == doc:
                text += row['text']
        return text        
    return None

def split_chunks(text):
    chnk = 4000
    return[text[idx : idx + chnk] for idx in range(0, len(text), chnk)]