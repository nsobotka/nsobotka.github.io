# An analysis of trends in the student body at the University of Pennsylvania
Scans of old yearbooks from the University of Pennsylvania are available via the University of Pennsylvania's archives. The student sections of each yearbook (only the section that listed each student name) were scraped for data regarding the student body. This data was aggregated across years, and is available for public use in an excel spreadsheet in the data folder. Once that data was collected, interesting discoveries were presented on a website, available at https://nsobotka.github.io for anyone to view. These discoveries range from the history of women students at Penn, trends regarding majors and greek life, and other interesting facts that fell under no specific category. 

Furthur analysis can be done using the rest of the yearbook. Often interesting information including which students were parts of which on-campus groups was stored in the book. This includes clubs, specific member lists for greek life, presidents of the student body, and much more. This would involve a completely different type of analysis than what was done for this project.

# Notes on the analysis of data
PDFS transformed using optical character recognition (OCR), and then the text was was analyzed using Python and a handful of libraries, which can be found in the Analysis.py file in the data folder. This work was done in terminal because the library spacy seems to have compatibility issues with VSCode, and the examples of the code in Analysis.py file are incomplete, but should provide enough example that all work could be replicated. 

The 1940 women yearbook was completely analyzed by hand, rather than through code. This was because the available scan was particularly blury, and it was not possible to accurately analyze using the same methods as in the other files. It also happens to be the shortest yearbook, and made analysis by hand feasible. This realistically could not be done for the yearbooks that contained over a thousand students.

Data collection was done by hand when the yearbooks contained greek life and honors society information in the form of greek symbols rather than spelled out words. This was because often the OCRed file would not register greek symbols correctly. 

Other interesting pieces of information were gathered by hand as well, including the percentage of students in 1960 that were black women. One of the downsides of OCR is that it loses images, and therefore this data is not present in the text files that are on this repository. Again, the original sources are available in the Penn Archives. 

Other techniques were used to help raise accuracy of the data. These include looking for truncated words, rather than the full thing. For example, "wharto" instead of "wharton", "ngineeri" instead of "engineering", and other similar shortcuts. This was because if the files misread words, often the mistake would come at the beginning or end of the word. By looking for the letters in the middle of a word, without losing enough letters such that the word becomes unrecognizable, these errors could be avoided. Additionally, if patterns were noticed in the files, surrounding words could also be checked for. An example would be looking at the proceeding words when searching for greek symbols and greek life.

Finally, it is worth noting that almost none of the data collected will be 100% correct. Despite this, most trends that were noticed should still be reasonable because the errors are not too prolific. Interpretations of data are therefore valid, but further research should be done before relying on this data to make significant conclusions. 


# Website creation
JS and CSS help from Aviel Resnick.
