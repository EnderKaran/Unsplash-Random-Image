import React, { useState, useEffect } from "react";
import kelimeler from "./rastgelekelimeler.js";

function SearchHeader({ search }) {
  const [words, setWords] = useState([]);
  const [valueInput, setValue] = useState("");
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    setWords(kelimeler);
  }, []);

  const handleGenerateRandomWord = () => {
    // Rastgele bir kelime dizisi oluşturun
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    // Rastgele kelimeyi state'e atayın
    setRandomWord(randomWord);

    // Rastgele kelimeyi input değerine atayın
    setValue(randomWord);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Search fonksiyonuna rastgele kelimeyi gönder
    search(randomWord);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Rastgele Kelime Üret</label>
        <button type="button" onClick={handleGenerateRandomWord}>
          Üret
        </button>
        <input value={randomWord} onChange={() => {}} />
        <button type="submit">Ara</button>
      </form>
    </div>
  );
}

export default SearchHeader;


// 1. Satır: React kütüphanesinden useState hook'unu içe aktardık
// 3. Satır: SearchHeader adında bir fonksiyonel bileşen tanımladık
// 4. Satır: Bu bileşen, search adında bir prop alır
// 5. Satır: Bu prop, bir fonksiyondur
// 6. Satır: valueInput adında bir state değişkeni ve onu güncellemek için setValue fonksiyonu tanımladık
// 7. Satır: useState hook'unu kullanarak state değişkeninin başlangıç değerini boş bir string olarak belirledik
// 8. Satır: handleFormSubmit adında bir fonksiyon tanımladık
// 9. Satır: Bu fonksiyon, event adında bir parametre alır
// 10. Satır: event.preventDefault metodu ile formun varsayılan davranışını engelledik
// 11. Satır: debugger komutu ile kodun bu noktada durmasını sağladık
// 12. Satır: search prop'unu çağırarak valueInput değişkenini parametre olarak verdik
// 15. Satır: handleChange adında bir fonksiyon tanımladık
// 16. Satır: Bu fonksiyon, event adında bir parametre alır
// 17. Satır: setValue fonksiyonunu kullanarak valueInput state değişkenini event.target.value ile güncelledik
// 20. Satır: SearchHeader bileşeninin döndüreceği JSX'i return ile belirledik
// 21. Satır: Bir div elementi oluşturduk ve className olarak "searchDiv" verdik
// 22. Satır: Bir form elementi oluşturduk ve onSubmit prop'u olarak handleFormSubmit fonksiyonunu verdik
// 23. Satır: Bir label elementi oluşturduk ve "Ne Arıyorsunuz?" yazdık
// 24. Satır: Bir input elementi oluşturduk ve value prop'u olarak valueInput değişkenini, onChange prop'u olarak handleChange fonksiyonunu verdik
// 28. Satır: SearchHeader bileşenini dışa aktardık
