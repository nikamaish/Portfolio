import React, { useEffect } from 'react'
import "./portfolio.scss"
import {useStae} from "react"
import PortfolioList from "../portfolioList/portfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = React.useState("web");
  const [data, setData] = React.useState([]);
  const list = [
    {
      id: "featured",
      title: " Languages",
    },
    {
      id: "web",
      title: "FrontEnd",
    },
    {
      id: "mobile",
      title: "BackEnd",
    },
    // {
    //   id: "design",
    //   title: "design",
    // },
    {
      id: "content",
      title: "Tools",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Technical Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}