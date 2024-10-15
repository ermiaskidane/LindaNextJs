import Image from "next/image";
import Link from "next/link";

const HomeComp = () => {
  return (
    <div className="main__shop">
      <div className="main__shop--homescreen">
        <figure className="main__shop--figure xs__left--figure1">
          <img src="/images/tamara-bellis-9.jpg" alt="ads" />
        </figure>
        <figure className="main__shop--figure xl__right--figure1">
          <img src="/images/tamara-bellis-6.jpg" alt="ads" />

          <figcaption>
            <h4 className="heading-secondary">Super Sale</h4>
            <h2 className="heading-primary">Season Sale</h2>
            <p className="para">
              Lorem ipsum dolor amet consectetur adipisicing.
            </p>
            <button type="submit">
              Buy Now <span className="arrow">&gt;</span>
            </button>
          </figcaption>
        </figure>

        <figure className="main__shop--figure xs__left--figure2">
          <img src="/images/download.webp" alt="ads" />
          <figcaption>
            <h3>Mega Deal</h3>
            <p>
              Save up to <strong>70% off </strong>fashion collections
            </p>
          </figcaption>
        </figure>
        <figure className="main__shop--figure xs__right--figure2">
          <img src="/images/fashion-17.webp" alt="ads" />
        </figure>
        <figure className="main__shop--figure xs__right--figure3">
          <img src="/images/fashion-18.webp" alt="ads" />
        </figure>
        <figure className="main__shop--figure xs__right--figure13">
          <img src="/images/fashion-20.webp" alt="ads" />
        </figure>
      </div>
    </div>
  );
}
 
export default HomeComp;