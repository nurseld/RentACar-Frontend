import React from "react";
import Slider from "react-slick";

import "./testimonial.css";

import cusava1 from "../../assets/all-images/cusava1.jpg";
import cusava2 from "../../assets/all-images/cusava2.jpg";
import cusava3 from "../../assets/all-images/cusava3.jpg";
import cusava4 from "../../assets/all-images/cusava4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Çok gezen mi bilir, çok okuyan mı? Tabii ki de çok gezen Kader! Beni tanıyanlar gezmeyi ne kadar çok sevdiğimi bilirler. 2g0 cars yurtiçi seyahetlerimde her zaman ilk seçeneğim.
          <br/>#KaderileHerYere #Interlaken
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={cusava1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Kader Yavuz</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Pair 2 zaten her zaman alanında parlayan öğrencilerimden olmuştur. Ne diyebilirim ki?<br/>
        S ü p e r.
        </p>
   

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={cusava2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Halit Enes Kalaycı</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        <br/>Yok artık!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={cusava4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Gürkan İlişen</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Daha iyi bir Rent-A-Car firması bilenler artı birleyebilir mi arkadaşlar?
          -1'ler çoğunlukta.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={cusava3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Engin Demiroğ</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
