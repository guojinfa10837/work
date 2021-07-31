(function(){
    function convert_format(list){
        var result = [];
        for(var i=0;i<list.length;i++){
            if(list[i].name && !list[i].parent_ind){
                var nObj = {};
                nObj[list[i].name] = [];
                result.push(nObj)
            }
        }
        for(var i=0;i<list.length;i++){
            if(list[i].name && list[i].parent_ind){
                for(var j=0;j<result.length;j++){
                    if(result[j][list[i].parent_ind]){
                        result[j][list[i].parent_ind].push(list[i]);
                    }
                }
            }
        }
        return result;
    }
})()