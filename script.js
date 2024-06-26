console.log('its workning')

let theme= localStorage.getItem('theme')

if(theme==null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themedots=document.getElementsByClassName('theme-dot')

for(var i=0; themedots.length >i; i++){
    themedots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode=='light') {
        document.getElementById('theme-style').href='style.css'
    }

    if(mode=='blue') {
        document.getElementById('theme-style').href='blue.css'
    }

    if(mode=='green') {
        document.getElementById('theme-style').href='green.css'
    }

    if(mode=='purple') {
        document.getElementById('theme-style').href='purple.css'
    }

    localStorage.setItem('theme', mode)
}
