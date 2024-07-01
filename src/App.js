import { useState } from 'react';
import searchImages from './api';
import './App.css';
import SearchHeader from './searchHeader';
import ImageList from './components/imageList';

function App() {

  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;

//imageList dosyasından ImageList bileşenini içe aktardık
// App adında bir fonksiyonel bileşen tanımladık
// images adında bir state değişkeni ve onu güncellemek için setImages fonksiyonu tanımladık
  // useState hook'unu kullanarak state değişkeninin başlangıç değerini boş bir dizi olarak belirledik
// handleSubmit adında bir asenkron fonksiyon tanımladık
  // Bu fonksiyon, kullanıcının girdiği terimi parametre olarak alır
// searchImages fonksiyonunu kullanarak terime göre resim araması yaptık
    // searchImages fonksiyonu bir promise döndürür, bu yüzden await ile sonucu bekledik
    // Sonucu result adlı bir değişkene atadık
    // App bileşeninin döndüreceği JSX'i return ile belirledik
// setImages fonksiyonunu kullanarak images state değişkenini result ile güncelledik
// Bir div elementi oluşturduk ve className olarak "App" verdik
// SearchHeader bileşenini çağırdık ve search prop'u olarak handleSubmit fonksiyonunu verdik
// Bu sayede, SearchHeader bileşenindeki arama formu handleSubmit fonksiyonunu tetikleyebilir
// ImageList bileşenini çağırdık ve imagesPlaceholder prop'u olarak images state değişkenini verdik
// Bu sayede, ImageList bileşeni imagesPlaceholder prop'unu kullanarak resimleri ekrana yazdırabilir
// App bileşenini dışa aktardık