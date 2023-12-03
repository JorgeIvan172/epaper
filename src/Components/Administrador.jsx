import Table_P from './Tables/Table_Products';
import Table_U from './Tables/Table_Users';
import Table_C from './Tables/Tables_Catego';
import Title1 from './Title';
import JsonProduct from './Tables/JsonProducts'
//<Table_P />

function Admin(){
    return(
        <>
        <Title1 text="Productos En Stock" />
        <JsonProduct />
        
        <Title1 text="Usuarios" />
        <Table_U />

        <Title1 text="Categorias" />
        <Table_C />
        </>
    )
}


export default Admin;