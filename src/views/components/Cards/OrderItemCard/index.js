/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
// Services
import { GetReview, PostReview } from "@/common/services/review";
// Inputs
import StarRatingInput from "../../Inputs/StarRatingInput";
import TextAreaInput from "../../Inputs/TextAreaInput";
// Constants
import { ORDER_STATUS } from "@/common/constants/options";
import { BTN_VARIANTS } from "@/common/constants/styles";
// Icons
import { ImageIcon } from "@/assets/icons";
// CSS
import css from "./styles.module.css";
import Button from "../../Buttons/Button";

export default function OrderItemCard(props) {
  const { data, status } = props;
  const { id, quantity, title, price, imgUrl } = data;
  // Local State
  const [isReviewing, setIsReviewing] = useState(false);
  const [isReviewSuccess, setIsReviewSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState();
  const [starRating, setStarRating] = useState();
  const [comment, setComment] = useState();

  // Functions
  async function fetchReview() {
    setIsLoading(true);
    GetReview({ productId: id })
      .then((res) => {
        setIsLoading(false);
        setReview(res.data);
        if (res.data) {
          setStarRating(res.data?.rating);
          setComment(res.data?.comment);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }
  async function postReview() {
    setIsLoading(true);
    PostReview({ productId: id, comment: comment, rating: starRating })
      .then((res) => {
        setIsLoading(false);
        setReview(res.data);
        setIsReviewSuccess(true);
        setIsReviewing(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  // UseEffects
  useEffect(() => {
    if (isReviewing && !review) fetchReview();
  }, [isReviewing]);
  useEffect(() => {
    if (isReviewSuccess) {
      setTimeout(() => {
        setIsReviewSuccess(false);
      }, 3000);
    }
  }, [isReviewSuccess]);
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        {imgUrl && <img alt={title} src={imgUrl} />}
        {!imgUrl && <ImageIcon size={30} />}
      </div>
      <div className={css.itemNameWrapper}>
        <div className={css.colWrapper}>
          <h6>{title}</h6>
          <p>Price: ₱ {price}</p>
          <p>Quantity: {quantity}</p>
        </div>

        {isReviewSuccess && (
          <div className={css.rowContainer}>
            <p>Successfully Added Review</p>
          </div>
        )}
        {status === ORDER_STATUS.Delivered && !isReviewSuccess && (
          <>
            {isReviewing ? (
              <div className={css.reviewWrapper}>
                {isLoading && !isReviewSuccess ? (
                  <div>
                    <p>Loading...</p>
                  </div>
                ) : (
                  <>
                    <div className={css.reviewContainer}>
                      <p>Rating:</p>
                      <StarRatingInput
                        rating={starRating}
                        setRating={setStarRating}
                        id={data?.id}
                      />
                    </div>
                    <div className={css.reviewContainer}>
                      <p>Comment:</p>
                      <TextAreaInput
                        value={comment}
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                        variant={BTN_VARIANTS.outlined}
                      />
                    </div>
                    <div className={css.reviewContainerRow}>
                      <Button
                        variant={BTN_VARIANTS.outlined}
                        onClick={() => setIsReviewing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={postReview}>Submit</Button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className={css.rowContainer}>
                <a onClick={() => setIsReviewing(true)}>Add or edit review</a>
              </div>
            )}
          </>
        )}
      </div>
      <div className={css.colWrapper}>
        <h4>₱ {price * quantity}</h4>
      </div>
    </div>
  );
}
