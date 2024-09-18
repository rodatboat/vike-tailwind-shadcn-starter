export async function buyProduct(email, payment_method, product_id) {
    return fetch(`${import.meta.env.VITE_APP_API}/payment/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("access_token") ? `Bearer ${localStorage.getItem("access_token")}` : undefined,
        },
        body: JSON.stringify({
            email,
            payment_method,
            product_id
        }),
    }).then((res) => res.json());
  }