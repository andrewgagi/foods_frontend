import React, { useState } from "react";
import { Button, Divider } from "@material-ui/core";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { cleanShoppingCart } from "../../../Redux/ReduxFeatures/CartSlice";
import useStyles from "./styles";
import ButtonWithProgress from "../../Buttons/ButtonWithProgress";
import { payment } from "../../../utils/paymentmpesa";

function PaymentForm({ backStep, userInfo, nextStep }) {
  const { shopCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  // purchase products
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer bMBJZBqUJGU9xA3unF7GH9J34XA8",
          },
          body: JSON.stringify({
            BusinessShortCode: 174379,
            Password:
              "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMjA5MTIxODA2",
            Timestamp: "20240209121806",
            TransactionType: "CustomerPayBillOnline",
            Amount: 1,
            PartyA: 254708374149,
            PartyB: 174379,
            PhoneNumber: 254728278545,
            CallBackURL: "https://mydomain.com/path",
            AccountReference: "CompanyXLTD",
            TransactionDesc: "Payment of X",
          }),
        }
      );
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Review />
      <Divider />
      <div className={classes.groupBtn}>
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>
        <ButtonWithProgress
          onClick={handleSubmit}
          loading={loading}
          text="pay"
        />
      </div>
    </>
  );
}

export default PaymentForm;
