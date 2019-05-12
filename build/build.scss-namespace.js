
const {
  writeFileSync
} = require('fs')

const { name } = require('../package.json')

const CSSVarName = 'namespace'

if (!process.argv[2]) {
  console.error('no output file provided')
  process.exit(1)
}

const usageNotes = `

// /** 
//  * Design System Prefix.
//  *
//  * For use as namespace to implement style encapsulation (by class),
//  * and target custom elements.
//  */

// /** 
//  * Prefix as class name
//  */
// /* .#{$prefix} { ... } */

// /** 
//  * or using SCSS variable 'namespace'
//  */
// /* .#{$namespace} { ... } */

// /** 
//  * Custom element targeting rule with prefix
//  */
// /* #{$prefix}-custom-element-name { ... } */


`

const args = [
  // output file
  process.argv[2],
  // SCSS template content
  [
    usageNotes,
    `$${CSSVarName}: '${name}';`,
    `$prefix: '${name}';`
  ].join('\n'),
  // file write options
  { flag: 'w', encoding: 'utf8', mode: 0o666 }
]

writeFileSync(...args)

console.log(`
  SCSS Namespace File Generated...

  ${args[1]}

  output: "${args[0]}"
`)

process.exit()
