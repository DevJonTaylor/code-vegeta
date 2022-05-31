/**
 * This page will be providing two views.
 * The first view will be for User's that are not logged in.  They can view templates only.
 * The second view will be for User's that are logged in.  They will be able to view templates, navigate to people's
 *    profiles, and obtain templates as their own.
 * @returns {JSX.Element}
 */

// Module imports
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useTransition, animated } from 'react-spring'
import { useEffect, useState } from 'react'

// Internal imports
import Auth from '../../utils/auth'
import { QUERY_PAGE, QUERY_PAGES } from '../../utils/queries'
import { Loading, TemplateCard } from './Compoennts'
import Header from '../../components/Profiles/Header'

// Native Node Imports

export default function () {
  const { templateId } = useParams()
  const isLoggedIn = Auth.loggedIn()

  // TODO:  Add a button to filter their templates.
  const { loading, data } = useQuery( templateId ? QUERY_PAGE : QUERY_PAGES, {
    variables: { id: templateId }
  });

  const [ pages, setPages ] = useState([ ...!data ? [] : data.pages ])

  useEffect(() => {
    setPages([ ...!data ? [] : data.pages ])
  }, [data])

  const transition = useTransition(loading, {
    enter: { opacity: 1 },
    from: { opacity: 1 },
    leave: { opacity: 0 }
  })

  console.log(data)
  return (
    <>
      <Header />
      <section className="relative py-16 bg-gray-100 app-text">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              {
                transition((style, item) =>
                  item
                    ? ( <animated.div style={style}><Loading /></animated.div> )
                    : '')
              }
              <div className="columns-1 lg:columns-3 px-5">
                { pages ? pages.map( ({ _id, mycss, myhtml, username }) => (
                  <TemplateCard
                    templateId={ _id }
                    myCss={ mycss }
                    myHtml={ myhtml }
                    username={ username }
                    key={ _id }
                    isLoggedIn={ isLoggedIn }
                  />
                )) : '' }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}