import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import _ from "lodash";

import UserListItem from "./UserListItem"

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
  }


  render() {
    return (
      <div className="div">
    
        <Table className="table">
          <TableHead >
            <TableRow className="row">

              <TableCell  >
                <div>First Name</div>
              </TableCell>

              <TableCell >
                  <div>Last Name</div>  

              </TableCell>

              <TableCell >
                  <div>Date de naissance</div>  

              </TableCell>

              <TableCell >
                  <div>Gender</div>  

              </TableCell>

              <TableCell >
                  <div>Developer</div>  

              </TableCell>

              <TableCell >
                  <div>Skills</div>  

              </TableCell>





              
              
              
            </TableRow>
          </TableHead>
          <TableBody >
            {this.props.users.map((UserItem) => {
              return (
                <UserListItem
                  UserItem={UserItem}
                />
              );
            })}
          </TableBody>
        </Table>
        
      </div>
    );
  }
}
 
export default UserList;
