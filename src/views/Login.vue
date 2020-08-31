<template>
    <div>
        <h1>登录</h1>
        用户名：<input type="text" v-model='username'><br>
        密码：<input type="password" v-model='password'><br>
        <button @touchstart='confirm'>登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        confirm(){
            let data = {
                username:this.username,
                password:this.password
            }
            this.$http.fetchLogin(data).then(res=>{
                localStorage.setItem('token',res.token)
                this.$router.back()
            })
        }
    }

}
</script>
<style lang="scss" scoped>

</style>>