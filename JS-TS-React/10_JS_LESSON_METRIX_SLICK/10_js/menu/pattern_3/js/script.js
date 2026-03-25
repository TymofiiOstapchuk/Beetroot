




function initMobile() {
    console.log("is-mobile");

}


function initDesktop() {
    console.log("is-desktop");
}


ssm.addState({
    id: 'tablet',
    query: '(max-width: 900px)',
    onEnter: function(){
        initMobile();
    }
});

ssm.addState({
    id: 'desktop',
    query: '(min-width: 900px)',
    onEnter: function(){
        initDesktop();
    }
});
