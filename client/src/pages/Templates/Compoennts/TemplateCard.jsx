/**
 * TemplateCard
 * This component is used to display a Template in a Card format.
 * @returns {JSX.Element}
 */

// Module imports
import { FaEye, FaSave, FaRegUser, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Internal imports
import { templateToString, addKey, addClass } from '../functions'
import '../templates.css'

// Native Node Imports

export default function ({ templateId, myHtml, myCss, username, isLoggedIn, ...props }) {
  const templateUrl = `/templates/${templateId}`
  const profileUrl = `/profile/${username}`

  const examHandler = event => {
    console.log(event)
    console.log(templateId)
  }

  const actionButtonArray = isLoggedIn
    ? addKey([
      { text: 'Exam', Icon: () => (<FaEye />), to: templateUrl },
      { text: 'Profile', Icon: () => (<FaRegUser />), to: profileUrl },
      { text: 'Save', Icon: () => (<FaSave />), to:false },
    ])
    : addKey([
      { text: 'Exam', Icon: () => (<FaEye />), to: templateUrl },
      { text: 'Login', Icon: () => (<FaSignInAlt />), to: '/login' },
    ])
    addClass('w-full flex flex-wrap flex-row justify-center items-center p-3 mb-5 border glass h-[80vh] glass', props)

  return !username || !myHtml ? '' : (
    <div {...props}>
      <h3 className="card-title text-2xl text-center">
        { username }
        <legend className="text-xl text-center">Template Name</legend>
      </h3>

      <div className="card-body w-full h-full flex justify-center items-center" style={{ padding: '0 0 32px 0' }}>
        <iframe id={ templateId } className="w-full h-full border border-white ring-inset" srcDoc={templateToString(myHtml, myCss)}/>
        <div className="btn-group grid grid-cols-3">
          { actionButtonArray.map(({ to, text, Icon, key }) => !to ? (
            <a
              key={key}
              className="btn btn-primary"
              style={{ fontSize: '24px' }}
              onClick={ () => console.log(event) }
            >
              <Icon />
              <span className="hidden md:block ml-4">{ text }</span>
            </a>
          ) : ( <Link
              key={key}
              className="btn btn-primary"
              style={{ fontSize: '24px' }}
              to={to}
              target="_blank"
            >
              <Icon />
              <span className="hidden md:block ml-4">{ text }</span>
            </Link>
          )) }
        </div>
      </div>
    </div>
  )
}