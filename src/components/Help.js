import React from "react";
import Altar from "../images/altar.svg";
import Art from "../images/art.svg";
import Camera from "../images/camera.svg";
import Carpool from "../images/carpool.svg";
import Drinks from "../images/drinks.svg";
import Family from "../images/family.svg";
import Firewood from "../images/firewood.svg";
import Flowers from "../images/flowers.svg";
import Food from "../images/food.svg";
import Funds from "../images/funds.svg";
import Hose from "../images/hose.svg";
import Ice from "../images/ice.svg";
import Music from "../images/music.svg";
import Vote from "../images/vote.svg";
import More from "../images/more.svg";
import Less from "../images/less.svg";
import Zelle from "../images/zelle.jpg";

function Help() {
  return (
    <div className="card help">
      <h3>Things you can do if you want to help out</h3>
      <ul className="flex help-list">
        <li>
          <div className="help-list-item">
            <img src={Food} className="help-icon"></img>

            <p>Bring Food</p>
            <img src={More} className="more-icon" id="food"></img>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Drinks} className="help-icon"></img>
            <p>Bring Drinks</p>
            <img src={More} className="more-icon" id="drinks"></img>
          </div>
        </li>

        <li>
          <div className="help-list-item">
            <img src={Ice} className="help-icon"></img>
            <p>Bring Ice</p>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Flowers} className="help-icon"></img>
            <p>Bring Flowers</p>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Firewood} className="help-icon"></img>
            <p>Bring Firewood</p>
          </div>
        </li>

        <li>
          <div className="help-list-item">
            <img src={Music} className="help-icon"></img>
            <p>Bring Instruments</p>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Carpool} className="help-icon"></img>
            <p>Organize Carpool</p>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Altar} className="help-icon"></img>
            <p>Bring Items for the Altar</p>
            <img src={More} className="more-icon" id="altar"></img>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Art} className="help-icon"></img>
            <p>Bring Art or Art Supplies</p>
            <img src={More} className="more-icon" id="art"></img>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Camera} className="help-icon"></img>
            <p>Take Pictures</p>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Hose} className="help-icon"></img>
            <p>Help with Yardwork Beforehand</p>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Funds} className="help-icon"></img>
            <p>Contribute Funds</p>
            <img src={More} className="more-icon" id="funds"></img>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Vote} className="help-icon"></img>
            <p>RSVP</p>
          </div>
        </li>
        <li>
          <div className="help-list-item">
            <img src={Family} className="help-icon"></img>
            <p>Most Importantly Bring Yourself!</p>
          </div>
        </li>
      </ul>
      <p className="help-disclaimer">
        Just existing and being one of the people I want to have at my party is
        contribution enough, don't feel pressure to do anything beyond your
        desires
      </p>
      <div className="more-card">
        <div className="food">
          <p>
            If you want to bring food but need help with ideas here are some
            suggestions:
          </p>
          <ul>
            <li>
              Fresh Fruits - Berries, Watermelon, Cataloupe, Apples, Oranges,
              Pineapple
            </li>
            <li>
              Meats for the Grill - Ground Beef, Hot Dogs, Steaks, Chorizo, Lamb
            </li>
            <li>
              Veggies for the Grill - Corn, Asparagus, Bell Peppers, Onions,
              Zuchinni, Squash
            </li>
            <li>Pastries and Berry Themed Desserts</li>
            <li>Chips and Dips</li>
          </ul>
          <p>This list is not meant to be limiting, only suggestions</p>
        </div>

        <div className="drinks">
          <p>
            If you want to bring drinks but need help with ideas here are some
            suggestions:
          </p>
          <ul>
            <li>Sparkling Water - Tangerine LeCroix, Topo Chico, Bubbly</li>
            <li>Juices - Orange, Cranberry, Lemonade, Watermelon</li>
            <li>
              Soft Drinks - Orange Crush, Orange Fanta, Root Beer, Dr. Pepper,
              Sprite, Coke
            </li>

            <li>
              Alcohol - If you plan to consume alcohol during the party please
              be mindful of how visibily intoxicated you are and have a safe
              plan to get home
            </li>
          </ul>
          <p>This list is not meant to be limiting, only suggestions</p>
        </div>
        <div className="altar">
          <p>
            If you want to bring items for the altar but need help with ideas
            here are some suggestions:
          </p>
          <ul>
            <li>Rocks and Crystals</li>
            <li>Carvings or Totems</li>

            <li>Dried Fruit, Flowers, or Herbs</li>
            <li>Small Pieces of Art</li>
            <li>Insence</li>
            <li>Skulls, Hair, Teeth</li>
            <li>Write down an intention on a piece of paper</li>
            <li>Anything that will bring meaning to the space for you</li>
          </ul>
          <p>This list is not meant to be limiting, only suggestions</p>
        </div>
        <div className="art">
          <p>
            If you want to bring art or art supplies but need help with ideas
            here are some suggestions:
          </p>
          <ul>
            <li>Crayons</li>
            <li>Paints</li>

            <li>Chalk</li>
            <li>Paper or Canvas</li>
            <li>Yarn or Textiles</li>
            <li>
              Scissors or Carving Tools (esp if you have child safe options)
            </li>
            <li>
              For bringing your art do anything that will bring meaning to the
              space for you, dont feel limited by visual mediums
            </li>
          </ul>
          <p>This list is not meant to be limiting, only suggestions</p>
        </div>
        <div className="funds">
          <div className="inline">
            <div className="payment-links">
              <a href="https://cash.app/$benzih">
                <button>Cash App</button>
              </a>
              <a href="https://account.venmo.com/u/benzinow">
                <button>Venmo</button>
              </a>
              <a href="https://www.paypal.com/paypalme/benzinow">
                <button>Paypal</button>
              </a>
            </div>
          </div>
          <img src={Zelle} className="qr-code"></img>
        </div>
      </div>
    </div>
  );
}

export default Help;
