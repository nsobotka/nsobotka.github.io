import spacy

from collections import Counter

from spacy import displacy
# pip install geotext
from geotext import GeoText

nlp = spacy.load('en_core_web_sm') 

file_1900 = r"/Users/nathansobotka/Downloads/Engl009 Project/1900.txt"

punctuation= '''!()-[]{};:'"\,<>\\\n./?@#$%^&*_~'''
greekWords = {'Kappa', 'Sigma', 'Phi', 'Delta', 'Theta', 'Alpha', 'Beta', 'Gamma', 'Epsilon', 'Zeta', 'Eta', 'Iota', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Tau', 'Upsilon', 'Chi', 'Psi', 'Omega'}


text_1900 = open(file_1900).read()
text_1900 = text_1900.lower()

text = ""
for x in text_1900:
    if x not in punctuation:
        text = text + x

list = text.split()

count = 0
for i in list:
    if 'wharto' in i:
        count = count + 1
print(count)

count = 0
for i in list:
    if 'engineeri' in i:
        count = count + 1
print(count)

count = 0
for i in list:
    if 'arts' in i:
        count = count + 1
print(count)

count = 0
for i in list:
    if 'architectu' in i:
        count = count + 1
print(count)

# others are the same

count = 0
for i in range(len(list) - 1):
    if 'civi' in list[i] and 'engine' in list[i + 1]:
        count = count + 1
print(count)


file_1920 = r"/Users/nathansobotka/Downloads/Engl009 Project/1920.txt"

# note that towne is civil engineering, moore is electrical, and chemical engineering is chem e.
file_1940 = r"/Users/nathansobotka/Downloads/Engl009 Project/1940.txt"
file_1960 = r"/Users/nathansobotka/Downloads/Engl009 Project/1960.txt"
file_1970 = r"/Users/nathansobotka/Downloads/Engl009 Project/1970.txt"

text_1920 = open(file_1920).read()
text_1940 = open(file_1940).read()
text_1960 = open(file_1960).read()
text_1970 = open(file_1970).read()

text = ""
for x in text_1920:
    if x not in punctuation:
        text = text + x
text = text.title()

text = ""
for x in text_1940:
    if x not in punctuation:
        text = text + x
text = text.title()

count = 0
for i in list:
    if list[i] in greekWords and list[i - 1] not in greekWords and list[i -2] not in greekWords:
        count = count + 1

places = GeoText(text)
places.cities

doc_1900 = nlp(text_1900)
doc_1920 = nlp(text_1920)
doc_1940 = nlp(text_1940)
doc_1960 = nlp(text_1960)
doc_1970 = nlp(text_1970)