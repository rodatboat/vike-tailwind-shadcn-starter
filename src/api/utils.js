import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function buyProduct(email = null, payment_method, product_id, gift = false) {
  return fetch(`${import.meta.env.VITE_APP_API}/payment/`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("access_token") ? `Bearer ${localStorage.getItem("access_token")}` : undefined,
      },
      body: JSON.stringify({
          email: email ? email : undefined,
          payment_method,
          product_id,
          gift
      }),
  }).then((res) => res.json());
}