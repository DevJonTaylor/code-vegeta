import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useGetPages, useCreatePage, useDeletePage, useGetPage, useUpdatePage } from '../../hooks/usePage'

export default function () {
  const [ updatePage, { data, loading, error } ] = useDeletePage()

  useEffect(() => {
    updatePage({ variables: { _id: '6293902c89d28b61ccbbd1c9' } } )
  }, [])

  if (loading) return (<div>Loading...</div>)
  if (error) return (<div>Error! {error.message}</div>)
  return data && data.deletePage ? (
    <div>{data.deletePage._id}</div>
  ) : ''
}