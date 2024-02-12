import Link from "next/link";

interface ModalProps {
  openHandler: () =>  void;
}

const SideBar = ({openHandler}: ModalProps) => {
  return ( 
  <label className="NavMobile__button">
    <ul 
    id="navi-toggle"
    >
    <li className="Nav__detail--home">
      <Link href="#">
        <svg>
          <use xlinkHref={`Sprite.svg#icon-home`} />
        </svg>
        <span className="categories">Home</span>
        <svg>
          <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
        </svg>
      </Link>
    </li>
    <li className="Nav__detail--home">
      <Link href="#">
        <svg>
          <use xlinkHref={`Sprite.svg#icon-gift`} />
        </svg>
        <span className="categories">Dresses</span>
        <svg>
          <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
        </svg>
      </Link>
    </li>
    <li className="Nav__detail--home">
      <Link href="#">
        <svg>
          <use xlinkHref={`Sprite.svg#icon-suitcase`} />
        </svg>
        <span className="categories">Tops</span>
        <svg>
          <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
        </svg>
      </Link>
    </li>
    <li className="Nav__detail--home">
      <Link href="#">
        <svg>
          <use xlinkHref={`Sprite.svg#icon-camera`} />
        </svg>
        <span className="categories">ETHINIC WEAR</span>
        <svg>
          <use xlinkHref={`Sprite.svg#icon-chevron-small-right`} />
        </svg>
      </Link>
    </li>
    <li className="Nav__detail--home">
      <Link href="#">
        <svg>
          <use xlinkHref={`Sprite.svg#icon-bed`} />
        </svg>
        <span className="categories">Party Wear</span>
      </Link>
    </li>
    <li className="Nav__detail--home">
      <Link href="#">
        <svg>
          <use xlinkHref={`Sprite.svg#icon-child`} />
        </svg>
        <span className="categories">Wester wear</span>
      </Link>
    </li>
    <li className="Nav__detail--home">
      <Link href="#">
        <svg>
          <use xlinkHref={`Sprite.svg#icon-bubbles2`} />
        </svg>
        <span className="categories">Blog</span>
      </Link>
    </li>
  </ul>

  <div className="NavMobile__close" onClick={openHandler}>
    <p>close</p>
  </div>
</label>
 );
}
 
export default SideBar;