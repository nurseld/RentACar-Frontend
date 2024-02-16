import React from "react";
import "./our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const OUR__MEMBERS = [
  {
    name: "Nursel Demirkıran",
    experience: "7 years of experience",
    ghUrl: "https://github.com/nurseld",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/nurseldemirkiran/",
    imgUrl: ava01,
  },
  {
    name: "Adem Furkan Kavuş",
    experience: "5 years of experience",
    ghUrl: "https://github.com/adem24077",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/adem-furkan-kavus",
    imgUrl: ava02,
  },
  {
    name: "Enes Yetgin",
    experience: "2 years of experience",
    ghUrl: "https://github.com/enyetgin",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/enes-yetgin-7931a9257/",
    imgUrl: ava03,
  },
  {
    name: "Melisa Selin Welfringer",
    experience: "6 years of experience",
    ghUrl: "https://github.com/melselin",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/melisa-selin-welfringer",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.ghUrl} target="_blank" rel="noopener noreferrer">
                  <i className="line-md--github-loop"></i>
                </Link>
                <Link to={item.twitUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-twitter-line"></i>
                </Link>
                <Link to={item.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-line"></i>
                </Link>
                <Link to={item.instUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
