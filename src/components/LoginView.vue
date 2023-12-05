<template>
    <div class="mh-100 d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="form-container">
            <h3 class="text-center">Login</h3>
            <div class="text-center">
                <i class="bi bi-person-circle login-icon"></i>
            </div>
            <form @submit.prevent>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model="email" id="email">
                </div>
                <div class="mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" v-model="password" id="password">
                </div>
                <div class="mt-4">
                    <button class="btn btn-primary form-control" @click="login">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000'

export default {
    data() {
        return {
            email: 'waitressA@email.com',
            password: 'test'
        }
    },
    mounted() {
        // this.getUser()
    },
    methods: {
        async getUser() {
            // const data = await axios.get('/user')
            // console.log(data)
        },
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                console.log(response)
                axios.post('/api/login', {
                    email: this.email,
                    password: this.password
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            })
        }
    }
}
</script>