import { db } from "@/lib/db";
import Blog from "../blog";
import Menu from "../menu";

const Product = async () => {

  const products = await db.product.findMany({
    include: {
      images: true
    }
  });
  return (
    <div className="main__product">
      <div className="main__product--left">
        {/*####### start of timing box ##########*/}
        <div className="product__timing">
          <div className="product__timing--img"></div>
          <div className="product__timing--grid">
            <div className="day--timer">
              <span className="number">00</span>
              days
            </div>
            <div className="hour--timer">
              <span className="number">00</span>
              Hrs
            </div>
            <div className="minute--timer">
              <span className="number">00</span>
              Mins
            </div>
            <div className="second--timer">
              <span className="number">00</span>
              sec
            </div>
            <div className="product__timing--para">
              <a href="#">No Products Found!!</a>
            </div>
          </div>
        </div>
        {/*####### end of timing box ##########*/}
        {/*##### start of sentimentals box ########*/}
        <div className="product__testimonial">
          <div className="product__testimonial--content">
            <div className="testimonial__details">
              <div className="testimonial--img">
                <img src="/images/person-1.jpg" alt="testimonial" />
              </div>
              <div className="testimonial--para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam dolorum doloribus excepturi voluptatum id nesciunt
                  vero sapiente eos suscipit consequatur dolorum doloribus
                  excepturi voluptatum id.
                </p>
              </div>
              <div className="testimonial--name">
                <h3>lee steve</h3>
              </div>
            </div>
          </div>
        </div>
        {/*##### end of sentimentals box ########*/}

        {/*##### start of discount box ########*/}
        <div className="product__discount">
          <div className="product__discount--img"></div>
          <div className="discount--article">
            <h3>Women's</h3>
            <div className="article--para">
              <p>
                <span>50% off</span> on slected products
              </p>
            </div>
            <button>Shop Now</button>
          </div>
        </div>
        {/*##### end of discount box ########*/}
      </div>
      <Menu  products={products}/>
      {/* ###### Blog Post ###### */}
      <Blog />
    </div>
   );
}
 
export default Product;