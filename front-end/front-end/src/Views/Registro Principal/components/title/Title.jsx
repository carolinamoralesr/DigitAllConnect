import './estiloregprin.css'

function Title({titlecontent}) {
    return (
        <div className="tituloregistroprin">
            <div className="container text-center my-1" id='texto-titulo'>
                <h1 className="text-center texto-titulo">{titlecontent}</h1>
            </div>
        </div>
        
    );
}

export default Title