import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default class UserListItem extends Component {
  render() {
    const { UserItem } = this.props; //take only the pros "UserItem"
    console.log(UserItem, '----UserItem----');
    return (
      <TableRow key={UserItem.id}>
        <TableCell className="row1">{UserItem.firstName}</TableCell>
        <TableCell className="row1">{UserItem.lastName}</TableCell>
        <TableCell className="row1">{UserItem.date}</TableCell>
        <TableCell className="row1">{UserItem.gender}</TableCell>
        <TableCell className="row1">{UserItem.destination}</TableCell>
        <TableCell className="row1">{UserItem.isFullStack && 'ReactJS NODEJS ,'}{UserItem.isFrontEnd && 'ReactJS ,'}{UserItem.isBackEnd && 'NodeJS ,'}</TableCell>


      </TableRow>
    );
  }
}
