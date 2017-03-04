import styled from 'styled-components'

const rem = (num) => `${num}rem`

const gutterWidth = 1
const outerMargin = 2
const gutterCompensation = gutterWidth * -0.5
const halfGutterWidth = gutterWidth * 0.5
const xsMin = 30
const smMin = 48
const mdMin = 64
const lgMin = 75
const containerSm = smMin + gutterWidth
const containerMd = mdMin + gutterWidth
const containerLg = lgMin + gutterWidth

const smViewport = 'only screen and (min-width: 48em)'
const mdViewport = 'only screen and (min-width: 64em)'
const lgViewport = 'only screen and (min-width: 75em)'

const CommonContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`

export const ContainerFluid = styled(CommonContainer)`
  padding-right: ${rem(outerMargin)};
  padding-left: ${rem(outerMargin)};
`
export const Container = styled(CommonContainer)`
  @media ${smViewport} {
    width: ${rem(containerSm)};
  }
  @media ${mdViewport} {
    width: ${rem(containerMd)};
  }
  @media ${lgViewport} {
    width: ${rem(containerLg)};
  }
`

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${rem(gutterCompensation)};
  margin-left: ${rem(gutterCompensation)};
  flex: ${props => props.reverse ? 'row-reverse' : 'row'};
`

const widths = [
  '8.33333333%',
  '16.66666667%',
  '25%',
  '33.33333333%',
  '41.66666667%',
  '50%',
  '58.33333333%',
  '66.66666667%',
  '75%',
  '83.33333333%',
  '91.66666667%',
  '100%'
]

const generateWidthByProps = (key, props, isMaxWidth = false) => {
  const partition = props[key]
  const width = widths[partition - 1]
  return width || (isMaxWidth ? '100%' : '0')
}

const generateMediaQueryForCol = (viewPortKey, props) => {
  const viewPorts = {
    lg: lgViewport,
    md: mdViewport,
    sm: smViewport
  }
  return !props[viewPortKey] ? '' : `
    @media ${viewPorts[viewPortKey]} {
      flex-basis: ${generateWidthByProps(viewPortKey, props)};
      max-width: ${generateWidthByProps(viewPortKey, props, true)};
    }
  `
}

export const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${rem(halfGutterWidth)};
  padding-left: ${rem(halfGutterWidth)};
  flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
  flex-grow: 1;
  flex-basis: ${props => generateWidthByProps('xs', props)};
  max-width: ${props => generateWidthByProps('xs', props, true)};
  ${props => {
    return `
      ${generateMediaQueryForCol('sm', props)}
      ${generateMediaQueryForCol('md', props)}
      ${generateMediaQueryForCol('lg', props)}
    `
  }}
`
