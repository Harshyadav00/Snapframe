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
import {
  Add,
  ExitToApp,
  Explore,
  Portrait,
  Settings,
} from "@mui/icons-material";

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
        <CDBSidebar
          toggled="false"
          textColor="#000"
          backgroundColor="#F8F8F8"
          style={{ zIndex: "10000" }}
        >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: "inherit" }}>
              <img src="/images/snapframe-logo.svg" height="20px" alt="logo" />
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/create" activeClassName="activeClicked">
                <CDBSidebarMenuItem>
                  <Add /> New Post
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to={`/user/${user?.userId}`}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem>
                  <Portrait /> Account
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/explore" activeClassName="activeClicked">
                <CDBSidebarMenuItem>
                  <Explore /> Explore
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="#" activeClassName="activeClicked">
                <CDBSidebarMenuItem>
                  <Settings /> Update Profile
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact onClick={SignOut} activeClassName="activeClicked">
                <CDBSidebarMenuItem>
                  <ExitToApp /> Sign Out
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
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
          </CDBSidebarFooter> */}
        </CDBSidebar>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sidebar;
