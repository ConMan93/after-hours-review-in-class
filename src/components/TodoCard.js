import React, {Component} from 'react'

class TodoCard extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            edit: false
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    componentDidMount() {
        this.setState({title: this.props.todo.title})
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value})
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    render() {
        console.log(this.state.edit)
        return (
            <div>
                {
                    this.state.edit ?
                    (
                        <div>
                            <input value={this.state.title} type='text' onChange={this.handleTitleChange}/>
                            <button onClick={() => {
                                this.props.updateTodo(this.state.title, this.props.todo.id)
                                this.toggleEdit()
                                }}>Submit</button>
                            <button onClick={this.toggleEdit}>Cancel</button>

                        </div>
                    ) :
                    (
                        <div>
                            {this.props.todo.title}
                            <button onClick={this.toggleEdit}>Edit</button>
                            <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
                        </div>

                    )
                }
            </div>
        )
    }
}

export default TodoCard