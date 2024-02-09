import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/ReduxFeatures/CartSlice";
import useStyles from "./styles";
import { motion } from "framer-motion";
import { variantsCard } from "../../Animation";

function CardProduct({ product }) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Generate a random file extension (.png or .jpg)

  // Construct the image source URL using template literals
  const imageUrl = `/images/food${randomNumber}.jpg`;
  const classes = useStyles();
  const dispatch = useDispatch();

  // add products to cart
  const addToCart = () => {
    dispatch(
      addProduct({
        id: product.fdc_id,
        title: product.description,
        price: Math.floor(Math.random() * 1000),
        image: imageUrl,
        quantity: 1,
      })
    );
  };

  return (
    <Card
      className={classes.root}
      component={motion.div}
      variants={variantsCard}
      initial="hidden"
      animate="visible"
    >
      <div className={classes.actionCard}>
        {/* --card image -- */}
        <img className={classes.media} src={imageUrl} alt={product.data_type} />
        {/* --content -- */}
        <Typography variant="h5" className={classes.textUp}>
          New
        </Typography>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="body2"
            color="textPrimary"
            component="p"
          >
            {product.description}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="primary"
            component="p"
          >
            KSH {Math.floor(Math.random() * 1000)}
          </Typography>
          <div>
            <Button variant="contained" color="secondary" onClick={addToCart}>
              add to cart{" "}
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default CardProduct;
