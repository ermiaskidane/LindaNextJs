import Card from "./card";

const Image1 = [
  "/images/fashion-1.jpg",
  "/images/fashion-3.jpg",
  "/images/fashion-4.jpg",
  "/images/fashion-9.webp"
]

const Image2 = [
  "/images/fashion-3.jpg",
  "/images/fashion-6.jpg",
  "/images/fashion-9.webp",
  "/images/fashion-10.webp"
]
const Image3 = [
  "/images/fashion-14.webp",
  "/images/fashion-5.jpg",
  "/images/fashion-9.webp",
  "/images/fashion-4.jpg"
]

const Menu = () => {
  return ( 
    <div className="menu">
      <div className="menu__content">
        <div className="menu__content--newProduct">
          <div className="menu__newProduct--title">
            <div className="newProducts--title">
              <h3>New Products</h3>
            </div>
            <ul className="menu__newProducts--lists">
              <li className="newProducts__lists--item">
                <a href="#">Dresses</a>
              </li>
              <li className="newProducts__lists--item">
                <a href="#">Tops</a>
              </li>
              <li className="newProducts__lists--item">
                <a href="#">EThic Wears</a>
              </li>
              <li className="newProducts__lists--item">
                <a href="#">Party Wear</a>
              </li>
            </ul>
          </div>
          {/*##### about the menu__newProduct--options ######*/}
          <Card Images={Image1}/>
          {/*##### about the menu__newProduct--options ######*/}
        </div>
        <div className="menu__content--bestSellers">
          <div className="menu__bestSellers--title">
            <div className="bestSellers--title">
              <h3>Best Sellers</h3>
            </div>
            <div className="bestSellers--arrow">
              <span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-thin-left`} />
                </svg>
              </span>
              <span>||</span>
              <span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-thin-right`} />
                </svg>
              </span>
            </div>
          </div>
          <Card Images={Image2}/>
        </div>
        <div className="menu__content--featuredProducts">
          <div className="menu__featuredProducts--title">
            <div className="featuredProducts--title">
              <h3>Feature Products</h3>
            </div>
            <div className="featuredProducts--arrow">
              <span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-thin-left`} />
                </svg>
              </span>
              <span>||</span>
              <span>
                <svg>
                  <use xlinkHref={`Sprite.svg#icon-chevron-thin-right`} />
                </svg>
              </span>
            </div>
          </div>
          <Card Images={Image3}/>
        </div>
      </div>
    </div>
  );
}
 
export default Menu;