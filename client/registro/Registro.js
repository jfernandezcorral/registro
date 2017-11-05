import React from 'react'
import Calendario from'./Calendario'
import estilos from'./Registro.scss'
import PubSub from 'pubsub-js'
import cn from 'classnames/bind'
const cx = cn.bind(estilos)
export class Registro extends React.Component {
    constructor(props) {
        super(props)
        this.onMsg = this.onMsg.bind(this)
        this.onChangeGestor = this.onChangeGestor.bind(this)
        this.state = {
            mostrar: false,
            gestor: '',
            gestores: []
        }
        //this.handleimg = this.handleimg.bind(this)
    }
    onChangeGestor(e){
        this.setState({gestor: e.target.value})
    }
    onMsg(msg, data){
        if (msg=='Entrada'){
            if (data.op == 'mostrar'){
                this.setState({mostrar: true})
            }
            else if (data.op == 'ocultar'){
                this.setState({mostrar: false})
            }
            else if ((data.op) == 'ini'){
                this.setState({gestor: data.gestor, gestores: data.gestores})
            }
        }
    }
    componentDidMount(){
        PubSub.subscribe('Entrada',this.onMsg)
    }
    render() {
        const {simple} = this.props
        const {mostrar, gestor, gestores} = this.state
        const style = mostrar? {transform: 'translateX(0%)'}: {transform: 'translateX(100%)'}
        return (
        	<div style={simple? {}: style} className={cx({root: !simple, rootSimple: simple})}>
        		<div style={{display: 'flex', flexDirection: 'column', width: '33%', backgroundColor: 'silver'}}>
                    <Calendario gestor={gestor} gestores={gestores} onChangeGestor={this.onChangeGestor}/>
                    <div style={{flexGrow: '1',backgroundColor: '#f83'}}>
                        cal<br />cal<br />cal<br />cal<br />cal<br />
                    </div>
                    <div style={{backgroundColor: 'green'}}>
                        cal
                    </div>
                </div>
                <div style={{flexGrow: '1', width: '66%', backgroundColor: '#ff0'}}>
                    reg
                </div>
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