import styled from "styled-components"
import H2 from "components/atoms/H2"

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const OrangeDiv = styled.div`
  position: absolute;
  width: 200vw;
  height: 100%;
  top: 0;
  left: calc(100% - 500px);
  background: ${({ theme }) => theme.color.orange};

  @media ${({ theme }) => theme.device.laptopL} {
    left: calc(100% - 280px);
  }

  @media ${({ theme }) => theme.device.laptop} {
    left: calc(100% - 170px);
  }

  @media ${({ theme }) => theme.device.tablet} {
    left: calc(100% - 80px);
  }

  @media ${({ theme }) => theme.device.mobileL} {
    left: calc(100% - 40px);
  }
`

export const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 60%;
  left: 0;
  bottom: 0;
  z-index: 1;

  @media ${({ theme }) => theme.device.laptopL} {
    max-height: 30%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

export const StyledArticle = styled.article`
  padding: 150px 50px;
  width: 60%;

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: calc(100% - 280px);
  }

  @media ${({ theme }) => theme.device.laptop} {
    max-width: calc(100% - 170px);
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 100px 30px;
    width: 100%;
    max-width: calc(100% - 80px);
  }

  @media ${({ theme }) => theme.device.mobileL} {
    max-width: calc(100% - 40px);
  }
`

export const StyledH2 = styled(H2)`
  margin-bottom: 20px;
`

export const StyledSection = styled.section`
  margin-bottom: 40px;
  position: relative;
  max-width: 500px;
`

export const SectionBackground = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  /* opacity: 0.3; */
  width: 200vw;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  transform: translateX(30px);

  @media ${({ theme }) => theme.device.tablet} {
    transform: translateX(0px);
  }
`

export const InnerSection = styled.div`
  padding: 30px 0;
  position: relative;
  margin-right: 30px;
  z-index: 1;
`
