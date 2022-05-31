import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useGetPages } from '../../hooks/usePage'
import { useQuery } from '@apollo/client'
import { QUERY_PAGES } from '../../utils/queries'

export default function () {
  const { loading, data, error } = useQuery(QUERY_PAGES)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`
  return data && data.pages && data.pages.map(page => (
    <div>{page._id}</div>
  ))
}