import './reviews.scss';

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title reviews__title">
          Data <span className="title--decorative">informs</span> - Emotion
          <span className="title--decorative"> Converts</span>
        </h2>
        <p className='reviews__subtitle'>
          Data Science to drive calculated growth
        </p>
        <div className='reviews__content'>
          <p className='reviews__description'>
            More than beautiful visuals,
            Results-driven solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
