import csv
def refactore_text():
    with open('./media/documents/text_segments.csv', newline='') as csvfile:
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

    with open('./media/documents/text_refactored.csv', 'w', newline='') as csvfile:
        fieldnames = ['doc_name', 'pagenum', 'text']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()

        for doc_name in doc_names:
            for pagenum in pages_doc[doc_name]:
                writer.writerow({'doc_name': doc_name, 'pagenum': pagenum, 'text': results[doc_name][pagenum]})

def get_text_by_page_and_doc(doc_name, pagenum):
    with open('./media/documents/text_refactored.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['doc_name'] == doc_name and row['pagenum'] == pagenum:
                return row['text']
    return None
