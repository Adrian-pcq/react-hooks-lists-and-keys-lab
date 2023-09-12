import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link = links.map(value =>{
   return (<a href={"#" + value} key={value} >{value}</a>)
  })
  return <nav>{link}</nav>;
}

export default NavBar;
