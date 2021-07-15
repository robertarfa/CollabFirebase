import styled from 'styled-components'


export const FooterContainer = styled.div`
padding-bottom: 15px;
`
export const CardsContainer = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
    justify-content: space-evenly;
`

export const LogoContainer = styled.div`
/* width: 30px; */
height: 85px;
`
export const AdressContainer = styled.div`
width: 100%;
display: flex;
    justify-content: center;
    flex-flow: column;
`

export const LineAdressContainer = styled.span`
width: 100%;
display: flex;
    justify-content: center;
    font-weight: bold;
`

export const LineAdressNoBoldContainer = styled.span`
margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
width: 100%;
display: flex;
    justify-content: center;
    cursor: pointer;
`
export const Link = styled.a`
color:black;

:hover{
    text-decoration:none;
    color:black;
}
`

export const IconContainer = styled.span`

    box-shadow: 0px 2px #888888;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    justify-content: center;
    display: flex;
    margin-right: 8px;
`