<template src="./jbinfo-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { JBInfoEditFormBase } from './jbinfo-form-base';
 

/**
 * form部件
 *
 * @export
 * @class JBInfoEditForm
 * @extends {JBInfoEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class JBInfoEditForm extends JBInfoEditFormBase {}
</script>
