<template src="./start-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StartEditFormBase } from './start-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StartEditForm
 * @extends {StartEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StartEditForm extends StartEditFormBase {}
</script>
<style lang="less">
@import './start-form.less';
</style>
