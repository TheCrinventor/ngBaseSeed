angular.module('videoplayer',[])

.directive('videoplayer',function(){
   return {
       restrict:'A',
       link: function(scope,el,atts){
           el.fileupload({
            url: 'https://upload.wistia.com/',
            sequentialUploads: true,
            type:'POST',
            add: function (e, data) {
            }
        });
           
       }
       
   };
       
});