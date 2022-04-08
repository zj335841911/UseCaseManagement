import { Prop } from 'vue-property-decorator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControlBase } from './FormControlBase';
import { Environment } from '@/environments/environment';

/**
 * 编辑表单部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {FormControlBase}
 */
export class EditFormControlBase extends FormControlBase {
    /**
     * 表单项校验错误提示信息
     *
     *  @memberof EditFormControlBase
     */
    public errorMessages: Array<any> = [];

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof EditFormControlBase
     */
    protected drCount: number = 0;

    /**
     * 部件行为--submit--工作流
     *
     * @type {string}
     * @memberof FormControlBase
     */
    @Prop()
    public WFSubmitAction!: string;

    /**
     * 部件行为--start--工作流
     *
     * @type {string}
     * @memberof FormControlBase
     */
    @Prop()
    public WFStartAction!: string;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof EditFormControlBase
     */
    @Prop()
    public updateAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof EditFormControlBase
     */
    @Prop()
    public removeAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof EditFormControlBase
     */
    @Prop()
    public createAction!: string;

    /**
     * 主信息属性映射表单项名称
     *
     * @type {string}
     * @memberof EditFormControlBase
     */
    public majorMessageField: string = '';

    /**
     * 表单值变化
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof EditFormControlBase
     */
    public formDataChange({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 部件创建完毕
     *
     * @memberof EditFormControlBase
     */
    public ctrlCreated(): void {
        super.ctrlCreated();
        this.watchData();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe((params: any) => {
                const { tag, action, data } = params;
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('save', action)) {
                    this.save(data, data.showResultInfo);
                }
                if (Object.is('remove', action)) {
                    this.remove(data);
                }
                if (Object.is('saveandexit', action)) {
                    this.saveAndExit(data);
                }
                if (Object.is('saveandnew', action)) {
                    this.saveAndNew(data);
                }
                if (Object.is('removeandexit', action)) {
                    this.removeAndExit(data);
                }
                if (Object.is('panelaction', action)) {
                    this.panelAction(data.action, data.emitAction, data.data);
                }
            });
        }
        this.subDataChange();
        this.accLocalTags.push(
            this.$acc.commandLocal(
                (data: any) => {
                    if (
                        data &&
                        this.data.srfkey === data.srfkey &&
                        (!data.___localUpdateDate || this.data.___localUpdateDate !== data.___localUpdateDate)
                    ) {
                        const appview = this.$store.getters['viewaction/getAppView'](this.viewtag);
                        if (appview && appview.viewdatachange) {
                            this.$Modal.confirm({
                                title: '数据已变更',
                                content: '数据已变更，是否刷新数据?',
                                onOk: () => {
                                    this.refresh([{}]);
                                },
                            });
                        } else {
                            this.refresh([{}]);
                        }
                    }
                },
                'update',
                this.appDeName.toUpperCase()
            )
        );
        this.fillDetailModels();
    }

