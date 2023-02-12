import{useState, useEffect} from "react";
import API from "../../api/api";


    

function Cadastro(){
    const [categoria, setCategorias] = useState([
        {_id: 0, name:"Carregando Categoria"}
    ]);

    async function loadCategories(){
        const categoriasDoBanco = await API.category.list()
        const categoriasCarregadas = await categoriasDoBanco.json()
        console.log("carregou");
        setCategorias(categoriasCarregadas)
    }
    useEffect(function(){
        loadCategories();

    },[])

    return(
        <form className="container">
            <h1>Cadastro de Items</h1>
            <div className="form-grupo mt-2">
                <label>Nome:</label>
                <input className="form-control" nome="nome" type="text"/>
            </div>

            <div className="form-grupo mt-2">
                <label>URL da imagem</label>
                <input className="form-control" nome="url" type="url"/>
            </div>

            <div className="form-grupo mt-2">
                <select nome="categoria">
                    {categoria.map(
                        el => <option key={el._id}>{el.name}</option>
                    )}
                </select>
            </div>
            <div className="form-grupo mt-3 ">
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </div>

        </form>
    );

}

export default Cadastro
