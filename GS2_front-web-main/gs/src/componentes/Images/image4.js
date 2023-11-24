import group3 from '../../img//grupo2.png'
import styled from 'styled-components';

const Diabetesimg = styled.img`
    width: 750px;
    height: 685px;
`

function Diabeteimage(){
    return(
        <div className='Diabetes'>
            <Diabetesimg
              src={group3}
              alt='tdahImage'  
            ></Diabetesimg>
        </div>
    );
}

export default Diabetesimg;