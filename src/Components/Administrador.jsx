import Table_P from './Tables/Table_Products';
import Table_U from './Tables/Table_Users';
import Title1 from './Title';


function Admin(){
    return(
        <>
        <Title1 text="Productos En Stock" />
        <Table_P />
        <Title1 text="Usuarios" />
        <Table_U />
        </>
    )
}


export default Admin;