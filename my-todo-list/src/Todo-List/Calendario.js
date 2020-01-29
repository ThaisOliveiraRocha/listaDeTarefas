import React, {Component} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

class Calendario extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

            this.state = {
                    eventos: JSON.parse(localStorage.getItem('index')) || [],
            }
    }

    onSubmit(event){
        event.preventDefault();
        const novoItem = {
            'nome': this.refs.tarefa.value,
            'data_inicio': this.refs.data_inicio.value,
            'data_fim': this.refs.data_fim.value,
        }


            console.log(localStorage.getItem('index'))
            var vetItens = JSON.parse(localStorage.getItem('index')) || this.state.eventos
            vetItens.push(novoItem)

            localStorage.setItem('index', JSON.stringify(vetItens))

            this.setState({eventos: vetItens}) 
            this.refs.form.reset();
    }

    deleteItem(index) {
        var clone = Array.from(this.state.eventos)
        clone.splice(index, 1)
        this.setState({ eventos: clone })
    }
    

    render() {
        return (
            <div className="corpo">
                <center>
                    <h1>Adicionar eventos ao calendário</h1>

                    <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                        
                        <label>Nome da tarefa: </label>
                            <input type="text" ref="tarefa" placeholder="Digite a tarefa aqui"></input>
                        <br />
                        
                        
                        <label>Data Início: </label>
                            <input type="date" ref="data_inicio" min="2020-01-01" max="2099-12-31"></input>
                        <br />

                        <label>Data Fim: </label>
                            <input type="date" ref="data_fim" min="2020-01-01" max="2099-12-31"></input>
                        <br />

                        <input type="submit" name="btnAdd" value="Continuar"/>
                        <br /><br />


                        {this.state.eventos.map((item, index) => 
                             <li key={index} onClick={() => this.deleteItem(index)}>{item.nome}, {item.data_inicio}, {item.data_fim}</li>
                        )}

                        <br />
                        <input type="submit" name="btnSend" value="Adicionar Evento"/>

                    </form>
                </center>
            </div>
        );
    }
}

export default Calendario;

//listar o novo evento antes de incluir no calendário, se user confirmar, envia para o calendario
//criar um component para passar as informações do this pro calendario

//var vetItens = this.state.eventos.concat(novoItem)
//this.setState({eventos: vetItens}) 


//<label for="data_inicio">Data Início: </label>
//<input type="date" ref="data-inicio" min="2020-01-01" max="2099-12-31"></input>

//<label for="data_inicio">Data Fim: </label>
//<input type="date" ref="data-inicio" min="2020-01-01" max="2099-12-31"></input>
                        
//{this.state.eventos.map((item, index) => {
//    return <li key={index} onClick={() => this.deleteItem(index)}>{item}</li>
//})}


//https://www.robinwieruch.de/react-state-array-add-update-remove

//FAZER ISSO... tlvz resolva o problema de estar exibindo três linhas com tarefa, dtInicio e dtFim


//this.state = {

//    eventos: [

//        {

      //      'nome': '',

     //       'data_inicio': '',

      //      'data_fim': '',

    //    },

   // ],

//};

