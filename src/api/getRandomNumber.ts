import { unstable_cache } from "next/cache"

export const getRandomNumber = unstable_cache(async () => {
  return (Math.random() * 100).toFixed()
})