var valuesProvider = function(){
    
    var valuesFact = {
            values: {},
            setValue: function(key, val){
                this.values[key] = val; 
            },
            getValue: function(key){
                return this.values[key];
            },
            isTouchDevice: function(){
               return "ontouchstart" in window || navigator.msMaxTouchPoints;
            },
            getAll: function(){
                return this.values;
            },
            setAll: function(values){
                this.values = values;
            }
        };
    
    
    valuesFact.values.fillColor= 'rgba(127,127,127,1)';
    valuesFact.values.lineColor= 'rgba(127,127,127,1)';
    valuesFact.values.fillAlpha = 1;
    valuesFact.values.lineAlpha = 1;
    valuesFact.values.lineWidth= 1;
    valuesFact.values.dashed= false;
    valuesFact.values.dashedWidth= 0;
    valuesFact.values.dashedSpacing= 0;
    
    return valuesFact;
    /*this.$get = function(){
        var vals = this.values;
        self = this;
        return;
    };*/
}