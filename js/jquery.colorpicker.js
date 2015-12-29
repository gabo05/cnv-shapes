(function($){
    $.fn.extend({
        colorpicker: function(){
            return this.each(function(){
                
                //alert('color ini');
                
                $('head').append('<style id="styleProgressRed">.colorpicker-trRed > td > progress::-moz-progress-bar { background: rgba(127,0,0,1); } .colorpicker-trRed > td > progress::-webkit-progress-value { background: rgba(127,0,0,1); }</style>');
                $('head').append('<style id="styleProgressGreen">.colorpicker-trGreen > td > progress::-moz-progress-bar { background: rgba(0,127,0,1); } .colorpicker-trGreen > td > progress::-webkit-progress-value { background: rgba(0,127,0,1); }</style>');
                $('head').append('<style id="styleProgressBlue">.colorpicker-trBlue > td > progress::-moz-progress-bar { background: rgba(0,0,127,1); } .colorpicker-trBlue > td > progress::-webkit-progress-value { background: rgba(0,0,127,1); }</style>');
                $('head').append('<style id="styleProgressAlfa">.colorpicker-trAlfa > td > progress::-moz-progress-bar { background: rgba(0,0,0,1); } .colorpicker-trAlfa > td > progress::-webkit-progress-value { background: rgba(0,0,0,1); }</style>');
                
                var Color = function(){
                    this.red = 0;
                    this.green  = 0;
                    this.blue = 0;
                    this.alfa = 1;
                    
                    this.setRed = function(value){
                        this.red = value;
                    }
                    this.setGreen = function(value){
                        this.green = value;
                    }
                    this.setBlue = function(value){
                        this.blue = value;
                    }
                    this.setAlfa = function(value){
                        this.alfa = value/100;
                    }
                    this.getRed = function(){
                        return this.red;
                    }
                    this.getGreen = function(){
                        return this.green;
                    }
                    this.getBlue = function(){
                        return this.blue;
                    }
                    this.getAlfa = function(){
                        return this.alfa;
                    }
                    this.getRGBA = function(){
                        return 'rgba('+this.red+','+this.green+','+this.blue+','+this.alfa+')';
                    }
                }
                var selectedColor = new Color();
                //this.load(function(){
                var me = $(this);
                    id = $(this).attr('id');
                    
                    $(this).attr('data-color-selected','rgba(127,127,127,1)');
                
                    table = $('<table id="colorpicker-'+id+'" ></table>');
                    
                    var content = '<td><button class="colorpicker-color-decr">-</button></td><td class="colorpicker-progress"><progress max="256" value="127"></progress></td><td><button class="colorpicker-color-incr">+</button></td>';
                
                    table.append('<tr class="colorpicker-trRed" data-color="red">'+content+'<td><input type="text" id="colorpicker-value-red" class="colorpicker-text-value" value="127"></td></tr>');
                    
                    table.append('<tr class="colorpicker-trGreen" data-color="green">'+content+'<td><input type="text" id="colorpicker-value-green" class="colorpicker-text-value" value="127"></td></tr>');
                    
                    table.append('<tr class="colorpicker-trBlue" data-color="blue">'+content+'<td><input type="text" id="colorpicker-value-blue" class="colorpicker-text-value" value="127"></td></tr>');
                    
                    table.append('<tr class="colorpicker-trAlfa" data-color="alfa"><td><button class="colorpicker-color-decr">-</button></td><td class="colorpicker-progress"><progress max="100" value="100"></progress></td><td><button class="colorpicker-color-incr">+</button></td><td><input type="text" id="colorpicker-value-alfa" class="colorpicker-text-value" value="127"></td></tr>');
                
                    table.append('<tr><td colspan="3"><div class="colorpicker-demo" style="background-color:rgba(127,127,127,1)"></div></td></tr>');
                    
                    $(this).append(table);
                
                    //alert();
                
                    var increase;
                
                    $('.colorpicker-color-incr').mousedown(function(event){
                        
                        var src = event.target;
                        
                        color = $(src).parent().parent().attr('data-color');
                        
                        progress = $(src).parent().siblings('.colorpicker-progress').children('progress');
                        
                        increase = setInterval(function(){
                            act = parseInt(progress.attr('value'));
                            progress.attr('value',act+1);
                            
                            if(color=="red"){
                                selectedColor.setRed(act+1);
                                document.getElementById('colorpicker-value-red').value = act+1;
                                $('head').remove('#styleProgressRed');
                                $('#styleProgressRed').remove();
                                $('head').append('<style id="styleProgressRed">.colorpicker-trRed > td > progress::-moz-progress-bar { background: rgba('+selectedColor.getRed()+',0,0,1); } .colorpicker-trRed > td > progress::-webkit-progress-value { background: rgba('+selectedColor.getRed()+',0,0,1); }</style>');
                            }
                            if(color=="green"){
                                selectedColor.setGreen(act+1);
                                document.getElementById('colorpicker-value-green').value = act+1;
                                $('head').remove('#styleProgressGreen');
                                $('#styleProgressGreen').remove();
                                $('head').append('<style id="styleProgressGreen">.colorpicker-trGreen > td > progress::-moz-progress-bar { background: rgba(0,'+selectedColor.getGreen()+',0,1); } .colorpicker-trGreen > td > progress::-webkit-progress-value { background: rgba(0,'+selectedColor.getGreen()+',0,1); }</style>');
                            }
                            if(color=="blue"){
                                selectedColor.setBlue(act+1);
                                document.getElementById('colorpicker-value-blue').value = act+1;
                                $('head').remove('#styleProgressBlue');
                                $('#styleProgressBlue').remove();
                                $('head').append('<style id="styleProgressBlue">.colorpicker-trBlue > td > progress::-moz-progress-bar { background: rgba(0,0,'+selectedColor.getBlue()+',1); } .colorpicker-trBlue > td > progress::-webkit-progress-value { background: rgba(0,0,'+selectedColor.getBlue()+',1); }</style>');
                            }
                            if(color=="alfa"){
                                selectedColor.setAlfa(act+1);
                                document.getElementById('colorpicker-value-alfa').value = act+1;
                                $('head').remove('#styleProgressAlfa');
                                $('#styleProgressAlfa').remove();
                                $('head').append('<style id="styleProgressAlfa">.colorpicker-trAlfa > td > progress::-moz-progress-bar { background: rgba(0,0,0,'+selectedColor.getAlfa()+'); } .colorpicker-trAlfa > td > progress::-webkit-progress-value { background: rgba(0,0,0,'+selectedColor.getAlfa()+'); }</style>');
                            }
                            $('#colorpicker-'+id+' .colorpicker-demo').css('background',selectedColor.getRGBA());
                        },30);
                    });
                    $('.colorpicker-color-incr').mouseup(function(){
                       clearInterval(increase);
                       me.attr('data-color-selected',selectedColor.getRGBA());
                    });
                $('.colorpicker-color-decr').mousedown(function(event){
                        
                        var src = event.target;
                        
                        color = $(src).parent().parent().attr('data-color');
                        
                        progress = $(src).parent().siblings('.colorpicker-progress').children('progress');
                        
                        increase = setInterval(function(){
                            act = parseInt(progress.attr('value'));
                            progress.attr('value',act-1);
                            
                            if(color=="red"){
                                selectedColor.setRed(act-1);
                                document.getElementById('colorpicker-value-red').value = act-1;
                                $('head').remove('#styleProgressRed');
                                $('#styleProgressRed').remove();
                                $('head').append('<style id="styleProgressRed">.colorpicker-trRed > td > progress::-moz-progress-bar { background: rgba('+selectedColor.getRed()+',0,0,1); } .colorpicker-trRed > td > progress::-webkit-progress-value { background: rgba('+selectedColor.getRed()+',0,0,1); }</style>');
                            }
                            if(color=="green"){
                                selectedColor.setGreen(act-1);
                                document.getElementById('colorpicker-value-green').value = act-1;
                                $('head').remove('#styleProgressGreen');
                                $('#styleProgressGreen').remove();
                                $('head').append('<style id="styleProgressGreen">.colorpicker-trGreen > td > progress::-moz-progress-bar { background: rgba(0,'+selectedColor.getGreen()+',0,1); } .colorpicker-trGreen > td > progress::-webkit-progress-value { background: rgba(0,'+selectedColor.getGreen()+',0,1); }</style>');
                            }
                            if(color=="blue"){
                                selectedColor.setBlue(act-1);
                                document.getElementById('colorpicker-value-blue').value = act-1;
                                $('head').remove('#styleProgressBlue');
                                $('#styleProgressBlue').remove();
                                $('head').append('<style id="styleProgressBlue">.colorpicker-trBlue > td > progress::-moz-progress-bar { background: rgba(0,0,'+selectedColor.getBlue()+',1); } .colorpicker-trBlue > td > progress::-webkit-progress-value { background: rgba(0,0,'+selectedColor.getBlue()+',1); }</style>');
                            }
                            if(color=="alfa"){
                                selectedColor.setAlfa(act-1);
                                document.getElementById('colorpicker-value-alfa').value = act-1;
                                $('head').remove('#styleProgressAlfa');
                                $('#styleProgressAlfa').remove();
                                $('head').append('<style id="styleProgressAlfa">.colorpicker-trAlfa > td > progress::-moz-progress-bar { background: rgba(0,0,0,'+selectedColor.getAlfa()+'); } .colorpicker-trAlfa > td > progress::-webkit-progress-value { background: rgba(0,0,0,'+selectedColor.getAlfa()+'); }</style>');
                            }
                            $('#colorpicker-'+id+' .colorpicker-demo').css('background',selectedColor.getRGBA());
                        },30);
                    });
                    $('.colorpicker-color-decr').mouseup(function(){
                       clearInterval(increase);
                       me.attr('data-color-selected',selectedColor.getRGBA());
                    });
            });
        }
    });
})(jQuery)