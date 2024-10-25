import Image from "next/image";

const Blog = () => {
  return ( 
    <div className="blog">
      <div className="blog__content">
        <div className="blog__content--title">
          <h3>Latest Blog</h3>
        </div>
        <div className="blog__recent--content">
          <article className="blog__recent--one">
            <figure className="blog__recent--img1">
            <Image src="/images/blog-1.jpg" alt="ads" width={500} height={500}/>
            </figure>
            <div className="blog__recent--detail">
              <h3>The Digital Nomad's Guide to European Architecture </h3>
              <div className="reader--options">
                <span>
                  <svg>
                    <use xlinkHref={`/sprite.svg#icon-user`} />
                  </svg>
                  posted by admin
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`/sprite.svg#icon-bubbles2`} />
                  </svg>
                  0 comments
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`/sprite.svg#icon-clock`} />
                  </svg>
                  May 1, 2024
                </span>
              </div>
              <p>
              Wandering through the historic streets of Prague, I've discovered that mixing modern technology with classical surroundings creates the perfect work-life balance.
              </p>
              <button type="button">Read More</button>
            </div>
          </article>
          <article className="blog__recent--two">
            <figure className="blog__recent--img1">
              <Image src="/images/blog-2.jpg" alt="ads" width={500} height={500}/>
            </figure>
            <div className="blog__recent--detail">
              <h3>Coastal Escapes: Finding Romance on Two Wheels </h3>
              <div className="reader--options">
                <span>
                  <svg>
                    <use xlinkHref={`/sprite.svg#icon-user`} />
                  </svg>
                  posted by admin
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`/sprite.svg#icon-bubbles2`} />
                  </svg>
                  1 comments
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`/sprite.svg#icon-clock`} />
                  </svg>
                  May 1, 2024
                </span>
              </div>
              <p>
              There's something magical about exploring coastal paths with someone special, especially when you add a vintage bicycle to the mix. 
              </p>
              <button type="button">Read More</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
 
export default Blog;