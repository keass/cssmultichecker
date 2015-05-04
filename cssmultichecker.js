
/*
 * 마크업 문서 내 stylesheet 를 이름 : 주소로 분류
 * >>
 * */

/*
북마클릿 부분
javascript: (function () {var jsCode = document.createElement('script');jsCode.setAttribute('src', 'http://localhost/calendar_git/src/js/cssmultichecker.js');document.body.appendChild(jsCode);}());
*/


multicss = {
    csss:{},
    css_name_collector:function(){
        var links = document.querySelectorAll('Link');
        for (var i =0; i<links.length; i++) {
            if (links[i].getAttribute('rel') === "stylesheet"){
                var data = links[i].getAttribute('href');
                var regex = /(.*\/)/g;
                property = [data.replace(regex,"")];
                this.csss[property] = data;
            }
        }
        return this.csss;
    },
    createBtn:function(){
        var btn_wrapper = document.createElement('div');
        var btn_array = [];
        document.body.appendChild(btn_wrapper);
        btn_wrapper.setAttribute('style','padding:5px; position:fixed; top:10px; left:10px; background:rgba(0,0,0,0.8)');

            for (property in this.csss){
                btn_array[property] = document.createElement('a');
                btn_array[property].innerText = property;
                btn_array[property].setAttribute('href',this.csss[property]);
                btn_wrapper.appendChild(btn_array[property]);
        }
    }
};
//console.log(multicss.css_name_collector());
//console.log(multicss.createBtn());
multicss.css_name_collector();
multicss.createBtn();
