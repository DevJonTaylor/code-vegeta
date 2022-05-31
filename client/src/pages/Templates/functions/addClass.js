/**
 * Adds to or creates a new className on the props object.
 * @param {string} className
 * @param props This will mutate the className.  This is to simplify the codebase.
 * @returns {void}
 */
export default function(className, props) {
  if(props.className) props.className += ` ${className}`
  else props.className = className
}