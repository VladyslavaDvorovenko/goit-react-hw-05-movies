import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReview() {
      try {
        const response = await getMovieReviews(movieId);
        setReviews([...response]);
      } catch (error) {
        console.log(error.message);
        setReviews([]);
      }
    }
    getMovieReview();
  }, [movieId]);

  return [...reviews].length > 0 ? (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsInformation}>
        {reviews.map(el => (
          <li key={el.id}>
            <h4 className={css.reviewsAuthor}>Author: {el.author}</h4>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h4>We don't have any reviews for this movie.</h4>
  );
};
