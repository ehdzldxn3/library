
document.addEventListener('DOMContentLoaded', () => {

    const fn = (data) => {
        console.log('이것은 펑션이다')
        console.log(data)
    }

    document.getElementById('index').addEventListener('click', (e) => {
    
        $.ajax({
            url : 'https://jsonplaceholder.typicode.com/users',
            method : 'POST',
            contentType : 'application/json; charset=utf-8',
            async : false, //true 동기 //false 비동기 기본 true
            cache : false, //false 캐쉬를 초기화하면서 넘김 기본 fasle
        }, fn)
        
    })
    



})