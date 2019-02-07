opMenu: boolean = true;

function toggle(){
    var list = document.getElementById('list');
    if(this.opMenu){
        list.className = "header__list-m"
        this.opMenu = false;
    } else {
        list.className = "header__list";
        this.opMenu = true;
    }
}