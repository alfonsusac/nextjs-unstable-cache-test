import RouteStaticity, { Time } from "@/components/components"

export default async function Page() {
  const data = await (await fetch('https://next-backend-test.vercel.app/api')).json()

  const external1 = await (await fetch('http://www.randomnumberapi.com/api/v1.0/random')).json()

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