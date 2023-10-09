import { useEffect, useState } from "react";
import Review from "../review/Review";
import Marquee from "react-fast-marquee";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="mx-auto mb-10">
            <h2 className="text-4xl my-5 font-semibold text-center">Customers Feedback</h2>
            <Marquee>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </Marquee>
        </div>
    );
};

export default Reviews;