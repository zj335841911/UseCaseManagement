<template src="./zentao-appmenu.html" />
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import { ZentaoBase } from './zentao-appmenu-base';

/**
 * 应用菜单
 */
@Component({})
@VueLifeCycleProcessing()
export default class Zentao extends ZentaoBase { }
</script>
<style lang="less">
@import './zentao-appmenu.less';
</style>