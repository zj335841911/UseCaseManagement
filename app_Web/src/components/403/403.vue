<template>
    <div class="app-error-view">
        <div class="app-error-container">
            <ion-icon class="err-icon" src="./assets/svg/icon-500.svg" />
            <div class="error-text">
                <div class="error-text1">403 抱歉您无权限访问此内容</div>
                <div class="error-text2">
                    <a @click="logout">退出登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Error404 extends Vue {
    redirect: any = null;

    created() {
        this.redirect = this.$route.params.p403;
        const dom = document.getElementById('app-loading-x');
        if (dom) {
            dom.style.display = 'none';
        }
    }

    gotoIndexView() {
        this.$router.back();
    }

    logout() {
        this.$appService.logout(decodeURIComponent(this.redirect));
    }
}
</script>

<style lang="less">
@import './403.less';
</style>
