<script >
 import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  // async mounted() {},
  methods: {
    async onSubmit(e) {
                        e.preventDefault();
                        try{
                                const res = await fetch('http://localhost:3001/auth/login',{
                                        method: 'POST',
                                        headers: {
                                                "Content-type": "application/json",
                                                Origin: "http://localhost:3000",
                                        },
                                        body: JSON.stringify({
                                                email: this.email,
                                                password: this.password,
                                        }),
                                });
                                 const result = await res.json();
                                 if (!result.success) {
                                        alert(result.error);
                                        return;
                                }
                        }
                        catch(err){
                                console.log(err);
                        }
                        this.$router.push({ name: "home" });
                },
  },
};
</script>

<template>
  <main>
    <div style="background-color: black;">
    <div style=" display: flex; justify-content: center;">
      <div style="max-width: 500px">
        <form @submit="onSubmit" method="post">
          <div class="imgcontainer">
            <img
              src="@/assets/image/photo.jpg"
              alt="Avatar"
              class="avatar"
            />
          </div>

          <div class="container">
            <label for="email"><b>Email</b></label>
            <input
              v-model="email"
              type="text"
              placeholder="Enter email"
              name="email"
              required
            />

            <label for="psw"><b>Password</b></label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <button type="submit" class="loginbtn">Log in</button>
          </div>

          <div
            class="container"
            style="
              background-color: #f1f1f1;
              display: flex;
              justify-content: end;
            "
          >
            <!-- <span class="psw">Forgot </span> -->
            <RouterLink to="/register">Create your new account here.</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
  </main>
</template>

<style scoped>
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color:aqua;
  color: white;
  padding: 14px 20px;
  border-radius: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.8;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
  .loginbtn {
    width: 100%	;
  }
}
</style>