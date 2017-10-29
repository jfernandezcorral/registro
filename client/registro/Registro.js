import React from 'react'
import estilos from'./Registro.scss'
import PubSub from 'pubsub-js'
import cn from 'classnames/bind'
const cx = cn.bind(estilos)
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
            else if (data.op == 'ocultar'){
                this.setState({mostrar: false})
            }
        }
    }
    componentDidMount(){
        PubSub.subscribe('Entrada',this.onMsg)
    }
    render() {
        const {simple} = this.props
        const {mostrar} = this.state;
        const style = mostrar? {transform: 'translateX(0%)'}: {transform: 'translateX(100%)'}
        return (
        	<div style={simple? {}: style} className={cx({root: !simple, rootSimple: simple})}>
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