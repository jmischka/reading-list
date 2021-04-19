import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const ListStyled = styled.ul`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 0 12px 50px;
    list-style-type: none;
    background-color: #383A40;
`

const SpanStyle = styled.span`
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    height: auto;
    padding: 50px;
    font-size: 1.8em;
    font-weight: 400;
    line-height: 1;
    font-style: italic;
    text-align: center;
    color: #7A7F8C;
`

function ReadingList(props) {
    return (
        <div>
            { props.listItems.length < 1
                ? <SpanStyle className='placeholder'>Add Your First Readling List Item</SpanStyle>
                : <ListStyled>{props.listItems.map((item,index) => <ListItem key={index} data={item} />)}</ListStyled>
            }            
        </div>
    )
}

ReadingList.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.shape(
        {
            imageUrl: PropTypes.string,
            sourceUrl: PropTypes.string,
            title: PropTypes.string
        }
    ))
}

export default ReadingList;