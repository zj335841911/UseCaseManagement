<template src="./story-spec-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StorySpecEditFormBase } from './story-spec-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StorySpecEditForm
 * @extends {StorySpecEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StorySpecEditForm extends StorySpecEditFormBase {}
</script>
<style lang="less">
@import './story-spec-form.less';
</style>
