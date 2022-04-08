<template src="./basis-main-info-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BasisMainInfoEditFormBase } from './basis-main-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class BasisMainInfoEditForm
 * @extends {BasisMainInfoEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BasisMainInfoEditForm extends BasisMainInfoEditFormBase {}
</script>
<style lang="less">
@import './basis-main-info-form.less';
</style>
