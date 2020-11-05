import React from "react";
import FeedbackCard from "./feedback-card/FeedbackCard";

const ClientFeedBack = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Testimonial</h1>
      <div className="row">
        <div className="col-md-4">
          <FeedbackCard />
        </div>

        <div className="col-md-4">
          <FeedbackCard />
        </div>
        <div className="col-md-4">
          <FeedbackCard />
        </div>
      </div>
    </>
  );
};

export default ClientFeedBack;
