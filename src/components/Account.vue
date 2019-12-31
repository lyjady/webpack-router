<template>
    <div>
        <h2>这是Account组件</h2>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped>
    /* 如果在style标签被写样式那么全部的组件都会生效  */
    /* 给style属性加上 scoped只让样式在当前组件中生效 */
    /* 如果想要使用less scss语法 在标签上加上lang属性里面写上想要的语法 */
    /* 给父组件添加样式子组件一样会生效 */
    /* 加上了scoped之后会给组件加上一个vue自定义的属性,之后用css的属性选择器去添加样式 */
    h1, h2, h3 {
        color: red;
    }

    div {
        font-style: italic;
    }
</style>