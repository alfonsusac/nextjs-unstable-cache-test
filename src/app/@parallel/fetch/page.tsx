import { getRandomNumber } from "@/api/getRandomNumber"
import RouteStaticity, { Time } from "@/components/components"
import { cookies } from "next/headers"

export async function generateMetadata() {
  return {
    title: (await (await fetch('https://next-backend-test.vercel.app/api')).json()).value,
  }
}

export default async function Page() {
  cookies()

  const local = await (await fetch('http://localhost:4000/api')).json()

  const res = await fetch('https://next-backend-test.vercel.app/api')
  const external1 = await res.json()

  const res2 = await fetch('http://www.randomnumberapi.com/api/v1.0/random')
  const external2 = await res2.json()

  const external3 = await (await fetch('https://random-data-api.com/api/v2/users')).json()

  return (
    <>
      <div>
        Local (localhost:4000): {local.value}<br />
        <Time date={local.date} />
      </div>
      <div>
        External API (nextjs): {external1.value}<br />
        <Time date={external1.date} />
      </div>
      <div>
        External API (randomnumberapi.com): {external2[0]}
      </div>
      <div>
        External API (random-data-api.com): {external3.id}
      </div>
      <div>
        Unstable Cache: {await getRandomNumber()}
      </div>
      <RouteStaticity />
    </>
  )
}