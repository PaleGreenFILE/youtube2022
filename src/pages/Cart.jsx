import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Annoucement/Announcement";
import Footer from "../components/Footer/Footer";
import image2 from "../assets/img/nasa.jpg";
import { Add, Remove } from "@mui/icons-material";
import payment from '../assets/img/paypal-stripe.png';
import { mobile } from './../responsive';


const Container = styled.div`
${mobile({ width: "100%" })}
`;

const Wrapper = styled.div`
  padding: 30px;
  ${mobile({ padding: "10px" })}


`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const ProductName = styled.span`  ${mobile({ marginBottom: "10px",fontSize:"15px",justifyContent:"space-around" })}
`;
const ProductId = styled.span`  ${mobile({ marginBottom: "10px" })}
`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius 50%;
background-color: ${(props) => props.color}
`;
const ProductSize = styled.span`${mobile({ marginTop: "20px" })}`;
const Details = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ marginBottom: "20px",padding: "10px 15px" })}
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "15px 15px" })}

`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "15px" })}

`;
const Br =styled.br``;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
`;

const SummaryTitle =styled.h1`
font-weight:200;

`;
const SummaryItem =styled.div`
margin: 30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props=>props.type ==="total" && "500"};
font-size: ${props=>props.type ==="total" && "24px"};

`;
const SummaryItemText =styled.span``;
const SummaryItemPrice =styled.span``;
const SummaryButton =styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;

`;

const Payment = styled.img`
width :50%;
margin: 0px 80px  ;
padding: 30px;
align-items:center;
justify-content:center;
${mobile({ margin: "0px 35px", width:"60%" })}
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={image2} />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>5</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Br/>
            <Hr />
            <Br/>
            <Product>
              <ProductDetail>
                <Image src={image2} />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>5</ProductAmount>
                  <Add/>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount </SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
            <Payment src={payment}/>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
