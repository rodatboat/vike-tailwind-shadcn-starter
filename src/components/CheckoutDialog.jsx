import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { Check, Loader2, Star } from "lucide-react";
import InputErrorLabel from "./InputErrorLabel";
import { buyProduct } from "@/api/utils";

export function CheckoutDialog({ price, title, _id }) {
  const [open, setOpen] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [invoice, setInvoice] = useState(null);

  const stripe = useStripe();
  const elements = useElements();


  const initialFormValues = {
    email: ''
  }

  const checkoutValidation = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    if (!stripe || !elements) {
      setSubmitError({
        message: "Stripe error. Please refresh the page and try again.",
      });
      return;
    }

    setSubmitting(true);
    let paymentMethod = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement("card"),
    });

    if (paymentMethod.error) {
      setSubmitting(false);
      setSubmitError({
        message: "Payment method invalid.",
      });
      return;
    }

    let isGift = values.email ? values.email.length > 0 : false;

    await buyProduct(values.email, paymentMethod.paymentMethod.id, _id, isGift).then(async (res) => {
      if (res.status === 200) {
        setSubmitError(null);
        const paymentConfirmation = await stripe.confirmCardPayment(res.data.client_secret, {
          payment_method: paymentMethod.paymentMethod.id
        });

        if (paymentConfirmation.paymentIntent.status === "succeeded") {
          setInvoice(res.data);
          setPaymentSuccess(true);
        }
      } else if (res.status === 400) {
        if (res.data) {
          setErrors(res.data);
        } else {
          setSubmitError(res);
        }
      } else {
        setSubmitError(res);
      }
    })

    setSubmitting(false);
  }

  const { values, touched, errors, setErrors, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: initialFormValues,
    validationSchema: checkoutValidation,
    onSubmit
  });

  const resetCheckout = () => {
    if (paymentSuccess) {
      setOpen(false);
      setPaymentSuccess(false);
      setSubmitError(null);
      setInvoice(null);
      values["email"] = '';
    } else {
      setOpen(!open);
    }
  }

  const redirectToActivate = () => {
    window.location.href = `${import.meta.env.VITE_APP_URI}/activate`;
  }

  useEffect(() => {
    setSubmitError(null);
  }, [values])

  return (
    <>
      <Dialog open={open} onOpenChange={resetCheckout}>
        <DialogTrigger asChild>
          <Button className="px-10 w-full"><Star className="mr-2 size-4 fill-secondary" />Take Mock Exam</Button>
        </DialogTrigger>
        {!paymentSuccess ?
          <DialogContent className="sm:max-w-[425px] md:max-w-[625px] rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-center">Checkout</DialogTitle>
              <DialogDescription className="text-center">
                Please complete the checkout below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid">
              <div className="grid grid-cols-7 items-center w-full">
                <span />
                <div className="flex flex-col col-span-5 gap-2 p-2 rounded-md">
                  <Label htmlFor="email" className="text-left">
                    Email
                  </Label>
                  <Input id="email" className="" placeholder="Email" type="email" value={values['email']} onBlur={handleBlur} onChange={handleChange} />
                  <InputErrorLabel condition={(errors["email"] && touched["email"])}>{errors["email"]}</InputErrorLabel>
                </div>
                <span />

                <span />
                <div className="flex flex-col col-span-5 gap-4 p-2 rounded-md">
                  <Label htmlFor="card" className="text-left">
                    Payment Method
                  </Label>
                  <CardElement id="card" className="border rounded-md p-3" />
                </div>
                <span />

              </div>
              <DialogDescription className="text-center text-xs">
                {/* Click to continue */}
              </DialogDescription>
              <DialogDescription className="text-center mt-4 mb-2 text-sm">
                Total due now: <span className="font-semibold text-black">${(price / 100).toFixed(2)}</span>
              </DialogDescription>
              <DialogFooter>
                <div className={"flex flex-col text-center mx-auto"}>
                  {submitError && <InputErrorLabel condition={true}>{submitError.message}</InputErrorLabel>}
                  {isSubmitting ? <Button className="mx-auto min-w-24 mt-6" disabled><Loader2 className="animate-spin size-4" /></Button>
                    : <Button type="submit" className="mx-auto min-w-24 mt-6">Pay Now</Button>}
                </div>
              </DialogFooter>
            </form>
          </DialogContent>
          : <DialogContent className="sm:max-w-[425px] md:max-w-[625px] rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-center">Purchase Successful</DialogTitle>
              <DialogDescription className="text-center">
                Please check your email for your access code.
              </DialogDescription>
            </DialogHeader>
            
            <div>
              <Check className="my-8 mx-auto size-6 text-primary" />
            </div>

            <DialogFooter>
              <div className={"flex flex-col text-center mx-auto"}>
                <Button onClick={() => redirectToActivate()} className="mx-auto min-w-24">Activate Now</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        }
      </Dialog>
    </>
  );
}