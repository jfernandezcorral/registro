import React from 'react'
import estilos from './Calendario.scss'
import cn from 'classnames/bind'
const cx = cn.bind(estilos)
const Calendario = ({gestor='', gestores=[], onChangeGestor=(e)=>console.log(e)}) => {
	return (
		<div>
			<div className={estilos.cab}>
				<span className={estilos.ico}/>
				<span>CALENDARIO</span>
			</div>
			<div className={estilos.cuerpo}>
				<select value={gestor} onChange={onChangeGestor}>
					{gestores.map( g =>
						<option key={g.v} value={g.v}>{g.t}</option>
					)}
				</select>
			</div>
		</div>

	)
}
export default Calendario