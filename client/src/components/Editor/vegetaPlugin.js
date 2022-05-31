import grapesjs from 'grapesjs'
import { get, post } from 'axios'
export const pluginName = 'vegeta'

export default grapesjs.plugins.add(pluginName, (editor, options) => {
  const sm = editor.StorageManager

  sm.add(pluginName, {
    load(key, next, reject) {
      next()
    },
    store(data, next, reject) {
      console.log(data)
      next()
    }
  })
})

