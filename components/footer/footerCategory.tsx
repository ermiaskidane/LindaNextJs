import Image from "next/image";
import Link from "next/link";

const FooterCategory = () => {
  return ( 
    <div className="footCategory">
      <div className="footCategory__content">
        <div className="footCategory__content--service">
          <h3>Customer Service</h3>
          <ul className="service--lists">
            <li className="list--item">
              <span> My Account</span>
            </li>
            <li className="list--item">
              <span> Contact Us</span>
            </li>
            <li className="list--item">
              <span> Order History</span>
            </li>
            <li className="list--item">
              <span> Returns</span>
            </li>
            <li className="list--item">
              <span> Site Map</span>
            </li>
            <li className="list--item">
              <span> Testimonials</span>
            </li>
          </ul>
        </div>
        <div className="footCategory__content--extra">
          <h3>Extra</h3>
          <ul className="extra--lists">
            <li className="list--item">
              <span> Gift Certificates</span>
            </li>
            <li className="list--item">
              <span>Brands</span>
            </li>
            <li className="list--item">
              <span> Affiliates</span>
            </li>
            <li className="list--item">
              <span> Blog</span>
            </li>
            <li className="list--item">
              <span> Wish List</span>
            </li>
            <li className="list--item">
              <span> Specials</span>
            </li>
          </ul>
        </div>
        <div className="footCategory__content--information">
          <h3>Information</h3>
          <ul className="info--lists">
            <li className="list--item">
              <span> About Us</span>
            </li>
            <li className="list--item">
              <span> Suppliers</span>
            </li>
            <li className="list--item">
              <span> Privacy Policy</span>
            </li>
            <li className="list--item">
              <span> terms and Condition</span>
            </li>
            <li className="list--item">
              <span> Our Store</span>
            </li>
            <li className="list--item">
              <span> Delivery Information</span>
            </li>
          </ul>
        </div>
        <div className="footCategory__content--contactUs">
          <h3>Contact Us</h3>
          <ul className="contactUs--lists">
            <li>
              <div>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-location-pin`} />
                </svg>
              </div>

              <span>76 Hinckly Road, Leicester</span>
            </li>
            <li>
              <div>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-phone`} />
                </svg>
              </div>
              <span>+12345054</span>
            </li>
            <li>
              <div>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-mail`} />
                </svg>
              </div>
              <span>abc@exmaple.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footCategory__media">
        <div className="footCategory__media--message">
          <ul className="media__lists">
            <li className="facebook">
              <Link href="#"></Link>
            </li>
            <li className="Linkden">
              <Link href="#"></Link>
            </li>
            <li className="twitter">
              <Link href="#"></Link>
            </li>
            <li className="spotify">
              <Link href="#"></Link>
            </li>
            <li className="pinstry">
              <Link href="#"></Link>
            </li>
            <li className="google-plus">
              <Link href="#"></Link>
            </li>
            <li className="youtube">
              <Link href="#"></Link>
            </li>
          </ul>
        </div>

        <div className="footCategory__media--payment">
          <ul className="payment__lists">
            <li>
              <Image src="/images/visa.png" width={100} height={100} alt="Visa" />
            </li>
            <li>
              <Image src="/images/paypal.png" width={100} height={100} alt="paypal" />
            </li>
            <li>
              <Image src="/images/masterCard.png" width={100} height={100} alt="masterCard" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footCategory__bottom">
        <div className="footCategory__bottom--copyRight">
          <p>&copy; LindaShop. All Rights Reserved</p>
        </div>
        <div className="footCategory__bottom--extension">
          <ul className="extension--lists">
            <li>Responsive Themes</li>
            <li>Premium Themes</li>
            <li>OpenCart Themes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default FooterCategory;