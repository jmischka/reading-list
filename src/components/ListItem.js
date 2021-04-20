import PropTypes from 'prop-types';
import styled from 'styled-components';
import { keyframes} from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const ListItemStyles = styled.li`
    position: relative;
    margin: 0;
    width: 100%;
    height: auto;
    padding: 0;
    border-bottom: 1px dotted #F2F2F2;
    animation: ${fadeIn} .4s; 

    a {
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 25px 0;
        text-decoration: none;
        background-color: #383A40;
        transition-duration: .5s;
        &:hover {
            background-color: #43454D;
        }
    }

    figure {
        position: relative;
        margin: 0 0 0 0;
        width: 50px;
        height: 50px;
        overflow: hidden;
    }

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        width: auto;
        height: 100%;
        object-fit: cover;
        transform: translate(-50%,-50%);
    }

    div {
        position: relative;
        margin: 0;
        width: calc(100% - 50px);
        padding: 0 0 0 25px;
    }

    span {
        display: block;
        margin: 0;
        width: 100%;
        font-size: 1.4em; 
        font-weight: 400;
        line-height: 1;
        color: #F2F2F2;
    }

    h2 {
        margin: 6px 0 0 0;
        width: 100%;
        font-size: 1.8em;
        font-weight: 600;
        line-height: 1.2;
        color: #F2F2F2;
    }
`

function ListItem(props) {
    return (
        <ListItemStyles>
            <a target='blank' href={props.data.sourceUrl}>
                <figure><img alt={props.data.title} src={props.data.imageUrl} /></figure>
                <div>
                    <span>{props.data.sourceUrl}</span>
                    <h2>{props.data.title}</h2>
                </div>
            </a>
        </ListItemStyles>
    )
}

ListItem.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.string
    )
}

export default ListItem;