import React from 'react'
import "./testimonials.scss"




export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Google",
      title: "Coursera",
      img:
        "https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg",
      icon: "assets/Google_Drive.png",
      desc:
        "Foundations of User Experience (UX) Design",
      link: "https://drive.google.com/file/d/1RCStPPlwqmL33t8eatT15R4RigexNdyH/view?usp=sharing",  
    },
    {
      id: 2,
      name: "Google",
      title: "Coursera",
      img:
        "https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg",
      icon: "assets/Google_Drive.png",
      desc:
        "Start the UX Design Process: Empathize, Define,and Ideate ",
      link:"https://drive.google.com/file/d/1wGawXtt3cR0I7FIxXVoYAnhMlL-am0HM/view?usp=sharing",
      featured: true,
    },
    {
      id: 3,
      name: "Google",
      title: "Coursera",
      img:
      "https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg",
      icon: "assets/Google_Drive.png",
      desc:
        "Project Initiation: Starting a Successful Project",
      link:"https://drive.google.com/file/d/1T_CMbcRFbP-ea2PqsKzDn9HGtZrfHOms/view?usp=sharing", 
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1> Certificates</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <a href={d.link} target='_blank' rel='noopener' ><img className="right" src={d.icon} alt="" /></a> 
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}