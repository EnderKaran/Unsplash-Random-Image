import ImageItem from "./imageItem";

function ImageList ({imagesPlaceholder}) {
    return ( <div className="imageList">
        {imagesPlaceholder.map((image,index)=>{
          return  <ImageItem key={index} image={image}/>;
        })}
    </div> );
}

export default ImageList ;

// ImageItem adında başka bir bileşeni içe aktardık
// ImageList adında bir fonksiyonel bileşen tanımladık
// Bu bileşen, imagesPlaceholder adında bir prop alır
// Bu prop, bir resim dizisidir
// ImageList bileşeninin döndüreceği JSX'i return ile belirledik
// Bir div elementi oluşturduk ve className olarak "imageList" verdik
// imagesPlaceholder dizisini map metodu ile döndük
// Her bir resim için, index adında bir sıra numarası ve image adında bir resim nesnesi aldık
// ImageItem bileşenini çağırdık ve key prop'u olarak index'i, image prop'u olarak image'i verdik
// Bu sayede, ImageItem bileşeni image prop'unu kullanarak resmi ekrana yazdırabilir
// ImageList bileşenini dışa aktardık