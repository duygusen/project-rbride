import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";

type ImageProps = {
  stepPage: string;
};

const BookingStepsCard: React.FC<ImageProps> = ({ stepPage }) => {

  const rentalState = useSelector((state: RootState) => state.rental.rental)

  return (
    <div className="container-fluid col-lg-8 col-md-12" style={{marginTop:100}}>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <Link to="/">
            <img
              className={
                stepPage == "Login"
                ? "opacity-100 step-image img-fluid"
                : "opacity-25 step-image img-fluid"
              }
              style={{maxWidth:"3.5rem", maxHeight:"3.5rem"}}
              src="/assets/StepCardImages/StepLogin.png"
              >
            </img>
          </Link>
        </div>
        <div className="col-2">
          <Link to={`/car-details/${rentalState.car.id}`}>
            <img
              className={
                stepPage == "ChooseCar"
                ? "opacity-100 step-image img-fluid"
                : "opacity-25 step-image img-fluid"
              }
              style={{maxWidth:"3.5rem", maxHeight:"3.5rem"}}
              src="/assets/StepCardImages/StepChooseCar.png"
              ></img>
            </Link>
        </div>
        <div className="col-2">
          <Link to="/additionalservices">
            <img
              className={
                stepPage == "AdditionalService"
                ? "opacity-100 step-image img-fluid"
                : "opacity-25 step-image img-fluid"
              }
              style={{maxWidth:"3.5rem", maxHeight:"3.5rem"}}
              src="/assets/StepCardImages/StepAdditionalService.png"
              >
            </img>
          </Link>
        </div>
        <div className="col-2">
          <Link to="/booknow">
            <img
              className={
                stepPage == "BookNow"
                ? "opacity-100 step-image img-fluid"
                : "opacity-25 step-image img-fluid"
              }
              style={{maxWidth:"3.5rem", maxHeight:"3.5rem"}}
              src="/assets/StepCardImages/StepFillForm&Payment.png"
              >
            </img>
          </Link>
        </div>
        <div className="col-2">
          <Link to="/completion">
            <img
              className={
                stepPage == "StepCompletion"
                ? "opacity-100 step-image img-fluid"
                : "opacity-25 step-image img-fluid"
              }
              style={{maxWidth:"3.5rem", maxHeight:"3.5rem"}}
              src="/assets/StepCardImages/StepCompletion.png"
              >
            </img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingStepsCard;