    /**
     * 订阅数据变更，处理视图状态
     *
     * @protected
     * @memberof EditFormControlBase
     */
    protected subDataChange(): void {
        this.dataChang.pipe(debounceTime(Environment.debounceTime), distinctUntilChanged()).subscribe((data: any) => {
            if (this.autosave) {
                this.autoSave();
            }
            const state = !Object.is(JSON.stringify(this.oldData), JSON.stringify(this.data)) ? true : false;
            this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: state });
        });
    }

    /**
     * 填充表单模型
     *
     * @protected
     * @memberof EditFormControlBase
     */
    protected fillDetailModels(): void {
        for (const key in this.detailsModel) {
            if (this.detailsModel.hasOwnProperty(key)) {
                const item = this.detailsModel[key];
                if (item.detailType === 'GROUPPANEL') {
                    if (item.opts.anchorPoints) {
                        item.opts.anchorPoints.forEach((str: string) => {
                            if (this.detailsModel[str]) {
                                item.anchorPoints[str] = this.detailsModel[str];
                            }
                        });
                    }
                    if (item.opts.controlledItems) {
                        item.opts.controlledItems.forEach((str: string) => {
                            if (this.detailsModel[str]) {
                                item.controlledItems[str] = this.detailsModel[str];
                            }
                        });
                    }
                }
            }
        }
    }

    /**
     * 监控表单属性变化
     *
     * @protected
     * @memberof EditFormControlBase
     */
    protected watchData(): void {
        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                this.$watch(`data.${key}`, (newVal: any, oldVal: any) => {
                    this.formDataChange({ name: key, newVal, oldVal });
                });
            }
        }
    }

    /**
     * 表单加载完成
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof EditFormControlBase
     */
    public onFormLoad(data: any = {}, action: string): void {
        // 更新context的实体主键
        if (data[this.appDeName]) {
            Object.assign(this.context, { [this.appDeName]: data[this.appDeName] });
        }
        // 更新上下文，当前数据视图数据
        this.$appService.contextStore.setContextData(this.context, this.appDeName, { data });
        this.setFormEnableCond(data);
        this.computeButtonState(data);
        this.fillForm(data, action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof EditFormControlBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {}

    /**
     * 值填充
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof FormControlBase
     */
    public fillForm(data: any = {}, action: string): void {
        if (!Object.is(action,'updateFormItem')) {
            this.ignorefieldvaluechange = true;
        }
        Object.keys(data).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = data[name];
            }
        });
        if (Object.is(action, 'loadDraft')) {
            this.createDefault();
        }
        if (Object.is(action, 'load')) {
            this.updateDefault();
        }
        this.$nextTick(() => {
            this.ignorefieldvaluechange = false;
        });
    }

    /**
     * 自动保存
     *
     * @param {*} [opt={}]
     * @returns {void}
     * @memberof EditFormControlBase
     */
    public autoSave(opt: any = {}): void {
        if (!this.formValidateStatus()) {
            return;
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        Object.assign(arg, { srfmajortext: data[this.majorMessageField] });
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
        const post: Promise<any> = this.service.add(
            action,
            JSON.parse(JSON.stringify(this.context)),
            arg,
            this.showBusyIndicator
        );
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

            const data = response.data;
            this.onFormLoad(data, 'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.sendAccMessage(Object.is(data.srfuf, '1') ? 'update' : 'create');
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
        }).catch((response: any) => {
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
                }
                return;
            } else {
                this.$Notice.error({
                    title: this.$t('app.commonWords.wrong') as string,
                    desc: this.$t('app.commonWords.sysException') as string,
                });
            }
        });
    }

    /**
     * 设置表单项错误提示信息
     *
     * @param {*} prop 表单项字段名
     * @param {*} status 校验状态
     * @param {*} error 错误信息
     * @memberof EditFormControlBase
     */
    public formItemValidate(prop: string, status: boolean, error: string) {
        error = error ? error : '';
        if (this.errorMessages && this.errorMessages.length > 0) {
            const index = this.errorMessages.findIndex((errorMessage: any) => Object.is(errorMessage.prop, prop));
            if (index != -1) {
                this.errorMessages[index].error = error;
            } else {
                this.errorMessages.push({ prop: prop, error: error });
            }
        } else {
            this.errorMessages.push({ prop: prop, error: error });
        }
    }

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

    /**
     * 删除
     *
     * @param {Array<any>} [opt=[]]
     * @param {boolean} [showResultInfo]
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public remove(opt: Array<any> = [], showResultInfo?: boolean): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if (!this.removeAction) {
                this.$Notice.error({ title: '错误', desc: `${this.name}表单removeAction参数未配置` });
                return;
            }
            const arg: any = opt[0];
            const _this: any = this;
            Object.assign(arg, { viewparams: this.viewparams });
            this.service
                .delete(_this.removeAction, JSON.parse(JSON.stringify(this.context)), arg, showResultInfo)
                .then((response: any) => {
                    if (response) {
                        const data = response.data;
                        this.$emit('remove', data);
                        this.formState.next({ type: 'remove', data: data });
                        this.data.ismodify = false;
                        this.$Notice.success({
                            title: '',
                            desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;删除成功！',
                        });
                        resolve(response);
                    }
                })
                .catch((error: any) => {
                    const { data: _data } = error;
                    this.$Notice.error({ title: _data.title, desc: _data.message });
                    reject(error);
                });
        });
    }

    /**
     * 工作流启动
     *
     * @param {*} data
     * @param {*} [localdata]
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public async wfstart(data: any, localdata?: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            const _this: any = this;
            const post: Promise<any> = _this.save({}, false);
            post.then((response: any) => {
                const arg: any = response.data;
                // 准备工作流数据,填充未存库数据
                Object.assign(arg, this.getData());
                if (this.viewparams) {
                    Object.assign(arg, { viewparams: this.viewparams });
                }
                const result: Promise<any> = this.service.wfstart(
                    _this.WFStartAction,
                    JSON.parse(JSON.stringify(this.context)),
                    arg,
                    this.showBusyIndicator,
                    localdata
                );
                result
                    .then((response: any) => {
                        if (!response || response.status !== 200) {
                            if (response.data) {
                                this.$Notice.error({
                                    title: '',
                                    desc:
                                        (this.$t('app.formpage.workflow.starterror') as string) +
                                        ', ' +
                                        response.data.message,
                                });
                            }
                            return;
                        }
                        this.$Notice.info({ title: '', desc: this.$t('app.formpage.workflow.startsuccess') as string });
                        resolve(response);
                    })
                    .catch((response: any) => {
                        if (response && response.status && response.data) {
                            this.$Notice.error({
                                title: this.$t('app.commonWords.wrong') as string,
                                desc: response.data.message,
                            });
                            reject(response);
                            return;
                        }
                        if (!response || !response.status || !response.data) {
                            this.$Notice.error({
                                title: this.$t('app.commonWords.wrong') as string,
                                desc: this.$t('app.commonWords.sysException') as string,
                            });
                            reject(response);
                            return;
                        }
                        reject(response);
                    });
            }).catch((response: any) => {
                if (response && response.status && response.data) {
                    this.$Notice.error({
                        title: this.$t('app.commonWords.wrong') as string,
                        desc: response.data.message,
                    });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({
                        title: this.$t('app.commonWords.wrong') as string,
                        desc: this.$t('app.commonWords.sysException') as string,
                    });
                    reject(response);
                    return;
                }
                reject(response);
            });
        });
    }

    /**
     * 工作流提交
     *
     * @param {*} data
     * @param {*} [localdata]
     * @returns {Promise<any>}
     * @memberof EditFormControlBase
     */
    public async wfsubmit(data: any, localdata?: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            const _this: any = this;
            const arg: any = data[0];
            Object.assign(arg, { viewparams: this.viewparams });
            //     if (!arg.${ ctrl.getPSAppDataEntity().getCodeName() ? lower_case} || Object.is(arg.${ ctrl.getPSAppDataEntity().getCodeName() ? lower_case}, '')) {
            //     return;
            // }
            const post: Promise<any> = Object.is(arg.srfuf, '1')
                ? this.service.update(
                      this.updateAction,
                      JSON.parse(JSON.stringify(this.context)),
                      arg,
                      this.showBusyIndicator
                  )
                : this.service.add(
                      this.createAction,
                      JSON.parse(JSON.stringify(this.context)),
                      arg,
                      this.showBusyIndicator
                  );
            post.then((response: any) => {
                const arg: any = response.data;
                // 保存完成UI处理
                this.onFormLoad(arg, 'save');
                this.$emit('save', arg);
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: arg });
                });
                // 准备工作流数据,填充未存库数据
                Object.assign(arg, this.getData());
                // 准备提交参数
                if (this.viewparams) {
                    Object.assign(arg, { viewparams: this.viewparams });
                }
                // 强制补充srfwfmemo
                if (this.srfwfmemo) {
                    Object.assign(arg, { srfwfmemo: this.srfwfmemo });
                }
                const result: Promise<any> = this.service.wfsubmit(
                    _this.WFSubmitAction,
                    JSON.parse(JSON.stringify(this.context)),
                    arg,
                    this.showBusyIndicator,
                    localdata
                );
                result
                    .then((response: any) => {
                        if (!response || response.status !== 200) {
                            if (response.data) {
                                this.$Notice.error({
                                    title: '',
                                    desc:
                                        (this.$t('app.formpage.workflow.submiterror') as string) +
                                        ', ' +
                                        response.data.message,
                                });
                            }
                            return;
                        }
                        this.onFormLoad(arg, 'submit');
                        this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                        this.$Notice.info({
                            title: '',
                            desc: this.$t('app.formpage.workflow.submitsuccess') as string,
                        });
                        resolve(response);
                    })
                    .catch((response: any) => {
                        if (response && response.status && response.data) {
                            this.$Notice.error({
                                title: this.$t('app.commonWords.wrong') as string,
                                desc: response.data.message,
                            });
                            reject(response);
                            return;
                        }
                        if (!response || !response.status || !response.data) {
                            this.$Notice.error({
                                title: this.$t('app.commonWords.wrong') as string,
                                desc: this.$t('app.commonWords.sysException') as string,
                            });
                            reject(response);
                            return;
                        }
                        reject(response);
                    });
            }).catch((response: any) => {
                if (response && response.status && response.data) {
                    this.$Notice.error({
                        title: this.$t('app.commonWords.wrong') as string,
                        desc: response.data.message,
                    });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({
                        title: this.$t('app.commonWords.wrong') as string,
                        desc: this.$t('app.commonWords.sysException') as string,
                    });
                    reject(response);
                    return;
                }
                reject(response);
            });
        });
    }

    /**
     * 表单项更新
     *
     * @param {string} mode
     * @param {*} [data={}]
     * @param {string[]} updateDetails
     * @param {boolean} [showloading]
     * @returns {void}
     * @memberof EditFormControlBase
     */
    public updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): void {
        if (!mode || (mode && Object.is(mode, ''))) {
            return;
        }
        const arg: any = Object.assign(this.viewparams, data);
        const post: Promise<any> = this.service.frontLogic(mode, this.context, data, showloading);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({
                    title: this.$t('app.commonWords.wrong') as string,
                    desc: this.$t('app.formpage.updateerror') as string,
                });
                return;
            }
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data, 'updateFormItem');
            // this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
            });
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: this.$t('app.commonWords.wrong') as string, desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({
                    title: this.$t('app.commonWords.wrong') as string,
                    desc: this.$t('app.commonWords.sysException') as string,
                });
                return;
            }
        });
    }

    /**
     * 重置表单项值
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof EditFormControlBase
     */
    public resetFormData({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): void {}

    /**
     * 面板行为
     *
     * @param {string} [action] 调用的实体行为
     * @param {string} [emitAction] 抛出行为
     * @param {*} [data={}] 传入数据
     * @param {boolean} [showloading] 是否显示加载状态
     *
     * @memberof EditFormControlBase
     */
    public panelAction(action: string, emitAction: string, data: any = {}, showloading?: boolean): void {
        if (!action || (action && Object.is(action, ''))) {
            return;
        }
        const arg: any = { ...data };
        const formdata = this.getValues();
        Object.assign(arg, formdata);
        Object.assign(arg, this.viewparams);
        const post: Promise<any> = this.service.frontLogic(
            action,
            JSON.parse(JSON.stringify(this.context)),
            arg,
            showloading
        );
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
            const data = response.data;
            this.onFormLoad(data, emitAction);
            this.$emit(emitAction, data);
            this.$nextTick(() => {
                this.formState.next({ type: emitAction, data: data });
            });
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: this.$t('app.commonWords.wrong') as string, desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({
                    title: this.$t('app.commonWords.wrong') as string,
                    desc: this.$t('app.commonWords.sysException') as string,
                });
                return;
            }
        });
    }

    /**
     * 保存并退出
     *
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof FormControlBase
     */
    public saveAndExit(data: any[]): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let arg: any = {};
            if (data && data.length > 0) {
                Object.assign(arg, data[0]);
            }
            this.currentAction = 'saveAndExit';
            this.save([arg])
                .then((res) => {
                    if (res) {
                        this.closeView(res.data);
                    }
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    /**
     * 保存并新建
     *
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof FormControlBase
     */
    public saveAndNew(data: any[]): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let arg: any = {};
            if (data && data.length > 0) {
                Object.assign(arg, data[0]);
            }
            this.currentAction = 'saveAndNew';
            this.save([arg])
                .then((res: any) => {
                    this.ResetData(res);
                    this.loadDraft({});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    /**
     * 删除并退出
     *
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof FormControlBase
     */
    public removeAndExit(data: any[]): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let arg: any = {};
            if (data && data.length > 0) {
                Object.assign(arg, data[0]);
            }
            this.remove([arg])
                .then((res: any) => {
                    if (res) {
                        this.closeView(res.data);
                    }
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    /**
     * 关系界面数据保存完成
     *
     * @param {*} $event
     * @returns
     * @memberof FormControlBase
     */
    public drdatasaved($event: any) {
        const _this: any = this;
        _this.drcounter--;
        if (_this.drcounter > 0) {
            return;
        }
        _this.save(_this.drsaveopt, undefined, false).then((res: any) => {
            if (_this.saveState) {
                _this.saveState(res);
            }
            _this.drsaveopt = {};
            if (Object.is(_this.currentAction, 'saveAndNew')) {
                _this.ResetData(res);
                _this.loadDraft({});
            } else if (Object.is(_this.currentAction, 'saveAndExit')) {
                if (res) {
                    _this.closeView(res.data);
                }
            }
        });
    }

    /**
     * 向消息中中心发送数据变更指令
     *
     * @protected
     * @param {('update' | 'create' | 'remove')} type
     * @memberof EditFormControlBase
     */
    protected sendAccMessage(type: 'update' | 'create' | 'remove'): void {
        this.data.___localUpdateDate = new Date().getTime();
        this.$acc.send[type](this.data, this.appDeName.toUpperCase());
    }

    /**
     * 编辑器行为触发
     *
     * @param {*} arg
     * @memberof EditFormControlBase
     */
    public onFormItemActionClick(arg: any) {
        if (arg && arg instanceof Function) arg();
    }
}
