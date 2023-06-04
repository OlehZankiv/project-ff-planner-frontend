// TODO: Implement Login Page

// import styled, { css } from 'styled-components'
// import {
//   getBreakpointsStyles,
//   getDesktopStyles,
//   getTabletStyles,
//   useBreakpointValue,
// } from '../../styles/breakpoints'
// import { Modal, Text } from '../../components'
// import { useState } from 'react'
// import { useTranslation } from 'react-i18next'

// const LoginPage = ({}) => {
//   const { t } = useTranslation()

//   const [visible, setVisible] = useState(true)

//   const value = useBreakpointValue({
//     desktopValue: 'Welcome to Desktop',
//     tabletValue: 'Welcome to Tablet',
//     mobileValue: 'Welcome to Mobile',
//   })

//   return (
//     <Wrapper>
//       {value}

//       <Modal
//         visible={visible}
//         onClose={() => setVisible(false)}
//         onEnterPress={() => setVisible(false)}
//       >
//         <Text type='p'>
//           {t(
//             "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
//           )}
//         </Text>
//       </Modal>

//       <button onClick={() => setVisible(true)}>Open</button>
//     </Wrapper>
//   )
// }

// export default LoginPage

// const Wrapper = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: red;
//   color: white;

//   ${getBreakpointsStyles({
//     desktop: css`
//       background-color: blue;
//     `,
//     tablet: css`
//       background-color: green;
//     `,
//   })}

//   // The same as getBreakpointsStyles
//   ${getDesktopStyles(css`
//     background-color: blue;
//   `)}
//   ${getTabletStyles(css`
//     background-color: green;
//   `)}
// `

// TODO: Implement Login Page
import { LogInForm } from '../../components/LogInForm/LogInForm'
import { Wrapper, ImageOfGooseInRocket } from '../register/RegisterPageStyled'
import gooseTrackInRocketImage from '../../assets/images/gooseTrackRocket.png';
import gooseTrackInRocketImage2x from '../../assets/images/gooseTrackRocket@2x.png'
import { useDimensions } from '../../hooks'
import { sizes } from '../../styles/breakpoints'

const LoginPage = ({ }) => {
  const { width } = useDimensions()
  const leftImageWidth = width >= sizes.desktop ? '20vw' : '25vw'

  return (
    <Wrapper>
      <ImageOfGooseInRocket
        style={{ width: `calc(${leftImageWidth} * (${width} / ${sizes.desktop}))` }}
        srcSet={`${gooseTrackInRocketImage} 1x, ${gooseTrackInRocketImage2x} 2x`}
        src={gooseTrackInRocketImage}
        alt='image goose track in rocket'
      />
      <LogInForm />
    </Wrapper>
  )
}

export default LoginPage

