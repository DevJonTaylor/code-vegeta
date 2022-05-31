/**
 *
 * @param myHtml
 * @param myCss
 * @returns {string}
 */
export default function(myHtml, myCss) {
  return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${myCss}</style>    
    </head>
    ${!myHtml ? '' : myHtml}
</html>`
}