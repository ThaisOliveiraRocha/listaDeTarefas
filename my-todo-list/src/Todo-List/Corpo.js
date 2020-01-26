import React, {Component} from 'react';

class Corpo extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        this.state = {tarefas: []}
    }

    onSubmit(event){
        event.preventDefault();
        var novoItem = this.refs.tarefa.value;
        
        if(novoItem) {
            var vetItens = this.state.tarefas.concat(novoItem)
            this.setState({tarefas: vetItens})           
            this.refs.form.reset();
        }
    }
    
    deleteItem(index) {
        var clone = Array.from(this.state.tarefas)
        clone.splice(index, 1)
        this.setState({ tarefas: clone })
    }

    render() {
        return (
            <div className="corpo">
                <center>
                    <h1>Minha Todo List</h1>
        
                    <h2>Adicionar Tarefa</h2>
                    
                    <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                        <input type="text" ref="tarefa" placeholder="Digite a tarefa aqui"></input>
                        <input type="submit" name="btnAdd" value="Adicionar"/>

                        {this.state.tarefas.map((item, index) => {
                            return <li key={index} onClick={() => this.deleteItem(index)}>{item}</li>
                        })}
                    </form>
                </center>
            </div>
        );
    }
}

export default Corpo;