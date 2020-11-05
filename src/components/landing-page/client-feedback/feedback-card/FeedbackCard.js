import React from "react";

const FeedbackCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center align-content-baseline m-auto testimonial-flex">
      <img
        src="/images/Man.png"
        alt=""
        className="rounded-circle card-img-top mr-4"
      />
      <p className="text-justify " style={{ maxWidth: "500px" }}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.
      </p>
    </div>
  );
};

export default FeedbackCard;
