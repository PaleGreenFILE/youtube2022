import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "./../../responsive";
import iconpay1 from "../../assets/icons/icon-pay-01.png";
import iconpay2 from "../../assets/icons/icon-pay-02.png";
import iconpay3 from "../../assets/icons/icon-pay-03.png";
import iconpay4 from "../../assets/icons/icon-pay-04.png";
import iconpay5 from "../../assets/icons/icon-pay-05.png";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor:pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ textAlign: "center", backgroundColor: "#fff8f8" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: rotateZ(1deg) translate3d(0,10%,0) rotateZ(1deg);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "teal" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
`;

const MailContact = styled.a`
  color: black;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Payment = styled.img`
  width: 30px;
  display: flex;
  object-fit: cover;
  ${mobile({ display: "none" })}
`;

const PaymentPay = styled.span`
  display: flex;
  margin: 0px 400px 0px 0px;
  justify-content: space-between;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ANGELS SHOP.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered altercation in some form, by injected
          humour,or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          <MailContact className="mail " href="mailto:contact@angels.com">
            contact@angels.com
          </MailContact>
        </ContactItem>
        <PaymentPay>
          <Payment src={iconpay1} />
          <Payment src={iconpay2} />
          <Payment src={iconpay3} />
          <Payment src={iconpay4} />
          <Payment src={iconpay5} />
        </PaymentPay>
      </Right>
    </Container>
  );
};

export default Footer;
