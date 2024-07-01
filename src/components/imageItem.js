function ImageItem ({image}) {
    console.log(image);
    return ( <div>
       <img className="imageListİmg" src = {image.urls.small} alt={image.alt_description}/> 
    </div> );
}

export default ImageItem;

// 1. Satır: ImageItem adında başka bir bileşeni içe aktardık
// 3. Satır: ImageList adında bir fonksiyonel bileşen tanımladık
// 4. Satır: Bu bileşen, imagesPlaceholder adında bir prop alır
// 5. Satır: Bu prop, bir resim dizisidir
// 6. Satır: ImageList bileşeninin döndüreceği JSX'i return ile belirledik
// 7. Satır: Bir div elementi oluşturduk ve className olarak "imageList" verdik
// 8. Satır: imagesPlaceholder dizisini map metodu ile döndük
// 9. Satır: Her bir resim için, index adında bir sıra numarası ve image adında bir resim nesnesi aldık
// 10. Satır: ImageItem bileşenini çağırdık ve key prop'u olarak index'i, image prop'u olarak image'i verdik
// 11. Satır: Bu sayede, ImageItem bileşeni image prop'unu kullanarak resmi ekrana yazdırabilir
// 13. Satır: ImageList bileşenini dışa aktardık





