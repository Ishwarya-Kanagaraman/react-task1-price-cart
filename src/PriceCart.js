import React from "react";
import "./styles.css";
import Card from "./Card"
export default function PriceCart() {
  return (
    <section class="pricing py-5">
        
      <div class="container">
        <div class="row">
         
          <Card category={'free'} storage={'5GB'} cost={'$0'} card={true} card1={true}/>
         
          <Card category={'plus'} storage={'50GB'} cost={'$9'} card={false} card1={true}/>
         
           <Card category={'pro'} storage={'150GB'} cost={'$49'} spl={"Unlimited"} card={false} />
          
        </div>
      </div>
    </section>
  );
}
