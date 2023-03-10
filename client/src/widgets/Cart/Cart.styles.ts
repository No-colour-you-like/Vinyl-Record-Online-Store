import styled from 'styled-components';

interface CartWrapperProps {
  showCart?: boolean;
}

export const CartWrapper = styled.div<CartWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background-color: #e3e3e3;
  border-left: 1px solid #646464;
  padding: 20px 25px;
  transition: 0.3s;
  transform: ${(props) => (props.showCart ? 'translateX(0)' : 'translateX(110%)')};
`;

export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 20px;
`;
