import React from 'react';
import styled from 'styled-components';
import iconHeader from '../../img/logoglicoseguard.png'

const ImageStyleIcon = styled.img`
    height:150px;
    width:150px;
    border-radius:100px;
`

function Logo(){
    return(
        <div className='logo'>
            <ImageStyleIcon
              src={iconHeader}
              alt='logo'  
            ></ImageStyleIcon>
        </div>
    );
}

export default Logo;