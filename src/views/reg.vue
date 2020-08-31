<template>
    <div>
        <h1>注册</h1>
        用户名：<input type="text" v-model='username'><br>
        密码：<input type="password" v-model='password'><br>
        确认密码：<input type="password" v-model='password2'><br>
        <button @touchstart='confirm'>注册</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            password2:''
        }
    },
    methods:{
        confirm(){
            let data = {
                username:this.username,
                password:this.password,
                password2:this.password2
            }
            this.$http.fetchReg(data).then(()=>{
                this.$router.push('/login')
            })
        }
    }

}
</script>
<style lang="scss" scoped>

</style>>