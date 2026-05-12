import type { Metadata } from 'next'
import Studio from './Studio'

export const metadata: Metadata = {
  title: 'Admin Studio',
}

export function generateStaticParams() {
  return [{ index: [] }]
}

export default function StudioPage() {
  return <Studio />
}
