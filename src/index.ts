import { ReactNode } from 'react'
import { kebabCase } from '@lukaspolak/kebab-case'
import { getInnerText } from '@lukaspolak/react-get-inner-text'

export const getDataCy = (
  name: string,
  value: string | JSX.Element | ReactNode
): { 'data-cy': string } => {
  const innerText = getInnerText(value).trim()
  const label = innerText ? `_${kebabCase(innerText)}` : ''

  return { 'data-cy': `${kebabCase(name)}${label}` }
}
