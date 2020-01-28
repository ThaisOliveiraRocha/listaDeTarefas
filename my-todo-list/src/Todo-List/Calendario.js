import React, {Component} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

class Calendario extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

            this.state = {eventos: {
                'nome': '',
                'hora_inic': '',
                'min_inic': '',
                'hora_fim': '',
                'min_fim': ''
            }
        }
    }

    onSubmit(event){
        event.preventDefault();
        var novoItem = {
            'nome': this.refs.tarefa.value,
            'hora_inic': this.refs.hora_inicio.value,
            'min_inic': this.refs.minuto_inicio.value,
            'hora_fim': this.refs.hora_fim.value,
            'min_fim': this.refs.minuto_fim.value
        }
        
        if(novoItem) {          
            console.log(novoItem)
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
                    <h1>Adicionar eventos ao calendário</h1>

                    <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                        
                        <label for="nova_tarefa">Nome da tarefa: </label>
                            <input type="text" ref="tarefa" placeholder="Digite a tarefa aqui"></input>
                        <br />
                        
                        
                        <label for="hora_inicio">Hora Início: </label>
                            <input type="number" ref="hora_inicio" min="1" max="12"></input>:<input type="number" ref="minuto_inicio" min="00" max="59"></input>
                        <br />
                        
                        <label for="hora_fim">Hora Fim: </label>
                            <input type="number" ref="hora_fim" min="1" max="12"></input>:<input type="number" ref="minuto_fim" min="00" max="59"></input>
                        <br />

                        <input type="submit" name="btnAdd" value="Continuar"/>
                        <br /><br />

                        

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