(function(){
    var modules={
        "panel-main-hush":    			{url:"$H/m/library/recruitment-all-data.html",Table:"hush-recruitment-record"},
        "panel-main-hush-form":         {url:"$H/m/library/recruitment-form.html",Table:"cleverlights-recruitment-record"},
        "panel-main-hush-eligible":     {url:"$H/m/library/recruitment-eligible-data.html",Table:"hush-recruitment-record",form_module:"panel-main-hush-eligible-form"},
        "panel-main-hush-eligible-form":{url:"$H/m/library/recruitment-eligible-form.html",Table:"hush-recruitment-record"},
        "panel-main-hush-non-eligible": {url:"$H/m/library/recruitment-non-eligible-data.html",Table:"hush-recruitment-record"},
    }
    //for(m in modules){$vm.module_list[m]=modules[m];}


    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
