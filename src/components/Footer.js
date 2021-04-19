import styled from 'styled-components'

const FooterStyles = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    background-color: #383A40;

    div {
        margin: 0 auto;
        width: 100%;
        max-width: 900px;
        padding: 12px 12px 16px;
        text-align: right;
    }

    a {
        font-size: 1.6em;
        font-weight: 400;
        line-height: 1;
        text-decoration: underline;
        color: #F22998;
        cursor: pointer;
        transition-duration: .3s;
        &:hover {
            text-decoration: none;
            color: #F473BA;
        }
    }
`

function Footer() {
    return (
        <FooterStyles>
            <div>
                <a target="blank" href="https://www.sparksandhoney.com/">Explore All</a>
            </div>
        </FooterStyles>
    )
}

export default Footer;