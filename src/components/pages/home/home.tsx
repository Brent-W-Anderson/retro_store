
import { Component } from 'react';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: 'CyberPunk',
    url: "https://cdn-5e232c75f911c8096c0b5a1f.closte.com/wp-content/uploads/2019/12/Cyberpunk-2077-Final.png"
  },
  {
    name: 'Elden Ring',
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOqpr-47LNogq-MdvmjuD2vXBYQeIA4XEQg&usqp=CAU"
  },
  {
    name: '2k22',
    url: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0119%2Fr963508_1296x729_16%2D9.jpg"
  },
  {
    name: 'Tiny Tinas Wonderlands',
    url: "https://assets1.ignimgs.com/thumbs/userUploaded/2021/6/12/tiny-tinas-wonderland-key-art-large-1623532666878.jpg"
  }, 
  {
    name: 'Grand Turismo 7',
    url: "https://img.game-news24.com/2022/02/Gran-Turismo-7-has-new-Trailers-Featuring-gorgeous-music-remix-soundtrack.jpeg"
  },
  {
    name: 'Pokemon Legends: Arceus',
    url: "https://www.lifewire.com/thmb/uV5XxJ6kW4jlh3vcNG4TyvSoRsE=/1400x787/filters:fill(auto,1)/Pokemon-Legends-ARceus-1-ec72a0df040841d7ba296990bff388de.jpg"
  },
  {
    name: 'Yoshis Crafted World',
    url: "https://assets.reedpopcdn.com/get-yoshis-crafted-world-plus-egg-cartridge-case-for-40-1548165449859.jpg/BROK/thumbnail/1200x1200/quality/100/get-yoshis-crafted-world-plus-egg-cartridge-case-for-40-1548165449859.jpg"
  },
  {
    name: 'Donkey Kong Country Tropical Freeze',
    url: "https://assets1.ignimgs.com/2018/01/11/dkc-tropical-freeze---button-1515700382348.jpg"
  },
  {
    name: 'The Show 22',
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0huie3Mfgt6f7vvXfgxH4j0_fKgbZDNTHzz0TB62Klgcs2dNJTS-K9o5LflIqdebcIA&usqp=CAU"
  },

]

export default class HomePage extends Component {
  state = {
    featured: []
  }

  render() {
    const { featured } = this.state;
    
    const settings = {
      dot: true,
      fade: true,
      infinite: true, 
      speed: 500, 
      slideToShow: 1, 
      arrows: true,
      slideToscroll: 1, 
      className: "slides"
    }

    return (
      <div id='home' className="page">
        <div id='homePageIntro'>
          <h3>Welcome to Retro Retro</h3>
        </div>

        <div className='click-container'>
          <div className='box' ><a href='link'>On Sale</a></div>
          <div className='box' >Featured Page</div>
          <div className='box' >Xbox</div>
          <div className='box' >Playstation</div>
          <div className='box' >Nintendo</div>
          <div className='box' >SEGA/NES</div>
        </div>
        <div className='featured' id='slides' style={{padding: 24}}>
         <h3>Featured Games</h3>
         <Slider {...settings}>
         {photos.map(photo) => {
          return(
            <div>
              <img width='50%' src= {photos.url}/>
            </div>

          )
         })} 
         </Slider>
        </div>
      </div>
    );
  }
}