import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTwitter } from "react-icons/fa";
export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: ` He is a technology and management graduate with 13 years of experience in Technology, governance, management, digitals etc.`,
      reviewerName: "Tushar Singh Sengar",
      designation: "CO-FOUNDER & CEO",
      link: "https://twitter.com/june_tushar",
    },
    {
      imageName: "team-2",
      desc: `
      He is an Industrialist from Gujarat, India and have extensive experience of more than 20 years in finance and management.`,
      reviewerName: "Tushar Devaliya",
      designation: "CO-FOUNDER & CHIEF FINANCIAL OFFICER",
      link: "https://twitter.com/tus_tsrp86",
    },
    {
      imageName: "team-3",
      desc: `He belongs to Karnataka in India and have more than 10 years of experience in Digital Marketing and Community management.`,
      reviewerName: "Sunil Kutanoor",
      designation: "CO-FOUNDER & CHIEF MARKETING OFFICER",
      link: "https://twitter.com/kutanoor",
    },
    {
      imageName: "team-4",
      desc: `He is a Mechanical Engineer with 12 years of experience in Automations & Technological development.`,
      reviewerName: "Er Nikunj Nandha",
      designation: "CO-FOUNDER & CHIEF OPERATIONS OFFICER",
      link: "https://twitter.com/Er_Nikunjnandha",
    },
    {
      imageName: "team-4",
      desc: `He is an Electrical Engineer with 10 years of experience in Automations & Technological development.`,
      reviewerName: "Ankit Nandha",
      designation: "CO-FOUNDER & HEAD (ENERGY & SYSTEMS)",
      link: "https://twitter.com/_ajnandha",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6 className="mt-4">{val.reviewerName}</h6>
                <div className="flex items-start justify-between w-full">
                  <span>{val.designation}</span>
                  <a
                    href={val.link}
                    className="text-blue-500 text-2xl"
                    style={{ fontSize: "20px" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
