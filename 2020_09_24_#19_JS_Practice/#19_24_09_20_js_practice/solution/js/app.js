let state = {
    token:null,
    page:'home',
    loading:false,
    credentials:{
        email:'',
        password:''
    },
    authSuccess: false,
    authError:null,
    contacts:getFakeContacts(),
    selectedIndex: -1
};

function setState(newState){
    state = {...state, ...newState};
    renderApp();
}

function init(){
    const token = localStorage.getItem('TOKEN');
    if(token){
        setState({token:token, page:'list'});
    }else{
        setState({});
    }
}

init();

function renderApp(){
    const root = document.querySelector('#root');
    root.innerHTML = '';
    root.append(header({
        auth:state.token !== null, 
        isAdd:state.page === 'add',
        onAuthClickHandler:onHeaderAuthClickHandler,
        onLogoutClickHandler:onHeaderLogoutClickHandler,
        onAddClickHandler:onHeaderAddClickHandler
    }));

    root.append(document.createElement('hr'));

    if(state.page === 'home'){
        root.append(home());
    }else if(state.page === 'auth'){
        root.append(auth({
            email:state.credentials.email,
            password:state.credentials.password,
            authError:state.authError,
            auhtSuccess:state.auhtSuccess,
            onLoginClickHandler:onLoginClickHandler,
            onRegClickHandler:onRegClickHandler
        }));
    }else{
        root.append(content({
            contacts:state.contacts,
            selected:state.selectedIndex,
            mode:state.page,
            onContactClickHandler,
            onAddContactClickHandler,
            onUpdateContactClickHandler
        }));
    }

    if(state.loading){
        root.append(loader());
    }
}

function onAddContactClickHandler(contact){
    setState({contacts:[...state.contacts,contact]});
}

function onUpdateContactClickHandler(contact){

}

function onContactClickHandler(index){
    setState({selectedIndex:index, page:'view'});
}

function onHeaderAuthClickHandler(){
    setState({page:'auth'});
}

function onHeaderLogoutClickHandler(){
    localStorage.removeItem('TOKEN');
    setState({
        token:null,
        page:'auth',
        credentials:{email:'',password:''},
        authError:null,
        authSuccess:false
    });
}

function onHeaderAddClickHandler(){
    setState({page:'add',selectedIndex:-1})
}

function onLoginClickHandler(email, password){
    setState({
        loading:true,
        authSuccess:false,
        authError:null,
        credentials:{email,password}
    });
    Api.login(email,password)
    .then(response => {
        localStorage.setItem('TOKEN',response.token);
        setState({
            loading:false,
            auhtSuccess:true,
            token:response.token
        });
        setTimeout(() => setState({page:'list',credentials:null}),500);
    }).catch(error => {
        setState({
            loading:false,
            authError:error.message
        });
    });
}

function onRegClickHandler(email, password){
    setState({
        loading:true,
        authError:null,
        authSuccess:false,
        credentials:{email,password}
    });
    Api.registration(email,password)
    .then(response => {
        localStorage.setItem('TOKEN',response.token);
        setState({
            loading:false,
            auhtSuccess:true,
            token:response.token
        });
        setTimeout(() => setState({page:'list',credentials:null}),500);
    }).catch(error => {
        setState({
            loading:false,
            authError:error.message
        });
    });
}

function getFakeContacts(){
    return [
        {
            id:1234566,
            name:'John',
            lastName:'Doe',
            phone:'123456789',
            email:'john@mail.com',
            address:'New York',
            description:'Best friend'
        },
        {
            id:4567889,
            name:'Jack',
            lastName:'Sparrow',
            phone:'987654321',
            email:'jack@mail.com',
            address:'Caribbean Islands',
            description:'Pirate'
        },
        {
            id:2345678,
            name:'Tony',
            lastName:'Stark',
            phone:'077777777',
            email:'tony@stark.com',
            address:'Los Angeles',
            description:'IronMan'
        }
    ];
}