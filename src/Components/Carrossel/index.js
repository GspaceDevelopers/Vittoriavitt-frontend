import React, { useEffect, useState } from "react";
import api2 from "../../services/api2";
import "./Styles.css";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Carrossel = () => {
  const [dadosedicao, setDadosedicao] = useState([]);

  useEffect(() => {
    api2.get("/edicao").then((data) => {
      setDadosedicao(data.data);
    });

  }, []);

  const slideImages = [
    {
      url: dadosedicao.map(item => item.componentelogos?.logo1)[0],
      link: dadosedicao.map(item => item?.url1)[0]
    },
    {
      url: dadosedicao.map(item => item.componentelogos?.logo2)[0],
      link: dadosedicao.map(item => item?.url2)[0]

    },
    {
      url: dadosedicao.map(item => item.componentelogos?.logo3)[0],
      link: dadosedicao.map(item => item?.url3)[0]
    },
    {
      url: dadosedicao.map(item => item.componentelogos?.logo4)[0],
      link: dadosedicao.map(item => item?.url4)[0]
    },
    {
      url: dadosedicao.map(item => item.componentelogos?.logo5)[0],
      link: dadosedicao.map(item => item?.url5)[0]
    },
    {
      url: dadosedicao.map(item => item.componentelogos?.logo6)[0],
      link: dadosedicao.map(item => item?.url6)[0]
    },

  ];

  const slideImages2 = [
    {
      url: dadosedicao.map(item => item.banners?.banner1)[0],
      link: dadosedicao.map(item => item?.url1)[0]

    },
    {
      url: dadosedicao.map(item => item.banners?.banner2)[0],
      link: dadosedicao.map(item => item?.url2)[0]

    },
    {
      url: dadosedicao.map(item => item.banners?.banner3)[0],
      link: dadosedicao.map(item => item?.url3)[0]

    },
    {
      url: dadosedicao.map(item => item.banners?.banner4)[0],
      link: dadosedicao.map(item => item?.url4)[0]

    },
    {
      url: dadosedicao.map(item => item.banners?.banner5)[0],
      link: dadosedicao.map(item => item?.url5)[0]

    },
    {
      url: dadosedicao.map(item => item.banners?.banner6)[0],
      link: dadosedicao.map(item => item?.url6)[0]
    },

  ];

  const filter = slideImages.filter(item => item.url != '' && item.url != undefined)
  const filter2 = slideImages2.filter(item => item.url != '' && item.url != undefined)

  return (

    <div className="container-pai-carrossel">
      <div className="slide-container">
        {window.screen.width > 500 ?
          <Fade arrows={filter.length == 1 ? false : true} autoplay duration={3000} >
            {filter.map((fadeImage, index) => (
              <div key={index}>
                <img onClick={() => window.location.href = `${fadeImage.link}`} style={{ width: '100%' }} src={fadeImage.url} />
              </div>
            ))}
          </Fade> :

          <Fade arrows={filter.length == 1 ? false : true} autoplay duration={3000}>
            {filter2.map((fadeImage, index) => (
              <div key={index}>
                <img onClick={() => window.location.href = `${fadeImage.link}`} style={{ width: '100%' }} src={fadeImage.url} />
              </div>
            ))}
          </Fade>

        }
      </div>
    </div>








  );
};

export default Carrossel;

