import type { Metadata } from 'next'
import StudioWrapper from './StudioWrapper'

export const metadata: Metadata = {
  title: 'Admin Studio',
}

export function generateStaticParams() {
  return [{ index: [] }]
}

export default function StudioPage() {
  return <StudioWrapper />
}
