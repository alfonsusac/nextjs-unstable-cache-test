import { cache } from "react"

const getRenderID = cache(() => crypto.randomUUID().split('-')[0])

export default function RouteStaticity() {
  return <aside className="absolute text-xs right-4 text-white/40">
    {/* This component checks the staticity of the page. If this value changes every refresh,
      that means this route is dynamically rendered */}
    <p>Render ID: <code>{getRenderID()}</code></p>
  </aside>
}

export function Time(props: {
  date: string
}) {
  return <p className="text-xs text-white/70">Fetched at: {(new Date(props.date)).toISOString()}</p>
}