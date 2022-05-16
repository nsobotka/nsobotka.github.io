# pip install geotext

import spacy
from spacy import displacy

from collections import Counter

from geotext import GeoText

nlp = spacy.load('en_core_web_sm') 

file_1900 = r"/Users/nathansobotka/Downloads/Engl009 Project/1900.txt"
file_1920 = r"/Users/nathansobotka/Downloads/Engl009 Project/1920.txt"
# note that towne is civil engineering, moore is electrical, and chemical engineering is chem e.
file_1940 = r"/Users/nathansobotka/Downloads/Engl009 Project/1940.txt"
file_1960 = r"/Users/nathansobotka/Downloads/Engl009 Project/1960.txt"
file_1970 = r"/Users/nathansobotka/Downloads/Engl009 Project/1970.txt"


punctuation= '''!()-[]{};:'"\,<>\\\n./?@#$%^&*_~'''
greekWords = {'Kappa', 'Sigma', 'Phi', 'Delta', 'Theta', 'Alpha', 'Beta', 'Gamma', 'Epsilon', 'Zeta', 'Eta', 'Iota', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Tau', 'Upsilon', 'Chi', 'Psi', 'Omega'}


text_1900 = open(file_1900).read()
text_1900 = text_1900.title()
text_1920 = open(file_1920).read()
text_1920 = text_1920.title()
text_1940 = open(file_1940).read()
text_1940 = text_1940.title()
text_1960 = open(file_1960).read()
text_1960 = text_1960.title()
text_1970 = open(file_1970).read()
text_1970 = text_1970.title()

doc_1900 = nlp(text_1900)
doc_1920 = nlp(text_1920)
doc_1940 = nlp(text_1940)
doc_1960 = nlp(text_1960)
doc_1970 = nlp(text_1970)


# The following functions are examples of the functions used to analyze the data, but are not exhaustive. 
# Examples are only shown for 1900, but were done on all years
# Work was actually done in terminal because spacy does not seem to be consistently compatible with vscode or other IDEs.

# Removes punctuation and line break characters
text = ""
for x in text_1900:
    if x not in punctuation:
        text = text + x

# creates a list of all of the words
list = text.split()

# Prints out lists of the cities and countries found in the text.
places = GeoText(text)
places.cities
places.countries

# looks for occurances of "wharton" in the text, but cuts out the last letter to improve accuracy
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


count = 0
for i in range(len(list) - 1):
    if 'civi' in list[i] and 'engine' in list[i + 1]:
        count = count + 1
print(count)


# Example code used to find fraternity/sorority/honor society mentions if the yearbooks contained them in written form
# When the yearbooks contained the greek symbols, the text was generally scanned by hand

# Code more akin to this was used to find sentences or strings of words that may have occured in multiple contexts
count = 0
for i in list:
    if list[i] in greekWords and list[i - 1] not in greekWords and list[i -2] not in greekWords:
        count = count + 1
