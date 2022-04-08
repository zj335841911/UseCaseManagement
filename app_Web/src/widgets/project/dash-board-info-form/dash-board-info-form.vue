<template src="./dash-board-info-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashBoardInfoEditFormBase } from './dash-board-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashBoardInfoEditForm
 * @extends {DashBoardInfoEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashBoardInfoEditForm extends DashBoardInfoEditFormBase {}
</script>
<style lang="less">
@import './dash-board-info-form.less';
</style>
