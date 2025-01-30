import ProductCont from "./ProductFilm";

export default function Main() {
  return (
    <main>
      <div className="films">
        <div className="container">
          <div className="btn-relativ">
            <button className="btn-cr" type="button">
              CURRENT SERIES
            </button>
          </div>
          <ProductCont />
        </div>
        <div className="btn-pos">
          <button className="btn-load" type="button">
            LOAD MORE
          </button>
        </div>
      </div>

      <div className="rowTwo">
        <div className="container service">
          <div className="details">
            <div>
              <img
                className="img-size"
                src="\img\buy-comics-digital-comics.png"
                alt=""
              />
            </div>
            <div className="img-details">DIGITAL COMICS</div>
          </div>
          <div className="details">
            <div>
              <img
                className="img-size"
                src="\img\buy-comics-merchandise.png"
                alt=""
              />
            </div>
            <div className="img-details">DC MERCHANDISE</div>
          </div>
          <div className="details">
            <div>
              <img
                className="img-size"
                src="\img\buy-comics-shop-locator.png"
                alt=""
              />
            </div>
            <div className="img-details">SUBSCRIPTION</div>
          </div>
          <div className="details">
            <div>
              <img
                className="img-size"
                src="\img\buy-comics-subscriptions.png"
                alt=""
              />
            </div>
            <div className="img-details">COMIC SHOP LOCATOR</div>
          </div>
          <div className="details">
            <div>
              <img
                className="img-size"
                src="\img\buy-dc-power-visa.svg"
                alt=""
              />
            </div>
            <div className="img-details">DC POWER VISA</div>
          </div>
        </div>
      </div>
    </main>
  );
}
