class Login{
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;  
        this.form.addEventListener('submit', event => {
            e.preventDefault();
            self.fields.forEach(field => {
                const input = document.querySelector(`[name="${field}"]`);      
                console.log(input.value);
                    // if(input.value.trim() === '') {
                    //     input.classList.add('error');
                    // }                else {
                    //     input.classList.remove('error');
                    // }          
            });
        });
    }
}

const form = document.querySelector('.login-form');
if(form) {
    const fields = ["email", "password"];
    const validator = new Login(form, fields);
}