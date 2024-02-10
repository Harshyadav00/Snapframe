import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Sidebar = () => {
  const { user, SignOut } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
      }}
    >
      {user ? (
        <CDBSidebar textColor="#000" backgroundColor="#F8F8F8">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/explore" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Explore</CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to={`/user/${user?.userId}`}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="table">Account</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact onClick={SignOut} activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Sign Out
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact
                to="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  404 page
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              Developed By Harsh
            </div>
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              Designed By Mohit
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sidebar;
