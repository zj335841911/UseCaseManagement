<template src="./main-msg-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainMsgEditFormBase } from './main-msg-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainMsgEditForm
 * @extends {MainMsgEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainMsgEditForm extends MainMsgEditFormBase {}
</script>
