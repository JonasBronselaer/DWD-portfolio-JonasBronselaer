document.getElementById('login__form').setAttribute('novalidate', 'novalidate');
            document.getElementById('login__form').addEventListener('submit', function(e){
                e.preventDefault();
                e.stopPropagation();

                let isValid = true;

                let inpUname = document.getElementById('inpUname');
                let errUname = document.getElementById('errUname');
                let inpPass = document.getElementById('inpPass');
                let errPass = document.getElementById('errPass');

                errUname.style.display = 'none';
                errPass.style.display = 'none';

                if(inpUname.value == ''){
                    isValid = false;
                    errUname.innerHTML = 'Gelieve een username in te vullen!';
                    errUname.style.display = 'block';
                }

                if(inpPass.value == ''){
                    isValid = false;
                    errPass.innerHTML = 'Gelieve een password in te vullen!';
                    errPass.style.display = 'block';
                }
        });