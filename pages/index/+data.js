import { REQ_TIMEOUT_DEFAULT } from "@/lib/constants"
import { render } from "vike/abort"

// https://vike.dev/data
export { data }

const API_URI = `${import.meta.env.VITE_APP_API}`

const default_packages = [
  {
    _id: "1",
    title: "Package 1",
    old_price: 6000,
    price: 3000,
    pros: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    cons: [],
    popular: true
  },
  {
    _id: "2",
    title: "Package 2",
    old_price: 4000,
    price: 2000,
    pros: [
      "Feature 1",
      "Feature 2"
    ],
    cons: ["Feature 3"]
  },
  {
    _id: "3",
    title: "Package 3",
    old_price: 2000,
    price: 1000,
    pros: [
      "Feature 1"
    ],
    cons: ["Feature 2", "Feature 3"]
  }
]

const data = async (pageContext) => {
  // await sleep(300) // Simulate slow network
  let packages = default_packages;

  const response = await fetch(`${API_URI}/packages/available`, { signal: AbortSignal.timeout(REQ_TIMEOUT_DEFAULT) })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 200) {
        // packages = res.data.length > 0 ? res.data.map((p) => ({ ...p, pros: p.items, items: undefined })) : packages;
      }
    })
    .catch((err) => {
      // throw render(500, err.message)
    });

  return {
    packages,
    // The page's <title>
    // title: movie.title
  }
}
