import React from "react";
function Card({ category, storage, cost, spl, card, card1 }) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {category}
          </h5>
          <h6 class="card-price text-center">
            {cost}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fa fa-check" aria-hidden="true"></i>{" "}
              </span>
              Single User
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              {storage} Storage
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              Community Access
            </li>
            <li class={card ? "text-muted" : "none"}>
              <span class="fa-li">
                <i class={card ? "fa fa-times" : "fa fa-check"}></i>
              </span>
              Unlimited Private Projects
            </li>
            <li class={card ? "text-muted" : "none"}>
              <span class="fa-li">
                <i class={card ? "fa fa-times" : "fa fa-check"}></i>
              </span>
              Dedicated Phone Support
            </li>
            <li class={card ? "text-muted" : "none"}>
              <span class="fa-li">
                <i class={card ? "fa fa-times" : "fa fa-check"}></i>
              </span>
              <b>{spl}</b> Free Subdomain
            </li>
            <li class={card1 ? "text-muted" : "none"}>
              <span class="fa-li">
                <i class={card1 ? "fa fa-times" : "fa fa-check"}></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <a href="#a" class="btn btn-block btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
