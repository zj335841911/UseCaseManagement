<template>
    <div class="update-password">
        <div class="password-item">
            <div class="password-lab">{{ $t('components.appUpdatePassword.oldPwd') }}</div>
            <div class="password-input"><Input type="password" v-model="oldPwd" autocomplete="new-password" @input="oldPwdInput" @on-blur="oldPwdVaild" /></div>
            <span class="password-strength"></span>
        </div>
        <div class="password-item">
            <div class="password-lab">{{ $t('components.appUpdatePassword.newPwd') }}</div>
            <div class="password-input"><Input type="password" v-model="newPwd" @input="newPwdInput" @on-blur="newPwdVaild" /></div>
            <span class="password-strength">{{this.passwordStrength}}</span>
        </div>
        <div class="password-item">
            <div class="password-lab">{{ $t('components.appUpdatePassword.confirmPwd') }}</div>
            <div class="password-input"><Input type="password" v-model="confirmPwd" :disabled="!newPwd" @input="confirmInput" @on-blur="confirmVaild" /></div>
            <span class="password-strength"></span>
        </div>
        <div class="password-item">
            <Button class="password-btn" type="primary" long :disabled="!oldPwd || !newPwd || !confirmPwd || disUpdate || newPwdErrTips != ''" @click="updatePwd">{{
                $t('components.appUpdatePassword.sure')
            }}</Button>
        </div>
        <div v-if="oldPwdErr" class="password-tips">{{ $t('components.appUpdatePassword.oldPwdErr') }}</div>
        <div v-if="newPwdErrTips" class="password-tips">{{ newPwdErrTips }}</div>
        <div v-if="confirmPwdErr" class="password-tips">{{ $t('components.appUpdatePassword.confirmPwdErr') }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import {AppModal, Http} from '@/utils';
import EntityService from '@/service/entity-service';
@Component({})
export default class AppUpdatePassword extends Vue {
    /**
     * 原密码
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public oldPwd: string = '';

    /**
     * 新密码
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public newPwd: string = '';

    /**
     * 确认密码
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public confirmPwd: string = '';

    /**
     * 是否能禁用确认修改
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public disUpdate: boolean = true;

    /**
     * 新密码强度
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public passwordStrength: string = '';

    /**
     * 原密码是否报错
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public oldPwdErr: boolean = false;

    /**
     * 确认密码是否报错
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public confirmPwdErr: boolean = false;

    /**
     * 新密码与原密码是否相同
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public newPwdErrTips: String = '';

    /**
     * 校验输入的原密码是否为空
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public oldPwdVaild() {
        if (!this.oldPwd) {
            this.oldPwdErr = true;
        }
    }

    /**
     * 原密码值改变不显示相应错误提示
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public oldPwdInput() {
        this.oldPwdErr = false;
        if (this.newPwd) {
            this.newPwdVaild();
        }
    }

    /**
     * 校验输入的新密码
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public newPwdVaild() {
        if (!this.newPwd) {
            this.newPwdErrTips = this.$t('components.appUpdatePassword.newPwdErr') as String;
        } else if (this.newPwd === this.oldPwd) {
            this.newPwdErrTips = '新密码与原密码相同！';
        } else if (this.newPwd === this.$store.getters.getAppData().context.srfloginname) {
            this.newPwdErrTips = '新密码与账号名相同！';
        } else if (this.newPwd.length < 6) {
            this.newPwdErrTips = '新密码长度不能小于6位！';
        } else if (/^([a-z]*)([A-Z]*)([0-9]*)([^a-zA-Z0-9]*)$/.test(this.newPwd)) {
            this.newPwdErrTips = '新密码不能只有一种字符！';
        } else {
            this.newPwdErrTips = '';
        }
    }

    /**
     * 新密码值改变绑定事件
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public newPwdInput() {
        if (this.newPwdErrTips) {
            this.newPwdVaild();
        }
        this.confirmPwd = '';
        this.disUpdate = true;
        this.confirmPwdErr = false;
        this.getPasswordStrength();
    }

    /**
     * 校验确认密码与新密码是否一致
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public confirmVaild() {
        if (this.confirmPwd) {
            this.confirmPwdErr = this.disUpdate;
        }
    }

    /**
     * 确认密码值变化时校验确认密码与新密码是否一致
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public confirmInput() {
        if (this.newPwd && this.confirmPwd) {
            if (this.confirmPwd !== this.newPwd) {
                this.disUpdate = true;
            } else {
                this.disUpdate = false;
            }
        }
        if (this.confirmPwdErr) {
            this.confirmPwdErr = this.disUpdate;
        }
    }

    /**
     * 实体服务对象
     *
     * @protected
     * @type {EntityService}
     * @memberof AppUpdatePassword
     */
    protected entityService: EntityService = new EntityService();

    /**
     * 修改密码
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public updatePwd() {
        const post: Promise<any> = Http.getInstance().post(`/v7/changepwd`,{oldPwd:this.oldPwd,newPwd:this.newPwd}, true);
        post.then((response: any) => {
            if (response && response.status === 200) {
                this.$emit('close');
                const get: Promise<any> = this.$http.get('/v7/logout');
                get.then((response: any) => {
                    if (response && response.status === 200) {
                        this.$appService.logout();
                    }
                }).catch((error: any) => {
                    console.error(error);
                });
            }
        }).catch((error: any) => {
            this.$Notice.error({
                title: "用户原密码错误",
                duration: 3,
            });
            console.error(error);
        });
    }

    /**
     * 获取密码强度(采用打分制）
     *
     * @public
     * @memberof AppUpdatePassword
     */
    public getPasswordStrength() {
        if (this.newPwd.length === 0) {
            this.passwordStrength = '';
            return;
        }
        let score = 0;    // 分数
        let upperCh = 0;  // 大写字母数量
        let lowCh = 0;    // 小写字母数量
        let digit = 0;    // 数字数量
        let symbol = 0;   // 特殊字符数量
        let bonus = 0;    // 奖励分数
        if (this.newPwd.length <= 4) {
            score += 5;
        } else if (this.newPwd.length <= 7) {
            score += 10;
        } else {
            score += 25;
        }
        for (let ch of [...this.newPwd]) {
            if (/^[a-z]$/.test(ch)) {
                lowCh++;
            } else if (/^[A-Z]$/.test(ch)) {
                upperCh++;
            } else if (/^[0-9]$/.test(ch)) {
                digit++;
            } else {
                symbol++;
            }
        }
        if (lowCh && upperCh) {
            score += 20;
        } else if ((lowCh && !upperCh) || (!lowCh && upperCh)) {
            score += 10;
        }
        if (digit >= 3) {
            score += 20;
        } else if (digit >= 1) {
            score += 10;
        }
        if (symbol === 1) {
            score += 10;
        } else if (symbol > 1) {
            score += 25;
        }
        if ((lowCh + upperCh) && digit) {
            if (symbol) {
                bonus = 5;
            } else {
                bonus = 2;
            }
        }
        if (lowCh && upperCh && digit && symbol) {
            bonus = 10;
        }
        score += bonus;
        if (score >= 90) {
            this.passwordStrength = '非常安全';
        } else if (score >= 80) {
            this.passwordStrength = '安全';
        } else if (score >= 70) {
            this.passwordStrength = '非常强';
        } else if (score >= 60) {
            this.passwordStrength = '强';
        } else if (score >= 50) {
            this.passwordStrength = '一般';
        } else if (score >= 30) {
            this.passwordStrength = '弱';
        } else if (score >= 0) {
            this.passwordStrength = '非常弱';
        }
    }

}
</script>

<style lang="less">
@import './app-update-password.less';
</style>