{/* <>
   {" "}
   <main className="main-background">
     <ul>
       {dadosedicao.map(item=> item.componentelogos.logo1)[0] != '' || dadosedicao.map(item=> item.banners.banner1)[0]  ? 
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url1)[0] == '' ? '/' : dadosedicao.map(item => item.url1)}`}>
         <div className="background-image-main-one"></div>
       </li>
       :<li style={{display:"none"}} onClick={() => window.location.href = `${dadosedicao.map(item => item.url1)[0] == '' ? '/' : dadosedicao.map(item => item.url1)}`}>
       <div className="background-image-main-one"></div>
     </li>}




       {dadosedicao.map(item=> item.componentelogos.logo2)[0] != '' || dadosedicao.map(item=> item.banners.banner2)[0]  ?
        <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url2)[0] == '' ? '/' : dadosedicao.map(item => item.url2)}`}>
         <div className="background-image-main-two"></div>
       </li>
       :<li style={{display:"none"}} onClick={() => window.location.href = `${dadosedicao.map(item => item.url2)[0] == '' ? '/' : dadosedicao.map(item => item.url2)}`}>
       <div style={{display:"none"}}  className="background-image-main-two"></div>
     </li>}



       {dadosedicao.map(item=> item.componentelogos.logo3)[0] != '' || dadosedicao.map(item=> item.banners.banner3)[0]  ? 
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url3)[0] == '' ? '/' : dadosedicao.map(item => item.url3)}`}>
         <div className="background-image-main-three"></div>
       </li>
       :<li style={{display:"none"}} onClick={() => window.location.href = `${dadosedicao.map(item => item.url3)[0] == '' ? '/' : dadosedicao.map(item => item.url3)}`}>
       <div style={{display:"none"}}  className="background-image-main-three"></div>
     </li>}
       {dadosedicao.map(item=> item.componentelogos.logo4)[0] != '' || dadosedicao.map(item=> item.banners.banner4)[0]  ? 
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url4)[0] == '' ? '/' : dadosedicao.map(item => item.url4)}`}>
         <div className="background-image-main-four"></div>
       </li>
       :<li style={{display:"none"}} onClick={() => window.location.href = `${dadosedicao.map(item => item.url4)[0] == '' ? '/' : dadosedicao.map(item => item.url4)}`}>
       <div style={{display:"none"}}  className="background-image-main-four"></div>
     </li>}
       {dadosedicao.map(item=> item.componentelogos.logo5)[0] != '' || dadosedicao.map(item=> item.banners.banner5)[0]  ? 
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url5)[0] == '' ? '/' : dadosedicao.map(item => item.url5)}`}>
         <div className="background-image-main-five"></div>
       </li>
       :  <li style={{display:'none'}} onClick={() => window.location.href = `${dadosedicao.map(item => item.url5)[0] == '' ? '/' : dadosedicao.map(item => item.url5)}`}>
       <div style={{display:"none"}}  className="background-image-main-five"></div>
     </li>}
       {dadosedicao.map(item=> item.componentelogos.logo6)[0] != '' || dadosedicao.map(item=> item.banners.banner6)[0]  ? 
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url6)[0] == '' ? '/' : dadosedicao.map(item => item.url6)}`}>
         <div className="background-image-main-six"></div>
       </li>
       :  <li style={{display:"none"}} onClick={() => window.location.href = `${dadosedicao.map(item => item.url6)[0] == '' ? '/' : dadosedicao.map(item => item.url6)}`}>
       <div style={{display:"none"}}  className="background-image-main-six"></div>
     </li>}

      {/* <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url2)[0] == '' ? '/' : dadosedicao.map(item => item.url2)}`}>
         <div className="background-image-main-two"></div>
       </li>
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url3)[0] == '' ? '/' : dadosedicao.map(item => item.url3)}`}>
         <div className="background-image-main-three"></div>
       </li>
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url4)[0] == '' ? '/' : dadosedicao.map(item => item.url4)}`}>
         <div className="background-image-main-four"></div>
       </li>
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url5)[0] == '' ? '/' : dadosedicao.map(item => item.url5)}`}>
         <div className="background-image-main-five"></div>
       </li>
       <li onClick={() => window.location.href = `${dadosedicao.map(item => item.url6)[0] == '' ? '/' : dadosedicao.map(item => item.url6)}`}>
         <div className="background-image-main-six"></div>
       </li>}

     </ul>
   </main>
     </>
     }*/}