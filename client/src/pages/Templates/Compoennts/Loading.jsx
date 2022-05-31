/**
 * A simple loading spinner any unexpect delays in reaching and receiving from the server.
 * @returns {JSX.Element}
 */

// Module imports
import { ClimbingBoxLoader } from 'react-spinners'

// Internal imports
import { addClass } from '../functions'

// Native Node Imports
export default function ({ isLoading, ...props }) {
  addClass('w-full h-full fixed z-50 flex items-center justify-center bg-gradient-to-r from-emerald-300 to-sky-300 top-0 left-0', props)
  return (
    <div {...props}>
      <ClimbingBoxLoader
        size={150}
        color='white'
        speedMultiplier={2}
      />
    </div>
  )
}