import React from "react"
import AddUsers from "./AddUsers.js"
import { addDeveloper } from "../../Actions/developerAction";
import { connect } from "react-redux";
import UserList from "./UserList"


class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      date: "",
      gender: "",
      destination: "",
      isFullStack: false,
      isFronEnd: false,
      isBackEnd: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      date: this.state.date,
      gender: this.state.gender,
      destination: this.state.destination,
      isFullStack: this.state.isFullStack,
      isFrontEnd: this.state.isFrontEnd,
      isBackEnd: this.state.isBackEnd

    };
    this.props.dispatch(addDeveloper(data));

  }
  handleChange(event) {
    const { name, value, type, checked } = event.target
    console.log(event.target.value);
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
      :
      this.setState({
        [name]: value
      })
  }
  render() {
    console.log(this.props.developerList, '--------developerList----------');
    return (
      <div>

        <AddUsers
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          values={this.state}
        />

        <UserList
          users={this.props.developerList}
        />


      </div>
    );
  }
}

// this code for import data from store, always try to use this once time inside parent "Users"
// import store data inside userList
const mapStateToProps = (state) => {
return {
    developerList: state.developerReducer.developers
  };
};
export default connect(mapStateToProps)(Users);


