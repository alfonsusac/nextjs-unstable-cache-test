import RouteStaticity, { Time } from "@/components/components"
import { cookies } from "next/headers"

export default async function Page() {
  cookies()

  const res = await fetch('https://next-backend-test.vercel.app/api')
  const data = await res.json()
  // console.log(res)
  console.log("X Vercel Cache:",res.headers.get('x-vercel-cache'))
  console.log("Age:",res.headers.get('age'))
  console.log("Cache Control:",res.headers.get('cache-cobntrol'))
  console.log("Server:", res.headers.get('server'))

  console.log()

  const res2 = await fetch('http://www.randomnumberapi.com/api/v1.0/random')
  const external1 = await res2.json()
  // console.log(res2)
  console.log("CF Cache Status:", res2.headers.get('cf-cache-status'))
  console.log("Server:", res2.headers.get('server'))
  // console.log(res2.headers.get('cache-control'))

  const external2 = await (await fetch('https://random-data-api.com/api/v2/users')).json()

  return (
    <>
      <div>
        Fetch: {data.value}<br />
        <Time date={data.date} />
      </div>
      <div>
        External API (randomnumberapi.com): {external1[0]}
      </div>
      <div>
        External API (random-data-api.com): {external2.id}
      </div>
      <RouteStaticity />
    </>
  )
}