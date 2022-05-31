/**
 * The purpose of this hook is to send GraphQL mutations to save, update, or delete a single page.
 */

import { useState } from 'react'
import { ADD_PAGE, UPDATE_PAGE, DELETE_PAGE } from '../utils/mutations'
import { QUERY_PAGE, QUERY_PAGES } from '../utils/queries'
import { useQuery, useMutation } from '@apollo/client'

function usePageRead(id) {
  const [ isLoading, setLoading ] = useState(true)
  const [ data, setData ] = useState({})


}

export function useGetPage(id) {
  return useQuery(QUERY_PAGE, { variables: { _id: id } })
}

export function useGetPages() {

  const { loading, error, data }  = useQuery(QUERY_PAGES)

  if(error) return { error }
  if(loading) return { loading }
  return { data }
}

export function useCreatePage({ mycss, myhtml }) {
  return useMutation(ADD_PAGE, { variables: { myhtml, mycss } })
}

export function useUpdatePage(id, updateObject = {} ) {
  return useMutation(UPDATE_PAGE, { variables: { _id: id, ...updateObject } })
}

export function useDeletePage(id) {
  return useMutation(DELETE_PAGE, { variables: { _id: id }})
}
