<template src="./start-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StartFormEditFormBase } from './start-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StartFormEditForm
 * @extends {StartFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StartFormEditForm extends StartFormEditFormBase {

    //防止弹窗跳出两次
    public  saveCount = 0;

    /**
     * 保存
     *
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo]
     * @param {boolean} [ifStateNext=true] formState是否下发通知
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public async save(opt: any = {}, showResultInfo?: boolean, ifStateNext: boolean = true): Promise<any> {
        const  open =  async ()=>{
            return await  new Promise((resolve: any, reject: any) => {
                this.$Modal.confirm({
                    title: '警告',
                    content: '"预计剩余"为0，确认将任务状态改为已完成吗？',
                    onOk: () => {resolve(true);},
                    onCancel: () => {resolve(false);}
                });
            });
        }
        const isGo = this.saveCount > 0 || this.getValues()?.left != 0? true: await  open();
        if(!isGo){
            return;
        }
        this.saveCount ++;
        return new Promise((resolve: any, reject: any) => {
            showResultInfo = showResultInfo === undefined ? true : false;
            if (!this.formValidateStatus()) {
                if (this.errorMessages && this.errorMessages.length > 0) {
                    let descMessage: string = '';
                    this.errorMessages.forEach((message: any) => {
                        descMessage = descMessage + '<p>' + message.error + '<p>';
                    });
                    this.$Notice.error({ title: this.$t('app.commonWords.wrong') as string, desc: descMessage });
                } else {
                    this.$Notice.error({
                        title: this.$t('app.commonWords.wrong') as string,
                        desc: this.$t('app.formpage.valuecheckex') as string,
                    });
                }
                return;
            }
            const arg: any = { ...opt };
            const data = this.getValues();
            Object.assign(arg, this.context);
            Object.assign(arg, data);
            Object.assign(arg, { srfmajortext: data[this.majorMessageField] });
            if (ifStateNext && this.drCount > 0) {
                this.drcounter = this.drCount;
                this.drsaveopt = opt;
                this.formState.next({ type: 'beforesave', data: arg }); //先通知关系界面保存
                this.saveState = resolve;
                return;
            }
            if (this.viewparams && this.viewparams.copymode) {
                data.srfuf = '0';
            }
            const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
            if (!action) {
                let actionName: any = Object.is(data.srfuf, '1') ? 'updateAction' : 'createAction';
                this.$Notice.error({
                    title: this.$t('app.commonWords.wrong') as string,
                    desc: this.$t('app.formpage.notconfig.actionname') as string,
                });
                return;
            }
            Object.assign(arg, { viewparams: this.viewparams });
            if (this.viewparams && this.viewparams.copymode) {
                data.srfuf = '0';
            }
            const post: Promise<any> = Object.is(data.srfuf, '1')
                ? this.service.update(action, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator)
                : this.service.add(action, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
            post.then((response: any) => {
                if (!response.status || response.status !== 200) {
                    if (response.data) {
                        this.$Notice.error({
                            title: this.$t('app.commonWords.wrong') as string,
                            desc: response.data.message,
                        });
                    }
                    return;
                }
                this.viewparams.copymode = false;
                const data = response.data;
                this.onFormLoad(data, 'save');
                this.$emit('save', data);
                this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                this.sendAccMessage(Object.is(data.srfuf, '1') ? 'update' : 'create');
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: data });
                });
                if (showResultInfo) {
                    this.$Notice.success({
                        title: '',
                        desc:
                            (data.srfmajortext ? data.srfmajortext : '') +
                            '&nbsp;' +
                            (this.$t('app.formpage.savesuccess') as string),
                    });
                }
                resolve(response);
            }).catch((response: any) => {
                this.saveCount = 0;
                if (response && response.status && response.data) {
                    if (response.data.errorKey) {
                        if (Object.is(response.data.errorKey, 'versionCheck')) {
                            this.$Modal.confirm({
                                title: this.$t('app.formpage.saveerror') as string,
                                content: this.$t('app.formpage.savecontent') as string,
                                onOk: () => {
                                    this.refresh([]);
                                },
                                onCancel: () => {},
                            });
                        } else if (Object.is(response.data.errorKey, 'DupCheck')) {
                            let errorProp: string = response.data.message.match(/\[[a-zA-Z]*\]/)[0];
                            let name: string = this.service.getNameByProp(errorProp.substr(1, errorProp.length - 2));
                            if (name) {
                                this.$Notice.error({
                                    title: this.$t('app.commonWords.createFailed') as string,
                                    desc:
                                        this.detailsModel[name].caption +
                                        ' : ' +
                                        arg[name] +
                                        (this.$t('app.commonWords.isExist') as string) +
                                        '!',
                                });
                            } else {
                                this.$Notice.error({
                                    title: this.$t('app.commonWords.createFailed') as string,
                                    desc: response.data.message
                                        ? response.data.message
                                        : (this.$t('app.commonWords.sysException') as string),
                                });
                            }
                        } else if (Object.is(response.data.errorKey, 'DuplicateKeyException')) {
                            this.$Notice.error({
                                title: this.$t('app.commonWords.createFailed') as string,
                                desc:
                                    this.detailsModel[this.formKeyItemName].caption +
                                    ' : ' +
                                    arg[this.formKeyItemName] +
                                    (this.$t('app.commonWords.isExist') as string) +
                                    '!',
                            });
                        } else {
                            this.$Notice.error({
                                title: this.$t('app.commonWords.wrong') as string,
                                desc: response.data.message
                                    ? response.data.message
                                    : (this.$t('app.commonWords.sysException') as string),
                            });
                        }
                    } else {
                        this.$Notice.error({
                            title: this.$t('app.commonWords.wrong') as string,
                            desc: response.data.message
                                ? response.data.message
                                : (this.$t('app.commonWords.sysException') as string),
                        });
                        reject(response);
                    }
                    return;
                } else {
                    this.$Notice.error({
                        title: this.$t('app.commonWords.wrong') as string,
                        desc: this.$t('app.commonWords.sysException') as string,
                    });
                    reject(response);
                }
                reject(response);
            });
        });
    }
}
</script>
