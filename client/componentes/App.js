import React from 'react';
import estilos from'./App.scss';
import {modal} from 'cmp/base/modal'
import {menu} from 'cmp/base/menu'
import {Registro, pub, sub} from 'cl/registro';
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)
        this.handleimg = this.handleimg.bind(this)
    }
    componentDidMount(){
        pub({op: 'ini',
            gestor: '123',
            gestores: [{t: 'a', v: 'a'},{t: 'bbbbbbbbbbbbbbb', v: '123'}]
        })
    }
    handle(e){
        /*const diag = <div style={{width: '500px'}}>
            <h1>Se va a enviar el formulario al servidor</h1>
            <div style={{display: 'flex'}}>
                <button onClick={()=>{console.log('hola');this.cerrar()}}>Aceptar</button>
                <button onClick={()=>this.cerrar()}>Cancelar</button>
            </div>
        </div>
       this.cerrar = modal(diag)*/
       pub({op: 'ocultar'})
    }
    handleimg(e){
        pub({op: 'mostrar'})
        /*menu([
                {t: 'opción 1', cb: () => console.log('opcion1')},
                {t: 'opción 2', cb: () => console.log('opcion2')}
            ], e
        )*/
    }
    render() {
        return (
        	<div style={{height: '100%', display: 'flex'/*, alignItems: 'stretch'*/}}>
        		<section style={{width: '30%'}} className={estilos.panel}>
                    ghcjh
                </section>
                <section style={{width: '70%'}} className={estilos.panel}>
                    <a onClick={this.handle}>Ocultar</a><br/>
                    <a onClick={this.handleimg}>Mostrar</a><br/>
        		</section>
                <Registro/>
        	</div>
        );
    }
}