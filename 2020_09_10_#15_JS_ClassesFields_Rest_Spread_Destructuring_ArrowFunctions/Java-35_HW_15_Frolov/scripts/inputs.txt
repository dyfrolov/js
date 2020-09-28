class Inputs{
    constructor(elParent, fnOnClick){
        this.elParent=elParent;

        this.inputs = document.createElement('div');
        this.inputs.classList.add('inputs');
        this.inputs.innerHTML='<h1>Contacts</h1>';

        this.inpName = document.createElement('input');
        this.inpName.type='text';
        this.inpName.id='name';
        this.inpName.placeholder='name';

        this.inpPhone = document.createElement('input');
        this.inpPhone.type='tel';
        this.inpPhone.id='phone';
        this.inpPhone.placeholder='phone';

        this.inpEmail = document.createElement('input');
        this.inpEmail.type='email';
        this.inpEmail.id='email';
        this.inpEmail.placeholder='email';

        this.inpCity = document.createElement('input');
        this.inpCity.type='text';
        this.inpCity.id='city';
        this.inpCity.placeholder='city';

        this.btnAdd = document.createElement('button');
        this.btnAdd.id='btnAdd';
        this.btnAdd.innerHTML='Add';

        this.btnAdd.onclick = ()=>{
            if (!this.inpName.value && !this.inpPhone.value){
                return;
            }
            fnOnClick( {
                name:this.inpName.value,
                phone:this.inpPhone.value,
                email:this.inpEmail.value,
                city:this.inpCity.value} );
            }
        this.elParent.append(this.inputs);
        this.inputs.append(this.inpName,this.inpPhone,this.inpEmail,this.inpCity,this.btnAdd);
    }
}
