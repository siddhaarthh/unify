import React from "react";
import "./Test.css";
const Testimonial = () => {
  return (
    <div className="test">
      <div className="text-center">
        <p className="test-h">TESTIMONIAL</p>
        <h1>
          what our users say<br></br> about us?
        </h1>
      </div>

      <div className="container">
        <div className="row d-fles justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1717250424/05c47d2d-9c00-48ee-8e82-73f73695d4e8.png"
              className="img-fluid"
            ></img>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mx-5">
              <h2>the best financial accounting app ever!</h2>
              <p className="main-para">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </p>
              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1717250884/73c043d0-96bc-4a69-8f02-d050ce616af8.png"
                height={"30px"}
              ></img>
              <h3 className="my-3">Nick Jonas</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
