import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle, MdSearch, MdAddShoppingCart } from "react-icons/md";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#fbb41b",
  logo,
  logoWidth: "12vmax",
  navColor1: "rgba(255, 255, 255, 0.95)",
  
  // Links Text and URLs
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  
  // Links Styling
  link1Size: "1.8vmax",
  link2Size: "1.8vmax",
  link3Size: "1.8vmax",
  link4Size: "1.8vmax",
  link1Color: "rgba(35, 35, 35,0.9)",
  link2Color: "rgba(35, 35, 35,0.9)",
  link3Color: "rgba(35, 35, 35,0.9)",
  link4Color: "rgba(35, 35, 35,0.9)",
  link1ColorHover: "#fbb41b",
  link2ColorHover: "#fbb41b",
  link3ColorHover: "#fbb41b",
  link4ColorHover: "#fbb41b",
  
  // Navigation Justification
  nav1justifyContent: "space-around",
  nav2justifyContent: "space-around",
  nav3justifyContent: "space-around",
  nav4justifyContent: "space-around",
  
  // Margins
  link1Margin: "1.2vmax",
  link2Margin: "1.2vmax",
  link3Margin: "1.2vmax",
  link4Margin: "1.2vmax",
  
  // Icons Configuration
  profileIcon: true,
  searchIcon: true,
  cartIcon: true,
  profileIconUrl: "/login",
  profileIconColor: "#fbb41b",
  searchIconColor: "#fbb41b",
  cartIconColor: "#fbb41b",
  profileIconColorHover: "#e09701",
  searchIconColorHover: "#e09701",
  cartIconColorHover: "#e09701",
  
  // Icons Size and Margin
  searchIconSize: "2.2vmax",
  cartIconSize: "2.2vmax",
  profileIconSize: "2.2vmax",
  searchIconMargin: "1.2vmax",
  cartIconMargin: "1.2vmax",
  profileIconMargin: "1.2vmax",
  
  // Icons Elements
  ProfileIconElement: MdAccountCircle,
  SearchIconElement: MdSearch,
  CartIconElement: MdAddShoppingCart,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
