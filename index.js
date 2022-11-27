function receivesAFunction(callback){
   callback()
}

// receivesAFunction(function callback(){})

function returnsANamedFunction(){
  return function calc(x, y)
  {return x + y}
}

function returnsAnAnonymousFunction(){
   return function(x, y)
   {return x + y}
}