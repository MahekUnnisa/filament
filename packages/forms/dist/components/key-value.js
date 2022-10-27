function keyValueFormComponent({state}){return{state,rows:[],shouldUpdateRows:!0,init:function(){this.updateRows(),this.rows.length<=0&&this.addRow(),this.shouldUpdateRows=!0,this.$watch("state",()=>{if(!this.shouldUpdateRows){this.shouldUpdateRows=!0;return}this.updateRows()})},addRow:function(){this.rows.push({key:"",value:""}),this.updateState()},deleteRow:function(index){this.rows.splice(index,1),this.rows.length<=0&&this.addRow(),this.updateState(),this.shouldUpdateRows=!0},reorderRows:function(event){let rows=Alpine.raw(this.rows),reorderedRow=rows.splice(event.oldIndex,1)[0];rows.splice(event.newIndex,0,reorderedRow),this.rows=rows,this.updateState()},updateRows:function(){let rows=[];for(let[key,value]of Object.entries(this.state??{}))rows.push({key,value});this.rows=rows},updateState:function(){let state2={};this.rows.forEach(row=>{row.key===""||row.key===null||(state2[row.key]=row.value)}),this.shouldUpdateRows=!1,this.state=state2}}}export{keyValueFormComponent as default};