import { ApiResponse } from '../types'

export async function fetchCompetitionData(id: string): Promise<ApiResponse> {
  const res = await fetch(`https://ftapa.addon-sport.com/api/results/v1/competition/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return {
    ...data,
    events: data.events || [] // Provide a default empty array if events is undefined
  }
}