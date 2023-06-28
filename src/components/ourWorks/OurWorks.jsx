import css from "./OurWorks.module.css";

const OurWorks = () => {
  return (
    <section className={css.worksContainer}>
      <h2 className={css.worksHeader}>Our works</h2>
      <ul className={css.works}>
        <li className={css.work}>
          <img src="./1.jpg" alt="Kitchen" width="500" />
          <h5 className={css.workTitle}>Name</h5>
          <p className={css.workDescr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit minus quaerat nulla quis facere, unde quam. Magni
            recusandae, voluptatum, quasi voluptas inventore laborum at
            explicabo sequi excepturi doloribus ea doloremque! Velit iusto
            tempore adipisci a fuga quae officiis tenetur mollitia, magnam
            dolor, molestiae, veniam aliquid maxime eveniet! Vel, ipsa ab?
          </p>
        </li>
        <li className={css.work}>
          <img src="./1.jpg" alt="Kitchen" width="500" />
          <h5 className={css.workTitle}>Name</h5>
          <p className={css.workDescr}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            rerum incidunt enim neque, vero deleniti quae error quisquam
            perspiciatis tempore. Tenetur aliquid architecto, doloribus nemo
            adipisci ullam non cumque pariatur corporis exercitationem
            repudiandae? Amet autem, dolorum sint, fugit officia suscipit
            laborum quam dignissimos accusantium unde quibusdam non? Labore, vel
            deserunt.
          </p>
        </li>
        <li className={css.work}>
          <img src="./1.jpg" alt="Kitchen" width="500" />
          <h5 className={css.workTitle}>Name</h5>
          <p className={css.workDescr}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos porro
            magnam quaerat officia iste nulla provident eligendi voluptatum
            soluta placeat repellendus asperiores consequatur ratione eum, ex,
            repudiandae id veritatis? Consectetur?
          </p>
        </li>
        <li className={css.work}>
          <img src="./1.jpg" alt="Kitchen" width="500" />
          <h5 className={css.workTitle}>Name</h5>
          <p className={css.workDescr}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime rem
            magni accusamus? Sit recusandae natus neque quod iure aspernatur
            harum consequatur nulla, perspiciatis voluptates ipsa earum laborum
            a vero. Consequuntur tempore magnam eaque omnis culpa eveniet earum
            perspiciatis accusamus aut quis placeat alias tempora vero illo,
            voluptas blanditiis ut odit.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default OurWorks;
