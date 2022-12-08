import './Contacto.css'

const Contacto = () => {
    return (
    <div className='form-container'>
        <form action="#">
            <div className="form-input-container">
                <label className="form-label" htmlFor="name">Nombre</label>
                <input type="text" id="name"/>
            </div>
            <div className="form-input-container">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email"/>   
            </div>     
            <div className="form-input-container">
                <label className="form-label" htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="4"></textarea>
            </div>    
            <div className="form-input-container">
                <button type='submit'>Enviar</button>
                <button type='reset'>Borrar</button>
            </div>
        </form>
    </div>
    )
}

export default Contacto;