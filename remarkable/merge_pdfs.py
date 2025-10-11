# Za združevanje pdfjev

from PyPDF2 import PdfWriter
import os


def join_pdfs(sez: list[str], output_path: str): # get ordered list of paths to pdfs
    merger = PdfWriter()
    for pdf in sez:
        try:
            merger.append(pdf)
        except:
            print("Error :(")

    merger.write(output_path)
    merger.close()
    print(f"Merged PDF saved to {output_path}.pdf")
    
def mapa_to_list(pot: str) -> list[str]:
    pdf_list = []
    for file in os.listdir(pot):
        if file.endswith(".pdf"):
            pdf_list.append(os.path.join(pot, file))
    return sorted(pdf_list)  # Sort to maintain order
    
def pdfjanje():
    w = str(input("Pot do mapre z pdfji: "))
    sez = mapa_to_list(w)
    print("Ali je spodnji vrsti red pravilen?")
    for pdf in sez:
        print(pdf)
    yn = str(input("y/n: "))
    if yn == "y":
        x = str(input("ime izhodne datoteke: "))
        output_path = os.path.join(w, "..", x) + ".pdf"
        join_pdfs(sez, output_path)
        print("datoteka je bila shranjena v", output_path)

pdfjanje()
