import styled from 'styled-components'

const Icon = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
})``

const Svg = styled(Icon)`
  width: 32px;
  height: 32px;
`

export const HomeIcon = ({ color = 'transparent', size = 24, opacity = 1 }) => (
  <Svg viewBox={`0 0 ${size} ${size}`}>
    <g opacity={opacity}>
      <path
        d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 29.3333V16H20V29.3333"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </Svg>
)

export const RankingIcon = ({ color = 'transparent', size = 24, opacity = 1 }) => (
  <Svg viewBox={`0 0 ${size} ${size}`}>
    <g opacity={opacity}>
      <path
        d="M15.9998 20C21.1545 20 25.3332 15.8214 25.3332 10.6667C25.3332 5.51205 21.1545 1.33337 15.9998 1.33337C10.8452 1.33337 6.6665 5.51205 6.6665 10.6667C6.6665 15.8214 10.8452 20 15.9998 20Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9468 18.52L9.3335 30.6667L16.0002 26.6667L22.6668 30.6667L21.0535 18.5067"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </Svg>
)
