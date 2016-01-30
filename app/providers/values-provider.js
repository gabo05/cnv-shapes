var valuesProvider = function(){
    this.values = {};
    this.values.fillColor= 'rgba(127,127,127,1)';
    this.values.lineColor= 'rgba(127,127,127,1)';
    this.values.fillAlpha = 1;
    this.values.lineAlpha = 1;
    this.values.lineWidth= 1;
    this.values.dashed= false;
    this.values.dashedWidth= 0;
    this.values.dashedSpacing= 0;
    
    this.$get = function(){
        var vals = this.values;
        
        return{
            setValue: function(key, val){
                vals[key] = val; 
            },
            getValue: function(key){
                return vals[key];
            }
        };
    }
}