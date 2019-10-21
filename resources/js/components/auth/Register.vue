<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form method="POST" action="#" @submit.prevent="register">

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text"
                                 class="form-control  is-invalid "
                                  name="name" value="" 
                                  v-model="name"
                                   autocomplete="name" autofocus>

                                
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" 
                                class="form-control  is-invalid "
                                 name="email" value="" 
                                 v-model="email"
                                  autocomplete="email">

                                
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password"
                                 class="form-control  is-invalid "
                                  name="password" 
                                  v-model="password"
                                   autocomplete="new-password">

                                
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password"
                                 class="form-control" 
                                 name="password_confirmation"  
                                 v-model="password_confirmation"
                                 autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'register',
    data(){
        return {
            name:'',
            email:'',
            password:'',
            password_confirmation:''
        }
    },
    methods: {
        register(){
            this.$store.dispatch('register',{
                name:this.name,
                email:this.email,
                password:this.password,
                password_confirmation:this.password_confirmation,
            })
            .then(res=>{
                this.$router.push({ name:'login' });
            });
        }
    },
    
}
</script>