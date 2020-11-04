import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => <section>
  <div className="title">
    <h2>our tours</h2>
    <div className='underline'></div>
  </div>
  <div>
    {tours.map((tour) => {
      //https://reactjs.org/docs/lists-and-keys.html
      return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
    })}
  </div>
</section>;

export default Tours;
