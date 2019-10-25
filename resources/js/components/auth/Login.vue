<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form method="POST" action="#" @submit.prevent="login">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    :class="{'is-invalid' : isError}"
                    name="email"
                    v-model="email"
                    autocomplete="email"
                    autofocus
                  />
                  <span
                    v-for="error in errors"
                    :class="{'invalid-feedback' : isError}"
                    role="alert"
                  >
                    <strong>{{error}}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    v-model="password"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="remember"
                      v-model="remember"
                      id="remember"
                    />

                    <label class="form-check-label" for="remember">Remember Me</label>
                  </div>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>

                  <a class="btn btn-link" href>Forgot Your Password?</a>
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
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      remember: "",
      errors: []
    };
  },

  computed: {
    isError() {
      return this.errors.length > 0;
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          username: this.email,
          password: this.password,
          remember: this.remember
        })
        .then(res => {
          this.$router.push({ name: "app" });
        })
        .catch(err => {
          this.errors.push(err.response.data);
        });
      this.errors = [];
    }
  }
};
</script>