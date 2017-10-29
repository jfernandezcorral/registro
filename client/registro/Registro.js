import React from 'react'
import estilos from'./Registro.scss'
import PubSub from 'pubsub-js'
export class Registro extends React.Component {
    constructor(props) {
        super(props)
        this.onMsg = this.onMsg.bind(this)
        this.state = {
            mostrar: false
        }
        //this.handleimg = this.handleimg.bind(this)
    }
    onMsg(msg, data){
        if (msg=='Entrada'){
            if (data.op == 'mostrar'){
                this.setState({mostrar: true})
            }
            if (data.op == 'ocultar'){
                this.setState({mostrar: false})
            }
        }
    }
    componentDidMount(){
        PubSub.subscribe('Entrada',this.onMsg)
    }
    render() {
        let {mostrar} = this.state;
        const style = mostrar? {transform: 'translateX(0%)'}: {transform: 'translateX(100%)'}
        return (
        	<div style={style} className={estilos.root}>
        		dsf
        	</div>
        );
    }
}
let pub = (msg)=>{
    PubSub.publish('Entrada', msg)
}
let sub = (cb)=>{
    PubSub.subscribe('Salida', cb)
}
export {pub, sub}