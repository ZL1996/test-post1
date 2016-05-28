function collect_same_elements(collection_a, object_b) {
  var result = [];
  var JD = false;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<object_b.value.length;j++){
       JD = is_Equal(collection_a[i].key,object_b.value[j])
       if(JD)
       result.push(collection_a[i].key);
    }
  }
  return result;
}

function is_Equal(a,b){
  if(a==b){
    return true;
  }
  if(a!=b){
    return false;
  }
}

module.exports = collect_same_elements;
