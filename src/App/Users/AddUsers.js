import React from "react"
import "./style.css"


class AddUsers extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }



    render() {
        const { values } = this.props
        return (
            <main className="form">
                <form onSubmit={this.props.handleSubmit}>

                    <label>First Name</label>
                    <input className="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={this.props.handleChange}
                        placeholder="First Name"
                    />
                    <br />

                    change                    <label>Last Name</label>
                    <input className="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={this.props.handleChange}
                        placeholder="Last Name"
                    />
                    <br />


                    <label>Date de naissance</label>
                    <input className="text"
                        type="date"
                        name="date"
                        onChange={this.props.handleChange}

                    />
                    <br />

                    <label>Gender</label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={values.gender === "male"}
                            onChange={this.props.handleChange}
                        /> Male
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={values.gender === "female"}
                            onChange={this.props.handleChange}
                        /> Female
                    </label>

                    <br />

                    <label>Developer</label>

                    <select
                        value={values.destination}
                        name="destination"
                        onChange={this.props.handleChange}
                    >
                        <option value="">-- Please Choose a section --</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Devops">Devops</option>
                        <option value="Designer">Designer</option>

                    </select>

                    <br />
                    <label>Skills</label>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isFullStack"
                            onChange={this.props.handleChange}
                            value="ReactJS NodeJS"
                            checked={values.isFullStack}

                        /> ReactJS NodeJS
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isFrontEnd"
                            onChange={this.props.handleChange}
                            value="ReactJS"
                            checked={values.isFrontEnd}

                        /> ReactJS
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isBackEnd"
                            onChange={this.props.handleChange}
                            value="NodeJS"
                            checked={values.isBackEnd}

                        /> NodeJS
                    </label>
                    <br />



                    <button type='submit'>Submit</button>
                </form>
            </main>
        )
    }
}

export default AddUsers;

