import styled from "styled-components";
import Button from "./Button";

const ProductWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 80px;
    }
`;

const Title = styled.h2`
    font-weight: normal;
    font-size: 0.9rem;
    text-align: center;     //self
    margin: 0;
`;

export default function ProductBox({_id,title,description,price,images}){
    return(
        <ProductWrapper>
            <WhiteBox>
                <div>
                <img src={images[0]} alt="" />
                </div>           
        </WhiteBox>
        <Title>{title}</Title> 
        <Button primary>Add to cart</Button> 
        </ProductWrapper>
        
    );
}