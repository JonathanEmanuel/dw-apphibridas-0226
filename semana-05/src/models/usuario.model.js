import fs from 'fs/promises';

class Usuario {
    usuarios = [];
    constructor(){
        this.usuarios = [];
        this.ruta = './data/usuarios.json';
        this.leerJSON();
    }

    async leerJSON(){
        const data = await fs.readFile( this.ruta, 'utf-8');
        this.usuarios = data ? JSON.parse(data) : [];
    }
    async guardarJSON(){
        const datos = JSON.stringify( this.usuarios, null, 2);
        await fs.writeFile( this.ruta, datos );
    }
    async find(){
        await this.leerJSON();
        return this.usuarios;
    }
    async create( nombre, email, clave){
        const _id = crypto.randomUUID();
        const usuario = {
            _id,
            nombre,
            email,
            clave
        };
        this.usuarios.push(usuario);
        const datos = JSON.stringify( this.usuarios, null, 2);
        await fs.writeFile( this.ruta, datos );
        return _id;
    }
    async findById(_id){
        const data = await fs.readFile( this.ruta, 'utf-8');
        this.usuarios = JSON.parse(data);
        const usuario = this.usuarios.find( u => u._id == _id);
        return usuario ? usuario : null;
    }
    async findByIdAndDelete(_id){
        await  this.leerJSON();
        const index = this.usuarios.findIndex( u => u._id == _id);
        console.log({index})
        if( index == -1){
            return false;
        } 
        this.usuarios.splice(index, 1);
        await this.guardarJSON();
        return true;
    }
}

export default Usuario;