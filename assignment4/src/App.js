import './App.css';
import Card from './Cards/Card';
import Sdata from "./Sdata";
function App() {
  // console.log(Sdata);
 

  <>
  {
    Sdata.map((val) =>{
      console.log(val);
      return(
       
          <Card
        key = {val.id} 
        imgUrls ={val.imgUrl}
        titles = {val.title}
        links = {val.link}
        
        />
    
      );
    })
  }
  </>    

}

export default App;



/* 
1 method:--- we can use this method also
<Card
      imgUrl = "https://qqcdnpictest.mxplay.com/pic/9fc734ad705381dc9f53771d1696ffd5/en/2x3/320x480/c1bd3892b58d9780f9f6ad9af205d0f8_1280x1920.webp"
      title = "Heart Attack 2"
      link = "https://www.youtube.com/"
      />
       <Card
      imgUrl = "https://static.toiimg.com/photo/msid-88916654/88916654.jpg?84788"
      title = "Pushpa"
      link = "https://www.youtube.com/"
      /> */

      // 2nd method
      // <Card
      // imgUrl ={Sdata[0].imgUrl}
      // title = {Sdata[0].title}
      // link = {Sdata[0].link}
      // />
      // <Card
      // imgUrl ={Sdata[1].imgUrl}
      // title = {Sdata[1].title}
      // link = {Sdata[1].link}
      // />
      // <Card
      // imgUrl ={Sdata[2].imgUrl}
      // title = {Sdata[2].title}
      // link = {Sdata[2].link}
      // />

      // Sdata.map((val) =>{
      //   return(
      //     <Card
      //     imgUrl ={val.imgUrl}
      //     title = {val.title}
      //      link = {val.link}
      //     />
      //   )
      // })


      