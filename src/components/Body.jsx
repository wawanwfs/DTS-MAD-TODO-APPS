import React from 'react';
import Header from "./Header";
import { SuccessAlert } from "./Alert";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Auth from './Auth';
import { getTodos, addTodo, editTodo, deleteTodo, toggleTodoDisable } from '../databases/todos';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            message: '',
            todos: [],
            userEmail: '',
            searchQuery: '',
        };
    }

    handleLogin = (email) => {
        this.setState({ isLoggedIn: true, message: 'Welcome back!', userEmail: email });
        this.loadTodos();
    };

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            message: '',
            todos: [],
            userEmail: '',
            searchQuery: '',
        });
    };

    loadTodos = () => {
        const todos = getTodos();
        this.setState({ todos });
    }

    handleAddTodo = (text) => {
        const newTodo = addTodo(text);
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    handleEditTodo = (id, newText) => {
        const updatedTodo = editTodo(id, newText);
        this.setState({ todos: this.state.todos.map(todo => todo.id === id ? updatedTodo : todo) });
    }

    handleDeleteTodo = (id) => {
        deleteTodo(id);
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    }

    handleToggleDisable = (id) => {
        const updatedTodo = toggleTodoDisable(id);
        this.setState({ todos: this.state.todos.map(todo => todo.id === id ? updatedTodo : todo) });
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    getFilteredTodos = () => {
        const { todos, searchQuery } = this.state;
        return todos
            .filter(todo => todo.text.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => b.disabled - a.disabled);
    }

    componentDidMount() {
        this.dismissMessageAfterDelay();
    }

    componentDidUpdate(prevState) {
        if (prevState.message !== this.state.message && this.state.message) {
            this.dismissMessageAfterDelay();
        }
    }

    dismissMessageAfterDelay = () => {
        setTimeout(() => {
            this.setState({ message: '' });
        }, 5000); // 5 seconds
    };

    buildNotLoggedInPage() {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Auth onLogin={this.handleLogin} />
            </div>
        );
    }

    buildLoggedInPage() {
        return (
            <div className='container mx-auto px-4 py-8 flex items-center justify-center'>
                {this.state.message && SuccessAlert({ message: this.state.message })}
                <div className="card bg-base-100 shadow-xl border border-gray-300">
                    <div className="card-body">
                        <h2 className="card-title">Todo Apps</h2>
                        <input
                            type="text"
                            placeholder="Search Todos"
                            className="input input-bordered input-primary mb-4"
                            value={this.state.searchQuery}
                            onChange={this.handleSearch}
                        />
                        <TodoForm onAddTodo={this.handleAddTodo} />
                        <TodoList
                            todos={this.getFilteredTodos()}
                            onEdit={this.handleEditTodo}
                            onDelete={this.handleDeleteTodo}
                            onToggleDisable={this.handleToggleDisable}
                        />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <>
                <Header isLoggedIn={this.state.isLoggedIn} onLogout={this.handleLogout} />
                {this.state.isLoggedIn
                    ? this.buildLoggedInPage()
                    : this.buildNotLoggedInPage()}
            </>
        );
    }
}

export default Body;
