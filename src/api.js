import axios from 'axios';

const searchImages = async (term)=> {//handle submit değişkeni
    const response = await axios.get('https://api.unsplash.com/search/photos',{
       headers:{
        Authorization:'Client-ID pWe58YZSTxnH1_TM-564SF5AdLNoHZi5w6gB0UbeINA' 
       },
       params: {
         query:term,
       },
    });
    
    return response.data.results;
   };

   export default searchImages; //böyle yaparak diğer sayfadan çağırabilir

  
// 1. Satır: axios adında bir JavaScript kütüphanesini içe aktardık
// 3. Satır: searchImages adında bir asenkron fonksiyon tanımladık
// 4. Satır: Bu fonksiyon, term adında bir parametre alır
// 5. Satır: axios.get metodu ile Unsplash API'sine bir GET isteği yaptık
// 6. Satır: İstek yaparken headers nesnesi içinde Authorization başlığını verdik
// 7. Satır: Authorization başlığının değeri olarak Unsplash API'nin verdiği Client-ID'yi kullandık
// 9. Satır: İstek yaparken params nesnesi içinde query parametresini verdik
// 10. Satır: query parametresinin değeri olarak term değişkenini kullandık
// 12. Satır: axios.get metodu bir promise döndürür, bu yüzden await ile sonucu bekledik
// 13. Satır: Sonucu response adlı bir değişkene atadık
// 15. Satır: response.data.results dizisini döndürdük
// 17. Satır: searchImages fonksiyonunu dışa aktardık