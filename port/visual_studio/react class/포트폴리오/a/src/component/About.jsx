import React from "react";
import img from '../img/vi.jpeg'
import "./about.css"


const About = () => {



	return (
		<section className="about">
<div className="main">
	<img src={img}></img>
		<div className="about-text">
			<h2>FrontEnd Developer</h2>
			<h5>꾸준히 성장하는 주니어 개발자</h5>
			<p>
				눈앞에 보이는 웹을 구현하는 것에 흥미를 느껴 유능한 프론트엔드 개발자가 되기 위해 쉬지 않고 배우고 있습니다.
				빠르게 변화하는 트렌드와 발전하는 기술에 적응하는 더 좋은 개발자가 되기 위해 노력하고 있습니다.
				열정과 끈기가 있는 엉덩이가 무거운 개발자입니다.
			</p>

	</div>
	</div>

</section>
	);
  }
  
  export default About;
  