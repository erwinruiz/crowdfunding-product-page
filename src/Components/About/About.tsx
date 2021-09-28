import classes from "./About.module.css";
import Product from "./Products/Product";
import { products } from "../../db";

function About() {
  return (
    <article className={classes.article}>
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className={classes.products}>
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            pledge={product.pledge}
            text={product.text}
            units={product.units}
          />
        ))}
      </div>
    </article>
  );
}

export default About;
