import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    padding: 12px 0 0;
    z-index: 10;
    background-color: #383A40;
`

const FormStyles = styled.form`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 12px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 0 12px;
        width: 100%;
    }
    
    h1 {
        margin: 0;
        font-size: 2.3em;
        font-weight: 600;
        line-height: 1;
        color: #F2F2F2;
    }

    button {
        margin: 0;
        font-size: 1.6em;
        line-height: 1;
        font-weight: 700;
        color: #F2F2F2;
        padding: 3px 16px 3px 12px;
        background-color: #F22998;
        border: none;
        outline: none;
        border-radius: 6px;
        cursor: pointer;
        transition-duration: .3s;
        &:hover {
            background-color: #F473BA;
        }
    }

    input {
        margin: 6px 0;
        width: 100%;
        height: auto;
        font-size: 1.6em;
        padding: 6px;
        border-radius: 6px;
    }
`

function Header(props) {
    return (
        <HeaderStyles>
            <FormStyles onSubmit={props.handleSubmit}>
                <div>
                    <h1>Reading List</h1>
                    <button type='submit'>&#43; Add</button>
                </div>
                <input type='url' id='imageUrl' name="imageUrl" placeholder='Upload image' value={props.imageUrl} onChange={props.handleInputChange} />
                <input type='url' id='sourceUrl' name="sourceUrl" placeholder='Add source URL' value={props.sourceUrl} onChange={props.handleInputChange} />
                <input type='text' id='title' name="title" placeholder='Headline text' value={props.title} onChange={props.handleInputChange} />
            </FormStyles>
        </HeaderStyles>
    )
}

Header.propTypes = {
    imageUrl: PropTypes.string,
    sourceUrl: PropTypes.string,
    title: PropTypes.string,
    handleSubmit:PropTypes.func,
    handleInputChange:PropTypes.func
}

export default Header;