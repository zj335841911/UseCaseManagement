# 日报（新建）

日报移动端编辑视图（编辑）(IbzDailyDailyMobEditView)

{% plantuml %}

digraph IbzDailyDailyMobEditView {

label="日报（新建）";    

#rankdir=LR;

start [shape=circle,size="1,1",label="",style=filled, fillcolor=black]
end [shape=doublecircle,label=""]

own [shape=none, margin=0,size="6,6", label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">日报（新建）<BR/><BR/></TD>
</TR>
</TABLE>
>];

part [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">P</TD> 
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">
保存<BR/>
保存并新建<BR/>
保存并关闭<BR/>
删除<BR/>
开始流程<BR/>
当前流程步骤<BR/>
<BR/></TD>
</TR>
</TABLE>
>];


Save [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">保存<BR/><BR/></TD>
</TR>
</TABLE>
>];



SaveAndNew [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">保存并新建<BR/><BR/></TD>
</TR>
</TABLE>
>];



SaveAndExit [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">保存并关闭<BR/><BR/></TD>
</TR>
</TABLE>
>];



RemoveAndExit [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">删除<BR/><BR/></TD>
</TR>
</TABLE>
>];



SaveAndStart [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">开始流程<BR/><BR/></TD>
</TR>
</TABLE>
>];



ViewWFStep [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">当前流程步骤<BR/><BR/></TD>
</TR>
</TABLE>
>];



start -> own ;
own -> part [style=dashed,arrowhead=diamond,label="<包含>"] ;


part -> Save [style=dashed,label=<保存>];

Save -> end ;



part -> SaveAndNew [style=dashed,label=<保存并新建>];

SaveAndNew -> end ;



part -> SaveAndExit [style=dashed,label=<保存并关闭>];

SaveAndExit -> end ;



part -> RemoveAndExit [style=dashed,label=<删除>];

RemoveAndExit -> end ;



part -> SaveAndStart [style=dashed,label=<开始流程>];

SaveAndStart -> end ;



part -> ViewWFStep [style=dashed,label=<当前流程步骤>];

ViewWFStep -> end ;



}

{% endplantuml %}

