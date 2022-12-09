

!(function (window, byel) {

    byel = {

        
        isNull : (target) => {
            let result = false
            try {
                if(
                    target !== undefined &&
                    target !== 'undefined' &&
                    target !== null &&
                    target !== 'null' && 
                    target !== NaN &&
                    target !== 'NaN'
                ) {
                    result = true
                }
            } catch (error) {
                result = false
            }
            return result
        },

        ajax : (option, fn) => {



            const xhr = new XMLHttpRequest();

            // console.log(option)
            if(!byel.isNull(option.url)) {
                console.error('url은 필수 입력사항 입니다.') 
                return
            } 
            
            if(!byel.isNull(option.method)) option.method = 'GET'
            if(!byel.isNull(option.contentType)) option.contentType = 'application/x-www-form-urlencoded; charset=utf-8'
            
            

            
            //캐시 옵션 시간을 주면서 해결하기


            // xhr 셋팅
            xhr.open(option.method, option.url, option.async)

            // header setting
            xhr.setRequestHeader('content-type', 'application/json');
            // xhr.setRequestHeader('content-type', 'text/plain');
            // xhr.setRequestHeader('content-type', 'multipart/form-data');            
            

            // 비동기 처리를 위한 state
            xhr.readyState
            //xhr 콜백 함수
            xhr.onreadystatechange = (data) => {

                // console.log('콜백함수')
                // console.log('data : ', data)

                // console.log("[status] : " + xhr.status);

                // console.log("[response] : " + "[success]");    				   				    				
                // console.log("[response] : " + xhr.responseText);
                // console.log(xhr.readyState)

                if (xhr.status === 200) {
                    // console.log('성공')
                } else {
                    // console.log('실패')
                }

                fn(xhr.responseText)

                //함수를 인자로 받고 데이터는 json으로 통쨰로 주고 받는다
                // 무조건 통쨰로 주고 받는다

            }

            //xhr 보내기
            // xhr.send(null)

            xhr.onload = (data) => {
                // console.log(data)
            }

            // console.log(xhr.response)




            // fn(data)
        },


    }



    window.$ = byel

})(window);
