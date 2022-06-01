/**
 * The purpose of this hook is to send GraphQL mutations to save, update, or delete a single page.
 */

import { useState } from 'react'
import { ADD_PAGE, UPDATE_PAGE, DELETE_PAGE } from '../utils/mutations'
import { QUERY_PAGE, QUERY_PAGES } from '../utils/queries'
import { useQuery, useMutation } from '@apollo/client'


const getOptions = ( variables = {} ) => ({ variables, 'no-cache': true })

export function useGetPage(id) {
  const options = getOptions({ id: id })
  console.log(options)
  return useQuery(QUERY_PAGE, options)
}

export function useGetPages() {

  return useQuery(QUERY_PAGES, getOptions())
}

export function useCreatePage() {
  return useMutation(ADD_PAGE)
}

export function useUpdatePage() {
  return useMutation(UPDATE_PAGE)
}

export function useDeletePage(id) {
  return useMutation(DELETE_PAGE)
}
