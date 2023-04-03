import { NavLink } from "react-router-dom";
import React from "react";
import styles from "../../styles/ProductCard.module.css";
import { HStack, VStack } from "@chakra-ui/react";

const ProductCard = ({
  id,
  poster,
  newPrice,
  originalPrice,
  stylist,
  offer
}) => {
  return (
    <NavLink to={`/womensAllProducts/${id}`}>
      <div className={styles.card}>
        <div>
          <img src={poster} alt="poster" />
        </div>
        <VStack>
        <HStack className={styles.price}>
           
          <span className={styles.newPrice}>{newPrice}</span>
          <span className={styles.originalPrice}>
            <s>{originalPrice}</s>
          </span>
          <span className={styles.offer}>{offer}</span>
         
        </HStack>
        <p className={styles.stylist}>By {stylist}</p>
        </VStack>
      </div>
    </NavLink>
  );
};

export default ProductCard;
