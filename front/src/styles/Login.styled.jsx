import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4c8bf5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
`;

export const NavbarLinks = styled.div`
  display: flex;
`;

export const NavbarLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: #333;
`;

export const NavbarProfile = styled.div`
  position: relative;
`;

export const DropdownToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const DropdownIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  padding: 10px;
`;

export const DropdownLink = styled.a`
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  color: #333;
`;

export const DropdownLinkHover = styled(DropdownLink)`
  background-color: #f2f2f2;
`;

export const DropdownToggleFocus = styled(DropdownToggle)`
  + ${DropdownContent} {
    display: block;
  }
`;
