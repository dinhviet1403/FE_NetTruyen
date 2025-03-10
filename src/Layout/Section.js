function Section( {title=null} ) {
   function getTitle( title ){
      if( title ){
         return title;
      }
      return "TruyenCV - Đọc Truyện Convert - Truyện Chữ Online Convert Online Hay";
   }

  return (
    <div class="bg-light">
        <div class="container">
           <p class="p-1">{getTitle(title)}</p>
        </div>
     </div> 
  );
}

export default Section;
