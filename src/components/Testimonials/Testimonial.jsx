import React, { useState } from "react";
import Slider from "react-slick";
import "./testimonial.css";
import cusava1 from "../../assets/all-images/cusava1.jpg";
import cusava2 from "../../assets/all-images/cusava2.jpg";
import cusava3 from "../../assets/all-images/cusava3.jpg";
import cusava4 from "../../assets/all-images/cusava4.jpg";

const Testimonial = () => {
  const [readMoreIndex, setReadMoreIndex] = useState(null);

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

  const handleReadMore = (index) => {
    setReadMoreIndex(index === readMoreIndex ? null : index);
  };

  return (
    <Slider {...settings}>
      {/* Testimonial 1 */}
      <div
        className="testimonial py-4 px-3"
        style={{ width: "150px", height: "150px" }}
      >
        <div className="testimonial-content bg-light rounded p-3">
          <img src={cusava1} alt="" className="w-25 h-25 rounded-2 me-3" />
          <div className="text-start testimonial-text">
            <h6 className="mb-0 mt-3">Kader Yavuz</h6>
            <p className="section__description">Customer</p>
            <hr className="my-2" />
            <div
              className={`section__description testimonial-description ${
                readMoreIndex === 0 ? "expanded" : ""
              }`}
            >
              Çok gezen mi bilir, çok okuyan mı? Tabii ki de çok gezen Kader!
              Beni tanıyanlar gezmeyi ne kadar çok sevdiğimi bilirler.
            </div>
            {readMoreIndex !== 0 && (
              <div
                className="scroll-indicator"
                onClick={() => handleReadMore(0)}
              >
                <span>Devamını Oku</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            )}
            {readMoreIndex === 0 && (
              <div className={`section__description expanded`}>
                2g0 cars yurtiçi seyahatlerimde her zaman ilk tercihim.
                <br />
                #KaderileHerYere #Interlaken
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="testimonial py-4 px-3">
        <div className="testimonial-content bg-light rounded p-3">
          <img src={cusava2} alt="" className="w-25 h-25 rounded-2 me-3" />
          <div className="text-start testimonial-text">
            <h6 className="mb-0 mt-3">Halit Enes Kalaycı</h6>
            <p className="section__description">Customer</p>
            <hr className="my-2" />
            <div
              className={`section__description testimonial-description ${
                readMoreIndex === 1 ? "expanded" : ""
              }`}
            >
              Süper. Pair 2 zaten her zaman alanında parlayan öğrencilerimden
              olmuştur.
            </div>
            {readMoreIndex !== 1 && (
              <div
                className="scroll-indicator"
                onClick={() => handleReadMore(1)}
              >
                <span>Devamını Oku</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            )}
            {readMoreIndex === 1 && (
              <div className={`section__description expanded`}>
                <br /> Ne diyebilirim ki? S ü p e r.
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="testimonial py-4 px-3">
        <div className="testimonial-content bg-light rounded p-3">
          <img src={cusava4} alt="" className="w-25 h-25 rounded-2 me-3" />
          <div className="text-start testimonial-text">
            <h6 className="mb-0 mt-3">Gürkan İlişen</h6>
            <p className="section__description">Customer</p>
            <hr className="my-2" />
            <div
              className={`section__description testimonial-description ${
                readMoreIndex === 2 ? "expanded" : ""
              }`}
            >
              Yok artık!
            </div>
            {readMoreIndex !== 2 && (
              <div
                className="scroll-indicator"
                onClick={() => handleReadMore(2)}
              >
                <span>Devamını Oku</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            )}
            {readMoreIndex === 2 && (
              <div className={`section__description expanded`}>
                o <br/>
                k <br/>
                <br/>
                A <br/>
                r <br/>
                t<br/>
                ı<br/>
                k <br/>
                !<br/>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="testimonial py-4 px-3">
        <div className="testimonial-content bg-light rounded p-3">
          <img src={cusava3} alt="" className="w-25 h-25 rounded-2 me-3" />
          <div className="text-start testimonial-text">
            <h6 className="mb-0 mt-3">Engin Demiroğ</h6>
            <p className="section__description">Customer</p>
            <hr className="my-2" />
            <div
              className={`section__description testimonial-description ${
                readMoreIndex === 3 ? "expanded" : ""
              }`}
            >
              Daha iyi bir Rent-A-Car firması bilenler artı birleyebilir mi
              arkadaşlar?
            </div>
            {readMoreIndex !== 3 && (
              <div
                className="scroll-indicator"
                onClick={() => handleReadMore(3)}
              >
                <span>Devamını Oku</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            )}
            {readMoreIndex === 3 && (
              <div className={`section__description expanded`}>
                -1'ler çoğunlukta.
              </div>
            )}
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
