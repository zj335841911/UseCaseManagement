<template src="./tree-info-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeInfoEditFormBase } from './tree-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TreeInfoEditForm
 * @extends {TreeInfoEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TreeInfoEditForm extends TreeInfoEditFormBase {}
</script>
<style lang="less">
@import './tree-info-form.less';
</style>
