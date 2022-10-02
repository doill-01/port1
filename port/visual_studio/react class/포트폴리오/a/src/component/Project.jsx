import React from "react";
import img from "../img/bookworm.png";
import "./project.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Project = () => {
  const style = {
    maxWidth: "100%",
    height: "248px",
  };
  return (
    <div className="card">
      <div className="card__container">
        <article className="card__article">
          <div className="card__data">
            <img
              src={img}
              className="card__img"
              style={style}
              alt="card image"
            />
            <h1 className="card__title">spring 프로젝트</h1>
            <p className="card__description">도서 판매사이트</p>
            <Link to="/Portfolio1">
              <button className="button">이동</button>
            </Link>
          </div>
        </article>

        <article className="card__article">
          <div className="card__data">
            <img
              src={img}
              alt="card image"
              className="card__img"
              style={style}
            />
            <h1 className="card__title">spring 프로젝트</h1>
            <p className="card__description">도서 판매사이트</p>
          </div>
        </article>

        <article className="card__article">
          <div className="card__data">
            <img
              src={img}
              alt="card image"
              className="card__img"
              style={style}
            />
            <h1 className="card__title">react</h1>
            <p className="card__description">영화검색</p>
          </div>
        </article>

		<article className="card__article">
          <div className="card__data">
            <img
              src={img}
              alt="card image"
              className="card__img"
              style={style}
            />
            <h1 className="card__title">react</h1>
            <p className="card__description">영화검색</p>
          </div>
        </article>


      </div>
    </div>
  );
};

export default Project;
