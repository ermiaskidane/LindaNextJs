import Image from "next/image";
import Link from "next/link";

const HomeComp = () => {
  return (
    <div className="main__shop">
      <div className="main__shop--homescreen">
        <figure className="main__shop--figure xs__left--figure1">
          <Image src="/images/tamara-bellis-9.jpg" alt="ads" width={400} height={400}/>
        </figure>
        <figure className="main__shop--figure xl__right--figure1">
          <Image src="/images/tamara-bellis-6.jpg" alt="ads" width={400} height={400}/>
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
          <Image src="/images/download.webp" alt="ads" width={200} height={200}/>
          <figcaption>
            <h3>Mega Deal</h3>
            <p>
              Save up to <strong>70% off </strong>fashion collections
            </p>
          </figcaption>
        </figure>
        <figure className="main__shop--figure xs__right--figure2">
          <Image src="/images/fashion-17.webp" alt="ads" width={200} height={200}/>
        </figure>
        <figure className="main__shop--figure xs__right--figure3">
          <Image src="/images/fashion-18.webp" alt="ads" width={200} height={200}/>
        </figure>
        <figure className="main__shop--figure xs__right--figure13">
          <Image src="/images/fashion-20.webp" alt="ads" width={200} height={200}/>
        </figure>
      </div>
    </div>
  );
}
 
export default HomeComp;