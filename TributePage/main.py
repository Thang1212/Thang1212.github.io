from rembg import remove
from PIL import Image

def main():
    input = Image.open('~/WorkSpace/Web-Demo/TributePage/apjkalam.webp')
    output = remove(input) 
    output.save('~/WorkSpace/Web-Demo/TributePage/')
    
if __name__ == "__main__":
    main()

