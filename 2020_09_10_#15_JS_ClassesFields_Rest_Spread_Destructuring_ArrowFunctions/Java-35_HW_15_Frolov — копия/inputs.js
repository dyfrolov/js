class InputFields{
    constructor(list){
    this.list = list;
    this.inputs = document.querySelector('.inputs');
    this.inpName = this.inputs.querySelector('#name');
    this.inpPhone = this.inputs.querySelector('#phone');
    this.inpEmail = this.inputs.querySelector('#email');
    this.inpCity = this.inputs.querySelector('#city');
    this.btnAdd = document.querySelector('#btnAdd');
    this.btnAdd.onclick = ()=>{
            if (!this.inpName.value && !this.inpPhone.value){
                return;
            }
            this.list.addNew( {
                name:this.inpName.value,
                phone:this.inpPhone.value,
                email:this.inpEmail.value,
                city:this.inpCity.value} );
            }
    }
}

